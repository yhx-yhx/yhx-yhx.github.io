import{ak as a,h as l,j as p,R as i,J as u,aE as r,ab as o,f as s}from"./chunks/framework.Dig6RImq.js";const P=JSON.parse('{"title":"vue2 与 vue3 的区别","description":"","frontmatter":{},"headers":[],"relativePath":"我的/面试集锦/vue/02vue2与vue3的区别.md","filePath":"我的/面试集锦/vue/02vue2与vue3的区别.md","lastUpdated":1723386861000}'),v={name:"我的/面试集锦/vue/02vue2与vue3的区别.md"};function n(d,e,c,V,m,f){const t=o("ArticleMetadata");return s(),l("div",null,[e[0]||(e[0]=p("h1",{id:"vue2-与-vue3-的区别",tabindex:"-1"},[i("vue2 与 vue3 的区别 "),p("a",{class:"header-anchor",href:"#vue2-与-vue3-的区别","aria-label":'Permalink to "vue2 与 vue3 的区别"'},"​")],-1)),u(t),e[1]||(e[1]=r("<p>1.响应式系统</p><ul><li><p>Vue2 使用的 Object.defineProperty()实现响应式系统，这种方法有诸多限制，无法属性的添加、删除。无法对数组长度或索引变化直接进行处理。</p></li><li><p>Vue3 使用了 Proxy 实现响应式系统，该方法允许 vue 拦截对象任何属性的读写操作，当然也能够拦截到属性的添加和删除操作，以及数组的长度或索引变化。</p><p>2.组合式 API</p></li><li><p>Vue2 选项式 API（如 data methods computed watch 等） 在哪个版本引入了组合式 API。</p></li><li><p>Vue3 引入了组合式 API（ref reactive effect computed），将组件的逻辑部分抽离到单独的函数中，通过组合式 API 的语法糖，可以更好的组织代码，减少代码冗余，提高代码可读性。</p><p>3.性能方面</p></li><li><p>Vue3 性能有显著的提升，包括更小的包体积，更快虚拟 DOM 更新，更高效的组件初始化等</p></li><li><p>Vue2 性能方面相对薄弱，尤其在处理大型项目和复杂组件时，性能表现并不好。</p><p>4.ts 支持</p></li><li><p>Vue3 从一开始就是使用 ts 实现的，提供了 ts 更好的类型支持。</p></li><li><p>vue2 ts 的支持是有限的，需要通过额外的配置和工具来实现更好的集成</p><p>5.新特性</p></li><li><p>Vue3 引入了诸多组件 如 teleport、fragment、Suspense 等，为开发者提供了更多的便利。</p><p>6.fragment</p></li><li><p>Vue3 支持多个根节点，并列节点</p></li><li><p>Vue2 中只能有一个根节点</p><p>7.自定义渲染器</p></li><li><p>Vue3 提供了自定义渲染器的 API，允许用户自定义自己的渲染逻辑。</p><p>8.静态元素提升</p></li><li><p>vue2 中，模板中所有元素都会被重新渲染创建一个新的虚拟节点，包括静态文本元素。</p></li><li><p>vue3 引入静态提升概念。在编译模板时，Vue3 会检测出静态内容并提升，初次渲染创建一次。后续的渲染中，静态内容被重用，减少渲染开销同样了性能。</p><p>9.虚拟节点静态标记</p></li><li><p>Vue2 更新组件时，会进行全虚拟 DOM 比较，全量比较。</p></li><li><p>Vue3 引入虚拟节点静态标记，编译时标记虚拟节点的动态部分。这样组件更新时，vue 只会标注虚拟节点的动态部分，只更新动态部分。</p></li></ul>",2))])}const A=a(v,[["render",n]]);export{P as __pageData,A as default};
