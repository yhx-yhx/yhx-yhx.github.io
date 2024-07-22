import{h as p,am as B,o as w,c as f,J as c,w as C,p as v,m as e,F as L,G as $,ah as D,ai as E,a5 as b}from"./chunks/framework.DcGi6Jq3.js";import{b as m}from"./chunks/index.B4cJBb0m.js";import{E as N}from"./chunks/index.B6d87c4I.js";import"./chunks/use-form-item.CZYH-sBR.js";import"./chunks/use-global-config.BTnNNTQz.js";function Z(){const n=p(!1);function h(r){if(console.log(r),typeof navigator.clipboard.writeText=="function")navigator.clipboard.writeText(r).then(()=>{n.value=!0},s=>{n.value=!1});else if(typeof document.execCommand=="function"){const s=document.createElement("textarea");s.value=r,document.body.appendChild(s),s.select(),n.value=document.execCommand("copy"),document.body.removeChild(s)}else alert("此浏览器不支持复制到剪贴板的功能")}return{isDone:n,copyToClipboard:h}}const F={class:"container"},R=e("div",{class:"title p-3 font-bold text-2xl"},"生成表单数据",-1),J=e("div",{class:"desc p-3 text-sm"},"将目标数据转换为表单数据;",-1),K=e("label",{class:"label block text-black font-bold"},"Key",-1),O={class:"flex"},G=e("label",{class:"label block text-black font-bold"},"Value",-1),q=e("svg",{width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M24.0605 10L24.0239 38",stroke:"#000000","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),e("path",{d:"M10 24L38 24",stroke:"#000000","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1),z=[q],Q={class:"label block text-black font-bold"},W=["onClick"],X=b("",1),Y=[X],ee={class:"flex"},te={class:"input-item p-3 mb-2 flex-1"},oe=e("div",{class:"input-title underline font-bold"},"目标数据:",-1),le={class:"org relative rounded-lg border-2 p-3 h-72 mb-2 mt-10"},se=b("",1),ne=[se],re=b("",1),ae=[re],ie={class:"input-item p-3 mb-2 flex-1"},de=e("div",{class:"input-title underline font-bold"},"结果数据:",-1),ue={class:"result relative rounded-lg border-2 p-3 h-72 mb-2 mt-10"},pe=b("",1),ce=[pe],he={__name:"CreateData",setup(n){function h(l){switch(l){case"Date":return"$ft.time";default:return}}function r(l,o="label",t="value",d){let a=l.split(`
`),x=[];return a.forEach(T=>{var j,S;let u=T.split(";"),M=u[0].split(" ")[u[0].split(" ").length-1];if(M.includes("Code"))x.push();else{let y={[o]:(S=(j=u[1])==null?void 0:j.split("//")[1])==null?void 0:S.replace(/\/字典(\d+)/,""),[t]:M},H=h(u[0].split(" ")[u[0].split(" ").length-2]);H&&(y.formatter=H),d==null||d.forEach(A=>{y[A.label]=A.value}),x.push(y)}}),JSON.stringify(x.filter(T=>T.label))}function s(l){Z().copyToClipboard(l),N.success("复制成功")}const i=p(`private String cityCode;    //省（市）/字典3   
 private String city;    //省（市）
 private String countyCode;    //区县
 private String county;    //区县
 private String townshipCode;    //乡镇
 private String township;    //乡镇/字典5;`),_=p(null),g=p(null),V=p(null),k=B([{label:"formatter",value:""}]);function P(){if(!i.value){N.warning("请输入数据");return}_.value=r(i.value,g.value||"label",V.value||"value",k||null)}function I(){k.push({label:"",value:""})}function U(l){k.splice(l,1)}return(l,o)=>(w(),f("div",F,[R,J,c(v(m),{modelValue:g.value,"onUpdate:modelValue":o[0]||(o[0]=t=>g.value=t),class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Key哟~~"},{prepend:C(()=>[K]),_:1},8,["modelValue"]),e("div",O,[c(v(m),{modelValue:V.value,"onUpdate:modelValue":o[1]||(o[1]=t=>V.value=t),class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Value哟~~"},{prepend:C(()=>[G]),_:1},8,["modelValue"]),e("span",{class:"inline-block my-auto mx-2 w-[24px] cursor-pointer bg-slate-200 rounded-full hover:bg-sky-100",onClick:I},z)]),(w(!0),f(L,null,$(k,(t,d)=>(w(),f("div",{class:"flex",key:t.label},[c(v(m),{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,class:"mb-2",style:{"max-width":"600px"},placeholder:"请输入Value哟~~"},{prepend:C(()=>[e("label",Q,[c(v(m),{modelValue:t.label,"onUpdate:modelValue":a=>t.label=a,placeholder:"请输入key",clearable:""},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e("span",{class:"inline-block my-auto mx-2 w-[24px] cursor-pointer bg-slate-200 rounded-full hover:bg-sky-100",onClick:a=>U(d)},Y,8,W)]))),128)),e("div",ee,[e("div",te,[oe,e("div",le,[D(e("textarea",{class:"w-full h-full","onUpdate:modelValue":o[2]||(o[2]=t=>i.value=t),name:"",id:"",cols:"30",rows:"10"},null,512),[[E,i.value]]),e("button",{class:"close absolute top-0 right-0 m-2 p-1 cursor-pointer",onClick:o[3]||(o[3]=t=>i.value=null),title:"清空"},ne),e("button",{class:"transformation absolute bottom-0 right-0 m-2 p-1 cursor-pointer",title:"转换",onClick:o[4]||(o[4]=t=>P())},ae)])]),e("div",ie,[de,e("div",ue,[e("div",{class:"close absolute top-0 right-0 m-2 cursor-pointer",onClick:o[5]||(o[5]=t=>s(_.value)),title:"复制"},ce),D(e("textarea",{class:"w-full h-full","onUpdate:modelValue":o[6]||(o[6]=t=>_.value=t),name:"",id:"",cols:"30",rows:"10"},null,512),[[E,_.value]])])])])]))}},be=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/扩展工具/生成表单数据/index.md","filePath":"插件扩展/扩展工具/生成表单数据/index.md","lastUpdated":1713864848000}'),_e={name:"插件扩展/扩展工具/生成表单数据/index.md"},ge=Object.assign(_e,{setup(n){return(h,r)=>(w(),f("div",null,[c(he)]))}});export{be as __pageData,ge as default};
