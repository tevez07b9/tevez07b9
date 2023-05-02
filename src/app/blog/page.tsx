import type { Metadata } from "next";
import Link from "next/link";
import { allBlogs } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-20">
      <section>
        <h1 className="font-bold text-3xl font-paytone mb-5">Blogs</h1>
        {allBlogs
          .sort((a, b) => {
            if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-brand-pink text-sm">{post.publishedAt}</p>
                <p>{post.title}</p>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}
