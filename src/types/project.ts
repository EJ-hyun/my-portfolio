export interface Project {
  id: number;
  number: string;
  title: string;
  subtitle?: string;
  role: string;
  description: string;
  period?: string;
  contribute?: string;
  deploy?: string;
  tags: string[];
  images: string[];
  bgColor: string;
  textColor: string;
  link?: string;
  github?: string;
}
