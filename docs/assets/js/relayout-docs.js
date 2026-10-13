!function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,m=globalThis,f=m.trustedTypes,g=f?f.emptyScript:"",b=m.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?g:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!a(t,e),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;let k=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=x){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[v("elementProperties")]=new Map,k[v("finalized")]=new Map,b?.({ReactiveElement:k}),(m.reactiveElementVersions??=[]).push("2.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const _=globalThis,$=_.trustedTypes,C=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+A,E=`<${z}>`,T=document,L=()=>T.createComment(""),R=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,O="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,B=/>/g,M=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,N=/"/g,V=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),j=new WeakMap,W=T.createTreeWalker(T,129);function K(t,e){if(!P(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}let G=class t{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let n=0,r=0;const l=e.length-1,a=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=I;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,a=r.exec(i),null!==a);)h=r.lastIndex,r===I?"!--"===a[1]?r=D:void 0!==a[1]?r=B:void 0!==a[2]?(V.test(a[2])&&(o=RegExp("</"+a[2],"g")),r=M):void 0!==a[3]&&(r=M):r===M?">"===a[0]?(r=o??I,c=-1):void 0===a[1]?c=-2:(c=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?M:'"'===a[3]?N:F):r===N||r===F?r=M:r===D||r===B?r=I:(r=M,o=void 0);const d=r===M&&t[e+1].startsWith("/>")?" ":"";n+=r===I?i+E:c>=0?(s.push(l),i.slice(0,c)+S+i.slice(c)+A+d):i+A+(-2===c?e:d)}return[K(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),W.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=W.nextNode())&&a.length<l;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=h[r++],i=o.getAttribute(t).split(A),s=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:s[2],strings:i,ctor:"."===s[1]?J:"?"===s[1]?tt:"@"===s[1]?et:Y}),o.removeAttribute(t)}else t.startsWith(A)&&(a.push({type:6,index:n}),o.removeAttribute(t));if(V.test(o.tagName)){const t=o.textContent.split(A),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],L()),W.nextNode(),a.push({type:2,index:++n});o.append(t[e],L())}}}else if(8===o.nodeType)if(o.data===z)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}};function Z(t,e,i=t,s){if(e===U)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=R(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}let Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);W.currentNode=s;let o=W.nextNode(),n=0,r=0,l=i[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new X(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new it(o,this,t)),this._$AV.push(e),l=i[++r]}n!==l?.index&&(o=W.nextNode(),n++)}return W.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),R(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>P(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&R(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new G(t)),e}k(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(L()),this.O(L()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}let Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Z(this,t,e,0),n=!R(t)||t!==this._$AH&&t!==U,n&&(this._$AH=t);else{const s=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=Z(this,s[i+r],e,r),l===U&&(l=this._$AH[r]),n||=!R(l)||l!==this._$AH[r],l===q?t=q:t!==q&&(t+=(l??"")+o[r+1]),this._$AH[r]=l}n&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class J extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}let tt=class extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}},et=class extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===U)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}};const st=_.litHtmlPolyfillSupport;st?.(G,X),(_.litHtmlVersions??=[]).push("3.3.1");const ot=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(L(),t),t,void 0,i??{})}return o._$AI(t),o
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */},nt=globalThis;let rt=class extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};rt._$litElement$=!0,rt.finalized=!0,nt.litElementHydrateSupport?.({LitElement:rt});const lt=nt.litElementPolyfillSupport;lt?.({LitElement:rt}),(nt.litElementVersions??=[]).push("4.2.1");class at extends rt{createRenderRoot(){return this}}var ct=/([:*])(\w+)/g,ht=/\*/g,dt=/\/\?/g;function ut(t){return void 0===t&&(t="/"),xt()?location.pathname+location.search+location.hash:t}function pt(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function mt(t){return"string"==typeof t}function ft(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function gt(t){var e=pt(t).split(/\?(.*)?$/);return[pt(e[0]),e.slice(1).join("")]}function bt(t){for(var e={},i=t.split("&"),s=0;s<i.length;s++){var o=i[s].split("=");if(""!==o[0]){var n=decodeURIComponent(o[0]);e[n]?(Array.isArray(e[n])||(e[n]=[e[n]]),e[n].push(decodeURIComponent(o[1]||""))):e[n]=decodeURIComponent(o[1]||"")}}return e}function vt(t,e){var i,s=gt(pt(t.currentLocationPath)),o=s[0],n=s[1],r=""===n?null:bt(n),l=[];if(mt(e.path)){if(i="(?:/^|^)"+pt(e.path).replace(ct,function(t,e,i){return l.push(i),"([^/]+)"}).replace(ht,"?(?:.*)").replace(dt,"/?([^/]+|)")+"$",""===pt(e.path)&&""===pt(o))return{url:o,queryString:n,hashString:ft(t.to),route:e,data:null,params:r}}else i=e.path;var a=new RegExp(i,""),c=o.match(a);if(c){var h=mt(e.path)?function(t,e){return 0===e.length?null:t?t.slice(1,t.length).reduce(function(t,i,s){return null===t&&(t={}),t[e[s]]=decodeURIComponent(i),t},null):null}(c,l):c.groups?c.groups:c.slice(1);return{url:pt(o.replace(new RegExp("^"+t.instance.root),"")),queryString:n,hashString:ft(t.to),route:e,data:h,params:r}}return!1}function yt(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function wt(t,e){return void 0===t[e]||!0===t[e]}function xt(){return"undefined"!=typeof window}function kt(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),t.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(i){t[i]&&(e[i]||(e[i]=[]),e[i].push(t[i]))})}),e}function _t(t,e,i){var s=e||{},o=0;!function e(){t[o]?Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](s)?t[o][1]:t[o][2])),e()):t[o](s,function(t){void 0===t||!0===t?(o+=1,e()):i&&i(s)}):i&&i(s)}()}function $t(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=ut(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function Ct(t,e){for(var i=0;i<t.instance.routes.length;i++){var s=vt(t,t.instance.routes[i]);if(s&&(t.matches||(t.matches=[]),t.matches.push(s),"ONE"===t.resolveOptions.strategy))return void e()}e()}function St(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function At(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}_t.if=function(t,e,i){return Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]),[t,e,i]};var zt=xt(),Et=yt();function Tt(t,e){if(wt(t.navigateOptions,"updateBrowserURL")){var i=("/"+t.to).replace(/\/\//g,"/"),s=zt&&t.resolveOptions&&!0===t.resolveOptions.hash;Et?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",s?"#"+i:i),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!s){var e=location.hash;location.hash="",location.hash=e}t.instance.__freezeListening=!1},1))):zt&&(window.location.href=t.to)}e()}function Lt(t,e){var i=t.instance;i.lastResolved()?_t(i.lastResolved().map(function(e){return function(i,s){if(e.route.hooks&&e.route.hooks.leave){var o=!1,n=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);if("*"!==e.route.path)o=!n;else o=!(!!t.matches&&t.matches.find(function(t){return e.route.path===t.route.path}));wt(t.navigateOptions,"callHooks")&&o?_t(e.route.hooks.leave.map(function(e){return function(i,s){return e(function(e){!1===e?t.instance.__markAsClean(t):s()},t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}}).concat([function(){return s()}])):s()}else s()}}),{},function(){return e()}):e()}function Rt(t,e){wt(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var Pt=[function(t,e){var i=t.instance.lastResolved();if(i&&i[0]&&i[0].route===t.match.route&&i[0].url===t.match.url&&i[0].queryString===t.match.queryString)return i.forEach(function(e){e.route.hooks&&e.route.hooks.already&&wt(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach(function(e){return e(t.match)})}),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&wt(t.navigateOptions,"callHooks")?_t(t.match.route.hooks.before.map(function(e){return function(i,s){return e(function(e){!1===e?t.instance.__markAsClean(t):s()},t.match)}}).concat([function(){return e()}])):e()},function(t,e){wt(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&wt(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),e()}],Ot=[Lt,function(t,e){var i=t.instance._notFoundRoute;if(i){t.notFoundHandled=!0;var s=gt(t.currentLocationPath),o=s[0],n=s[1],r=ft(t.to);i.path=pt(o);var l={url:i.path,queryString:n,hashString:r,data:null,route:i,params:""!==n?bt(n):null};t.matches=[l],t.match=l}e()},_t.if(function(t){return t.notFoundHandled},Pt.concat([Rt]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function It(){return It=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},It.apply(this,arguments)}function Dt(t,e){var i=0;Lt(t,function s(){i!==t.matches.length?_t(Pt,It({},t,{match:t.matches[i]}),function(){i+=1,s()}):Rt(t,e)})}function Bt(t){t.instance.__markAsClean(t)}function Mt(){return Mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Mt.apply(this,arguments)}var Ft="[data-navigo]";function Nt(t,e){var i,s=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:Ft},o=this,n="/",r=null,l=[],a=!1,c=yt(),h=xt();function d(t){return t.indexOf("#")>=0&&(t=!0===s.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function u(t){return pt(n+"/"+pt(t))}function p(t,e,i,s){return t=mt(t)?u(t):t,{name:s||pt(String(t)),path:t,handler:e,hooks:kt(i)}}function m(t,e){if(!o.__dirty){o.__dirty=!0,t=t?pt(n)+"/"+pt(t):void 0;var i={instance:o,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:Mt({},s,e)};return _t([$t,Ct,_t.if(function(t){var e=t.matches;return e&&e.length>0},Dt,Ot)],i,Bt),!!i.matches&&i.matches}o.__waiting.push(function(){return o.resolve(t,e)})}function f(t,e){if(o.__dirty)o.__waiting.push(function(){return o.navigate(t,e)});else{o.__dirty=!0,t=pt(n)+"/"+pt(t);var i={instance:o,to:t,navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:s,currentLocationPath:d(t)};_t([St,At,Ct,_t.if(function(t){var e=t.matches;return e&&e.length>0},Dt,Ot),Tt,Bt],i,Bt)}}function g(){if(h)return function(){if(h)return[].slice.call(document.querySelectorAll(s.linksSelector||Ft));return[]}().forEach(function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var i=t.getAttribute("href");if(null==i)return!1;if(i.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var s=new URL(i);i=s.pathname+s.search}catch(t){}var n=function(t){if(!t)return{};var e,i=t.split(","),s={};return i.forEach(function(t){var i=t.split(":").map(function(t){return t.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":s.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=i[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===i[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":s[i[0]]="true"===i[1]}}),e&&(s.resolveOptions=e),s}(t.getAttribute("data-navigo-options"));a||(e.preventDefault(),e.stopPropagation(),o.navigate(pt(i),n))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)}),o}function b(t,e,i){var s=l.find(function(e){return e.name===t}),o=null;if(s){if(o=s.path,e)for(var r in e)o=o.replace(":"+r,e[r]);o=o.match(/^\//)?o:"/"+o}return o&&i&&!i.includeRoot&&(o=o.replace(new RegExp("^/"+n),"")),o}function v(t){var e=gt(pt(t)),s=e[0],o=e[1],n=""===o?null:bt(o);return{url:s,queryString:o,hashString:ft(t),route:p(s,function(){},[i],s),data:null,params:n}}function y(t,e,i){return"string"==typeof e&&(e=w(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(i),function(){e.hooks[t]=e.hooks[t].filter(function(t){return t!==i})}):(console.warn("Route doesn't exists: "+e),function(){})}function w(t){return"string"==typeof t?l.find(function(e){return e.name===u(t)}):l.find(function(e){return e.handler===t})}t?n=pt(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=n,this.routes=l,this.destroyed=a,this.current=r,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,s){var o=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(s=e,e=t,t=n),l.push(p(t,e,[i,s])),this):(Object.keys(t).forEach(function(e){if("function"==typeof t[e])o.on(e,t[e]);else{var s=t[e],n=s.uses,r=s.as,a=s.hooks;l.push(p(e,n,[i,a],r))}}),this)},this.off=function(t){return this.routes=l=l.filter(function(e){return mt(t)?pt(e.path)!==pt(t):function(t){return"function"==typeof t}(t)?t!==e.handler:String(e.path)!==String(t)}),this},this.resolve=m,this.navigate=f,this.navigateByName=function(t,e,i){var s=b(t,e);return null!==s&&(f(s.replace(new RegExp("^/?"+n),""),i),!0)},this.destroy=function(){this.routes=l=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=a=!0},this.notFound=function(t,e){return o._notFoundRoute=p("*",t,[i,e],"__NOT_FOUND__"),this},this.updatePageLinks=g,this.link=function(t){return"/"+n+"/"+pt(t)},this.hooks=function(t){return i=t,this},this.extractGETParameters=function(t){return gt(d(t))},this.lastResolved=function(){return r},this.generate=b,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:o,currentLocationPath:t,to:t,resolveOptions:s};return Ct(e,function(){}),!!e.matches&&e.matches},this.matchLocation=function(t,e,i){void 0===e||void 0!==i&&!i||(e=u(e));var s={instance:o,to:e,currentLocationPath:e};$t(s,function(){}),"string"==typeof t&&(t=void 0===i||i?u(t):t);var n=vt(s,{name:String(t),path:t,handler:function(){},hooks:{}});return n||!1},this.getCurrentLocation=function(){return v(pt(ut(n)).replace(new RegExp("^"+n),""))},this.addBeforeHook=y.bind(this,"before"),this.addAfterHook=y.bind(this,"after"),this.addAlreadyHook=y.bind(this,"already"),this.addLeaveHook=y.bind(this,"leave"),this.getRoute=w,this._pathToMatchObject=v,this._clean=pt,this._checkForAHash=d,this._setCurrent=function(t){return r=o.current=t},function(){c&&(this.__popstateListener=function(){o.__freezeListening||m()},window.addEventListener("popstate",this.__popstateListener))}.call(this),g.call(this)}class Vt{#t;static#e;constructor(){if(Vt.#e)throw new Error("Router is a singleton, use Router.getInstance()");this.#t=new Nt("/",{hash:!0})}static getInstance(){return Vt.#e||(Vt.#e=new Vt),Vt.#e}register(t,e){const i=document.querySelector(t);if(!i)throw new Error(`Outlet element not found: ${t}`);e.map(t=>{"*"!=t.path?this.#t.on(t.path,e=>{const s=t.render(e);ot(s,i)}):this.#t.notFound(()=>{const e=t.render();ot(e,i)})}),this.#t.resolve()}navigate(t){location.hash=t}getPath(){return this.#t.getCurrentLocation().hashString}isPath(t){return this.getPath()===t}}const Ht="/content/:dir/:file",Ut=t=>{const e=document.documentElement;e.classList.remove("sl-theme-light","sl-theme-dark"),e.classList.add(`sl-theme-${t}`)},qt=()=>{const t=localStorage.getItem("theme");return"light"==t||"dark"==t?t:"light"};var jt=r`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Wt=Object.defineProperty,Kt=Object.defineProperties,Gt=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Qt=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,Jt=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),te=t=>{throw TypeError(t)},ee=(t,e,i)=>e in t?Wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ie=(t,e)=>{for(var i in e||(e={}))Xt.call(e,i)&&ee(t,i,e[i]);if(Qt)for(var i of Qt(e))Yt.call(e,i)&&ee(t,i,e[i]);return t},se=(t,e)=>Kt(t,Zt(e)),oe=(t,e,i,s)=>{for(var o,n=s>1?void 0:s?Gt(e,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(n=(s?o(e,i,n):o(n))||n);return s&&n&&Wt(e,i,n),n},ne=(t,e,i)=>e.has(t)||te("Cannot "+i),re=function(t,e){this[0]=t,this[1]=e};function*le(t=document.activeElement){var e,i,s,o,n;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=le(t.shadowRoot.activeElement),s=e[Jt("asyncIterator")],o=!1,n={},null==s?(s=e[Jt("iterator")](),i=t=>n[t]=e=>s[t](e)):(s=s.call(e),i=t=>n[t]=e=>{if(o){if(o=!1,"throw"===t)throw e;return e}return o=!0,{done:!1,value:new re(new Promise(i=>{var o=s[t](e);o instanceof Object||te("Object expected"),i(o)}),1)}}),n[Jt("iterator")]=()=>n,i("next"),"throw"in s?i("throw"):n.throw=t=>{throw t},"return"in s&&i("return"),n)))}function ae(){return[...le()].pop()}var ce=new WeakMap;function he(t){let e=ce.get(t);return e||(e=window.getComputedStyle(t,null),ce.set(t,e)),e}function de(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,s=e.querySelector(`${i}:checked`);if(s)return s===t;return e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=he(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return!0;if(t.hasAttribute("tabindex"))return!0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=he(t),{overflowY:i,overflowX:s}=e;return"scroll"===i||"scroll"===s||"auto"===i&&"auto"===s&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==s))}(t)}function ue(t){const e=new WeakMap,i=[];return function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]"))return;if(e.has(o))return;e.set(o,!0),!i.includes(o)&&de(o)&&i.push(o),o instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(o,t)&&o.assignedElements({flatten:!0}).forEach(t=>{s(t)}),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&s(o.shadowRoot)}for(const t of o.children)s(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var pe=[],me=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=ae();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=ue(this.element);let o=s.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const n="forward"===this.tabDirection?1:-1;for(;;){o+n>=s.length?o=0:o+n<0?o=s.length-1:o+=n,this.previousFocus=this.currentFocus;const i=s[o];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const r=[...le()];if(r.includes(this.currentFocus)||!r.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){pe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){pe=pe.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return pe[pe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=ue(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s="forward"===this.tabDirection?e:i;"function"==typeof(null==s?void 0:s.focus)&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var fe=new Set;function ge(t){if(fe.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function be(t){fe.delete(t),0===fe.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function ve(t,e,i="vertical",s="smooth"){const o=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),n=o.top+e.scrollTop,r=o.left+e.scrollLeft,l=e.scrollLeft,a=e.scrollLeft+e.offsetWidth,c=e.scrollTop,h=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(r<l?e.scrollTo({left:r,behavior:s}):r+t.clientWidth>a&&e.scrollTo({left:r-e.offsetWidth+t.clientWidth,behavior:s})),"vertical"!==i&&"both"!==i||(n<c?e.scrollTo({top:n,behavior:s}):n+t.clientHeight>h&&e.scrollTo({top:n-e.offsetHeight+t.clientHeight,behavior:s}))}var ye=r`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,we="";function xe(t){we=t}var ke={name:"default",resolver:t=>function(t=""){if(!we){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)xe(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),xe(i.split("/").slice(0,-1).join("/"))}}return we.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},_e={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},$e=[ke,{name:"system",resolver:t=>t in _e?`data:image/svg+xml,${encodeURIComponent(_e[t])}`:""}],Ce=[];function Se(t){return $e.find(e=>e.name===t)}function Ae(t,e){!function(t){$e=$e.filter(e=>e.name!==t)}(t),$e.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Ce.forEach(e=>{e.library===t&&e.setIcon()})}var ze=r`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function Ee(t,e){const i=ie({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:o}=e,n=Array.isArray(t)?t:[t];e.update=function(t){n.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),n=this[o];e!==n&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,n))}}),o.call(this,t)}}}var Te=r`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;const Le={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},Re=(t=Le,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function Pe(t){return(e,i)=>"object"==typeof i?Re(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Oe(t){return Pe({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function Ie(t,e){return(e,i,s)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var De,Be=class extends rt{constructor(){var t,e,i;super(),t=this,i=!1,(e=De).has(t)?te("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,ie({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch(s){customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",n=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(n=" v"+s.version),o&&n&&o===n||console.warn(`Attempted to register <${t}>${o}, but <${t}>${n} has already been registered.`)}attributeChangedCallback(t,e,i){var s,o;ne(s=this,o=De,"read from private field"),o.get(s)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{ne(t,e,"write to private field"),e.set(t,i)})(this,De,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};De=new WeakMap,Be.version="2.20.1",Be.dependencies={},oe([Pe()],Be.prototype,"dir",2),oe([Pe()],Be.prototype,"lang",2);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Me=t=>void 0===t.strings,Fe={},Ne=(t,e=Fe)=>t._$AH=e;var Ve,He=Symbol(),Ue=Symbol(),qe=new Map,je=class extends Be{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(null==e?void 0:e.spriteSheet)return this.svg=H`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return 410===s.status?He:Ue}catch(t){return Ue}try{const t=document.createElement("div");t.innerHTML=await s.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return He;Ve||(Ve=new DOMParser);const o=Ve.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):He}catch(t){return He}}connectedCallback(){var t;super.connectedCallback(),t=this,Ce.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Ce=Ce.filter(e=>e!==t)}getIconSource(){const t=Se(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Se(this.library):void 0;if(!e)return void(this.svg=null);let o=qe.get(e);if(o||(o=this.resolveIcon(e,s),qe.set(e,o)),!this.initialRender)return;const n=await o;if(n===Ue&&qe.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(n)){if(this.svg=n,s){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof s.mutator&&t&&s.mutator(t)}}else switch(n){case Ue:case He:this.svg=null,this.emit("sl-error");break;default:this.svg=n.cloneNode(!0),null==(t=null==s?void 0:s.mutator)||t.call(s,this.svg),this.emit("sl-load")}}render(){return this.svg}};je.styles=[Te,ze],oe([Oe()],je.prototype,"svg",2),oe([Pe({reflect:!0})],je.prototype,"name",2),oe([Pe()],je.prototype,"src",2),oe([Pe()],je.prototype,"label",2),oe([Pe({reflect:!0})],je.prototype,"library",2),oe([Ee("label")],je.prototype,"handleLabelChange",1),oe([Ee(["name","src","library"])],je.prototype,"setIcon",1);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const We=1,Ke=2,Ge=3,Ze=4,Qe=t=>(...e)=>({_$litDirective$:t,values:e});let Xe=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const Ye=Qe(class extends Xe{constructor(t){if(super(t),t.type!==We||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return U}}),Je=Symbol.for(""),ti=t=>{if(t?.r===Je)return t?._$litStatic$},ei=(t,...e)=>({_$litStatic$:e.reduce((e,i,s)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Je}),ii=new Map,si=(t=>(e,...i)=>{const s=i.length;let o,n;const r=[],l=[];let a,c=0,h=!1;for(;c<s;){for(a=e[c];c<s&&void 0!==(n=i[c],o=ti(n));)a+=o+e[++c],h=!0;c!==s&&l.push(n),r.push(a),c++}if(c===s&&r.push(e[s]),h){const t=r.join("$$lit$$");void 0===(e=ii.get(t))&&(r.raw=r,ii.set(t,e=r)),i=l}return t(e,...i)})(H),oi=t=>t??q;
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var ni=class extends Be{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?ei`a`:ei`button`;return si`
      <${e}
        part="base"
        class=${Ye({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${oi(t?void 0:this.disabled)}
        type=${oi(t?void 0:"button")}
        href=${oi(t?this.href:void 0)}
        target=${oi(t?this.target:void 0)}
        download=${oi(t?this.download:void 0)}
        rel=${oi(t&&this.target?"noreferrer noopener":void 0)}
        role=${oi(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${oi(this.name)}
          library=${oi(this.library)}
          src=${oi(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ni.styles=[Te,ye],ni.dependencies={"sl-icon":je},oe([Ie(".icon-button")],ni.prototype,"button",2),oe([Oe()],ni.prototype,"hasFocus",2),oe([Pe()],ni.prototype,"name",2),oe([Pe()],ni.prototype,"library",2),oe([Pe()],ni.prototype,"src",2),oe([Pe()],ni.prototype,"href",2),oe([Pe()],ni.prototype,"target",2),oe([Pe()],ni.prototype,"download",2),oe([Pe()],ni.prototype,"label",2),oe([Pe({type:Boolean,reflect:!0})],ni.prototype,"disabled",2);var ri=new Map,li=new WeakMap;function ai(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function ci(t,e){ri.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function hi(t,e,i){const s=li.get(t);if(null==s?void 0:s[e])return ai(s[e],i.dir);const o=ri.get(e);return o?ai(o,i.dir):{keyframes:[],options:{duration:0}}}function di(t,e){return new Promise(i=>{t.addEventListener(e,function s(o){o.target===t&&(t.removeEventListener(e,s),i())})})}function ui(t,e,i){return new Promise(s=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,se(ie({},i),{duration:mi()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function pi(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function mi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function fi(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function gi(t,e){return t.map(t=>se(ie({},t),{height:"auto"===t.height?`${e}px`:t.height}))}var bi=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const vi=new Set,yi=new Map;let wi,xi="ltr",ki="en";const _i="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(_i){const t=new MutationObserver(Ci);xi=document.documentElement.dir||"ltr",ki=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function $i(...t){t.map(t=>{const e=t.$code.toLowerCase();yi.has(e)?yi.set(e,Object.assign(Object.assign({},yi.get(e)),t)):yi.set(e,t),wi||(wi=t)}),Ci()}function Ci(){_i&&(xi=document.documentElement.dir||"ltr",ki=document.documentElement.lang||navigator.language),[...vi.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let Si=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){vi.add(this.host)}hostDisconnected(){vi.delete(this.host)}dir(){return`${this.host.dir||xi}`.toLowerCase()}lang(){return`${this.host.lang||ki}`.toLowerCase()}getTranslationData(t){var e,i;const s=new Intl.Locale(t.replace(/_/g,"-")),o=null==s?void 0:s.language.toLowerCase(),n=null!==(i=null===(e=null==s?void 0:s.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:s,language:o,region:n,primary:yi.get(`${o}-${n}`),secondary:yi.get(o)}}exists(t,e){var i;const{primary:s,secondary:o}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||o&&o[t]||e.includeFallback&&wi&&wi[t])}term(t,...e){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(s&&s[t])o=s[t];else{if(!wi||!wi[t])return console.error(`No translation found for: ${String(t)}`),String(t);o=wi[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};var Ai={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$i(Ai);var zi=Ai,Ei=class extends Si{};function Ti(t){return t.charAt(0).toUpperCase()+t.slice(1)}$i(zi);var Li=class extends Be{constructor(){super(...arguments),this.hasSlotController=new bi(this,"footer"),this.localize=new Ei(this),this.modal=new me(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ge(this)))}disconnectedCallback(){super.disconnectedCallback(),be(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=hi(this,"drawer.denyClose",{dir:this.localize.dir()});return void ui(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ge(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([fi(this.drawer),fi(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=hi(this,`drawer.show${Ti(this.placement)}`,{dir:this.localize.dir()}),i=hi(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ui(this.panel,e.keyframes,e.options),ui(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{(t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())})(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),be(this)),await Promise.all([fi(this.drawer),fi(this.overlay)]);const t=hi(this,`drawer.hide${Ti(this.placement)}`,{dir:this.localize.dir()}),e=hi(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ui(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),ui(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ge(this)),this.open&&this.contained&&(this.modal.deactivate(),be(this))}async show(){if(!this.open)return this.open=!0,di(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,di(this,"sl-after-hide")}render(){return H`
      <div
        part="base"
        class=${Ye({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${oi(this.noHeader?this.label:void 0)}
          aria-labelledby=${oi(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":H`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Li.styles=[Te,jt],Li.dependencies={"sl-icon-button":ni},oe([Ie(".drawer")],Li.prototype,"drawer",2),oe([Ie(".drawer__panel")],Li.prototype,"panel",2),oe([Ie(".drawer__overlay")],Li.prototype,"overlay",2),oe([Pe({type:Boolean,reflect:!0})],Li.prototype,"open",2),oe([Pe({reflect:!0})],Li.prototype,"label",2),oe([Pe({reflect:!0})],Li.prototype,"placement",2),oe([Pe({type:Boolean,reflect:!0})],Li.prototype,"contained",2),oe([Pe({attribute:"no-header",type:Boolean,reflect:!0})],Li.prototype,"noHeader",2),oe([Ee("open",{waitUntilFirstUpdate:!0})],Li.prototype,"handleOpenChange",1),oe([Ee("contained",{waitUntilFirstUpdate:!0})],Li.prototype,"handleNoModalChange",1),ci("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ci("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),ci("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ci("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),ci("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),ci("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),ci("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),ci("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),ci("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),ci("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),ci("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Li.define("sl-drawer");var Ri=r`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Pi=r`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Oi=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(e,n,r){var l;const a=s.getPropertyOptions(t);if(e===("string"==typeof a.attribute?a.attribute:t)){const e=a.converter||y,s=("function"==typeof e?e:null!=(l=null==e?void 0:e.fromAttribute)?l:y.fromAttribute)(r,a.type);this[t]!==s&&(this[i]=s)}o.call(this,e,n,r)}},Ii=r`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Di=new WeakMap,Bi=new WeakMap,Mi=new WeakMap,Fi=new WeakSet,Ni=new WeakMap,Vi=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!o&&"string"==typeof i&&i.length>0&&void 0!==s&&(Array.isArray(s)?s.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,s.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Di.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ni.set(this.host,[])},this.handleInteraction=t=>{const e=Ni.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ie({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ni.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ni.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Di.has(this.form)?Di.get(this.form).add(this.host):Di.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Bi.has(this.form)||(Bi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Mi.has(this.form)||(Mi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Di.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Bi.has(this.form)&&(this.form.reportValidity=Bi.get(this.form),Bi.delete(this.form)),Mi.has(this.form)&&(this.form.checkValidity=Mi.get(this.form),Mi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Fi.add(t):Fi.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(Fi.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},Hi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ui=Object.freeze(se(ie({},Hi),{valid:!1,valueMissing:!0})),qi=Object.freeze(se(ie({},Hi),{valid:!1,customError:!0}));
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const ji=Qe(class extends Xe{constructor(t){if(super(t),t.type!==Ge&&t.type!==We&&t.type!==Ze)throw Error("The `live` directive is not allowed on child or event bindings");if(!Me(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===U||e===q)return e;const i=t.element,s=t.name;if(t.type===Ge){if(e===i[s])return U}else if(t.type===Ze){if(!!e===i.hasAttribute(s))return U}else if(t.type===We&&i.getAttribute(s)===e+"")return U;return Ne(t),e}});var Wi=class extends Be{constructor(){super(...arguments),this.formControlController=new Vi(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new bi(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return H`
      <div
        class=${Ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Ye({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${oi(this.value)}
            .indeterminate=${ji(this.indeterminate)}
            .checked=${ji(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?H`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?H`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Wi.styles=[Te,Ii,Pi],Wi.dependencies={"sl-icon":je},oe([Ie('input[type="checkbox"]')],Wi.prototype,"input",2),oe([Oe()],Wi.prototype,"hasFocus",2),oe([Pe()],Wi.prototype,"title",2),oe([Pe()],Wi.prototype,"name",2),oe([Pe()],Wi.prototype,"value",2),oe([Pe({reflect:!0})],Wi.prototype,"size",2),oe([Pe({type:Boolean,reflect:!0})],Wi.prototype,"disabled",2),oe([Pe({type:Boolean,reflect:!0})],Wi.prototype,"checked",2),oe([Pe({type:Boolean,reflect:!0})],Wi.prototype,"indeterminate",2),oe([Oi("checked")],Wi.prototype,"defaultChecked",2),oe([Pe({reflect:!0})],Wi.prototype,"form",2),oe([Pe({type:Boolean,reflect:!0})],Wi.prototype,"required",2),oe([Pe({attribute:"help-text"})],Wi.prototype,"helpText",2),oe([Ee("disabled",{waitUntilFirstUpdate:!0})],Wi.prototype,"handleDisabledChange",1),oe([Ee(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Wi.prototype,"handleStateChange",1);var Ki=r`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,Gi=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this)}render(){return H`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
function Zi(t,e,i){return t?e(t):i?.(t)}Gi.styles=[Te,Ki];var Qi=class t extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await fi(this.childrenContainer);const{keyframes:t,options:e}=hi(this,"tree-item.collapse",{dir:this.localize.dir()});await ui(this.childrenContainer,gi(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await fi(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=hi(this,"tree-item.expand",{dir:this.localize.dir()});await ui(this.childrenContainer,gi(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return H`
      <div
        part="base"
        class="${Ye({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Ye({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${Zi(this.loading,()=>H` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Zi(this.selectable,()=>H`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ji(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};Qi.styles=[Te,Ri],Qi.dependencies={"sl-checkbox":Wi,"sl-icon":je,"sl-spinner":Gi},oe([Oe()],Qi.prototype,"indeterminate",2),oe([Oe()],Qi.prototype,"isLeaf",2),oe([Oe()],Qi.prototype,"loading",2),oe([Oe()],Qi.prototype,"selectable",2),oe([Pe({type:Boolean,reflect:!0})],Qi.prototype,"expanded",2),oe([Pe({type:Boolean,reflect:!0})],Qi.prototype,"selected",2),oe([Pe({type:Boolean,reflect:!0})],Qi.prototype,"disabled",2),oe([Pe({type:Boolean,reflect:!0})],Qi.prototype,"lazy",2),oe([Ie("slot:not([name])")],Qi.prototype,"defaultSlot",2),oe([Ie("slot[name=children]")],Qi.prototype,"childrenSlot",2),oe([Ie(".tree-item__item")],Qi.prototype,"itemElement",2),oe([Ie(".tree-item__children")],Qi.prototype,"childrenContainer",2),oe([Ie(".tree-item__expand-button slot")],Qi.prototype,"expandButtonSlot",2),oe([Ee("loading",{waitUntilFirstUpdate:!0})],Qi.prototype,"handleLoadingChange",1),oe([Ee("disabled")],Qi.prototype,"handleDisabledChange",1),oe([Ee("selected")],Qi.prototype,"handleSelectedChange",1),oe([Ee("expanded",{waitUntilFirstUpdate:!0})],Qi.prototype,"handleExpandedChange",1),oe([Ee("expanded",{waitUntilFirstUpdate:!0})],Qi.prototype,"handleExpandAnimation",1),oe([Ee("lazy",{waitUntilFirstUpdate:!0})],Qi.prototype,"handleLazyChange",1);var Xi=Qi;ci("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),ci("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var Yi=r`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Ji(t,e,i){const s=t=>Object.is(t,-0)?0:t;return s(t<e?e:t>i?i:t)}function ts(t,e=!1){function i(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const i=e.every(t=>t.selected),s=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!s}}!function t(s){for(const i of s.getChildrenItems())i.selected=e?s.selected||i.selected:!i.disabled&&s.selected,t(i);e&&i(s)}(t),function t(e){const s=e.parentElement;Xi.isTreeItem(s)&&(i(s),t(s))}(t)}var es=class extends Be{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Ei(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(null===i?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(Xi.isTreeItem),i=[...e.removedNodes].filter(Xi.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),Xi.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),ts(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const i of e)i.selected=i===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;const e=this.getFocusableItems(),i="ltr"===this.localize.dir(),s="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const o=e.findIndex(t=>t.matches(":focus")),n=e[o],r=t=>{const i=e[Ji(t,0,e.length-1)];this.focusItem(i)},l=t=>{n.expanded=t};"ArrowDown"===t.key?r(o+1):"ArrowUp"===t.key?r(o-1):i&&"ArrowRight"===t.key||s&&"ArrowLeft"===t.key?!n||n.disabled||n.expanded||n.isLeaf&&!n.lazy?r(o+1):l(!0):i&&"ArrowLeft"===t.key||s&&"ArrowRight"===t.key?!n||n.disabled||n.isLeaf||!n.expanded?r(o-1):l(!1):"Home"===t.key?r(0):"End"===t.key?r(e.length-1):"Enter"!==t.key&&" "!==t.key||n.disabled||this.selectItem(n)}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>ts(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;const s=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(t),!e.has(t)})}render(){return H`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};es.styles=[Te,Yi],oe([Ie("slot:not([name])")],es.prototype,"defaultSlot",2),oe([Ie("slot[name=expand-icon]")],es.prototype,"expandedIconSlot",2),oe([Ie("slot[name=collapse-icon]")],es.prototype,"collapsedIconSlot",2),oe([Pe()],es.prototype,"selection",2),oe([Ee("selection")],es.prototype,"handleSelectionChange",1),es.define("sl-tree"),Xi.define("sl-tree-item");var is=r`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,ss=class extends Be{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};ss.styles=[Te,is],oe([Pe({type:Boolean,reflect:!0})],ss.prototype,"vertical",2),oe([Ee("vertical")],ss.prototype,"handleVerticalChange",1),ss.define("sl-divider");var os=r`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var ns=()=>null,rs=class extends Be{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Ei(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ns,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:n,vertical:r})=>{let l=i,a=Number.POSITIVE_INFINITY;return e.forEach(e=>{let c;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),o=e.endsWith("%"),l=Number.parseFloat(e),a=o?s*(l/100):l;c=Math.round((n&&!r?s-i:i)/a)*a}else c=e.endsWith("%")?s*(Number.parseFloat(e)/100):Number.parseFloat(e);n&&!r&&(c=s-c);const h=Math.abs(i-c);h<=o&&h<a&&(l=c,a=h)}),l}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:ns}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),function(t,e){function i(i){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,n=s.left+o.scrollX,r=s.top+o.scrollY,l=i.pageX-n,a=i.pageY-r;(null==e?void 0:e.onMove)&&e.onMove(l,a)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}(this,{onMove:(t,i)=>{var s;let o=this.vertical?i:t;"end"===this.primary&&(o=this.size-o),o=null!=(s=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?s:o,this.position=Ji(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=Ji(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),s=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,o="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",H`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${oi(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};rs.styles=[Te,os],oe([Ie(".divider")],rs.prototype,"divider",2),oe([Pe({type:Number,reflect:!0})],rs.prototype,"position",2),oe([Pe({attribute:"position-in-pixels",type:Number})],rs.prototype,"positionInPixels",2),oe([Pe({type:Boolean,reflect:!0})],rs.prototype,"vertical",2),oe([Pe({type:Boolean,reflect:!0})],rs.prototype,"disabled",2),oe([Pe()],rs.prototype,"primary",2),oe([Pe({reflect:!0})],rs.prototype,"snap",1),oe([Pe({type:Number,attribute:"snap-threshold"})],rs.prototype,"snapThreshold",2),oe([Ee("position")],rs.prototype,"handlePositionChange",1),oe([Ee("positionInPixels")],rs.prototype,"handlePositionInPixelsChange",1),oe([Ee("vertical")],rs.prototype,"handleVerticalChange",1),rs.define("sl-split-panel");var ls=r`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,as=r`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const cs=Math.min,hs=Math.max,ds=Math.round,us=Math.floor,ps=t=>({x:t,y:t}),ms={left:"right",right:"left",bottom:"top",top:"bottom"},fs={start:"end",end:"start"};function gs(t,e,i){return hs(t,cs(e,i))}function bs(t,e){return"function"==typeof t?t(e):t}function vs(t){return t.split("-")[0]}function ys(t){return t.split("-")[1]}function ws(t){return"x"===t?"y":"x"}function xs(t){return"y"===t?"height":"width"}const ks=new Set(["top","bottom"]);function _s(t){return ks.has(vs(t))?"y":"x"}function $s(t){return ws(_s(t))}function Cs(t){return t.replace(/start|end/g,t=>fs[t])}const Ss=["left","right"],As=["right","left"],zs=["top","bottom"],Es=["bottom","top"];function Ts(t,e,i,s){const o=ys(t);let n=function(t,e,i){switch(t){case"top":case"bottom":return i?e?As:Ss:e?Ss:As;case"left":case"right":return e?zs:Es;default:return[]}}(vs(t),"start"===i,s);return o&&(n=n.map(t=>t+"-"+o),e&&(n=n.concat(n.map(Cs)))),n}function Ls(t){return t.replace(/left|right|bottom|top/g,t=>ms[t])}function Rs(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Ps(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function Os(t,e,i){let{reference:s,floating:o}=t;const n=_s(e),r=$s(e),l=xs(r),a=vs(e),c="y"===n,h=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,u=s[l]/2-o[l]/2;let p;switch(a){case"top":p={x:h,y:s.y-o.height};break;case"bottom":p={x:h,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-o.width,y:d};break;default:p={x:s.x,y:s.y}}switch(ys(e)){case"start":p[r]-=u*(i&&c?-1:1);break;case"end":p[r]+=u*(i&&c?-1:1)}return p}async function Is(t,e){var i;void 0===e&&(e={});const{x:s,y:o,platform:n,rects:r,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=bs(e,t),m=Rs(p),f=l[u?"floating"===d?"reference":"floating":d],g=Ps(await n.getClippingRect({element:null==(i=await(null==n.isElement?void 0:n.isElement(f)))||i?f:f.contextElement||await(null==n.getDocumentElement?void 0:n.getDocumentElement(l.floating)),boundary:c,rootBoundary:h,strategy:a})),b="floating"===d?{x:s,y:o,width:r.floating.width,height:r.floating.height}:r.reference,v=await(null==n.getOffsetParent?void 0:n.getOffsetParent(l.floating)),y=await(null==n.isElement?void 0:n.isElement(v))&&await(null==n.getScale?void 0:n.getScale(v))||{x:1,y:1},w=Ps(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:v,strategy:a}):b);return{top:(g.top-w.top+m.top)/y.y,bottom:(w.bottom-g.bottom+m.bottom)/y.y,left:(g.left-w.left+m.left)/y.x,right:(w.right-g.right+m.right)/y.x}}const Ds=new Set(["left","top"]);function Bs(){return"undefined"!=typeof window}function Ms(t){return Vs(t)?(t.nodeName||"").toLowerCase():"#document"}function Fs(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Ns(t){var e;return null==(e=(Vs(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Vs(t){return!!Bs()&&(t instanceof Node||t instanceof Fs(t).Node)}function Hs(t){return!!Bs()&&(t instanceof Element||t instanceof Fs(t).Element)}function Us(t){return!!Bs()&&(t instanceof HTMLElement||t instanceof Fs(t).HTMLElement)}function qs(t){return!(!Bs()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof Fs(t).ShadowRoot)}const js=new Set(["inline","contents"]);function Ws(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=oo(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!js.has(o)}const Ks=new Set(["table","td","th"]);function Gs(t){return Ks.has(Ms(t))}const Zs=[":popover-open",":modal"];function Qs(t){return Zs.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const Xs=["transform","translate","scale","rotate","perspective"],Ys=["transform","translate","scale","rotate","perspective","filter"],Js=["paint","layout","strict","content"];function to(t){const e=eo(),i=Hs(t)?oo(t):t;return Xs.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||Ys.some(t=>(i.willChange||"").includes(t))||Js.some(t=>(i.contain||"").includes(t))}function eo(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const io=new Set(["html","body","#document"]);function so(t){return io.has(Ms(t))}function oo(t){return Fs(t).getComputedStyle(t)}function no(t){return Hs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function ro(t){if("html"===Ms(t))return t;const e=t.assignedSlot||t.parentNode||qs(t)&&t.host||Ns(t);return qs(e)?e.host:e}function lo(t){const e=ro(t);return so(e)?t.ownerDocument?t.ownerDocument.body:t.body:Us(e)&&Ws(e)?e:lo(e)}function ao(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const o=lo(t),n=o===(null==(s=t.ownerDocument)?void 0:s.body),r=Fs(o);if(n){const t=co(r);return e.concat(r,r.visualViewport||[],Ws(o)?o:[],t&&i?ao(t):[])}return e.concat(o,ao(o,[],i))}function co(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function ho(t){const e=oo(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Us(t),n=o?t.offsetWidth:i,r=o?t.offsetHeight:s,l=ds(i)!==n||ds(s)!==r;return l&&(i=n,s=r),{width:i,height:s,$:l}}function uo(t){return Hs(t)?t:t.contextElement}function po(t){const e=uo(t);if(!Us(e))return ps(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:n}=ho(e);let r=(n?ds(i.width):i.width)/s,l=(n?ds(i.height):i.height)/o;return r&&Number.isFinite(r)||(r=1),l&&Number.isFinite(l)||(l=1),{x:r,y:l}}const mo=ps(0);function fo(t){const e=Fs(t);return eo()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:mo}function go(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const o=t.getBoundingClientRect(),n=uo(t);let r=ps(1);e&&(s?Hs(s)&&(r=po(s)):r=po(t));const l=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==Fs(t))&&e}(n,i,s)?fo(n):ps(0);let a=(o.left+l.x)/r.x,c=(o.top+l.y)/r.y,h=o.width/r.x,d=o.height/r.y;if(n){const t=Fs(n),e=s&&Hs(s)?Fs(s):s;let i=t,o=co(i);for(;o&&s&&e!==i;){const t=po(o),e=o.getBoundingClientRect(),s=oo(o),n=e.left+(o.clientLeft+parseFloat(s.paddingLeft))*t.x,r=e.top+(o.clientTop+parseFloat(s.paddingTop))*t.y;a*=t.x,c*=t.y,h*=t.x,d*=t.y,a+=n,c+=r,i=Fs(o),o=co(i)}}return Ps({width:h,height:d,x:a,y:c})}function bo(t,e){const i=no(t).scrollLeft;return e?e.left+i:go(Ns(t)).left+i}function vo(t,e){const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-bo(t,i),y:i.top+e.scrollTop}}const yo=new Set(["absolute","fixed"]);function wo(t,e,i){let s;if("viewport"===e)s=function(t,e){const i=Fs(t),s=Ns(t),o=i.visualViewport;let n=s.clientWidth,r=s.clientHeight,l=0,a=0;if(o){n=o.width,r=o.height;const t=eo();(!t||t&&"fixed"===e)&&(l=o.offsetLeft,a=o.offsetTop)}const c=bo(s);if(c<=0){const t=s.ownerDocument,e=t.body,i=getComputedStyle(e),o="CSS1Compat"===t.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,r=Math.abs(s.clientWidth-e.clientWidth-o);r<=25&&(n-=r)}else c<=25&&(n+=c);return{width:n,height:r,x:l,y:a}}(t,i);else if("document"===e)s=function(t){const e=Ns(t),i=no(t),s=t.ownerDocument.body,o=hs(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),n=hs(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let r=-i.scrollLeft+bo(t);const l=-i.scrollTop;return"rtl"===oo(s).direction&&(r+=hs(e.clientWidth,s.clientWidth)-o),{width:o,height:n,x:r,y:l}}(Ns(t));else if(Hs(e))s=function(t,e){const i=go(t,!0,"fixed"===e),s=i.top+t.clientTop,o=i.left+t.clientLeft,n=Us(t)?po(t):ps(1);return{width:t.clientWidth*n.x,height:t.clientHeight*n.y,x:o*n.x,y:s*n.y}}(e,i);else{const i=fo(t);s={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Ps(s)}function xo(t,e){const i=ro(t);return!(i===e||!Hs(i)||so(i))&&("fixed"===oo(i).position||xo(i,e))}function ko(t,e,i){const s=Us(e),o=Ns(e),n="fixed"===i,r=go(t,!0,n,e);let l={scrollLeft:0,scrollTop:0};const a=ps(0);function c(){a.x=bo(o)}if(s||!s&&!n)if(("body"!==Ms(e)||Ws(o))&&(l=no(e)),s){const t=go(e,!0,n,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else o&&c();n&&!s&&o&&c();const h=!o||s||n?ps(0):vo(o,l);return{x:r.left+l.scrollLeft-a.x-h.x,y:r.top+l.scrollTop-a.y-h.y,width:r.width,height:r.height}}function _o(t){return"static"===oo(t).position}function $o(t,e){if(!Us(t)||"fixed"===oo(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Ns(t)===i&&(i=i.ownerDocument.body),i}function Co(t,e){const i=Fs(t);if(Qs(t))return i;if(!Us(t)){let e=ro(t);for(;e&&!so(e);){if(Hs(e)&&!_o(e))return e;e=ro(e)}return i}let s=$o(t,e);for(;s&&Gs(s)&&_o(s);)s=$o(s,e);return s&&so(s)&&_o(s)&&!to(s)?i:s||function(t){let e=ro(t);for(;Us(e)&&!so(e);){if(to(e))return e;if(Qs(e))return null;e=ro(e)}return null}(t)||i}const So={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const n="fixed"===o,r=Ns(s),l=!!e&&Qs(e.floating);if(s===r||l&&n)return i;let a={scrollLeft:0,scrollTop:0},c=ps(1);const h=ps(0),d=Us(s);if((d||!d&&!n)&&(("body"!==Ms(s)||Ws(r))&&(a=no(s)),Us(s))){const t=go(s);c=po(s),h.x=t.x+s.clientLeft,h.y=t.y+s.clientTop}const u=!r||d||n?ps(0):vo(r,a);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-a.scrollLeft*c.x+h.x+u.x,y:i.y*c.y-a.scrollTop*c.y+h.y+u.y}},getDocumentElement:Ns,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const n=[..."clippingAncestors"===i?Qs(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let s=ao(t,[],!1).filter(t=>Hs(t)&&"body"!==Ms(t)),o=null;const n="fixed"===oo(t).position;let r=n?ro(t):t;for(;Hs(r)&&!so(r);){const e=oo(r),i=to(r);i||"fixed"!==e.position||(o=null),(n?!i&&!o:!i&&"static"===e.position&&o&&yo.has(o.position)||Ws(r)&&!i&&xo(t,r))?s=s.filter(t=>t!==r):o=e,r=ro(r)}return e.set(t,s),s}(e,this._c):[].concat(i),s],r=n[0],l=n.reduce((t,i)=>{const s=wo(e,i,o);return t.top=hs(s.top,t.top),t.right=cs(s.right,t.right),t.bottom=cs(s.bottom,t.bottom),t.left=hs(s.left,t.left),t},wo(e,r,o));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},getOffsetParent:Co,getElementRects:async function(t){const e=this.getOffsetParent||Co,i=this.getDimensions,s=await i(t.floating);return{reference:ko(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=ho(t);return{width:e,height:i}},getScale:po,isElement:Hs,isRTL:function(t){return"rtl"===oo(t).direction}};function Ao(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function zo(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:o=!0,ancestorResize:n=!0,elementResize:r="function"==typeof ResizeObserver,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:a=!1}=s,c=uo(t),h=o||n?[...c?ao(c):[],...ao(e)]:[];h.forEach(t=>{o&&t.addEventListener("scroll",i,{passive:!0}),n&&t.addEventListener("resize",i)});const d=c&&l?function(t,e){let i,s=null;const o=Ns(t);function n(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function r(l,a){void 0===l&&(l=!1),void 0===a&&(a=1),n();const c=t.getBoundingClientRect(),{left:h,top:d,width:u,height:p}=c;if(l||e(),!u||!p)return;const m={rootMargin:-us(d)+"px "+-us(o.clientWidth-(h+u))+"px "+-us(o.clientHeight-(d+p))+"px "+-us(h)+"px",threshold:hs(0,cs(1,a))||1};let f=!0;function g(e){const s=e[0].intersectionRatio;if(s!==a){if(!f)return r();s?r(!1,s):i=setTimeout(()=>{r(!1,1e-7)},1e3)}1!==s||Ao(c,t.getBoundingClientRect())||r(),f=!1}try{s=new IntersectionObserver(g,{...m,root:o.ownerDocument})}catch(t){s=new IntersectionObserver(g,m)}s.observe(t)}(!0),n}(c,i):null;let u,p=-1,m=null;r&&(m=new ResizeObserver(t=>{let[s]=t;s&&s.target===c&&m&&(m.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=m)||t.observe(e)})),i()}),c&&!a&&m.observe(c),m.observe(e));let f=a?go(t):null;return a&&function e(){const s=go(t);f&&!Ao(f,s)&&i();f=s,u=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach(t=>{o&&t.removeEventListener("scroll",i),n&&t.removeEventListener("resize",i)}),null==d||d(),null==(t=m)||t.disconnect(),m=null,a&&cancelAnimationFrame(u)}}const Eo=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:n,placement:r,middlewareData:l}=e,a=await async function(t,e){const{placement:i,platform:s,elements:o}=t,n=await(null==s.isRTL?void 0:s.isRTL(o.floating)),r=vs(i),l=ys(i),a="y"===_s(i),c=Ds.has(r)?-1:1,h=n&&a?-1:1,d=bs(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:m}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&"number"==typeof m&&(p="end"===l?-1*m:m),a?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,t);return r===(null==(i=l.offset)?void 0:i.placement)&&null!=(s=l.arrow)&&s.alignmentOffset?{}:{x:o+a.x,y:n+a.y,data:{...a,placement:r}}}}},To=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:n=!0,crossAxis:r=!1,limiter:l={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...a}=bs(t,e),c={x:i,y:s},h=await Is(e,a),d=_s(vs(o)),u=ws(d);let p=c[u],m=c[d];if(n){const t="y"===u?"bottom":"right";p=gs(p+h["y"===u?"top":"left"],p,p-h[t])}if(r){const t="y"===d?"bottom":"right";m=gs(m+h["y"===d?"top":"left"],m,m-h[t])}const f=l.fn({...e,[u]:p,[d]:m});return{...f,data:{x:f.x-i,y:f.y-s,enabled:{[u]:n,[d]:r}}}}}},Lo=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:n,rects:r,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:f=!0,...g}=bs(t,e);if(null!=(i=n.arrow)&&i.alignmentOffset)return{};const b=vs(o),v=_s(l),y=vs(l)===l,w=await(null==a.isRTL?void 0:a.isRTL(c.floating)),x=u||(y||!f?[Ls(l)]:function(t){const e=Ls(t);return[Cs(t),e,Cs(e)]}(l)),k="none"!==m;!u&&k&&x.push(...Ts(l,f,m,w));const _=[l,...x],$=await Is(e,g),C=[];let S=(null==(s=n.flip)?void 0:s.overflows)||[];if(h&&C.push($[b]),d){const t=function(t,e,i){void 0===i&&(i=!1);const s=ys(t),o=$s(t),n=xs(o);let r="x"===o?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[n]>e.floating[n]&&(r=Ls(r)),[r,Ls(r)]}(o,r,w);C.push($[t[0]],$[t[1]])}if(S=[...S,{placement:o,overflows:C}],!C.every(t=>t<=0)){var A,z;const t=((null==(A=n.flip)?void 0:A.index)||0)+1,e=_[t];if(e){if(!("alignment"===d&&v!==_s(e))||S.every(t=>_s(t.placement)!==v||t.overflows[0]>0))return{data:{index:t,overflows:S},reset:{placement:e}}}let i=null==(z=S.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:z.placement;if(!i)switch(p){case"bestFit":{var E;const t=null==(E=S.filter(t=>{if(k){const e=_s(t.placement);return e===v||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:E[0];t&&(i=t);break}case"initialPlacement":i=l}if(o!==i)return{reset:{placement:i}}}return{}}}},Ro=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:n,platform:r,elements:l}=e,{apply:a=()=>{},...c}=bs(t,e),h=await Is(e,c),d=vs(o),u=ys(o),p="y"===_s(o),{width:m,height:f}=n.floating;let g,b;"top"===d||"bottom"===d?(g=d,b=u===(await(null==r.isRTL?void 0:r.isRTL(l.floating))?"start":"end")?"left":"right"):(b=d,g="end"===u?"top":"bottom");const v=f-h.top-h.bottom,y=m-h.left-h.right,w=cs(f-h[g],v),x=cs(m-h[b],y),k=!e.middlewareData.shift;let _=w,$=x;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&($=y),null!=(s=e.middlewareData.shift)&&s.enabled.y&&(_=v),k&&!u){const t=hs(h.left,0),e=hs(h.right,0),i=hs(h.top,0),s=hs(h.bottom,0);p?$=m-2*(0!==t||0!==e?t+e:hs(h.left,h.right)):_=f-2*(0!==i||0!==s?i+s:hs(h.top,h.bottom))}await a({...e,availableWidth:$,availableHeight:_});const C=await r.getDimensions(l.floating);return m!==C.width||f!==C.height?{reset:{rects:!0}}:{}}}},Po=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:n,platform:r,elements:l,middlewareData:a}=e,{element:c,padding:h=0}=bs(t,e)||{};if(null==c)return{};const d=Rs(h),u={x:i,y:s},p=$s(o),m=xs(p),f=await r.getDimensions(c),g="y"===p,b=g?"top":"left",v=g?"bottom":"right",y=g?"clientHeight":"clientWidth",w=n.reference[m]+n.reference[p]-u[p]-n.floating[m],x=u[p]-n.reference[p],k=await(null==r.getOffsetParent?void 0:r.getOffsetParent(c));let _=k?k[y]:0;_&&await(null==r.isElement?void 0:r.isElement(k))||(_=l.floating[y]||n.floating[m]);const $=w/2-x/2,C=_/2-f[m]/2-1,S=cs(d[b],C),A=cs(d[v],C),z=S,E=_-f[m]-A,T=_/2-f[m]/2+$,L=gs(z,T,E),R=!a.arrow&&null!=ys(o)&&T!==L&&n.reference[m]/2-(T<z?S:A)-f[m]/2<0,P=R?T<z?T-z:T-E:0;return{[p]:u[p]+P,data:{[p]:L,centerOffset:T-L-P,...R&&{alignmentOffset:P}},reset:R}}}),Oo=(t,e,i)=>{const s=new Map,o={platform:So,...i},n={...o.platform,_c:s};return(async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:n=[],platform:r}=i,l=n.filter(Boolean),a=await(null==r.isRTL?void 0:r.isRTL(e));let c=await r.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=Os(c,s,a),u=s,p={},m=0;for(let i=0;i<l.length;i++){const{name:n,fn:f}=l[i],{x:g,y:b,data:v,reset:y}=await f({x:h,y:d,initialPlacement:s,placement:u,strategy:o,middlewareData:p,rects:c,platform:r,elements:{reference:t,floating:e}});h=null!=g?g:h,d=null!=b?b:d,p={...p,[n]:{...p[n],...v}},y&&m<=50&&(m++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await r.getElementRects({reference:t,floating:e,strategy:o}):y.rects),({x:h,y:d}=Os(c,u,a))),i=-1)}return{x:h,y:d,placement:u,strategy:o,middlewareData:p}})(t,e,{...o,platform:n})};function Io(t){return function(t){for(let e=t;e;e=Do(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=Do(t);e;e=Do(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||to(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function Do(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var Bo=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,s=0,o=0,n=0,r=0,l=0,a=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,s=t.bottom,o=t.right,n=t.bottom,r=e.left,l=e.top,a=e.right,c=e.top):(i=e.left,s=e.bottom,o=e.right,n=e.bottom,r=t.left,l=t.top,a=t.right,c=t.top):t.left<e.left?(i=t.right,s=t.top,o=e.left,n=e.top,r=t.right,l=t.bottom,a=e.left,c=e.bottom):(i=e.right,s=e.top,o=t.left,n=t.top,r=e.right,l=e.bottom,a=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=zo(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Eo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Ro({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Lo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(To({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Ro({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Po({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>So.getOffsetParent(t,Io):So.getOffsetParent;Oo(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:se(ie({},So),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:i,placement:s})=>{const o="rtl"===this.localize.dir(),n={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let s="",r="",l="",a="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",r=o?i:"",a=o?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";r=o?"":i,a=o?i:"",l="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(a="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",s="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(a="number"==typeof t?`${t}px`:"",s="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:s,right:r,bottom:l,left:a,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return H`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Ye({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Ye({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?H`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Bo.styles=[Te,as],oe([Ie(".popup")],Bo.prototype,"popup",2),oe([Ie(".popup__arrow")],Bo.prototype,"arrowEl",2),oe([Pe()],Bo.prototype,"anchor",2),oe([Pe({type:Boolean,reflect:!0})],Bo.prototype,"active",2),oe([Pe({reflect:!0})],Bo.prototype,"placement",2),oe([Pe({reflect:!0})],Bo.prototype,"strategy",2),oe([Pe({type:Number})],Bo.prototype,"distance",2),oe([Pe({type:Number})],Bo.prototype,"skidding",2),oe([Pe({type:Boolean})],Bo.prototype,"arrow",2),oe([Pe({attribute:"arrow-placement"})],Bo.prototype,"arrowPlacement",2),oe([Pe({attribute:"arrow-padding",type:Number})],Bo.prototype,"arrowPadding",2),oe([Pe({type:Boolean})],Bo.prototype,"flip",2),oe([Pe({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],Bo.prototype,"flipFallbackPlacements",2),oe([Pe({attribute:"flip-fallback-strategy"})],Bo.prototype,"flipFallbackStrategy",2),oe([Pe({type:Object})],Bo.prototype,"flipBoundary",2),oe([Pe({attribute:"flip-padding",type:Number})],Bo.prototype,"flipPadding",2),oe([Pe({type:Boolean})],Bo.prototype,"shift",2),oe([Pe({type:Object})],Bo.prototype,"shiftBoundary",2),oe([Pe({attribute:"shift-padding",type:Number})],Bo.prototype,"shiftPadding",2),oe([Pe({attribute:"auto-size"})],Bo.prototype,"autoSize",2),oe([Pe()],Bo.prototype,"sync",2),oe([Pe({type:Object})],Bo.prototype,"autoSizeBoundary",2),oe([Pe({attribute:"auto-size-padding",type:Number})],Bo.prototype,"autoSizePadding",2),oe([Pe({attribute:"hover-bridge",type:Boolean})],Bo.prototype,"hoverBridge",2);var Mo=class extends Be{constructor(){super(),this.localize=new Ei(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=pi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=pi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await fi(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=hi(this,"tooltip.show",{dir:this.localize.dir()});await ui(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await fi(this.body);const{keyframes:t,options:i}=hi(this,"tooltip.hide",{dir:this.localize.dir()});await ui(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,di(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,di(this,"sl-after-hide")}render(){return H`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Ye({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Mo.styles=[Te,ls],Mo.dependencies={"sl-popup":Bo},oe([Ie("slot:not([name])")],Mo.prototype,"defaultSlot",2),oe([Ie(".tooltip__body")],Mo.prototype,"body",2),oe([Ie("sl-popup")],Mo.prototype,"popup",2),oe([Pe()],Mo.prototype,"content",2),oe([Pe()],Mo.prototype,"placement",2),oe([Pe({type:Boolean,reflect:!0})],Mo.prototype,"disabled",2),oe([Pe({type:Number})],Mo.prototype,"distance",2),oe([Pe({type:Boolean,reflect:!0})],Mo.prototype,"open",2),oe([Pe({type:Number})],Mo.prototype,"skidding",2),oe([Pe()],Mo.prototype,"trigger",2),oe([Pe({type:Boolean})],Mo.prototype,"hoist",2),oe([Ee("open",{waitUntilFirstUpdate:!0})],Mo.prototype,"handleOpenChange",1),oe([Ee(["content","distance","hoist","placement","skidding"])],Mo.prototype,"handleOptionsChange",1),oe([Ee("disabled")],Mo.prototype,"handleDisabledChange",1),ci("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),ci("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Fo=r`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,No=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,n="";i?[o,n]=this.from.trim().split("."):s&&([o,n]=this.from.trim().replace(/\]$/,"").split("["));const r="getElementById"in e?e.getElementById(o):null;r?t=s?r.getAttribute(n)||"":i?r[n]||"":r.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o="success"===t?this.successIcon:this.errorIcon,n=hi(this,"copy.in",{dir:"ltr"}),r=hi(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:s,await this.copyIcon.animate(r.keyframes,r.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(n.keyframes,n.options).finished,setTimeout(async()=>{await o.animate(r.keyframes,r.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(n.keyframes,n.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return H`
      <sl-tooltip
        class=${Ye({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};No.styles=[Te,Fo],No.dependencies={"sl-icon":je,"sl-tooltip":Mo},oe([Ie('slot[name="copy-icon"]')],No.prototype,"copyIcon",2),oe([Ie('slot[name="success-icon"]')],No.prototype,"successIcon",2),oe([Ie('slot[name="error-icon"]')],No.prototype,"errorIcon",2),oe([Ie("sl-tooltip")],No.prototype,"tooltip",2),oe([Oe()],No.prototype,"isCopying",2),oe([Oe()],No.prototype,"status",2),oe([Pe()],No.prototype,"value",2),oe([Pe()],No.prototype,"from",2),oe([Pe({type:Boolean,reflect:!0})],No.prototype,"disabled",2),oe([Pe({attribute:"copy-label"})],No.prototype,"copyLabel",2),oe([Pe({attribute:"success-label"})],No.prototype,"successLabel",2),oe([Pe({attribute:"error-label"})],No.prototype,"errorLabel",2),oe([Pe({attribute:"feedback-duration",type:Number})],No.prototype,"feedbackDuration",2),oe([Pe({attribute:"tooltip-placement"})],No.prototype,"tooltipPlacement",2),oe([Pe({type:Boolean})],No.prototype,"hoist",2),ci("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),ci("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),No.define("sl-copy-button");var Vo=r`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Ho=class extends Be{constructor(){super(...arguments),this.formControlController=new Vi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new bi(this,"[default]","prefix","suffix"),this.localize=new Ei(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Hi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?ei`a`:ei`button`;return si`
      <${e}
        part="base"
        class=${Ye({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${oi(t?void 0:this.disabled)}
        type=${oi(t?void 0:this.type)}
        title=${this.title}
        name=${oi(t?void 0:this.name)}
        value=${oi(t?void 0:this.value)}
        href=${oi(t&&!this.disabled?this.href:void 0)}
        target=${oi(t?this.target:void 0)}
        download=${oi(t?this.download:void 0)}
        rel=${oi(t?this.rel:void 0)}
        role=${oi(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?si` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?si`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Ho.styles=[Te,Vo],Ho.dependencies={"sl-icon":je,"sl-spinner":Gi},oe([Ie(".button")],Ho.prototype,"button",2),oe([Oe()],Ho.prototype,"hasFocus",2),oe([Oe()],Ho.prototype,"invalid",2),oe([Pe()],Ho.prototype,"title",2),oe([Pe({reflect:!0})],Ho.prototype,"variant",2),oe([Pe({reflect:!0})],Ho.prototype,"size",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"caret",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"disabled",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"loading",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"outline",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"pill",2),oe([Pe({type:Boolean,reflect:!0})],Ho.prototype,"circle",2),oe([Pe()],Ho.prototype,"type",2),oe([Pe()],Ho.prototype,"name",2),oe([Pe()],Ho.prototype,"value",2),oe([Pe()],Ho.prototype,"href",2),oe([Pe()],Ho.prototype,"target",2),oe([Pe()],Ho.prototype,"rel",2),oe([Pe()],Ho.prototype,"download",2),oe([Pe()],Ho.prototype,"form",2),oe([Pe({attribute:"formaction"})],Ho.prototype,"formAction",2),oe([Pe({attribute:"formenctype"})],Ho.prototype,"formEnctype",2),oe([Pe({attribute:"formmethod"})],Ho.prototype,"formMethod",2),oe([Pe({attribute:"formnovalidate",type:Boolean})],Ho.prototype,"formNoValidate",2),oe([Pe({attribute:"formtarget"})],Ho.prototype,"formTarget",2),oe([Ee("disabled",{waitUntilFirstUpdate:!0})],Ho.prototype,"handleDisabledChange",1),Ho.define("sl-button"),ni.define("sl-icon-button"),je.define("sl-icon");var Uo=r`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,qo=r`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,jo=class extends Be{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Wo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=Wo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=Wo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=Wo(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=Wo(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",0===i),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===s.tagName.toLowerCase()))})}render(){return H`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};function Wo(t){var e;const i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}jo.styles=[Te,qo],oe([Ie("slot")],jo.prototype,"defaultSlot",2),oe([Oe()],jo.prototype,"disableRole",2),oe([Pe()],jo.prototype,"label",2);var Ko=class extends Be{constructor(){super(...arguments),this.formControlController=new Vi(this),this.hasSlotController=new bi(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?qi:t?Ui:Hi}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(t=>!t.disabled),s=null!=(e=i.find(t=>t.checked))?e:i[0],o=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,n=this.value;let r=i.indexOf(s)+o;r<0&&(r=i.length-1),r>i.length-1&&(r=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[r].value,i[r].checked=!0,this.hasButtonGroup?i[r].shadowRoot.querySelector("button").focus():(i[r].setAttribute("tabindex","0"),i[r].focus()),this.value!==n&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){const e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(t=>t.checked),s=e.find(t=>!t.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=H`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return H`
      <fieldset
        part="form-control"
        class=${Ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?H`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${o}
                </sl-button-group>
              `:o}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ko.styles=[Te,Ii,Uo],Ko.dependencies={"sl-button-group":jo},oe([Ie("slot:not([name])")],Ko.prototype,"defaultSlot",2),oe([Ie(".radio-group__validation-input")],Ko.prototype,"validationInput",2),oe([Oe()],Ko.prototype,"hasButtonGroup",2),oe([Oe()],Ko.prototype,"errorMessage",2),oe([Oe()],Ko.prototype,"defaultValue",2),oe([Pe()],Ko.prototype,"label",2),oe([Pe({attribute:"help-text"})],Ko.prototype,"helpText",2),oe([Pe()],Ko.prototype,"name",2),oe([Pe({reflect:!0})],Ko.prototype,"value",2),oe([Pe({reflect:!0})],Ko.prototype,"size",2),oe([Pe({reflect:!0})],Ko.prototype,"form",2),oe([Pe({type:Boolean,reflect:!0})],Ko.prototype,"required",2),oe([Ee("size",{waitUntilFirstUpdate:!0})],Ko.prototype,"handleSizeChange",1),oe([Ee("value")],Ko.prototype,"handleValueChange",1),Ko.define("sl-radio-group");var Go=r`
  ${Vo}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Zo=class extends Be{constructor(){super(...arguments),this.hasSlotController=new bi(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return si`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Ye({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${oi(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Zo.styles=[Te,Go],oe([Ie(".button")],Zo.prototype,"input",2),oe([Ie(".hidden-input")],Zo.prototype,"hiddenInput",2),oe([Oe()],Zo.prototype,"hasFocus",2),oe([Pe({type:Boolean,reflect:!0})],Zo.prototype,"checked",2),oe([Pe()],Zo.prototype,"value",2),oe([Pe({type:Boolean,reflect:!0})],Zo.prototype,"disabled",2),oe([Pe({reflect:!0})],Zo.prototype,"size",2),oe([Pe({type:Boolean,reflect:!0})],Zo.prototype,"pill",2),oe([Ee("disabled",{waitUntilFirstUpdate:!0})],Zo.prototype,"handleDisabledChange",1),Zo.define("sl-radio-button");var Qo=r`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,Xo=class extends Be{constructor(){super(...arguments),this.formControlController=new Vi(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new bi(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return H`
      <div
        class=${Ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${Ye({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${oi(this.value)}
            .checked=${ji(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${e?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Xo.styles=[Te,Ii,Qo],oe([Ie('input[type="checkbox"]')],Xo.prototype,"input",2),oe([Oe()],Xo.prototype,"hasFocus",2),oe([Pe()],Xo.prototype,"title",2),oe([Pe()],Xo.prototype,"name",2),oe([Pe()],Xo.prototype,"value",2),oe([Pe({reflect:!0})],Xo.prototype,"size",2),oe([Pe({type:Boolean,reflect:!0})],Xo.prototype,"disabled",2),oe([Pe({type:Boolean,reflect:!0})],Xo.prototype,"checked",2),oe([Oi("checked")],Xo.prototype,"defaultChecked",2),oe([Pe({reflect:!0})],Xo.prototype,"form",2),oe([Pe({type:Boolean,reflect:!0})],Xo.prototype,"required",2),oe([Pe({attribute:"help-text"})],Xo.prototype,"helpText",2),oe([Ee("checked",{waitUntilFirstUpdate:!0})],Xo.prototype,"handleCheckedChange",1),oe([Ee("disabled",{waitUntilFirstUpdate:!0})],Xo.prototype,"handleDisabledChange",1),Xo.define("sl-switch");var Yo=r`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Jo=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return H`
      <span
        part="base"
        class=${Ye({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?H`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Jo.styles=[Te,Yo],Jo.dependencies={"sl-icon-button":ni},oe([Pe({reflect:!0})],Jo.prototype,"variant",2),oe([Pe({reflect:!0})],Jo.prototype,"size",2),oe([Pe({type:Boolean,reflect:!0})],Jo.prototype,"pill",2),oe([Pe({type:Boolean})],Jo.prototype,"removable",2);var tn=r`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;let en=class extends Xe{constructor(t){if(super(t),this.it=q,t.type!==Ke)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===U)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};en.directiveName="unsafeHTML",en.resultType=1;const sn=Qe(en);var on=class extends Be{constructor(){super(...arguments),this.formControlController=new Vi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new bi(this,"help-text","label"),this.localize=new Ei(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>H`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest(".select__clear"),s=null!==e.closest("sl-icon-button");if(!i&&!s){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let s=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(s=i+1,s>e.length-1&&(s=0)):"ArrowUp"===t.key?(s=i-1,s<0&&(s=e.length-1)):"Home"===t.key?s=0:"End"===t.key&&(s=e.length-1),this.setCurrentOption(e[s])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(t=>s.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(t=>t.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=null!=(t=null==s?void 0:s.value)?t:"",this.displayLabel=null!=(i=null==(e=null==s?void 0:s.getTextLabel)?void 0:e.call(s))?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return H`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?sn(i):i}
        </div>`}return e===this.maxOptionsVisible?H`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:H``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await fi(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=hi(this,"select.show",{dir:this.localize.dir()});await ui(this.popup.popup,t,e),this.currentOption&&ve(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await fi(this);const{keyframes:t,options:e}=hi(this,"select.hide",{dir:this.localize.dir()});await ui(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,di(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,di(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&this.value.length>0,n=this.placeholder&&this.value&&this.value.length<=0;return H`
      <div
        part="form-control"
        class=${Ye({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${Ye({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":n,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?H`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${o?H`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};on.styles=[Te,Ii,tn],on.dependencies={"sl-icon":je,"sl-popup":Bo,"sl-tag":Jo},oe([Ie(".select")],on.prototype,"popup",2),oe([Ie(".select__combobox")],on.prototype,"combobox",2),oe([Ie(".select__display-input")],on.prototype,"displayInput",2),oe([Ie(".select__value-input")],on.prototype,"valueInput",2),oe([Ie(".select__listbox")],on.prototype,"listbox",2),oe([Oe()],on.prototype,"hasFocus",2),oe([Oe()],on.prototype,"displayLabel",2),oe([Oe()],on.prototype,"currentOption",2),oe([Oe()],on.prototype,"selectedOptions",2),oe([Oe()],on.prototype,"valueHasChanged",2),oe([Pe()],on.prototype,"name",2),oe([Oe()],on.prototype,"value",1),oe([Pe({attribute:"value"})],on.prototype,"defaultValue",2),oe([Pe({reflect:!0})],on.prototype,"size",2),oe([Pe()],on.prototype,"placeholder",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"multiple",2),oe([Pe({attribute:"max-options-visible",type:Number})],on.prototype,"maxOptionsVisible",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"disabled",2),oe([Pe({type:Boolean})],on.prototype,"clearable",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"open",2),oe([Pe({type:Boolean})],on.prototype,"hoist",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"filled",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"pill",2),oe([Pe()],on.prototype,"label",2),oe([Pe({reflect:!0})],on.prototype,"placement",2),oe([Pe({attribute:"help-text"})],on.prototype,"helpText",2),oe([Pe({reflect:!0})],on.prototype,"form",2),oe([Pe({type:Boolean,reflect:!0})],on.prototype,"required",2),oe([Pe()],on.prototype,"getTag",2),oe([Ee("disabled",{waitUntilFirstUpdate:!0})],on.prototype,"handleDisabledChange",1),oe([Ee(["defaultValue","value"],{waitUntilFirstUpdate:!0})],on.prototype,"handleValueChange",1),oe([Ee("open",{waitUntilFirstUpdate:!0})],on.prototype,"handleOpenChange",1),ci("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),ci("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),on.define("sl-select");var nn=r`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,rn=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return H`
      <div
        part="base"
        class=${Ye({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};rn.styles=[Te,nn],rn.dependencies={"sl-icon":je},oe([Ie(".option__label")],rn.prototype,"defaultSlot",2),oe([Oe()],rn.prototype,"current",2),oe([Oe()],rn.prototype,"selected",2),oe([Oe()],rn.prototype,"hasHover",2),oe([Pe({reflect:!0})],rn.prototype,"value",2),oe([Pe({type:Boolean,reflect:!0})],rn.prototype,"disabled",2),oe([Ee("disabled")],rn.prototype,"handleDisabledChange",1),oe([Ee("selected")],rn.prototype,"handleSelectedChange",1),oe([Ee("value")],rn.prototype,"handleValueChange",1),rn.define("sl-option");var ln=r`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,an=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const s=t.closest(e);if(s)return s;const o=t.getRootNode();return o instanceof ShadowRoot?i(o.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?ae():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(s),s.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const s=ue(t);return{start:null!=(e=s[0])?e:null,end:null!=(i=s[s.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,di(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,di(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await fi(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=hi(this,"dropdown.show",{dir:this.localize.dir()});await ui(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await fi(this);const{keyframes:t,options:e}=hi(this,"dropdown.hide",{dir:this.localize.dir()});await ui(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return H`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${oi(this.sync?this.sync:void 0)}
        class=${Ye({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};an.styles=[Te,ln],an.dependencies={"sl-popup":Bo},oe([Ie(".dropdown")],an.prototype,"popup",2),oe([Ie(".dropdown__trigger")],an.prototype,"trigger",2),oe([Ie(".dropdown__panel")],an.prototype,"panel",2),oe([Pe({type:Boolean,reflect:!0})],an.prototype,"open",2),oe([Pe({reflect:!0})],an.prototype,"placement",2),oe([Pe({type:Boolean,reflect:!0})],an.prototype,"disabled",2),oe([Pe({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],an.prototype,"stayOpenOnSelect",2),oe([Pe({attribute:!1})],an.prototype,"containingElement",2),oe([Pe({type:Number})],an.prototype,"distance",2),oe([Pe({type:Number})],an.prototype,"skidding",2),oe([Pe({type:Boolean})],an.prototype,"hoist",2),oe([Pe({reflect:!0})],an.prototype,"sync",2),oe([Ee("open",{waitUntilFirstUpdate:!0})],an.prototype,"handleOpenChange",1),ci("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),ci("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),an.define("sl-dropdown");var cn=r`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;const hn=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),hn(t,e);return!0},dn=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},un=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),fn(e)}};function pn(t){void 0!==this._$AN?(dn(this),this._$AM=t,un(this)):this._$AM=t}function mn(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)hn(s[t],!1),dn(s[t]);else null!=s&&(hn(s,!1),dn(s));else hn(this,t)}const fn=t=>{t.type==Ke&&(t._$AP??=mn,t._$AQ??=pn)};class gn extends Xe{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),un(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(hn(this,t),dn(this))}setValue(t){if(Me(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let bn=class{};const vn=new WeakMap,yn=Qe(class extends gn{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=vn.get(e);void 0===i&&(i=new WeakMap,vn.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?vn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var wn=class{constructor(t,e){this.popupRef=new bn,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:s,top:o,width:n,height:r}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?s+n:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?s+n:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+r}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var s;const o=null!=(s=e.get(i))?s:new CSSUnitValue(0,"px");return t-(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?H`
      <sl-popup
        ${yn(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:H` <slot name="submenu" hidden></slot> `}},xn=class extends Be{constructor(){super(...arguments),this.localize=new Ei(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new bi(this,"submenu"),this.submenuController=new wn(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return H`
      <div
        id="anchor"
        part="base"
        class=${Ye({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?H` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};xn.styles=[Te,cn],xn.dependencies={"sl-icon":je,"sl-popup":Bo,"sl-spinner":Gi},oe([Ie("slot:not([name])")],xn.prototype,"defaultSlot",2),oe([Ie(".menu-item")],xn.prototype,"menuItem",2),oe([Pe()],xn.prototype,"type",2),oe([Pe({type:Boolean,reflect:!0})],xn.prototype,"checked",2),oe([Pe()],xn.prototype,"value",2),oe([Pe({type:Boolean,reflect:!0})],xn.prototype,"loading",2),oe([Pe({type:Boolean,reflect:!0})],xn.prototype,"disabled",2),oe([Ee("checked")],xn.prototype,"handleCheckedChange",1),oe([Ee("disabled")],xn.prototype,"handleDisabledChange",1),oe([Ee("type")],xn.prototype,"handleTypeChange",1),xn.define("sl-menu-item");var kn=r`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,_n=class extends Be{render(){return H` <slot part="base" class="menu-label"></slot> `}};_n.styles=[Te,kn],_n.define("sl-menu-label"),Ae("far",{resolver:t=>`assets/icons/fa/regular/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")}),Ae("fas",{resolver:t=>`assets/icons/fa/solid/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")}),Ae("fab",{resolver:t=>`assets/icons/fa/brands/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")});
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const $n=Qe(class extends Xe{constructor(){super(...arguments),this.key=q}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&(Ne(t),this.key=e),i}});class Cn{#i;#s;#o=0;#n=null;#r;constructor(t,e,i=3e3){this.#i=t,this.#s=e,this.#r=i,t.addController(this)}get value(){return this.#s[this.#o]}hostConnected(){this.#n=setInterval(()=>{this.#o=(this.#o+1)%this.#s.length,this.#i.requestUpdate()},this.#r)}hostDisconnected(){clearInterval(this.#n),this.#n=null}}function Sn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}customElements.define("docs-index",class extends at{#l=new Cn(this,["responsive","reusable","readable","refined","remarkable","resilient"],3e3);#a=[{name:"Stack",iconLibrary:"fas",iconName:"bars",iconSize:"1.5rem",link:"#/content/layouts/stack"},{name:"Cluster",iconLibrary:"fas",iconName:"ellipsis",iconSize:"1.75rem",link:"#/content/layouts/cluster"},{name:"Flank",iconLibrary:"fas",iconName:"list-ul",iconSize:"1.5rem",link:"#/content/layouts/flank"},{name:"Split",iconLibrary:"fas",iconName:"pause",iconSize:"1.25rem",link:"#/content/layouts/split"},{name:"Grid",iconLibrary:"fas",iconName:"grip",iconSize:"1.5rem",link:"#/content/layouts/grid"},{name:"Frame",iconLibrary:"fas",iconName:"expand",iconSize:"1.5rem",link:"#/content/layouts/frame"},{name:"Align",iconLibrary:"fas",iconName:"up-down",iconSize:"1.25rem",link:"#/content/mods/align"},{name:"Justify",iconLibrary:"fas",iconName:"left-right",iconSize:"1.25rem",link:"#/content/mods/justify"},{name:"Gap",iconLibrary:"fas",iconName:"arrows-left-right-to-line",iconSize:"1.5rem",link:"#/content/mods/gap"},{name:"Padding",iconLibrary:"fas",iconName:"border-none",iconSize:"1.5rem",link:"#/content/mods/padding"},{name:"Wrapping",iconLibrary:"fas",iconName:"chart-bar",iconSize:"1.25rem",link:"#/content/mods/wrapping"},{name:"Divider",iconLibrary:"fas",iconName:"divide",iconSize:"1.5rem",link:"#/content/layouts/divider"},{name:"Border",iconLibrary:"far",iconName:"square",iconSize:"1.5rem",link:"#/content/mods/border"},{name:"Radius",iconLibrary:"fas",iconName:"border-top-left",iconSize:"1.5rem",link:"#/content/mods/radius"},{name:"Width",iconLibrary:"fas",iconName:"arrows-left-right",iconSize:"1.5rem",link:"#/content/mods/width"},{name:"Height",iconLibrary:"fas",iconName:"arrows-up-down",iconSize:"1.25rem",link:"#/content/mods/height"}];#c=[{name:"Minimalist",description:"Handles structure, spacing and boundaries, not colors, typography, or styling"},{name:"Easy to integrate",description:"Simple patterns work with any project, design system, library or framework"},{name:"Open source",description:"Available for use in both personal and commercial projects at no cost"},{name:"Flexible",description:"Works as CSS utility classes, web components, or both"}];connectedCallback(){super.connectedCallback(),document.title="Relayout"}render(){return H`
            <div class="rl-stack rl-height-full font-sans">
                <docs-header no-bars></docs-header>
                <!-- <div class="rl-divider"></div> -->
                <div class="rl-stack rl-height-fill">
                    <div class="rl-stack">
                        <div class="rl-stack rl-align-center rl-width-l rl-gap-xl rl-padding-xl">
                            <img style="height: 6rem;" src="assets/img/relayout.svg" alt="Relayout">
                            <div class="rl-stack rl-gap-m">
                                <strong class="text-2xl">
                                    <span>Create</span> 
                                    <span class="word-slot">${$n(this.#l.value,H`<span class="word-highlight">${this.#l.value}</span>`)}</span> 
                                    <span class="word-layouts">layouts</span>
                                </strong>
                                <strong class="text-xl">
                                    Any project. Any stack. Any screen.
                                </strong>
                            </div>
                            <div class="text-l">
                                Relayout is a lightweight framework which separates layout from aspect
                                and handles structure, spacing and boundaries.
                            </div>
                            <div class="rl-cluster rl-justify-center rl-gap-l">
                                <sl-button pill class="btn-gradient" size="large" href="#/content/start/install" style="width: 14rem;">
                                    <sl-icon slot="prefix" library="fas" name="play" style="font-size: 1.25em;"></sl-icon>
                                    Get Started
                                </sl-button>
                                <sl-button pill class="btn-neutral" size="large" href="#/content/start/home" style="width: 14rem;">
                                    <sl-icon slot="prefix" library="fas" name="book-open" style="font-size: 1.25em;"></sl-icon>
                                    Read the Docs
                                </sl-button>
                            </div>
                        </div>
                    </div>
                    <div class="rl-divider"></div>
                    <div class="rl-stack rl-padding-xl rl-gap-xl"  style="background: var(--rl-color-bg);">
                        <div class="rl-stack rl-align-center rl-width-l">
                            <strong class="text-xl">Explore the patterns</strong>
                        </div>
                        <div class="rl-stack rl-width-l gap-xl">
                            <div class="rl-cluster rl-justify-center rl-gap-l pattern-cluster" style="font-size: 0.875rem;">
                                ${this.#a.map(t=>H`
                                    <a href="${t.link}" class="pattern-item rl-stack rl-align-center rl-border rl-radius-m rl-padding-l rl-gap-m" style="background: var(--sl-color-neutral-0);">
                                        <div>${t.name}</div>
                                        <div style="width: 4rem; height: 2rem;">
                                            <sl-icon
                                                library="${t.iconLibrary}"
                                                name="${t.iconName}"
                                                style="font-size: ${t.iconSize};"
                                            ></sl-icon>
                                        </div>
                                    </a>
                                `)}
                            </div>
                        </div>
                    </div>
                    <div class="rl-divider"></div>
                    <div class="rl-stack rl-padding-xl rl-gap-xl">
                        <div class="rl-stack rl-align-center rl-width-l">
                            <strong class="text-xl">Why use Relayout?</strong>
                        </div>
                        <div class="rl-cluster rl-justify-center rl-align-start rl-width-l rl-gap-xl text-m">
                            ${this.#c.map(t=>H`
                                <div class="rl-stack" style="width: 15rem;">
                                    <div class="text-l">${t.name}</div>
                                    <div>${t.description}</div>
                                </div>
                            `)}
                        </div>
                        <div></div>
                    </div>
                    <div class="rl-stack rl-align-center rl-gap-m rl-padding-m rl-width-l">
                        <!-- <div class="rl-divider"></div> -->
                        <div class="text-xs">copyright &copy; 2026 relayout.net</div>
                    </div>
                </div>
            </div>
        `}});var An={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function zn(t){An=t}var En={exec:()=>null};function Tn(t,e=""){let i="string"==typeof t?t:t.source,s={replace:(t,e)=>{let o="string"==typeof e?e:e.source;return o=o.replace(Ln.caret,"$1"),i=i.replace(t,o),s},getRegex:()=>new RegExp(i,e)};return s}var Ln={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},Rn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Pn=/(?:[*+-]|\d{1,9}[.)])/,On=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,In=Tn(On).replace(/bull/g,Pn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Dn=Tn(On).replace(/bull/g,Pn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Bn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Fn=Tn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Mn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Nn=Tn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Pn).getRegex(),Vn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Hn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Un=Tn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",Hn).replace("tag",Vn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),qn=Tn(Bn).replace("hr",Rn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex(),jn={blockquote:Tn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",qn).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:Fn,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:Rn,html:Un,lheading:In,list:Nn,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:qn,table:En,text:/^[^\n]+/},Wn=Tn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Rn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex(),Kn={...jn,lheading:Dn,table:Wn,paragraph:Tn(Bn).replace("hr",Rn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Wn).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Vn).getRegex()},Gn={...jn,html:Tn("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",Hn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:En,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Tn(Bn).replace("hr",Rn).replace("heading"," *#{1,6} *[^\n]").replace("lheading",In).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Zn=/^( {2,}|\\)\n(?!\s*$)/,Qn=/[\p{P}\p{S}]/u,Xn=/[\s\p{P}\p{S}]/u,Yn=/[^\s\p{P}\p{S}]/u,Jn=Tn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Xn).getRegex(),tr=/(?!~)[\p{P}\p{S}]/u,er=Tn(/link|code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code",/(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ir=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,sr=Tn(ir,"u").replace(/punct/g,Qn).getRegex(),or=Tn(ir,"u").replace(/punct/g,tr).getRegex(),nr="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",rr=Tn(nr,"gu").replace(/notPunctSpace/g,Yn).replace(/punctSpace/g,Xn).replace(/punct/g,Qn).getRegex(),lr=Tn(nr,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,tr).getRegex(),ar=Tn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Yn).replace(/punctSpace/g,Xn).replace(/punct/g,Qn).getRegex(),cr=Tn(/\\(punct)/,"gu").replace(/punct/g,Qn).getRegex(),hr=Tn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),dr=Tn(Hn).replace("(?:--\x3e|$)","--\x3e").getRegex(),ur=Tn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",dr).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),pr=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,mr=Tn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",pr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),fr=Tn(/^!?\[(label)\]\[(ref)\]/).replace("label",pr).replace("ref",Mn).getRegex(),gr=Tn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Mn).getRegex(),br=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,vr={_backpedal:En,anyPunctuation:cr,autolink:hr,blockSkip:er,br:Zn,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:En,emStrongLDelim:sr,emStrongRDelimAst:rr,emStrongRDelimUnd:ar,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:mr,nolink:gr,punctuation:Jn,reflink:fr,reflinkSearch:Tn("reflink|nolink(?!\\()","g").replace("reflink",fr).replace("nolink",gr).getRegex(),tag:ur,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:En},yr={...vr,link:Tn(/^!?\[(label)\]\((.*?)\)/).replace("label",pr).getRegex(),reflink:Tn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",pr).getRegex()},wr={...vr,emStrongRDelimAst:lr,emStrongLDelim:or,url:Tn(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",br).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Tn(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",br).getRegex()},xr={...wr,br:Tn(Zn).replace("{2,}","*").getRegex(),text:Tn(wr.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},kr={normal:jn,gfm:Kn,pedantic:Gn},_r={normal:vr,gfm:wr,breaks:xr,pedantic:yr},$r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cr=t=>$r[t];function Sr(t,e){if(e){if(Ln.escapeTest.test(t))return t.replace(Ln.escapeReplace,Cr)}else if(Ln.escapeTestNoEncode.test(t))return t.replace(Ln.escapeReplaceNoEncode,Cr);return t}function Ar(t){try{t=encodeURI(t).replace(Ln.percentDecode,"%")}catch{return null}return t}function zr(t,e){let i=t.replace(Ln.findPipe,(t,e,i)=>{let s=!1,o=e;for(;--o>=0&&"\\"===i[o];)s=!s;return s?"|":" |"}),s=i.split(Ln.splitPipe),o=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(Ln.slashPipe,"|");return s}function Er(t,e,i){let s=t.length;if(0===s)return"";let o=0;for(;o<s;){if(t.charAt(s-o-1)!==e)break;o++}return t.slice(0,s-o)}function Tr(t,e,i,s,o){let n=e.href,r=e.title||null,l=t[1].replace(o.other.outputLinkReplace,"$1");s.state.inLink=!0;let a={type:"!"===t[0].charAt(0)?"image":"link",raw:i,href:n,title:r,text:l,tokens:s.inlineTokens(l)};return s.state.inLink=!1,a}var Lr=class{options;rules;lexer;constructor(t){this.options=t||An}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Er(t,"\n")}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let t=e[0],i=function(t,e,i){let s=t.match(i.other.indentCodeCompensation);if(null===s)return e;let o=s[1];return e.split("\n").map(t=>{let e=t.match(i.other.beginningSpace);if(null===e)return t;let[s]=e;return s.length>=o.length?t.slice(o.length):t}).join("\n")}(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let e=Er(t,"#");(this.options.pedantic||!e||this.rules.other.endingSpaceChar.test(e))&&(t=e.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Er(e[0],"\n")}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let t=Er(e[0],"\n").split("\n"),i="",s="",o=[];for(;t.length>0;){let e,n=!1,r=[];for(e=0;e<t.length;e++)if(this.rules.other.blockquoteStart.test(t[e]))r.push(t[e]),n=!0;else{if(n)break;r.push(t[e])}t=t.slice(e);let l=r.join("\n"),a=l.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}\n${l}`:l,s=s?`${s}\n${a}`:a;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,o,!0),this.lexer.state.top=c,0===t.length)break;let h=o.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){let e=h,n=e.raw+"\n"+t.join("\n"),r=this.blockquote(n);o[o.length-1]=r,i=i.substring(0,i.length-e.raw.length)+r.raw,s=s.substring(0,s.length-e.text.length)+r.text;break}if("list"===h?.type){let e=h,n=e.raw+"\n"+t.join("\n"),r=this.list(n);o[o.length-1]=r,i=i.substring(0,i.length-h.raw.length)+r.raw,s=s.substring(0,s.length-e.raw.length)+r.raw,t=n.substring(o.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:i,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),s=i.length>1,o={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let n=this.rules.other.listItemRegex(i),r=!1;for(;t;){let i=!1,s="",l="";if(!(e=n.exec(t))||this.rules.block.hr.test(t))break;s=e[0],t=t.substring(s.length);let a=e[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,t=>" ".repeat(3*t.length)),c=t.split("\n",1)[0],h=!a.trim(),d=0;if(this.options.pedantic?(d=2,l=a.trimStart()):h?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,l=a.slice(d),d+=e[1].length),h&&this.rules.other.blankLine.test(c)&&(s+=c+"\n",t=t.substring(c.length+1),i=!0),!i){let e=this.rules.other.nextBulletRegex(d),i=this.rules.other.hrRegex(d),o=this.rules.other.fencesBeginRegex(d),n=this.rules.other.headingBeginRegex(d),r=this.rules.other.htmlBeginRegex(d);for(;t;){let u,p=t.split("\n",1)[0];if(c=p,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),u=c):u=c.replace(this.rules.other.tabCharGlobal,"    "),o.test(c)||n.test(c)||r.test(c)||e.test(c)||i.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=d||!c.trim())l+="\n"+u.slice(d);else{if(h||a.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(a)||n.test(a)||i.test(a))break;l+="\n"+c}!h&&!c.trim()&&(h=!0),s+=p+"\n",t=t.substring(p.length+1),a=u.slice(d)}}o.loose||(r?o.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(r=!0));let u,p=null;this.options.gfm&&(p=this.rules.other.listIsTask.exec(l),p&&(u="[ ] "!==p[0],l=l.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:s,task:!!p,checked:u,loose:!1,text:l,tokens:[]}),o.raw+=s}let l=o.items.at(-1);if(!l)return;l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd(),o.raw=o.raw.trimEnd();for(let t=0;t<o.items.length;t++)if(this.lexer.state.top=!1,o.items[t].tokens=this.lexer.blockTokens(o.items[t].text,[]),!o.loose){let e=o.items[t].tokens.filter(t=>"space"===t.type),i=e.length>0&&e.some(t=>this.rules.other.anyLine.test(t.raw));o.loose=i}if(o.loose)for(let t=0;t<o.items.length;t++)o.items[t].loose=!0;return o}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:"pre"===e[1]||"script"===e[1]||"style"===e[1],text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:s}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=zr(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],n={type:"table",raw:e[0],header:[],align:[],rows:[]};if(i.length===s.length){for(let t of s)this.rules.other.tableAlignRight.test(t)?n.align.push("right"):this.rules.other.tableAlignCenter.test(t)?n.align.push("center"):this.rules.other.tableAlignLeft.test(t)?n.align.push("left"):n.align.push(null);for(let t=0;t<i.length;t++)n.header.push({text:i[t],tokens:this.lexer.inline(i[t]),header:!0,align:n.align[t]});for(let t of o)n.rows.push(zr(t,n.header.length).map((t,e)=>({text:t,tokens:this.lexer.inline(t),header:!1,align:n.align[e]})));return n}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let t="\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let e=Er(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{let t=function(t,e){if(-1===t.indexOf(e[1]))return-1;let i=0;for(let s=0;s<t.length;s++)if("\\"===t[s])s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return i>0?-2:-1}(e[2],"()");if(-2===t)return;if(t>-1){let i=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){let t=this.rules.other.pedanticHrefTitle.exec(i);t&&(i=t[1],s=t[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i.slice(1):i.slice(1,-1)),Tr(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let t=e[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!t){let t=i[0].charAt(0);return{type:"text",raw:t,text:t}}return Tr(i,t,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!s[1]&&!s[2]||!i||this.rules.inline.punctuation.exec(i))){let i,o,n=[...s[0]].length-1,r=n,l=0,a="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,e=e.slice(-1*t.length+n);null!=(s=a.exec(e));){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(o=[...i].length,s[3]||s[4]){r+=o;continue}if((s[5]||s[6])&&n%3&&!((n+o)%3)){l+=o;continue}if(r-=o,r>0)continue;o=Math.min(o,o+r+l);let e=[...s[0]][0].length,a=t.slice(0,n+s.index+e+o);if(Math.min(n,o)%2){let t=a.slice(1,-1);return{type:"em",raw:a,text:t,tokens:this.lexer.inlineTokens(t)}}let c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let t,i;return"@"===e[2]?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let t,i;if("@"===e[2])t=e[0],i="mailto:"+t;else{let s;do{s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??""}while(s!==e[0]);t=e[0],i="www."===e[1]?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},Rr=class t{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||An,this.options.tokenizer=this.options.tokenizer||new Lr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:Ln,block:kr.normal,inline:_r.normal};this.options.pedantic?(e.block=kr.pedantic,e.inline=_r.pedantic):this.options.gfm&&(e.block=kr.gfm,this.options.breaks?e.inline=_r.breaks:e.inline=_r.gfm),this.tokenizer.rules=e}static get rules(){return{block:kr,inline:_r}}static lex(e,i){return new t(i).lex(e)}static lexInline(e,i){return new t(i).inlineTokens(e)}lex(t){t=t.replace(Ln.carriageReturn,"\n"),this.blockTokens(t,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let e=this.inlineQueue[t];this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],i=!1){for(this.options.pedantic&&(t=t.replace(Ln.tabCharGlobal,"    ").replace(Ln.spaceLine,""));t;){let s;if(this.options.extensions?.block?.some(i=>!!(s=i.call({lexer:this},t,e))&&(t=t.substring(s.raw.length),e.push(s),!0)))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let i=e.at(-1);1===s.raw.length&&void 0!==i?i.raw+="\n":e.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let i=e.at(-1);"paragraph"===i?.type||"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.text,this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let i=e.at(-1);"paragraph"===i?.type||"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},e.push(s));continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),e.push(s);continue}let o=t;if(this.options.extensions?.startBlock){let e,i=1/0,s=t.slice(1);this.options.extensions.startBlock.forEach(t=>{e=t.call({lexer:this},s),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){let n=e.at(-1);i&&"paragraph"===n?.type?(n.raw+=(n.raw.endsWith("\n")?"":"\n")+s.raw,n.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):e.push(s),i=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let i=e.at(-1);"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let i=t,s=null;if(this.tokens.links){let t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(i));)t.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(i));)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(i));)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,n="";for(;t;){let s;if(o||(n=""),o=!1,this.options.extensions?.inline?.some(i=>!!(s=i.call({lexer:this},t,e))&&(t=t.substring(s.raw.length),e.push(s),!0)))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);let i=e.at(-1);"text"===s.type&&"text"===i?.type?(i.raw+=s.raw,i.text+=s.text):e.push(s);continue}if(s=this.tokenizer.emStrong(t,i,n)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),e.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),e.push(s);continue}let r=t;if(this.options.extensions?.startInline){let e,i=1/0,s=t.slice(1);this.options.extensions.startInline.forEach(t=>{e=t.call({lexer:this},s),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(r=t.substring(0,i+1))}if(s=this.tokenizer.inlineText(r)){t=t.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(n=s.raw.slice(-1)),o=!0;let i=e.at(-1);"text"===i?.type?(i.raw+=s.raw,i.text+=s.text):e.push(s);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return e}},Pr=class{options;parser;constructor(t){this.options=t||An}space(t){return""}code({text:t,lang:e,escaped:i}){let s=(e||"").match(Ln.notSpaceStart)?.[0],o=t.replace(Ln.endingNewline,"")+"\n";return s?'<pre><code class="language-'+Sr(s)+'">'+(i?o:Sr(o,!0))+"</code></pre>\n":"<pre><code>"+(i?o:Sr(o,!0))+"</code></pre>\n"}blockquote({tokens:t}){return`<blockquote>\n${this.parser.parse(t)}</blockquote>\n`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>\n`}hr(t){return"<hr>\n"}list(t){let e=t.ordered,i=t.start,s="";for(let e=0;e<t.items.length;e++){let i=t.items[e];s+=this.listitem(i)}let o=e?"ol":"ul";return"<"+o+(e&&1!==i?' start="'+i+'"':"")+">\n"+s+"</"+o+">\n"}listitem(t){let e="";if(t.task){let i=this.checkbox({checked:!!t.checked});t.loose?"paragraph"===t.tokens[0]?.type?(t.tokens[0].text=i+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=i+" "+Sr(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):e+=i+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>\n`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>\n`}table(t){let e="",i="";for(let e=0;e<t.header.length;e++)i+=this.tablecell(t.header[e]);e+=this.tablerow({text:i});let s="";for(let e=0;e<t.rows.length;e++){let o=t.rows[e];i="";for(let t=0;t<o.length;t++)i+=this.tablecell(o[t]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+s+"</table>\n"}tablerow({text:t}){return`<tr>\n${t}</tr>\n`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>\n`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Sr(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let s=this.parser.parseInline(i),o=Ar(t);if(null===o)return s;let n='<a href="'+(t=o)+'"';return e&&(n+=' title="'+Sr(e)+'"'),n+=">"+s+"</a>",n}image({href:t,title:e,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let o=Ar(t);if(null===o)return Sr(i);let n=`<img src="${t=o}" alt="${i}"`;return e&&(n+=` title="${Sr(e)}"`),n+=">",n}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Sr(t.text)}},Or=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Ir=class t{options;renderer;textRenderer;constructor(t){this.options=t||An,this.options.renderer=this.options.renderer||new Pr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Or}static parse(e,i){return new t(i).parse(e)}static parseInline(e,i){return new t(i).parseInline(e)}parse(t,e=!0){let i="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let t=o,e=this.options.extensions.renderers[t.type].call({parser:this},t);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(t.type)){i+=e||"";continue}}let n=o;switch(n.type){case"space":i+=this.renderer.space(n);continue;case"hr":i+=this.renderer.hr(n);continue;case"heading":i+=this.renderer.heading(n);continue;case"code":i+=this.renderer.code(n);continue;case"table":i+=this.renderer.table(n);continue;case"blockquote":i+=this.renderer.blockquote(n);continue;case"list":i+=this.renderer.list(n);continue;case"html":i+=this.renderer.html(n);continue;case"def":i+=this.renderer.def(n);continue;case"paragraph":i+=this.renderer.paragraph(n);continue;case"text":{let o=n,r=this.renderer.text(o);for(;s+1<t.length&&"text"===t[s+1].type;)o=t[++s],r+="\n"+this.renderer.text(o);i+=e?this.renderer.paragraph({type:"paragraph",raw:r,text:r,tokens:[{type:"text",raw:r,text:r,escaped:!0}]}):r;continue}default:{let t='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return i}parseInline(t,e=this.renderer){let i="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let t=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=t||"";continue}}let n=o;switch(n.type){case"escape":case"text":i+=e.text(n);break;case"html":i+=e.html(n);break;case"link":i+=e.link(n);break;case"image":i+=e.image(n);break;case"strong":i+=e.strong(n);break;case"em":i+=e.em(n);break;case"codespan":i+=e.codespan(n);break;case"br":i+=e.br(n);break;case"del":i+=e.del(n);break;default:{let t='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return i}},Dr=class{options;block;constructor(t){this.options=t||An}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?Rr.lex:Rr.lexInline}provideParser(){return this.block?Ir.parse:Ir.parseInline}},Br=new class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ir;Renderer=Pr;TextRenderer=Or;Lexer=Rr;Tokenizer=Lr;Hooks=Dr;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let s of t)switch(i=i.concat(e.call(this,s)),s.type){case"table":{let t=s;for(let s of t.header)i=i.concat(this.walkTokens(s.tokens,e));for(let s of t.rows)for(let t of s)i=i.concat(this.walkTokens(t.tokens,e));break}case"list":{let t=s;i=i.concat(this.walkTokens(t.items,e));break}default:{let t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach(s=>{let o=t[s].flat(1/0);i=i.concat(this.walkTokens(o,e))}):t.tokens&&(i=i.concat(this.walkTokens(t.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let i=e.renderers[t.name];e.renderers[t.name]=i?function(...e){let s=t.renderer.apply(this,e);return!1===s&&(s=i.apply(this,e)),s}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");let i=e[t.level];i?i.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),i.extensions=e),t.renderer){let e=this.defaults.renderer||new Pr(this.defaults);for(let i in t.renderer){if(!(i in e))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,o=t.renderer[s],n=e[s];e[s]=(...t)=>{let i=o.apply(e,t);return!1===i&&(i=n.apply(e,t)),i||""}}i.renderer=e}if(t.tokenizer){let e=this.defaults.tokenizer||new Lr(this.defaults);for(let i in t.tokenizer){if(!(i in e))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,o=t.tokenizer[s],n=e[s];e[s]=(...t)=>{let i=o.apply(e,t);return!1===i&&(i=n.apply(e,t)),i}}i.tokenizer=e}if(t.hooks){let e=this.defaults.hooks||new Dr;for(let i in t.hooks){if(!(i in e))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,o=t.hooks[s],n=e[s];Dr.passThroughHooks.has(i)?e[s]=t=>{if(this.defaults.async&&Dr.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await o.call(e,t);return n.call(e,i)})();let s=o.call(e,t);return n.call(e,s)}:e[s]=(...t)=>{if(this.defaults.async)return(async()=>{let i=await o.apply(e,t);return!1===i&&(i=await n.apply(e,t)),i})();let i=o.apply(e,t);return!1===i&&(i=n.apply(e,t)),i}}i.hooks=e}if(t.walkTokens){let e=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(t){let i=[];return i.push(s.call(this,t)),e&&(i=i.concat(e.call(this,t))),i}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Rr.lex(t,e??this.defaults)}parser(t,e){return Ir.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let s={...i},o={...this.defaults,...s},n=this.onError(!!o.silent,!!o.async);if(!0===this.defaults.async&&!1===s.async)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||null===e)return n(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof e)return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let i=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer():t?Rr.lex:Rr.lexInline)(i,o),n=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(n,o.walkTokens));let r=await(o.hooks?await o.hooks.provideParser():t?Ir.parse:Ir.parseInline)(n,o);return o.hooks?await o.hooks.postprocess(r):r})().catch(n);try{o.hooks&&(e=o.hooks.preprocess(e));let i=(o.hooks?o.hooks.provideLexer():t?Rr.lex:Rr.lexInline)(e,o);o.hooks&&(i=o.hooks.processAllTokens(i)),o.walkTokens&&this.walkTokens(i,o.walkTokens);let s=(o.hooks?o.hooks.provideParser():t?Ir.parse:Ir.parseInline)(i,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(t){return n(t)}}}onError(t,e){return i=>{if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",t){let t="<p>An error occurred:</p><pre>"+Sr(i.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(i);throw i}}};function Mr(t,e){return Br.parse(t,e)}Mr.options=Mr.setOptions=function(t){return Br.setOptions(t),Mr.defaults=Br.defaults,zn(Mr.defaults),Mr},Mr.getDefaults=Sn,Mr.defaults=An,Mr.use=function(...t){return Br.use(...t),Mr.defaults=Br.defaults,zn(Mr.defaults),Mr},Mr.walkTokens=function(t,e){return Br.walkTokens(t,e)},Mr.parseInline=Br.parseInline,Mr.Parser=Ir,Mr.parser=Ir.parse,Mr.Renderer=Pr,Mr.TextRenderer=Or,Mr.Lexer=Rr,Mr.lexer=Rr.lex,Mr.Tokenizer=Lr,Mr.Hooks=Dr,Mr.parse=Mr,Mr.options,Mr.setOptions,Mr.use,Mr.walkTokens,Mr.parseInline,Ir.parse,Rr.lex;class Fr extends at{static properties={theme:{type:String,state:!0},noBars:{type:Boolean,attribute:"no-bars"}};constructor(){super(),this.theme="light",this.noBars=!1}connectedCallback(){super.connectedCallback(),this.theme=qt()}setTheme(t){this.theme=t,(t=>{localStorage.setItem("theme",t)})(t)}updated(t){t.has("theme")&&Ut(this.theme)}render(){return H`
            <div class="rl-split font-sans">
                <div class="rl-flank rl-gap-l rl-padding-l">
                    ${this.noBars?"":H`
                            <sl-icon
                                library="far"
                                name="bars"
                                class="sidebar-nav-mobile"
                                style="cursor: pointer;"
                                @click=${()=>{const t=document.querySelector("sl-drawer.sidebar-drawer");t&&t.show()}}
                            ></sl-icon>
                        `}
                    <a href="#" style="text-decoration: none; color: unset;">
                        <div class="rl-frame" style="height: 1.5rem; width: 1.5rem;">
                                <img src="assets/img/relayout.svg" alt="Relayout" />
                        </div>
                    </a>
                    <div class="rl-cluster rl-gap-l">
                        <a href="#" style="text-decoration: none; color: unset;">
                            <strong>Relayout</strong>
                        </a>
                        <!-- <span>v0.0.22</span> -->
                    </div>
                </div>
                <div class="rl-cluster rl-justify-end rl-gap-m">
                    <sl-icon-button 
                        library="fab" 
                        name="npm"
                        label="NPM"
                        href="https://www.npmjs.com/package/@relayoutui/relayout"
                        target="_blank"
                        style="font-size: 1.5rem;"
                    ></sl-icon-button>
                    <sl-icon-button 
                        library="fas" 
                        name="cube"
                        label="jsdelivr"
                        href="https://www.jsdelivr.com/package/npm/@relayoutui/relayout"
                        target="_blank"
                        style="font-size: 1.25rem;"
                    ></sl-icon-button>
                    <sl-icon-button 
                        library="fab" 
                        name="github"
                        label="Code"
                        href="https://github.com/relayoutui/relayout"
                        style="font-size: 1.25rem;"
                        target="_blank"
                    ></sl-icon-button>
                    <sl-icon-button 
                        library="far" 
                        name="${"light"===this.theme?"sun":"moon"}"
                        label="Theme"
                        style="font-size: 1.2rem;"
                        @click=${()=>{const t="light"===this.theme?"dark":"light";this.setTheme(t)}}
                    ></sl-icon-button>
                    <div></div>
                </div>
            </div>
        `}}customElements.define("docs-header",Fr);customElements.define("docs-sidebar",class extends at{render(){return H`
            <div class="rl-stack rl-padding-m rl-height-full" style="width: 13rem;">
                <div class="rl-stack">
                    <sl-tree
                        selection="leaf"
                        @sl-selection-change=${t=>{const e=t.detail.selection[0]?.getAttribute("path");if(e){Vt.getInstance().navigate(e);const t=document.querySelector("sl-drawer.sidebar-drawer");t&&t.hide()}}}
                        >
                        <sl-tree-item expanded>
                            Getting Started
                            <sl-tree-item 
                                path="/content/start/home"
                                ?selected=${Vt.getInstance().isPath("/content/start/home")}
                                >Home</sl-tree-item>
                            <sl-tree-item 
                                path="/content/start/install"
                                ?selected=${Vt.getInstance().isPath("/content/start/install")}
                                >Installation</sl-tree-item>
                        </sl-tree-item>
                        <sl-tree-item expanded>
                            Layouts
                            <sl-tree-item 
                                path="/content/layouts/stack"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/stack")}
                                >Stack</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/flank"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/flank")}
                                >Flank</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/split"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/split")}
                                >Split</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/cluster"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/cluster")}
                                >Cluster</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/grid"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/grid")}
                                >Grid</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/frame"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/frame")}
                                >Frame</sl-tree-item>
                            <sl-tree-item 
                                path="/content/layouts/divider"
                                ?selected=${Vt.getInstance().isPath("/content/layouts/divider")}
                                >Divider</sl-tree-item>
                        </sl-tree-item>
                        <sl-tree-item expanded>
                            Modifiers
                            <sl-tree-item 
                                path="/content/mods/gap"
                                ?selected=${Vt.getInstance().isPath("/content/mods/gap")}
                                >Gap</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/align"
                                ?selected=${Vt.getInstance().isPath("/content/mods/align")}
                                >Align</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/justify"
                                ?selected=${Vt.getInstance().isPath("/content/mods/justify")}
                                >Justify</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/padding"
                                ?selected=${Vt.getInstance().isPath("/content/mods/padding")}
                                >Padding</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/wrapping"
                                ?selected=${Vt.getInstance().isPath("/content/mods/wrapping")}
                                >Wrapping</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/border"
                                ?selected=${Vt.getInstance().isPath("/content/mods/border")}
                                >Border</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/radius"
                                ?selected=${Vt.getInstance().isPath("/content/mods/radius")}
                                >Radius</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/width"
                                ?selected=${Vt.getInstance().isPath("/content/mods/width")}
                                >Width</sl-tree-item>
                            <sl-tree-item 
                                path="/content/mods/height"
                                ?selected=${Vt.getInstance().isPath("/content/mods/height")}
                                >Height</sl-tree-item>
                        </sl-tree-item>
                        <!-- <sl-tree-item 
                            path="/content/examples"
                            expanded>
                            Examples
                            <sl-tree-item>Responsive Page</sl-tree-item>
                            <sl-tree-item>Dashboard</sl-tree-item>
                            <sl-tree-item>Documentation Site</sl-tree-item>
                        </sl-tree-item> -->
                    </sl-tree>
                </div>
            </div>
        `}});class Nr extends at{static properties={code:{type:String},preview:{type:Boolean},debug:{type:Boolean},rows:{type:Number}};constructor(){super(),this.code="",this.preview=!0}render(){const t=`code-${Math.random().toString(36).substr(2,9)}`;return H`
            <div class="rl-stack rl-width-m rl-gap-l">
                <div class="rl-stack rl-gap-0">
                    ${this.preview?H`
                            <div class="rl-stack rl-padding-m">
                                <!-- <sl-split-panel position="100" vertical>
                                    <div slot="start" style="overflow-y: auto; overflow-x: hidden;"> -->
                                <sl-split-panel position="100" style="----min: 1rem;">
                                    <div slot="start" class="${this.debug?"rl-debug":""}">
                                        <div style="padding-right: 1rem;">
                                            ${sn(this.code)}
                                        </div>
                                    </div>
                                    <div slot="end"></div>
                                </sl-split-panel>
                                    <!-- </div>
                                    <div slot="end"></div>
                                </sl-split-panel> -->
                            </div>
                            <!-- <div class="rl-divider"></div> -->
                        `:""}
                    <div class="rl-stack rl-gap-0">
                        <div class="rl-split">
                            ${this.preview?H`
                                    <sl-button 
                                        variant="text"
                                        @click=${()=>{const t=this.renderRoot.querySelector(".code-block"),e=this.renderRoot.querySelector("sl-copy-button"),i=this.renderRoot.querySelector("sl-icon"),s="none"===t.style.display;t.style.display=s?"block":"none",e.style.display=s?"inline-block":"none",i.name=s?"chevron-up":"chevron-down"}}
                                        >
                                        <sl-icon library="far" name="chevron-down" slot="prefix"></sl-icon>
                                        Source Code
                                    </sl-button>
                                    <sl-copy-button from="${t}" style="display: none;"></sl-copy-button>
                                `:H`
                                    <div></div>
                                    <sl-copy-button from="${t}"></sl-copy-button>
                                `}
                        </div>
                        ${this.preview?H`
                                <div class="rl-stack rl-padding-m code-block" style="display: none;">
                                    <textarea readonly rows="${this.rows}" id="${t}">${this.code}</textarea>
                                </div>
                            `:H`
                                <div class="rl-stack rl-padding-m code-block">
                                    <textarea readonly rows="${this.rows}" id="${t}">${this.code}</textarea>
                                </div>
                            `}
                    </div>
                </div>
            </div>
        `}}customElements.define("code-preview",Nr);customElements.define("docs-content",class extends at{static properties={dir:{type:String},file:{type:String},parts:{type:Array,state:!0}};constructor(){super(),this.dir="",this.file="",this.parts=[]}handleDrawerRequestClose(t){console.log("drawer request close",t.target);t.target.hide()}async willUpdate(t){(t.has("dir")&&""!=this.dir||t.has("file")&&""!=this.file)&&await this.loadContent()}async loadContent(){if(!this.dir||!this.file)return;const t=this.file?this.file.charAt(0).toUpperCase()+this.file.slice(1):"";document.title=`Relayout - ${t}`;const e=await fetch(`content/${this.dir}/${this.file}.md`),i=await e.text();this.parts=i.split(/```/g).map(t=>t)}render(){return H`
            <div class="rl-stack rl-gap-0 rl-height-full font-sans">
                <docs-header></docs-header>
                <div class="rl-divider"></div>
                <div class="rl-flank rl-gap-0 rl-height-full rl-align-start rl-nowrap" style="position: relative;">
                    <div class="rl-stack rl-gap-s rl-padding-m rl-height-full sidebar-nav-desktop" style="background: var(--sl-color-neutral-100);">
                        <docs-sidebar></docs-sidebar>
                    </div>
                    <div class="rl-divider vertical sidebar-nav-desktop"></div>
                    <sl-drawer contained
                        class="sidebar-drawer" 
                        label="" 
                        placement="start"
                        style="--size: 16em;"
                        no-header
                        @sl-request-close=${this.handleDrawerRequestClose}
                        >
                        <div class="rl-stack rl-height-full">
                            <docs-sidebar></docs-sidebar>
                        </div>
                    </sl-drawer>
                    <div class="rl-stack rl-height-full">
                        ${this.renderContent()}
                    </div>
                </div>
            </div>

        `}renderContent(){return H`
            <div class="rl-stack rl-gap-0 rl-padding-xl">
                <div class="rl-width-m">
                ${this.parts.map((t,e)=>{if(e%2==1){const e=t.split("\n"),i=e[0]||"",s=e.slice(1).join("\n"),o=i.split("|").map(t=>t.trim().toLowerCase());let n=o.includes("preview"),r=o.includes("debug"),l=e.slice(1).length;return l<3&&(l=3),l>10&&(l=10),H`
                            <div class="rl-stack rl-gap-l">
                                <div></div>
                                <code-preview 
                                    .code=${s}
                                    .preview=${n}
                                    .debug=${r}
                                    .rows=${l}
                                ></code-preview>
                                <div></div>
                            </div>
                        `}return H`
                            ${sn(Mr.parse(t))}
                        `})}
                </div>
            </div>
        `}});class Vr extends at{connectedCallback(){super.connectedCallback(),Ut(qt())}initRouting(){Vt.getInstance().register("#outlet",[{path:Ht,render:t=>H`
                        <docs-content
                            .dir=${t.data.dir}
                            .file=${t.data.file}
                        ></docs-content>
                    `},{path:"*",render:()=>H`
                        <docs-index></docs-index>
                    `}])}firstUpdated(){this.initRouting()}render(){return H`
            <div id="outlet" style="height: 100%;">
            </div>
        `}}customElements.define("relayout-docs",Vr),t.RelayoutDocs=Vr}({});
