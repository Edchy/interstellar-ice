import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const ALLOWED_TAGS = [
  "general",
  "js",
  "css",
  "coding",
  "astro",
  "react",
  "design",
  "ux",
] as const;

// Define schema separately
const postSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string().optional(),
  tags: z.array(z.enum(ALLOWED_TAGS)).default(["general"]),

  image: z.string().optional(),
  // minutesRead: z.string().optional(),
});

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};

// Reference the standalone schema for type inference
export type Post = z.infer<typeof postSchema>;
