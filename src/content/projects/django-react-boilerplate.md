---
name: "Django + React Hybrid Boilerplate"
tech:
  - Django 2.2
  - React 16
  - Django REST Framework
  - Material UI
  - Waitress
  - Webpack
tags:
  - Full-Stack Template
  - Session Auth
  - CSRF Protection
  - Hybrid Deployment
  - Open Source
description: >-
  Open-sourced a Django + React starter kit that bundles backend and frontend
  in a single deployable, featuring session-based auth, CSRF protection, and a
  production-ready build pipeline for small teams.
link: https://github.com/Parijat-K/django-react-boilerplate-template
featured: true
---

## Project Overview

I published a GitHub template that pairs a Django 2.x backend with a React
frontend while keeping both layers under one repository and deployment unit.
The boilerplate embraces a “hybrid” model—Webpack builds the SPA into Django’s
static pipeline so teams can ship everything from a single server process
without juggling two hosting targets.

## Architecture Highlights

- Ships with Django REST Framework, session-based authentication, and CSRF
  middleware preconfigured so React can make same-origin API calls safely.
- Provides matching Dev/Prod flows: `npm run build` injects the compiled
  frontend into Django, while `DJANGO_ENV` toggles settings such as
  `django-cors-headers` for local debugging and `whitenoise` for production
  static serving.
- Includes Waitress entry points, example routes, and Material UI scaffolding to
  quickly spin up dashboards, e-commerce storefronts, or portfolio UIs.
- Documents CLI bootstrap commands (`django-admin startproject` with the
  template zip) so adopters can instantiate a new project in minutes.

## Developer Experience

- Mirrors Heroku-style parity: database migrations, static collection, and npm
  builds all run from the root directory, making it easy to script CI/CD.
- Keeps frontend code inside Django’s repo for teams that prefer a single Git
  workflow while still allowing developers to eject and build their own React
  UI if desired.
- Demonstrates how to add authenticated API calls, route guards, and CSRF-safe
  fetch helpers—serving as a reference rather than a locked-in UI.

## Impact

- Helped indie founders and small teams bootstrap hybrid Django + React apps
  without wrestling with reverse proxies or CORS setups.
- Continues to be cloned as a teaching aid for students learning full-stack
  development where deployment simplicity matters more than bleeding-edge
  versions.
