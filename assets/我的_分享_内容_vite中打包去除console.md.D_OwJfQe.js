import{ak as e,h as n,j as a,R as l,J as t,aE as p,ab as r,f as h}from"./chunks/framework.bB9sJqKE.js";const m=JSON.parse('{"title":"vite 中打包去除 console","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/内容/vite中打包去除console.md","filePath":"我的/分享/内容/vite中打包去除console.md","lastUpdated":1730305278000}'),o={name:"我的/分享/内容/vite中打包去除console.md"};function k(d,s,c,b,E,u){const i=r("ArticleMetadata");return h(),n("div",null,[s[0]||(s[0]=a("h1",{id:"vite-中打包去除-console",tabindex:"-1"},[l("vite 中打包去除 console "),a("a",{class:"header-anchor",href:"#vite-中打包去除-console","aria-label":'Permalink to "vite 中打包去除 console"'},"​")],-1)),t(i),s[1]||(s[1]=p(`<h2 id="使用-esbuild-打包时-默认打包方案" tabindex="-1">使用 esbuild 打包时（默认打包方案） <a class="header-anchor" href="#使用-esbuild-打包时-默认打包方案" aria-label="Permalink to &quot;使用 esbuild 打包时（默认打包方案）&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考地址：</p><p><a href="https://cn.vitejs.dev/config/shared-options.html#esbuild" target="_blank" rel="noreferrer">vite esbuild </a></p><p><a href="https://esbuild.github.io/api/#drop" target="_blank" rel="noreferrer">vite esbuild drop</a></p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ……</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  esbuild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    drop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;debugger&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ……</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="使用-terser-打包时-minify-terser" tabindex="-1">使用 terser 打包时(minify:&#39;terser&#39;) <a class="header-anchor" href="#使用-terser-打包时-minify-terser" aria-label="Permalink to &quot;使用 terser 打包时(minify:&#39;terser&#39;)&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">参考内容：</p><p><a href="https://cn.vitejs.dev/config/build-options.html#build-terseroptions" target="_blank" rel="noreferrer">vite terserOptions</a></p><p><a href="https://terser.org/docs/api-reference/#minify-options" target="_blank" rel="noreferrer">terserOptions minify-options</a></p><p><a href="https://terser.org/docs/options/#compress-options" target="_blank" rel="noreferrer">compress-options</a></p></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  minify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;terser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ……</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  terserOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    compress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      drop_console</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ……</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,6))])}const y=e(o,[["render",k]]);export{m as __pageData,y as default};
