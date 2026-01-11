---
name: "COVID-19 India Rt Dashboard"
tech:
  - Python
  - Pandas
  - NumPy
  - Plotly
  - GitHub Actions
  - Bayesian Inference
tags:
  - Epidemiology
  - Data Visualization
  - Public Health
  - Automation
  - Open Source
  - Pandemic Response
description: >-
  Built a public dashboard that estimates India’s state-wise COVID-19 effective
  reproduction number (Rt) using Bayesian techniques, refreshed every six hours
  via GitHub Actions until reliable data streams were discontinued.
link: https://github.com/Parijat-K/COVID-19-India-R0-Analysis
featured: true
---

## Project Overview

This open-source repository hosted a fully automated pipeline that calculated
and visualized the effective reproduction number (Rt) for every Indian state
and union territory. Inspired by Kevin Systrom’s Rt methodology, I adapted the
Bayesian updating process to localized datasets and published the output as an
interactive Plotly dashboard.

## Data & Methodology

- Pulled state-wise case counts from Thejesh GN’s scraped feeds of the Ministry
  of Health and Family Welfare, validating for missing or sparse regions.
- Applied a modified Bettencourt & Ribeiro (2008) Bayesian approach with
  Gaussian process noise to estimate daily Rt values and credible intervals per
  state.
- Highlighted model caveats, such as unmodeled states with insufficient data
  and the sensitivity of Rt to reporting anomalies.

## Automation & Delivery

- Scheduled GitHub Actions to run every six hours (UTC), refresh datasets,
  recompute Rt, and regenerate static assets.
- Deployed artifacts to a public dashboard with a net-new historical chart,
  summary badges, and explanatory copy for policymakers and citizens.
- Archived the project when upstream data feeds became unreliable, keeping the
  methodology and codebase available for future outbreaks.

## Impact

- Cited by outlets such as Deccan Herald and The Print when reporting on
  localized transmission trends.
- Earned endorsements from epidemiologists and public health leaders including
  Dr. Giridhar R. Babu and Lipika Nanda for bringing transparent Rt tracking to
  the Indian context.
- Demonstrated how small civic-tech efforts can combine open data,
  reproducible modeling, and automation to inform crisis response.
