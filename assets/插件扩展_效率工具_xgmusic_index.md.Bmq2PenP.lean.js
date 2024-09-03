import"./chunks/theme.BmUDmEuK.js";import{u as f,T as L,E as R,D as N,B as j,P as C,a as z}from"./chunks/index.min.B--PTCx_.js";import{_ as U,l as H,h as W,o as T,c as I,a5 as q,E as V,J as x,w as G,m as $}from"./chunks/framework.DcGi6Jq3.js";function w(h,n){var a=Object.keys(h);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(h);n&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(h,i).enumerable})),a.push.apply(a,s)}return a}function D(h){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?w(Object(a),!0).forEach(function(s){y(h,s,a[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(h,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(s){Object.defineProperty(h,s,Object.getOwnPropertyDescriptor(a,s))})}return h}function F(h,n){if(!(h instanceof n))throw new TypeError("Cannot call a class as a function")}function O(h,n){for(var a=0;a<n.length;a++){var s=n[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(h,M(s.key),s)}}function u(h,n,a){return n&&O(h.prototype,n),a&&O(h,a),Object.defineProperty(h,"prototype",{writable:!1}),h}function y(h,n,a){return n=M(n),n in h?Object.defineProperty(h,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):h[n]=a,h}function v(h,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");h.prototype=Object.create(n&&n.prototype,{constructor:{value:h,writable:!0,configurable:!0}}),Object.defineProperty(h,"prototype",{writable:!1}),n&&b(h,n)}function A(h){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},A(h)}function b(h,n){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(s,i){return s.__proto__=i,s},b(h,n)}function K(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function o(h){if(h===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return h}function X(h,n){if(n&&(typeof n=="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return o(h)}function B(h){var n=K();return function(){var s=A(h),i;if(n){var t=A(this).constructor;i=Reflect.construct(s,arguments,t)}else i=s.apply(this,arguments);return X(this,i)}}function J(h,n){if(typeof h!="object"||h===null)return h;var a=h[Symbol.toPrimitive];if(a!==void 0){var s=a.call(h,n||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(h)}function M(h){var n=J(h,"string");return typeof n=="symbol"?n:String(n)}var Q=function(){function h(n,a){F(this,h),this.url=n;var s=new window.XMLHttpRequest;s.target=this,s.responseType="arraybuffer",s.open("get",n),s.onload=function(){(s.status===200||s.status===206)&&a&&a instanceof Function&&a(s.response)},s.onerror=function(i){},this.xhr=s,this.run()}return u(h,[{key:"cancel",value:function(){this.xhr.abort()}},{key:"run",value:function(){this.xhr.readyState===1&&this.xhr.send()}}]),h}(),g={ORDER:"order",SLOOP:"sloop",LOOP:"loop",RANDOM:"random"},S="xgplayer-music";function _(h,n,a){var s=Math.floor(Math.random()*(n-h)+h);return s===a?(s>n/2?n=n/2:h=n/2,n-h>2?_(h,n,a):s):s}var Y=function(h){v(a,h);var n=B(a);function a(){var s;F(this,a);for(var i=arguments.length,t=new Array(i),l=0;l<i;l++)t[l]=arguments[l];return s=n.call.apply(n,[this].concat(t)),y(o(s),"_onEnded",function(){if(s.mode==="order"&&s.index+1>=s.list.length){s.player.pause(),s.player.currentTime=0;return}switch(s.mode){case g.SLOOP:s.change();break;case g.ORDER:case g.LOOP:default:s.next();break}}),y(o(s),"_onDurationChange",function(){var e=s.config.abCycle;s._initABCycle(e,s.player)}),y(o(s),"_onTimeUpdate",function(){var e=o(s),p=e.config,k=e.player;if(!s.halfPass&&k.currentTime>k.duration/2&&s.confirmOrder(),p.abCycle){var r=p.abCycle,E=r.end>k.duration?k.duration:r.end;k.currentTime>=E?(r.loop||(k.pause(),s.emit("abCycle_ended")),k.currentTime=r.start||0):k.currentTime<r.start&&(k.currentTime=r.start||0)}}),s}return u(a,[{key:"afterCreate",value:function(){var i=this.player,t=this.playerConfig;f.addClass(i.root,S),this.halfPass=!1,this.list=this.config.list||[],this.nextIndex=-1,this.prevIndex=-1,this.history=[],this.disable=!(this.list.length>0),this.list.length!==0&&(!t.url&&this.list.length>0&&(t.url=this.list[0].src),t.poster||(t.poster=this.list[0].poster),t.title||(t.title=this.list[0].title||""),t.vid||(t.vid=this.list[0].vid||""),this._curInfo={src:t.url,poster:t.poster,title:t.title,vid:t.vid},this.index=0,this.on(L,this._onTimeUpdate),this.on(R,this._onEnded),this.on(N,this._onDurationChange),this.config.offline&&this.checkOffline(this._curInfo.src,this._curInfo.vid).then(function(l){l.code===0&&(t.url=l.url,i.state>=4&&(i.src=l.url))}).catch(function(l){}))}},{key:"destroy",value:function(){f.removeClass(this.player.root,S)}},{key:"_nextCompute",value:function(){if(!this.disable)switch(this.mode){case g.SLOOP:case g.ORDER:case g.LOOP:this.index+1<this.list.length?this.nextIndex=this.index+1:this.nextIndex=0;break;default:this.nextIndex=_(0,this.list.length,this.index);break}}},{key:"_prevCompute",value:function(){if(!this.disable)switch(this.mode){case g.SLOOP:case g.ORDER:case g.LOOP:this.index-1>=0?this.prevIndex=this.index-1:this.prevIndex=this.list.length-1;break;default:this.prevIndex=_(0,this.list.length,this.index);break}}},{key:"_emitChange",value:function(){this.emit("change",this._curInfo)}},{key:"_initABCycle",value:function(i,t){var l=t.plugins.progresspreview;if(i&&t){var e=i.end>this.player.duration?this.player.duration:i.end,p=i.start>this.player.duration?0:i.start,k={id:t.playerId,time:i.start,duration:e-p,text:i.text,color:i.color};l.findDot(k.id)?l.updateDot(k):l.createDot(k)}else l.findDot(t.playerId)&&l.deleteDot(t.playerId)}},{key:"random",value:function(){if(this.list.length<0)return null;var i=_(0,this.list.length,this.index);return this.list[i]}},{key:"next",value:function(){this.disable||(this.halfPass||(this.halfPass=!0,this._nextCompute()),this.index=this.nextIndex,this.change())}},{key:"prev",value:function(){this.disable||(this.halfPass||(this.halfPass=!0,this._prevCompute()),this.index=this.prevIndex,this.change())}},{key:"forward",value:function(){var i=this.player,t=this.config.timeScale;i.currentTime=i.currentTime+t<i.duration?i.currentTime+t:i.duration-.1}},{key:"backward",value:function(){var i=this.player,t=this.config.timeScale;i.currentTime=i.currentTime-t>0?i.currentTime-t:0}},{key:"add",value:function(i){this.list.push({src:i.src,title:i.title,vid:i.vid,poster:i.poster})}},{key:"remove",value:function(i){var t=-1;this.list.every(function(l,e){return l.vid===i?(t=e,!1):!0}),t>-1&&this.list.splice(t,1)}},{key:"setAbCycle",value:function(i,t,l){var e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};i&&f.typeof(i)==="Object"?this.config.abCycle=D({},i):this.config.abCycle=D({start:i||0,end:t||this.player.duration,loop:l},e),this._initABCycle(this.config.abCycle,this.player)}},{key:"removeAbCycle",value:function(){this.config.abCycle=null,this._initABCycle(null,this.player)}},{key:"updateList",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];this.removeAbCycle(),this.player.pause(),this.player.currentTime=0,this.list=i,this.nextIndex=0,this.index=0,this.change()}},{key:"setIndex",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;i<0||i>=this.list.length||(this.nextIndex=i,this.index=i,this.change())}},{key:"change",value:function(){var i=this;if(!this.disable){var t=this.player,l=this.list,e=this.index,p=l[e].vid;this.halfPass=!1,this.checkOffline(l[e].src,p).then(function(k){i._curInfo={title:i.list[i.index].title||"",vid:i.list[i.index].vid,poster:i.list[i.index].poster||"",src:k.url},t.playNext({url:k.url,vid:i.list[i.index].vid||0,poster:i.list[i.index].poster||"",autoplay:!0}),t.off("timeupdate",i._emitChange),t.once("timeupdate",i._emitChange),t.play()})}}},{key:"checkOffline",value:function(i,t){var l=this;return new Promise(function(e,p){(!l.config.offline||l.disable)&&e({url:i,code:-1,vid:t});var k=l.player.database;k.openDB(function(){k.getDataByKey(k.myDB.ojstore.name,t,function(r){setTimeout(function(){k.closeDB()},5e3),e(r?{url:URL.createObjectURL(r.blob),code:0,vid:r.vid}:{url:i,code:-2,vid:t})})})})}},{key:"confirmOrder",value:function(){this.halfPass=!0,this._nextCompute(),this._prevCompute(),this.config.preloadNext&&this.preload(this.nextIndex)}},{key:"preload",value:function(i){if(!(i<0||i>=this.list.length)){var t=this.list[i],l=this.player;this.checkOffline(t.src,t.vid).then(function(e){if(e.code===-2){var p=t.vid;new Q(t.src,function(k){l.database.openDB(function(){l.database.addData(l.database.myDB.ojstore.name,[{vid:p,blob:new Blob([k],{type:'audio/mp4; codecs="mp4a.40.5"'})}]),setTimeout(function(){l.database.closeDB()},5e3)})})}})}}},{key:"timeScale",get:function(){return this.config.timeScale||15},set:function(i){this.config.timeScale=i}},{key:"mode",get:function(){return this.config.mode||g.RANDOM},set:function(i){this.config.mode=i}}],[{key:"pluginName",get:function(){return"music"}},{key:"defaultConfig",get:function(){return{offline:!1,preloadNext:!0,abCycle:null,timeScale:15,mode:g.ORDER,list:[]}}},{key:"ModeType",get:function(){return Object.keys(g).map(function(i){return g[i]})}}]),a}(j),Z=function(h){v(a,h);var n=B(a);function a(){return F(this,a),n.apply(this,arguments)}return u(a,[{key:"afterCreate",value:function(){var i=this;if(this.on("change",function(l){if(l&&l.poster){if(i.find("img"))i.find("img").src=l.poster;else{var e=new Image;e.src=l.poster,i.appendChild(e)}i.find("img").src=l.poster,i.show()}else i.hide()}),this.playerConfig.poster){var t=new Image;t.src=this.playerConfig.poster,this.appendChild(t)}}},{key:"render",value:function(){return'<xg-icon class="xgplayer-cover"></xg-icon>'}}],[{key:"pluginName",get:function(){return"musiccover"}},{key:"defaultConfig",get:function(){return{index:6,position:C.POSITIONS.CONTROLS_LEFT}}}]),a}(C),ss=function(h){v(a,h);var n=B(a);function a(){var s;F(this,a);for(var i=arguments.length,t=new Array(i),l=0;l<i;l++)t[l]=arguments[l];return s=n.call.apply(n,[this].concat(t)),y(o(s),"onClick",function(e){var p=o(s),k=p.player;e.preventDefault(),e.stopPropagation(),k.plugins.music.backward()}),s}return u(a,[{key:"afterCreate",value:function(){var i=this;this.initIcons();var t=["click","touchstart"];t.forEach(function(l){i.bind(l,i.onClick)})}},{key:"registerIcons",value:function(){return{musicBackward:{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">
      <path d="m 14,2.99996 0,10 -7,-5 7,-5 z m -7,5 0,5 -7,-5 7,-5 0,5 z m -7,0 0,0 z"></path>
  </svg>`,class:"xg-icon-mbackward"}}}},{key:"initIcons",value:function(){var i=this.icons;this.appendChild(".xgplayer-icon",i.musicBackward)}},{key:"destroy",value:function(){var i=this,t=["click","touchstart"];t.forEach(function(l){i.unbind(l,i.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-backward">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicbackward"}},{key:"defaultConfig",get:function(){return{index:1,position:C.POSITIONS.CONTROLS_LEFT}}}]),a}(C),is=function(h){v(a,h);var n=B(a);function a(){var s;F(this,a);for(var i=arguments.length,t=new Array(i),l=0;l<i;l++)t[l]=arguments[l];return s=n.call.apply(n,[this].concat(t)),y(o(s),"onClick",function(e){var p=o(s),k=p.player;e.preventDefault(),e.stopPropagation(),k.plugins.music.prev()}),s}return u(a,[{key:"afterCreate",value:function(){var i=this;this.initIcons();var t=["click","touchstart"];t.forEach(function(l){i.bind(l,i.onClick)})}},{key:"registerIcons",value:function(){return{musicPrev:{icon:` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="300 200 1024 1024">
        <path d="M600 1140v-768h128v352l320-320v704l-320-320v352zz"></path>
    </svg>`,class:"xg-icon-mprev"}}}},{key:"initIcons",value:function(){var i=this.icons;this.appendChild(".xgplayer-icon",i.musicPrev)}},{key:"destroy",value:function(){var i=this,t=["click","touchstart"];t.forEach(function(l){i.unbind(l,i.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-next">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicprev"}},{key:"defaultConfig",get:function(){return{index:2,position:C.POSITIONS.CONTROLS_LEFT}}}]),a}(C),as=function(h){v(a,h);var n=B(a);function a(){var s;F(this,a);for(var i=arguments.length,t=new Array(i),l=0;l<i;l++)t[l]=arguments[l];return s=n.call.apply(n,[this].concat(t)),y(o(s),"onClick",function(e){var p=o(s),k=p.player;e.preventDefault(),e.stopPropagation(),k.plugins.music.forward()}),s}return u(a,[{key:"afterCreate",value:function(){var i=this;this.initIcons();var t=["click","touchstart"];t.forEach(function(l){i.bind(l,i.onClick)})}},{key:"registerIcons",value:function(){return{musicForward:{icon:`<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 0 21 15">
        <path d="m 2,2.99996 0,10 7,-5 -7,-5 z m 7,5 0,5 7,-5 -7,-5 0,5 z m 7,0 0,0 z"></path>
      </svg>`,class:"xg-icon-mforward"}}}},{key:"initIcons",value:function(){var i=this.icons;this.appendChild(".xgplayer-icon",i.musicForward)}},{key:"destroy",value:function(){var i=this,t=["click","touchstart"];t.forEach(function(l){i.unbind(l,i.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-forward">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicforward"}},{key:"defaultConfig",get:function(){return{index:5,position:C.POSITIONS.CONTROLS_LEFT}}}]),a}(C),ns=function(h){v(a,h);var n=B(a);function a(){var s;F(this,a);for(var i=arguments.length,t=new Array(i),l=0;l<i;l++)t[l]=arguments[l];return s=n.call.apply(n,[this].concat(t)),y(o(s),"onClick",function(e){var p=o(s),k=p.player;e.preventDefault(),e.stopPropagation(),k.plugins.music.next()}),s}return u(a,[{key:"afterCreate",value:function(){var i=this;this.initIcons();var t=["click","touchstart"];t.forEach(function(l){i.bind(l,i.onClick)})}},{key:"registerIcons",value:function(){return{musicNext:{icon:` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" viewBox="100 200 1024 1024">
        <path d="M800 380v768h-128v-352l-320 320v-704l320 320v-352z">
      </svg>`,class:"xg-icon-mnext"}}}},{key:"initIcons",value:function(){var i=this.icons;this.appendChild(".xgplayer-icon",i.musicNext)}},{key:"destroy",value:function(){var i=this,t=["click","touchstart"];t.forEach(function(l){i.unbind(l,i.onClick)})}},{key:"render",value:function(){return`<xg-icon class="xgplayer-next">
            <div class="xgplayer-icon">
            </div>
          </xg-icon>`}}],[{key:"pluginName",get:function(){return"musicnext"}},{key:"defaultConfig",get:function(){return{index:4,position:C.POSITIONS.CONTROLS_LEFT}}}]),a}(C),ts=function(h){v(a,h);var n=B(a);function a(){return F(this,a),n.apply(this,arguments)}return u(a,[{key:"beforeCreate",value:function(i){var t=i.player.plugins.progress;t&&(i.root=t.root)}},{key:"afterCreate",value:function(){var i=this;this.on("change",function(t){t&&t.title?i.root.innerHTML="".concat(t.title):i.root.innerHTML=""})}},{key:"render",value:function(){var i=this.playerConfig;return`<xg-title class="xgplayer-name">
          `.concat(i.title||"",`
       </xg-title>`)}}],[{key:"pluginName",get:function(){return"musicmeta"}},{key:"defaultConfig",get:function(){return{index:0}}}]),a}(C);function hs(h){if(f.typeOf(h.controls)!=="Object")h.controls={mode:"flex",initShow:!0};else{var n=h.controls;h.controls=D({mode:"flex",initShow:!0},n)}var a=h.play||{};h.play=D({index:3},a),h.marginControls=!0,h.mediaType="audio"}var ls=u(function h(n,a){F(this,h),console.log("config",n,a),console.log("playerConfig",f.typeOf(a.controls)!=="Object"),hs(a),this.plugins=[Y,ss,is,as,ns,Z,ts],this.ignores=["start","cssFullScreen","fullscreen","pip","enter","replay","pc","loading","poster"]}),es=function(h){var n=h.data,a=h.options,s=h.ctx,i=h.h,t=h.w,l=n.length>a.count?a.count:n.length,e=parseInt(i/255*2,10);s.clearRect(0,0,t,i),s.fillStyle=a.bgColor,s.fillRect(0,0,t,i);for(var p=t/l,k=p-p/4,r,E=0,d=a.linear,c=0;c<l;c++)r=n[c],s.fillStyle=d,s.fillRect(E,i-r,k,r*e+i/2),E+=p},ks=function(h){var n=h.data,a=h.options,s=h.ctx,i=h.h,t=h.w,l=a.count||128;n.length<l&&(l=n.length);var e=i/255,p=t/l,k=a.linear;s.clearRect(0,0,t,i),s.fillStyle=a.bgColor,s.fillRect(0,0,t,i);for(var r=1;r<=l;r++){var E=n[r];E*=e;var d=p*r;s.moveTo(d,i),s.lineTo(d,i-E),s.strokeStyle=k,s.stroke(),s.beginPath()}},ps=function(h){var n=h.data,a=h.options,s=h.ctx,i=h.h,t=h.w,l=n.length>a.count?a.count:n.length;s.clearRect(0,0,t,i),s.fillStyle=a.bgColor,s.fillRect(0,0,t,i),s.beginPath();var e=a.linear;s.strokeStyle=e;for(var p=t/l,k=0,r=0;r<l;r++){var E=n[r]/128,d=E*i/2;r===0?s.moveTo(k,d):s.lineTo(k,d),k+=p}s.lineTo(t,i/2),s.stroke()},rs=function(h){var n=h.data,a=h.options,s=h.ctx,i=h.h,t=h.w,l=i/255,e=t/128,p=a.count||128,k=5;s.clearRect(0,0,t,i),s.fillStyle=a.bgColor,s.fillRect(0,0,t,i);for(var r=a.linear,E=1;E<=p;E++){var d=n[E];d+=k,d*=l;var c=e*E,m=i/2+d/2;s.moveTo(c,m),s.lineTo(c,m-d),s.strokeStyle=r,s.stroke(),s.beginPath()}},Es=function(h){var n=h.data,a=h.options,s=h.ctx,i=h.h,t=h.w,l=n.length>a.count?a.count:n.length,e=i/255;s.clearRect(0,0,t,i),s.fillStyle=a.bgColor,s.fillRect(0,0,t,i);for(var p=t/l,k=p-p/4,r,E=0,d=a.linear,c=0;c<l;c++)r=n[c]*e,s.fillStyle=d,s.fillRect(E,i/2+r/2,k,-r),E+=p};function ds(h,n,a){for(var s=h.createLinearGradient(0,0,n,0),i=a.length,t=100/i,l=0;l<a.length;l++)s.addColorStop(t*l/100,a[l]);return s}function gs(h,n){(!n||n<1)&&(n=h.length*n);for(var a=[],s=Math.floor(h.length/n),i=1;i<=n;i++){var t=h.slice(i*s,i*s+s),l=t[Math.floor(t.length/2)];a.push(l)}return a}function ys(h,n){var a=n/255;n<=3&&n>=0&&(a=n);var s=h.map(function(i){return i*a});return s}function os(h,n){for(var a=Math.floor(h.length/n),s=[],i=[],t=0,l=0;l<=a*n;l++)t===a&&(s.push(i),i=[],t=0),i.push(h[l]),t++;return s}function P(h,n,a,s){var i=a.w,t=a.linear,l=a.reverse,e=a.offset;h.save(),h.beginPath();var p=i*1/s;h.strokeStyle=t;for(var k=0,r=0,E=0;E<s;E++)r=l?0-n[E]:n[E],r=e-r,E===0?h.moveTo(k,r):h.lineTo(k,r),k+=p;h.lineTo(i,r),h.stroke()}var cs=function(h){var n=h.options,a=h.ctx,s=h.h,i=h.w,t=h.data,l=n.colors;t=gs(t,2048),t=ys(t,s/2),t=os(t,4).slice(0,3),a.clearRect(0,0,i,s),a.fillStyle=n.bgColor,a.fillRect(0,0,i,s);for(var e=0;e<t.length;e++)P(a,t[e],{linear:l[e],w:i,h:s,offset:s/2,reverse:!1},t[e].length),P(a,t[e],{linear:l[e],w:i,h:s,offset:s/2,reverse:!0},t[e].length)},Fs={bars:es,vertLines:ks,lightning:ps,doubleLine:rs,doubleBars:Es,waves:cs},us={bars:2,vertLines:1,lightning:2,doubleLine:1,doubleBars:2,waves:2},Cs={BARS:"bars",VERT_LINES:"vertLines",LIGHTNING:"lightning",DOUBLE_LINE:"doubleLine",DOUBLE_BARS:"doubleBars",WAVES:"waves"};function fs(h,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=arguments.length>3?arguments[3]:void 0;if(n){a=D({},a),a.stroke||(a.stroke=1),a.colors||(a.colors=["#ff8177","#cf556c","#f99185","#b12a5b"]);var i=n.getContext("2d"),t=n.height,l=n.width;i.strokeStyle=a.colors[0],i.lineWidth=a.stroke;var e={data:h,options:a,ctx:i,h:t,w:l};typeof a.mode=="string"&&(a.mode=[a.mode]),a.mode.forEach(function(p){s%us[p]===0&&(i.clearRect(0,0,l,t),i.beginPath(),Fs[p](e))})}}var vs=function(){function h(n,a){var s=this,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};F(this,h),y(this,"start",function(){s.reqId||s._renderFrame()}),y(this,"stop",function(){cancelAnimationFrame(s.reqId),s.reqId=null}),y(this,"_onDestroy",function(){s._audioCtx.close()}),y(this,"_onoVolumechange",function(){console.log("onoVolumechange"),s.gainNode.gain.setValueAtTime(s.player.volume,s.player.currentTime)}),y(this,"_renderFrame",function(){s.reqId&&cancelAnimationFrame(s.reqId),s.reqId=requestAnimationFrame(s._renderFrame),s.frameCount++,s.mode==="lightning"?s.analyser.getByteTimeDomainData(s.dataArray):s.analyser.getByteFrequencyData(s.dataArray),fs.call(s,s.dataArray,s.canvas,s.options,s.frameCount)}),this.canvas=a;var t=this.canvas.getBoundingClientRect(),l=t.width,e=t.height;if(this.canvas.width=l*2,this.canvas.height=e*2,this.player=n,this.options=h.defaultConfig,Object.keys(i).map(function(k){s.options[k]=i[k]}),!!h.AudioCtx){n.audioCtx?this._audioCtx=n.audioCtx:this._audioCtx=new h.AudioCtx,this.analyser=this._audioCtx.createAnalyser();var p=this._audioCtx.createGain();p.gain.setValueAtTime(n.volume,n.currentTime),this.gainNode=p,this.source=this._audioCtx.createMediaElementSource(n.video),this.ctx=a.getContext("2d"),this.source.connect(this.analyser),this.analyser.connect(p),this.fftSize=this.options.fftSize,this.frameCount=0,this.options.isGradient&&(this.options.linear=ds(this.ctx,a.width,this.options.colors)),p.connect(this._audioCtx.destination),this._initPlayerEvents()}}return u(h,[{key:"_initPlayerEvents",value:function(){var a=this;["play","playing","seeked"].forEach(function(s){a.player.on(s,a.start)}),this.player.on("volumechange",this._onoVolumechange),this.player.on("destroy",this._onDestroy)}},{key:"destroy",value:function(){var a=this;this.stop(),["play","playing","seeked"].forEach(function(s){a.player.off(s,a.start)}),this.player.off("volumechange",this._onoVolumechange),this.player.off("destroy",this._onDestroy),this._audioCtx.close()}},{key:"mode",get:function(){return this.options.mode},set:function(a){this.options.mode=a}},{key:"fftSize",get:function(){return this.analyser.frequencyBinCount*2},set:function(a){this.analyser.fftSize=a;var s=this.analyser.frequencyBinCount;this.dataArray=new Uint8Array(s)}}],[{key:"defaultConfig",get:function(){return{fftSize:16384,count:1024,mode:"bars",colors:["#ff8177","#cf556c","#f99185","#b12a5b"],stroke:2,bgColor:"#000",isGradient:!0,linear:null}}},{key:"MODES",get:function(){return Cs}},{key:"AudioCtx",get:function(){return window.AudioContext||window.webkitAudioContext}}]),h}(),Bs=u(function h(n){F(this,h),this.regRule=/(\d{2}(?=:)):(\d{2}(?=\.))\.(\d{2,3})/g,this.regRule.test(n)?this.time=RegExp.$1*60+RegExp.$2*1+("0."+RegExp.$3)*1:this.time=-1}),ms=function(){function h(n,a){var s=this;F(this,h),this.rawTxts=n,this.txts=n.map(function(i){return i.replace(/^[\r\n]|[\r\n]$/g,"").match(/(\[.*\])[^[]+/g)}),this.isDynamics=n.map(function(i,t){return[].concat(i.match(/\[\d{2}:\d{2}\.\d{2,3}\]/g)).length===s.txts[t].length&&s.txts[t].length===s.txts[0].length&&s.txts[t].length>1}),this.isDynamic=this.isDynamics.some(function(i){return i}),this.__ainimateInterval__=0,this.__offset__=0,this.__offsetScale__=.5,this.dom=a,this.lists=[],this.isDynamics.map(function(i,t){i&&s.lists.push(s.txts[t].map(function(l,e){var p=/(\[[\d:\S]+\])([^[]+)/g.test(l),k=RegExp.$1,r=RegExp.$2;return{time:p?new Bs(k).time:-1,lyric:r,idx:e}}))}),this.list=this.lists.reduce(function(i,t){return i.map(function(l,e){return{time:l.time,lyric:l.lyric===`
`?"".concat(l.lyric).concat(t[e].lyric):"".concat(l.lyric,"<br/>").concat(t[e].lyric),idx:e}})}),this.line=0}return u(h,[{key:"interval",get:function(){return this.__ainimateInterval__},set:function(a){this.__ainimateInterval__=a}},{key:"offset",get:function(){return this.__offset__},set:function(a){this.__offset__=a}},{key:"offsetScale",get:function(){return this.__offsetScale__},set:function(a){this.__offsetScale__=a}},{key:"adjust",value:function(){for(var a=this.list,s=0,i,t,l=a.length;s<l;s++){for(i=s+1;i<l&&!(a[i].time>a[s].time);i++);if(i<l){var e=(a[i].time-a[s].time)/(i-s);for(t=s+1;t<i;t++)a[t].time=a[t-1].time+e}}}},{key:"find",value:function(a){var s=this.list,i=this.__ainimateInterval__,t=this.__offset__;return a=a+t>0?a+t:0,s.filter(function(l,e){var p=l.time,k=e+1;return a>=p&&(s[k]&&a*1+i*1<=s[k].time||k>=s.length)})}},{key:"bind",value:function(a){var s=this,i=this;return this.__player__=a,i.isDynamic?(i.__handle__=(function(){var t=s.find(a.currentTime)[0];t&&t.idx!==s.line&&(s.line=t.idx,a.emit("lyricUpdate",t))}).bind(i,a),a.on("timeupdate",i.__handle__),i.__startHandle__=(function(){a.emit("lyricUpdate",i.list[0])}).bind(i,a),a.once("playing",i.__startHandle__),!0):!1}},{key:"unbind",value:function(a){delete this.__player__,this.__handle__&&(a.off("lyricUpdate",this.__handle__),delete this.__handle__)}},{key:"show",value:function(){var a=this,s=this.dom,i=[],t=this,l=["click","touchstart"];if(s&&s.nodeType===1){var e=f.createDom("div","<div></div>",{},"xgplayer-lrcWrap");s.appendChild(e),this.list.forEach(function(r){i.push('<xg-lyric-item class="xgplayer-lyric-item" data-idx="'.concat(r.idx,'">').concat(r.lyric.replace(/[\r\n]/g,""),"</xg-lyric-item>"))}),e.innerHTML=i.join("");var p=f.createDom("xg-lrcForward","<div></div>",{},"xgplayer-lrcForward");s.appendChild(p),l.forEach(function(r){p.addEventListener(r,function(E){E.preventDefault(),E.stopPropagation(),t.offset-=t.offsetScale,console.log("lyric go forward ".concat(t.offsetScale,"s"))},!1)});var k=f.createDom("xg-lrcBack","<div></div>",{},"xgplayer-lrcBack");s.appendChild(k),l.forEach(function(r){k.addEventListener(r,function(E){E.preventDefault(),E.stopPropagation(),t.offset+=t.offsetScale,console.log("lyric go back ".concat(t.offsetScale,"s"))},!1)}),this.__updateHandle__=function(r){var E=a.dom.querySelector(".xgplayer-lrcWrap"),d=E.querySelector(".xgplayer-lyric-item-active"),c=E.offsetHeight,m;d&&(d.className="xgplayer-lyric-item"),d=E.querySelector('.xgplayer-lyric-item[data-idx="'.concat(r.idx,'"]')),d&&(d.className="xgplayer-lyric-item xgplayer-lyric-item-active",m=d.getBoundingClientRect().top-E.getBoundingClientRect().top+E.scrollTop-c/2,m&&(E.scrollTop=m))},this.__player__.on("lyricUpdate",this.__updateHandle__)}else this.__player__.emit("error","lyric container can not be empty")}},{key:"hide",value:function(){this.__updateHandle__.off("lyricUpdate",this.__updateHandle__)}}]),h}();const Ds={class:"music_ctn"},_s=q('<div id="left" data-v-1a03bde4><div id="album" data-v-1a03bde4></div><div id="info" data-v-1a03bde4> 脆弱一分钟 <div data-v-1a03bde4>歌手：林宥嘉</div><div data-v-1a03bde4>专辑：脆弱一分钟 </div></div></div><div id="canvasMusic" data-v-1a03bde4><canvas data-v-1a03bde4></canvas></div><div id="mask" data-v-1a03bde4><div id="gc" data-v-1a03bde4></div></div><div id="xgmusic" data-v-1a03bde4></div>',4),As=[_s],bs={__name:"index",setup(h){let n=null;return H(()=>{n=new z({id:"xgmusic",url:"https://sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3",volume:.8,width:window.innerWidth,height:50,mediaType:"audio",presets:["default",ls],preloadNext:!0,ignores:["playbackrate"],controls:{initShow:!0,mode:"flex"},marginControls:!0,videoConfig:{crossOrigin:"anonymous"}}),n.crossOrigin="anonymous";let a=`[00:00.00] 脆弱一分钟
[00:00.00] 作曲 : 林家谦
[00:00.00] 作词 : 徐世珍/吴辉福
[00:00.000]编曲：林家谦
[00:00.000]时钟不要走
[00:04.220]让我脆弱一分钟
[00:07.440]要多久才能习惯被放手
[00:15.800]马克杯空了 暖暖的温热
[00:22.660]却还在我手中停留
[00:27.960]
[00:29.790]勇气不要走
[00:32.200]给我理由再冲动
[00:35.690]去相信爱情 就算还在痛
[00:43.960]如果我不说不会有人懂
[00:50.720]失去你我有多寂寞
[00:55.610]还是愿意
[00:57.580]付出一切仅仅为了一个好梦
[01:03.980]梦里有人真心爱我 陪我快乐也陪我沉默
[01:11.260]没有无缘无故的痛承受越多越成熟
[01:18.630]能让你拥抱更好的我
[01:25.030] 谁也不要走
[01:28.270]应该是一种奢求
[01:31.900]可是我只想 握紧你的手
[01:39.780]我宁愿等候 也不愿错过
[01:46.630]你对我微笑的时候
[01:56.780]
[02:18.910]还是愿意
[02:21.320]用尽全力仅仅为了一个以后
[02:27.870]哪怕生命并不温柔哪怕被幸福一再反驳
[02:34.870]也要相信伤痕累累 其实只是在琢磨
[02:42.070]能让你为之一亮 的我
[02:53.910]
[02:56.350]制作人：林宥嘉
[02:57.750]制作助理：张婕汝
[02:59.010]录音师：陈文骏、叶育轩
[03:00.410]录音室：白金录音室
[03:01.740]混音师：SimonLi @ nOiz
[03:03.000]OP: Terence Lam Production & Co. (Warner/Chappell Music, HK Ltd.)
[03:04.050]SP: Warner/Chappell Music Taiwan Ltd.
[03:04.910]OP：Universal Ms Publ Ltd Taiwan
`;window.analyze=new vs(n,document.querySelector("#canvasMusic>canvas"),{bgColor:"rgba(0,0,0,0.7)",stroke:3});var s=new ms([a],document.querySelector("#gc"),{});s.bind(n),n.on("lyricUpdate",i=>{i.lyric.includes(`
`)}),n.on("playing",function(){s.show(),s.adjust(),n.mode=2}),n.on("destroy",()=>{console.log("player destroyed"),s.unbind(n)}),document.querySelector("#canvasMusic>canvas").width=window.innerWidth,document.querySelector("#canvasMusic>canvas").height=window.innerHeight*.25}),W(),(a,s)=>(T(),I("div",Ds,As))}},xs=U(bs,[["__scopeId","data-v-1a03bde4"]]),ws=$("br",null,null,-1),Os=q("",3),qs=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"插件扩展/效率工具/xgmusic/index.md","filePath":"插件扩展/效率工具/xgmusic/index.md","lastUpdated":1721657779000}'),Ss={name:"插件扩展/效率工具/xgmusic/index.md"},Ms=Object.assign(Ss,{setup(h){return(n,a)=>{const s=V("client-only");return T(),I("div",null,[x(s,null,{default:G(()=>[ws,x(xs)]),_:1}),Os])}}});export{qs as __pageData,Ms as default};
