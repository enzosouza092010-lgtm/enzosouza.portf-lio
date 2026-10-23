import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { CopyEmail } from "./CopyEmail";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contato" title="Contato">
      <Reveal>
        <p className="max-w-xl text-lg leading-relaxed text-suave">
          Se quiser conversar sobre uma oportunidade de Jovem Aprendiz, envie uma mensagem.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-8 inline-block break-all border-b border-ouro/50 pb-1 font-display text-3xl transition-colors hover:border-ouro hover:text-ouro md:text-5xl"
        >
          {site.email}
        </a>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded bg-ouro px-6 py-3 text-sm font-medium text-fundo transition-opacity hover:opacity-90"
          >
            Enviar e-mail
          </a>
          <CopyEmail email={site.email} />
        </div>
      </Reveal>
    </Section>
  );
}
