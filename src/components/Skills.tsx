import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <Section id="habilidades" title="Habilidades técnicas">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 120}>
            <h3 className="font-display text-2xl">{group.title}</h3>
            <ul className="mt-5 divide-y divide-linha border-t border-linha">
              {group.items.map((item) => (
                <li key={item.name} className="py-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-suave">{item.evidence}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
