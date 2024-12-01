import{ak as s,h as n,j as a,R as t,J as l,aE as r,ab as d,f as o}from"./chunks/framework.BXTVzWSF.js";const E=JSON.parse('{"title":"环境变量","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/vite/环境变量.md","filePath":"基础知识/vite/环境变量.md","lastUpdated":1713792803000}'),p={name:"基础知识/vite/环境变量.md"};function h(c,e,v,m,u,k){const i=d("ArticleMetadata");return o(),n("div",null,[e[0]||(e[0]=a("h1",{id:"环境变量",tabindex:"-1"},[t("环境变量 "),a("a",{class:"header-anchor",href:"#环境变量","aria-label":'Permalink to "环境变量"'},"​")],-1)),l(i),e[1]||(e[1]=r(`<h2 id="vite-env-vite文档-环境变量" tabindex="-1">vite env <a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-files" target="_blank" rel="noreferrer">vite文档/环境变量</a> <a class="header-anchor" href="#vite-env-vite文档-环境变量" aria-label="Permalink to &quot;vite env [vite文档/环境变量](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)&quot;">​</a></h2><h2 id="env-文件" tabindex="-1">.env 文件 <a class="header-anchor" href="#env-文件" aria-label="Permalink to &quot;.env 文件&quot;">​</a></h2><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.env                # 所有情况下都会加载</span></span>
<span class="line"><span>.env.local          # 所有情况下都会加载，但会被 git 忽略</span></span>
<span class="line"><span>.env.[mode]         # 只在指定模式下加载</span></span>
<span class="line"><span>.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>**注意：**为了防止意外地将一些环境变量泄漏到客户端，只有以 <code>VITE_</code> 为前缀的变量才会暴露给经过 vite 处理的代码</p></blockquote><h2 id="html-环境变量替换" tabindex="-1">HTML 环境变量替换<a href="https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement" target="_blank" rel="noreferrer">#</a> <a class="header-anchor" href="#html-环境变量替换" aria-label="Permalink to &quot;HTML 环境变量替换[#](https://cn.vitejs.dev/guide/env-and-mode.html#html-env-replacement)&quot;">​</a></h2><p>Vite 还支持在 HTML 文件中替换环境变量。<code>import.meta.env</code> 中的任何属性都可以通过特殊的 <code>%ENV_NAME%</code> 语法在 HTML 文件中使用：</p><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Vite is running in %MODE%&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Using data from %VITE_API_URL%&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果环境变量在 <code>import.meta.env</code> 中不存在，比如不存在的 <code>%NON_EXISTENT%</code>，则会将被忽略而不被替换，这与 JS 中的 <code>import.meta.env.NON_EXISTENT</code> 不同，JS 中会被替换为 <code>undefined</code>。</p><h2 id="模式" tabindex="-1">模式 <a class="header-anchor" href="#模式" aria-label="Permalink to &quot;模式&quot;">​</a></h2><h4 id="文件名称" tabindex="-1">文件名称 <a class="header-anchor" href="#文件名称" aria-label="Permalink to &quot;文件名称&quot;">​</a></h4><ul><li>开发 .env.development</li><li>生产版本 .env.production</li><li>测试版本 .env.test</li></ul><h4 id="打包时的模式切换" tabindex="-1">打包时的模式切换 <a class="header-anchor" href="#打包时的模式切换" aria-label="Permalink to &quot;打包时的模式切换&quot;">​</a></h4><ul><li>开发时 vite build --mode development</li><li>生产版本 vite build --mode production</li><li>测试版本 vite build --mode test</li></ul>`,13))])}const g=s(p,[["render",h]]);export{E as __pageData,g as default};
