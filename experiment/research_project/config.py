from __future__ import annotations

import tomllib
from pathlib import Path

from pydantic import BaseModel, Field


class ExperimentConfig(BaseModel):
    name: str = "baseline"
    seed: int = 0


class DataConfig(BaseModel):
    name: str = "example"
    num_examples: int = Field(default=128, gt=0)
    num_features: int = Field(default=8, gt=0)


class OutputConfig(BaseModel):
    predictions_path: Path = Path("artifacts/results/baseline_predictions.jsonl")
    metrics_path: Path = Path("artifacts/results/baseline_metrics.json")


class ProjectConfig(BaseModel):
    experiment: ExperimentConfig = ExperimentConfig()
    data: DataConfig = DataConfig()
    output: OutputConfig = OutputConfig()


def load_config(path: Path) -> ProjectConfig:
    with path.open("rb") as file:
        payload = tomllib.load(file)
    return ProjectConfig.model_validate(payload)
