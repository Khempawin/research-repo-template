import type { AbstractContent } from "../interfaces/research-page";

interface AbstractSectionProps {
  content: AbstractContent;
}

export function AbstractSection({ content }: AbstractSectionProps) {
  return (
    <section className="section introGrid" id="abstract">
      <div>
        <p className="sectionLabel">{content.label}</p>
        <h2>{content.title}</h2>
      </div>
      <p>{content.body}</p>
    </section>
  );
}

