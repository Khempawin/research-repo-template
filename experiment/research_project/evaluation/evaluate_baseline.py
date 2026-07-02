from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Annotated

import typer

from research_project.evaluation.metrics import accuracy_score
from research_project.logging import configure_logging

app = typer.Typer(help="Evaluate JSONL predictions from the baseline experiment.")
LOGGER = logging.getLogger(__name__)


@app.command()
def main(
    predictions: Annotated[
        Path, typer.Option("--predictions", "-p", exists=True, readable=True)
    ] = Path("artifacts/results/baseline_predictions.jsonl"),
    output: Annotated[Path | None, typer.Option("--output", "-o")] = None,
) -> None:
    configure_logging()
    rows = [json.loads(line) for line in predictions.read_text().splitlines() if line.strip()]
    labels = [int(row["label"]) for row in rows]
    predicted = [int(row["prediction"]) for row in rows]
    metrics = {"accuracy": accuracy_score(labels, predicted), "num_examples": len(rows)}

    LOGGER.info("evaluated %d predictions", len(rows))
    typer.echo(json.dumps(metrics, indent=2))

    if output is not None:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(json.dumps(metrics, indent=2) + "\n")
        LOGGER.info("wrote metrics to %s", output)
