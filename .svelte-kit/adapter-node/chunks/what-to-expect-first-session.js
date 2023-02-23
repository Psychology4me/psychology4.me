import { c as create_ssr_component } from "./index.js";
const metadata = {
  "title": "What to expect in your first session?",
  "date": "2023-02-17",
  "updated": "2023-02-17",
  "categories": ["Therapy Center"],
  "coverImage": "/src/lib/img/article_3.webp",
  "excerpt": "Check out how heading links work with this starter in this post."
};
const What_to_expect_first_session = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p>Here are some headings:</p>
<h2 id="${"heres-an-h2"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#heres-an-h2"}"><span class="${"icon icon-link"}"></span></a>Here’s an h2</h2>
<p>Lorem ipsum dolor sit amet</p>
<h3 id="${"this-is-an-h3"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#this-is-an-h3"}"><span class="${"icon icon-link"}"></span></a>This is an h3</h3>
<p>Lorem ipsum dolor sit amet</p>
<h4 id="${"as-youve-probably-guessed-this-is-an-h4"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#as-youve-probably-guessed-this-is-an-h4"}"><span class="${"icon icon-link"}"></span></a>As you’ve probably guessed, this is an h4</h4>
<p>Lorem ipsum dolor sit amet</p>
<h5 id="${"this-of-course-is-an-h5"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#this-of-course-is-an-h5"}"><span class="${"icon icon-link"}"></span></a>This, of course, is an h5</h5>
<p>Lorem ipsum dolor sit amet</p>
<h6 id="${"were-deep-in-h6-territory-now"}"><a aria-hidden="${"true"}" tabindex="${"-1"}" href="${"#were-deep-in-h6-territory-now"}"><span class="${"icon icon-link"}"></span></a>We’re deep in h6 territory now</h6>
<p>Lorem ipsum dolor sit amet</p>`;
});
export {
  What_to_expect_first_session as default,
  metadata
};
