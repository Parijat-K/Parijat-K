---
name: "OptaPlanner 3D Bin Packing Solver"
tech:
  - Java
  - OptaPlanner
tags:
  - Logistics Optimization
  - 3D Bin Packing
  - Constraint Solvers
  - Combinatorial Search
  - Operational Research
shortDescription: Custom heuristics and move factories let OptaPlanner solve dense 3D bin packing workloads.
description: >-
  Built a production-ready OptaPlanner workload that handles industrial 3D bin
  packing by pairing specialized custom construction heuristics with spatial
  indexes and a curated move set that avoids combinatorial blowups.
featured: true
---

## Project Overview

Built a dedicated OptaPlanner stack for industrial 3D bin packing so fulfillment
teams can auto-generate container layouts instead of hand-curating placements.
The workload ingests standard benchmark manifests, normalizes part metadata, and
produces collision-safe container layouts that already respect gravity and
stacking constraints. Stakeholders inspect any run through a lightweight OBJ
exporter, keeping sensitive operational data out of shared viewers.

## Solver Architecture

- Added spatial indexes and specialized data structures that answer
  "first-fit" queries without scanning every candidate, which keeps the score
  director responsive on large search spaces.
- Injected a purpose-built construction heuristic so the first feasible layout honors
  gravity, stacking constraints, and support-aware ordering before the local
  search begins.
- Tuned the constraint provider to balance surface coverage, unused volume, and
  soft penalties (rotations, unsupported overhangs, handling preferences).

## Custom Move Set

- Authored specialized move families with probability weights so OptaPlanner
  focuses on high-value neighborhoods instead of exploring every combinatorial
  permutation the default moves would generate.
- Added configurable "items to ruin" limits inside the large-neighborhood move
  so deeper reshuffles happen without restarting the entire search.
- Layered tabu-based acceptors and tuned foragers so diversification kicks in
  only when improvements plateau, shortening convergence time dramatically.

## Impact

- Handles dense multi-container workloads that previously stalled default
  OptaPlanner moves because of the exploding search space.
- Produces placements that can be reviewed visually via OBJ exports, speeding up
  validation with operations teams.
