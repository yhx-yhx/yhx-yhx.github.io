import{ak as i,h as a,aE as l,f as n}from"./chunks/framework.Dig6RImq.js";const t="/noteplus-dist/assets/image-20230911154759978.Dm7sz6Ew.png",e="/noteplus-dist/assets/image-20230911154824643.C_F73WJJ.png",c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/javascript/红宝书/17事件.md","filePath":"基础知识/javascript/红宝书/17事件.md","lastUpdated":1713792803000}'),p={name:"基础知识/javascript/红宝书/17事件.md"};function h(r,s,k,E,d,o){return n(),a("div",null,s[0]||(s[0]=[l(`<h3 id="_17事件" tabindex="-1">17事件 <a class="header-anchor" href="#_17事件" aria-label="Permalink to &quot;17事件&quot;">​</a></h3><blockquote><p>事件仅在发生时执行的<strong>监听器</strong>（<strong>处理程序</strong> or <strong>观察者模式</strong>）订阅事件</p></blockquote><h4 id="事件流" tabindex="-1">事件流 <a class="header-anchor" href="#事件流" aria-label="Permalink to &quot;事件流&quot;">​</a></h4><ul><li>概念：描述了页面接受事件的顺序</li><li>事件冒泡【有具体到模糊】 <ul><li>事件冒泡 事件绑定在一个<strong>文档的具体元素上</strong>面（文档得很深层）开始<strong>触发不断地向上蔓延传播</strong> 的过程；</li></ul></li><li>事件捕获【有模糊到具体】 <ul><li>事件捕获 最不具体的事件上 先收到事件，而最具体的时间爱你上最后收到事件</li><li>实际上 为了事件<strong>在完成最终目标前拦截</strong></li></ul></li><li>DOM事件流 <ul><li>DOM2Event 规范规定了事件流分为3个阶段：<strong>事件捕获、到达目标、事件冒泡</strong><ul><li>事件捕获的提前发生 为 提前拦截提供了可能</li><li>现代浏览器 都支持DOM事流，IE8及更早不支持</li></ul></li></ul></li></ul><h4 id="事件处理程序" tabindex="-1">事件处理程序 <a class="header-anchor" href="#事件处理程序" aria-label="Permalink to &quot;事件处理程序&quot;">​</a></h4><ul><li><p>为响应事件 而调用的函数 被称为 <strong>事件监听器</strong></p></li><li><p>HTML事件处理程序</p><ul><li>event事件</li><li>this</li><li>在html指定的事件处理程序 有些问题 <ul><li>时机问题 可能html元素显示到页面上时 监听函数 无法执行</li><li>事件处理程序作用域链 的扩展 不同浏览器中导致不同的结果；不同JavaScript引擎 中的标志符 解析规则存在差异，因此在无限定访问 对象成员时可能导致错误</li><li>HTML与 JavaScript强耦合 有改动 需要在 html与 JavaScript 种都做修改</li></ul></li></ul></li><li><p>DOM0事件处理程序</p><ul><li>例如onclick 写法</li><li>事件处理程序会在元素作用于中进行，因此<strong>this指向的是该元素本身</strong></li><li>以这种方式添加的事件处理程序 是<strong>注册在事件流的冒泡阶段</strong></li><li>移出时间处理程序 xx.onclick = null</li></ul></li><li><p>DOM2事件处理程序</p><ul><li>DOM2Event 为事件处理程序赋值和移除定义了两个方法 addEventListener 和 removeEventListener</li><li>参数 接受3个参数 事件名、事件处理函数、事件处理阶段（bool），<strong>true 捕获阶段</strong>调用处理程序 ；<strong>false 冒泡阶段</strong></li><li>优势<strong>可以为同一事件添加多个事件处理程序</strong></li><li><strong>匿名函数无法移出</strong></li><li><strong>removeEventListener 出入同样的值 来实现移除事件</strong></li><li>如果 不需要拦截，则不使用事件捕获 ，事件冒泡触发具有更好的兼容性</li></ul></li><li><p>IE事件处理程序 【冒泡阶段触发】</p><ul><li><p>IE8 及更早版本只支持冒泡触发</p></li><li><p>使用attachEvent 与 detchEvent 参数 事件处理程序名称、事件处理函数</p></li><li><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> btn </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelecter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Btn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//添加事件处理函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.log(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Clicked&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">btn.attachEvent(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;onclick&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,handler) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//第一个参数带有 &quot;onclick&quot;, this指向window</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//移除事件处理函数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">btn.detchEvent(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;onclick&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,handler)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li><li><p>同样支持 给定多个事件处理程序</p></li></ul></li><li><p>跨浏览器事件处理程序</p><ul><li>实现跨浏览器时间处理程序 依赖于能力检测</li><li>确保浏览器最大限度的兼容 只需 事件处理在 冒泡阶段执行</li></ul></li></ul><h4 id="事件对象" tabindex="-1">事件对象 <a class="header-anchor" href="#事件对象" aria-label="Permalink to &quot;事件对象&quot;">​</a></h4><ul><li><p>event 对象 所有浏览器都是支持的</p></li><li><p>DOM事件对象</p><p><img src="`+t+'" alt="image-20230911154759978"></p></li></ul><p><img src="'+e+`" alt="image-20230911154824643"></p><ul><li><p>在事件处理内部，this始终指向等于 currentTarget的值，target 只包含事件的实际目标；</p><ul><li><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.body.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onclick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.currentTarget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.body) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.body)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    consple.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> documnet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;button&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// event.target 触发元素</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// event.currentTarget 事件处理程序注册的元素</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// this 事件处理程序注册的元素</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ul></li><li><p>event.type 一个处理程序触发多个事件时很有用</p></li><li><p>preventDefault() 方法用于阻止默认行为 ，取消默认事件行为后，对象的cancelable属性都会设为true</p></li><li><p>stopPropagtion()方法用于立即阻止时间的传播 取消连续的时间捕获 冒泡，仅触发到该元素才会执行事件处理程序 可以阻止documnet.body 注册的事件处理程序的执行</p></li><li><p>502 md 又困又累 明个在看看</p></li></ul>`,10)]))}const u=i(p,[["render",h]]);export{c as __pageData,u as default};
