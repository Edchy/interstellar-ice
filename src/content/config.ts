import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()),
    readtime: z.number(),
  }),
});

export const collections = {
  posts: postsCollection,
};

// export type Post = z.infer<typeof postsCollection.schema>;
