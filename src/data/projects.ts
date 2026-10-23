import type { Project } from "@/types";

/**
 * DADOS DOS PROJETOS (edite aqui)
 *
 * Para publicar um projeto depois:
 *   1. troque status para "concluido"
 *   2. preencha url com o link real (opcional)
 *   3. coloque a imagem em public/projetos/ e preencha image (opcional)
 *
 * Projetos "concluido" aparecem em destaque. O botão "Ver projeto" só
 * aparece quando status é "concluido" E url está preenchida.
 */
export const projects: Project[] = [
  {
    id: "excel",
    title: "Projeto de Análise e Organização de Dados com Excel",
    description:
      "Controle financeiro de uma empresa fictícia de assessoria administrativa. A planilha organiza contas a receber, contas a pagar, baixas e fluxo de caixa em abas separadas.",
    technologies: ["Excel"],
    status: "concluido",
    highlights: [
      "7 abas: Contas a Receber, Contas a Pagar, Fluxo de Caixa, Cadastros, Base de Dados, Baixas e Dicionário",
      "Tabelas estruturadas, mais de 11 mil células com fórmulas e formatação condicional",
      "Aba de instruções que explica como preencher cada coluna",
      "Dados fictícios, criados para demonstração",
    ],
  },
  {
    id: "power-bi",
    title: "Relatório Interativo de Análise Empresarial",
    description:
      "Relatório interativo para analisar dados empresariais por meio de tabelas e gráficos.",
    technologies: ["Power BI"],
    status: "em-preparacao",
  },
  {
    id: "assistente",
    title: "Assistente Administrativo Inteligente",
    description:
      "Assistente para apoiar rotinas administrativas, combinando inteligência artificial, automação e planilhas.",
    technologies: ["Claude", "n8n", "Excel"],
    status: "em-preparacao",
  },
];
