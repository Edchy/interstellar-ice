import rss from "@astrojs/rss";
import { pageInfo } from "@/utils/data";
import { getCollection } from "astro:content";
import { getPosts } from "@/utils/posts";

export async function GET(context) {
  const blogPosts = await getPosts();
  console.log("Generating RSS feed with posts:", blogPosts.length);
  return rss({
    title: pageInfo.title,
    description: pageInfo.description,

    site: context.site,
    // stylesheet: "/rss/styles.xsl",

    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,

      link: `/blog/${post.id}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
}
