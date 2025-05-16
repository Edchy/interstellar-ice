import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const ALLOWED_TAGS = [
  "life",
  "css",
  "js",
  "ux",
  "design",
  "nerdstuff",
] as const;

// Define schema separately
const postSchema = z.object({
  title: z.string().max(50),
  subtitle: z.string().optional(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string().optional(),
  tags: z.array(z.enum(ALLOWED_TAGS)).default(["life"]),
  draft: z.boolean().default(true),
  image: z.string().optional(),
  // minutesRead: z.string().optional(),
});

const projectSchema = z.object({
  title: z.string().max(50),
  description: z.string(),
  img: z.object({
    src: z.string(),
    alt: z.string(),
  }),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: postSchema,
});
const projectCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(50),
      description: z.string(),
      cover: image(),
      alt: z.string(),
    }),
});

export const collections = {
  posts: postsCollection,
  projects: projectCollection,
};

// Reference the standalone schema for type inference
export type Post = z.infer<typeof postSchema>;
export type Project = z.infer<typeof projectSchema>;
