import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.DcGi6Jq3.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/内容/站点引入微信扫码登录.md","filePath":"我的/分享/内容/站点引入微信扫码登录.md","lastUpdated":1721226544000}'),l={name:"我的/分享/内容/站点引入微信扫码登录.md"},t=n(`<h2 id="微信扫码登录" tabindex="-1">微信扫码登录 <a class="header-anchor" href="#微信扫码登录" aria-label="Permalink to &quot;微信扫码登录&quot;">​</a></h2><h3 id="_1-引入微信扫码登录" tabindex="-1">1. 引入微信扫码登录 <a class="header-anchor" href="#_1-引入微信扫码登录" aria-label="Permalink to &quot;1. 引入微信扫码登录&quot;">​</a></h3><h4 id="_1-1-引入微信扫码登录的-js-文件" tabindex="-1">1.1 引入微信扫码登录的 js 文件 <a class="header-anchor" href="#_1-1-引入微信扫码登录的-js-文件" aria-label="Permalink to &quot;1.1 引入微信扫码登录的 js 文件&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_1-2-在-html-中添加一个-div-用于显示微信扫码登录的二维码" tabindex="-1">1.2 在 html 中添加一个 div，用于显示微信扫码登录的二维码 <a class="header-anchor" href="#_1-2-在-html-中添加一个-div-用于显示微信扫码登录的二维码" aria-label="Permalink to &quot;1.2 在 html 中添加一个 div，用于显示微信扫码登录的二维码&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;login_container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_1-3-在-js-中调用微信扫码登录的-js-文件-生成二维码" tabindex="-1">1.3 在 js 中调用微信扫码登录的 js 文件，生成二维码 <a class="header-anchor" href="#_1-3-在-js-中调用微信扫码登录的-js-文件-生成二维码" aria-label="Permalink to &quot;1.3 在 js 中调用微信扫码登录的 js 文件，生成二维码&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> WxLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;login_container&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    appid: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;wx6c4f3d9f9e7e4d5b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    scope: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;snsapi_login&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    redirect_uri: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">encodeURIComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    href: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    state: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    style: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    href: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_1-4-参数说明" tabindex="-1">1.4 参数说明 <a class="header-anchor" href="#_1-4-参数说明" aria-label="Permalink to &quot;1.4 参数说明&quot;">​</a></h4><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appid：应用唯一标识，在微信开放平台提交应用审核通过后获得</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scope：应用授权作用域，snsapi_base</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（不弹出授权页面，直接跳转，只能获取用户 openid），snsapi_userinfo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">（弹出授权页面，可通过 openid 拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">redirect_uri：重定向地址，需要进行 UrlEncode</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">href：自定义样式链接，需要在微信开放平台网站上的开发者设置中配置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">state：用于保持请求和回调的状态，授权请求后原样带回给开发者的页面</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style：提供默认样式</span></span></code></pre></div><h3 id="_2-微信扫码登录流程" tabindex="-1">2. 微信扫码登录流程 <a class="header-anchor" href="#_2-微信扫码登录流程" aria-label="Permalink to &quot;2. 微信扫码登录流程&quot;">​</a></h3><ul><li><p>用户点击登录按钮，跳转到微信扫码登录页面</p></li><li><p>用户扫描二维码，授权登录</p></li><li><p>微信服务器将用户信息返回给网站服务器</p></li><li><p>网站服务器将用户信息保存到数据库中</p></li><li><p>网站服务器将用户信息返回给前端页面，前端页面根据用户信息进行登录</p></li><li><p>前端页面根据用户信息进行登录，登录成功后跳转到首页</p></li></ul><h3 id="_3-注意事项" tabindex="-1">3. 注意事项 <a class="header-anchor" href="#_3-注意事项" aria-label="Permalink to &quot;3. 注意事项&quot;">​</a></h3><ul><li><p>微信扫码登录需要在微信开放平台进行注册和审核</p></li><li><p>微信扫码登录需要在网站服务器上进行配置</p></li><li><p>微信扫码登录需要在前端页面上进行配置</p></li><li><p>微信扫码登录需要用户授权，用户授权后才能获取用户信息</p></li></ul>`,14),p=[t];function h(e,k,E,d,r,o){return a(),i("div",null,p)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
