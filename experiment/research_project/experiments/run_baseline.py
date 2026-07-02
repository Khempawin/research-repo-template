from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Annotated

import typer

from research_project.config import load_config
from research_project.data.loaders import load_example_dataset
from research_project.environment import get_environment_settings, load_environment
from research_project.evaluation.metrics import accuracy_score
from research_project.logging import configure_logging

app = typer.Typer(help="Run a baseline experiment.")
LOGGER = logging.getLogger(__name__)


@app.command()
def main(
    config: Annotated[Path, typer.Option("--config", "-c", exists=True, readable=True)] = Path(
        "configs/baseline.toml"
    ),
) -> None:
    load_environment()
    configure_logging()
    env = get_environment_settings()
    settings = load_config(config)
    seed = env.experiment_seed if env.experiment_seed is not None else settings.experiment.seed
    LOGGER.info("running experiment %s", settings.experiment.name)
    LOGGER.info("api key configured: %s", env.api_key is not None)

    features, labels = load_example_dataset(
        seed=seed,
        num_examples=settings.data.num_examples,
        num_features=settings.data.num_features,
    )
    predictions = (features.mean(axis=1) > 0).astype(int)
    accuracy = accuracy_score(labels.tolist(), predictions.tolist())

    settings.output.predictions_path.parent.mkdir(parents=True, exist_ok=True)
    with settings.output.predictions_path.open("w") as file:
        for index, (label, prediction) in enumerate(zip(labels.tolist(), predictions.tolist())):
            file.write(
                json.dumps({"id": index, "label": int(label), "prediction": int(prediction)}) + "\n"
            )

    settings.output.metrics_path.parent.mkdir(parents=True, exist_ok=True)
    settings.output.metrics_path.write_text(
        json.dumps(
            {
                "experiment": settings.experiment.name,
                "seed": seed,
                "metrics": {"accuracy": accuracy},
            },
            indent=2,
        )
        + "\n"
    )
    LOGGER.info("wrote predictions to %s", settings.output.predictions_path)
    LOGGER.info("wrote metrics to %s", settings.output.metrics_path)
    typer.echo(f"accuracy={accuracy:.3f}")


if __name__ == "__main__":
    app()
