---
name: "SuperPages Reverse Proxy Middleware"
tech:
  - Spring Framework
  - Hibernate ORM
  - Apache Struts
  - Java
tags:
  - Reverse Proxy
  - Middleware Architecture
  - Data Anonymization
  - Web Integration
  - Enterprise Systems
description: >-
  Built a rule-driven reverse proxy for SuperPages that rewrote customer
  contact details on the fly to power analytics without altering client-facing
  sites.
featured: false
---

## Overview

During my tenure at Tata Consultancy Services, I contributed to SuperPages' core
marketing platform by helping design and build a reverse proxy middleware layer.
The client needed a way to intercept visitors headed to their customers' sites,
replace visible contact details with campaign-specific identifiers, and funnel
all resulting interactions into their analytics stack without breaking the
original experience.

## What I Built

- Implemented Spring-powered middleware services backed by Hibernate for
  persistence and Struts for request routing, ensuring compatibility with the
  existing Java estate.
- Designed a rule engine that rewrote phone numbers, email addresses, and lead
  forms at the edge, allowing SuperPages to attribute leads across thousands of
  customer microsites.
- Added layout-agnostic DOM rewriting safeguards so the proxy could adapt to
  any client website structure, including highly customized marketing pages.

## Impact

- Enabled end-to-end analytics for SuperPages without requiring intrusive code
  changes on customer sites.
- Reduced onboarding time for new clients because the middleware handled
  rewrites regardless of layout or CMS.
- Increased data quality for the marketing team by ensuring every contact event
  was tracked through the unified proxy pipeline.
