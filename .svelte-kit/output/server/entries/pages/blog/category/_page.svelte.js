import { c as create_ssr_component } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1u8nkce_START -->${$$result.title = `<title>Categories - Psychology4.me</title>`, ""}<meta data-key="${"description"}" name="${"description"}" content="${"\n	Welcome to my blog! Here you will find articles sharing insights into my online counselling work, therapeutic stories, exercises to improve your mental health, as well as glimpses into my life as a male psychologist."}"><!-- HEAD_svelte-1u8nkce_END -->`, ""}
  
  ${``}`;
});
export {
  Page as default
};
