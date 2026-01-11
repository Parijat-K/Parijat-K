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

- Pulled state-wise case counts from [Thejesh GN’s scraped feeds](https://thejeshgn.com/)
  of the Ministry of Health and Family Welfare, validating for missing or sparse regions.
- Applied a modified [Bettencourt & Ribeiro (2008)](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0002185) 
  Bayesian approach with Gaussian process noise to estimate daily Rt values and credible intervals per state.
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

## News Coverage

This work was cited in the below news
- [How dangerous is COVID-19 in the grand scheme of things](https://www.deccanherald.com/science-and-environment/how-dangerous-is-covid-19-in-the-grand-scheme-of-things-845993.html), [Deccan Herald](https://www.deccanherald.com/)  
- [Covid slowing in Maharashtra and MP, shows infection rate analysis of govt data](https://theprint.in/health/covid-slowing-in-maharashtra-and-mp-shows-infection-rate-analysis-of-govt-data/436861/), [The Print](https://theprint.in/)

### Credits
  - This work is based on [Estimating COVID-19's *R<sub>t</sub>* in Real-Time](https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb) By [Kevin Systrom](https://github.com/k-sys)
  - Special thanks to [Thejesh GN](https://thejeshgn.com) for collecting and maintaining the State wise COVID-19 data from the [Ministry of Health and Family Welfare, Government of India](https://www.mohfw.gov.in/) website.
