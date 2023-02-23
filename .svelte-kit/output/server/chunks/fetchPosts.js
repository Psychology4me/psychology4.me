import { p as postsPerPage } from "./config.js";
const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = "" } = {}) => {
  const posts = await Promise.all(
    Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/posts/10-signs-right-psychologist.md": () => import("./10-signs-right-psychologist.js"), "/src/lib/posts/benefits-of-online-counselling.md": () => import("./benefits-of-online-counselling.js"), "/src/lib/posts/what-to-expect-first-session.md": () => import("./what-to-expect-first-session.js") })).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const slug = path.split("/").pop().slice(0, -3);
      return { ...metadata, slug };
    })
  );
  let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (category) {
    sortedPosts = sortedPosts.filter((post) => post.categories.includes(category));
  }
  if (offset) {
    sortedPosts = sortedPosts.slice(offset);
  }
  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit);
  }
  sortedPosts = sortedPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    date: post.date,
    categories: post.categories
  }));
  return {
    posts: sortedPosts
  };
};
export {
  fetchPosts as f
};
