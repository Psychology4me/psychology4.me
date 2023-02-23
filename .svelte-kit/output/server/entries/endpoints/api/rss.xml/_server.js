import { s as siteTitle, a as siteDescription, b as siteLink, c as siteURL } from "../../../../chunks/config.js";
const prerender = true;
const GET = async () => {
  const data = await Promise.all(
    Object.entries(/* @__PURE__ */ Object.assign({ "/src/lib/posts/10-signs-right-psychologist.md": () => import("../../../../chunks/10-signs-right-psychologist.js"), "/src/lib/posts/benefits-of-online-counselling.md": () => import("../../../../chunks/benefits-of-online-counselling.js"), "/src/lib/posts/what-to-expect-first-session.md": () => import("../../../../chunks/what-to-expect-first-session.js") })).map(async ([path, page]) => {
      const { metadata } = await page();
      const slug = path.split("/").pop().split(".").shift();
      return { ...metadata, slug };
    })
  ).then((posts) => {
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  });
  const body = render(data);
  const headers = {
    "Cache-Control": `max-age=0, s-max-age=${600}`,
    "Content-Type": "application/xml"
  };
  return new Response(
    body,
    {
      status: 200,
      headers
    }
  );
};
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteLink}</link>
<atom:link href="https://${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts.map(
  (post) => `<item>
<guid isPermaLink="true">https://${siteURL}/blog/${post.slug}</guid>
<title>${post.title}</title>
<link>https://${siteURL}/blog/${post.slug}</link>
<description>${post.excerpt}</description>
<pubDate>${new Date(post.date).toUTCString()}</pubDate>
</item>`
).join("")}
</channel>
</rss>
`;
export {
  GET,
  prerender
};
