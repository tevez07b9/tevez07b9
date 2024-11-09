import { GitHubIcon } from "@/components/icons";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projects";

export default async function ProjectsPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-20">
      <section>
        <h1 className="font-bold text-3xl font-paytone mb-5">Projects</h1>
        <div className="flex flex-col space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="bg-charcoal rounded-xl p-6">
              <div className="flex flex-col md:flex-row space-y-8 md:space-x-8">
                <Image
                  alt={project.name}
                  className="rounded-xl object-contain"
                  src={project.previewImage}
                  width={400}
                  height={200}
                  priority
                />

                <div className="flex flex-col space-y-6 md:space-y-2">
                  <h2 className="font-bold text-3xl font-paytone">
                    {project.name}
                  </h2>
                  <p className="text-base flex-grow">{project.description}</p>
                  <div className="flex items-center gap-4">
                    <Link
                      className="bg-yellow hover:bg-yellow/70 rounded-full py-1 px-3 text-black"
                      href={project.previewLink}
                      target="_blank"
                    >
                      View
                    </Link>
                    <Link
                      className="bg-cream hover:bg-cream/70 rounded-full flex items-center space-x-2 py-1 px-3 text-black"
                      href={project.githubLink}
                      target="_blank"
                    >
                      <GitHubIcon />
                      <p>Github repo</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* {allBlogs
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
          ))} */}
      </section>
    </div>
  );
}
