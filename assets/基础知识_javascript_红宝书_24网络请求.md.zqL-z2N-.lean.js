import{ak as a,h as n,aE as i,f as p}from"./chunks/framework.Dig6RImq.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/javascript/红宝书/24网络请求.md","filePath":"基础知识/javascript/红宝书/24网络请求.md","lastUpdated":1713792803000}'),e={name:"基础知识/javascript/红宝书/24网络请求.md"};function l(t,s,h,r,k,c){return p(),n("div",null,s[0]||(s[0]=[i(`<h3 id="_24-网络请求" tabindex="-1">24 网络请求 <a class="header-anchor" href="#_24-网络请求" aria-label="Permalink to &quot;24 网络请求&quot;">​</a></h3><blockquote><p>实际开发中尽可能用fetch</p></blockquote><h4 id="xhr" tabindex="-1">XHR <a class="header-anchor" href="#xhr" aria-label="Permalink to &quot;XHR&quot;">​</a></h4><ul><li><p>xhr XMLHttpRequest</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xhr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XMLHttpRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;get&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;资源地址&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//第三个参数 是否开启同步</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//发送请求数据 ，无需请求体则 传递null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.readyState </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0：未初始化（Uninitialized）。尚未调用 open()方法。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1：已打开（Open）。已调用 open()方法，尚未调用 send()方法。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2：已发送（Sent）。已调用 send()方法，尚未收到响应。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3：接收中（Receiving）。已经收到部分响应。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 4：完成（Complete）。已经收到所有响应，可以使用了。</span></span></code></pre></div></li><li><p>abort() //取消异步请求 同时清除引用</p></li><li><p>setRequestHeader()//设置请求头 跨域返回空</p></li><li><p>getAllResponseHeaders()//获取所有请求头 跨域返回空</p></li><li><p>getResponseheaders(&#39;XX&#39;)//获取XX请求头</p></li><li><p>FormData类型 append方法添加数据</p></li><li><p>超时timeout</p></li><li><p>进度事件 Progress Events</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div></li></ul><p>event事件 target其属性是 XHR 包含额外属性lengthCoputable：布尔值 进度信息是否可用 position：接收到的字节数 toalSize：响应头部字节总数 用户提供的数据字节数</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>#### 预检请求  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 先向服务器发送一个‘预检’请求，这个请求使用的OPTIONS方法并带有：Origin，请求方法，请求头</span></span>
<span class="line"><span>- 预检请求会有缓存 过期后才会再次发送 预检请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 凭据请求</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 默认情况 跨域请求 不提供凭证（cookies，HTTP认证，客户端 SSL证书）；可以声明withCredentials 为true表明 请求会发送数据</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### 替代跨域技术 利用dom特性</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 图片探测</span></span>
<span class="line"><span>- 利用img标签最早实现跨域的一种技术</span></span>
<span class="line"><span>- 缺点：只能单向在服务器获取响应内容 单向通信；</span></span>
<span class="line"><span>- JSONP</span></span>
<span class="line"><span>- 包括回调 与 数据；借用script标签 实现；</span></span>
<span class="line"><span>- 缺点 安全性较差 ，无法界定请求失败 h5设定标准 onerror 但没有任何浏览器实现？（2022年）</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#### Fetch</span></span>
<span class="line"><span></span></span>
<span class="line"><span>- 可以加载json</span></span>
<span class="line"><span>- 加载 blob</span></span>
<span class="line"><span>- 加载 text</span></span>
<span class="line"><span>- 中断请求 </span></span>
<span class="line"><span>\`\`\`javascript</span></span>
<span class="line"><span>let abortController = new AbortController()</span></span>
<span class="line"><span>fetch(&#39;xx/xxx/&#39;,{method:&#39;POST&#39;,signal:abortController,    {page:1}).then(res=&gt;res.json()).then(res=&gt;console.log(res))</span></span>
<span class="line"><span>setTimeout(()=&gt;abortController.abort(),5000)</span></span></code></pre></div><h4 id="header-对象" tabindex="-1">Header 对象 <a class="header-anchor" href="#header-对象" aria-label="Permalink to &quot;Header 对象&quot;">​</a></h4><ul><li>方法 has get delete set keys values entires append(与set类似)</li></ul>`,8)]))}const g=a(e,[["render",l]]);export{d as __pageData,g as default};
