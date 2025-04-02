export const navItems = [
  { name: "me", path: "/me" },
  { name: "blog", path: "/blog" },
  { name: "fun", path: "/blog" },
  // { name: "news", path: "/blog" },
  { name: "tags", path: "/tags" },
];

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
