"use client";

import { useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "ok" | "erro">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("ok");
    } catch {
      setState("erro");
    }
    setTimeout(() => setState("idle"), 2400);
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="rounded border border-linha px-6 py-3 text-sm transition-colors hover:border-ouro hover:text-ouro"
      >
        Copiar e-mail
      </button>
      <span role="status" aria-live="polite" className="text-sm text-suave">
        {state === "ok" && "E-mail copiado."}
        {state === "erro" && "Não foi possível copiar. Selecione o e-mail e copie manualmente."}
      </span>
    </>
  );
}
