import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

export function About() {
  const [lead, ...rest] = site.about;
  return (
    <Section id="sobre" title="Sobre mim">
      <Reveal>
        <p className="max-w-3xl font-display text-3xl leading-snug md:text-4xl">{lead}</p>
      </Reveal>
      <Reveal delay={150} className="mt-10 grid max-w-3xl gap-6 text-lg leading-relaxed text-suave md:grid-cols-2 md:gap-10">
        {rest.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
    </Section>
  );
}
