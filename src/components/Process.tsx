import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { processSteps } from "@/data/site";

export function Process() {
  return (
    <Section id="processo" title="Como desenvolvo meus projetos">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-suave">
          Trabalho com o método IDEAL, que organiza o pedido de ajuda à inteligência artificial em
          cinco etapas e mantém cada entrega sob a minha revisão.
        </p>
      </Reveal>
      <ol className="mt-12 grid gap-8 md:grid-cols-5">
        {processSteps.map((step, i) => (
          <li key={step.letter}>
            <Reveal delay={i * 180}>
              <div className="rule-draw h-px bg-ouro/60" aria-hidden="true" />
              <span className="letra mt-4 block font-display text-5xl" aria-hidden="true">
                {step.letter}
              </span>
              <h3 className="mt-2 font-medium">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-suave">{step.text}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
