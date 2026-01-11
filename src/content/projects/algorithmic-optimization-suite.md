---
name: "Algorithm Optimization & NLP Toolkit"
tech:
  - Java
  - Apache Lucene OpenBitSet
  - Weka
  - Selenium Excel Automations
  - LingPipe
tags:
  - Knapsack Problem
  - Traveling Salesman
  - Graph Coloring
  - Sentiment Analysis
  - Freelance
shortDescription: Stabilized massive Java solvers and Turkish sentiment classifier for deadlines.
description: >-
  Partnered with a researcher to stabilize large-scale Java solvers for
  knapsack, TSP, and graph coloring workloads while also delivering a Turkish
  unigram-based sentiment classifier ahead of academic deadlines.
featured: false
---

## Engagement Overview

A returning freelance client needed help rescuing multiple algorithmic
assignments that were buckling under 10k+ item data files and ad-hoc NLP
experiments. I jumped in as the sole engineer, troubleshooting Java heap
failures, profiling graph heuristics, and packaging the final deliverables for a
presentation-ready submission.

## Optimization Workstream

- Reverse engineered the legacy knapsack solver and replaced its dense `int`
  DP table with Apache Lucene `OpenBitSet` buffers, shrinking memory usage from
  ~37 GB to <6 GB so 10,000×1,000,000 state spaces could run on 64-bit JVMs.
- Added a fallback stream mode that computes the max profit from massive files
  without materializing every intermediate row, giving the client graded output
  even on constrained lab machines.
- Hardened file loaders and manifest handling so ks_* and tsp_* datasets could
  be batch-tested from the provided dist/ folder without manual edits.
- Documented JVM tuning steps (heap flags, GC hints) to reproduce results on the
  university test rig.

## Graph Coloring Enhancements

- Profiled the greedy coloring routine and introduced a highest-degree-first
  ordering with tie-breaking comparators, which reduced color counts on dense
  graphs while keeping runtime predictable.
- Added instrumentation hooks so the client could demonstrate optimization
  strategies and explain algorithm choices during reviews.

## Turkish Sentiment Classification

- Reviewed the Zemberek-based morphology idea, then pivoted to a leaner
  pipeline using unigram frequencies exported from cleaned Excel sheets.
- Built a Weka-backed SVM/Naïve Bayes classifier that ingests `positive`,
  `negative`, and `neutral` CSV labels and prints predictions for blind tests.
- Supplied scripts for generating top-N feature lists and guidelines for
  plugging additional LingPipe experiments when more time becomes available.

## Impact

- Unblocked every provided dataset, giving the client full marks during the
  knapsack demo and headroom to discuss optimization heuristics.
- Enabled on-time submission of the combined algorithms + NLP project despite
  fragmented requirements and limited dataset access.
- Established an ongoing freelance relationship for future research tooling.
