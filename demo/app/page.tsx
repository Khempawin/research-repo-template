import { AbstractSection } from "../components/abstract-section";
import { CitationSection } from "../components/citation-section";
import { ExperimentsSection } from "../components/experiments-section";
import { Hero } from "../components/hero";
import { MethodsSection } from "../components/methods-section";
import { Topbar } from "../components/topbar";
import {
  abstractContent,
  citationContent,
  experimentsContent,
  heroContent,
  methodsContent,
  navItems,
} from "../data/research-page";
import { getBasePath } from "../lib/github-pages";

export default function Home() {
  const basePath = getBasePath();

  return (
    <main className="page">
      <Topbar items={navItems} title={heroContent.title} />
      <Hero content={heroContent} imagePath={`${basePath}/demo-placeholder.svg`} />
      <AbstractSection content={abstractContent} />
      <MethodsSection content={methodsContent} />
      <ExperimentsSection content={experimentsContent} />
      <CitationSection content={citationContent} />
    </main>
  );
}
