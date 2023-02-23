import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { P as PostsList, a as Pagination } from "../../../../../chunks/Pagination.js";
import { p as postsPerPage } from "../../../../../chunks/config.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let lowerBound;
  let upperBound;
  let { data } = $$props;
  const { page, totalPosts, posts } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
  upperBound = Math.min(page * postsPerPage, totalPosts);
  return `



${$$result.head += `<!-- HEAD_svelte-ifsbo9_START -->${$$result.title = `<title>Posts ${escape(lowerBound)}–${escape(upperBound)} of ${escape(totalPosts)} - Psychology4.me</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"\n	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."}"><!-- HEAD_svelte-ifsbo9_END -->`, ""}

 
${posts.length ? `<section class="${"padding-top-10"}"><div class="${"content"}"><div class="${"container-l"}"><div class="${"container-m"}"><h1 class="${"heading-5 text-center padding-top-10"}">Blog of Psychology4.me</h1>
				<p class="${"padding-top-2-bigscreen text-center"}">Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist. You may want to visit the <a href="${"/blog/category/"}" class="${"link-underlined"}">Categories</a> page, too.
				</p></div>

			${validate_component(PostsList, "PostsList").$$render($$result, { posts }, {}, {})}

			${validate_component(Pagination, "Pagination").$$render($$result, { currentPage: page, totalPosts }, {}, {})}</div></div></section>` : `<section class="${"padding-top-10 padding-bottom-10"}"><div class="${"content"}"><div class="${"container-l text-center"}"><h1 class="${"heading-5 padding-top-10"}">Oops!</h1>

		 <p>Sorry, no posts to show here. <a href="${"/blog"}" class="${"link-underlined"}">Bring me back</a></p></div></div></section>`}`;
});
export {
  Page as default
};
