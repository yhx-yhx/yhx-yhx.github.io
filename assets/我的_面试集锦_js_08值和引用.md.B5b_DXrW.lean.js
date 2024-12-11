import{ak as n,h as l,j as i,R as e,J as t,aE as h,ab as p,f as k}from"./chunks/framework.BXTVzWSF.js";const b=JSON.parse('{"title":"值和引用","description":"","frontmatter":{},"headers":[],"relativePath":"我的/面试集锦/js/08值和引用.md","filePath":"我的/面试集锦/js/08值和引用.md","lastUpdated":1733798646000}'),d={name:"我的/面试集锦/js/08值和引用.md"};function r(o,s,c,E,g,y){const a=p("ArticleMetadata");return k(),l("div",null,[s[0]||(s[0]=i("h1",{id:"值和引用",tabindex:"-1"},[e("值和引用 "),i("a",{class:"header-anchor",href:"#值和引用","aria-label":'Permalink to "值和引用"'},"​")],-1)),t(a),s[1]||(s[1]=h(`<h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><ul><li>值（基础）类型：<code>string</code>、<code>number</code>、<code>boolean</code>、<code>null</code>、<code>undefined</code>、<code>symbol</code>、<code>bigint</code></li><li>引用类型：<code>object</code>、<code>array</code>、<code>function</code></li></ul><h2 id="值-基础-类型" tabindex="-1">值（基础）类型 <a class="header-anchor" href="#值-基础-类型" aria-label="Permalink to &quot;值（基础）类型&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> bol</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> u</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Symbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;symbol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BigInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> bol); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// boolean</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// object</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> u); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// undefined</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> s); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// symbol</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bigint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li><code>typeof</code> 可以用来判断值的类型</li><li><code>typeof</code> 对于 <code>null</code> 返回 <code>object</code>，这是 JavaScript 的一个历史遗留问题，需要特别注意</li><li>具体原因是因为不同的对象在底层都是以二进制存储，在 JavaScript 中，前三位都为 0 会被判断为 object 类型，而 <code>null</code> 的二进制表示全为 0，所以 typeof null 会返回 <code>object</code></li></ul></div><h3 id="null" tabindex="-1">null <a class="header-anchor" href="#null" aria-label="Permalink to &quot;null&quot;">​</a></h3><p><code>null</code> 表示空对象指针，转为数值为 0 经典用法：</p><ul><li>作为函数的参数，表示该函数的参数不是对象</li><li>作为对象原型链的终点</li></ul><h3 id="undefined" tabindex="-1">undefined <a class="header-anchor" href="#undefined" aria-label="Permalink to &quot;undefined&quot;">​</a></h3><p><code>undefined</code> 表示未定义，转为数值为 NaN 经典用法：</p><ul><li>变量未初始化</li><li>函数无返回值</li><li>对象属性不存在</li><li>函数参数未传递</li></ul><h2 id="引用类型" tabindex="-1">引用类型 <a class="header-anchor" href="#引用类型" aria-label="Permalink to &quot;引用类型&quot;">​</a></h2><ul><li>引用类型：<code>object</code>、<code>array</code>、<code>function</code></li><li><strong>引用类型存在堆内存中，栈内存中存储的是引用类型的地址</strong></li></ul><h3 id="比较" tabindex="-1">比较 <a class="header-anchor" href="#比较" aria-label="Permalink to &quot;比较&quot;">​</a></h3><ul><li>值类型比较的是值</li><li>引用类型比较的是地址</li></ul><h3 id="赋值" tabindex="-1">赋值 <a class="header-anchor" href="#赋值" aria-label="Permalink to &quot;赋值&quot;">​</a></h3><ul><li>值类型赋值是<code>值</code>的复制</li><li>引用类型赋值是<code>地址</code>的复制</li></ul><h3 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-label="Permalink to &quot;访问&quot;">​</a></h3><ul><li>值类型访问的是<code>值</code></li><li>引用类型访问的是<code>地址</code></li></ul><h3 id="动态属性" tabindex="-1">动态属性 <a class="header-anchor" href="#动态属性" aria-label="Permalink to &quot;动态属性&quot;">​</a></h3><ul><li>值类型不能动态添加属性</li><li>引用类型可以动态添加属性</li></ul>`,21))])}const F=n(d,[["render",r]]);export{b as __pageData,F as default};
