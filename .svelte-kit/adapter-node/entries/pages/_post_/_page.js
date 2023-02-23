import { e as error } from "../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../lib/posts/10-signs-right-psychologist.md": () => import("../../../chunks/10-signs-right-psychologist.js"), "../../lib/posts/benefits-of-online-counselling.md": () => import("../../../chunks/benefits-of-online-counselling.js"), "../../lib/posts/what-to-expect-first-session.md": () => import("../../../chunks/what-to-expect-first-session.js") }), `../../lib/posts/${params.post}.md`);
    return {
      PostContent: post.default,
      meta: { ...post.metadata, slug: params.post }
    };
  } catch (err) {
    throw error(404, err);
  }
};
export {
  load
};
