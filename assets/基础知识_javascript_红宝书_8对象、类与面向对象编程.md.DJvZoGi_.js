import{_ as i,c as s,o as a,a5 as t}from"./chunks/framework.DcGi6Jq3.js";const u=JSON.parse('{"title":"对象、类与面向对象编程","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/javascript/红宝书/8对象、类与面向对象编程.md","filePath":"基础知识/javascript/红宝书/8对象、类与面向对象编程.md","lastUpdated":1724749317000}'),e={name:"基础知识/javascript/红宝书/8对象、类与面向对象编程.md"},l=t(`<h1 id="对象、类与面向对象编程" tabindex="-1">对象、类与面向对象编程 <a class="header-anchor" href="#对象、类与面向对象编程" aria-label="Permalink to &quot;对象、类与面向对象编程&quot;">​</a></h1><h2 id="对象" tabindex="-1">对象 <a class="header-anchor" href="#对象" aria-label="Permalink to &quot;对象&quot;">​</a></h2><h3 id="理解对象" tabindex="-1">理解对象 <a class="header-anchor" href="#理解对象" aria-label="Permalink to &quot;理解对象&quot;">​</a></h3><blockquote><p>可以将它视为散列表，拥有若干的 名值对结构 ，值可以是 数据 或者函数</p></blockquote><ul><li><p>创建</p><ul><li><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div></li><li><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {};</span></span></code></pre></div></li></ul></li><li><p>属性类型</p><ul><li><p>数据属性【4 个描述对象特性的属性】</p><ul><li>[[Configurable]]:表示<strong>属性是否可以通过 delete 删除</strong>并重新定义，是否可以<strong>修改它的特性</strong>，以及<strong>是否可以修改访问器</strong>属性。<strong>默认情况下</strong>，所有被直接定义到对象的属性 这个特性都为<strong>true</strong></li><li>[[Enumberable]]:表示属性是否可以**（枚举）通过 for-in 循环返回**。默认情况下 true</li><li>[[Writable]]:表示属性值<strong>是否可以被修改</strong>。 默认情况下，true 可以被修改的、</li><li>[[Value]]:包含属性实际的值。<strong>读取与写入属性的位置</strong>。默认值是<strong>undefined</strong></li></ul></li><li><p>修改以上特性的方式 Object.defineProperty()方法</p><ul><li><p>接受 3 个参数 添加的对象名称、要修改特新的属性名称、options（可以包含 ：confiigurable、enumerable、writable、value）与上面提到的特性一一对应</p></li><li><p>若不可修改的对象属性被修改了 ，严格模式 报错，非严格模式 被忽略</p></li><li><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> person </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qwer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defineProperty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(person, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { configurable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div></li><li></li></ul></li></ul></li><li><p>访问器属性</p><ul><li></li></ul></li></ul><h2 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h2><h3 id="类定义" tabindex="-1">类定义 <a class="header-anchor" href="#类定义" aria-label="Permalink to &quot;类定义&quot;">​</a></h3>`,7),n=[l];function p(h,r,o,k,d,c){return a(),s("div",null,n)}const E=i(e,[["render",p]]);export{u as __pageData,E as default};
