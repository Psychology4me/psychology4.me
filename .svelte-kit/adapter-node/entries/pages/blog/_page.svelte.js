import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { P as PostsList, a as Pagination } from "../../../chunks/Pagination.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-dxjejq_START -->${$$result.title = `<title>Blog - Psychology4.me</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"\n	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."}"><!-- HEAD_svelte-dxjejq_END -->`, ""}
  <section class="${"padding-top-10"}"><div class="${"content"}"><div class="${"container-l"}"><div class="${"container-m"}"><h1 class="${"heading-5 text-center padding-top-10"}">Blog of Psychology4.me</h1>
			<p class="${"padding-top-2-bigscreen text-center"}">Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist. You may want to visit the <a href="${"/blog/category/"}" class="${"link-underlined"}">Categories</a> page, too.
			</p></div>
			${validate_component(PostsList, "PostsList").$$render($$result, { posts: data.posts }, {}, {})}

			${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: 1, totalPosts: data.total }, {}, {})}</div></div></section>`;
});
export {
  Page as default
};
