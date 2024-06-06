import{_ as e,c as a,o as t,a5 as p}from"./chunks/framework.CsSpqKUs.js";const o="/noteplus-dist/assets/pdf-demo-2.x%E6%BC%94%E7%A4%BA.CNUEyOm5.gif",_=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的/分享/内容/你不知道的PDF预览.md","filePath":"我的/分享/内容/你不知道的PDF预览.md","lastUpdated":1717686054000}'),r={name:"我的/分享/内容/你不知道的PDF预览.md"},d=p('<h2 id="你不知道的pdf预览" tabindex="-1">你不知道的PDF预览 <a class="header-anchor" href="#你不知道的pdf预览" aria-label="Permalink to &quot;你不知道的PDF预览&quot;">​</a></h2><h3 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h3><p>PDF预览是Web开发中常见的功能，它允许用户在浏览器中查看和浏览PDF文件。然而，并不是所有的PDF预览解决方案都提供相同的功能和性能。因此，了解不同PDF预览解决方案的优缺点对于选择合适的解决方案非常重要。</p><h3 id="_2-方案" tabindex="-1">2. 方案 <a class="header-anchor" href="#_2-方案" aria-label="Permalink to &quot;2. 方案&quot;">​</a></h3><h4 id="_2-1-pdf-js" tabindex="-1">2.1. <a href="https://github.com/mozilla/pdf.js" target="_blank" rel="noreferrer">PDF.js📦</a> <a class="header-anchor" href="#_2-1-pdf-js" aria-label="Permalink to &quot;2.1. [PDF.js:package:](https://github.com/mozilla/pdf.js)&quot;">​</a></h4><blockquote><p>推荐指数 ⭐ ⭐ ⭐ ⭐ ⭐</p></blockquote><p>PDF.js是一个开源的PDF预览解决方案，它使用HTML5的Canvas和JavaScript来渲染PDF文件。PDF.js支持多种浏览器，并且可以与Web应用程序集成。用户可以自定义PDF.js的样式和行为，以满足特定的需求。社区比较活跃</p><p>示例：</p><blockquote><p>实现 翻页、首尾页、分页跳转、搜索、调整页面比例等</p></blockquote><p><a href="https://yhx-yhx.github.io/pdf-search-demo-dist/" target="_blank" rel="noreferrer">pdfjs2.1.x demo</a></p><p><img src="'+o+'" alt="pdf-demo-2.x演示"></p><blockquote><p>同上</p></blockquote><p><a href="https://yhx-yhx.github.io/vue-pdf-latest-demo-dist/" target="_blank" rel="noreferrer">pdfjs4.x demo</a></p><h4 id="_2-2-pdfobject" tabindex="-1">2.2. PDFObject <a class="header-anchor" href="#_2-2-pdfobject" aria-label="Permalink to &quot;2.2. PDFObject&quot;">​</a></h4><blockquote><p>推荐指数 ⭐</p></blockquote><p>PDFObject是一个轻量级的JavaScript库，它使用HTML5的object标签来嵌入PDF文件。 对于复杂浏览器环境，根据不同的浏览器版本，pdfObject会自动选择合适的PDF预览解决方案。</p><h4 id="_2-3-pdfjs-webviewer" tabindex="-1">2.3. PDFJS-WebViewer <a class="header-anchor" href="#_2-3-pdfjs-webviewer" aria-label="Permalink to &quot;2.3. PDFJS-WebViewer&quot;">​</a></h4><blockquote><p>推荐指数 ⭐star⭐star:</p></blockquote><p>PDFJS-WebViewer是由PDF.js项目开发的，它是一个用于在Web浏览器中渲染和处理PDF文件的JavaScript库。它支持基本的PDF操作，如缩放、旋转、搜索、页面导航等。同时，它还提供了一些扩展功能，如文本选择、高亮和注释等功能。</p><p>用户可自行打包pdfjs 或使用 pdfjs-dist 来构建PDFJS-WebViewer。</p><h4 id="_2-4-原生标签" tabindex="-1">2.4. 原生标签 <a class="header-anchor" href="#_2-4-原生标签" aria-label="Permalink to &quot;2.4. 原生标签&quot;">​</a></h4><blockquote><p>推荐指数 ⭐ ⭐ ⭐ ⭐</p></blockquote><p>使用object标签来嵌入PDF文件，使用embed标签来嵌入PDF文件，使用iframed标签来嵌入PDF文件。</p><p>缺陷：样式内容上不可控</p><h4 id="_2-5-vue-pdf-embed" tabindex="-1">2.5. <a href="https://www.npmjs.com/package/vue-pdf-embed" target="_blank" rel="noreferrer">vue-pdf-embed</a> <a class="header-anchor" href="#_2-5-vue-pdf-embed" aria-label="Permalink to &quot;2.5. [vue-pdf-embed](https://www.npmjs.com/package/vue-pdf-embed)&quot;">​</a></h4><blockquote><p>推荐指数 ⭐ ⭐ ⭐</p></blockquote><p>vue-pdf-embed是一个Vue.js组件，用于在Vue.js应用程序中嵌入PDF文件。该组件使用PDF.js库来渲染PDF文件，并提供了多种选项和配置来定制PDF预览的样式和行为。</p><h4 id="_2-6-vue3-pdf-app" tabindex="-1">2.6. <a href="https://www.npmjs.com/package/vue3-pdf-app" target="_blank" rel="noreferrer">vue3-pdf-app</a> <a class="header-anchor" href="#_2-6-vue3-pdf-app" aria-label="Permalink to &quot;2.6. [vue3-pdf-app](https://www.npmjs.com/package/vue3-pdf-app)&quot;">​</a></h4><blockquote><p>推荐指数 ⭐ ⭐ ⭐ :start:</p></blockquote><p>100%还原了PDF.js的功能</p>',30),s=[d];function l(c,i,h,b,n,f){return t(),a("div",null,s)}const P=e(r,[["render",l]]);export{_ as __pageData,P as default};
