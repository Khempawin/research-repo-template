export interface NavItem {
  href: string;
  label: string;
}

export interface Highlight {
  label: string;
  value: string;
  detail: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  summary: string;
  primaryAction: NavItem;
  secondaryAction: NavItem;
}

export interface AbstractContent {
  label: string;
  title: string;
  body: string;
}

export interface MethodsContent {
  label: string;
  title: string;
  body: string;
  steps: string[];
}

export interface ExperimentsContent {
  label: string;
  title: string;
  highlights: Highlight[];
}

export interface CitationContent {
  label: string;
  title: string;
  body: string;
  bibtex: string;
}

