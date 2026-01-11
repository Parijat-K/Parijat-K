---
name: "FeedMyLedger Immutable Ledger"
tech:
  - Rust
  - Google Sheets API
  - Microsoft Graph Excel
  - OAuth2
  - CSV Pipelines
  - GitHub Actions
tags:
  - Fintech
  - Append-Only Ledger
  - Cloud Integrations
  - CLI Tools
  - Open Source
shortDescription: Rust CLI turns Sheets or Excel into tamper-evident append-only ledgers.
description: >-
  Authored a Rust crate and CLI that turns Google Sheets or Excel 365 into an
  immutable, append-only ledger with OAuth-secured access, tamper detection,
  and import/export tooling for modern bookkeeping workflows.
link: https://github.com/Softwareologists/feed-my-ledger
featured: false
---

## Project Overview

FeedMyLedger is a Rust library plus command-line interface that treats
cloud-based spreadsheets as double-entry ledgers. Instead of editing rows in
place, every adjustment appends a new record referencing the original entry,
mirroring traditional accounting controls.

## Core Features

- Pluggable adapters for Google Sheets (Sheets v4 API) and Microsoft Excel 365,
  along with a local CSV adapter for offline storage.
- Immutable storage model enforced via row hashes and verification commands to
  detect tampering.
- Resilient REST calls with exponential backoff and configurable batch sizes
  for high-volume uploads.
- OAuth2-powered authentication flows so users can securely link their accounts
  from the CLI without bundling third-party wrappers.

## Developer Ergonomics

- High-level `Ledger` and `Record` APIs exposed through a consumable crate
  (`feed-my-ledger = "2.0.0"`) for embedding in Rust services.
- Batteries-included CLI supporting add/list/adjust/share/import/switch workflows,
  including mapping flags for CSV/QIF/OFX/Ledger/JSON ingestion and bank API
  downloads (feature gated).
- Configuration-driven setup via `config.toml`, covering OAuth credentials,
  sheet IDs, scheduled postings, and budget thresholds.

## Impact

- Gives indie builders and finance teams an audit-friendly bookkeeping layer
  without provisioning databases.
- Demonstrates how append-only accounting concepts translate to commodity cloud
  spreadsheets, encouraging transparent financial ops.
- Serves as a reference for robust API retries, OAuth integrations, and CLI UX
  patterns in the Rust ecosystem.
