.PHONY: setup test lint experiment demo-build clean

setup:
	cd experiment && uv sync
	cd demo && npm install

test:
	cd experiment && uv run pytest

lint:
	cd experiment && uv run ruff check .

experiment:
	cd experiment && uv run python -m research_project.experiments.run_baseline --config configs/baseline.toml

demo-build:
	cd demo && npm run build

clean:
	find experiment -type d -name __pycache__ -prune -exec rm -rf {} +
	rm -rf experiment/.pytest_cache experiment/.ruff_cache demo/.next
