import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";
import { courses } from "@/data/site";

const columns = "md:grid-cols-[11rem_1fr_11rem_4rem] md:gap-6";

export function Courses() {
  const withHours = courses.filter((c) => c.hours !== undefined);
  const totalHours = withHours.reduce((sum, c) => sum + (c.hours ?? 0), 0);

  return (
    <Section id="cursos" title="Cursos e certificações">
      {courses.length === 0 ? (
        <p className="max-w-xl rounded-lg border border-dashed border-linha p-6 text-suave">
          Cursos e certificados em atualização.
        </p>
      ) : (
        <div>
          <div
            aria-hidden="true"
            className={`hidden border-b border-ouro/60 pb-3 text-sm text-suave md:grid ${columns}`}
          >
            <span>Período</span>
            <span>Curso</span>
            <span>Instituição</span>
            <span className="text-right">Carga</span>
          </div>

          <ul>
            {courses.map((c, i) => (
              <li key={`${c.title}-${c.institution}`}>
                <Reveal delay={i * 90} className="relative">
                  <div className={`grid gap-1 py-5 ${columns}`}>
                    <p className="text-sm text-suave">
                      <span className="sr-only">Período: </span>
                      {c.period}
                    </p>
                    <div>
                      <h3 className="font-medium">{c.title}</h3>
                      {c.note && <p className="mt-1 text-sm leading-relaxed text-suave">{c.note}</p>}
                    </div>
                    <p className="text-sm text-suave">
                      <span className="sr-only">Instituição: </span>
                      {c.institution}
                    </p>
                    <p className="text-sm text-suave md:text-right">
                      {c.hours !== undefined ? (
                        `${c.hours} h`
                      ) : (
                        <>
                          <span aria-hidden="true">-</span>
                          <span className="sr-only">Carga horária não informada</span>
                        </>
                      )}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="rule-draw absolute inset-x-0 bottom-0 h-px bg-linha"
                  />
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={200} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 pt-6">
            <p className="text-sm text-suave">
              Total das cargas horárias informadas ({withHours.length} de {courses.length} certificados)
            </p>
            <p className="font-display text-4xl text-ouro">
              <CountUp value={totalHours} suffix=" h" />
            </p>
          </Reveal>
        </div>
      )}
    </Section>
  );
}
