var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[985],{3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)}},9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7154:function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}e.exports=t},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},7316:function(e){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()}},6255:function(e,t,n){"use strict";var r=n(3038),o=n(319),i=n(5318);t.default=function(e){var t=e.src,n=e.sizes,o=e.unoptimized,i=void 0!==o&&o,c=e.priority,f=void 0!==c&&c,p=e.loading,h=e.className,v=e.quality,m=e.width,y=e.height,g=e.objectFit,b=e.objectPosition,A=e.loader,k=void 0===A?O:A,M=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),S=n?"responsive":"intrinsic",_=!1;"unsized"in M?(_=Boolean(M.unsized),delete M.unsized):"layout"in M&&(M.layout&&(S=M.layout),delete M.layout);0;var j=!f&&("lazy"===p||"undefined"===typeof p);t&&t.startsWith("data:")&&(i=!0,j=!1);var E,z,C,P=(0,d.useIntersection)({rootMargin:"200px",disabled:!j}),I=r(P,2),D=I[0],L=I[1],R=!j||L,N=x(m),q=x(y),H=x(v),W={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:g,objectPosition:b};if("undefined"!==typeof N&&"undefined"!==typeof q&&"fill"!==S){var B=q/N,U=isNaN(B)?"100%":"".concat(100*B,"%");"responsive"===S?(E={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},z={display:"block",boxSizing:"border-box",paddingTop:U}):"intrinsic"===S?(E={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},z={boxSizing:"border-box",display:"block",maxWidth:"100%"},C='<svg width="'.concat(N,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===S&&(E={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:N,height:q})}else"undefined"===typeof N&&"undefined"===typeof q&&"fill"===S&&(E={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var T={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};R&&(T=w({src:t,unoptimized:i,layout:S,width:N,quality:H,sizes:n,loader:k}));_&&(E=void 0,z=void 0,W=void 0);return u.default.createElement("div",{style:E},z?u.default.createElement("div",{style:z},C?u.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(C))}):null):null,!R&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},M,w({src:t,unoptimized:i,layout:S,width:N,quality:H,sizes:n,loader:k}),{src:t,decoding:"async",sizes:n,style:W,className:h}))),u.default.createElement("img",Object.assign({},M,T,{decoding:"async",className:h,ref:D,style:W})),f?u.default.createElement(s.default,null,u.default.createElement("link",{key:"__nimg-"+T.src+T.srcSet+T.sizes,rel:"preload",as:"image",href:T.srcSet?void 0:T.src,imagesrcset:T.srcSet,imagesizes:T.sizes})):null)};var a=i(n(7316)),c=i(n(7154)),u=i(n(7294)),s=i(n(7947)),l=n(7239),f=n(5655),d=n(5749);var p=new Map([["imgix",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["auto=format","fit=max","w="+r],a="";o&&i.push("q="+o);i.length&&(a="?"+i.join("&"));return"".concat(t).concat(A(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality,i=["f_auto","c_limit","w_"+r,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(i).concat(A(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(A(n),"?imwidth=").concat(r)}],["default",function(e){var t=e.root,n=e.src,r=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||f.imageConfigDefault,v=h.deviceSizes,m=h.imageSizes,y=h.loader,g=h.path,b=(h.domains,[].concat(o(v),o(m)));function w(e){var t=e.src,n=e.unoptimized,r=e.layout,i=e.width,a=e.quality,c=e.sizes,u=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var s=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){var r=o(n.matchAll(/(^|\s)(1?\d?\d)vw/g)).map((function(e){return parseInt(e[2])}));if(r.length){var i=.01*Math.min.apply(Math,o(r));return{widths:b.filter((function(e){return e>=v[0]*i})),kind:"w"}}return{widths:b,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:v,kind:"w"}:{widths:o(new Set([e,2*e].map((function(e){return b.find((function(t){return t>=e}))||b[b.length-1]})))),kind:"x"}}(i,r,c),l=s.widths,f=s.kind,d=l.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:l.map((function(e,n){return"".concat(u({src:t,quality:a,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:u({src:t,quality:a,width:l[d]})}}function x(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=p.get(y);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(y))}function A(e){return"/"===e[0]?e.slice(1):e}v.sort((function(e,t){return e-t})),b.sort((function(e,t){return e-t}))},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var i=o(n(7294)),a=n(1689),c=n(2441),u=n(5749),s={};function l(e,t,n,r){if(e&&(0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",f=i.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(o,e.as):c||i}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,m=e.shallow,y=e.scroll,g=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=i.Children.only(h),w=b&&"object"===typeof b&&b.ref,x=(0,u.useIntersection)({rootMargin:"200px"}),O=r(x,2),A=O[0],k=O[1],M=i.default.useCallback((function(e){A(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,A]);(0,i.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof g?g:n&&n.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(n,d,p,{locale:r})}),[p,d,k,g,t,n]);var S={ref:M,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,n,d,p,v,m,y,g)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(n,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var _="undefined"!==typeof g?g:n&&n.locale,j=n&&n.isLocaleDomain&&(0,a.getDomainLocale)(p,_,n&&n.locales,n&&n.domainLocales);S.href=j||(0,a.addBasePath)((0,a.addLocale)(p,_,n&&n.defaultLocale))}return i.default.cloneElement(b,S)};t.default=f},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||f||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!a&&!f){var e=(0,i.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=n(7294),i=n(8391),a="undefined"!==typeof IntersectionObserver;var c=new Map},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n(7294))&&r.__esModule?r:{default:r},i=n(3367);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,a=void 0!==i&&i;return n||o&&a}},7947:function(e,t,n){"use strict";var r=n(9713);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=d,t.default=void 0;var i,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(7294)),c=(i=n(617))&&i.__esModule?i:{default:i},u=n(3367),s=n(4287),l=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?i=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var l=h[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var f=o.props[l],d=r[l]||new Set;"name"===l&&a||!d.has(f)?(d.add(f),r[l]=d):i=!1}}}return i}}()).reverse().map((function(e,n){var i=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["http://web.archive.org/web/20210604060815/https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,a.default.cloneElement(e,c)}return a.default.cloneElement(e,{key:i})}))}function m(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),r=(0,a.useContext)(s.HeadManagerContext);return a.default.createElement(c.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}m.rewind=function(){};var y=m;t.default=y},617:function(e,t,n){"use strict";var r=n(319),o=n(4575),i=n(3913),a=(n(1506),n(2205)),c=n(8585),u=n(9754);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){a(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},7239:function(e,t){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},1582:function(){},5655:function(e,t){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},9008:function(e,t,n){e.exports=n(7947)},5675:function(e,t,n){e.exports=n(6255)},1664:function(e,t,n){e.exports=n(6071)},4405:function(e,t,n){"use strict";n.d(t,{w_:function(){return s},Pd:function(){return i}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,s=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}}}]);

}
/*
     FILE ARCHIVED ON 06:08:15 Jun 04, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:02:35 Jul 22, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 102.261
  exclusion.robots: 0.089
  exclusion.robots.policy: 0.078
  RedisCDXSource: 0.702
  esindex: 0.01
  LoadShardBlock: 79.562 (3)
  PetaboxLoader3.datanode: 70.521 (5)
  PetaboxLoader3.resolve: 430.118 (3)
  load_resource: 429.27 (2)
*/