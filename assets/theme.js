/*! VelocityJS.org (1.5.0). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(e){"use strict";function t(e){var t=e.length,o=r.type(e);return"function"!==o&&!r.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var r=function(e,t){return new r.fn.init(e,t)};r.isWindow=function(e){return e&&e===e.window},r.type=function(e){return e?"object"==typeof e||"function"==typeof e?i[a.call(e)]||"object":typeof e:e+""},r.isArray=Array.isArray||function(e){return"array"===r.type(e)},r.isPlainObject=function(e){var t;if(!e||"object"!==r.type(e)||e.nodeType||r.isWindow(e))return!1;try{if(e.constructor&&!n.call(e,"constructor")&&!n.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||n.call(e,t)},r.each=function(e,r,o){var i=0,n=e.length,a=t(e);if(o){if(a)for(;i<n&&!1!==r.apply(e[i],o);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===r.apply(e[i],o))break}else if(a)for(;i<n&&!1!==r.call(e[i],i,e[i]);i++);else for(i in e)if(e.hasOwnProperty(i)&&!1===r.call(e[i],i,e[i]))break;return e},r.data=function(e,t,i){if(void 0===i){var n=e[r.expando],a=n&&o[n];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var s=e[r.expando]||(e[r.expando]=++r.uuid);return o[s]=o[s]||{},o[s][t]=i,i}},r.removeData=function(e,t){var i=e[r.expando],n=i&&o[i];n&&(t?r.each(t,function(e,t){delete n[t]}):delete o[i])},r.extend=function(){var e,t,o,i,n,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[l]||{},l++),"object"!=typeof s&&"function"!==r.type(s)&&(s={}),l===u&&(s=this,l--);l<u;l++)if(n=arguments[l])for(i in n)n.hasOwnProperty(i)&&(e=s[i],o=n[i],s!==o&&(c&&o&&(r.isPlainObject(o)||(t=r.isArray(o)))?(t?(t=!1,a=e&&r.isArray(e)?e:[]):a=e&&r.isPlainObject(e)?e:{},s[i]=r.extend(c,a,o)):void 0!==o&&(s[i]=o)));return s},r.queue=function(e,o,i){if(e){o=(o||"fx")+"queue";var n=r.data(e,o);return i?(!n||r.isArray(i)?n=r.data(e,o,function(e,r){var o=r||[];return e&&(t(Object(e))?function(e,t){for(var r=+t.length,o=0,i=e.length;o<r;)e[i++]=t[o++];if(r!==r)for(;void 0!==t[o];)e[i++]=t[o++];e.length=i}(o,"string"==typeof e?[e]:e):[].push.call(o,e)),o}(i)):n.push(i),n):n||[]}},r.dequeue=function(e,t){r.each(e.nodeType?[e]:e,function(e,o){t=t||"fx";var i=r.queue(o,t),n=i.shift();"inprogress"===n&&(n=i.shift()),n&&("fx"===t&&i.unshift("inprogress"),n.call(o,function(){r.dequeue(o,t)}))})},r.fn=r.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){var e=this[0],t=function(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}(e),o=this.offset(),i=/^(?:body|html)$/i.test(t.nodeName)?{top:0,left:0}:r(t).offset();return o.top-=parseFloat(e.style.marginTop)||0,o.left-=parseFloat(e.style.marginLeft)||0,t.style&&(i.top+=parseFloat(t.style.borderTopWidth)||0,i.left+=parseFloat(t.style.borderLeftWidth)||0),{top:o.top-i.top,left:o.left-i.left}}};var o={};r.expando="velocity"+(new Date).getTime(),r.uuid=0;for(var i={},n=i.hasOwnProperty,a=i.toString,s="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<s.length;l++)i["[object "+s[l]+"]"]=s[l].toLowerCase();r.fn.init.prototype=r.fn,e.Velocity={Utilities:r}}}(window),function(e){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";return function(e,t,r,o){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,r=e?e.length:0,o=[];++t<r;){var i=e[t];i&&o.push(i)}return o}function n(e){return b.isWrapped(e)?e=y.call(e):b.isNode(e)&&(e=[e]),e}function a(e){var t=m.data(e,"velocity");return null===t?o:t}function s(e,t){var r=a(e);r&&r.delayTimer&&!r.delayPaused&&(r.delayRemaining=r.delay-t+r.delayBegin,r.delayPaused=!0,clearTimeout(r.delayTimer.setTimeout))}function l(e,t){var r=a(e);r&&r.delayTimer&&r.delayPaused&&(r.delayPaused=!1,r.delayTimer.setTimeout=setTimeout(r.delayTimer.next,r.delayRemaining))}function u(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,r,o,i){function n(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function l(e,t,r){return((n(t,r)*e+a(t,r))*e+s(t))*e}function u(e,t,r){return 3*n(t,r)*e*e+2*a(t,r)*e+s(t)}function c(t,r){for(var i=0;i<h;++i){var n=u(r,e,o);if(0===n)return r;r-=(l(r,e,o)-t)/n}return r}function p(){for(var t=0;t<w;++t)P[t]=l(t*b,e,o)}function d(t,r,i){var n,a,s=0;do{a=r+(i-r)/2,n=l(a,e,o)-t,n>0?i=a:r=a}while(Math.abs(n)>v&&++s<y);return a}function f(t){for(var r=0,i=1,n=w-1;i!==n&&P[i]<=t;++i)r+=b;--i;var a=(t-P[i])/(P[i+1]-P[i]),s=r+a*b,l=u(s,e,o);return l>=g?c(t,s):0===l?s:d(t,r,r+b)}function m(){C=!0,e===r&&o===i||p()}var h=4,g=.001,v=1e-7,y=10,w=11,b=1/(w-1),x="Float32Array"in t;if(4!==arguments.length)return!1;for(var S=0;S<4;++S)if("number"!=typeof arguments[S]||isNaN(arguments[S])||!isFinite(arguments[S]))return!1;e=Math.min(e,1),o=Math.min(o,1),e=Math.max(e,0),o=Math.max(o,0);var P=x?new Float32Array(w):new Array(w),C=!1,I=function(t){return C||m(),e===r&&o===i?t:0===t?0:1===t?1:l(f(t),r,i)};I.getControlPoints=function(){return[{x:e,y:r},{x:o,y:i}]};var T="generateBezier("+[e,r,o,i]+")";return I.toString=function(){return T},I}function p(e,t){var r=e;return b.isString(e)?C.Easings[e]||(r=!1):r=b.isArray(e)&&1===e.length?u.apply(null,e):b.isArray(e)&&2===e.length?I.apply(null,e.concat([t])):!(!b.isArray(e)||4!==e.length)&&c.apply(null,e),!1===r&&(r=C.Easings[C.defaults.easing]?C.defaults.easing:P),r}function d(e){if(e){var t=C.timestamp&&!0!==e?e:v.now(),r=C.State.calls.length;r>1e4&&(C.State.calls=i(C.State.calls),r=C.State.calls.length);for(var n=0;n<r;n++)if(C.State.calls[n]){var s=C.State.calls[n],l=s[0],u=s[2],c=s[3],p=!!c,g=null,y=s[5],w=s[6];if(c||(c=C.State.calls[n][3]=t-16),y){if(!0!==y.resume)continue;c=s[3]=Math.round(t-w-16),s[5]=null}w=s[6]=t-c;for(var x=Math.min(w/u.duration,1),S=0,P=l.length;S<P;S++){var I=l[S],k=I.element;if(a(k)){var A=!1;if(u.display!==o&&null!==u.display&&"none"!==u.display){if("flex"===u.display){var $=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each($,function(e,t){T.setPropertyValue(k,"display",t)})}T.setPropertyValue(k,"display",u.display)}u.visibility!==o&&"hidden"!==u.visibility&&T.setPropertyValue(k,"visibility",u.visibility);for(var N in I)if(I.hasOwnProperty(N)&&"element"!==N){var E,j=I[N],z=b.isString(j.easing)?C.Easings[j.easing]:j.easing;if(b.isString(j.pattern)){var F=1===x?function(e,t,r){var o=j.endValue[t];return r?Math.round(o):o}:function(e,t,r){var o=j.startValue[t],i=j.endValue[t]-o,n=o+i*z(x,u,i);return r?Math.round(n):n};E=j.pattern.replace(/{(\d+)(!)?}/g,F)}else if(1===x)E=j.endValue;else{var O=j.endValue-j.startValue;E=j.startValue+O*z(x,u,O)}if(!p&&E===j.currentValue)continue;if(j.currentValue=E,"tween"===N)g=E;else{var W;if(T.Hooks.registered[N]){W=T.Hooks.getRoot(N);var L=a(k).rootPropertyValueCache[W];L&&(j.rootPropertyValue=L)}var R=T.setPropertyValue(k,N,j.currentValue+(h<9&&0===parseFloat(E)?"":j.unitType),j.rootPropertyValue,j.scrollData);T.Hooks.registered[N]&&(T.Normalizations.registered[W]?a(k).rootPropertyValueCache[W]=T.Normalizations.registered[W]("extract",null,R[1]):a(k).rootPropertyValueCache[W]=R[1]),"transform"===R[0]&&(A=!0)}}u.mobileHA&&a(k).transformCache.translate3d===o&&(a(k).transformCache.translate3d="(0px, 0px, 0px)",A=!0),A&&T.flushTransformCache(k)}}u.display!==o&&"none"!==u.display&&(C.State.calls[n][2].display=!1),u.visibility!==o&&"hidden"!==u.visibility&&(C.State.calls[n][2].visibility=!1),u.progress&&u.progress.call(s[1],s[1],x,Math.max(0,c+u.duration-t),c,g),1===x&&f(n)}}C.State.isTicking&&V(d)}function f(e,t){if(!C.State.calls[e])return!1;for(var r=C.State.calls[e][0],i=C.State.calls[e][1],n=C.State.calls[e][2],s=C.State.calls[e][4],l=!1,u=0,c=r.length;u<c;u++){var p=r[u].element;t||n.loop||("none"===n.display&&T.setPropertyValue(p,"display",n.display),"hidden"===n.visibility&&T.setPropertyValue(p,"visibility",n.visibility));var d=a(p);if(!0!==n.loop&&(m.queue(p)[1]===o||!/\.velocityQueueEntryFlag/i.test(m.queue(p)[1]))&&d){d.isAnimating=!1,d.rootPropertyValueCache={};var f=!1;m.each(T.Lists.transforms3D,function(e,t){var r=/^scale/.test(t)?1:0,i=d.transformCache[t];d.transformCache[t]!==o&&new RegExp("^\\("+r+"[^.]").test(i)&&(f=!0,delete d.transformCache[t])}),n.mobileHA&&(f=!0,delete d.transformCache.translate3d),f&&T.flushTransformCache(p),T.Values.removeClass(p,"velocity-animating")}if(!t&&n.complete&&!n.loop&&u===c-1)try{n.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}s&&!0!==n.loop&&s(i),d&&!0===n.loop&&!t&&(m.each(d.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360==0){var r=t.startValue;t.startValue=t.endValue,t.endValue=r}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),C(p,"reverse",{loop:!0,delay:n.delay})),!1!==n.queue&&m.dequeue(p,n.queue)}C.State.calls[e]=!1;for(var h=0,g=C.State.calls.length;h<g;h++)if(!1!==C.State.calls[h]){l=!0;break}!1===l&&(C.State.isTicking=!1,delete C.State.calls,C.State.calls=[])}var m,h=function(){if(r.documentMode)return r.documentMode;for(var e=7;e>4;e--){var t=r.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return o}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var r,o=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return r=Math.max(0,16-(o-e)),e=o+r,setTimeout(function(){t(o+r)},r)}}(),v=function(){var e=t.performance||{};if("function"!=typeof e.now){var r=e.timing&&e.timing.navigationStart?e.timing.navigationStart:(new Date).getTime();e.now=function(){return(new Date).getTime()-r}}return e}(),y=function(){var e=Array.prototype.slice;try{return e.call(r.documentElement),e}catch(t){return function(t,r){var o=this.length;if("number"!=typeof t&&(t=0),"number"!=typeof r&&(r=o),this.slice)return e.call(this,t,r);var i,n=[],a=t>=0?t:Math.max(0,o+t),s=r<0?o+r:Math.min(r,o),l=s-a;if(l>0)if(n=new Array(l),this.charAt)for(i=0;i<l;i++)n[i]=this.charAt(a+i);else for(i=0;i<l;i++)n[i]=this[a+i];return n}}}(),w=function(){return Array.prototype.includes?function(e,t){return e.includes(t)}:Array.prototype.indexOf?function(e,t){return e.indexOf(t)>=0}:function(e,t){for(var r=0;r<e.length;r++)if(e[r]===t)return!0;return!1}},b={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isWrapped:function(e){return e&&e!==t&&b.isNumber(e.length)&&!b.isString(e)&&!b.isFunction(e)&&!b.isNode(e)&&(0===e.length||b.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},x=!1;if(e.fn&&e.fn.jquery?(m=e,x=!0):m=t.Velocity.Utilities,h<=8&&!x)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(h<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var S=400,P="swing",C={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:r.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[],delayedElements:{count:0}},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:S,easing:P,begin:o,complete:o,progress:o,display:o,visibility:o,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0,promiseRejectEmpty:!0},init:function(e){m.data(e,"velocity",{isSVG:b.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:5,patch:0},debug:!1,timestamp:!0,pauseAll:function(e){var t=(new Date).getTime();m.each(C.State.calls,function(t,r){if(r){if(e!==o&&(r[2].queue!==e||!1===r[2].queue))return!0;r[5]={resume:!1}}}),m.each(C.State.delayedElements,function(e,r){r&&s(r,t)})},resumeAll:function(e){var t=(new Date).getTime();m.each(C.State.calls,function(t,r){if(r){if(e!==o&&(r[2].queue!==e||!1===r[2].queue))return!0;r[5]&&(r[5].resume=!0)}}),m.each(C.State.delayedElements,function(e,r){r&&l(r,t)})}};t.pageYOffset!==o?(C.State.scrollAnchor=t,C.State.scrollPropertyLeft="pageXOffset",C.State.scrollPropertyTop="pageYOffset"):(C.State.scrollAnchor=r.documentElement||r.body.parentNode||r.body,C.State.scrollPropertyLeft="scrollLeft",C.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var I=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,r,o){var i={x:t.x+o.dx*r,v:t.v+o.dv*r,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function r(r,o){var i={dx:r.v,dv:e(r)},n=t(r,.5*o,i),a=t(r,.5*o,n),s=t(r,o,a),l=1/6*(i.dx+2*(n.dx+a.dx)+s.dx),u=1/6*(i.dv+2*(n.dv+a.dv)+s.dv);return r.x=r.x+l*o,r.v=r.v+u*o,r}return function e(t,o,i){var n,a,s,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,o=parseFloat(o)||20,i=i||null,l.tension=t,l.friction=o,n=null!==i,n?(c=e(t,o),a=c/i*.016):a=.016;;)if(s=r(s||l,a),u.push(1+s.x),c+=16,!(Math.abs(s.x)>1e-4&&Math.abs(s.v)>1e-4))break;return n?function(e){return u[e*(u.length-1)|0]}:c}}();C.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){C.Easings[t[0]]=c.apply(null,t[1])});var T=C.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%","em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","Q","in","pc","pt","px","deg","grad","rad","turn","s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<T.Lists.colors.length;e++){var t="color"===T.Lists.colors[e]?"0 0 0 1":"255 255 255 1";T.Hooks.templates[T.Lists.colors[e]]=["Red Green Blue Alpha",t]}var r,o,i;if(h)for(r in T.Hooks.templates)if(T.Hooks.templates.hasOwnProperty(r)){o=T.Hooks.templates[r],i=o[0].split(" ");var n=o[1].match(T.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),n.push(n.shift()),T.Hooks.templates[r]=[i.join(" "),n.join(" ")])}for(r in T.Hooks.templates)if(T.Hooks.templates.hasOwnProperty(r)){o=T.Hooks.templates[r],i=o[0].split(" ");for(var a in i)if(i.hasOwnProperty(a)){var s=r+i[a],l=a;T.Hooks.registered[s]=[r,l]}}},getRoot:function(e){var t=T.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var r=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return r&&w(T.Lists.units,r)?r:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,r){return T.Lists.colorNames.hasOwnProperty(r)?(t||"rgba(")+T.Lists.colorNames[r]+(t?"":",1)"):t+r})},cleanRootPropertyValue:function(e,t){return T.RegEx.valueUnwrap.test(t)&&(t=t.match(T.RegEx.valueUnwrap)[1]),T.Values.isCSSNullValue(t)&&(t=T.Hooks.templates[e][1]),t},extractValue:function(e,t){var r=T.Hooks.registered[e];if(r){var o=r[0],i=r[1];return t=T.Hooks.cleanRootPropertyValue(o,t),t.toString().match(T.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,r){var o=T.Hooks.registered[e];if(o){var i,n=o[0],a=o[1];return r=T.Hooks.cleanRootPropertyValue(n,r),i=r.toString().match(T.RegEx.valueSplit),i[a]=t,i.join(" ")}return r}},Normalizations:{registered:{clip:function(e,t,r){switch(e){case"name":return"clip";case"extract":var o;return T.RegEx.wrappedValueAlreadyExtracted.test(r)?o=r:(o=r.toString().match(T.RegEx.valueUnwrap),o=o?o[1].replace(/,(\s+)?/g," "):r),o;case"inject":return"rect("+r+")"}},blur:function(e,t,r){switch(e){case"name":return C.State.isFirefox?"filter":"-webkit-filter";case"extract":var o=parseFloat(r);if(!o&&0!==o){var i=r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);o=i?i[1]:0}return o;case"inject":return parseFloat(r)?"blur("+r+")":"none"}},opacity:function(e,t,r){if(h<=8)switch(e){case"name":return"filter";case"extract":var o=r.toString().match(/alpha\(opacity=(.*)\)/i);return r=o?o[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(r)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(r),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return r}}},register:function(){function e(e,t,r){if("border-box"===T.getPropertyValue(t,"boxSizing").toString().toLowerCase()===(r||!1)){var o,i,n=0,a="width"===e?["Left","Right"]:["Top","Bottom"],s=["padding"+a[0],"padding"+a[1],"border"+a[0]+"Width","border"+a[1]+"Width"];for(o=0;o<s.length;o++)i=parseFloat(T.getPropertyValue(t,s[o])),isNaN(i)||(n+=i);return r?-n:n}return 0}function t(t,r){return function(o,i,n){switch(o){case"name":return t;case"extract":return parseFloat(n)+e(t,i,r);case"inject":return parseFloat(n)-e(t,i,r)+"px"}}}h&&!(h>9)||C.State.isGingerbread||(T.Lists.transformsBase=T.Lists.transformsBase.concat(T.Lists.transforms3D));for(var r=0;r<T.Lists.transformsBase.length;r++)!function(){var e=T.Lists.transformsBase[r];T.Normalizations.registered[e]=function(t,r,i){switch(t){case"name":return"transform";case"extract":return a(r)===o||a(r).transformCache[e]===o?/^scale/i.test(e)?1:0:a(r).transformCache[e].replace(/[()]/g,"");case"inject":var n=!1;switch(e.substr(0,e.length-1)){case"translate":n=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":C.State.isAndroid&&a(r).transformCache[e]===o&&i<1&&(i=1),n=!/(\d)$/i.test(i);break;case"skew":case"rotate":n=!/(deg|\d)$/i.test(i)}return n||(a(r).transformCache[e]="("+i+")"),a(r).transformCache[e]}}}();for(var i=0;i<T.Lists.colors.length;i++)!function(){var e=T.Lists.colors[i];T.Normalizations.registered[e]=function(t,r,i){switch(t){case"name":return e;case"extract":var n;if(T.RegEx.wrappedValueAlreadyExtracted.test(i))n=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==o?s[i]:s.black:T.RegEx.isHex.test(i)?a="rgb("+T.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),n=(a||i).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return(!h||h>8)&&3===n.split(" ").length&&(n+=" 1"),n;case"inject":return/^rgb/.test(i)?i:(h<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(h<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();T.Normalizations.registered.innerWidth=t("width",!0),T.Normalizations.registered.innerHeight=t("height",!0),T.Normalizations.registered.outerWidth=t("width"),T.Normalizations.registered.outerHeight=t("height")}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||C.State.isAndroid&&!C.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(C.State.prefixMatches[e])return[C.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],r=0,o=t.length;r<o;r++){var i;if(i=0===r?e:t[r]+e.replace(/^\w/,function(e){return e.toUpperCase()}),b.isString(C.State.prefixElement.style[i]))return C.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,o=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(r,function(e,t,r,o){return t+t+r+r+o+o}),t=o.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(b.isString(e.className))e.className+=(e.className.length?" ":"")+t;else{var r=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",r+(r?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(b.isString(e.className))e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{var r=e.getAttribute(h<=7?"className":"class")||"";e.setAttribute("class",r.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},getPropertyValue:function(e,r,i,n){function s(e,r){var i=0;if(h<=8)i=m.css(e,r);else{var l=!1;/^(width|height)$/.test(r)&&0===T.getPropertyValue(e,"display")&&(l=!0,T.setPropertyValue(e,"display",T.Values.getDisplayType(e)));var u=function(){l&&T.setPropertyValue(e,"display","none")};if(!n){if("height"===r&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(T.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(T.getPropertyValue(e,"paddingBottom"))||0);return u(),c}if("width"===r&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(T.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(T.getPropertyValue(e,"paddingRight"))||0);return u(),p}}var d;d=a(e)===o?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===r&&(r="borderTopColor"),i=9===h&&"filter"===r?d.getPropertyValue(r):d[r],""!==i&&null!==i||(i=e.style[r]),u()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(r)){var f=s(e,"position");("fixed"===f||"absolute"===f&&/top|left/i.test(r))&&(i=m(e).position()[r]+"px")}return i}var l;if(T.Hooks.registered[r]){var u=r,c=T.Hooks.getRoot(u);i===o&&(i=T.getPropertyValue(e,T.Names.prefixCheck(c)[0])),T.Normalizations.registered[c]&&(i=T.Normalizations.registered[c]("extract",e,i)),l=T.Hooks.extractValue(u,i)}else if(T.Normalizations.registered[r]){var p,d;p=T.Normalizations.registered[r]("name",e),"transform"!==p&&(d=s(e,T.Names.prefixCheck(p)[0]),T.Values.isCSSNullValue(d)&&T.Hooks.templates[r]&&(d=T.Hooks.templates[r][1])),l=T.Normalizations.registered[r]("extract",e,d)}if(!/^[\d-]/.test(l)){var f=a(e);if(f&&f.isSVG&&T.Names.SVGAttribute(r))if(/^(height|width)$/i.test(r))try{l=e.getBBox()[r]}catch(e){l=0}else l=e.getAttribute(r);else l=s(e,T.Names.prefixCheck(r)[0])}return T.Values.isCSSNullValue(l)&&(l=0),C.debug>=2&&console.log("Get "+r+": "+l),l},setPropertyValue:function(e,r,o,i,n){var s=r;if("scroll"===r)n.container?n.container["scroll"+n.direction]=o:"Left"===n.direction?t.scrollTo(o,n.alternateValue):t.scrollTo(n.alternateValue,o);else if(T.Normalizations.registered[r]&&"transform"===T.Normalizations.registered[r]("name",e))T.Normalizations.registered[r]("inject",e,o),s="transform",o=a(e).transformCache[r];else{if(T.Hooks.registered[r]){var l=r,u=T.Hooks.getRoot(r);i=i||T.getPropertyValue(e,u),o=T.Hooks.injectValue(l,o,i),r=u}if(T.Normalizations.registered[r]&&(o=T.Normalizations.registered[r]("inject",e,o),r=T.Normalizations.registered[r]("name",e)),s=T.Names.prefixCheck(r)[0],h<=8)try{e.style[s]=o}catch(e){C.debug&&console.log("Browser does not support ["+o+"] for ["+s+"]")}else{var c=a(e);c&&c.isSVG&&T.Names.SVGAttribute(r)?e.setAttribute(r,o):e.style[s]=o}C.debug>=2&&console.log("Set "+r+" ("+s+"): "+o)}return[s,o]},flushTransformCache:function(e){var t="",r=a(e);if((h||C.State.isAndroid&&!C.State.isChrome)&&r&&r.isSVG){var o=function(t){return parseFloat(T.getPropertyValue(e,t))},i={translate:[o("translateX"),o("translateY")],skewX:[o("skewX")],skewY:[o("skewY")],scale:1!==o("scale")?[o("scale"),o("scale")]:[o("scaleX"),o("scaleY")],rotate:[o("rotateZ"),0,0]};m.each(a(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),i[e]&&(t+=e+"("+i[e].join(" ")+") ",delete i[e])})}else{var n,s;m.each(a(e).transformCache,function(r){if(n=a(e).transformCache[r],"transformPerspective"===r)return s=n,!0;9===h&&"rotateZ"===r&&(r="rotate"),t+=r+n+" "}),s&&(t="perspective"+s+" "+t)}T.setPropertyValue(e,"transform",t)}};T.Hooks.register(),T.Normalizations.register(),C.hook=function(e,t,r){var i;return e=n(e),m.each(e,function(e,n){if(a(n)===o&&C.init(n),r===o)i===o&&(i=T.getPropertyValue(n,t));else{var s=T.setPropertyValue(n,t,r);"transform"===s[0]&&C.CSS.flushTransformCache(n),i=s}}),i};var k=function(){function e(){return c?I.promise||null:h}function i(e,i){function n(n){var c,f;if(l.begin&&0===A)try{l.begin.call(v,v)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===E){var h,g,S,P=/^x$/i.test(l.axis)?"Left":"Top",k=parseFloat(l.offset)||0;l.container?b.isWrapped(l.container)||b.isNode(l.container)?(l.container=l.container[0]||l.container,h=l.container["scroll"+P],S=h+m(e).position()[P.toLowerCase()]+k):l.container=null:(h=C.State.scrollAnchor[C.State["scrollProperty"+P]],g=C.State.scrollAnchor[C.State["scrollProperty"+("Left"===P?"Top":"Left")]],S=m(e).offset()[P.toLowerCase()]+k),u={scroll:{rootPropertyValue:!1,startValue:h,currentValue:h,endValue:S,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:P,alternateValue:g}},element:e},C.debug&&console.log("tweensContainer (scroll): ",u.scroll,e)}else if("reverse"===E){if(!(c=a(e)))return;if(!c.tweensContainer)return void m.dequeue(e,l.queue);"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,x.easing||delete l.easing,x.duration||delete l.duration,l=m.extend({},c.opts,l),f=m.extend(!0,{},c?c.tweensContainer:null);for(var $ in f)if(f.hasOwnProperty($)&&"element"!==$){var N=f[$].startValue;f[$].startValue=f[$].currentValue=f[$].endValue,f[$].endValue=N,b.isEmptyObject(x)||(f[$].easing=l.easing),C.debug&&console.log("reverse tweensContainer ("+$+"): "+JSON.stringify(f[$]),e)}u=f}else if("start"===E){c=a(e),c&&c.tweensContainer&&!0===c.isAnimating&&(f=c.tweensContainer);var j=function(i,n){var a,p=T.Hooks.getRoot(i),d=!1,h=n[0],g=n[1],v=n[2];if(!(c&&c.isSVG||"tween"===p||!1!==T.Names.prefixCheck(p)[1]||T.Normalizations.registered[p]!==o))return void(C.debug&&console.log("Skipping ["+p+"] due to a lack of browser support."));(l.display!==o&&null!==l.display&&"none"!==l.display||l.visibility!==o&&"hidden"!==l.visibility)&&/opacity|filter/.test(i)&&!v&&0!==h&&(v=0),l._cacheValues&&f&&f[i]?(v===o&&(v=f[i].endValue+f[i].unitType),d=c.rootPropertyValueCache[p]):T.Hooks.registered[i]?v===o?(d=T.getPropertyValue(e,p),v=T.getPropertyValue(e,i,d)):d=T.Hooks.templates[p][1]:v===o&&(v=T.getPropertyValue(e,i));var y,w,x,S=!1,P=function(e,t){var r,o;return o=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return r=e,""}),r||(r=T.Values.getUnitType(e)),[o,r]};if(v!==h&&b.isString(v)&&b.isString(h)){a="";var I=0,k=0,V=[],A=[],$=0,N=0,E=0;for(v=T.Hooks.fixColors(v),h=T.Hooks.fixColors(h);I<v.length&&k<h.length;){var j=v[I],z=h[k];if(/[\d\.-]/.test(j)&&/[\d\.-]/.test(z)){for(var F=j,O=z,W=".",R=".";++I<v.length;){if((j=v[I])===W)W="..";else if(!/\d/.test(j))break;F+=j}for(;++k<h.length;){if((z=h[k])===R)R="..";else if(!/\d/.test(z))break;O+=z}var H=T.Hooks.getUnit(v,I),M=T.Hooks.getUnit(h,k);if(I+=H.length,k+=M.length,H===M)F===O?a+=F+H:(a+="{"+V.length+(N?"!":"")+"}"+H,V.push(parseFloat(F)),A.push(parseFloat(O)));else{var D=parseFloat(F),q=parseFloat(O);a+=($<5?"calc":"")+"("+(D?"{"+V.length+(N?"!":"")+"}":"0")+H+" + "+(q?"{"+(V.length+(D?1:0))+(N?"!":"")+"}":"0")+M+")",D&&(V.push(D),A.push(0)),q&&(V.push(0),A.push(q))}}else{if(j!==z){$=0;break}a+=j,I++,k++,0===$&&"c"===j||1===$&&"a"===j||2===$&&"l"===j||3===$&&"c"===j||$>=4&&"("===j?$++:($&&$<5||$>=4&&")"===j&&--$<5)&&($=0),0===N&&"r"===j||1===N&&"g"===j||2===N&&"b"===j||3===N&&"a"===j||N>=3&&"("===j?(3===N&&"a"===j&&(E=1),N++):E&&","===j?++E>3&&(N=E=0):(E&&N<(E?5:4)||N>=(E?4:3)&&")"===j&&--N<(E?5:4))&&(N=E=0)}}I===v.length&&k===h.length||(C.debug&&console.error('Trying to pattern match mis-matched strings ["'+h+'", "'+v+'"]'),a=o),a&&(V.length?(C.debug&&console.log('Pattern found "'+a+'" -> ',V,A,"["+v+","+h+"]"),v=V,h=A,w=x=""):a=o)}a||(y=P(i,v),v=y[0],x=y[1],y=P(i,h),h=y[0].replace(/^([+-\/*])=/,function(e,t){return S=t,""}),w=y[1],v=parseFloat(v)||0,h=parseFloat(h)||0,"%"===w&&(/^(fontSize|lineHeight)$/.test(i)?(h/=100,w="em"):/^scale/.test(i)?(h/=100,w=""):/(Red|Green|Blue)$/i.test(i)&&(h=h/100*255,w="")));if(/[\/*]/.test(S))w=x;else if(x!==w&&0!==v)if(0===h)w=x;else{s=s||function(){var o={myParent:e.parentNode||r.body,position:T.getPropertyValue(e,"position"),fontSize:T.getPropertyValue(e,"fontSize")},i=o.position===L.lastPosition&&o.myParent===L.lastParent,n=o.fontSize===L.lastFontSize;L.lastParent=o.myParent,L.lastPosition=o.position,L.lastFontSize=o.fontSize;var a={};if(n&&i)a.emToPx=L.lastEmToPx,a.percentToPxWidth=L.lastPercentToPxWidth,a.percentToPxHeight=L.lastPercentToPxHeight;else{var s=c&&c.isSVG?r.createElementNS("http://www.w3.org/2000/svg","rect"):r.createElement("div");C.init(s),o.myParent.appendChild(s),m.each(["overflow","overflowX","overflowY"],function(e,t){C.CSS.setPropertyValue(s,t,"hidden")}),C.CSS.setPropertyValue(s,"position",o.position),C.CSS.setPropertyValue(s,"fontSize",o.fontSize),C.CSS.setPropertyValue(s,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){C.CSS.setPropertyValue(s,t,"100%")}),C.CSS.setPropertyValue(s,"paddingLeft","100em"),a.percentToPxWidth=L.lastPercentToPxWidth=(parseFloat(T.getPropertyValue(s,"width",null,!0))||1)/100,a.percentToPxHeight=L.lastPercentToPxHeight=(parseFloat(T.getPropertyValue(s,"height",null,!0))||1)/100,a.emToPx=L.lastEmToPx=(parseFloat(T.getPropertyValue(s,"paddingLeft"))||1)/100,o.myParent.removeChild(s)}return null===L.remToPx&&(L.remToPx=parseFloat(T.getPropertyValue(r.body,"fontSize"))||16),null===L.vwToPx&&(L.vwToPx=parseFloat(t.innerWidth)/100,L.vhToPx=parseFloat(t.innerHeight)/100),a.remToPx=L.remToPx,a.vwToPx=L.vwToPx,a.vhToPx=L.vhToPx,C.debug>=1&&console.log("Unit ratios: "+JSON.stringify(a),e),a}();var B=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y";switch(x){case"%":v*="x"===B?s.percentToPxWidth:s.percentToPxHeight;break;case"px":break;default:v*=s[x+"ToPx"]}switch(w){case"%":v*=1/("x"===B?s.percentToPxWidth:s.percentToPxHeight);break;case"px":break;default:v*=1/s[w+"ToPx"]}}switch(S){case"+":h=v+h;break;case"-":h=v-h;break;case"*":h*=v;break;case"/":h=v/h}u[i]={rootPropertyValue:d,startValue:v,currentValue:v,endValue:h,unitType:w,easing:g},a&&(u[i].pattern=a),C.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(u[i]),e)};for(var z in y)if(y.hasOwnProperty(z)){var F=T.Names.camelCase(z),O=function(t,r){var o,n,a;return b.isFunction(t)&&(t=t.call(e,i,V)),b.isArray(t)?(o=t[0],!b.isArray(t[1])&&/^[\d-]/.test(t[1])||b.isFunction(t[1])||T.RegEx.isHex.test(t[1])?a=t[1]:b.isString(t[1])&&!T.RegEx.isHex.test(t[1])&&C.Easings[t[1]]||b.isArray(t[1])?(n=r?t[1]:p(t[1],l.duration),a=t[2]):a=t[1]||t[2]):o=t,r||(n=n||l.easing),b.isFunction(o)&&(o=o.call(e,i,V)),b.isFunction(a)&&(a=a.call(e,i,V)),[o||0,n,a]}(y[z]);if(w(T.Lists.colors,F)){var W=O[0],H=O[1],M=O[2];if(T.RegEx.isHex.test(W)){for(var D=["Red","Green","Blue"],q=T.Values.hexToRgb(W),B=M?T.Values.hexToRgb(M):o,X=0;X<D.length;X++){var U=[q[X]];H&&U.push(H),B!==o&&U.push(B[X]),j(F+D[X],U)}continue}}j(F,O)}u.element=e}u.element&&(T.Values.addClass(e,"velocity-animating"),R.push(u),c=a(e),c&&(""===l.queue&&(c.tweensContainer=u,c.opts=l),c.isAnimating=!0),A===V-1?(C.State.calls.push([R,v,l,null,I.resolver,null,0]),!1===C.State.isTicking&&(C.State.isTicking=!0,d())):A++)}var s,l=m.extend({},C.defaults,x),u={};switch(a(e)===o&&C.init(e),parseFloat(l.delay)&&!1!==l.queue&&m.queue(e,l.queue,function(t){C.velocityQueueEntryFlag=!0;var r=C.State.delayedElements.count++;C.State.delayedElements[r]=e;var o=function(e){return function(){C.State.delayedElements[e]=!1,t()}}(r);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(t,parseFloat(l.delay)),next:o}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=S;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}if(!1!==C.mock&&(!0===C.mock?l.duration=l.delay=1:(l.duration*=parseFloat(C.mock)||1,l.delay*=parseFloat(C.mock)||1)),l.easing=p(l.easing,l.duration),l.begin&&!b.isFunction(l.begin)&&(l.begin=null),l.progress&&!b.isFunction(l.progress)&&(l.progress=null),l.complete&&!b.isFunction(l.complete)&&(l.complete=null),l.display!==o&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=C.CSS.Values.getDisplayType(e))),l.visibility!==o&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&C.State.isMobile&&!C.State.isGingerbread,!1===l.queue)if(l.delay){var c=C.State.delayedElements.count++;C.State.delayedElements[c]=e;var f=function(e){return function(){C.State.delayedElements[e]=!1,n()}}(c);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(l.delay),a(e).delayTimer={setTimeout:setTimeout(n,parseFloat(l.delay)),next:f}}else n();else m.queue(e,l.queue,function(e,t){if(!0===t)return I.promise&&I.resolver(v),!0;C.velocityQueueEntryFlag=!0,n(e)});""!==l.queue&&"fx"!==l.queue||"inprogress"===m.queue(e)[0]||m.dequeue(e)}var u,c,h,g,v,y,x,P=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||b.isString(arguments[0].properties));b.isWrapped(this)?(c=!1,g=0,v=this,h=this):(c=!0,g=1,v=P?arguments[0].elements||arguments[0].e:arguments[0]);var I={promise:null,resolver:null,rejecter:null};if(c&&C.Promise&&(I.promise=new C.Promise(function(e,t){I.resolver=e,I.rejecter=t})),P?(y=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(y=arguments[g],x=arguments[g+1]),!(v=n(v)))return void(I.promise&&(y&&x&&!1===x.promiseRejectEmpty?I.resolver():I.rejecter()));var V=v.length,A=0;if(!/^(stop|finish|finishAll|pause|resume)$/i.test(y)&&!m.isPlainObject(x)){var $=g+1;x={};for(var N=$;N<arguments.length;N++)b.isArray(arguments[N])||!/^(fast|normal|slow)$/i.test(arguments[N])&&!/^\d/.test(arguments[N])?b.isString(arguments[N])||b.isArray(arguments[N])?x.easing=arguments[N]:b.isFunction(arguments[N])&&(x.complete=arguments[N]):x.duration=arguments[N]}var E;switch(y){case"scroll":E="scroll";break;case"reverse":E="reverse";break;case"pause":var j=(new Date).getTime();return m.each(v,function(e,t){s(t,j)}),m.each(C.State.calls,function(e,t){var r=!1;t&&m.each(t[1],function(e,i){var n=x===o?"":x;return!0!==n&&t[2].queue!==n&&(x!==o||!1!==t[2].queue)||(m.each(v,function(e,o){if(o===i)return t[5]={resume:!1},r=!0,!1}),!r&&void 0)})}),e();case"resume":return m.each(v,function(e,t){l(t,j)}),m.each(C.State.calls,function(e,t){var r=!1;t&&m.each(t[1],function(e,i){var n=x===o?"":x;return!0!==n&&t[2].queue!==n&&(x!==o||!1!==t[2].queue)||(!t[5]||(m.each(v,function(e,o){if(o===i)return t[5].resume=!0,r=!0,!1}),!r&&void 0))})}),e();case"finish":case"finishAll":case"stop":m.each(v,function(e,t){a(t)&&a(t).delayTimer&&(clearTimeout(a(t).delayTimer.setTimeout),a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer),"finishAll"!==y||!0!==x&&!b.isString(x)||(m.each(m.queue(t,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t()}),m.queue(t,b.isString(x)?x:"",[]))});var z=[];return m.each(C.State.calls,function(e,t){t&&m.each(t[1],function(r,i){var n=x===o?"":x;if(!0!==n&&t[2].queue!==n&&(x!==o||!1!==t[2].queue))return!0;m.each(v,function(r,o){if(o===i)if((!0===x||b.isString(x))&&(m.each(m.queue(o,b.isString(x)?x:""),function(e,t){b.isFunction(t)&&t(null,!0)}),m.queue(o,b.isString(x)?x:"",[])),"stop"===y){var s=a(o);s&&s.tweensContainer&&!1!==n&&m.each(s.tweensContainer,function(e,t){t.endValue=t.currentValue}),z.push(e)}else"finish"!==y&&"finishAll"!==y||(t[2].duration=1)})})}),"stop"===y&&(m.each(z,function(e,t){f(t,!0)}),I.promise&&I.resolver(v)),e();default:if(!m.isPlainObject(y)||b.isEmptyObject(y)){if(b.isString(y)&&C.Redirects[y]){u=m.extend({},x);var F=u.duration,O=u.delay||0;return!0===u.backwards&&(v=m.extend(!0,[],v).reverse()),m.each(v,function(e,t){parseFloat(u.stagger)?u.delay=O+parseFloat(u.stagger)*e:b.isFunction(u.stagger)&&(u.delay=O+u.stagger.call(t,e,V)),u.drag&&(u.duration=parseFloat(F)||(/^(callout|transition)/.test(y)?1e3:S),u.duration=Math.max(u.duration*(u.backwards?1-e/V:(e+1)/V),.75*u.duration,200)),C.Redirects[y].call(t,t,u||{},e,V,v,I.promise?I:o)}),e()}var W="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return I.promise?I.rejecter(new Error(W)):t.console&&console.log(W),e()}E="start"}var L={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];m.each(v,function(e,t){b.isNode(t)&&i(t,e)}),u=m.extend({},C.defaults,x),u.loop=parseInt(u.loop,10);var H=2*u.loop-1;if(u.loop)for(var M=0;M<H;M++){var D={delay:u.delay,progress:u.progress};M===H-1&&(D.display=u.display,D.visibility=u.visibility,D.complete=u.complete),k(v,"reverse",D)}return e()};C=m.extend(k,C),C.animate=k;var V=t.requestAnimationFrame||g;if(!C.State.isMobile&&r.hidden!==o){var A=function(){r.hidden?(V=function(e){return setTimeout(function(){e(!0)},16)},d()):V=t.requestAnimationFrame||g};A(),r.addEventListener("visibilitychange",A)}return e.Velocity=C,e!==t&&(e.fn.velocity=k,e.fn.velocity.defaults=C.defaults),m.each(["Down","Up"],function(e,t){C.Redirects["slide"+t]=function(e,r,i,n,a,s){var l=m.extend({},r),u=l.begin,c=l.complete,p={},d={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};l.display===o&&(l.display="Down"===t?"inline"===C.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){0===i&&u&&u.call(a,a);for(var r in d)if(d.hasOwnProperty(r)){p[r]=e.style[r];var o=T.getPropertyValue(e,r);d[r]="Down"===t?[o,0]:[0,o]}p.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in p)p.hasOwnProperty(t)&&(e.style[t]=p[t]);i===n-1&&(c&&c.call(a,a),s&&s.resolver(a))},C(e,d,l)}}),m.each(["In","Out"],function(e,t){C.Redirects["fade"+t]=function(e,r,i,n,a,s){var l=m.extend({},r),u=l.complete,c={opacity:"In"===t?1:0};0!==i&&(l.begin=null),l.complete=i!==n-1?null:function(){u&&u.call(a,a),s&&s.resolver(a)},l.display===o&&(l.display="In"===t?"auto":"none"),C(this,c,l)}}),C}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)}),function(e){"use strict";e.fn.fitVids=function(t){var r={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("div");i.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',o.appendChild(i.childNodes[1])}return t&&e.extend(r,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];r.customSelector&&t.push(r.customSelector);var o=".fitvidsignore";r.ignore&&(o=o+", "+r.ignore);var i=e(this).find(t.join(","));i=i.not("object object"),i=i.not(o),i.each(function(){var t=e(this);if(!(t.parents(o).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var r="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),i=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),n=r/i;if(!t.attr("name")){var a="fitvid"+e.fn.fitVids._count;t.attr("name",a),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*n+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),/*!

 matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license 

*/
window.matchMedia||(window.matchMedia=function(){"use strict";var e=window.styleMedia||window.media;if(!e){var t=document.createElement("style"),r=document.getElementsByTagName("script")[0],o=null;t.type="text/css",t.id="matchmediajs-test",r.parentNode.insertBefore(t,r),o="getComputedStyle"in window&&window.getComputedStyle(t,null)||t.currentStyle,e={matchMedium:function(e){var r="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=r:t.textContent=r,"1px"===o.width}}}return function(t){return{matches:e.matchMedium(t||"all"),media:t||"all"}}}()),function(e,t,r){function o(e,t){return typeof e===t}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function n(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function a(){var e=t.body;return e||(e=n(S?"svg":"body"),e.fake=!0),e}function s(e,r,o,i){var s,l,u,c,p="modernizr",d=n("div"),f=a();if(parseInt(o,10))for(;o--;)u=n("div"),u.id=i?i[o]:p+(o+1),d.appendChild(u);return s=n("style"),s.type="text/css",s.id="s"+p,(f.fake?f:d).appendChild(s),f.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),d.id=p,f.fake&&(f.style.background="",f.style.overflow="hidden",c=x.style.overflow,x.style.overflow="hidden",x.appendChild(f)),l=r(d,e),f.fake?(f.parentNode.removeChild(f),x.style.overflow=c,x.offsetHeight):d.parentNode.removeChild(d),!!l}function l(e,t){return!!~(""+e).indexOf(t)}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,r){var i;for(var n in e)if(e[n]in t)return!1===r?e[n]:(i=t[e[n]],o(i,"function")?u(i,r||t):i);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,r,o){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,r);var n=e.console;if(null!==i)o&&(i=i.getPropertyValue(o));else if(n){var a=n.error?"error":"log";n[a].call(n,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!r&&t.currentStyle&&t.currentStyle[o];return i}function f(t,o){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(p(t[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var n=[];i--;)n.push("("+p(t[i])+":"+o+")");return n=n.join(" or "),s("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return r}function m(e,t,a,s){function u(){p&&(delete $.style,delete $.modElem)}if(s=!o(s,"undefined")&&s,!o(a,"undefined")){var c=f(e,a);if(!o(c,"undefined"))return c}for(var p,d,m,h,g,v=["modernizr","tspan","samp"];!$.style&&v.length;)p=!0,$.modElem=n(v.shift()),$.style=$.modElem.style;for(m=e.length,d=0;m>d;d++)if(h=e[d],g=$.style[h],l(h,"-")&&(h=i(h)),$.style[h]!==r){if(s||o(a,"undefined"))return u(),"pfx"!=t||h;try{$.style[h]=a}catch(e){}if($.style[h]!=g)return u(),"pfx"!=t||h}return u(),!1}function h(e,t,r,i,n){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return o(t,"string")||o(t,"undefined")?m(s,t,i,n):(s=(e+" "+V.join(a+" ")+a).split(" "),c(s,t,r))}function g(e,t,o){return h(e,r,r,t,o)}var v=[],y=[],w={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){y.push({name:e,fn:t,options:r})},addAsyncTest:function(e){y.push({name:null,fn:e})}},b=function(){};b.prototype=w,b=new b,b.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var x=t.documentElement,S="svg"===x.nodeName.toLowerCase(),P=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];w._prefixes=P;var C=w.testStyles=s;b.addTest("touchevents",function(){var r;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)r=!0;else{var o=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");C(o,function(e){r=9===e.offsetTop})}return r});var I="Moz O ms Webkit",T=w._config.usePrefixes?I.split(" "):[];w._cssomPrefixes=T;var k=function(t){var o,i=P.length,n=e.CSSRule;if(void 0===n)return r;if(!t)return!1;if(t=t.replace(/^@/,""),(o=t.replace(/-/g,"_").toUpperCase()+"_RULE")in n)return"@"+t;for(var a=0;i>a;a++){var s=P[a];if(s.toUpperCase()+"_"+o in n)return"@-"+s.toLowerCase()+"-"+t}return!1};w.atRule=k;var V=w._config.usePrefixes?I.toLowerCase().split(" "):[];w._domPrefixes=V;var A={elem:n("modernizr")};b._q.push(function(){delete A.elem});var $={style:A.elem.style};b._q.unshift(function(){delete $.style}),w.testAllProps=h,w.testAllProps=g,b.addTest("cssgridlegacy",g("grid-columns","10px",!0)),b.addTest("cssgrid",g("grid-template-rows","none",!0));var N=w.prefixed=function(e,t,r){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=i(e)),t?h(e,t,r):h(e,"pfx"))};b.addTest("objectfit",!!N("objectFit"),{aliases:["object-fit"]}),function(){var e,t,r,i,n,a,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(i=o(t.fn,"function")?t.fn():t.fn,n=0;n<e.length;n++)a=e[n],s=a.split("."),1===s.length?b[s[0]]=i:(!b[s[0]]||b[s[0]]instanceof Boolean||(b[s[0]]=new Boolean(b[s[0]])),b[s[0]][s[1]]=i),v.push((i?"":"no-")+s.join("-"))}}(),function(e){var t=x.className,r=b._config.classPrefix||"";if(S&&(t=t.baseVal),b._config.enableJSClass){var o=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(o,"$1"+r+"js$2")}b._config.enableClasses&&(t+=" "+r+e.join(" "+r),S?x.className.baseVal=t:x.className=t)}(v),delete w.addTest,delete w.addAsyncTest;for(var E=0;E<b._q.length;E++)b._q[E]();e.Modernizr=b}(window,document),/*!
 *	jQuery OwlCarousel v1.31
 *
 *	Copyright (c) 2013 Bartosz Wojciechowski
 *	http://www.owlgraphic.com/owlcarousel/
 *
 *	Licensed under MIT
 *
 */
"function"!==typeof Object.create&&(Object.create=function(f){function g(){}g.prototype=f;return new g});
(function(f,g,k){var l={init:function(a,b){this.$elem=f(b);this.options=f.extend({},f.fn.owlCarousel.options,this.$elem.data(),a);this.userOptions=a;this.loadContent()},loadContent:function(){function a(a){var d,e="";if("function"===typeof b.options.jsonSuccess)b.options.jsonSuccess.apply(this,[a]);else{for(d in a.owl)a.owl.hasOwnProperty(d)&&(e+=a.owl[d].item);b.$elem.html(e)}b.logIn()}var b=this,e;"function"===typeof b.options.beforeInit&&b.options.beforeInit.apply(this,[b.$elem]);"string"===typeof b.options.jsonPath?
(e=b.options.jsonPath,f.getJSON(e,a)):b.logIn()},logIn:function(){this.$elem.data("owl-originalStyles",this.$elem.attr("style"));this.$elem.data("owl-originalClasses",this.$elem.attr("class"));this.$elem.css({opacity:0});this.orignalItems=this.options.items;this.checkBrowser();this.wrapperWidth=0;this.checkVisible=null;this.setVars()},setVars:function(){if(0===this.$elem.children().length)return!1;this.baseClass();this.eventTypes();this.$userItems=this.$elem.children();this.itemsAmount=this.$userItems.length;
this.wrapItems();this.$owlItems=this.$elem.find(".owl-item");this.$owlWrapper=this.$elem.find(".owl-wrapper");this.playDirection="next";this.prevItem=0;this.prevArr=[0];this.currentItem=0;this.customEvents();this.onStartup()},onStartup:function(){this.updateItems();this.calculateAll();this.buildControls();this.updateControls();this.response();this.moveEvents();this.stopOnHover();this.owlStatus();!1!==this.options.transitionStyle&&this.transitionTypes(this.options.transitionStyle);!0===this.options.autoPlay&&
(this.options.autoPlay=5E3);this.play();this.$elem.find(".owl-wrapper").css("display","block");this.$elem.is(":visible")?this.$elem.css("opacity",1):this.watchVisibility();this.onstartup=!1;this.eachMoveUpdate();"function"===typeof this.options.afterInit&&this.options.afterInit.apply(this,[this.$elem])},eachMoveUpdate:function(){!0===this.options.lazyLoad&&this.lazyLoad();!0===this.options.autoHeight&&this.autoHeight();this.onVisibleItems();"function"===typeof this.options.afterAction&&this.options.afterAction.apply(this,
[this.$elem])},updateVars:function(){"function"===typeof this.options.beforeUpdate&&this.options.beforeUpdate.apply(this,[this.$elem]);this.watchVisibility();this.updateItems();this.calculateAll();this.updatePosition();this.updateControls();this.eachMoveUpdate();"function"===typeof this.options.afterUpdate&&this.options.afterUpdate.apply(this,[this.$elem])},reload:function(){var a=this;g.setTimeout(function(){a.updateVars()},0)},watchVisibility:function(){var a=this;if(!1===a.$elem.is(":visible"))a.$elem.css({opacity:0}),
g.clearInterval(a.autoPlayInterval),g.clearInterval(a.checkVisible);else return!1;a.checkVisible=g.setInterval(function(){a.$elem.is(":visible")&&(a.reload(),a.$elem.animate({opacity:1},200),g.clearInterval(a.checkVisible))},500)},wrapItems:function(){this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');this.wrapperOuter=this.$elem.find(".owl-wrapper-outer");this.$elem.css("display","block")},
baseClass:function(){var a=this.$elem.hasClass(this.options.baseClass),b=this.$elem.hasClass(this.options.theme);a||this.$elem.addClass(this.options.baseClass);b||this.$elem.addClass(this.options.theme)},updateItems:function(){var a,b;if(!1===this.options.responsive)return!1;if(!0===this.options.singleItem)return this.options.items=this.orignalItems=1,this.options.itemsCustom=!1,this.options.itemsDesktop=!1,this.options.itemsDesktopSmall=!1,this.options.itemsTablet=!1,this.options.itemsTabletSmall=
!1,this.options.itemsMobile=!1;a=f(this.options.responsiveBaseWidth).width();a>(this.options.itemsDesktop[0]||this.orignalItems)&&(this.options.items=this.orignalItems);if(!1!==this.options.itemsCustom)for(this.options.itemsCustom.sort(function(a,b){return a[0]-b[0]}),b=0;b<this.options.itemsCustom.length;b+=1)this.options.itemsCustom[b][0]<=a&&(this.options.items=this.options.itemsCustom[b][1]);else a<=this.options.itemsDesktop[0]&&!1!==this.options.itemsDesktop&&(this.options.items=this.options.itemsDesktop[1]),
a<=this.options.itemsDesktopSmall[0]&&!1!==this.options.itemsDesktopSmall&&(this.options.items=this.options.itemsDesktopSmall[1]),a<=this.options.itemsTablet[0]&&!1!==this.options.itemsTablet&&(this.options.items=this.options.itemsTablet[1]),a<=this.options.itemsTabletSmall[0]&&!1!==this.options.itemsTabletSmall&&(this.options.items=this.options.itemsTabletSmall[1]),a<=this.options.itemsMobile[0]&&!1!==this.options.itemsMobile&&(this.options.items=this.options.itemsMobile[1]);this.options.items>this.itemsAmount&&
!0===this.options.itemsScaleUp&&(this.options.items=this.itemsAmount)},response:function(){var a=this,b,e;if(!0!==a.options.responsive)return!1;e=f(g).width();a.resizer=function(){f(g).width()!==e&&(!1!==a.options.autoPlay&&g.clearInterval(a.autoPlayInterval),g.clearTimeout(b),b=g.setTimeout(function(){e=f(g).width();a.updateVars()},a.options.responsiveRefreshRate))};f(g).resize(a.resizer)},updatePosition:function(){this.jumpTo(this.currentItem);!1!==this.options.autoPlay&&this.checkAp()},appendItemsSizes:function(){var a=
this,b=0,e=a.itemsAmount-a.options.items;a.$owlItems.each(function(c){var d=f(this);d.css({width:a.itemWidth}).data("owl-item",Number(c));if(0===c%a.options.items||c===e)c>e||(b+=1);d.data("owl-roundPages",b)})},appendWrapperSizes:function(){this.$owlWrapper.css({width:this.$owlItems.length*this.itemWidth*2,left:0});this.appendItemsSizes()},calculateAll:function(){this.calculateWidth();this.appendWrapperSizes();this.loops();this.max()},calculateWidth:function(){this.itemWidth=Math.round(this.$elem.width()/
this.options.items)},max:function(){var a=-1*(this.itemsAmount*this.itemWidth-this.options.items*this.itemWidth);this.options.items>this.itemsAmount?this.maximumPixels=a=this.maximumItem=0:(this.maximumItem=this.itemsAmount-this.options.items,this.maximumPixels=a);return a},min:function(){return 0},loops:function(){var a=0,b=0,e,c;this.positionsInArray=[0];this.pagesInArray=[];for(e=0;e<this.itemsAmount;e+=1)b+=this.itemWidth,this.positionsInArray.push(-b),!0===this.options.scrollPerPage&&(c=f(this.$owlItems[e]),
c=c.data("owl-roundPages"),c!==a&&(this.pagesInArray[a]=this.positionsInArray[e],a=c))},buildControls:function(){if(!0===this.options.navigation||!0===this.options.pagination)this.owlControls=f('<div class="owl-controls"/>').toggleClass("clickable",!this.browser.isTouch).appendTo(this.$elem);!0===this.options.pagination&&this.buildPagination();!0===this.options.navigation&&this.buildButtons()},buildButtons:function(){var a=this,b=f('<div class="owl-buttons"/>');a.owlControls.append(b);a.buttonPrev=
f("<div/>",{"class":"owl-prev",html:a.options.navigationText[0]||""});a.buttonNext=f("<div/>",{"class":"owl-next",html:a.options.navigationText[1]||""});b.append(a.buttonPrev).append(a.buttonNext);b.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(a){a.preventDefault()});b.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(b){b.preventDefault();f(this).hasClass("owl-next")?a.next():a.prev()})},buildPagination:function(){var a=this;a.paginationWrapper=
f('<div class="owl-pagination"/>');a.owlControls.append(a.paginationWrapper);a.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(b){b.preventDefault();Number(f(this).data("owl-page"))!==a.currentItem&&a.goTo(Number(f(this).data("owl-page")),!0)})},updatePagination:function(){var a,b,e,c,d,g;if(!1===this.options.pagination)return!1;this.paginationWrapper.html("");a=0;b=this.itemsAmount-this.itemsAmount%this.options.items;for(c=0;c<this.itemsAmount;c+=1)0===c%this.options.items&&
(a+=1,b===c&&(e=this.itemsAmount-this.options.items),d=f("<div/>",{"class":"owl-page"}),g=f("<span></span>",{text:!0===this.options.paginationNumbers?a:"","class":!0===this.options.paginationNumbers?"owl-numbers":""}),d.append(g),d.data("owl-page",b===c?e:c),d.data("owl-roundPages",a),this.paginationWrapper.append(d));this.checkPagination()},checkPagination:function(){var a=this;if(!1===a.options.pagination)return!1;a.paginationWrapper.find(".owl-page").each(function(){f(this).data("owl-roundPages")===
f(a.$owlItems[a.currentItem]).data("owl-roundPages")&&(a.paginationWrapper.find(".owl-page").removeClass("active"),f(this).addClass("active"))})},checkNavigation:function(){if(!1===this.options.navigation)return!1;!1===this.options.rewindNav&&(0===this.currentItem&&0===this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.addClass("disabled")):0===this.currentItem&&0!==this.maximumItem?(this.buttonPrev.addClass("disabled"),this.buttonNext.removeClass("disabled")):this.currentItem===
this.maximumItem?(this.buttonPrev.removeClass("disabled"),this.buttonNext.addClass("disabled")):0!==this.currentItem&&this.currentItem!==this.maximumItem&&(this.buttonPrev.removeClass("disabled"),this.buttonNext.removeClass("disabled")))},updateControls:function(){this.updatePagination();this.checkNavigation();this.owlControls&&(this.options.items>=this.itemsAmount?this.owlControls.hide():this.owlControls.show())},destroyControls:function(){this.owlControls&&this.owlControls.remove()},next:function(a){if(this.isTransition)return!1;
this.currentItem+=!0===this.options.scrollPerPage?this.options.items:1;if(this.currentItem>this.maximumItem+(!0===this.options.scrollPerPage?this.options.items-1:0))if(!0===this.options.rewindNav)this.currentItem=0,a="rewind";else return this.currentItem=this.maximumItem,!1;this.goTo(this.currentItem,a)},prev:function(a){if(this.isTransition)return!1;this.currentItem=!0===this.options.scrollPerPage&&0<this.currentItem&&this.currentItem<this.options.items?0:this.currentItem-(!0===this.options.scrollPerPage?
this.options.items:1);if(0>this.currentItem)if(!0===this.options.rewindNav)this.currentItem=this.maximumItem,a="rewind";else return this.currentItem=0,!1;this.goTo(this.currentItem,a)},goTo:function(a,b,e){var c=this;if(c.isTransition)return!1;"function"===typeof c.options.beforeMove&&c.options.beforeMove.apply(this,[c.$elem]);a>=c.maximumItem?a=c.maximumItem:0>=a&&(a=0);c.currentItem=c.owl.currentItem=a;if(!1!==c.options.transitionStyle&&"drag"!==e&&1===c.options.items&&!0===c.browser.support3d)return c.swapSpeed(0),
!0===c.browser.support3d?c.transition3d(c.positionsInArray[a]):c.css2slide(c.positionsInArray[a],1),c.afterGo(),c.singleItemTransition(),!1;a=c.positionsInArray[a];!0===c.browser.support3d?(c.isCss3Finish=!1,!0===b?(c.swapSpeed("paginationSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},c.options.paginationSpeed)):"rewind"===b?(c.swapSpeed(c.options.rewindSpeed),g.setTimeout(function(){c.isCss3Finish=!0},c.options.rewindSpeed)):(c.swapSpeed("slideSpeed"),g.setTimeout(function(){c.isCss3Finish=!0},
c.options.slideSpeed)),c.transition3d(a)):!0===b?c.css2slide(a,c.options.paginationSpeed):"rewind"===b?c.css2slide(a,c.options.rewindSpeed):c.css2slide(a,c.options.slideSpeed);c.afterGo()},jumpTo:function(a){"function"===typeof this.options.beforeMove&&this.options.beforeMove.apply(this,[this.$elem]);a>=this.maximumItem||-1===a?a=this.maximumItem:0>=a&&(a=0);this.swapSpeed(0);!0===this.browser.support3d?this.transition3d(this.positionsInArray[a]):this.css2slide(this.positionsInArray[a],1);this.currentItem=
this.owl.currentItem=a;this.afterGo()},afterGo:function(){this.prevArr.push(this.currentItem);this.prevItem=this.owl.prevItem=this.prevArr[this.prevArr.length-2];this.prevArr.shift(0);this.prevItem!==this.currentItem&&(this.checkPagination(),this.checkNavigation(),this.eachMoveUpdate(),!1!==this.options.autoPlay&&this.checkAp());"function"===typeof this.options.afterMove&&this.prevItem!==this.currentItem&&this.options.afterMove.apply(this,[this.$elem])},stop:function(){this.apStatus="stop";g.clearInterval(this.autoPlayInterval)},
checkAp:function(){"stop"!==this.apStatus&&this.play()},play:function(){var a=this;a.apStatus="play";if(!1===a.options.autoPlay)return!1;g.clearInterval(a.autoPlayInterval);a.autoPlayInterval=g.setInterval(function(){a.next(!0)},a.options.autoPlay)},swapSpeed:function(a){"slideSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)):"paginationSpeed"===a?this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)):"string"!==typeof a&&this.$owlWrapper.css(this.addCssSpeed(a))},
addCssSpeed:function(a){return{"-webkit-transition":"all "+a+"ms ease","-moz-transition":"all "+a+"ms ease","-o-transition":"all "+a+"ms ease",transition:"all "+a+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(a){return{"-webkit-transform":"translate3d("+a+"px, 0px, 0px)","-moz-transform":"translate3d("+a+"px, 0px, 0px)","-o-transform":"translate3d("+a+"px, 0px, 0px)","-ms-transform":"translate3d("+
a+"px, 0px, 0px)",transform:"translate3d("+a+"px, 0px,0px)"}},transition3d:function(a){this.$owlWrapper.css(this.doTranslate(a))},css2move:function(a){this.$owlWrapper.css({left:a})},css2slide:function(a,b){var e=this;e.isCssFinish=!1;e.$owlWrapper.stop(!0,!0).animate({left:a},{duration:b||e.options.slideSpeed,complete:function(){e.isCssFinish=!0}})},checkBrowser:function(){var a=k.createElement("div");a.style.cssText="  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
a=a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);this.browser={support3d:null!==a&&1===a.length,isTouch:"ontouchstart"in g||g.navigator.msMaxTouchPoints}},moveEvents:function(){if(!1!==this.options.mouseDrag||!1!==this.options.touchDrag)this.gestures(),this.disabledEvents()},eventTypes:function(){var a=["s","e","x"];this.ev_types={};!0===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:
!1===this.options.mouseDrag&&!0===this.options.touchDrag?a=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===this.options.mouseDrag&&!1===this.options.touchDrag&&(a=["mousedown.owl","mousemove.owl","mouseup.owl"]);this.ev_types.start=a[0];this.ev_types.move=a[1];this.ev_types.end=a[2]},disabledEvents:function(){this.$elem.on("dragstart.owl",function(a){a.preventDefault()});this.$elem.on("mousedown.disableTextSelect",function(a){return f(a.target).is("input, textarea, select, option")})},
gestures:function(){function a(a){if(void 0!==a.touches)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(void 0===a.touches){if(void 0!==a.pageX)return{x:a.pageX,y:a.pageY};if(void 0===a.pageX)return{x:a.clientX,y:a.clientY}}}function b(a){"on"===a?(f(k).on(d.ev_types.move,e),f(k).on(d.ev_types.end,c)):"off"===a&&(f(k).off(d.ev_types.move),f(k).off(d.ev_types.end))}function e(b){b=b.originalEvent||b||g.event;d.newPosX=a(b).x-h.offsetX;d.newPosY=a(b).y-h.offsetY;d.newRelativeX=d.newPosX-h.relativePos;
"function"===typeof d.options.startDragging&&!0!==h.dragging&&0!==d.newRelativeX&&(h.dragging=!0,d.options.startDragging.apply(d,[d.$elem]));(8<d.newRelativeX||-8>d.newRelativeX)&&!0===d.browser.isTouch&&(void 0!==b.preventDefault?b.preventDefault():b.returnValue=!1,h.sliding=!0);(10<d.newPosY||-10>d.newPosY)&&!1===h.sliding&&f(k).off("touchmove.owl");d.newPosX=Math.max(Math.min(d.newPosX,d.newRelativeX/5),d.maximumPixels+d.newRelativeX/5);!0===d.browser.support3d?d.transition3d(d.newPosX):d.css2move(d.newPosX)}
function c(a){a=a.originalEvent||a||g.event;var c;a.target=a.target||a.srcElement;h.dragging=!1;!0!==d.browser.isTouch&&d.$owlWrapper.removeClass("grabbing");d.dragDirection=0>d.newRelativeX?d.owl.dragDirection="left":d.owl.dragDirection="right";0!==d.newRelativeX&&(c=d.getNewPosition(),d.goTo(c,!1,"drag"),h.targetElement===a.target&&!0!==d.browser.isTouch&&(f(a.target).on("click.disable",function(a){a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();f(a.target).off("click.disable")}),
a=f._data(a.target,"events").click,c=a.pop(),a.splice(0,0,c)));b("off")}var d=this,h={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};d.isCssFinish=!0;d.$elem.on(d.ev_types.start,".owl-wrapper",function(c){c=c.originalEvent||c||g.event;var e;if(3===c.which)return!1;if(!(d.itemsAmount<=d.options.items)){if(!1===d.isCssFinish&&!d.options.dragBeforeAnimFinish||!1===d.isCss3Finish&&!d.options.dragBeforeAnimFinish)return!1;
!1!==d.options.autoPlay&&g.clearInterval(d.autoPlayInterval);!0===d.browser.isTouch||d.$owlWrapper.hasClass("grabbing")||d.$owlWrapper.addClass("grabbing");d.newPosX=0;d.newRelativeX=0;f(this).css(d.removeTransition());e=f(this).position();h.relativePos=e.left;h.offsetX=a(c).x-e.left;h.offsetY=a(c).y-e.top;b("on");h.sliding=!1;h.targetElement=c.target||c.srcElement}})},getNewPosition:function(){var a=this.closestItem();a>this.maximumItem?a=this.currentItem=this.maximumItem:0<=this.newPosX&&(this.currentItem=
a=0);return a},closestItem:function(){var a=this,b=!0===a.options.scrollPerPage?a.pagesInArray:a.positionsInArray,e=a.newPosX,c=null;f.each(b,function(d,g){e-a.itemWidth/20>b[d+1]&&e-a.itemWidth/20<g&&"left"===a.moveDirection()?(c=g,a.currentItem=!0===a.options.scrollPerPage?f.inArray(c,a.positionsInArray):d):e+a.itemWidth/20<g&&e+a.itemWidth/20>(b[d+1]||b[d]-a.itemWidth)&&"right"===a.moveDirection()&&(!0===a.options.scrollPerPage?(c=b[d+1]||b[b.length-1],a.currentItem=f.inArray(c,a.positionsInArray)):
(c=b[d+1],a.currentItem=d+1))});return a.currentItem},moveDirection:function(){var a;0>this.newRelativeX?(a="right",this.playDirection="next"):(a="left",this.playDirection="prev");return a},customEvents:function(){var a=this;a.$elem.on("owl.next",function(){a.next()});a.$elem.on("owl.prev",function(){a.prev()});a.$elem.on("owl.play",function(b,e){a.options.autoPlay=e;a.play();a.hoverStatus="play"});a.$elem.on("owl.stop",function(){a.stop();a.hoverStatus="stop"});a.$elem.on("owl.goTo",function(b,e){a.goTo(e)});
a.$elem.on("owl.jumpTo",function(b,e){a.jumpTo(e)})},stopOnHover:function(){var a=this;!0===a.options.stopOnHover&&!0!==a.browser.isTouch&&!1!==a.options.autoPlay&&(a.$elem.on("mouseover",function(){a.stop()}),a.$elem.on("mouseout",function(){"stop"!==a.hoverStatus&&a.play()}))},lazyLoad:function(){var a,b,e,c,d;if(!1===this.options.lazyLoad)return!1;for(a=0;a<this.itemsAmount;a+=1)b=f(this.$owlItems[a]),"loaded"!==b.data("owl-loaded")&&(e=b.data("owl-item"),c=b.find(".lazyOwl"),"string"!==typeof c.data("src")?
b.data("owl-loaded","loaded"):(void 0===b.data("owl-loaded")&&(c.hide(),b.addClass("loading").data("owl-loaded","checked")),(d=!0===this.options.lazyFollow?e>=this.currentItem:!0)&&e<this.currentItem+this.options.items&&c.length&&this.lazyPreload(b,c)))},lazyPreload:function(a,b){function e(){a.data("owl-loaded","loaded").removeClass("loading");b.removeAttr("data-src");"fade"===d.options.lazyEffect?b.fadeIn(400):b.show();"function"===typeof d.options.afterLazyLoad&&d.options.afterLazyLoad.apply(this,
[d.$elem])}function c(){f+=1;d.completeImg(b.get(0))||!0===k?e():100>=f?g.setTimeout(c,100):e()}var d=this,f=0,k;"DIV"===b.prop("tagName")?(b.css("background-image","url("+b.data("src")+")"),k=!0):b[0].src=b.data("src");c()},autoHeight:function(){function a(){var a=f(e.$owlItems[e.currentItem]).height();e.wrapperOuter.css("height",a+"px");e.wrapperOuter.hasClass("autoHeight")||g.setTimeout(function(){e.wrapperOuter.addClass("autoHeight")},0)}function b(){d+=1;e.completeImg(c.get(0))?a():100>=d?g.setTimeout(b,
100):e.wrapperOuter.css("height","")}var e=this,c=f(e.$owlItems[e.currentItem]).find("img"),d;void 0!==c.get(0)?(d=0,b()):a()},completeImg:function(a){return!a.complete||"undefined"!==typeof a.naturalWidth&&0===a.naturalWidth?!1:!0},onVisibleItems:function(){var a;!0===this.options.addClassActive&&this.$owlItems.removeClass("active");this.visibleItems=[];for(a=this.currentItem;a<this.currentItem+this.options.items;a+=1)this.visibleItems.push(a),!0===this.options.addClassActive&&f(this.$owlItems[a]).addClass("active");
this.owl.visibleItems=this.visibleItems},transitionTypes:function(a){this.outClass="owl-"+a+"-out";this.inClass="owl-"+a+"-in"},singleItemTransition:function(){var a=this,b=a.outClass,e=a.inClass,c=a.$owlItems.eq(a.currentItem),d=a.$owlItems.eq(a.prevItem),f=Math.abs(a.positionsInArray[a.currentItem])+a.positionsInArray[a.prevItem],g=Math.abs(a.positionsInArray[a.currentItem])+a.itemWidth/2;a.isTransition=!0;a.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":g+"px","-moz-perspective-origin":g+
"px","perspective-origin":g+"px"});d.css({position:"relative",left:f+"px"}).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endPrev=!0;d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(d,b)});c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend",function(){a.endCurrent=!0;c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");a.clearTransStyle(c,e)})},clearTransStyle:function(a,
b){a.css({position:"",left:""}).removeClass(b);this.endPrev&&this.endCurrent&&(this.$owlWrapper.removeClass("owl-origin"),this.isTransition=this.endCurrent=this.endPrev=!1)},owlStatus:function(){this.owl={userOptions:this.userOptions,baseElement:this.$elem,userItems:this.$userItems,owlItems:this.$owlItems,currentItem:this.currentItem,prevItem:this.prevItem,visibleItems:this.visibleItems,isTouch:this.browser.isTouch,browser:this.browser,dragDirection:this.dragDirection}},clearEvents:function(){this.$elem.off(".owl owl mousedown.disableTextSelect");
f(k).off(".owl owl");f(g).off("resize",this.resizer)},unWrap:function(){0!==this.$elem.children().length&&(this.$owlWrapper.unwrap(),this.$userItems.unwrap().unwrap(),this.owlControls&&this.owlControls.remove());this.clearEvents();this.$elem.attr("style",this.$elem.data("owl-originalStyles")||"").attr("class",this.$elem.data("owl-originalClasses"))},destroy:function(){this.stop();g.clearInterval(this.checkVisible);this.unWrap();this.$elem.removeData()},reinit:function(a){a=f.extend({},this.userOptions,
a);this.unWrap();this.init(a,this.$elem)},addItem:function(a,b){var e;if(!a)return!1;if(0===this.$elem.children().length)return this.$elem.append(a),this.setVars(),!1;this.unWrap();e=void 0===b||-1===b?-1:b;e>=this.$userItems.length||-1===e?this.$userItems.eq(-1).after(a):this.$userItems.eq(e).before(a);this.setVars()},removeItem:function(a){if(0===this.$elem.children().length)return!1;a=void 0===a||-1===a?-1:a;this.unWrap();this.$userItems.eq(a).remove();this.setVars()}};f.fn.owlCarousel=function(a){return this.each(function(){if(!0===
f(this).data("owl-init"))return!1;f(this).data("owl-init",!0);var b=Object.create(l);b.init(a,this);f.data(this,"owlCarousel",b)})};f.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1E3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,
responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:g,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}})(jQuery,window,document); 
// * /
//  * Spin.js
//  * Copyright (c) 2011-2013 Felix Gnass
//  * Licensed under the MIT license
//  */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var r,o=document.createElement(e||"div");for(r in t)o[r]=t[r];return o}function t(e){for(var t=1,r=arguments.length;t<r;t++)e.appendChild(arguments[t]);return e}function r(e,t,r,o){var i=["opacity",t,~~(100*e),r,o].join("-"),n=.01+r/o*100,a=Math.max(1-(1-e)/t*(100-n),e),s=u.substring(0,u.indexOf("Animation")).toLowerCase(),l=s&&"-"+s+"-"||"";return p[i]||(d.insertRule("@"+l+"keyframes "+i+"{0%{opacity:"+a+"}"+n+"%{opacity:"+e+"}"+(n+.01)+"%{opacity:1}"+(n+t)%100+"%{opacity:"+e+"}100%{opacity:"+a+"}}",d.cssRules.length),p[i]=1),i}function o(e,t){var r,o,i=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),o=0;o<c.length;o++)if(r=c[o]+t,void 0!==i[r])return r;if(void 0!==i[t])return t}function i(e,t){for(var r in t)e.style[o(e,r)||r]=t[r];return e}function n(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e}function a(e){for(var t={x:e.offsetLeft,y:e.offsetTop};e=e.offsetParent;)t.x+=e.offsetLeft,t.y+=e.offsetTop;return t}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function l(e){if(void 0===this)return new l(e);this.opts=n(e||{},l.defaults,f)}var u,c=["webkit","Moz","ms","O"],p={},d=function(){var r=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],r),r.sheet||r.styleSheet}(),f={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"auto",left:"auto",position:"relative"};l.defaults={},n(l.prototype,{spin:function(t){this.stop();var r,o,n=this,s=n.opts,l=n.el=i(e(0,{className:s.className}),{position:s.position,width:0,zIndex:s.zIndex}),c=s.radius+s.length+s.width;if(t&&(t.insertBefore(l,t.firstChild||null),o=a(t),r=a(l),i(l,{left:("auto"==s.left?o.x-r.x+(t.offsetWidth>>1):parseInt(s.left,10)+c)+"px",top:("auto"==s.top?o.y-r.y+(t.offsetHeight>>1):parseInt(s.top,10)+c)+"px"})),l.setAttribute("role","progressbar"),n.lines(l,n.opts),!u){var p,d=0,f=(s.lines-1)*(1-s.direction)/2,m=s.fps,h=m/s.speed,g=(1-s.opacity)/(h*s.trail/100),v=h/s.lines;!function e(){d++;for(var t=0;t<s.lines;t++)p=Math.max(1-(d+(s.lines-t)*v)%h*g,s.opacity),n.opacity(l,t*s.direction+f,p,s);n.timeout=n.el&&setTimeout(e,~~(1e3/m))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(o,n){function a(t,r){return i(e(),{position:"absolute",width:n.length+n.width+"px",height:n.width+"px",background:t,boxShadow:r,transformOrigin:"left",transform:"rotate("+~~(360/n.lines*c+n.rotate)+"deg) translate("+n.radius+"px,0)",borderRadius:(n.corners*n.width>>1)+"px"})}for(var l,c=0,p=(n.lines-1)*(1-n.direction)/2;c<n.lines;c++)l=i(e(),{position:"absolute",top:1+~(n.width/2)+"px",transform:n.hwaccel?"translate3d(0,0,0)":"",opacity:n.opacity,animation:u&&r(n.opacity,n.trail,p+c*n.direction,n.lines)+" "+1/n.speed+"s linear infinite"}),n.shadow&&t(l,i(a("#000","0 0 4px #000"),{top:"2px"})),t(o,t(l,a(s(n.color,c),"0 0 1px rgba(0,0,0,.1)")));return o},opacity:function(e,t,r){t<e.childNodes.length&&(e.childNodes[t].style.opacity=r)}});var m=i(e("group"),{behavior:"url(#default#VML)"});return!o(m,"transform")&&m.adj?function(){function r(t,r){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',r)}d.addRule(".spin-vml","behavior:url(#default#VML)"),l.prototype.lines=function(e,o){function n(){return i(r("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function a(e,a,l){t(d,t(i(n(),{rotation:360/o.lines*e+"deg",left:~~a}),t(i(r("roundrect",{arcsize:o.corners}),{width:u,height:o.width,left:o.radius,top:-o.width>>1,filter:l}),r("fill",{color:s(o.color,e),opacity:o.opacity}),r("stroke",{opacity:0}))))}var l,u=o.length+o.width,c=2*u,p=2*-(o.width+o.length)+"px",d=i(n(),{position:"absolute",top:p,left:p});if(o.shadow)for(l=1;l<=o.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=o.lines;l++)a(l);return t(e,d)},l.prototype.opacity=function(e,t,r,o){var i=e.firstChild;o=o.shadow&&o.lines||0,i&&t+o<i.childNodes.length&&(i=i.childNodes[t+o],i=i&&i.firstChild,(i=i&&i.firstChild)&&(i.opacity=r))}}():u=o(m,"animation"),l}),function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(r,o){return this.each(function(){var i=e(this),n=i.data();n.spinner&&(n.spinner.stop(),delete n.spinner),!1!==r&&(r=e.extend({color:o||i.css("color")},e.fn.spin.presets[r]||r),n.spinner=new t(r).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}});
(function() {
  var Accordion, Cart, Collection, DOC, Footer, FrameworkAlign, FullscreenSlider, HEADER, HorizontalTabs, MediaQueries, PAGE, Password, Popup, ProductSlider, PromoBar, VerticalTabs, VideoModal, WINDOW, current_window, log, mq_large, mq_medium, mq_small, touchevents_exist,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.fillYSpace = bind(this.fillYSpace, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.fillYSpace();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
      if (this.type === 'center-y') {
        return this.element.css({
          'margin-top': -(this.element.outerHeight() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.fillYSpace = function() {
      var _this, container_height, text_panel_height;
      _this = this;
      if (_this.type === 'fill-y--dynamic') {
        container_height = _this.parent.outerHeight();
        text_panel_height = _this.parent.find('.fw--align--fill-y--fixed').outerHeight();
        return _this.element.outerHeight(container_height - text_panel_height);
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        _this.checkOverlap();
        return _this.fillYSpace();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.convertCurrency = bind(this.convertCurrency, this);
      this.openModalListener = bind(this.openModalListener, this);
      this.openOffCanvasListener = bind(this.openOffCanvasListener, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeItemListeners = bind(this.removeItemListeners, this);
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.plusQuantity = bind(this.plusQuantity, this);
      this.minusQuantity = bind(this.minusQuantity, this);
      this.updateQuantityListeners = bind(this.updateQuantityListeners, this);
      this.addItem = bind(this.addItem, this);
      this.renderOther = bind(this.renderOther, this);
      this.renderListener = bind(this.renderListener, this);
      this.renderCart = bind(this.renderCart, this);
      _this = this;
      _this.adjusting_qty_timer = null;
      _this.table_content = _this.root.find('form > .content');
      _this.render_trigger = $('.fw--cart-modal--trigger-render');
      _this.totals = {};
      _this.add_locked = false;
      _this.render_locked = false;
      if (_this.root.hasClass('off-canvas')) {
        _this.view = 'off canvas';
      }
      if (_this.root.hasClass('modal--content')) {
        _this.view = 'modal';
      }
      _this.temp_quantity = 0;
      _this.renderCart();
      if (_this.view === 'off canvas') {
        _this.openOffCanvasListener();
      }
      _this.openModalListener();
      _this.renderListener();
    }

    FrameworkCart.prototype.renderCart = function(callback) {
      var _this;
      _this = this;
      if (!_this.render_locked) {
        _this.render_locked = true;
        _this.table_content.empty();
        return $.ajax({
          type: "POST",
          url: "/cart.js",
          dataType: "json"
        }).done(function(data, textStatus, jqXHR) {
          var cart, index, item, j, len, ref, row;
          if (textStatus === 'success') {
            cart = data;
            if (cart.items.length) {
              _this.root.removeClass('no-items');
            } else {
              _this.root.addClass('no-items');
            }
            ref = cart.items;
            for (index = j = 0, len = ref.length; j < len; index = ++j) {
              item = ref[index];
              item.image_url = Shopify.resizeImage(item.image, "400x");
              item.price = Currency.formatMoney(item.price, theme.money_format);
              if ((index + 1) === cart.items.length) {
                row = '<div class="variant-id last-variant width--12" data-variant-id=' + item.variant_id + '>';
              } else {
                row = '<div class="variant-id width--12" data-variant-id=' + item.variant_id + '>';
              }
              row += '<div class="width--12 width--medium-4 width--large-6 block">';
              if (item.image_url === null) {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"></span>';
              } else {
                row += '<span class="image block width--4 width--medium-12 width--large-4 spacing--3"><a href="' + item.url + '"><img src="' + item.image_url + '" alt="' + item.title + '"></a></span>';
              }
              row += '<span class="title show--small show--large block width--8 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '</div>';
              row += '<div class="right-column width--12 width--medium-8 width--large-6 block spacing--3y text-align--left text-align--large-right">';
              row += '<span class="title show--medium block width--12 spacing--3 font--size-4"><a href="' + item.url + '">' + item.title + '</a></span>';
              row += '<span class="price font--accent spacing--3 font--size-3 money">' + item.price + '</span>';
              row += '<span class="quantity spacing--3"><div class="input--number">';
              row += '<a tabindex="0" aria-label="' + theme.translations.remove_one_item + '" class="minus">' + theme.utils.addSymbol('minus') + '</a>';
              row += '<input type="text" value="' + item.quantity + '" min="1" pattern="[1-9]*">';
              row += '<a tabindex="0" aria-label="' + theme.translations.add_one_item + '" class="plus">' + theme.utils.addSymbol('plus') + '</a>';
              row += '</div></span>';
              row += '<span class="remove spacing--3">';
              row += '<a aria-label="' + theme.translations.remove_item + '" role="button" href="#" class="cart--remove-button remove">' + theme.utils.addSymbol('cross-circle') + '</a>';
              row += '</span>';
              row += '</div>';
              row += '</div>';
              row += '<div class="spacer spacing--3y"></div>';
              _this.table_content.append(row);
            }
            row = '<div class="totals width--12 text-align--center ">';
            row += '<div class="width--12 width--large-8 block">';
            row += '</div>';
            row += '<div class="block spacing--3y width--12 width--large-4 font--size-3 text-align--large-right text--uppercase">';
            row += '<span class="spacing--3">' + theme.translations.cart_subtotal + '</span>';
            row += '<span class="total spacing--3 money font--accent font--subheading--size">' + _this.totals.price + '</span>';
            row += '</div>';
            row += '</div>';
            row += '<div class="spacer spacing--3y show--small-medium"></div>';
            _this.table_content.append(row);
            _this.updateTotals();
            if (callback) {
              callback();
            }
            $(window).trigger('resize.FrameworkModal');
            _this.render_locked = false;
            _this.removeItemListeners();
            _this.updateQuantityListeners();
            return _this.convertCurrency(_this.root.find('.money'));
          } else {
            return console.log('cart - render item status - ' + textStatus);
          }
        }).fail(function(jqXHR, textStatus) {
          console.log("cart rendering failed");
          return _this.render_locked = false;
        });
      }
    };

    FrameworkCart.prototype.renderListener = function() {
      var _this;
      _this = this;
      return _this.root.on('renderCart', function() {
        return _this.renderCart();
      });
    };

    FrameworkCart.prototype.renderOther = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        return $('.fw--cart.modal--content').trigger('renderCart');
      } else {
        return $('.fw--cart.off-canvas').trigger('renderCart');
      }
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: form.serialize()
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateQuantityListeners = function() {
      var _this;
      _this = this;
      _this.table_content.find('.input--number input').attr("autocomplete", "off").on('keyup.LayoutCartModal paste.LayoutCartModal', function() {
        var input, input_wrapper, variant_id;
        input_wrapper = $(this).closest('.input--number');
        input = input_wrapper.find('input');
        if (parseInt(input.val()) > 0) {
          input_wrapper.addClass('updating');
          clearTimeout(_this.adjusting_qty_timer);
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            input_wrapper.removeClass('updating');
            return _this.updateTotals();
          }, 500);
        } else if (parseInt(input.val()) === 0) {
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.removeItem(variant_id);
          if ($(this).closest('form').find('.variant-id').length === 1) {
            _this.root.addClass('no-items');
          } else {
            $(this).closest('.variant-id').remove();
          }
        }
        return false;
      });
      _this.table_content.find('.input--number .minus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (parseInt(input.val()) > 1) {
            input_wrapper.addClass('updating');
            clearTimeout(_this.adjusting_qty_timer);
            input.val(parseInt(input.val()) - 1);
            variant_id = $(this).closest('.variant-id').data('variant-id');
            _this.adjusting_qty_timer = setTimeout(function() {
              _this.minusQuantity(variant_id, parseInt(input.val()));
              input_wrapper.removeClass('updating');
              return _this.updateTotals();
            }, 500);
          }
          return false;
        }
      });
      return _this.table_content.find('.input--number .plus').on('keypress.LayoutCartModal click.LayoutCartModal', function(e) {
        var input, input_wrapper, variant_id;
        if (theme.utils.a11yClick(e) === true) {
          clearTimeout(_this.adjusting_qty_timer);
          input_wrapper = $(this).closest('.input--number');
          input = input_wrapper.find('input');
          if (_this.temp_quantity === 0) {
            _this.temp_quantity = parseInt(input.val());
          }
          input_wrapper.addClass('updating');
          input.val(1 + parseInt(input.val()));
          variant_id = $(this).closest('.variant-id').data('variant-id');
          _this.adjusting_qty_timer = setTimeout(function() {
            var add_quantity;
            add_quantity = parseInt(input.val()) - _this.temp_quantity;
            return _this.plusQuantity(variant_id, add_quantity, function(pass, error) {
              if (pass) {
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              } else {
                input.val(_this.temp_quantity);
                input_wrapper.removeClass('updating');
                _this.updateTotals();
                return _this.temp_quantity = 0;
              }
            });
          }, 500);
          return false;
        }
      });
    };

    FrameworkCart.prototype.minusQuantity = function(variant_id, quantity) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/change.js",
        dataType: "json",
        data: 'quantity=' + quantity + '&id=' + variant_id,
        async: false
      }).done(function(data, textStatus, jqXHR) {
        if (textStatus === 'success') {
          _this.updateTotals();
          return _this.renderOther();
        } else {
          return console.log('cart - update cart item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - update failed");
      });
    };

    FrameworkCart.prototype.plusQuantity = function(variant_id, quantity, callback) {
      var _this;
      _this = this;
      if (!_this.add_locked) {
        _this.add_locked = true;
        return $.ajax({
          type: "POST",
          url: "/cart/add.js",
          dataType: "json",
          data: 'quantity=' + quantity + '&id=' + variant_id
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          _this.renderOther();
          return _this.add_locked = false;
        }).fail(function(jqXHR, textStatus) {
          callback(false, jqXHR.responseJSON.description);
          return _this.add_locked = false;
        });
      }
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var cart, cart_total, item, j, len, ref;
        if (textStatus === 'success') {
          cart = data;
          cart_total = {};
          cart_total.quantity = 0;
          cart_total.price = 0;
          ref = cart.items;
          for (j = 0, len = ref.length; j < len; j++) {
            item = ref[j];
            cart_total.quantity += item.quantity;
            cart_total.price += item.price * item.quantity;
          }
          _this.totals.count = cart_total.quantity;
          _this.totals.price = Currency.formatMoney(cart_total.price, theme.money_format);
          _this.render_trigger.find('.count').html(_this.totals.count);
          _this.render_trigger.find('.total-price').html(_this.totals.price);
          _this.table_content.find('.total').html(_this.totals.price);
          $('.layout--header .layout--off-canvas--open.right').html(_this.totals.count);
          $('.layout--header .cart-link .count').html('(' + _this.totals.count + ')');
          if (_this.totals.count > 0) {
            _this.render_trigger.css('display', 'inline-block');
            $('.layout--header .cart-link .count').css('display', 'inline');
            $('.header--cart-count').css('display', 'inline-block');
          } else {
            _this.render_trigger.hide();
            $('.layout--header .cart-link .count').hide();
          }
          if (theme.currency_switcher_enabled) {
            _this.convertCurrency(_this.render_trigger.find('.total-price'));
            _this.convertCurrency(_this.table_content.find('.total'));
          }
          return _this.updateTotalsComplete();
        } else {
          return console.log('cart - update totals item status - ' + textStatus);
        }
      }).fail(function(jqXHR, textStatus) {
        return console.log("cart - updating totals failed");
      });
    };

    FrameworkCart.prototype.updateTotalsComplete = function() {
      var _this;
      return _this = this;
    };

    FrameworkCart.prototype.removeItemListeners = function() {
      var _this;
      _this = this;
      return _this.table_content.find('a.remove').on('click.LayoutCartModal', function() {
        var variant_id;
        variant_id = $(this).closest('.variant-id').data('variant-id');
        _this.removeItem(variant_id);
        if ($(this).closest('form').find('.variant-id').length === 1) {
          _this.root.addClass('no-items');
          $(window).trigger('resize.FrameworkModal');
        } else {
          $(this).closest('.variant-id').remove();
        }
        _this.updateTotals();
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(variant_id) {
      var _this;
      _this = this;
      return _this.minusQuantity(variant_id, 0);
    };

    FrameworkCart.prototype.openOffCanvasListener = function() {
      var _this;
      _this = this;
      return $('.layout--off-canvas--cart--open-trigger').on('click', function() {
        $('.layout--off-canvas--right-sidebar').trigger('open');
        return false;
      });
    };

    FrameworkCart.prototype.openModalListener = function() {
      var _this;
      _this = this;
      return $('.fw--cart-modal--trigger-render').on('click', function() {
        $('.cart-link .modal--link').trigger('click');
        return false;
      });
    };

    FrameworkCart.prototype.convertCurrency = function(elems) {
      var _this;
      _this = this;
      if (theme.currency_switcher_enabled) {
        return Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
      } else {
        return false;
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkFeaturedBlog = (function() {
    function FrameworkFeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FrameworkFeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedBlog;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedContent = (function() {
    function FrameworkFeaturedContent(root) {
      var _this;
      this.root = root;
      _this = this;
    }

    return FrameworkFeaturedContent;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter('[data-feedback-bar--message="' + message + '"]');
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkInstagram = (function() {
    function FrameworkInstagram(container1) {
      var _this;
      this.container = container1;
      this.load = bind(this.load, this);
      _this = this;
      _this.username = _this.container.data('username');
      _this.access_token = _this.container.data('access-token');
      _this.body = _this.container.find('.instagram--body');
      _this.rows = _this.container.data('rows');
      _this.columns = _this.container.data('columns');
      _this.total_items = _this.rows * _this.columns;
      if (theme.utils.mqs.current_window === 'small') {
        _this.total_items = 4;
      }
      _this.load();
    }

    FrameworkInstagram.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.access_token.length < 1) {
        return false;
      }
      return $.ajax({
        dataType: "jsonp",
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + _this.access_token + '&count=' + _this.total_items,
        success: function(response) {
          var data, i, img_src, j, ref, results1;
          if (response.meta.code === 200) {
            data = response.data;
            results1 = [];
            for (i = j = 0, ref = _this.total_items - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
              if (data[i]) {
                img_src = data[i].images.standard_resolution.url;
                img_src = img_src.replace("http:", "https:");
                results1.push(_this.body.append('<a class="instagram--item" target="_blank" href="' + data[i].link + '" > <div class="instagram--item-container"> <div class="instagram--image" style="background-image: url(\'' + img_src + '\');" > </div> </div> </a>'));
              } else {
                results1.push(void 0);
              }
            }
            return results1;
          } else {
            return _this.items.append('<h4 class="error">' + response.meta.error_message + '</h4>');
          }
        },
        error: function(jqXHR, textStatus) {
          console.log(jqXHR);
          return console.log(textStatus);
        }
      });
    };

    return FrameworkInstagram;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript('https://maps.googleapis.com/maps/api/js?key=' + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + _this.large_screen + 'px)').matches) {
        if (_this.current_window !== 'large') {
          $.event.trigger("largeWindow");
          return _this.current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + _this.medium_screen + 'px)').matches) {
        if (_this.current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          $.event.trigger("smallWindow");
          return _this.current_window = 'small';
        }
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(container1) {
      var _this;
      this.container = container1;
      _this = this;
      _this.fullscreen = _this.container.data('modal--fullscreen') ? true : false;
      if (_this.container.data('modal--custom-close')) {
        _this.custom_close_button = _this.container.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.container.data('force-view');
      _this.view = _this.container.data('modal--view');
      _this.links = _this.container.find('.modal--link');
      _this.content = _this.container.find('.modal--content');
      _this.window = _this.createModalWindow();
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.createModalWindow = function() {
      var _this, window, window_html;
      _this = this;
      window = null;
      if ($('.modal--window').length) {
        window = $('.modal--window');
      } else {
        window_html = '<div class="modal--window"> <div class="modal--mask"></div> <div class="modal--container"></div> <button class="modal--close">' + theme.utils.addSymbol('cross') + '</button> <button class="modal--prev">' + theme.utils.addSymbol('chevron-left') + '</button> <button class="modal--next">' + theme.utils.addSymbol('chevron-right') + '</button> </div>';
        window = $(window_html).appendTo('body');
      }
      return window;
    };

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(e) {
        var clicked_item;
        if (e.type === 'keypress' && theme.utils.a11yClick(e) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (e.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.container.find('.modal--content');
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0" allowfullwidth></iframe>';
      } else if (type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      } else if (type === "kickstarter") {
        return '<iframe src="//www.kickstarter.com/projects/' + id + '/widget/video.html" frameborder="0" webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>';
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(e) {
            if (e.which > 0 || e.type === "mousewheel" || e.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.container.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(e) {
        if (e.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(e) {
        return e.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.container.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.container);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      return _this.touchListener();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.FrameworkOffCanvas');
      return $(document).off('touchend.FrameworkOffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).resize(function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click', function() {
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          return _this.left_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          return _this.right_sidebar.css({
            position: 'relative'
          });
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.FrameworkOffCanvas', function(e) {
        position.start.x = e.originalEvent.touches[0].clientX;
        position.start.y = e.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.FrameworkOffCanvas', function(e) {
        position.end.x = e.originalEvent.changedTouches[0].clientX;
        position.end.y = e.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.linkRows = bind(this.linkRows, this);
      this.hideResults = bind(this.hideResults, this);
      this.getResults = bind(this.getResults, this);
      this.clear = bind(this.clear, this);
      this.focusModalAlways = bind(this.focusModalAlways, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      _this = this;
      _this.clear_button = _this.root.find('.search--clear');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.type = 'product';
      _this.view = _this.root.data('search--view');
      _this.max_results = 12;
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.focusModalAlways();
      _this.listenForKeyEntered();
      _this.loadSpinners();
      _this.clear();
    }

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function() {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2) {
          _this.results.empty();
          _this.hideResults();
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.clear('checkToggle');
          return false;
        }
        _this.results.hide();
        _this.loading.show();
        _this.icon.hide();
        _this.no_results.hide();
        _this.clear('checkToggle');
        return _this.typing_timer = setTimeout(function() {
          clearTimeout(_this.typing_timer);
          if (_this.type === 'product') {
            _this.search_url = "/search?type=product&q=" + term + "*";
          } else {
            _this.search_url = "/search?q=" + term + "*";
          }
          return _this.getResults(term);
        }, 500);
      });
    };

    FrameworkSearch.prototype.focusModalAlways = function() {
      var _this;
      _this = this;
      if (_this.view === 'grid') {
        return _this.root.on('click', function() {
          return _this.text_box.focus();
        });
      }
    };

    FrameworkSearch.prototype.clear = function(event) {
      var _this;
      _this = this;
      if (event === 'checkToggle') {
        if (_this.text_box.val().length > 0) {
          return _this.clear_button.show();
        } else {
          _this.clear_button.hide();
          return _this.text_box.trigger('keyup');
        }
      } else {
        return _this.clear_button.on('click', function() {
          _this.text_box.val('');
          return _this.clear('checkToggle');
        });
      }
    };

    FrameworkSearch.prototype.getResults = function(term) {
      var _this;
      _this = this;
      _this.results.empty();
      _this.ajax_request = $.getJSON(_this.search_url + "&view=json", function(data) {
        if (data.results_count === 0) {
          _this.close_results_timer = setTimeout(function() {
            _this.hideResults();
            _this.no_results.show();
            _this.loading.hide();
            return _this.icon.show();
          }, 300);
        } else {
          clearTimeout(_this.close_results_timer);
          _this.loading.hide();
          _this.icon.show();
          _this.no_results.hide();
          _this.results.show();
          _this.results.stop(true, true).fadeIn(0);
          $.each(data.results, function(index, item) {
            var image, row;
            if (index >= _this.max_results) {
              return;
            }
            if (item.product_image) {
              image = '<img src="' + item.product_image + '" />';
            } else if (item.article_image && item.article_image.indexOf("no-image") === -1) {
              image = '<img src="' + item.article_image + '" />';
            } else {
              image = '';
            }
            row = $('<a class="search--item" href="' + item.url + '"> <span class="search--image">' + image + '</span> <span class="search--title">' + item.title + '</span> </a>');
            _this.results.append(row);
            if (_this.view === 'modal') {
              $(window).trigger('resize.FrameworkModal');
              setTimeout(function() {
                return $(window).trigger('resize.FrameworkModal');
              }, 500);
            }
          });
        }
      }).fail(function(jqxhr, textStatus, error) {
        var err;
        err = textStatus + ', ' + error;
        return console.log('search.json Request Failed: ' + err);
      });
    };

    FrameworkSearch.prototype.hideResults = function() {
      var _this;
      _this = this;
      return _this.results.fadeOut(0);
    };

    FrameworkSearch.prototype.linkRows = function() {
      var _this;
      _this = this;
      return _this.results.find("td").on('click', function() {
        var link;
        link = $(this).parent().attr('data-link');
        if (link.length) {
          return window.location = link;
        }
      });
    };

    return FrameworkSearch;

  })();

  theme.classes.Sections = (function() {
    function Sections() {
      this.unload = bind(this.unload, this);
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    Sections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    Sections.prototype.getActiveSection = function(evt) {
      var _this, active_section;
      _this = this;
      active_section = $(evt.target).find('[data-section-id]');
      return active_section;
    };

    Sections.prototype.getActiveBlock = function(evt) {
      var _this, active_block;
      _this = this;
      active_block = $(evt.target);
      return active_block;
    };

    Sections.prototype.load = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(evt) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    Sections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    Sections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    Sections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    Sections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(evt) {
        var active_block;
        active_block = _this.getActiveBlock(evt);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    Sections.prototype.unload = function(evt) {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(evt) {
        var active_section;
        active_section = _this.getActiveSection(evt);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    return Sections;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {},
        afterAction: function() {
          _this.alignPlayButton();
          _this.active_index = _this.getActiveIndex();
          _this.updateContextMenu(_this.active_index);
          return _this.formatPaginationNumbers();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html(theme.utils.addSymbol('chevron-left'));
        slider.find('.owl-next').html(theme.utils.addSymbol('chevron-right'));
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = '.' + this.container.find('.slide').eq(index).data('feed-type');
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if (PAGE.hasClass('transparent-menu') && $('.main-header').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b, mq) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.mq = mq;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (this.mq.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).scroll(function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).resize(function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      var _this;
      _this = this;
      _this.google_map_api_status = null;
    }

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(e) {
        return $(e.target).one('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + ' .image--root').outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ', .placeholder--root').height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkVideo = (function() {
    function FrameworkVideo(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.root.fitVids();
    }

    return FrameworkVideo;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function(e) {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function(e) {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function(e) {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(e) {
        e.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-less').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--expand-more').show();
        link.closest('.x-menu--level-1--link').find('.fw--icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.fw--icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.fw--icon--chevron-right').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.sub_menu_links.on('click', function(e) {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function(e) {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  Accordion = (function() {
    function Accordion() {
      $('.accordion.headings').each(function() {
        return $(this).add($(this).next('.accordion.content')).wrapAll("<div class='accordion-wrapper'/>");
      });
      $('.accordion.headings li').wrapInner('<div class="trigger"></div>');
      $('.accordion.headings li .trigger').append('<div class="bg"></div>');
      $('.accordion-wrapper').each(function() {
        var accordion_content, accordion_heading;
        accordion_heading = $(this).find('.accordion.headings > li');
        accordion_content = $(this).find('.accordion.content > li');
        accordion_heading.first().addClass('active');
        accordion_content.each(function(index) {
          var content;
          content = $('<div class="content">' + $(this).html() + '</div>');
          return content.appendTo(accordion_heading.eq(index));
        });
        accordion_content.remove();
        $(this).find('.content').first().show();
        return $(this).find('.trigger').on("click", function() {
          var panels, this_panel;
          panels = $(this).closest(".accordion").find('.content');
          this_panel = $(this).closest("li").find(".content");
          panels.not(this_panel).slideUp(200);
          this_panel.slideDown(200, function() {
            if (general_scroll_to_active_item) {
              return $('html, body').animate({
                scrollTop: this_panel.offset().top - 100
              });
            }
          });
          $(this).closest(".accordion").find("li").removeClass("active");
          return $(this).closest("li").addClass("active");
        });
      });
    }

    return Accordion;

  })();

  theme.classes.FeaturedBlog = (function() {
    function FeaturedBlog(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-blog--body');
      _this.items = _this.root.find('.featured-blog--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FeaturedBlog.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-blog--item--image');
    };

    FeaturedBlog.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FeaturedBlog;

  })();

  Footer = (function() {
    function Footer(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Footer.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    Footer.prototype.addListeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize', function() {
        return _this.stickyFooter();
      });
    };

    Footer.prototype.stickyFooter = function() {
      var total_content_height;
      total_content_height = HEADER.outerHeight() + $('.main-content').outerHeight() + $('.main-footer').outerHeight();
      if (WINDOW.outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': WINDOW.outerHeight() - $('.main-header').outerHeight() - $('.main-footer').outerHeight()
        });
      }
    };

    return Footer;

  })();

  FullscreenSlider = (function() {
    function FullscreenSlider(slider_element) {
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.removeDuplicateVideoModals = bind(this.removeDuplicateVideoModals, this);
      this.createSlider = bind(this.createSlider, this);
      var _this, slide_parent;
      _this = this;
      this.el = slider_element;
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      _this.removeDuplicateVideoModals();
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    FullscreenSlider.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    FullscreenSlider.prototype.removeDuplicateVideoModals = function() {
      var _this;
      _this = this;
      return $('.modal.video:gt(0)').remove();
    };

    FullscreenSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FullscreenSlider.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    FullscreenSlider.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    FullscreenSlider.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, slide, slide_padding, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      if (theme.utils.transparentMenuIsEnabled() && this.isFirstSlider() === true) {
        top_offset = $('.main-header').outerHeight();
      } else {
        top_offset = 0;
      }
      return theme.utils.imagesLoaded(slide.find('img').first(), function() {
        var left_offset, middle_top, slide_height, slide_width;
        slide_height = slide.outerHeight();
        slide_width = slide.outerWidth();
        if (caption.hasClass('top')) {
          caption.css('top', top_offset + slide_padding);
        } else if (caption.hasClass('middle')) {
          middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
          caption.css('top', middle_top);
        }
        if (caption.hasClass('center')) {
          left_offset = (slide_width - caption_width) / 2;
          caption.css('left', left_offset);
        }
        return caption.css('visibility', 'visible');
      });
    };

    FullscreenSlider.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      if (theme.utils.transparentMenuIsEnabled() && $('.main-header').css('position') === 'absolute') {
        theme.utils.imagesLoaded(slide.find('img').first(), function() {
          var play_button_height, slide_height, video_offset;
          slide_height = slide.outerHeight();
          play_button_height = play_button.outerHeight();
          video_offset = (slide_height - play_button_height) / 2;
          return play_button.css({
            'margin-top': 0,
            'top': video_offset
          });
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FullscreenSlider.prototype.eventListeners = function() {
      var slider;
      slider = this;
      this.el.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        slider.owl.stop();
        return false;
      });
      this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
      return DOC.on('header.transparentMenuIsUpdated', slider.alignCaption);
    };

    return FullscreenSlider;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.sectionListeners = bind(this.sectionListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.searchAndAccount();
      _this.sectionListeners();
      return _this.moveYMenu();
    };

    Header.prototype.sectionListeners = function() {
      var _this;
      _this = this;
      return _this.root.on('theme:section:load', function() {
        theme.partials.FrameworkOffCanvas.unload();
        return theme.partials.FrameworkOffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    Header.prototype.searchAndAccount = function() {
      var _this;
      _this = this;
      $('.searchbar-open').click(function() {
        $(this).closest('.menu').fadeOut(100, function() {
          $('.main-header .searchbar-container').fadeIn(200);
          return $('.main-header .searchbar-container .search-box').focus();
        });
        return false;
      });
      $('.searchbar-close').click(function() {
        $('.main-header .searchbar-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
      $('.account-open').click(function() {
        $(this).closest('.menu').fadeOut(100, function() {
          return $('.account-container').fadeIn(200);
        });
        return false;
      });
      return $('.account-close').click(function() {
        $('.account-container').fadeOut(100, function() {
          return $('.search-account .menu').fadeIn(200);
        });
        return false;
      });
    };

    return Header;

  })();

  HorizontalTabs = (function() {
    function HorizontalTabs() {
      $('.tabs-horizontal.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper horizontal'/>");
      });
      $('.tabs-horizontal.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-horizontal.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.horizontal').each(function() {
        var tab_content, tab_headings;
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          return tab_content.eq($(this).index()).addClass('active');
        });
      });
    }

    return HorizontalTabs;

  })();

  MediaQueries = (function() {
    function MediaQueries() {
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    MediaQueries.prototype.load = function() {
      var _this, current_window;
      _this = this;
      if (window.matchMedia('only screen and (min-width: ' + mq_medium + 'px)').matches) {
        if (current_window !== 'large') {
          $.event.trigger("largeWindow");
          return current_window = 'large';
        }
      } else if (window.matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches) {
        if (current_window !== 'medium') {
          $.event.trigger("mediumWindow");
          return current_window = 'medium';
        }
      } else {
        if (current_window !== 'small') {
          $.event.trigger("smallWindow");
          return current_window = 'small';
        }
      }
    };

    MediaQueries.prototype.listeners = function() {
      var _this;
      _this = this;
      return WINDOW.on('resize.section-' + _this.section_id, _this.load);
    };

    return MediaQueries;

  })();

  Popup = (function() {
    function Popup(clazz) {
      var checkContentOverflow, closeDialog, eventListeners, fillPopupDialog, fillSizeChartDialog, getCustomClasses, getImage, getNewsletter, getPageContent, getSocialIcons, getWrapper, hideMask, ieCenter, isExpired, mask, maskIsActive, modal, modal_clazz, openDialog, passesExpiration, resetExpiration, showMask, storeExpiration;
      this.clazz = clazz;
      modal = null;
      modal_clazz = this.clazz;
      mask = $('.popup-modal-mask');
      storeExpiration = function() {
        var date, e, expires, object, seconds_from_now;
        date = new Date();
        seconds_from_now = 1000 * 60 * 60 * 24 * popup_config.days_until;
        expires = date.setTime(date.getTime() + seconds_from_now);
        object = {
          expires: expires
        };
        try {
          return localStorage[popup_config.storage_key] = JSON.stringify(object);
        } catch (error1) {
          e = error1;
          return false;
        }
      };
      resetExpiration = function() {
        localStorage.removeItem(popup_config.storage_key);
        return storeExpiration();
      };
      isExpired = function() {
        var expires, now, object;
        object = JSON.parse(localStorage[popup_config.storage_key]);
        expires = object.expires;
        now = new Date().getTime();
        if (parseFloat(expires - now) <= 0) {
          resetExpiration();
          return true;
        }
        return false;
      };
      passesExpiration = function() {
        var passed;
        passed = false;
        if (Storage === "undefined" || popup_config.test_mode) {
          passed = true;
        } else if (typeof localStorage[popup_config.storage_key] === "undefined") {
          passed = true;
          storeExpiration();
        } else {
          passed = isExpired();
        }
        return passed;
      };
      maskIsActive = function() {
        return $('.popup-modal').is(':visible') || $('.modal-mask').length > 0 && $('.modal-mask').is(':visible');
      };
      showMask = function() {
        mask.show();
        return PAGE.addClass("modal-on");
      };
      hideMask = function() {
        mask.hide();
        return PAGE.removeClass("modal-on");
      };
      getImage = function() {
        if (popup_config.show_image_enabled === false) {
          return "";
        }
        if (popup_config.image_link.length > 0) {
          return $('<div class="popup-image"> <a href="' + popup_config.image_link + '">' + popup_config.show_image_url + '</a> </div>');
        } else {
          return $('<div class="popup-image">').append(popup_config.show_image_url);
        }
      };
      getNewsletter = function() {
        var subscribe_module;
        if (popup_config.newsletter_enabled === false) {
          return "";
        }
        subscribe_module = $("<div id='subscribe_module'></div>").append($(".popup--root"));
        return subscribe_module;
      };
      getSocialIcons = function() {
        if (popup_config.social_icons_enabled === false) {
          return "";
        }
        return $(".social-follow").clone();
      };
      getCustomClasses = function() {
        var class_list;
        class_list = "";
        class_list += popup_config.show_image_enabled === true ? " has-image" : " has-no-image";
        class_list += popup_config.page_content.length > 0 ? " has-page-content" : " has-no-page-content";
        class_list += popup_config.newsletter_enabled ? " has-newsletter" : " has-no-newsletter";
        class_list += popup_config.social_icons_enabled ? " has-social-icons" : " has-no-social-icons";
        return class_list;
      };
      getWrapper = function() {
        return '<dialog class="' + modal_clazz + ' popup-modal' + getCustomClasses() + '" />';
      };
      getPageContent = function() {
        var page_content;
        page_content = null;
        if (popup_config.page_content.length < 1) {
          return "";
        }
        $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
          return page_content = "<div class='page-contents'>" + data.page.body_html + "</div>";
        });
        return page_content;
      };
      fillSizeChartDialog = function() {
        var dialog;
        if ($('.popup-modal.size-chart').length < 1) {
          dialog = {
            wrapper: getWrapper()
          };
          PAGE.append($(dialog.wrapper).append($('.size-chart')));
        }
        return openDialog();
      };
      fillPopupDialog = function() {
        var dialog, getInnerContent, render;
        dialog = {
          wrapper: getWrapper(),
          newsletter: getNewsletter(),
          social_icons: getSocialIcons(),
          image: getImage()
        };
        getInnerContent = function() {
          if (popup_config.page_content.length < 1 && popup_config.newsletter_enabled === false && popup_config.social_icons_enabled === false) {
            return "";
          }
          return $("<div class='inner' />").append(dialog.body, dialog.newsletter, dialog.social_icons);
        };
        render = function() {
          PAGE.append($(dialog.wrapper).append(dialog.image, getInnerContent()));
          return openDialog();
        };
        if (popup_config.page_content.length > 0) {
          return $.getJSON('/pages/' + popup_config.page_content + '.json', function(data, textStatus) {
            dialog['body'] = "<div class='page-contents'>" + data.page.body_html + "</div>";
            return render();
          });
        } else {
          return render();
        }
      };
      checkContentOverflow = function() {
        return setTimeout((function() {
          if (modal.length > 0 && $('.popup-modal-mask').is(':visible')) {
            return theme.utils.imagesLoaded(modal, function() {
              var dialog_height;
              dialog_height = $('dialog[class*="' + modal_clazz + '"]:last-of-type').outerHeight();
              if (dialog_height >= WINDOW.height()) {
                return PAGE.addClass('modal-unfix');
              } else {
                return PAGE.removeClass('modal-unfix');
              }
            });
          }
        }), 0);
      };
      ieCenter = function() {
        return modal.css({
          marginTop: -(modal.outerHeight() * 0.5) + "px",
          marginLeft: -(modal.outerWidth() * 0.5) + "px"
        });
      };
      openDialog = function() {
        modal = $('dialog[class*="' + modal_clazz + '"]');
        eventListeners();
        modal.addClass("opened").removeClass("closed");
        checkContentOverflow();
        return showMask();
      };
      eventListeners = function() {
        var removeAnimation;
        removeAnimation = function(event) {
          if (event.originalEvent.animationName === 'modal-close') {
            if (modal_clazz === 'popup') {
              return modal.remove();
            } else {
              return modal.removeClass('closed, completed');
            }
          } else {
            return modal.addClass('completed').removeClass('opened');
          }
        };
        DOC.on('click', '.popup-modal', function(e) {
          e.stopPropagation();
          if (e.target === this) {
            return closeDialog();
          }
        });
        $('.popup-modal-close').click(closeDialog);
        mask.click(closeDialog);
        modal.on('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', removeAnimation);
        WINDOW.resize(checkContentOverflow);
        DOC.keydown(function(e) {
          if (modal.hasClass('completed') && e.keyCode === 27) {
            return closeDialog();
          }
        });
        return $('dialog.popup-modal #contact_form').on('submit', function(event) {
          var form;
          form = this;
          modal = $(this).closest('.popup-modal');
          modal.find('.error, .success').remove();
          event.preventDefault();
          if (modal.find('input[type="email"]').val().length === 0) {
            modal.find('.inner').prepend('<p class="error">' + theme.translation.newsletter_email_blank + '</p>');
            return false;
          } else {
            form.submit();
          }
          return false;
        });
      };
      closeDialog = function() {
        modal.addClass('closed').removeClass('completed').removeClass('opened');
        return hideMask();
      };
      if (modal_clazz !== 'popup') {
        fillSizeChartDialog();
      } else {
        if (popup_config.enabled && passesExpiration() && (popup_config.page_content.length > 0 || popup_config.newsletter_enabled || popup_config.show_image_enabled || popup_config.social_icons_enabled)) {
          setTimeout((function() {
            if (!(maskIsActive() === true || $('.popup-modal-mask').length < 1)) {
              return fillPopupDialog();
            }
          }), popup_config.seconds_until * 1000);
        }
      }
    }

    return Popup;

  })();

  theme.classes.ProductGrid = (function() {
    function ProductGrid(root) {
      var _this;
      this.root = root;
      this.hoverImagesLoaded = bind(this.hoverImagesLoaded, this);
      this.listeners = bind(this.listeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.detectOnboarding = bind(this.detectOnboarding, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.items = _this.root.find('.product--root');
      _this.onboarding = _this.detectOnboarding();
      _this.in_slider = _this.root.data('in-slider');
      _this.load();
    }

    ProductGrid.prototype.load = function() {
      var _this;
      _this = this;
      _this.listeners();
      _this.hoverImagesLoaded();
      if (!_this.in_slider) {
        return _this.matchImageHeights();
      }
    };

    ProductGrid.prototype.detectOnboarding = function() {
      var _this;
      _this = this;
      if (_this.items.first().find('.placeholder').length) {
        return true;
      }
      return false;
    };

    ProductGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.root, _this.items, '.product--image-wrapper');
    };

    ProductGrid.prototype.listeners = function() {
      var _this;
      _this = this;
      if (!_this.in_slider) {
        return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
          return _this.matchImageHeights();
        }));
      }
    };

    ProductGrid.prototype.hoverImagesLoaded = function() {
      var _this;
      _this = this;
      return _this.items.filter('[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return ProductGrid;

  })();

  ProductSlider = (function() {
    function ProductSlider(root) {
      var _this;
      this.root = root;
      this.listeners = bind(this.listeners, this);
      this.afterUpdate = bind(this.afterUpdate, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.product_grid = _this.root.find('.product-grid--root');
      _this.product_item = _this.root.find('.product--root');
      _this.load();
      _this.listeners();
    }

    ProductSlider.prototype.load = function() {
      var _this;
      _this = this;
      _this.product_grid.owlCarousel({
        items: 4,
        navigation: true,
        scrollPerPage: true,
        slideSpeed: 800,
        lazyLoad: false,
        pagination: false,
        navigationText: false,
        afterUpdate: _this.afterUpdate()
      });
      return _this.product_item.show();
    };

    ProductSlider.prototype.afterUpdate = function() {
      var _this;
      _this = this;
      return $(window).trigger('ProductSlider.afterUpdate');
    };

    ProductSlider.prototype.listeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductGrid', theme.utils.debounce(100, function() {
        return _this.loadCarousel;
      }));
    };

    return ProductSlider;

  })();

  PromoBar = (function() {
    function PromoBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.promo_bar = _this.root;
      _this.close_btn = _this.root.find('button');
      _this.load();
    }

    PromoBar.prototype.load = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && sessionStorage['promo-bar-closed']) {
        return _this.promo_bar.hide();
      } else {
        _this.promo_bar.show();
        return _this.close_btn.on('click', function() {
          return _this.close();
        });
      }
    };

    PromoBar.prototype.close = function() {
      var _this;
      _this = this;
      if ((typeof Storage !== "undefined" && Storage !== null) && !sessionStorage['promo-bar-closed']) {
        sessionStorage['promo-bar-closed'] = true;
      }
      return _this.promo_bar.addClass('closed');
    };

    return PromoBar;

  })();

  VerticalTabs = (function() {
    function VerticalTabs() {
      $('.tabs-vertical.headings').each(function() {
        return $(this).add($(this).next('.tabs.content')).wrapAll("<div class='tabs-wrapper vertical'/>");
      });
      $('.tabs-vertical.headings li').wrapInner('<div class="trigger"></div>');
      $('.tabs-vertical.headings li .trigger').append('<div class="bg"></div>');
      $('.tabs-wrapper.vertical').each(function() {
        var tab_content, tab_headings, tab_wrapper;
        tab_wrapper = $(this);
        tab_headings = $(this).find('.headings > li');
        tab_content = $(this).find('.tabs.content > li');
        tab_content.first().addClass('active');
        tab_headings.first().addClass('active');
        return tab_headings.on('click', function() {
          tab_headings.removeClass('active');
          tab_content.removeClass('active');
          $(this).addClass('active');
          tab_content.eq($(this).index()).addClass('active');
          if (general_scroll_to_active_item) {
            if (matchMedia('only screen and (min-width: ' + mq_small + 'px)').matches) {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top - 50
              }, 'slow');
            } else {
              return $('html, body').animate({
                scrollTop: tab_wrapper.offset().top + tab_wrapper.find('.headings').outerHeight() - 50
              }, 'slow');
            }
          }
        });
      });
    }

    return VerticalTabs;

  })();

  VideoModal = (function() {
    function VideoModal(video) {
      this.createIframe = bind(this.createIframe, this);
      this.extractVideoId = bind(this.extractVideoId, this);
      this.extractVideoType = bind(this.extractVideoType, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.centerPosition = bind(this.centerPosition, this);
      this.close = bind(this.close, this);
      this.open = bind(this.open, this);
      this.opened = false;
      this.video = video;
      this.modal = $('.video.modal');
      this.player_button = video.find('.player-button');
      this.src_url = video.find('.play-button').attr('href');
      this.type = this.extractVideoType();
      this.id = this.extractVideoId();
      this.iframe = this.createIframe();
      this.caption = video.find('.caption');
    }

    VideoModal.prototype.open = function() {
      this.opened = true;
      this.modal.find(".flex-video").append(this.iframe);
      if (this.caption.length > 0) {
        this.modal.find(".caption").append(this.caption.html());
        this.modal.addClass("wide");
      } else {
        this.modal.find(".player").removeClass('large-8');
        this.modal.find('.caption').hide();
        this.modal.removeClass("wide");
      }
      this.player_button.hide();
      $('.modal-mask').show();
      this.modal.find('.close').show();
      this.modal.fadeIn();
      this.centerPosition();
      $(".modal").fadeIn(0);
      return this.eventListeners();
    };

    VideoModal.prototype.close = function() {
      this.opened = false;
      this.modal.find(".flex-video").empty();
      this.modal.find(".caption").empty();
      this.modal.hide();
      $('.modal-mask').fadeOut();
      if (this.caption.length === 0) {
        this.modal.find(".player").addClass('large-8');
        return this.modal.find('.caption').show();
      }
    };

    VideoModal.prototype.centerPosition = function() {
      if (WINDOW.height() < this.modal.outerHeight()) {
        return this.modal.css({
          'position': 'absolute',
          'top': '30px',
          'margin-top': 0,
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      } else {
        return this.modal.css({
          'position': 'fixed',
          'top': '50%',
          'margin-top': -(this.modal.outerHeight() / 2),
          'margin-left': -(this.modal.outerWidth() / 2)
        });
      }
    };

    VideoModal.prototype.eventListeners = function() {
      var modal;
      modal = this;
      this.modal.find('.close').on('click', function() {
        return modal.close();
      });
      WINDOW.resize(function() {
        return modal.centerPosition();
      });
      DOC.keydown(function(e) {
        if (modal.opened) {
          if (e.keyCode === 27) {
            return modal.close();
          }
        }
      });
      $('.modal-mask').on('click', function() {
        return modal.close();
      });
      return this.player_button.on('click', function() {
        return false;
      });
    };

    VideoModal.prototype.extractVideoType = function() {
      var matches, re;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(this.src_url);
      if (matches) {
        return 'youtube';
      } else {
        re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        matches = re.exec(this.src_url);
        if (matches) {
          return 'vimeo';
        }
      }
      return false;
    };

    VideoModal.prototype.extractVideoId = function() {
      var match, regExp;
      if (this.type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = this.src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (this.type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = this.src_url.match(regExp);
        if (match) {
          return match[2];
        }
      }
    };

    VideoModal.prototype.createIframe = function() {
      if (this.type === "youtube") {
        return '<iframe  src="//www.youtube.com/embed/' + this.id + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>';
      } else if (this.type === "vimeo") {
        return '<iframe src="//player.vimeo.com/video/' + this.id + '?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
      }
    };

    return VideoModal;

  })();

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.slideDown = bind(this.slideDown, this);
      this.hideHeader = bind(this.hideHeader, this);
      this.showHeader = bind(this.showHeader, this);
      this.headerListeners = bind(this.headerListeners, this);
      this.isHeaderTransparent = bind(this.isHeaderTransparent, this);
      _this = this;
      _this.header = $('.main-header');
      _this.header_bg = _this.header.find('.header--bg');
      _this.header_timer = null;
      _this.transparent_header = _this.isHeaderTransparent();
      XMenu.__super__.constructor.apply(this, arguments);
      _this.headerListeners();
    }

    XMenu.prototype.isHeaderTransparent = function() {
      var _this;
      _this = this;
      if ($('.header').attr('data-header--menu-transparent') === 'true') {
        return true;
      } else {
        return false;
      }
    };

    XMenu.prototype.headerListeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter', function(e) {
        return clearTimeout(_this.header_timer);
      });
      _this.header.on('mouseenter touchstart', function(e) {
        clearTimeout(_this.header_timer);
        return _this.showHeader();
      });
      return _this.header.on('mouseleave', function(e) {
        return _this.header_timer = setTimeout(function() {
          return _this.hideHeader();
        }, 500);
      });
    };

    XMenu.prototype.showHeader = function() {
      var _this;
      _this = this;
      if (parseInt(_this.header_bg.css('opacity')) !== 0) {
        return;
      }
      return _this.header_bg.velocity({
        opacity: [0.95]
      }, {
        duration: 400,
        queue: false
      });
    };

    XMenu.prototype.hideHeader = function() {
      var _this;
      _this = this;
      if (_this.parents_with_sub_menu.filter('[data-main-menu--open="true"]').length > 0) {
        return false;
      }
      _this.header_bg.velocity({
        opacity: 0
      }, {
        duration: 400
      });
      return _this.slideUp();
    };

    XMenu.prototype.slideDown = function(link, delay) {
      var _this, opacity;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      if (delay !== 'complete') {
        opacity = Math.round(parseFloat(_this.header_bg.css('opacity')) * 100);
        if (opacity < 90 && _this.transparent_header) {
          delay = 400;
        }
      }
      return XMenu.__super__.slideDown.call(this, link, delay);
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  Cart = (function() {
    function Cart() {
      this.recentCartItemPopUp = bind(this.recentCartItemPopUp, this);
      this.addToCart = bind(this.addToCart, this);
      this.validateSize = bind(this.validateSize, this);
      this.stopResetTimer = bind(this.stopResetTimer, this);
      this.startTimer = bind(this.startTimer, this);
      this.fadeOutCartDropdown = bind(this.fadeOutCartDropdown, this);
      this.openMobileModal = bind(this.openMobileModal, this);
      this.slideDownCartDropdown = bind(this.slideDownCartDropdown, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.cart_dropdown_timer = null;
      _this.listeners();
    }

    Cart.prototype.load = function() {
      var _this;
      return _this = this;
    };

    Cart.prototype.listeners = function() {
      var _this;
      _this = this;
      $('.product-page--cart-form form').off().on('submit', function() {
        _this.addToCart($(this));
        return false;
      });
      $('.recently-added.mobile .close').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.recently-added-mask').off().on('click', function() {
        return _this.fadeOutCartDropdown();
      });
      $('.main-header .recently-added').mouseenter(function() {
        return _this.stopResetTimer();
      });
      return $('.main-header .recently-added').mouseleave(function() {
        return _this.startTimer();
      });
    };

    Cart.prototype.toggleCartDropdown = function() {
      return $('.main-header .recently-added').slideToggle('fast');
    };

    Cart.prototype.slideDownCartDropdown = function() {
      $('.main-header .recently-added').slideDown('fast');
      return $("html, body").animate({
        scrollTop: 0
      });
    };

    Cart.prototype.openMobileModal = function() {
      $('.main-header .recently-added.mobile').fadeIn();
      return $('.main-header .recently-added-mask').removeClass('hide');
    };

    Cart.prototype.fadeOutCartDropdown = function() {
      var _this;
      _this = this;
      clearTimeout(_this.cart_dropdown_timer);
      $('.main-header .recently-added').fadeOut('fast');
      return $('.main-header .recently-added-mask').addClass('hide');
    };

    Cart.prototype.startTimer = function() {
      var _this;
      _this = this;
      return _this.cart_dropdown_timer = setTimeout((function() {
        return _this.fadeOutCartDropdown();
      }), 4000);
    };

    Cart.prototype.stopResetTimer = function() {
      var _this;
      _this = this;
      return clearTimeout(_this.cart_dropdown_timer);
    };

    Cart.prototype.validateSize = function(cart_form) {
      if (cart_form.find('select option:selected').is(':disabled')) {
        cart_form.find('.dropdown').effect('shake', {
          'times': 2,
          'distance': 5
        }, 400);
        return false;
      }
      return true;
    };

    Cart.prototype.addToCart = function(cart_form) {
      var _this, addToCartFail, addToCartPass;
      _this = this;
      addToCartPass = function(product) {
        return _this.recentCartItemPopUp();
      };
      addToCartFail = function(obj, status) {
        $('.recently-added .error').show();
        $('.recently-added table').hide();
        $('.recently-added div.row').hide();
        _this.slideDownCartDropdown();
        return _this.startTimer();
      };
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: cart_form.serialize(),
        success: addToCartPass,
        error: addToCartFail
      });
    };

    Cart.prototype.recentCartItemPopUp = function() {
      var _this, cart_item, cart_total;
      _this = this;
      cart_item = {};
      cart_total = {};
      return $.getJSON("/cart.js", function(cart, textStatus) {
        var item_trans, new_cart_row, new_mobile_item;
        cart_item.image_url = Shopify.resizeImage(cart.items[0].image, "160x");
        cart_item.url = cart.items[0].url;
        cart_item.title = cart.items[0].title;
        cart_item.price = Shopify.formatMoney(cart.items[0].price, shop_money_format);
        cart_total.price = Shopify.formatMoney(cart.total_price, shop_money_format);
        cart_total.quantity = cart.item_count;
        $('.cart-link .number, .header--mobile--cart-link .number').html(cart_total.quantity);
        $('.cart-link .number-wrapper, .header--mobile--cart-link .number-wrapper').removeClass('hide');
        new_cart_row = '<tr>';
        new_cart_row += '<td class="cart-item">';
        new_cart_row += '<a href="' + cart_item.url + '">';
        new_cart_row += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + '">';
        new_cart_row += '</a>';
        new_cart_row += '</td>';
        new_cart_row += '<td class="cart-detail">';
        new_cart_row += '<h2><a href="' + cart_item.url + '">' + cart_item.title + '</a></h2>';
        new_cart_row += '</td>';
        new_cart_row += '<td class="cart-price"><span class="money">' + cart_item.price + '</span></td>';
        new_cart_row += '</tr>';
        new_mobile_item = '<a href="' + cart_item.url + '">';
        new_mobile_item += '<img src="' + cart_item.image_url + '" alt="' + cart_item.title + '">';
        new_mobile_item += '</a>';
        $('.recently-added tbody').html(new_cart_row);
        $('.recently-added .mobile-item').html(new_mobile_item);
        if (cart_total.quantity > 1) {
          item_trans = theme.translations.cart_items;
        } else {
          item_trans = theme.translations.cart_item;
        }
        $('.recently-added .items-count').html('<a href="/cart"> <span class="number">' + cart_total.quantity + '</span> ' + item_trans + '</a>');
        $('.recently-added .total-price').html(cart_total.price);
        if (currency_switcher_enabled) {
          $.each($('.recently-added .total-price').get(0).attributes, function(i, attrib) {
            if (attrib.name.match("^data-currency")) {
              return $('.recently-added .total-price').attr(attrib.name, "");
            }
          });
          Currency.convertAll(shopCurrency, jQuery('[name=currencies]').val());
        }
        $('.recently-added .error').hide();
        $('.recently-added table, .recently-added div.row').show();
        if (theme.utils.mqs.current_window === 'small') {
          _this.openMobileModal();
        } else {
          _this.slideDownCartDropdown();
        }
        return _this.startTimer();
      });
    };

    return Cart;

  })();

  Collection = (function() {
    function Collection() {
      DOC.on('change', '.tags-listbox', function() {
        var collFilters, newTags, query;
        newTags = [];
        collFilters = $(this);
        collFilters.each(function(index, element) {
          if ($(this).val()) {
            return newTags.push($(this).val());
          }
        });
        if (newTags.length) {
          query = newTags.join('+');
          return window.location.href = $(theme.collection.tag).attr('href').replace('tag', query);
        } else {
          if (theme.collection.handle) {
            return window.location.href = '/collections/' + theme.collection.handle;
          } else if (theme.collection.products.first_type === theme.collection.title) {
            return window.location.href = theme.collection.url_for_type;
          } else if (theme.collection.products.first_vendor === theme.collection.title) {
            return window.location.href = theme.collection.url_for_vendor;
          }
        }
      });
    }

    return Collection;

  })();

  Password = (function() {
    function Password() {
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      var _this;
      _this = this;
      _this.listeners();
      _this.load();
    }

    Password.prototype.load = function() {
      var _this;
      _this = this;
      if ($('.login-form .errors').size()) {
        return $('.login-link').click();
      }
    };

    Password.prototype.listeners = function() {
      var _this;
      _this = this;
      DOC.on('click', '.login-link', function() {
        $(this).css('visibility', 'hidden');
        $(".wrapper").hide();
        $('.login-form').css('visibility', 'visible').find($('[name=password]').focus());
        return false;
      });
      return DOC.on('click', '.login-form .cancel', function() {
        $(".login-link").css('visibility', 'visible');
        $(".wrapper").fadeIn();
        $('.login-form').css('visibility', 'hidden');
        return false;
      });
    };

    return Password;

  })();

  theme.classes.ProductPage = (function() {
    function ProductPage(root) {
      var _this;
      this.root = root;
      this.cssGridFallback = bind(this.cssGridFallback, this);
      this.modalCloseListener = bind(this.modalCloseListener, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.imageZoom = bind(this.imageZoom, this);
      this.getActiveImageId = bind(this.getActiveImageId, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbListener = bind(this.thumbListener, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.sizeChart = bind(this.sizeChart, this);
      this.updateLowInStock = bind(this.updateLowInStock, this);
      this.getVariantQuantity = bind(this.getVariantQuantity, this);
      this.getLowInStockAmount = bind(this.getLowInStockAmount, this);
      this.getLowInStockMessage = bind(this.getLowInStockMessage, this);
      this.mobileModalHandler = bind(this.mobileModalHandler, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.thumbs = _this.root.find('.product-page--thumb');
      _this.main_images = _this.root.find('.product-page--image');
      _this.zoom_images = _this.root.find('.product-page--zoom-image');
      _this.image_container = _this.root.find('.product-page--images-container');
      _this.magnify = parseFloat(_this.root.data('magnify'));
      _this.size_chart_enabled = _this.root.data('size-chart-enabled');
      _this.size_chart_option = _this.root.data('size-chart-option').toLowerCase();
      _this.load();
    }

    ProductPage.prototype.load = function() {
      var _this, photos;
      _this = this;
      _this.cssGridFallback();
      _this.thumbListener();
      _this.imageZoom();
      _this.resizeListeners();
      _this.modalCloseListener();
      _this.mobileModalHandler();
      _this.root.on('theme:section:load', function() {
        new Cart();
        new Accordion();
        new HorizontalTabs();
        new VerticalTabs();
        return new Shopify.OptionSelectors('variant-listbox', {
          product: product_json,
          onVariantSelected: _this.variantSelected,
          enableHistoryState: true
        });
      });
      photos = $('article .photos');
      DOC.on('click', '.size-chart-trigger', function(e) {
        e.preventDefault();
        return new Popup('size-chart-container');
      });
      photos.on('click', function() {
        return false;
      });
      $("article .custom.dropdown").hide();
      if (product_options_size === 1 && product_options_first !== "Title") {
        return $(".selector-wrapper:eq(0)").prepend("<label>" + product_options_first + "</label>");
      }
    };

    ProductPage.prototype.mobileModalHandler = function() {
      var _this, modal_links;
      _this = this;
      modal_links = _this.image_container.find('.modal--link');
      return modal_links.on('click', function(e) {
        if (theme.utils.mqs.current_window === 'small') {
          return e.stopImmediatePropagation();
        }
      });
    };

    ProductPage.prototype.getLowInStockMessage = function(quantity) {
      var _this, message;
      _this = this;
      message = quantity === 1 ? theme.products.low_in_stock.one : theme.products.low_in_stock.other;
      if (quantity > 1) {
        message = message.replace(/\d+/, quantity);
      }
      return message;
    };

    ProductPage.prototype.getLowInStockAmount = function() {
      var _this;
      _this = this;
      return _this.root.data('product-low-in-stock-amount');
    };

    ProductPage.prototype.getVariantQuantity = function(variant) {
      var option;
      option = $('#variant-listbox').find('[value="' + variant.id + '"]');
      if (option.length > 0) {
        return parseInt(option.data('inventory-quantity'));
      } else {
        return 'not available';
      }
    };

    ProductPage.prototype.updateLowInStock = function(variant) {
      var _this, quantity, threshold;
      _this = this;
      quantity = _this.getVariantQuantity(variant);
      threshold = _this.getLowInStockAmount();
      if (threshold === 'undefined') {
        return false;
      }
      if (quantity > 0 && quantity <= threshold) {
        $('.product-low-in-stock').html('<p>' + _this.getLowInStockMessage(quantity) + '</p>').show();
      } else {
        $('.product-low-in-stock').hide();
      }
      return DOC.on('.shopify-section section--products shopify:section:select', function() {
        return _this.updateLowInStock(variant);
      });
    };

    ProductPage.prototype.sizeChart = function(product_options) {
      var _this;
      _this = this;
      if (!_this.size_chart_enabled) {
        return;
      }
      return $('.selector-wrapper').each(function(index, element) {
        if (product_options[index].toLowerCase() === _this.size_chart_option && $(element).find('.size-chart-trigger').length === 0) {
          return $(element).append('<a class="size-chart-trigger" href="#">' + theme.products.size_chart.label + '</a>');
        }
      });
    };

    ProductPage.prototype.variantSelected = function(variant, selector, options) {
      var _this, actual_price, compare_price, show_low_in_stock;
      _this = this;
      $(".compare-price").html("");
      $('.product-unavailable [type="submit"]').prop("disabled", true);
      if (variant && variant.available) {
        $(".quanity-cart-row, .product-page--smart-payment-buttons").show();
        $('.product-unavailable').hide();
      } else {
        $(".quanity-cart-row, .product-page--smart-payment-buttons").hide();
        $('.product-unavailable').show();
        $('.product-low-in-stock').hide();
        $('.product-unavailable [type="submit"]').prop("disabled", false);
        if (product_variant_size > 1 && variant) {
          $('.product-unavailable form .email-body').attr('value', 'Please notify me when this is back in stock: ' + product_title + ' - ' + variant.title);
        }
      }
      if (variant) {
        actual_price = Shopify.formatMoney(variant.price, shop_money_format);
        $(".actual-price").replaceWith('<span class="actual-price money" itemprop="price">' + actual_price + '</span>');
        if (variant.compare_at_price > variant.price) {
          compare_price = Shopify.formatMoney(variant.compare_at_price, shop_money_format);
          $(".compare-price").html(product_language_was + ' <span class="money">' + compare_price + '</span>');
        }
        if (currency_switcher_enabled) {
          Currency.convertAll(shopCurrency, $('[name=currencies]').val());
        }
        if (variant.featured_image) {
          _this.updateVariantImage(variant.featured_image.id);
        }
      }
      show_low_in_stock = _this.getLowInStockAmount() === false ? false : true;
      if (show_low_in_stock === true) {
        _this.updateLowInStock(variant);
      }
      _this.sizeChart(selector.product.options);
    };

    ProductPage.prototype.thumbListener = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(e) {
        var variant_id;
        if (theme.utils.a11yClick(e)) {
          variant_id = $(this).data('id');
          _this.updateVariantImage(variant_id);
        }
        return _this.imageZoom();
      });
    };

    ProductPage.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter('[data-id="' + variant_id + '"]');
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter('[data-id="' + variant_id + '"]');
      variant_thumb.attr('data-active', 'true');
      return _this.imageZoom();
    };

    ProductPage.prototype.getActiveImageId = function() {
      var _this, active_image, active_image_id;
      _this = this;
      active_image = _this.main_images.filter('[data-active="true"]');
      active_image_id = active_image.data('id');
      return active_image_id;
    };

    ProductPage.prototype.imageZoom = function() {
      var _this, active_zoom_image, aspect_ratio, left_position, top_position, wrapper_height, wrapper_width, x_ratio, y_ratio;
      _this = this;
      if (_this.root.data('zoom-enabled') === false) {
        return;
      }
      _this.image_container.off('mouseenter.ProductPage.imageZoom');
      _this.image_container.off('mouseleave.ProductPage.imageZoom');
      _this.zoom_images.css('display', 'none');
      active_zoom_image = _this.zoom_images.filter('[data-id="' + _this.getActiveImageId() + '"]');
      aspect_ratio = active_zoom_image.data('aspect-ratio');
      wrapper_width = _this.image_container.width();
      wrapper_height = _this.image_container.height();
      active_zoom_image.find('.image--root').css('width', wrapper_width * _this.magnify);
      top_position = _this.image_container.offset().top;
      left_position = _this.image_container.offset().left;
      x_ratio = (wrapper_width * _this.magnify - wrapper_width) / wrapper_width;
      y_ratio = (wrapper_height * _this.magnify - wrapper_height) / wrapper_height;
      _this.image_container.on('mouseenter.ProductPage.imageZoom', function() {
        return active_zoom_image.css('display', 'block');
      });
      _this.image_container.on('mouseleave.ProductPage.imageZoom', function() {
        return active_zoom_image.css('display', 'none');
      });
      return _this.image_container.on('mousemove', function(e) {
        var relative_left, relative_top;
        relative_left = e.pageX - left_position;
        relative_top = e.pageY - top_position;
        return active_zoom_image.css({
          'left': relative_left * -x_ratio,
          'top': relative_top * -y_ratio
        });
      });
    };

    ProductPage.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductPage', theme.utils.debounce(100, function() {
        return _this.imageZoom();
      }));
    };

    ProductPage.prototype.modalCloseListener = function() {
      var _this;
      _this = this;
      return $(window).on('FrameworkModal.afterClose', function() {
        return _this.imageZoom();
      });
    };

    ProductPage.prototype.cssGridFallback = function() {
      var _this;
      _this = this;
      if (!Modernizr.cssgrid) {
        $('.product-page--title-n-vendor, .product-page--cart-form-block, .product-page--description').wrapAll('<div class="product-page--no-grid--left-column"></div>');
        return $('.product-page--images').wrapAll('<div class="product-page--no-grid--right-column"></div>');
      }
    };

    return ProductPage;

  })();

  theme.classes.Utils = (function(superClass) {
    extend(Utils, superClass);

    function Utils() {
      var _this;
      _this = this;
      _this.sections = new theme.classes.Sections();
      _this.mqs = new theme.classes.FrameworkMediaQueries();
    }

    Utils.prototype.transparentMenuIsEnabled = function() {
      return PAGE.find("[data-header--menu-transparent=true]").length > 0;
    };

    Utils.prototype.loadJsClasses = function() {
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };

    Utils.prototype.addSymbol = function(icon_name) {
      return '<svg class="fw--icon fw--icon--' + icon_name + '"> <use xlink:href="#fw--icon--' + icon_name + '" /> </svg>';
    };

    Utils.prototype.isIE11 = function() {
      if (!!window.MSInputMethodContext && !!document.documentMode) {
        return true;
      }
      return false;
    };

    return Utils;

  })(theme.classes.FrameworkUtils);

  PAGE = null;

  DOC = null;

  WINDOW = null;

  HEADER = null;

  touchevents_exist = null;

  mq_small = null;

  mq_medium = null;

  mq_large = null;

  log = null;

  current_window = '';

  jQuery(function($) {
    var first_article_img, isFirefox, page_content, pinterest_button;
    PAGE = $('body');
    DOC = $(document);
    WINDOW = $(window);
    HEADER = $('.main-header');
    touchevents_exist = Modernizr.touchevents;
    mq_small = 768;
    mq_medium = 1280;
    mq_large = 1440;
    theme.utils = new theme.classes.Utils();
    if (general_external_links_enabled) {
      $('a[href^="http"]').not('a[href^="' + shop_url + '"]').attr('target', '_blank');
    }
    new Popup('popup');
    new Footer($('.footer'));
    new Accordion();
    new HorizontalTabs();
    new VerticalTabs();
    new Cart();
    new PromoBar($('.promo-bar'));
    if (PAGE.hasClass('template-page')) {
      page_content = $('.page-content .rte-content');
      if (page_content.find('.left-side-column').length || page_content.find('.right-side-column').length) {
        if (page_content.find('.left-side-column').length && page_content.find('.right-side-column').length) {
          page_content.wrapInner("<div class='main-column with-2-sidebars'></div>");
          $('.left-side-column').addClass('with-2-sidebars');
          $('.right-side-column').addClass('with-2-sidebars');
        } else {
          page_content.wrapInner("<div class='main-column'></div>");
        }
        $('.left-side-column').prependTo(page_content);
        $('.right-side-column').appendTo(page_content);
      }
    }
    if (PAGE.hasClass('template-index')) {
      $('.slider').each(function() {
        return new FullscreenSlider($(this).find('.slides'));
      });
      $('.product-slider').each(function() {
        return new ProductSlider($(this));
      });
    }
    if (PAGE.hasClass('template-collection')) {
      new Collection();
    }
    if (PAGE.hasClass('template-article')) {
      pinterest_button = $('.social-share .pinterest');
      first_article_img = $('.article img').first().attr('src');
      pinterest_button.attr('href', pinterest_button.attr('href') + '&media=' + first_article_img);
    }
    if ($('.section--password').length > 0) {
      new Password();
    }
    isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      $('img').addClass('image-scale-hack');
    }
    if (touchevents_exist) {
      $("form.custom .hidden-field").removeClass('hidden-field');
    }
    current_window = '';
    new MediaQueries();
    $('.hide-until-js').show();
    DOC.on('shopify:section:load', function(e) {
      var section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      section_wrapper.css('min-height', '2000px');
      if (section_wrapper.hasClass('section--slideshow')) {
        new FullscreenSlider($(e.target).find('.slides'));
      } else if (section_wrapper.hasClass('section--featured-collection')) {
        new ProductSlider($(e.target).find('.product-slider'));
      } else if (section_wrapper.hasClass('section--header')) {
        setTimeout(function() {
          if ($('.slider').length > 0) {
            return DOC.trigger('header.transparentMenuIsUpdated');
          }
        }, 0);
        new PromoBar($('.promo-bar'));
      } else if (section_wrapper.hasClass('section--products')) {
        DOC.trigger('set-option-selectors');
      }
      return section_wrapper.css('min-height', 'auto');
    });
    DOC.on('shopify:section:unload', function(e) {
      var mask, section_wrapper;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--featured-collection')) {
        return setTimeout((function() {
          if ($('.section--featured-collection').length === 0) {
            return WINDOW.off("resize.ProductSlider");
          }
        }), 0);
      } else if (section_wrapper.hasClass('section--products')) {
        mask = $(".popup-modal-mask");
        $(".size-chart").remove();
        if (mask.is(":visible")) {
          return mask.trigger("click");
        }
      } else if (section_wrapper.hasClass('section--slideshow')) {
        return setTimeout(function() {
          if ($('.slider').length === 0) {
            return DOC.off('header.transparentMenuIsUpdated');
          }
        }, 0);
      }
    });
    DOC.on('shopify:block:select', function(e) {
      var section_wrapper, slide_selected;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        slide_selected = section_wrapper.find('.slide').index(e.target);
        return $(e.target).closest('.owl-carousel').trigger('owl.jumpTo', slide_selected).trigger('owl.stop');
      }
    });
    DOC.on('shopify:section:deselect', function(e) {
      var section_wrapper, should_autoplay, slider;
      section_wrapper = $(e.target).closest('.shopify-section');
      if (section_wrapper.hasClass('section--slideshow')) {
        should_autoplay = section_wrapper.find('.slider').data('autoplay');
        if (should_autoplay === true) {
          slider = section_wrapper.find('.slides');
          return slider.trigger('owl.play', section_wrapper.find('.slider').data('rotateFrequency'));
        }
      }
    });
    theme.utils.loadJsClasses();
    return false;
  });

}).call(this);


// // quantity controls
// $(".js-quantity-control").on(click, function() {
//   console.log("clicked arrow");
// })

// product image slider
$(document).ready(function() {
  $(".js-product-imagesSlider").owlCarousel();
})