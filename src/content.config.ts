import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API
import { z } from "astro/zod";

const resume = defineCollection({
  loader: glob({
    pattern: ["*.json"],
    base: "src/content/resume",
  }),
  schema: z.object({
    header: z.object({
      name: z.string(),
      title: z.string(),
      specialization: z.string().optional(),
      additionalTitles: z.array(z.string()).optional(),
      summary: z.string().optional(),
      email: z.string().email(),
      phone: z.string(),
      location: z.string().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      photoUrl: z.string().optional(),
    }),
    careerHighlights: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string().optional(),
        })
      )
      .optional(),
    skills: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
      })
    ),
    experience: z.array(
      z.object({
        company: z.string(),
        roles: z.array(
          z.object({
            title: z.string(),
            period: z.string(),
            location: z.string().optional(),
            description: z.string().optional(),
            achievements: z.array(z.string()),
          })
        ),
      })
    ),
    education: z.array(
      z.object({
        degree: z.string(),
        institution: z.string(),
        field: z.string(),
        period: z.string(),
        location: z.string().optional(),
      })
    ),
    certificates: z
      .array(
        z.object({
          name: z.string(),
          issuer: z.string(),
          date: z.number(),
          link: z.string().url().optional(),
        })
      )
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/projects",
  }),
  schema: z.object({
    name: z.string(),
    tech: z.array(z.string()),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    link: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const publications = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/publications",
  }),
  schema: z.object({
    title: z.string(),
    publisher: z.string(),
    year: z.number(),
    tags: z.array(z.string()).optional(),
    abstract: z.string(),
    link: z.string().url().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

const blogs = defineCollection({
  loader: glob({
    pattern: ["*.md"],
    base: "src/content/blogs",
  }),
  schema: z.object({
    title: z.string(),
    date: z.string().date(), // Format: "YYYY-MM-DD"
    readTime: z.number().optional(), // in minutes
    tags: z.array(z.string()).optional(),
    summary: z.string(),
  }),
});

export const collections = { resume, projects, publications, blogs };
