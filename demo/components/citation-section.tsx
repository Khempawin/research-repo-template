import type { CitationContent } from "../interfaces/research-page";

interface CitationSectionProps {
  content: CitationContent;
}

export function CitationSection({ content }: CitationSectionProps) {
  return (
    <section className="section citation" id="cite">
      <div>
        <p className="sectionLabel">{content.label}</p>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
      <pre>
        <code>{content.bibtex}</code>
      </pre>
    </section>
  );
}

