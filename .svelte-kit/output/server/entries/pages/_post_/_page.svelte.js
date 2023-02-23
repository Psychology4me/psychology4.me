import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../chunks/index2.js";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";
dayjs.extend(relativeTime);
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight, categories } = data.meta;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1h6ao0i_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<meta data-key="${"description"}" name="${"description"}"${add_attribute("content", excerpt, 0)}><meta property="${"og:type"}" content="${"article"}"><meta property="${"og:title"}"${add_attribute("content", title, 0)}><meta name="${"twitter:title"}"${add_attribute("content", title, 0)}><meta property="${"og:description"}"${add_attribute("content", excerpt, 0)}><meta name="${"twitter:description"}"${add_attribute("content", excerpt, 0)}><meta property="${"og:image"}"${add_attribute("content", coverImage, 0)}> --&gt;
	<meta property="${"og:image:width"}"${add_attribute("content", coverWidth, 0)}><meta property="${"og:image:height"}"${add_attribute("content", coverHeight, 0)}><meta name="${"twitter:image"}"${add_attribute("content", coverImage, 0)}> --&gt;
<!-- HEAD_svelte-1h6ao0i_END -->`, ""}


${``}`;
});
export {
  Page as default
};
