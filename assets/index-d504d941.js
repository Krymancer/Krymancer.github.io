(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();const k={};function Ee(e){k.context=e}const Ne=(e,t)=>e===t,Z=Symbol("solid-proxy"),Te=Symbol("solid-track"),U={equals:Ne};let me=be;const _=1,V=2,pe={owned:null,cleanups:null,context:null,owner:null};var p=null;let N=null,h=null,v=null,A=null,J=0;function q(e,t){const n=h,i=p,l=e.length===0,s=l?pe:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},o=l?e:()=>e(()=>O(()=>G(s)));p=s,h=null;try{return j(o,!0)}finally{h=n,p=i}}function ve(e,t){t=t?Object.assign({},U,t):U;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=l=>(typeof l=="function"&&(l=l(n.value)),xe(n,l));return[ye.bind(n),i]}function C(e,t,n){const i=ne(e,t,!1,_);z(i)}function Ie(e,t,n){me=Oe;const i=ne(e,t,!1,_);i.user=!0,A?A.push(i):z(i)}function T(e,t,n){n=n?Object.assign({},U,n):U;const i=ne(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,z(i),ye.bind(i)}function O(e){if(h===null)return e();const t=h;h=null;try{return e()}finally{h=t}}function Le(e){return p===null||(p.cleanups===null?p.cleanups=[e]:p.cleanups.push(e)),e}function De(e){const t=T(e),n=T(()=>ee(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function ye(){const e=N;if(this.sources&&(this.state||e))if(this.state===_||e)z(this);else{const t=v;v=null,j(()=>K(this),!1),v=t}if(h){const t=this.observers?this.observers.length:0;h.sources?(h.sources.push(this),h.sourceSlots.push(t)):(h.sources=[this],h.sourceSlots=[t]),this.observers?(this.observers.push(h),this.observerSlots.push(h.sources.length-1)):(this.observers=[h],this.observerSlots=[h.sources.length-1])}return this.value}function xe(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&j(()=>{for(let l=0;l<e.observers.length;l+=1){const s=e.observers[l],o=N&&N.running;o&&N.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?v.push(s):A.push(s),s.observers&&we(s)),o||(s.state=_)}if(v.length>1e6)throw v=[],new Error},!1)),t}function z(e){if(!e.fn)return;G(e);const t=p,n=h,i=J;h=p=e,Pe(e,e.value,i),h=n,p=t}function Pe(e,t,n){let i;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=_,e.owned&&e.owned.forEach(G),e.owned=null),e.updatedAt=n+1,ke(l)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?xe(e,i):e.value=i,e.updatedAt=n)}function ne(e,t,n,i=_,l){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:p,context:null,pure:n};return p===null||p!==pe&&(p.owned?p.owned.push(s):p.owned=[s]),s}function Q(e){const t=N;if(e.state===0||t)return;if(e.state===V||t)return K(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let i=n.length-1;i>=0;i--)if(e=n[i],e.state===_||t)z(e);else if(e.state===V||t){const l=v;v=null,j(()=>K(e,n[0]),!1),v=l}}function j(e,t){if(v)return e();let n=!1;t||(v=[]),A?n=!0:A=[],J++;try{const i=e();return Me(n),i}catch(i){n||(A=null),v=null,ke(i)}}function Me(e){if(v&&(be(v),v=null),e)return;const t=A;A=null,t.length&&j(()=>me(t),!1)}function be(e){for(let t=0;t<e.length;t++)Q(e[t])}function Oe(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:Q(i)}for(k.context&&Ee(),t=0;t<n;t++)Q(e[t])}function K(e,t){const n=N;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===_||n?l!==t&&(!l.updatedAt||l.updatedAt<J)&&Q(l):(l.state===V||n)&&K(l,t))}}function we(e){const t=N;for(let n=0;n<e.observers.length;n+=1){const i=e.observers[n];(!i.state||t)&&(i.state=V,i.pure?v.push(i):A.push(i),i.observers&&we(i))}}function G(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),l=n.observers;if(l&&l.length){const s=l.pop(),o=n.observerSlots.pop();i<l.length&&(s.sourceSlots[o]=i,l[i]=s,n.observerSlots[i]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)G(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ze(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function ke(e){throw e=ze(e),e}function ee(e){if(typeof e=="function"&&!e.length)return ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ee(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}const je=Symbol("fallback");function re(e){for(let t=0;t<e.length;t++)e[t]()}function Be(e,t,n={}){let i=[],l=[],s=[],o=0,r=t.length>1?[]:null;return Le(()=>re(s)),()=>{let u=e()||[],c,a;return u[Te],O(()=>{let m=u.length,x,E,P,B,F,b,w,$,I;if(m===0)o!==0&&(re(s),s=[],i=[],l=[],o=0,r&&(r=[])),n.fallback&&(i=[je],l[0]=q(_e=>(s[0]=_e,n.fallback())),o=1);else if(o===0){for(l=new Array(m),a=0;a<m;a++)i[a]=u[a],l[a]=q(y);o=m}else{for(P=new Array(m),B=new Array(m),r&&(F=new Array(m)),b=0,w=Math.min(o,m);b<w&&i[b]===u[b];b++);for(w=o-1,$=m-1;w>=b&&$>=b&&i[w]===u[$];w--,$--)P[$]=l[w],B[$]=s[w],r&&(F[$]=r[w]);for(x=new Map,E=new Array($+1),a=$;a>=b;a--)I=u[a],c=x.get(I),E[a]=c===void 0?-1:c,x.set(I,a);for(c=b;c<=w;c++)I=i[c],a=x.get(I),a!==void 0&&a!==-1?(P[a]=l[c],B[a]=s[c],r&&(F[a]=r[c]),a=E[a],x.set(I,a)):s[c]();for(a=b;a<m;a++)a in P?(l[a]=P[a],s[a]=B[a],r&&(r[a]=F[a],r[a](a))):l[a]=q(y);l=l.slice(0,o=m),i=u.slice(0)}return l});function y(m){if(s[a]=m,r){const[x,E]=ve(a);return r[a]=E,t(u[a],x)}return t(u[a])}}}function f(e,t){return O(()=>e(t||{}))}function R(){return!0}const Fe={get(e,t,n){return t===Z?n:e.get(t)},has(e,t){return t===Z?!0:e.has(t)},set:R,deleteProperty:R,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:R,deleteProperty:R}},ownKeys(e){return e.keys()}};function W(e){return(e=typeof e=="function"?e():e)?e:{}}function Re(...e){let t=!1;for(let i=0;i<e.length;i++){const l=e[i];t=t||!!l&&Z in l,e[i]=typeof l=="function"?(t=!0,T(l)):l}if(t)return new Proxy({get(i){for(let l=e.length-1;l>=0;l--){const s=W(e[l])[i];if(s!==void 0)return s}},has(i){for(let l=e.length-1;l>=0;l--)if(i in W(e[l]))return!0;return!1},keys(){const i=[];for(let l=0;l<e.length;l++)i.push(...Object.keys(W(e[l])));return[...new Set(i)]}},Fe);const n={};for(let i=e.length-1;i>=0;i--)if(e[i]){const l=Object.getOwnPropertyDescriptors(e[i]);for(const s in l)s in n||Object.defineProperty(n,s,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const r=(e[o]||{})[s];if(r!==void 0)return r}}})}return n}function X(e){const t="fallback"in e&&{fallback:()=>e.fallback};return T(Be(()=>e.each,e.children,t||void 0))}function He(e){let t=!1,n=!1;const i=(o,r)=>o[0]===r[0]&&(t?o[1]===r[1]:!o[1]==!r[1])&&o[2]===r[2],l=De(()=>e.children),s=T(()=>{let o=l();Array.isArray(o)||(o=[o]);for(let r=0;r<o.length;r++){const u=o[r].when;if(u)return n=!!o[r].keyed,[r,u,o[r]]}return[-1]},void 0,{equals:i});return T(()=>{const[o,r,u]=s();if(o<0)return e.fallback;const c=u.children,a=typeof c=="function"&&c.length>0;return t=n||a,a?O(()=>c(r)):c},void 0,void 0)}function Y(e){return e}const qe=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ue=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...qe]),Ve=new Set(["innerHTML","textContent","innerText","children"]),Qe=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),oe=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ke=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Je={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ge(e,t,n){let i=n.length,l=t.length,s=i,o=0,r=0,u=t[l-1].nextSibling,c=null;for(;o<l||r<s;){if(t[o]===n[r]){o++,r++;continue}for(;t[l-1]===n[s-1];)l--,s--;if(l===o){const a=s<i?r?n[r-1].nextSibling:n[s-r]:u;for(;r<s;)e.insertBefore(n[r++],a)}else if(s===r)for(;o<l;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[r]===t[l-1]){const a=t[--l].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--s],a),t[l]=n[s]}else{if(!c){c=new Map;let y=r;for(;y<s;)c.set(n[y],y++)}const a=c.get(t[o]);if(a!=null)if(r<a&&a<s){let y=o,m=1,x;for(;++y<l&&y<s&&!((x=c.get(t[y]))==null||x!==a+m);)m++;if(m>a-r){const E=t[o];for(;r<a;)e.insertBefore(n[r++],E)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const ae="_$DX_DELEGATE";function Xe(e,t,n,i={}){let l;return q(s=>{l=s,t===document?e():d(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{l(),t.textContent=""}}function g(e,t,n){const i=document.createElement("template");if(i.innerHTML=e,t&&i.innerHTML.split("<").length-1!==t)throw`The browser resolved template HTML does not match JSX input:
${i.innerHTML}

${e}. Is your HTML properly formed?`;let l=i.content.firstChild;return n&&(l=l.firstChild),l}function ie(e,t=window.document){const n=t[ae]||(t[ae]=new Set);for(let i=0,l=e.length;i<l;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,nt))}}function S(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function We(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function $e(e,t){t==null?e.removeAttribute("class"):e.className=t}function M(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const l=n[0];e.addEventListener(t,n[0]=s=>l.call(e,n[1],s))}else e.addEventListener(t,n)}function Ye(e,t,n={}){const i=Object.keys(t||{}),l=Object.keys(n);let s,o;for(s=0,o=l.length;s<o;s++){const r=l[s];!r||r==="undefined"||t[r]||(ce(e,r,!1),delete n[r])}for(s=0,o=i.length;s<o;s++){const r=i[s],u=!!t[r];!r||r==="undefined"||n[r]===u||!u||(ce(e,r,!0),n[r]=u)}return n}function Ae(e,t,n){if(!t)return n?S(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let l,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)l=t[s],l!==n[s]&&(i.setProperty(s,l),n[s]=l);return n}function Ze(e,t={},n,i){const l={};return i||C(()=>l.children=D(e,t.children,l.children)),C(()=>t.ref&&t.ref(e)),C(()=>et(e,t,n,!0,l,!0)),l}function d(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return D(e,t,i,n);C(l=>D(e,t(),l,n),i)}function et(e,t,n,i,l={},s=!1){t||(t={});for(const o in l)if(!(o in t)){if(o==="children")continue;l[o]=ue(e,o,null,l[o],n,s)}for(const o in t){if(o==="children"){i||D(e,t.children);continue}const r=t[o];l[o]=ue(e,o,r,l[o],n,s)}}function tt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ce(e,t,n){const i=t.trim().split(/\s+/);for(let l=0,s=i.length;l<s;l++)e.classList.toggle(i[l],n)}function ue(e,t,n,i,l,s){let o,r,u;if(t==="style")return Ae(e,n,i);if(t==="classList")return Ye(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);i&&e.removeEventListener(c,i),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);i&&e.removeEventListener(c,i,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),a=Ke.has(c);if(!a&&i){const y=Array.isArray(i)?i[0]:i;e.removeEventListener(c,y)}(a||n)&&(M(e,c,n,a),a&&ie([c]))}else if((u=Ve.has(t))||!l&&(oe[t]||(r=Ue.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?$e(e,n):o&&!r&&!u?e[tt(t)]=n:e[oe[t]||t]=n;else{const c=l&&t.indexOf(":")>-1&&Je[t.split(":")[0]];c?We(e,c,t,n):S(e,Qe[t]||t,n)}return n}function nt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),k.registry&&!k.done&&(k.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>{for(;i&&i.nodeType!==8&&i.nodeValue!=="pl-"+e;){let l=i.nextSibling;i.remove(),i=l}i&&i.remove()}));n;){const i=n[t];if(i&&!n.disabled){const l=n[`${t}Data`];if(l!==void 0?i.call(n,l,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function D(e,t,n,i,l){for(k.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(k.context)return n;if(s==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=L(e,n,i,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(k.context)return n;n=L(e,n,i)}else{if(s==="function")return C(()=>{let r=t();for(;typeof r=="function";)r=r();n=D(e,r,n,i)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(te(r,t,n,l))return C(()=>n=D(e,r,n,i,!0)),()=>n;if(k.context){if(!r.length)return n;for(let c=0;c<r.length;c++)if(r[c].parentNode)return n=r}if(r.length===0){if(n=L(e,n,i),o)return n}else u?n.length===0?de(e,r,i):Ge(e,n,r):(n&&L(e),de(e,r));n=r}else if(t instanceof Node){if(k.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=L(e,n,i,t);L(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function te(e,t,n,i){let l=!1;for(let s=0,o=t.length;s<o;s++){let r=t[s],u=n&&n[s];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))l=te(e,r,u)||l;else if(typeof r=="function")if(i){for(;typeof r=="function";)r=r();l=te(e,Array.isArray(r)?r:[r],Array.isArray(u)?u:[u])||l}else e.push(r),l=!0;else{const c=String(r);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return l}function de(e,t,n=null){for(let i=0,l=t.length;i<l;i++)e.insertBefore(t[i],n)}function L(e,t,n,i){if(n===void 0)return e.textContent="";const l=i||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(l!==r){const u=r.parentNode===e;!s&&!o?u?e.replaceChild(l,r):e.insertBefore(l,n):u&&r.remove()}else s=!0}}else e.insertBefore(l,n);return[l]}const it=!1;const lt=g('<div class="bg-background-light dark:bg-background-dark "><div class="items-center justify-center h-full w-full lg:w-[1000px] m-auto"></div></div>',4),st=e=>(()=>{const t=lt.cloneNode(!0),n=t.firstChild;return d(n,()=>e.children),t})(),rt=g('<div class="my-5 px-5 flex flex-col justify-between lg:flex-row "></div>',2),ot=e=>(()=>{const t=rt.cloneNode(!0);return d(t,()=>e.children),t})(),at=g('<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',2),ct=g("<title></title>",2);function le(e,t){const n=Re(e.a,t);return(()=>{const i=at.cloneNode(!0);return Ze(i,n,!0,!0),d(i,()=>it,null),d(i,(()=>{const l=T(()=>!!t.title,!0);return()=>l()&&(()=>{const s=ct.cloneNode(!0);return d(s,()=>t.title),s})()})(),null),C(l=>{const s=e.a.stroke,o={...t.style,overflow:"visible",color:t.color||"currentColor"},r=t.size||"1em",u=t.size||"1em",c=e.c;return s!==l._v$&&S(i,"stroke",l._v$=s),l._v$2=Ae(i,o,l._v$2),r!==l._v$3&&S(i,"height",l._v$3=r),u!==l._v$4&&S(i,"width",l._v$4=u),c!==l._v$5&&(i.innerHTML=l._v$5=c),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),i})()}function Ce(e){return le({a:{fill:"currentColor",viewBox:"0 0 16 16"},c:'<path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z"/>'},e)}const ut="/assets/profile-d3271b42.png",dt=g('<div class="flex items-center gap-5 p-2"><div class="flex flex-col gap-1 justify-end"><div class="text-text-light dark:text-text-dark font-bold leading-[14px]">Júnior Nascimento, 22</div><div class="text-text-light dark:text-text-dark leading-[14px] self-end">FullStack Developer</div></div><img class="w-[50px] h-[50px] bg-background-dark dark:bg-background-light rounded-full" alt="Profile"></div>',9),ft=()=>(()=>{const e=dt.cloneNode(!0),t=e.firstChild,n=t.nextSibling;return S(n,"src",ut),e})(),gt=g('<div class="flex items-center"><button id="theme-toggle" type="button" class="text-text-light hover:bg-background-dark bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)] hover:text-text-dark dark:hover:bg-background-light rounded-full p-2"><svg id="theme-toggle-dark-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg><svg id="theme-toggle-light-icon" width="20" height="20" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></div>',12),ht=e=>(()=>{const t=gt.cloneNode(!0),n=t.firstChild,i=n.firstChild,l=i.nextSibling;return M(n,"click",e.onClick,!0),C(s=>{const o=`${e.theme!=="light"?"hidden":""}`,r=`${e.theme!=="dark"?"hidden":"text-text-dark"}`;return o!==s._v$&&S(i,"class",s._v$=o),r!==s._v$2&&S(l,"class",s._v$2=r),s},{_v$:void 0,_v$2:void 0}),t})();ie(["click"]);const mt=g('<div class="flex justify-between p-5 pt-1 pb-1 lg:w-full"><div class="gap-5 items-center hidden lg:visible lg:flex"><div class="flex items-center text-text-light dark:text-text-dark">(88) 9 9630-2439<a href="mailto:junior.nascm@gmail.com" class="underline">junior.nascm@gmail.com</a></div></div><div class="flex gap-1"></div></div>',10),pt=e=>(()=>{const t=mt.cloneNode(!0),n=t.firstChild,i=n.firstChild,l=i.firstChild,s=l.nextSibling,o=n.nextSibling;return d(i,f(Ce,{}),s),d(o,f(ht,{get theme(){return e.theme},get onClick(){return e.toggleTheme}}),null),d(o,f(ft,{}),null),t})(),vt=g('<div class="w-full flex justify-center"><div class="h-[1px] w-[96%] bg-border-light dark:bg-border-dark"></div></div>',4),fe=()=>vt.cloneNode(!0);function yt(e){return le({a:{viewBox:"0 0 1024 1024"},c:'<path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"/>'},e)}function xt(e){return le({a:{viewBox:"0 0 1024 1024"},c:'<path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"/>'},e)}const bt=g('<button class="bg-green-default hover:bg-green-hover shadow-githubButton p-5 rounded-[12px] h-[54px] font-bold flex flex-row items-center gap-2"></button>',2),wt=g('<button class="bg-blue-default hover:bg-blue-hover shadow-linkedinButton p-5 rounded-[12px] h-[54px] font-bold flex flex-row items-center gap-2"></button>',2),kt=g('<button class="bg-purple-default hover:bg-purple-hover shadow-defaultButton text-text-light dark:text-text-light p-5 rounded-[12px] h-[54px] font-bold flex flex-row items-center gap-2"></button>',2),ge=e=>f(He,{fallback:null,get children(){return[f(Y,{get when(){return e.github},get children(){const t=bt.cloneNode(!0);return M(t,"click",e.onClick,!0),d(t,f(xt,{}),null),d(t,()=>e.text,null),t}}),f(Y,{get when(){return e.linkedin},get children(){const t=wt.cloneNode(!0);return M(t,"click",e.onClick,!0),d(t,f(yt,{}),null),d(t,()=>e.text,null),t}}),f(Y,{get when(){return e.default},get children(){const t=kt.cloneNode(!0);return M(t,"click",e.onClick,!0),d(t,()=>e.text),t}})]}});ie(["click"]);const $t=g(`<div class="flex flex-col pb-3"><div class="text-4xl text-text-light dark:text-text-dark">Hi, I'm Júnior!</div><div class="mb-5 mt-3 text-text-light dark:text-text-dark">Passionate developer fascinated by science and technology, combining both to create innovative solutions that positively impact the world. Experienced in programming and up-to-date with latest advancements in science and technology. Constantly pushing boundaries, exploring new ideas and opportunities. Excited about the future and eager to be part of upcoming advancements.</div><div class="flex gap-5"></div></div>`,8),At=()=>{function e(){window.open("https://github.com/krymancer","_blank")}function t(){window.open("https://linkedin.com/in/junior-nascm","_blank")}return(()=>{const n=$t.cloneNode(!0),i=n.firstChild,l=i.nextSibling,s=l.nextSibling;return d(s,f(ge,{github:!0,text:"Github",onClick:e}),null),d(s,f(ge,{linkedin:!0,text:"Linkedin",onClick:t}),null),n})()},Ct=g('<div class="pb-5"><div class="text-xl font-bold text-text-light dark:text-text-dark"></div><div class="flex flex-col text-md font-thin text-lightText-light dark:text-lightText-dark"><span></span><div class="flex flex-row gap-2"><span class="flex flex-row gap-1 items-center"></span><span class="flex flex-row gap-1 items-center"></span></div></div><div class="flex flex-col pt-3"></div></div>',16),St=g('<p class="text-text-light dark:text-text-dark text-md pb-2 font-normal"></p>',2),Se=e=>(()=>{const t=Ct.cloneNode(!0),n=t.firstChild,i=n.nextSibling,l=i.firstChild,s=l.nextSibling,o=s.firstChild,r=o.nextSibling,u=i.nextSibling;return d(n,()=>`${e.title} - ${e.title}`),d(l,()=>e.company),d(o,()=>e.location),d(r,f(Ce,{}),null),d(r,()=>`${e.startDate} - ${e.endDate}`,null),d(u,f(X,{get each(){return e.description},children:(c,a)=>(()=>{const y=St.cloneNode(!0);return d(y,c),y})()})),t})(),_t=g('<div class="border-border-light dark:border-border-dark border-2 rounded-[12px] p-[20px]"><div class="text-3xl font-bold text-text-light dark:text-text-dark uppercase mb-1"></div><div class=""></div></div>',6),se=e=>(()=>{const t=_t.cloneNode(!0),n=t.firstChild,i=n.nextSibling;return d(n,()=>e.title),d(i,()=>e.children),t})(),Et=["FullStack development","Cloud computing","DevOps","IT automation"],Nt=["Git","Docker","Linux","AWS/Azure Cloud","Database Management"],Tt=["Javascript/Typescript","C#","C/C++","Rust","Python","Java","Kotlin","Elixir","Haskell"],It=["Portuguese - Native","English - Fluent"],Lt=[{type:"Fulltime",title:"Fullstack Developer",company:"Alvarez & Marsal (Outsourced from Stefanini)",location:"Remote",description:["As a software developer at Alvarez & Marsal, I am responsible for designing, developing, and maintaining web applications and APIs using C# ASP.NET, SQL Server, and .NET Core.","My day-to-day tasks include collaborating with other developers, designers, and stakeholders to gather requirements, design software solutions, and write server-side code for web applications and RESTful APIs. I also use SQL Server to design and develop database schemas, write queries and stored procedures to retrieve and manipulate data, and work with third-party services to integrate data into our applications.","Additionally, I have experience implementing security features to protect sensitive data and testing software to ensure quality and reliability."],startDate:"Jan 2023",endDate:"Present"},{type:"Fulltime",title:"Fullstack Developer",company:"Raizen (Outsourced from Stefanini)",location:"Remote",description:["As a full stack developer at Raizen, I was responsible for developing and maintaining web applications and APIs using Angular for the frontend, .NET Core for the backend, SQL Server as the database, and Azure for DevOps. In addition, I have experience developing serverless applications using Azure Functions.","My day-to-day tasks include collaborating with cross-functional teams to gather requirements, design solutions, and implement software features. I work closely with designers to create responsive and user-friendly interfaces using Angular, and I write server-side code using .NET Core to create RESTful APIs and integrate with SQL Server. Additionally, I use Azure DevOps to manage our development pipeline, automate deployments, and implement continuous integration and delivery practices.","I have experience developing serverless applications using Azure Functions to implement background processing and handle asynchronous tasks. I also perform regular maintenance tasks such as monitoring application performance, debugging issues, and optimizing code to ensure optimal performance.","Overall, my role at Raizen requires strong technical skills in Angular, .NET Core, SQL Server, and Azure, as well as the ability to work collaboratively and manage projects using agile development methodologies"],startDate:"Mar 2022",endDate:"Dez 2022"},{type:"Internship",title:"Backend Developer",company:"Dell Lead",location:"Remote",description:["As a backend lead developer at Dell, I was responsible for developing RESTful APIs using C# and SQL Server. My day-to-day tasks include collaborating with other developers and stakeholders to gather requirements, design software solutions, and write server-side code using C# to create scalable and robust RESTful APIs. I also use SQL Server to design and develop database schemas, write queries and stored procedures to retrieve and manipulate data, and ensure data consistency and integrity.","In addition to writing code, I also have experience leading a team of developers, managing project timelines, and implementing software development best practices. I work closely with other leads and project managers to ensure that our backend APIs are integrated effectively with frontend technologies and that our development processes are optimized for efficiency and quality.","Throughout my time at Dell, I have consistently delivered high-quality software solutions that meet or exceed stakeholder expectations. I am committed to staying up-to-date with the latest industry trends and technologies, and I am always looking for ways to improve our backend development processes and drive innovation."],startDate:"Nov 2021",endDate:"Mar 2022"},{type:"Fulltime",title:"Frontend Developer",company:"Dell Lead",location:"Remote",description:["As a frontend developer at XYZ Company, I am responsible for designing, developing, and maintaining web applications using React and consuming RESTful APIs. My day-to-day tasks include collaborating with designers and other developers to gather requirements, design software solutions, and create responsive and user-friendly interfaces using React. I also have experience working with Redux to manage application state and implement complex data flows.",,"In addition to frontend development, I have experience consuming RESTful APIs to integrate with backend systems and retrieve and display data in our applications. I work closely with backend developers to ensure that our APIs are designed effectively and that our applications are optimized for performance and scalability."],startDate:"Mar 2021",endDate:"Nov 2021"}],Dt=[{type:"Bachelor",title:"Computer Engineering",institution:"Federal University of Ceará",location:"Sobral-CE",description:["Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems, computer science, internet of things and telecommunications"],startDate:"2019",endDate:"Present"},{type:"Bachelor",title:"Computer Engineering",institution:"Federal University of Ceará",location:"Quixadá-CE",description:["Bachelor Degree in Computer Engineering, at one of the most renowned colleges in the country, focusing on embedded systems and computer science"],startDate:"2017",endDate:"2018"},{type:"Technician",title:"Computer networks",institution:"EEEP Marta Maria Giffoni de Souza",location:"Acaraú-CE",description:["Technician in Computer networks, in a vocational education school that seeks to train professionals"],startDate:"2014",endDate:"2016"}],Pt=()=>f(se,{title:"Education",get children(){return f(X,{each:Dt,fallback:null,children:({type:e,title:t,institution:n,location:i,description:l,startDate:s,endDate:o})=>f(Se,{type:e,title:t,company:n,location:i,description:l,startDate:s,endDate:o})})}}),Mt=()=>f(se,{title:"Work Experience",get children(){return f(X,{each:Lt,fallback:null,children:({type:e,title:t,company:n,location:i,description:l,startDate:s,endDate:o})=>f(Se,{type:e,title:t,company:n,location:i,description:l,startDate:s,endDate:o})})}}),Ot=g('<ul class="list-disc list-inside"></ul>',2),zt=g('<li class="text-text-light dark:text-text-dark"></li>',2),H=e=>f(se,{get title(){return e.title},get children(){const t=Ot.cloneNode(!0);return d(t,f(X,{get each(){return e.data},fallback:null,children:n=>(()=>{const i=zt.cloneNode(!0);return d(i,n),i})()})),t}}),jt=g('<div class=" text-text-light dark:text-text-dark w-full mt-2 mb-2"><div class="flex justify-between w-[96%] m-auto"><div>© <!> - Present / Júnior Nascimento</div><div>Digital résumé. Print only if necessary. 🌱</div></div></div>',9),Bt=()=>(()=>{const e=jt.cloneNode(!0),t=e.firstChild,n=t.firstChild,i=n.firstChild,l=i.nextSibling;return l.nextSibling,d(n,()=>new Date().getFullYear(),l),e})();function Ft(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Rt(){return localStorage.getItem("theme")||Ft()}function Ht(e){localStorage.setItem("theme",e)}const he={getTheme:Rt,saveTheme:Ht},qt=g('<div class="lg:w-[620px] w-full flex flex-col gap-[12px]"></div>',2),Ut=g('<div class="lg:hidden h-[10px]"></div>',2),Vt=g('<div class="flex flex-col gap-[10px]"></div>',2),Qt=g("<div></div>",2),Kt=()=>{const[e,t]=ve("light");function n(){const l=he.getTheme();t(l)}function i(){t(e()==="light"?"dark":"light"),he.saveTheme(e())}return Ie(n),(()=>{const l=Qt.cloneNode(!0);return d(l,f(st,{get children(){return[f(pt,{toggleTheme:i,get theme(){return e()}}),f(fe,{}),f(ot,{get children(){return[(()=>{const s=qt.cloneNode(!0);return d(s,f(At,{}),null),d(s,f(Mt,{}),null),d(s,f(Pt,{}),null),s})(),Ut.cloneNode(!0),(()=>{const s=Vt.cloneNode(!0);return d(s,f(H,{data:Et,title:"Skills"}),null),d(s,f(H,{data:Nt,title:"Tools"}),null),d(s,f(H,{data:Tt,title:"Technologies"}),null),d(s,f(H,{data:It,title:"Languages"}),null),s})()]}}),f(fe,{}),f(Bt,{})]}})),C(()=>$e(l,`${e()} w-screen`)),l})()};Xe(()=>f(Kt,{}),document.getElementById("root"));