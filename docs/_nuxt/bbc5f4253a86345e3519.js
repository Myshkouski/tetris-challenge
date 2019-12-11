/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(t,e,n){"use strict";n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return m})),n.d(e,"a",(function(){return v})),n.d(e,"o",(function(){return y})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return w})),n.d(e,"c",(function(){return _})),n.d(e,"n",(function(){return O})),n.d(e,"h",(function(){return C})),n.d(e,"p",(function(){return $})),n.d(e,"k",(function(){return j})),n.d(e,"m",(function(){return k})),n.d(e,"d",(function(){return R})),n.d(e,"b",(function(){return E})),n.d(e,"g",(function(){return S})),n.d(e,"l",(function(){return T}));n(87),n(37),n(96),n(128),n(129),n(88),n(89),n(97),n(134);var r=n(33),o=(n(90),n(22)),c=(n(45),n(52),n(26),n(13),n(51),n(61),n(49)),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){l.default.config.errorHandler&&l.default.config.errorHandler(t)}function m(t){return t.then((function(t){return t.default||t}))}function v(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),h({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function y(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function w(t){return x(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1],"instances")}function _(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function O(t,e){return Promise.all(_(t,(function(t,n,r,o){return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:if("function"!=typeof t||t.options){c.next=4;break}return c.next=3,regeneratorRuntime.awrap(t());case 3:t=c.sent;case 4:return r.components[o]=t=y(t),c.abrupt("return","function"==typeof e?e(t,n,r,o):t);case 6:case"end":return c.stop()}}))})))}function C(t){return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,regeneratorRuntime.awrap(O(t));case 4:return e.abrupt("return",h({},t,{meta:x(t).map((function(e,n){return h({},e.options.meta,{},(t.matched[n]||{}).meta)}))}));case 5:case"end":return e.stop()}}))}function $(t,e){var n,c,l,f;return regeneratorRuntime.async((function(h){for(;;)switch(h.prev=h.next){case 0:return t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,payload:e.payload,error:e.error,base:"/tetris-challenge/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=function(e,path,n){if(e){t.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},path=e,r=Object(o.a)(path),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=L(path,n),window.location.replace(path),new Error("ERR_REDIRECT");t.context.next({path:path,query:n,status:e})}},t.context.nuxtState=window.__NUXT__),h.next=3,regeneratorRuntime.awrap(Promise.all([C(e.route),C(e.from)]));case 3:n=h.sent,c=Object(r.a)(n,2),l=c[0],f=c[1],e.route&&(t.context.route=l),e.from&&(t.context.from=f),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{};case 15:case"end":return h.stop()}}))}function j(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():k(t[0],e).then((function(){return j(t.slice(1),e)}))}function k(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function R(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function E(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?A:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f=data[l.name||"pathMatch"],h=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(h=o(f[d]),!e[c].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?A(f,!0):o(f),!e[c].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');path+=l.prefix+h}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=P.exec(t));){var f=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+f.length,h)path+=h[1];else{var m=t[c],v=n[2],y=n[3],x=n[4],w=n[5],_=n[6],O=n[7];path&&(r.push(path),path="");var C=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,j="?"===_||"*"===_,k=n[2]||l,pattern=x||w;r.push({name:y||o++,prefix:v||"",delimiter:k,optional:j,repeat:$,partial:C,asterisk:Boolean(O),pattern:pattern?D(pattern):O?".*":"[^"+N(k)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function S(t,e){var n={},r=h({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function T(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return h({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function N(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function D(t){return t.replace(/([=!:$/()])/g,"\\$1")}function L(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var h=l,d=Object(r.a)(h,2);path=d[0],c=d[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},139:function(t,e,n){"use strict";var r=n(46);n.n(r).a},140:function(t,e,n){"use strict";var r=n(47);n.n(r).a},141:function(t,e,n){"use strict";var r=n(48);n.n(r).a},16:function(t,e,n){"use strict";n(87),n(37),n(26),n(51),n(13),n(45);var r=n(49),o=(n(61),n(1)),c=n(92),l=n(64),f=n.n(l),h=n(23),d=n.n(h),m=n(65),v=n(0);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));o.default.use(m.a);var y={mode:"history",base:decodeURI("/tetris-challenge/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(v.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/",component:function(){return Object(v.j)(Promise.all([n.e(4),n.e(2)]).then(n.bind(null,161)))},name:"index"}],fallback:!1};var x={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var h=c[f]||l,d={};w.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};_.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var v=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),v)return v.call(o,t)},!1===h.css){var y=m.leave;(!y||y.length<2)&&(m.leave=function(t,e){y&&y.call(o,t),o.$nextTick(e)})}var x=t("routerView",data);return r.keepAlive&&(x=t("keep-alive",{props:r.keepAliveProps},[x])),t("transition",{props:d,on:m},[x])}},w=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],_=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],O={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},C=(n(139),n(21)),$=Object(C.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,j=(n(88),n(89),n(90),n(33)),k={name:"Nuxt",components:{NuxtChild:x,NuxtError:$},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured:function(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(v.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(j.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){var e=this;return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick((function(){return e.errorFromNuxtError=!1})),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p","Error details: ".concat(this.errorFromNuxtError.toString())),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick((function(){return e.displayingNuxtError=!1})),t($,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},R=(n(52),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),E=(n(140),Object(C.a)(R,void 0,void 0,!1,null,null,null).exports),S={head:{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width,initial-scale=1,user-scalable=0"}],link:[{rel:"icon",type:"image/x-icon",href:"favicon.ico"}]}},T=(n(141),{_default:Object(C.a)(S,(function(){var t=this.$createElement;return(this._self._c||t)("nuxt")}),[],!1,null,null,null).exports}),P={head:{meta:[],link:[],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:function(){var t,e,n=this;return regeneratorRuntime.async((function(r){for(;;)switch(r.prev=r.next){case 0:if((t=Object(v.f)(this.$route)).length){r.next=3;break}return r.abrupt("return");case 3:return this.$loading.start(),e=t.map((function(t){var p=[];return t.$options.fetch&&p.push(Object(v.m)(t.$options.fetch,n.context)),t.$options.asyncData&&p.push(Object(v.m)(t.$options.asyncData,n.context).then((function(e){for(var n in e)o.default.set(t.$data,n,e[n])}))),Promise.all(p)})),r.prev=5,r.next=8,regeneratorRuntime.awrap(Promise.all(e));case 8:r.next=15;break;case 10:r.prev=10,r.t0=r.catch(5),this.$loading.fail(),Object(v.i)(r.t0),this.error(r.t0);case 15:this.$loading.finish();case 16:case"end":return r.stop()}}),null,this,[[5,10]])},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&T["_"+t]||(t="default"),this.layoutName=t,this.layout=T["_"+t],this.layout},loadLayout:function(t){return t&&T["_"+t]||(t="default"),Promise.resolve(T["_"+t])}},components:{NuxtLoading:E}};function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}n.d(e,"b",(function(){return L})),n.d(e,"a",(function(){return $})),o.default.component(f.a.name,f.a),o.default.component(d.a.name,N({},d.a,{render:function(t,e){return d.a._warned||(d.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),d.a.render(t,e)}})),o.default.component(x.name,x),o.default.component("NChild",x),o.default.component(k.name,k),o.default.use(c.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var D={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function L(t){var e,n,r,o,path;return regeneratorRuntime.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,regeneratorRuntime.awrap(new m.a(y));case 2:return e=c.sent,n=N({router:e,nuxt:{defaultTransition:D,transitions:[D],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},D,{name:t}):Object.assign({},D,t):D})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(e){e=e||null,n.context._errored=Boolean(e),e=e?Object(v.l)(e):null;var r=this.nuxt||this.$options.nuxt;return r.dateErr=Date.now(),r.err=e,t&&(t.nuxt.error=e),e}}},P),r=t?t.next:function(t){return n.router.push(t)},t?o=e.resolve(t.url).route:(path=Object(v.d)(e.options.base),o=e.resolve(path).route),c.next=8,regeneratorRuntime.awrap(Object(v.p)(n,{route:o,next:r,error:n.nuxt.error.bind(n),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t}));case 8:c.next=11;break;case 11:return c.abrupt("return",{app:n,router:e});case 12:case"end":return c.stop()}}))}},22:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.d(e,"a",(function(){return r}))},23:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map((function(){return t(!1)})):t(!1))}};t.exports=r},33:function(t,e,n){"use strict";function r(t,i){return function(t){if(Array.isArray(t))return t}(t)||function(t,i){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var e=[],n=!0,r=!1,o=void 0;try{for(var c,l=t[Symbol.iterator]();!(n=(c=l.next()).done)&&(e.push(c.value),!i||e.length!==i);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return e}}(t,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(e,"a",(function(){return r}))},46:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},50:function(t,e,n){"use strict";n(13),n(75),n(37),n(26),n(78),n(79);var r=n(1),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},c=window.cancelIdleCallback||function(t){clearTimeout(t)},l=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:r.default.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.prefetch&&!this.noPrefetch&&(this.handleId=o(this.observe,{timeout:2e3}))},beforeDestroy:function(){c(this.handleId),this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetchLink.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetchLink:function(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value,h=f();h instanceof Promise&&h.catch((function(){})),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}},63:function(t,e,n){"use strict";e.a={}},64:function(t,e,n){"use strict";var r={name:"ClientOnly",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",(function(){n.$forceUpdate()})),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["client-only-placeholder"]},o.placeholder||f):l.length>0?l.map((function(){return t(!1)})):t(!1))}};t.exports=r},91:function(t,e,n){"use strict";e.a=function(t,e){return e=e||{},new Promise((function(n,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(t){return i[t.toLowerCase()]},has:function(t){return t.toLowerCase()in i}}}};for(var c in s.open(e.method||"get",t,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,(function(t,e,n){o.push(e=e.toLowerCase()),u.push([e,n]),i[e]=i[e]?i[e]+","+n:n})),n(a())},s.onerror=r,s.withCredentials="include"==e.credentials,e.headers)s.setRequestHeader(c,e.headers[c]);s.send(e.body||null)}))}},93:function(t,e,n){"use strict";var r=function(t){return function(t){return!!t&&"object"==typeof t}(t)&&!function(t){var e=Object.prototype.toString.call(t);return"[object RegExp]"===e||"[object Date]"===e||function(t){return t.$$typeof===o}(t)}(t)};var o="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function c(t,e){return!1!==e.clone&&e.isMergeableObject(t)?m((n=t,Array.isArray(n)?[]:{}),t,e):t;var n}function l(t,source,e){return t.concat(source).map((function(element){return c(element,e)}))}function f(t){return Object.keys(t).concat(function(t){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t).filter((function(symbol){return t.propertyIsEnumerable(symbol)})):[]}(t))}function h(object,t){try{return t in object}catch(t){return!1}}function d(t,source,e){var n={};return e.isMergeableObject(t)&&f(t).forEach((function(r){n[r]=c(t[r],e)})),f(source).forEach((function(r){(function(t,e){return h(t,e)&&!(Object.hasOwnProperty.call(t,e)&&Object.propertyIsEnumerable.call(t,e))})(t,r)||(h(t,r)&&e.isMergeableObject(source[r])?n[r]=function(t,e){if(!e.customMerge)return m;var n=e.customMerge(t);return"function"==typeof n?n:m}(r,e)(t[r],source[r],e):n[r]=c(source[r],e))})),n}function m(t,source,e){(e=e||{}).arrayMerge=e.arrayMerge||l,e.isMergeableObject=e.isMergeableObject||r,e.cloneUnlessOtherwiseSpecified=c;var n=Array.isArray(source);return n===Array.isArray(t)?n?e.arrayMerge(t,source,e):d(t,source,e):c(source,e)}m.all=function(t,e){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce((function(t,n){return m(t,n,e)}),{})};var v=m;t.exports=v},98:function(t,e,n){t.exports=n(99)},99:function(t,e,n){"use strict";n.r(e),function(t){var e=n(22),r=(n(52),n(75),n(37),n(95),n(45),n(78),n(79),n(26),n(13),n(51),n(61),n(82),n(111),n(123),n(125),n(1)),o=n(91),c=n(63),l=n(0),f=n(16),h=n(50);r.default.component(h.a.name,h.a),r.default.component("NLink",h.a),t.fetch||(t.fetch=o.a);var d,m,v=[],y=window.__NUXT__||{};Object.assign(r.default.config,{silent:!0,performance:!1});var x=r.default.config.errorHandler||console.error;function w(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function _(t,e,n){var r,o,c,f,h=this;return regeneratorRuntime.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(this._pathChanged=Boolean(d.nuxt.err)||e.path!==t.path,this._queryChanged=JSON.stringify(t.query)!==JSON.stringify(e.query),this._diffQuery=this._queryChanged?Object(l.g)(t.query,e.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),m.prev=4,this._pathChanged||!this._queryChanged){m.next=11;break}return m.next=8,regeneratorRuntime.awrap(Object(l.n)(t,(function(t,e){return{Component:t,instance:e}})));case 8:r=m.sent,r.some((function(n){var r=n.Component,o=n.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return h._diffQuery[t]})):"function"==typeof c&&c.apply(o,[t.query,e.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start();case 11:n(),m.next=25;break;case 14:if(m.prev=14,m.t0=m.catch(4),o=m.t0||{},c=o.statusCode||o.status||o.response&&o.response.status||500,f=o.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(f)){m.next=22;break}return window.location.reload(!0),m.abrupt("return");case 22:this.error({statusCode:c,message:f}),this.$nuxt.$emit("routeChanged",t,e,o),n();case 25:case"end":return m.stop()}}),null,this,[[4,14]])}function O(t,e){return y.serverRendered&&e&&Object(l.a)(t,e),t._Ctor=t,t}function C(t){var path=Object(l.d)(t.options.base,t.options.mode);return Object(l.c)(t.match(path),(function(t,e,n,r,o){var c;return regeneratorRuntime.async((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t||t.options){e.next=4;break}return e.next=3,regeneratorRuntime.awrap(t());case 3:t=e.sent;case 4:return c=O(Object(l.o)(t),y.data?y.data[o]:null),n.components[r]=c,e.abrupt("return",c);case 7:case"end":return e.stop()}}))}))}function $(t,e,n){var r=this,o=[],f=!1;if(void 0!==n&&(o=[],(n=Object(l.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof c.a[t]&&(f=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),c.a[t])})),!f)return Object(l.k)(o,e)}function j(t,e,n){var r,o,c,h,m,y,x,_,O,C,j,k,R,E,S,T,P,A=this;return regeneratorRuntime.async((function(N){for(;;)switch(N.prev=N.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){N.next=2;break}return N.abrupt("return",n());case 2:return t===e?v=[]:(r=[],v=Object(l.e)(e,r).map((function(t,i){return Object(l.b)(e.matched[r[i]].path)(e.params)}))),o=!1,c=function(path){e.path===path.path&&A.$loading.finish&&A.$loading.finish(),e.path!==path.path&&A.$loading.pause&&A.$loading.pause(),o||(o=!0,n(path))},N.next=7,regeneratorRuntime.awrap(Object(l.p)(d,{route:t,from:e,next:c.bind(this)}));case 7:if(this._dateLastError=d.nuxt.dateErr,this._hadError=Boolean(d.nuxt.err),h=[],(m=Object(l.e)(t,h)).length){N.next=25;break}return N.next=14,regeneratorRuntime.awrap($.call(this,m,d.context));case 14:if(!o){N.next=16;break}return N.abrupt("return");case 16:return N.next=18,regeneratorRuntime.awrap(this.loadLayout("function"==typeof f.a.layout?f.a.layout(d.context):f.a.layout));case 18:return y=N.sent,N.next=21,regeneratorRuntime.awrap($.call(this,m,d.context,y));case 21:if(!o){N.next=23;break}return N.abrupt("return");case 23:return d.context.error({statusCode:404,message:"This page could not be found"}),N.abrupt("return",n());case 25:return m.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(w(m,t,e)),N.prev=27,N.next=30,regeneratorRuntime.awrap($.call(this,m,d.context));case 30:if(!o){N.next=32;break}return N.abrupt("return");case 32:if(!d.context._errored){N.next=34;break}return N.abrupt("return",n());case 34:return"function"==typeof(x=m[0].options.layout)&&(x=x(d.context)),N.next=38,regeneratorRuntime.awrap(this.loadLayout(x));case 38:return x=N.sent,N.next=41,regeneratorRuntime.awrap($.call(this,m,d.context,x));case 41:if(!o){N.next=43;break}return N.abrupt("return");case 43:if(!d.context._errored){N.next=45;break}return N.abrupt("return",n());case 45:_=!0,N.prev=46,O=!0,C=!1,j=void 0,N.prev=50,k=m[Symbol.iterator]();case 52:if(O=(R=k.next()).done){N.next=64;break}if("function"==typeof(E=R.value).options.validate){N.next=56;break}return N.abrupt("continue",61);case 56:return N.next=58,regeneratorRuntime.awrap(E.options.validate(d.context));case 58:if(_=N.sent){N.next=61;break}return N.abrupt("break",64);case 61:O=!0,N.next=52;break;case 64:N.next=70;break;case 66:N.prev=66,N.t0=N.catch(50),C=!0,j=N.t0;case 70:N.prev=70,N.prev=71,O||null==k.return||k.return();case 73:if(N.prev=73,!C){N.next=76;break}throw j;case 76:return N.finish(73);case 77:return N.finish(70);case 78:N.next=84;break;case 80:return N.prev=80,N.t1=N.catch(46),this.error({statusCode:N.t1.statusCode||"500",message:N.t1.message}),N.abrupt("return",n());case 84:if(_){N.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),N.abrupt("return",n());case 87:return N.next=89,regeneratorRuntime.awrap(Promise.all(m.map((function(n,i){if(n._path=Object(l.b)(t.matched[h[i]].path)(t.params),n._dataRefresh=!1,A._pathChanged&&A._queryChanged||n._path!==v[i])n._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var r=n.options.watchQuery;!0===r?n._dataRefresh=!0:Array.isArray(r)?n._dataRefresh=r.some((function(t){return A._diffQuery[t]})):"function"==typeof r&&(S||(S=Object(l.f)(t)),n._dataRefresh=r.apply(S[i],[t.query,e.query]))}if(A._hadError||!A._isMounted||n._dataRefresh){var o=[],c=n.options.asyncData&&"function"==typeof n.options.asyncData,f=Boolean(n.options.fetch),m=c&&f?30:45;if(c){var y=Object(l.m)(n.options.asyncData,d.context).then((function(t){Object(l.a)(n,t),A.$loading.increase&&A.$loading.increase(m)}));o.push(y)}if(A.$loading.manual=!1===n.options.loading,f){var p=n.options.fetch(d.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){A.$loading.increase&&A.$loading.increase(m)})),o.push(p)}return Promise.all(o)}}))));case 89:o||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),n()),N.next=106;break;case 92:if(N.prev=92,N.t2=N.catch(27),"ERR_REDIRECT"!==(T=N.t2||{}).message){N.next=97;break}return N.abrupt("return",this.$nuxt.$emit("routeChanged",t,e,T));case 97:return v=[],Object(l.i)(T),"function"==typeof(P=f.a.layout)&&(P=P(d.context)),N.next=103,regeneratorRuntime.awrap(this.loadLayout(P));case 103:this.error(T),this.$nuxt.$emit("routeChanged",t,e,T),n();case 106:case"end":return N.stop()}}),null,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}function k(t,n){Object(l.c)(t,(function(t,n,o,c){return"object"!==Object(e.a)(t)||t.options||((t=r.default.extend(t))._Ctor=t,o.components[c]=t),t}))}function R(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?f.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(d.context)),this.setLayout(e)}function E(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var o=Object(l.f)(t),c=Object(l.e)(t);r.default.nextTick((function(){o.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&c[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)r.default.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),R.call(n,t)}))}}function S(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),m.afterEach((function(e,n){r.default.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}Object(f.b)().then((function(t){var e,n,o,c;return regeneratorRuntime.async((function(f){for(;;)switch(f.prev=f.next){case 0:return d=t.app,m=t.router,e=new r.default(d),n=function(){e.$mount("#__nuxt"),m.afterEach(k),m.afterEach(E.bind(e)),r.default.nextTick((function(){S(e)}))},f.next=6,regeneratorRuntime.awrap(Promise.all(C(m)));case 6:if(o=f.sent,e.setTransitions=e.$options.nuxt.setTransitions.bind(e),o.length&&(e.setTransitions(w(o,m.currentRoute)),v=m.currentRoute.matched.map((function(t){return Object(l.b)(t.path)(m.currentRoute.params)}))),e.$loading={},y.error&&e.error(y.error),m.beforeEach(_.bind(e)),m.beforeEach(j.bind(e)),!y.serverRendered){f.next=16;break}return n(),f.abrupt("return");case 16:c=function(){k(m.currentRoute,m.currentRoute),R.call(e,m.currentRoute),n()},j.call(e,m.currentRoute,m.currentRoute,(function(path){if(path){var t=m.afterEach((function(e,n){t(),c()}));m.push(path,void 0,(function(t){t&&x(t)}))}else c()}));case 18:case"end":return f.stop()}}))})).catch(x)}.call(this,n(27))}},[[98,3,1]]]);