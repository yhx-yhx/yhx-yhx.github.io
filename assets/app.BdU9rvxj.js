import{R as p}from"./chunks/theme.SVj-sQ05.js";import{aC as s,aK as u,aL as l,aM as c,aN as f,aO as d,aP as m,aQ as h,aR as g,aS as A,aT as P,j as C,ao as R,o as v,a as w,aU as y,aV as S,aW as T,ai as b}from"./chunks/framework.8wObz1dk.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(p),E=C({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=R();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),S(),T(),o.setup&&o.setup(),()=>b(o.Layout)}});async function j(){globalThis.__VITEPRESS__=!0;const e=L(),a=D();a.provide(l,e);const t=c(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return g(E)}function L(){let e=s,a;return A(t=>{let n=P(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),s&&(e=!1),r},o.NotFound)}s&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{j as createApp};
