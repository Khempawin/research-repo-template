import type { CSSProperties } from "react";

import type { HeroContent } from "../interfaces/research-page";

interface HeroProps {
  content: HeroContent;
  imagePath: string;
}

export function Hero({ content, imagePath }: HeroProps) {
  const heroStyle = {
    "--hero-image": `url("${imagePath}")`,
  } as CSSProperties;

  return (
    <section className="hero" style={heroStyle}>
      <div className="heroText">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="summary">{content.summary}</p>
        <div className="actions">
          <a href={content.primaryAction.href}>{content.primaryAction.label}</a>
          <a href={content.secondaryAction.href}>{content.secondaryAction.label}</a>
        </div>
      </div>
    </section>
  );
}

