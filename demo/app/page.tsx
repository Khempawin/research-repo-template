const highlights = [
  { label: "Benchmark", value: "Example task" },
  { label: "Method", value: "Research method" },
  { label: "Primary metric", value: "00.0" },
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Computer Science Research</p>
          <h1>Research Template</h1>
          <p className="summary">
            A concise showcase for the method, experiments, qualitative examples, and manuscript
            links associated with this project.
          </p>
          <div className="actions">
            <a href="#results">Results</a>
            <a href="#method">Method</a>
          </div>
        </div>
      </section>

      <section className="section" id="results">
        <h2>Results</h2>
        <div className="metrics">
          {highlights.map((item) => (
            <article className="metric" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="method">
        <h2>Method</h2>
        <p>
          Replace this page with figures, tables, interactive examples, and links to released code
          or checkpoints.
        </p>
      </section>
    </main>
  );
}
