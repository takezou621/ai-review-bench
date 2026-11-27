# ai-review-bench

Benchmark fixture for comparing AI code-review tools (Greptile vs cubic).
The `main` branch is a small, clean TypeScript API. Each `bench/pr*` branch
contains a pull request with intentionally seeded defects (plus one clean
control PR). Defect ground truth is recorded outside this repository.
