export type ProjectStatus = "em-preparacao" | "concluido";

export interface ProjectImage {
  /** Caminho dentro de /public, por exemplo "/projetos/excel.png" */
  src: string;
  /** Texto alternativo que descreve a imagem */
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  /** Pontos concretos do projeto, exibidos em lista (opcional) */
  highlights?: string[];
  image?: ProjectImage;
  /** Só é exibido quando status === "concluido" */
  url?: string;
}

export interface Course {
  title: string;
  institution: string;
  /** Texto livre, como aparece no certificado. Ex.: "04/09/2026 a 13/09/2026" */
  period: string;
  /** Carga horária em horas, quando o certificado informa */
  hours?: number;
  note?: string;
}

export interface SkillItem {
  name: string;
  /** De onde vem a habilidade (curso, projeto) */
  evidence: string;
}

export interface NavItem {
  label: string;
  href: string;
}
