import type { Course, NavItem, SkillItem } from "@/types";

/** TEXTOS DO SITE (edite aqui). Não inclua nada que você não possa comprovar. */

export const site = {
  name: "Enzo Souza",
  email: "enzosouza09.2010@gmail.com",
  hero: "Candidato a Jovem Aprendiz. Reúno aqui os cursos que concluí e os projetos práticos que estou desenvolvendo.",
  about: [
    "Sou candidato a Jovem Aprendiz e tenho interesse nas áreas de Administração, Informática e Tecnologia.",
    "Este portfólio reúne projetos práticos em que organizo dados, trabalho com relatórios e exploro automações com apoio de inteligência artificial.",
    "Meu objetivo é aprender na prática e contribuir com a rotina de uma equipe administrativa.",
  ],
};

export const nav: NavItem[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Cursos", href: "#cursos" },
  { label: "Contato", href: "#contato" },
];

export const skillGroups: { title: string; items: SkillItem[] }[] = [
  {
    title: "Dados e planilhas",
    items: [
      { name: "Excel", evidence: "Curso Excel Básico (SENAI) e projeto de controle financeiro." },
      { name: "Power BI", evidence: "Trilha de preparação e visualização de dados (Microsoft Learn). Projeto em andamento." },
      { name: "Análise de dados", evidence: "Trilha de introdução à análise de dados (Microsoft Learn)." },
    ],
  },
  {
    title: "Rotina de escritório",
    items: [
      { name: "Microsoft 365", evidence: "Curso da Enap: Outlook, OneNote, Teams, apresentações, documentos e mala direta." },
    ],
  },
  {
    title: "Automação, IA e web",
    items: [
      { name: "Agentes de IA", evidence: "Imersão Agentes de IA na Prática (Daxus)." },
      { name: "n8n e Claude", evidence: "Base do projeto Assistente Administrativo Inteligente, em desenvolvimento." },
      { name: "Next.js", evidence: "Usado na construção deste portfólio." },
    ],
  },
];

export const processSteps: { letter: string; name: string; text: string }[] = [
  { letter: "I", name: "Intenção", text: "Defino o objetivo do projeto e o resultado esperado." },
  { letter: "D", name: "Detalhes", text: "Descrevo contexto, requisitos e restrições com clareza." },
  { letter: "E", name: "Exemplos", text: "Reúno exemplos e referências para orientar o trabalho." },
  { letter: "A", name: "Ação", text: "Peço o desenvolvimento em etapas e acompanho cada uma." },
  { letter: "L", name: "Limites", text: "Estabeleço o que não deve ser feito e valido antes de avançar." },
];

/**
 * CURSOS E CERTIFICAÇÕES (edite aqui). Do mais recente para o mais antigo.
 * Informe apenas o que consta no certificado.
 */
export const courses: Course[] = [
  {
    title: "Otimização de trabalho com o Microsoft 365",
    institution: "Enap",
    period: "10/10/2026 a 13/10/2026",
    hours: 5,
    note: "Outlook, OneNote, Teams, apresentações, documentos e mala direta",
  },
  {
    title: "Imersão Agentes de IA na Prática",
    institution: "Daxus",
    period: "10/10/2026",
    hours: 8,
    note: "Certificado de participação",
  },
  {
    title: "Preparar e visualizar dados com o Microsoft Power BI",
    institution: "Microsoft Learn",
    period: "09/10/2026",
    note: "Trilha concluída",
  },
  {
    title: "Introdução à análise de dados da Microsoft",
    institution: "Microsoft Learn",
    period: "09/10/2026",
    note: "Trilha concluída",
  },
  {
    title: "Excel Básico",
    institution: "SENAI São Paulo",
    period: "04/09/2026 a 13/09/2026",
    hours: 20,
    note: "Fórmulas e funções básicas, formatação condicional e gráficos",
  },
];
