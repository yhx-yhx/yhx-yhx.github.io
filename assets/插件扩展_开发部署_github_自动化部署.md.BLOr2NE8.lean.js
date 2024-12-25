import{ak as a,h as o,aE as e,f as i}from"./chunks/framework.bB9sJqKE.js";const s=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/开发部署/github/自动化部署.md","filePath":"插件扩展/开发部署/github/自动化部署.md","lastUpdated":1713864848000}'),h={name:"插件扩展/开发部署/github/自动化部署.md"};function u(b,t,r,c,l,n){return i(),o("div",null,t[0]||(t[0]=[e('<h2 id="自动化部署" tabindex="-1">自动化部署 <a class="header-anchor" href="#自动化部署" aria-label="Permalink to &quot;自动化部署&quot;">​</a></h2><blockquote><p>首先先介绍下gtihub的自动化部署 自动化部署的原理是：当github仓库的代码发生改变时，触发github的webhook，然后调用github的api，获取最新的代码，然后部署到服务器上</p></blockquote><h3 id="_1-创建github仓库" tabindex="-1">1. 创建github仓库 <a class="header-anchor" href="#_1-创建github仓库" aria-label="Permalink to &quot;1. 创建github仓库&quot;">​</a></h3><blockquote><p>创建一个仓库，然后将代码上传到仓库中</p></blockquote><h3 id="_2-创建github-action" tabindex="-1">2. 创建github action <a class="header-anchor" href="#_2-创建github-action" aria-label="Permalink to &quot;2. 创建github action&quot;">​</a></h3><blockquote><p>创建一个github action，然后将代码上传到仓库中</p></blockquote><h3 id="_3-创建服务器" tabindex="-1">3. 创建服务器 <a class="header-anchor" href="#_3-创建服务器" aria-label="Permalink to &quot;3. 创建服务器&quot;">​</a></h3><blockquote><p>创建一个服务器，然后将代码上传到服务器中</p></blockquote><h3 id="_4-配置服务器" tabindex="-1">4. 配置服务器 <a class="header-anchor" href="#_4-配置服务器" aria-label="Permalink to &quot;4. 配置服务器&quot;">​</a></h3><blockquote><p>配置服务器，使其能够接收github的webhook，然后调用github的api，获取最新的代码，然后部署到服务器上</p></blockquote><h3 id="_5-配置github-action" tabindex="-1">5. 配置github action <a class="header-anchor" href="#_5-配置github-action" aria-label="Permalink to &quot;5. 配置github action&quot;">​</a></h3><blockquote><p>配置github action，使其能够接收github的webhook，然后调用github的api，获取最新的代码，然后部署到服务器上 可以根据自己的需求，配置github action，使其能够自动部署代码到服务器上 也可以根据github action提供给我们的脚本 来适当的修改，来满足我们的需求</p></blockquote>',12)]))}const g=a(h,[["render",u]]);export{s as __pageData,g as default};
