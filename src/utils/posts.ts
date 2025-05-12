import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";

/**
 * Gets blog posts, filtering out drafts
 * @param {boolean} includeDrafts - Whether to include draft posts (default: false)
 * @returns {Promise<CollectionEntry<"posts">[]>} - Filtered posts
 */
export async function getPosts(
  includeDrafts = false
): Promise<CollectionEntry<"posts">[]> {
  const allPosts = await getCollection("posts");

  // Filter out drafts unless specifically requested
  const posts = includeDrafts
    ? allPosts
    : allPosts.filter((post) => !post.data.draft);

  // Sort by publication date (newest first)
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
}
