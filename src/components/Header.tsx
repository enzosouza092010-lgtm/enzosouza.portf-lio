"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["inicio", ...nav.map((n) => n.href.slice(1))];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id === "inicio" ? "" : e.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-fundo/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="font-display text-xl">
          {site.name}
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm text-suave">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative pb-1 transition-colors hover:text-ouro ${isActive ? "text-ouro" : ""}`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-ouro transition-transform duration-300 motion-reduce:transition-none ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded border border-linha px-3 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar menu" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal no celular" className="border-t border-linha md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 text-suave hover:text-ouro"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
