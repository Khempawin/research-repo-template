import type {
  AbstractContent,
  CitationContent,
  ExperimentsContent,
  HeroContent,
  MethodsContent,
  NavItem,
} from "../interfaces/research-page";

export const navItems: NavItem[] = [
  { href: "#abstract", label: "Abstract" },
  { href: "#methods", label: "Methods" },
  { href: "#experiments", label: "Experiments" },
  { href: "#cite", label: "Cite" },
];

export const heroContent: HeroContent = {
  eyebrow: "Conference 2026 · Computer Science Research",
  title: "Research Project Title",
  summary:
    "A reusable project website for presenting a paper, method overview, experiment highlights, release links, and citation metadata from a GitHub Pages deployment.",
  primaryAction: { href: "#abstract", label: "Read Abstract" },
  secondaryAction: { href: "#cite", label: "BibTeX" },
};

export const abstractContent: AbstractContent = {
  label: "Abstract",
  title: "Problem, approach, and main result in one place.",
  body: "This placeholder abstract summarizes the research contribution. Replace it with a compact description of the problem setting, the key technical idea, the evaluation protocol, and the most important empirical finding. The website is intentionally static so it can be hosted directly on GitHub Pages with no server runtime.",
};

export const methodsContent: MethodsContent = {
  label: "Methods",
  title: "Reproducible pipeline for the proposed method.",
  body: "Use this section to describe the model, algorithm, dataset construction, or system architecture. Keep enough detail here for readers to understand the core contribution before they open the paper.",
  steps: [
    "Collect task examples and normalize them into a reproducible experiment format.",
    "Train or evaluate the proposed model with controlled ablations for each design choice.",
    "Report quantitative metrics alongside qualitative examples, failure cases, and released code.",
  ],
};

export const experimentsContent: ExperimentsContent = {
  label: "Experiment Highlights",
  title: "Headline metrics and qualitative takeaways.",
  highlights: [
    {
      label: "Accuracy",
      value: "+12.4%",
      detail: "Relative improvement over the strongest template baseline on the primary benchmark.",
    },
    {
      label: "Efficiency",
      value: "3.1x",
      detail: "Faster inference in the representative deployment setting.",
    },
    {
      label: "Robustness",
      value: "8/10",
      detail: "Stress-test suites where the method preserves its ranking.",
    },
  ],
};

export const citationContent: CitationContent = {
  label: "Citation",
  title: "Cite this work",
  body: "Update the BibTeX entry with the final title, authors, venue, year, DOI, and project URL before release.",
  bibtex: `@inproceedings{researchtemplate2026,
  title = {Research Project Title},
  author = {First Author and Second Author and Senior Author},
  booktitle = {Proceedings of the Example Conference},
  year = {2026},
  url = {https://github.com/your-org/research-project}
}`,
};

