from __future__ import annotations

import json
from pathlib import Path
from typing import Annotated

import typer

app = typer.Typer(help="Summarize experiment result files.")


@app.command()
def main(
    input: Annotated[Path, typer.Option("--input", "-i", exists=True, readable=True)],
) -> None:
    result = json.loads(input.read_text())
    typer.echo(f"experiment: {result.get('experiment', 'unknown')}")
    typer.echo(f"seed: {result.get('seed', 'unknown')}")
    typer.echo(f"metrics: {result.get('metrics', 'unknown')}")


if __name__ == "__main__":
    app()
