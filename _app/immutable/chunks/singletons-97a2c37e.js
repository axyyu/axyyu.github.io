import{w as f}from"./index-a26433b7.js";let p="",_="";function I(t){p=t.base,_=t.assets||p}let v="";function k(t){v=t}const y="sveltekit:scroll",A="sveltekit:index",b={tap:1,hover:2,viewport:3,eager:4,off:-1};function S(t){let a=t.baseURI;if(!a){const e=t.getElementsByTagName("base");a=e.length?e[0].href:t.URL}return a}function T(){return{x:pageXOffset,y:pageYOffset}}function u(t,a){return t.getAttribute(`data-sveltekit-${a}`)}const g={...b,"":b.hover};function U(t,a){var d;let e,o=null,s=null,r=null,n=null;for(;t!==document.documentElement;)!e&&t.nodeName.toUpperCase()==="A"&&(e=t),e&&(s===null&&(s=u(t,"preload-code")),r===null&&(r=u(t,"preload-data")),o===null&&(o=u(t,"noscroll")),n===null&&(n=u(t,"reload"))),t=(d=t.assignedSlot)!=null?d:t.parentNode,t.nodeType===11&&(t=t.host);let l;try{l=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const i={preload_code:g[s!=null?s:"off"],preload_data:g[r!=null?r:"off"],noscroll:o==="off"?!1:o===""?!0:null,reload:n==="off"?!1:n===""?!0:null},c=e?{rel_external:(e.getAttribute("rel")||"").split(/\s+/).includes("external"),download:e.hasAttribute("download"),target:!!(e instanceof SVGAElement?e.target.baseVal:e.target)}:{},w=!l||R(l,a)||i.reload||c.rel_external||c.target||c.download;return{a:e,url:l,options:i,external:w,has:c}}function h(t){const a=f(t);let e=!0;function o(){e=!0,a.update(n=>n)}function s(n){e=!1,a.set(n)}function r(n){let l;return a.subscribe(i=>{(l===void 0||e&&i!==l)&&n(l=i)})}return{notify:o,set:s,subscribe:r}}function E(){const{set:t,subscribe:a}=f(!1);let e;async function o(){clearTimeout(e);const s=await fetch(`${_}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(s.ok){const n=(await s.json()).version!==v;return n&&(t(!0),clearTimeout(e)),n}else throw new Error(`Version check failed: ${s.status}`)}return{subscribe:a,check:o}}function R(t,a){return t.origin!==location.origin||!t.pathname.startsWith(a)}function L(t){t.client}const O={url:h({}),page:h({}),navigating:f(null),updated:E()};export{A as I,b as P,y as S,T as a,I as b,L as c,k as d,U as f,S as g,R as i,O as s};
