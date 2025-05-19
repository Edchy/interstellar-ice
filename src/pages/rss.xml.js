import rss from "@astrojs/rss";
import { pageInfo } from "@/utils/data";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blogPosts = await getCollection("posts");

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
