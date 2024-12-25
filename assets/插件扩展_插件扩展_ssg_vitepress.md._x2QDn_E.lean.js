import{C as e}from"./chunks/index.B7DVpl5b.js";import{h as l,j as a,R as p,J as i,aE as t,ab as h,f as r}from"./chunks/framework.bB9sJqKE.js";const k="/assets/bg.Cp05qnai.png",E=JSON.parse('{"title":"VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/插件扩展/ssg/vitepress.md","filePath":"插件扩展/插件扩展/ssg/vitepress.md","lastUpdated":1732851638000}'),d={name:"插件扩展/插件扩展/ssg/vitepress.md"},g=Object.assign(d,{setup(c){return(o,s)=>{const n=h("ArticleMetadata");return r(),l("div",null,[s[0]||(s[0]=a("h1",{id:"vitepress",tabindex:"-1"},[p("VitePress "),a("a",{class:"header-anchor",href:"#vitepress","aria-label":'Permalink to "VitePress"'},"​")],-1)),i(n),s[1]||(s[1]=t(`<h2 id="写在前面" tabindex="-1">写在前面 <a class="header-anchor" href="#写在前面" aria-label="Permalink to &quot;写在前面&quot;">​</a></h2><p>👀 <a href="https://vitepress.dev/zh/guide/getting-started" target="_blank" rel="noreferrer">VitePress</a></p><p>遇见问题可以自行尝试解决 <a href="https://github.com/vuejs/vitepress/issues" target="_blank" rel="noreferrer">issues</a></p><h2 id="vitepress-介绍" tabindex="-1">VitePress 介绍 <a class="header-anchor" href="#vitepress-介绍" aria-label="Permalink to &quot;VitePress 介绍&quot;">​</a></h2><p>VitePress 是一个基于 Vue.js 和 Vite 的静态网站生成器，它提供了一种简单的方式来创建文档网站。在本篇回答中，我将为您提供从入门到高级的 VitePress 使用指南，并介绍如何将您的项目部署到 Gitee 和 Github 上。</p><h2 id="入门" tabindex="-1">入门 <a class="header-anchor" href="#入门" aria-label="Permalink to &quot;入门&quot;">​</a></h2><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><p>首先，您需要安装 Node.js 和 npm。然后，在您的终端中运行以下命令来全局安装 VitePress：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install -g vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建项目" tabindex="-1">创建项目 <a class="header-anchor" href="#创建项目" aria-label="Permalink to &quot;创建项目&quot;">​</a></h3><p>使用以下命令创建一个新的 VitePress 项目：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkdir my-docs</span></span>
<span class="line"><span>cd my-docs</span></span>
<span class="line"><span>npm init vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>这将创建一个新的 VitePress 项目，并在当前目录中生成一个名为 <code>docs</code> 的文件夹。在 <code>docs</code> 文件夹中，您可以编写您的文档。</p><h3 id="编写文档" tabindex="-1">编写文档 <a class="header-anchor" href="#编写文档" aria-label="Permalink to &quot;编写文档&quot;">​</a></h3><p>在 <code>docs</code> 文件夹中，您可以创建一个名为 <code>README.md</code> 的 Markdown 文件，作为您的主页。您还可以创建其他 Markdown 文件来组织您的文档。</p><p>在您的 Markdown 文件中，您可以使用 Vue.js 的组件和指令，以及 VitePress 提供的一些特殊的 Markdown 扩展，来创建丰富的文档页面。例如，您可以使用以下语法来创建一个可折叠的代码块：</p><details class="details custom-block"><summary>点击查看代码</summary><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><h3 id="本地预览" tabindex="-1">本地预览 <a class="header-anchor" href="#本地预览" aria-label="Permalink to &quot;本地预览&quot;">​</a></h3><p>在您的项目根目录中，运行以下命令来启动本地服务器：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run dev</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后，在您的浏览器中访问 <code>http://localhost:5173</code>，您将看到您的文档网站。</p><h3 id="构建" tabindex="-1">构建 <a class="header-anchor" href="#构建" aria-label="Permalink to &quot;构建&quot;">​</a></h3><p>当您完成编写文档后，可以使用以下命令构建静态网站：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm run build</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这将生成一个名为 <code>dist</code> 的文件夹，其中包含您的静态网站的所有文件。</p><h2 id="高级" tabindex="-1">高级 <a class="header-anchor" href="#高级" aria-label="Permalink to &quot;高级&quot;">​</a></h2><h3 id="部署到-gitee" tabindex="-1">部署到 Gitee <a class="header-anchor" href="#部署到-gitee" aria-label="Permalink to &quot;部署到 Gitee&quot;">​</a></h3><p>要将您的 VitePress 项目部署到 Gitee Pages 上，您需要执行以下步骤：</p><ol><li><p>在 Gitee 上创建一个新的仓库，并将您的 VitePress 项目推送到该仓库中。</p></li><li><p>在您的项目根目录中，创建一个名为 <code>.gitee.yml</code> 的文件，其中包含以下内容：</p></li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>build:</span></span>
<span class="line"><span>  script:</span></span>
<span class="line"><span>    - npm run build</span></span>
<span class="line"><span>  artifacts:</span></span>
<span class="line"><span>    - dist/**</span></span>
<span class="line"><span>  only:</span></span>
<span class="line"><span>    - master</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>这将告诉 Gitee 在 <code>master</code> 分支上构建您的项目，并将生成的 <code>dist</code> 文件夹作为静态资源。</p><ol start="3"><li><p>在 Gitee 仓库的设置页面中，启用 Pages 服务，并选择 <code>gh-pages</code> 分支和 <code>dist</code> 文件夹作为页面源。</p></li><li><p>提交代码并等待构建完成。完成后，您可以访问 <code>https://&lt;username&gt;.gitee.io/&lt;repository&gt;</code> 来查看您的文档网站。</p></li></ol><h3 id="部署到-github" tabindex="-1">部署到 Github <a class="header-anchor" href="#部署到-github" aria-label="Permalink to &quot;部署到 Github&quot;">​</a></h3><p>要将您的 VitePress 项目部署到 Github Pages 上，您需要执行以下步骤：</p><ol><li><p>在 Github 上创建一个新的仓库，并将您的 VitePress 项目推送到该仓库中。</p></li><li><p>在您的项目根目录中，创建一个名为 <code>.github/workflows/deploy.yml</code> 的文件，其中包含以下内容：</p></li></ol><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  push:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    branches:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  deploy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    runs-on:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> actions/checkout@v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        run:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Deploy</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GitHub</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Pages</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        uses:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        with:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          personal_token:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${{ secrets.ACCESS_TOKEN }</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          publish_dir:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./dist</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><p>这将创建一个 Github Actions 工作流，用于在 <code>master</code> 分支上构建您的项目，并将生成的 <code>dist</code> 文件夹部署到 Github Pages 上。</p><ol start="3"><li><p>在 Github 仓库的设置页面中，启用 Github Pages 服务，并选择 <code>gh-pages</code> 分支和 <code>dist</code> 文件夹作为页面源。</p></li><li><p>在您的 Github 仓库的设置页面中，创建一个名为 <code>ACCESS_TOKEN</code> 的新的 Secrets，并将您的个人访问令牌作为值。</p></li><li><p>提交代码并等待构建完成。完成后，您可以访问 <code>https://&lt;username&gt;.github.io/&lt;repository&gt;</code> 来查看您的文档网站。</p></li></ol><h2 id="vitepress-插件" tabindex="-1">vitepress 插件 <a class="header-anchor" href="#vitepress-插件" aria-label="Permalink to &quot;vitepress 插件&quot;">​</a></h2><h3 id="_01-评论-giscus" tabindex="-1">01 评论（giscus） <a class="header-anchor" href="#_01-评论-giscus" aria-label="Permalink to &quot;01 评论（giscus）&quot;">​</a></h3><p>giscus 是一个基于 GitHub Discussions 的评论组件。</p><h4 id="安装-1" tabindex="-1">安装 <a class="header-anchor" href="#安装-1" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @giscus/vue</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # for Vue</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><ul><li><p>github 安装 giscus 插件</p></li><li><p>注意仓库必须未公开的的仓库</p></li><li><p>使用它 <a href="https://giscus.app/zh-CN" target="_blank" rel="noreferrer">giscus</a> 配置</p></li><li><p>根据不同的框架进行转换比如<a href="https://github.com/giscus/giscus-component" target="_blank" rel="noreferrer">giscus</a></p></li></ul><h3 id="_02-网页浏览量-busuanzi" tabindex="-1">02 网页浏览量（ busuanzi ） <a class="header-anchor" href="#_02-网页浏览量-busuanzi" aria-label="Permalink to &quot;02 网页浏览量（ busuanzi ）&quot;">​</a></h3><p>busuanzi 是一个简单的网页访问统计插件。</p><h4 id="安装-2" tabindex="-1">安装 <a class="header-anchor" href="#安装-2" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> busuanzi.pure.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>or</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="使用-1" tabindex="-1">使用 <a class="header-anchor" href="#使用-1" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">section</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;grid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    本站总阅读量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;busuanzi_value_page_pv&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;--&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    本站总访问量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;busuanzi_value_site_pv&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;--&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    本站访客数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;busuanzi_value_site_uv&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;font-bold&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;--&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; 人次</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">section</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_03-umami" tabindex="-1">03 <a href="https://eu.umami.is/" target="_blank" rel="noreferrer">umami</a> <a class="header-anchor" href="#_03-umami" aria-label="Permalink to &quot;03 [umami](https://eu.umami.is/)&quot;">​</a></h3><p>umami 是一个开源的网络分析平台，可以用来跟踪和分析网站的访问量和用户行为。</p><h4 id="使用-2" tabindex="-1">使用 <a class="header-anchor" href="#使用-2" aria-label="Permalink to &quot;使用&quot;">​</a></h4><p>在您的 VitePress 项目中，您可以通过在 <code>.vitepress/config.js</code> 文件中添加以下代码来集成 umami：</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vitepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  head: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        async: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://your-umami-instance.com/umami.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;data-website-id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your-website-id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>请确保将 <code>https://your-umami-instance.com/umami.js</code> 替换为您的 umami 实例的 URL，并将 <code>your-website-id</code> 替换为您在 umami 平台上获得的实际网站 ID。</p><h3 id="_04-图片预览-medium-zoom" tabindex="-1">04 图片预览（ medium-zoom ） <a class="header-anchor" href="#_04-图片预览-medium-zoom" aria-label="Permalink to &quot;04 图片预览（ medium-zoom ）&quot;">​</a></h3><p><a href="https://github.com/francoischalifour/medium-zoom" target="_blank" rel="noreferrer">medium-zoom github</a><a href="https://medium-zoom.francoischalifour.com/" target="_blank" rel="noreferrer">medium-zoom officialWebsite</a></p><p><a href="https://github.com/francoischalifour/medium-zoom#issuecomment-1335555738" target="_blank" rel="noreferrer">在 vitepress 中使用 medium-zoom issue</a></p><h4 id="安装-3" tabindex="-1">安装 <a class="header-anchor" href="#安装-3" aria-label="Permalink to &quot;安装&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> medium-zoom</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="使用-3" tabindex="-1">使用 <a class="header-anchor" href="#使用-3" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-vue vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import type { Theme } from &#39;vitepress&#39; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { inBrowser, useRoute } from &#39;vitepress&#39; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import mediumZoom from &#39;medium-zoom&#39; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { nextTick, watch } from &#39;vue&#39; </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">watch(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () =&gt; route.path,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  () =&gt; nextTick(() =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    if (inBrowser)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      mediumZoom(&#39;.main img&#39;, { background: &#39;var(--vp-c-bg)&#39; }); // 不显式添加{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      // data-zoomable } 的情况下为所有图像启用此功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    // mediumZoom(&#39;[data-zoomable]&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }), {  immediate: true }, )</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="测试" tabindex="-1">测试 <a class="header-anchor" href="#测试" aria-label="Permalink to &quot;测试&quot;">​</a></h4><p><img src="`+k+'" alt="medium-zoom"></p>',68)),i(e)])}}});export{E as __pageData,g as default};
