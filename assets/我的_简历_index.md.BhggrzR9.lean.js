import{V as je}from"./chunks/theme.BxFMm4Hf.js";import{ay as ke,az as Ce,H as Ne,d as D,o as m,c as k,n as v,p as t,r as A,a as le,t as te,e as z,m as n,Q as ne,aA as Ee,h as C,aB as He,k as S,y as ae,U as Le,l as be,b as K,J as f,w as y,a2 as Ye,F as _e,K as Oe,G as Fe,ah as We,aC as Xe,T as Ue,aD as Ke,aE as Ge,N as qe,ar as Je,$ as Qe,aq as Ae,O as Ze,aF as et,am as tt,a0 as st,_ as Ve,q as nt,s as at,Y as it}from"./chunks/framework.CsSpqKUs.js";import{m as Pe,u as ee,E as Z,a as lt,C as Be,b as ot,c as $e}from"./chunks/index.BifEZNEU.js";import{j as q,k as rt,m as we,r as ut,n as ct,d as re,f as se,g as ue,_ as ce,w as Se,o as oe,p as dt,s as pt,q as Re,t as ft,E as M,v as Me,x as vt,y as mt,z as gt,A as yt,B as ht,C as _t,D as wt,F as bt,G as St,i as kt,H as xt,h as It}from"./chunks/use-form-item.DOQw4US7.js";import{E as Ct}from"./chunks/index.DLhQiWGt.js";const Et=(s,a)=>{if(!q||!s||!a)return!1;const e=s.getBoundingClientRect();let i;return a instanceof Element?i=a.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},e.top<i.bottom&&e.bottom>i.top&&e.right>i.left&&e.left<i.right};var $t=/\s/;function zt(s){for(var a=s.length;a--&&$t.test(s.charAt(a)););return a}var Tt=/^\s+/;function Nt(s){return s&&s.slice(0,zt(s)+1).replace(Tt,"")}var ze=NaN,Lt=/^[-+]0x[0-9a-f]+$/i,Ot=/^0b[01]+$/i,At=/^0o[0-7]+$/i,Vt=parseInt;function Te(s){if(typeof s=="number")return s;if(rt(s))return ze;if(we(s)){var a=typeof s.valueOf=="function"?s.valueOf():s;s=we(a)?a+"":a}if(typeof s!="string")return s===0?s:+s;s=Nt(s);var e=Ot.test(s);return e||At.test(s)?Vt(s.slice(2),e?2:8):Lt.test(s)?ze:+s}var xe=function(){return ut.Date.now()},Pt="Expected a function",Bt=Math.max,Rt=Math.min;function Mt(s,a,e){var i,r,d,u,o,h,E=0,T=!1,N=!1,b=!0;if(typeof s!="function")throw new TypeError(Pt);a=Te(a)||0,we(e)&&(T=!!e.leading,N="maxWait"in e,d=N?Bt(Te(e.maxWait)||0,a):d,b="trailing"in e?!!e.trailing:b);function w(l){var x=i,L=r;return i=r=void 0,E=l,u=s.apply(L,x),u}function P(l){return E=l,o=setTimeout(H,a),T?w(l):u}function g(l){var x=l-h,L=l-E,U=a-x;return N?Rt(U,d-L):U}function j(l){var x=l-h,L=l-E;return h===void 0||x>=a||x<0||N&&L>=d}function H(){var l=xe();if(j(l))return W(l);o=setTimeout(H,g(l))}function W(l){return o=void 0,b&&i?w(l):(i=r=void 0,u)}function G(){o!==void 0&&clearTimeout(o),E=0,i=h=r=o=void 0}function X(){return o===void 0?u:W(xe())}function Y(){var l=xe(),x=j(l);if(i=arguments,r=this,h=l,x){if(o===void 0)return P(h);if(N)return clearTimeout(o),o=setTimeout(H,a),w(h)}return o===void 0&&(o=setTimeout(H,a)),u}return Y.cancel=G,Y.flush=X,Y}var Dt="Expected a function";function Ie(s,a,e){var i=!0,r=!0;if(typeof s!="function")throw new TypeError(Dt);return we(e)&&(i="leading"in e?!!e.leading:i,r="trailing"in e?!!e.trailing:r),Mt(s,a,{leading:i,maxWait:a,trailing:r})}const jt=(s,a)=>{if(!q)return!1;const e={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(a)],i=ct(s,e);return["scroll","auto","overlay"].some(r=>i.includes(r))},Ht=(s,a)=>{if(!q)return;let e=s;for(;e;){if([window,document,document.documentElement].includes(e))return window;if(jt(e,a))return e;e=e.parentNode}return e},he=s=>{const a=ke(s)?s:[s],e=[];return a.forEach(i=>{var r;ke(i)?e.push(...he(i)):Ce(i)&&ke(i.children)?e.push(...he(i.children)):(e.push(i),Ce(i)&&((r=i.component)!=null&&r.subTree)&&e.push(...he(i.component.subTree)))}),e},Yt=(s,a,e)=>he(s.subTree).filter(d=>{var u;return Ce(d)&&((u=d.type)==null?void 0:u.name)===a&&!!d.component}).map(d=>d.component.uid).map(d=>e[d]).filter(d=>!!d),Ft=(s,a)=>{const e={},i=Ne([]);return{children:i,addChild:u=>{e[u.uid]=u,i.value=Yt(s,a,e)},removeChild:u=>{delete e[u],i.value=i.value.filter(o=>o.uid!==u)}}},Wt=re({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:se([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),Xt=D({name:"ElCard"}),Ut=D({...Xt,props:Wt,setup(s){const a=ue("card");return(e,i)=>(m(),k("div",{class:v([t(a).b(),t(a).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(m(),k("div",{key:0,class:v(t(a).e("header"))},[A(e.$slots,"header",{},()=>[le(te(e.header),1)])],2)):z("v-if",!0),n("div",{class:v([t(a).e("body"),e.bodyClass]),style:ne(e.bodyStyle)},[A(e.$slots,"default")],6),e.$slots.footer||e.footer?(m(),k("div",{key:1,class:v(t(a).e("footer"))},[A(e.$slots,"footer",{},()=>[le(te(e.footer),1)])],2)):z("v-if",!0)],2))}});var Kt=ce(Ut,[["__file","card.vue"]]);const Gt=Se(Kt),qt=re({urlList:{type:se(Array),default:()=>Pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:se(String)}}),Jt={close:()=>!0,switch:s=>oe(s),rotate:s=>oe(s)},Qt=["src","crossorigin"],Zt=D({name:"ElImageViewer"}),es=D({...Zt,props:qt,emits:Jt,setup(s,{expose:a,emit:e}){var i;const r=s,d={CONTAIN:{name:"contain",icon:Ee(dt)},ORIGINAL:{name:"original",icon:Ee(pt)}},{t:u}=Re(),o=ue("image-viewer"),{nextZIndex:h}=ft(),E=C(),T=C([]),N=He(),b=C(!0),w=C(r.initialIndex),P=Ne(d.CONTAIN),g=C({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),j=C((i=r.zIndex)!=null?i:h()),H=S(()=>{const{urlList:p}=r;return p.length<=1}),W=S(()=>w.value===0),G=S(()=>w.value===r.urlList.length-1),X=S(()=>r.urlList[w.value]),Y=S(()=>[o.e("btn"),o.e("prev"),o.is("disabled",!r.infinite&&W.value)]),l=S(()=>[o.e("btn"),o.e("next"),o.is("disabled",!r.infinite&&G.value)]),x=S(()=>{const{scale:p,deg:_,offsetX:I,offsetY:B,enableTransition:F}=g.value;let O=I/p,R=B/p;switch(_%360){case 90:case-270:[O,R]=[R,-O];break;case 180:case-180:[O,R]=[-O,-R];break;case 270:case-90:[O,R]=[-R,O];break}const Q={transform:`scale(${p}) rotate(${_}deg) translate(${O}px, ${R}px)`,transition:F?"transform .3s":""};return P.value.name===d.CONTAIN.name&&(Q.maxWidth=Q.maxHeight="100%"),Q});function L(){de(),e("close")}function U(){const p=Ie(I=>{switch(I.code){case Z.esc:r.closeOnPressEscape&&L();break;case Z.space:ge();break;case Z.left:ye();break;case Z.up:$("zoomIn");break;case Z.right:c();break;case Z.down:$("zoomOut");break}}),_=Ie(I=>{const B=I.deltaY||I.deltaX;$(B<0?"zoomIn":"zoomOut",{zoomRate:r.zoomRate,enableTransition:!1})});N.run(()=>{ee(document,"keydown",p),ee(document,"wheel",_)})}function de(){N.stop()}function pe(){b.value=!1}function fe(p){b.value=!1,p.target.alt=u("el.image.error")}function ve(p){if(b.value||p.button!==0||!E.value)return;g.value.enableTransition=!1;const{offsetX:_,offsetY:I}=g.value,B=p.pageX,F=p.pageY,O=Ie(Q=>{g.value={...g.value,offsetX:_+Q.pageX-B,offsetY:I+Q.pageY-F}}),R=ee(document,"mousemove",O);ee(document,"mouseup",()=>{R()}),p.preventDefault()}function me(){g.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ge(){if(b.value)return;const p=wt(d),_=Object.values(d),I=P.value.name,F=(_.findIndex(O=>O.name===I)+1)%p.length;P.value=d[p[F]],me()}function ie(p){const _=r.urlList.length;w.value=(p+_)%_}function ye(){W.value&&!r.infinite||ie(w.value-1)}function c(){G.value&&!r.infinite||ie(w.value+1)}function $(p,_={}){if(b.value)return;const{minScale:I,maxScale:B}=r,{zoomRate:F,rotateDeg:O,enableTransition:R}={zoomRate:r.zoomRate,rotateDeg:90,enableTransition:!0,..._};switch(p){case"zoomOut":g.value.scale>I&&(g.value.scale=Number.parseFloat((g.value.scale/F).toFixed(3)));break;case"zoomIn":g.value.scale<B&&(g.value.scale=Number.parseFloat((g.value.scale*F).toFixed(3)));break;case"clockwise":g.value.deg+=O,e("rotate",g.value.deg);break;case"anticlockwise":g.value.deg-=O,e("rotate",g.value.deg);break}g.value.enableTransition=R}return ae(X,()=>{Le(()=>{const p=T.value[0];p!=null&&p.complete||(b.value=!0)})}),ae(w,p=>{me(),e("switch",p)}),be(()=>{var p,_;U(),(_=(p=E.value)==null?void 0:p.focus)==null||_.call(p)}),a({setActiveItem:ie}),(p,_)=>(m(),K(Ke,{to:"body",disabled:!p.teleported},[f(Ue,{name:"viewer-fade",appear:""},{default:y(()=>[n("div",{ref_key:"wrapper",ref:E,tabindex:-1,class:v(t(o).e("wrapper")),style:ne({zIndex:j.value})},[n("div",{class:v(t(o).e("mask")),onClick:_[0]||(_[0]=Ye(I=>p.hideOnClickModal&&L(),["self"]))},null,2),z(" CLOSE "),n("span",{class:v([t(o).e("btn"),t(o).e("close")]),onClick:L},[f(t(M),null,{default:y(()=>[f(t(Me))]),_:1})],2),z(" ARROW "),t(H)?z("v-if",!0):(m(),k(_e,{key:0},[n("span",{class:v(t(Y)),onClick:ye},[f(t(M),null,{default:y(()=>[f(t(vt))]),_:1})],2),n("span",{class:v(t(l)),onClick:c},[f(t(M),null,{default:y(()=>[f(t(mt))]),_:1})],2)],64)),z(" ACTIONS "),n("div",{class:v([t(o).e("btn"),t(o).e("actions")])},[n("div",{class:v(t(o).e("actions__inner"))},[f(t(M),{onClick:_[1]||(_[1]=I=>$("zoomOut"))},{default:y(()=>[f(t(gt))]),_:1}),f(t(M),{onClick:_[2]||(_[2]=I=>$("zoomIn"))},{default:y(()=>[f(t(yt))]),_:1}),n("i",{class:v(t(o).e("actions__divider"))},null,2),f(t(M),{onClick:ge},{default:y(()=>[(m(),K(Oe(t(P).icon)))]),_:1}),n("i",{class:v(t(o).e("actions__divider"))},null,2),f(t(M),{onClick:_[3]||(_[3]=I=>$("anticlockwise"))},{default:y(()=>[f(t(ht))]),_:1}),f(t(M),{onClick:_[4]||(_[4]=I=>$("clockwise"))},{default:y(()=>[f(t(_t))]),_:1})],2)],2),z(" CANVAS "),n("div",{class:v(t(o).e("canvas"))},[(m(!0),k(_e,null,Fe(p.urlList,(I,B)=>We((m(),k("img",{ref_for:!0,ref:F=>T.value[B]=F,key:I,src:I,style:ne(t(x)),class:v(t(o).e("img")),crossorigin:p.crossorigin,onLoad:pe,onError:fe,onMousedown:ve},null,46,Qt)),[[Xe,B===w.value]])),128))],2),A(p.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ts=ce(es,[["__file","image-viewer.vue"]]);const ss=Se(ts),ns=re({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>Pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:se(String)}}),as={load:s=>s instanceof Event,error:s=>s instanceof Event,switch:s=>oe(s),close:()=>!0,show:()=>!0},is=["src","loading","crossorigin"],ls={key:0},os=D({name:"ElImage",inheritAttrs:!1}),rs=D({...os,props:ns,emits:as,setup(s,{emit:a}){const e=s;let i="";const{t:r}=Re(),d=ue("image"),u=Ge(),o=lt(),h=C(),E=C(!1),T=C(!0),N=C(!1),b=C(),w=C(),P=q&&"loading"in HTMLImageElement.prototype;let g,j;const H=S(()=>[d.e("inner"),X.value&&d.e("preview"),T.value&&d.is("loading")]),W=S(()=>u.style),G=S(()=>{const{fit:c}=e;return q&&c?{objectFit:c}:{}}),X=S(()=>{const{previewSrcList:c}=e;return Array.isArray(c)&&c.length>0}),Y=S(()=>{const{previewSrcList:c,initialIndex:$}=e;let p=$;return $>c.length-1&&(p=0),p}),l=S(()=>e.loading==="eager"?!1:!P&&e.loading==="lazy"||e.lazy),x=()=>{q&&(T.value=!0,E.value=!1,h.value=e.src)};function L(c){T.value=!1,E.value=!1,a("load",c)}function U(c){T.value=!1,E.value=!0,a("error",c)}function de(){Et(b.value,w.value)&&(x(),ve())}const pe=bt(de,200,!0);async function fe(){var c;if(!q)return;await Le();const{scrollContainer:$}=e;St($)?w.value=$:Je($)&&$!==""?w.value=(c=document.querySelector($))!=null?c:void 0:b.value&&(w.value=Ht(b.value)),w.value&&(g=ee(w,"scroll",pe),setTimeout(()=>de(),100))}function ve(){!q||!w.value||!pe||(g==null||g(),w.value=void 0)}function me(c){if(c.ctrlKey){if(c.deltaY<0)return c.preventDefault(),!1;if(c.deltaY>0)return c.preventDefault(),!1}}function ge(){X.value&&(j=ee("wheel",me,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",N.value=!0,a("show"))}function ie(){j==null||j(),document.body.style.overflow=i,N.value=!1,a("close")}function ye(c){a("switch",c)}return ae(()=>e.src,()=>{l.value?(T.value=!0,E.value=!1,ve(),fe()):x()}),be(()=>{l.value?fe():x()}),(c,$)=>(m(),k("div",{ref_key:"container",ref:b,class:v([t(d).b(),c.$attrs.class]),style:ne(t(W))},[E.value?A(c.$slots,"error",{key:0},()=>[n("div",{class:v(t(d).e("error"))},te(t(r)("el.image.error")),3)]):(m(),k(_e,{key:1},[h.value!==void 0?(m(),k("img",qe({key:0},t(o),{src:h.value,loading:c.loading,style:t(G),class:t(H),crossorigin:c.crossorigin,onClick:ge,onLoad:L,onError:U}),null,16,is)):z("v-if",!0),T.value?(m(),k("div",{key:1,class:v(t(d).e("wrapper"))},[A(c.$slots,"placeholder",{},()=>[n("div",{class:v(t(d).e("placeholder"))},null,2)])],2)):z("v-if",!0)],64)),t(X)?(m(),k(_e,{key:2},[N.value?(m(),K(t(ss),{key:0,"z-index":c.zIndex,"initial-index":t(Y),infinite:c.infinite,"zoom-rate":c.zoomRate,"min-scale":c.minScale,"max-scale":c.maxScale,"url-list":c.previewSrcList,"hide-on-click-modal":c.hideOnClickModal,teleported:c.previewTeleported,"close-on-press-escape":c.closeOnPressEscape,onClose:ie,onSwitch:ye},{default:y(()=>[c.$slots.viewer?(m(),k("div",ls,[A(c.$slots,"viewer")])):z("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):z("v-if",!0)],64)):z("v-if",!0)],6))}});var us=ce(rs,[["__file","image.vue"]]);const cs=Se(us),ds=re({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),ps={[Be]:(s,a)=>[s,a].every(oe)},fs=D({name:"ElSteps"}),vs=D({...fs,props:ds,emits:ps,setup(s,{emit:a}){const e=s,i=ue("steps"),{children:r,addChild:d,removeChild:u}=Ft(Ae(),"ElStep");return ae(r,()=>{r.value.forEach((o,h)=>{o.setIndex(h)})}),Qe("ElSteps",{props:e,steps:r,addStep:d,removeStep:u}),ae(()=>e.active,(o,h)=>{a(Be,o,h)}),(o,h)=>(m(),k("div",{class:v([t(i).b(),t(i).m(o.simple?"simple":o.direction)])},[A(o.$slots,"default")],2))}});var ms=ce(vs,[["__file","steps.vue"]]);const gs=re({title:{type:String,default:""},icon:{type:kt},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),ys=D({name:"ElStep"}),hs=D({...ys,props:gs,setup(s){const a=s,e=ue("step"),i=C(-1),r=C({}),d=C(""),u=Ze("ElSteps"),o=Ae();be(()=>{ae([()=>u.props.active,()=>u.props.processStatus,()=>u.props.finishStatus],([l])=>{X(l)},{immediate:!0})}),et(()=>{u.removeStep(Y.uid)});const h=S(()=>a.status||d.value),E=S(()=>{const l=u.steps.value[i.value-1];return l?l.currentStatus:"wait"}),T=S(()=>u.props.alignCenter),N=S(()=>u.props.direction==="vertical"),b=S(()=>u.props.simple),w=S(()=>u.steps.value.length),P=S(()=>{var l;return((l=u.steps.value[w.value-1])==null?void 0:l.uid)===(o==null?void 0:o.uid)}),g=S(()=>b.value?"":u.props.space),j=S(()=>[e.b(),e.is(b.value?"simple":u.props.direction),e.is("flex",P.value&&!g.value&&!T.value),e.is("center",T.value&&!N.value&&!b.value)]),H=S(()=>{const l={flexBasis:oe(g.value)?`${g.value}px`:g.value?g.value:`${100/(w.value-(T.value?0:1))}%`};return N.value||P.value&&(l.maxWidth=`${100/w.value}%`),l}),W=l=>{i.value=l},G=l=>{const x=l==="wait",L={transitionDelay:`${x?"-":""}${150*i.value}ms`},U=l===u.props.processStatus||x?0:100;L.borderWidth=U&&!b.value?"1px":0,L[u.props.direction==="vertical"?"height":"width"]=`${U}%`,r.value=L},X=l=>{l>i.value?d.value=u.props.finishStatus:l===i.value&&E.value!=="error"?d.value=u.props.processStatus:d.value="wait";const x=u.steps.value[i.value-1];x&&x.calcProgress(d.value)},Y=tt({uid:o.uid,currentStatus:h,setIndex:W,calcProgress:G});return u.addStep(Y),(l,x)=>(m(),k("div",{style:ne(t(H)),class:v(t(j))},[z(" icon & line "),n("div",{class:v([t(e).e("head"),t(e).is(t(h))])},[t(b)?z("v-if",!0):(m(),k("div",{key:0,class:v(t(e).e("line"))},[n("i",{class:v(t(e).e("line-inner")),style:ne(r.value)},null,6)],2)),n("div",{class:v([t(e).e("icon"),t(e).is(l.icon||l.$slots.icon?"icon":"text")])},[A(l.$slots,"icon",{},()=>[l.icon?(m(),K(t(M),{key:0,class:v(t(e).e("icon-inner"))},{default:y(()=>[(m(),K(Oe(l.icon)))]),_:1},8,["class"])):t(h)==="success"?(m(),K(t(M),{key:1,class:v([t(e).e("icon-inner"),t(e).is("status")])},{default:y(()=>[f(t(xt))]),_:1},8,["class"])):t(h)==="error"?(m(),K(t(M),{key:2,class:v([t(e).e("icon-inner"),t(e).is("status")])},{default:y(()=>[f(t(Me))]),_:1},8,["class"])):t(b)?z("v-if",!0):(m(),k("div",{key:3,class:v(t(e).e("icon-inner"))},te(i.value+1),3))])],2)],2),z(" title & description "),n("div",{class:v(t(e).e("main"))},[n("div",{class:v([t(e).e("title"),t(e).is(t(h))])},[A(l.$slots,"title",{},()=>[le(te(l.title),1)])],2),t(b)?(m(),k("div",{key:0,class:v(t(e).e("arrow"))},null,2)):(m(),k("div",{key:1,class:v([t(e).e("description"),t(e).is(t(h))])},[A(l.$slots,"description",{},()=>[le(te(l.description),1)])],2))],2)],6))}});var De=ce(hs,[["__file","item.vue"]]);const _s=Se(ms,{Step:De}),J=It(De),ws={class:"empty-container"},bs={key:0},Ss={key:1},ks=n("div",{style:{display:"flex",padding:"10px 0"}},[n("h3",{style:{margin:"auto"}},"扫描关注获取密码")],-1),xs=n("div",{style:{display:"flex",padding:"10px 0"}},[n("p",{style:{margin:"auto"}},"请输入密码以继续")],-1),Is={style:{display:"flex",padding:"10px 0"}},Cs={style:{"text-align":"center",padding:"10px 0"}},Es={__name:"base",setup(s){const a=C(null),e=C(!1);function i(){window.localStorage.setItem("password",a.value),console.log("密码已设置")}function r(){a.value!="1024"?(e.value=!1,$e.error("密码错误")):(e.value=!0,i(),$e.success("密码正确"))}function d(){}return(u,o)=>(m(),k("div",ws,[e.value?(m(),k("div",bs,[A(u.$slots,"default")])):(m(),k("div",Ss,[f(t(Gt),{type:"always",style:{margin:"10px 0"}},{default:y(()=>[ks,xs,n("div",Is,[f(t(cs),{style:{width:"300px",height:"300px","text-align":"center",margin:"auto"},src:"../../assets/二维码.jpg"})]),n("div",Cs,[f(t(ot),{style:{display:"inline","padding-right":"10px"},type:"text",modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=h=>a.value=h),onChange:d,onKeydown:st(r,["enter"])},null,8,["modelValue"]),f(t(Ct),{style:{display:"inline-block"},onClick:r},{default:y(()=>[le("提交")]),_:1})])]),_:1})]))]))}},V=s=>(nt("data-v-36cfd1c2"),s=s(),at(),s),$s={style:{height:"fit-content","margin-top":"20px"}},zs=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"农业农村环境治理项目"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2023-03-2023-07")],-1)),Ts=V(()=>n("ul",null,[n("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),n("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),n("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),n("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Ns=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"驾驶舱配置系统"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2023-01-2023-05")],-1)),Ls=V(()=>n("ul",null,[n("li",null,"主要依托于 AirCity（DTS） CIM平台，二次开发实现 "),n("li",null,"实现 分层分户、众多模块之间的切换 状态（初始显示的模型显示的服务）、根据服务点位信息 等其他数据信息展现实时摄像头视频内容、空间查询、房屋查询、属性查询根据框选范围点线面查询 通过服务展现若干信息标注、基础工具平台配置信息测量 漫游 挖洞 压平等功能"),n("li",null,"根据 数据展示 指标信息 echarts 轮播 ，根据用户selcet交互 实时的更换图表数据"),n("li",null,"难点 对于二开 难度在于 不发预估 钩子底层 触发事件的行为 具体做的了什么 没有明确说明 这样的文档不够友好 开发产生的负作用极高"),n("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Os=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"海水淡化项目"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2022-12-2023-03")],-1)),As=V(()=>n("ul",null,[n("li",null,"以山东小钦岛，鲁北碧水源污水处理厂为背景，实现海水淡化大屏项目，海水淡化后台管理系统"),n("li",null,"大屏项目 使用echarts 展示海水 产水量 净水等多种指标 展示实时监测数据，轮播展示处理厂风貌，实时的video视频采集"),n("li",null,"后台管理系统 主要实现了对数据（污水处理指标数据、人员信息、紧急联系人、值班信息、人员所属）的维护 实现基本的crud 使用echarts 展现数据"),n("li",null,"主要采用Vue框架，echarts,axios，vue-router，pinia，element-plus；")],-1)),Vs=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"燃气考试系统"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-11")],-1)),Ps=V(()=>n("ul",null,[n("li",null,"主要采用Vue框架，axios，vue-router，vuex，elementUI；uniapp（作为移动端框架）"),n("li",null,"以天津滨海新区某某燃气公司作为大环境，实现管理员，内外勤员工日常考试，安全知识学习，技能评比，投票与反馈等主要功能"),n("li",null,"设计思路 角色权限 根据用户角色赋予差异化 功能，管理员可以进行题库 人员的配置；用户根据配置 题目在约定时间范围进行考试，投票功能近乎相似不做赘述"),n("li",null,"反馈功能主要是为了更好的 提高用户体验，有利于用户对软件做出反馈与日常需求的可能性，提供基本信息检索功能，使得项目朝着更符合用户思维的方向上行走 "),n("li",null,"同时 打造来了一套更便捷的移动端系统，主要采用 uniapp 与 vantUI 实现功能与pc端基本一致 不做赘述")],-1)),Bs=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"智慧电力可视化大屏（数据可视化项目）"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2022-05-2022-06")],-1)),Rs=V(()=>n("ul",null,[n("li",null,"以四川省为背景，围绕电厂负荷监测、调节策略、执行考核、与效果分析三个层级，部署一套自主调节、快速响应、科学研判的多功能性智能电力综合管控平台。"),n("li",null,"页面数据呈现主要由 表格 ，柱形图，折线图，雷达图、响应式地图以及动画效果构成； "),n("li",null,"技术依托基于HTML5的2D、3D渲染引擎，为可视化提供了丰富的展示效果。")],-1)),Ms=V(()=>n("div",{style:{display:"flex","justify-content":"space-between"}},[n("div",{class:"title"},"云问答（基于区块链问答系统）"),n("div",{class:"create_time",style:{"font-size":".8em"}},"2021-12-2022-03")],-1)),Ds=V(()=>n("ul",null,[n("li",null,"以信息工程学院作为大环境，实现学生老师等用户注册登录，登录成功后即可提出问题，回复问题，为了解决学生的切实问题的平台，减轻学生的压力。"),n("li",null,"整体设计，包含前台，与后台管理，前台主要实现登录、注册、搜索、个人中心、提问、回复问题、每日文案、推广、公告等诸多业务功能；后台主要实现用户、标签、问答、评论、文章、推广管理等，数据的增删改查功能； "),n("li",null,"主要采用Vue框架，axios，vue-router，vuex，bulma，elementUI；")],-1)),js={__name:"index",setup(s){return(a,e)=>(m(),K(Es,null,{default:y(()=>[n("main",$s,[f(t(_s),{direction:"vertical",active:14},{default:y(()=>[f(t(J),null,{title:y(()=>[zs]),description:y(()=>[Ts]),_:1}),f(t(J),null,{title:y(()=>[Ns]),description:y(()=>[Ls]),_:1}),f(t(J),null,{title:y(()=>[Os]),description:y(()=>[As]),_:1}),f(t(J),null,{title:y(()=>[Vs]),description:y(()=>[Ps]),_:1}),f(t(J),null,{title:y(()=>[Bs]),description:y(()=>[Rs]),_:1}),f(t(J),null,{title:y(()=>[Ms]),description:y(()=>[Ds]),_:1}),f(t(J),{title:"..."})]),_:1})])]),_:1}))}},Hs=Ve(js,[["__scopeId","data-v-36cfd1c2"]]),Ys=["id","host","repo","repoid","category","categoryid","mapping","term","strict","reactionsenabled","emitmetadata","inputposition","theme","lang","loading"],Fs=D({__name:"Giscus",props:{id:{},host:{},repo:{},repoId:{},category:{},categoryId:{},mapping:{},term:{},theme:{},strict:{},reactionsEnabled:{},emitMetadata:{},inputPosition:{},lang:{},loading:{}},setup(s){const a=C(!1);return be(()=>{a.value=!0,it(()=>import("./chunks/giscus-BNK3dBIH.B_EkeIy7.js"),[])}),(e,i)=>a.value?(m(),k("giscus-widget",{key:0,id:e.id,host:e.host,repo:e.repo,repoid:e.repoId,category:e.category,categoryid:e.categoryId,mapping:e.mapping,term:e.term,strict:e.strict,reactionsenabled:e.reactionsEnabled,emitmetadata:e.emitMetadata,inputposition:e.inputPosition,theme:e.theme,lang:e.lang,loading:e.loading},null,8,Ys)):z("",!0)}}),Ws={__name:"index",setup(s){return(a,e)=>(m(),K(t(Fs),{src:"https://giscus.app/client.js",id:"Q&A",repo:"yhx-yhx/notebook",repoId:"R_kgDOJkptEw",category:"Q&A",categoryId:"DIC_kwDOJkptE84Cc7Yx",mapping:"pathname",reactionsEnabled:"1",emitMetadata:"0",inputPosition:"top",theme:"preferred_color_scheme",lang:"zh-CN",loading:"lazy"}))}},Xs=Ve(Ws,[["__scopeId","data-v-0dc18de1"]]),Zs=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"我的/简历/index.md","filePath":"我的/简历/index.md","lastUpdated":1713880858000}'),Us={name:"我的/简历/index.md"},en=Object.assign(Us,{setup(s){const a=[{avatar:"/noteplus-dist/logo.jpg",name:"YHX",title:"Creator",links:[{icon:"github",link:"https://github.com/yhx-yhx"},{icon:"gitee",link:"https://gitee.com/yhx825"},{icon:"github",link:"https://github.com/yhx-yhx"}]},{avatar:"/noteplus-dist/logo.jpg",name:"世令我",title:"Creator",links:[{icon:"github",link:"https://github.com/yhx-yhx"},{icon:"gitee",link:"https://gitee.com/yhx825"},{icon:"github",link:"https://github.com/yhx-yhx"}]}];return(e,i)=>(m(),k("div",null,[f(t(je),{size:"small",members:a}),f(Hs),f(Xs)]))}});export{Zs as __pageData,en as default};
