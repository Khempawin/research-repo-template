from __future__ import annotations

from collections.abc import Sequence


def accuracy_score(labels: Sequence[int], predictions: Sequence[int]) -> float:
    if len(labels) != len(predictions):
        msg = "labels and predictions must have the same length"
        raise ValueError(msg)
    if not labels:
        msg = "labels and predictions must not be empty"
        raise ValueError(msg)

    correct = sum(int(label == prediction) for label, prediction in zip(labels, predictions))
    return correct / len(labels)
