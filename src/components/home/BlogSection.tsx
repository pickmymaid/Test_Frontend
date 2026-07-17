import Link from "next/link";
import { ChevronsRight } from "lucide-react";
import { BlogCard } from "@/components/ui/BlogCard";
import { SplitButton } from "../ui/SplitButton";
import { getBlogs } from "@/lib/api";

const ASSET_BASE = "https://assets.pickmymaid.com";

function thumbnailSrc(thumbnail: string): string {
  if (!thumbnail) return "/og-default.jpg";
  if (thumbnail.startsWith("http")) return thumbnail;
  return `${ASSET_BASE}/${thumbnail}`;
}

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-AE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

export async function BlogSection() {
  let posts: { image: string; date: string; title: string; href: string }[] = [];

  try {
    const res = await getBlogs(1);
    posts = (res.data?.blogs ?? []).slice(0, 3).map((blog) => ({
      image: thumbnailSrc(blog.thumbnail),
      date: formatDate(blog.editedAt),
      title: blog.title,
      href: `/blog/${blog.slug}`,
    }));
  } catch {
    // silent fail — section won't render
  }

  if (posts.length === 0) return null;

  return (
    <section
      className="py-[60px] lg:py-20 bg-[#fafafa]"
      aria-label="Latest Blogs"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Mobile layout */}
        <div className="flex flex-col gap-10 lg:hidden">
          <div className="flex flex-col gap-6 items-center text-center">
            <div className="flex items-center gap-2 text-dark/80 text-xs font-medium">
              <ChevronsRight className="w-4 h-4" />
              <span>Latest Blogs</span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-dark leading-tight tracking-[-0.25px]">
                Your Guide to Finding the Perfect Maid
              </h2>
              <p className="text-sm text-dark/80 leading-relaxed">
                Find expert advice, essential tips, and important updates for
                hiring and managing a successful domestic helper in your home.
              </p>
            </div>
            <div className="w-max">
              <SplitButton label="Explore More" href="/blog" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {posts.map((post) => (
              <BlogCard key={post.href} {...post} />
            ))}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex lg:flex-col lg:gap-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-muted text-xs font-medium">
            <ChevronsRight className="w-4 h-4" />
            <span>Latest Blogs</span>
          </div>

          {/* Split header: heading left, description + button right */}
          <div className="flex items-start justify-between gap-16">
            <h2 className="text-5xl font-bold text-dark leading-[62px] tracking-[-1px] max-w-[480px]">
              Your Guide to Finding the Perfect Maid
            </h2>
            <div className="flex flex-col gap-6 max-w-[600px] pt-2">
              <p className="text-xl text-dark/80 leading-relaxed">
                Find expert advice, essential tips, and important updates for
                hiring and managing a successful domestic helper in your home.
              </p>
              <div className="w-max">
                <SplitButton label="Explore More" href="/blog" />
              </div>
            </div>
          </div>

          {/* 3-column card grid */}
          <div className="grid grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.href} {...post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
