import{ak as e,h as l,j as s,R as t,J as n,aE as r,ab as p,f as o}from"./chunks/framework.bB9sJqKE.js";const v=JSON.parse('{"title":"大屏自适应方案","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/内容/大屏自适应.md","filePath":"我的/分享/内容/大屏自适应.md","lastUpdated":1727343416000}'),h={name:"我的/分享/内容/大屏自适应.md"};function d(c,a,k,u,b,m){const i=p("ArticleMetadata");return o(),l("div",null,[a[0]||(a[0]=s("h1",{id:"大屏自适应方案",tabindex:"-1"},[t("大屏自适应方案 "),s("a",{class:"header-anchor",href:"#大屏自适应方案","aria-label":'Permalink to "大屏自适应方案"'},"​")],-1)),n(i),a[1]||(a[1]=r(`<h2 id="rem" tabindex="-1">rem <a class="header-anchor" href="#rem" aria-label="Permalink to &quot;rem&quot;">​</a></h2><blockquote><p>postcsstoRem</p></blockquote><ul><li>将所有的 px 单位转成 rem</li><li>设置 root 字体大小</li><li>设置忽略的类名 比如 border 等</li><li>行内样式无法处理（需要 js 实现动态获取 替换 sass function）</li></ul><h4 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h4><ul><li><p>可以采用 postcsstoRem</p></li><li><p>sass function 实现</p><div class="language-sass vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sass</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$root-font-size:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">16</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pxToRem(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$px</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    #{</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$root-font-size</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ul><h2 id="vw-vh" tabindex="-1">vw vh <a class="header-anchor" href="#vw-vh" aria-label="Permalink to &quot;vw vh&quot;">​</a></h2><blockquote><p>用的不多</p></blockquote><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><ul><li>px vh （vw）</li><li>思路同上</li></ul><h2 id="scale" tabindex="-1">scale <a class="header-anchor" href="#scale" aria-label="Permalink to &quot;scale&quot;">​</a></h2><blockquote><p>个人不是很推荐</p></blockquote><blockquote><p>视频窗口的等比例缩放方案</p></blockquote><h4 id="原理-1" tabindex="-1">原理 <a class="header-anchor" href="#原理-1" aria-label="Permalink to &quot;原理&quot;">​</a></h4><ul><li><p>采用 <code>transform</code> css 属性</p></li><li><p>传入原始（默认）尺寸 ，监听事件 计算缩放比例，将内容缩放（取最小缩放比例） 平移</p></li><li><p>或者 达到同样的效果 可以使用 vh（vw）aspect-ratio 属性</p></li></ul><h4 id="存在问题" tabindex="-1">存在问题 <a class="header-anchor" href="#存在问题" aria-label="Permalink to &quot;存在问题&quot;">​</a></h4><ul><li><p>可能存在 鼠标点击位置偏移 （动态计算 即使动态计算 计算结果比例小数层级过深 导致浏览器渲染计算偏移）</p></li><li><p>canvas 都要做缩放系数的处理 非常复杂（没处理过）</p></li></ul>`,16))])}const f=e(h,[["render",d]]);export{v as __pageData,f as default};
