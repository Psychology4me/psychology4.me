import { j as json } from "../../../../../chunks/index2.js";
const prerender = true;
const GET = () => {
  const posts = /* @__PURE__ */ Object.assign({ "/src/lib/posts/10-signs-right-psychologist.md": () => import("../../../../../chunks/10-signs-right-psychologist.js"), "/src/lib/posts/benefits-of-online-counselling.md": () => import("../../../../../chunks/benefits-of-online-counselling.js"), "/src/lib/posts/what-to-expect-first-session.md": () => import("../../../../../chunks/what-to-expect-first-session.js") });
  return json(Object.keys(posts).length);
};
export {
  GET,
  prerender
};
