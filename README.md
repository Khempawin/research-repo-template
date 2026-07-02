# Computer Science Research Template

A GitHub template repository for computer science research projects. It keeps experiment code,
the public demo, and the manuscript in one monorepo while leaving each module easy to rename or
replace.

## Layout

```text
experiment/   uv-managed Python project for experiments and analysis
demo/         Next.js App Router project for showcasing results
manuscript/   Overleaf-compatible LaTeX paper scaffold
```

## Quick Start

```bash
make setup
make test
```

## Experiment

```bash
cd experiment
uv sync
uv run python -m research_project.experiments.run_baseline --config configs/baseline.toml
uv run python -m research_project.evaluation.evaluate_baseline --predictions artifacts/results/baseline_predictions.jsonl
```

The Python project intentionally has no `src/` directory. The importable package lives at
`experiment/research_project`.

To rename the template, update:

- `experiment/pyproject.toml`
- `experiment/research_project/`
- Python imports that reference `research_project`
- `demo/package.json`
- manuscript title and author metadata

## Demo

```bash
cd demo
pnpm install
pnpm dev
```

The demo app lives in `demo/app` and uses the Next.js App Router. It is configured for static
export and can be deployed to GitHub Pages through `.github/workflows/pages.yml`. Enable Pages in
the repository settings with GitHub Actions as the source, or provide a `PAGES_TOKEN` secret that
can enable Pages during the workflow.

## Manuscript

Open `manuscript/main.tex` in Overleaf, or compile locally with a LaTeX distribution.

## CI

GitHub Actions runs:

- Python lint with Ruff
- Python tests with Pytest
- Next.js production build
