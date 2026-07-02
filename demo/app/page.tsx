import type { CSSProperties } from "react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io")
    ? `/${repositoryName}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? githubPagesBasePath;

const highlights = [
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
];

const methodSteps = [
  "Collect task examples and normalize them into a reproducible experiment format.",
  "Train or evaluate the proposed model with controlled ablations for each design choice.",
  "Report quantitative metrics alongside qualitative examples, failure cases, and released code.",
];

const bibtex = `@inproceedings{researchtemplate2026,
  title = {Research Project Title},
  author = {First Author and Second Author and Senior Author},
  booktitle = {Proceedings of the Example Conference},
  year = {2026},
  url = {https://github.com/your-org/research-project}
}`;

const heroStyle = {
  "--hero-image": `url("${basePath}/demo-placeholder.svg")`,
} as CSSProperties;

const navItems = [
  { href: "#abstract", label: "Abstract" },
  { href: "#methods", label: "Methods" },
  { href: "#experiments", label: "Experiments" },
  { href: "#cite", label: "Cite" },
];

export default function Home() {
  return (
    <main className="page">
      <nav className="topbar" aria-label="Project sections">
        <a className="brand" href="#">
          Research Project Title
        </a>
        <div className="navLinks">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero" style={heroStyle}>
        <div className="heroText">
          <p className="eyebrow">Conference 2026 · Computer Science Research</p>
          <h1>Research Project Title</h1>
          <p className="summary">
            A reusable project website for presenting a paper, method overview, experiment
            highlights, release links, and citation metadata from a GitHub Pages deployment.
          </p>
          <div className="actions">
            <a href="#abstract">Read Abstract</a>
            <a href="#cite">BibTeX</a>
          </div>
        </div>
      </section>

      <section className="section introGrid" id="abstract">
        <div>
          <p className="sectionLabel">Abstract</p>
          <h2>Problem, approach, and main result in one place.</h2>
        </div>
        <p>
          This placeholder abstract summarizes the research contribution. Replace it with a compact
          description of the problem setting, the key technical idea, the evaluation protocol, and
          the most important empirical finding. The website is intentionally static so it can be
          hosted directly on GitHub Pages with no server runtime.
        </p>
      </section>

      <section className="section split" id="methods">
        <div>
          <p className="sectionLabel">Methods</p>
          <h2>Reproducible pipeline for the proposed method.</h2>
          <p>
            Use this section to describe the model, algorithm, dataset construction, or system
            architecture. Keep enough detail here for readers to understand the core contribution
            before they open the paper.
          </p>
        </div>
        <ol className="methodList">
          {methodSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section" id="experiments">
        <p className="sectionLabel">Experiment Highlights</p>
        <h2>Headline metrics and qualitative takeaways.</h2>
        <div className="highlightGrid">
          {highlights.map((item) => (
            <article className="highlight" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section citation" id="cite">
        <div>
          <p className="sectionLabel">Citation</p>
          <h2>Cite this work</h2>
          <p>
            Update the BibTeX entry with the final title, authors, venue, year, DOI, and project
            URL before release.
          </p>
        </div>
        <pre>
          <code>{bibtex}</code>
        </pre>
      </section>
    </main>
  );
}
