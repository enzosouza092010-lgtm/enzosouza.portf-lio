import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const done = projects.filter((p) => p.status === "concluido");
  const pending = projects.filter((p) => p.status !== "concluido");

  return (
    <Section id="projetos" title="Projetos em destaque">
      <div className="space-y-6">
        {done.map((project) => (
          <Reveal key={project.id}>
            <ProjectCard project={project} featured />
          </Reveal>
        ))}
        {pending.length > 0 && (
          <div className={`grid gap-6 ${pending.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
            {pending.map((project, i) => (
              <Reveal key={project.id} delay={i * 130} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
