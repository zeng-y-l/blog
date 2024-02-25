(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const nt=(e,t)=>e===t,j=Symbol("solid-proxy"),he=Symbol("solid-track"),H={equals:nt};let Fe=Ge;const E=1,W=2,Me={owned:null,cleanups:null,context:null,owner:null};var d=null;let ue=null,rt=null,g=null,$=null,k=null,re=0;function ge(e,t){const n=g,r=d,i=e.length===0,s=t===void 0?r:t,l=i?Me:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=i?e:()=>e(()=>A(()=>se(l)));d=l,g=null;try{return P(o,!0)}finally{g=n,d=r}}function T(e,t){t=t?Object.assign({},H,t):H;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),Be(n,i));return[qe.bind(n),r]}function it(e,t,n){const r=ie(e,t,!0,E);R(r)}function y(e,t,n){const r=ie(e,t,!1,E);R(r)}function Z(e,t,n){Fe=vt;const r=ie(e,t,!1,E);(!n||!n.render)&&(r.user=!0),k?k.push(r):R(r)}function L(e,t,n){n=n?Object.assign({},H,n):H;const r=ie(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,R(r),qe.bind(r)}function ve(e){return P(e,!1)}function A(e){if(g===null)return e();const t=g;g=null;try{return e()}finally{g=t}}function _e(e,t,n){const r=Array.isArray(e);let i,s=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(s){s=!1;return}const c=A(()=>t(o,i,l));return i=o,c}}function Ke(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ye(){return g}function st(){return d}function lt(e,t){const n=d,r=g;d=e,g=null;try{return P(t,!0)}catch(i){xe(i)}finally{d=n,g=r}}function ot(e){const t=g,n=d;return Promise.resolve().then(()=>{g=t,d=n;let r;return P(e,!1),g=d=null,r?r.done:void 0})}const[ct,or]=T(!1);function ut(){return[ct,ot]}function at(e,t){const n=Symbol("context");return{id:n,Provider:yt(n),defaultValue:e}}function ft(e){return d&&d.context&&d.context[e.id]!==void 0?d.context[e.id]:e.defaultValue}function dt(e){const t=L(e),n=L(()=>me(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function qe(){if(this.sources&&this.state)if(this.state===E)R(this);else{const e=$;$=null,P(()=>X(this),!1),$=e}if(g){const e=this.observers?this.observers.length:0;g.sources?(g.sources.push(this),g.sourceSlots.push(e)):(g.sources=[this],g.sourceSlots=[e]),this.observers?(this.observers.push(g),this.observerSlots.push(g.sources.length-1)):(this.observers=[g],this.observerSlots=[g.sources.length-1])}return this.value}function Be(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&P(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],l=ue&&ue.running;l&&ue.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?$.push(s):k.push(s),s.observers&&Ue(s)),l||(s.state=E)}if($.length>1e6)throw $=[],new Error},!1)),t}function R(e){if(!e.fn)return;se(e);const t=re;ht(e,e.value,t)}function ht(e,t,n){let r;const i=d,s=g;g=d=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=E,e.owned&&e.owned.forEach(se),e.owned=null),e.updatedAt=n+1,xe(l)}finally{g=s,d=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Be(e,r):e.value=r,e.updatedAt=n)}function ie(e,t,n,r=E,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:d?d.context:null,pure:n};return d===null||d!==Me&&(d.owned?d.owned.push(s):d.owned=[s]),s}function z(e){if(e.state===0)return;if(e.state===W)return X(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===E)R(e);else if(e.state===W){const r=$;$=null,P(()=>X(e,t[0]),!1),$=r}}function P(e,t){if($)return e();let n=!1;t||($=[]),k?n=!0:k=[],re++;try{const r=e();return gt(n),r}catch(r){n||(k=null),$=null,xe(r)}}function gt(e){if($&&(Ge($),$=null),e)return;const t=k;k=null,t.length&&P(()=>Fe(t),!1)}function Ge(e){for(let t=0;t<e.length;t++)z(e[t])}function vt(e){let t,n=0;for(t=0;t<e.length;t++){const r=e[t];r.user?e[n++]=r:z(r)}for(t=0;t<n;t++)z(e[t])}function X(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const i=r.state;i===E?r!==t&&(!r.updatedAt||r.updatedAt<re)&&z(r):i===W&&X(r,t)}}}function Ue(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=W,n.pure?$.push(n):k.push(n),n.observers&&Ue(n))}}function se(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),l=n.observerSlots.pop();r<i.length&&(s.sourceSlots[l]=r,i[r]=s,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)se(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function _t(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function xe(e,t=d){throw _t(e)}function me(e){if(typeof e=="function"&&!e.length)return me(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=me(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function yt(e,t){return function(r){let i;return y(()=>i=A(()=>(d.context={...d.context,[e]:r.value},dt(()=>r.children))),void 0),i}}const Le=Symbol("fallback");function Ee(e){for(let t=0;t<e.length;t++)e[t]()}function mt(e,t,n={}){let r=[],i=[],s=[],l=[],o=0,c;return Ke(()=>Ee(s)),()=>{const u=e()||[];return u[he],A(()=>{if(u.length===0)return o!==0&&(Ee(s),s=[],r=[],i=[],o=0,l=[]),n.fallback&&(r=[Le],i[0]=ge(_=>(s[0]=_,n.fallback())),o=1),i;for(r[0]===Le&&(s[0](),s=[],r=[],i=[],o=0),c=0;c<u.length;c++)c<r.length&&r[c]!==u[c]?l[c](()=>u[c]):c>=r.length&&(i[c]=ge(a));for(;c<r.length;c++)s[c]();return o=l.length=s.length=u.length,r=u.slice(0),i=i.slice(0,o)});function a(_){s[c]=_;const[w,x]=T(u[c]);return l[c]=x,t(w,c)}}}function f(e,t){return A(()=>e(t||{}))}const bt=e=>`Stale read from <${e}>.`;function Ce(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(mt(()=>e.each,e.children,t||void 0))}function Je(e){const t=e.keyed,n=L(()=>e.when,void 0,{equals:(r,i)=>t?r===i:!r==!i});return L(()=>{const r=n();if(r){const i=e.children;return typeof i=="function"&&i.length>0?A(()=>i(t?r:()=>{if(!A(n))throw bt("Show");return e.when})):i}return e.fallback},void 0,void 0)}function $t(e,t,n){let r=n.length,i=t.length,s=r,l=0,o=0,c=t[i-1].nextSibling,u=null;for(;l<i||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===l){const a=s<r?o?n[o-1].nextSibling:n[s-o]:c;for(;o<s;)e.insertBefore(n[o++],a)}else if(s===o)for(;l<i;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[i-1]){const a=t[--i].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],a),t[i]=n[s]}else{if(!u){u=new Map;let _=o;for(;_<s;)u.set(n[_],_++)}const a=u.get(t[l]);if(a!=null)if(o<a&&a<s){let _=l,w=1,x;for(;++_<i&&_<s&&!((x=u.get(t[_]))==null||x!==a+w);)w++;if(w>a-o){const b=t[l];for(;o<a;)e.insertBefore(n[o++],b)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Oe="_$DX_DELEGATE";function wt(e,t,n,r={}){let i;return ge(s=>{i=s,t===document?e():v(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function m(e,t,n){let r;const i=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},s=t?()=>A(()=>document.importNode(r||(r=i()),!0)):()=>(r||(r=i())).cloneNode(!0);return s.cloneNode=s,s}function le(e,t=window.document){const n=t[Oe]||(t[Oe]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,St))}}function h(e,t){t==null?e.removeAttribute("class"):e.className=t}function F(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function oe(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,l;for(s=0,l=i.length;s<l;s++){const o=i[s];!o||o==="undefined"||t[o]||(Pe(e,o,!1),delete n[o])}for(s=0,l=r.length;s<l;s++){const o=r[s],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Pe(e,o,!0),n[o]=c)}return n}function v(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return Q(e,t,r,n);y(i=>Q(e,t(),i,n),r)}function Pe(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function St(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function Q(e,t,n,r,i){for(;typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,s==="string"||s==="number")if(s==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=I(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||s==="boolean")n=I(e,n,r);else{if(s==="function")return y(()=>{let o=t();for(;typeof o=="function";)o=o();n=Q(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(be(o,t,n,i))return y(()=>n=Q(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=I(e,n,r),l)return n}else c?n.length===0?Ne(e,o,r):$t(e,n,o):(n&&I(e),Ne(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=I(e,n,r,t);I(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function be(e,t,n,r){let i=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],c=n&&n[s],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))i=be(e,o,c)||i;else if(u==="function")if(r){for(;typeof o=="function";)o=o();i=be(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||i}else e.push(o),i=!0;else{const a=String(o);c&&c.nodeType===3&&c.data===a?e.push(c):e.push(document.createTextNode(a))}}return i}function Ne(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function I(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(i!==o){const c=o.parentNode===e;!s&&!l?c?e.replaceChild(i,o):e.insertBefore(i,n):c&&o.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const At="_score_1h7a2_1",xt="_start_1h7a2_7",Ct="_value_1h7a2_10",kt="_end_1h7a2_15",Tt="_view_1h7a2_18",M={score:At,start:xt,value:Ct,end:kt,view:Tt},Lt="_fixed_1yjl1_1",Et="_view_1yjl1_8",Ot="_hud_1yjl1_12",$e={fixed:Lt,view:Et,hud:Ot};var Pt=m("<div><div>");const ke=$e.fixed,Ye=e=>(()=>{var t=Pt(),n=t.firstChild;return v(n,()=>e.children),y(r=>{var i=`${ke} ${$e.view}`,s=$e.hud,l=e.classList;return i!==r.e&&h(t,r.e=i),s!==r.t&&h(n,r.t=s),r.a=oe(n,l,r.a),r},{e:void 0,t:void 0,a:void 0}),t})(),we=Symbol("store-raw"),D=Symbol("store-node"),C=Symbol("store-has"),Ve=Symbol("store-self");function He(e){let t=e[j];if(!t&&(Object.defineProperty(e,j,{value:t=new Proxy(e,It)}),!Array.isArray(e))){const n=Object.keys(e),r=Object.getOwnPropertyDescriptors(e);for(let i=0,s=n.length;i<s;i++){const l=n[i];r[l].get&&Object.defineProperty(e,l,{enumerable:r[l].enumerable,get:r[l].get.bind(t)})}}return t}function ee(e){let t;return e!=null&&typeof e=="object"&&(e[j]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function q(e,t=new Set){let n,r,i,s;if(n=e!=null&&e[we])return n;if(!ee(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)i=e[l],(r=q(i,t))!==i&&(e[l]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let c=0,u=l.length;c<u;c++)s=l[c],!o[s].get&&(i=e[s],(r=q(i,t))!==i&&(e[s]=r))}return e}function te(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function B(e,t,n){if(e[t])return e[t];const[r,i]=T(n,{equals:!1,internal:!0});return r.$=i,e[t]=r}function Nt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===j||t===D||(delete n.value,delete n.writable,n.get=()=>e[j][t]),n}function We(e){ye()&&B(te(e,D),Ve)()}function jt(e){return We(e),Reflect.ownKeys(e)}const It={get(e,t,n){if(t===we)return e;if(t===j)return n;if(t===he)return We(e),n;const r=te(e,D),i=r[t];let s=i?i():e[t];if(t===D||t===C||t==="__proto__")return s;if(!i){const l=Object.getOwnPropertyDescriptor(e,t);ye()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(s=B(r,t,s)())}return ee(s)?He(s):s},has(e,t){return t===we||t===j||t===he||t===D||t===C||t==="__proto__"?!0:(ye()&&B(te(e,C),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:jt,getOwnPropertyDescriptor:Nt};function ne(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],s=e.length;n===void 0?(delete e[t],e[C]&&e[C][t]&&i!==void 0&&e[C][t].$()):(e[t]=n,e[C]&&e[C][t]&&i===void 0&&e[C][t].$());let l=te(e,D),o;if((o=B(l,t,i))&&o.$(()=>n),Array.isArray(e)&&e.length!==s){for(let c=e.length;c<s;c++)(o=l[c])&&o.$();(o=B(l,"length",s))&&o.$(e.length)}(o=l[Ve])&&o.$()}function Ze(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];ne(e,i,t[i])}}function Dt(e,t){if(typeof t=="function"&&(t=t(e)),t=q(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&ne(e,n,i)}ne(e,"length",r)}else Ze(e,t)}function K(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const l=typeof r,o=Array.isArray(e);if(Array.isArray(r)){for(let c=0;c<r.length;c++)K(e,[r[c]].concat(t),n);return}else if(o&&l==="function"){for(let c=0;c<e.length;c++)r(e[c],c)&&K(e,[c].concat(t),n);return}else if(o&&l==="object"){const{from:c=0,to:u=e.length-1,by:a=1}=r;for(let _=c;_<=u;_+=a)K(e,[_].concat(t),n);return}else if(t.length>1){K(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let s=t[0];typeof s=="function"&&(s=s(i,n),s===i)||r===void 0&&s==null||(s=q(s),r===void 0||ee(i)&&ee(s)&&!Array.isArray(s)?Ze(i,s):ne(e,r,s))}function Rt(...[e,t]){const n=q(e||{}),r=Array.isArray(n),i=He(n);function s(...l){ve(()=>{r&&l.length===1?Dt(n,l[0]):K(n,l)})}return[i,s]}const ze=at(),N=()=>ft(ze),pt=e=>{const[t,n]=Rt({...e.config,...je()}),r=()=>{n(je)};Z(_e(()=>t.skill,()=>{r()},{defer:!0}));const i={store:t,setConfig:n,rematch:r,round(s,l){n(({my:o,their:c,skill:u,record:a})=>({result:u[s].versus[l],my:o-u[s].cost,their:c-u[l].cost,record:a.concat([[s,l]])}))}};return f(ze.Provider,{value:i,get children(){return e.children}})},je=()=>({my:0,their:0,result:0,record:[]});var Ft=m("<div><div>有</div><div></div><div>个集"),Mt=m("<div>");const Ie=e=>(()=>{var t=Ft(),n=t.firstChild,r=n.firstChild,i=n.nextSibling,s=i.nextSibling;return v(n,()=>e.player,r),v(i,()=>e.score),y(l=>{var o=M.score,c=M.start,u=M.value,a=M.end;return o!==l.e&&h(t,l.e=o),c!==l.t&&h(n,l.t=c),u!==l.a&&h(i,l.a=u),a!==l.o&&h(s,l.o=a),l},{e:void 0,t:void 0,a:void 0,o:void 0}),t})(),Kt=()=>{const{store:e}=N();return(()=>{var t=Mt();return v(t,f(Ie,{player:"我方",get score(){return e.my}}),null),v(t,f(Ie,{player:"对方",get score(){return e.their}}),null),y(()=>h(t,`${ke} ${M.view}`)),t})()},qt="_card_307db_1",Bt="_lack_307db_13",Gt="_available_307db_16",Ut="_name_307db_26",Jt="_section_307db_33",Yt="_title_307db_37",Vt="_select_307db_41",O={card:qt,lack:Bt,available:Gt,name:Ut,section:Jt,title:Yt,select:Vt};var Ht=m("<div><div>"),Wt=m("<div>无"),Zt=m("<div>"),zt=m("<div><div></div><div><div></div><div><strong></strong> 个集");const Xt=e=>{const t=()=>e.skills[e.skill],n=r=>(()=>{var i=Ht(),s=i.firstChild;return v(s,()=>r.name),v(i,f(Ce,{get each(){return e.skills.filter((l,o)=>t().versus[o]==r.x)},get fallback(){return Wt()},children:l=>(()=>{var o=Zt();return v(o,()=>l().name),o})()}),null),y(l=>{var o=O.section,c=O.title;return o!==l.e&&h(i,l.e=o),c!==l.t&&h(s,l.t=c),l},{e:void 0,t:void 0}),i})();return(()=>{var r=zt(),i=r.firstChild,s=i.nextSibling,l=s.firstChild,o=l.nextSibling,c=o.firstChild;return r.$$click=()=>{var u;return e.lack||e.disable||((u=e.onClick)==null?void 0:u.call(e))},v(i,()=>t().name),v(l,()=>t().cost<0?"可获得":"需消耗"),v(c,()=>Math.abs(t().cost)),v(r,f(n,{name:"强于",x:1}),null),v(r,f(n,{name:"弱于",x:-1}),null),y(u=>{var a=O.card,_={[O.lack]:e.lack,[O.available]:!e.disable},w=O.name,x=O.section;return a!==u.e&&h(r,u.e=a),u.t=oe(r,_,u.t),w!==u.a&&h(i,u.a=w),x!==u.o&&h(s,u.o=x),u},{e:void 0,t:void 0,a:void 0,o:void 0}),r})()},Qt=e=>{const{store:t}=N();return f(Ye,{get classList(){return{[O.select]:!0}},get children(){return f(Ce,{get each(){return t.skill},children:(n,r)=>f(Xt,{skill:r,get skills(){return t.skill},get lack(){return t.my<n().cost},get disable(){return e.disable},onClick:()=>{var i;return(i=e.onClick)==null?void 0:i.call(e,r)}})})}})};le(["click"]);var en=()=>{},De=(e,t)=>t();function tn(e,t){const n=A(e),r=n?[n]:[],{onEnter:i=De,onExit:s=De}=t,[l,o]=T(t.appear?[]:r),[c]=ut();let u,a=!1;function _(b,S){if(!b)return S&&S();a=!0,s(b,()=>{ve(()=>{a=!1,o(ce=>ce.filter(tt=>tt!==b)),S&&S()})})}function w(b){const S=u;if(!S)return b&&b();u=void 0,o(ce=>[S,...ce]),i(S,b??en)}const x=t.mode==="out-in"?b=>a||_(b,w):t.mode==="in-out"?b=>w(()=>_(b)):b=>{_(b),w()};return it(b=>{const S=e();return A(c)?(c(),b):(S!==b&&(u=S,ve(()=>A(()=>x(b)))),S)},t.appear?void 0:n),l}var Re=e=>e instanceof Element;function Se(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return Se(e(),t);if(Array.isArray(e))for(const n of e){const r=Se(n,t);if(r)return r}return null}function nn(e,t=Re,n=Re){const r=L(e);return L(()=>Se(r(),t))}function rn(e){return L(()=>{const t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function Xe(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function sn(e,t,n,r){const{onBeforeEnter:i,onEnter:s,onAfterEnter:l}=t;i==null||i(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r==null?void 0:r();s==null||s(n,()=>o())}),Xe(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!s||s.length<2)&&(n.addEventListener("transitionend",o),n.addEventListener("animationend",o))});function o(c){(!c||c.target===n)&&(r==null||r(),n.removeEventListener("transitionend",o),n.removeEventListener("animationend",o),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l==null||l(n))}}function ln(e,t,n,r){const{onBeforeExit:i,onExit:s,onAfterExit:l}=t;if(!n.parentNode)return r==null?void 0:r();i==null||i(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),s==null||s(n,()=>o()),Xe(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!s||s.length<2)&&(n.addEventListener("transitionend",o),n.addEventListener("animationend",o))});function o(c){(!c||c.target===n)&&(r==null||r(),n.removeEventListener("transitionend",o),n.removeEventListener("animationend",o),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l==null||l(n))}}var on={inout:"in-out",outin:"out-in"},Qe=e=>{const t=rn(e);return tn(nn(()=>e.children),{mode:on[e.mode],appear:e.appear,onEnter(n,r){sn(t(),e,n,r)},onExit(n,r){ln(t(),e,n,r)}})};const cn="_current_o0axg_1",un="_exit_to_o0axg_12",an="_enter_o0axg_16",U={current:cn,exit_to:un,enter:an},Ae=(e,t)=>{let n=0;const r=()=>t(n),i=(s,l)=>{r(),n=e(s,l)};return Ke(r),[i,r]},fn=(e,t)=>{if(t(e))throw"";return e},dn="_line_syrbx_1",hn="_l_syrbx_1",gn="_r_syrbx_5",vn="_vs_syrbx_14",J={line:dn,l:hn,r:gn,vs:vn};var _n=m("<div><span></span><span>vs</span><span>");const et=e=>{const{store:t}=N();return(()=>{var n=_n(),r=n.firstChild,i=r.nextSibling,s=i.nextSibling;return v(r,()=>t.skill[e.left].name),v(s,()=>t.skill[e.right].name),y(l=>{var o=J.line,c=e.classList,u=J.l,a=J.vs,_=J.r;return o!==l.e&&h(n,l.e=o),l.t=oe(n,c,l.t),u!==l.a&&h(r,l.a=u),a!==l.o&&h(i,l.o=a),_!==l.i&&h(s,l.i=_),l},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),n})()};var yn=m("<div>");const ae=e=>({type:"str",str:e}),mn=()=>{const{store:e}=N(),[t,n]=T(),r=()=>{const{record:l,result:o}=e;if(l.length==0)return[ae("开始游戏")];const[c,u]=l[l.length-1],a={type:"vs",left:c,right:u};switch(o){case 0:return[a];case 1:return[a,ae("我方胜利")];case-1:return[a,ae("对方胜利")]}},[i,s]=Ae(setInterval,clearInterval);return Z(()=>{const l=r();if(n(l[0]),l.length>1){let o=1;i(()=>{n(l[o]),o++,o>=l.length&&s()},1e3)}else s()}),f(Qe,{appear:!0,get enterClass(){return U.enter},get exitToClass(){return U.exit_to},get children(){return f(Je,{get when(){return t()},keyed:!0,children:l=>l.type=="str"?(()=>{var o=yn();return v(o,()=>l.str),y(()=>h(o,U.current)),o})():f(et,{get left(){return l.left},get right(){return l.right},get classList(){return{[U.current]:!0}}})})}})},pe=(e,t)=>t<e.length?e[t]:e[e.length-1],bn=e=>{let t=0,n=0;return e.forEach((r,i)=>{t+=r,r/t>Math.random()&&(n=i)}),n},$n=(e,t,n)=>bn(pe(pe(e,t),n)),wn="_btn_1mrs5_1",Y={btn:wn},Sn="_line_3smsi_1",fe={line:Sn};var An=m("<div>游戏开始"),xn=m("<div>");const Cn={0:"游戏仍在继续",1:"结束，我方胜利","-1":"结束，对方胜利"},kn=()=>{const{store:e}=N();return[(()=>{var t=An();return y(()=>h(t,fe.line)),t})(),f(Ce,{get each(){return e.record},children:t=>f(et,{get left(){return t()[0]},get right(){return t()[1]},get classList(){return{[fe.line]:!0}}})}),(()=>{var t=xn();return v(t,()=>Cn[e.result]),y(()=>h(t,fe.line)),t})()]},Tn="_view_1sojr_1",Ln="_hide_1sojr_7",En="_content_1sojr_10",On="_title_1sojr_23",p={view:Tn,hide:Ln,content:En,title:On};var Pn=m("<div tabindex=-1><div><h1>");const Nn=e=>f(Qe,{appear:!0,get enterClass(){return p.hide},get exitToClass(){return p.hide},onEnter:t=>t.focus(),get children(){return f(Je,{get when(){return e.children},keyed:!0,children:({title:t,ele:n})=>(()=>{var r=Pn(),i=r.firstChild,s=i.firstChild;return r.$$keydown=l=>{var o;return l.key=="Escape"&&((o=e.onCancel)==null?void 0:o.call(e))},r.$$click=l=>{var o;return l.target==l.currentTarget&&((o=e.onCancel)==null?void 0:o.call(e))},v(s,t),v(i,n,null),y(l=>{var o=`${ke} ${p.view}`,c=p.content,u=p.title;return o!==l.e&&h(r,l.e=o),c!==l.t&&h(i,l.t=c),u!==l.a&&h(s,l.a=u),l},{e:void 0,t:void 0,a:void 0}),r})()})}});le(["click","keydown"]);const jn="_view_fxaus_1",In="_line_fxaus_6",Dn="_desc_fxaus_10",Rn="_input_fxaus_14",pn="_err_fxaus_17",G={view:jn,line:In,desc:Dn,input:Rn,err:pn},Te="ji-data",Fn=e=>{const t=localStorage.getItem(Te);return t?{...e,...JSON.parse(t)}:e},Mn=e=>localStorage.setItem(Te,JSON.stringify(e)),Kn=()=>localStorage.removeItem(Te);var qn=m("<input type=text>"),Bn=m("<div><strong></strong><br>"),Gn=m("<div>"),Un=m("<button type=button>直接删除"),Jn=m("<div><p>修改设置将会自动保存，但若输入无效则会忽略");const Yn=e=>{const[t,n]=T(!1),[r,i]=T(e.children,{equals:!1});return(()=>{var s=qn();return s.addEventListener("blur",()=>{n(!1),i(e.children)}),s.$$input=l=>{try{e.onInput(l.target.value),n(!1)}catch{n(!0)}},y(l=>{var o=G.input,c={[G.err]:t()};return o!==l.e&&h(s,l.e=o),l.t=oe(s,c,l.t),l},{e:void 0,t:void 0}),y(()=>s.value=r()),s})()},V=e=>[(()=>{var t=Bn(),n=t.firstChild;return n.nextSibling,v(n,()=>e.title),v(t,()=>e.desc,null),y(()=>h(t,G.desc)),t})(),(()=>{var t=Gn();return v(t,()=>e.children),t})()],de=e=>{const{store:t,setConfig:n}=N();return f(Yn,{onInput:r=>n({[e.key]:e.de(r)}),get children(){return e.ser(t[e.key])}})},Vn=()=>(()=>{var e=Jn(),t=e.firstChild;return v(e,f(V,{title:"结束后自动重来时延",desc:"毫秒，非正数则不会自动重来",get children(){return f(de,{key:"autoRematch",de:n=>fn(Number(n),isNaN),ser:String})}}),null),v(e,f(V,{title:"清除用户数据",desc:"删除保存的设置，以后就是初始",get children(){var n=Un();return F(n,"click",Kn,!0),n}}),null),v(e,f(V,{title:"招数规则",desc:"开发用，请勿随意更改",get children(){return f(de,{key:"skill",get de(){return JSON.parse},get ser(){return JSON.stringify}})}}),null),v(e,f(V,{title:"智能引擎权重",desc:"开发用，请勿随意更改",get children(){return f(de,{key:"agent",get de(){return JSON.parse},get ser(){return JSON.stringify}})}}),null),y(n=>{var r=G.view,i=G.line;return r!==n.e&&h(e,n.e=r),i!==n.t&&h(t,n.t=i),n},{e:void 0,t:void 0}),e})();le(["input","click"]);const Hn="_content_1vgd8_1",Wn={content:Hn};var Zn=m("<div><p>“集”，一种简单的回合制双人游戏。你将与电脑对战。<a href=https://gitee.com/Zeng_YL/ji-train#规则>此处</a>可查看规则。</p><p>本游戏可于<a href=https://zeng-y-l.github.io/ji/>此处</a>访问游玩。还可以查看其<a href=https://gitee.com/Zeng_YL/ji-gui>源码</a>，以 MIT 协议发布。</p><p>智能引擎权重由<a href=https://gitee.com/Zeng_YL/ji-train>训练程序</a>生成，其源码亦以 MIT 协议发布。</p><p><a href=https://zeng-y-l.github.io/>ZengYL</a> 制作了本游戏。而规则来源于我曾经的同学，在此感谢他们。</p><p>界面使用了字体<a href=https://zhuanlan.zhihu.com/p/637491623>京华老宋体</a>。");const zn=()=>(()=>{var e=Zn();return y(()=>h(e,Wn.content)),e})();var Xn=m("<div>重来"),Qn=m("<div>设置"),er=m("<div>记录"),tr=m("<div>关于");const nr=()=>{const{rematch:e}=N(),[t,n]=T(),r=st(),i=(s,l)=>()=>lt(r,()=>n({title:s,ele:f(l,{})}));return[f(Ye,{get children(){return[(()=>{var s=Xn();return F(s,"click",e,!0),y(()=>h(s,Y.btn)),s})(),(()=>{var s=Qn();return F(s,"click",i("设置",Vn),!0),y(()=>h(s,Y.btn)),s})(),(()=>{var s=er();return F(s,"click",i("记录",kn),!0),y(()=>h(s,Y.btn)),s})(),(()=>{var s=tr();return F(s,"click",i("关于",zn),!0),y(()=>h(s,Y.btn)),s})()]}}),f(Nn,{onCancel:()=>n(),get children(){return t()}})]};le(["click"]);let rr={autoRematch:-1,agent:[[[255,0,0,0,0,0,0,0],[147,108,0,0,0,0,0,0],[159,46,50,0,0,0,0,0],[34,182,39,0,0,0,0,0],[66,56,133,0,0,0,0,0],[9,119,127,0,0,0,0,0]],[[133,0,0,0,122,0,0,0],[63,124,0,0,68,0,0,0],[42,71,97,3,42,0,0,0],[96,16,27,99,17,0,0,0],[51,36,41,45,82,0,0,0],[23,83,56,75,18,0,0,0]],[[134,0,0,0,117,4,0,0],[26,101,0,0,106,22,0,0],[16,10,82,28,44,75,0,0],[16,23,11,102,53,50,0,0],[67,38,17,31,39,63,0,0],[105,25,47,34,21,23,0,0]],[[0,0,0,0,0,0,255,0],[34,66,0,0,54,64,37,0],[26,36,15,37,23,45,73,0],[18,64,10,28,39,45,51,0],[36,25,32,60,36,32,34,0],[47,40,19,43,46,48,12,0]],[[0,0,0,0,0,0,255,0],[69,51,0,0,25,99,11,0],[43,34,14,51,48,19,46,0],[40,15,45,63,14,26,52,0],[50,40,42,16,23,39,45,0],[63,34,55,25,4,32,42,0]],[[0,0,0,0,0,0,56,199],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255],[0,0,0,0,0,0,0,255]]],skill:[{cost:-1,name:"集",versus:[0,0,0,0,-1,-1,-1,-1]},{cost:0,name:"小防",versus:[0,0,0,0,0,-1,-1,-1]},{cost:0,name:"中防",versus:[0,0,0,0,-1,0,-1,-1]},{cost:1,name:"大防",versus:[0,0,0,0,0,0,0,-1]},{cost:1,name:"小波",versus:[1,0,1,0,0,-1,-1,-1]},{cost:2,name:"中波",versus:[1,1,0,0,1,0,-1,-1]},{cost:3,name:"大波",versus:[1,1,1,0,1,1,0,-1]},{cost:5,name:"黑洞",versus:[1,1,1,1,1,1,1,0]}]};const ir=()=>{const{store:e,round:t,rematch:n}=N(),[r,i]=T(!1),s=L(_e(()=>e.record,()=>$n(e.agent,e.their,e.my))),[l]=Ae(setTimeout,clearTimeout),o=a=>{i(!0),l(()=>i(!1),a)},[c,u]=Ae(setTimeout,clearTimeout);return Z(()=>{const a=e.autoRematch;a>0&&e.result!=0?c(()=>{n()},a):u()}),Z(_e(()=>{const{agent:a,skill:_,autoRematch:w}=e;return{agent:a,skill:_,autoRematch:w}},Mn,{defer:!0})),[f(Kt,{}),f(nr,{}),f(mn,{}),f(Qt,{get disable(){return r()||e.result!=0},onClick:a=>{t(a,s()),o(400)}})]},sr=()=>f(pt,{get config(){return Fn(rr)},get children(){return f(ir,{})}}),lr=document.getElementById("root");wt(sr,lr);
