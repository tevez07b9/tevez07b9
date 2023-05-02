import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import { allBlogs } from "contentlayer/generated";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const { title, publishedAt: publishedTime, summary: description } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const tweets = [];

  return (
    <div className="min-h-screen py-10 md:py-20">
      <section>
        <script type="application/ld+json">
          {JSON.stringify(post.structuredData)}
        </script>
        <h1 className="font-extrabold text-center text-3xl md:text-6xl font-outfit">
          {post.title}
        </h1>
        <div className="flex justify-center items-center space-x-4 mt-6 mb-10 md:mb-20 text-sm">
          <p>Talmeez Ahmed</p>
          <div className="w-[2px] h-[20px] bg-neutral-700 rounded-md"></div>
          <div className="tracking-tighter">
            <span className="mr-2">Published</span>
            {post.publishedAt}
          </div>
          <div className="w-[2px] h-[20px] bg-neutral-700 rounded-md"></div>
          <p>10min read</p>
          <div className="h-[0.2em] bg-neutral-800 mx-2" />
        </div>
        <div className="max-w-full px-2 flex justify-center">
          <Mdx code={post.body.code} />
        </div>
      </section>
    </div>
  );
}
