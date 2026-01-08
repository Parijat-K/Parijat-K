---
title: "Scalable Consensus Algorithms for Edge Computing Networks"
type: "paper"
authors: ["Alex Rivera", "Dr. Michael Chen", "Dr. Sarah Johnson"]
publishedDate: "2023-11-20"
abstract: "We present a novel consensus algorithm optimized for edge computing environments with high network latency and partial connectivity. Our approach achieves 3x faster consensus time compared to traditional Raft implementations while maintaining strong consistency guarantees."
status: "published"
venue: "ACM SIGCOMM 2023"
doi: "10.1145/3589334.3645678"
pdfUrl: "https://dl.acm.org/doi/pdf/10.1145/3589334.3645678"
arxivUrl: "https://arxiv.org/abs/2311.12345"
githubUrl: "https://github.com/alexrivera/edge-consensus"
tags: ["distributed-systems", "consensus", "edge-computing", "networking"]
category: "distributed-systems"
featured: true
---

## Abstract

Edge computing introduces unique challenges for distributed consensus due to high network latency, intermittent connectivity, and resource constraints. This paper presents EdgeRaft, a consensus algorithm that adapts traditional Raft for edge environments by introducing latency-aware leader election and hierarchical consensus zones.

## Introduction

Edge computing pushes computation closer to data sources, but creates new challenges for maintaining consistency across geographically distributed nodes...

## Algorithm Design

EdgeRaft extends Raft with three key innovations:

1. **Latency-aware leader election**: Nodes elect leaders based on network proximity
2. **Hierarchical consensus zones**: Regional clusters achieve local consensus before global sync
3. **Adaptive timeouts**: Dynamic adjustment based on observed network conditions

## Evaluation

We evaluated EdgeRaft on a deployment of 100 edge nodes across 5 geographic regions:

- **3x faster consensus** (400ms vs 1200ms average)
- **50% reduction** in network bandwidth usage
- **99.99% availability** despite node failures

## Conclusion

EdgeRaft demonstrates that consensus algorithms can be optimized for edge computing environments without sacrificing consistency guarantees.
