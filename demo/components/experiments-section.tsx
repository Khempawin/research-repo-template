import type { ExperimentsContent } from "../interfaces/research-page";

interface ExperimentsSectionProps {
  content: ExperimentsContent;
}

export function ExperimentsSection({ content }: ExperimentsSectionProps) {
  return (
    <section className="section" id="experiments">
      <p className="sectionLabel">{content.label}</p>
      <h2>{content.title}</h2>
      <div className="highlightGrid">
        {content.highlights.map((item) => (
          <article className="highlight" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

