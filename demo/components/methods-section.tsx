import type { MethodsContent } from "../interfaces/research-page";

interface MethodsSectionProps {
  content: MethodsContent;
}

export function MethodsSection({ content }: MethodsSectionProps) {
  return (
    <section className="section split" id="methods">
      <div>
        <p className="sectionLabel">{content.label}</p>
        <h2>{content.title}</h2>
        <p>{content.body}</p>
      </div>
      <ol className="methodList">
        {content.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

