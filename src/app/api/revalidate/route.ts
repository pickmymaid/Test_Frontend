import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { createHash, timingSafeEqual } from "node:crypto";
import { getMaid } from "@/lib/api";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Hashing both sides first normalizes them to equal-length buffers, so the
// timing-safe compare doesn't need a length check (which would itself leak
// the secret's length) and never throws on mismatched input lengths.
function secretMatches(provided: string, expected: string): boolean {
  const providedHash = createHash("sha256").update(provided).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(providedHash, expectedHash);
}

export async function POST(req: NextRequest) {
  try {
    const { id, secret } = await req.json();
    const expectedSecret = process.env.REVALIDATE_SECRET;

    if (
      !expectedSecret ||
      typeof secret !== "string" ||
      !secretMatches(secret, expectedSecret)
    ) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    if (!id) {
      return NextResponse.json({ message: "Missing id" }, { status: 400 });
    }

    const maid = (await getMaid(String(id))).data.jobApplication;
    const slug = slugify(
      `${maid.name ?? ""} ${maid.option ?? ""} ${maid.nationality ?? ""}`
    );

    revalidatePath(`/maid/${id}/${slug}`);

    // The detail page above is its own cache entry, but the search/listing
    // page and the homepage's featured section each cache their own
    // findMaids/getFeaturedJobs fetch (tagged 'maids') independently — an
    // edit needs to purge those too or they'd keep serving stale maid data
    // until their own TTL (up to 1h) elapses.
    // { expire: 0 } forces an immediate purge — a named profile (e.g. "max")
    // would instead schedule a soft/background revalidation, which isn't
    // what we want for an admin edit that needs to show up right away.
    revalidateTag("maids", { expire: 0 });
    revalidatePath("/search");
    revalidatePath("/");

    return NextResponse.json({
      revalidated: true,
      path: `/maid/${id}/${slug}`,
    });
  } catch {
    return NextResponse.json(
      { message: "Revalidation failed" },
      { status: 500 }
    );
  }
}
