import{_ as e,c as a,o,a5 as t}from"./chunks/framework.DcGi6Jq3.js";const r="/noteplus-dist/assets/websocket.DZEbx01G.png",u=JSON.parse('{"title":"WebSocket","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/javascript/WebSocket.md","filePath":"基础知识/javascript/WebSocket.md","lastUpdated":1713792803000}'),s={name:"基础知识/javascript/WebSocket.md"},l=t(`<h1 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h1><blockquote><p>通过 WebSocket 对象 创建 管理 WebSocket 连接，实现数据发送 与接受数据的API；</p></blockquote><br><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建一个 WebSocket 对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ws</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WebSocket</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//构造函数 f(url,?protocols);返回一个 WebSocket对象</span></span></code></pre></div><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/binaryType" target="_blank" rel="noreferrer"><code>WebSocket.binaryType</code></a></p><p>使用二进制的数据类型连接。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/bufferedAmount" target="_blank" rel="noreferrer"><code>WebSocket.bufferedAmount</code></a> 只读</p><p>未发送至服务器的字节数。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/extensions" target="_blank" rel="noreferrer"><code>WebSocket.extensions</code></a> 只读</p><p>服务器选择的扩展。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/close_event" target="_blank" rel="noreferrer"><code>WebSocket.onclose</code></a></p><p>用于指定连接关闭后的回调函数。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/error_event" target="_blank" rel="noreferrer"><code>WebSocket.onerror</code></a></p><p>用于指定连接失败后的回调函数。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/message_event" target="_blank" rel="noreferrer"><code>WebSocket.onmessage</code></a></p><p>用于指定当从服务器接受到信息时的回调函数。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/open_event" target="_blank" rel="noreferrer"><code>WebSocket.onopen</code></a></p><p>用于指定连接成功后的回调函数。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/protocol" target="_blank" rel="noreferrer"><code>WebSocket.protocol</code></a> 只读</p><p>服务器选择的下属协议。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/readyState" target="_blank" rel="noreferrer"><code>WebSocket.readyState</code></a> 只读</p><p>当前的链接状态。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/url" target="_blank" rel="noreferrer"><code>WebSocket.url</code></a> 只读</p><p>WebSocket 的绝对路径。</p><p><img src="`+r+`" alt="websocket"></p><h2 id="实例方法" tabindex="-1">实例方法 <a class="header-anchor" href="#实例方法" aria-label="Permalink to &quot;实例方法&quot;">​</a></h2><h3 id="close" tabindex="-1">close <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close&quot;">​</a></h3><blockquote><p><strong><code>WebSocket.close()</code></strong> 方法关闭 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket" target="_blank" rel="noreferrer"><code>WebSocket</code></a> 连接或连接尝试（如果有的话）。如果连接已经关闭，则此方法不执行任何操作。</p><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent" target="_blank" rel="noreferrer"><code>CloseEvent</code></a>的允许的状态码见<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CloseEvent#status_codes" target="_blank" rel="noreferrer">状态码列表</a> 。</p></blockquote><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//code状态码 默认使用 1005</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//reason 一个人类可读的字符串，它解释了连接关闭的原因。这个 UTF-8 编码的字符串不能超过 123 个字节。</span></span></code></pre></div><p><strong>备注：</strong> 在 Gecko 8.0 之前版本的 Gecko 里，这个方法不支持传参数。</p><h3 id="send" tabindex="-1">send <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send&quot;">​</a></h3><blockquote><p><strong><code>WebSocket.send()</code></strong> 方法将需要通过 WebSocket 链接传输至服务器的数据排入队列，并根据所需要传输的 data bytes 的大小来增加 <code>bufferedAmount</code>(<em>尚未发送到服务器的字节数</em>)的值。若数据无法传输（例如数据需要缓存而缓冲区已满）时，套接字会自行关闭。</p></blockquote><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-label="Permalink to &quot;参数&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ws.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//data 用于传输服务器的数据必须是以下类型：USVString（文本字符串）、ArrayBuffer（底层二进制数据）、Blob（将队列中的二进制传输）、ArrayBufferView（以二进制帧形式发送任何的JavaScript类对象数组）</span></span></code></pre></div><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><h3 id="close-1" tabindex="-1">close <a class="header-anchor" href="#close-1" aria-label="Permalink to &quot;close&quot;">​</a></h3><blockquote><p>事件监听器将在 WebSocket 连接的<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/readyState" target="_blank" rel="noreferrer"><code>readyState</code></a> 变为 <code>CLOSED</code>时被调用；</p></blockquote><h3 id="error" tabindex="-1">error <a class="header-anchor" href="#error" aria-label="Permalink to &quot;error&quot;">​</a></h3><blockquote><p>error 状态将会被触发；</p></blockquote><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><blockquote><p>接受到新消息是时被触发</p></blockquote><h3 id="open" tabindex="-1">open <a class="header-anchor" href="#open" aria-label="Permalink to &quot;open&quot;">​</a></h3><blockquote><p>当 WebSocket 连接状态 readyState 变为 1时；这意味着当前数据连接已经准备好发送与接收数据，此时会触发该事件。</p></blockquote>`,46),i=[l];function c(n,p,h,d,k,b){return o(),a("div",null,i)}const f=e(s,[["render",c]]);export{u as __pageData,f as default};
