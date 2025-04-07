import { defineCollection, z } from "astro:content";
// import { glob, file } from "astro/loaders";

// Define schema separately
const postSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  tags: z.array(z.string()),
  minutesRead: z.string().optional(),
});

const postsCollection = defineCollection({
  schema: postSchema,
});

export const collections = {
  posts: postsCollection,
};

// Reference the standalone schema for type inference
export type Post = z.infer<typeof postSchema>;
