import * as server from '../entries/pages/blog/_page.server.js';

export const index = 5;
export const component = async () => (await import('../entries/pages/blog/_page.svelte.js')).default;
export const file = '_app/immutable/entry/blog-page.svelte.eb39e253.mjs';
export { server };
export const server_id = "src/routes/blog/+page.server.js";
export const imports = ["_app/immutable/entry/blog-page.svelte.eb39e253.mjs","_app/immutable/chunks/index.aad57b58.mjs","_app/immutable/chunks/Pagination.65e4b73e.mjs","_app/immutable/chunks/author_picture.5e194794.mjs"];
export const stylesheets = [];
export const fonts = [];
