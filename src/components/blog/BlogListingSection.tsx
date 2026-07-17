"use client";

import { useState, useCallback } from "react";
import { toast } from "sonner";
import { Loader2, ChevronDown } from "lucide-react";
import { BlogListingCard } from "./BlogListingCard";
import { getBlogs } from "@/lib/api";
import type { ApiBlog } from "@/types";

const PAGE_SIZE = 9;

function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl overflow-hidden animate-pulse">
      <div className="aspect-[16/10] bg-gray-200" />
      <div className="p-5 lg:p-6 flex flex-col gap-3">
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded-lg w-full" />
          <div className="h-5 bg-gray-200 rounded-lg w-3/4" />
        </div>
        <div className="space-y-1.5">
          <div className="h-4 bg-gray-100 rounded-lg" />
          <div className="h-4 bg-gray-100 rounded-lg" />
          <div className="h-4 bg-gray-100 rounded-lg w-2/3" />
        </div>
        <div className="h-5 bg-primary/20 rounded-lg w-24 mt-1" />
      </div>
    </div>
  );
}

export function BlogListingSection({
  initialPosts,
  initialHasMore,
}: {
  initialPosts: ApiBlog[];
  initialHasMore: boolean;
}) {
  const [posts, setPosts] = useState<ApiBlog[]>(initialPosts);
  const [nextPage, setNextPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialHasMore);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getBlogs(nextPage);
      const newPosts = res.data?.blogs ?? [];
      setPosts((prev) => [...prev, ...newPosts]);
      setNextPage((p) => p + 1);
      if (newPosts.length < PAGE_SIZE) setHasMore(false);
    } catch {
      toast.error("Failed to load more posts. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [nextPage]);

  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-lg font-semibold text-dark mb-2">
          No blog posts yet
        </p>
        <p className="text-sm text-muted">
          Check back soon for helpful guides and tips.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {posts.map((blog, i) => (
          <BlogListingCard key={blog._id} blog={blog} priority={i < 3} />
        ))}
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <BlogCardSkeleton key={`skel-${i}`} />
          ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pb-4">
          {loading ? (
            <div className="flex items-center gap-2.5 px-8 py-4 text-sm text-muted">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Loading more posts…</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={loadMore}
              className="flex items-center gap-2 px-8 py-4 bg-dark text-white rounded-2xl text-sm font-semibold hover:bg-dark/90 active:scale-95 transition-all duration-150"
            >
              Load More
              <ChevronDown className="w-4 h-4" strokeWidth={2} />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
