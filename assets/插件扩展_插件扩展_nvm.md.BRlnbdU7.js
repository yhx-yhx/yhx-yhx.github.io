import{_ as e,a as n}from"./chunks/image-20230514135829831.iikncX8-.js";import{ak as o,h as l,aE as t,f as s}from"./chunks/framework.DMTyxyBf.js";const b=JSON.parse('{"title":"nvm","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/插件扩展/nvm.md","filePath":"插件扩展/插件扩展/nvm.md","lastUpdated":1730644254000}'),i={name:"插件扩展/插件扩展/nvm.md"};function r(p,a,m,d,c,u){return s(),l("div",null,a[0]||(a[0]=[t('<h1 id="nvm" tabindex="-1">nvm <a class="header-anchor" href="#nvm" aria-label="Permalink to &quot;nvm&quot;">​</a></h1><h2 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-label="Permalink to &quot;安装配置&quot;">​</a></h2><blockquote><p>写在前面 以下window 版本</p></blockquote><p>首先，下载<a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm</a></p><p><img src="'+e+'" alt="image-20230514135033045"></p><p>然后解压 安装.exe</p><p>①. 同意相关协议；</p><p>②. 选择安装nvm 路径；</p><p>③. 选择安装 node 路径；【如若有node 它会提醒你导入 导入就好了】</p><blockquote><p>注意： 安装路径 最好别用中文 否则可能会引发乱码问题</p></blockquote><p><img src="'+n+`" alt="image-20230514135829831"></p><p>接着，修改 settings.txt 文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>node_mirror: https://npm.taobao.org/mirrors/node/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>npm_mirror: https://npm.taobao.org/mirrors/npm/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>添加以上代码</p><blockquote><p>注意可能会有权限 不够的情况 【cmd 使用管理员权限打开即可】</p></blockquote><h2 id="常用的nvm命令" tabindex="-1">常用的nvm命令 <a class="header-anchor" href="#常用的nvm命令" aria-label="Permalink to &quot;常用的nvm命令&quot;">​</a></h2><ul><li>nvm -v 查看当前版本</li><li>nvm --config</li><li>nvm list 查看已安装node版本列表</li><li>nvm install 版本号 下载对应node版本</li><li>nvm use 版本号 切换node版本</li><li>nvm on 开启nvm</li><li>nvm off 关闭nvm</li></ul><h2 id="切换版本" tabindex="-1">切换版本 <a class="header-anchor" href="#切换版本" aria-label="Permalink to &quot;切换版本&quot;">​</a></h2><ol><li>nvm list 查看 当前环境下的 node版本</li><li>nvm install 12.14.1</li><li>nvm use 12.14.1</li><li>nvm list 查看当前版本的 node版本（or node -v）</li></ol><h2 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h2><p>1.我已经安装了 node 可以直接安装 nvm 吗？</p><blockquote><p>可以的 但为了方便起见 建议先卸载 node 然后安装 nvm ，否则可能会引发问题【2】</p></blockquote><ol start="2"><li>安装 nvm 之后 安装 node 的时候 提示 error status 1 or 145 乱码；</li></ol><blockquote><p>卸载node重新安装</p></blockquote>`,24)]))}const k=o(i,[["render",r]]);export{b as __pageData,k as default};
