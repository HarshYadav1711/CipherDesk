export type ArticleCategory =
  | "Web Security"
  | "AppSec"
  | "Identity"
  | "Cloud"
  | "Secure Coding"
  | "Threat Modelling";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  publishedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
}

export interface Topic {
  slug: string;
  name: ArticleCategory;
  description: string;
}

export interface LearningTrack {
  slug: string;
  order: number;
  title: string;
  description: string;
  level: "Foundation" | "Intermediate" | "Advanced";
}
