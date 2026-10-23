import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="rule-draw relative h-px bg-linha" aria-hidden="true">
            <span className="absolute left-0 top-0 h-px w-16 bg-ouro" />
          </div>
          <h2 id={`${id}-titulo`} className="mt-6 font-display text-4xl md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
