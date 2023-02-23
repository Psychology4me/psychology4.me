import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../../../chunks/index2.js";
import { P as PostsList, a as Pagination } from "../../../../../../../chunks/Pagination.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { page, category, totalPosts, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `



${$$result.head += `<!-- HEAD_svelte-175qwgh_START -->${$$result.title = `<title>Blog Category ${escape(category)} - page ${escape(page)}</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"\n	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."}"><!-- HEAD_svelte-175qwgh_END -->`, ""}



${posts && posts.length ? `<section class="${"padding-top-10"}"><div class="${"content"}"><div class="${"container-l"}"><div class="${"container-m"}"><h1 class="${"heading-5 text-center padding-top-10"}">Category: ${escape(category)}</h1>
				<p class="${"padding-top-2-bigscreen text-center"}">Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist.
				</p></div>

			${validate_component(PostsList, "PostsList").$$render($$result, { posts }, {}, {})}
 			${validate_component(Pagination, "Pagination").$$render(
    $$result,
    {
      currentPage: page,
      totalPosts,
      path: "/blog/category/" + category + "/page"
    },
    {},
    {}
  )}</div></div></section>` : `<section class="${"padding-top-10 padding-bottom-10"}"><div class="${"content"}"><div class="${"container-l text-center"}"><h1 class="${"heading-5 padding-top-10"}">Oops!</h1>

		 <p>Sorry, no posts to show here. <a href="${"/blog"}" class="${"link-underlined"}">Bring me back</a></p></div></div></section>`}`;
});
export {
  Page as default
};
