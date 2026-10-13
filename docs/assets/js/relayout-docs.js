!function(t){"use strict";
/**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const n=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:d,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,f=g.trustedTypes,b=f?f.emptyScript:"",m=g.reactiveElementPolyfillSupport,v=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},w=(t,e)=>!l(t,e),k={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:w};
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=k){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??k}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...d(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){const s=this.constructor,o=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??w)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[v("elementProperties")]=new Map,x[v("finalized")]=new Map,m?.({ReactiveElement:x}),(g.reactiveElementVersions??=[]).push("2.1.1");
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const _=globalThis,$=_.trustedTypes,C=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+A,E=`<${z}>`,T=document,L=()=>T.createComment(""),P=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,I="[ \t\n\f\r]",O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,M=/>/g,F=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,V=/"/g,H=/^(?:script|style|textarea|title)$/i,N=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),W=new WeakMap,j=T.createTreeWalker(T,129);function K(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(e):e}let G=class t{constructor({strings:e,_$litType$:i},s){let o;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[c,h]=((t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",n=O;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,l=n.exec(i),null!==l);)h=n.lastIndex,n===O?"!--"===l[1]?n=D:void 0!==l[1]?n=M:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),n=F):void 0!==l[3]&&(n=F):n===F?">"===l[0]?(n=o??O,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?F:'"'===l[3]?V:B):n===V||n===B?n=F:n===D||n===M?n=O:(n=F,o=void 0);const d=n===F&&t[e+1].startsWith("/>")?" ":"";r+=n===O?i+E:c>=0?(s.push(a),i.slice(0,c)+S+i.slice(c)+A+d):i+A+(-2===c?e:d)}return[K(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]})(e,i);if(this.el=t.createElement(c,s),j.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(o=j.nextNode())&&l.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const t of o.getAttributeNames())if(t.endsWith(S)){const e=h[n++],i=o.getAttribute(t).split(A),s=/([.?@])?(.*)/.exec(e);l.push({type:1,index:r,name:s[2],strings:i,ctor:"."===s[1]?J:"?"===s[1]?tt:"@"===s[1]?et:Y}),o.removeAttribute(t)}else t.startsWith(A)&&(l.push({type:6,index:r}),o.removeAttribute(t));if(H.test(o.tagName)){const t=o.textContent.split(A),e=t.length-1;if(e>0){o.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],L()),j.nextNode(),l.push({type:2,index:++r});o.append(t[e],L())}}}else if(8===o.nodeType)if(o.data===z)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf(A,t+1));)l.push({type:7,index:r}),t+=A.length-1}r++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}};function Z(t,e,i=t,s){if(e===U)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=P(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}let Q=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);j.currentNode=s;let o=j.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new X(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new it(o,this,t)),this._$AV.push(e),a=i[++n]}r!==a?.index&&(o=j.nextNode(),r++)}return j.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),P(t)?t===q||null==t||""===t?(this._$AH!==q&&this._$AR(),this._$AH=q):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==q&&P(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(K(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Q(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=W.get(t.strings);return void 0===e&&W.set(t.strings,e=new G(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new X(this.O(L()),this.O(L()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}let Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!P(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=Z(this,s[i+n],e,n),a===U&&(a=this._$AH[n]),r||=!P(a)||a!==this._$AH[n],a===q?t=q:t!==q&&(t+=(a??"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.j(t)}j(t){t===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class J extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===q?void 0:t}}let tt=class extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==q)}},et=class extends Y{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??q)===U)return;const i=this._$AH,s=t===q&&i!==q||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},it=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}};const st=_.litHtmlPolyfillSupport;st?.(G,X),(_.litHtmlVersions??=[]).push("3.3.1");const ot=(t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new X(e.insertBefore(L(),t),t,void 0,i??{})}return o._$AI(t),o
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */},rt=globalThis;let nt=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}};nt._$litElement$=!0,nt.finalized=!0,rt.litElementHydrateSupport?.({LitElement:nt});const at=rt.litElementPolyfillSupport;at?.({LitElement:nt}),(rt.litElementVersions??=[]).push("4.2.1");class lt extends nt{createRenderRoot(){return this}}function ct(t,e,i,s){if("a"===i&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?s:"a"===i?s.call(t):s?s.value:e.get(t)}function ht(t,e,i,s,o){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?o.call(t,i):o?o.value=i:e.set(t,i),i}"function"==typeof SuppressedError&&SuppressedError;var dt=/([:*])(\w+)/g,ut=/\*/g,pt=/\/\?/g;function gt(t){return void 0===t&&(t="/"),_t()?location.pathname+location.search+location.hash:t}function ft(t){return t.replace(/\/+$/,"").replace(/^\/+/,"")}function bt(t){return"string"==typeof t}function mt(t){return t&&t.indexOf("#")>=0&&t.split("#").pop()||""}function vt(t){var e=ft(t).split(/\?(.*)?$/);return[ft(e[0]),e.slice(1).join("")]}function yt(t){for(var e={},i=t.split("&"),s=0;s<i.length;s++){var o=i[s].split("=");if(""!==o[0]){var r=decodeURIComponent(o[0]);e[r]?(Array.isArray(e[r])||(e[r]=[e[r]]),e[r].push(decodeURIComponent(o[1]||""))):e[r]=decodeURIComponent(o[1]||"")}}return e}function wt(t,e){var i,s=vt(ft(t.currentLocationPath)),o=s[0],r=s[1],n=""===r?null:yt(r),a=[];if(bt(e.path)){if(i="(?:/^|^)"+ft(e.path).replace(dt,function(t,e,i){return a.push(i),"([^/]+)"}).replace(ut,"?(?:.*)").replace(pt,"/?([^/]+|)")+"$",""===ft(e.path)&&""===ft(o))return{url:o,queryString:r,hashString:mt(t.to),route:e,data:null,params:n}}else i=e.path;var l=new RegExp(i,""),c=o.match(l);if(c){var h=bt(e.path)?function(t,e){return 0===e.length?null:t?t.slice(1,t.length).reduce(function(t,i,s){return null===t&&(t={}),t[e[s]]=decodeURIComponent(i),t},null):null}(c,a):c.groups?c.groups:c.slice(1);return{url:ft(o.replace(new RegExp("^"+t.instance.root),"")),queryString:r,hashString:mt(t.to),route:e,data:h,params:n}}return!1}function kt(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function xt(t,e){return void 0===t[e]||!0===t[e]}function _t(){return"undefined"!=typeof window}function $t(t,e){return void 0===t&&(t=[]),void 0===e&&(e={}),t.filter(function(t){return t}).forEach(function(t){["before","after","already","leave"].forEach(function(i){t[i]&&(e[i]||(e[i]=[]),e[i].push(t[i]))})}),e}function Ct(t,e,i){var s=e||{},o=0;!function e(){t[o]?Array.isArray(t[o])?(t.splice.apply(t,[o,1].concat(t[o][0](s)?t[o][1]:t[o][2])),e()):t[o](s,function(t){void 0===t||!0===t?(o+=1,e()):i&&i(s)}):i&&i(s)}()}function St(t,e){void 0===t.currentLocationPath&&(t.currentLocationPath=t.to=gt(t.instance.root)),t.currentLocationPath=t.instance._checkForAHash(t.currentLocationPath),e()}function At(t,e){for(var i=0;i<t.instance.routes.length;i++){var s=wt(t,t.instance.routes[i]);if(s&&(t.matches||(t.matches=[]),t.matches.push(s),"ONE"===t.resolveOptions.strategy))return void e()}e()}function zt(t,e){t.navigateOptions&&(void 0!==t.navigateOptions.shouldResolve&&console.warn('"shouldResolve" is deprecated. Please check the documentation.'),void 0!==t.navigateOptions.silent&&console.warn('"silent" is deprecated. Please check the documentation.')),e()}function Et(t,e){!0===t.navigateOptions.force?(t.instance._setCurrent([t.instance._pathToMatchObject(t.to)]),e(!1)):e()}Ct.if=function(t,e,i){return Array.isArray(e)||(e=[e]),Array.isArray(i)||(i=[i]),[t,e,i]};var Tt=_t(),Lt=kt();function Pt(t,e){if(xt(t.navigateOptions,"updateBrowserURL")){var i=("/"+t.to).replace(/\/\//g,"/"),s=Tt&&t.resolveOptions&&!0===t.resolveOptions.hash;Lt?(history[t.navigateOptions.historyAPIMethod||"pushState"](t.navigateOptions.stateObj||{},t.navigateOptions.title||"",s?"#"+i:i),location&&location.hash&&(t.instance.__freezeListening=!0,setTimeout(function(){if(!s){var e=location.hash;location.hash="",location.hash=e}t.instance.__freezeListening=!1},1))):Tt&&(window.location.href=t.to)}e()}function Rt(t,e){var i=t.instance;i.lastResolved()?Ct(i.lastResolved().map(function(e){return function(i,s){if(e.route.hooks&&e.route.hooks.leave){var o=!1,r=t.instance.matchLocation(e.route.path,t.currentLocationPath,!1);if("*"!==e.route.path)o=!r;else o=!(!!t.matches&&t.matches.find(function(t){return e.route.path===t.route.path}));xt(t.navigateOptions,"callHooks")&&o?Ct(e.route.hooks.leave.map(function(e){return function(i,s){return e(function(e){!1===e?t.instance.__markAsClean(t):s()},t.matches&&t.matches.length>0?1===t.matches.length?t.matches[0]:t.matches:void 0)}}).concat([function(){return s()}])):s()}else s()}}),{},function(){return e()}):e()}function It(t,e){xt(t.navigateOptions,"updateState")&&t.instance._setCurrent(t.matches),e()}var Ot=[function(t,e){var i=t.instance.lastResolved();if(i&&i[0]&&i[0].route===t.match.route&&i[0].url===t.match.url&&i[0].queryString===t.match.queryString)return i.forEach(function(e){e.route.hooks&&e.route.hooks.already&&xt(t.navigateOptions,"callHooks")&&e.route.hooks.already.forEach(function(e){return e(t.match)})}),void e(!1);e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.before&&xt(t.navigateOptions,"callHooks")?Ct(t.match.route.hooks.before.map(function(e){return function(i,s){return e(function(e){!1===e?t.instance.__markAsClean(t):s()},t.match)}}).concat([function(){return e()}])):e()},function(t,e){xt(t.navigateOptions,"callHandler")&&t.match.route.handler(t.match),t.instance.updatePageLinks(),e()},function(t,e){t.match.route.hooks&&t.match.route.hooks.after&&xt(t.navigateOptions,"callHooks")&&t.match.route.hooks.after.forEach(function(e){return e(t.match)}),e()}],Dt=[Rt,function(t,e){var i=t.instance._notFoundRoute;if(i){t.notFoundHandled=!0;var s=vt(t.currentLocationPath),o=s[0],r=s[1],n=mt(t.to);i.path=ft(o);var a={url:i.path,queryString:r,hashString:n,data:null,route:i,params:""!==r?yt(r):null};t.matches=[a],t.match=a}e()},Ct.if(function(t){return t.notFoundHandled},Ot.concat([It]),[function(t,e){t.resolveOptions&&!1!==t.resolveOptions.noMatchWarning&&void 0!==t.resolveOptions.noMatchWarning||console.warn('Navigo: "'+t.currentLocationPath+"\" didn't match any of the registered routes."),e()},function(t,e){t.instance._setCurrent(null),e()}])];function Mt(){return Mt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Mt.apply(this,arguments)}function Ft(t,e){var i=0;Rt(t,function s(){i!==t.matches.length?Ct(Ot,Mt({},t,{match:t.matches[i]}),function(){i+=1,s()}):It(t,e)})}function Bt(t){t.instance.__markAsClean(t)}function Vt(){return Vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},Vt.apply(this,arguments)}var Ht,Nt,Ut,qt="[data-navigo]";function Wt(t,e){var i,s=e||{strategy:"ONE",hash:!1,noMatchWarning:!1,linksSelector:qt},o=this,r="/",n=null,a=[],l=!1,c=kt(),h=_t();function d(t){return t.indexOf("#")>=0&&(t=!0===s.hash?t.split("#")[1]||"/":t.split("#")[0]),t}function u(t){return ft(r+"/"+ft(t))}function p(t,e,i,s){return t=bt(t)?u(t):t,{name:s||ft(String(t)),path:t,handler:e,hooks:$t(i)}}function g(t,e){if(!o.__dirty){o.__dirty=!0,t=t?ft(r)+"/"+ft(t):void 0;var i={instance:o,to:t,currentLocationPath:t,navigateOptions:{},resolveOptions:Vt({},s,e)};return Ct([St,At,Ct.if(function(t){var e=t.matches;return e&&e.length>0},Ft,Dt)],i,Bt),!!i.matches&&i.matches}o.__waiting.push(function(){return o.resolve(t,e)})}function f(t,e){if(o.__dirty)o.__waiting.push(function(){return o.navigate(t,e)});else{o.__dirty=!0,t=ft(r)+"/"+ft(t);var i={instance:o,to:t,navigateOptions:e||{},resolveOptions:e&&e.resolveOptions?e.resolveOptions:s,currentLocationPath:d(t)};Ct([zt,Et,At,Ct.if(function(t){var e=t.matches;return e&&e.length>0},Ft,Dt),Pt,Bt],i,Bt)}}function b(){if(h)return function(){if(h)return[].slice.call(document.querySelectorAll(s.linksSelector||qt));return[]}().forEach(function(t){"false"!==t.getAttribute("data-navigo")&&"_blank"!==t.getAttribute("target")?t.hasListenerAttached||(t.hasListenerAttached=!0,t.navigoHandler=function(e){if((e.ctrlKey||e.metaKey)&&"a"===e.target.tagName.toLowerCase())return!1;var i=t.getAttribute("href");if(null==i)return!1;if(i.match(/^(http|https)/)&&"undefined"!=typeof URL)try{var s=new URL(i);i=s.pathname+s.search}catch(t){}var r=function(t){if(!t)return{};var e,i=t.split(","),s={};return i.forEach(function(t){var i=t.split(":").map(function(t){return t.replace(/(^ +| +$)/g,"")});switch(i[0]){case"historyAPIMethod":s.historyAPIMethod=i[1];break;case"resolveOptionsStrategy":e||(e={}),e.strategy=i[1];break;case"resolveOptionsHash":e||(e={}),e.hash="true"===i[1];break;case"updateBrowserURL":case"callHandler":case"updateState":case"force":s[i[0]]="true"===i[1]}}),e&&(s.resolveOptions=e),s}(t.getAttribute("data-navigo-options"));l||(e.preventDefault(),e.stopPropagation(),o.navigate(ft(i),r))},t.addEventListener("click",t.navigoHandler)):t.hasListenerAttached&&t.removeEventListener("click",t.navigoHandler)}),o}function m(t,e,i){var s=a.find(function(e){return e.name===t}),o=null;if(s){if(o=s.path,e)for(var n in e)o=o.replace(":"+n,e[n]);o=o.match(/^\//)?o:"/"+o}return o&&i&&!i.includeRoot&&(o=o.replace(new RegExp("^/"+r),"")),o}function v(t){var e=vt(ft(t)),s=e[0],o=e[1],r=""===o?null:yt(o);return{url:s,queryString:o,hashString:mt(t),route:p(s,function(){},[i],s),data:null,params:r}}function y(t,e,i){return"string"==typeof e&&(e=w(e)),e?(e.hooks[t]||(e.hooks[t]=[]),e.hooks[t].push(i),function(){e.hooks[t]=e.hooks[t].filter(function(t){return t!==i})}):(console.warn("Route doesn't exists: "+e),function(){})}function w(t){return"string"==typeof t?a.find(function(e){return e.name===u(t)}):a.find(function(e){return e.handler===t})}t?r=ft(t):console.warn('Navigo requires a root path in its constructor. If not provided will use "/" as default.'),this.root=r,this.routes=a,this.destroyed=l,this.current=n,this.__freezeListening=!1,this.__waiting=[],this.__dirty=!1,this.__markAsClean=function(t){t.instance.__dirty=!1,t.instance.__waiting.length>0&&t.instance.__waiting.shift()()},this.on=function(t,e,s){var o=this;return"object"!=typeof t||t instanceof RegExp?("function"==typeof t&&(s=e,e=t,t=r),a.push(p(t,e,[i,s])),this):(Object.keys(t).forEach(function(e){if("function"==typeof t[e])o.on(e,t[e]);else{var s=t[e],r=s.uses,n=s.as,l=s.hooks;a.push(p(e,r,[i,l],n))}}),this)},this.off=function(t){return this.routes=a=a.filter(function(e){return bt(t)?ft(e.path)!==ft(t):function(t){return"function"==typeof t}(t)?t!==e.handler:String(e.path)!==String(t)}),this},this.resolve=g,this.navigate=f,this.navigateByName=function(t,e,i){var s=m(t,e);return null!==s&&(f(s.replace(new RegExp("^/?"+r),""),i),!0)},this.destroy=function(){this.routes=a=[],c&&window.removeEventListener("popstate",this.__popstateListener),this.destroyed=l=!0},this.notFound=function(t,e){return o._notFoundRoute=p("*",t,[i,e],"__NOT_FOUND__"),this},this.updatePageLinks=b,this.link=function(t){return"/"+r+"/"+ft(t)},this.hooks=function(t){return i=t,this},this.extractGETParameters=function(t){return vt(d(t))},this.lastResolved=function(){return n},this.generate=m,this.getLinkPath=function(t){return t.getAttribute("href")},this.match=function(t){var e={instance:o,currentLocationPath:t,to:t,resolveOptions:s};return At(e,function(){}),!!e.matches&&e.matches},this.matchLocation=function(t,e,i){void 0===e||void 0!==i&&!i||(e=u(e));var s={instance:o,to:e,currentLocationPath:e};St(s,function(){}),"string"==typeof t&&(t=void 0===i||i?u(t):t);var r=wt(s,{name:String(t),path:t,handler:function(){},hooks:{}});return r||!1},this.getCurrentLocation=function(){return v(ft(gt(r)).replace(new RegExp("^"+r),""))},this.addBeforeHook=y.bind(this,"before"),this.addAfterHook=y.bind(this,"after"),this.addAlreadyHook=y.bind(this,"already"),this.addLeaveHook=y.bind(this,"leave"),this.getRoute=w,this._pathToMatchObject=v,this._clean=ft,this._checkForAHash=d,this._setCurrent=function(t){return n=o.current=t},function(){c&&(this.__popstateListener=function(){o.__freezeListening||g()},window.addEventListener("popstate",this.__popstateListener))}.call(this),b.call(this)}class jt{constructor(){if(Nt.set(this,void 0),ct(Ht,Ht,"f",Ut))throw new Error("Router is a singleton, use Router.getInstance()");ht(this,Nt,new Wt("/",{hash:!0}),"f")}static getInstance(){return ct(Ht,Ht,"f",Ut)||ht(Ht,Ht,new Ht,"f",Ut),ct(Ht,Ht,"f",Ut)}register(t,e){const i=document.querySelector(t);if(!i)throw new Error(`Outlet element not found: ${t}`);e.map(t=>{"*"!=t.path?ct(this,Nt,"f").on(t.path,e=>{ot(t.render(e),i)}):ct(this,Nt,"f").notFound(()=>{ot(t.render(),i)})}),ct(this,Nt,"f").resolve()}navigate(t){location.hash=t}getPath(){return ct(this,Nt,"f").getCurrentLocation().hashString}isPath(t){return this.getPath()===t}}Ht=jt,Nt=new WeakMap,Ut={value:null};const Kt="/content/:dir/:file",Gt=t=>{const e=document.documentElement;e.classList.remove("sl-theme-light","sl-theme-dark"),e.classList.add(`sl-theme-${t}`)},Zt=()=>{const t=localStorage.getItem("theme");return"light"==t||"dark"==t?t:"light"};var Qt=n`
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
`,Xt=Object.defineProperty,Yt=Object.defineProperties,Jt=Object.getOwnPropertyDescriptor,te=Object.getOwnPropertyDescriptors,ee=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,oe=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),re=t=>{throw TypeError(t)},ne=(t,e,i)=>e in t?Xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,ae=(t,e)=>{for(var i in e||(e={}))ie.call(e,i)&&ne(t,i,e[i]);if(ee)for(var i of ee(e))se.call(e,i)&&ne(t,i,e[i]);return t},le=(t,e)=>Yt(t,te(e)),ce=(t,e,i,s)=>{for(var o,r=s>1?void 0:s?Jt(e,i):e,n=t.length-1;n>=0;n--)(o=t[n])&&(r=(s?o(e,i,r):o(r))||r);return s&&r&&Xt(e,i,r),r},he=(t,e,i)=>e.has(t)||re("Cannot "+i),de=function(t,e){this[0]=t,this[1]=e};function*ue(t=document.activeElement){var e,i,s,o,r;null!=t&&(yield t,"shadowRoot"in t&&t.shadowRoot&&"closed"!==t.shadowRoot.mode&&(yield*(e=ue(t.shadowRoot.activeElement),s=e[oe("asyncIterator")],o=!1,r={},null==s?(s=e[oe("iterator")](),i=t=>r[t]=e=>s[t](e)):(s=s.call(e),i=t=>r[t]=e=>{if(o){if(o=!1,"throw"===t)throw e;return e}return o=!0,{done:!1,value:new de(new Promise(i=>{var o=s[t](e);o instanceof Object||re("Object expected"),i(o)}),1)}}),r[oe("iterator")]=()=>r,i("next"),"throw"in s?i("throw"):r.throw=t=>{throw t},"return"in s&&i("return"),r)))}function pe(){return[...ue()].pop()}var ge=new WeakMap;function fe(t){let e=ge.get(t);return e||(e=window.getComputedStyle(t,null),ge.set(t,e)),e}function be(t){const e=t.tagName.toLowerCase(),i=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(i)||i<=-1))return!1;if(t.hasAttribute("disabled"))return!1;if(t.closest("[inert]"))return!1;if("input"===e&&"radio"===t.getAttribute("type")){const e=t.getRootNode(),i=`input[type='radio'][name="${t.getAttribute("name")}"]`,s=e.querySelector(`${i}:checked`);if(s)return s===t;return e.querySelector(i)===t}if(!function(t){if("function"==typeof t.checkVisibility)return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=fe(t);return"hidden"!==e.visibility&&"none"!==e.display}(t))return!1;if(("audio"===e||"video"===e)&&t.hasAttribute("controls"))return!0;if(t.hasAttribute("tabindex"))return!0;if(t.hasAttribute("contenteditable")&&"false"!==t.getAttribute("contenteditable"))return!0;return!!["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)||function(t){const e=fe(t),{overflowY:i,overflowX:s}=e;return"scroll"===i||"scroll"===s||"auto"===i&&"auto"===s&&(t.scrollHeight>t.clientHeight&&"auto"===i||!(!(t.scrollWidth>t.clientWidth)||"auto"!==s))}(t)}function me(t){const e=new WeakMap,i=[];return function s(o){if(o instanceof Element){if(o.hasAttribute("inert")||o.closest("[inert]"))return;if(e.has(o))return;e.set(o,!0),!i.includes(o)&&be(o)&&i.push(o),o instanceof HTMLSlotElement&&function(t,e){var i;return(null==(i=t.getRootNode({composed:!0}))?void 0:i.host)!==e}(o,t)&&o.assignedElements({flatten:!0}).forEach(t=>{s(t)}),null!==o.shadowRoot&&"open"===o.shadowRoot.mode&&s(o.shadowRoot)}for(const t of o.children)s(t)}(t),i.sort((t,e)=>{const i=Number(t.getAttribute("tabindex"))||0;return(Number(e.getAttribute("tabindex"))||0)-i})}var ve=[],ye=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=t=>{var e;if("Tab"!==t.key||this.isExternalActivated)return;if(!this.isActive())return;const i=pe();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;t.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=me(this.element);let o=s.findIndex(t=>t===i);this.previousFocus=this.currentFocus;const r="forward"===this.tabDirection?1:-1;for(;;){o+r>=s.length?o=0:o+r<0?o=s.length-1:o+=r,this.previousFocus=this.currentFocus;const i=s[o];if("backward"===this.tabDirection&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;if(i&&this.possiblyHasTabbableChildren(i))return;t.preventDefault(),this.currentFocus=i,null==(e=this.currentFocus)||e.focus({preventScroll:!1});const n=[...ue()];if(n.includes(this.currentFocus)||!n.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){ve.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){ve=ve.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return ve[ve.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=me(this.element);if(!this.element.matches(":focus-within")){const e=t[0],i=t[t.length-1],s="forward"===this.tabDirection?e:i;"function"==typeof(null==s?void 0:s.focus)&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var we=new Set;function ke(t){if(we.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){const t=function(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}()+function(){const t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}();let e=getComputedStyle(document.documentElement).scrollbarGutter;e&&"auto"!==e||(e="stable"),t<2&&(e=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",e),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function xe(t){we.delete(t),0===we.size&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function _e(t,e,i="vertical",s="smooth"){const o=function(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}(t,e),r=o.top+e.scrollTop,n=o.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,c=e.scrollTop,h=e.scrollTop+e.offsetHeight;"horizontal"!==i&&"both"!==i||(n<a?e.scrollTo({left:n,behavior:s}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:s})),"vertical"!==i&&"both"!==i||(r<c?e.scrollTo({top:r,behavior:s}):r+t.clientHeight>h&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:s}))}var $e=t=>{var e;const{activeElement:i}=document;i&&t.contains(i)&&(null==(e=document.activeElement)||e.blur())},Ce=n`
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
`,Se="";function Ae(t){Se=t}var ze={name:"default",resolver:t=>function(t=""){if(!Se){const t=[...document.getElementsByTagName("script")],e=t.find(t=>t.hasAttribute("data-shoelace"));if(e)Ae(e.getAttribute("data-shoelace"));else{const e=t.find(t=>/shoelace(\.min)?\.js($|\?)/.test(t.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(t.src));let i="";e&&(i=e.getAttribute("src")),Ae(i.split("/").slice(0,-1).join("/"))}}return Se.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}(`assets/icons/${t}.svg`)},Ee={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',copy:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Te=[ze,{name:"system",resolver:t=>t in Ee?`data:image/svg+xml,${encodeURIComponent(Ee[t])}`:""}],Le=[];function Pe(t){return Te.find(e=>e.name===t)}function Re(t,e){!function(t){Te=Te.filter(e=>e.name!==t)}(t),Te.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Le.forEach(e=>{e.library===t&&e.setIcon()})}var Ie=n`
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
`;function Oe(t,e){const i=ae({waitUntilFirstUpdate:!1},e);return(e,s)=>{const{update:o}=e,r=Array.isArray(t)?t:[t];e.update=function(t){r.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),r=this[o];e!==r&&(i.waitUntilFirstUpdate&&!this.hasUpdated||this[s](e,r))}}),o.call(this,t)}}}var De=n`
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
     */;const Me={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:w},Fe=(t=Me,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t)}}throw Error("Unsupported decorator location: "+s)};function Be(t){return(e,i)=>"object"==typeof i?Fe(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function Ve(t){return Be({...t,state:!0,attribute:!1})}
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function He(t){return(e,i)=>{const s="function"==typeof e?e:e[i];Object.assign(s,t)}}
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
function Ne(t,e){return(e,i,s)=>((t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof e&&Object.defineProperty(t,e,i),i))(e,i,{get(){return(e=>e.renderRoot?.querySelector(t)??null)(this)}})}var Ue,qe=class extends nt{constructor(){var t,e,i;super(),t=this,i=!1,(e=Ue).has(t)?re("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,i),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const i=new CustomEvent(t,ae({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(i),i}static define(t,e=this,i={}){const s=customElements.get(t);if(!s){try{customElements.define(t,e,i)}catch(s){customElements.define(t,class extends e{},i)}return}let o=" (unknown version)",r=o;"version"in e&&e.version&&(o=" v"+e.version),"version"in s&&s.version&&(r=" v"+s.version),o&&r&&o===r||console.warn(`Attempted to register <${t}>${o}, but <${t}>${r} has already been registered.`)}attributeChangedCallback(t,e,i){var s,o;he(s=this,o=Ue,"read from private field"),o.get(s)||(this.constructor.elementProperties.forEach((t,e)=>{t.reflect&&null!=this[e]&&this.initialReflectedProperties.set(e,this[e])}),((t,e,i)=>{he(t,e,"write to private field"),e.set(t,i)})(this,Ue,!0)),super.attributeChangedCallback(t,e,i)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,i)=>{t.has(i)&&null==this[i]&&(this[i]=e)})}};Ue=new WeakMap,qe.version="2.20.1",qe.dependencies={},ce([Be()],qe.prototype,"dir",2),ce([Be()],qe.prototype,"lang",2);
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const We=t=>void 0===t.strings,je={},Ke=(t,e=je)=>t._$AH=e;var Ge,Ze=Symbol(),Qe=Symbol(),Xe=new Map,Ye=class extends qe{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var i;let s;if(null==e?void 0:e.spriteSheet)return this.svg=N`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return 410===s.status?Ze:Qe}catch(t){return Qe}try{const t=document.createElement("div");t.innerHTML=await s.text();const e=t.firstElementChild;if("svg"!==(null==(i=null==e?void 0:e.tagName)?void 0:i.toLowerCase()))return Ze;Ge||(Ge=new DOMParser);const o=Ge.parseFromString(e.outerHTML,"text/html").body.querySelector("svg");return o?(o.part.add("svg"),document.adoptNode(o)):Ze}catch(t){return Ze}}connectedCallback(){var t;super.connectedCallback(),t=this,Le.push(t)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){var t;super.disconnectedCallback(),t=this,Le=Le.filter(e=>e!==t)}getIconSource(){const t=Pe(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:i}=this.getIconSource(),s=i?Pe(this.library):void 0;if(!e)return void(this.svg=null);let o=Xe.get(e);if(o||(o=this.resolveIcon(e,s),Xe.set(e,o)),!this.initialRender)return;const r=await o;if(r===Qe&&Xe.delete(e),e===this.getIconSource().url)if((t=>void 0!==t?._$litType$)(r)){if(this.svg=r,s){await this.updateComplete;const t=this.shadowRoot.querySelector("[part='svg']");"function"==typeof s.mutator&&t&&s.mutator(t)}}else switch(r){case Qe:case Ze:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(t=null==s?void 0:s.mutator)||t.call(s,this.svg),this.emit("sl-load")}}render(){return this.svg}};Ye.styles=[De,Ie],ce([Ve()],Ye.prototype,"svg",2),ce([Be({reflect:!0})],Ye.prototype,"name",2),ce([Be()],Ye.prototype,"src",2),ce([Be()],Ye.prototype,"label",2),ce([Be({reflect:!0})],Ye.prototype,"library",2),ce([Oe("label")],Ye.prototype,"handleLabelChange",1),ce([Oe(["name","src","library"])],Ye.prototype,"setIcon",1);
/**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Je=1,ti=2,ei=3,ii=4,si=t=>(...e)=>({_$litDirective$:t,values:e});let oi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const ri=si(class extends oi{constructor(t){if(super(t),t.type!==Je||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const s=!!e[t];s===this.st.has(t)||this.nt?.has(t)||(s?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return U}}),ni=Symbol.for(""),ai=t=>{if(t?.r===ni)return t?._$litStatic$},li=(t,...e)=>({_$litStatic$:e.reduce((e,i,s)=>e+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:ni}),ci=new Map,hi=(t=>(e,...i)=>{const s=i.length;let o,r;const n=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=e[c];c<s&&void 0!==(r=i[c],o=ai(r));)l+=o+e[++c],h=!0;c!==s&&a.push(r),n.push(l),c++}if(c===s&&n.push(e[s]),h){const t=n.join("$$lit$$");void 0===(e=ci.get(t))&&(n.raw=n,ci.set(t,e=n)),i=a}return t(e,...i)})(N),di=t=>t??q;
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var ui=class extends qe{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?li`a`:li`button`;return hi`
      <${e}
        part="base"
        class=${ri({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${di(t?void 0:this.disabled)}
        type=${di(t?void 0:"button")}
        href=${di(t?this.href:void 0)}
        target=${di(t?this.target:void 0)}
        download=${di(t?this.download:void 0)}
        rel=${di(t&&this.target?"noreferrer noopener":void 0)}
        role=${di(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${di(this.name)}
          library=${di(this.library)}
          src=${di(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};ui.styles=[De,Ce],ui.dependencies={"sl-icon":Ye},ce([Ne(".icon-button")],ui.prototype,"button",2),ce([Ve()],ui.prototype,"hasFocus",2),ce([Be()],ui.prototype,"name",2),ce([Be()],ui.prototype,"library",2),ce([Be()],ui.prototype,"src",2),ce([Be()],ui.prototype,"href",2),ce([Be()],ui.prototype,"target",2),ce([Be()],ui.prototype,"download",2),ce([Be()],ui.prototype,"label",2),ce([Be({type:Boolean,reflect:!0})],ui.prototype,"disabled",2);var pi=new Map,gi=new WeakMap;function fi(t,e){return"rtl"===e.toLowerCase()?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function bi(t,e){pi.set(t,function(t){return null!=t?t:{keyframes:[],options:{duration:0}}}(e))}function mi(t,e,i){const s=gi.get(t);if(null==s?void 0:s[e])return fi(s[e],i.dir);const o=pi.get(e);return o?fi(o,i.dir):{keyframes:[],options:{duration:0}}}function vi(t,e){return new Promise(i=>{t.addEventListener(e,function s(o){o.target===t&&(t.removeEventListener(e,s),i())})})}function yi(t,e,i){return new Promise(s=>{if((null==i?void 0:i.duration)===1/0)throw new Error("Promise-based animations must be finite.");const o=t.animate(e,le(ae({},i),{duration:ki()?0:i.duration}));o.addEventListener("cancel",s,{once:!0}),o.addEventListener("finish",s,{once:!0})})}function wi(t){return(t=t.toString().toLowerCase()).indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?1e3*parseFloat(t):parseFloat(t)}function ki(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function xi(t){return Promise.all(t.getAnimations().map(t=>new Promise(e=>{t.cancel(),requestAnimationFrame(e)})))}function _i(t,e){return t.map(t=>le(ae({},t),{height:"auto"===t.height?`${e}px`:t.height}))}var $i=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=t=>{const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&""!==t.textContent.trim())return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if("sl-visually-hidden"===e.tagName.toLowerCase())return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return null!==this.host.querySelector(`:scope > [slot="${t}"]`)}test(t){return"[default]"===t?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};const Ci=new Set,Si=new Map;let Ai,zi="ltr",Ei="en";const Ti="undefined"!=typeof MutationObserver&&"undefined"!=typeof document&&void 0!==document.documentElement;if(Ti){const t=new MutationObserver(Pi);zi=document.documentElement.dir||"ltr",Ei=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Li(...t){t.map(t=>{const e=t.$code.toLowerCase();Si.has(e)?Si.set(e,Object.assign(Object.assign({},Si.get(e)),t)):Si.set(e,t),Ai||(Ai=t)}),Pi()}function Pi(){Ti&&(zi=document.documentElement.dir||"ltr",Ei=document.documentElement.lang||navigator.language),[...Ci.keys()].map(t=>{"function"==typeof t.requestUpdate&&t.requestUpdate()})}let Ri=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Ci.add(this.host)}hostDisconnected(){Ci.delete(this.host)}dir(){return`${this.host.dir||zi}`.toLowerCase()}lang(){return`${this.host.lang||Ei}`.toLowerCase()}getTranslationData(t){var e,i;const s=new Intl.Locale(t.replace(/_/g,"-")),o=null==s?void 0:s.language.toLowerCase(),r=null!==(i=null===(e=null==s?void 0:s.region)||void 0===e?void 0:e.toLowerCase())&&void 0!==i?i:"";return{locale:s,language:o,region:r,primary:Si.get(`${o}-${r}`),secondary:Si.get(o)}}exists(t,e){var i;const{primary:s,secondary:o}=this.getTranslationData(null!==(i=e.lang)&&void 0!==i?i:this.lang());return e=Object.assign({includeFallback:!1},e),!!(s&&s[t]||o&&o[t]||e.includeFallback&&Ai&&Ai[t])}term(t,...e){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(s&&s[t])o=s[t];else{if(!Ai||!Ai[t])return console.error(`No translation found for: ${String(t)}`),String(t);o=Ai[t]}return"function"==typeof o?o(...e):o}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}};var Ii={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>0===t?"No options selected":1===t?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};Li(Ii);var Oi=Ii,Di=class extends Ri{};function Mi(t){return t.charAt(0).toUpperCase()+t.slice(1)}Li(Oi);var Fi=class extends qe{constructor(){super(...arguments),this.hasSlotController=new $i(this,"footer"),this.localize=new Di(this),this.modal=new ye(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ke(this)))}disconnectedCallback(){super.disconnectedCallback(),xe(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=mi(this,"drawer.denyClose",{dir:this.localize.dir()});return void yi(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;document.removeEventListener("keydown",this.handleDocumentKeyDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ke(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([xi(this.drawer),xi(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=mi(this,`drawer.show${Mi(this.placement)}`,{dir:this.localize.dir()}),i=mi(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([yi(this.panel,e.keyframes,e.options),yi(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{$e(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),xe(this)),await Promise.all([xi(this.drawer),xi(this.overlay)]);const t=mi(this,`drawer.hide${Mi(this.placement)}`,{dir:this.localize.dir()}),e=mi(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([yi(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),yi(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ke(this)),this.open&&this.contained&&(this.modal.deactivate(),xe(this))}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ri({drawer:!0,"drawer--open":this.open,"drawer--top":"top"===this.placement,"drawer--end":"end"===this.placement,"drawer--bottom":"bottom"===this.placement,"drawer--start":"start"===this.placement,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":"rtl"===this.localize.dir(),"drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${di(this.noHeader?this.label:void 0)}
          aria-labelledby=${di(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":N`
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
    `}};Fi.styles=[De,Qt],Fi.dependencies={"sl-icon-button":ui},ce([Ne(".drawer")],Fi.prototype,"drawer",2),ce([Ne(".drawer__panel")],Fi.prototype,"panel",2),ce([Ne(".drawer__overlay")],Fi.prototype,"overlay",2),ce([Be({type:Boolean,reflect:!0})],Fi.prototype,"open",2),ce([Be({reflect:!0})],Fi.prototype,"label",2),ce([Be({reflect:!0})],Fi.prototype,"placement",2),ce([Be({type:Boolean,reflect:!0})],Fi.prototype,"contained",2),ce([Be({attribute:"no-header",type:Boolean,reflect:!0})],Fi.prototype,"noHeader",2),ce([Oe("open",{waitUntilFirstUpdate:!0})],Fi.prototype,"handleOpenChange",1),ce([Oe("contained",{waitUntilFirstUpdate:!0})],Fi.prototype,"handleNoModalChange",1),bi("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),bi("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}}),bi("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),bi("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}}),bi("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}}),bi("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}}),bi("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}}),bi("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}}),bi("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),bi("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),bi("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Fi.define("sl-drawer");var Bi=n`
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
`,Vi=n`
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
`,Hi=(t="value")=>(e,i)=>{const s=e.constructor,o=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(e,r,n){var a;const l=s.getPropertyOptions(t);if(e===("string"==typeof l.attribute?l.attribute:t)){const e=l.converter||y,s=("function"==typeof e?e:null!=(a=null==e?void 0:e.fromAttribute)?a:y.fromAttribute)(n,l.type);this[t]!==s&&(this[i]=s)}o.call(this,e,r,n)}},Ni=n`
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
`,Ui=new WeakMap,qi=new WeakMap,Wi=new WeakMap,ji=new WeakSet,Ki=new WeakMap,Gi=class{constructor(t,e){this.handleFormData=t=>{const e=this.options.disabled(this.host),i=this.options.name(this.host),s=this.options.value(this.host),o="sl-button"===this.host.tagName.toLowerCase();this.host.isConnected&&!e&&!o&&"string"==typeof i&&i.length>0&&void 0!==s&&(Array.isArray(s)?s.forEach(e=>{t.formData.append(i,e.toString())}):t.formData.append(i,s.toString()))},this.handleFormSubmit=t=>{var e;const i=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(e=Ui.get(this.form))||e.forEach(t=>{this.setUserInteracted(t,!0)})),!this.form||this.form.noValidate||i||s(this.host)||(t.preventDefault(),t.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Ki.set(this.host,[])},this.handleInteraction=t=>{const e=Ki.get(this.host);e.includes(t.type)||e.push(t.type),e.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.checkValidity&&!e.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if("function"==typeof e.reportValidity&&!e.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=ae({form:t=>{const e=t.form;if(e){const i=t.getRootNode().querySelector(`#${e}`);if(i)return i}return t.closest("form")},name:t=>t.name,value:t=>t.value,defaultValue:t=>t.defaultValue,disabled:t=>{var e;return null!=(e=t.disabled)&&e},reportValidity:t=>"function"!=typeof t.reportValidity||t.reportValidity(),checkValidity:t=>"function"!=typeof t.checkValidity||t.checkValidity(),setValue:(t,e)=>t.value=e,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ki.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ki.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,Ui.has(this.form)?Ui.get(this.form).add(this.host):Ui.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),qi.has(this.form)||(qi.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Wi.has(this.form)||(Wi.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=Ui.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),qi.has(this.form)&&(this.form.reportValidity=qi.get(this.form),qi.delete(this.form)),Wi.has(this.form)&&(this.form.checkValidity=Wi.get(this.form),Wi.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?ji.add(t):ji.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(t=>{e.hasAttribute(t)&&i.setAttribute(t,e.getAttribute(t))})),this.form.append(i),i.click(),i.remove()}}getForm(){var t;return null!=(t=this.form)?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=Boolean(ji.has(e)),s=Boolean(e.required);e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||null==t||t.preventDefault()}},Zi=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Qi=Object.freeze(le(ae({},Zi),{valid:!1,valueMissing:!0})),Xi=Object.freeze(le(ae({},Zi),{valid:!1,customError:!0}));
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const Yi=si(class extends oi{constructor(t){if(super(t),t.type!==ei&&t.type!==Je&&t.type!==ii)throw Error("The `live` directive is not allowed on child or event bindings");if(!We(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===U||e===q)return e;const i=t.element,s=t.name;if(t.type===ei){if(e===i[s])return U}else if(t.type===ii){if(!!e===i.hasAttribute(s))return U}else if(t.type===Je&&i.getAttribute(s)===e+"")return U;return Ke(t),e}});var Ji=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new $i(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return N`
      <div
        class=${ri({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ri({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":"small"===this.size,"checkbox--medium":"medium"===this.size,"checkbox--large":"large"===this.size})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${di(this.value)}
            .indeterminate=${Yi(this.indeterminate)}
            .checked=${Yi(this.checked)}
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
            ${this.checked?N`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?N`
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
    `}};Ji.styles=[De,Ni,Vi],Ji.dependencies={"sl-icon":Ye},ce([Ne('input[type="checkbox"]')],Ji.prototype,"input",2),ce([Ve()],Ji.prototype,"hasFocus",2),ce([Be()],Ji.prototype,"title",2),ce([Be()],Ji.prototype,"name",2),ce([Be()],Ji.prototype,"value",2),ce([Be({reflect:!0})],Ji.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],Ji.prototype,"disabled",2),ce([Be({type:Boolean,reflect:!0})],Ji.prototype,"checked",2),ce([Be({type:Boolean,reflect:!0})],Ji.prototype,"indeterminate",2),ce([Hi("checked")],Ji.prototype,"defaultChecked",2),ce([Be({reflect:!0})],Ji.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],Ji.prototype,"required",2),ce([Be({attribute:"help-text"})],Ji.prototype,"helpText",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],Ji.prototype,"handleDisabledChange",1),ce([Oe(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Ji.prototype,"handleStateChange",1);var ts=n`
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
`,es=class extends qe{constructor(){super(...arguments),this.localize=new Di(this)}render(){return N`
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
function is(t,e,i){return t?e(t):i?.(t)}es.styles=[De,ts];var ss=class t extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(t){return t instanceof Element&&"treeitem"===t.getAttribute("role")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&0===this.getChildrenItems().length,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await xi(this.childrenContainer);const{keyframes:t,options:e}=mi(this,"tree-item.collapse",{dir:this.localize.dir()});await yi(this.childrenContainer,_i(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const e=this.parentElement;return!!e&&t.isTreeItem(e)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&0===this.getChildrenItems().length}willUpdate(t){t.has("selected")&&!t.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await xi(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:t,options:e}=mi(this,"tree-item.expand",{dir:this.localize.dir()});await yi(this.childrenContainer,_i(t,this.childrenContainer.scrollHeight),e),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:e=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(i=>t.isTreeItem(i)&&(e||!i.disabled)):[]}render(){const t="rtl"===this.localize.dir(),e=!this.loading&&(!this.isLeaf||this.lazy);return N`
      <div
        part="base"
        class="${ri({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":e,"tree-item--rtl":"rtl"===this.localize.dir()})}"
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
            class=${ri({"tree-item__expand-button":!0,"tree-item__expand-button--visible":e})}
            aria-hidden="true"
          >
            ${is(this.loading,()=>N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${is(this.selectable,()=>N`
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
                ?checked="${Yi(this.selected)}"
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
    `}};ss.styles=[De,Bi],ss.dependencies={"sl-checkbox":Ji,"sl-icon":Ye,"sl-spinner":es},ce([Ve()],ss.prototype,"indeterminate",2),ce([Ve()],ss.prototype,"isLeaf",2),ce([Ve()],ss.prototype,"loading",2),ce([Ve()],ss.prototype,"selectable",2),ce([Be({type:Boolean,reflect:!0})],ss.prototype,"expanded",2),ce([Be({type:Boolean,reflect:!0})],ss.prototype,"selected",2),ce([Be({type:Boolean,reflect:!0})],ss.prototype,"disabled",2),ce([Be({type:Boolean,reflect:!0})],ss.prototype,"lazy",2),ce([Ne("slot:not([name])")],ss.prototype,"defaultSlot",2),ce([Ne("slot[name=children]")],ss.prototype,"childrenSlot",2),ce([Ne(".tree-item__item")],ss.prototype,"itemElement",2),ce([Ne(".tree-item__children")],ss.prototype,"childrenContainer",2),ce([Ne(".tree-item__expand-button slot")],ss.prototype,"expandButtonSlot",2),ce([Oe("loading",{waitUntilFirstUpdate:!0})],ss.prototype,"handleLoadingChange",1),ce([Oe("disabled")],ss.prototype,"handleDisabledChange",1),ce([Oe("selected")],ss.prototype,"handleSelectedChange",1),ce([Oe("expanded",{waitUntilFirstUpdate:!0})],ss.prototype,"handleExpandedChange",1),ce([Oe("expanded",{waitUntilFirstUpdate:!0})],ss.prototype,"handleExpandAnimation",1),ce([Oe("lazy",{waitUntilFirstUpdate:!0})],ss.prototype,"handleLazyChange",1);var os=ss;bi("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}}),bi("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var rs=n`
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
`;function ns(t,e,i){const s=t=>Object.is(t,-0)?0:t;return s(t<e?e:t>i?i:t)}function as(t,e=!1){function i(t){const e=t.getChildrenItems({includeDisabled:!1});if(e.length){const i=e.every(t=>t.selected),s=e.every(t=>!t.selected&&!t.indeterminate);t.selected=i,t.indeterminate=!i&&!s}}!function t(s){for(const i of s.getChildrenItems())i.selected=e?s.selected||i.selected:!i.disabled&&s.selected,t(i);e&&i(s)}(t),function t(e){const s=e.parentElement;os.isTreeItem(s)&&(i(s),t(s))}(t)}var ls=class extends qe{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Di(this),this.initTreeItem=t=>{t.selectable="multiple"===this.selection,["expand","collapse"].filter(t=>!!this.querySelector(`[slot="${t}-icon"]`)).forEach(e=>{const i=t.querySelector(`[slot="${e}-icon"]`),s=this.getExpandButtonIcon(e);s&&(null===i?t.append(s):i.hasAttribute("data-default")&&i.replaceWith(s))})},this.handleTreeChanged=t=>{for(const e of t){const t=[...e.addedNodes].filter(os.isTreeItem),i=[...e.removedNodes].filter(os.isTreeItem);t.forEach(this.initTreeItem),this.lastFocusedItem&&i.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{const e=t.relatedTarget;e&&this.contains(e)||(this.tabIndex=0)},this.handleFocusIn=t=>{const e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),os.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect()}getExpandButtonIcon(t){const e=("expand"===t?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){const i=e.cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(t=>t.removeAttribute("id")),i.setAttribute("data-default",""),i.slot=`${t}-icon`,i}return null}selectItem(t){const e=[...this.selectedItems];if("multiple"===this.selection)t.selected=!t.selected,t.lazy&&(t.expanded=!0),as(t);else if("single"===this.selection||t.isLeaf){const e=this.getAllTreeItems();for(const i of e)i.selected=i===t}else"leaf"===this.selection&&(t.expanded=!t.expanded);const i=this.selectedItems;(e.length!==i.length||i.some(t=>!e.includes(t)))&&Promise.all(i.map(t=>t.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:i}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(t){null==t||t.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key))return;if(t.composedPath().some(t=>{var e;return["input","textarea"].includes(null==(e=null==t?void 0:t.tagName)?void 0:e.toLowerCase())}))return;const e=this.getFocusableItems(),i="ltr"===this.localize.dir(),s="rtl"===this.localize.dir();if(e.length>0){t.preventDefault();const o=e.findIndex(t=>t.matches(":focus")),r=e[o],n=t=>{const i=e[ns(t,0,e.length-1)];this.focusItem(i)},a=t=>{r.expanded=t};"ArrowDown"===t.key?n(o+1):"ArrowUp"===t.key?n(o-1):i&&"ArrowRight"===t.key||s&&"ArrowLeft"===t.key?!r||r.disabled||r.expanded||r.isLeaf&&!r.lazy?n(o+1):a(!0):i&&"ArrowLeft"===t.key||s&&"ArrowRight"===t.key?!r||r.disabled||r.isLeaf||!r.expanded?n(o-1):a(!1):"Home"===t.key?n(0):"End"===t.key?n(e.length-1):"Enter"!==t.key&&" "!==t.key||r.disabled||this.selectItem(r)}}handleClick(t){const e=t.target,i=e.closest("sl-tree-item"),s=t.composedPath().some(t=>{var e;return null==(e=null==t?void 0:t.classList)?void 0:e.contains("tree-item__expand-button")});i&&!i.disabled&&e===this.clickTarget&&(s?i.expanded=!i.expanded:this.selectItem(i))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const t="multiple"===this.selection,e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(const i of e)i.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(t=>as(t,!0)))}get selectedItems(){return this.getAllTreeItems().filter(t=>t.selected)}getFocusableItems(){const t=this.getAllTreeItems(),e=new Set;return t.filter(t=>{var i;if(t.disabled)return!1;const s=null==(i=t.parentElement)?void 0:i.closest("[role=treeitem]");return s&&(!s.expanded||s.loading||e.has(s))&&e.add(t),!e.has(t)})}render(){return N`
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
    `}};ls.styles=[De,rs],ce([Ne("slot:not([name])")],ls.prototype,"defaultSlot",2),ce([Ne("slot[name=expand-icon]")],ls.prototype,"expandedIconSlot",2),ce([Ne("slot[name=collapse-icon]")],ls.prototype,"collapsedIconSlot",2),ce([Be()],ls.prototype,"selection",2),ce([Oe("selection")],ls.prototype,"handleSelectionChange",1),ls.define("sl-tree"),os.define("sl-tree-item");var cs=n`
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
`,hs=class extends qe{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};hs.styles=[De,cs],ce([Be({type:Boolean,reflect:!0})],hs.prototype,"vertical",2),ce([Oe("vertical")],hs.prototype,"handleVerticalChange",1),hs.define("sl-divider");var ds=n`
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
`;function us(t,e){function i(i){const s=t.getBoundingClientRect(),o=t.ownerDocument.defaultView,r=s.left+o.scrollX,n=s.top+o.scrollY,a=i.pageX-r,l=i.pageY-n;(null==e?void 0:e.onMove)&&e.onMove(a,l)}document.addEventListener("pointermove",i,{passive:!0}),document.addEventListener("pointerup",function t(){document.removeEventListener("pointermove",i),document.removeEventListener("pointerup",t),(null==e?void 0:e.onStop)&&e.onStop()}),(null==e?void 0:e.initialEvent)instanceof PointerEvent&&i(e.initialEvent)}var ps=()=>null,gs=class extends qe{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Di(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=ps,this.snapThreshold=12}toSnapFunction(t){const e=t.split(" ");return({pos:i,size:s,snapThreshold:o,isRtl:r,vertical:n})=>{let a=i,l=Number.POSITIVE_INFINITY;return e.forEach(e=>{let c;if(e.startsWith("repeat(")){const e=t.substring(7,t.length-1),o=e.endsWith("%"),a=Number.parseFloat(e),l=o?s*(a/100):a;c=Math.round((r&&!n?s-i:i)/l)*l}else c=e.endsWith("%")?s*(Number.parseFloat(e)/100):Number.parseFloat(e);r&&!n&&(c=s-c);const h=Math.abs(i-c);h<=o&&h<l&&(a=c,l=h)}),a}}set snap(t){this.snapValue=null!=t?t:"",this.snapFunction=t?"string"==typeof t?this.toSnapFunction(t):t:ps}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.resizeObserver)||t.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e="rtl"===this.localize.dir();this.disabled||(t.cancelable&&t.preventDefault(),us(this,{onMove:(t,i)=>{var s;let o=this.vertical?i:t;"end"===this.primary&&(o=this.size-o),o=null!=(s=this.snapFunction({pos:o,size:this.size,snapThreshold:this.snapThreshold,isRtl:e,vertical:this.vertical}))?s:o,this.position=ns(this.pixelsToPercentage(o),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(t.key)){let e=this.position;const i=(t.shiftKey?10:1)*("end"===this.primary?-1:1);if(t.preventDefault(),("ArrowLeft"===t.key&&!this.vertical||"ArrowUp"===t.key&&this.vertical)&&(e-=i),("ArrowRight"===t.key&&!this.vertical||"ArrowDown"===t.key&&this.vertical)&&(e+=i),"Home"===t.key&&(e="end"===this.primary?100:0),"End"===t.key&&(e="end"===this.primary?0:100),"Enter"===t.key)if(this.isCollapsed)e=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const t=this.position;e=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=t})}this.position=ns(e,0,100)}}handleResize(t){const{width:e,height:i}=t[0].contentRect;this.size=this.vertical?i:e,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",i="rtl"===this.localize.dir(),s=`\n      clamp(\n        0%,\n        clamp(\n          var(--min),\n          ${this.position}% - var(--divider-width) / 2,\n          var(--max)\n        ),\n        calc(100% - var(--divider-width))\n      )\n    `,o="auto";return"end"===this.primary?i&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${o}`:this.style[t]=`${o} var(--divider-width) ${s}`:i&&!this.vertical?this.style[t]=`${o} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${o}`,this.style[e]="",N`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${di(this.disabled?void 0:"0")}
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
    `}};gs.styles=[De,ds],ce([Ne(".divider")],gs.prototype,"divider",2),ce([Be({type:Number,reflect:!0})],gs.prototype,"position",2),ce([Be({attribute:"position-in-pixels",type:Number})],gs.prototype,"positionInPixels",2),ce([Be({type:Boolean,reflect:!0})],gs.prototype,"vertical",2),ce([Be({type:Boolean,reflect:!0})],gs.prototype,"disabled",2),ce([Be()],gs.prototype,"primary",2),ce([Be({reflect:!0})],gs.prototype,"snap",1),ce([Be({type:Number,attribute:"snap-threshold"})],gs.prototype,"snapThreshold",2),ce([Oe("position")],gs.prototype,"handlePositionChange",1),ce([Oe("positionInPixels")],gs.prototype,"handlePositionInPixelsChange",1),ce([Oe("vertical")],gs.prototype,"handleVerticalChange",1),gs.define("sl-split-panel");var fs=n`
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
`,bs=n`
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
`;const ms=Math.min,vs=Math.max,ys=Math.round,ws=Math.floor,ks=t=>({x:t,y:t}),xs={left:"right",right:"left",bottom:"top",top:"bottom"},_s={start:"end",end:"start"};function $s(t,e,i){return vs(t,ms(e,i))}function Cs(t,e){return"function"==typeof t?t(e):t}function Ss(t){return t.split("-")[0]}function As(t){return t.split("-")[1]}function zs(t){return"x"===t?"y":"x"}function Es(t){return"y"===t?"height":"width"}const Ts=new Set(["top","bottom"]);function Ls(t){return Ts.has(Ss(t))?"y":"x"}function Ps(t){return zs(Ls(t))}function Rs(t){return t.replace(/start|end/g,t=>_s[t])}const Is=["left","right"],Os=["right","left"],Ds=["top","bottom"],Ms=["bottom","top"];function Fs(t,e,i,s){const o=As(t);let r=function(t,e,i){switch(t){case"top":case"bottom":return i?e?Os:Is:e?Is:Os;case"left":case"right":return e?Ds:Ms;default:return[]}}(Ss(t),"start"===i,s);return o&&(r=r.map(t=>t+"-"+o),e&&(r=r.concat(r.map(Rs)))),r}function Bs(t){return t.replace(/left|right|bottom|top/g,t=>xs[t])}function Vs(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function Hs(t){const{x:e,y:i,width:s,height:o}=t;return{width:s,height:o,top:i,left:e,right:e+s,bottom:i+o,x:e,y:i}}function Ns(t,e,i){let{reference:s,floating:o}=t;const r=Ls(e),n=Ps(e),a=Es(n),l=Ss(e),c="y"===r,h=s.x+s.width/2-o.width/2,d=s.y+s.height/2-o.height/2,u=s[a]/2-o[a]/2;let p;switch(l){case"top":p={x:h,y:s.y-o.height};break;case"bottom":p={x:h,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:d};break;case"left":p={x:s.x-o.width,y:d};break;default:p={x:s.x,y:s.y}}switch(As(e)){case"start":p[n]-=u*(i&&c?-1:1);break;case"end":p[n]+=u*(i&&c?-1:1)}return p}async function Us(t,e){var i;void 0===e&&(e={});const{x:s,y:o,platform:r,rects:n,elements:a,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:u=!1,padding:p=0}=Cs(e,t),g=Vs(p),f=a[u?"floating"===d?"reference":"floating":d],b=Hs(await r.getClippingRect({element:null==(i=await(null==r.isElement?void 0:r.isElement(f)))||i?f:f.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:h,strategy:l})),m="floating"===d?{x:s,y:o,width:n.floating.width,height:n.floating.height}:n.reference,v=await(null==r.getOffsetParent?void 0:r.getOffsetParent(a.floating)),y=await(null==r.isElement?void 0:r.isElement(v))&&await(null==r.getScale?void 0:r.getScale(v))||{x:1,y:1},w=Hs(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:m,offsetParent:v,strategy:l}):m);return{top:(b.top-w.top+g.top)/y.y,bottom:(w.bottom-b.bottom+g.bottom)/y.y,left:(b.left-w.left+g.left)/y.x,right:(w.right-b.right+g.right)/y.x}}const qs=new Set(["left","top"]);function Ws(){return"undefined"!=typeof window}function js(t){return Zs(t)?(t.nodeName||"").toLowerCase():"#document"}function Ks(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function Gs(t){var e;return null==(e=(Zs(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function Zs(t){return!!Ws()&&(t instanceof Node||t instanceof Ks(t).Node)}function Qs(t){return!!Ws()&&(t instanceof Element||t instanceof Ks(t).Element)}function Xs(t){return!!Ws()&&(t instanceof HTMLElement||t instanceof Ks(t).HTMLElement)}function Ys(t){return!(!Ws()||"undefined"==typeof ShadowRoot)&&(t instanceof ShadowRoot||t instanceof Ks(t).ShadowRoot)}const Js=new Set(["inline","contents"]);function to(t){const{overflow:e,overflowX:i,overflowY:s,display:o}=po(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+i)&&!Js.has(o)}const eo=new Set(["table","td","th"]);function io(t){return eo.has(js(t))}const so=[":popover-open",":modal"];function oo(t){return so.some(e=>{try{return t.matches(e)}catch(t){return!1}})}const ro=["transform","translate","scale","rotate","perspective"],no=["transform","translate","scale","rotate","perspective","filter"],ao=["paint","layout","strict","content"];function lo(t){const e=co(),i=Qs(t)?po(t):t;return ro.some(t=>!!i[t]&&"none"!==i[t])||!!i.containerType&&"normal"!==i.containerType||!e&&!!i.backdropFilter&&"none"!==i.backdropFilter||!e&&!!i.filter&&"none"!==i.filter||no.some(t=>(i.willChange||"").includes(t))||ao.some(t=>(i.contain||"").includes(t))}function co(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}const ho=new Set(["html","body","#document"]);function uo(t){return ho.has(js(t))}function po(t){return Ks(t).getComputedStyle(t)}function go(t){return Qs(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function fo(t){if("html"===js(t))return t;const e=t.assignedSlot||t.parentNode||Ys(t)&&t.host||Gs(t);return Ys(e)?e.host:e}function bo(t){const e=fo(t);return uo(e)?t.ownerDocument?t.ownerDocument.body:t.body:Xs(e)&&to(e)?e:bo(e)}function mo(t,e,i){var s;void 0===e&&(e=[]),void 0===i&&(i=!0);const o=bo(t),r=o===(null==(s=t.ownerDocument)?void 0:s.body),n=Ks(o);if(r){const t=vo(n);return e.concat(n,n.visualViewport||[],to(o)?o:[],t&&i?mo(t):[])}return e.concat(o,mo(o,[],i))}function vo(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function yo(t){const e=po(t);let i=parseFloat(e.width)||0,s=parseFloat(e.height)||0;const o=Xs(t),r=o?t.offsetWidth:i,n=o?t.offsetHeight:s,a=ys(i)!==r||ys(s)!==n;return a&&(i=r,s=n),{width:i,height:s,$:a}}function wo(t){return Qs(t)?t:t.contextElement}function ko(t){const e=wo(t);if(!Xs(e))return ks(1);const i=e.getBoundingClientRect(),{width:s,height:o,$:r}=yo(e);let n=(r?ys(i.width):i.width)/s,a=(r?ys(i.height):i.height)/o;return n&&Number.isFinite(n)||(n=1),a&&Number.isFinite(a)||(a=1),{x:n,y:a}}const xo=ks(0);function _o(t){const e=Ks(t);return co()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:xo}function $o(t,e,i,s){void 0===e&&(e=!1),void 0===i&&(i=!1);const o=t.getBoundingClientRect(),r=wo(t);let n=ks(1);e&&(s?Qs(s)&&(n=ko(s)):n=ko(t));const a=function(t,e,i){return void 0===e&&(e=!1),!(!i||e&&i!==Ks(t))&&e}(r,i,s)?_o(r):ks(0);let l=(o.left+a.x)/n.x,c=(o.top+a.y)/n.y,h=o.width/n.x,d=o.height/n.y;if(r){const t=Ks(r),e=s&&Qs(s)?Ks(s):s;let i=t,o=vo(i);for(;o&&s&&e!==i;){const t=ko(o),e=o.getBoundingClientRect(),s=po(o),r=e.left+(o.clientLeft+parseFloat(s.paddingLeft))*t.x,n=e.top+(o.clientTop+parseFloat(s.paddingTop))*t.y;l*=t.x,c*=t.y,h*=t.x,d*=t.y,l+=r,c+=n,i=Ks(o),o=vo(i)}}return Hs({width:h,height:d,x:l,y:c})}function Co(t,e){const i=go(t).scrollLeft;return e?e.left+i:$o(Gs(t)).left+i}function So(t,e){const i=t.getBoundingClientRect();return{x:i.left+e.scrollLeft-Co(t,i),y:i.top+e.scrollTop}}const Ao=new Set(["absolute","fixed"]);function zo(t,e,i){let s;if("viewport"===e)s=function(t,e){const i=Ks(t),s=Gs(t),o=i.visualViewport;let r=s.clientWidth,n=s.clientHeight,a=0,l=0;if(o){r=o.width,n=o.height;const t=co();(!t||t&&"fixed"===e)&&(a=o.offsetLeft,l=o.offsetTop)}const c=Co(s);if(c<=0){const t=s.ownerDocument,e=t.body,i=getComputedStyle(e),o="CSS1Compat"===t.compatMode&&parseFloat(i.marginLeft)+parseFloat(i.marginRight)||0,n=Math.abs(s.clientWidth-e.clientWidth-o);n<=25&&(r-=n)}else c<=25&&(r+=c);return{width:r,height:n,x:a,y:l}}(t,i);else if("document"===e)s=function(t){const e=Gs(t),i=go(t),s=t.ownerDocument.body,o=vs(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),r=vs(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight);let n=-i.scrollLeft+Co(t);const a=-i.scrollTop;return"rtl"===po(s).direction&&(n+=vs(e.clientWidth,s.clientWidth)-o),{width:o,height:r,x:n,y:a}}(Gs(t));else if(Qs(e))s=function(t,e){const i=$o(t,!0,"fixed"===e),s=i.top+t.clientTop,o=i.left+t.clientLeft,r=Xs(t)?ko(t):ks(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:o*r.x,y:s*r.y}}(e,i);else{const i=_o(t);s={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Hs(s)}function Eo(t,e){const i=fo(t);return!(i===e||!Qs(i)||uo(i))&&("fixed"===po(i).position||Eo(i,e))}function To(t,e,i){const s=Xs(e),o=Gs(e),r="fixed"===i,n=$o(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=ks(0);function c(){l.x=Co(o)}if(s||!s&&!r)if(("body"!==js(e)||to(o))&&(a=go(e)),s){const t=$o(e,!0,r,e);l.x=t.x+e.clientLeft,l.y=t.y+e.clientTop}else o&&c();r&&!s&&o&&c();const h=!o||s||r?ks(0):So(o,a);return{x:n.left+a.scrollLeft-l.x-h.x,y:n.top+a.scrollTop-l.y-h.y,width:n.width,height:n.height}}function Lo(t){return"static"===po(t).position}function Po(t,e){if(!Xs(t)||"fixed"===po(t).position)return null;if(e)return e(t);let i=t.offsetParent;return Gs(t)===i&&(i=i.ownerDocument.body),i}function Ro(t,e){const i=Ks(t);if(oo(t))return i;if(!Xs(t)){let e=fo(t);for(;e&&!uo(e);){if(Qs(e)&&!Lo(e))return e;e=fo(e)}return i}let s=Po(t,e);for(;s&&io(s)&&Lo(s);)s=Po(s,e);return s&&uo(s)&&Lo(s)&&!lo(s)?i:s||function(t){let e=fo(t);for(;Xs(e)&&!uo(e);){if(lo(e))return e;if(oo(e))return null;e=fo(e)}return null}(t)||i}const Io={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:i,offsetParent:s,strategy:o}=t;const r="fixed"===o,n=Gs(s),a=!!e&&oo(e.floating);if(s===n||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=ks(1);const h=ks(0),d=Xs(s);if((d||!d&&!r)&&(("body"!==js(s)||to(n))&&(l=go(s)),Xs(s))){const t=$o(s);c=ko(s),h.x=t.x+s.clientLeft,h.y=t.y+s.clientTop}const u=!n||d||r?ks(0):So(n,l);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+h.x+u.x,y:i.y*c.y-l.scrollTop*c.y+h.y+u.y}},getDocumentElement:Gs,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:s,strategy:o}=t;const r=[..."clippingAncestors"===i?oo(e)?[]:function(t,e){const i=e.get(t);if(i)return i;let s=mo(t,[],!1).filter(t=>Qs(t)&&"body"!==js(t)),o=null;const r="fixed"===po(t).position;let n=r?fo(t):t;for(;Qs(n)&&!uo(n);){const e=po(n),i=lo(n);i||"fixed"!==e.position||(o=null),(r?!i&&!o:!i&&"static"===e.position&&o&&Ao.has(o.position)||to(n)&&!i&&Eo(t,n))?s=s.filter(t=>t!==n):o=e,n=fo(n)}return e.set(t,s),s}(e,this._c):[].concat(i),s],n=r[0],a=r.reduce((t,i)=>{const s=zo(e,i,o);return t.top=vs(s.top,t.top),t.right=ms(s.right,t.right),t.bottom=ms(s.bottom,t.bottom),t.left=vs(s.left,t.left),t},zo(e,n,o));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},getOffsetParent:Ro,getElementRects:async function(t){const e=this.getOffsetParent||Ro,i=this.getDimensions,s=await i(t.floating);return{reference:To(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:i}=yo(t);return{width:e,height:i}},getScale:ko,isElement:Qs,isRTL:function(t){return"rtl"===po(t).direction}};function Oo(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Do(t,e,i,s){void 0===s&&(s={});const{ancestorScroll:o=!0,ancestorResize:r=!0,elementResize:n="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:l=!1}=s,c=wo(t),h=o||r?[...c?mo(c):[],...mo(e)]:[];h.forEach(t=>{o&&t.addEventListener("scroll",i,{passive:!0}),r&&t.addEventListener("resize",i)});const d=c&&a?function(t,e){let i,s=null;const o=Gs(t);function r(){var t;clearTimeout(i),null==(t=s)||t.disconnect(),s=null}return function n(a,l){void 0===a&&(a=!1),void 0===l&&(l=1),r();const c=t.getBoundingClientRect(),{left:h,top:d,width:u,height:p}=c;if(a||e(),!u||!p)return;const g={rootMargin:-ws(d)+"px "+-ws(o.clientWidth-(h+u))+"px "+-ws(o.clientHeight-(d+p))+"px "+-ws(h)+"px",threshold:vs(0,ms(1,l))||1};let f=!0;function b(e){const s=e[0].intersectionRatio;if(s!==l){if(!f)return n();s?n(!1,s):i=setTimeout(()=>{n(!1,1e-7)},1e3)}1!==s||Oo(c,t.getBoundingClientRect())||n(),f=!1}try{s=new IntersectionObserver(b,{...g,root:o.ownerDocument})}catch(t){s=new IntersectionObserver(b,g)}s.observe(t)}(!0),r}(c,i):null;let u,p=-1,g=null;n&&(g=new ResizeObserver(t=>{let[s]=t;s&&s.target===c&&g&&(g.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var t;null==(t=g)||t.observe(e)})),i()}),c&&!l&&g.observe(c),g.observe(e));let f=l?$o(t):null;return l&&function e(){const s=$o(t);f&&!Oo(f,s)&&i();f=s,u=requestAnimationFrame(e)}(),i(),()=>{var t;h.forEach(t=>{o&&t.removeEventListener("scroll",i),r&&t.removeEventListener("resize",i)}),null==d||d(),null==(t=g)||t.disconnect(),g=null,l&&cancelAnimationFrame(u)}}const Mo=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var i,s;const{x:o,y:r,placement:n,middlewareData:a}=e,l=await async function(t,e){const{placement:i,platform:s,elements:o}=t,r=await(null==s.isRTL?void 0:s.isRTL(o.floating)),n=Ss(i),a=As(i),l="y"===Ls(i),c=qs.has(n)?-1:1,h=r&&l?-1:1,d=Cs(e,t);let{mainAxis:u,crossAxis:p,alignmentAxis:g}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return a&&"number"==typeof g&&(p="end"===a?-1*g:g),l?{x:p*h,y:u*c}:{x:u*c,y:p*h}}(e,t);return n===(null==(i=a.offset)?void 0:i.placement)&&null!=(s=a.arrow)&&s.alignmentOffset?{}:{x:o+l.x,y:r+l.y,data:{...l,placement:n}}}}},Fo=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:s,placement:o}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:a={fn:t=>{let{x:e,y:i}=t;return{x:e,y:i}}},...l}=Cs(t,e),c={x:i,y:s},h=await Us(e,l),d=Ls(Ss(o)),u=zs(d);let p=c[u],g=c[d];if(r){const t="y"===u?"bottom":"right";p=$s(p+h["y"===u?"top":"left"],p,p-h[t])}if(n){const t="y"===d?"bottom":"right";g=$s(g+h["y"===d?"top":"left"],g,g-h[t])}const f=a.fn({...e,[u]:p,[d]:g});return{...f,data:{x:f.x-i,y:f.y-s,enabled:{[u]:r,[d]:n}}}}}},Bo=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var i,s;const{placement:o,middlewareData:r,rects:n,initialPlacement:a,platform:l,elements:c}=e,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:u,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:f=!0,...b}=Cs(t,e);if(null!=(i=r.arrow)&&i.alignmentOffset)return{};const m=Ss(o),v=Ls(a),y=Ss(a)===a,w=await(null==l.isRTL?void 0:l.isRTL(c.floating)),k=u||(y||!f?[Bs(a)]:function(t){const e=Bs(t);return[Rs(t),e,Rs(e)]}(a)),x="none"!==g;!u&&x&&k.push(...Fs(a,f,g,w));const _=[a,...k],$=await Us(e,b),C=[];let S=(null==(s=r.flip)?void 0:s.overflows)||[];if(h&&C.push($[m]),d){const t=function(t,e,i){void 0===i&&(i=!1);const s=As(t),o=Ps(t),r=Es(o);let n="x"===o?s===(i?"end":"start")?"right":"left":"start"===s?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=Bs(n)),[n,Bs(n)]}(o,n,w);C.push($[t[0]],$[t[1]])}if(S=[...S,{placement:o,overflows:C}],!C.every(t=>t<=0)){var A,z;const t=((null==(A=r.flip)?void 0:A.index)||0)+1,e=_[t];if(e){if(!("alignment"===d&&v!==Ls(e))||S.every(t=>Ls(t.placement)!==v||t.overflows[0]>0))return{data:{index:t,overflows:S},reset:{placement:e}}}let i=null==(z=S.filter(t=>t.overflows[0]<=0).sort((t,e)=>t.overflows[1]-e.overflows[1])[0])?void 0:z.placement;if(!i)switch(p){case"bestFit":{var E;const t=null==(E=S.filter(t=>{if(x){const e=Ls(t.placement);return e===v||"y"===e}return!0}).map(t=>[t.placement,t.overflows.filter(t=>t>0).reduce((t,e)=>t+e,0)]).sort((t,e)=>t[1]-e[1])[0])?void 0:E[0];t&&(i=t);break}case"initialPlacement":i=a}if(o!==i)return{reset:{placement:i}}}return{}}}},Vo=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){var i,s;const{placement:o,rects:r,platform:n,elements:a}=e,{apply:l=()=>{},...c}=Cs(t,e),h=await Us(e,c),d=Ss(o),u=As(o),p="y"===Ls(o),{width:g,height:f}=r.floating;let b,m;"top"===d||"bottom"===d?(b=d,m=u===(await(null==n.isRTL?void 0:n.isRTL(a.floating))?"start":"end")?"left":"right"):(m=d,b="end"===u?"top":"bottom");const v=f-h.top-h.bottom,y=g-h.left-h.right,w=ms(f-h[b],v),k=ms(g-h[m],y),x=!e.middlewareData.shift;let _=w,$=k;if(null!=(i=e.middlewareData.shift)&&i.enabled.x&&($=y),null!=(s=e.middlewareData.shift)&&s.enabled.y&&(_=v),x&&!u){const t=vs(h.left,0),e=vs(h.right,0),i=vs(h.top,0),s=vs(h.bottom,0);p?$=g-2*(0!==t||0!==e?t+e:vs(h.left,h.right)):_=f-2*(0!==i||0!==s?i+s:vs(h.top,h.bottom))}await l({...e,availableWidth:$,availableHeight:_});const C=await n.getDimensions(a.floating);return g!==C.width||f!==C.height?{reset:{rects:!0}}:{}}}},Ho=t=>({name:"arrow",options:t,async fn(e){const{x:i,y:s,placement:o,rects:r,platform:n,elements:a,middlewareData:l}=e,{element:c,padding:h=0}=Cs(t,e)||{};if(null==c)return{};const d=Vs(h),u={x:i,y:s},p=Ps(o),g=Es(p),f=await n.getDimensions(c),b="y"===p,m=b?"top":"left",v=b?"bottom":"right",y=b?"clientHeight":"clientWidth",w=r.reference[g]+r.reference[p]-u[p]-r.floating[g],k=u[p]-r.reference[p],x=await(null==n.getOffsetParent?void 0:n.getOffsetParent(c));let _=x?x[y]:0;_&&await(null==n.isElement?void 0:n.isElement(x))||(_=a.floating[y]||r.floating[g]);const $=w/2-k/2,C=_/2-f[g]/2-1,S=ms(d[m],C),A=ms(d[v],C),z=S,E=_-f[g]-A,T=_/2-f[g]/2+$,L=$s(z,T,E),P=!l.arrow&&null!=As(o)&&T!==L&&r.reference[g]/2-(T<z?S:A)-f[g]/2<0,R=P?T<z?T-z:T-E:0;return{[p]:u[p]+R,data:{[p]:L,centerOffset:T-L-R,...P&&{alignmentOffset:R}},reset:P}}}),No=(t,e,i)=>{const s=new Map,o={platform:Io,...i},r={...o.platform,_c:s};return(async(t,e,i)=>{const{placement:s="bottom",strategy:o="absolute",middleware:r=[],platform:n}=i,a=r.filter(Boolean),l=await(null==n.isRTL?void 0:n.isRTL(e));let c=await n.getElementRects({reference:t,floating:e,strategy:o}),{x:h,y:d}=Ns(c,s,l),u=s,p={},g=0;for(let i=0;i<a.length;i++){const{name:r,fn:f}=a[i],{x:b,y:m,data:v,reset:y}=await f({x:h,y:d,initialPlacement:s,placement:u,strategy:o,middlewareData:p,rects:c,platform:n,elements:{reference:t,floating:e}});h=null!=b?b:h,d=null!=m?m:d,p={...p,[r]:{...p[r],...v}},y&&g<=50&&(g++,"object"==typeof y&&(y.placement&&(u=y.placement),y.rects&&(c=!0===y.rects?await n.getElementRects({reference:t,floating:e,strategy:o}):y.rects),({x:h,y:d}=Ns(c,u,l))),i=-1)}return{x:h,y:d,placement:u,strategy:o,middlewareData:p}})(t,e,{...o,platform:r})};function Uo(t){return function(t){for(let e=t;e;e=qo(e))if(e instanceof Element&&"none"===getComputedStyle(e).display)return null;for(let e=qo(t);e;e=qo(e)){if(!(e instanceof Element))continue;const t=getComputedStyle(e);if("contents"!==t.display){if("static"!==t.position||lo(t))return e;if("BODY"===e.tagName)return e}}return null}(t)}function qo(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}var Wo=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect();let i=0,s=0,o=0,r=0,n=0,a=0,l=0,c=0;this.placement.includes("top")||this.placement.includes("bottom")?t.top<e.top?(i=t.left,s=t.bottom,o=t.right,r=t.bottom,n=e.left,a=e.top,l=e.right,c=e.top):(i=e.left,s=e.bottom,o=e.right,r=e.bottom,n=t.left,a=t.top,l=t.right,c=t.top):t.left<e.left?(i=t.right,s=t.top,o=e.left,r=e.top,n=t.right,a=t.bottom,l=e.left,c=e.bottom):(i=e.right,s=e.top,o=t.left,r=t.top,n=e.right,a=e.bottom,l=t.left,c=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${o}px`),this.style.setProperty("--hover-bridge-top-right-y",`${r}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${c}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&"string"==typeof this.anchor){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||function(t){return null!==t&&"object"==typeof t&&"getBoundingClientRect"in t&&(!("contextElement"in t)||t.contextElement instanceof Element)}(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){this.anchorEl&&this.active&&(this.cleanup=Do(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Mo({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Vo({apply:({rects:t})=>{const e="width"===this.sync||"both"===this.sync,i="height"===this.sync||"both"===this.sync;this.popup.style.width=e?`${t.reference.width}px`:"",this.popup.style.height=i?`${t.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Bo({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:"best-fit"===this.flipFallbackStrategy?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Fo({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Vo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:t,availableHeight:e})=>{"vertical"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-height",`${e}px`):this.style.removeProperty("--auto-size-available-height"),"horizontal"===this.autoSize||"both"===this.autoSize?this.style.setProperty("--auto-size-available-width",`${t}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ho({element:this.arrowEl,padding:this.arrowPadding}));const e="absolute"===this.strategy?t=>Io.getOffsetParent(t,Uo):Io.getOffsetParent;No(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:le(ae({},Io),{getOffsetParent:e})}).then(({x:t,y:e,middlewareData:i,placement:s})=>{const o="rtl"===this.localize.dir(),r={top:"bottom",right:"left",bottom:"top",left:"right"}[s.split("-")[0]];if(this.setAttribute("data-current-placement",s),Object.assign(this.popup.style,{left:`${t}px`,top:`${e}px`}),this.arrow){const t=i.arrow.x,e=i.arrow.y;let s="",n="",a="",l="";if("start"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";s="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",n=o?i:"",l=o?"":i}else if("end"===this.arrowPlacement){const i="number"==typeof t?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";n=o?"":i,l=o?i:"",a="number"==typeof e?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else"center"===this.arrowPlacement?(l="number"==typeof t?"calc(50% - var(--arrow-size-diagonal))":"",s="number"==typeof e?"calc(50% - var(--arrow-size-diagonal))":""):(l="number"==typeof t?`${t}px`:"",s="number"==typeof e?`${e}px`:"");Object.assign(this.arrowEl.style,{top:s,right:n,bottom:a,left:l,[r]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return N`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${ri({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${ri({popup:!0,"popup--active":this.active,"popup--fixed":"fixed"===this.strategy,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?N`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Wo.styles=[De,bs],ce([Ne(".popup")],Wo.prototype,"popup",2),ce([Ne(".popup__arrow")],Wo.prototype,"arrowEl",2),ce([Be()],Wo.prototype,"anchor",2),ce([Be({type:Boolean,reflect:!0})],Wo.prototype,"active",2),ce([Be({reflect:!0})],Wo.prototype,"placement",2),ce([Be({reflect:!0})],Wo.prototype,"strategy",2),ce([Be({type:Number})],Wo.prototype,"distance",2),ce([Be({type:Number})],Wo.prototype,"skidding",2),ce([Be({type:Boolean})],Wo.prototype,"arrow",2),ce([Be({attribute:"arrow-placement"})],Wo.prototype,"arrowPlacement",2),ce([Be({attribute:"arrow-padding",type:Number})],Wo.prototype,"arrowPadding",2),ce([Be({type:Boolean})],Wo.prototype,"flip",2),ce([Be({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(t=>t.trim()).filter(t=>""!==t),toAttribute:t=>t.join(" ")}})],Wo.prototype,"flipFallbackPlacements",2),ce([Be({attribute:"flip-fallback-strategy"})],Wo.prototype,"flipFallbackStrategy",2),ce([Be({type:Object})],Wo.prototype,"flipBoundary",2),ce([Be({attribute:"flip-padding",type:Number})],Wo.prototype,"flipPadding",2),ce([Be({type:Boolean})],Wo.prototype,"shift",2),ce([Be({type:Object})],Wo.prototype,"shiftBoundary",2),ce([Be({attribute:"shift-padding",type:Number})],Wo.prototype,"shiftPadding",2),ce([Be({attribute:"auto-size"})],Wo.prototype,"autoSize",2),ce([Be()],Wo.prototype,"sync",2),ce([Be({type:Object})],Wo.prototype,"autoSizeBoundary",2),ce([Be({attribute:"auto-size-padding",type:Number})],Wo.prototype,"autoSizePadding",2),ce([Be({attribute:"hover-bridge",type:Boolean})],Wo.prototype,"hoverBridge",2);var jo=class extends qe{constructor(){super(),this.localize=new Di(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=t=>{"Escape"===t.key&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const t=wi(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const t=wi(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){var t,e;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await xi(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:e,options:i}=mi(this,"tooltip.show",{dir:this.localize.dir()});await yi(this.popup.popup,e,i),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),null==(e=this.closeWatcher)||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await xi(this.body);const{keyframes:t,options:i}=mi(this,"tooltip.hide",{dir:this.localize.dir()});await yi(this.popup.popup,t,i),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}render(){return N`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${ri({tooltip:!0,"tooltip--open":this.open})}
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
    `}};jo.styles=[De,fs],jo.dependencies={"sl-popup":Wo},ce([Ne("slot:not([name])")],jo.prototype,"defaultSlot",2),ce([Ne(".tooltip__body")],jo.prototype,"body",2),ce([Ne("sl-popup")],jo.prototype,"popup",2),ce([Be()],jo.prototype,"content",2),ce([Be()],jo.prototype,"placement",2),ce([Be({type:Boolean,reflect:!0})],jo.prototype,"disabled",2),ce([Be({type:Number})],jo.prototype,"distance",2),ce([Be({type:Boolean,reflect:!0})],jo.prototype,"open",2),ce([Be({type:Number})],jo.prototype,"skidding",2),ce([Be()],jo.prototype,"trigger",2),ce([Be({type:Boolean})],jo.prototype,"hoist",2),ce([Oe("open",{waitUntilFirstUpdate:!0})],jo.prototype,"handleOpenChange",1),ce([Oe(["content","distance","hoist","placement","skidding"])],jo.prototype,"handleOptionsChange",1),ce([Oe("disabled")],jo.prototype,"handleDisabledChange",1),bi("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}}),bi("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Ko=n`
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
`,Go=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){const e=this.getRootNode(),i=this.from.includes("."),s=this.from.includes("[")&&this.from.includes("]");let o=this.from,r="";i?[o,r]=this.from.trim().split("."):s&&([o,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in e?e.getElementById(o):null;n?t=s?n.getAttribute(r)||"":i?n[r]||"":n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(t)try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("sl-copy",{detail:{value:t}})}catch(t){this.showStatus("error"),this.emit("sl-error")}else this.showStatus("error"),this.emit("sl-error")}async showStatus(t){const e=this.copyLabel||this.localize.term("copy"),i=this.successLabel||this.localize.term("copied"),s=this.errorLabel||this.localize.term("error"),o="success"===t?this.successIcon:this.errorIcon,r=mi(this,"copy.in",{dir:"ltr"}),n=mi(this,"copy.out",{dir:"ltr"});this.tooltip.content="success"===t?i:s,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=t,o.hidden=!1,await o.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await o.animate(n.keyframes,n.options).finished,o.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){const t=this.copyLabel||this.localize.term("copy");return N`
      <sl-tooltip
        class=${ri({"copy-button":!0,"copy-button--success":"success"===this.status,"copy-button--error":"error"===this.status})}
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
    `}};Go.styles=[De,Ko],Go.dependencies={"sl-icon":Ye,"sl-tooltip":jo},ce([Ne('slot[name="copy-icon"]')],Go.prototype,"copyIcon",2),ce([Ne('slot[name="success-icon"]')],Go.prototype,"successIcon",2),ce([Ne('slot[name="error-icon"]')],Go.prototype,"errorIcon",2),ce([Ne("sl-tooltip")],Go.prototype,"tooltip",2),ce([Ve()],Go.prototype,"isCopying",2),ce([Ve()],Go.prototype,"status",2),ce([Be()],Go.prototype,"value",2),ce([Be()],Go.prototype,"from",2),ce([Be({type:Boolean,reflect:!0})],Go.prototype,"disabled",2),ce([Be({attribute:"copy-label"})],Go.prototype,"copyLabel",2),ce([Be({attribute:"success-label"})],Go.prototype,"successLabel",2),ce([Be({attribute:"error-label"})],Go.prototype,"errorLabel",2),ce([Be({attribute:"feedback-duration",type:Number})],Go.prototype,"feedbackDuration",2),ce([Be({attribute:"tooltip-placement"})],Go.prototype,"tooltipPlacement",2),ce([Be({type:Boolean})],Go.prototype,"hoist",2),bi("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}}),bi("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}}),Go.define("sl-copy-button");var Zo=n`
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
`,Qo=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new $i(this,"[default]","prefix","suffix"),this.localize=new Di(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Zi}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){"submit"===this.type&&this.formControlController.submit(this),"reset"===this.type&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return!this.isButton()||this.button.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.isButton()||this.button.reportValidity()}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?li`a`:li`button`;return hi`
      <${e}
        part="base"
        class=${ri({button:!0,"button--default":"default"===this.variant,"button--primary":"primary"===this.variant,"button--success":"success"===this.variant,"button--neutral":"neutral"===this.variant,"button--warning":"warning"===this.variant,"button--danger":"danger"===this.variant,"button--text":"text"===this.variant,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":"rtl"===this.localize.dir(),"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${di(t?void 0:this.disabled)}
        type=${di(t?void 0:this.type)}
        title=${this.title}
        name=${di(t?void 0:this.name)}
        value=${di(t?void 0:this.value)}
        href=${di(t&&!this.disabled?this.href:void 0)}
        target=${di(t?this.target:void 0)}
        download=${di(t?this.download:void 0)}
        rel=${di(t?this.rel:void 0)}
        role=${di(t?void 0:"button")}
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
        ${this.caret?hi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?hi`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};Qo.styles=[De,Zo],Qo.dependencies={"sl-icon":Ye,"sl-spinner":es},ce([Ne(".button")],Qo.prototype,"button",2),ce([Ve()],Qo.prototype,"hasFocus",2),ce([Ve()],Qo.prototype,"invalid",2),ce([Be()],Qo.prototype,"title",2),ce([Be({reflect:!0})],Qo.prototype,"variant",2),ce([Be({reflect:!0})],Qo.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"caret",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"disabled",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"loading",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"outline",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"pill",2),ce([Be({type:Boolean,reflect:!0})],Qo.prototype,"circle",2),ce([Be()],Qo.prototype,"type",2),ce([Be()],Qo.prototype,"name",2),ce([Be()],Qo.prototype,"value",2),ce([Be()],Qo.prototype,"href",2),ce([Be()],Qo.prototype,"target",2),ce([Be()],Qo.prototype,"rel",2),ce([Be()],Qo.prototype,"download",2),ce([Be()],Qo.prototype,"form",2),ce([Be({attribute:"formaction"})],Qo.prototype,"formAction",2),ce([Be({attribute:"formenctype"})],Qo.prototype,"formEnctype",2),ce([Be({attribute:"formmethod"})],Qo.prototype,"formMethod",2),ce([Be({attribute:"formnovalidate",type:Boolean})],Qo.prototype,"formNoValidate",2),ce([Be({attribute:"formtarget"})],Qo.prototype,"formTarget",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],Qo.prototype,"handleDisabledChange",1),Qo.define("sl-button"),ui.define("sl-icon-button"),Ye.define("sl-icon");var Xo=n`
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
`,Yo=n`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Jo=class extends qe{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=tr(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(t){const e=tr(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(t){const e=tr(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(t){const e=tr(t.target);null==e||e.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const i=t.indexOf(e),s=tr(e);s&&(s.toggleAttribute("data-sl-button-group__button",!0),s.toggleAttribute("data-sl-button-group__button--first",0===i),s.toggleAttribute("data-sl-button-group__button--inner",i>0&&i<t.length-1),s.toggleAttribute("data-sl-button-group__button--last",i===t.length-1),s.toggleAttribute("data-sl-button-group__button--radio","sl-radio-button"===s.tagName.toLowerCase()))})}render(){return N`
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
    `}};function tr(t){var e;const i="sl-button, sl-radio-button";return null!=(e=t.closest(i))?e:t.querySelector(i)}Jo.styles=[De,Yo],ce([Ne("slot")],Jo.prototype,"defaultSlot",2),ce([Ve()],Jo.prototype,"disableRole",2),ce([Be()],Jo.prototype,"label",2);var er=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this),this.hasSlotController=new $i(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const t=this.required&&!this.value;return""!==this.customValidityMessage?Xi:t?Qi:Zi}get validationMessage(){const t=this.required&&!this.value;return""!==this.customValidityMessage?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target.closest("sl-radio, sl-radio-button"),i=this.getAllRadios(),s=this.value;e&&!e.disabled&&(this.value=e.value,i.forEach(t=>t.checked=t===e),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const i=this.getAllRadios().filter(t=>!t.disabled),s=null!=(e=i.find(t=>t.checked))?e:i[0],o=" "===t.key?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,r=this.value;let n=i.indexOf(s)+o;n<0&&(n=i.length-1),n>i.length-1&&(n=0),this.getAllRadios().forEach(t=>{t.checked=!1,this.hasButtonGroup||t.setAttribute("tabindex","-1")}),this.value=i[n].value,i[n].checked=!0,this.hasButtonGroup?i[n].shadowRoot.querySelector("button").focus():(i[n].setAttribute("tabindex","0"),i[n].focus()),this.value!==r&&(this.emit("sl-change"),this.emit("sl-input")),t.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){var t,e;const i=this.getAllRadios();if(await Promise.all(i.map(async t=>{await t.updateComplete,t.checked=t.value===this.value,t.size=this.size})),this.hasButtonGroup=i.some(t=>"sl-radio-button"===t.tagName.toLowerCase()),i.length>0&&!i.some(t=>t.checked))if(this.hasButtonGroup){const e=null==(t=i[0].shadowRoot)?void 0:t.querySelector("button");e&&e.setAttribute("tabindex","0")}else i[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const t=null==(e=this.shadowRoot)?void 0:e.querySelector("sl-button-group");t&&(t.disableRole=!0)}}syncRadios(){customElements.get("sl-radio")&&customElements.get("sl-radio-button")?this.syncRadioElements():(customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios()))}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const t=this.required&&!this.value,e=""!==this.customValidityMessage;return!t&&!e||(this.formControlController.emitInvalidEvent(),!1)}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){const e=this.getAllRadios(),i=e.find(t=>t.checked),s=e.find(t=>!t.disabled),o=i||s;o&&o.focus(t)}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=N`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return N`
      <fieldset
        part="form-control"
        class=${ri({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--radio-group":!0,"form-control--has-label":i,"form-control--has-help-text":s})}
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

          ${this.hasButtonGroup?N`
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
    `}};er.styles=[De,Ni,Xo],er.dependencies={"sl-button-group":Jo},ce([Ne("slot:not([name])")],er.prototype,"defaultSlot",2),ce([Ne(".radio-group__validation-input")],er.prototype,"validationInput",2),ce([Ve()],er.prototype,"hasButtonGroup",2),ce([Ve()],er.prototype,"errorMessage",2),ce([Ve()],er.prototype,"defaultValue",2),ce([Be()],er.prototype,"label",2),ce([Be({attribute:"help-text"})],er.prototype,"helpText",2),ce([Be()],er.prototype,"name",2),ce([Be({reflect:!0})],er.prototype,"value",2),ce([Be({reflect:!0})],er.prototype,"size",2),ce([Be({reflect:!0})],er.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],er.prototype,"required",2),ce([Oe("size",{waitUntilFirstUpdate:!0})],er.prototype,"handleSizeChange",1),ce([Oe("value")],er.prototype,"handleValueChange",1),er.define("sl-radio-group");var ir=n`
  ${Zo}

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
`,sr=class extends qe{constructor(){super(...arguments),this.hasSlotController=new $i(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(t){if(this.disabled)return t.preventDefault(),void t.stopPropagation();this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return hi`
      <div part="base" role="presentation">
        <button
          part="${"button"+(this.checked?" button--checked":"")}"
          role="radio"
          aria-checked="${this.checked}"
          class=${ri({button:!0,"button--default":!0,"button--small":"small"===this.size,"button--medium":"medium"===this.size,"button--large":"large"===this.size,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${di(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};sr.styles=[De,ir],ce([Ne(".button")],sr.prototype,"input",2),ce([Ne(".hidden-input")],sr.prototype,"hiddenInput",2),ce([Ve()],sr.prototype,"hasFocus",2),ce([Be({type:Boolean,reflect:!0})],sr.prototype,"checked",2),ce([Be()],sr.prototype,"value",2),ce([Be({type:Boolean,reflect:!0})],sr.prototype,"disabled",2),ce([Be({reflect:!0})],sr.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],sr.prototype,"pill",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],sr.prototype,"handleDisabledChange",1),sr.define("sl-radio-button");var or=n`
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
`,rr=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasSlotController=new $i(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(t){"ArrowLeft"===t.key&&(t.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),"ArrowRight"===t.key&&(t.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("help-text"),e=!!this.helpText||!!t;return N`
      <div
        class=${ri({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-help-text":e})}
      >
        <label
          part="base"
          class=${ri({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":"small"===this.size,"switch--medium":"medium"===this.size,"switch--large":"large"===this.size})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${di(this.value)}
            .checked=${Yi(this.checked)}
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
    `}};rr.styles=[De,Ni,or],ce([Ne('input[type="checkbox"]')],rr.prototype,"input",2),ce([Ve()],rr.prototype,"hasFocus",2),ce([Be()],rr.prototype,"title",2),ce([Be()],rr.prototype,"name",2),ce([Be()],rr.prototype,"value",2),ce([Be({reflect:!0})],rr.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],rr.prototype,"disabled",2),ce([Be({type:Boolean,reflect:!0})],rr.prototype,"checked",2),ce([Hi("checked")],rr.prototype,"defaultChecked",2),ce([Be({reflect:!0})],rr.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],rr.prototype,"required",2),ce([Be({attribute:"help-text"})],rr.prototype,"helpText",2),ce([Oe("checked",{waitUntilFirstUpdate:!0})],rr.prototype,"handleCheckedChange",1),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],rr.prototype,"handleDisabledChange",1),rr.define("sl-switch"),Ji.define("sl-checkbox");var nr=n`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
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

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ar=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new $i(this,"help-text","label"),this.localize=new Di(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,(null==(t=this.input)?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),""!==this.value&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;"Enter"!==t.key||e||setTimeout(()=>{t.defaultPrevented||t.isComposing||this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,i="none"){this.input.setSelectionRange(t,e,i)}setRangeText(t,e,i,s="preserve"){const o=null!=e?e:this.input.selectionStart,r=null!=i?i:this.input.selectionEnd;this.input.setRangeText(t,o,r,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return N`
      <div
        part="form-control"
        class=${ri({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ri({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${di(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${di(this.placeholder)}
              minlength=${di(this.minlength)}
              maxlength=${di(this.maxlength)}
              min=${di(this.min)}
              max=${di(this.max)}
              step=${di(this.step)}
              .value=${Yi(this.value)}
              autocapitalize=${di(this.autocapitalize)}
              autocomplete=${di(this.autocomplete)}
              autocorrect=${di(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${di(this.pattern)}
              enterkeyhint=${di(this.enterkeyhint)}
              inputmode=${di(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${o?N`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?N`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?N`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:N`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
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
    `}};ar.styles=[De,Ni,nr],ar.dependencies={"sl-icon":Ye},ce([Ne(".input__control")],ar.prototype,"input",2),ce([Ve()],ar.prototype,"hasFocus",2),ce([Be()],ar.prototype,"title",2),ce([Be({reflect:!0})],ar.prototype,"type",2),ce([Be()],ar.prototype,"name",2),ce([Be()],ar.prototype,"value",2),ce([Hi()],ar.prototype,"defaultValue",2),ce([Be({reflect:!0})],ar.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],ar.prototype,"filled",2),ce([Be({type:Boolean,reflect:!0})],ar.prototype,"pill",2),ce([Be()],ar.prototype,"label",2),ce([Be({attribute:"help-text"})],ar.prototype,"helpText",2),ce([Be({type:Boolean})],ar.prototype,"clearable",2),ce([Be({type:Boolean,reflect:!0})],ar.prototype,"disabled",2),ce([Be()],ar.prototype,"placeholder",2),ce([Be({type:Boolean,reflect:!0})],ar.prototype,"readonly",2),ce([Be({attribute:"password-toggle",type:Boolean})],ar.prototype,"passwordToggle",2),ce([Be({attribute:"password-visible",type:Boolean})],ar.prototype,"passwordVisible",2),ce([Be({attribute:"no-spin-buttons",type:Boolean})],ar.prototype,"noSpinButtons",2),ce([Be({reflect:!0})],ar.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],ar.prototype,"required",2),ce([Be()],ar.prototype,"pattern",2),ce([Be({type:Number})],ar.prototype,"minlength",2),ce([Be({type:Number})],ar.prototype,"maxlength",2),ce([Be()],ar.prototype,"min",2),ce([Be()],ar.prototype,"max",2),ce([Be()],ar.prototype,"step",2),ce([Be()],ar.prototype,"autocapitalize",2),ce([Be()],ar.prototype,"autocorrect",2),ce([Be()],ar.prototype,"autocomplete",2),ce([Be({type:Boolean})],ar.prototype,"autofocus",2),ce([Be()],ar.prototype,"enterkeyhint",2),ce([Be({type:Boolean,converter:{fromAttribute:t=>!(!t||"false"===t),toAttribute:t=>t?"true":"false"}})],ar.prototype,"spellcheck",2),ce([Be()],ar.prototype,"inputmode",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],ar.prototype,"handleDisabledChange",1),ce([Oe("step",{waitUntilFirstUpdate:!0})],ar.prototype,"handleStepChange",1),ce([Oe("value",{waitUntilFirstUpdate:!0})],ar.prototype,"handleValueChange",1),ar.define("sl-input");var lr=n`
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
`,cr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return N`
      <span
        part="base"
        class=${ri({tag:!0,"tag--primary":"primary"===this.variant,"tag--success":"success"===this.variant,"tag--neutral":"neutral"===this.variant,"tag--warning":"warning"===this.variant,"tag--danger":"danger"===this.variant,"tag--text":"text"===this.variant,"tag--small":"small"===this.size,"tag--medium":"medium"===this.size,"tag--large":"large"===this.size,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?N`
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
    `}};cr.styles=[De,lr],cr.dependencies={"sl-icon-button":ui},ce([Be({reflect:!0})],cr.prototype,"variant",2),ce([Be({reflect:!0})],cr.prototype,"size",2),ce([Be({type:Boolean,reflect:!0})],cr.prototype,"pill",2),ce([Be({type:Boolean})],cr.prototype,"removable",2);var hr=n`
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
     */;let dr=class extends oi{constructor(t){if(super(t),this.it=q,t.type!==ti)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===q||null==t)return this._t=void 0,this.it=t;if(t===U)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};dr.directiveName="unsafeHTML",dr.resultType=1;const ur=si(dr);var pr=class extends qe{constructor(){super(...arguments),this.formControlController=new Gi(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new $i(this,"help-text","label"),this.localize=new Di(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>N`
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
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,i=null!==e.closest(".select__clear"),s=null!==e.closest("sl-icon-button");if(!i&&!s){if("Escape"===t.key&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),"Enter"===t.key||" "===t.key&&""===this.typeToSelectString)return t.preventDefault(),t.stopImmediatePropagation(),this.open?void(this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))):void this.show();if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=this.getAllOptions(),i=e.indexOf(this.currentOption);let s=Math.max(0,i);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;"ArrowDown"===t.key?(s=i+1,s>e.length-1&&(s=0)):"ArrowUp"===t.key?(s=i-1,s<0&&(s=e.length-1)):"Home"===t.key?s=0:"End"===t.key&&(s=e.length-1),this.setCurrentOption(e[s])}if(t.key&&1===t.key.length||"Backspace"===t.key){const e=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if("Backspace"===t.key)return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),"Backspace"===t.key?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const t of e){if(t.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(t);break}}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get value(){return this._value}set value(t){t=this.multiple?Array.isArray(t)?t:t.split(" "):Array.isArray(t)?t.join(" "):t,this._value!==t&&(this.valueHasChanged=!0,this._value=t)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var t;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var t;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),null==(t=this.closeWatcher)||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const e=t.composedPath().some(t=>t instanceof Element&&"sl-icon-button"===t.tagName.toLowerCase());this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){"Tab"!==t.key&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.valueHasChanged=!0,""!==this.value&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const e=t.target.closest("sl-option"),i=this.value;e&&!e.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const t=this.getAllOptions(),e=this.valueHasChanged?this.value:this.defaultValue,i=Array.isArray(e)?e:[e],s=[];t.forEach(t=>s.push(t.value)),this.setSelectedOptions(t.filter(t=>i.includes(t.value)))}handleTagRemove(t,e){t.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(t=>{t.current=!1,t.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),i=Array.isArray(t)?t:[t];e.forEach(t=>t.selected=!1),i.length&&i.forEach(t=>t.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){t.selected=!0===e||!1===e?e:!t.selected,this.selectionChanged()}selectionChanged(){var t,e,i;const s=this.getAllOptions();this.selectedOptions=s.filter(t=>t.selected);const o=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&0===this.value.length?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const s=this.selectedOptions[0];this.value=null!=(t=null==s?void 0:s.value)?t:"",this.displayLabel=null!=(i=null==(e=null==s?void 0:s.getTextLabel)?void 0:e.call(s))?i:""}this.valueHasChanged=o,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const i=this.getTag(t,e);return N`<div @sl-remove=${e=>this.handleTagRemove(e,t)}>
          ${"string"==typeof i?ur(i):i}
        </div>`}return e===this.maxOptionsVisible?N`<sl-tag size=${this.size}>+${this.selectedOptions.length-e}</sl-tag>`:N``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(t,e,i){if(super.attributeChangedCallback(t,e,i),"value"===t){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}}handleValueChange(){if(!this.valueHasChanged){const t=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=t}const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(t=>e.includes(t.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await xi(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=mi(this,"select.show",{dir:this.localize.dir()});await yi(this.popup.popup,t,e),this.currentOption&&_e(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xi(this);const{keyframes:t,options:e}=mi(this,"select.hide",{dir:this.localize.dir()});await yi(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,vi(this,"sl-after-show");this.open=!1}async hide(){if(this.open&&!this.disabled)return this.open=!1,vi(this,"sl-after-hide");this.open=!1}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),i=!!this.label||!!t,s=!!this.helpText||!!e,o=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value&&this.value.length<=0;return N`
      <div
        part="form-control"
        class=${ri({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":i,"form-control--has-help-text":s})}
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
            class=${ri({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":"top"===this.placement,"select--bottom":"bottom"===this.placement,"select--small":"small"===this.size,"select--medium":"medium"===this.size,"select--large":"large"===this.size})}
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

              ${this.multiple?N`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${o?N`
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
    `}};pr.styles=[De,Ni,hr],pr.dependencies={"sl-icon":Ye,"sl-popup":Wo,"sl-tag":cr},ce([Ne(".select")],pr.prototype,"popup",2),ce([Ne(".select__combobox")],pr.prototype,"combobox",2),ce([Ne(".select__display-input")],pr.prototype,"displayInput",2),ce([Ne(".select__value-input")],pr.prototype,"valueInput",2),ce([Ne(".select__listbox")],pr.prototype,"listbox",2),ce([Ve()],pr.prototype,"hasFocus",2),ce([Ve()],pr.prototype,"displayLabel",2),ce([Ve()],pr.prototype,"currentOption",2),ce([Ve()],pr.prototype,"selectedOptions",2),ce([Ve()],pr.prototype,"valueHasChanged",2),ce([Be()],pr.prototype,"name",2),ce([Ve()],pr.prototype,"value",1),ce([Be({attribute:"value"})],pr.prototype,"defaultValue",2),ce([Be({reflect:!0})],pr.prototype,"size",2),ce([Be()],pr.prototype,"placeholder",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"multiple",2),ce([Be({attribute:"max-options-visible",type:Number})],pr.prototype,"maxOptionsVisible",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"disabled",2),ce([Be({type:Boolean})],pr.prototype,"clearable",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"open",2),ce([Be({type:Boolean})],pr.prototype,"hoist",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"filled",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"pill",2),ce([Be()],pr.prototype,"label",2),ce([Be({reflect:!0})],pr.prototype,"placement",2),ce([Be({attribute:"help-text"})],pr.prototype,"helpText",2),ce([Be({reflect:!0})],pr.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],pr.prototype,"required",2),ce([Be()],pr.prototype,"getTag",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],pr.prototype,"handleDisabledChange",1),ce([Oe(["defaultValue","value"],{waitUntilFirstUpdate:!0})],pr.prototype,"handleValueChange",1),ce([Oe("open",{waitUntilFirstUpdate:!0})],pr.prototype,"handleOpenChange",1),bi("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),bi("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),pr.define("sl-select");var gr=n`
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
`,fr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const t=this.closest("sl-select");t&&t.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){"string"!=typeof this.value&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const t=this.childNodes;let e="";return[...t].forEach(t=>{t.nodeType===Node.ELEMENT_NODE&&(t.hasAttribute("slot")||(e+=t.textContent)),t.nodeType===Node.TEXT_NODE&&(e+=t.textContent)}),e.trim()}render(){return N`
      <div
        part="base"
        class=${ri({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};fr.styles=[De,gr],fr.dependencies={"sl-icon":Ye},ce([Ne(".option__label")],fr.prototype,"defaultSlot",2),ce([Ve()],fr.prototype,"current",2),ce([Ve()],fr.prototype,"selected",2),ce([Ve()],fr.prototype,"hasHover",2),ce([Be({reflect:!0})],fr.prototype,"value",2),ce([Be({type:Boolean,reflect:!0})],fr.prototype,"disabled",2),ce([Oe("disabled")],fr.prototype,"handleDisabledChange",1),ce([Oe("selected")],fr.prototype,"handleSelectedChange",1),ce([Oe("value")],fr.prototype,"handleValueChange",1),fr.define("sl-option");var br=n`
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
`,mr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&"Escape"===t.key&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if("Escape"===t.key&&this.open&&!this.closeWatcher)return t.stopPropagation(),this.focusOnTrigger(),void this.hide();if("Tab"===t.key){if(this.open&&"sl-menu-item"===(null==(e=document.activeElement)?void 0:e.tagName.toLowerCase()))return t.preventDefault(),this.hide(),void this.focusOnTrigger();const i=(t,e)=>{if(!t)return null;const s=t.closest(e);if(s)return s;const o=t.getRootNode();return o instanceof ShadowRoot?i(o.host,e):null};setTimeout(()=>{var t;const e=(null==(t=this.containingElement)?void 0:t.getRootNode())instanceof ShadowRoot?pe():document.activeElement;this.containingElement&&i(e,this.containingElement.tagName.toLowerCase())===this.containingElement||this.hide()})}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{const e=t.target;this.stayOpenOnSelect||"sl-menu"!==e.tagName.toLowerCase()||(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const t=this.trigger.assignedElements({flatten:!0})[0];"function"==typeof(null==t?void 0:t.focus)&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>"sl-menu"===t.tagName.toLowerCase())}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key))return t.preventDefault(),void this.handleTriggerClick();const e=this.getMenu();if(e){const i=e.getAllItems(),s=i[0],o=i[i.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),i.length>0&&this.updateComplete.then(()=>{"ArrowDown"!==t.key&&"Home"!==t.key||(e.setCurrentItem(s),s.focus()),"ArrowUp"!==t.key&&"End"!==t.key||(e.setCurrentItem(o),o.focus())}))}}handleTriggerKeyUp(t){" "===t.key&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const t=this.trigger.assignedElements({flatten:!0}).find(t=>function(t){var e,i;const s=me(t);return{start:null!=(e=s[0])?e:null,end:null!=(i=s[s.length-1])?i:null}}(t).start);let e;if(t){switch(t.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),null==(t=this.closeWatcher)||t.destroy()}async handleOpenChange(){if(this.disabled)this.open=!1;else if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await xi(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=mi(this,"dropdown.show",{dir:this.localize.dir()});await yi(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await xi(this);const{keyframes:t,options:e}=mi(this,"dropdown.hide",{dir:this.localize.dir()});await yi(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return N`
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
        sync=${di(this.sync?this.sync:void 0)}
        class=${ri({dropdown:!0,"dropdown--open":this.open})}
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
    `}};mr.styles=[De,br],mr.dependencies={"sl-popup":Wo},ce([Ne(".dropdown")],mr.prototype,"popup",2),ce([Ne(".dropdown__trigger")],mr.prototype,"trigger",2),ce([Ne(".dropdown__panel")],mr.prototype,"panel",2),ce([Be({type:Boolean,reflect:!0})],mr.prototype,"open",2),ce([Be({reflect:!0})],mr.prototype,"placement",2),ce([Be({type:Boolean,reflect:!0})],mr.prototype,"disabled",2),ce([Be({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],mr.prototype,"stayOpenOnSelect",2),ce([Be({attribute:!1})],mr.prototype,"containingElement",2),ce([Be({type:Number})],mr.prototype,"distance",2),ce([Be({type:Number})],mr.prototype,"skidding",2),ce([Be({type:Boolean})],mr.prototype,"hoist",2),ce([Be({reflect:!0})],mr.prototype,"sync",2),ce([Oe("open",{waitUntilFirstUpdate:!0})],mr.prototype,"handleOpenChange",1),bi("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}}),bi("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}}),mr.define("sl-dropdown");var vr=n`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,yr=class extends qe{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){const e=["menuitem","menuitemcheckbox"],i=t.composedPath(),s=i.find(t=>{var i;return e.includes((null==(i=null==t?void 0:t.getAttribute)?void 0:i.call(t,"role"))||"")});if(!s)return;const o=i.find(t=>{var e;return"menu"===(null==(e=null==t?void 0:t.getAttribute)?void 0:e.call(t,"role"))});if(o!==this)return;const r=s;"checkbox"===r.type&&(r.checked=!r.checked),this.emit("sl-select",{detail:{item:r}})}handleKeyDown(t){if("Enter"===t.key||" "===t.key){const e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),null==e||e.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems(),i=this.getCurrentItem();let s=i?e.indexOf(i):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),"ArrowDown"===t.key?s++:"ArrowUp"===t.key?s--:"Home"===t.key?s=0:"End"===t.key&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){const e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return"sl-menu-item"===t.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(e=t.getAttribute("role"))?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>"0"===t.getAttribute("tabindex"))}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return N`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};yr.styles=[De,vr],ce([Ne("slot")],yr.prototype,"defaultSlot",2),yr.define("sl-menu");var wr=n`
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
     */;const kr=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),kr(t,e);return!0},xr=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},_r=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),Sr(e)}};function $r(t){void 0!==this._$AN?(xr(this),this._$AM=t,_r(this)):this._$AM=t}function Cr(t,e=!1,i=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(s))for(let t=i;t<s.length;t++)kr(s[t],!1),xr(s[t]);else null!=s&&(kr(s,!1),xr(s));else kr(this,t)}const Sr=t=>{t.type==ti&&(t._$AP??=Cr,t._$AQ??=$r)};class Ar extends oi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),_r(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(kr(this,t),xr(this))}setValue(t){if(We(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */let zr=class{};const Er=new WeakMap,Tr=si(class extends Ar{render(t){return q}update(t,[e]){const i=e!==this.G;return i&&void 0!==this.G&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),q}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.G){const e=this.ht??globalThis;let i=Er.get(e);void 0===i&&(i=new WeakMap,Er.set(e,i)),void 0!==i.get(this.G)&&this.G.call(this.ht,void 0),i.set(this.G,t),void 0!==t&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return"function"==typeof this.G?Er.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Lr=class{constructor(t,e){this.popupRef=new zr,this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=t=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${t.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${t.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=t=>{switch(t.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":t.target!==this.host&&(t.preventDefault(),t.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(t)}},this.handleClick=t=>{var e;t.target===this.host?(t.preventDefault(),t.stopPropagation()):t.target instanceof Element&&("sl-menu-item"===t.target.tagName||(null==(e=t.target.role)?void 0:e.startsWith("menuitem")))&&this.disableSubmenu()},this.handleFocusOut=t=>{t.relatedTarget&&t.relatedTarget instanceof Element&&this.host.contains(t.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=t=>{t.stopPropagation()},this.handlePopupReposition=()=>{const t=this.host.renderRoot.querySelector("slot[name='submenu']"),e=null==t?void 0:t.assignedElements({flatten:!0}).filter(t=>"sl-menu"===t.localName)[0],i="rtl"===getComputedStyle(this.host).direction;if(!e)return;const{left:s,top:o,width:r,height:n}=e.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${i?s+r:s}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${o}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${i?s+r:s}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${o+n}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){const e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e)return void console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);let i=null;for(const t of e.assignedElements())if(i=t.querySelectorAll("sl-menu-item, [role^='menuitem']"),0!==i.length)break;if(i&&0!==i.length){i[0].setAttribute("tabindex","0");for(let t=1;t!==i.length;++t)i[t].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?i[0]instanceof HTMLElement&&i[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{i[0]instanceof HTMLElement&&i[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!(null==(t=this.host.parentElement)?void 0:t.computedStyleMap))return;const e=this.host.parentElement.computedStyleMap(),i=["padding-top","border-top-width","margin-top"].reduce((t,i)=>{var s;const o=null!=(s=e.get(i))?s:new CSSUnitValue(0,"px");return t-(o instanceof CSSUnitValue?o:new CSSUnitValue(0,"px")).to("px").value},0);this.skidding=i}isExpanded(){return!!this.popupRef.value&&this.popupRef.value.active}renderSubmenu(){const t="rtl"===getComputedStyle(this.host).direction;return this.isConnected?N`
      <sl-popup
        ${Tr(this.popupRef)}
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
    `:N` <slot name="submenu" hidden></slot> `}},Pr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new $i(this,"submenu"),this.submenuController=new Lr(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const t=this.getTextLabel();void 0!==this.cachedTextLabel?t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=t}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let i="";return[...e].forEach(t=>{t.nodeType===Node.TEXT_NODE&&(i+=t.textContent)}),i}(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const t="rtl"===this.localize.dir(),e=this.submenuController.isExpanded();return N`
      <div
        id="anchor"
        part="base"
        class=${ri({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
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
        ${this.loading?N` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Pr.styles=[De,wr],Pr.dependencies={"sl-icon":Ye,"sl-popup":Wo,"sl-spinner":es},ce([Ne("slot:not([name])")],Pr.prototype,"defaultSlot",2),ce([Ne(".menu-item")],Pr.prototype,"menuItem",2),ce([Be()],Pr.prototype,"type",2),ce([Be({type:Boolean,reflect:!0})],Pr.prototype,"checked",2),ce([Be()],Pr.prototype,"value",2),ce([Be({type:Boolean,reflect:!0})],Pr.prototype,"loading",2),ce([Be({type:Boolean,reflect:!0})],Pr.prototype,"disabled",2),ce([Oe("checked")],Pr.prototype,"handleCheckedChange",1),ce([Oe("disabled")],Pr.prototype,"handleDisabledChange",1),ce([Oe("type")],Pr.prototype,"handleTypeChange",1),Pr.define("sl-menu-item");var Rr=n`
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
`,Ir=class extends qe{render(){return N` <slot part="base" class="menu-label"></slot> `}};Ir.styles=[De,Rr],Ir.define("sl-menu-label");var Or=n`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Dr=class extends qe{constructor(){super(...arguments),this.hasSlotController=new $i(this,"footer"),this.localize=new Di(this),this.modal=new ye(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{"Escape"===t.key&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ke(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),xe(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const t=mi(this,"dialog.denyClose",{dir:this.localize.dir()});return void yi(this.panel,t.keyframes,t.options)}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?(null==(t=this.closeWatcher)||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;null==(t=this.closeWatcher)||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ke(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([xi(this.dialog),xi(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=mi(this,"dialog.show",{dir:this.localize.dir()}),i=mi(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([yi(this.panel,e.keyframes,e.options),yi(this.overlay,i.keyframes,i.options)]),this.emit("sl-after-show")}else{$e(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([xi(this.dialog),xi(this.overlay)]);const t=mi(this,"dialog.hide",{dir:this.localize.dir()}),e=mi(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([yi(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),yi(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,xe(this);const i=this.originalTrigger;"function"==typeof(null==i?void 0:i.focus)&&setTimeout(()=>i.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,vi(this,"sl-after-hide")}render(){return N`
      <div
        part="base"
        class=${ri({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${di(this.noHeader?this.label:void 0)}
          aria-labelledby=${di(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":N`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Dr.styles=[De,Or],Dr.dependencies={"sl-icon-button":ui},ce([Ne(".dialog")],Dr.prototype,"dialog",2),ce([Ne(".dialog__panel")],Dr.prototype,"panel",2),ce([Ne(".dialog__overlay")],Dr.prototype,"overlay",2),ce([Be({type:Boolean,reflect:!0})],Dr.prototype,"open",2),ce([Be({reflect:!0})],Dr.prototype,"label",2),ce([Be({attribute:"no-header",type:Boolean,reflect:!0})],Dr.prototype,"noHeader",2),ce([Oe("open",{waitUntilFirstUpdate:!0})],Dr.prototype,"handleOpenChange",1),bi("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}}),bi("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}}),bi("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),bi("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),bi("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Dr.define("sl-dialog");var Mr=n`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Fr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(const e of t)"attributes"===e.type&&"open"===e.attributeName&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var t;super.disconnectedCallback(),null==(t=this.detailsObserver)||t.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.open?this.hide():this.show()),"ArrowUp"!==t.key&&"ArrowLeft"!==t.key||(t.preventDefault(),this.hide()),"ArrowDown"!==t.key&&"ArrowRight"!==t.key||(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){this.details.open=!0;if(this.emit("sl-show",{cancelable:!0}).defaultPrevented)return this.open=!1,void(this.details.open=!1);await xi(this.body);const{keyframes:t,options:e}=mi(this,"details.show",{dir:this.localize.dir()});await yi(this.body,_i(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented)return this.details.open=!0,void(this.open=!0);await xi(this.body);const{keyframes:t,options:e}=mi(this,"details.hide",{dir:this.localize.dir()});await yi(this.body,_i(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!this.open&&!this.disabled)return this.open=!0,vi(this,"sl-after-show")}async hide(){if(this.open&&!this.disabled)return this.open=!1,vi(this,"sl-after-hide")}render(){const t="rtl"===this.localize.dir();return N`
      <details
        part="base"
        class=${ri({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${t?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Fr.styles=[De,Mr],Fr.dependencies={"sl-icon":Ye},ce([Ne(".details")],Fr.prototype,"details",2),ce([Ne(".details__header")],Fr.prototype,"header",2),ce([Ne(".details__body")],Fr.prototype,"body",2),ce([Ne(".details__expand-icon-slot")],Fr.prototype,"expandIconSlot",2),ce([Be({type:Boolean,reflect:!0})],Fr.prototype,"open",2),ce([Be()],Fr.prototype,"summary",2),ce([Be({type:Boolean,reflect:!0})],Fr.prototype,"disabled",2),ce([Oe("open",{waitUntilFirstUpdate:!0})],Fr.prototype,"handleOpenChange",1),bi("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}}),bi("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}}),Fr.define("sl-details"),jo.define("sl-tooltip"),cr.define("sl-tag");var Br=n`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Vr=0,Hr=class extends qe{constructor(){super(...arguments),this.localize=new Di(this),this.attrId=++Vr,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,N`
      <div
        part="base"
        class=${ri({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?N`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Hr.styles=[De,Br],Hr.dependencies={"sl-icon-button":ui},ce([Ne(".tab")],Hr.prototype,"tab",2),ce([Be({reflect:!0})],Hr.prototype,"panel",2),ce([Be({type:Boolean,reflect:!0})],Hr.prototype,"active",2),ce([Be({type:Boolean,reflect:!0})],Hr.prototype,"closable",2),ce([Be({type:Boolean,reflect:!0})],Hr.prototype,"disabled",2),ce([Be({type:Number,reflect:!0})],Hr.prototype,"tabIndex",2),ce([Oe("active")],Hr.prototype,"handleActiveChange",1),ce([Oe("disabled")],Hr.prototype,"handleDisabledChange",1),Hr.define("sl-tab");var Nr=n`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,Ur=n`
  :host {
    display: contents;
  }
`,qr=class extends qe{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("sl-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const t=this.shadowRoot.querySelector("slot");if(null!==t){const e=t.assignedElements({flatten:!0});this.observedElements.forEach(t=>this.resizeObserver.unobserve(t)),this.observedElements=[],e.forEach(t=>{this.resizeObserver.observe(t),this.observedElements.push(t)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return N` <slot @slotchange=${this.handleSlotChange}></slot> `}};qr.styles=[De,Ur],ce([Be({type:Boolean,reflect:!0})],qr.prototype,"disabled",2),ce([Oe("disabled",{waitUntilFirstUpdate:!0})],qr.prototype,"handleDisabledChange",1);var Wr=class extends qe{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Di(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const t=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{const e=t.filter(({target:t})=>{if(t===this)return!0;if(t.closest("sl-tab-group")!==this)return!1;const e=t.tagName.toLowerCase();return"sl-tab"===e||"sl-tab-panel"===e});if(0!==e.length)if(e.some(t=>!["aria-labelledby","aria-controls"].includes(t.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(t=>"disabled"===t.attributeName))this.syncTabsAndPanels();else if(e.some(t=>"active"===t.attributeName)){const t=e.filter(t=>"active"===t.attributeName&&"sl-tab"===t.target.tagName.toLowerCase()).map(t=>t.target),i=t.find(t=>t.active);i&&this.setActiveTab(i)}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{const t=new IntersectionObserver((t,e)=>{var i;t[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(null!=(i=this.getActiveTab())?i:this.tabs[0],{emitEvents:!1}),e.unobserve(t[0].target))});t.observe(this.tabGroup)})})}disconnectedCallback(){var t,e;super.disconnectedCallback(),null==(t=this.mutationObserver)||t.disconnect(),this.nav&&(null==(e=this.resizeObserver)||e.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(t=>"sl-tab-panel"===t.tagName.toLowerCase())}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){const e=t.target.closest("sl-tab");(null==e?void 0:e.closest("sl-tab-group"))===this&&null!==e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){const e=t.target.closest("sl-tab");if((null==e?void 0:e.closest("sl-tab-group"))===this&&(["Enter"," "].includes(t.key)&&null!==e&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){const e=this.tabs.find(t=>t.matches(":focus")),i="rtl"===this.localize.dir();let s=null;if("sl-tab"===(null==e?void 0:e.tagName.toLowerCase())){if("Home"===t.key)s=this.focusableTabs[0];else if("End"===t.key)s=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&"ArrowUp"===t.key){const t=this.tabs.findIndex(t=>t===e);s=this.findNextFocusableTab(t,"backward")}else if(["top","bottom"].includes(this.placement)&&t.key===(i?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&"ArrowDown"===t.key){const t=this.tabs.findIndex(t=>t===e);s=this.findNextFocusableTab(t,"forward")}if(!s)return;s.tabIndex=0,s.focus({preventScroll:!0}),"auto"===this.activation?this.setActiveTab(s,{scrollBehavior:"smooth"}):this.tabs.forEach(t=>{t.tabIndex=t===s?0:-1}),["top","bottom"].includes(this.placement)&&_e(s,this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:"rtl"===this.localize.dir()?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e=ae({emitEvents:!0,scrollBehavior:"auto"},e),t!==this.activeTab&&!t.disabled){const i=this.activeTab;this.activeTab=t,this.tabs.forEach(t=>{t.active=t===this.activeTab,t.tabIndex=t===this.activeTab?0:-1}),this.panels.forEach(t=>{var e;return t.active=t.name===(null==(e=this.activeTab)?void 0:e.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&_e(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(i&&this.emit("sl-tab-hide",{detail:{name:i.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{const e=this.panels.find(e=>e.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){const t=this.getActiveTab();if(!t)return;const e=t.clientWidth,i=t.clientHeight,s="rtl"===this.localize.dir(),o=this.getAllTabs(),r=o.slice(0,o.indexOf(t)).reduce((t,e)=>({left:t.left+e.clientWidth,top:t.top+e.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=s?-1*r.left+"px":`${r.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${i}px`,this.indicator.style.translate=`0 ${r.top}px`}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(t=>!t.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(t,e){let i=null;const s="forward"===e?1:-1;let o=t+s;for(;t<this.tabs.length;){if(i=this.tabs[o]||null,null===i){i="forward"===e?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!i.disabled)break;o+=s}return i}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return"rtl"===this.localize.dir()?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){const e=this.tabs.find(e=>e.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){const t="rtl"===this.localize.dir();return N`
      <div
        part="base"
        class=${ri({"tab-group":!0,"tab-group--top":"top"===this.placement,"tab-group--bottom":"bottom"===this.placement,"tab-group--start":"start"===this.placement,"tab-group--end":"end"===this.placement,"tab-group--rtl":"rtl"===this.localize.dir(),"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${ri({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?N`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${ri({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};Wr.styles=[De,Nr],Wr.dependencies={"sl-icon-button":ui,"sl-resize-observer":qr},ce([Ne(".tab-group")],Wr.prototype,"tabGroup",2),ce([Ne(".tab-group__body")],Wr.prototype,"body",2),ce([Ne(".tab-group__nav")],Wr.prototype,"nav",2),ce([Ne(".tab-group__indicator")],Wr.prototype,"indicator",2),ce([Ve()],Wr.prototype,"hasScrollControls",2),ce([Ve()],Wr.prototype,"shouldHideScrollStartButton",2),ce([Ve()],Wr.prototype,"shouldHideScrollEndButton",2),ce([Be()],Wr.prototype,"placement",2),ce([Be()],Wr.prototype,"activation",2),ce([Be({attribute:"no-scroll-controls",type:Boolean})],Wr.prototype,"noScrollControls",2),ce([Be({attribute:"fixed-scroll-controls",type:Boolean})],Wr.prototype,"fixedScrollControls",2),ce([He({passive:!0})],Wr.prototype,"updateScrollButtons",1),ce([Oe("noScrollControls",{waitUntilFirstUpdate:!0})],Wr.prototype,"updateScrollControls",1),ce([Oe("placement",{waitUntilFirstUpdate:!0})],Wr.prototype,"syncIndicator",1),Wr.define("sl-tab-group");var jr=(t,e)=>{let i=0;return function(...s){window.clearTimeout(i),i=window.setTimeout(()=>{t.call(this,...s)},e)}},Kr=(t,e,i)=>{const s=t[e];t[e]=function(...t){s.call(this,...t),i.call(this,s,...t)}};(()=>{if("undefined"==typeof window)return;if(!("onscrollend"in window)){const t=new Set,e=new WeakMap,i=e=>{for(const i of e.changedTouches)t.add(i.identifier)},s=e=>{for(const i of e.changedTouches)t.delete(i.identifier)};document.addEventListener("touchstart",i,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),Kr(EventTarget.prototype,"addEventListener",function(i,s){if("scrollend"!==s)return;const o=jr(()=>{t.size?o():this.dispatchEvent(new Event("scrollend"))},100);i.call(this,"scroll",o,{passive:!0}),e.set(this,o)}),Kr(EventTarget.prototype,"removeEventListener",function(t,i){if("scrollend"!==i)return;const s=e.get(this);s&&t.call(this,"scroll",s,{passive:!0})})}})();var Gr=n`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Zr=0,Qr=class extends qe{constructor(){super(...arguments),this.attrId=++Zr,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return N`
      <slot
        part="base"
        class=${ri({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Qr.styles=[De,Gr],ce([Be({reflect:!0})],Qr.prototype,"name",2),ce([Be({type:Boolean,reflect:!0})],Qr.prototype,"active",2),ce([Oe("active")],Qr.prototype,"handleActiveChange",1),Qr.define("sl-tab-panel");var Xr=n`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Yr=class extends qe{render(){return N` <slot></slot> `}};Yr.styles=[De,Xr];var Jr=n`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
/**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */;const tn="important",en=" !"+tn,sn=si(class extends oi{constructor(t){if(super(t),t.type!==Je||"style"!==t.name||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`},"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)null==e[t]&&(this.ft.delete(t),t.includes("-")?i.removeProperty(t):i[t]=null);for(const t in e){const s=e[t];if(null!=s){this.ft.add(t);const e="string"==typeof s&&s.endsWith(en);t.includes("-")||e?i.setProperty(t,e?s.slice(0,-11):s,e?tn:""):i[t]=s}}return U}});function on(t,e){(function(t){return"string"==typeof t&&-1!==t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");const i=function(t){return"string"==typeof t&&-1!==t.indexOf("%")}(t);return t=360===e?t:Math.min(e,Math.max(0,parseFloat(t))),i&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:t=360===e?(t<0?t%e+e:t%e)/parseFloat(String(e)):t%e/parseFloat(String(e))}function rn(t){return Math.min(1,Math.max(0,t))}function nn(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function an(t){return Number(t)<=1?100*Number(t)+"%":t}function ln(t){return 1===t.length?"0"+t:String(t)}function cn(t,e,i){t=on(t,255),e=on(e,255),i=on(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0,n=0;const a=(s+o)/2;if(s===o)n=0,r=0;else{const l=s-o;switch(n=a>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-i)/l+(e<i?6:0);break;case e:r=(i-t)/l+2;break;case i:r=(t-e)/l+4}r/=6}return{h:r,s:n,l:a}}function hn(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+6*i*(e-t):i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function dn(t,e,i){t=on(t,255),e=on(e,255),i=on(i,255);const s=Math.max(t,e,i),o=Math.min(t,e,i);let r=0;const n=s,a=s-o,l=0===s?0:a/s;if(s===o)r=0;else{switch(s){case t:r=(e-i)/a+(e<i?6:0);break;case e:r=(i-t)/a+2;break;case i:r=(t-e)/a+4}r/=6}return{h:r,s:l,v:n}}function un(t,e,i,s){const o=[ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(i).toString(16))];return s&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function pn(t,e,i){let s=1-t/255,o=1-e/255,r=1-i/255,n=Math.min(s,o,r);return 1===n?(s=0,o=0,r=0):(s=(s-n)/(1-n)*100,o=(o-n)/(1-n)*100,r=(r-n)/(1-n)*100),n*=100,{c:Math.round(s),m:Math.round(o),y:Math.round(r),k:Math.round(n)}}function gn(t){return Math.round(255*parseFloat(t)).toString(16)}function fn(t){return bn(t)/255}function bn(t){return parseInt(t,16)}const mn={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function vn(t){let e={r:0,g:0,b:0},i=1,s=null,o=null,r=null,n=!1,a=!1;return"string"==typeof t&&(t=function(t){if(t=t.trim().toLowerCase(),0===t.length)return!1;let e=!1;if(mn[t])t=mn[t],e=!0;else if("transparent"===t)return{r:0,g:0,b:0,a:0,format:"name"};let i=xn.rgb.exec(t);if(i)return{r:i[1],g:i[2],b:i[3]};if(i=xn.rgba.exec(t),i)return{r:i[1],g:i[2],b:i[3],a:i[4]};if(i=xn.hsl.exec(t),i)return{h:i[1],s:i[2],l:i[3]};if(i=xn.hsla.exec(t),i)return{h:i[1],s:i[2],l:i[3],a:i[4]};if(i=xn.hsv.exec(t),i)return{h:i[1],s:i[2],v:i[3]};if(i=xn.hsva.exec(t),i)return{h:i[1],s:i[2],v:i[3],a:i[4]};if(i=xn.cmyk.exec(t),i)return{c:i[1],m:i[2],y:i[3],k:i[4]};if(i=xn.hex8.exec(t),i)return{r:bn(i[1]),g:bn(i[2]),b:bn(i[3]),a:fn(i[4]),format:e?"name":"hex8"};if(i=xn.hex6.exec(t),i)return{r:bn(i[1]),g:bn(i[2]),b:bn(i[3]),format:e?"name":"hex"};if(i=xn.hex4.exec(t),i)return{r:bn(i[1]+i[1]),g:bn(i[2]+i[2]),b:bn(i[3]+i[3]),a:fn(i[4]+i[4]),format:e?"name":"hex8"};if(i=xn.hex3.exec(t),i)return{r:bn(i[1]+i[1]),g:bn(i[2]+i[2]),b:bn(i[3]+i[3]),format:e?"name":"hex"};return!1}(t)),"object"==typeof t&&(_n(t.r)&&_n(t.g)&&_n(t.b)?(e=function(t,e,i){return{r:255*on(t,255),g:255*on(e,255),b:255*on(i,255)}}(t.r,t.g,t.b),n=!0,a="%"===String(t.r).substr(-1)?"prgb":"rgb"):_n(t.h)&&_n(t.s)&&_n(t.v)?(s=an(t.s),o=an(t.v),e=function(t,e,i){t=6*on(t,360),e=on(e,100),i=on(i,100);const s=Math.floor(t),o=t-s,r=i*(1-e),n=i*(1-o*e),a=i*(1-(1-o)*e),l=s%6;return{r:255*[i,n,r,r,a,i][l],g:255*[a,i,i,n,r,r][l],b:255*[r,r,a,i,i,n][l]}}(t.h,s,o),n=!0,a="hsv"):_n(t.h)&&_n(t.s)&&_n(t.l)?(s=an(t.s),r=an(t.l),e=function(t,e,i){let s,o,r;if(t=on(t,360),e=on(e,100),i=on(i,100),0===e)o=i,r=i,s=i;else{const n=i<.5?i*(1+e):i+e-i*e,a=2*i-n;s=hn(a,n,t+1/3),o=hn(a,n,t),r=hn(a,n,t-1/3)}return{r:255*s,g:255*o,b:255*r}}(t.h,s,r),n=!0,a="hsl"):_n(t.c)&&_n(t.m)&&_n(t.y)&&_n(t.k)&&(e=function(t,e,i,s){const o=s/100;return{r:255*(1-t/100)*(1-o),g:255*(1-e/100)*(1-o),b:255*(1-i/100)*(1-o)}}(t.c,t.m,t.y,t.k),n=!0,a="cmyk"),Object.prototype.hasOwnProperty.call(t,"a")&&(i=t.a)),i=nn(i),{ok:n,format:t.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:i}}const yn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",wn="[\\s|\\(]+("+yn+")[,|\\s]+("+yn+")[,|\\s]+("+yn+")\\s*\\)?",kn="[\\s|\\(]+("+yn+")[,|\\s]+("+yn+")[,|\\s]+("+yn+")[,|\\s]+("+yn+")\\s*\\)?",xn={CSS_UNIT:new RegExp(yn),rgb:new RegExp("rgb"+wn),rgba:new RegExp("rgba"+kn),hsl:new RegExp("hsl"+wn),hsla:new RegExp("hsla"+kn),hsv:new RegExp("hsv"+wn),hsva:new RegExp("hsva"+kn),cmyk:new RegExp("cmyk"+kn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function _n(t){return"number"==typeof t?!Number.isNaN(t):xn.CSS_UNIT.test(t)}class $n{constructor(t="",e={}){if(t instanceof $n)return t;"number"==typeof t&&(t=function(t){return{r:t>>16,g:(65280&t)>>8,b:255&t}}(t)),this.originalInput=t;const i=vn(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3}getLuminance(){const t=this.toRgb();let e,i,s;const o=t.r/255,r=t.g/255,n=t.b/255;return e=o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4),i=r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4),s=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4),.2126*e+.7152*i+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=nn(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return 0===t}toHsv(){const t=dn(this.r,this.g,this.b);return{h:360*t.h,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=dn(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.v);return 1===this.a?`hsv(${e}, ${i}%, ${s}%)`:`hsva(${e}, ${i}%, ${s}%, ${this.roundA})`}toHsl(){const t=cn(this.r,this.g,this.b);return{h:360*t.h,s:t.s,l:t.l,a:this.a}}toHslString(){const t=cn(this.r,this.g,this.b),e=Math.round(360*t.h),i=Math.round(100*t.s),s=Math.round(100*t.l);return 1===this.a?`hsl(${e}, ${i}%, ${s}%)`:`hsla(${e}, ${i}%, ${s}%, ${this.roundA})`}toHex(t=!1){return un(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return function(t,e,i,s,o){const r=[ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(i).toString(16)),ln(gn(s))];return o&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return 1===this.a?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),i=Math.round(this.b);return 1===this.a?`rgb(${t}, ${e}, ${i})`:`rgba(${t}, ${e}, ${i}, ${this.roundA})`}toPercentageRgb(){const t=t=>`${Math.round(100*on(t,255))}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=t=>Math.round(100*on(t,255));return 1===this.a?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...pn(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:i,k:s}=pn(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${i}, ${s})`}toName(){if(0===this.a)return"transparent";if(this.a<1)return!1;const t="#"+un(this.r,this.g,this.b,!1);for(const[e,i]of Object.entries(mn))if(t===i)return e;return!1}toString(t){const e=Boolean(t);t=t??this.format;let i=!1;const s=this.a<1&&this.a>=0;return e||!s||!t.startsWith("hex")&&"name"!==t?("rgb"===t&&(i=this.toRgbString()),"prgb"===t&&(i=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(i=this.toHexString()),"hex3"===t&&(i=this.toHexString(!0)),"hex4"===t&&(i=this.toHex8String(!0)),"hex8"===t&&(i=this.toHex8String()),"name"===t&&(i=this.toName()),"hsl"===t&&(i=this.toHslString()),"hsv"===t&&(i=this.toHsvString()),"cmyk"===t&&(i=this.toCmykString()),i||this.toHexString()):"name"===t&&0===this.a?this.toName():this.toRgbString()}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new $n(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=rn(e.l),new $n(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-t/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-t/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-t/100*255))),new $n(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=rn(e.l),new $n(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=rn(e.s),new $n(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=rn(e.s),new $n(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),i=(e.h+t)%360;return e.h=i<0?360+i:i,new $n(e)}mix(t,e=50){const i=this.toRgb(),s=new $n(t).toRgb(),o=e/100,r={r:(s.r-i.r)*o+i.r,g:(s.g-i.g)*o+i.g,b:(s.b-i.b)*o+i.b,a:(s.a-i.a)*o+i.a};return new $n(r)}analogous(t=6,e=30){const i=this.toHsl(),s=360/e,o=[this];for(i.h=(i.h-(s*t>>1)+720)%360;--t;)i.h=(i.h+s)%360,o.push(new $n(i));return o}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new $n(t)}monochromatic(t=6){const e=this.toHsv(),{h:i}=e,{s:s}=e;let{v:o}=e;const r=[],n=1/t;for(;t--;)r.push(new $n({h:i,s:s,v:o})),o=(o+n)%1;return r}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new $n({h:(e+72)%360,s:t.s,l:t.l}),new $n({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),i=new $n(t).toRgb(),s=e.a+i.a*(1-e.a);return new $n({r:(e.r*e.a+i.r*i.a*(1-e.a))/s,g:(e.g*e.a+i.g*i.a*(1-e.a))/s,b:(e.b*e.a+i.b*i.a*(1-e.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:i}=e,s=[this],o=360/t;for(let r=1;r<t;r++)s.push(new $n({h:(i+r*o)%360,s:e.s,l:e.l}));return s}equals(t){const e=new $n(t);return"cmyk"===this.format||"cmyk"===e.format?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}var Cn="EyeDropper"in window,Sn=class extends qe{constructor(){super(),this.formControlController=new Gi(this),this.isSafeValue=!1,this.localize=new Di(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),us(e,{onMove:t=>{this.alpha=ns(t/s*100,0,100),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleHueDrag(t){const e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),i=e.querySelector(".color-picker__slider-handle"),{width:s}=e.getBoundingClientRect();let o=this.value,r=this.value;i.focus(),t.preventDefault(),us(e,{onMove:t=>{this.hue=ns(t/s*360,0,360),this.syncValues(),this.value!==r&&(r=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==o&&(o=this.value,this.emit("sl-change"))},initialEvent:t})}handleGridDrag(t){const e=this.shadowRoot.querySelector(".color-picker__grid"),i=e.querySelector(".color-picker__grid-handle"),{width:s,height:o}=e.getBoundingClientRect();let r=this.value,n=this.value;i.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,us(e,{onMove:(t,e)=>{this.saturation=ns(t/s*100,0,100),this.brightness=ns(100-e/o*100,0,100),this.syncValues(),this.value!==n&&(n=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==r&&(r=this.value,this.emit("sl-change"))},initialEvent:t})}handleAlphaKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.alpha=ns(this.alpha-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.alpha=ns(this.alpha+e,0,100),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.alpha=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.hue=ns(this.hue-e,0,360),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.hue=ns(this.hue+e,0,360),this.syncValues()),"Home"===t.key&&(t.preventDefault(),this.hue=0,this.syncValues()),"End"===t.key&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(t){const e=t.shiftKey?10:1,i=this.value;"ArrowLeft"===t.key&&(t.preventDefault(),this.saturation=ns(this.saturation-e,0,100),this.syncValues()),"ArrowRight"===t.key&&(t.preventDefault(),this.saturation=ns(this.saturation+e,0,100),this.syncValues()),"ArrowUp"===t.key&&(t.preventDefault(),this.brightness=ns(this.brightness+e,0,100),this.syncValues()),"ArrowDown"===t.key&&(t.preventDefault(),this.brightness=ns(this.brightness-e,0,100),this.syncValues()),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(t){const e=t.target,i=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==i&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if("Enter"===t.key){const t=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==t&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){const e=new $n(t);if(!e.isValid)return null;const i=e.toHsl(),s={h:i.h,s:100*i.s,l:100*i.l,a:i.a},o=e.toRgb(),r=e.toHexString(),n=e.toHex8String(),a=e.toHsv(),l={h:a.h,s:100*a.s,v:100*a.v,a:a.a};return{hsl:{h:s.h,s:s.s,l:s.l,string:this.setLetterCase(`hsl(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%)`)},hsla:{h:s.h,s:s.s,l:s.l,a:s.a,string:this.setLetterCase(`hsla(${Math.round(s.h)}, ${Math.round(s.s)}%, ${Math.round(s.l)}%, ${s.a.toFixed(2).toString()})`)},hsv:{h:l.h,s:l.s,v:l.v,string:this.setLetterCase(`hsv(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%)`)},hsva:{h:l.h,s:l.s,v:l.v,a:l.a,string:this.setLetterCase(`hsva(${Math.round(l.h)}, ${Math.round(l.s)}%, ${Math.round(l.v)}%, ${l.a.toFixed(2).toString()})`)},rgb:{r:o.r,g:o.g,b:o.b,string:this.setLetterCase(`rgb(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)})`)},rgba:{r:o.r,g:o.g,b:o.b,a:o.a,string:this.setLetterCase(`rgba(${Math.round(o.r)}, ${Math.round(o.g)}, ${Math.round(o.b)}, ${o.a.toFixed(2).toString()})`)},hex:this.setLetterCase(r),hexa:this.setLetterCase(n)}}setColor(t){const e=this.parseColor(t);return null!==e&&(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?100*e.hsva.a:100,this.syncValues(),!0)}setLetterCase(t){return"string"!=typeof t?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){const t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);null!==t&&("hsl"===this.format?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:"rgb"===this.format?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:"hsv"===this.format?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Cn)return;(new EyeDropper).open().then(t=>{const e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(t){const e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(t,e,i,s=100){const o=new $n(`hsva(${t}, ${e}%, ${i}%, ${s/100})`);return o.isValid?o.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const i=this.parseColor(e);null!==i?(this.inputValue=this.value,this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=100*i.hsva.a,this.syncValues()):this.inputValue=null!=t?t:""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){var t;const e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),(null==(t=this.dropdown)?void 0:t.open)&&this.dropdown.hide()}getFormattedValue(t="hex"){const e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(null===e)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.inline||this.validity.valid?this.input.reportValidity():(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1)}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.saturation,e=100-this.brightness,i=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(t=>""!==t.trim()),s=N`
      <div
        part="base"
        class=${ri({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?N`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${sn({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${ri({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${sn({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${di(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${sn({left:(0===this.hue?0:100/(360/this.hue))+"%"})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${di(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?N`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${sn({backgroundImage:`linear-gradient(\n                          to right,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,\n                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%\n                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${sn({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${di(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${sn({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":N`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${Cn?N`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${i.length>0?N`
              <div part="swatches" class="color-picker__swatches">
                ${i.map(t=>{const e=this.parseColor(t);return e?N`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${di(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${t}
                      @click=${()=>this.selectSwatch(t)}
                      @keydown=${t=>!this.disabled&&"Enter"===t.key&&this.setColor(e.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${sn({backgroundColor:e.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${t}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?s:N`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${ri({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":"small"===this.size,"color-dropdown__trigger--medium":"medium"===this.size,"color-dropdown__trigger--large":"large"===this.size,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${sn({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${s}
      </sl-dropdown>
    `}};Sn.styles=[De,Jr],Sn.dependencies={"sl-button-group":Jo,"sl-button":Qo,"sl-dropdown":mr,"sl-icon":Ye,"sl-input":ar,"sl-visually-hidden":Yr},ce([Ne('[part~="base"]')],Sn.prototype,"base",2),ce([Ne('[part~="input"]')],Sn.prototype,"input",2),ce([Ne(".color-dropdown")],Sn.prototype,"dropdown",2),ce([Ne('[part~="preview"]')],Sn.prototype,"previewButton",2),ce([Ne('[part~="trigger"]')],Sn.prototype,"trigger",2),ce([Ve()],Sn.prototype,"hasFocus",2),ce([Ve()],Sn.prototype,"isDraggingGridHandle",2),ce([Ve()],Sn.prototype,"isEmpty",2),ce([Ve()],Sn.prototype,"inputValue",2),ce([Ve()],Sn.prototype,"hue",2),ce([Ve()],Sn.prototype,"saturation",2),ce([Ve()],Sn.prototype,"brightness",2),ce([Ve()],Sn.prototype,"alpha",2),ce([Be()],Sn.prototype,"value",2),ce([Hi()],Sn.prototype,"defaultValue",2),ce([Be()],Sn.prototype,"label",2),ce([Be()],Sn.prototype,"format",2),ce([Be({type:Boolean,reflect:!0})],Sn.prototype,"inline",2),ce([Be({reflect:!0})],Sn.prototype,"size",2),ce([Be({attribute:"no-format-toggle",type:Boolean})],Sn.prototype,"noFormatToggle",2),ce([Be()],Sn.prototype,"name",2),ce([Be({type:Boolean,reflect:!0})],Sn.prototype,"disabled",2),ce([Be({type:Boolean})],Sn.prototype,"hoist",2),ce([Be({type:Boolean})],Sn.prototype,"opacity",2),ce([Be({type:Boolean})],Sn.prototype,"uppercase",2),ce([Be()],Sn.prototype,"swatches",2),ce([Be({reflect:!0})],Sn.prototype,"form",2),ce([Be({type:Boolean,reflect:!0})],Sn.prototype,"required",2),ce([He({passive:!1})],Sn.prototype,"handleTouchMove",1),ce([Oe("format",{waitUntilFirstUpdate:!0})],Sn.prototype,"handleFormatChange",1),ce([Oe("opacity",{waitUntilFirstUpdate:!0})],Sn.prototype,"handleOpacityChange",1),ce([Oe("value")],Sn.prototype,"handleValueChange",1),Sn.define("sl-color-picker"),Re("far",{resolver:t=>`assets/icons/fa/regular/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")}),Re("fas",{resolver:t=>`assets/icons/fa/solid/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")}),Re("fab",{resolver:t=>`assets/icons/fa/brands/${t}.svg`,mutator:t=>t.setAttribute("fill","currentColor")});
/**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
const An=si(class extends oi{constructor(){super(...arguments),this.key=q}render(t,e){return this.key=t,e}update(t,[e,i]){return e!==this.key&&(Ke(t),this.key=e),i}});var zn,En,Tn,Ln,Pn,Rn,In,On;class Dn{constructor(t,e,i=3e3){zn.set(this,void 0),En.set(this,void 0),Tn.set(this,0),Ln.set(this,null),Pn.set(this,void 0),ht(this,zn,t,"f"),ht(this,En,e,"f"),ht(this,Pn,i,"f"),t.addController(this)}get value(){return ct(this,En,"f")[ct(this,Tn,"f")]}hostConnected(){ht(this,Ln,setInterval(()=>{ht(this,Tn,(ct(this,Tn,"f")+1)%ct(this,En,"f").length,"f"),ct(this,zn,"f").requestUpdate()},ct(this,Pn,"f")),"f")}hostDisconnected(){null!==ct(this,Ln,"f")&&clearInterval(ct(this,Ln,"f")),ht(this,Ln,null,"f")}}zn=new WeakMap,En=new WeakMap,Tn=new WeakMap,Ln=new WeakMap,Pn=new WeakMap;class Mn extends lt{constructor(){super(...arguments),this.theme="light",this.noBars=!1}connectedCallback(){super.connectedCallback(),this.theme=Zt()}setTheme(t){this.theme=t,(t=>{localStorage.setItem("theme",t)})(t)}updated(t){t.has("theme")&&Gt(this.theme)}render(){return N`
            <div class="rl-split font-sans">
                <div class="rl-flank rl-gap-l rl-padding-l">
                    ${this.noBars?"":N`
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
        `}}Mn.properties={theme:{type:String,state:!0},noBars:{type:Boolean,attribute:"no-bars"}},customElements.define("docs-header",Mn);function Fn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}Rn=new WeakMap,In=new WeakMap,On=new WeakMap,customElements.define("docs-index",class extends lt{constructor(){super(...arguments),Rn.set(this,new Dn(this,["responsive","reusable","readable","refined","remarkable","resilient"],3e3)),In.set(this,[{name:"Stack",iconLibrary:"fas",iconName:"bars",iconSize:"1.5rem",link:"#/content/layouts/stack"},{name:"Cluster",iconLibrary:"fas",iconName:"ellipsis",iconSize:"1.75rem",link:"#/content/layouts/cluster"},{name:"Flank",iconLibrary:"fas",iconName:"list-ul",iconSize:"1.5rem",link:"#/content/layouts/flank"},{name:"Split",iconLibrary:"fas",iconName:"pause",iconSize:"1.25rem",link:"#/content/layouts/split"},{name:"Grid",iconLibrary:"fas",iconName:"grip",iconSize:"1.5rem",link:"#/content/layouts/grid"},{name:"Frame",iconLibrary:"fas",iconName:"expand",iconSize:"1.5rem",link:"#/content/layouts/frame"},{name:"Align",iconLibrary:"fas",iconName:"up-down",iconSize:"1.25rem",link:"#/content/mods/align"},{name:"Justify",iconLibrary:"fas",iconName:"left-right",iconSize:"1.25rem",link:"#/content/mods/justify"},{name:"Gap",iconLibrary:"fas",iconName:"arrows-left-right-to-line",iconSize:"1.5rem",link:"#/content/mods/gap"},{name:"Padding",iconLibrary:"fas",iconName:"border-none",iconSize:"1.5rem",link:"#/content/mods/padding"},{name:"Wrapping",iconLibrary:"fas",iconName:"chart-bar",iconSize:"1.25rem",link:"#/content/mods/wrapping"},{name:"Divider",iconLibrary:"fas",iconName:"divide",iconSize:"1.5rem",link:"#/content/layouts/divider"},{name:"Border",iconLibrary:"far",iconName:"square",iconSize:"1.5rem",link:"#/content/mods/border"},{name:"Radius",iconLibrary:"fas",iconName:"border-top-left",iconSize:"1.5rem",link:"#/content/mods/radius"},{name:"Width",iconLibrary:"fas",iconName:"arrows-left-right",iconSize:"1.5rem",link:"#/content/mods/width"},{name:"Height",iconLibrary:"fas",iconName:"arrows-up-down",iconSize:"1.25rem",link:"#/content/mods/height"}]),On.set(this,[{name:"Minimalist",description:"Handles structure, spacing and boundaries, not colors, typography, or styling"},{name:"Easy to integrate",description:"Simple patterns work with any project, design system, library or framework"},{name:"Open source",description:"Available for use in both personal and commercial projects at no cost"},{name:"Flexible",description:"Works as CSS utility classes, web components, or both"}])}connectedCallback(){super.connectedCallback(),document.title="Relayout"}render(){return N`
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
                                    <span class="word-slot">${An(ct(this,Rn,"f").value,N`<span class="word-highlight">${ct(this,Rn,"f").value}</span>`)}</span>
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
                    <div class="rl-stack rl-padding-xl rl-gap-xl" style="background: var(--rl-color-bg);">
                        <div class="rl-stack rl-align-center rl-width-l">
                            <strong class="text-xl">Explore the patterns</strong>
                        </div>
                        <div class="rl-stack rl-width-l gap-xl">
                            <div class="rl-cluster rl-justify-center rl-gap-l pattern-cluster" style="font-size: 0.875rem;">
                                ${ct(this,In,"f").map(t=>N`
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
                            ${ct(this,On,"f").map(t=>N`
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
        `}});var Bn={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};function Vn(t){Bn=t}var Hn={exec:()=>null};function Nn(t,e=""){let i="string"==typeof t?t:t.source,s={replace:(t,e)=>{let o="string"==typeof e?e:e.source;return o=o.replace(Un.caret,"$1"),i=i.replace(t,o),s},getRegex:()=>new RegExp(i,e)};return s}var Un={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},qn=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Wn=/(?:[*+-]|\d{1,9}[.)])/,jn=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kn=Nn(jn).replace(/bull/g,Wn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Gn=Nn(jn).replace(/bull/g,Wn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Zn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Qn=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Xn=Nn(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Yn=Nn(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Wn).getRegex(),Jn="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ta=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ea=Nn("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",ta).replace("tag",Jn).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ia=Nn(Zn).replace("hr",qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jn).getRegex(),sa={blockquote:Nn(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ia).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:Xn,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:qn,html:ea,lheading:Kn,list:Yn,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:ia,table:Hn,text:/^[^\n]+/},oa=Nn("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jn).getRegex(),ra={...sa,lheading:Gn,table:oa,paragraph:Nn(Zn).replace("hr",qn).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",oa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Jn).getRegex()},na={...sa,html:Nn("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",ta).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Hn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Nn(Zn).replace("hr",qn).replace("heading"," *#{1,6} *[^\n]").replace("lheading",Kn).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},aa=/^( {2,}|\\)\n(?!\s*$)/,la=/[\p{P}\p{S}]/u,ca=/[\s\p{P}\p{S}]/u,ha=/[^\s\p{P}\p{S}]/u,da=Nn(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ca).getRegex(),ua=/(?!~)[\p{P}\p{S}]/u,pa=Nn(/link|code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<!`)(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("code",/(?<!`)(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ga=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,fa=Nn(ga,"u").replace(/punct/g,la).getRegex(),ba=Nn(ga,"u").replace(/punct/g,ua).getRegex(),ma="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",va=Nn(ma,"gu").replace(/notPunctSpace/g,ha).replace(/punctSpace/g,ca).replace(/punct/g,la).getRegex(),ya=Nn(ma,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,ua).getRegex(),wa=Nn("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ha).replace(/punctSpace/g,ca).replace(/punct/g,la).getRegex(),ka=Nn(/\\(punct)/,"gu").replace(/punct/g,la).getRegex(),xa=Nn(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_a=Nn(ta).replace("(?:--\x3e|$)","--\x3e").getRegex(),$a=Nn("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_a).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ca=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/,Sa=Nn(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Ca).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Aa=Nn(/^!?\[(label)\]\[(ref)\]/).replace("label",Ca).replace("ref",Qn).getRegex(),za=Nn(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qn).getRegex(),Ea=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ta={_backpedal:Hn,anyPunctuation:ka,autolink:xa,blockSkip:pa,br:aa,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:Hn,emStrongLDelim:fa,emStrongRDelimAst:va,emStrongRDelimUnd:wa,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:Sa,nolink:za,punctuation:da,reflink:Aa,reflinkSearch:Nn("reflink|nolink(?!\\()","g").replace("reflink",Aa).replace("nolink",za).getRegex(),tag:$a,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:Hn},La={...Ta,link:Nn(/^!?\[(label)\]\((.*?)\)/).replace("label",Ca).getRegex(),reflink:Nn(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ca).getRegex()},Pa={...Ta,emStrongRDelimAst:ya,emStrongLDelim:ba,url:Nn(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Ea).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Nn(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Ea).getRegex()},Ra={...Pa,br:Nn(aa).replace("{2,}","*").getRegex(),text:Nn(Pa.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ia={normal:sa,gfm:ra,pedantic:na},Oa={normal:Ta,gfm:Pa,breaks:Ra,pedantic:La},Da={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ma=t=>Da[t];function Fa(t,e){if(e){if(Un.escapeTest.test(t))return t.replace(Un.escapeReplace,Ma)}else if(Un.escapeTestNoEncode.test(t))return t.replace(Un.escapeReplaceNoEncode,Ma);return t}function Ba(t){try{t=encodeURI(t).replace(Un.percentDecode,"%")}catch{return null}return t}function Va(t,e){let i=t.replace(Un.findPipe,(t,e,i)=>{let s=!1,o=e;for(;--o>=0&&"\\"===i[o];)s=!s;return s?"|":" |"}),s=i.split(Un.splitPipe),o=0;if(s[0].trim()||s.shift(),s.length>0&&!s.at(-1)?.trim()&&s.pop(),e)if(s.length>e)s.splice(e);else for(;s.length<e;)s.push("");for(;o<s.length;o++)s[o]=s[o].trim().replace(Un.slashPipe,"|");return s}function Ha(t,e,i){let s=t.length;if(0===s)return"";let o=0;for(;o<s;){if(t.charAt(s-o-1)!==e)break;o++}return t.slice(0,s-o)}function Na(t,e,i,s,o){let r=e.href,n=e.title||null,a=t[1].replace(o.other.outputLinkReplace,"$1");s.state.inLink=!0;let l={type:"!"===t[0].charAt(0)?"image":"link",raw:i,href:r,title:n,text:a,tokens:s.inlineTokens(a)};return s.state.inLink=!1,l}var Ua=class{options;rules;lexer;constructor(t){this.options=t||Bn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let t=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:Ha(t,"\n")}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let t=e[0],i=function(t,e,i){let s=t.match(i.other.indentCodeCompensation);if(null===s)return e;let o=s[1];return e.split("\n").map(t=>{let e=t.match(i.other.beginningSpace);if(null===e)return t;let[s]=e;return s.length>=o.length?t.slice(o.length):t}).join("\n")}(t,e[3]||"",this.rules);return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:i}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let t=e[2].trim();if(this.rules.other.endingHash.test(t)){let e=Ha(t,"#");(this.options.pedantic||!e||this.rules.other.endingSpaceChar.test(e))&&(t=e.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Ha(e[0],"\n")}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let t=Ha(e[0],"\n").split("\n"),i="",s="",o=[];for(;t.length>0;){let e,r=!1,n=[];for(e=0;e<t.length;e++)if(this.rules.other.blockquoteStart.test(t[e]))n.push(t[e]),r=!0;else{if(r)break;n.push(t[e])}t=t.slice(e);let a=n.join("\n"),l=a.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");i=i?`${i}\n${a}`:a,s=s?`${s}\n${l}`:l;let c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(l,o,!0),this.lexer.state.top=c,0===t.length)break;let h=o.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){let e=h,r=e.raw+"\n"+t.join("\n"),n=this.blockquote(r);o[o.length-1]=n,i=i.substring(0,i.length-e.raw.length)+n.raw,s=s.substring(0,s.length-e.text.length)+n.text;break}if("list"===h?.type){let e=h,r=e.raw+"\n"+t.join("\n"),n=this.list(r);o[o.length-1]=n,i=i.substring(0,i.length-h.raw.length)+n.raw,s=s.substring(0,s.length-e.raw.length)+n.raw,t=r.substring(o.at(-1).raw.length).split("\n");continue}}return{type:"blockquote",raw:i,tokens:o,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let i=e[1].trim(),s=i.length>1,o={type:"list",raw:"",ordered:s,start:s?+i.slice(0,-1):"",loose:!1,items:[]};i=s?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=s?i:"[*+-]");let r=this.rules.other.listItemRegex(i),n=!1;for(;t;){let i=!1,s="",a="";if(!(e=r.exec(t))||this.rules.block.hr.test(t))break;s=e[0],t=t.substring(s.length);let l=e[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,t=>" ".repeat(3*t.length)),c=t.split("\n",1)[0],h=!l.trim(),d=0;if(this.options.pedantic?(d=2,a=l.trimStart()):h?d=e[1].length+1:(d=e[2].search(this.rules.other.nonSpaceChar),d=d>4?1:d,a=l.slice(d),d+=e[1].length),h&&this.rules.other.blankLine.test(c)&&(s+=c+"\n",t=t.substring(c.length+1),i=!0),!i){let e=this.rules.other.nextBulletRegex(d),i=this.rules.other.hrRegex(d),o=this.rules.other.fencesBeginRegex(d),r=this.rules.other.headingBeginRegex(d),n=this.rules.other.htmlBeginRegex(d);for(;t;){let u,p=t.split("\n",1)[0];if(c=p,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),u=c):u=c.replace(this.rules.other.tabCharGlobal,"    "),o.test(c)||r.test(c)||n.test(c)||e.test(c)||i.test(c))break;if(u.search(this.rules.other.nonSpaceChar)>=d||!c.trim())a+="\n"+u.slice(d);else{if(h||l.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||o.test(l)||r.test(l)||i.test(l))break;a+="\n"+c}!h&&!c.trim()&&(h=!0),s+=p+"\n",t=t.substring(p.length+1),l=u.slice(d)}}o.loose||(n?o.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(n=!0));let u,p=null;this.options.gfm&&(p=this.rules.other.listIsTask.exec(a),p&&(u="[ ] "!==p[0],a=a.replace(this.rules.other.listReplaceTask,""))),o.items.push({type:"list_item",raw:s,task:!!p,checked:u,loose:!1,text:a,tokens:[]}),o.raw+=s}let a=o.items.at(-1);if(!a)return;a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd(),o.raw=o.raw.trimEnd();for(let t=0;t<o.items.length;t++)if(this.lexer.state.top=!1,o.items[t].tokens=this.lexer.blockTokens(o.items[t].text,[]),!o.loose){let e=o.items[t].tokens.filter(t=>"space"===t.type),i=e.length>0&&e.some(t=>this.rules.other.anyLine.test(t.raw));o.loose=i}if(o.loose)for(let t=0;t<o.items.length;t++)o.items[t].loose=!0;return o}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:"pre"===e[1]||"script"===e[1]||"style"===e[1],text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let t=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),i=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:s}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=Va(e[1]),s=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],r={type:"table",raw:e[0],header:[],align:[],rows:[]};if(i.length===s.length){for(let t of s)this.rules.other.tableAlignRight.test(t)?r.align.push("right"):this.rules.other.tableAlignCenter.test(t)?r.align.push("center"):this.rules.other.tableAlignLeft.test(t)?r.align.push("left"):r.align.push(null);for(let t=0;t<i.length;t++)r.header.push({text:i[t],tokens:this.lexer.inline(i[t]),header:!0,align:r.align[t]});for(let t of o)r.rows.push(Va(t,r.header.length).map((t,e)=>({text:t,tokens:this.lexer.inline(t),header:!1,align:r.align[e]})));return r}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let t="\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let t=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(t)){if(!this.rules.other.endAngleBracket.test(t))return;let e=Ha(t.slice(0,-1),"\\");if((t.length-e.length)%2==0)return}else{let t=function(t,e){if(-1===t.indexOf(e[1]))return-1;let i=0;for(let s=0;s<t.length;s++)if("\\"===t[s])s++;else if(t[s]===e[0])i++;else if(t[s]===e[1]&&(i--,i<0))return s;return i>0?-2:-1}(e[2],"()");if(-2===t)return;if(t>-1){let i=(0===e[0].indexOf("!")?5:4)+e[1].length+t;e[2]=e[2].substring(0,t),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){let t=this.rules.other.pedanticHrefTitle.exec(i);t&&(i=t[1],s=t[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(i=this.options.pedantic&&!this.rules.other.endAngleBracket.test(t)?i.slice(1):i.slice(1,-1)),Na(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let i;if((i=this.rules.inline.reflink.exec(t))||(i=this.rules.inline.nolink.exec(t))){let t=e[(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!t){let t=i[0].charAt(0);return{type:"text",raw:t,text:t}}return Na(i,t,i[0],this.lexer,this.rules)}}emStrong(t,e,i=""){let s=this.rules.inline.emStrongLDelim.exec(t);if(!(!s||s[3]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!s[1]&&!s[2]||!i||this.rules.inline.punctuation.exec(i))){let i,o,r=[...s[0]].length-1,n=r,a=0,l="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(l.lastIndex=0,e=e.slice(-1*t.length+r);null!=(s=l.exec(e));){if(i=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!i)continue;if(o=[...i].length,s[3]||s[4]){n+=o;continue}if((s[5]||s[6])&&r%3&&!((r+o)%3)){a+=o;continue}if(n-=o,n>0)continue;o=Math.min(o,o+n+a);let e=[...s[0]][0].length,l=t.slice(0,r+s.index+e+o);if(Math.min(r,o)%2){let t=l.slice(1,-1);return{type:"em",raw:l,text:t,tokens:this.lexer.inlineTokens(t)}}let c=l.slice(2,-2);return{type:"strong",raw:l,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let t=e[2].replace(this.rules.other.newLineCharGlobal," "),i=this.rules.other.nonSpaceChar.test(t),s=this.rules.other.startingSpaceChar.test(t)&&this.rules.other.endingSpaceChar.test(t);return i&&s&&(t=t.substring(1,t.length-1)),{type:"codespan",raw:e[0],text:t}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let t,i;return"@"===e[2]?(t=e[1],i="mailto:"+t):(t=e[1],i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let t,i;if("@"===e[2])t=e[0],i="mailto:"+t;else{let s;do{s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??""}while(s!==e[0]);t=e[0],i="www."===e[1]?"http://"+e[0]:e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let t=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:t}}}},qa=class t{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Bn,this.options.tokenizer=this.options.tokenizer||new Ua,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let e={other:Un,block:Ia.normal,inline:Oa.normal};this.options.pedantic?(e.block=Ia.pedantic,e.inline=Oa.pedantic):this.options.gfm&&(e.block=Ia.gfm,this.options.breaks?e.inline=Oa.breaks:e.inline=Oa.gfm),this.tokenizer.rules=e}static get rules(){return{block:Ia,inline:Oa}}static lex(e,i){return new t(i).lex(e)}static lexInline(e,i){return new t(i).inlineTokens(e)}lex(t){t=t.replace(Un.carriageReturn,"\n"),this.blockTokens(t,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let e=this.inlineQueue[t];this.inlineTokens(e.src,e.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,e=[],i=!1){for(this.options.pedantic&&(t=t.replace(Un.tabCharGlobal,"    ").replace(Un.spaceLine,""));t;){let s;if(this.options.extensions?.block?.some(i=>!!(s=i.call({lexer:this},t,e))&&(t=t.substring(s.raw.length),e.push(s),!0)))continue;if(s=this.tokenizer.space(t)){t=t.substring(s.raw.length);let i=e.at(-1);1===s.raw.length&&void 0!==i?i.raw+="\n":e.push(s);continue}if(s=this.tokenizer.code(t)){t=t.substring(s.raw.length);let i=e.at(-1);"paragraph"===i?.type||"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.text,this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(s=this.tokenizer.fences(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.heading(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.hr(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.blockquote(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.list(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.html(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.def(t)){t=t.substring(s.raw.length);let i=e.at(-1);"paragraph"===i?.type||"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.raw,this.inlineQueue.at(-1).src=i.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title},e.push(s));continue}if(s=this.tokenizer.table(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.lheading(t)){t=t.substring(s.raw.length),e.push(s);continue}let o=t;if(this.options.extensions?.startBlock){let e,i=1/0,s=t.slice(1);this.options.extensions.startBlock.forEach(t=>{e=t.call({lexer:this},s),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(o=t.substring(0,i+1))}if(this.state.top&&(s=this.tokenizer.paragraph(o))){let r=e.at(-1);i&&"paragraph"===r?.type?(r.raw+=(r.raw.endsWith("\n")?"":"\n")+s.raw,r.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):e.push(s),i=o.length!==t.length,t=t.substring(s.raw.length);continue}if(s=this.tokenizer.text(t)){t=t.substring(s.raw.length);let i=e.at(-1);"text"===i?.type?(i.raw+=(i.raw.endsWith("\n")?"":"\n")+s.raw,i.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):e.push(s);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return this.state.top=!0,e}inline(t,e=[]){return this.inlineQueue.push({src:t,tokens:e}),e}inlineTokens(t,e=[]){let i=t,s=null;if(this.tokens.links){let t=Object.keys(this.tokens.links);if(t.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(i));)t.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(i));)i=i.slice(0,s.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(i));)i=i.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);i=this.options.hooks?.emStrongMask?.call({lexer:this},i)??i;let o=!1,r="";for(;t;){let s;if(o||(r=""),o=!1,this.options.extensions?.inline?.some(i=>!!(s=i.call({lexer:this},t,e))&&(t=t.substring(s.raw.length),e.push(s),!0)))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);let i=e.at(-1);"text"===s.type&&"text"===i?.type?(i.raw+=s.raw,i.text+=s.text):e.push(s);continue}if(s=this.tokenizer.emStrong(t,i,r)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),e.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),e.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),e.push(s);continue}let n=t;if(this.options.extensions?.startInline){let e,i=1/0,s=t.slice(1);this.options.extensions.startInline.forEach(t=>{e=t.call({lexer:this},s),"number"==typeof e&&e>=0&&(i=Math.min(i,e))}),i<1/0&&i>=0&&(n=t.substring(0,i+1))}if(s=this.tokenizer.inlineText(n)){t=t.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(r=s.raw.slice(-1)),o=!0;let i=e.at(-1);"text"===i?.type?(i.raw+=s.raw,i.text+=s.text):e.push(s);continue}if(t){let e="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(e);break}throw new Error(e)}}return e}},Wa=class{options;parser;constructor(t){this.options=t||Bn}space(t){return""}code({text:t,lang:e,escaped:i}){let s=(e||"").match(Un.notSpaceStart)?.[0],o=t.replace(Un.endingNewline,"")+"\n";return s?'<pre><code class="language-'+Fa(s)+'">'+(i?o:Fa(o,!0))+"</code></pre>\n":"<pre><code>"+(i?o:Fa(o,!0))+"</code></pre>\n"}blockquote({tokens:t}){return`<blockquote>\n${this.parser.parse(t)}</blockquote>\n`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>\n`}hr(t){return"<hr>\n"}list(t){let e=t.ordered,i=t.start,s="";for(let e=0;e<t.items.length;e++){let i=t.items[e];s+=this.listitem(i)}let o=e?"ol":"ul";return"<"+o+(e&&1!==i?' start="'+i+'"':"")+">\n"+s+"</"+o+">\n"}listitem(t){let e="";if(t.task){let i=this.checkbox({checked:!!t.checked});t.loose?"paragraph"===t.tokens[0]?.type?(t.tokens[0].text=i+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&"text"===t.tokens[0].tokens[0].type&&(t.tokens[0].tokens[0].text=i+" "+Fa(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):e+=i+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>\n`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>\n`}table(t){let e="",i="";for(let e=0;e<t.header.length;e++)i+=this.tablecell(t.header[e]);e+=this.tablerow({text:i});let s="";for(let e=0;e<t.rows.length;e++){let o=t.rows[e];i="";for(let t=0;t<o.length;t++)i+=this.tablecell(o[t]);s+=this.tablerow({text:i})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+s+"</table>\n"}tablerow({text:t}){return`<tr>\n${t}</tr>\n`}tablecell(t){let e=this.parser.parseInline(t.tokens),i=t.header?"th":"td";return(t.align?`<${i} align="${t.align}">`:`<${i}>`)+e+`</${i}>\n`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Fa(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:i}){let s=this.parser.parseInline(i),o=Ba(t);if(null===o)return s;let r='<a href="'+(t=o)+'"';return e&&(r+=' title="'+Fa(e)+'"'),r+=">"+s+"</a>",r}image({href:t,title:e,text:i,tokens:s}){s&&(i=this.parser.parseInline(s,this.parser.textRenderer));let o=Ba(t);if(null===o)return Fa(i);let r=`<img src="${t=o}" alt="${i}"`;return e&&(r+=` title="${Fa(e)}"`),r+=">",r}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Fa(t.text)}},ja=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Ka=class t{options;renderer;textRenderer;constructor(t){this.options=t||Bn,this.options.renderer=this.options.renderer||new Wa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ja}static parse(e,i){return new t(i).parse(e)}static parseInline(e,i){return new t(i).parseInline(e)}parse(t,e=!0){let i="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let t=o,e=this.options.extensions.renderers[t.type].call({parser:this},t);if(!1!==e||!["space","hr","heading","code","table","blockquote","list","html","def","paragraph","text"].includes(t.type)){i+=e||"";continue}}let r=o;switch(r.type){case"space":i+=this.renderer.space(r);continue;case"hr":i+=this.renderer.hr(r);continue;case"heading":i+=this.renderer.heading(r);continue;case"code":i+=this.renderer.code(r);continue;case"table":i+=this.renderer.table(r);continue;case"blockquote":i+=this.renderer.blockquote(r);continue;case"list":i+=this.renderer.list(r);continue;case"html":i+=this.renderer.html(r);continue;case"def":i+=this.renderer.def(r);continue;case"paragraph":i+=this.renderer.paragraph(r);continue;case"text":{let o=r,n=this.renderer.text(o);for(;s+1<t.length&&"text"===t[s+1].type;)o=t[++s],n+="\n"+this.renderer.text(o);i+=e?this.renderer.paragraph({type:"paragraph",raw:n,text:n,tokens:[{type:"text",raw:n,text:n,escaped:!0}]}):n;continue}default:{let t='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return i}parseInline(t,e=this.renderer){let i="";for(let s=0;s<t.length;s++){let o=t[s];if(this.options.extensions?.renderers?.[o.type]){let t=this.options.extensions.renderers[o.type].call({parser:this},o);if(!1!==t||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){i+=t||"";continue}}let r=o;switch(r.type){case"escape":case"text":i+=e.text(r);break;case"html":i+=e.html(r);break;case"link":i+=e.link(r);break;case"image":i+=e.image(r);break;case"strong":i+=e.strong(r);break;case"em":i+=e.em(r);break;case"codespan":i+=e.codespan(r);break;case"br":i+=e.br(r);break;case"del":i+=e.del(r);break;default:{let t='Token with "'+r.type+'" type was not found.';if(this.options.silent)return console.error(t),"";throw new Error(t)}}}return i}},Ga=class{options;block;constructor(t){this.options=t||Bn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(){return this.block?qa.lex:qa.lexInline}provideParser(){return this.block?Ka.parse:Ka.parseInline}},Za=new class{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Ka;Renderer=Wa;TextRenderer=ja;Lexer=qa;Tokenizer=Ua;Hooks=Ga;constructor(...t){this.use(...t)}walkTokens(t,e){let i=[];for(let s of t)switch(i=i.concat(e.call(this,s)),s.type){case"table":{let t=s;for(let s of t.header)i=i.concat(this.walkTokens(s.tokens,e));for(let s of t.rows)for(let t of s)i=i.concat(this.walkTokens(t.tokens,e));break}case"list":{let t=s;i=i.concat(this.walkTokens(t.items,e));break}default:{let t=s;this.defaults.extensions?.childTokens?.[t.type]?this.defaults.extensions.childTokens[t.type].forEach(s=>{let o=t[s].flat(1/0);i=i.concat(this.walkTokens(o,e))}):t.tokens&&(i=i.concat(this.walkTokens(t.tokens,e)))}}return i}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(t=>{let i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(t=>{if(!t.name)throw new Error("extension name required");if("renderer"in t){let i=e.renderers[t.name];e.renderers[t.name]=i?function(...e){let s=t.renderer.apply(this,e);return!1===s&&(s=i.apply(this,e)),s}:t.renderer}if("tokenizer"in t){if(!t.level||"block"!==t.level&&"inline"!==t.level)throw new Error("extension level must be 'block' or 'inline'");let i=e[t.level];i?i.unshift(t.tokenizer):e[t.level]=[t.tokenizer],t.start&&("block"===t.level?e.startBlock?e.startBlock.push(t.start):e.startBlock=[t.start]:"inline"===t.level&&(e.startInline?e.startInline.push(t.start):e.startInline=[t.start]))}"childTokens"in t&&t.childTokens&&(e.childTokens[t.name]=t.childTokens)}),i.extensions=e),t.renderer){let e=this.defaults.renderer||new Wa(this.defaults);for(let i in t.renderer){if(!(i in e))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,o=t.renderer[s],r=e[s];e[s]=(...t)=>{let i=o.apply(e,t);return!1===i&&(i=r.apply(e,t)),i||""}}i.renderer=e}if(t.tokenizer){let e=this.defaults.tokenizer||new Ua(this.defaults);for(let i in t.tokenizer){if(!(i in e))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,o=t.tokenizer[s],r=e[s];e[s]=(...t)=>{let i=o.apply(e,t);return!1===i&&(i=r.apply(e,t)),i}}i.tokenizer=e}if(t.hooks){let e=this.defaults.hooks||new Ga;for(let i in t.hooks){if(!(i in e))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,o=t.hooks[s],r=e[s];Ga.passThroughHooks.has(i)?e[s]=t=>{if(this.defaults.async&&Ga.passThroughHooksRespectAsync.has(i))return(async()=>{let i=await o.call(e,t);return r.call(e,i)})();let s=o.call(e,t);return r.call(e,s)}:e[s]=(...t)=>{if(this.defaults.async)return(async()=>{let i=await o.apply(e,t);return!1===i&&(i=await r.apply(e,t)),i})();let i=o.apply(e,t);return!1===i&&(i=r.apply(e,t)),i}}i.hooks=e}if(t.walkTokens){let e=this.defaults.walkTokens,s=t.walkTokens;i.walkTokens=function(t){let i=[];return i.push(s.call(this,t)),e&&(i=i.concat(e.call(this,t))),i}}this.defaults={...this.defaults,...i}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return qa.lex(t,e??this.defaults)}parser(t,e){return Ka.parse(t,e??this.defaults)}parseMarkdown(t){return(e,i)=>{let s={...i},o={...this.defaults,...s},r=this.onError(!!o.silent,!!o.async);if(!0===this.defaults.async&&!1===s.async)return r(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||null===e)return r(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof e)return r(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let i=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer():t?qa.lex:qa.lexInline)(i,o),r=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(r,o.walkTokens));let n=await(o.hooks?await o.hooks.provideParser():t?Ka.parse:Ka.parseInline)(r,o);return o.hooks?await o.hooks.postprocess(n):n})().catch(r);try{o.hooks&&(e=o.hooks.preprocess(e));let i=(o.hooks?o.hooks.provideLexer():t?qa.lex:qa.lexInline)(e,o);o.hooks&&(i=o.hooks.processAllTokens(i)),o.walkTokens&&this.walkTokens(i,o.walkTokens);let s=(o.hooks?o.hooks.provideParser():t?Ka.parse:Ka.parseInline)(i,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(t){return r(t)}}}onError(t,e){return i=>{if(i.message+="\nPlease report this to https://github.com/markedjs/marked.",t){let t="<p>An error occurred:</p><pre>"+Fa(i.message+"",!0)+"</pre>";return e?Promise.resolve(t):t}if(e)return Promise.reject(i);throw i}}};function Qa(t,e){return Za.parse(t,e)}Qa.options=Qa.setOptions=function(t){return Za.setOptions(t),Qa.defaults=Za.defaults,Vn(Qa.defaults),Qa},Qa.getDefaults=Fn,Qa.defaults=Bn,Qa.use=function(...t){return Za.use(...t),Qa.defaults=Za.defaults,Vn(Qa.defaults),Qa},Qa.walkTokens=function(t,e){return Za.walkTokens(t,e)},Qa.parseInline=Za.parseInline,Qa.Parser=Ka,Qa.parser=Ka.parse,Qa.Renderer=Wa,Qa.TextRenderer=ja,Qa.Lexer=qa,Qa.lexer=qa.lex,Qa.Tokenizer=Ua,Qa.Hooks=Ga,Qa.parse=Qa,Qa.options,Qa.setOptions,Qa.use,Qa.walkTokens,Qa.parseInline,Ka.parse,qa.lex;customElements.define("docs-sidebar",class extends lt{render(){return N`
            <div class="rl-stack rl-padding-m rl-height-full" style="width: 13rem;">
                <div class="rl-stack">
                    <sl-tree
                        selection="leaf"
                        @sl-selection-change=${t=>{const e=t.detail.selection[0]?.getAttribute("path");if(e){jt.getInstance().navigate(e);const t=document.querySelector("sl-drawer.sidebar-drawer");t&&t.hide()}}}
                        >
                        <sl-tree-item expanded>
                            Getting Started
                            <sl-tree-item
                                path="/content/start/home"
                                ?selected=${jt.getInstance().isPath("/content/start/home")}
                                >Home</sl-tree-item>
                            <sl-tree-item
                                path="/content/start/install"
                                ?selected=${jt.getInstance().isPath("/content/start/install")}
                                >Installation</sl-tree-item>
                        </sl-tree-item>
                        <sl-tree-item expanded>
                            Layouts
                            <sl-tree-item
                                path="/content/layouts/stack"
                                ?selected=${jt.getInstance().isPath("/content/layouts/stack")}
                                >Stack</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/flank"
                                ?selected=${jt.getInstance().isPath("/content/layouts/flank")}
                                >Flank</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/split"
                                ?selected=${jt.getInstance().isPath("/content/layouts/split")}
                                >Split</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/cluster"
                                ?selected=${jt.getInstance().isPath("/content/layouts/cluster")}
                                >Cluster</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/grid"
                                ?selected=${jt.getInstance().isPath("/content/layouts/grid")}
                                >Grid</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/frame"
                                ?selected=${jt.getInstance().isPath("/content/layouts/frame")}
                                >Frame</sl-tree-item>
                            <sl-tree-item
                                path="/content/layouts/divider"
                                ?selected=${jt.getInstance().isPath("/content/layouts/divider")}
                                >Divider</sl-tree-item>
                        </sl-tree-item>
                        <sl-tree-item expanded>
                            Modifiers
                            <sl-tree-item
                                path="/content/mods/gap"
                                ?selected=${jt.getInstance().isPath("/content/mods/gap")}
                                >Gap</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/align"
                                ?selected=${jt.getInstance().isPath("/content/mods/align")}
                                >Align</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/justify"
                                ?selected=${jt.getInstance().isPath("/content/mods/justify")}
                                >Justify</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/padding"
                                ?selected=${jt.getInstance().isPath("/content/mods/padding")}
                                >Padding</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/wrapping"
                                ?selected=${jt.getInstance().isPath("/content/mods/wrapping")}
                                >Wrapping</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/border"
                                ?selected=${jt.getInstance().isPath("/content/mods/border")}
                                >Border</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/radius"
                                ?selected=${jt.getInstance().isPath("/content/mods/radius")}
                                >Radius</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/width"
                                ?selected=${jt.getInstance().isPath("/content/mods/width")}
                                >Width</sl-tree-item>
                            <sl-tree-item
                                path="/content/mods/height"
                                ?selected=${jt.getInstance().isPath("/content/mods/height")}
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
        `}});class Xa extends lt{constructor(){super(...arguments),this.code="",this.preview=!0,this.debug=!1,this.rows=3}render(){const t=`code-${Math.random().toString(36).substr(2,9)}`;return N`
            <div class="rl-stack rl-width-m rl-gap-l">
                <div class="rl-stack rl-gap-0">
                    ${this.preview?N`
                            <div class="rl-stack rl-padding-m">
                                <!-- <sl-split-panel position="100" vertical>
                                    <div slot="start" style="overflow-y: auto; overflow-x: hidden;"> -->
                                <sl-split-panel position="100" style="----min: 1rem;">
                                    <div slot="start" class="${this.debug?"rl-debug":""}">
                                        <div style="padding-right: 1rem;">
                                            ${ur(this.code)}
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
                            ${this.preview?N`
                                    <sl-button
                                        variant="text"
                                        @click=${()=>{const t=this.renderRoot.querySelector(".code-block"),e=this.renderRoot.querySelector("sl-copy-button"),i=this.renderRoot.querySelector("sl-icon"),s="none"===t.style.display;t.style.display=s?"block":"none",e.style.display=s?"inline-block":"none",i.name=s?"chevron-up":"chevron-down"}}
                                        >
                                        <sl-icon library="far" name="chevron-down" slot="prefix"></sl-icon>
                                        Source Code
                                    </sl-button>
                                    <sl-copy-button from="${t}" style="display: none;"></sl-copy-button>
                                `:N`
                                    <div></div>
                                    <sl-copy-button from="${t}"></sl-copy-button>
                                `}
                        </div>
                        ${this.preview?N`
                                <div class="rl-stack rl-padding-m code-block" style="display: none;">
                                    <textarea readonly rows="${this.rows}" id="${t}">${this.code}</textarea>
                                </div>
                            `:N`
                                <div class="rl-stack rl-padding-m code-block">
                                    <textarea readonly rows="${this.rows}" id="${t}">${this.code}</textarea>
                                </div>
                            `}
                    </div>
                </div>
            </div>
        `}}Xa.properties={code:{type:String},preview:{type:Boolean},debug:{type:Boolean},rows:{type:Number}},customElements.define("code-preview",Xa);class Ya extends lt{constructor(){super(...arguments),this.dir="",this.file="",this.parts=[]}handleDrawerRequestClose(t){t.target.hide()}async willUpdate(t){(t.has("dir")&&""!=this.dir||t.has("file")&&""!=this.file)&&await this.loadContent()}async loadContent(){if(!this.dir||!this.file)return;const t=this.file?this.file.charAt(0).toUpperCase()+this.file.slice(1):"";document.title=`Relayout - ${t}`;const e=await fetch(`content/${this.dir}/${this.file}.md`),i=await e.text();this.parts=i.split(/```/g).map(t=>t)}render(){return N`
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

        `}renderContent(){return N`
            <div class="rl-stack rl-gap-0 rl-padding-xl">
                <div class="rl-width-m">
                ${this.parts.map((t,e)=>{if(e%2==1){const e=t.split("\n"),i=e[0]||"",s=e.slice(1).join("\n"),o=i.split("|").map(t=>t.trim().toLowerCase());let r=o.includes("preview"),n=o.includes("debug"),a=e.slice(1).length;return a<3&&(a=3),a>10&&(a=10),N`
                            <div class="rl-stack rl-gap-l">
                                <div></div>
                                <code-preview
                                    .code=${s}
                                    .preview=${r}
                                    .debug=${n}
                                    .rows=${a}
                                ></code-preview>
                                <div></div>
                            </div>
                        `}return N`
                            ${ur(Qa.parse(t))}
                        `})}
                </div>
            </div>
        `}}Ya.properties={dir:{type:String},file:{type:String},parts:{type:Array,state:!0}},customElements.define("docs-content",Ya);class Ja extends lt{connectedCallback(){super.connectedCallback(),Gt(Zt())}initRouting(){jt.getInstance().register("#outlet",[{path:Kt,render:t=>N`
                        <docs-content
                            .dir=${t.data.dir}
                            .file=${t.data.file}
                        ></docs-content>
                    `},{path:"*",render:()=>N`
                        <docs-index></docs-index>
                    `}])}firstUpdated(){this.initRouting()}render(){return N`
            <div id="outlet" style="height: 100%;">
            </div>
        `}}customElements.define("relayout-docs",Ja),t.RelayoutDocs=Ja}({});
