import getReadingTime from "reading-time";
import { toString } from "mdast-util-to-string";

export function remarkReadingTime() {
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = calculateReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTime.text;
  };
}

export function calculateReadingTime(content: string) {
  // Strip markdown formatting for more accurate count
  const plainText = content.replace(/[#*`_\[\]()>]/g, "");
  return getReadingTime(plainText);
}
