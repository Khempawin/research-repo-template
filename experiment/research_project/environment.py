from __future__ import annotations

import os
from collections.abc import Iterable
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class EnvironmentSettings:
    api_key: str | None
    api_base_url: str | None
    experiment_seed: int | None


def load_environment(paths: Iterable[Path] | None = None) -> None:
    env_paths = list(paths) if paths is not None else _default_env_paths()
    for path in env_paths:
        _load_env_file(path)


def get_environment_settings() -> EnvironmentSettings:
    return EnvironmentSettings(
        api_key=_empty_to_none(os.getenv("API_KEY")),
        api_base_url=_empty_to_none(os.getenv("API_BASE_URL")),
        experiment_seed=_optional_int(os.getenv("EXPERIMENT_SEED")),
    )


def _default_env_paths() -> list[Path]:
    cwd = Path.cwd()
    return [
        cwd.parent / ".env",
        cwd.parent / ".env.local",
        cwd / ".env",
        cwd / ".env.local",
    ]


def _load_env_file(path: Path) -> None:
    if not path.exists():
        return

    for raw_line in path.read_text().splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        key = key.strip()
        value = _strip_quotes(value.strip())
        if key and key not in os.environ:
            os.environ[key] = value


def _strip_quotes(value: str) -> str:
    if len(value) >= 2 and value[0] == value[-1] and value[0] in {"'", '"'}:
        return value[1:-1]
    return value


def _empty_to_none(value: str | None) -> str | None:
    if value is None or value == "":
        return None
    return value


def _optional_int(value: str | None) -> int | None:
    if value is None or value == "":
        return None
    return int(value)
