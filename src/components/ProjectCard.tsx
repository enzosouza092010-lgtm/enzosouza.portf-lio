import Image from "next/image";
import type { Project } from "@/types";

function Status({ status }: { status: Project["status"] }) {
  const done = status === "concluido";
  return (
    <p className="flex w-fit items-center gap-2 text-sm text-suave">
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full bg-ouro ${done ? "" : "pulsar"}`}
      />
      {done ? "Concluído" : "Apresentação em preparação"}
    </p>
  );
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const { title, description, technologies, status, image, url, highlights } = project;
  const canLink = status === "concluido" && Boolean(url);

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-lg border border-linha bg-painel transition-colors duration-300 before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-0.5 before:origin-top before:scale-y-0 before:bg-ouro before:transition-transform before:duration-500 hover:border-ouro/40 hover:before:scale-y-100 motion-reduce:transition-none motion-reduce:before:transition-none ${
        featured ? "grid md:grid-cols-[1fr_1.1fr]" : "flex flex-col"
      }`}
    >
      <div
        className={`relative bg-fundo ${
          featured ? "min-h-56 border-b border-linha md:border-b-0 md:border-r" : "aspect-[16/9] border-b border-linha"
        }`}
      >
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="listras absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-suave">
            Captura de tela em preparação
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-6 md:p-8" : "p-6"}`}>
        <Status status={status} />
        <h3 className={`mt-4 font-display leading-tight ${featured ? "text-3xl" : "text-2xl"}`}>{title}</h3>
        <p className="mt-3 leading-relaxed text-suave">{description}</p>

        {highlights && highlights.length > 0 && (
          <ul className="mt-5 divide-y divide-linha border-y border-linha text-sm text-suave">
            {highlights.map((h) => (
              <li key={h} className="py-2.5 leading-relaxed">
                {h}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologias utilizadas">
          {technologies.map((t) => (
            <li key={t} className="rounded bg-fundo px-2.5 py-1 text-xs text-suave">
              {t}
            </li>
          ))}
        </ul>

        {canLink && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-fit rounded border border-ouro px-4 py-2 text-sm text-ouro transition-colors hover:bg-ouro hover:text-fundo"
          >
            Ver projeto
          </a>
        )}
      </div>
    </article>
  );
}
