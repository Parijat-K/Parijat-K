import { defineCollection, z } from 'astro:content';

// CV Collection - JSON data type
const cvCollection = defineCollection({
  type: 'data',
  schema: z.object({
    personalInfo: z.object({
      name: z.string(),
      title: z.string(),
      additionalTitles: z.array(z.string()).optional(),
      email: z.string().email(),
      phone: z.string().optional(),
      location: z.string().optional(),
      linkedin: z.string().url().optional(),
      github: z.string().url().optional(),
      website: z.string().url().optional(),
      photoUrl: z.string().optional(),
    }),
    summary: z.string(),
    experience: z.array(
      z.object({
        id: z.string(),
        company: z.string(),
        position: z.string(),
        location: z.string().optional(),
        startDate: z.string(), // Format: "YYYY-MM"
        endDate: z.string().optional(), // "YYYY-MM" or "Present"
        description: z.string(),
        achievements: z.array(z.string()),
        technologies: z.array(z.string()).optional(),
      })
    ),
    education: z.array(
      z.object({
        id: z.string(),
        institution: z.string(),
        degree: z.string(),
        field: z.string(),
        location: z.string().optional(),
        startDate: z.string(),
        endDate: z.string(),
        gpa: z.string().optional(),
        honors: z.array(z.string()).optional(),
        coursework: z.array(z.string()).optional(),
      })
    ),
    skills: z.object({
      categories: z.array(
        z.object({
          name: z.string(),
          items: z.array(z.string()),
        })
      ),
    }),
    certifications: z
      .array(
        z.object({
          id: z.string(),
          name: z.string(),
          issuer: z.string(),
          date: z.string(),
          credentialUrl: z.string().url().optional(),
        })
      )
      .optional(),
  }),
});

// Research Collection - Markdown content type
const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['thesis', 'paper', 'publication', 'conference']),
    authors: z.array(z.string()),
    publishedDate: z.string(), // Format: "YYYY-MM-DD"
    abstract: z.string(),
    status: z.enum(['published', 'submitted', 'in-progress', 'completed']),
    venue: z.string().optional(),
    doi: z.string().optional(),
    pdfUrl: z.string().url().optional(),
    arxivUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    tags: z.array(z.string()),
    category: z.string(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
  }),
});

// Projects Collection - Markdown content type
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['web', 'mobile', 'infrastructure', 'ml', 'open-source', 'other']),
    status: z.enum(['completed', 'in-progress', 'archived']),
    startDate: z.string(),
    endDate: z.string().optional(),
    technologies: z.array(z.string()),
    role: z.string(),
    highlights: z.array(z.string()),
    demoUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
    thumbnail: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
  }),
});

// Blog Collection - Markdown content type
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(), // Format: "YYYY-MM-DD"
    updatedDate: z.string().optional(),
    author: z.string(),
    tags: z.array(z.string()),
    category: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  cv: cvCollection,
  research: researchCollection,
  projects: projectsCollection,
  blog: blogCollection,
};
