# Experiment Package

This uv-managed Python project contains experiment code, configuration loading, logging,
evaluation, and tests. It intentionally does not use a `src/` directory so commands can run from
this package root with `uv run python -m ...`.

## Setup

```bash
uv sync
```

## Environment Variables

Experiment scripts load environment variables from the shell, `.env`, and `.env.local`.
Existing shell variables take precedence over values in files.

```bash
cp ../.env.template ../.env
uv run python -m research_project.experiments.run_baseline --config configs/baseline.toml
```

Common variables:

- `API_KEY` for external services.
- `API_BASE_URL` for custom API endpoints.
- `EXPERIMENT_SEED` for quick seed overrides in ad hoc scripts.

## Run Scripts

Scripts are intended to be executed from this directory with uv and Python module syntax:

```bash
uv run python -m research_project.experiments.run_baseline --config configs/baseline.toml
uv run python -m research_project.evaluation.evaluate_baseline --predictions artifacts/results/baseline_predictions.jsonl
```

## Layout

- `research_project/` is the importable Python package.
- `research_project/config.py` contains typed TOML config loading.
- `research_project/logging.py` contains reusable logging setup.
- `research_project/experiments/` contains runnable experiment entry points.
- `research_project/evaluation/` contains metrics and evaluation scripts.
- `research_project/data/` contains dataset loading helpers.
- `configs/` contains experiment configuration files.
- `artifacts/` stores generated outputs and is ignored by version control except for `.gitkeep` files.
