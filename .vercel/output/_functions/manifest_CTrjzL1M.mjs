import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_BIQpHMk-.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_1QB-h2wn.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Daniel/MasterCook/","cacheDir":"file:///D:/Daniel/MasterCook/node_modules/.astro/","outDir":"file:///D:/Daniel/MasterCook/dist/","srcDir":"file:///D:/Daniel/MasterCook/src/","publicDir":"file:///D:/Daniel/MasterCook/public/","buildClientDir":"file:///D:/Daniel/MasterCook/dist/client/","buildServerDir":"file:///D:/Daniel/MasterCook/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/og","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/og\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"og","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/og.ts","pathname":"/api/og","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/checkout","isIndex":false,"type":"page","pattern":"^\\/checkout\\/?$","segments":[[{"content":"checkout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/checkout.astro","pathname":"/checkout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/profile","isIndex":false,"type":"page","pattern":"^\\/profile\\/?$","segments":[[{"content":"profile","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/profile.astro","pathname":"/profile","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/workshops","isIndex":false,"type":"page","pattern":"^\\/workshops\\/?$","segments":[[{"content":"workshops","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/workshops.astro","pathname":"/workshops","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/workshopsid/[id]","isIndex":false,"type":"page","pattern":"^\\/workshopsId\\/([^/]+?)\\/?$","segments":[[{"content":"workshopsId","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/workshopsId/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DpVf9JPg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Daniel/MasterCook/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/checkout.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/index.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/login.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/profile.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/signup.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/workshops.astro",{"propagation":"none","containsHead":true}],["D:/Daniel/MasterCook/src/pages/workshopsId/[id].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/og@_@ts":"pages/api/og.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/checkout@_@astro":"pages/checkout.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/profile@_@astro":"pages/profile.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/workshops@_@astro":"pages/workshops.astro.mjs","\u0000@astro-page:src/pages/workshopsId/[id]@_@astro":"pages/workshopsid/_id_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Daniel/MasterCook/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B6MUxuXy.mjs","\u0000@astrojs-manifest":"manifest_CTrjzL1M.mjs","@/components/contactC":"_astro/contactC.BpgOHZOX.js","D:/Daniel/MasterCook/src/components/checkoutC":"_astro/checkoutC.BWA0yRHM.js","@/components/aboutC":"_astro/aboutC.BicqdgPp.js","D:/Daniel/MasterCook/src/components/logInC":"_astro/logInC.CzzBScMz.js","@/components/dashboard":"_astro/dashboard.D6XQh_U2.js","D:/Daniel/MasterCook/src/components/workshop.jsx":"_astro/workshop.D7Ot9TT5.js","@/components/signUpC":"_astro/signUpC.CRq9Oeqd.js","D:/Daniel/MasterCook/src/components/categories":"_astro/categories.BqWiJoGN.js","D:/Daniel/MasterCook/src/components/featured":"_astro/featured.DKExL3Ls.js","D:/Daniel/MasterCook/src/components/featuredCards":"_astro/featuredCards.BO3HBY3v.js","D:/Daniel/MasterCook/src/components/workshopid":"_astro/workshopid.DqaHbZC9.js","D:/Daniel/MasterCook/src/components/header":"_astro/header.DblUyUwL.js","@astrojs/react/client.js":"_astro/client.D2WMwoKK.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.DpVf9JPg.css","/alcohol{.webp","/Bebidas.webp","/Benfits-2.png","/buñuelos.webp","/Creativa.webp","/ensalada.webp","/favicon.svg","/hero.webp","/Icon-1.webp","/Icon-2.webp","/Icon-3.webp","/Internacional.webp","/Molecular.webp","/Niños.webp","/Person-1.jpg","/Person-2.jpg","/Person-3.jpg","/Person-4.jpg","/pizza.webp","/pizzaVega.webp","/Principiantes.webp","/Saludable.webp","/Temporada.webp","/Vegetariana.webp","/_astro/aboutC.BicqdgPp.js","/_astro/arrow-right.1S_H47eA.js","/_astro/calendar.CLrY_9Yq.js","/_astro/categories.BqWiJoGN.js","/_astro/check.DErKrk8i.js","/_astro/checkoutC.BWA0yRHM.js","/_astro/chevron-left.aKcX9v7o.js","/_astro/client.D2WMwoKK.js","/_astro/clock.iALahFT7.js","/_astro/contactC.BpgOHZOX.js","/_astro/createLucideIcon.CFjhCtiB.js","/_astro/dashboard.D6XQh_U2.js","/_astro/featured.DKExL3Ls.js","/_astro/featuredCards.BO3HBY3v.js","/_astro/header.DblUyUwL.js","/_astro/index.RH_Wq4ov.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/lock.CKM9AT-q.js","/_astro/logInC.CzzBScMz.js","/_astro/mail._kjwFHRK.js","/_astro/proxy.CtWKIOJ4.js","/_astro/shopping-bag.DlimQM-Z.js","/_astro/signUpC.CRq9Oeqd.js","/_astro/user.GJspPIFP.js","/_astro/workshop.D7Ot9TT5.js","/_astro/workshopid.DqaHbZC9.js","/_astro/x.C9bScxff.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"hVyMaF51wkp3E1+6Gdr5Zfw7X+CrSCB9C0xLYse/+cE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
