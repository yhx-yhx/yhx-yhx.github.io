import{ak as n,h as l,j as i,R as e,J as t,aE as p,ab as h,f as k}from"./chunks/framework.BXTVzWSF.js";const u=JSON.parse('{"title":"页面自适应方案","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/内容/页面自适应方案.md","filePath":"我的/分享/内容/页面自适应方案.md","lastUpdated":1728664030000}'),r={name:"我的/分享/内容/页面自适应方案.md"};function d(o,s,E,c,g,F){const a=h("ArticleMetadata");return k(),l("div",null,[s[0]||(s[0]=i("h1",{id:"页面自适应方案",tabindex:"-1"},[e("页面自适应方案 "),i("a",{class:"header-anchor",href:"#页面自适应方案","aria-label":'Permalink to "页面自适应方案"'},"​")],-1)),t(a),s[1]||(s[1]=p(`<h2 id="基于-rem-实现" tabindex="-1">基于 rem 实现 <a class="header-anchor" href="#基于-rem-实现" aria-label="Permalink to &quot;基于 rem 实现&quot;">​</a></h2><ul><li>postcss pxtorem 通过插件实现 ，使用该插件可以实现 页面调整大小的 同时 整个页面等同于 按同比例缩放，通过 改变 根元素的font-size 来实现；</li><li>使用scss 函数实现</li></ul><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$rootFontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pxtorem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $rootFontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">rem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="基于vw-实现" tabindex="-1">基于vw 实现 <a class="header-anchor" href="#基于vw-实现" aria-label="Permalink to &quot;基于vw 实现&quot;">​</a></h2><ul><li>使用vw vh 实现，通过 改变 根元素的font-size 来实现；</li><li>使用scss 函数实现</li></ul><div class="language-scss vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$rootFontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pxtovw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $rootFontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vw</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$rootFontSize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@function</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> pxtovh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    @return</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $px</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> $rootFontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">vh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>实现自适尺寸 仅是尺寸问题 不改变布局 使用相对单位 是可以实现的</p></blockquote><blockquote><p>当然如果需要根据不同的尺寸动态调整 页面的的布局 可以使用媒体查询 来实现</p></blockquote>`,8))])}const b=n(r,[["render",d]]);export{u as __pageData,b as default};
