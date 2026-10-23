import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-linha py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-sm text-suave">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a href="#inicio" className="hover:text-ouro">
          Voltar ao topo
        </a>
      </div>
    </footer>
  );
}
