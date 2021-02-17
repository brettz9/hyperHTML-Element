/*! (c) Andrea Giammarchi - ISC */
var HyperHTMLElement=function(e){"use strict";var t={};try{t.WeakMap=WeakMap}catch(e){t.WeakMap=function(e,t){var n=t.defineProperty,r=t.hasOwnProperty,i=o.prototype;return i.delete=function(e){return this.has(e)&&delete e[this._]},i.get=function(e){return this.has(e)?e[this._]:void 0},i.has=function(e){return r.call(e,this._)},i.set=function(e,t){return n(e,this._,{configurable:!0,value:t}),this},o;function o(t){n(this,"_",{value:"_@ungap/weakmap"+e++}),t&&t.forEach(s,this)}function s(e){this.set(e[0],e[1])}}(Math.random(),Object)}var n=t.WeakMap,r={};try{r.WeakSet=WeakSet}catch(e){!function(e,t){var n=i.prototype;function i(){t(this,"_",{value:"_@ungap/weakmap"+e++})}n.add=function(e){return this.has(e)||t(e,this._,{value:!0,configurable:!0}),this},n.has=function(e){return this.hasOwnProperty.call(e,this._)},n.delete=function(e){return this.has(e)&&delete e[this._]},r.WeakSet=i}(Math.random(),Object.defineProperty)}var i=r.WeakSet;const{indexOf:o,slice:s}=[],a=(e,t,n,r,i,s)=>{const a="selectedIndex"in t;let l=a;for(;r<i;){const i=e(n[r],1);if(t.insertBefore(i,s),a&&l&&i.selected){l=!l;let{selectedIndex:e}=t;t.selectedIndex=e<0?r:o.call(t.querySelectorAll("option"),i)}r++}},l=(e,t)=>e==t,c=e=>e,u=(e,t,n,r,i,o,s)=>{const a=o-i;if(a<1)return-1;for(;n-t>=a;){let a=t,l=i;for(;a<n&&l<o&&s(e[a],r[l]);)a++,l++;if(l===o)return t;t=a+1}return-1},h=(e,t,n,r,i)=>n<r?e(t[n],0):0<n?e(t[n-1],-0).nextSibling:i,f=(e,t,n,r)=>{for(;n<r;)v(e(t[n++],-1))},d=(e,t,n)=>{let r=1,i=t;for(;r<i;){const t=(r+i)/2>>>0;n<e[t]?i=t:r=t+1}return r},p=(e,t,n,r,i,o,s,l,c,u,h,p,v)=>{((e,t,n,r,i,o,s,l,c)=>{const u=[],h=e.length;let d=s,p=0;for(;p<h;)switch(e[p++]){case 0:i++,d++;break;case 1:u.push(r[i]),a(t,n,r,i++,i,d<l?t(o[d],0):c);break;case-1:d++}for(p=0;p<h;)switch(e[p++]){case 0:s++;break;case-1:-1<u.indexOf(o[s])?s++:f(t,o,s++,s)}})(((e,t,n,r,i,o,s)=>{const a=n+o,l=[];let c,u,h,f,d,p,v;e:for(c=0;c<=a;c++){if(c>50)return null;for(v=c-1,d=c?l[c-1]:[0,0],p=l[c]=[],u=-c;u<=c;u+=2){for(h=(f=u===-c||u!==c&&d[v+u-1]<d[v+u+1]?d[v+u+1]:d[v+u-1]+1)-u;f<o&&h<n&&s(r[i+f],e[t+h]);)f++,h++;if(f===o&&h===n)break e;p[c+u]=f}}const m=Array(c/2+a/2);let g=m.length-1;for(c=l.length-1;c>=0;c--){for(;f>0&&h>0&&s(r[i+f-1],e[t+h-1]);)m[g--]=0,f--,h--;if(!c)break;v=c-1,d=c?l[c-1]:[0,0],(u=f-h)==-c||u!==c&&d[v+u-1]<d[v+u+1]?(h--,m[g--]=1):(f--,m[g--]=-1)}return m})(n,r,o,s,l,u,p)||((e,t,n,r,i,o,s,a)=>{let l=0,c=r<a?r:a;const u=Array(c++),h=Array(c);h[0]=-1;for(let e=1;e<c;e++)h[e]=s;const f=i.slice(o,s);for(let r=t;r<n;r++){const t=f.indexOf(e[r]);if(-1<t){const e=t+o;-1<(l=d(h,c,e))&&(h[l]=e,u[l]={newi:r,oldi:e,prev:u[l-1]})}}for(l=--c,--s;h[l]>s;)--l;c=a+r-l;const p=Array(c);let v=u[l];for(--n;v;){const{newi:e,oldi:t}=v;for(;n>e;)p[--c]=1,--n;for(;s>t;)p[--c]=-1,--s;p[--c]=0,--n,--s,v=v.prev}for(;n>=t;)p[--c]=1,--n;for(;s>=o;)p[--c]=-1,--s;return p})(n,r,i,o,s,l,c,u),e,t,n,r,s,l,h,v)},v=e=>(e.remove||function(){const{parentNode:e}=this;e&&e.removeChild(this)}).call(e);const m=(e,t,n,r)=>{r||(r={});const i=r.compare||l,o=r.node||c,s=null==r.before?null:o(r.before,0),d=t.length;let v=d,m=0,g=n.length,b=0;for(;m<v&&b<g&&i(t[m],n[b]);)m++,b++;for(;m<v&&b<g&&i(t[v-1],n[g-1]);)v--,g--;const y=m===v,w=b===g;if(y&&w)return n;if(y&&b<g)return a(o,e,n,b,g,h(o,t,m,d,s)),n;if(w&&m<v)return f(o,t,m,v),n;const E=v-m,x=g-b;let N=-1;if(E<x){if(-1<(N=u(n,b,g,t,m,v,i)))return a(o,e,n,b,N,o(t[m],0)),a(o,e,n,N+E,g,h(o,t,v,d,s)),n}else if(x<E&&-1<(N=u(t,m,v,n,b,g,i)))return f(o,t,m,N),f(o,t,N+x,v),n;return E<2||x<2?(a(o,e,n,b,g,o(t[m],0)),f(o,t,m,v),n):E===x&&((e,t,n,r,i,o)=>{for(;r<i&&o(n[r],e[t-1]);)r++,t--;return 0===t})(n,g,t,m,v,i)?(a(o,e,n,b,g,h(o,t,v,d,s)),n):(p(o,e,n,b,g,x,t,m,v,E,d,i,s),n)};var g={};g.CustomEvent="function"==typeof CustomEvent?CustomEvent:function(e){return t.prototype=new t("").constructor.prototype,t;function t(e,t){t||(t={});var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail),n}}();var b=g.CustomEvent,y={};try{y.Map=Map}catch(e){y.Map=function(){var e=0,t=[],n=[];return{delete:function(i){var o=r(i);return o&&(t.splice(e,1),n.splice(e,1)),o},forEach:function(e,r){t.forEach(function(t,i){e.call(r,n[i],t,this)},this)},get:function(t){return r(t)?n[e]:void 0},has:function(e){return r(e)},set:function(i,o){return n[r(i)?e:t.push(i)-1]=o,this}};function r(n){return-1<(e=t.indexOf(n))}}}var w=y.Map;function E(){return this}const x=(e,t)=>{const n="_"+e+"$";return{get(){return this[n]||N(this,n,t.call(this,e))},set(e){N(this,n,e)}}},N=(e,t,n)=>Object.defineProperty(e,t,{configurable:!0,value:"function"==typeof n?function(){return e._wire$=n.apply(this,arguments)}:n})[t];Object.defineProperties(E.prototype,{ELEMENT_NODE:{value:1},nodeType:{value:-1}});const _={},C={},A=[],k=C.hasOwnProperty;let O=0;var S,$,T={attributes:_,define:(e,t)=>{e.indexOf("-")<0?(e in C||(O=A.push(e)),C[e]=t):_[e]=t},invoke:(e,t)=>{for(let n=0;n<O;n++){let r=A[n];if(k.call(e,r))return C[r](e[r],t)}}},M=Array.isArray||($=(S={}.toString).call([]),function(e){return S.call(e)===$}),j=function(e){var t="fragment",n="content"in i("template")?function(e){var t=i("template");return t.innerHTML=e,t.content}:function(e){var n=i(t),o=i("template"),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var a=RegExp.$1;o.innerHTML="<table>"+e+"</table>",s=o.querySelectorAll(a)}else o.innerHTML=e,s=o.childNodes;return r(n,s),n};return function(e,o){return("svg"===o?function(e){var n=i(t),o=i("div");return o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",r(n,o.firstChild.childNodes),n}:n)(e)};function r(e,t){for(var n=t.length;n--;)e.appendChild(t[0])}function i(n){return n===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",n)}}(document);var P,L=function(e,t,n,r,i){var o="importNode"in e,s=e.createDocumentFragment();return s.appendChild(e.createTextNode("g")),s.appendChild(e.createTextNode("")),(o?e.importNode(s,!0):s.cloneNode(!0)).childNodes.length<2?function e(t,n){for(var r=t.cloneNode(),i=t.childNodes||[],o=i.length,s=0;n&&s<o;s++)r.appendChild(e(i[s],n));return r}:o?e.importNode:function(e,t){return e.cloneNode(!!t)}}(document),D="".trim||function(){return String(this).replace(/^\s+|\s+/g,"")},W="-"+Math.random().toFixed(6)+"%",R=!1;try{"content"in(P=document.createElement("template"))&&(P.innerHTML='<p tabindex="'+W+'"></p>',P.content.childNodes[0].getAttribute("tabindex")==W)||(W="_dt: "+W.slice(1,-1)+";",R=!0)}catch(e){}var H="\x3c!--"+W+"--\x3e",I=8,F=1,z=3,Z=/^(?:plaintext|script|style|textarea|title|xmp)$/i,V=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;var q=" \\f\\n\\r\\t",G="[^"+q+"\\/>\"'=]+",B="["+q+"]+"+G,K="<([A-Za-z]+[A-Za-z0-9:._-]*)((?:",U="(?:\\s*=\\s*(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|"+G.replace("\\/","")+"))?)",J=new RegExp(K+B+U+"+)(["+q+"]*/?>)","g"),Q=new RegExp(K+B+U+"*)(["+q+"]*/>)","g"),X=new RegExp("("+B+"\\s*=\\s*)(['\"]?)"+H+"\\2","gi");function Y(e,t,n,r){return"<"+t+n.replace(X,ee)+r}function ee(e,t,n){return t+(n||'"')+W+(n||'"')}function te(e,t,n){return V.test(t)?e:"<"+t+n+"></"+t+">"}var ne=R?function(e,t){var n=t.join(" ");return t.slice.call(e,0).sort(function(e,t){return n.indexOf(e.name)<=n.indexOf(t.name)?-1:1})}:function(e,t){return t.slice.call(e,0)};function re(e,t){for(var n=t.length,r=0;r<n;)e=e.childNodes[t[r++]];return e}function ie(e,t,n,r){for(var i=e.attributes,o=[],s=[],a=ne(i,n),l=a.length,c=0;c<l;){var u,h=a[c++],f=h.value===W;if(f||1<(u=h.value.split(H)).length){var d=h.name;if(o.indexOf(d)<0){o.push(d);var p=n.shift().replace(f?/^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/:new RegExp("^(?:|[\\S\\s]*?\\s)("+d+")\\s*=\\s*('|\")[\\S\\s]*","i"),"$1"),v=i[p]||i[p.toLowerCase()];if(f)t.push(se(v,r,p,null));else{for(var m=u.length-2;m--;)n.shift();t.push(se(v,r,p,u))}}s.push(h)}}c=0;for(var g=(0<(l=s.length)&&R&&!("ownerSVGElement"in e));c<l;){var b=s[c++];g&&(b.value=""),e.removeAttribute(b.name)}var y=e.nodeName;if(/^script$/i.test(y)){var w=document.createElement(y);for(l=i.length,c=0;c<l;)w.setAttributeNode(i[c++].cloneNode(!0));w.textContent=e.textContent,e.parentNode.replaceChild(w,e)}}function oe(e,t){return{type:"any",node:e,path:t}}function se(e,t,n,r){return{type:"attr",node:e,path:t,name:n,sparse:r}}function ae(e,t){return{type:"text",node:e,path:t}}var le=(e=>({get:t=>e.get(t),set:(t,n)=>(e.set(t,n),n)}))(new n);function ce(e,t){var n=(e.convert||function(e){return e.join(H).replace(Q,te).replace(J,Y)})(t),r=e.transform;r&&(n=r(n));var i=j(n,e.type);fe(i);var o=[];return function e(t,n,r,i){for(var o=t.childNodes,s=o.length,a=0;a<s;){var l=o[a];switch(l.nodeType){case F:var c=i.concat(a);ie(l,n,r,c),e(l,n,r,c);break;case I:var u=l.textContent;if(u===W)r.shift(),n.push(Z.test(t.nodeName)?ae(t,i):oe(l,i.concat(a)));else switch(u.slice(0,2)){case"/*":if("*/"!==u.slice(-2))break;case"👻":t.removeChild(l),a--,s--}break;case z:Z.test(t.nodeName)&&D.call(l.textContent)===H&&(r.shift(),n.push(ae(t,i)))}a++}}(i,o,t.slice(0),[]),{content:i,updates:function(n){for(var r=[],i=o.length,s=0,a=0;s<i;){var l=o[s++],c=re(n,l.path);switch(l.type){case"any":r.push({fn:e.any(c,[]),sparse:!1});break;case"attr":var u=l.sparse,h=e.attribute(c,l.name,l.node);null===u?r.push({fn:h,sparse:!1}):(a+=u.length-2,r.push({fn:h,sparse:!0,values:u}));break;case"text":r.push({fn:e.text(c),sparse:!1}),c.textContent=""}}return i+=a,function(){var e=arguments.length;if(i!==e-1)throw new Error(e-1+" values instead of "+i+"\n"+t.join("${value}"));for(var o=1,s=1;o<e;){var a=r[o-s];if(a.sparse){var l=a.values,c=l[0],u=1,h=l.length;for(s+=h-2;u<h;)c+=arguments[o++]+l[u++];a.fn(c)}else a.fn(arguments[o++])}return n}}}}var ue=[];function he(e){var t=ue,n=fe;return function(r){return t!==r&&(n=function(e,t){var n=le.get(t)||le.set(t,ce(e,t));return n.updates(L.call(document,n.content,!0))}(e,t=r)),n.apply(null,arguments)}}function fe(e){for(var t=e.childNodes,n=t.length;n--;){var r=t[n];1!==r.nodeType&&0===D.call(r.textContent).length&&e.removeChild(r)}}var de=function(){var e=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,t=/([^A-Z])([A-Z]+)/g;return function(e,t){return"ownerSVGElement"in e?function(e,t){var n;t?n=t.cloneNode(!0):(e.setAttribute("style","--hyper:style;"),n=e.getAttributeNode("style"));return n.value="",e.setAttributeNode(n),r(n,!0)}(e,t):r(e.style,!1)};function n(e,t,n){return t+"-"+n.toLowerCase()}function r(r,i){var o,s;return function(a){var l,c,u,h;switch(typeof a){case"object":if(a){if("object"===o){if(!i&&s!==a)for(c in s)c in a||(r[c]="")}else i?r.value="":r.cssText="";for(c in l=i?{}:r,a)u="number"!=typeof(h=a[c])||e.test(c)?h:h+"px",!i&&/^--/.test(c)?l.setProperty(c,u):l[c]=u;o="object",i?r.value=function(e){var r,i=[];for(r in e)i.push(r.replace(t,n),":",e[r],";");return i.join("")}(s=l):s=a;break}default:s!=a&&(o="string",s=a,i?r.value=a||"":r.cssText=a||"")}}}}(),pe=function(e,t){return(t=n.prototype).ELEMENT_NODE=1,t.nodeType=111,t.remove=function(e){var t=this.childNodes,n=this.firstChild,r=this.lastChild;if(this._=null,e&&2===t.length)r.parentNode.removeChild(r);else{var i=this.ownerDocument.createRange();i.setStartBefore(e?t[1]:n),i.setEndAfter(r),i.deleteContents()}return n},t.valueOf=function(e){var t=this._,n=null==t;if(n&&(t=this._=this.ownerDocument.createDocumentFragment()),n||e)for(var r=this.childNodes,i=0,o=r.length;i<o;i++)t.appendChild(r[i]);return t},n;function n(t){var n=this.childNodes=e.call(t,0);this.firstChild=n[0],this.lastChild=n[n.length-1],this.ownerDocument=n[0].ownerDocument,this._=null}}([].slice);const ve="ownerSVGElement",me=E.prototype.nodeType,ge=pe.prototype.nodeType,be=function(e){var t=e.Event,n=e.WeakSet,r=!0,i=null;return function(e){return r&&(r=!r,i=new n,function(e){var r=new n,o=new n;try{new MutationObserver(c).observe(e,{subtree:!0,childList:!0})}catch(t){var s=0,a=[],l=function(e){a.push(e),clearTimeout(s),s=setTimeout(function(){c(a.splice(s=0,a.length))},0)};e.addEventListener("DOMNodeRemoved",function(e){l({addedNodes:[],removedNodes:[e.target]})},!0),e.addEventListener("DOMNodeInserted",function(e){l({addedNodes:[e.target],removedNodes:[]})},!0)}function c(e){for(var t,n=e.length,i=0;i<n;i++)u((t=e[i]).removedNodes,"disconnected",o,r),u(t.addedNodes,"connected",r,o)}function u(e,n,r,i){for(var o,s=new t(n),a=e.length,l=0;l<a;1===(o=e[l++]).nodeType&&h(o,s,n,r,i));}function h(e,t,n,r,o){i.has(e)&&!r.has(e)&&(o.delete(e),r.add(e),e.dispatchEvent(t));for(var s=e.children||[],a=s.length,l=0;l<a;h(s[l++],t,n,r,o));}}(e.ownerDocument)),i.add(e),e}}({Event:b,WeakSet:i}),ye=e=>({html:e}),we=(e,t)=>{switch(e.nodeType){case ge:return 1/t<0?t?e.remove(!0):e.lastChild:t?e.valueOf(!0):e.firstChild;case me:return we(e.render(),t);default:return e}},Ee=(e,t)=>{t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(ye).then(t):Promise.resolve(T.invoke(e,t)).then(t)},xe=e=>null!=e&&"then"in e,Ne=/^(?:form|list)$/i,_e=[].slice;function Ce(e){return this.type=e,he(this)}Ce.prototype={attribute(e,t,n){const r=ve in e;let i;if("style"===t)return de(e,n,r);if("."===t.slice(0,1))return((e,t,n)=>n?n=>{try{e[t]=n}catch(r){e.setAttribute(t,n)}}:n=>{e[t]=n})(e,t.slice(1),r);if("?"===t.slice(0,1))return((e,t,n)=>r=>{n!==!!r&&((n=!!r)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1));if(/^on/.test(t)){let n=t.slice(2);return"connected"===n||"disconnected"===n?be(e):t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{i!==t&&(i&&e.removeEventListener(n,i,!1),i=t,t&&e.addEventListener(n,t,!1))}}if("data"===t||!r&&t in e&&!Ne.test(t))return n=>{i!==n&&(i=n,e[t]!==n&&null==n?(e[t]="",e.removeAttribute(t)):e[t]=n)};if(t in T.attributes)return n=>{const r=T.attributes[t](e,n);i!==r&&(i=r,null==r?e.removeAttribute(t):e.setAttribute(t,r))};{let t=!1;const r=n.cloneNode(!0);return n=>{i!==n&&(i=n,r.value!==n&&(null==n?(t&&(t=!1,e.removeAttributeNode(r)),r.value=n):(r.value=n,t||(t=!0,e.setAttributeNode(r)))))}}},any(e,t){const n={node:we,before:e},r=ve in e?"svg":"html";let i,o=!1;const s=a=>{switch(typeof a){case"string":case"number":case"boolean":o?i!==a&&(i=a,t[0].textContent=a):(o=!0,i=a,t=m(e.parentNode,t,[((e,t)=>e.ownerDocument.createTextNode(t))(e,a)],n));break;case"function":s(a(e));break;case"object":case"undefined":if(null==a){o=!1,t=m(e.parentNode,t,[],n);break}default:if(o=!1,i=a,M(a))if(0===a.length)t.length&&(t=m(e.parentNode,t,[],n));else switch(typeof a[0]){case"string":case"number":case"boolean":s({html:a});break;case"object":if(M(a[0])&&(a=a.concat.apply([],a)),xe(a[0])){Promise.all(a).then(s);break}default:t=m(e.parentNode,t,a,n)}else(e=>"ELEMENT_NODE"in e)(a)?t=m(e.parentNode,t,11===a.nodeType?_e.call(a.childNodes):[a],n):xe(a)?a.then(s):"placeholder"in a?Ee(a,s):"text"in a?s(String(a.text)):"any"in a?s(a.any):"html"in a?t=m(e.parentNode,t,_e.call(j([].concat(a.html).join(""),r).childNodes),n):s("length"in a?_e.call(a):T.invoke(a,s))}};return s},text(e){let t;const n=r=>{if(t!==r){t=r;const i=typeof r;"object"===i&&r?xe(r)?r.then(n):"placeholder"in r?Ee(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?_e.call(r).join(""):T.invoke(r,n)):"function"===i?n(r(e)):e.textContent=null==r?"":r}};return n}};var Ae="object"!=typeof document,ke=function(e){var t,r=(t=(document.defaultView.navigator||{}).userAgent,/(Firefox|Safari)\/(\d+)/.test(t)&&!/(Chrom[eium]+|Android)\/(\d+)/.test(t)),i=!("raw"in e)||e.propertyIsEnumerable("raw")||!Object.isFrozen(e.raw);if(r||i){var o={},s=function(e){for(var t=".",n=0;n<e.length;n++)t+=e[n].length+"."+e[n];return o[t]||(o[t]=e)};if(i)ke=s;else{var a=new n;ke=function(e){return a.get(e)||function(e,t){return a.set(e,t),t}(e,s(e))}}}else Ae=!0;return Oe(e)};function Oe(e){return Ae?e:ke(e)}function Se(e){for(var t=arguments.length,n=[Oe(e)],r=1;r<t;)n.push(arguments[r++]);return n}const $e=new n,Te=(e,t)=>null==e?Me(t||"html"):je(e,t||"html"),Me=e=>{let t,n,r;return function(){const i=Se.apply(null,arguments);return r!==i[0]?(r=i[0],n=new Ce(e),t=Pe(n.apply(n,i))):n.apply(n,i),t}},je=(e,t)=>{const n=t.indexOf(":");let r=$e.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||$e.set(e,r={}),r[i]||(r[i]=Me(t))},Pe=e=>{const t=e.childNodes,{length:n}=t;return 1===n?t[0]:n?new pe(t):e},Le=new n;function De(){const e=Le.get(this),t=Se.apply(null,arguments);return e&&e.template===t[0]?e.tagger.apply(null,t):function(e){const t=new Ce(ve in this?"svg":"html");Le.set(this,{tagger:t,template:e}),this.textContent="",this.appendChild(t.apply(null,arguments))}.apply(this,t),this}const We=e=>De.bind(e),Re=T.define,He=Ce.prototype;function Ie(e){return arguments.length<2?null==e?Me("html"):"string"==typeof e?Ie.wire(null,e):"raw"in e?Me("html")(e):"nodeType"in e?Ie.bind(e):je(e,"html"):("raw"in e?Me("html"):Ie.wire).apply(null,arguments)}Ie.Component=E,Ie.bind=We,Ie.define=Re,Ie.diff=m,Ie.hyper=Ie,Ie.observe=be,Ie.tagger=He,Ie.wire=Te,Ie._={WeakMap:n,WeakSet:i},function(e){const t=new n,r=Object.create,i=(e,t)=>{const n={w:null,p:null};return t.set(e,n),n};Object.defineProperties(E,{for:{configurable:!0,value(e,o){return((e,t,o,s)=>{const a=t.get(e)||i(e,t);switch(typeof s){case"object":case"function":const t=a.w||(a.w=new n);return t.get(s)||((e,t,n)=>(e.set(t,n),n))(t,s,new e(o));default:const i=a.p||(a.p=r(null));return i[s]||(i[s]=new e(o))}})(this,t.get(e)||(e=>{const n=new w;return t.set(e,n),n})(e),e,null==o?"default":o)}}}),Object.defineProperties(E.prototype,{handleEvent:{value(e){const t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:x("html",e),svg:x("svg",e),state:x("state",function(){return this.defaultState}),defaultState:{get:()=>({})},dispatch:{value(e,t){const{_wire$:n}=this;if(n){const r=new b(e,{bubbles:!0,cancelable:!0,detail:t});return r.component=this,(n.dispatchEvent?n:n.firstChild).dispatchEvent(r)}return!1}},setState:{value(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}})}(Me);const Fe="attributeChangedCallback",ze=Object,Ze=[],Ve=ze.defineProperty,qe=ze.getOwnPropertyDescriptor,Ge=ze.getOwnPropertyNames,Be=ze.getOwnPropertySymbols||(()=>[]),Ke=ze.getPrototypeOf||(e=>e.__proto__),Ue="object"==typeof Reflect&&Reflect.ownKeys||(e=>Ge(e).concat(Be(e))),Je=ze.setPrototypeOf||((e,t)=>(e.__proto__=t,e)),Qe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),{attachShadow:Xe}=HTMLElement.prototype,Ye=new WeakMap;class et extends HTMLElement{static define(e,t){const n=this,r=n.prototype,i=r[Fe],o=!!i,s=n.booleanAttributes||[];s.forEach(e=>{e in r||Ve(r,Qe(e),{configurable:!0,get(){return this.hasAttribute(e)},set(t){t&&"false"!==t?this.setAttribute(e,""):this.removeAttribute(e)}})});const a=n.observedAttributes||[];a.forEach(e=>{e in r||Ve(r,Qe(e),{configurable:!0,get(){return this.getAttribute(e)},set(t){null==t?this.removeAttribute(e):this.setAttribute(e,t)}})});const l=s.concat(a);l.length&&Ve(n,"observedAttributes",{get:()=>l});const c=r.created||function(){this.render()};Ve(r,"_init$",{configurable:!0,writable:!0,value:!0}),Ve(r,Fe,{configurable:!0,value:function e(t,n,r){if(this._init$&&(nt.call(this,c,l,s),this._init$))return this._init$$.push(e.bind(this,t,n,r));o&&n!==r&&i.apply(this,arguments)}});const u=r.connectedCallback,h=!!u;if(Ve(r,"connectedCallback",{configurable:!0,value:function e(){if(this._init$&&(nt.call(this,c,l,s),this._init$))return this._init$$.push(e.bind(this));h&&u.apply(this,arguments)}}),Ge(r).forEach(e=>{if(/^handle[A-Z]/.test(e)){const t="_"+e+"$",n=r[e];Ve(r,e,{configurable:!0,get(){return this[t]||(this[t]=n.bind(this))}})}}),"handleEvent"in r||Ve(r,"handleEvent",{configurable:!0,value(e){this[(e.currentTarget.dataset||{}).call||"on"+e.type](e)}}),t&&t.extends){const i=document.createElement(t.extends).constructor,o=class extends i{},s=["length","name","arguments","caller","prototype"],a=[];let l=null,c=n;for(;(l=Ke(c))&&([{target:o,base:l,keys:s},{target:o.prototype,base:l.prototype,keys:a}].forEach(({target:e,base:t,keys:n})=>{Ue(t).filter(e=>n.indexOf(e)<0).forEach(r=>{n.push(r),Ve(e,r,qe(t,r))})}),c=l,l!==et););Je(n,o),Je(r,o.prototype),customElements.define(e,n,t)}else customElements.define(e,n);return Ze.push(n),n}attachShadow(){const e=Xe.apply(this,arguments);return Ye.set(this,e),e}get refs(){const e={};if("_html$"in this){const t=(Ye.get(this)||this).querySelectorAll("[ref]");for(let{length:n}=t,r=0;r<n;r++){const n=t[r];e[n.getAttribute("ref")]=n}return Object.defineProperty(this,"refs",{value:e}),e}return e}get html(){return this._html$||(this.html=We(this.shadowRoot||this._shadowRoot||Ye.get(this)||this))}set html(e){Ve(this,"_html$",{configurable:!0,value:e})}render(){}get defaultState(){return{}}get state(){return this._state$||(this.state=this.defaultState)}set state(e){Ve(this,"_state$",{configurable:!0,value:e})}setState(e,t){const n=this.state,r="function"==typeof e?e.call(this,n):e;for(const e in r)n[e]=r[e];return!1!==t&&this.render(),this}}et.Component=E,et.bind=We,et.intent=Re,et.wire=Te,et.hyper=Ie;try{Symbol.hasInstance&&Ze.push(Ve(et,Symbol.hasInstance,{enumerable:!1,configurable:!0,value:e=>Ze.some(it,Ke(e))}))}catch(e){}const tt={type:"DOMContentLoaded",handleEvent(){tt.ready()?(document.removeEventListener(tt.type,tt,!1),tt.list.splice(0).forEach(rt)):setTimeout(tt.handleEvent)},ready:()=>"complete"===document.readyState,list:[]};function nt(e,t,n){if(tt.ready()||function(e,t,n){let r=this;do{if(r.nextSibling)return!0}while(r=r.parentNode);return setTimeout(nt.bind(this,e,t,n)),!1}.call(this,e,t,n)){if(this._init$){const r=this._init$$||[];delete this._init$$;const i=Ve(this,"_init$",{value:!1});n.forEach(e=>{"false"===i.getAttribute(e)&&i.removeAttribute(e)}),t.forEach(e=>{if(i.hasOwnProperty(e)){const t=i[e];delete i[e],r.unshift(()=>{i[e]=t})}}),e.call(i),r.forEach(rt)}}else this.hasOwnProperty("_init$$")||Ve(this,"_init$$",{configurable:!0,value:[]}),tt.list.push(nt.bind(this,e,t,n))}function rt(e){e()}function it(e){return this===e.prototype}return tt.ready()||document.addEventListener(tt.type,tt,!1),e.default=et,Object.defineProperty(e,"__esModule",{value:!0}),e.default}({});
