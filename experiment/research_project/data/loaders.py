from __future__ import annotations

import numpy as np


def load_example_dataset(
    seed: int = 0,
    num_examples: int = 128,
    num_features: int = 8,
) -> tuple[np.ndarray, np.ndarray]:
    rng = np.random.default_rng(seed)
    features = rng.normal(size=(num_examples, num_features))
    labels = (features.sum(axis=1) > 0).astype(int)
    return features, labels
