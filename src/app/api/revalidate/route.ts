import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { getMaid } from "@/lib/api";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function POST(req: NextRequest) {
  try {
    const { id, secret } = await req.json();

    if (!secret || secret !== process.env.REVALIDATE_SECRET) {
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
