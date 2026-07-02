from pathlib import Path

from typer.testing import CliRunner

from research_project.config import load_config
from research_project.data.loaders import load_example_dataset
from research_project.environment import get_environment_settings, load_environment
from research_project.evaluation.metrics import accuracy_score
from research_project.experiments.run_baseline import app


def test_load_example_dataset_shapes() -> None:
    features, labels = load_example_dataset(seed=0, num_examples=16, num_features=4)
    assert features.shape == (16, 4)
    assert labels.shape == (16,)


def test_accuracy_score() -> None:
    assert accuracy_score([1, 0, 1], [1, 1, 1]) == 2 / 3


def test_load_config() -> None:
    config = load_config(Path("configs/baseline.toml"))
    assert config.experiment.name == "baseline"
    assert config.data.num_examples > 0


def test_run_baseline_writes_outputs(tmp_path: Path) -> None:
    config_path = tmp_path / "config.toml"
    predictions_path = tmp_path / "predictions.jsonl"
    metrics_path = tmp_path / "metrics.json"
    config_path.write_text(
        f"""
[experiment]
name = "test"
seed = 1

[data]
name = "example"
num_examples = 8
num_features = 3

[output]
predictions_path = "{predictions_path}"
metrics_path = "{metrics_path}"
"""
    )

    result = CliRunner().invoke(app, ["--config", str(config_path)])

    assert result.exit_code == 0
    assert predictions_path.exists()
    assert metrics_path.exists()


def test_load_environment_file(monkeypatch, tmp_path: Path) -> None:
    monkeypatch.delenv("API_KEY", raising=False)
    monkeypatch.delenv("API_BASE_URL", raising=False)
    monkeypatch.delenv("EXPERIMENT_SEED", raising=False)
    env_file = tmp_path / ".env"
    env_file.write_text(
        """
API_KEY=test-key
API_BASE_URL="https://api.example.test"
EXPERIMENT_SEED=123
"""
    )

    load_environment([env_file])
    settings = get_environment_settings()

    assert settings.api_key == "test-key"
    assert settings.api_base_url == "https://api.example.test"
    assert settings.experiment_seed == 123
