import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BvcBN_I5.mjs';
import { manifest } from './manifest_DYUlyl7X.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/og.astro.mjs');
const _page3 = () => import('./pages/checkout.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/login.astro.mjs');
const _page6 = () => import('./pages/profile.astro.mjs');
const _page7 = () => import('./pages/signup.astro.mjs');
const _page8 = () => import('./pages/workshops.astro.mjs');
const _page9 = () => import('./pages/workshopsid/_id_.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/og.ts", _page2],
    ["src/pages/checkout.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/login.astro", _page5],
    ["src/pages/profile.astro", _page6],
    ["src/pages/signup.astro", _page7],
    ["src/pages/workshops.astro", _page8],
    ["src/pages/workshopsId/[id].astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "84831991-606b-4088-b065-87f4a0f64f05",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
