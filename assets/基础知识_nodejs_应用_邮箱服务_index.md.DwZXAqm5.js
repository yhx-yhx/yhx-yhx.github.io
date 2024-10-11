import{ak as s,h as e,aE as i,f as t}from"./chunks/framework.DMTyxyBf.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"基础知识/nodejs/应用/邮箱服务/index.md","filePath":"基础知识/nodejs/应用/邮箱服务/index.md","lastUpdated":1714987058000}'),n={name:"基础知识/nodejs/应用/邮箱服务/index.md"};function l(o,a,r,p,d,h){return t(),e("div",null,a[0]||(a[0]=[i(`<h2 id="邮箱服务" tabindex="-1">邮箱服务 <a class="header-anchor" href="#邮箱服务" aria-label="Permalink to &quot;邮箱服务&quot;">​</a></h2><h2 id="需要用的库" tabindex="-1">需要用的库 <a class="header-anchor" href="#需要用的库" aria-label="Permalink to &quot;需要用的库&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> js-yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nodemailer</span></span></code></pre></div><p>授权邮箱的账号密码|授权码一般放置在 yaml 或 环境变量中</p><details class="details custom-block"><summary>inde.js</summary><p>import nodemailder from &#39;nodemailer&#39; import yaml from &#39;js-yaml&#39; import fs from &#39;node:fs&#39; import http from &#39;node:http&#39; import url from &#39;node:url&#39; const mailConfig = yaml.load(fs.readFileSync(&#39;./mail.yaml&#39;, &#39;utf8&#39;)) const transPort = nodemailder.createTransport({ service: &quot;qq&quot;, port: 587, host: &#39;smtp.qq.com&#39;, secure: true, auth: { pass: mailConfig.pass, user: mailConfig.user } })</p><p>http.createServer((req, res) =&gt; { const { pathname } = url.parse(req.url) if (req.method === &#39;POST&#39; &amp;&amp; pathname == &#39;/send/mail&#39;) { let mailInfo = &#39;&#39; req.on(&#39;data&#39;, (chunk) =&gt; { mailInfo += chunk.toString() }) req.on(&#39;end&#39;, () =&gt; { const body = JSON.parse(mailInfo) transPort.sendMail({ to: body.to, from: mailConfig.user, subject: body.subject, text: body.text }) res.end(&#39;ok&#39;) }) } }).listen(3000)</p></details><h2 id="文件配置" tabindex="-1">文件配置 <a class="header-anchor" href="#文件配置" aria-label="Permalink to &quot;文件配置&quot;">​</a></h2><blockquote><p>值得注意的yaml文件配置一定需要空格的</p></blockquote><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">123456789@qq.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">123456</span></span></code></pre></div>`,8)]))}const k=s(n,[["render",l]]);export{c as __pageData,k as default};
