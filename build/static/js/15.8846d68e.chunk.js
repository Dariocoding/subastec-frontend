"use strict";(self.webpackChunksubatec=self.webpackChunksubatec||[]).push([[15],{31685:function(e,t,n){var r=n(47313),o=n(47472),i=n(42780),a=n(49081),s=n(46417);function c(e){return e.substring(2).toLowerCase()}t.Z=function(e){var t=e.children,n=e.disableReactTree,u=void 0!==n&&n,p=e.mouseEvent,f=void 0===p?"onClick":p,l=e.onClickAway,d=e.touchEvent,m=void 0===d?"onTouchEnd":d,v=r.useRef(!1),h=r.useRef(null),g=r.useRef(!1),b=r.useRef(!1);r.useEffect((function(){return setTimeout((function(){g.current=!0}),0),function(){g.current=!1}}),[]);var y=(0,o.Z)(t.ref,h),w=(0,i.Z)((function(e){var t=b.current;b.current=!1;var n=(0,a.Z)(h.current);!g.current||!h.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(v.current?v.current=!1:(e.composedPath?e.composedPath().indexOf(h.current)>-1:!n.documentElement.contains(e.target)||h.current.contains(e.target))||!u&&t||l(e))})),x=function(e){return function(n){b.current=!0;var r=t.props[e];r&&r(n)}},O={ref:y};return!1!==m&&(O[m]=x(m)),r.useEffect((function(){if(!1!==m){var e=c(m),t=(0,a.Z)(h.current),n=function(){v.current=!0};return t.addEventListener(e,w),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,w),t.removeEventListener("touchmove",n)}}}),[w,m]),!1!==f&&(O[f]=x(f)),r.useEffect((function(){if(!1!==f){var e=c(f),t=(0,a.Z)(h.current);return t.addEventListener(e,w),function(){t.removeEventListener(e,w)}}}),[w,f]),(0,s.jsx)(r.Fragment,{children:r.cloneElement(t,O)})}},53637:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87462),o=n(43066);function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return(0,o.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}},74146:function(e,t,n){n.d(t,{Z:function(){return Ae}});var r=n(87462),o=n(29439),i=n(63366),a=n(47472),s=n(2678),c=n(49081);function u(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function p(e){return e instanceof u(e).Element||e instanceof Element}function f(e){return e instanceof u(e).HTMLElement||e instanceof HTMLElement}function l(e){return"undefined"!==typeof ShadowRoot&&(e instanceof u(e).ShadowRoot||e instanceof ShadowRoot)}var d=Math.max,m=Math.min,v=Math.round;function h(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(f(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=v(n.width)/a||1),i>0&&(o=v(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function g(e){var t=u(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(e){return e?(e.nodeName||"").toLowerCase():null}function y(e){return((p(e)?e.ownerDocument:e.document)||window.document).documentElement}function w(e){return h(y(e)).left+g(e).scrollLeft}function x(e){return u(e).getComputedStyle(e)}function O(e){var t=x(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function Z(e,t,n){void 0===n&&(n=!1);var r=f(t),o=f(t)&&function(e){var t=e.getBoundingClientRect(),n=v(t.width)/e.offsetWidth||1,r=v(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=y(t),a=h(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==b(t)||O(i))&&(s=function(e){return e!==u(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:g(e);var t}(t)),f(t)?((c=h(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=w(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function T(e){var t=h(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function E(e){return"html"===b(e)?e:e.assignedSlot||e.parentNode||(l(e)?e.host:null)||y(e)}function R(e){return["html","body","#document"].indexOf(b(e))>=0?e.ownerDocument.body:f(e)&&O(e)?e:R(E(e))}function P(e,t){var n;void 0===t&&(t=[]);var r=R(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=u(r),a=o?[i].concat(i.visualViewport||[],O(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(P(E(a)))}function L(e){return["table","td","th"].indexOf(b(e))>=0}function j(e){return f(e)&&"fixed"!==x(e).position?e.offsetParent:null}function k(e){for(var t=u(e),n=j(e);n&&L(n)&&"static"===x(n).position;)n=j(n);return n&&("html"===b(n)||"body"===b(n)&&"static"===x(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&f(e)&&"fixed"===x(e).position)return null;var n=E(e);for(l(n)&&(n=n.host);f(n)&&["html","body"].indexOf(b(n))<0;){var r=x(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var M="top",D="bottom",A="right",C="left",S="auto",W=[M,D,A,C],B="start",H="end",N="viewport",F="popper",I=W.reduce((function(e,t){return e.concat([t+"-"+B,t+"-"+H])}),[]),q=[].concat(W,[S]).reduce((function(e,t){return e.concat([t,t+"-"+B,t+"-"+H])}),[]),V=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function U(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function z(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var X={placement:"bottom",modifiers:[],strategy:"absolute"};function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function _(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?X:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},X,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:p(e)?P(e):e.contextElement?P(e.contextElement):[],popper:P(t)};var f=function(e){var t=U(e);return V.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(Y(t,n)){o.rects={reference:Z(t,k(n),"fixed"===o.options.strategy),popper:T(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,p=void 0===u?{}:u,f=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:f,instance:c})||o)}else o.reset=!1,r=-1}}},update:z((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!Y(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var G={passive:!0};function J(e){return e.split("-")[0]}function K(e){return e.split("-")[1]}function Q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function $(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?J(o):null,a=o?K(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case M:t={x:s,y:n.y-r.height};break;case D:t={x:s,y:n.y+n.height};break;case A:t={x:n.x+n.width,y:c};break;case C:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?Q(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case B:t[u]=t[u]-(n[p]/2-r[p]/2);break;case H:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}var ee={top:"auto",right:"auto",bottom:"auto",left:"auto"};function te(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,l=e.isFixed,d=a.x,m=void 0===d?0:d,h=a.y,g=void 0===h?0:h,b="function"===typeof f?f({x:m,y:g}):{x:m,y:g};m=b.x,g=b.y;var w=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),Z=C,T=M,E=window;if(p){var R=k(n),P="clientHeight",L="clientWidth";if(R===u(n)&&"static"!==x(R=y(n)).position&&"absolute"===s&&(P="scrollHeight",L="scrollWidth"),o===M||(o===C||o===A)&&i===H)T=D,g-=(l&&R===E&&E.visualViewport?E.visualViewport.height:R[P])-r.height,g*=c?1:-1;if(o===C||(o===M||o===D)&&i===H)Z=A,m-=(l&&R===E&&E.visualViewport?E.visualViewport.width:R[L])-r.width,m*=c?1:-1}var j,S=Object.assign({position:s},p&&ee),W=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:v(t*r)/r||0,y:v(n*r)/r||0}}({x:m,y:g}):{x:m,y:g};return m=W.x,g=W.y,c?Object.assign({},S,((j={})[T]=O?"0":"",j[Z]=w?"0":"",j.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+g+"px)":"translate3d("+m+"px, "+g+"px, 0)",j)):Object.assign({},S,((t={})[T]=O?g+"px":"",t[Z]=w?m+"px":"",t.transform="",t))}var ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=q.reduce((function(e,n){return e[n]=function(e,t,n){var r=J(e),o=[C,M].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[C,A].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},re={left:"right",right:"left",bottom:"top",top:"bottom"};function oe(e){return e.replace(/left|right|bottom|top/g,(function(e){return re[e]}))}var ie={start:"end",end:"start"};function ae(e){return e.replace(/start|end/g,(function(e){return ie[e]}))}function se(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&l(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function ce(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ue(e,t){return t===N?ce(function(e){var t=u(e),n=y(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+w(e),y:s}}(e)):p(t)?function(e){var t=h(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ce(function(e){var t,n=y(e),r=g(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=d(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=d(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+w(e),c=-r.scrollTop;return"rtl"===x(o||n).direction&&(s+=d(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(y(e)))}function pe(e,t,n){var r="clippingParents"===t?function(e){var t=P(E(e)),n=["absolute","fixed"].indexOf(x(e).position)>=0&&f(e)?k(e):e;return p(n)?t.filter((function(e){return p(e)&&se(e,n)&&"body"!==b(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ue(e,n);return t.top=d(r.top,t.top),t.right=m(r.right,t.right),t.bottom=m(r.bottom,t.bottom),t.left=d(r.left,t.left),t}),ue(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function le(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function de(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?N:s,u=n.elementContext,f=void 0===u?F:u,l=n.altBoundary,d=void 0!==l&&l,m=n.padding,v=void 0===m?0:m,g=fe("number"!==typeof v?v:le(v,W)),b=f===F?"reference":F,w=e.rects.popper,x=e.elements[d?b:f],O=pe(p(x)?x:x.contextElement||y(e.elements.popper),a,c),Z=h(e.elements.reference),T=$({reference:Z,element:w,strategy:"absolute",placement:o}),E=ce(Object.assign({},w,T)),R=f===F?E:Z,P={top:O.top-R.top+g.top,bottom:R.bottom-O.bottom+g.bottom,left:O.left-R.left+g.left,right:R.right-O.right+g.right},L=e.modifiersData.offset;if(f===F&&L){var j=L[o];Object.keys(P).forEach((function(e){var t=[A,D].indexOf(e)>=0?1:-1,n=[M,D].indexOf(e)>=0?"y":"x";P[e]+=j[n]*t}))}return P}function me(e,t,n){return d(e,m(t,n))}var ve={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,l=n.tether,v=void 0===l||l,h=n.tetherOffset,g=void 0===h?0:h,b=de(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),y=J(t.placement),w=K(t.placement),x=!w,O=Q(y),Z="x"===O?"y":"x",E=t.modifiersData.popperOffsets,R=t.rects.reference,P=t.rects.popper,L="function"===typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,j="number"===typeof L?{mainAxis:L,altAxis:L}:Object.assign({mainAxis:0,altAxis:0},L),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(E){if(i){var H,N="y"===O?M:C,F="y"===O?D:A,I="y"===O?"height":"width",q=E[O],V=q+b[N],U=q-b[F],z=v?-P[I]/2:0,X=w===B?R[I]:P[I],Y=w===B?-P[I]:-R[I],_=t.elements.arrow,G=v&&_?T(_):{width:0,height:0},$=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=$[N],te=$[F],ne=me(0,R[I],G[I]),re=x?R[I]/2-z-ne-ee-j.mainAxis:X-ne-ee-j.mainAxis,oe=x?-R[I]/2+z+ne+te+j.mainAxis:Y+ne+te+j.mainAxis,ie=t.elements.arrow&&k(t.elements.arrow),ae=ie?"y"===O?ie.clientTop||0:ie.clientLeft||0:0,se=null!=(H=null==S?void 0:S[O])?H:0,ce=q+oe-se,ue=me(v?m(V,q+re-se-ae):V,q,v?d(U,ce):U);E[O]=ue,W[O]=ue-q}if(s){var pe,fe="x"===O?M:C,le="x"===O?D:A,ve=E[Z],he="y"===Z?"height":"width",ge=ve+b[fe],be=ve-b[le],ye=-1!==[M,C].indexOf(y),we=null!=(pe=null==S?void 0:S[Z])?pe:0,xe=ye?ge:ve-R[he]-P[he]-we+j.altAxis,Oe=ye?ve+R[he]+P[he]-we-j.altAxis:be,Ze=v&&ye?function(e,t,n){var r=me(e,t,n);return r>n?n:r}(xe,ve,Oe):me(v?xe:ge,ve,v?Oe:be);E[Z]=Ze,W[Z]=Ze-ve}t.modifiersData[r]=W}},requiresIfExists:["offset"]};var he={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=J(n.placement),c=Q(s),u=[C,A].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return fe("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:le(e,W))}(o.padding,n),f=T(i),l="y"===c?M:C,d="y"===c?D:A,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],v=a[c]-n.rects.reference[c],h=k(i),g=h?"y"===c?h.clientHeight||0:h.clientWidth||0:0,b=m/2-v/2,y=p[l],w=g-f[u]-p[d],x=g/2-f[u]/2+b,O=me(y,x,w),Z=c;n.modifiersData[r]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&se(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ge(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[M,A,D,C].some((function(t){return e[t]>=0}))}var ye=_({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=u(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&p.forEach((function(e){e.addEventListener("scroll",n.update,G)})),s&&c.addEventListener("resize",n.update,G),function(){i&&p.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),s&&c.removeEventListener("resize",n.update,G)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=$({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:J(t.placement),variation:K(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,te(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,te(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];f(o)&&b(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});f(r)&&b(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]},ne,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,l=n.altBoundary,d=n.flipVariations,m=void 0===d||d,v=n.allowedAutoPlacements,h=t.options.placement,g=J(h),b=c||(g===h||!m?[oe(h)]:function(e){if(J(e)===S)return[];var t=oe(e);return[ae(e),t,ae(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(J(n)===S?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?q:c,p=K(r),f=p?s?I:I.filter((function(e){return K(e)===p})):W,l=f.filter((function(e){return u.indexOf(e)>=0}));0===l.length&&(l=f);var d=l.reduce((function(t,n){return t[n]=de(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[J(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=y[0],E=0;E<y.length;E++){var R=y[E],P=J(R),L=K(R)===B,j=[M,D].indexOf(P)>=0,k=j?"width":"height",H=de(t,{placement:R,boundary:p,rootBoundary:f,altBoundary:l,padding:u}),N=j?L?A:C:L?D:M;w[k]>x[k]&&(N=oe(N));var F=oe(N),V=[];if(i&&V.push(H[P]<=0),s&&V.push(H[N]<=0,H[F]<=0),V.every((function(e){return e}))){T=R,Z=!1;break}O.set(R,V)}if(Z)for(var U=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},z=m?3:1;z>0;z--){if("break"===U(z))break}t.placement!==T&&(t.modifiersData[r]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ve,he,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=de(t,{elementContext:"reference"}),s=de(t,{altBoundary:!0}),c=ge(a,r),u=ge(s,o,i),p=be(c),f=be(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),we=n(47313),xe=n(12871),Oe=n(46417),Ze=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],Te=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function Ee(e){return"function"===typeof e?e():e}var Re={},Pe=we.forwardRef((function(e,t){var n=e.anchorEl,c=e.children,u=e.direction,p=e.disablePortal,f=e.modifiers,l=e.open,d=e.placement,m=e.popperOptions,v=e.popperRef,h=e.TransitionProps,g=(0,i.Z)(e,Ze),b=we.useRef(null),y=(0,a.Z)(b,t),w=we.useRef(null),x=(0,a.Z)(w,v),O=we.useRef(x);(0,s.Z)((function(){O.current=x}),[x]),we.useImperativeHandle(v,(function(){return w.current}),[]);var Z=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(d,u),T=we.useState(Z),E=(0,o.Z)(T,2),R=E[0],P=E[1];we.useEffect((function(){w.current&&w.current.forceUpdate()})),(0,s.Z)((function(){if(n&&l){Ee(n);var e=[{name:"preventOverflow",options:{altBoundary:p}},{name:"flip",options:{altBoundary:p}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;P(t.placement)}}];null!=f&&(e=e.concat(f)),m&&null!=m.modifiers&&(e=e.concat(m.modifiers));var t=ye(Ee(n),b.current,(0,r.Z)({placement:Z},m,{modifiers:e}));return O.current(t),function(){t.destroy(),O.current(null)}}}),[n,p,f,l,m,Z]);var L={placement:R};return null!==h&&(L.TransitionProps=h),(0,Oe.jsx)("div",(0,r.Z)({ref:y,role:"tooltip"},g,{children:"function"===typeof c?c(L):c}))})),Le=we.forwardRef((function(e,t){var n=e.anchorEl,a=e.children,s=e.container,u=e.direction,p=void 0===u?"ltr":u,f=e.disablePortal,l=void 0!==f&&f,d=e.keepMounted,m=void 0!==d&&d,v=e.modifiers,h=e.open,g=e.placement,b=void 0===g?"bottom":g,y=e.popperOptions,w=void 0===y?Re:y,x=e.popperRef,O=e.style,Z=e.transition,T=void 0!==Z&&Z,E=(0,i.Z)(e,Te),R=we.useState(!0),P=(0,o.Z)(R,2),L=P[0],j=P[1];if(!m&&!h&&(!T||L))return null;var k=s||(n?(0,c.Z)(Ee(n)).body:void 0);return(0,Oe.jsx)(xe.Z,{disablePortal:l,container:k,children:(0,Oe.jsx)(Pe,(0,r.Z)({anchorEl:n,direction:p,disablePortal:l,modifiers:v,ref:t,open:T?!L:h,placement:b,popperOptions:w,popperRef:x},E,{style:(0,r.Z)({position:"fixed",top:0,left:0,display:h||!m||T&&!L?null:"none"},O),TransitionProps:T?{in:h,onEnter:function(){j(!1)},onExited:function(){j(!0)}}:null,children:a}))})})),je=n(37577),ke=n(17592),Me=n(77342),De=(0,ke.ZP)(Le,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ae=we.forwardRef((function(e,t){var n=(0,je.Z)(),o=(0,Me.Z)({props:e,name:"MuiPopper"});return(0,Oe.jsx)(De,(0,r.Z)({direction:null==n?void 0:n.direction},o,{ref:t}))}))},61689:function(e,t,n){n.d(t,{Z:function(){return C}});var r=n(29439),o=n(4942),i=n(63366),a=n(87462),s=n(47313),c=n(83061),u=n(21921),p=n(53637),f=n(17551),l=n(17592),d=n(19860),m=n(77342),v=n(91615),h=n(73365),g=n(74146),b=n(73236),y=n(86983),w=n(17677),x=n(59127),O=n(53800),Z=n(32298);function T(e){return(0,Z.Z)("MuiTooltip",e)}var E=(0,n(77430).Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),R=n(46417),P=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","title","TransitionComponent","TransitionProps"];var L=(0,l.ZP)(g.Z,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var n=e.ownerState;return[t.popper,!n.disableInteractive&&t.popperInteractive,n.arrow&&t.popperArrow,!n.open&&t.popperClose]}})((function(e){var t,n=e.theme,r=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(n.vars||n).zIndex.tooltip,pointerEvents:"none"},!r.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},r.arrow&&(t={},(0,o.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(E.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,o.Z)(t,'&[data-popper-placement*="top"] .'.concat(E.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,o.Z)(t,'&[data-popper-placement*="right"] .'.concat(E.arrow),(0,a.Z)({},r.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,o.Z)(t,'&[data-popper-placement*="left"] .'.concat(E.arrow),(0,a.Z)({},r.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),j=(0,l.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var n=e.ownerState;return[t.tooltip,n.touch&&t.touch,n.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,v.Z)(n.placement.split("-")[0]))]]}})((function(e){var t,n,r=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:r.vars?"rgba(".concat(r.vars.palette.grey.darkChannel," / 0.92)"):(0,f.Fq)(r.palette.grey[700],.92),borderRadius:(r.vars||r).shape.borderRadius,color:(r.vars||r).palette.common.white,fontFamily:r.typography.fontFamily,padding:"4px 8px",fontSize:r.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:r.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:r.typography.pxToRem(14),lineHeight:"".concat((n=16/14,Math.round(1e5*n)/1e5),"em"),fontWeight:r.typography.fontWeightRegular},(t={},(0,o.Z)(t,".".concat(E.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,o.Z)(t,".".concat(E.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,o.Z)(t,".".concat(E.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,o.Z)(t,".".concat(E.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),k=(0,l.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?"rgba(".concat(t.vars.palette.grey.darkChannel," / 0.9)"):(0,f.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),M=!1,D=null;function A(e,t){return function(n){t&&t(n),e(n)}}var C=s.forwardRef((function(e,t){var n,o,f,l,Z,E,C=(0,m.Z)({props:e,name:"MuiTooltip"}),S=C.arrow,W=void 0!==S&&S,B=C.children,H=C.components,N=void 0===H?{}:H,F=C.componentsProps,I=void 0===F?{}:F,q=C.describeChild,V=void 0!==q&&q,U=C.disableFocusListener,z=void 0!==U&&U,X=C.disableHoverListener,Y=void 0!==X&&X,_=C.disableInteractive,G=void 0!==_&&_,J=C.disableTouchListener,K=void 0!==J&&J,Q=C.enterDelay,$=void 0===Q?100:Q,ee=C.enterNextDelay,te=void 0===ee?0:ee,ne=C.enterTouchDelay,re=void 0===ne?700:ne,oe=C.followCursor,ie=void 0!==oe&&oe,ae=C.id,se=C.leaveDelay,ce=void 0===se?0:se,ue=C.leaveTouchDelay,pe=void 0===ue?1500:ue,fe=C.onClose,le=C.onOpen,de=C.open,me=C.placement,ve=void 0===me?"bottom":me,he=C.PopperComponent,ge=C.PopperProps,be=void 0===ge?{}:ge,ye=C.title,we=C.TransitionComponent,xe=void 0===we?h.Z:we,Oe=C.TransitionProps,Ze=(0,i.Z)(C,P),Te=(0,d.Z)(),Ee="rtl"===Te.direction,Re=s.useState(),Pe=(0,r.Z)(Re,2),Le=Pe[0],je=Pe[1],ke=s.useState(null),Me=(0,r.Z)(ke,2),De=Me[0],Ae=Me[1],Ce=s.useRef(!1),Se=G||ie,We=s.useRef(),Be=s.useRef(),He=s.useRef(),Ne=s.useRef(),Fe=(0,O.Z)({controlled:de,default:!1,name:"Tooltip",state:"open"}),Ie=(0,r.Z)(Fe,2),qe=Ie[0],Ve=Ie[1],Ue=qe,ze=(0,w.Z)(ae),Xe=s.useRef(),Ye=s.useCallback((function(){void 0!==Xe.current&&(document.body.style.WebkitUserSelect=Xe.current,Xe.current=void 0),clearTimeout(Ne.current)}),[]);s.useEffect((function(){return function(){clearTimeout(We.current),clearTimeout(Be.current),clearTimeout(He.current),Ye()}}),[Ye]);var _e=function(e){clearTimeout(D),M=!0,Ve(!0),le&&!Ue&&le(e)},Ge=(0,b.Z)((function(e){clearTimeout(D),D=setTimeout((function(){M=!1}),800+ce),Ve(!1),fe&&Ue&&fe(e),clearTimeout(We.current),We.current=setTimeout((function(){Ce.current=!1}),Te.transitions.duration.shortest)})),Je=function(e){Ce.current&&"touchstart"!==e.type||(Le&&Le.removeAttribute("title"),clearTimeout(Be.current),clearTimeout(He.current),$||M&&te?Be.current=setTimeout((function(){_e(e)}),M?te:$):_e(e))},Ke=function(e){clearTimeout(Be.current),clearTimeout(He.current),He.current=setTimeout((function(){Ge(e)}),ce)},Qe=(0,x.Z)(),$e=Qe.isFocusVisibleRef,et=Qe.onBlur,tt=Qe.onFocus,nt=Qe.ref,rt=s.useState(!1),ot=(0,r.Z)(rt,2)[1],it=function(e){et(e),!1===$e.current&&(ot(!1),Ke(e))},at=function(e){Le||je(e.currentTarget),tt(e),!0===$e.current&&(ot(!0),Je(e))},st=function(e){Ce.current=!0;var t=B.props;t.onTouchStart&&t.onTouchStart(e)},ct=Je,ut=Ke;s.useEffect((function(){if(Ue)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||Ge(e)}}),[Ge,Ue]);var pt=(0,y.Z)(je,t),ft=(0,y.Z)(nt,pt),lt=(0,y.Z)(B.ref,ft);""===ye&&(Ue=!1);var dt=s.useRef({x:0,y:0}),mt=s.useRef(),vt={},ht="string"===typeof ye;V?(vt.title=Ue||!ht||Y?null:ye,vt["aria-describedby"]=Ue?ze:null):(vt["aria-label"]=ht?ye:null,vt["aria-labelledby"]=Ue&&!ht?ze:null);var gt=(0,a.Z)({},vt,Ze,B.props,{className:(0,c.Z)(Ze.className,B.props.className),onTouchStart:st,ref:lt},ie?{onMouseMove:function(e){var t=B.props;t.onMouseMove&&t.onMouseMove(e),dt.current={x:e.clientX,y:e.clientY},mt.current&&mt.current.update()}}:{});var bt={};K||(gt.onTouchStart=function(e){st(e),clearTimeout(He.current),clearTimeout(We.current),Ye(),Xe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ne.current=setTimeout((function(){document.body.style.WebkitUserSelect=Xe.current,Je(e)}),re)},gt.onTouchEnd=function(e){B.props.onTouchEnd&&B.props.onTouchEnd(e),Ye(),clearTimeout(He.current),He.current=setTimeout((function(){Ge(e)}),pe)}),Y||(gt.onMouseOver=A(ct,gt.onMouseOver),gt.onMouseLeave=A(ut,gt.onMouseLeave),Se||(bt.onMouseOver=ct,bt.onMouseLeave=ut)),z||(gt.onFocus=A(at,gt.onFocus),gt.onBlur=A(it,gt.onBlur),Se||(bt.onFocus=at,bt.onBlur=it));var yt=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(De),options:{element:De,padding:4}}];return null!=(e=be.popperOptions)&&e.modifiers&&(t=t.concat(be.popperOptions.modifiers)),(0,a.Z)({},be.popperOptions,{modifiers:t})}),[De,be]),wt=(0,a.Z)({},C,{isRtl:Ee,arrow:W,disableInteractive:Se,placement:ve,PopperComponentProp:he,touch:Ce.current}),xt=function(e){var t=e.classes,n=e.disableInteractive,r=e.arrow,o=e.touch,i=e.placement,a={popper:["popper",!n&&"popperInteractive",r&&"popperArrow"],tooltip:["tooltip",r&&"tooltipArrow",o&&"touch","tooltipPlacement".concat((0,v.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,u.Z)(a,T,t)}(wt),Ot=null!=(n=N.Popper)?n:L,Zt=null!=(o=null!=(f=N.Transition)?f:xe)?o:h.Z,Tt=null!=(l=N.Tooltip)?l:j,Et=null!=(Z=N.Arrow)?Z:k,Rt=(0,p.Z)(Ot,(0,a.Z)({},be,I.popper),wt),Pt=(0,p.Z)(Zt,(0,a.Z)({},Oe,I.transition),wt),Lt=(0,p.Z)(Tt,(0,a.Z)({},I.tooltip),wt),jt=(0,p.Z)(Et,(0,a.Z)({},I.arrow),wt);return(0,R.jsxs)(s.Fragment,{children:[s.cloneElement(B,gt),(0,R.jsx)(Ot,(0,a.Z)({as:null!=he?he:g.Z,placement:ve,anchorEl:ie?{getBoundingClientRect:function(){return{top:dt.current.y,left:dt.current.x,right:dt.current.x,bottom:dt.current.y,width:0,height:0}}}:Le,popperRef:mt,open:!!Le&&Ue,id:ze,transition:!0},bt,Rt,{className:(0,c.Z)(xt.popper,null==be?void 0:be.className,null==(E=I.popper)?void 0:E.className),popperOptions:yt,children:function(e){var t,n,r=e.TransitionProps;return(0,R.jsx)(Zt,(0,a.Z)({timeout:Te.transitions.duration.shorter},r,Pt,{children:(0,R.jsxs)(Tt,(0,a.Z)({},Lt,{className:(0,c.Z)(xt.tooltip,null==(t=I.tooltip)?void 0:t.className),children:[ye,W?(0,R.jsx)(Et,(0,a.Z)({},jt,{className:(0,c.Z)(xt.arrow,null==(n=I.arrow)?void 0:n.className),ref:Ae})):null]}))}))}}))]})}))},17677:function(e,t,n){var r=n(33362);t.Z=r.Z}}]);