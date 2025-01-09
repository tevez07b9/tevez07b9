import { projects } from "./projects";
import ProjectCard from "./project-card";

export default async function ProjectsPage() {
  return (
    <div className="min-h-screen pt-10 md:pt-20">
      <section>
        <h1 className="font-bold text-3xl font-paytone mb-5">Projects</h1>
        <div className="flex flex-col space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
