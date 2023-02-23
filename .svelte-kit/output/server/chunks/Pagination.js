import { c as create_ssr_component, d as each, e as escape, b as add_attribute } from "./index2.js";
import { p as postsPerPage } from "./config.js";
const author_picture = "data:image/webp;base64,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";
const PostsList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts = [] } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<ul class="${"flex verticalCenter"}">${each(posts, (post) => {
    return `<li class="${"col-4-12 col-phone-1-1 col-phablet-1-2 col-tablet-1-2"}"><a href="${"/" + escape(post.slug, true)}" class="${"box-77"}"><div class="${"thumbnail-77"}"><img${add_attribute("src", post.coverImage, 0)}${add_attribute("alt", post.title, 0)} class="${"wide"}"></div>
				<div class="${"details-77 equalElement"}" style="${"height: 180px;"}"><div class="${"table wide"}"><div class="${"cell"}"><div class="${"card_title"}">${escape(post.title)}</div>
							<div class="${"author-77"}"><img width="${"45"}" class="${"avatar-77"}"${add_attribute("src", author_picture, 0)} alt="${"Patric Pförtner Male Psychologist at Psychology4.me"}">
								<div class="${"name-77"}">Patric Pförtner</div>
								<p class="${"specs-77"}">Psychologist (M. Sc.)</p></div>
						</div></div>
				</div></a>
		</li>`;
  })}</ul>`;
});
const Pagination = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage } = $$props;
  let { totalPosts } = $$props;
  let { path = "/blog/page" } = $$props;
  let pagesAvailable;
  const isCurrentPage = (page) => page == currentPage;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.totalPosts === void 0 && $$bindings.totalPosts && totalPosts !== void 0)
    $$bindings.totalPosts(totalPosts);
  if ($$props.path === void 0 && $$bindings.path && path !== void 0)
    $$bindings.path(path);
  pagesAvailable = Math.ceil(totalPosts / postsPerPage);
  return `${pagesAvailable > 1 ? `<div class="${"navpill2"}"><ul class="${"flex2"}">${each(Array.from({ length: pagesAvailable }, (_, i) => i + 1), (page) => {
    return `${isCurrentPage(page) ? `<li style="${"font-weight:600;"}">${escape(page)}</li>` : `<li><a href="${escape(path, true) + "/" + escape(page, true)}">${escape(page)}</a></li>`}`;
  })}</ul></div>` : ``}`;
});
export {
  PostsList as P,
  Pagination as a
};
