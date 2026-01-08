# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5.x and deployed to Cloudflare Pages. It showcases a CV/resume, research publications, projects, and blog posts. The site is a Progressive Web App (PWA) with full-text search capabilities powered by Pagefind.

## Technology Stack

- **Framework**: Astro 5.x with SSR using Cloudflare adapter
- **Styling**: Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- **Deployment**: Cloudflare Pages via Wrangler
- **Search**: Pagefind (static search index)
- **PWA**: @vite-pwa/astro with Workbox
- **OG Images**: Dynamic generation using Satori + Sharp
- **Fonts**: Playfair Display (headings) and Inter (body text) from Google Fonts

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Build production site (includes Pagefind indexing)
npm run build

# Preview production build locally with Wrangler
npm run preview

# Deploy to Cloudflare Pages
npm run deploy

# Generate Cloudflare Worker types
npm run cf-typegen

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Content Collections

The site uses Astro Content Collections with Zod schemas defined in `src/content/config.ts`:

1. **CV Collection** (`src/content/cv/`)
   - Type: JSON data
   - Schema includes: personalInfo, summary, experience, education, skills, certifications
   - Single file: `main.json`

2. **Research Collection** (`src/content/research/`)
   - Type: Markdown with frontmatter
   - Fields: title, type, authors, publishedDate, abstract, status, venue, DOI, URLs, tags, category, featured
   - Supports: thesis, paper, publication, conference

3. **Projects Collection** (`src/content/projects/`)
   - Type: Markdown with frontmatter
   - Fields: title, description, category, status, dates, technologies, role, highlights, URLs, thumbnail, featured
   - Categories: web, mobile, infrastructure, ml, open-source, other

4. **Blog Collection** (`src/content/blog/`)
   - Type: Markdown with frontmatter
   - Fields: title, description, dates, author, tags, category, featured, draft, coverImage

### Routing Structure

- `/` - CV/Resume page (index.astro)
- `/research/` - Paginated research listings
- `/research/[slug]` - Individual research detail pages
- `/projects/` - Paginated project listings
- `/projects/[slug]` - Individual project detail pages
- `/blog/` - Paginated blog listings
- `/blog/[slug]` - Individual blog post pages
- `/api/og.png` - Dynamic OG image generation endpoint
- `/404` - Custom 404 page

All paginated routes use Astro's `[...page].astro` convention with a default page size of 9 items.

### Component Organization

Components are organized by feature:

- `src/components/ui/` - Reusable UI components (Card, Badge, Button, FilterBar, Breadcrumbs, Pagination)
- `src/components/cv/` - CV-specific components (CVHeader, CVSummary, CVExperience, CVEducation, CVSkills, CVCertifications)
- `src/components/research/` - Research section components (ResearchHero, ResearchCard)
- `src/components/projects/` - Projects section components (ProjectsHero, ProjectCard)
- `src/components/blog/` - Blog section components (BlogHero, BlogCard)
- `src/components/Navigation.astro` - Site-wide navigation with search integration
- `src/components/Search.astro` - Pagefind search modal with keyboard shortcuts (⌘K)

### Styling Approach

- Tailwind CSS v4 with custom theme configuration in `src/styles/global.css`
- Custom CSS variables: `--font-playfair`, `--font-inter`, color tokens for CV/research/projects sections
- Utility classes: `.card-hover`, `.hero-texture`, `.fade-in`
- Comprehensive print styles optimized for CV printing
- Accessibility features: skip-to-content links, reduced motion support

### Key Features

1. **PWA Configuration**: Service worker with runtime caching for Google Fonts and CV page, automatic updates
2. **Search**: Pagefind integration for full-text search across all content, keyboard shortcut support (⌘K)
3. **Dynamic OG Images**: Server-side generated Open Graph images with color schemes per section (CV, research, projects, blog)
4. **View Transitions**: Astro's View Transitions API for smooth page navigation
5. **Sitemap**: Automatic sitemap generation via @astrojs/sitemap integration
6. **Print Optimization**: CV page has extensive print CSS for professional PDF generation

## Build Process

The build chain is: `astro build` → Pagefind indexing → Cloudflare deployment

1. Astro builds static site to `dist/` with `format: 'directory'`
2. Pagefind scans `dist/` and creates search index
3. Wrangler deploys to Cloudflare Pages

## Important Notes

- The site uses Astro's Cloudflare adapter with `platformProxy` enabled for local development
- Cloudflare Image Service is configured for optimized image handling
- OG image endpoint (`/api/og.png`) uses `prerender: false` for dynamic generation
- Content dates use formats: `YYYY-MM` for CV dates, `YYYY-MM-DD` for blog/research
- The CV page is the site homepage (`/`)

## Content Management

When adding new content:

1. **CV Updates**: Edit `src/content/cv/main.json` directly
2. **Research Papers**: Add markdown files to `src/content/research/` with proper frontmatter
3. **Projects**: Add markdown files to `src/content/projects/` with proper frontmatter
4. **Blog Posts**: Add markdown files to `src/content/blog/` with proper frontmatter

All content is validated against Zod schemas at build time. Refer to `src/content/config.ts` for exact schema requirements.
