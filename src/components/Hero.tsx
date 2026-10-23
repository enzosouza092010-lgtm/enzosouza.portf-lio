import { courses, site } from "@/data/site";
import { projects } from "@/data/projects";

export function Hero() {
  const done = projects.filter((p) => p.status === "concluido").length;
  const rows: [string, string][] = [
    ["Objetivo", "Vaga de Jovem Aprendiz"],
    ["Áreas de interesse", "Administração, Informática e Tecnologia"],
    ["Projetos", `${projects.length}, sendo ${done} concluído${done === 1 ? "" : "s"}`],
    ["Certificados", String(courses.length)],
  ];

  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl gap-16 px-6 pb-24 pt-16 md:pb-32 md:pt-28 lg:grid-cols-[1.15fr_1fr] lg:items-end"
    >
      <div>
        <div className="tracar mb-8 h-px w-16 bg-ouro" aria-hidden="true" />
        <h1 className="font-display text-7xl leading-[0.95] md:text-8xl lg:text-9xl">
          <span className="mascara">
            <span style={{ animationDelay: "150ms" }}>Enzo</span>
          </span>
          <span className="mascara">
            <span style={{ animationDelay: "280ms" }}>Souza</span>
          </span>
        </h1>
        <p
          className="aparece mt-8 max-w-md text-lg leading-relaxed text-suave"
          style={{ animationDelay: "600ms" }}
        >
          {site.hero}
        </p>
        <div className="aparece mt-10 flex flex-wrap gap-4" style={{ animationDelay: "720ms" }}>
          <a
            href="#projetos"
            className="rounded bg-ouro px-6 py-3 text-sm font-medium text-fundo transition-opacity hover:opacity-90"
          >
            Ver projetos
          </a>
          <a
            href="#contato"
            className="rounded border border-linha px-6 py-3 text-sm transition-colors hover:border-ouro hover:text-ouro"
          >
            Entrar em contato
          </a>
        </div>
      </div>

      <dl>
        {rows.map(([label, value], i) => (
          <div
            key={label}
            className="relative flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-4"
          >
            <dt className="aparece text-sm text-suave" style={{ animationDelay: `${500 + i * 120}ms` }}>
              {label}
            </dt>
            <dd className="aparece text-right" style={{ animationDelay: `${560 + i * 120}ms` }}>
              {value}
            </dd>
            <span
              aria-hidden="true"
              className="tracar absolute inset-x-0 bottom-0 h-px bg-linha"
              style={{ animationDelay: `${450 + i * 120}ms` }}
            />
          </div>
        ))}
      </dl>
    </section>
  );
}
