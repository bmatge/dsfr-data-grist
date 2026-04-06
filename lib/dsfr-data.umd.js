(function(v,Yt){typeof exports=="object"&&typeof module<"u"?Yt(exports):typeof define=="function"&&define.amd?define(["exports"],Yt):(v=typeof globalThis<"u"?globalThis:v||self,Yt(v.DsfrData={}))})(this,(function(v){"use strict";var i_=Object.defineProperty;var s=(v,Yt)=>i_(v,"name",{value:Yt,configurable:!0});var Wl,Vl,Kl,Jl,Ci,xi,Di,Mi,Ai,Ti,Ei,ki,$i,Oi,Fi,zi,Ii,Ri,Bi,Ni,Ui,Zi,Gi,ji,qi,Hi,Wi,Vi,Ki,Ji;var Yt=typeof document<"u"?document.currentScript:null;function Qa(c,e){for(var i=0;i<e.length;i++){const n=e[i];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in c)){const a=Object.getOwnPropertyDescriptor(n,o);a&&Object.defineProperty(c,o,a.get?a:{enumerable:!0,get:s(()=>n[o],"get")})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}s(Qa,"_mergeNamespaces");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oc=!1,qr=globalThis,Wn=qr.ShadowRoot&&(qr.ShadyCSS===void 0||qr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vn=Symbol(),Xa=new WeakMap,ia=class ia{constructor(e,i,n){if(this._$cssResult$=!0,n!==Vn)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=i}get styleSheet(){let e=this._styleSheet;const i=this._strings;if(Wn&&e===void 0){const n=i!==void 0&&i.length===1;n&&(e=Xa.get(i)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Xa.set(i,e))}return e}toString(){return this.cssText}};s(ia,"CSSResult");let Hr=ia;const lc=s(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${c}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},"textFromCSSResult"),uc=s(c=>new Hr(typeof c=="string"?c:String(c),void 0,Vn),"unsafeCSS"),Kn=s((c,...e)=>{const i=c.length===1?c[0]:e.reduce((n,o,a)=>n+lc(o)+c[a+1],c[0]);return new Hr(i,c,Vn)},"css"),cc=s((c,e)=>{if(Wn)c.adoptedStyleSheets=e.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of e){const n=document.createElement("style"),o=qr.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=i.cssText,c.appendChild(n)}},"adoptStyles"),hc=s(c=>{let e="";for(const i of c.cssRules)e+=i.cssText;return uc(e)},"cssResultFromStyleSheet"),to=Wn||oc?c=>c:c=>c instanceof CSSStyleSheet?hc(c):c;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:dc,defineProperty:fc,getOwnPropertyDescriptor:eo,getOwnPropertyNames:pc,getOwnPropertySymbols:_c,getPrototypeOf:io}=Object,kt=globalThis;let ce;const ro=kt.trustedTypes,mc=ro?ro.emptyScript:"",Wr=kt.reactiveElementPolyfillSupportDevMode;kt.litIssuedWarnings??(kt.litIssuedWarnings=new Set),ce=s((c,e)=>{e+=` See https://lit.dev/msg/${c} for more information.`,!kt.litIssuedWarnings.has(e)&&!kt.litIssuedWarnings.has(c)&&(console.warn(e),kt.litIssuedWarnings.add(e))},"issueWarning$3"),queueMicrotask(()=>{var c;ce("dev-mode","Lit is in dev mode. Not recommended for production!"),(c=kt.ShadyDOM)!=null&&c.inUse&&Wr===void 0&&ce("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});const Jn=s(c=>{kt.emitLitDebugLogEvents&&kt.dispatchEvent(new CustomEvent("lit-debug",{detail:c}))},"debugLogEvent$1"),ci=s((c,e)=>c,"JSCompiler_renameProperty$1"),Vr={toAttribute(c,e){switch(e){case Boolean:c=c?mc:null;break;case Object:case Array:c=c==null?c:JSON.stringify(c);break}return c},fromAttribute(c,e){let i=c;switch(e){case Boolean:i=c!==null;break;case Number:i=c===null?null:Number(c);break;case Object:case Array:try{i=JSON.parse(c)}catch{i=null}break}return i}},Yn=s((c,e)=>!dc(c,e),"notEqual"),no={attribute:!0,type:String,converter:Vr,reflect:!1,useDefault:!1,hasChanged:Yn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),kt.litPropertyMetadata??(kt.litPropertyMetadata=new WeakMap);const ra=class ra extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??(this._initializers=[])).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,i=no){if(i.state&&(i.attribute=!1),this.__prepare(),this.prototype.hasOwnProperty(e)&&(i=Object.create(i),i.wrapped=!0),this.elementProperties.set(e,i),!i.noAccessor){const n=Symbol.for(`${String(e)} (@property() cache)`),o=this.getPropertyDescriptor(e,n,i);o!==void 0&&fc(this.prototype,e,o)}}static getPropertyDescriptor(e,i,n){const{get:o,set:a}=eo(this.prototype,e)??{get(){return this[i]},set(l){this[i]=l}};if(o==null){if("value"in(eo(this.prototype,e)??{}))throw new Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);ce("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:o,set(l){const h=o==null?void 0:o.call(this);a==null||a.call(this,l),this.requestUpdate(e,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??no}static __prepare(){if(this.hasOwnProperty(ci("elementProperties")))return;const e=io(this);e.finalize(),e._initializers!==void 0&&(this._initializers=[...e._initializers]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ci("finalized")))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(ci("properties"))){const i=this.properties,n=[...pc(i),..._c(i)];for(const o of n)this.createProperty(o,i[o])}const e=this[Symbol.metadata];if(e!==null){const i=litPropertyMetadata.get(e);if(i!==void 0)for(const[n,o]of i)this.elementProperties.set(n,o)}this.__attributeToPropertyMap=new Map;for(const[i,n]of this.elementProperties){const o=this.__attributeNameForProperty(i,n);o!==void 0&&this.__attributeToPropertyMap.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles),this.hasOwnProperty("createProperty")&&ce("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators"),this.hasOwnProperty("getPropertyDescriptor")&&ce("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)i.unshift(to(o))}else e!==void 0&&i.push(to(e));return i}static __attributeNameForProperty(e,i){const n=i.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){var e;this.__updatePromise=new Promise(i=>this.enableUpdating=i),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)==null||e.forEach(i=>i(this))}addController(e){var i;(this.__controllers??(this.__controllers=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)==null||i.call(e))}removeController(e){var i;(i=this.__controllers)==null||i.delete(e)}__saveInstanceProperties(){const e=new Map,i=this.constructor.elementProperties;for(const n of i.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this.__instanceProperties=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cc(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)==null||e.forEach(i=>{var n;return(n=i.hostConnected)==null?void 0:n.call(i)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)==null||e.forEach(i=>{var n;return(n=i.hostDisconnected)==null?void 0:n.call(i)})}attributeChangedCallback(e,i,n){this._$attributeToProperty(e,n)}__propertyToAttribute(e,i){var l;const o=this.constructor.elementProperties.get(e),a=this.constructor.__attributeNameForProperty(e,o);if(a!==void 0&&o.reflect===!0){const f=(((l=o.converter)==null?void 0:l.toAttribute)!==void 0?o.converter:Vr).toAttribute(i,o.type);this.constructor.enabledWarnings.includes("migration")&&f===void 0&&ce("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,f==null?this.removeAttribute(a):this.setAttribute(a,f),this.__reflectingProperty=null}}_$attributeToProperty(e,i){var a,l;const n=this.constructor,o=n.__attributeToPropertyMap.get(e);if(o!==void 0&&this.__reflectingProperty!==o){const h=n.getPropertyOptions(o),f=typeof h.converter=="function"?{fromAttribute:h.converter}:((a=h.converter)==null?void 0:a.fromAttribute)!==void 0?h.converter:Vr;this.__reflectingProperty=o;const _=f.fromAttribute(i,h.type);this[o]=_??((l=this.__defaultValues)==null?void 0:l.get(o))??_,this.__reflectingProperty=null}}requestUpdate(e,i,n,o=!1,a){var l;if(e!==void 0){e instanceof Event&&ce("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");const h=this.constructor;if(o===!1&&(a=this[e]),n??(n=h.getPropertyOptions(e)),(n.hasChanged??Yn)(a,i)||n.useDefault&&n.reflect&&a===((l=this.__defaultValues)==null?void 0:l.get(e))&&!this.hasAttribute(h.__attributeNameForProperty(e,n)))this._$changeProperty(e,i,n);else return}this.isUpdatePending===!1&&(this.__updatePromise=this.__enqueueUpdate())}_$changeProperty(e,i,{useDefault:n,reflect:o,wrapped:a},l){n&&!(this.__defaultValues??(this.__defaultValues=new Map)).has(e)&&(this.__defaultValues.set(e,l??i??this[e]),a!==!0||l!==void 0)||(this._$changedProperties.has(e)||(!this.hasUpdated&&!n&&(i=void 0),this._$changedProperties.set(e,i)),o===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties??(this.__reflectingProperties=new Set)).add(e))}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(i){Promise.reject(i)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){const e=this.performUpdate();return this.constructor.enabledWarnings.includes("async-perform-update")&&typeof(e==null?void 0:e.then)=="function"&&ce("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`),e}performUpdate(){var n;if(!this.isUpdatePending)return;if(Jn==null||Jn({kind:"update"}),!this.hasUpdated){this.renderRoot??(this.renderRoot=this.createRenderRoot());{const l=[...this.constructor.elementProperties.keys()].filter(h=>this.hasOwnProperty(h)&&h in io(this));if(l.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${l.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(const[a,l]of this.__instanceProperties)this[a]=l;this.__instanceProperties=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,l]of o){const{wrapped:h}=l,f=this[a];h===!0&&!this._$changedProperties.has(a)&&f!==void 0&&this._$changeProperty(a,void 0,l,f)}}let e=!1;const i=this._$changedProperties;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(n=this.__controllers)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(i)):this.__markUpdated()}catch(o){throw e=!1,this.__markUpdated(),o}e&&this._$didUpdate(i)}willUpdate(e){}_$didUpdate(e){var i;(i=this.__controllers)==null||i.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update")&&ce("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&(this.__reflectingProperties=this.__reflectingProperties.forEach(i=>this.__propertyToAttribute(i,this[i]))),this.__markUpdated()}updated(e){}firstUpdated(e){}};s(ra,"ReactiveElement");let he=ra;he.elementStyles=[],he.shadowRootOptions={mode:"open"},he[ci("elementProperties")]=new Map,he[ci("finalized")]=new Map,Wr==null||Wr({ReactiveElement:he});{he.enabledWarnings=["change-in-update","async-perform-update"];const c=s(function(e){e.hasOwnProperty(ci("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())},"ensureOwnWarnings");he.enableWarning=function(e){c(this),this.enabledWarnings.includes(e)||this.enabledWarnings.push(e)},he.disableWarning=function(e){c(this);const i=this.enabledWarnings.indexOf(e);i>=0&&this.enabledWarnings.splice(i,1)}}(kt.reactiveElementVersions??(kt.reactiveElementVersions=[])).push("2.1.2"),kt.reactiveElementVersions.length>1&&queueMicrotask(()=>{ce("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=globalThis,lt=s(c=>{Ft.emitLitDebugLogEvents&&Ft.dispatchEvent(new CustomEvent("lit-debug",{detail:c}))},"debugLogEvent");let gc=0,ar;Ft.litIssuedWarnings??(Ft.litIssuedWarnings=new Set),ar=s((c,e)=>{e+=c?` See https://lit.dev/msg/${c} for more information.`:"",!Ft.litIssuedWarnings.has(e)&&!Ft.litIssuedWarnings.has(c)&&(console.warn(e),Ft.litIssuedWarnings.add(e))},"issueWarning$2"),queueMicrotask(()=>{ar("dev-mode","Lit is in dev mode. Not recommended for production!")});const de=(Wl=Ft.ShadyDOM)!=null&&Wl.inUse&&((Vl=Ft.ShadyDOM)==null?void 0:Vl.noPatch)===!0?Ft.ShadyDOM.wrap:c=>c,Kr=Ft.trustedTypes,so=Kr?Kr.createPolicy("lit-html",{createHTML:s(c=>c,"createHTML")}):void 0,vc=s(c=>c,"identityFunction"),Jr=s((c,e,i)=>vc,"noopSanitizer"),yc=s(c=>{if(Qe!==Jr)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");Qe=c},"setSanitizer"),bc=s(()=>{Qe=Jr},"_testOnlyClearSanitizerFactoryDoNotCallOrElse"),Qn=s((c,e,i)=>Qe(c,e,i),"createSanitizer"),ao="$lit$",De=`lit$${Math.random().toFixed(9).slice(2)}$`,oo="?"+De,wc=`<${oo}>`,Ke=document,or=s(()=>Ke.createComment(""),"createMarker"),lr=s(c=>c===null||typeof c!="object"&&typeof c!="function","isPrimitive"),Xn=Array.isArray,Sc=s(c=>Xn(c)||typeof(c==null?void 0:c[Symbol.iterator])=="function","isIterable"),ts=`[ 	
\f\r]`,Pc=`[^ 	
\f\r"'\`<>=]`,Lc=`[^\\s"'>=/]`,ur=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lo=1,es=2,Cc=3,uo=/-->/g,co=/>/g,Je=new RegExp(`>|${ts}(?:(${Lc}+)(${ts}*=${ts}*(?:${Pc}|("|')|))|$)`,"g"),xc=0,ho=1,Dc=2,fo=3,is=/'/g,rs=/"/g,po=/^(?:script|style|textarea|title)$/i,Mc=1,Yr=2,ns=3,ss=1,Qr=2,Ac=3,Tc=4,Ec=5,as=6,kc=7,_o=s(c=>(e,...i)=>(e.some(n=>n===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),i.some(n=>n==null?void 0:n._$litStatic$)&&ar("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`),{_$litType$:c,strings:e,values:i}),"tag"),M=_o(Mc),mo=_o(Yr),hi=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),go=new WeakMap,Ye=Ke.createTreeWalker(Ke,129);let Qe=Jr;function vo(c,e){if(!Xn(c)||!c.hasOwnProperty("raw")){let i="invalid template strings array";throw i=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(i)}return so!==void 0?so.createHTML(e):e}s(vo,"trustFromTemplateString");const $c=s((c,e)=>{const i=c.length-1,n=[];let o=e===Yr?"<svg>":e===ns?"<math>":"",a,l=ur;for(let f=0;f<i;f++){const _=c[f];let g=-1,m,w=0,b;for(;w<_.length&&(l.lastIndex=w,b=l.exec(_),b!==null);)if(w=l.lastIndex,l===ur){if(b[lo]==="!--")l=uo;else if(b[lo]!==void 0)l=co;else if(b[es]!==void 0)po.test(b[es])&&(a=new RegExp(`</${b[es]}`,"g")),l=Je;else if(b[Cc]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else l===Je?b[xc]===">"?(l=a??ur,g=-1):b[ho]===void 0?g=-2:(g=l.lastIndex-b[Dc].length,m=b[ho],l=b[fo]===void 0?Je:b[fo]==='"'?rs:is):l===rs||l===is?l=Je:l===uo||l===co?l=ur:(l=Je,a=void 0);console.assert(g===-1||l===Je||l===is||l===rs,"unexpected parse state B");const S=l===Je&&c[f+1].startsWith("/>")?" ":"";o+=l===ur?_+wc:g>=0?(n.push(m),_.slice(0,g)+ao+_.slice(g)+De+S):_+De+(g===-2?f:S)}const h=o+(c[i]||"<?>")+(e===Yr?"</svg>":e===ns?"</math>":"");return[vo(c,h),n]},"getTemplateHtml"),xn=class xn{constructor({strings:e,["_$litType$"]:i},n){this.parts=[];let o,a=0,l=0;const h=e.length-1,f=this.parts,[_,g]=$c(e,i);if(this.el=xn.createElement(_,n),Ye.currentNode=this.el.content,i===Yr||i===ns){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=Ye.nextNode())!==null&&f.length<h;){if(o.nodeType===1){{const m=o.localName;if(/^(?:textarea|template)$/i.test(m)&&o.innerHTML.includes(De)){const w=`Expressions are not supported inside \`${m}\` elements. See https://lit.dev/msg/expression-in-${m} for more information.`;if(m==="template")throw new Error(w);ar("",w)}}if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith(ao)){const w=g[l++],S=o.getAttribute(m).split(De),x=/([.?@])?(.*)/.exec(w);f.push({type:ss,index:a,name:x[2],strings:S,ctor:x[1]==="."?ls:x[1]==="?"?us:x[1]==="@"?cs:fi}),o.removeAttribute(m)}else m.startsWith(De)&&(f.push({type:as,index:a}),o.removeAttribute(m));if(po.test(o.tagName)){const m=o.textContent.split(De),w=m.length-1;if(w>0){o.textContent=Kr?Kr.emptyScript:"";for(let b=0;b<w;b++)o.append(m[b],or()),Ye.nextNode(),f.push({type:Qr,index:++a});o.append(m[w],or())}}}else if(o.nodeType===8)if(o.data===oo)f.push({type:Qr,index:a});else{let w=-1;for(;(w=o.data.indexOf(De,w+1))!==-1;)f.push({type:kc,index:a}),w+=De.length-1}a++}if(g.length!==l)throw new Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");lt&&lt({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,i){const n=Ke.createElement("template");return n.innerHTML=e,n}};s(xn,"Template");let cr=xn;function di(c,e,i=c,n){var l,h;if(e===hi)return e;let o=n!==void 0?(l=i.__directives)==null?void 0:l[n]:i.__directive;const a=lr(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((h=o==null?void 0:o._$notifyDirectiveConnectionChanged)==null||h.call(o,!1),a===void 0?o=void 0:(o=new a(c),o._$initialize(c,i,n)),n!==void 0?(i.__directives??(i.__directives=[]))[n]=o:i.__directive=o),o!==void 0&&(e=di(c,o._$resolve(c,e.values),o,n)),e}s(di,"resolveDirective");const na=class na{constructor(e,i){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=i}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){const{el:{content:i},parts:n}=this._$template,o=((e==null?void 0:e.creationScope)??Ke).importNode(i,!0);Ye.currentNode=o;let a=Ye.nextNode(),l=0,h=0,f=n[0];for(;f!==void 0;){if(l===f.index){let _;f.type===Qr?_=new hr(a,a.nextSibling,this,e):f.type===ss?_=new f.ctor(a,f.name,f.strings,this,e):f.type===as&&(_=new hs(a,this,e)),this._$parts.push(_),f=n[++h]}l!==(f==null?void 0:f.index)&&(a=Ye.nextNode(),l++)}return Ye.currentNode=Ke,o}_update(e){let i=0;for(const n of this._$parts)n!==void 0&&(lt&&lt({kind:"set part",part:n,value:e[i],valueIndex:i,values:e,templateInstance:this}),n.strings!==void 0?(n._$setValue(e,n,i),i+=n.strings.length-2):n._$setValue(e[i])),i++}};s(na,"TemplateInstance");let os=na;const Dn=class Dn{get _$isConnected(){var e;return((e=this._$parent)==null?void 0:e._$isConnected)??this.__isConnected}constructor(e,i,n,o){this.type=Qr,this._$committedValue=R,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=i,this._$parent=n,this.options=o,this.__isConnected=(o==null?void 0:o.isConnected)??!0,this._textSanitizer=void 0}get parentNode(){let e=de(this._$startNode).parentNode;const i=this._$parent;return i!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=i.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,i=this){var n;if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=di(this,e,i),lr(e))e===R||e==null||e===""?(this._$committedValue!==R&&(lt&&lt({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=R):e!==this._$committedValue&&e!==hi&&this._commitText(e);else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(((n=this.options)==null?void 0:n.host)===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else Sc(e)?this._commitIterable(e):this._commitText(e)}_insert(e){return de(de(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){var i;if(this._$committedValue!==e){if(this._$clear(),Qe!==Jr){const n=(i=this._$startNode.parentNode)==null?void 0:i.nodeName;if(n==="STYLE"||n==="SCRIPT"){let o="Forbidden";throw n==="STYLE"?o="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":o="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(o)}}lt&&lt({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==R&&lr(this._$committedValue)){const i=de(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=Qn(i,"data","property")),e=this._textSanitizer(e),lt&&lt({kind:"commit text",node:i,value:e,options:this.options}),i.data=e}else{const i=Ke.createTextNode("");this._commitNode(i),this._textSanitizer===void 0&&(this._textSanitizer=Qn(i,"data","property")),e=this._textSanitizer(e),lt&&lt({kind:"commit text",node:i,value:e,options:this.options}),i.data=e}this._$committedValue=e}_commitTemplateResult(e){var a;const{values:i,["_$litType$"]:n}=e,o=typeof n=="number"?this._$getTemplate(e):(n.el===void 0&&(n.el=cr.createElement(vo(n.h,n.h[0]),this.options)),n);if(((a=this._$committedValue)==null?void 0:a._$template)===o)lt&&lt({kind:"template updating",template:o,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:i}),this._$committedValue._update(i);else{const l=new os(o,this),h=l._clone(this.options);lt&&lt({kind:"template instantiated",template:o,instance:l,parts:l._$parts,options:this.options,fragment:h,values:i}),l._update(i),lt&&lt({kind:"template instantiated and updated",template:o,instance:l,parts:l._$parts,options:this.options,fragment:h,values:i}),this._commitNode(h),this._$committedValue=l}}_$getTemplate(e){let i=go.get(e.strings);return i===void 0&&go.set(e.strings,i=new cr(e)),i}_commitIterable(e){Xn(this._$committedValue)||(this._$committedValue=[],this._$clear());const i=this._$committedValue;let n=0,o;for(const a of e)n===i.length?i.push(o=new Dn(this._insert(or()),this._insert(or()),this,this.options)):o=i[n],o._$setValue(a),n++;n<i.length&&(this._$clear(o&&de(o._$endNode).nextSibling,n),i.length=n)}_$clear(e=de(this._$startNode).nextSibling,i){var n;for((n=this._$notifyConnectionChanged)==null||n.call(this,!1,!0,i);e!==this._$endNode;){const o=de(e).nextSibling;de(e).remove(),e=o}}setConnected(e){var i;if(this._$parent===void 0)this.__isConnected=e,(i=this._$notifyConnectionChanged)==null||i.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}};s(Dn,"ChildPart");let hr=Dn;const sa=class sa{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,i,n,o,a){this.type=ss,this._$committedValue=R,this._$disconnectableChildren=void 0,this.element=e,this.name=i,this._$parent=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$committedValue=new Array(n.length-1).fill(new String),this.strings=n):this._$committedValue=R,this._sanitizer=void 0}_$setValue(e,i=this,n,o){const a=this.strings;let l=!1;if(a===void 0)e=di(this,e,i,0),l=!lr(e)||e!==this._$committedValue&&e!==hi,l&&(this._$committedValue=e);else{const h=e;e=a[0];let f,_;for(f=0;f<a.length-1;f++)_=di(this,h[n+f],i,f),_===hi&&(_=this._$committedValue[f]),l||(l=!lr(_)||_!==this._$committedValue[f]),_===R?e=R:e!==R&&(e+=(_??"")+a[f+1]),this._$committedValue[f]=_}l&&!o&&this._commitValue(e)}_commitValue(e){e===R?de(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=Qe(this.element,this.name,"attribute")),e=this._sanitizer(e??""),lt&&lt({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),de(this.element).setAttribute(this.name,e??""))}};s(sa,"AttributePart");let fi=sa;const aa=class aa extends fi{constructor(){super(...arguments),this.type=Ac}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=Qe(this.element,this.name,"property")),e=this._sanitizer(e),lt&&lt({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===R?void 0:e}};s(aa,"PropertyPart");let ls=aa;const oa=class oa extends fi{constructor(){super(...arguments),this.type=Tc}_commitValue(e){lt&&lt({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==R),options:this.options}),de(this.element).toggleAttribute(this.name,!!e&&e!==R)}};s(oa,"BooleanAttributePart");let us=oa;const la=class la extends fi{constructor(e,i,n,o,a){if(super(e,i,n,o,a),this.type=Ec,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${i}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,i=this){if(e=di(this,e,i,0)??R,e===hi)return;const n=this._$committedValue,o=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==R&&(n===R||o);lt&&lt({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:o,addListener:a,oldListener:n}),o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var i;typeof this._$committedValue=="function"?this._$committedValue.call(((i=this.options)==null?void 0:i.host)??this.element,e):this._$committedValue.handleEvent(e)}};s(la,"EventPart");let cs=la;const ua=class ua{constructor(e,i,n){this.element=e,this.type=as,this._$disconnectableChildren=void 0,this._$parent=i,this.options=n}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){lt&&lt({kind:"commit to element binding",element:this.element,value:e,options:this.options}),di(this,e)}};s(ua,"ElementPart");let hs=ua;const ds=Ft.litHtmlPolyfillSupportDevMode;ds==null||ds(cr,hr),(Ft.litHtmlVersions??(Ft.litHtmlVersions=[])).push("3.3.2"),Ft.litHtmlVersions.length>1&&queueMicrotask(()=>{ar("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});const Xr=s((c,e,i)=>{if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const n=gc++,o=(i==null?void 0:i.renderBefore)??e;let a=o._$litPart$;if(lt&&lt({kind:"begin render",id:n,value:c,container:e,options:i,part:a}),a===void 0){const l=(i==null?void 0:i.renderBefore)??null;o._$litPart$=a=new hr(e.insertBefore(or(),l),l,void 0,i??{})}return a._$setValue(c),lt&&lt({kind:"end render",id:n,value:c,container:e,options:i,part:a}),a},"render");Xr.setSanitizer=yc,Xr.createSanitizer=Qn,Xr._testOnlyClearSanitizerFactoryDoNotCallOrElse=bc;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oc=s((c,e)=>c,"JSCompiler_renameProperty"),Zt=globalThis;let yo;Zt.litIssuedWarnings??(Zt.litIssuedWarnings=new Set),yo=s((c,e)=>{e+=` See https://lit.dev/msg/${c} for more information.`,!Zt.litIssuedWarnings.has(e)&&!Zt.litIssuedWarnings.has(c)&&(console.warn(e),Zt.litIssuedWarnings.add(e))},"issueWarning$1");const ca=class ca extends he{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var i;const e=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=e.firstChild),e}update(e){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=Xr(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)==null||e.setConnected(!1)}render(){return hi}};s(ca,"LitElement");let ut=ca;ut._$litElement$=!0,ut[Oc("finalized")]=!0,(Kl=Zt.litElementHydrateSupport)==null||Kl.call(Zt,{LitElement:ut});const fs=Zt.litElementPolyfillSupportDevMode;fs==null||fs({LitElement:ut}),(Zt.litElementVersions??(Zt.litElementVersions=[])).push("4.2.2"),Zt.litElementVersions.length>1&&queueMicrotask(()=>{yo("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=s(c=>(e,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(c,e)}):customElements.define(c,e)},"customElement");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bo;globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set),bo=s((c,e)=>{e+=` See https://lit.dev/msg/${c} for more information.`,!globalThis.litIssuedWarnings.has(e)&&!globalThis.litIssuedWarnings.has(c)&&(console.warn(e),globalThis.litIssuedWarnings.add(e))},"issueWarning");const Fc=s((c,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,c),n?Object.getOwnPropertyDescriptor(e,i):void 0},"legacyProperty"),zc={attribute:!0,type:String,converter:Vr,reflect:!1,hasChanged:Yn},Ic=s((c=zc,e,i)=>{const{kind:n,metadata:o}=i;o==null&&bo("missing-class-metadata",`The class ${e} is missing decorator metadata. This could mean that you're using a compiler that supports decorators but doesn't support decorator metadata, such as TypeScript 5.1. Please update your compiler.`);let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),n==="setter"&&(c=Object.create(c),c.wrapped=!0),a.set(i.name,c),n==="accessor"){const{name:l}=i;return{set(h){const f=e.get.call(this);e.set.call(this,h),this.requestUpdate(l,f,c,!0,h)},init(h){return h!==void 0&&this._$changeProperty(l,void 0,c,h),h}}}else if(n==="setter"){const{name:l}=i;return function(h){const f=this[l];e.call(this,h),this.requestUpdate(l,f,c,!0,h)}}throw new Error(`Unsupported decorator location: ${n}`)},"standardProperty");function P(c){return(e,i)=>typeof i=="object"?Ic(c,e,i):Fc(c,e,i)}s(P,"property");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function F(c){return P({...c,state:!0,attribute:!1})}s(F,"state");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */globalThis.litIssuedWarnings??(globalThis.litIssuedWarnings=new Set);function W(c,e){if(!e||e.trim()==="")return c;const n=e.replace(/\[(\d+)\]/g,".$1").split(".");let o=c;for(const a of n){if(o==null||typeof o!="object")return;o=o[a]}return o}s(W,"getByPath");function Rc(c,e){return W(c,e)!==void 0}s(Rc,"hasPath");function wo(c,e,i){const o=e.replace(/\[(\d+)\]/g,".$1").split(".");let a=c;for(let l=0;l<o.length-1;l++){const h=o[l];(!(h in a)||typeof a[h]!="object"||a[h]===null)&&(a[h]={}),a=a[h]}a[o[o.length-1]]=i}s(wo,"setByPath");function Bc(c,e,i){const n=W(c,e);return n!==void 0?n:i}s(Bc,"getByPathOrDefault");function Gt(c){return c?String(c).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}s(Gt,"escapeHtml");function So(c,e=!1){if(typeof c=="number")return isNaN(c)?e?null:0:c;if(typeof c!="string")return e?null:0;let i=c.trim();if(i==="")return e?null:0;i=i.replace(/\s/g,"");const n=i.includes(","),o=i.includes(".");if(n&&o){const l=i.lastIndexOf(","),h=i.lastIndexOf(".");l>h?i=i.replace(/\./g,"").replace(",","."):i=i.replace(/,/g,"")}else n&&(i=i.replace(",","."));const a=parseFloat(i);return isNaN(a)?e?null:0:a}s(So,"toNumber");function Nc(c){if(typeof c!="string")return!1;const e=c.trim();return e===""?!1:/^-?[\d\s]+([.,]\d+)?$/.test(e)}s(Nc,"looksLikeNumber");function Uc(c){return!c||typeof c!="string"||["N/A","null","undefined","00",""].includes(c)?!1:!!(c==="2A"||c==="2B"||/^97[1-6]$/.test(c)||/^(0[1-9]|[1-8]\d|9[0-5])$/.test(c))}s(Uc,"isValidDeptCode");function Zc(c){return c.split(",").map(e=>{const i=e.trim(),n=i.indexOf("=");return n>0?{left:i.substring(0,n).trim(),right:i.substring(n+1).trim()}:{left:i,right:i}})}s(Zc,"parseJoinKeys");function Gc(c,e,i){const n=Zc(i.on),o=i.type??"left",a=i.prefixLeft??"",l=i.prefixRight??"right_",h=n.map(b=>b.left),f=n.map(b=>b.right),_=new Set([...h,...f]),g=jc(c[0]??null,e[0]??null,_),m=new Map;for(const b of e){const S=pi(b,f);m.has(S)||m.set(S,[]),m.get(S).push(b)}const w=[];if(o==="inner"||o==="left")for(const b of c){const S=pi(b,h),x=m.get(S);if(x)for(const T of x)w.push(Xe(b,T,n,g,a,l));else o==="left"&&w.push(Xe(b,null,n,g,a,l))}else if(o==="right"){const b=new Map;for(const S of c){const x=pi(S,h);b.has(x)||b.set(x,[]),b.get(x).push(S)}for(const S of e){const x=pi(S,f),T=b.get(x);if(T)for(const E of T)w.push(Xe(E,S,n,g,a,l));else w.push(Xe(null,S,n,g,a,l))}}else if(o==="full"){const b=new Set;for(const S of c){const x=pi(S,h),T=m.get(x);if(T){b.add(x);for(const E of T)w.push(Xe(S,E,n,g,a,l))}else w.push(Xe(S,null,n,g,a,l))}for(const S of e){const x=pi(S,f);b.has(x)||w.push(Xe(null,S,n,g,a,l))}}return w}s(Gc,"performJoin");function pi(c,e){return e.map(i=>String(c[i]??"")).join("|")}s(pi,"buildKey");function jc(c,e,i){if(!c||!e)return new Set;const n=new Set(Object.keys(c)),o=new Set;for(const a of Object.keys(e))n.has(a)&&!i.has(a)&&o.add(a);return o}s(jc,"detectCollisions");function Xe(c,e,i,n,o,a){const l={};if(c)for(const[f,_]of Object.entries(c)){const g=n.has(f)&&o?`${o}${f}`:f;l[g]=_}const h=new Set(i.map(f=>f.right));if(e)for(const[f,_]of Object.entries(e)){if(h.has(f)){const m=i.find(w=>w.right===f).left;c||(l[m]=_);continue}const g=n.has(f)?`${a}${f}`:f;l[g]=_}return l}s(Xe,"mergeRow");const Po={url:typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Yt&&Yt.tagName.toUpperCase()==="SCRIPT"&&Yt.src||new URL("dsfr-data.umd.js",document.baseURI).href},dr=((Jl=Po.env)==null?void 0:Jl.VITE_PROXY_URL)||"https://chartsbuilder.matge.com";function qc(){var e;const c=((e=Po.env)==null?void 0:e.VITE_LIB_URL)||"";return c?c==="unpkg"?"https://unpkg.com/dsfr-data/dist":c==="jsdelivr"?"https://cdn.jsdelivr.net/npm/dsfr-data/dist":c:`${dr}/dist`}s(qc,"resolveLibUrl"),qc();const Lo={baseUrl:dr,endpoints:{grist:"/grist-proxy",gristGouv:"/grist-gouv-proxy",albert:"/albert-proxy",tabular:"/tabular-proxy",insee:"/insee-proxy",corsProxy:"/cors-proxy"}};function Hc(){if(typeof window>"u")return!1;const{hostname:c,port:e}=window.location;return(c==="localhost"||c==="127.0.0.1")&&!!e&&e!=="80"&&e!=="443"}s(Hc,"isViteDevMode");function Wc(){return typeof window<"u"&&"__TAURI__"in window}s(Wc,"isTauriMode");function ps(){const c={...Lo.endpoints};return Hc()?{baseUrl:"",endpoints:c}:Wc()?{baseUrl:Lo.baseUrl,endpoints:c}:{baseUrl:dr,endpoints:c}}s(ps,"getProxyConfig");function jt(c){if(!c)throw new Error("getProxiedUrl: url is required");const e=ps();return c.includes("tabular-api.data.gouv.fr")?c.replace("https://tabular-api.data.gouv.fr",`${e.baseUrl}${e.endpoints.tabular}`):c.includes("docs.getgrist.com")?c.replace("https://docs.getgrist.com",`${e.baseUrl}${e.endpoints.grist}`):c.includes("grist.numerique.gouv.fr")?c.replace("https://grist.numerique.gouv.fr",`${e.baseUrl}${e.endpoints.gristGouv}`):c.includes("albert.api.etalab.gouv.fr")?c.replace("https://albert.api.etalab.gouv.fr",`${e.baseUrl}${e.endpoints.albert}`):c.includes("api.insee.fr")?c.replace("https://api.insee.fr",`${e.baseUrl}${e.endpoints.insee}`):c}s(jt,"getProxiedUrl");function Vc(c,e){const i=ps();return{url:`${i.baseUrl}${i.endpoints.corsProxy}`,headers:{...e||{},"X-Target-URL":c}}}s(Vc,"buildCorsProxyRequest");const tn={FAVORITES:"dsfr-data-favorites",DASHBOARDS:"dsfr-data-dashboards",CONNECTIONS:"dsfr-data-connections",SOURCES:"dsfr-data-sources"};function en(c,e){try{const i=localStorage.getItem(c);return i?JSON.parse(i):e}catch{return e}}s(en,"loadFromStorage");let Kc="idle",Jc=0;const Co=new Set;function Yc(c){Co.add(c);try{c(Kc,Jc)}catch{}return()=>{Co.delete(c)}}s(Yc,"onSyncStatusChange");const xo=/\/api\/explore\/v2\.1\/catalog\/datasets\/([^/]+)/,Do={id:"opendatasoft",displayName:"OpenDataSoft",urlPatterns:[xo],knownHosts:[],defaultBaseUrl:"https://data.opendatasoft.com",defaultAuthType:"apikey-header",response:{dataPath:"results",totalCountPath:"total_count",nestedDataKey:null,requiresFlatten:!1},pagination:{type:"offset",pageSize:100,maxPages:10,maxRecords:1e3,params:{offset:"offset",limit:"limit"},nextPagePath:null},capabilities:{serverFetch:!0,serverFacets:!0,serverSearch:!0,serverGroupBy:!0,serverOrderBy:!0,serverAggregation:!0},query:{whereFormat:"odsql",whereSeparator:" AND ",aggregationSyntax:"odsql-select",searchTemplate:'search("{q}")'},facets:{defaultMode:"server",endpoint:"/facets"},resource:{idFields:["datasetId"],apiPathTemplate:"/api/explore/v2.1/catalog/datasets/{datasetId}/records",extractIds:s(c=>{const e=c.match(xo);return e?{datasetId:e[1]}:null},"extractIds")},codeGen:{usesDsfrDataSource:!0,usesDsfrDataQuery:!0,usesDsfrDataNormalize:!1,sourceApiType:"opendatasoft",fieldPrefix:"",dependencies:{dsfr:!0,dsfrChart:!0,dsfrData:!0}}},Mo=/tabular-api\.data\.gouv\.fr\/api\/resources\/([^/]+)/,Ao={id:"tabular",displayName:"Tabular (data.gouv.fr)",urlPatterns:[Mo],knownHosts:[{hostname:"tabular-api.data.gouv.fr",proxyEndpoint:"/tabular-proxy"}],defaultBaseUrl:"https://tabular-api.data.gouv.fr",defaultAuthType:"none",response:{dataPath:"data",totalCountPath:"meta.total",nestedDataKey:null,requiresFlatten:!1},pagination:{type:"page",pageSize:50,maxPages:500,maxRecords:25e3,params:{page:"page",pageSize:"page_size"},nextPagePath:"next",serverMeta:{pagePath:"meta.page",pageSizePath:"meta.page_size",totalPath:"meta.total"}},capabilities:{serverFetch:!0,serverFacets:!1,serverSearch:!1,serverGroupBy:!0,serverOrderBy:!0,serverAggregation:!0},query:{whereFormat:"colon",whereSeparator:", ",aggregationSyntax:"colon-attr",searchTemplate:null,operatorMapping:{eq:"exact",neq:"differs",gt:"strictly_greater",gte:"greater",lt:"strictly_less",lte:"less",contains:"contains",notcontains:"notcontains",in:"in",notin:"notin",isnull:"isnull",isnotnull:"isnotnull"}},facets:{defaultMode:"static"},resource:{idFields:["resourceId"],apiPathTemplate:"/api/resources/{resourceId}/data/",extractIds:s(c=>{const e=c.match(Mo);return e?{resourceId:e[1]}:null},"extractIds")},codeGen:{usesDsfrDataSource:!0,usesDsfrDataQuery:!0,usesDsfrDataNormalize:!1,sourceApiType:"tabular",fieldPrefix:"",dependencies:{dsfr:!0,dsfrChart:!0,dsfrData:!0}}},To=/\/api\/docs\/([^/]+)\/tables\/([^/]+)/,Eo={id:"grist",displayName:"Grist",urlPatterns:[To],knownHosts:[{hostname:"grist.numerique.gouv.fr",proxyEndpoint:"/grist-gouv-proxy"},{hostname:"docs.getgrist.com",proxyEndpoint:"/grist-proxy"}],defaultBaseUrl:"https://grist.numerique.gouv.fr",defaultAuthType:"bearer",response:{dataPath:"records",totalCountPath:null,nestedDataKey:"fields",requiresFlatten:!0},pagination:{type:"offset",pageSize:100,maxPages:0,maxRecords:0,params:{offset:"offset",limit:"limit"},nextPagePath:null},capabilities:{serverFetch:!0,serverFacets:!0,serverSearch:!1,serverGroupBy:!0,serverOrderBy:!0,serverAggregation:!0},query:{whereFormat:"colon",whereSeparator:", ",aggregationSyntax:"sql",searchTemplate:null},facets:{defaultMode:"server"},resource:{idFields:["documentId","tableId"],apiPathTemplate:"/api/docs/{documentId}/tables/{tableId}/records",extractIds:s(c=>{const e=c.match(To);return e?{documentId:e[1],tableId:e[2]}:null},"extractIds")},codeGen:{usesDsfrDataSource:!0,usesDsfrDataQuery:!0,usesDsfrDataNormalize:!1,sourceApiType:"grist",fieldPrefix:"",dependencies:{dsfr:!0,dsfrChart:!0,dsfrData:!0}}},ko={id:"generic",displayName:"Generic REST",urlPatterns:[],knownHosts:[],defaultBaseUrl:"",defaultAuthType:"none",response:{dataPath:"",totalCountPath:null,nestedDataKey:null,requiresFlatten:!1},pagination:{type:"none",pageSize:0,maxPages:0,maxRecords:0,params:{},nextPagePath:null},capabilities:{serverFetch:!1,serverFacets:!1,serverSearch:!1,serverGroupBy:!1,serverOrderBy:!1,serverAggregation:!1},query:{whereFormat:"colon",whereSeparator:", ",aggregationSyntax:"client-only",searchTemplate:null},facets:{defaultMode:"client"},resource:{idFields:[],apiPathTemplate:"",extractIds:s(()=>null,"extractIds")},codeGen:{usesDsfrDataSource:!0,usesDsfrDataQuery:!0,usesDsfrDataNormalize:!1,sourceApiType:"generic",fieldPrefix:"",dependencies:{dsfr:!0,dsfrChart:!0,dsfrData:!0}}},$o=/melodi\/data\/([^?/]+)/,Oo={id:"insee",displayName:"INSEE (Melodi)",urlPatterns:[$o],knownHosts:[],defaultBaseUrl:"https://api.insee.fr/melodi",defaultAuthType:"none",response:{dataPath:"observations",totalCountPath:"paging.count",nestedDataKey:null,requiresFlatten:!0},pagination:{type:"page",pageSize:1e3,maxPages:100,maxRecords:1e5,params:{page:"page",pageSize:"maxResult"},nextPagePath:"paging.next",serverMeta:{pagePath:"",pageSizePath:"",totalPath:"paging.count"}},capabilities:{serverFetch:!0,serverFacets:!1,serverSearch:!1,serverGroupBy:!1,serverOrderBy:!1,serverAggregation:!1},query:{whereFormat:"colon",whereSeparator:", ",aggregationSyntax:"client-only",searchTemplate:null},facets:{defaultMode:"client"},resource:{idFields:["datasetId"],apiPathTemplate:"/data/{datasetId}",extractIds:s(c=>{const e=c.match($o);return e?{datasetId:e[1]}:null},"extractIds")},codeGen:{usesDsfrDataSource:!0,usesDsfrDataQuery:!0,usesDsfrDataNormalize:!1,sourceApiType:"insee",fieldPrefix:"",dependencies:{dsfr:!0,dsfrChart:!0,dsfrData:!0}}},Qc=new Map;function fr(c){Qc.set(c.id,c)}s(fr,"registerProvider"),fr(Do),fr(Ao),fr(Eo),fr(Oo),fr(ko);let _i={...{user:null,isAuthenticated:!1,isLoading:!0}},mi=null,pr=null,Fo="";const _s=new Set;function Xc(){for(const c of _s)try{c(_i)}catch{}}s(Xc,"notify");function Ue(c){_i={..._i,...c},Xc()}s(Ue,"setState");async function Ze(c,e){return fetch(`${Fo}${c}`,{...e,credentials:"include",headers:{"Content-Type":"application/json",...e==null?void 0:e.headers}})}s(Ze,"apiFetch");async function zo(){if(mi!==null)return mi;try{const c=await fetch(`${Fo}/api/auth/me`,{credentials:"include"});mi=c.status===200||c.status===401}catch{mi=!1}return mi&&typeof window<"u"&&(window.__gwDbMode=!0),mi}s(zo,"isDbMode");async function th(){return pr||(pr=eh(),pr)}s(th,"checkAuth");async function eh(){try{if(!await zo())return Ue({user:null,isAuthenticated:!1,isLoading:!1}),_i;const e=await Ze("/api/auth/me");if(e.ok){const i=await e.json();Ue({user:i.user,isAuthenticated:!0,isLoading:!1})}else Ue({user:null,isAuthenticated:!1,isLoading:!1})}catch{pr=null,Ue({user:null,isAuthenticated:!1,isLoading:!1})}return _i}s(eh,"_doCheckAuth");async function ih(c){try{const e=await Ze("/api/auth/login",{method:"POST",body:JSON.stringify(c)});if(!e.ok)return{success:!1,error:(await e.json()).error||"Login failed"};const i=await e.json();return Ue({user:i.user,isAuthenticated:!0,isLoading:!1}),await Io(),{success:!0}}catch{return{success:!1,error:"Network error"}}}s(ih,"login");async function rh(c){try{const e=await Ze("/api/auth/register",{method:"POST",body:JSON.stringify(c)});if(!e.ok)return{success:!1,error:(await e.json()).error||"Registration failed"};const i=await e.json();return Ue({user:i.user,isAuthenticated:!0,isLoading:!1}),await Io(),{success:!0}}catch{return{success:!1,error:"Network error"}}}s(rh,"register");async function nh(c,e){try{const i=await Ze("/api/auth/me",{method:"PUT",body:JSON.stringify({currentPassword:c,password:e})});return i.ok?{success:!0}:{success:!1,error:(await i.json()).error||"Erreur lors du changement de mot de passe"}}catch{return{success:!1,error:"Erreur reseau"}}}s(nh,"changePassword");async function sh(c){try{return{success:!0,message:(await(await Ze("/api/auth/forgot-password",{method:"POST",body:JSON.stringify({email:c})})).json()).message}}catch{return{success:!0,message:"Si un compte existe avec cet email, un lien de reinitialisation a ete envoye"}}}s(sh,"forgotPassword");async function ah(c,e){try{const i=await Ze("/api/auth/reset-password",{method:"POST",body:JSON.stringify({token:c,password:e})});if(!i.ok)return{success:!1,error:(await i.json()).error||"Erreur lors de la reinitialisation"};const n=await i.json();return Ue({user:n.user,isAuthenticated:!0,isLoading:!1}),{success:!0}}catch{return{success:!1,error:"Erreur reseau"}}}s(ah,"resetPassword");async function oh(){try{await Ze("/api/auth/logout",{method:"POST"})}catch{}Ue({user:null,isAuthenticated:!1,isLoading:!1})}s(oh,"logout");function lh(c){return _s.add(c),()=>{_s.delete(c)}}s(lh,"onAuthChange");function rn(){return _i.isAuthenticated}s(rn,"isAuthenticated");const ms="gw-migrated";async function Io(){if(localStorage.getItem(ms))return;const c=en(tn.SOURCES,[]),e=en(tn.CONNECTIONS,[]),i=en(tn.FAVORITES,[]),n=en(tn.DASHBOARDS,[]);if(!(c.length>0||e.length>0||i.length>0||n.length>0)){localStorage.setItem(ms,"1");return}try{(await Ze("/api/migrate",{method:"POST",body:JSON.stringify({sources:c,connections:e,favorites:i,dashboards:n})})).ok&&(localStorage.setItem(ms,"1"),console.info("[auth] localStorage data migrated to server"))}catch{console.warn("[auth] Migration failed, will retry on next login")}}s(Io,"autoMigrateIfNeeded"),Array.from({length:20},(c,e)=>{const i=2005+e;return{annee:String(i),emissions_co2:Math.round(450-e*8+Math.sin(e*.7)*15),temperature:+(13.2+e*.06+Math.sin(e*.5)*.3).toFixed(1),budget:Math.round(280+e*12+Math.cos(e*.4)*20)}});const Ro=`${dr}/beacon`,Bo=new Set,gi=[];function uh(c){try{const e=new URL(c);return e.origin+e.pathname}catch{return c}}s(uh,"sanitizeUrl");function It(c,e){const i=`${c}:${e||""}`;if(Bo.has(i)||(Bo.add(i),typeof window>"u"))return;const n=window.location.protocol;if(n!=="http:"&&n!=="https:")return;const o=window.location.hostname;if(o==="localhost"||o==="127.0.0.1"||o===new URL(dr).hostname)return;const a=uh(window.location.href),l=new URLSearchParams;if(l.set("c",c),e&&l.set("t",e),l.set("r",a),typeof window<"u"&&window.__gwDbMode===!0)try{fetch("/api/monitoring/beacon",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({component:c,chartType:e||null,pageUrl:a})}).catch(()=>{const _=new Image;gi.push(_),_.onload=_.onerror=()=>{const g=gi.indexOf(_);g>=0&&gi.splice(g,1)},_.src=`${Ro}?${l.toString()}`});return}catch{}const f=`${Ro}?${l.toString()}`;try{const _=new Image;gi.push(_),_.onload=_.onerror=()=>{const g=gi.indexOf(_);g>=0&&gi.splice(g,1)},_.src=f}catch{}}s(It,"sendWidgetBeacon");const ha=class ha{constructor(){this.type="generic",this.capabilities={serverFetch:!1,serverFacets:!1,serverSearch:!1,serverGroupBy:!1,serverOrderBy:!1,serverGeo:!1,whereFormat:"odsql"}}validate(e){return null}fetchAll(){throw new Error("GenericAdapter ne supporte pas le fetch serveur")}fetchPage(){throw new Error("GenericAdapter ne supporte pas le mode server-side")}buildUrl(){throw new Error("GenericAdapter ne construit pas d'URL API")}buildServerSideUrl(){throw new Error("GenericAdapter ne supporte pas le mode server-side")}getDefaultSearchTemplate(){return null}getProviderConfig(){return ko}buildFacetWhere(e,i){const n=[];for(const[o,a]of Object.entries(e))o===i||a.size===0||(a.size===1?n.push(`${o}:eq:${[...a][0]}`):n.push(`${o}:in:${[...a].join("|")}`));return n.join(", ")}};s(ha,"GenericAdapter");let gs=ha;function vs(c,e){const i={};return e&&(i.signal=e),c.headers&&Object.keys(c.headers).length>0&&(i.headers=c.headers),i}s(vs,"buildFetchOptions$3");const nn=100,ys=10,da=class da{constructor(){this.type="opendatasoft",this.capabilities={serverFetch:!0,serverFacets:!0,serverSearch:!0,serverGroupBy:!0,serverOrderBy:!0,serverGeo:!0,whereFormat:"odsql"}}validate(e){return e.datasetId?null:'attribut "dataset-id" requis pour les requetes OpenDataSoft'}async fetchAll(e,i){const o=e.limit<=0?ys*nn:e.limit,a=nn;let l=[],h=0,f=-1;for(let _=0;_<ys;_++){const g=o-l.length;if(g<=0)break;const m=jt(this.buildUrl(e,Math.min(a,g),h)),w=await fetch(m,vs(e,i));if(!w.ok)throw new Error(`HTTP ${w.status}: ${w.statusText}`);const b=await w.json(),S=b.results||[];if(l=l.concat(S),typeof b.total_count=="number"&&(f=b.total_count),f>=0&&l.length>=f||S.length<a)break;h+=S.length}return f>=0&&l.length<f&&l.length<o&&console.warn(`dsfr-data-query: pagination incomplete - ${l.length}/${f} resultats recuperes (limite de securite: ${ys} pages de ${nn})`),{data:l,totalCount:f>=0?f:l.length,needsClientProcessing:!1}}async fetchPage(e,i,n){const o=jt(this.buildServerSideUrl(e,i)),a=await fetch(o,vs(e,n));if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const l=await a.json(),h=l.results||[],f=typeof l.total_count=="number"?l.total_count:0;return{data:h,totalCount:f,needsClientProcessing:!1,rawJson:l}}buildUrl(e,i,n){const o=e.baseUrl||"https://data.opendatasoft.com",a=new URL(`${o}/api/explore/v2.1/catalog/datasets/${e.datasetId}/records`);e.select?a.searchParams.set("select",e.select):e.aggregate&&e.groupBy&&a.searchParams.set("select",this._buildSelectFromAggregate(e));const l=e.where||e.filter;if(l&&a.searchParams.set("where",l),e.groupBy&&a.searchParams.set("group_by",e.groupBy),e.orderBy){const h=e.orderBy.replace(/:(\w+)$/,(f,_)=>` ${_.toUpperCase()}`);a.searchParams.set("order_by",h)}return i!==void 0?a.searchParams.set("limit",String(i)):e.limit>0&&a.searchParams.set("limit",String(Math.min(e.limit,nn))),n&&n>0&&a.searchParams.set("offset",String(n)),a.toString()}buildServerSideUrl(e,i){const n=e.baseUrl||"https://data.opendatasoft.com",o=new URL(`${n}/api/explore/v2.1/catalog/datasets/${e.datasetId}/records`);e.select?o.searchParams.set("select",e.select):e.aggregate&&e.groupBy&&o.searchParams.set("select",this._buildSelectFromAggregate(e)),i.effectiveWhere&&o.searchParams.set("where",i.effectiveWhere),e.groupBy&&o.searchParams.set("group_by",e.groupBy);const a=i.orderBy;if(a){const h=a.replace(/:(\w+)$/,(f,_)=>` ${_.toUpperCase()}`);o.searchParams.set("order_by",h)}o.searchParams.set("limit",String(e.pageSize));const l=(i.page-1)*e.pageSize;return l>0&&o.searchParams.set("offset",String(l)),o.toString()}async fetchFacets(e,i,n,o){const a=e.baseUrl||"https://data.opendatasoft.com",l=new URL(`${a}/api/explore/v2.1/catalog/datasets/${e.datasetId}/facets`);for(const g of i)l.searchParams.append("facet",g);n&&l.searchParams.set("where",n);const h=await fetch(jt(l.toString()),vs(e,o));if(!h.ok)throw new Error(`HTTP ${h.status}: ${h.statusText}`);const f=await h.json(),_=[];for(const g of f.facets||[])_.push({field:g.name,values:(g.facets||[]).map(m=>({value:m.value,count:m.count}))});return _}getDefaultSearchTemplate(){return'search("{q}")'}getProviderConfig(){return Do}buildFacetWhere(e,i){const n=[];for(const[o,a]of Object.entries(e))if(!(o===i||a.size===0))if(a.size===1){const l=[...a][0].replace(/"/g,'\\"');n.push(`${o} = "${l}"`)}else{const l=[...a].map(h=>`"${h.replace(/"/g,'\\"')}"`).join(", ");n.push(`${o} IN (${l})`)}return n.join(" AND ")}parseAggregates(e){if(!e)return[];const i=[],n=e.split(",").map(o=>o.trim()).filter(Boolean);for(const o of n){const a=o.split(":");a.length>=2&&i.push({field:a[0],function:a[1],alias:a[2]})}return i}_buildSelectFromAggregate(e){const i=this.parseAggregates(e.aggregate),n=[];for(const a of i){const l=a.function==="count"?"count(*)":`${a.function}(${a.field})`,h=a.alias||`${a.field}__${a.function}`;n.push(`${l} as ${h}`)}const o=e.groupBy.split(",").map(a=>a.trim()).filter(Boolean);for(const a of o)n.push(a);return n.join(", ")}};s(da,"OpenDataSoftAdapter");let bs=da;function No(c,e){const i={};return e&&(i.signal=e),c.headers&&Object.keys(c.headers).length>0&&(i.headers=c.headers),i}s(No,"buildFetchOptions$2");const sn=50,ws=500,fa=class fa{constructor(){this.type="tabular",this.capabilities={serverFetch:!0,serverFacets:!1,serverSearch:!1,serverGroupBy:!0,serverOrderBy:!0,serverGeo:!1,whereFormat:"colon"}}validate(e){return e.resource?null:'attribut "resource" requis pour les requetes Tabular'}async fetchAll(e,i){var _;const n=e.limit<=0,o=n?ws*sn:e.limit;let a=[],l=-1,h=1;for(let g=0;g<ws&&!(o-a.length<=0);g++){const w=this.buildUrl(e,sn,h),b=await fetch(w,No(e,i));if(!b.ok)throw new Error(`HTTP ${b.status}: ${b.statusText}`);const S=await b.json(),x=S.data||[];a=a.concat(x),S.meta&&typeof S.meta.total=="number"&&(l=S.meta.total);let T=!1;if((_=S.links)!=null&&_.next)try{const E=new URL(S.links.next,"https://tabular-api.data.gouv.fr"),O=Number(E.searchParams.get("page"));O>0&&(h=O,T=!0)}catch{}if(!T||l>=0&&a.length>=l||x.length<sn)break}!n&&a.length>o&&(a=a.slice(0,o)),l>=0&&a.length<l&&a.length<o&&console.warn(`dsfr-data-query: pagination incomplete - ${a.length}/${l} resultats recuperes (limite de securite: ${ws} pages de ${sn})`);const f=!!(e.groupBy||e.aggregate);return{data:a,totalCount:l>=0?l:a.length,needsClientProcessing:!f}}async fetchPage(e,i,n){var _;const o=this.buildServerSideUrl(e,i),a=await fetch(o,No(e,n));if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const l=await a.json(),h=l.data||[],f=((_=l.meta)==null?void 0:_.total)??0;return{data:h,totalCount:f,needsClientProcessing:!1,rawJson:l}}buildUrl(e,i,n){const o=this._getBaseUrl(e),a=typeof window<"u"&&window.location.origin!=="null"?window.location.origin:void 0,l=new URL(`${o}/api/resources/${e.resource}/data/`,a),h=e.filter||e.where;if(h&&this._applyColonFilters(l,h),e.groupBy){const f=e.groupBy.split(",").map(_=>_.trim());for(const _ of f)l.searchParams.append(`${_}__groupby`,"")}if(e.aggregate){const f=e.aggregate.split(",").map(_=>_.trim());for(const _ of f){const g=_.split(":");if(g.length>=2){const m=g[0],w=g[1];l.searchParams.append(`${m}__${w}`,"")}}}if(e.orderBy){const f=e.orderBy.split(":"),_=f[0],g=f[1]||"asc";l.searchParams.set(`${_}__sort`,g)}return i?l.searchParams.set("page_size",String(i)):e.limit>0&&l.searchParams.set("page_size",String(e.limit)),n&&l.searchParams.set("page",String(n)),l.toString()}buildServerSideUrl(e,i){const n=this._getBaseUrl(e),o=typeof window<"u"&&window.location.origin!=="null"?window.location.origin:void 0,a=new URL(`${n}/api/resources/${e.resource}/data/`,o),l=i.effectiveWhere||e.filter||e.where;l&&this._applyColonFilters(a,l);const h=i.orderBy;if(h){const f=h.split(":"),_=f[0],g=f[1]||"asc";a.searchParams.set(`${_}__sort`,g)}return a.searchParams.set("page_size",String(e.pageSize)),a.searchParams.set("page",String(i.page)),a.toString()}_applyColonFilters(e,i){const n=i.split(",").map(o=>o.trim());for(const o of n){const a=o.split(":");if(a.length>=3){const l=a[0],h=this._mapOperator(a[1]),f=a.slice(2).join(":");e.searchParams.set(`${l}__${h}`,f)}}}_mapOperator(e){return{eq:"exact",neq:"differs",gt:"strictly_greater",gte:"greater",lt:"strictly_less",lte:"less",contains:"contains",notcontains:"notcontains",in:"in",notin:"notin",isnull:"isnull",isnotnull:"isnotnull"}[e]||e}getDefaultSearchTemplate(){return null}getProviderConfig(){return Ao}buildFacetWhere(e,i){const n=[];for(const[o,a]of Object.entries(e))o===i||a.size===0||(a.size===1?n.push(`${o}:eq:${[...a][0]}`):n.push(`${o}:in:${[...a].join("|")}`));return n.join(", ")}_getBaseUrl(e){if(e.baseUrl)return e.baseUrl;const i=ps();return`${i.baseUrl}${i.endpoints.tabular}`}};s(fa,"TabularAdapter");let Ss=fa;function _r(c,e){const i={};return e&&(i.signal=e),c.headers&&Object.keys(c.headers).length>0&&(i.headers=c.headers),i}s(_r,"buildFetchOptions$1");const pa=class pa{constructor(){this.type="grist",this.capabilities={serverFetch:!0,serverFacets:!0,serverSearch:!1,serverGroupBy:!0,serverOrderBy:!0,serverGeo:!1,whereFormat:"colon"},this._sqlAvailableByHost=new Map}validate(e){return e.baseUrl?null:'attribut "base-url" requis pour les requetes Grist'}async fetchAll(e,i){if(this._needsSqlMode(e)&&await this._checkSqlAvailability(e))return this._fetchSql(e,void 0,i);const n=jt(this.buildUrl(e)),o=await fetch(n,_r(e,i));if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);const a=await o.json(),l=this._flattenRecords(a.records||[]);return{data:l,totalCount:l.length,needsClientProcessing:!e.where&&!e.orderBy}}async fetchPage(e,i,n){if(this._needsSqlMode(e,i)&&await this._checkSqlAvailability(e))return this._fetchSql(e,i,n);const o=jt(this.buildServerSideUrl(e,i)),a=await fetch(o,_r(e,n));if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const l=await a.json(),h=this._flattenRecords(l.records||[]),f=e.pageSize||h.length,_=h.length<f;return{data:h,totalCount:_?((i.page||1)-1)*f+h.length:-1,needsClientProcessing:!1}}buildUrl(e){const i=new URL(e.baseUrl);if(e.where){const n=this._colonWhereToGristFilter(e.where);n&&i.searchParams.set("filter",JSON.stringify(n))}return e.orderBy&&i.searchParams.set("sort",this._orderByToGristSort(e.orderBy)),e.limit&&i.searchParams.set("limit",String(e.limit)),i.toString()}buildServerSideUrl(e,i){const n=new URL(e.baseUrl),o=i.effectiveWhere||e.where;if(o){const l=this._colonWhereToGristFilter(o);l&&n.searchParams.set("filter",JSON.stringify(l))}const a=i.orderBy||e.orderBy;return a&&n.searchParams.set("sort",this._orderByToGristSort(a)),i.page&&e.pageSize&&(n.searchParams.set("limit",String(e.pageSize)),n.searchParams.set("offset",String((i.page-1)*e.pageSize))),n.toString()}async fetchFacets(e,i,n,o){const a=[],l=e;if(!await this._checkSqlAvailability(l))return a;for(const h of i){const f=this._getTableId(l),_=this._escapeIdentifier(h),g=[];let m=`SELECT ${_}, COUNT(*) as cnt FROM ${this._escapeIdentifier(f)}`;n&&(m+=` WHERE ${this._colonWhereToSql(n,g)}`),m+=` GROUP BY ${_} ORDER BY cnt DESC LIMIT 200`;const w=jt(this._getSqlEndpointUrl(l));try{const b=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json",...e.headers||{}},body:JSON.stringify({sql:m,args:g,timeout:500}),signal:o});if(!b.ok)continue;const x=(await b.json()).records||[];a.push({field:h,values:x.map(T=>({value:String(T[0]??""),count:Number(T[1])||0})).filter(T=>T.value!=="")})}catch{continue}}return a}getDefaultSearchTemplate(){return null}getProviderConfig(){return Eo}buildFacetWhere(e,i){const n=[];for(const[o,a]of Object.entries(e))o===i||a.size===0||(a.size===1?n.push(`${o}:eq:${[...a][0]}`):n.push(`${o}:in:${[...a].join("|")}`));return n.join(", ")}parseAggregates(e){return e.split(",").map(i=>{const[n,o,a]=i.trim().split(":");return{field:n,function:o,alias:a||`${o}_${n}`}})}async fetchColumns(e,i){const n=jt(e.baseUrl.replace(/\/records.*$/,"/columns"));try{const o=await fetch(n,_r(e,i));return o.ok?((await o.json()).columns||[]).map(l=>{const h=l.fields;return{id:l.id,label:(h==null?void 0:h.label)||l.id,type:(h==null?void 0:h.type)||"Any",isFormula:(h==null?void 0:h.isFormula)||!1,formula:(h==null?void 0:h.formula)||""}}):[]}catch{return[]}}async fetchTables(e,i){const n=jt(e.baseUrl.replace(/\/tables\/[^/]+\/records.*$/,"/tables"));try{const o=await fetch(n,_r(e,i));return o.ok?((await o.json()).tables||[]).map(l=>({id:l.id})):[]}catch{return[]}}_colonWhereToGristFilter(e){const i={},n=e.split(",").map(o=>o.trim()).filter(Boolean);for(const o of n){const[a,l,...h]=o.split(":"),f=h.join(":");l==="eq"?i[a]=[f]:l==="in"&&(i[a]=f.split("|"))}return Object.keys(i).length>0?i:null}_orderByToGristSort(e){return e.split(",").map(i=>{const[n,o]=i.trim().split(":");return o==="desc"?`-${n}`:n}).join(",")}_flattenRecords(e){return e.map(i=>{const n=i,o=n.fields;return o?{...o}:n})}_needsSqlMode(e,i){if(e.groupBy||e.aggregate)return!0;const n=this._mergeWhere(e.where,i==null?void 0:i.effectiveWhere);return!!(n&&this._hasAdvancedOperators(n))}_hasAdvancedOperators(e){const i=["gt","gte","lt","lte","contains","notcontains","neq","isnull","isnotnull","notin"];return e.split(",").some(n=>{const o=n.trim().split(":");return o.length>=2&&i.includes(o[1])})}_mergeWhere(e,i){return i&&e?`${e}, ${i}`:i||e||""}async _fetchSql(e,i,n){const o=this._getTableId(e),{select:a,groupBy:l,where:h,orderBy:f,limit:_,offset:g,args:m}=this._buildSqlQuery(e,i,o),w=[`SELECT ${a}`,`FROM ${this._escapeIdentifier(o)}`,h?`WHERE ${h}`:"",l?`GROUP BY ${l}`:"",f?`ORDER BY ${f}`:"",_?`LIMIT ${_}`:"",g?`OFFSET ${g}`:""].filter(Boolean).join(" "),b=jt(this._getSqlEndpointUrl(e)),S=await fetch(b,{method:"POST",headers:{"Content-Type":"application/json",...e.headers||{}},body:JSON.stringify({sql:w,args:m,timeout:800}),signal:n});if(!S.ok){if(S.status===404||S.status===403)return console.warn("[dsfr-data] Grist SQL endpoint not available, falling back to client-side processing"),this._sqlAvailableByHost.set(this._extractHostname(e.baseUrl),!1),this._fetchAllRecords(e,n);throw new Error(`Grist SQL HTTP ${S.status}: ${S.statusText}`)}const x=await S.json(),T=this._sqlResultToObjects(x);return{data:T,totalCount:T.length,needsClientProcessing:!1}}async _fetchAllRecords(e,i){const n=jt(this.buildUrl(e)),o=await fetch(n,_r(e,i));if(!o.ok)throw new Error(`HTTP ${o.status}: ${o.statusText}`);const a=await o.json(),l=this._flattenRecords(a.records||[]);return{data:l,totalCount:l.length,needsClientProcessing:!0}}_buildSqlQuery(e,i,n){const o=[];let a="*",l="",h="",f="",_="",g="";if(e.groupBy){const b=e.groupBy.split(",").map(S=>this._escapeIdentifier(S.trim()));if(l=b.join(", "),e.aggregate){const S=this.parseAggregates(e.aggregate);a=[...b,...S.map(T=>`${T.function.toUpperCase()}(${this._escapeIdentifier(T.field)}) as ${this._escapeIdentifier(T.alias||`${T.function}_${T.field}`)}`)].join(", ")}else a=b.join(", ")+", COUNT(*) as count"}const m=this._mergeWhere(e.where,i==null?void 0:i.effectiveWhere);m&&(h=this._colonWhereToSql(m,o));const w=(i==null?void 0:i.orderBy)||e.orderBy;return w&&(f=w.split(",").map(b=>{const[S,x]=b.trim().split(":");return`${this._escapeIdentifier(S)} ${x==="desc"?"DESC":"ASC"}`}).join(", ")),i!=null&&i.page&&e.pageSize?(_=String(e.pageSize),i.page>1&&(g=String((i.page-1)*e.pageSize))):e.limit&&(_=String(e.limit)),{select:a,groupBy:l,where:h,orderBy:f,limit:_,offset:g,args:o}}_colonWhereToSql(e,i){const n=[],o=e.split(",").map(a=>a.trim()).filter(Boolean);for(const a of o){const[l,h,...f]=a.split(":"),_=f.join(":"),g=this._escapeIdentifier(l);switch(h){case"eq":n.push(`${g} = ?`),i.push(_);break;case"neq":n.push(`${g} != ?`),i.push(_);break;case"gt":n.push(`${g} > ?`),i.push(this._toNumberOrString(_));break;case"gte":n.push(`${g} >= ?`),i.push(this._toNumberOrString(_));break;case"lt":n.push(`${g} < ?`),i.push(this._toNumberOrString(_));break;case"lte":n.push(`${g} <= ?`),i.push(this._toNumberOrString(_));break;case"contains":n.push(`${g} LIKE ?`),i.push(`%${_}%`);break;case"notcontains":n.push(`${g} NOT LIKE ?`),i.push(`%${_}%`);break;case"in":{const m=_.split("|");n.push(`${g} IN (${m.map(()=>"?").join(",")})`),i.push(...m);break}case"notin":{const m=_.split("|");n.push(`${g} NOT IN (${m.map(()=>"?").join(",")})`),i.push(...m);break}case"isnull":n.push(`${g} IS NULL`);break;case"isnotnull":n.push(`${g} IS NOT NULL`);break}}return n.join(" AND ")}_sqlResultToObjects(e){const{records:i=[],columns:n=[]}=e;return i.map(o=>{const a={};return n.forEach((l,h)=>{a[l]=o[h]}),a})}_getSqlEndpointUrl(e){const i=e.baseUrl;if(!i.match(/\/api\/docs\/([^/]+)/))throw new Error("Cannot derive SQL endpoint from Grist URL: "+i);return i.replace(/\/tables\/[^/]+\/records.*$/,"/sql")}_getTableId(e){const i=e.baseUrl.match(/\/tables\/([^/]+)/);if(!i)throw new Error("Cannot extract table ID from Grist URL: "+e.baseUrl);return i[1]}_escapeIdentifier(e){const i=e.trim();if(!i)throw new Error("Empty SQL identifier");return`"${i.replace(/"/g,'""')}"`}_toNumberOrString(e){const i=Number(e);return!isNaN(i)&&e.trim()!==""?i:e}async _checkSqlAvailability(e){const i=this._extractHostname(e.baseUrl),n=this._sqlAvailableByHost.get(i);if(n!==void 0)return n;try{const o=jt(this._getSqlEndpointUrl(e)),l=(await fetch(o+"?q=SELECT%201",{method:"GET",headers:e.headers||{},signal:AbortSignal.timeout(2e3)})).ok;return this._sqlAvailableByHost.set(i,l),l||console.info(`[dsfr-data] Grist SQL endpoint not available on ${i} — using client-side processing`),l}catch{return this._sqlAvailableByHost.set(i,!1),console.info(`[dsfr-data] Grist SQL endpoint not available on ${i} — using client-side processing`),!1}}_extractHostname(e){try{return new URL(e).hostname}catch{return e}}};s(pa,"GristAdapter");let Ps=pa;const Uo="https://api.insee.fr/melodi",Zo=1e3,Ls=100;function Go(c,e){const i={};return e&&(i.signal=e),c.headers&&Object.keys(c.headers).length>0&&(i.headers=c.headers),i}s(Go,"buildFetchOptions");const _a=class _a{constructor(){this.type="insee",this.capabilities={serverFetch:!0,serverFacets:!1,serverSearch:!1,serverGroupBy:!1,serverOrderBy:!1,serverGeo:!1,whereFormat:"colon"}}validate(e){return e.datasetId?null:'attribut "dataset-id" requis pour les requetes INSEE Melodi'}async fetchAll(e,i){var f;const n=e.pageSize>0?e.pageSize:Zo,a=e.limit<=0?Ls*n:e.limit;let l=[],h=-1;for(let _=1;_<=Ls;_++){const g=a-l.length;if(g<=0)break;const m=Math.min(n,g),w=jt(this.buildUrl(e,m,_)),b=await fetch(w,Go(e,i));if(!b.ok)throw new Error(`HTTP ${b.status}: ${b.statusText}`);const S=await b.json(),x=S.observations||[],T=this._flattenObservations(x);if(l=l.concat(T),S.paging&&typeof S.paging.count=="number"&&(h=S.paging.count),((f=S.paging)==null?void 0:f.isLast)===!0||h>=0&&l.length>=h||x.length<m)break}return h>=0&&l.length<h&&l.length<a&&console.warn(`dsfr-data-source[insee]: pagination incomplete - ${l.length}/${h} resultats (limite: ${Ls} pages de ${n})`),{data:l,totalCount:h>=0?h:l.length,needsClientProcessing:!0}}async fetchPage(e,i,n){var g;const o=jt(this.buildServerSideUrl(e,i)),a=await fetch(o,Go(e,n));if(!a.ok)throw new Error(`HTTP ${a.status}: ${a.statusText}`);const l=await a.json(),h=l.observations||[],f=this._flattenObservations(h),_=((g=l.paging)==null?void 0:g.count)??0;return{data:f,totalCount:_,needsClientProcessing:!0,rawJson:l}}buildUrl(e,i,n){const o=e.baseUrl||Uo,a=new URL(`${o}/data/${e.datasetId}`),l=i??(e.limit>0?e.limit:Zo);a.searchParams.set("maxResult",String(l)),a.searchParams.set("totalCount","TRUE"),n&&n>0&&a.searchParams.set("page",String(n));const h=e.where||e.filter;return h&&this._applyDimensionFilters(a,h),a.toString()}buildServerSideUrl(e,i){const n=e.baseUrl||Uo,o=new URL(`${n}/data/${e.datasetId}`);return o.searchParams.set("maxResult",String(e.pageSize)),o.searchParams.set("totalCount","TRUE"),o.searchParams.set("page",String(i.page)),i.effectiveWhere&&this._applyDimensionFilters(o,i.effectiveWhere),o.toString()}getDefaultSearchTemplate(){return null}getProviderConfig(){return Oo}buildFacetWhere(e,i){const n=[];for(const[o,a]of Object.entries(e))o===i||a.size===0||(a.size===1?n.push(`${o}:eq:${[...a][0]}`):n.push(`${o}:in:${[...a].join("|")}`));return n.join(", ")}_flattenObservations(e){return e.map(i=>{const n=i,o={},a=n.dimensions;if(a)for(const[f,_]of Object.entries(a))o[f]=_;const l=n.measures;if(l)for(const[f,_]of Object.entries(l)){const g=_;if(g&&"value"in g){const m=f.replace(/_NIVEAU$/,"");o[m]=g.value}}const h=n.attributes;if(h)for(const[f,_]of Object.entries(h))o[f]=_;return o})}_applyDimensionFilters(e,i){const n=i.split(",").map(o=>o.trim()).filter(Boolean);for(const o of n){const a=o.split(":");if(a.length<3){a.length===2&&e.searchParams.append(a[0],a[1]);continue}const[l,h,...f]=a,_=f.join(":");switch(h){case"eq":e.searchParams.append(l,_);break;case"in":{const g=_.split("|");for(const m of g)e.searchParams.append(l,m);break}}}}};s(_a,"InseeAdapter");let Cs=_a;const jo=new Map([["generic",new gs],["opendatasoft",new bs],["tabular",new Ss],["grist",new Ps],["insee",new Cs]]);function qo(c){const e=jo.get(c);if(!e)throw new Error(`Type d'API non supporte: ${c}`);return e}s(qo,"getAdapter");function ch(c){jo.set(c.type,c)}s(ch,"registerAdapter");const Wt={LOADED:"dsfr-data-loaded",ERROR:"dsfr-data-error",LOADING:"dsfr-data-loading",SOURCE_COMMAND:"dsfr-data-source-command"},vi=typeof window<"u"?window:{};vi.__dsfrDataCache||(vi.__dsfrDataCache=new Map),vi.__dsfrDataMeta||(vi.__dsfrDataMeta=new Map);const xs=vi.__dsfrDataCache,Ds=vi.__dsfrDataMeta;function hh(c,e){xs.set(c,e)}s(hh,"setDataCache");function Me(c){return xs.get(c)}s(Me,"getDataCache");function yi(c){xs.delete(c)}s(yi,"clearDataCache");function Ge(c,e){Ds.set(c,e)}s(Ge,"setDataMeta");function ti(c){return Ds.get(c)}s(ti,"getDataMeta");function Ms(c){Ds.delete(c)}s(Ms,"clearDataMeta");function qt(c,e){hh(c,e);const i=new CustomEvent(Wt.LOADED,{bubbles:!0,composed:!0,detail:{sourceId:c,data:e}});document.dispatchEvent(i)}s(qt,"dispatchDataLoaded");function Qt(c,e){const i=new CustomEvent(Wt.ERROR,{bubbles:!0,composed:!0,detail:{sourceId:c,error:e}});document.dispatchEvent(i)}s(Qt,"dispatchDataError");function fe(c){const e=new CustomEvent(Wt.LOADING,{bubbles:!0,composed:!0,detail:{sourceId:c}});document.dispatchEvent(e)}s(fe,"dispatchDataLoading");function Vt(c,e){const i=new CustomEvent(Wt.SOURCE_COMMAND,{bubbles:!0,composed:!0,detail:{sourceId:c,...e}});document.dispatchEvent(i)}s(Vt,"dispatchSourceCommand");function an(c,e){const i=s(n=>{const o=n;if(o.detail.sourceId===c){const{sourceId:a,...l}=o.detail;e(l)}},"handler");return document.addEventListener(Wt.SOURCE_COMMAND,i),()=>document.removeEventListener(Wt.SOURCE_COMMAND,i)}s(an,"subscribeToSourceCommands");function ei(c,e){const i=s(a=>{const l=a;l.detail.sourceId===c&&e.onLoaded&&e.onLoaded(l.detail.data)},"handleLoaded"),n=s(a=>{const l=a;l.detail.sourceId===c&&e.onError&&e.onError(l.detail.error)},"handleError"),o=s(a=>{a.detail.sourceId===c&&e.onLoading&&e.onLoading()},"handleLoading");return document.addEventListener(Wt.LOADED,i),document.addEventListener(Wt.ERROR,n),document.addEventListener(Wt.LOADING,o),()=>{document.removeEventListener(Wt.LOADED,i),document.removeEventListener(Wt.ERROR,n),document.removeEventListener(Wt.LOADING,o)}}s(ei,"subscribeToSource");var dh=Object.defineProperty,fh=Object.getOwnPropertyDescriptor,dt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?fh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&dh(e,i,o),o},"__decorateClass$p");v.DsfrDataSource=(Ci=class extends ut{constructor(){super(...arguments),this.url="",this.method="GET",this.headers="",this.params="",this.refresh=0,this.transform="",this.paginate=!1,this.pageSize=20,this.cacheTtl=3600,this.useProxy=!1,this.apiKeyRef="",this.data="",this.apiType="generic",this.baseUrl="",this.datasetId="",this.resource="",this.where="",this.select="",this.groupBy="",this.aggregate="",this.orderBy="",this.serverSide=!1,this.limit=0,this._loading=!1,this._error=null,this._data=null,this._currentPage=1,this._refreshInterval=null,this._abortController=null,this._unsubscribeCommands=null,this._whereOverlays=new Map,this._orderByOverlay="",this._groupByOverlay="",this._aggregateOverlay="",this._adapter=null}createRenderRoot(){return this}render(){return M``}connectedCallback(){super.connectedCallback(),It("dsfr-data-source",this._isAdapterMode()?this.apiType:void 0),this._setupRefresh(),this._setupCommandListener()}disconnectedCallback(){super.disconnectedCallback(),this._cleanup(),this.id&&(yi(this.id),Ms(this.id))}willUpdate(e){if(super.willUpdate(e),e.has("data")&&this.data){this._dispatchInlineData();return}const i=e.has("url")||e.has("params")||e.has("transform")||e.has("apiKeyRef"),n=e.has("apiType")||e.has("baseUrl")||e.has("datasetId")||e.has("resource")||e.has("where")||e.has("select")||e.has("groupBy")||e.has("aggregate")||e.has("orderBy")||e.has("limit");(i||n)&&((this.paginate||this.serverSide)&&(e.has("url")||e.has("params")||n)&&(this._currentPage=1),e.has("apiType")&&(this._adapter=null),this._fetchData()),e.has("refresh")&&this._setupRefresh(),(e.has("paginate")||e.has("pageSize")||e.has("serverSide")||e.has("apiType"))&&this._setupCommandListener()}getAdapter(){return this._isAdapterMode()?(this._adapter||(this._adapter=qo(this.apiType)),this._adapter):null}getEffectiveWhere(e){const i=[];this.where&&i.push(this.where);for(const[a,l]of this._whereOverlays)a!==e&&l&&i.push(l);const n=this.getAdapter(),o=(n==null?void 0:n.capabilities.whereFormat)==="odsql"?" AND ":", ";return i.join(o)}reload(){this._fetchData()}getData(){return this._data}isLoading(){return this._loading}getError(){return this._error}_dispatchInlineData(){if(!this.id){console.warn('dsfr-data-source: attribut "id" requis pour identifier la source');return}try{const e=JSON.parse(this.data);this._data=e,qt(this.id,this._data)}catch(e){this._error=new Error("Donnees inline invalides (JSON attendu)"),Qt(this.id,this._error),console.error(`dsfr-data-source[${this.id}]: JSON invalide dans data`,e)}}_isAdapterMode(){return this.apiType!=="generic"||this.apiType==="generic"&&!this.url&&this.baseUrl!==""}_cleanup(){this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null),this._abortController&&(this._abortController.abort(),this._abortController=null),this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null)}_setupRefresh(){this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null),this.refresh>0&&(this._refreshInterval=window.setInterval(()=>{this._fetchData()},this.refresh*1e3))}_setupCommandListener(){this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null),!(!this.id||!(this.paginate||this.serverSide||this._isAdapterMode()))&&(this._unsubscribeCommands=an(this.id,i=>{let n=!1;if(i.page!==void 0&&i.page!==this._currentPage&&(this._currentPage=i.page,n=!0),i.where!==void 0){const o=i.whereKey||"__default";i.where?this._whereOverlays.set(o,i.where):this._whereOverlays.delete(o),this._currentPage=1,n=!0}i.orderBy!==void 0&&i.orderBy!==this._orderByOverlay&&(this._orderByOverlay=i.orderBy,n=!0),i.groupBy!==void 0&&i.groupBy!==this._groupByOverlay&&(this._groupByOverlay=i.groupBy,n=!0),i.aggregate!==void 0&&i.aggregate!==this._aggregateOverlay&&(this._aggregateOverlay=i.aggregate,n=!0),n&&this._fetchData()}))}async _fetchData(){return this._isAdapterMode()?this._fetchViaAdapter():this._fetchViaUrl()}async _fetchViaUrl(){var e,i;if(this.url){if(!this.id){console.warn('dsfr-data-source: attribut "id" requis pour identifier la source');return}this._abortController&&this._abortController.abort(),this._abortController=new AbortController,this._loading=!0,this._error=null,fe(this.id);try{const n=this._buildUrl();let o=jt(n);const a=this._buildFetchOptions();if(this.useProxy&&o===n){const f=Vc(o,a.headers);o=f.url,a.headers=f.headers}const l=await fetch(o,{...a,signal:this._abortController.signal});if(!l.ok)throw new Error(`HTTP ${l.status}: ${l.statusText}`);let h;try{h=await l.json()}catch{const f=((i=(e=l.headers)==null?void 0:e.get)==null?void 0:i.call(e,"content-type"))||"unknown";throw new Error(`Reponse non-JSON (content-type: ${f}) — verifiez l'URL ou la configuration du proxy`)}this.paginate&&h.meta&&Ge(this.id,{page:h.meta.page??this._currentPage,pageSize:h.meta.page_size??this.pageSize,total:h.meta.total??0}),this.transform?this._data=W(h,this.transform):this.paginate&&h.data&&!this.transform?this._data=h.data:this._data=h,qt(this.id,this._data),this.cacheTtl>0&&rn()&&this._putCache(this._data).catch(()=>{})}catch(n){if(n.name==="AbortError")return;if(this.cacheTtl>0&&rn()){const o=await this._getCache();if(o){this._data=o,qt(this.id,this._data),this.dispatchEvent(new CustomEvent("cache-fallback",{detail:{sourceId:this.id}}));return}}this._error=n,Qt(this.id,this._error),console.error(`dsfr-data-source[${this.id}]: Erreur de chargement`,n)}finally{this._loading=!1}}}async _fetchViaAdapter(){if(!this.id){console.warn('dsfr-data-source: attribut "id" requis pour identifier la source');return}const e=this.getAdapter();if(!e){console.warn(`dsfr-data-source[${this.id}]: adapter introuvable pour api-type="${this.apiType}"`);return}const i=this._getAdapterParams(),n=e.validate(i);if(n){console.warn(`dsfr-data-source[${this.id}]: ${n}`);return}this._abortController&&this._abortController.abort(),this._abortController=new AbortController,this._loading=!0,this._error=null,fe(this.id);try{let o;if(this.serverSide){const a={page:this._currentPage,effectiveWhere:this.getEffectiveWhere(),orderBy:this._orderByOverlay||this.orderBy};o=await e.fetchPage(i,a,this._abortController.signal),Ge(this.id,{page:this._currentPage,pageSize:this.pageSize,total:o.totalCount,needsClientProcessing:o.needsClientProcessing})}else o=await e.fetchAll(i,this._abortController.signal),Ge(this.id,{page:1,pageSize:0,total:o.totalCount,needsClientProcessing:o.needsClientProcessing});this._data=o.data,qt(this.id,this._data),this.cacheTtl>0&&rn()&&this._putCache(this._data).catch(()=>{})}catch(o){if(o.name==="AbortError")return;if(this.cacheTtl>0&&rn()){const a=await this._getCache();if(a){this._data=a,qt(this.id,this._data),this.dispatchEvent(new CustomEvent("cache-fallback",{detail:{sourceId:this.id}}));return}}this._error=o,Qt(this.id,this._error),console.error(`dsfr-data-source[${this.id}]: Erreur de chargement`,o)}finally{this._loading=!1}}_getAdapterParams(){let e;if(this.headers)try{e=JSON.parse(this.headers)}catch{}const i=this._resolveApiKeyHeaders();return i&&(e={...e||{},...i}),{baseUrl:this.baseUrl,datasetId:this.datasetId,resource:this.resource,select:this.select,where:this.getEffectiveWhere(),filter:"",groupBy:this._groupByOverlay||this.groupBy,aggregate:this._aggregateOverlay||this.aggregate,orderBy:this._orderByOverlay||this.orderBy,limit:this.limit,transform:this.transform,pageSize:this.pageSize,headers:e}}_resolveApiKeyHeaders(){if(!this.apiKeyRef)return null;const e=window.DSFR_DATA_KEYS;if(!e||typeof e!="object")return console.warn(`dsfr-data-source[${this.id}]: window.DSFR_DATA_KEYS non defini, api-key-ref="${this.apiKeyRef}" ignore`),null;const i=e[this.apiKeyRef];return!i||typeof i!="string"?(console.warn(`dsfr-data-source[${this.id}]: cle "${this.apiKeyRef}" introuvable dans window.DSFR_DATA_KEYS`),null):{Authorization:i}}_buildUrl(){const e=window.location.origin!=="null"?window.location.origin:void 0,i=new URL(this.url,e);if(this.params&&this.method==="GET")try{const n=JSON.parse(this.params);Object.entries(n).forEach(([o,a])=>{i.searchParams.set(o,String(a))})}catch(n){console.warn("dsfr-data-source: params invalides (JSON attendu)",n)}return this.paginate&&(i.searchParams.set("page",String(this._currentPage)),i.searchParams.set("page_size",String(this.pageSize))),i.toString()}_buildFetchOptions(){const e={method:this.method};let i={};if(this.headers)try{i=JSON.parse(this.headers)}catch(o){console.warn("dsfr-data-source: headers invalides (JSON attendu)",o)}const n=this._resolveApiKeyHeaders();return n&&(i={...i,...n}),this.method==="POST"&&this.params&&(i={"Content-Type":"application/json",...i},e.body=this.params),Object.keys(i).length>0&&(e.headers=i),e}async _putCache(e){const i=Array.isArray(e)?e.length:1;await fetch(`/api/cache/${encodeURIComponent(this.id)}`,{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({data:e,recordCount:i,ttlSeconds:this.cacheTtl})})}async _getCache(){try{const e=await fetch(`/api/cache/${encodeURIComponent(this.id)}`,{credentials:"include"});return e.ok?(await e.json()).data??null:null}catch{return null}}},s(Ci,"DsfrDataSource"),Ci),dt([P({type:String})],v.DsfrDataSource.prototype,"url",2),dt([P({type:String})],v.DsfrDataSource.prototype,"method",2),dt([P({type:String})],v.DsfrDataSource.prototype,"headers",2),dt([P({type:String})],v.DsfrDataSource.prototype,"params",2),dt([P({type:Number})],v.DsfrDataSource.prototype,"refresh",2),dt([P({type:String})],v.DsfrDataSource.prototype,"transform",2),dt([P({type:Boolean})],v.DsfrDataSource.prototype,"paginate",2),dt([P({type:Number,attribute:"page-size"})],v.DsfrDataSource.prototype,"pageSize",2),dt([P({type:Number,attribute:"cache-ttl"})],v.DsfrDataSource.prototype,"cacheTtl",2),dt([P({type:Boolean,attribute:"use-proxy"})],v.DsfrDataSource.prototype,"useProxy",2),dt([P({type:String,attribute:"api-key-ref"})],v.DsfrDataSource.prototype,"apiKeyRef",2),dt([P({type:String})],v.DsfrDataSource.prototype,"data",2),dt([P({type:String,attribute:"api-type"})],v.DsfrDataSource.prototype,"apiType",2),dt([P({type:String,attribute:"base-url"})],v.DsfrDataSource.prototype,"baseUrl",2),dt([P({type:String,attribute:"dataset-id"})],v.DsfrDataSource.prototype,"datasetId",2),dt([P({type:String})],v.DsfrDataSource.prototype,"resource",2),dt([P({type:String})],v.DsfrDataSource.prototype,"where",2),dt([P({type:String})],v.DsfrDataSource.prototype,"select",2),dt([P({type:String,attribute:"group-by"})],v.DsfrDataSource.prototype,"groupBy",2),dt([P({type:String})],v.DsfrDataSource.prototype,"aggregate",2),dt([P({type:String,attribute:"order-by"})],v.DsfrDataSource.prototype,"orderBy",2),dt([P({type:Boolean,attribute:"server-side"})],v.DsfrDataSource.prototype,"serverSide",2),dt([P({type:Number})],v.DsfrDataSource.prototype,"limit",2),dt([F()],v.DsfrDataSource.prototype,"_loading",2),dt([F()],v.DsfrDataSource.prototype,"_error",2),dt([F()],v.DsfrDataSource.prototype,"_data",2),v.DsfrDataSource=dt([mt("dsfr-data-source")],v.DsfrDataSource);var ph=Object.defineProperty,_h=Object.getOwnPropertyDescriptor,Rt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?_h(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&ph(e,i,o),o},"__decorateClass$o");v.DsfrDataQuery=(xi=class extends ut{constructor(){super(...arguments),this.source="",this.where="",this.filter="",this.groupBy="",this.aggregate="",this.orderBy="",this.limit=0,this.transform="",this.serverSide=!1,this.pageSize=20,this.refresh=0,this._loading=!1,this._error=null,this._data=[],this._rawData=[],this._refreshInterval=null,this._unsubscribe=null,this._unsubscribeCommands=null,this._serverDelegated={groupBy:!1,aggregate:!1,orderBy:!1}}createRenderRoot(){return this}render(){return M``}connectedCallback(){super.connectedCallback(),It("dsfr-data-query"),this._initialize()}disconnectedCallback(){super.disconnectedCallback(),this._clearServerDelegation(),this._cleanup(),this.id&&(yi(this.id),Ms(this.id))}willUpdate(e){super.willUpdate(e),["source","where","filter","groupBy","aggregate","orderBy","limit","transform","serverSide","pageSize"].some(n=>e.has(n))&&this._initialize(),e.has("refresh")&&this._setupRefresh()}_cleanup(){this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null)}_setupRefresh(){this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=null),this.refresh>0&&(this._refreshInterval=window.setInterval(()=>{this._initialize()},this.refresh*1e3))}_initialize(){if(!this.id){console.warn('dsfr-data-query: attribut "id" requis pour identifier la requete');return}if(this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null),!this.source){console.warn(`dsfr-data-query[${this.id}]: attribut "source" requis`);return}this._negotiateServerSide(),this._subscribeToSourceData(this.source),this._setupCommandForwarding()}_negotiateServerSide(){var _;this._serverDelegated={groupBy:!1,aggregate:!1,orderBy:!1};const e=document.getElementById(this.source);if(!e||!("getAdapter"in e))return;const i=e,n=(_=i.getAdapter)==null?void 0:_.call(i);if(!(n!=null&&n.capabilities))return;const o=n.capabilities,a=i.groupBy||"",l=i.aggregate||"",h={};this.groupBy&&o.serverGroupBy&&!a&&!l&&(h.groupBy=this.groupBy,this._serverDelegated.groupBy=!0,this.aggregate&&(h.aggregate=this.aggregate,this._serverDelegated.aggregate=!0));const f=i.orderBy||"";this.orderBy&&o.serverOrderBy&&!f&&(h.orderBy=this.orderBy,this._serverDelegated.orderBy=!0),Object.keys(h).length>0&&Vt(this.source,h)}_clearServerDelegation(){if(!this.source||!this._hasServerDelegation())return;const e={};this._serverDelegated.groupBy&&(e.groupBy=""),this._serverDelegated.aggregate&&(e.aggregate=""),this._serverDelegated.orderBy&&(e.orderBy=""),Object.keys(e).length>0&&Vt(this.source,e),this._serverDelegated={groupBy:!1,aggregate:!1,orderBy:!1}}_hasServerDelegation(){return this._serverDelegated.groupBy||this._serverDelegated.aggregate||this._serverDelegated.orderBy}_subscribeToSourceData(e){if(!this._hasServerDelegation()){const i=Me(e);i!==void 0&&(this._rawData=Array.isArray(i)?i:[i],this._handleSourceData())}this._unsubscribe=ei(e,{onLoaded:s(i=>{this._rawData=Array.isArray(i)?i:[i],this._handleSourceData()},"onLoaded"),onLoading:s(()=>{this._loading=!0,fe(this.id)},"onLoading"),onError:s(i=>{this._error=i,this._loading=!1,Qt(this.id,i)},"onError")})}_handleSourceData(){try{fe(this.id),this._loading=!0,this._processClientSide()}catch(e){this._error=e,Qt(this.id,this._error),console.error(`dsfr-data-query[${this.id}]: Erreur de traitement`,e)}finally{this._loading=!1}}_processClientSide(){let e=[...this._rawData];const i=ti(this.source),n=(i==null?void 0:i.needsClientProcessing)===!0,o=this.filter||this.where;o&&(e=this._applyFilters(e,o)),this.groupBy&&(!this._serverDelegated.groupBy||n)&&(e=this._applyGroupByAndAggregate(e)),this.orderBy&&(!this._serverDelegated.orderBy||n)&&(e=this._applySort(e)),this.limit>0&&(e=e.slice(0,this.limit)),this._data=e,i&&Ge(this.id,i),qt(this.id,this._data)}_applyFilters(e,i){const n=this._parseFilters(i);return e.filter(o=>n.every(a=>this._matchesFilter(o,a)))}_parseFilters(e){const i=[],n=e.split(",").map(o=>o.trim()).filter(Boolean);for(const o of n){const a=o.split(":");if(a.length>=2){const l=a[0],h=a[1];let f;if(a.length>2){const _=a.slice(2).join(":");h==="in"||h==="notin"?f=_.split("|").map(g=>{const m=this._parseValue(g);return typeof m=="boolean"?String(m):m}):f=this._parseValue(_)}i.push({field:l,operator:h,value:f})}}return i}_parseValue(e){return e==="true"?!0:e==="false"?!1:!isNaN(Number(e))&&e!==""?Number(e):e}_matchesFilter(e,i){const n=W(e,i.field);switch(i.operator){case"eq":return n==i.value;case"neq":return n!=i.value;case"gt":return Number(n)>Number(i.value);case"gte":return Number(n)>=Number(i.value);case"lt":return Number(n)<Number(i.value);case"lte":return Number(n)<=Number(i.value);case"contains":return String(n).toLowerCase().includes(String(i.value).toLowerCase());case"notcontains":return!String(n).toLowerCase().includes(String(i.value).toLowerCase());case"in":return Array.isArray(i.value)&&i.value.includes(n);case"notin":return Array.isArray(i.value)&&!i.value.includes(n);case"isnull":return n==null;case"isnotnull":return n!=null;default:return!0}}_applyGroupByAndAggregate(e){const i=this.groupBy.split(",").map(l=>l.trim()).filter(Boolean),n=this._parseAggregates(this.aggregate),o=new Map;for(const l of e){const h=i.map(f=>String(W(l,f)??"")).join("|||");o.has(h)||o.set(h,[]),o.get(h).push(l)}const a=[];for(const[l,h]of o){const f={},_=l.split("|||");i.forEach((g,m)=>{wo(f,g,_[m])});for(const g of n){const m=g.alias||`${g.field}__${g.function}`;wo(f,m,this._computeAggregate(h,g))}a.push(f)}return a}_parseAggregates(e){if(!e)return[];const i=[],n=e.split(",").map(o=>o.trim()).filter(Boolean);for(const o of n){const a=o.split(":");a.length>=2&&i.push({field:a[0],function:a[1],alias:a[2]})}return i}_computeAggregate(e,i){const n=e.map(o=>Number(W(o,i.field))).filter(o=>!isNaN(o));switch(i.function){case"count":return e.length;case"sum":return n.reduce((o,a)=>o+a,0);case"avg":return n.length>0?n.reduce((o,a)=>o+a,0)/n.length:0;case"min":return n.length>0?Math.min(...n):0;case"max":return n.length>0?Math.max(...n):0;default:return 0}}_applySort(e){const i=this.orderBy.split(":");if(i.length<1)return e;const n=i[0],o=(i[1]||"asc").toLowerCase();return[...e].sort((a,l)=>{const h=W(a,n),f=W(l,n),_=Number(h),g=Number(f);if(!isNaN(_)&&!isNaN(g))return o==="desc"?g-_:_-g;const m=String(h??""),w=String(f??"");return o==="desc"?w.localeCompare(m):m.localeCompare(w)})}_setupCommandForwarding(){this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null),!(!this.id||!this.source)&&(this._unsubscribeCommands=an(this.id,e=>{Vt(this.source,e)}))}getEffectiveWhere(e){if(this.source){const i=document.getElementById(this.source);if(i&&"getEffectiveWhere"in i)return i.getEffectiveWhere(e)}return this.where||this.filter||""}getAdapter(){if(this.source){const e=document.getElementById(this.source);if(e&&"getAdapter"in e)return e.getAdapter()}return null}reload(){if(this.source){const e=Me(this.source);e!==void 0&&(this._rawData=Array.isArray(e)?e:[e],this._handleSourceData())}}getData(){return this._data}isLoading(){return this._loading}getError(){return this._error}},s(xi,"DsfrDataQuery"),xi),Rt([P({type:String})],v.DsfrDataQuery.prototype,"source",2),Rt([P({type:String})],v.DsfrDataQuery.prototype,"where",2),Rt([P({type:String})],v.DsfrDataQuery.prototype,"filter",2),Rt([P({type:String,attribute:"group-by"})],v.DsfrDataQuery.prototype,"groupBy",2),Rt([P({type:String})],v.DsfrDataQuery.prototype,"aggregate",2),Rt([P({type:String,attribute:"order-by"})],v.DsfrDataQuery.prototype,"orderBy",2),Rt([P({type:Number})],v.DsfrDataQuery.prototype,"limit",2),Rt([P({type:String})],v.DsfrDataQuery.prototype,"transform",2),Rt([P({type:Boolean,attribute:"server-side"})],v.DsfrDataQuery.prototype,"serverSide",2),Rt([P({type:Number,attribute:"page-size"})],v.DsfrDataQuery.prototype,"pageSize",2),Rt([P({type:Number})],v.DsfrDataQuery.prototype,"refresh",2),Rt([F()],v.DsfrDataQuery.prototype,"_loading",2),Rt([F()],v.DsfrDataQuery.prototype,"_error",2),Rt([F()],v.DsfrDataQuery.prototype,"_data",2),Rt([F()],v.DsfrDataQuery.prototype,"_rawData",2),v.DsfrDataQuery=Rt([mt("dsfr-data-query")],v.DsfrDataQuery);var mh=Object.defineProperty,gh=Object.getOwnPropertyDescriptor,ye=s((c,e,i,n)=>{for(var o=n>1?void 0:n?gh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&mh(e,i,o),o},"__decorateClass$n");v.DsfrDataJoin=(Di=class extends ut{constructor(){super(...arguments),this.left="",this.right="",this.on="",this.type="left",this.prefixLeft="",this.prefixRight="right_",this._loading=!1,this._error=null,this._data=[],this._leftData=null,this._rightData=null,this._unsubscribeLeft=null,this._unsubscribeRight=null}createRenderRoot(){return this}render(){return M``}connectedCallback(){super.connectedCallback(),It("dsfr-data-join")}disconnectedCallback(){super.disconnectedCallback(),this._cleanup(),this.id&&yi(this.id)}willUpdate(e){if(super.willUpdate(e),e.has("left")||e.has("right")||e.has("on")){this._initialize();return}(e.has("type")||e.has("prefixLeft")||e.has("prefixRight"))&&this._leftData!==null&&this._rightData!==null&&this._tryJoin()}getData(){return this._data}isLoading(){return this._loading}getError(){return this._error}_initialize(){this._cleanup(),!(!this.left||!this.right||!this.on)&&(this._leftData=null,this._rightData=null,this._loading=!0,fe(this.id),this._subscribeToSource("left"),this._subscribeToSource("right"))}_subscribeToSource(e){const i=e==="left"?this.left:this.right,n=Me(i);if(n!==void 0){const a=this._toRows(n);e==="left"?this._leftData=a:this._rightData=a,this._tryJoin()}const o=ei(i,{onLoaded:s(a=>{const l=this._toRows(a);e==="left"?this._leftData=l:this._rightData=l,this._tryJoin()},"onLoaded"),onLoading:s(()=>{this._loading=!0,fe(this.id)},"onLoading"),onError:s(a=>{this._error=a,this._loading=!1,Qt(this.id,a)},"onError")});e==="left"?this._unsubscribeLeft=o:this._unsubscribeRight=o}_toRows(e){return Array.isArray(e)?e:e&&typeof e=="object"?[e]:[]}_tryJoin(){if(!(this._leftData===null||this._rightData===null))try{const e=Gc(this._leftData,this._rightData,{on:this.on,type:this.type,prefixLeft:this.prefixLeft,prefixRight:this.prefixRight});this._data=e,this._error=null,this._loading=!1,qt(this.id,this._data)}catch(e){this._error=e,this._loading=!1,Qt(this.id,this._error),console.error(`dsfr-data-join[${this.id}]: Erreur de jointure`,e)}}_cleanup(){this._unsubscribeLeft&&(this._unsubscribeLeft(),this._unsubscribeLeft=null),this._unsubscribeRight&&(this._unsubscribeRight(),this._unsubscribeRight=null)}},s(Di,"DsfrDataJoin"),Di),ye([P({type:String})],v.DsfrDataJoin.prototype,"left",2),ye([P({type:String})],v.DsfrDataJoin.prototype,"right",2),ye([P({type:String})],v.DsfrDataJoin.prototype,"on",2),ye([P({type:String})],v.DsfrDataJoin.prototype,"type",2),ye([P({type:String,attribute:"prefix-left"})],v.DsfrDataJoin.prototype,"prefixLeft",2),ye([P({type:String,attribute:"prefix-right"})],v.DsfrDataJoin.prototype,"prefixRight",2),ye([F()],v.DsfrDataJoin.prototype,"_loading",2),ye([F()],v.DsfrDataJoin.prototype,"_error",2),ye([F()],v.DsfrDataJoin.prototype,"_data",2),v.DsfrDataJoin=ye([mt("dsfr-data-join")],v.DsfrDataJoin);var vh=Object.defineProperty,yh=Object.getOwnPropertyDescriptor,Xt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?yh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&vh(e,i,o),o},"__decorateClass$m");v.DsfrDataNormalize=(Mi=class extends ut{constructor(){super(...arguments),this.source="",this.numeric="",this.numericAuto=!1,this.rename="",this.trim=!1,this.stripHtml=!1,this.replace="",this.replaceFields="",this.flatten="",this.round="",this.lowercaseKeys=!1,this._unsubscribe=null,this._unsubscribePageRequests=null}getAdapter(){if(this.source){const e=document.getElementById(this.source);if(e&&"getAdapter"in e)return e.getAdapter()}return null}getEffectiveWhere(e){if(this.source){const i=document.getElementById(this.source);if(i&&"getEffectiveWhere"in i)return i.getEffectiveWhere(e)}return""}createRenderRoot(){return this}render(){return M``}connectedCallback(){super.connectedCallback(),It("dsfr-data-normalize"),this._initialize()}disconnectedCallback(){super.disconnectedCallback(),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._unsubscribePageRequests&&(this._unsubscribePageRequests(),this._unsubscribePageRequests=null),this.id&&(yi(this.id),Ms(this.id))}updated(e){if(super.updated(e),e.has("source")){this._initialize();return}if(["flatten","numeric","numericAuto","round","rename","trim","stripHtml","replace","replaceFields","lowercaseKeys"].some(o=>e.has(o))){const o=this.source?Me(this.source):void 0;o!==void 0&&this._processData(o)}}_initialize(){if(!this.id){console.warn('dsfr-data-normalize: attribut "id" requis pour identifier la sortie');return}if(!this.source){console.warn('dsfr-data-normalize: attribut "source" requis');return}this._unsubscribe&&this._unsubscribe(),this._unsubscribePageRequests&&(this._unsubscribePageRequests(),this._unsubscribePageRequests=null);const e=Me(this.source);e!==void 0&&this._processData(e),this._unsubscribe=ei(this.source,{onLoaded:s(i=>{this._processData(i)},"onLoaded"),onLoading:s(()=>{fe(this.id)},"onLoading"),onError:s(i=>{Qt(this.id,i)},"onError")}),this._unsubscribePageRequests=an(this.id,i=>{Vt(this.source,i)})}_processData(e){try{fe(this.id);let i=Array.isArray(e)?e:[e];this.flatten&&(i=i.map(g=>g==null||typeof g!="object"||Array.isArray(g)?g:this._flattenRow(g,this.flatten)));const n=this._parseNumericFields(),o=this._parseRoundFields(),a=this._parsePipeMap(this.rename),l=this._parsePipeMap(this.replace),h=this._parseReplaceFields(this.replaceFields),f=i.map(g=>g==null||typeof g!="object"?g:this._normalizeRow(g,n,o,a,l,h));qt(this.id,f);const _=ti(this.source);_&&Ge(this.id,_)}catch(i){Qt(this.id,i),console.error(`dsfr-data-normalize[${this.id}]: Erreur de normalisation`,i)}}_normalizeRow(e,i,n,o,a,l){const h={};for(const[f,_]of Object.entries(e)){const g=this.trim?f.trim():f;let m=_;if(this.trim&&typeof m=="string"&&(m=m.trim()),this.stripHtml&&typeof m=="string"&&(m=m.replace(/<[^>]*>/g,"")),l.size>0&&typeof m=="string"){const S=l.get(g);if(S){for(const[x,T]of S)if(m===x){m=T;break}}}if(a.size>0&&typeof m=="string"){for(const[S,x]of a)if(m===S){m=x;break}}if(i.has(g))m=So(m);else if(this.numericAuto&&typeof m=="string"&&Nc(m)){const S=So(m,!0);S!==null&&(m=S)}if(n.has(g)&&typeof m=="number"&&isFinite(m)){const S=n.get(g);if(S===0)m=Math.round(m);else{const x=10**S;m=Math.round(m*x)/x}}const w=o.get(g)??g,b=this.lowercaseKeys?w.toLowerCase():w;h[b]=m}return h}_flattenRow(e,i){const n=this._resolvePath(e,i);if(n&&typeof n=="object"&&!Array.isArray(n)){const o={...e};return this._deleteByPath(o,i),Object.assign(o,n),o}return e}_resolvePath(e,i){return i.split(".").reduce((n,o)=>n!=null&&typeof n=="object"?n[o]:void 0,e)}_deleteByPath(e,i){const n=i.split(".");delete e[n[0]]}_parseNumericFields(){return this.numeric?new Set(this.numeric.split(",").map(e=>e.trim()).filter(Boolean)):new Set}_parseRoundFields(){const e=new Map;if(!this.round)return e;for(const i of this.round.split(",")){const n=i.trim();if(!n)continue;const o=n.indexOf(":");if(o===-1)e.set(n,0);else{const a=n.substring(0,o).trim(),l=parseInt(n.substring(o+1).trim(),10);a&&e.set(a,isNaN(l)?0:l)}}return e}_parseReplaceFields(e){const i=new Map;if(!e)return i;const n=e.split("|");for(const o of n){const a=o.trim(),l=a.indexOf(":");if(l===-1)continue;const h=a.indexOf(":",l+1);if(h===-1)continue;const f=a.substring(0,l).trim(),_=a.substring(l+1,h).trim(),g=a.substring(h+1).trim();!f||!_||(i.has(f)||i.set(f,new Map),i.get(f).set(_,g))}return i}_parsePipeMap(e){const i=new Map;if(!e)return i;const n=e.split("|");for(const o of n){const a=o.indexOf(":");if(a===-1)continue;const l=o.substring(0,a).trim(),h=o.substring(a+1).trim();l&&i.set(l,h)}return i}},s(Mi,"DsfrDataNormalize"),Mi),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"source",2),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"numeric",2),Xt([P({type:Boolean,attribute:"numeric-auto"})],v.DsfrDataNormalize.prototype,"numericAuto",2),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"rename",2),Xt([P({type:Boolean})],v.DsfrDataNormalize.prototype,"trim",2),Xt([P({type:Boolean,attribute:"strip-html"})],v.DsfrDataNormalize.prototype,"stripHtml",2),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"replace",2),Xt([P({type:String,attribute:"replace-fields"})],v.DsfrDataNormalize.prototype,"replaceFields",2),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"flatten",2),Xt([P({type:String})],v.DsfrDataNormalize.prototype,"round",2),Xt([P({type:Boolean,attribute:"lowercase-keys"})],v.DsfrDataNormalize.prototype,"lowercaseKeys",2),v.DsfrDataNormalize=Xt([mt("dsfr-data-normalize")],v.DsfrDataNormalize);var bh=Object.defineProperty,wh=Object.getOwnPropertyDescriptor,yt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?wh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&bh(e,i,o),o},"__decorateClass$l");v.DsfrDataFacets=(Ai=class extends ut{constructor(){super(...arguments),this.source="",this.fields="",this.labels="",this.maxValues=6,this.disjunctive="",this.sort="count",this.searchable="",this.hideEmpty=!1,this.display="",this.urlParams=!1,this.urlParamMap="",this.urlSync=!1,this.serverFacets=!1,this.staticValues="",this.hideCounts=!1,this.cols="",this._rawData=[],this._facetGroups=[],this._activeSelections={},this._expandedFacets=new Set,this._searchQueries={},this._openMultiselectField=null,this._liveAnnouncement="",this._unsubscribe=null,this._unsubscribeCommands=null,this._popstateHandler=null,this._urlParamsApplied=!1,this._onClickOutsideMultiselect=e=>{if(!this._openMultiselectField)return;const i=e.target,n=this.querySelector(`[data-multiselect="${this._openMultiselectField}"]`);n&&!n.contains(i)&&(this._openMultiselectField=null,this._setBackgroundInert(!1))},this._searchDebounceTimer=null}get _effectiveHideCounts(){return this.hideCounts||!!this.staticValues}getAdapter(){if(this.source){const e=document.getElementById(this.source);if(e&&"getAdapter"in e)return e.getAdapter()}return null}getEffectiveWhere(e){if(this.source){const i=document.getElementById(this.source);if(i&&"getEffectiveWhere"in i)return i.getEffectiveWhere(e)}return""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-facets"),this._initialize(),document.addEventListener("click",this._onClickOutsideMultiselect),this.urlSync&&(this._popstateHandler=()=>{this._applyUrlParams(),this._buildFacetGroups(),this._applyFilters()},window.addEventListener("popstate",this._popstateHandler))}disconnectedCallback(){super.disconnectedCallback(),this._setBackgroundInert(!1),document.removeEventListener("click",this._onClickOutsideMultiselect),this._popstateHandler&&(window.removeEventListener("popstate",this._popstateHandler),this._popstateHandler=null),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this._unsubscribeCommands&&(this._unsubscribeCommands(),this._unsubscribeCommands=null),this.id&&yi(this.id)}willUpdate(e){if(super.willUpdate(e),e.has("source")){this._initialize();return}if(e.has("serverFacets")||e.has("staticValues")){this._initialize();return}["fields","labels","sort","hideEmpty","maxValues","disjunctive","searchable","display","cols"].some(o=>e.has(o))&&this._rawData.length>0&&(this.serverFacets?this._fetchServerFacets():this.staticValues?this._buildStaticFacetGroups():(this._buildFacetGroups(),this._applyFilters()))}_initialize(){if(!this.id){console.warn('dsfr-data-facets: attribut "id" requis pour identifier la sortie');return}if(!this.source){console.warn('dsfr-data-facets: attribut "source" requis');return}this._unsubscribe&&this._unsubscribe(),this._activeSelections={},this._expandedFacets=new Set,this._searchQueries={},(this.serverFacets||!!this.staticValues)&&this.urlParams&&!this._urlParamsApplied&&(this._applyUrlParams(),this._urlParamsApplied=!0,this._hasActiveSelections()&&this._dispatchFacetCommand());const i=Me(this.source);i!==void 0&&this._onData(i),this._unsubscribe=ei(this.source,{onLoaded:s(n=>{this._onData(n)},"onLoaded"),onLoading:s(()=>{fe(this.id)},"onLoading"),onError:s(n=>{Qt(this.id,n)},"onError")}),this._unsubscribeCommands&&this._unsubscribeCommands(),this._unsubscribeCommands=an(this.id,n=>{Vt(this.source,n)})}_onData(e){this._rawData=Array.isArray(e)?e:[];const i=this.serverFacets||!!this.staticValues;if(this.urlParams&&!this._urlParamsApplied&&(this._applyUrlParams(),this._urlParamsApplied=!0,i&&this._hasActiveSelections())){this._dispatchFacetCommand();return}if(this.serverFacets){if(this._fetchServerFacets(),this.id){const n=ti(this.source);n&&Ge(this.id,n),qt(this.id,this._rawData)}}else if(this.staticValues){if(this._buildStaticFacetGroups(),this.id){const n=ti(this.source);n&&Ge(this.id,n),qt(this.id,this._rawData)}}else this._buildFacetGroups(),this._applyFilters()}_buildFacetGroups(){const e=this._getFields(),i=this._parseLabels();this._facetGroups=e.map(n=>{const o=this._computeFacetValues(n);return{field:n,label:i.get(n)??n,values:o}}).filter(n=>this.hideEmpty&&n.values.length<=1?!1:n.values.length>0)}_buildStaticFacetGroups(){if(this.staticValues)try{const e=JSON.parse(this.staticValues),i=this._parseLabels(),n=this.fields?mr(this.fields):Object.keys(e);this._facetGroups=n.filter(o=>e[o]&&e[o].length>0).map(o=>({field:o,label:i.get(o)??o,values:e[o].map(a=>({value:a,count:0}))})).filter(o=>!(this.hideEmpty&&o.values.length<=1))}catch{console.warn("dsfr-data-facets: static-values invalide (JSON attendu)")}}_buildFacetWhere(e){var a;const i=document.getElementById(this.source),n=((a=i==null?void 0:i.getAdapter)==null?void 0:a.call(i))??void 0;if(n!=null&&n.buildFacetWhere)return n.buildFacetWhere(this._activeSelections,e);const o=[];for(const[l,h]of Object.entries(this._activeSelections))l===e||h.size===0||(h.size===1?o.push(`${l}:eq:${[...h][0]}`):o.push(`${l}:in:${[...h].join("|")}`));return o.join(", ")}_findUpstreamSource(){let e=document.getElementById(this.source);const i=5;for(let n=0;n<i&&e;n++){if("datasetId"in e||"baseUrl"in e)return e;const o=e.source;if(!o||typeof o!="string")break;e=document.getElementById(o)}return e}_resolveValue(e,i){if(!i.includes("."))return e[i];const n=i.split(".");let o=e;for(const a of n){if(o==null||typeof o!="object")return;o=o[a]}return o}_getFields(){return this.fields?mr(this.fields):this._autoDetectFields()}_autoDetectFields(){if(this._rawData.length===0)return[];const e=[],i=this._rawData[0];for(const n of Object.keys(i)){const o=new Set;let a=!0;for(const l of this._rawData){const h=l[n];if(!(h==null||h==="")){if(typeof h!="string"){a=!1;break}if(o.add(h),o.size>50)break}}a&&(o.size<=1||o.size>50||o.size!==this._rawData.length&&e.push(n))}return e}_computeFacetValues(e){const i=this._getDataFilteredExcluding(e),n=new Map;for(const a of i){const l=this._resolveValue(a,e);if(l==null||l==="")continue;const h=String(l);n.set(h,(n.get(h)??0)+1)}const o=[];for(const[a,l]of n)o.push({value:a,count:l});return this._sortValues(o)}_getDataFilteredExcluding(e){const i=Object.keys(this._activeSelections).filter(n=>n!==e&&this._activeSelections[n].size>0);return i.length===0?this._rawData:this._rawData.filter(n=>i.every(o=>{const a=this._activeSelections[o],l=this._resolveValue(n,o);return l==null?!1:a.has(String(l))}))}_sortValues(e){const i=[...e];switch(this.sort){case"count":i.sort((n,o)=>o.count-n.count);break;case"-count":i.sort((n,o)=>n.count-o.count);break;case"alpha":i.sort((n,o)=>n.value.localeCompare(o.value,"fr"));break;case"-alpha":i.sort((n,o)=>o.value.localeCompare(n.value,"fr"));break;default:i.sort((n,o)=>o.count-n.count)}return i}_hasActiveSelections(){return Object.keys(this._activeSelections).some(e=>this._activeSelections[e].size>0)}async _fetchServerFacets(){var w,b;const e=document.getElementById(this.source);if(!e)return;const i=((w=e.getAdapter)==null?void 0:w.call(e))??void 0;if(!(i!=null&&i.capabilities.serverFacets)||!i.fetchFacets){this._buildFacetGroups(),this._applyFilters();return}const n=this._findUpstreamSource()||e,o=n.getAttribute("base-url")||"",a=n.getAttribute("dataset-id")||"";if(!a)return;let l;const h=n.getAttribute("headers")||"";if(h)try{l=JSON.parse(h)}catch{}const f=mr(this.fields);if(f.length===0)return;const _=this._parseLabels(),g=new Map;for(const S of f){const x=((b=e.getEffectiveWhere)==null?void 0:b.call(e,this.id))||"",T=this._buildFacetWhere(S),E=[x,T].filter(Boolean).join(" AND ");g.has(E)||g.set(E,[]),g.get(E).push(S)}const m=[];for(const[S,x]of g)try{const T=await i.fetchFacets({baseUrl:o,datasetId:a,headers:l},x,S);for(const E of T)m.push({field:E.field,label:_.get(E.field)??E.field,values:this._sortValues(E.values)})}catch{}this._facetGroups=f.map(S=>m.find(x=>x.field===S)).filter(S=>!!S).filter(S=>!(this.hideEmpty&&S.values.length<=1))}_dispatchFacetCommand(){const e=this._buildFacetWhere();Vt(this.source,{where:e,whereKey:this.id})}_applyFilters(){const e=Object.keys(this._activeSelections).filter(n=>this._activeSelections[n].size>0);let i;e.length===0?i=this._rawData:i=this._rawData.filter(n=>e.every(o=>{const a=this._activeSelections[o],l=this._resolveValue(n,o);return l==null?!1:a.has(String(l))})),qt(this.id,i)}_parseLabels(){const e=new Map;if(!this.labels)return e;const i=this.labels.split("|");for(const n of i){const o=n.indexOf(":");if(o===-1)continue;const a=n.substring(0,o).trim(),l=n.substring(o+1).trim();a&&e.set(a,l)}return e}_parseDisplayModes(){const e=new Map;if(!this.display)return e;const i=this.display.split("|");for(const n of i){const o=n.indexOf(":");if(o===-1)continue;const a=n.substring(0,o).trim(),l=n.substring(o+1).trim();a&&(l==="checkbox"||l==="select"||l==="multiselect"||l==="radio")&&e.set(a,l)}return e}_getDisplayMode(e){return this._parseDisplayModes().get(e)??"checkbox"}_parseCols(){if(!this.cols)return null;const e=this.cols.trim();if(/^\d+$/.test(e))return{global:parseInt(e,10)};const i=new Map,n=e.split("|");for(const o of n){const a=o.indexOf(":");if(a===-1)continue;const l=o.substring(0,a).trim(),h=parseInt(o.substring(a+1).trim(),10);l&&!isNaN(h)&&i.set(l,h)}return i.size>0?{map:i,fallback:6}:null}_getColClass(e){const i=this._parseCols();return i?"global"in i?`fr-col-${i.global}`:`fr-col-${i.map.get(e)??i.fallback}`:""}_toggleValue(e,i){const n={...this._activeSelections},o=new Set(n[e]??[]),a=this._getDisplayMode(e),l=mr(this.disjunctive),h=a==="multiselect"||a==="checkbox"&&l.includes(e),f=o.has(i);if(f?o.delete(i):(h||o.clear(),o.add(i)),o.size===0?delete n[e]:n[e]=o,this._activeSelections=n,this._afterSelectionChange(),a==="multiselect"||a==="radio"||a==="checkbox"){const _=f?"deselectionnee":"selectionnee";this._announce(`${i} ${_}, ${o.size} option${o.size>1?"s":""} selectionnee${o.size>1?"s":""}`)}}_handleSelectChange(e,i){const o=i.target.value,a={...this._activeSelections};o?a[e]=new Set([o]):delete a[e],this._activeSelections=a,this._afterSelectionChange()}_clearFieldSelections(e){const i={...this._activeSelections};delete i[e],this._activeSelections=i,this._afterSelectionChange(),this._announce("Aucune option selectionnee")}_selectAllValues(e){const i=this._facetGroups.find(o=>o.field===e);if(!i)return;const n={...this._activeSelections};n[e]=new Set(i.values.map(o=>o.value)),this._activeSelections=n,this._afterSelectionChange(),this._announce(`${i.values.length} options selectionnees`)}_toggleMultiselectDropdown(e){this._openMultiselectField===e?(this._openMultiselectField=null,this._setBackgroundInert(!1)):(this._openMultiselectField=e,this._setBackgroundInert(!0),this.updateComplete.then(()=>{const i=this.querySelector(`[data-multiselect="${e}"] .dsfr-data-facets__multiselect-panel`),n=i==null?void 0:i.querySelector("button, input, select, [tabindex]");n==null||n.focus();const o=this._facetGroups.find(a=>a.field===e);if(o){const a=this._activeSelections[e]??new Set;this._announce(`${o.label}, ${o.values.length} options disponibles, ${a.size} selectionnee${a.size>1?"s":""}`)}}))}_announce(e){this._liveAnnouncement="",requestAnimationFrame(()=>{this._liveAnnouncement=e})}_setBackgroundInert(e){const i=this.closest("dsfr-data-facets")??this;document.querySelectorAll("body > *").forEach(n=>{n.contains(i)||(e?n.setAttribute("inert",""):n.removeAttribute("inert"))})}_handleMultiselectKeydown(e,i){if(i.key==="Escape"){this._openMultiselectField=null,this._setBackgroundInert(!1);const n=this.querySelector(`[data-multiselect="${e}"] .dsfr-data-facets__multiselect-trigger`);n==null||n.focus();return}if(i.key==="Tab"){const n=this.querySelector(`[data-multiselect="${e}"] .dsfr-data-facets__multiselect-panel`);if(!n)return;const o=[...n.querySelectorAll('button:not([tabindex="-1"]), input, select, [tabindex]:not([tabindex="-1"])')];if(o.length===0)return;const a=o[0],l=o[o.length-1];i.shiftKey&&document.activeElement===a?(i.preventDefault(),l.focus()):!i.shiftKey&&document.activeElement===l&&(i.preventDefault(),a.focus());return}if(i.key==="ArrowDown"||i.key==="ArrowUp"||i.key==="Home"||i.key==="End"){const n=this.querySelector(`[data-multiselect="${e}"] .dsfr-data-facets__multiselect-panel`);if(!n)return;const o=[...n.querySelectorAll('input[type="checkbox"], input[type="radio"]')];if(o.length===0)return;const a=o.indexOf(i.target);if(a===-1&&i.key!=="ArrowDown")return;i.preventDefault();let l;i.key==="ArrowDown"?l=a===-1?0:Math.min(a+1,o.length-1):i.key==="ArrowUp"?l=Math.max(a-1,0):i.key==="Home"?l=0:l=o.length-1,o[l].focus()}}_handleMultiselectFocusout(e,i){if(this._openMultiselectField!==e)return;const n=i.relatedTarget;if(!n)return;const o=this.querySelector(`[data-multiselect="${e}"]`);o!=null&&o.contains(n)||(this._openMultiselectField=null,this._setBackgroundInert(!1))}_toggleExpand(e){const i=new Set(this._expandedFacets);i.has(e)?i.delete(e):i.add(e),this._expandedFacets=i}_handleSearch(e,i){const n=i.target;this._searchQueries={...this._searchQueries,[e]:n.value},this._searchDebounceTimer&&clearTimeout(this._searchDebounceTimer),this._searchDebounceTimer=setTimeout(()=>{const o=this._facetGroups.find(h=>h.field===e);if(!o)return;const a=n.value.toLowerCase(),l=a?o.values.filter(h=>h.value.toLowerCase().includes(a)).length:o.values.length;this._announce(l===0?"Aucune option trouvee":`${l} option${l>1?"s":""} disponible${l>1?"s":""}`)},300)}_clearAll(){this._activeSelections={},this._searchQueries={},this._afterSelectionChange()}_afterSelectionChange(){this.serverFacets||this.staticValues?this._dispatchFacetCommand():(this._buildFacetGroups(),this._applyFilters()),this.urlSync&&this._syncUrl()}_parseUrlParamMap(){const e=new Map;if(!this.urlParamMap)return e;const i=this.urlParamMap.split("|");for(const n of i){const o=n.indexOf(":");if(o===-1)continue;const a=n.substring(0,o).trim(),l=n.substring(o+1).trim();a&&l&&e.set(a,l)}return e}_applyUrlParams(){const e=new URLSearchParams(window.location.search),i=this._parseUrlParamMap(),n={};for(const[o,a]of e.entries()){const l=i.size>0?i.get(o)??null:o;if(!l)continue;const h=a.split(",").map(f=>f.trim()).filter(Boolean);n[l]||(n[l]=new Set);for(const f of h)n[l].add(f)}Object.keys(n).length>0&&(this._activeSelections=n)}_syncUrl(){const e=new URLSearchParams,i=this._parseUrlParamMap(),n=new Map;for(const[l,h]of i)n.set(h,l);for(const[l,h]of Object.entries(this._activeSelections)){if(h.size===0)continue;const f=n.get(l)??l;e.set(f,[...h].join(","))}const o=e.toString(),a=o?`${window.location.pathname}?${o}${window.location.hash}`:`${window.location.pathname}${window.location.hash}`;window.history.replaceState(null,"",a)}render(){if(this._rawData.length===0||this._facetGroups.length===0)return R;const e=Object.keys(this._activeSelections).some(n=>this._activeSelections[n].size>0),i=!!this.cols;return M`
      <style>
        .dsfr-data-facets {
          margin-bottom: 1.5rem;
        }
        .dsfr-data-facets__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .dsfr-data-facets__groups {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.5rem;
        }
        .dsfr-data-facets__group {
          min-width: 0;
        }
        .dsfr-data-facets__count {
          font-weight: 400;
          font-size: 0.75rem;
          color: var(--text-mention-grey, #666);
          margin-left: 0.25rem;
        }
        .dsfr-data-facets .fr-radio-group .fr-label,
        .dsfr-data-facets .fr-checkbox-group .fr-label {
          flex-wrap: nowrap;
        }
        .dsfr-data-facets__multiselect {
          position: relative;
        }
        .dsfr-data-facets__multiselect-trigger {
          width: 100%;
          text-align: left;
          cursor: pointer;
          appearance: none;
        }
        .dsfr-data-facets__multiselect-trigger[aria-expanded='true']::after {
          transform: rotate(180deg);
        }
        .dsfr-data-facets__multiselect-panel {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          z-index: 1000;
          background: var(--background-default-grey, #fff);
          border: 1px solid var(--border-default-grey, #ddd);
          border-radius: 0 0 0.25rem 0.25rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          max-height: 320px;
          overflow-y: auto;
          padding: 0.75rem;
        }
        .dsfr-data-facets__multiselect-panel .fr-search-bar {
          margin-bottom: 0.75rem;
        }
        .dsfr-data-facets__dropdown-fieldset {
          margin: 0;
          padding: 0;
          border: none;
        }
        .dsfr-data-facets__dropdown-fieldset .fr-fieldset__element {
          padding: 0;
        }
        .dsfr-data-facets__multiselect-toggle {
          width: 100%;
          margin-bottom: 0.75rem;
        }
        @media (max-width: 576px) {
          .dsfr-data-facets__groups {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <div class="dsfr-data-facets">
        ${e?M`
              <div class="dsfr-data-facets__header">
                <button
                  class="fr-btn fr-btn--tertiary-no-outline fr-btn--sm fr-btn--icon-left fr-icon-close-circle-line"
                  type="button"
                  @click="${this._clearAll}"
                >
                  Reinitialiser les filtres
                </button>
              </div>
            `:R}
        ${i?M`
              <div class="fr-grid-row fr-grid-row--gutters">
                ${this._facetGroups.map(n=>M`
                    <div class="${this._getColClass(n.field)}">
                      ${this._renderFacetGroup(n)}
                    </div>
                  `)}
              </div>
            `:M`
              <div class="dsfr-data-facets__groups">
                ${this._facetGroups.map(n=>this._renderFacetGroup(n))}
              </div>
            `}
      </div>
    `}_renderFacetGroup(e){switch(this._getDisplayMode(e.field)){case"select":return this._renderSelectGroup(e);case"multiselect":return this._renderMultiselectGroup(e);case"radio":return this._renderRadioGroup(e);default:return this._renderCheckboxGroup(e)}}_renderCheckboxGroup(e){const n=mr(this.searchable).includes(e.field),o=(this._searchQueries[e.field]??"").toLowerCase(),a=this._expandedFacets.has(e.field),l=this._activeSelections[e.field]??new Set;let h=e.values;n&&o&&(h=h.filter(m=>m.value.toLowerCase().includes(o)));const f=a?h:h.slice(0,this.maxValues),_=h.length>this.maxValues,g=`facet-${this.id}-${e.field}`;return M`
      <fieldset class="fr-fieldset dsfr-data-facets__group" aria-labelledby="${g}-legend">
        <legend class="fr-fieldset__legend fr-text--bold" id="${g}-legend">${e.label}</legend>
        <div aria-live="polite" class="fr-sr-only">${this._liveAnnouncement}</div>
        ${n?M`
              <div class="fr-fieldset__element">
                <div class="fr-input-group">
                  <input
                    class="fr-input fr-input--sm"
                    type="search"
                    placeholder="Rechercher..."
                    .value="${this._searchQueries[e.field]??""}"
                    @input="${m=>this._handleSearch(e.field,m)}"
                    aria-label="Rechercher dans ${e.label}"
                  />
                </div>
              </div>
            `:R}
        ${f.map(m=>{const w=`${g}-${m.value.replace(/[^a-zA-Z0-9]/g,"_")}`,b=l.has(m.value);return M`
            <div class="fr-fieldset__element">
              <div class="fr-checkbox-group fr-checkbox-group--sm">
                <input
                  type="checkbox"
                  id="${w}"
                  .checked="${b}"
                  @change="${()=>this._toggleValue(e.field,m.value)}"
                />
                <label class="fr-label" for="${w}">
                  ${m.value}${this._effectiveHideCounts?R:M`<span class="dsfr-data-facets__count" aria-hidden="true"
                          >${m.count}</span
                        ><span class="fr-sr-only"
                          >, ${m.count} resultat${m.count>1?"s":""}</span
                        >`}
                </label>
              </div>
            </div>
          `})}
        ${_?M`
              <div class="fr-fieldset__element">
                <button
                  class="fr-btn fr-btn--tertiary-no-outline fr-btn--sm"
                  type="button"
                  @click="${()=>this._toggleExpand(e.field)}"
                >
                  ${a?"Voir moins":`Voir plus (${h.length-this.maxValues})`}
                </button>
              </div>
            `:R}
      </fieldset>
    `}_renderSelectGroup(e){const i=`facet-${this.id}-${e.field}`,n=this._activeSelections[e.field],o=n?[...n][0]??"":"";return M`
      <div class="dsfr-data-facets__group fr-select-group" data-field="${e.field}">
        <label class="fr-label" for="${i}-select">${e.label}</label>
        <select
          class="fr-select"
          id="${i}-select"
          @change="${a=>this._handleSelectChange(e.field,a)}"
        >
          <option value="" ?selected="${!o}">Tous</option>
          ${e.values.map(a=>M`
              <option value="${a.value}" ?selected="${a.value===o}">
                ${this._effectiveHideCounts?a.value:`${a.value} (${a.count})`}
              </option>
            `)}
        </select>
      </div>
    `}_renderMultiselectGroup(e){const i=`facet-${this.id}-${e.field}`,n=this._activeSelections[e.field]??new Set,o=this._openMultiselectField===e.field,a=(this._searchQueries[e.field]??"").toLowerCase();let l=e.values;a&&(l=l.filter(_=>_.value.toLowerCase().includes(a)));const h=n.size>0?`${n.size} option${n.size>1?"s":""} selectionnee${n.size>1?"s":""}`:"Selectionnez des options",f=n.size>0?[...n].join(", "):"";return M`
      <div
        class="fr-select-group dsfr-data-facets__group dsfr-data-facets__multiselect"
        data-multiselect="${e.field}"
        data-field="${e.field}"
        @keydown="${_=>this._handleMultiselectKeydown(e.field,_)}"
        @focusout="${_=>this._handleMultiselectFocusout(e.field,_)}"
      >
        <label class="fr-label" id="${i}-legend">${e.label}</label>
        ${f?M`<span class="fr-sr-only" id="${i}-desc">${f}</span>`:R}
        <button
          class="fr-select dsfr-data-facets__multiselect-trigger"
          type="button"
          aria-expanded="${o}"
          aria-controls="${i}-panel"
          aria-labelledby="${i}-legend"
          aria-haspopup="dialog"
          aria-describedby="${f?`${i}-desc`:R}"
          @click="${_=>{_.stopPropagation(),this._toggleMultiselectDropdown(e.field)}}"
        >
          ${h}
        </button>
        ${o?M`
              <div
                class="dsfr-data-facets__multiselect-panel"
                id="${i}-panel"
                role="dialog"
                aria-modal="true"
                aria-label="${e.label}"
                @click="${_=>_.stopPropagation()}"
              >
                <div aria-live="polite" class="fr-sr-only">${this._liveAnnouncement}</div>
                <button
                  class="fr-btn fr-btn--tertiary fr-btn--sm fr-btn--icon-left ${n.size>0?"fr-icon-close-circle-line":"fr-icon-check-line"} dsfr-data-facets__multiselect-toggle"
                  type="button"
                  aria-label="${n.size>0?`Tout deselectionner pour ${e.label}`:`Tout selectionner pour ${e.label}`}"
                  @click="${()=>n.size>0?this._clearFieldSelections(e.field):this._selectAllValues(e.field)}"
                >
                  ${n.size>0?"Tout deselectionner":"Tout selectionner"}
                </button>
                <div class="fr-search-bar" role="search">
                  <label class="fr-label fr-sr-only" for="${i}-search"
                    >Rechercher dans ${e.label}</label
                  >
                  <input
                    class="fr-input"
                    type="search"
                    id="${i}-search"
                    placeholder="Rechercher..."
                    aria-describedby="${i}-search-hint"
                    .value="${this._searchQueries[e.field]??""}"
                    @input="${_=>this._handleSearch(e.field,_)}"
                  />
                  <span class="fr-sr-only" id="${i}-search-hint"
                    >Les resultats se mettent a jour automatiquement</span
                  >
                  <button
                    class="fr-btn"
                    type="button"
                    title="Rechercher"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    Rechercher
                  </button>
                </div>
                <fieldset
                  class="fr-fieldset dsfr-data-facets__dropdown-fieldset"
                  aria-label="${e.label}"
                >
                  ${l.map(_=>{const g=`${i}-${_.value.replace(/[^a-zA-Z0-9]/g,"_")}`,m=n.has(_.value);return M`
                      <div class="fr-fieldset__element">
                        <div class="fr-checkbox-group fr-checkbox-group--sm">
                          <input
                            type="checkbox"
                            id="${g}"
                            .checked="${m}"
                            @change="${()=>this._toggleValue(e.field,_.value)}"
                          />
                          <label class="fr-label" for="${g}">
                            ${_.value}${this._effectiveHideCounts?R:M`<span class="dsfr-data-facets__count" aria-hidden="true"
                                    >${_.count}</span
                                  ><span class="fr-sr-only"
                                    >, ${_.count} resultat${_.count>1?"s":""}</span
                                  >`}
                          </label>
                        </div>
                      </div>
                    `})}
                </fieldset>
              </div>
            `:R}
      </div>
    `}_renderRadioGroup(e){const i=`facet-${this.id}-${e.field}`,n=this._activeSelections[e.field]??new Set,o=this._openMultiselectField===e.field,a=(this._searchQueries[e.field]??"").toLowerCase();let l=e.values;a&&(l=l.filter(_=>_.value.toLowerCase().includes(a)));const h=n.size>0?[...n][0]:null,f=h??"Selectionnez une option";return M`
      <div
        class="fr-select-group dsfr-data-facets__group dsfr-data-facets__multiselect"
        data-multiselect="${e.field}"
        data-field="${e.field}"
        @keydown="${_=>this._handleMultiselectKeydown(e.field,_)}"
        @focusout="${_=>this._handleMultiselectFocusout(e.field,_)}"
      >
        <label class="fr-label" id="${i}-legend">${e.label}</label>
        <button
          class="fr-select dsfr-data-facets__multiselect-trigger"
          type="button"
          aria-expanded="${o}"
          aria-controls="${i}-panel"
          aria-labelledby="${i}-legend"
          aria-haspopup="dialog"
          @click="${_=>{_.stopPropagation(),this._toggleMultiselectDropdown(e.field)}}"
        >
          ${f}
        </button>
        ${o?M`
              <div
                class="dsfr-data-facets__multiselect-panel"
                id="${i}-panel"
                role="dialog"
                aria-modal="true"
                aria-label="${e.label}"
                @click="${_=>_.stopPropagation()}"
              >
                <div aria-live="polite" class="fr-sr-only">${this._liveAnnouncement}</div>
                ${h?M`
                      <button
                        class="fr-btn fr-btn--tertiary fr-btn--sm fr-btn--icon-left fr-icon-close-circle-line dsfr-data-facets__multiselect-toggle"
                        type="button"
                        aria-label="Reinitialiser ${e.label}"
                        @click="${()=>this._clearFieldSelections(e.field)}"
                      >
                        Reinitialiser
                      </button>
                    `:R}
                <div class="fr-search-bar" role="search">
                  <label class="fr-label fr-sr-only" for="${i}-search"
                    >Rechercher dans ${e.label}</label
                  >
                  <input
                    class="fr-input"
                    type="search"
                    id="${i}-search"
                    placeholder="Rechercher..."
                    aria-describedby="${i}-search-hint"
                    .value="${this._searchQueries[e.field]??""}"
                    @input="${_=>this._handleSearch(e.field,_)}"
                  />
                  <span class="fr-sr-only" id="${i}-search-hint"
                    >Les resultats se mettent a jour automatiquement</span
                  >
                  <button
                    class="fr-btn"
                    type="button"
                    title="Rechercher"
                    aria-hidden="true"
                    tabindex="-1"
                  >
                    Rechercher
                  </button>
                </div>
                <fieldset
                  class="fr-fieldset dsfr-data-facets__dropdown-fieldset"
                  aria-label="${e.label}"
                >
                  ${l.map(_=>{const g=`${i}-${_.value.replace(/[^a-zA-Z0-9]/g,"_")}`,m=n.has(_.value);return M`
                      <div class="fr-fieldset__element">
                        <div class="fr-radio-group fr-radio-group--sm">
                          <input
                            type="radio"
                            id="${g}"
                            name="${i}-radio"
                            .checked="${m}"
                            @change="${()=>this._toggleValue(e.field,_.value)}"
                          />
                          <label class="fr-label" for="${g}">
                            ${_.value}${this._effectiveHideCounts?R:M`<span class="dsfr-data-facets__count" aria-hidden="true"
                                    >${_.count}</span
                                  ><span class="fr-sr-only"
                                    >, ${_.count} resultat${_.count>1?"s":""}</span
                                  >`}
                          </label>
                        </div>
                      </div>
                    `})}
                </fieldset>
              </div>
            `:R}
      </div>
    `}},s(Ai,"DsfrDataFacets"),Ai),yt([P({type:String})],v.DsfrDataFacets.prototype,"source",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"fields",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"labels",2),yt([P({type:Number,attribute:"max-values"})],v.DsfrDataFacets.prototype,"maxValues",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"disjunctive",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"sort",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"searchable",2),yt([P({type:Boolean,attribute:"hide-empty"})],v.DsfrDataFacets.prototype,"hideEmpty",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"display",2),yt([P({type:Boolean,attribute:"url-params"})],v.DsfrDataFacets.prototype,"urlParams",2),yt([P({type:String,attribute:"url-param-map"})],v.DsfrDataFacets.prototype,"urlParamMap",2),yt([P({type:Boolean,attribute:"url-sync"})],v.DsfrDataFacets.prototype,"urlSync",2),yt([P({type:Boolean,attribute:"server-facets"})],v.DsfrDataFacets.prototype,"serverFacets",2),yt([P({type:String,attribute:"static-values"})],v.DsfrDataFacets.prototype,"staticValues",2),yt([P({type:Boolean,attribute:"hide-counts"})],v.DsfrDataFacets.prototype,"hideCounts",2),yt([P({type:String})],v.DsfrDataFacets.prototype,"cols",2),yt([F()],v.DsfrDataFacets.prototype,"_rawData",2),yt([F()],v.DsfrDataFacets.prototype,"_facetGroups",2),yt([F()],v.DsfrDataFacets.prototype,"_activeSelections",2),yt([F()],v.DsfrDataFacets.prototype,"_expandedFacets",2),yt([F()],v.DsfrDataFacets.prototype,"_searchQueries",2),yt([F()],v.DsfrDataFacets.prototype,"_openMultiselectField",2),yt([F()],v.DsfrDataFacets.prototype,"_liveAnnouncement",2),v.DsfrDataFacets=yt([mt("dsfr-data-facets")],v.DsfrDataFacets);function mr(c){return c?c.split(",").map(e=>e.trim()).filter(Boolean):[]}s(mr,"_parseCSV");var Sh=Object.defineProperty,Ph=Object.getOwnPropertyDescriptor,Et=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Ph(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Sh(e,i,o),o},"__decorateClass$k");v.DsfrDataSearch=(Ti=class extends ut{constructor(){super(...arguments),this.source="",this.fields="",this.placeholder="Rechercher…",this.label="Rechercher",this.debounce=300,this.minLength=0,this.highlight=!1,this.operator="contains",this.srLabel=!1,this.count=!1,this.urlSearchParam="",this.urlSync=!1,this.serverSearch=!1,this.searchTemplate="",this._allData=[],this._filteredData=[],this._term="",this._resultCount=0,this._debounceTimer=null,this._unsubscribe=null,this._urlParamApplied=!1}getAdapter(){if(this.source){const e=document.getElementById(this.source);if(e&&"getAdapter"in e)return e.getAdapter()}return null}getEffectiveWhere(e){if(this.source){const i=document.getElementById(this.source);if(i&&"getEffectiveWhere"in i)return i.getEffectiveWhere(e)}return""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-search"),this._initialize()}disconnectedCallback(){super.disconnectedCallback(),this._debounceTimer!==null&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),this._unsubscribe&&(this._unsubscribe(),this._unsubscribe=null),this.id&&yi(this.id)}willUpdate(e){if(super.willUpdate(e),e.has("source")){this._initialize();return}["fields","operator","minLength","highlight"].some(o=>e.has(o))&&this._allData.length>0&&this._applyFilter()}clear(){this._term="";const e=this.querySelector("input");e&&(e.value="",e.focus()),this._applyFilter()}search(e){this._term=e;const i=this.querySelector("input");i&&(i.value=e),this._applyFilter()}getData(){return this._filteredData}setData(e){this._allData=Array.isArray(e)?e:[],this._applyFilter()}_initialize(){var i;if(!this.id){console.warn('dsfr-data-search: attribut "id" requis');return}if(!this.source){console.warn('dsfr-data-search: attribut "source" requis');return}if(this._unsubscribe&&this._unsubscribe(),this.serverSearch&&!this.searchTemplate){const n=document.getElementById(this.source),o=(i=n==null?void 0:n.getAdapter)==null?void 0:i.call(n);o!=null&&o.getDefaultSearchTemplate&&(this.searchTemplate=o.getDefaultSearchTemplate()||"")}this.serverSearch&&this.urlSearchParam&&!this._urlParamApplied&&(this._applyUrlSearchParam(),this._urlParamApplied=!0,this._term&&this._applyServerSearch());const e=Me(this.source);e!==void 0&&this._onData(e),this._unsubscribe=ei(this.source,{onLoaded:s(n=>{this._onData(n)},"onLoaded"),onLoading:s(()=>{fe(this.id)},"onLoading"),onError:s(n=>{Qt(this.id,n)},"onError")})}_onData(e){const i=Array.isArray(e)?e:[];if(this.serverSearch){this._allData=i,this._filteredData=i;const n=ti(this.source);this._resultCount=n?n.total:i.length,this.id&&(n&&Ge(this.id,n),qt(this.id,i)),this.urlSearchParam&&!this._urlParamApplied&&(this._applyUrlSearchParam(),this._urlParamApplied=!0,this._term&&this._applyServerSearch());return}this._allData=i,this.urlSearchParam&&!this._urlParamApplied&&(this._applyUrlSearchParam(),this._urlParamApplied=!0),this._applyFilter()}_applyUrlSearchParam(){if(!this.urlSearchParam)return;const i=new URLSearchParams(window.location.search).get(this.urlSearchParam);i&&(this._term=i)}_applyFilter(){if(this.serverSearch&&this.source){this._applyServerSearch();return}const e=this._term;if(!e||e.length<this.minLength)this._filteredData=[...this._allData];else{const i=this._getFields(),n=this.operator||"contains",o=this._normalize(e);this._filteredData=this._allData.filter(a=>this._matchRecord(a,o,i,n))}this.highlight&&e&&e.length>=this.minLength&&(this._filteredData=this._filteredData.map(i=>this._addHighlight(i,e))),this._resultCount=this._filteredData.length,this._dispatch()}_applyServerSearch(){const e=this._term;let i="";if(e&&e.length>=this.minLength){const n=e.replace(/"/g,'\\"');i=this.searchTemplate.replace(/\{q\}/g,n)}Vt(this.source,{where:i,whereKey:this.id}),this.urlSync&&this.urlSearchParam&&this._syncUrl(),document.dispatchEvent(new CustomEvent("dsfr-data-search-change",{bubbles:!0,composed:!0,detail:{sourceId:this.id,term:this._term,count:this._resultCount}}))}_matchRecord(e,i,n,o){const a=n.length>0?n:Object.keys(e).filter(l=>!l.startsWith("_"));switch(o){case"starts":return a.some(l=>this._normalize(String(e[l]??"")).split(/\s+/).some(f=>f.startsWith(i)));case"words":return i.split(/\s+/).filter(Boolean).every(h=>a.some(f=>this._normalize(String(e[f]??"")).includes(h)));case"contains":default:return a.some(l=>this._normalize(String(e[l]??"")).includes(i))}}_normalize(e){return String(e).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}_getFields(){return this.fields?this.fields.split(",").map(e=>e.trim()).filter(Boolean):[]}_addHighlight(e,i){const n={...e},o=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),a=new RegExp("("+o+")","gi"),l=this._getFields(),h=l.length>0?l:Object.keys(e).filter(_=>typeof e[_]=="string"),f=[];return h.forEach(_=>{typeof e[_]=="string"&&f.push(e[_].replace(a,"<mark>$1</mark>"))}),n._highlight=f.join(" … "),n}_onInput(e){this._term=e,this._debounceTimer!==null&&clearTimeout(this._debounceTimer),this._debounceTimer=setTimeout(()=>{this._debounceTimer=null,this._applyFilter()},this.debounce)}_onSubmit(){this._debounceTimer!==null&&(clearTimeout(this._debounceTimer),this._debounceTimer=null),this._applyFilter()}_dispatch(){this.id&&(qt(this.id,this._filteredData),this.urlSync&&this.urlSearchParam&&this._syncUrl(),document.dispatchEvent(new CustomEvent("dsfr-data-search-change",{bubbles:!0,composed:!0,detail:{sourceId:this.id,term:this._term,count:this._filteredData.length}})))}_syncUrl(){const e=new URLSearchParams(window.location.search);this._term?e.set(this.urlSearchParam,this._term):e.delete(this.urlSearchParam);const i=e.toString(),n=i?`${window.location.pathname}?${i}${window.location.hash}`:`${window.location.pathname}${window.location.hash}`;window.history.replaceState(null,"",n)}render(){const e=this.id||"search",i=this.srLabel?"fr-label sr-only":"fr-label";return M`
      <div
        class="fr-search-bar"
        role="search"
        aria-label="${this.getAttribute("aria-label")||this.label}"
      >
        <label class="${i}" for="dsfr-data-search-${e}">${this.label}</label>
        <input
          class="fr-input"
          type="search"
          id="dsfr-data-search-${e}"
          placeholder="${this.placeholder}"
          autocomplete="off"
          .value="${this._term}"
          @input="${n=>this._onInput(n.target.value)}"
          @search="${n=>{this._term=n.target.value,this._onSubmit()}}"
          @keydown="${n=>{n.key==="Enter"&&(n.preventDefault(),this._onSubmit()),n.key==="Escape"&&this.clear()}}"
        />
        <button
          class="fr-btn"
          title="Rechercher"
          type="button"
          @click="${n=>{n.preventDefault(),this._onSubmit()}}"
        >
          Rechercher
        </button>
      </div>
      ${this.count?M`
            <p
              class="fr-text--sm fr-mt-1v dsfr-data-search-count"
              aria-live="polite"
              aria-atomic="true"
              role="status"
            >
              ${this._resultCount} resultat${this._resultCount!==1?"s":""}
            </p>
          `:M`
            <p class="fr-sr-only" aria-live="polite" aria-atomic="true" role="status">
              ${this._resultCount} resultat${this._resultCount!==1?"s":""}
            </p>
          `}
    `}},s(Ti,"DsfrDataSearch"),Ti),Et([P({type:String})],v.DsfrDataSearch.prototype,"source",2),Et([P({type:String})],v.DsfrDataSearch.prototype,"fields",2),Et([P({type:String})],v.DsfrDataSearch.prototype,"placeholder",2),Et([P({type:String})],v.DsfrDataSearch.prototype,"label",2),Et([P({type:Number})],v.DsfrDataSearch.prototype,"debounce",2),Et([P({type:Number,attribute:"min-length"})],v.DsfrDataSearch.prototype,"minLength",2),Et([P({type:Boolean})],v.DsfrDataSearch.prototype,"highlight",2),Et([P({type:String})],v.DsfrDataSearch.prototype,"operator",2),Et([P({type:Boolean,attribute:"sr-label"})],v.DsfrDataSearch.prototype,"srLabel",2),Et([P({type:Boolean})],v.DsfrDataSearch.prototype,"count",2),Et([P({type:String,attribute:"url-search-param"})],v.DsfrDataSearch.prototype,"urlSearchParam",2),Et([P({type:Boolean,attribute:"url-sync"})],v.DsfrDataSearch.prototype,"urlSync",2),Et([P({type:Boolean,attribute:"server-search"})],v.DsfrDataSearch.prototype,"serverSearch",2),Et([P({type:String,attribute:"search-template"})],v.DsfrDataSearch.prototype,"searchTemplate",2),Et([F()],v.DsfrDataSearch.prototype,"_allData",2),Et([F()],v.DsfrDataSearch.prototype,"_filteredData",2),Et([F()],v.DsfrDataSearch.prototype,"_term",2),Et([F()],v.DsfrDataSearch.prototype,"_resultCount",2),v.DsfrDataSearch=Et([mt("dsfr-data-search")],v.DsfrDataSearch);function Ae(c){const i=class i extends c{constructor(){super(...arguments),this._sourceLoading=!1,this._sourceData=null,this._sourceError=null,this._unsubscribeSource=null}onSourceData(o){}onSourceError(o){}connectedCallback(){super.connectedCallback(),this._subscribeToSource()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupSubscription()}willUpdate(o){super.willUpdate(o),o.has("source")&&this._subscribeToSource()}_subscribeToSource(){this._cleanupSubscription();const o=this.source;if(!o)return;const a=Me(o);a!==void 0&&(this._sourceData=a,this.onSourceData(a)),this._unsubscribeSource=ei(o,{onLoaded:s(l=>{this._sourceData=l,this._sourceLoading=!1,this._sourceError=null,this.onSourceData(l),this.requestUpdate()},"onLoaded"),onLoading:s(()=>{this._sourceLoading=!0,this.requestUpdate()},"onLoading"),onError:s(l=>{this._sourceError=l,this._sourceLoading=!1,this.onSourceError(l),this.requestUpdate()},"onError")})}_cleanupSubscription(){this._unsubscribeSource&&(this._unsubscribeSource(),this._unsubscribeSource=null)}};s(i,"SourceSubscriberElement");let e=i;return e}s(Ae,"SourceSubscriberMixin");function As(c,e="nombre"){if(c==null||c==="")return"—";const i=typeof c=="string"?parseFloat(c):c;if(isNaN(i))return"—";switch(e){case"nombre":return on(i);case"pourcentage":return Ho(i);case"euro":return Wo(i);case"decimal":return Lh(i);default:return on(i)}}s(As,"formatValue");function on(c){return new Intl.NumberFormat("fr-FR",{maximumFractionDigits:0}).format(Math.round(c))}s(on,"formatNumber");function Ho(c){return new Intl.NumberFormat("fr-FR",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}).format(c/100)}s(Ho,"formatPercentage");function Wo(c){return new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR",minimumFractionDigits:0,maximumFractionDigits:0}).format(c)}s(Wo,"formatCurrency");function Lh(c){return new Intl.NumberFormat("fr-FR",{minimumFractionDigits:1,maximumFractionDigits:2}).format(c)}s(Lh,"formatDecimal");function Ch(c){const e=typeof c=="string"?new Date(c):c;return isNaN(e.getTime())?"—":new Intl.DateTimeFormat("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}).format(e)}s(Ch,"formatDate");function xh(c,e,i){return e!==void 0&&c>=e?"vert":i!==void 0&&c>=i?"orange":e!==void 0||i!==void 0?"rouge":"bleu"}s(xh,"getColorBySeuil");function Vo(c){const e=c.split(":");if(e.length===1)return e[0]==="count"?{type:"count",field:""}:{type:"direct",field:e[0]};const i=e[0],n=e[1];if(e.length===3){let o=e[2];return o==="true"?o=!0:o==="false"?o=!1:isNaN(Number(o))||(o=Number(o)),{type:i,field:n,filterField:n,filterValue:o}}return{type:i,field:n}}s(Vo,"parseExpression");function Ts(c,e){const i=Vo(e);if(i.type==="direct"&&!Array.isArray(c))return c[i.field];if(!Array.isArray(c))return null;const n=c;switch(i.type){case"direct":case"first":return n.length>0?n[0][i.field]:null;case"last":return n.length>0?n[n.length-1][i.field]:null;case"count":return i.filterValue!==void 0?n.filter(o=>o[i.field]===i.filterValue).length:n.length;case"sum":return n.reduce((o,a)=>{const l=Number(a[i.field]);return o+(isNaN(l)?0:l)},0);case"avg":return n.length===0?null:n.reduce((a,l)=>{const h=Number(l[i.field]);return a+(isNaN(h)?0:h)},0)/n.length;case"min":return n.length===0?null:Math.min(...n.map(o=>Number(o[i.field])).filter(o=>!isNaN(o)));case"max":return n.length===0?null:Math.max(...n.map(o=>Number(o[i.field])).filter(o=>!isNaN(o)));default:return null}}s(Ts,"computeAggregation");var Dh=Object.defineProperty,Mh=Object.getOwnPropertyDescriptor,te=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Mh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Dh(e,i,o),o},"__decorateClass$j");const Ko={vert:"dsfr-data-kpi--success",orange:"dsfr-data-kpi--warning",rouge:"dsfr-data-kpi--error",bleu:"dsfr-data-kpi--info"};v.DsfrDataKpi=(Ei=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.valeur="",this.label="",this.description="",this.icone="",this.format="nombre",this.tendance="",this.couleur=""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-kpi")}_computeValue(){return!this._sourceData||!this.valeur?null:Ts(this._sourceData,this.valeur)}_getColor(){if(this.couleur)return this.couleur;const e=this._computeValue();return typeof e!="number"?"bleu":xh(e,this.seuilVert,this.seuilOrange)}_getTendanceInfo(){if(!this.tendance||!this._sourceData)return null;const e=Ts(this._sourceData,this.tendance);return typeof e!="number"?null:{value:e,direction:e>0?"up":e<0?"down":"stable"}}_getAriaLabel(){if(this.description)return this.description;const e=this._computeValue(),i=As(e,this.format);let n=`${this.label}: ${i}`;if(typeof e=="number"&&(this.seuilVert!==void 0||this.seuilOrange!==void 0)){const o=this._getColor(),l={vert:"bon",orange:"attention",rouge:"critique",bleu:""}[o];l&&(n+=`, etat ${l}`)}return n}render(){const e=this._computeValue(),i=As(e,this.format),n=Ko[this._getColor()]||Ko.bleu,o=this._getTendanceInfo();return M`
      <div class="dsfr-data-kpi ${n}" role="figure" aria-label="${this._getAriaLabel()}">
        ${this._sourceLoading?M`
              <div class="dsfr-data-kpi__loading" aria-live="polite">
                <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
                Chargement...
              </div>
            `:this._sourceError?M`
                <div class="dsfr-data-kpi__error" aria-live="assertive">
                  <span class="fr-icon-error-line" aria-hidden="true"></span>
                  Erreur de chargement
                </div>
              `:M`
                <div class="dsfr-data-kpi__content">
                  ${this.icone?M`
                        <span class="dsfr-data-kpi__icon ${this.icone}" aria-hidden="true"></span>
                      `:""}
                  <div class="dsfr-data-kpi__value-wrapper">
                    <span class="dsfr-data-kpi__value">${i}</span>
                    ${o?M`
                          <span
                            class="dsfr-data-kpi__tendance dsfr-data-kpi__tendance--${o.direction}"
                            role="img"
                            aria-label="${o.value>0?`en hausse de ${Math.abs(o.value).toFixed(1)}%`:o.value<0?`en baisse de ${Math.abs(o.value).toFixed(1)}%`:"stable"}"
                          >
                            ${o.direction==="up"?"↑":o.direction==="down"?"↓":"→"}
                            ${Math.abs(o.value).toFixed(1)}%
                          </span>
                        `:""}
                  </div>
                  <span class="dsfr-data-kpi__label">${this.label}</span>
                </div>
              `}
      </div>
      <style>
        .dsfr-data-kpi {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem;
          background: var(--background-default-grey);
          border-radius: 0.25rem;
          border-left: 4px solid var(--border-default-grey);
          min-height: 140px;
          height: 100%;
          box-sizing: border-box;
        }
        .dsfr-data-kpi--success {
          border-left-color: var(--background-flat-success);
        }
        .dsfr-data-kpi--warning {
          border-left-color: var(--background-flat-warning);
        }
        .dsfr-data-kpi--error {
          border-left-color: var(--background-flat-error);
        }
        .dsfr-data-kpi--info {
          border-left-color: var(--background-flat-info);
        }
        .dsfr-data-kpi__content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .dsfr-data-kpi__icon {
          font-size: 1.5rem;
          color: var(--text-mention-grey);
        }
        .dsfr-data-kpi__value-wrapper {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        .dsfr-data-kpi__value {
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          color: var(--text-title-grey);
        }
        .dsfr-data-kpi__tendance {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .dsfr-data-kpi__tendance--up {
          color: var(--text-default-success);
        }
        .dsfr-data-kpi__tendance--down {
          color: var(--text-default-error);
        }
        .dsfr-data-kpi__tendance--stable {
          color: var(--text-mention-grey);
        }
        .dsfr-data-kpi__label {
          font-size: 0.875rem;
          color: var(--text-mention-grey);
        }
        .dsfr-data-kpi__loading,
        .dsfr-data-kpi__error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-mention-grey);
          font-size: 0.875rem;
        }
        .dsfr-data-kpi__error {
          color: var(--text-default-error);
        }
      </style>
    `}},s(Ei,"DsfrDataKpi"),Ei),v.DsfrDataKpi.styles=Kn``,te([P({type:String})],v.DsfrDataKpi.prototype,"source",2),te([P({type:String})],v.DsfrDataKpi.prototype,"valeur",2),te([P({type:String})],v.DsfrDataKpi.prototype,"label",2),te([P({type:String})],v.DsfrDataKpi.prototype,"description",2),te([P({type:String})],v.DsfrDataKpi.prototype,"icone",2),te([P({type:String})],v.DsfrDataKpi.prototype,"format",2),te([P({type:String})],v.DsfrDataKpi.prototype,"tendance",2),te([P({type:Number,attribute:"seuil-vert"})],v.DsfrDataKpi.prototype,"seuilVert",2),te([P({type:Number,attribute:"seuil-orange"})],v.DsfrDataKpi.prototype,"seuilOrange",2),te([P({type:String})],v.DsfrDataKpi.prototype,"couleur",2),te([P({type:Number,reflect:!0})],v.DsfrDataKpi.prototype,"col",2),v.DsfrDataKpi=te([mt("dsfr-data-kpi")],v.DsfrDataKpi);var Ah=Object.defineProperty,Th=Object.getOwnPropertyDescriptor,Es=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Th(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Ah(e,i,o),o},"__decorateClass$i");v.DsfrDataKpiGroup=(ki=class extends ut{constructor(){super(...arguments),this.cols=3,this.gap="md"}connectedCallback(){super.connectedCallback(),It("dsfr-data-kpi-group"),this.hasAttribute("role")||this.setAttribute("role","group")}updated(e){if(super.updated(e),e.has("cols")){const i=Math.max(1,Math.min(12,this.cols)),n=Math.max(1,Math.floor(12/i));this.style.setProperty("--_kpi-default-span",String(n))}}render(){const e=Math.max(1,Math.floor(12/Math.max(1,Math.min(12,this.cols))));return M`
      <style>
        ::slotted(*:not([col])) {
          grid-column: span ${e};
        }
      </style>
      <slot></slot>
    `}},s(ki,"DsfrDataKpiGroup"),ki),v.DsfrDataKpiGroup.styles=Kn`
    :host {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: var(--dsfr-data-kpi-group-gap, 1rem);
    }

    :host([gap='sm']) {
      --dsfr-data-kpi-group-gap: 0.5rem;
    }
    :host([gap='md']) {
      --dsfr-data-kpi-group-gap: 1rem;
    }
    :host([gap='lg']) {
      --dsfr-data-kpi-group-gap: 1.5rem;
    }

    /* Per-KPI col overrides (1-12) */
    ::slotted([col='1']) {
      grid-column: span 1;
    }
    ::slotted([col='2']) {
      grid-column: span 2;
    }
    ::slotted([col='3']) {
      grid-column: span 3;
    }
    ::slotted([col='4']) {
      grid-column: span 4;
    }
    ::slotted([col='5']) {
      grid-column: span 5;
    }
    ::slotted([col='6']) {
      grid-column: span 6;
    }
    ::slotted([col='7']) {
      grid-column: span 7;
    }
    ::slotted([col='8']) {
      grid-column: span 8;
    }
    ::slotted([col='9']) {
      grid-column: span 9;
    }
    ::slotted([col='10']) {
      grid-column: span 10;
    }
    ::slotted([col='11']) {
      grid-column: span 11;
    }
    ::slotted([col='12']) {
      grid-column: span 12;
    }

    /* Responsive: stack on mobile */
    @media (max-width: 767px) {
      :host {
        grid-template-columns: 1fr;
      }
      ::slotted(*) {
        grid-column: span 1 !important;
      }
    }
  `,Es([P({type:Number})],v.DsfrDataKpiGroup.prototype,"cols",2),Es([P({type:String})],v.DsfrDataKpiGroup.prototype,"gap",2),v.DsfrDataKpiGroup=Es([mt("dsfr-data-kpi-group")],v.DsfrDataKpiGroup);var Eh=Object.defineProperty,kh=Object.getOwnPropertyDescriptor,$t=s((c,e,i,n)=>{for(var o=n>1?void 0:n?kh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Eh(e,i,o),o},"__decorateClass$h");v.DsfrDataList=($i=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.colonnes="",this.recherche=!1,this.filtres="",this.tri="",this.pagination=0,this.export="",this.urlSync=!1,this.urlPageParam="page",this.serverTri=!1,this._data=[],this._searchQuery="",this._activeFilters={},this._sort=null,this._currentPage=1,this._serverPagination=!1,this._serverTotal=0,this._serverPageSize=0,this._previousPage=1,this._popstateHandler=null,this._liveAnnouncement=""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-list"),this._initSort(),this.urlSync&&(this._applyUrlPage(),this._popstateHandler=()=>{this._applyUrlPage(),this.requestUpdate()},window.addEventListener("popstate",this._popstateHandler))}disconnectedCallback(){super.disconnectedCallback(),this._popstateHandler&&(window.removeEventListener("popstate",this._popstateHandler),this._popstateHandler=null)}willUpdate(e){super.willUpdate(e),e.has("tri")&&this._initSort()}onSourceError(e){this._serverPagination&&this._data.length>0&&(this._currentPage=this._previousPage)}onSourceData(e){this._data=Array.isArray(e)?e:[];const i=this.source?ti(this.source):void 0;i&&i.total>0?(this._serverPagination=!0,this._serverTotal=i.total,this._serverPageSize=i.pageSize,this._currentPage=i.page):(this._serverPagination=!1,this._currentPage=1)}parseColumns(){return this.colonnes?this.colonnes.split(",").map(e=>{const[i,n]=e.trim().split(":");return{key:i.trim(),label:(n==null?void 0:n.trim())||i.trim()}}):[]}_getFilterableColumns(){return this.filtres?this.filtres.split(",").map(e=>e.trim()):[]}_initSort(){if(this.tri){const[e,i]=this.tri.split(":");this._sort={key:e,direction:i||"asc"}}}_getUniqueValues(e){const i=new Set;return this._data.forEach(n=>{const o=n[e];o!=null&&i.add(String(o))}),Array.from(i).sort()}getFilteredData(){let e=[...this._data];if(this._searchQuery){const i=this._searchQuery.toLowerCase();e=e.filter(n=>Object.values(n).some(o=>String(o).toLowerCase().includes(i)))}if(Object.entries(this._activeFilters).forEach(([i,n])=>{n&&(e=e.filter(o=>String(o[i])===n))}),this._sort&&!this.serverTri){const{key:i,direction:n}=this._sort;e.sort((o,a)=>{const l=o[i],h=a[i];if(l===h)return 0;if(l==null)return 1;if(h==null)return-1;const f=typeof l=="number"&&typeof h=="number"?l-h:String(l).localeCompare(String(h),"fr");return n==="desc"?-f:f})}return e}_getPaginatedData(){const e=this.getFilteredData();if(this._serverPagination||!this.pagination||this.pagination<=0)return e;const i=(this._currentPage-1)*this.pagination;return e.slice(i,i+this.pagination)}_getTotalPages(){return this._serverPagination?Math.ceil(this._serverTotal/this._serverPageSize):!this.pagination||this.pagination<=0?1:Math.ceil(this.getFilteredData().length/this.pagination)}_applyUrlPage(){const i=new URLSearchParams(window.location.search).get(this.urlPageParam);if(i){const n=parseInt(i,10);!isNaN(n)&&n>=1&&(this._currentPage=n,this.source&&Vt(this.source,{page:n}))}}_syncPageUrl(){const e=new URLSearchParams(window.location.search);this._currentPage>1?e.set(this.urlPageParam,String(this._currentPage)):e.delete(this.urlPageParam);const i=e.toString(),n=i?`${window.location.pathname}?${i}${window.location.hash}`:`${window.location.pathname}${window.location.hash}`;window.history.replaceState(null,"",n)}_handleSearch(e){this._searchQuery=e.target.value,this._currentPage=1,this.urlSync&&this._syncPageUrl()}_handleFilter(e,i){this._activeFilters={...this._activeFilters,[e]:i.target.value},this._currentPage=1,this.urlSync&&this._syncPageUrl()}_announce(e){this._liveAnnouncement="",requestAnimationFrame(()=>{this._liveAnnouncement=e})}_handleSort(e){var o,a;const n=((o=this.parseColumns().find(l=>l.key===e))==null?void 0:o.label)??e;((a=this._sort)==null?void 0:a.key)===e?this._sort={key:e,direction:this._sort.direction==="asc"?"desc":"asc"}:this._sort={key:e,direction:"asc"},this._announce(`Tri par ${n}, ordre ${this._sort.direction==="asc"?"croissant":"decroissant"}`),this.serverTri&&this.source&&Vt(this.source,{orderBy:`${this._sort.key}:${this._sort.direction}`})}_handlePageChange(e){this._previousPage=this._currentPage,this._currentPage=e;const i=this._getTotalPages();this._announce(`Page ${e} sur ${i}`),this._serverPagination&&this.source&&Vt(this.source,{page:e}),this.urlSync&&this._syncPageUrl()}_exportCsv(){const e=this.parseColumns(),i=this.getFilteredData(),n=e.map(_=>_.label).join(";"),o=i.map(_=>e.map(g=>{const m=String(_[g.key]??"");return m.includes(";")||m.includes('"')?`"${m.replace(/"/g,'""')}"`:m}).join(";")),a=[n,...o].join(`
`),l=new Blob([a],{type:"text/csv;charset=utf-8;"}),h=URL.createObjectURL(l),f=document.createElement("a");f.href=h,f.download="export.csv",f.click(),URL.revokeObjectURL(h)}_exportHtml(){const e=this.parseColumns(),i=this.getFilteredData(),n=e.map(_=>`<th>${Gt(_.label)}</th>`).join(""),o=i.map(_=>`<tr>${e.map(m=>{const w=_[m.key];return`<td>${w==null?"":Gt(String(w))}</td>`}).join("")}</tr>`).join(`
`),a=`<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Export</title>
<style>
table { border-collapse: collapse; width: 100%; font-family: system-ui, sans-serif; }
th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
th { background: #f5f5fe; font-weight: 700; }
tr:nth-child(even) { background: #f6f6f6; }
</style>
</head>
<body>
<table>
<thead><tr>${n}</tr></thead>
<tbody>
${o}
</tbody>
</table>
</body>
</html>`,l=new Blob([a],{type:"text/html;charset=utf-8;"}),h=URL.createObjectURL(l),f=document.createElement("a");f.href=h,f.download="export.html",f.click(),URL.revokeObjectURL(h)}formatCellValue(e){return e==null?"—":typeof e=="boolean"?e?"Oui":"Non":String(e)}_renderFilters(e,i){return i.length===0?"":M`
      <div class="dsfr-data-list__filters">
        ${i.map(n=>{const o=e.find(h=>h.key===n),a=(o==null?void 0:o.label)||n,l=this._getUniqueValues(n);return M`
            <div class="fr-select-group">
              <label class="fr-label" for="filter-${n}">${a}</label>
              <select
                class="fr-select"
                id="filter-${n}"
                @change="${h=>this._handleFilter(n,h)}"
              >
                <option value="">Tous</option>
                ${l.map(h=>M`
                    <option value="${h}" ?selected="${this._activeFilters[n]===h}">
                      ${h}
                    </option>
                  `)}
              </select>
            </div>
          `})}
      </div>
    `}_renderToolbar(){var i,n,o,a;const e=((i=this.export)==null?void 0:i.includes("csv"))||((n=this.export)==null?void 0:n.includes("html"));return!this.recherche&&!e?"":M`
      <div class="dsfr-data-list__toolbar">
        ${this.recherche?M`
              <div class="fr-search-bar" role="search">
                <label class="fr-label fr-sr-only" for="search-${this.source}">Rechercher</label>
                <input
                  class="fr-input"
                  type="search"
                  id="search-${this.source}"
                  placeholder="Rechercher..."
                  .value="${this._searchQuery}"
                  @input="${this._handleSearch}"
                />
                <button class="fr-btn" title="Rechercher" type="button">
                  <span class="fr-icon-search-line" aria-hidden="true"></span>
                </button>
              </div>
            `:M`<div></div>`}

        <div class="dsfr-data-list__export-buttons">
          ${(o=this.export)!=null&&o.includes("csv")?M`
                <button
                  class="fr-btn fr-btn--secondary fr-btn--sm"
                  @click="${this._exportCsv}"
                  type="button"
                >
                  <span class="fr-icon-download-line fr-icon--sm" aria-hidden="true"></span>
                  Exporter CSV
                </button>
              `:""}
          ${(a=this.export)!=null&&a.includes("html")?M`
                <button
                  class="fr-btn fr-btn--secondary fr-btn--sm"
                  @click="${this._exportHtml}"
                  type="button"
                >
                  <span class="fr-icon-code-s-slash-line fr-icon--sm" aria-hidden="true"></span>
                  Exporter HTML
                </button>
              `:""}
        </div>
      </div>
    `}_renderTable(e,i){return M`
      <div class="fr-table fr-table--bordered">
        <table>
          <caption class="fr-sr-only">
            Liste des données
          </caption>
          <thead>
            <tr>
              ${e.map(n=>{var f;const o=((f=this._sort)==null?void 0:f.key)===n.key,a=o?this._sort.direction:null,l=a==="asc"?"ascending":a==="desc"?"descending":"none",h=o?`Trier par ${n.label}, actuellement tri ${a==="asc"?"croissant":"decroissant"}`:`Trier par ${n.label}`;return M`
                  <th scope="col" aria-sort="${l}">
                    <button
                      class="dsfr-data-list__sort-btn"
                      @click="${()=>this._handleSort(n.key)}"
                      aria-label="${h}"
                      type="button"
                    >
                      ${n.label}
                      ${o?M` <span aria-hidden="true">${a==="asc"?"↑":"↓"}</span> `:""}
                    </button>
                  </th>
                `})}
            </tr>
          </thead>
          <tbody>
            ${i.length===0?M`
                  <tr>
                    <td colspan="${e.length}" class="dsfr-data-list__empty" role="status">
                      Aucune donnée à afficher
                    </td>
                  </tr>
                `:i.map(n=>M`
                    <tr>
                      ${e.map(o=>M` <td>${this.formatCellValue(n[o.key])}</td> `)}
                    </tr>
                  `)}
          </tbody>
        </table>
      </div>
    `}_renderPagination(e){if(this.pagination<=0||e<=1)return"";const i=[];for(let n=Math.max(1,this._currentPage-2);n<=Math.min(e,this._currentPage+2);n++)i.push(n);return M`
      <nav
        class="fr-pagination"
        aria-label="${this.getAttribute("aria-label")?"Pagination - "+this.getAttribute("aria-label"):"Pagination"}"
      >
        <ul class="fr-pagination__list">
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--first"
              ?disabled="${this._currentPage===1}"
              @click="${()=>this._handlePageChange(1)}"
              aria-label="Première page"
              type="button"
            >
              Première page
            </button>
          </li>
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--prev"
              ?disabled="${this._currentPage===1}"
              @click="${()=>this._handlePageChange(this._currentPage-1)}"
              aria-label="Page précédente"
              type="button"
            >
              Page précédente
            </button>
          </li>
          ${i.map(n=>M`
              <li>
                <button
                  class="fr-pagination__link ${n===this._currentPage?"fr-pagination__link--active":""}"
                  @click="${()=>this._handlePageChange(n)}"
                  aria-current="${n===this._currentPage?"page":R}"
                  aria-label="Page ${n} sur ${e}"
                  type="button"
                >
                  ${n}
                </button>
              </li>
            `)}
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--next"
              ?disabled="${this._currentPage===e}"
              @click="${()=>this._handlePageChange(this._currentPage+1)}"
              aria-label="Page suivante"
              type="button"
            >
              Page suivante
            </button>
          </li>
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--last"
              ?disabled="${this._currentPage===e}"
              @click="${()=>this._handlePageChange(e)}"
              aria-label="Dernière page"
              type="button"
            >
              Dernière page
            </button>
          </li>
        </ul>
      </nav>
    `}render(){const e=this.parseColumns(),i=this._getFilterableColumns(),n=this._getPaginatedData(),o=this._getTotalPages(),a=this._serverPagination?this._serverTotal:this.getFilteredData().length;return M`
      <div
        class="dsfr-data-list"
        role="region"
        aria-label="${this.getAttribute("aria-label")||"Liste de donnees"}"
      >
        ${this._renderFilters(e,i)} ${this._renderToolbar()}

        <div aria-live="polite" aria-atomic="true" class="fr-sr-only">
          ${this._liveAnnouncement}
        </div>
        ${this._sourceLoading?M`
              <div class="dsfr-data-list__loading" aria-live="polite" aria-busy="true">
                <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
                Chargement des données...
              </div>
            `:this._sourceError&&!(this._serverPagination&&this._data.length>0)?M`
                <div class="dsfr-data-list__error" aria-live="assertive" role="alert">
                  <span class="fr-icon-error-line" aria-hidden="true"></span>
                  Erreur: ${this._sourceError.message}
                </div>
              `:M`
                <p class="fr-text--sm" aria-live="polite" aria-atomic="true" role="status">
                  ${a} résultat${a>1?"s":""}
                  ${!this._serverPagination&&(this._searchQuery||Object.values(this._activeFilters).some(l=>l))?" (filtré)":""}
                </p>
                ${this._renderTable(e,n)} ${this._renderPagination(o)}
              `}
      </div>

      <style>
        .dsfr-data-list__filters {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .dsfr-data-list__filters .fr-select-group {
          margin-bottom: 0;
        }
        .dsfr-data-list__toolbar {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .dsfr-data-list__toolbar .fr-search-bar {
          flex: 1;
          min-width: 200px;
          max-width: 400px;
        }
        @media (max-width: 576px) {
          .dsfr-data-list__filters {
            grid-template-columns: 1fr;
          }
          .dsfr-data-list__toolbar {
            flex-direction: column;
            align-items: stretch;
          }
          .dsfr-data-list__toolbar .fr-search-bar {
            max-width: none;
          }
        }
        .dsfr-data-list__export-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .dsfr-data-list__sort-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 700;
          font-size: inherit;
          font-family: inherit;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .dsfr-data-list__sort-btn:hover {
          text-decoration: underline;
        }
        .dsfr-data-list__loading,
        .dsfr-data-list__error {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem;
          color: var(--text-mention-grey, #666);
          font-size: 0.875rem;
        }
        .dsfr-data-list__error {
          color: var(--text-default-error, #ce0500);
        }
        .dsfr-data-list__empty {
          text-align: center;
          color: var(--text-mention-grey);
          padding: 2rem !important;
        }
      </style>
    `}},s($i,"DsfrDataList"),$i),v.DsfrDataList.styles=Kn``,$t([P({type:String})],v.DsfrDataList.prototype,"source",2),$t([P({type:String})],v.DsfrDataList.prototype,"colonnes",2),$t([P({type:Boolean})],v.DsfrDataList.prototype,"recherche",2),$t([P({type:String})],v.DsfrDataList.prototype,"filtres",2),$t([P({type:String})],v.DsfrDataList.prototype,"tri",2),$t([P({type:Number})],v.DsfrDataList.prototype,"pagination",2),$t([P({type:String})],v.DsfrDataList.prototype,"export",2),$t([P({type:Boolean,attribute:"url-sync"})],v.DsfrDataList.prototype,"urlSync",2),$t([P({type:String,attribute:"url-page-param"})],v.DsfrDataList.prototype,"urlPageParam",2),$t([P({type:Boolean,attribute:"server-tri"})],v.DsfrDataList.prototype,"serverTri",2),$t([F()],v.DsfrDataList.prototype,"_data",2),$t([F()],v.DsfrDataList.prototype,"_searchQuery",2),$t([F()],v.DsfrDataList.prototype,"_activeFilters",2),$t([F()],v.DsfrDataList.prototype,"_sort",2),$t([F()],v.DsfrDataList.prototype,"_currentPage",2),$t([F()],v.DsfrDataList.prototype,"_serverPagination",2),$t([F()],v.DsfrDataList.prototype,"_liveAnnouncement",2),v.DsfrDataList=$t([mt("dsfr-data-list")],v.DsfrDataList);var $h=Object.defineProperty,Oh=Object.getOwnPropertyDescriptor,Kt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Oh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&$h(e,i,o),o},"__decorateClass$g");v.DsfrDataDisplay=(Oi=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.cols=1,this.pagination=0,this.empty="Aucun resultat",this.gap="fr-grid-row--gutters",this.uidField="",this.urlSync=!1,this.urlPageParam="page",this._data=[],this._currentPage=1,this._serverPagination=!1,this._serverTotal=0,this._serverPageSize=0,this._templateContent="",this._hashScrollDone=!1,this._popstateHandler=null,this._liveAnnouncement=""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-display"),this._captureTemplate(),this.urlSync&&(this._applyUrlPage(),this._popstateHandler=()=>{this._applyUrlPage(),this.requestUpdate()},window.addEventListener("popstate",this._popstateHandler))}disconnectedCallback(){super.disconnectedCallback(),this._popstateHandler&&(window.removeEventListener("popstate",this._popstateHandler),this._popstateHandler=null)}onSourceData(e){this._data=Array.isArray(e)?e:[],this._hashScrollDone=!1;const i=this.source?ti(this.source):void 0;i&&i.total>0?(this._serverPagination=!0,this._serverTotal=i.total,this._serverPageSize=i.pageSize,this._currentPage=i.page):(this._serverPagination=!1,this._currentPage=1)}updated(e){if(super.updated(e),!this._hashScrollDone&&this._data.length>0&&window.location.hash){this._hashScrollDone=!0;const i=window.location.hash.substring(1);requestAnimationFrame(()=>{const n=this.querySelector(`#${CSS.escape(i)}`);n&&n.scrollIntoView({behavior:"smooth",block:"center"})})}}_captureTemplate(){const e=this.querySelector("template");e&&(this._templateContent=e.innerHTML)}_renderItem(e,i){if(!this._templateContent)return"";let n=this._templateContent;return n=n.replace(/\{\{\{([^}]+)\}\}\}/g,(o,a)=>this._resolveExpression(e,a.trim(),i)),n=n.replace(/\{\{([^}]+)\}\}/g,(o,a)=>{const l=this._resolveExpression(e,a.trim(),i);return Gt(l)}),n}_resolveExpression(e,i,n){if(i==="$index")return String(n);if(i==="$uid")return this._getItemUid(e,n);let o=i,a="";const l=i.indexOf("|");l!==-1&&(o=i.substring(0,l).trim(),a=i.substring(l+1).trim());let h="";const f=o.indexOf(":");f!==-1&&(h=o.substring(f+1).trim(),o=o.substring(0,f).trim());const _=W(e,o);return _==null?a:h?this._formatValue(_,h):String(_)}_formatValue(e,i){if(i==="number"){const n=typeof e=="number"?e:parseFloat(String(e));if(!isNaN(n))return n.toLocaleString("fr-FR")}return String(e)}_getPaginatedData(){if(this._serverPagination)return this._data;if(!this.pagination||this.pagination<=0)return this._data;const e=(this._currentPage-1)*this.pagination;return this._data.slice(e,e+this.pagination)}_getTotalPages(){return this._serverPagination?Math.ceil(this._serverTotal/this._serverPageSize):!this.pagination||this.pagination<=0?1:Math.ceil(this._data.length/this.pagination)}_applyUrlPage(){const i=new URLSearchParams(window.location.search).get(this.urlPageParam);if(i){const n=parseInt(i,10);!isNaN(n)&&n>=1&&(this._currentPage=n,this.source&&Vt(this.source,{page:n}))}}_syncPageUrl(){const e=new URLSearchParams(window.location.search);this._currentPage>1?e.set(this.urlPageParam,String(this._currentPage)):e.delete(this.urlPageParam);const i=e.toString(),n=i?`${window.location.pathname}?${i}${window.location.hash}`:`${window.location.pathname}${window.location.hash}`;window.history.replaceState(null,"",n)}_announce(e){this._liveAnnouncement="",requestAnimationFrame(()=>{this._liveAnnouncement=e})}_handlePageChange(e){this._currentPage=e;const i=this._getTotalPages();this._announce(`Page ${e} sur ${i}`),this._serverPagination&&this.source&&Vt(this.source,{page:e}),this.urlSync&&this._syncPageUrl()}_getColClass(){const e=Math.max(1,Math.min(6,this.cols));return`fr-col-12 fr-col-md-${Math.floor(12/e)}`}_getItemUid(e,i){if(this.uidField){const n=W(e,this.uidField);if(n!=null&&n!=="")return`item-${String(n).replace(/[^a-zA-Z0-9_-]/g,"_")}`}return`item-${i}`}_renderGrid(e){const i=this._getColClass(),n=this.pagination>0?(this._currentPage-1)*this.pagination:0,o=e.map((l,h)=>{const f=n+h,_=this._renderItem(l,f),g=this._getItemUid(l,f);return`<div class="${i}" id="${g}">${_}</div>`}).join(""),a=`<div class="fr-grid-row ${this.gap}">${o}</div>`;return M`<div .innerHTML="${a}"></div>`}_renderPagination(e){if(this.pagination<=0||e<=1)return"";const i=[];for(let n=Math.max(1,this._currentPage-2);n<=Math.min(e,this._currentPage+2);n++)i.push(n);return M`
      <nav
        class="fr-pagination fr-mt-2w"
        aria-label="${this.getAttribute("aria-label")?"Pagination - "+this.getAttribute("aria-label"):"Pagination"}"
      >
        <ul class="fr-pagination__list">
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--first"
              ?disabled="${this._currentPage===1}"
              @click="${()=>this._handlePageChange(1)}"
              aria-label="Première page"
              type="button"
            >
              Première page
            </button>
          </li>
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--prev"
              ?disabled="${this._currentPage===1}"
              @click="${()=>this._handlePageChange(this._currentPage-1)}"
              aria-label="Page précédente"
              type="button"
            >
              Page précédente
            </button>
          </li>
          ${i.map(n=>M`
              <li>
                <button
                  class="fr-pagination__link ${n===this._currentPage?"fr-pagination__link--active":""}"
                  @click="${()=>this._handlePageChange(n)}"
                  aria-current="${n===this._currentPage?"page":R}"
                  aria-label="Page ${n} sur ${e}"
                  type="button"
                >
                  ${n}
                </button>
              </li>
            `)}
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--next"
              ?disabled="${this._currentPage===e}"
              @click="${()=>this._handlePageChange(this._currentPage+1)}"
              aria-label="Page suivante"
              type="button"
            >
              Page suivante
            </button>
          </li>
          <li>
            <button
              class="fr-pagination__link fr-pagination__link--last"
              ?disabled="${this._currentPage===e}"
              @click="${()=>this._handlePageChange(e)}"
              aria-label="Dernière page"
              type="button"
            >
              Dernière page
            </button>
          </li>
        </ul>
      </nav>
    `}render(){this._templateContent||this._captureTemplate();const e=this._getPaginatedData(),i=this._getTotalPages(),n=this._serverPagination?this._serverTotal:this._data.length;return M`
      <div
        class="dsfr-data-display"
        role="region"
        aria-label="${this.getAttribute("aria-label")||"Liste de resultats"}"
      >
        <div aria-live="polite" aria-atomic="true" class="fr-sr-only">
          ${this._liveAnnouncement}
        </div>
        ${this._sourceLoading?M`
              <div class="dsfr-data-display__loading" aria-live="polite" aria-busy="true">
                <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
                Chargement...
              </div>
            `:this._sourceError?M`
                <div class="dsfr-data-display__error" aria-live="assertive" role="alert">
                  <span class="fr-icon-error-line" aria-hidden="true"></span>
                  Erreur de chargement
                </div>
              `:n===0?M`
                  <div class="dsfr-data-display__empty" aria-live="polite" role="status">
                    ${this.empty}
                  </div>
                `:M`
                  <p
                    class="fr-text--sm fr-mb-1w"
                    aria-live="polite"
                    aria-atomic="true"
                    role="status"
                  >
                    ${n} resultat${n>1?"s":""}
                  </p>
                  ${this._renderGrid(e)} ${this._renderPagination(i)}
                `}
      </div>

      <style>
        .dsfr-data-display__loading,
        .dsfr-data-display__error {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 2rem;
          color: var(--text-mention-grey, #666);
          font-size: 0.875rem;
        }
        .dsfr-data-display__error {
          color: var(--text-default-error, #ce0500);
        }
        .dsfr-data-display__empty {
          text-align: center;
          color: var(--text-mention-grey, #666);
          padding: 2rem;
          font-size: 0.875rem;
        }
      </style>
    `}},s(Oi,"DsfrDataDisplay"),Oi),Kt([P({type:String})],v.DsfrDataDisplay.prototype,"source",2),Kt([P({type:Number})],v.DsfrDataDisplay.prototype,"cols",2),Kt([P({type:Number})],v.DsfrDataDisplay.prototype,"pagination",2),Kt([P({type:String})],v.DsfrDataDisplay.prototype,"empty",2),Kt([P({type:String})],v.DsfrDataDisplay.prototype,"gap",2),Kt([P({type:String,attribute:"uid-field"})],v.DsfrDataDisplay.prototype,"uidField",2),Kt([P({type:Boolean,attribute:"url-sync"})],v.DsfrDataDisplay.prototype,"urlSync",2),Kt([P({type:String,attribute:"url-page-param"})],v.DsfrDataDisplay.prototype,"urlPageParam",2),Kt([F()],v.DsfrDataDisplay.prototype,"_data",2),Kt([F()],v.DsfrDataDisplay.prototype,"_currentPage",2),Kt([F()],v.DsfrDataDisplay.prototype,"_serverPagination",2),Kt([F()],v.DsfrDataDisplay.prototype,"_liveAnnouncement",2),v.DsfrDataDisplay=Kt([mt("dsfr-data-display")],v.DsfrDataDisplay);var Fh=Object.defineProperty,zh=Object.getOwnPropertyDescriptor,Q=s((c,e,i,n)=>{for(var o=n>1?void 0:n?zh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Fh(e,i,o),o},"__decorateClass$f");let Ih=0;const Rh={line:"line-chart",bar:"bar-chart",pie:"pie-chart",radar:"radar-chart",scatter:"scatter-chart",gauge:"gauge-chart","bar-line":"bar-line-chart",map:"map-chart","map-reg":"map-chart-reg"};v.DsfrDataChart=(Fi=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.type="bar",this.labelField="",this.codeField="",this.valueField="",this.valueField2="",this.valueFields="",this.name="",this.selectedPalette="categorical",this.unitTooltip="",this.unitTooltipBar="",this.horizontal=!1,this.stacked=!1,this.fill=!1,this.highlightIndex="",this.xMin="",this.xMax="",this.yMin="",this.yMax="",this.gaugeValue=null,this.mapHighlight="",this.databox=!1,this.databoxTitle="",this.databoxSource="",this.databoxDate="",this.databoxDownload=!1,this.databoxScreenshot=!1,this.databoxFullscreen=!1,this.databoxTrend="",this.databoxTooltipTitle="",this.databoxTooltipContent="",this.databoxModalTitle="",this.databoxModalContent="",this.databoxDefaultSource="",this.databoxActions="",this._data=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-chart",this.type)}onSourceData(e){this._data=Array.isArray(e)?e:[],this.databox&&this._injectDataboxTable()}_getAllValueFields(){const e=[this.valueField];return this.valueFields?e.push(...this.valueFields.split(",").map(i=>i.trim()).filter(Boolean)):this.valueField2&&e.push(this.valueField2),e}_processData(){if(!this._data||this._data.length===0)return{x:"[[]]",y:"[[]]",labels:[],values:[],values2:[]};const e=this._getAllValueFields(),i=[],n=e.map(()=>[]);for(const h of this._data){i.push(String(W(h,this.labelField)??"N/A"));for(let f=0;f<e.length;f++)n[f].push(Number(W(h,e[f]))||0)}const o=n[0]||[],a=n[1]||[],l=e.length>1;return{x:JSON.stringify([i]),y:JSON.stringify([o]),y2:l?JSON.stringify([a]):void 0,yMulti:l?JSON.stringify(n):void 0,labels:i,values:o,values2:a}}_processMapData(){if(!this._data||this._data.length===0)return"{}";const e=this.codeField||this.labelField,i={};for(const n of this._data){let o=String(W(n,e)??"").trim();/^\d+$/.test(o)&&o.length<3&&(o=o.padStart(2,"0"));const a=Number(W(n,this.valueField))||0;(this.type==="map"?Uc(o):o!=="")&&(i[o]=Math.round(a*100)/100)}return JSON.stringify(i)}_getCommonAttributes(){const e={};if(this.selectedPalette&&(e["selected-palette"]=this.selectedPalette),this.unitTooltip&&(e["unit-tooltip"]=this.unitTooltip),this.xMin&&(e["x-min"]=this.xMin),this.xMax&&(e["x-max"]=this.xMax),this.yMin&&(e["y-min"]=this.yMin),this.yMax&&(e["y-max"]=this.yMax),this.name){const i=this.name.trim(),n=this.type==="map"||this.type==="map-reg";e.name=n||i.startsWith("[")?i:JSON.stringify([i])}else if(this.valueField)if(this.type==="map"||this.type==="map-reg")e.name=this.valueField;else{const n=this._getAllValueFields();e.name=JSON.stringify(n)}return e}_getTypeSpecificAttributes(){const{x:e,y:i,yMulti:n,labels:o,values:a,values2:l}=this._processData(),h={},f={};switch(this.type){case"gauge":{const _=this.gaugeValue??(this._data.length>0&&Number(W(this._data[0],this.valueField))||0);h.percent=String(Math.round(_)),h.init="0",h.target="100";break}case"pie":h.x=e,h.y=i,!this.name&&o.length>0&&(h.name=JSON.stringify(o));break;case"bar-line":{if(h.x=JSON.stringify(o),h["y-bar"]=JSON.stringify(a),h["y-line"]=JSON.stringify(l.length?l:a),this.name)try{const _=this.name.trim(),g=_.startsWith("[")?JSON.parse(_):[_];g[0]&&(h["name-bar"]=g[0]),g[1]&&(h["name-line"]=g[1])}catch{}this.unitTooltipBar&&(h["unit-tooltip-bar"]=this.unitTooltipBar),this.unitTooltip&&(h["unit-tooltip-line"]=this.unitTooltip);break}case"map":case"map-reg":{if(f.data=this._processMapData(),this._data.length>0){let _=0,g=0;for(const m of this._data){const w=Number(W(m,this.valueField));isNaN(w)||(_+=w,g++)}if(g>0){const m=Math.round(_/g*100)/100;f.value=String(m)}}f.date=new Date().toISOString().split("T")[0];break}default:h.x=e,h.y=n||i;break}return this.type==="bar"&&(this.horizontal&&(h.horizontal="true"),this.stacked&&(h.stacked="true"),this.highlightIndex&&(h["highlight-index"]=this.highlightIndex)),this.type==="pie"&&this.fill&&(h.fill="true"),(this.type==="map"||this.type==="map-reg")&&this.mapHighlight&&(h.highlight=this.mapHighlight),{attrs:h,deferred:f}}_getAriaLabel(){const i={bar:"barres",line:"lignes",pie:"camembert",radar:"radar",gauge:"jauge",scatter:"nuage de points","bar-line":"barres et lignes",map:"carte departements","map-reg":"carte regions"}[this.type]||this.type,n=this._data.length;return`Graphique ${i}, ${n} valeurs`}_createRawChartElement(e,i,n={}){const o=document.createElement(e);for(const[a,l]of Object.entries(i))l!==void 0&&l!==""&&o.setAttribute(a,l);return Object.keys(n).length>0&&setTimeout(()=>{for(const[a,l]of Object.entries(n))o.setAttribute(a,l)},500),o}_createChartElement(e,i,n={}){const o=this._createRawChartElement(e,i,n),a=document.createElement("div");return a.className="dsfr-data-chart__wrapper",a.setAttribute("role","img"),a.setAttribute("aria-label",this._getAriaLabel()),a.appendChild(o),a}_createDataboxElement(e,i,n={}){const o=`databox-${this.id||`auto-${++Ih}`}`,a="default";i["databox-id"]=o,i["databox-type"]="chart",i["databox-source"]=a;const l=document.createElement("data-box");l.id=o,l.setAttribute("segmented-control",""),l.setAttribute("title",this.databoxTitle||" "),l.setAttribute("source",this.databoxSource||" "),l.setAttribute("date",this.databoxDate||new Date().toISOString().split("T")[0]),this.databoxDownload&&l.setAttribute("download",""),this.databoxScreenshot&&l.setAttribute("screenshot",""),this.databoxFullscreen&&l.setAttribute("fullscreen",""),this.databoxTrend&&l.setAttribute("trend",this.databoxTrend),this.databoxTooltipTitle&&l.setAttribute("tooltip-title",this.databoxTooltipTitle),this.databoxTooltipContent&&l.setAttribute("tooltip-content",this.databoxTooltipContent),this.databoxModalTitle&&l.setAttribute("modal-title",this.databoxModalTitle),this.databoxModalContent&&l.setAttribute("modal-content",this.databoxModalContent),this.databoxDefaultSource&&l.setAttribute("default-source",this.databoxDefaultSource),this.databoxActions&&l.setAttribute("actions",this.databoxActions);const h=this._createRawChartElement(e,i,n),f=document.createElement("div");f.setAttribute("databox-id",o),f.setAttribute("databox-type","table"),f.setAttribute("databox-source",a),f.style.display="none";const _=document.createElement("div");return _.className="dsfr-data-chart__databox-wrapper",_.appendChild(l),_.appendChild(h),_.appendChild(f),_}_injectDataboxTable(){!this._data||this._data.length===0||setTimeout(()=>{const e=this.querySelector(".dsfr-data-chart__databox-wrapper");if(!e)return;const i=e.querySelector("data-box");if(!i)return;const o=`${i.id}-table-default`,a=document.getElementById(o);if(!a)return;const l=[this.labelField,this.valueField].filter(Boolean);if(l.length===0)return;const h=this._data.slice(0,100),f=l.map(g=>`<th scope="col">${Gt(String(g))}</th>`).join(""),_=h.map(g=>`<tr>${l.map(w=>{const b=W(g,w);return`<td>${Gt(String(b??""))}</td>`}).join("")}</tr>`).join("");a.innerHTML=`
        <div class="fr-table fr-m-2w">
          <table>
            <thead><tr>${f}</tr></thead>
            <tbody>${_}</tbody>
          </table>
        </div>`},500)}_renderChart(){const e=Rh[this.type];if(!e)return M`<p class="fr-text--sm fr-text--error">
        Type de graphique non supporté: ${this.type}
      </p>`;const{attrs:i,deferred:n}=this._getTypeSpecificAttributes(),o={...this._getCommonAttributes(),...i};this.type==="bar-line"&&(delete o.name,delete o["unit-tooltip"]);const a=this.querySelector(".dsfr-data-chart__wrapper")||this.querySelector(".dsfr-data-chart__databox-wrapper");if(a&&a.remove(),this.databox){const h=this._createDataboxElement(e,o,n);return M`${h}`}const l=this._createChartElement(e,o,n);return M`${l}`}render(){return this._sourceLoading?M`
        <div class="dsfr-data-chart__loading" aria-live="polite">
          <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
          Chargement du graphique...
        </div>
        <style>
          .dsfr-data-chart__loading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 2rem;
            color: var(--text-mention-grey, #666);
            font-size: 0.875rem;
          }
        </style>
      `:this._sourceError?M`
        <div class="dsfr-data-chart__error" aria-live="assertive">
          <span class="fr-icon-error-line" aria-hidden="true"></span>
          Erreur de chargement: ${this._sourceError.message}
        </div>
        <style>
          .dsfr-data-chart__error {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            color: var(--text-default-error, #ce0500);
            background: var(--background-alt-red-marianne, #ffe5e5);
            border-radius: 4px;
          }
        </style>
      `:!this._data||this._data.length===0?M`
        <div class="dsfr-data-chart__empty" aria-live="polite">
          <span class="fr-icon-information-line" aria-hidden="true"></span>
          Aucune donnée disponible
        </div>
        <style>
          .dsfr-data-chart__empty {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            color: var(--text-mention-grey, #666);
            background: var(--background-alt-grey, #f5f5f5);
            border-radius: 4px;
          }
        </style>
      `:this._renderChart()}},s(Fi,"DsfrDataChart"),Fi),Q([P({type:String})],v.DsfrDataChart.prototype,"source",2),Q([P({type:String})],v.DsfrDataChart.prototype,"type",2),Q([P({type:String,attribute:"label-field"})],v.DsfrDataChart.prototype,"labelField",2),Q([P({type:String,attribute:"code-field"})],v.DsfrDataChart.prototype,"codeField",2),Q([P({type:String,attribute:"value-field"})],v.DsfrDataChart.prototype,"valueField",2),Q([P({type:String,attribute:"value-field-2"})],v.DsfrDataChart.prototype,"valueField2",2),Q([P({type:String,attribute:"value-fields"})],v.DsfrDataChart.prototype,"valueFields",2),Q([P({type:String})],v.DsfrDataChart.prototype,"name",2),Q([P({type:String,attribute:"selected-palette"})],v.DsfrDataChart.prototype,"selectedPalette",2),Q([P({type:String,attribute:"unit-tooltip"})],v.DsfrDataChart.prototype,"unitTooltip",2),Q([P({type:String,attribute:"unit-tooltip-bar"})],v.DsfrDataChart.prototype,"unitTooltipBar",2),Q([P({type:Boolean})],v.DsfrDataChart.prototype,"horizontal",2),Q([P({type:Boolean})],v.DsfrDataChart.prototype,"stacked",2),Q([P({type:Boolean})],v.DsfrDataChart.prototype,"fill",2),Q([P({type:String,attribute:"highlight-index"})],v.DsfrDataChart.prototype,"highlightIndex",2),Q([P({type:String,attribute:"x-min"})],v.DsfrDataChart.prototype,"xMin",2),Q([P({type:String,attribute:"x-max"})],v.DsfrDataChart.prototype,"xMax",2),Q([P({type:String,attribute:"y-min"})],v.DsfrDataChart.prototype,"yMin",2),Q([P({type:String,attribute:"y-max"})],v.DsfrDataChart.prototype,"yMax",2),Q([P({type:Number,attribute:"gauge-value"})],v.DsfrDataChart.prototype,"gaugeValue",2),Q([P({type:String,attribute:"map-highlight"})],v.DsfrDataChart.prototype,"mapHighlight",2),Q([P({type:Boolean})],v.DsfrDataChart.prototype,"databox",2),Q([P({type:String,attribute:"databox-title"})],v.DsfrDataChart.prototype,"databoxTitle",2),Q([P({type:String,attribute:"databox-source"})],v.DsfrDataChart.prototype,"databoxSource",2),Q([P({type:String,attribute:"databox-date"})],v.DsfrDataChart.prototype,"databoxDate",2),Q([P({type:Boolean,attribute:"databox-download"})],v.DsfrDataChart.prototype,"databoxDownload",2),Q([P({type:Boolean,attribute:"databox-screenshot"})],v.DsfrDataChart.prototype,"databoxScreenshot",2),Q([P({type:Boolean,attribute:"databox-fullscreen"})],v.DsfrDataChart.prototype,"databoxFullscreen",2),Q([P({type:String,attribute:"databox-trend"})],v.DsfrDataChart.prototype,"databoxTrend",2),Q([P({type:String,attribute:"databox-tooltip-title"})],v.DsfrDataChart.prototype,"databoxTooltipTitle",2),Q([P({type:String,attribute:"databox-tooltip-content"})],v.DsfrDataChart.prototype,"databoxTooltipContent",2),Q([P({type:String,attribute:"databox-modal-title"})],v.DsfrDataChart.prototype,"databoxModalTitle",2),Q([P({type:String,attribute:"databox-modal-content"})],v.DsfrDataChart.prototype,"databoxModalContent",2),Q([P({type:String,attribute:"databox-default-source"})],v.DsfrDataChart.prototype,"databoxDefaultSource",2),Q([P({type:String,attribute:"databox-actions"})],v.DsfrDataChart.prototype,"databoxActions",2),Q([F()],v.DsfrDataChart.prototype,"_data",2),v.DsfrDataChart=Q([mt("dsfr-data-chart")],v.DsfrDataChart);var Bh=Object.defineProperty,Nh=Object.getOwnPropertyDescriptor,ee=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Nh(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Bh(e,i,o),o},"__decorateClass$e");const Jo={sequentialDescending:["#000091","#2323B4","#4747E5","#6A6AF4","#8585F6","#A1A1F8","#C1C1FB","#E3E3FD","#F5F5FE"],sequentialAscending:["#F5F5FE","#E3E3FD","#C1C1FB","#A1A1F8","#8585F6","#6A6AF4","#4747E5","#2323B4","#000091"],categorical:["#000091","#FCC63A","#E4794A","#60E0EB","#009081","#FF6F4C","#8585F6","#CE614A","#C3992A"],neutral:["#161616","#3A3A3A","#666666","#777777","#929292","#B5B5B5","#CECECE","#E5E5E5","#F6F6F6"]};v.DsfrDataPodium=(zi=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.labelField="",this.valueField="",this.subtitle="",this.subtitleField="",this.valueUnit="",this.selectedPalette="sequentialDescending",this.maxItems=5,this.noSort=!1,this._data=[]}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-podium")}onSourceData(e){this._data=Array.isArray(e)?e:[]}_processItems(){if(!this._data.length||!this.labelField||!this.valueField)return[];let e=this._data.map(o=>({label:String(W(o,this.labelField)??""),subtitle:this.subtitleField?String(W(o,this.subtitleField)??""):this.subtitle,value:Number(W(o,this.valueField))||0,ratio:0,color:"",rank:0}));this.noSort||e.sort((o,a)=>a.value-o.value),e=e.slice(0,this.maxItems);const i=this.barMax??Math.max(...e.map(o=>o.value),1),n=Jo[this.selectedPalette]??Jo.sequentialDescending;return e.forEach((o,a)=>{o.ratio=i>0?o.value/i:0,o.color=n[a%n.length],o.rank=a+1}),e}_formatValue(e){const i=on(e);return this.valueUnit?`${i} ${this.valueUnit}`:i}_getAriaLabel(){const e=this._processItems();return e.length?`Classement : ${e.map(i=>`${i.rank}. ${i.label}, ${this._formatValue(i.value)}`).join(" ; ")}`:"Classement vide"}render(){if(this._sourceLoading)return M`
        <div class="dsfr-data-podium" role="status" aria-live="polite">
          <div class="dsfr-data-podium__loading">
            <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
            Chargement...
          </div>
        </div>
        ${this._renderStyles()}
      `;if(this._sourceError)return M`
        <div class="dsfr-data-podium" role="alert">
          <div class="dsfr-data-podium__error">
            <span class="fr-icon-error-line" aria-hidden="true"></span>
            Erreur de chargement
          </div>
        </div>
        ${this._renderStyles()}
      `;const e=this._processItems();return e.length?M`
      <ol class="dsfr-data-podium" role="list" aria-label="${this._getAriaLabel()}">
        ${e.map(i=>M`
            <li class="dsfr-data-podium__item" style="--podium-color: ${i.color}">
              <span class="dsfr-data-podium__rank" aria-hidden="true">${i.rank}</span>
              <div class="dsfr-data-podium__content">
                <div class="dsfr-data-podium__header">
                  <div class="dsfr-data-podium__label-group">
                    <span class="dsfr-data-podium__label">${i.label}</span>
                    ${i.subtitle?M`<span class="dsfr-data-podium__subtitle">${i.subtitle}</span>`:""}
                  </div>
                  <span class="dsfr-data-podium__value">${this._formatValue(i.value)}</span>
                </div>
                <div class="dsfr-data-podium__bar-track" aria-hidden="true">
                  <div
                    class="dsfr-data-podium__bar-fill"
                    style="width: ${Math.round(i.ratio*100)}%"
                  ></div>
                </div>
              </div>
            </li>
          `)}
      </ol>
      ${this._renderStyles()}
    `:M`
        <div class="dsfr-data-podium">
          <div class="dsfr-data-podium__empty">Aucune donnee</div>
        </div>
        ${this._renderStyles()}
      `}_renderStyles(){return M`
      <style>
        .dsfr-data-podium {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .dsfr-data-podium__item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--background-default-grey);
          border-radius: 0.25rem;
          border-left: 4px solid var(--podium-color, var(--border-default-grey));
        }
        .dsfr-data-podium__rank {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-mention-grey);
          min-width: 1.75rem;
          text-align: center;
          flex-shrink: 0;
        }
        .dsfr-data-podium__content {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .dsfr-data-podium__header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
        }
        .dsfr-data-podium__label-group {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .dsfr-data-podium__label {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-title-grey);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dsfr-data-podium__subtitle {
          font-size: 0.75rem;
          color: var(--text-mention-grey);
        }
        .dsfr-data-podium__value {
          font-size: 1.125rem;
          font-weight: 700;
          color: var(--text-mention-grey);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .dsfr-data-podium__bar-track {
          height: 6px;
          background: var(--background-alt-grey);
          border-radius: 3px;
          overflow: hidden;
        }
        .dsfr-data-podium__bar-fill {
          height: 100%;
          background: var(--podium-color, var(--background-flat-info));
          border-radius: 3px;
          transition: width 0.3s ease;
        }
        .dsfr-data-podium__loading,
        .dsfr-data-podium__error,
        .dsfr-data-podium__empty {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 1.5rem;
          color: var(--text-mention-grey);
          font-size: 0.875rem;
        }
        .dsfr-data-podium__error {
          color: var(--text-default-error);
        }
      </style>
    `}},s(zi,"DsfrDataPodium"),zi),v.DsfrDataPodium.styles=[],ee([P({type:String})],v.DsfrDataPodium.prototype,"source",2),ee([P({type:String,attribute:"label-field"})],v.DsfrDataPodium.prototype,"labelField",2),ee([P({type:String,attribute:"value-field"})],v.DsfrDataPodium.prototype,"valueField",2),ee([P({type:String})],v.DsfrDataPodium.prototype,"subtitle",2),ee([P({type:String,attribute:"subtitle-field"})],v.DsfrDataPodium.prototype,"subtitleField",2),ee([P({type:String,attribute:"value-unit"})],v.DsfrDataPodium.prototype,"valueUnit",2),ee([P({type:String,attribute:"selected-palette"})],v.DsfrDataPodium.prototype,"selectedPalette",2),ee([P({type:Number,attribute:"max-items"})],v.DsfrDataPodium.prototype,"maxItems",2),ee([P({type:Boolean,attribute:"no-sort"})],v.DsfrDataPodium.prototype,"noSort",2),ee([P({type:Number,attribute:"bar-max"})],v.DsfrDataPodium.prototype,"barMax",2),ee([F()],v.DsfrDataPodium.prototype,"_data",2),v.DsfrDataPodium=ee([mt("dsfr-data-podium")],v.DsfrDataPodium);const ma=class ma{constructor(){this._partials=new Float64Array(32),this._n=0}add(e){const i=this._partials;let n=0;for(let o=0;o<this._n&&o<32;o++){const a=i[o],l=e+a,h=Math.abs(e)<Math.abs(a)?e-(l-a):a-(l-e);h&&(i[n++]=h),e=l}return i[n]=e,this._n=n+1,this}valueOf(){const e=this._partials;let i=this._n,n,o,a,l=0;if(i>0){for(l=e[--i];i>0&&(n=l,o=e[--i],l=n+o,a=o-(l-n),!a););i>0&&(a<0&&e[i-1]<0||a>0&&e[i-1]>0)&&(o=a*2,n=l+o,o==n-l&&(l=n))}return l}};s(ma,"Adder");let Te=ma;function*Uh(c){for(const e of c)yield*e}s(Uh,"flatten");function Yo(c){return Array.from(Uh(c))}s(Yo,"merge");var ft=1e-6,at=Math.PI,ie=at/2,Qo=at/4,re=at*2,Ee=180/at,Jt=at/180,bt=Math.abs,Zh=Math.atan,gr=Math.atan2,xt=Math.cos,Dt=Math.sin,Gh=Math.sign||function(c){return c>0?1:c<0?-1:0},ii=Math.sqrt;function jh(c){return c>1?0:c<-1?at:Math.acos(c)}s(jh,"acos");function vr(c){return c>1?ie:c<-1?-ie:Math.asin(c)}s(vr,"asin");function ne(){}s(ne,"noop");function ln(c,e){c&&tl.hasOwnProperty(c.type)&&tl[c.type](c,e)}s(ln,"streamGeometry");var Xo={Feature:s(function(c,e){ln(c.geometry,e)},"Feature"),FeatureCollection:s(function(c,e){for(var i=c.features,n=-1,o=i.length;++n<o;)ln(i[n].geometry,e)},"FeatureCollection")},tl={Sphere:s(function(c,e){e.sphere()},"Sphere"),Point:s(function(c,e){c=c.coordinates,e.point(c[0],c[1],c[2])},"Point"),MultiPoint:s(function(c,e){for(var i=c.coordinates,n=-1,o=i.length;++n<o;)c=i[n],e.point(c[0],c[1],c[2])},"MultiPoint"),LineString:s(function(c,e){ks(c.coordinates,e,0)},"LineString"),MultiLineString:s(function(c,e){for(var i=c.coordinates,n=-1,o=i.length;++n<o;)ks(i[n],e,0)},"MultiLineString"),Polygon:s(function(c,e){el(c.coordinates,e)},"Polygon"),MultiPolygon:s(function(c,e){for(var i=c.coordinates,n=-1,o=i.length;++n<o;)el(i[n],e)},"MultiPolygon"),GeometryCollection:s(function(c,e){for(var i=c.geometries,n=-1,o=i.length;++n<o;)ln(i[n],e)},"GeometryCollection")};function ks(c,e,i){var n=-1,o=c.length-i,a;for(e.lineStart();++n<o;)a=c[n],e.point(a[0],a[1],a[2]);e.lineEnd()}s(ks,"streamLine");function el(c,e){var i=-1,n=c.length;for(e.polygonStart();++i<n;)ks(c[i],e,1);e.polygonEnd()}s(el,"streamPolygon");function bi(c,e){c&&Xo.hasOwnProperty(c.type)?Xo[c.type](c,e):ln(c,e)}s(bi,"geoStream");function $s(c){return[gr(c[1],c[0]),vr(c[2])]}s($s,"spherical");function wi(c){var e=c[0],i=c[1],n=xt(i);return[n*xt(e),n*Dt(e),Dt(i)]}s(wi,"cartesian");function un(c,e){return c[0]*e[0]+c[1]*e[1]+c[2]*e[2]}s(un,"cartesianDot");function cn(c,e){return[c[1]*e[2]-c[2]*e[1],c[2]*e[0]-c[0]*e[2],c[0]*e[1]-c[1]*e[0]]}s(cn,"cartesianCross");function Os(c,e){c[0]+=e[0],c[1]+=e[1],c[2]+=e[2]}s(Os,"cartesianAddInPlace");function hn(c,e){return[c[0]*e,c[1]*e,c[2]*e]}s(hn,"cartesianScale");function Fs(c){var e=ii(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);c[0]/=e,c[1]/=e,c[2]/=e}s(Fs,"cartesianNormalizeInPlace");function zs(c,e){function i(n,o){return n=c(n,o),e(n[0],n[1])}return s(i,"compose"),c.invert&&e.invert&&(i.invert=function(n,o){return n=e.invert(n,o),n&&c.invert(n[0],n[1])}),i}s(zs,"compose");function Is(c,e){return bt(c)>at&&(c-=Math.round(c/re)*re),[c,e]}s(Is,"rotationIdentity"),Is.invert=Is;function qh(c,e,i){return(c%=re)?e||i?zs(rl(c),nl(e,i)):rl(c):e||i?nl(e,i):Is}s(qh,"rotateRadians");function il(c){return function(e,i){return e+=c,bt(e)>at&&(e-=Math.round(e/re)*re),[e,i]}}s(il,"forwardRotationLambda");function rl(c){var e=il(c);return e.invert=il(-c),e}s(rl,"rotationLambda");function nl(c,e){var i=xt(c),n=Dt(c),o=xt(e),a=Dt(e);function l(h,f){var _=xt(f),g=xt(h)*_,m=Dt(h)*_,w=Dt(f),b=w*i+g*n;return[gr(m*o-b*a,g*i-w*n),vr(b*o+m*a)]}return s(l,"rotation"),l.invert=function(h,f){var _=xt(f),g=xt(h)*_,m=Dt(h)*_,w=Dt(f),b=w*o-m*a;return[gr(m*o+w*a,g*i+b*n),vr(b*i-g*n)]},l}s(nl,"rotationPhiGamma");function Hh(c,e,i,n,o,a){if(i){var l=xt(e),h=Dt(e),f=n*i;o==null?(o=e+n*re,a=e-f/2):(o=sl(l,o),a=sl(l,a),(n>0?o<a:o>a)&&(o+=n*re));for(var _,g=o;n>0?g>a:g<a;g-=f)_=$s([l,-h*xt(g),-h*Dt(g)]),c.point(_[0],_[1])}}s(Hh,"circleStream");function sl(c,e){e=wi(e),e[0]-=c,Fs(e);var i=jh(-e[1]);return((-e[2]<0?-i:i)+re-ft)%re}s(sl,"circleRadius");function al(){var c=[],e;return{point:s(function(i,n,o){e.push([i,n,o])},"point"),lineStart:s(function(){c.push(e=[])},"lineStart"),lineEnd:ne,rejoin:s(function(){c.length>1&&c.push(c.pop().concat(c.shift()))},"rejoin"),result:s(function(){var i=c;return c=[],e=null,i},"result")}}s(al,"clipBuffer");function dn(c,e){return bt(c[0]-e[0])<ft&&bt(c[1]-e[1])<ft}s(dn,"pointEqual");function fn(c,e,i,n){this.x=c,this.z=e,this.o=i,this.e=n,this.v=!1,this.n=this.p=null}s(fn,"Intersection");function ol(c,e,i,n,o){var a=[],l=[],h,f;if(c.forEach(function(S){if(!((x=S.length-1)<=0)){var x,T=S[0],E=S[x],O;if(dn(T,E)){if(!T[2]&&!E[2]){for(o.lineStart(),h=0;h<x;++h)o.point((T=S[h])[0],T[1]);o.lineEnd();return}E[0]+=2*ft}a.push(O=new fn(T,S,null,!0)),l.push(O.o=new fn(T,null,O,!1)),a.push(O=new fn(E,S,null,!1)),l.push(O.o=new fn(E,null,O,!0))}}),!!a.length){for(l.sort(e),ll(a),ll(l),h=0,f=l.length;h<f;++h)l[h].e=i=!i;for(var _=a[0],g,m;;){for(var w=_,b=!0;w.v;)if((w=w.n)===_)return;g=w.z,o.lineStart();do{if(w.v=w.o.v=!0,w.e){if(b)for(h=0,f=g.length;h<f;++h)o.point((m=g[h])[0],m[1]);else n(w.x,w.n.x,1,o);w=w.n}else{if(b)for(g=w.p.z,h=g.length-1;h>=0;--h)o.point((m=g[h])[0],m[1]);else n(w.x,w.p.x,-1,o);w=w.p}w=w.o,g=w.z,b=!b}while(!w.v);o.lineEnd()}}}s(ol,"clipRejoin");function ll(c){if(e=c.length){for(var e,i=0,n=c[0],o;++i<e;)n.n=o=c[i],o.p=n,n=o;n.n=o=c[0],o.p=n}}s(ll,"link");function Rs(c){return bt(c[0])<=at?c[0]:Gh(c[0])*((bt(c[0])+at)%re-at)}s(Rs,"longitude");function Wh(c,e){var i=Rs(e),n=e[1],o=Dt(n),a=[Dt(i),-xt(i),0],l=0,h=0,f=new Te;o===1?n=ie+ft:o===-1&&(n=-ie-ft);for(var _=0,g=c.length;_<g;++_)if(w=(m=c[_]).length)for(var m,w,b=m[w-1],S=Rs(b),x=b[1]/2+Qo,T=Dt(x),E=xt(x),O=0;O<w;++O,S=B,T=V,E=ht,b=I){var I=m[O],B=Rs(I),G=I[1]/2+Qo,V=Dt(G),ht=xt(G),rt=B-S,et=rt>=0?1:-1,pt=et*rt,N=pt>at,_t=T*V;if(f.add(gr(_t*et*Dt(pt),E*ht+_t*xt(pt))),l+=N?rt+et*re:rt,N^S>=i^B>=i){var Pt=cn(wi(b),wi(I));Fs(Pt);var X=cn(a,Pt);Fs(X);var $=(N^rt>=0?-1:1)*vr(X[2]);(n>$||n===$&&(Pt[0]||Pt[1]))&&(h+=N^rt>=0?1:-1)}}return(l<-ft||l<ft&&f<-1e-12)^h&1}s(Wh,"polygonContains");function ul(c,e,i,n){return function(o){var a=e(o),l=al(),h=e(l),f=!1,_,g,m,w={point:b,lineStart:x,lineEnd:T,polygonStart:s(function(){w.point=E,w.lineStart=O,w.lineEnd=I,g=[],_=[]},"polygonStart"),polygonEnd:s(function(){w.point=b,w.lineStart=x,w.lineEnd=T,g=Yo(g);var B=Wh(_,n);g.length?(f||(o.polygonStart(),f=!0),ol(g,Kh,B,i,o)):B&&(f||(o.polygonStart(),f=!0),o.lineStart(),i(null,null,1,o),o.lineEnd()),f&&(o.polygonEnd(),f=!1),g=_=null},"polygonEnd"),sphere:s(function(){o.polygonStart(),o.lineStart(),i(null,null,1,o),o.lineEnd(),o.polygonEnd()},"sphere")};function b(B,G){c(B,G)&&o.point(B,G)}s(b,"point");function S(B,G){a.point(B,G)}s(S,"pointLine");function x(){w.point=S,a.lineStart()}s(x,"lineStart");function T(){w.point=b,a.lineEnd()}s(T,"lineEnd");function E(B,G){m.push([B,G]),h.point(B,G)}s(E,"pointRing");function O(){h.lineStart(),m=[]}s(O,"ringStart");function I(){E(m[0][0],m[0][1]),h.lineEnd();var B=h.clean(),G=l.result(),V,ht=G.length,rt,et,pt;if(m.pop(),_.push(m),m=null,!!ht){if(B&1){if(et=G[0],(rt=et.length-1)>0){for(f||(o.polygonStart(),f=!0),o.lineStart(),V=0;V<rt;++V)o.point((pt=et[V])[0],pt[1]);o.lineEnd()}return}ht>1&&B&2&&G.push(G.pop().concat(G.shift())),g.push(G.filter(Vh))}}return s(I,"ringEnd"),w}}s(ul,"clip");function Vh(c){return c.length>1}s(Vh,"validSegment");function Kh(c,e){return((c=c.x)[0]<0?c[1]-ie-ft:ie-c[1])-((e=e.x)[0]<0?e[1]-ie-ft:ie-e[1])}s(Kh,"compareIntersection");const cl=ul(function(){return!0},Jh,Qh,[-at,-ie]);function Jh(c){var e=NaN,i=NaN,n=NaN,o;return{lineStart:s(function(){c.lineStart(),o=1},"lineStart"),point:s(function(a,l){var h=a>0?at:-at,f=bt(a-e);bt(f-at)<ft?(c.point(e,i=(i+l)/2>0?ie:-ie),c.point(n,i),c.lineEnd(),c.lineStart(),c.point(h,i),c.point(a,i),o=0):n!==h&&f>=at&&(bt(e-n)<ft&&(e-=n*ft),bt(a-h)<ft&&(a-=h*ft),i=Yh(e,i,a,l),c.point(n,i),c.lineEnd(),c.lineStart(),c.point(h,i),o=0),c.point(e=a,i=l),n=h},"point"),lineEnd:s(function(){c.lineEnd(),e=i=NaN},"lineEnd"),clean:s(function(){return 2-o},"clean")}}s(Jh,"clipAntimeridianLine");function Yh(c,e,i,n){var o,a,l=Dt(c-i);return bt(l)>ft?Zh((Dt(e)*(a=xt(n))*Dt(i)-Dt(n)*(o=xt(e))*Dt(c))/(o*a*l)):(e+n)/2}s(Yh,"clipAntimeridianIntersect");function Qh(c,e,i,n){var o;if(c==null)o=i*ie,n.point(-at,o),n.point(0,o),n.point(at,o),n.point(at,0),n.point(at,-o),n.point(0,-o),n.point(-at,-o),n.point(-at,0),n.point(-at,o);else if(bt(c[0]-e[0])>ft){var a=c[0]<e[0]?at:-at;o=i*a/2,n.point(-a,o),n.point(0,o),n.point(a,o)}else n.point(e[0],e[1])}s(Qh,"clipAntimeridianInterpolate");function Xh(c){var e=xt(c),i=2*Jt,n=e>0,o=bt(e)>ft;function a(g,m,w,b){Hh(b,c,i,w,g,m)}s(a,"interpolate");function l(g,m){return xt(g)*xt(m)>e}s(l,"visible");function h(g){var m,w,b,S,x;return{lineStart:s(function(){S=b=!1,x=1},"lineStart"),point:s(function(T,E){var O=[T,E],I,B=l(T,E),G=n?B?0:_(T,E):B?_(T+(T<0?at:-at),E):0;if(!m&&(S=b=B)&&g.lineStart(),B!==b&&(I=f(m,O),(!I||dn(m,I)||dn(O,I))&&(O[2]=1)),B!==b)x=0,B?(g.lineStart(),I=f(O,m),g.point(I[0],I[1])):(I=f(m,O),g.point(I[0],I[1],2),g.lineEnd()),m=I;else if(o&&m&&n^B){var V;!(G&w)&&(V=f(O,m,!0))&&(x=0,n?(g.lineStart(),g.point(V[0][0],V[0][1]),g.point(V[1][0],V[1][1]),g.lineEnd()):(g.point(V[1][0],V[1][1]),g.lineEnd(),g.lineStart(),g.point(V[0][0],V[0][1],3)))}B&&(!m||!dn(m,O))&&g.point(O[0],O[1]),m=O,b=B,w=G},"point"),lineEnd:s(function(){b&&g.lineEnd(),m=null},"lineEnd"),clean:s(function(){return x|(S&&b)<<1},"clean")}}s(h,"clipLine");function f(g,m,w){var b=wi(g),S=wi(m),x=[1,0,0],T=cn(b,S),E=un(T,T),O=T[0],I=E-O*O;if(!I)return!w&&g;var B=e*E/I,G=-e*O/I,V=cn(x,T),ht=hn(x,B),rt=hn(T,G);Os(ht,rt);var et=V,pt=un(ht,et),N=un(et,et),_t=pt*pt-N*(un(ht,ht)-1);if(!(_t<0)){var Pt=ii(_t),X=hn(et,(-pt-Pt)/N);if(Os(X,ht),X=$s(X),!w)return X;var $=g[0],q=m[0],wt=g[1],U=m[1],Nt;q<$&&(Nt=$,$=q,q=Nt);var j=q-$,ot=bt(j-at)<ft,Ct=ot||j<ft;if(!ot&&U<wt&&(Nt=wt,wt=U,U=Nt),Ct?ot?wt+U>0^X[1]<(bt(X[0]-$)<ft?wt:U):wt<=X[1]&&X[1]<=U:j>at^($<=X[0]&&X[0]<=q)){var St=hn(et,(-pt+Pt)/N);return Os(St,ht),[X,$s(St)]}}}s(f,"intersect");function _(g,m){var w=n?c:at-c,b=0;return g<-w?b|=1:g>w&&(b|=2),m<-w?b|=4:m>w&&(b|=8),b}return s(_,"code"),ul(l,h,a,n?[0,-c]:[-at,c-at])}s(Xh,"clipCircle");function td(c,e,i,n,o,a){var l=c[0],h=c[1],f=e[0],_=e[1],g=0,m=1,w=f-l,b=_-h,S;if(S=i-l,!(!w&&S>0)){if(S/=w,w<0){if(S<g)return;S<m&&(m=S)}else if(w>0){if(S>m)return;S>g&&(g=S)}if(S=o-l,!(!w&&S<0)){if(S/=w,w<0){if(S>m)return;S>g&&(g=S)}else if(w>0){if(S<g)return;S<m&&(m=S)}if(S=n-h,!(!b&&S>0)){if(S/=b,b<0){if(S<g)return;S<m&&(m=S)}else if(b>0){if(S>m)return;S>g&&(g=S)}if(S=a-h,!(!b&&S<0)){if(S/=b,b<0){if(S>m)return;S>g&&(g=S)}else if(b>0){if(S<g)return;S<m&&(m=S)}return g>0&&(c[0]=l+g*w,c[1]=h+g*b),m<1&&(e[0]=l+m*w,e[1]=h+m*b),!0}}}}}s(td,"clipLine");var yr=1e9,pn=-yr;function ed(c,e,i,n){function o(_,g){return c<=_&&_<=i&&e<=g&&g<=n}s(o,"visible");function a(_,g,m,w){var b=0,S=0;if(_==null||(b=l(_,m))!==(S=l(g,m))||f(_,g)<0^m>0)do w.point(b===0||b===3?c:i,b>1?n:e);while((b=(b+m+4)%4)!==S);else w.point(g[0],g[1])}s(a,"interpolate");function l(_,g){return bt(_[0]-c)<ft?g>0?0:3:bt(_[0]-i)<ft?g>0?2:1:bt(_[1]-e)<ft?g>0?1:0:g>0?3:2}s(l,"corner");function h(_,g){return f(_.x,g.x)}s(h,"compareIntersection");function f(_,g){var m=l(_,1),w=l(g,1);return m!==w?m-w:m===0?g[1]-_[1]:m===1?_[0]-g[0]:m===2?_[1]-g[1]:g[0]-_[0]}return s(f,"comparePoint"),function(_){var g=_,m=al(),w,b,S,x,T,E,O,I,B,G,V,ht={point:rt,lineStart:_t,lineEnd:Pt,polygonStart:pt,polygonEnd:N};function rt($,q){o($,q)&&g.point($,q)}s(rt,"point");function et(){for(var $=0,q=0,wt=b.length;q<wt;++q)for(var U=b[q],Nt=1,j=U.length,ot=U[0],Ct,St,vt=ot[0],it=ot[1];Nt<j;++Nt)Ct=vt,St=it,ot=U[Nt],vt=ot[0],it=ot[1],St<=n?it>n&&(vt-Ct)*(n-St)>(it-St)*(c-Ct)&&++$:it<=n&&(vt-Ct)*(n-St)<(it-St)*(c-Ct)&&--$;return $}s(et,"polygonInside");function pt(){g=m,w=[],b=[],V=!0}s(pt,"polygonStart");function N(){var $=et(),q=V&&$,wt=(w=Yo(w)).length;(q||wt)&&(_.polygonStart(),q&&(_.lineStart(),a(null,null,1,_),_.lineEnd()),wt&&ol(w,h,$,a,_),_.polygonEnd()),g=_,w=b=S=null}s(N,"polygonEnd");function _t(){ht.point=X,b&&b.push(S=[]),G=!0,B=!1,O=I=NaN}s(_t,"lineStart");function Pt(){w&&(X(x,T),E&&B&&m.rejoin(),w.push(m.result())),ht.point=rt,B&&g.lineEnd()}s(Pt,"lineEnd");function X($,q){var wt=o($,q);if(b&&S.push([$,q]),G)x=$,T=q,E=wt,G=!1,wt&&(g.lineStart(),g.point($,q));else if(wt&&B)g.point($,q);else{var U=[O=Math.max(pn,Math.min(yr,O)),I=Math.max(pn,Math.min(yr,I))],Nt=[$=Math.max(pn,Math.min(yr,$)),q=Math.max(pn,Math.min(yr,q))];td(U,Nt,c,e,i,n)?(B||(g.lineStart(),g.point(U[0],U[1])),g.point(Nt[0],Nt[1]),wt||g.lineEnd(),V=!1):wt&&(g.lineStart(),g.point($,q),V=!1)}O=$,I=q,B=wt}return s(X,"linePoint"),ht}}s(ed,"clipRectangle");const Bs=s(c=>c,"identity$1");var Ns=new Te,Us=new Te,hl,dl,Zs,Gs,ke={point:ne,lineStart:ne,lineEnd:ne,polygonStart:s(function(){ke.lineStart=id,ke.lineEnd=nd},"polygonStart"),polygonEnd:s(function(){ke.lineStart=ke.lineEnd=ke.point=ne,Ns.add(bt(Us)),Us=new Te},"polygonEnd"),result:s(function(){var c=Ns/2;return Ns=new Te,c},"result")};function id(){ke.point=rd}s(id,"areaRingStart");function rd(c,e){ke.point=fl,hl=Zs=c,dl=Gs=e}s(rd,"areaPointFirst");function fl(c,e){Us.add(Gs*c-Zs*e),Zs=c,Gs=e}s(fl,"areaPoint");function nd(){fl(hl,dl)}s(nd,"areaRingEnd");var Si=1/0,_n=Si,br=-Si,mn=br,gn={point:sd,lineStart:ne,lineEnd:ne,polygonStart:ne,polygonEnd:ne,result:s(function(){var c=[[Si,_n],[br,mn]];return br=mn=-(_n=Si=1/0),c},"result")};function sd(c,e){c<Si&&(Si=c),c>br&&(br=c),e<_n&&(_n=e),e>mn&&(mn=e)}s(sd,"boundsPoint");var js=0,qs=0,wr=0,vn=0,yn=0,Pi=0,Hs=0,Ws=0,Sr=0,pl,_l,be,we,se={point:ri,lineStart:ml,lineEnd:gl,polygonStart:s(function(){se.lineStart=ld,se.lineEnd=ud},"polygonStart"),polygonEnd:s(function(){se.point=ri,se.lineStart=ml,se.lineEnd=gl},"polygonEnd"),result:s(function(){var c=Sr?[Hs/Sr,Ws/Sr]:Pi?[vn/Pi,yn/Pi]:wr?[js/wr,qs/wr]:[NaN,NaN];return js=qs=wr=vn=yn=Pi=Hs=Ws=Sr=0,c},"result")};function ri(c,e){js+=c,qs+=e,++wr}s(ri,"centroidPoint");function ml(){se.point=ad}s(ml,"centroidLineStart");function ad(c,e){se.point=od,ri(be=c,we=e)}s(ad,"centroidPointFirstLine");function od(c,e){var i=c-be,n=e-we,o=ii(i*i+n*n);vn+=o*(be+c)/2,yn+=o*(we+e)/2,Pi+=o,ri(be=c,we=e)}s(od,"centroidPointLine");function gl(){se.point=ri}s(gl,"centroidLineEnd");function ld(){se.point=cd}s(ld,"centroidRingStart");function ud(){vl(pl,_l)}s(ud,"centroidRingEnd");function cd(c,e){se.point=vl,ri(pl=be=c,_l=we=e)}s(cd,"centroidPointFirstRing");function vl(c,e){var i=c-be,n=e-we,o=ii(i*i+n*n);vn+=o*(be+c)/2,yn+=o*(we+e)/2,Pi+=o,o=we*c-be*e,Hs+=o*(be+c),Ws+=o*(we+e),Sr+=o*3,ri(be=c,we=e)}s(vl,"centroidPointRing");function yl(c){this._context=c}s(yl,"PathContext"),yl.prototype={_radius:4.5,pointRadius:s(function(c){return this._radius=c,this},"pointRadius"),polygonStart:s(function(){this._line=0},"polygonStart"),polygonEnd:s(function(){this._line=NaN},"polygonEnd"),lineStart:s(function(){this._point=0},"lineStart"),lineEnd:s(function(){this._line===0&&this._context.closePath(),this._point=NaN},"lineEnd"),point:s(function(c,e){switch(this._point){case 0:{this._context.moveTo(c,e),this._point=1;break}case 1:{this._context.lineTo(c,e);break}default:{this._context.moveTo(c+this._radius,e),this._context.arc(c,e,this._radius,0,re);break}}},"point"),result:ne};var Vs=new Te,Ks,bl,wl,Pr,Lr,Cr={point:ne,lineStart:s(function(){Cr.point=hd},"lineStart"),lineEnd:s(function(){Ks&&Sl(bl,wl),Cr.point=ne},"lineEnd"),polygonStart:s(function(){Ks=!0},"polygonStart"),polygonEnd:s(function(){Ks=null},"polygonEnd"),result:s(function(){var c=+Vs;return Vs=new Te,c},"result")};function hd(c,e){Cr.point=Sl,bl=Pr=c,wl=Lr=e}s(hd,"lengthPointFirst");function Sl(c,e){Pr-=c,Lr-=e,Vs.add(ii(Pr*Pr+Lr*Lr)),Pr=c,Lr=e}s(Sl,"lengthPoint");let Pl,bn,Ll,Cl;const ga=class ga{constructor(e){this._append=e==null?xl:dd(e),this._radius=4.5,this._=""}pointRadius(e){return this._radius=+e,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(e,i){switch(this._point){case 0:{this._append`M${e},${i}`,this._point=1;break}case 1:{this._append`L${e},${i}`;break}default:{if(this._append`M${e},${i}`,this._radius!==Ll||this._append!==bn){const n=this._radius,o=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Ll=n,bn=this._append,Cl=this._,this._=o}this._+=Cl;break}}}result(){const e=this._;return this._="",e.length?e:null}};s(ga,"PathString");let wn=ga;function xl(c){let e=1;this._+=c[0];for(const i=c.length;e<i;++e)this._+=arguments[e]+c[e]}s(xl,"append");function dd(c){const e=Math.floor(c);if(!(e>=0))throw new RangeError(`invalid digits: ${c}`);if(e>15)return xl;if(e!==Pl){const i=10**e;Pl=e,bn=s(function(o){let a=1;this._+=o[0];for(const l=o.length;a<l;++a)this._+=Math.round(arguments[a]*i)/i+o[a]},"append")}return bn}s(dd,"appendRound");function fd(c,e){let i=3,n=4.5,o,a;function l(h){return h&&(typeof n=="function"&&a.pointRadius(+n.apply(this,arguments)),bi(h,o(a))),a.result()}return s(l,"path"),l.area=function(h){return bi(h,o(ke)),ke.result()},l.measure=function(h){return bi(h,o(Cr)),Cr.result()},l.bounds=function(h){return bi(h,o(gn)),gn.result()},l.centroid=function(h){return bi(h,o(se)),se.result()},l.projection=function(h){return arguments.length?(o=h==null?(c=null,Bs):(c=h).stream,l):c},l.context=function(h){return arguments.length?(a=h==null?(e=null,new wn(i)):new yl(e=h),typeof n!="function"&&a.pointRadius(n),l):e},l.pointRadius=function(h){return arguments.length?(n=typeof h=="function"?h:(a.pointRadius(+h),+h),l):n},l.digits=function(h){if(!arguments.length)return i;if(h==null)i=null;else{const f=Math.floor(h);if(!(f>=0))throw new RangeError(`invalid digits: ${h}`);i=f}return e===null&&(a=new wn(i)),l},l.projection(c).digits(i).context(e)}s(fd,"geoPath");function Js(c){return function(e){var i=new Ys;for(var n in c)i[n]=c[n];return i.stream=e,i}}s(Js,"transformer");function Ys(){}s(Ys,"TransformStream"),Ys.prototype={constructor:Ys,point:s(function(c,e){this.stream.point(c,e)},"point"),sphere:s(function(){this.stream.sphere()},"sphere"),lineStart:s(function(){this.stream.lineStart()},"lineStart"),lineEnd:s(function(){this.stream.lineEnd()},"lineEnd"),polygonStart:s(function(){this.stream.polygonStart()},"polygonStart"),polygonEnd:s(function(){this.stream.polygonEnd()},"polygonEnd")};function Qs(c,e,i){var n=c.clipExtent&&c.clipExtent();return c.scale(150).translate([0,0]),n!=null&&c.clipExtent(null),bi(i,c.stream(gn)),e(gn.result()),n!=null&&c.clipExtent(n),c}s(Qs,"fit");function Dl(c,e,i){return Qs(c,function(n){var o=e[1][0]-e[0][0],a=e[1][1]-e[0][1],l=Math.min(o/(n[1][0]-n[0][0]),a/(n[1][1]-n[0][1])),h=+e[0][0]+(o-l*(n[1][0]+n[0][0]))/2,f=+e[0][1]+(a-l*(n[1][1]+n[0][1]))/2;c.scale(150*l).translate([h,f])},i)}s(Dl,"fitExtent");function pd(c,e,i){return Dl(c,[[0,0],e],i)}s(pd,"fitSize");function _d(c,e,i){return Qs(c,function(n){var o=+e,a=o/(n[1][0]-n[0][0]),l=(o-a*(n[1][0]+n[0][0]))/2,h=-a*n[0][1];c.scale(150*a).translate([l,h])},i)}s(_d,"fitWidth");function md(c,e,i){return Qs(c,function(n){var o=+e,a=o/(n[1][1]-n[0][1]),l=-a*n[0][0],h=(o-a*(n[1][1]+n[0][1]))/2;c.scale(150*a).translate([l,h])},i)}s(md,"fitHeight");var Ml=16,gd=xt(30*Jt);function Al(c,e){return+e?yd(c,e):vd(c)}s(Al,"resample$1");function vd(c){return Js({point:s(function(e,i){e=c(e,i),this.stream.point(e[0],e[1])},"point")})}s(vd,"resampleNone");function yd(c,e){function i(n,o,a,l,h,f,_,g,m,w,b,S,x,T){var E=_-n,O=g-o,I=E*E+O*O;if(I>4*e&&x--){var B=l+w,G=h+b,V=f+S,ht=ii(B*B+G*G+V*V),rt=vr(V/=ht),et=bt(bt(V)-1)<ft||bt(a-m)<ft?(a+m)/2:gr(G,B),pt=c(et,rt),N=pt[0],_t=pt[1],Pt=N-n,X=_t-o,$=O*Pt-E*X;($*$/I>e||bt((E*Pt+O*X)/I-.5)>.3||l*w+h*b+f*S<gd)&&(i(n,o,a,l,h,f,N,_t,et,B/=ht,G/=ht,V,x,T),T.point(N,_t),i(N,_t,et,B,G,V,_,g,m,w,b,S,x,T))}}return s(i,"resampleLineTo"),function(n){var o,a,l,h,f,_,g,m,w,b,S,x,T={point:E,lineStart:O,lineEnd:B,polygonStart:s(function(){n.polygonStart(),T.lineStart=G},"polygonStart"),polygonEnd:s(function(){n.polygonEnd(),T.lineStart=O},"polygonEnd")};function E(rt,et){rt=c(rt,et),n.point(rt[0],rt[1])}s(E,"point");function O(){m=NaN,T.point=I,n.lineStart()}s(O,"lineStart");function I(rt,et){var pt=wi([rt,et]),N=c(rt,et);i(m,w,g,b,S,x,m=N[0],w=N[1],g=rt,b=pt[0],S=pt[1],x=pt[2],Ml,n),n.point(m,w)}s(I,"linePoint");function B(){T.point=E,n.lineEnd()}s(B,"lineEnd");function G(){O(),T.point=V,T.lineEnd=ht}s(G,"ringStart");function V(rt,et){I(o=rt,et),a=m,l=w,h=b,f=S,_=x,T.point=I}s(V,"ringPoint");function ht(){i(m,w,g,b,S,x,a,l,o,h,f,_,Ml,n),T.lineEnd=B,B()}return s(ht,"ringEnd"),T}}s(yd,"resample");var bd=Js({point:s(function(c,e){this.stream.point(c*Jt,e*Jt)},"point")});function wd(c){return Js({point:s(function(e,i){var n=c(e,i);return this.stream.point(n[0],n[1])},"point")})}s(wd,"transformRotate");function Sd(c,e,i,n,o){function a(l,h){return l*=n,h*=o,[e+c*l,i-c*h]}return s(a,"transform"),a.invert=function(l,h){return[(l-e)/c*n,(i-h)/c*o]},a}s(Sd,"scaleTranslate");function Tl(c,e,i,n,o,a){if(!a)return Sd(c,e,i,n,o);var l=xt(a),h=Dt(a),f=l*c,_=h*c,g=l/c,m=h/c,w=(h*i-l*e)/c,b=(h*e+l*i)/c;function S(x,T){return x*=n,T*=o,[f*x-_*T+e,i-_*x-f*T]}return s(S,"transform"),S.invert=function(x,T){return[n*(g*x-m*T+w),o*(b-m*x-g*T)]},S}s(Tl,"scaleTranslateRotate");function Pd(c){return Ld(function(){return c})()}s(Pd,"projection");function Ld(c){var e,i=150,n=480,o=250,a=0,l=0,h=0,f=0,_=0,g,m=0,w=1,b=1,S=null,x=cl,T=null,E,O,I,B=Bs,G=.5,V,ht,rt,et,pt;function N($){return rt($[0]*Jt,$[1]*Jt)}s(N,"projection");function _t($){return $=rt.invert($[0],$[1]),$&&[$[0]*Ee,$[1]*Ee]}s(_t,"invert"),N.stream=function($){return et&&pt===$?et:et=bd(wd(g)(x(V(B(pt=$)))))},N.preclip=function($){return arguments.length?(x=$,S=void 0,X()):x},N.postclip=function($){return arguments.length?(B=$,T=E=O=I=null,X()):B},N.clipAngle=function($){return arguments.length?(x=+$?Xh(S=$*Jt):(S=null,cl),X()):S*Ee},N.clipExtent=function($){return arguments.length?(B=$==null?(T=E=O=I=null,Bs):ed(T=+$[0][0],E=+$[0][1],O=+$[1][0],I=+$[1][1]),X()):T==null?null:[[T,E],[O,I]]},N.scale=function($){return arguments.length?(i=+$,Pt()):i},N.translate=function($){return arguments.length?(n=+$[0],o=+$[1],Pt()):[n,o]},N.center=function($){return arguments.length?(a=$[0]%360*Jt,l=$[1]%360*Jt,Pt()):[a*Ee,l*Ee]},N.rotate=function($){return arguments.length?(h=$[0]%360*Jt,f=$[1]%360*Jt,_=$.length>2?$[2]%360*Jt:0,Pt()):[h*Ee,f*Ee,_*Ee]},N.angle=function($){return arguments.length?(m=$%360*Jt,Pt()):m*Ee},N.reflectX=function($){return arguments.length?(w=$?-1:1,Pt()):w<0},N.reflectY=function($){return arguments.length?(b=$?-1:1,Pt()):b<0},N.precision=function($){return arguments.length?(V=Al(ht,G=$*$),X()):ii(G)},N.fitExtent=function($,q){return Dl(N,$,q)},N.fitSize=function($,q){return pd(N,$,q)},N.fitWidth=function($,q){return _d(N,$,q)},N.fitHeight=function($,q){return md(N,$,q)};function Pt(){var $=Tl(i,0,0,w,b,m).apply(null,e(a,l)),q=Tl(i,n-$[0],o-$[1],w,b,m);return g=qh(h,f,_),ht=zs(e,q),rt=zs(g,ht),V=Al(ht,G),X()}s(Pt,"recenter");function X(){return et=pt=null,N}return s(X,"reset"),function(){return e=c.apply(this,arguments),N.invert=e.invert&&_t,Pt()}}s(Ld,"projectionMutator");function El(c,e){var i=e*e,n=i*i;return[c*(.8707-.131979*i+n*(-.013791+n*(.003971*i-.001529*n))),e*(1.007226+i*(.015085+n*(-.044475+.028874*i-.005916*n)))]}s(El,"naturalEarth1Raw"),El.invert=function(c,e){var i=e,n=25,o;do{var a=i*i,l=a*a;i-=o=(i*(1.007226+a*(.015085+l*(-.044475+.028874*a-.005916*l)))-e)/(1.007226+a*(.015085*3+l*(-.044475*7+.028874*9*a-.005916*11*l)))}while(bt(o)>ft&&--n>0);return[c/(.8707+(a=i*i)*(-.131979+a*(-.013791+a*a*a*(.003971-.001529*a)))),i]};function Cd(){return Pd(El).scale(175.295)}s(Cd,"geoNaturalEarth1");function xd(c){return c}s(xd,"identity");function Dd(c){if(c==null)return xd;var e,i,n=c.scale[0],o=c.scale[1],a=c.translate[0],l=c.translate[1];return function(h,f){f||(e=i=0);var _=2,g=h.length,m=new Array(g);for(m[0]=(e+=h[0])*n+a,m[1]=(i+=h[1])*o+l;_<g;)m[_]=h[_],++_;return m}}s(Dd,"transform");function Md(c,e){for(var i,n=c.length,o=n-e;o<--n;)i=c[o],c[o++]=c[n],c[n]=i}s(Md,"reverse");function Ad(c,e){return typeof e=="string"&&(e=c.objects[e]),e.type==="GeometryCollection"?{type:"FeatureCollection",features:e.geometries.map(function(i){return kl(c,i)})}:kl(c,e)}s(Ad,"feature$1");function kl(c,e){var i=e.id,n=e.bbox,o=e.properties==null?{}:e.properties,a=$l(c,e);return i==null&&n==null?{type:"Feature",properties:o,geometry:a}:n==null?{type:"Feature",id:i,properties:o,geometry:a}:{type:"Feature",id:i,bbox:n,properties:o,geometry:a}}s(kl,"feature");function $l(c,e){var i=Dd(c.transform),n=c.arcs;function o(g,m){m.length&&m.pop();for(var w=n[g<0?~g:g],b=0,S=w.length;b<S;++b)m.push(i(w[b],b));g<0&&Md(m,S)}s(o,"arc");function a(g){return i(g)}s(a,"point");function l(g){for(var m=[],w=0,b=g.length;w<b;++w)o(g[w],m);return m.length<2&&m.push(m[0]),m}s(l,"line");function h(g){for(var m=l(g);m.length<4;)m.push(m[0]);return m}s(h,"ring");function f(g){return g.map(h)}s(f,"polygon");function _(g){var m=g.type,w;switch(m){case"GeometryCollection":return{type:m,geometries:g.geometries.map(_)};case"Point":w=a(g.coordinates);break;case"MultiPoint":w=g.coordinates.map(a);break;case"LineString":w=l(g.arcs);break;case"MultiLineString":w=g.arcs.map(l);break;case"Polygon":w=f(g.arcs);break;case"MultiPolygon":w=g.arcs.map(f);break;default:return null}return{type:m,coordinates:w}}return s(_,"geometry"),_(e)}s($l,"object");function Td(c,e){var i={},n={},o={},a=[],l=-1;e.forEach(function(_,g){var m=c.arcs[_<0?~_:_],w;m.length<3&&!m[1][0]&&!m[1][1]&&(w=e[++l],e[l]=_,e[g]=w)}),e.forEach(function(_){var g=h(_),m=g[0],w=g[1],b,S;if(b=o[m])if(delete o[b.end],b.push(_),b.end=w,S=n[w]){delete n[S.start];var x=S===b?b:b.concat(S);n[x.start=b.start]=o[x.end=S.end]=x}else n[b.start]=o[b.end]=b;else if(b=n[w])if(delete n[b.start],b.unshift(_),b.start=m,S=o[m]){delete o[S.end];var T=S===b?b:S.concat(b);n[T.start=S.start]=o[T.end=b.end]=T}else n[b.start]=o[b.end]=b;else b=[_],n[b.start=m]=o[b.end=w]=b});function h(_){var g=c.arcs[_<0?~_:_],m=g[0],w;return c.transform?(w=[0,0],g.forEach(function(b){w[0]+=b[0],w[1]+=b[1]})):w=g[g.length-1],_<0?[w,m]:[m,w]}s(h,"ends");function f(_,g){for(var m in _){var w=_[m];delete g[w.start],delete w.start,delete w.end,w.forEach(function(b){i[b<0?~b:b]=1}),a.push(w)}}return s(f,"flush"),f(o,n),f(n,o),e.forEach(function(_){i[_<0?~_:_]||a.push([_])}),a}s(Td,"stitch");function Ed(c){return $l(c,kd.apply(this,arguments))}s(Ed,"mesh");function kd(c,e,i){var n,o,a;if(arguments.length>1)n=$d(c,e,i);else for(o=0,n=new Array(a=c.arcs.length);o<a;++o)n[o]=o;return{type:"MultiLineString",arcs:Td(c,n)}}s(kd,"meshArcs");function $d(c,e,i){var n=[],o=[],a;function l(m){var w=m<0?~m:m;(o[w]||(o[w]=[])).push({i:m,g:a})}s(l,"extract0");function h(m){m.forEach(l)}s(h,"extract1");function f(m){m.forEach(h)}s(f,"extract2");function _(m){m.forEach(f)}s(_,"extract3");function g(m){switch(a=m,m.type){case"GeometryCollection":m.geometries.forEach(g);break;case"LineString":h(m.arcs);break;case"MultiLineString":case"Polygon":f(m.arcs);break;case"MultiPolygon":_(m.arcs);break}}return s(g,"geometry"),g(e),o.forEach(i==null?function(m){n.push(m[0].i)}:function(m){i(m[0].g,m[m.length-1].g)&&n.push(m[0].i)}),n}s($d,"extractArcs");const Ol={"012":"Africa","024":"Africa","072":"Africa","084":"Africa",108:"Africa",120:"Africa",140:"Africa",148:"Africa",178:"Africa",180:"Africa",204:"Africa",226:"Africa",231:"Africa",232:"Africa",260:"Africa",262:"Africa",266:"Africa",270:"Africa",288:"Africa",324:"Africa",384:"Africa",404:"Africa",426:"Africa",430:"Africa",434:"Africa",450:"Africa",454:"Africa",466:"Africa",478:"Africa",504:"Africa",508:"Africa",516:"Africa",562:"Africa",566:"Africa",624:"Africa",646:"Africa",686:"Africa",694:"Africa",706:"Africa",710:"Africa",716:"Africa",728:"Africa",729:"Africa",732:"Africa",748:"Africa",768:"Africa",788:"Africa",800:"Africa",834:"Africa",854:"Africa",894:"Africa","008":"Europe","040":"Europe","056":"Europe","070":"Europe",100:"Europe",112:"Europe",191:"Europe",196:"Europe",203:"Europe",208:"Europe",233:"Europe",246:"Europe",250:"Europe",268:"Europe",276:"Europe",300:"Europe",348:"Europe",352:"Europe",372:"Europe",380:"Europe",428:"Europe",440:"Europe",442:"Europe",498:"Europe",499:"Europe",528:"Europe",578:"Europe",616:"Europe",620:"Europe",642:"Europe",643:"Europe",688:"Europe",703:"Europe",705:"Europe",724:"Europe",752:"Europe",756:"Europe",804:"Europe",807:"Europe",826:"Europe","004":"Asia","031":"Asia","048":"Asia","050":"Asia","051":"Asia","064":"Asia","096":"Asia",104:"Asia",116:"Asia",144:"Asia",156:"Asia",158:"Asia",275:"Asia",356:"Asia",360:"Asia",364:"Asia",368:"Asia",376:"Asia",392:"Asia",398:"Asia",400:"Asia",408:"Asia",410:"Asia",414:"Asia",417:"Asia",418:"Asia",422:"Asia",458:"Asia",496:"Asia",512:"Asia",524:"Asia",586:"Asia",608:"Asia",626:"Asia",634:"Asia",682:"Asia",702:"Asia",704:"Asia",760:"Asia",762:"Asia",764:"Asia",784:"Asia",792:"Asia",795:"Asia",860:"Asia",887:"Asia","044":"North America",124:"North America",188:"North America",192:"North America",214:"North America",222:"North America",320:"North America",332:"North America",340:"North America",388:"North America",484:"North America",558:"North America",591:"North America",630:"North America",780:"North America",840:"North America","032":"South America","068":"South America","076":"South America",152:"South America",170:"South America",218:"South America",238:"South America",328:"South America",600:"South America",604:"South America",740:"South America",858:"South America",862:"South America","010":"Oceania","036":"Oceania","090":"Oceania",242:"Oceania",540:"Oceania",548:"Oceania",554:"Oceania",598:"Oceania",304:"Oceania"},Od={AF:"004",AL:"008",AQ:"010",DZ:"012",AO:"024",AZ:"031",AR:"032",AU:"036",AT:"040",BS:"044",BD:"050",AM:"051",BE:"056",BT:"064",BO:"068",BA:"070",BW:"072",BZ:"084",BR:"076",BN:"096",BG:"100",MM:"104",BI:"108",BY:"112",KH:"116",CM:"120",CA:"124",CF:"140",LK:"144",TD:"148",CL:"152",CN:"156",TW:"158",CO:"170",CG:"178",CD:"180",CR:"188",HR:"191",CU:"192",CY:"196",CZ:"203",BJ:"204",DK:"208",DO:"214",EC:"218",SV:"222",GQ:"226",ER:"232",EE:"233",ET:"231",FK:"238",FJ:"242",FI:"246",FR:"250",DJ:"262",GA:"266",GE:"268",GM:"270",PS:"275",DE:"276",GH:"288",GR:"300",GL:"304",GT:"320",GN:"324",GY:"328",HT:"332",HN:"340",HU:"348",IS:"352",IN:"356",ID:"360",IR:"364",IQ:"368",IE:"372",IL:"376",IT:"380",CI:"384",JM:"388",JP:"392",KZ:"398",JO:"400",KE:"404",KP:"408",KR:"410",KW:"414",KG:"417",LA:"418",LB:"422",LS:"426",LV:"428",LR:"430",LY:"434",LT:"440",LU:"442",MG:"450",MW:"454",MY:"458",ML:"466",MR:"478",MX:"484",MN:"496",MD:"498",ME:"499",MA:"504",MZ:"508",OM:"512",NA:"516",NP:"524",NL:"528",NC:"540",VU:"548",NZ:"554",NI:"558",NE:"562",NG:"566",NO:"578",PK:"586",PA:"591",PG:"598",PY:"600",PE:"604",PH:"608",PL:"616",PT:"620",GW:"624",TL:"626",PR:"630",QA:"634",RO:"642",RU:"643",RW:"646",SA:"682",SN:"686",RS:"688",SL:"694",SK:"703",VN:"704",SI:"705",SO:"706",ZA:"710",ZW:"716",SS:"728",SD:"729",EH:"732",SR:"740",SZ:"748",SE:"752",CH:"756",SY:"760",TJ:"762",TH:"764",TG:"768",TT:"780",AE:"784",TN:"788",TR:"792",TM:"795",UG:"800",UA:"804",MK:"807",EG:"818",GB:"826",TZ:"834",US:"840",BF:"854",UY:"858",UZ:"860",VE:"862",YE:"887",ZM:"894",ES:"724",SG:"702",BH:"048",SB:"090",GD:"308"},Fd={AFG:"004",ALB:"008",ATA:"010",DZA:"012",AGO:"024",AZE:"031",ARG:"032",AUS:"036",AUT:"040",BHS:"044",BGD:"050",ARM:"051",BEL:"056",BTN:"064",BOL:"068",BIH:"070",BWA:"072",BLZ:"084",BRA:"076",BRN:"096",BGR:"100",MMR:"104",BDI:"108",BLR:"112",KHM:"116",CMR:"120",CAN:"124",CAF:"140",LKA:"144",TCD:"148",CHL:"152",CHN:"156",TWN:"158",COL:"170",COG:"178",COD:"180",CRI:"188",HRV:"191",CUB:"192",CYP:"196",CZE:"203",BEN:"204",DNK:"208",DOM:"214",ECU:"218",SLV:"222",GNQ:"226",ERI:"232",EST:"233",ETH:"231",FLK:"238",FJI:"242",FIN:"246",FRA:"250",DJI:"262",GAB:"266",GEO:"268",GMB:"270",PSE:"275",DEU:"276",GHA:"288",GRC:"300",GRL:"304",GTM:"320",GIN:"324",GUY:"328",HTI:"332",HND:"340",HUN:"348",ISL:"352",IND:"356",IDN:"360",IRN:"364",IRQ:"368",IRL:"372",ISR:"376",ITA:"380",CIV:"384",JAM:"388",JPN:"392",KAZ:"398",JOR:"400",KEN:"404",PRK:"408",KOR:"410",KWT:"414",KGZ:"417",LAO:"418",LBN:"422",LSO:"426",LVA:"428",LBR:"430",LBY:"434",LTU:"440",LUX:"442",MDG:"450",MWI:"454",MYS:"458",MLI:"466",MRT:"478",MEX:"484",MNG:"496",MDA:"498",MNE:"499",MAR:"504",MOZ:"508",OMN:"512",NAM:"516",NPL:"524",NLD:"528",NCL:"540",VUT:"548",NZL:"554",NIC:"558",NER:"562",NGA:"566",NOR:"578",PAK:"586",PAN:"591",PNG:"598",PRY:"600",PER:"604",PHL:"608",POL:"616",PRT:"620",GNB:"624",TLS:"626",PRI:"630",QAT:"634",ROU:"642",RUS:"643",RWA:"646",SAU:"682",SEN:"686",SRB:"688",SLE:"694",SVK:"703",VNM:"704",SVN:"705",SOM:"706",ZAF:"710",ZWE:"716",SSD:"728",SDN:"729",ESH:"732",SUR:"740",SWZ:"748",SWE:"752",CHE:"756",SYR:"760",TJK:"762",THA:"764",TGO:"768",TTO:"780",ARE:"784",TUN:"788",TUR:"792",TKM:"795",UGA:"800",UKR:"804",MKD:"807",EGY:"818",GBR:"826",TZA:"834",USA:"840",BFA:"854",URY:"858",UZB:"860",VEN:"862",YEM:"887",ZMB:"894",ESP:"724",SGP:"702",BHR:"048",SLB:"090"};function zd(c,e){const i=c.trim().toUpperCase();switch(e){case"iso-a2":return Od[i]||"";case"iso-a3":return Fd[i]||"";case"iso-num":return i.padStart(3,"0")}}s(zd,"toIsoNumeric");const Id={"004":"Afghanistan","008":"Albanie","010":"Antarctique","012":"Algerie","024":"Angola","031":"Azerbaidjan","032":"Argentine","036":"Australie","040":"Autriche","044":"Bahamas","050":"Bangladesh","051":"Armenie","056":"Belgique","064":"Bhoutan","068":"Bolivie","070":"Bosnie-Herzegovine","072":"Botswana","076":"Bresil","084":"Belize","090":"Iles Salomon","096":"Brunei",100:"Bulgarie",104:"Myanmar",108:"Burundi",112:"Bielorussie",116:"Cambodge",120:"Cameroun",124:"Canada",140:"Republique centrafricaine",144:"Sri Lanka",148:"Tchad",152:"Chili",156:"Chine",158:"Taiwan",170:"Colombie",178:"Congo",180:"Republique democratique du Congo",188:"Costa Rica",191:"Croatie",192:"Cuba",196:"Chypre",203:"Republique tcheque",204:"Benin",208:"Danemark",214:"Republique dominicaine",218:"Equateur",222:"Salvador",226:"Guinee equatoriale",231:"Ethiopie",232:"Erythree",233:"Estonie",238:"Iles Malouines",242:"Fidji",246:"Finlande",250:"France",260:"Terres australes francaises",262:"Djibouti",266:"Gabon",268:"Georgie",270:"Gambie",275:"Palestine",276:"Allemagne",288:"Ghana",300:"Grece",304:"Groenland",320:"Guatemala",324:"Guinee",328:"Guyana",332:"Haiti",340:"Honduras",348:"Hongrie",352:"Islande",356:"Inde",360:"Indonesie",364:"Iran",368:"Irak",372:"Irlande",376:"Israel",380:"Italie",384:"Cote d'Ivoire",388:"Jamaique",392:"Japon",398:"Kazakhstan",400:"Jordanie",404:"Kenya",408:"Coree du Nord",410:"Coree du Sud",414:"Koweit",417:"Kirghizistan",418:"Laos",422:"Liban",426:"Lesotho",428:"Lettonie",430:"Liberia",434:"Libye",440:"Lituanie",442:"Luxembourg",450:"Madagascar",454:"Malawi",458:"Malaisie",466:"Mali",478:"Mauritanie",484:"Mexique",496:"Mongolie",498:"Moldavie",499:"Montenegro",504:"Maroc",508:"Mozambique",512:"Oman",516:"Namibie",524:"Nepal",528:"Pays-Bas",540:"Nouvelle-Caledonie",548:"Vanuatu",554:"Nouvelle-Zelande",558:"Nicaragua",562:"Niger",566:"Nigeria",578:"Norvege",586:"Pakistan",591:"Panama",598:"Papouasie-Nouvelle-Guinee",600:"Paraguay",604:"Perou",608:"Philippines",616:"Pologne",620:"Portugal",624:"Guinee-Bissau",626:"Timor oriental",630:"Porto Rico",634:"Qatar",642:"Roumanie",643:"Russie",646:"Rwanda",682:"Arabie saoudite",686:"Senegal",688:"Serbie",694:"Sierra Leone",703:"Slovaquie",704:"Vietnam",705:"Slovenie",706:"Somalie",710:"Afrique du Sud",716:"Zimbabwe",724:"Espagne",728:"Soudan du Sud",729:"Soudan",732:"Sahara occidental",740:"Suriname",748:"Eswatini",752:"Suede",756:"Suisse",760:"Syrie",762:"Tadjikistan",764:"Thailande",768:"Togo",780:"Trinite-et-Tobago",784:"Emirats arabes unis",788:"Tunisie",792:"Turquie",795:"Turkmenistan",800:"Ouganda",804:"Ukraine",807:"Macedoine du Nord",818:"Egypte",826:"Royaume-Uni",834:"Tanzanie",840:"Etats-Unis",854:"Burkina Faso",858:"Uruguay",860:"Ouzbekistan",862:"Venezuela",887:"Yemen",894:"Zambie"};var Rd=Object.defineProperty,Bd=Object.getOwnPropertyDescriptor,Bt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Bd(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Rd(e,i,o),o},"__decorateClass$d");let Sn=null;const Pn="world-countries-110m.json";async function Nd(){if(Sn)return Sn;const c=(typeof document>"u"&&typeof location>"u"?require("url").pathToFileURL(__filename).href:typeof document>"u"?location.href:Yt&&Yt.tagName.toUpperCase()==="SCRIPT"&&Yt.src||new URL("dsfr-data.umd.js",document.baseURI).href).replace(/\/[^/]+$/,""),e=[`${c}/data/${Pn}`,`${c}/../data/${Pn}`,`/data/${Pn}`];for(const i of e)try{const n=await fetch(i);if(n.ok)return Sn=await n.json(),Sn}catch{}throw new Error(`Could not load ${Pn} from any candidate path`)}s(Nd,"loadTopology");const Xs=960,ta=500,Ln=20,Fl={sequentialAscending:["#F5F5FE","#E3E3FD","#C1C1FB","#A1A1F8","#8585F6","#6A6AF4","#4747E5","#2323B4","#000091"],sequentialDescending:["#000091","#2323B4","#4747E5","#6A6AF4","#8585F6","#A1A1F8","#C1C1FB","#E3E3FD","#F5F5FE"],divergentAscending:["#000091","#4747E5","#8585F6","#C1C1FB","#F5F5F5","#FCC0B4","#F58050","#E3541C","#C9191E"],divergentDescending:["#C9191E","#E3541C","#F58050","#FCC0B4","#F5F5F5","#C1C1FB","#8585F6","#4747E5","#000091"],neutral:["#F6F6F6","#E5E5E5","#CECECE","#B5B5B5","#929292","#777777","#666666","#3A3A3A","#161616"],default:["#F5F5FE","#E3E3FD","#C1C1FB","#A1A1F8","#8585F6","#6A6AF4","#4747E5","#2323B4","#000091"],categorical:["#000091","#6A6AF4","#009081","#C9191E","#FF9940","#A558A0","#417DC4","#716043","#18753C"]},zl={Africa:"Afrique",Europe:"Europe",Asia:"Asie","North America":"Amerique du Nord","South America":"Amerique du Sud",Oceania:"Oceanie"};v.DsfrDataWorldMap=(Ii=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.codeField="",this.valueField="",this.codeFormat="iso-a2",this.name="",this.selectedPalette="sequentialAscending",this.unitTooltip="",this.zoom="continent",this._data=[],this._topology=null,this._zoomedContinent=null,this._hoveredCountryId=null,this._tooltipX=0,this._tooltipY=0}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-world-map"),this._loadMap()}onSourceData(e){this._data=Array.isArray(e)?e:[]}async _loadMap(){try{this._topology=await Nd(),this.requestUpdate()}catch(e){console.error("dsfr-data-world-map: failed to load topology",e)}}_buildValueMap(){const e=new Map;if(!this._data.length||!this.codeField||!this.valueField)return e;for(const i of this._data){const n=String(W(i,this.codeField)??"").trim();if(!n)continue;const o=zd(n,this.codeFormat);if(!o)continue;const a=Number(W(i,this.valueField));isNaN(a)||e.set(o,Math.round(a*100)/100)}return e}_getChoroplethPalette(){return Fl[this.selectedPalette]||Fl.sequentialAscending}_getColorScale(e){if(e.length===0)return()=>"#E5E5F4";const i=this._getChoroplethPalette(),n=[...e].sort((a,l)=>a-l),o=[];for(let a=1;a<i.length;a++)o.push(n[Math.floor(a/i.length*n.length)]);return a=>{let l=0;for(let h=0;h<o.length;h++)a>=o[h]&&(l=h+1);return i[Math.min(l,i.length-1)]}}_getFeatures(){if(!this._topology)return[];const e=this._topology.objects.countries;return Ad(this._topology,e).features}_getBorders(){if(!this._topology)return null;const e=this._topology.objects.countries;return Ed(this._topology,e,(i,n)=>i!==n)}_getProjection(){const e=Cd().translate([Xs/2,ta/2]).scale(153);if(this._zoomedContinent){const i=this._getFeatures().filter(n=>Ol[n.id]===this._zoomedContinent);if(i.length>0){const n={type:"FeatureCollection",features:i};e.fitExtent([[Ln,Ln],[Xs-Ln,ta-Ln]],n)}}return e}_onCountryClick(e){if(this.zoom!=="none")if(this._zoomedContinent)this._zoomedContinent=null;else{const i=Ol[e];i&&(this._zoomedContinent=i)}}_onCountryHover(e,i){if(this._hoveredCountryId=i,i){const n=this.getBoundingClientRect();this._tooltipX=e.clientX-n.left+12,this._tooltipY=e.clientY-n.top-8}}_onBackClick(){this._zoomedContinent=null}_renderMap(){const e=this._getFeatures(),i=this._getBorders(),n=this._getProjection(),o=fd(n),a=this._buildValueMap(),l=[...a.values()],h=this._getColorScale(l),f="#F0F0F0",_=e.map(m=>{const w=o(m.geometry)||"",b=a.get(m.id),S=b!==void 0?h(b):f,x=this._hoveredCountryId===m.id;return mo`<path
        class="dsfr-data-world-map__country"
        d=${w}
        fill=${S}
        stroke=${x?"#000091":"none"}
        stroke-width=${x?"1.5":"0"}
        data-id=${m.id}
        style="cursor: ${this.zoom!=="none"?"pointer":"default"}"
        @click=${()=>this._onCountryClick(m.id)}
        @mouseenter=${T=>this._onCountryHover(T,m.id)}
        @mousemove=${T=>this._onCountryHover(T,m.id)}
        @mouseleave=${T=>this._onCountryHover(T,null)}
      />`}),g=i&&o(i)||"";return M`
      <div class="dsfr-data-world-map__container" style="position: relative;">
        ${this._zoomedContinent?M`
              <button
                class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
                style="position: absolute; top: 8px; left: 8px; z-index: 2;"
                @click=${this._onBackClick}
                aria-label="Revenir a la vue monde"
              >
                <span class="fr-icon-arrow-left-line" aria-hidden="true"></span>
                ${zl[this._zoomedContinent]||this._zoomedContinent}
              </button>
            `:R}

        <svg
          viewBox="0 0 ${Xs} ${ta}"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label=${this._getAriaLabel()}
          style="width: 100%; height: auto; display: block;"
        >
          <g class="dsfr-data-world-map__countries">${_}</g>
          ${g?mo`<path
            class="dsfr-data-world-map__borders"
            d=${g}
            fill="none"
            stroke="#fff"
            stroke-width="0.5"
            stroke-linejoin="round"
            pointer-events="none"
          />`:R}
        </svg>

        ${this._renderTooltip(a)} ${this._renderLegend(l,h)}
      </div>
    `}_renderTooltip(e){var a,l;if(!this._hoveredCountryId)return R;const i=Id[this._hoveredCountryId]||((l=(a=this._getFeatures().find(h=>h.id===this._hoveredCountryId))==null?void 0:a.properties)==null?void 0:l.name)||this._hoveredCountryId,n=e.get(this._hoveredCountryId),o=n!==void 0?`${n.toLocaleString("fr-FR")}${this.unitTooltip?" "+this.unitTooltip:""}`:"Pas de donnees";return M`
      <div
        class="dsfr-data-world-map__tooltip"
        style="position: absolute; left: ${this._tooltipX}px; top: ${this._tooltipY}px;
          pointer-events: none; z-index: 10;
          background: var(--background-default-grey, #fff);
          color: var(--text-default-grey, #161616);
          border: 1px solid var(--border-default-grey, #ddd);
          border-radius: 4px; padding: 4px 8px; font-size: 0.8125rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15); white-space: nowrap;"
      >
        <strong>${i}</strong><br />
        ${o}
      </div>
    `}_renderLegend(e,i){if(e.length===0)return R;const n=this._getChoroplethPalette(),o=[...e].sort((h,f)=>h-f),a=o[0],l=o[o.length-1];return M`
      <div
        class="dsfr-data-world-map__legend"
        style="display: flex; align-items: center; gap: 4px;
        margin-top: 8px; font-size: 0.75rem; color: var(--text-mention-grey, #666);"
      >
        ${this.name?M`<span style="margin-right: 4px; font-weight: 500;">${this.name}</span>`:R}
        <span>${a.toLocaleString("fr-FR")}</span>
        <div style="display: flex; height: 12px; border-radius: 2px; overflow: hidden;">
          ${n.map(h=>M`<div style="width: 20px; background: ${h};"></div>`)}
        </div>
        <span>${l.toLocaleString("fr-FR")}</span>
        ${this.unitTooltip?M`<span>${this.unitTooltip}</span>`:R}
      </div>
    `}_getAriaLabel(){const e=this._data.length;return`Carte ${this._zoomedContinent?zl[this._zoomedContinent]||this._zoomedContinent:"monde"}, ${e} valeurs`}render(){return this._sourceLoading?M`
        <div class="dsfr-data-world-map__loading" aria-live="polite">
          <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
          Chargement de la carte...
        </div>
        <style>
          .dsfr-data-world-map__loading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 2rem;
            color: var(--text-mention-grey, #666);
            font-size: 0.875rem;
          }
        </style>
      `:this._sourceError?M`
        <div class="dsfr-data-world-map__error" aria-live="assertive">
          <span class="fr-icon-error-line" aria-hidden="true"></span>
          Erreur de chargement: ${this._sourceError.message}
        </div>
        <style>
          .dsfr-data-world-map__error {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            color: var(--text-default-error, #ce0500);
            background: var(--background-alt-red-marianne, #ffe5e5);
            border-radius: 4px;
          }
        </style>
      `:this._topology?!this._data||this._data.length===0?this._renderMap():this._renderMap():M`
        <div class="dsfr-data-world-map__loading" aria-live="polite">
          <span class="fr-icon-loader-4-line" aria-hidden="true"></span>
          Chargement de la carte...
        </div>
        <style>
          .dsfr-data-world-map__loading {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 2rem;
            color: var(--text-mention-grey, #666);
            font-size: 0.875rem;
          }
        </style>
      `}},s(Ii,"DsfrDataWorldMap"),Ii),Bt([P({type:String})],v.DsfrDataWorldMap.prototype,"source",2),Bt([P({type:String,attribute:"code-field"})],v.DsfrDataWorldMap.prototype,"codeField",2),Bt([P({type:String,attribute:"value-field"})],v.DsfrDataWorldMap.prototype,"valueField",2),Bt([P({type:String,attribute:"code-format"})],v.DsfrDataWorldMap.prototype,"codeFormat",2),Bt([P({type:String})],v.DsfrDataWorldMap.prototype,"name",2),Bt([P({type:String,attribute:"selected-palette"})],v.DsfrDataWorldMap.prototype,"selectedPalette",2),Bt([P({type:String,attribute:"unit-tooltip"})],v.DsfrDataWorldMap.prototype,"unitTooltip",2),Bt([P({type:String})],v.DsfrDataWorldMap.prototype,"zoom",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_data",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_topology",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_zoomedContinent",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_hoveredCountryId",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_tooltipX",2),Bt([F()],v.DsfrDataWorldMap.prototype,"_tooltipY",2),v.DsfrDataWorldMap=Bt([mt("dsfr-data-world-map")],v.DsfrDataWorldMap);const Ud='.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';var Zd=Object.defineProperty,Gd=Object.getOwnPropertyDescriptor,pe=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Gd(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Zd(e,i,o),o},"__decorateClass$c");const jd={"ign-plan":{url:"https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",attribution:'&copy; <a href="https://www.ign.fr/">IGN</a>'},"ign-ortho":{url:"https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&STYLE=normal&FORMAT=image/jpeg&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",attribution:'&copy; <a href="https://www.ign.fr/">IGN</a>'},"ign-topo":{url:"https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.BDUNI.J1&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",attribution:'&copy; <a href="https://www.ign.fr/">IGN</a>'},"ign-cadastre":{url:"https://data.geopf.fr/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=CADASTRALPARCELS.PARCELLAIRE_EXPRESS&STYLE=normal&FORMAT=image/png&TILEMATRIXSET=PM&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}",attribution:'&copy; <a href="https://www.ign.fr/">IGN</a>'},osm:{url:"https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}};let Se=null;async function qd(){return Se||(Se=await Promise.resolve().then(()=>Df),window.L=Se,Se)}s(qd,"loadLeaflet"),v.DsfrDataMap=(Ri=class extends ut{constructor(){super(...arguments),this.center="46.603,2.888",this.zoom=6,this.minZoom=2,this.maxZoom=18,this.height="500px",this.tiles="ign-plan",this.noControls=!1,this.fitBounds=!1,this.maxBounds="",this.name="",this._leafletMap=null,this._tileLayer=null,this._container=null,this._observer=null,this._layerBounds=[],this._skipLink=null,this._srDescription=null,this._liveRegion=null,this._afterMapAnchor=null,this._visibilityObserver=null,this._resizeObserver=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-map",this.tiles),this._deferInitUntilVisible()}_deferInitUntilVisible(){if(typeof IntersectionObserver>"u"){this._initMap();return}this._visibilityObserver=new IntersectionObserver(e=>{var i;e.some(n=>n.isIntersecting)&&((i=this._visibilityObserver)==null||i.disconnect(),this._visibilityObserver=null,this._initMap())},{rootMargin:"200px 0px"}),this._visibilityObserver.observe(this)}disconnectedCallback(){var e,i,n,o,a,l,h;super.disconnectedCallback(),(e=this._visibilityObserver)==null||e.disconnect(),this._visibilityObserver=null,(i=this._resizeObserver)==null||i.disconnect(),this._resizeObserver=null,(n=this._observer)==null||n.disconnect(),this._observer=null,this._leafletMap&&(this._leafletMap.remove(),this._leafletMap=null),this._container=null,(o=this._skipLink)==null||o.remove(),this._skipLink=null,(a=this._srDescription)==null||a.remove(),this._srDescription=null,(l=this._liveRegion)==null||l.remove(),this._liveRegion=null,(h=this._afterMapAnchor)==null||h.remove(),this._afterMapAnchor=null}updated(e){super.updated(e),this._leafletMap&&(e.has("tiles")&&this._updateTiles(),e.has("height")&&this._container&&(this._applyHeight(),this._leafletMap.invalidateSize()))}_applyHeight(){var i,n;const e=this.height.match(/^(\d+(?:\.\d+)?)%$/);if(e){const o=parseFloat(e[1])/100,a=s(()=>{const l=this.clientWidth;l>0&&(this.style.height=`${Math.round(l*o)}px`)},"applyRatio");a(),(i=this._resizeObserver)==null||i.disconnect(),this._resizeObserver=new ResizeObserver(()=>{var l;a(),(l=this._leafletMap)==null||l.invalidateSize()}),this._resizeObserver.observe(this)}else(n=this._resizeObserver)==null||n.disconnect(),this._resizeObserver=null,this.style.height=this.height;this._container&&(this._container.style.height="100%")}getLeafletMap(){return this._leafletMap}getLeafletLib(){return Se}registerLayerBounds(e){this._layerBounds.push(e),this.fitBounds&&this._leafletMap&&this._applyFitBounds()}announceToScreenReader(e){this._liveRegion&&(this._liveRegion.textContent="",requestAnimationFrame(()=>{this._liveRegion&&(this._liveRegion.textContent=e)}))}updateDescription(e){if(!this._srDescription)return;const i=[this._buildMapDescription()];i.push(...e),this._srDescription.textContent=i.join(" ")}_buildMapDescription(){const e=[];return e.push(`Carte interactive${this.name?` : ${this.name}`:""}.`),e.push("Utilisez les fleches pour deplacer la carte, + et - pour zoomer."),e.push("Tabulez pour atteindre les marqueurs."),e.join(" ")}async _initMap(){const e=await qd();if(!document.querySelector("style[data-leaflet-css]")){const h=document.createElement("style");h.setAttribute("data-leaflet-css",""),h.textContent=Ud,document.head.appendChild(h)}this._injectStyles(),this.id||(this.id=`dsfr-data-map-${Date.now()}`);const i=this.id,n=`${i}-desc`,o=`${i}-after`;this._skipLink=document.createElement("a"),this._skipLink.href=`#${o}`,this._skipLink.className="dsfr-data-map__skiplink",this._skipLink.textContent="Passer la carte",this.insertBefore(this._skipLink,this.firstChild),this._srDescription=document.createElement("p"),this._srDescription.id=n,this._srDescription.className="dsfr-data-map__sr-only",this._srDescription.textContent=this._buildMapDescription(),this.insertBefore(this._srDescription,this._skipLink.nextSibling),this._container=document.createElement("div"),this._container.className="dsfr-data-map__container",this._container.style.width="100%",this._applyHeight(),this._container.setAttribute("role","application"),this._container.setAttribute("aria-label",`Carte interactive${this.name?` : ${this.name}`:""}`),this._container.setAttribute("aria-describedby",n),this._container.setAttribute("tabindex","0"),this.insertBefore(this._container,this._srDescription.nextSibling),this._liveRegion=document.createElement("div"),this._liveRegion.setAttribute("aria-live","assertive"),this._liveRegion.setAttribute("aria-atomic","true"),this._liveRegion.className="dsfr-data-map__sr-only",this._liveRegion.id=`${i}-live`,this.insertBefore(this._liveRegion,this._container.nextSibling),this._afterMapAnchor=document.createElement("div"),this._afterMapAnchor.id=o,this._afterMapAnchor.setAttribute("tabindex","-1"),this.appendChild(this._afterMapAnchor);const[a,l]=this.center.split(",").map(Number);if(this._leafletMap=e.map(this._container,{center:[a||46.603,l||2.888],zoom:this.zoom,minZoom:this.minZoom,maxZoom:this.maxZoom,zoomControl:!this.noControls}),this.maxBounds){const h=this.maxBounds.split(",").map(Number);h.length===4&&this._leafletMap.setMaxBounds([[h[0],h[1]],[h[2],h[3]]])}this._updateTiles(),this._leafletMap.on("moveend",()=>this._notifyLayers()),this._leafletMap.on("zoomend",()=>this._notifyLayers()),this._observer=new MutationObserver(h=>{var f,_;for(const g of h)for(const m of g.addedNodes){const w=(f=m.tagName)==null?void 0:f.toLowerCase();(w==="dsfr-data-map-layer"||w==="dsfr-data-map-timeline")&&((_=m._onMapReady)==null||_.call(m))}}),this._observer.observe(this,{childList:!0}),this._notifyExistingLayers()}_updateTiles(){if(!this._leafletMap||!Se)return;this._tileLayer&&this._tileLayer.remove();const e=jd[this.tiles];e?this._tileLayer=Se.tileLayer(e.url,{attribution:e.attribution,...e.options}).addTo(this._leafletMap):this._tileLayer=Se.tileLayer(this.tiles,{attribution:""}).addTo(this._leafletMap)}_notifyLayers(){var i;const e=this.querySelectorAll("dsfr-data-map-layer");for(const n of e)(i=n._onViewportChange)==null||i.call(n)}_notifyExistingLayers(){var n,o;const e=this.querySelectorAll("dsfr-data-map-layer");for(const a of e)(n=a._onMapReady)==null||n.call(a);const i=this.querySelectorAll("dsfr-data-map-timeline");for(const a of i)(o=a._onMapReady)==null||o.call(a)}_applyFitBounds(){if(!this._leafletMap||!Se||this._layerBounds.length===0)return;let e=this._layerBounds[0];for(let i=1;i<this._layerBounds.length;i++)e=e.extend(this._layerBounds[i]);this._leafletMap.fitBounds(e,{padding:[20,20]})}_injectStyles(){if(document.querySelector("style[data-dsfr-data-map]"))return;const e=document.createElement("style");e.setAttribute("data-dsfr-data-map",""),e.textContent=`
      dsfr-data-map {
        display: block;
        position: relative;
        overflow: hidden;
      }
      .dsfr-data-map__container {
        z-index: 0;
        overflow: hidden;
      }
      /* Fix DSFR vs Leaflet conflicts — DSFR styles all [href] with underlines, background-image and ::before/::after */
      .dsfr-data-map__container a,
      .dsfr-data-map__container a[href] {
        text-decoration: none;
        background-image: none !important;
      }
      .dsfr-data-map__container a::before,
      .dsfr-data-map__container a::after,
      .dsfr-data-map__container a[href]::before,
      .dsfr-data-map__container a[href]::after {
        content: none !important;
        display: none !important;
      }
      /* Fix DSFR img max-width:100% breaking Leaflet tile positioning */
      .dsfr-data-map__container img {
        max-width: none !important;
        max-height: none !important;
      }
      .dsfr-data-map__marker {
        background: none !important;
        border: none !important;
      }
      .dsfr-data-map__popup table {
        margin: 0;
        font-size: 0.875rem;
      }
      .dsfr-data-map__popup th {
        text-align: left;
        padding-right: 0.5rem;
        font-weight: 600;
        white-space: nowrap;
      }
      /* A11y: Skip link — visible only on focus */
      .dsfr-data-map__skiplink {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        margin: -1px;
        padding: 0;
        border: 0;
      }
      .dsfr-data-map__skiplink:focus {
        position: relative;
        width: auto;
        height: auto;
        overflow: visible;
        clip: auto;
        white-space: normal;
        margin: 0;
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background: var(--background-default-grey, #fff);
        color: var(--text-action-high-blue-france, #000091);
        text-decoration: underline;
        font-size: 0.875rem;
        z-index: 1001;
      }
      /* A11y: Screen-reader only content */
      .dsfr-data-map__sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        margin: -1px;
        padding: 0;
        border: 0;
      }
      .dsfr-data-map__max-items-banner {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        background: var(--background-contrast-warning, #FFE9E6);
        color: var(--text-default-warning, #B34000);
        padding: 0.5rem 1rem;
        border-radius: 4px;
        font-size: 0.875rem;
        box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        white-space: nowrap;
      }
    `,document.head.appendChild(e)}render(){return R}},s(Ri,"DsfrDataMap"),Ri),pe([P({type:String})],v.DsfrDataMap.prototype,"center",2),pe([P({type:Number})],v.DsfrDataMap.prototype,"zoom",2),pe([P({type:Number,attribute:"min-zoom"})],v.DsfrDataMap.prototype,"minZoom",2),pe([P({type:Number,attribute:"max-zoom"})],v.DsfrDataMap.prototype,"maxZoom",2),pe([P({type:String})],v.DsfrDataMap.prototype,"height",2),pe([P({type:String})],v.DsfrDataMap.prototype,"tiles",2),pe([P({type:Boolean,attribute:"no-controls"})],v.DsfrDataMap.prototype,"noControls",2),pe([P({type:Boolean,attribute:"fit-bounds"})],v.DsfrDataMap.prototype,"fitBounds",2),pe([P({type:String,attribute:"max-bounds"})],v.DsfrDataMap.prototype,"maxBounds",2),pe([P({type:String})],v.DsfrDataMap.prototype,"name",2),v.DsfrDataMap=pe([mt("dsfr-data-map")],v.DsfrDataMap);const Hd=".leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{-webkit-transition:-webkit-transform .3s ease-out,opacity .3s ease-in;-moz-transition:-moz-transform .3s ease-out,opacity .3s ease-in;-o-transition:-o-transform .3s ease-out,opacity .3s ease-in;transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{-webkit-transition:-webkit-stroke-dashoffset .3s ease-out,-webkit-stroke-opacity .3s ease-in;-moz-transition:-moz-stroke-dashoffset .3s ease-out,-moz-stroke-opacity .3s ease-in;-o-transition:-o-stroke-dashoffset .3s ease-out,-o-stroke-opacity .3s ease-in;transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}",Wd=".marker-cluster-small{background-color:#b5e28c99}.marker-cluster-small div{background-color:#6ecc3999}.marker-cluster-medium{background-color:#f1d35799}.marker-cluster-medium div{background-color:#f0c20c99}.marker-cluster-large{background-color:#fd9c7399}.marker-cluster-large div{background-color:#f1801799}.leaflet-oldie .marker-cluster-small{background-color:#b5e28c}.leaflet-oldie .marker-cluster-small div{background-color:#6ecc39}.leaflet-oldie .marker-cluster-medium{background-color:#f1d357}.leaflet-oldie .marker-cluster-medium div{background-color:#f0c20c}.leaflet-oldie .marker-cluster-large{background-color:#fd9c73}.leaflet-oldie .marker-cluster-large div{background-color:#f18017}.marker-cluster{background-clip:padding-box;border-radius:20px}.marker-cluster div{width:30px;height:30px;margin-left:5px;margin-top:5px;text-align:center;border-radius:15px;font:12px Helvetica Neue,Arial,Helvetica,sans-serif}.marker-cluster span{line-height:30px}";var Vd=Object.defineProperty,Kd=Object.getOwnPropertyDescriptor,tt=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Kd(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Vd(e,i,o),o},"__decorateClass$b");const Il={sequentialAscending:["#F5F5FE","#E3E3FD","#C1C1FB","#A1A1F8","#8585F6","#6A6AF4","#4747E5","#2323B4","#000091"],sequentialDescending:["#000091","#2323B4","#4747E5","#6A6AF4","#8585F6","#A1A1F8","#C1C1FB","#E3E3FD","#F5F5FE"],divergentAscending:["#000091","#4747E5","#8585F6","#C1C1FB","#F5F5F5","#FCC0B4","#F58050","#E3541C","#C9191E"],divergentDescending:["#C9191E","#E3541C","#F58050","#FCC0B4","#F5F5F5","#C1C1FB","#8585F6","#4747E5","#000091"],neutral:["#F6F6F6","#E5E5E5","#CECECE","#B5B5B5","#929292","#777777","#666666","#3A3A3A","#161616"],default:["#F5F5FE","#E3E3FD","#C1C1FB","#A1A1F8","#8585F6","#6A6AF4","#4747E5","#2323B4","#000091"]};function Jd(c,e){const i=[...c].sort((o,a)=>o-a),n=[];for(let o=1;o<e;o++){const a=Math.floor(o/e*i.length);n.push(i[Math.min(a,i.length-1)])}return n}s(Jd,"quantileBreaks");function Yd(c,e,i){for(let n=0;n<e.length;n++)if(c<=e[n])return i[n];return i[i.length-1]}s(Yd,"getColorForValue"),v.DsfrDataMapLayer=(Bi=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.type="marker",this.latField="",this.lonField="",this.geoField="",this.popupTemplate="",this.popupFields="",this.tooltipField="",this.color="#000091",this.colorField="",this.colorMap="",this.fillField="",this.fillOpacity=.6,this.selectedPalette="",this.radius=8,this.radiusField="",this.radiusUnit="px",this.radiusMin=4,this.radiusMax=30,this.heatRadius=25,this.heatBlur=15,this.heatField="",this.cluster=!1,this.clusterRadius=80,this.minZoom=0,this.maxZoom=18,this.bbox=!1,this.bboxDebounce=300,this.bboxField="",this.timeField="",this.timeBucket="none",this.timeMode="snapshot",this.maxItems=5e3,this.filter="",this._mapParent=null,this._leafletMap=null,this._L=null,this._layerGroup=null,this._clusterGroup=null,this._visible=!0,this._data=[],this._bboxTimer=null,this._banner=null,this._totalCount=0,this._clusterLoaded=!1,this._heatLayer=null,this._heatLoaded=!1,this._radiusScale=null,this._colorMapParsed=null,this._timeFrames=new Map,this._timeSteps=[],this._currentFrameIndex=-1}createRenderRoot(){return this}_parseColorMap(){const e=new Map;if(!this.colorMap)return e;for(const i of this.colorMap.split(",")){const n=i.lastIndexOf(":");if(n>0){const o=i.substring(0,n).trim(),a=i.substring(n+1).trim();o&&a&&e.set(o,a)}}return e}_resolveColor(e){var n;if(!this.colorField||!((n=this._colorMapParsed)!=null&&n.size))return this.color;const i=String(W(e,this.colorField)??"");return this._colorMapParsed.get(i)??this.color}onSourceData(e){if(this._data=Array.isArray(e)?e:[],this.timeField&&(this._buildTimeFrames(),this._currentFrameIndex>=0)){this.setTimelineFrame(Math.min(this._currentFrameIndex,this._timeSteps.length-1));return}this._renderLayer()}_buildTimeFrames(){this._timeFrames.clear();for(const e of this._data){const i=W(e,this.timeField),n=this._bucketTime(i);n!==null&&(this._timeFrames.has(n)||this._timeFrames.set(n,[]),this._timeFrames.get(n).push(e))}this._timeSteps=[...this._timeFrames.keys()].sort(),this.dispatchEvent(new CustomEvent("dsfr-data-map-layer-time-ready",{bubbles:!0,detail:{steps:this._timeSteps}}))}_bucketTime(e){if(e==null)return null;const i=String(e);if(this.timeBucket==="none")return i;const n=new Date(i);if(isNaN(n.getTime()))return null;const o=s(a=>String(a).padStart(2,"0"),"pad");switch(this.timeBucket){case"year":return`${n.getFullYear()}`;case"month":return`${n.getFullYear()}-${o(n.getMonth()+1)}`;case"day":return`${n.getFullYear()}-${o(n.getMonth()+1)}-${o(n.getDate())}`;case"hour":return`${n.getFullYear()}-${o(n.getMonth()+1)}-${o(n.getDate())} ${o(n.getHours())}:00`;default:return i}}_getFrameData(e){if(e<0||e>=this._timeSteps.length)return[];if(this.timeMode==="cumulative"){const n=[];for(let o=0;o<=e;o++){const a=this._timeSteps[o];n.push(...this._timeFrames.get(a)||[])}return n}const i=this._timeSteps[e];return this._timeFrames.get(i)||[]}setTimelineFrame(e){this._currentFrameIndex=e;const i=this._getFrameData(e),n=this._data;this._data=i,this._renderLayer(),this._data=n}resetTimeline(){this._currentFrameIndex=-1,this._renderLayer()}getTimeSteps(){return this._timeSteps}_onMapReady(){this._mapParent=this.closest("dsfr-data-map"),this._mapParent&&(this._leafletMap=this._mapParent.getLeafletMap(),this._L=this._mapParent.getLeafletLib(),!(!this._leafletMap||!this._L)&&(this._layerGroup=this._L.layerGroup(),this._updateVisibility(),this._data.length>0&&this._renderLayer()))}_onViewportChange(){this._leafletMap&&(this._updateVisibility(),this.bbox&&this._visible&&(this._bboxTimer&&clearTimeout(this._bboxTimer),this._bboxTimer=setTimeout(()=>this._sendBboxCommand(),this.bboxDebounce)))}disconnectedCallback(){super.disconnectedCallback(),this._bboxTimer&&clearTimeout(this._bboxTimer),this._layerGroup&&this._leafletMap&&this._layerGroup.removeFrom(this._leafletMap),this._clusterGroup&&this._leafletMap&&this._clusterGroup.removeFrom(this._leafletMap),this._heatLayer&&(this._heatLayer.remove(),this._heatLayer=null),this._removeBanner()}_updateVisibility(){if(!this._leafletMap||!this._layerGroup)return;const e=this._leafletMap.getZoom(),i=e>=this.minZoom&&e<=this.maxZoom;if(i&&!this._visible){this._visible=!0;const n=this._clusterGroup||this._layerGroup;this._leafletMap.hasLayer(n)||n.addTo(this._leafletMap),this._heatLayer&&!this._leafletMap.hasLayer(this._heatLayer)&&this._heatLayer.addTo(this._leafletMap)}else if(!i&&this._visible){this._visible=!1;const n=this._clusterGroup||this._layerGroup;this._leafletMap.hasLayer(n)&&n.removeFrom(this._leafletMap),this._heatLayer&&this._leafletMap.hasLayer(this._heatLayer)&&this._heatLayer.removeFrom(this._leafletMap),this._removeBanner()}}_sendBboxCommand(){var h,f;if(!this._leafletMap||!this.source)return;const e=this._leafletMap.getBounds(),i=e.getSouthWest(),n=e.getNorthEast(),o=this.bboxField||this.geoField||this._autoDetectGeoField(),a=document.getElementById(this.source),l=(h=a==null?void 0:a.getAdapter)==null?void 0:h.call(a);if((f=l==null?void 0:l.capabilities)!=null&&f.serverGeo){const _=`in_bbox(${o}, ${i.lat}, ${i.lng}, ${n.lat}, ${n.lng})`;Vt(this.source,{where:_,whereKey:"map-bbox"})}else this._renderLayer(e)}_autoDetectGeoField(){if(this._data.length===0)return"geo_point_2d";const e=this._data[0];for(const i of["geo_point_2d","geo_shape","geometry","geom","geo_point","geopoint"])if(e[i]!==void 0)return i;return"geo_point_2d"}async _renderLayer(e){var f,_,g,m,w;if(!this._leafletMap||!this._L||!this._layerGroup)return;const i=this._L;this._layerGroup.clearLayers(),this._clusterGroup&&this._clusterGroup.clearLayers();let n=this._data;e&&(n=n.filter(b=>{const S=this._extractCoords(b);return S?e.contains([S.lat,S.lon]):!1})),this._totalCount=n.length;const o=this.maxItems>0&&n.length>this.maxItems;o&&(n=n.slice(0,this.maxItems)),this._colorMapParsed=this.colorField&&this.colorMap?this._parseColorMap():null;let a=[],l=[];if(this.fillField&&this.selectedPalette&&this.type==="geoshape"){const b=n.map(S=>Number(W(S,this.fillField))).filter(S=>!isNaN(S));l=Il[this.selectedPalette]||Il.default,a=Jd(b,l.length)}if(this._radiusScale=null,this.radiusField&&this.type==="circle"){const b=n.map(S=>Number(W(S,this.radiusField))).filter(S=>!isNaN(S)&&isFinite(S));if(b.length>0){const S=Math.min(...b),T=Math.max(...b)-S;if(T>0){const E=this.radiusMin,O=this.radiusMax;this._radiusScale=I=>E+(I-S)/T*(O-E)}else{const E=(this.radiusMin+this.radiusMax)/2;this._radiusScale=()=>E}}}if(this.type==="heatmap"&&!this._heatLoaded&&await this._loadHeatLayer(),this.cluster&&!this._clusterLoaded&&await this._loadMarkerCluster(),this.cluster&&this._clusterLoaded&&!this._clusterGroup){const b=window.L,S=b.markerClusterGroup?x=>b.markerClusterGroup(x):x=>new b.MarkerClusterGroup(x);this._clusterGroup=S({maxClusterRadius:this.clusterRadius,iconCreateFunction:s(x=>{const T=x.getChildCount(),E=T<10?"small":T<100?"medium":"large";return i.divIcon({html:`<span class="dsfr-data-map__cluster dsfr-data-map__cluster--${E}">${T}</span>`,className:"dsfr-data-map__cluster-icon",iconSize:i.point(40,40)})},"iconCreateFunction")}),this._visible&&this._clusterGroup.addTo(this._leafletMap)}const h=this._clusterGroup||this._layerGroup;for(const b of n)switch(this.type){case"marker":this._addMarker(b,i,h);break;case"geoshape":this._addGeoshape(b,i,h,a,l);break;case"circle":this._addCircle(b,i,h);break}if(this.type==="heatmap"&&this._renderHeatmap(n,i),this._visible&&this._leafletMap&&!this._clusterGroup&&!this._leafletMap.hasLayer(this._layerGroup)&&this._layerGroup.addTo(this._leafletMap),(f=this._mapParent)!=null&&f.fitBounds){const b=(g=(_=this._clusterGroup||this._layerGroup).getBounds)==null?void 0:g.call(_);(m=b==null?void 0:b.isValid)!=null&&m.call(b)&&this._mapParent.registerLayerBounds(b)}if(this._updateBanner(o,n.length),this._mapParent){const b=[],S=this._mapParent.querySelectorAll("dsfr-data-map-layer");for(const x of S){const T=x,E=((w=T._data)==null?void 0:w.length)??0;if(E>0){const O=T.type==="marker"?"marqueurs":T.type==="geoshape"?"zones":T.type==="circle"?"cercles":"points";b.push(`${E} ${O}`)}}b.length>0&&this._mapParent.updateDescription([`Couches : ${b.join(", ")}.`])}}_addMarker(e,i,n){const o=this._extractCoords(e);if(!o)return;const a=this._resolveColor(e),l=i.divIcon({html:`<span class="fr-icon-map-pin-2-fill" style="color: ${a}; font-size: 1.5rem;" aria-hidden="true"></span>`,className:"dsfr-data-map__marker",iconSize:[24,24],iconAnchor:[12,24],popupAnchor:[0,-24]}),h=this.tooltipField?String(W(e,this.tooltipField)??""):"",f=i.marker([o.lat,o.lon],{icon:l,alt:h||"Marqueur"});this._bindPopup(f,e),this._bindTooltip(f,e),n.addLayer(f)}_addGeoshape(e,i,n,o,a){const l=this.geoField?W(e,this.geoField):null;if(!l||typeof l!="object")return;const h=this._resolveColor(e);let f=h;if(this.fillField&&o.length>0){const m=Number(W(e,this.fillField));isNaN(m)||(f=Yd(m,o,a))}const _=l.type?l:null;if(!_)return;const g=i.geoJSON(_,{style:{color:h,weight:1,fillColor:f,fillOpacity:this.fillOpacity}});this._bindPopup(g,e),this._bindTooltip(g,e),n.addLayer(g)}_addCircle(e,i,n){const o=this._extractCoords(e);if(!o)return;let a=this.radius;if(this.radiusField){const f=Number(W(e,this.radiusField));isNaN(f)||(a=this._radiusScale?this._radiusScale(f):f)}const l=this._resolveColor(e);let h;this.radiusUnit==="m"?h=i.circle([o.lat,o.lon],{radius:a,color:l,fillColor:l,fillOpacity:this.fillOpacity,weight:1}):h=i.circleMarker([o.lat,o.lon],{radius:a,color:l,fillColor:l,fillOpacity:this.fillOpacity,weight:1}),this._bindPopup(h,e),this._bindTooltip(h,e),n.addLayer(h)}_renderHeatmap(e,i){var o;if(!this._leafletMap)return;this._heatLayer&&(this._heatLayer.remove(),this._heatLayer=null);const n=[];for(const a of e){const l=this._extractCoords(a);if(!l)continue;let h=1;if(this.heatField){const f=Number(W(a,this.heatField));isNaN(f)||(h=f)}n.push([l.lat,l.lon,h])}if(n.length!==0)if(this._heatLoaded&&((o=window.L)!=null&&o.heatLayer))this._heatLayer=window.L.heatLayer(n,{radius:this.heatRadius,blur:this.heatBlur,maxZoom:this.maxZoom}),this._visible&&this._heatLayer.addTo(this._leafletMap);else for(const[a,l]of n){const h=this._L.circleMarker([a,l],{radius:8,color:"transparent",fillColor:this.color,fillOpacity:.3,weight:0});this._layerGroup.addLayer(h)}}async _loadHeatLayer(){var e,i;try{await Promise.resolve().then(()=>Mf),(e=window.L)!=null&&e.heatLayer||await new Promise((n,o)=>{const a=document.createElement("script");a.src="https://cdn.jsdelivr.net/npm/leaflet.heat@0.2.0/dist/leaflet-heat.js",a.onload=()=>n(),a.onerror=()=>o(new Error("Failed to load leaflet.heat from CDN")),document.head.appendChild(a)}),this._heatLoaded=!!((i=window.L)!=null&&i.heatLayer)}catch{console.warn("dsfr-data-map-layer: leaflet.heat not available, using circle fallback"),this._heatLoaded=!1}}_extractCoords(e){if(this.latField&&this.lonField){const i=Number(W(e,this.latField)),n=Number(W(e,this.lonField));return!isNaN(i)&&!isNaN(n)?{lat:i,lon:n}:null}if(this.geoField){const i=W(e,this.geoField);return i?i.type==="Point"&&Array.isArray(i.coordinates)?{lat:i.coordinates[1],lon:i.coordinates[0]}:typeof i.lat=="number"&&typeof i.lon=="number"?{lat:i.lat,lon:i.lon}:Array.isArray(i)&&i.length>=2?{lat:Number(i[0]),lon:Number(i[1])}:null:null}for(const i of["geo_point_2d","geopoint","geo_point"]){const n=e[i];if(n){if(n.type==="Point"&&Array.isArray(n.coordinates))return{lat:n.coordinates[1],lon:n.coordinates[0]};if(typeof n.lat=="number"&&typeof n.lon=="number")return{lat:n.lat,lon:n.lon}}}return null}_findPopupCompanion(){var o;const e=this.querySelector("dsfr-data-map-popup");if(e)return e;if(!this._mapParent)return null;const i=this.id||this.source,n=this._mapParent.querySelectorAll(":scope > dsfr-data-map-popup");for(const a of n){const l=a;if(l.for&&((o=l.matchesLayer)!=null&&o.call(l,i)))return l}return null}_bindPopup(e,i){const n=this._findPopupCompanion();if(n){if(n.mode==="popup"){const a=n.getPopupHtml(i);e.bindPopup(a),this._bindPopupA11y(e,i)}else e.on("click",()=>{n.showForRecord(i)});return}if(!this.popupTemplate&&!this.popupFields)return;let o;this.popupTemplate?o=this._interpolateTemplate(this.popupTemplate,i):o=this._buildPopupTable(i),e.bindPopup(`<div class="dsfr-data-map__popup">${o}</div>`),this._bindPopupA11y(e,i)}_bindPopupA11y(e,i){e.on("popupopen",n=>{var h,f;const o=n.popup,a=this._getPopupPlainText(i);(h=this._mapParent)==null||h.announceToScreenReader(a);const l=(f=o.getElement())==null?void 0:f.querySelector(".leaflet-popup-close-button");l&&(l.setAttribute("aria-label","Fermer la popup"),setTimeout(()=>l.focus(),50))}),e.on("popupclose",()=>{var o;const n=(o=e.getElement)==null?void 0:o.call(e);n&&setTimeout(()=>n.focus(),50)})}_interpolateTemplate(e,i){return e.replace(/\{([^}]+)\}/g,(n,o)=>{const a=W(i,o.trim());return a!==void 0?Gt(String(a)):""})}_buildPopupTable(e){return`<table class="fr-table fr-table--sm">${this.popupFields.split(",").map(o=>o.trim()).filter(Boolean).map(o=>{const a=W(e,o),l=a!==void 0?Gt(String(a)):"";return`<tr><th>${Gt(o)}</th><td>${l}</td></tr>`}).join("")}</table>`}_bindTooltip(e,i){if(!this.tooltipField)return;const n=W(i,this.tooltipField);n!==void 0&&e.bindTooltip(Gt(String(n)))}_getPopupPlainText(e){return this.popupFields?this.popupFields.split(",").map(n=>n.trim()).filter(Boolean).map(n=>{const o=W(e,n);return o!==void 0?`${n}: ${o}`:""}).filter(Boolean).join(", "):this.popupTemplate?this._interpolateTemplate(this.popupTemplate,e).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim():""}async _loadMarkerCluster(){var e,i;try{if(!document.querySelector("style[data-markercluster-css]")){const n=document.createElement("style");n.setAttribute("data-markercluster-css",""),n.textContent=Hd+`
`+Wd,document.head.appendChild(n)}if(await Promise.resolve().then(()=>Ef),(e=window.L)!=null&&e.MarkerClusterGroup||await new Promise((n,o)=>{const a=document.createElement("script");a.src="https://cdn.jsdelivr.net/npm/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js",a.onload=()=>n(),a.onerror=()=>o(new Error("Failed to load leaflet.markercluster from CDN")),document.head.appendChild(a)}),this._clusterLoaded=!!((i=window.L)!=null&&i.MarkerClusterGroup),!document.querySelector("style[data-dsfr-map-cluster]")){const n=document.createElement("style");n.setAttribute("data-dsfr-map-cluster",""),n.textContent=`
          .dsfr-data-map__cluster-icon {
            background: none !important;
            border: none !important;
          }
          .dsfr-data-map__cluster {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            color: white;
            font-weight: 700;
            font-size: 0.875rem;
          }
          .dsfr-data-map__cluster--small {
            background: var(--background-action-high-blue-france, #000091);
          }
          .dsfr-data-map__cluster--medium {
            background: var(--background-action-high-blue-ecume, #2323B4);
          }
          .dsfr-data-map__cluster--large {
            background: var(--background-flat-error, #C9191E);
          }
        `,document.head.appendChild(n)}}catch{console.warn("dsfr-data-map-layer: leaflet.markercluster not available, clustering disabled"),this._clusterLoaded=!1}}_updateBanner(e,i){var n;this._removeBanner(),e&&(this._banner=document.createElement("div"),this._banner.className="dsfr-data-map__max-items-banner",this._banner.textContent=`${i.toLocaleString("fr-FR")} elements affiches sur ${this._totalCount.toLocaleString("fr-FR")} disponibles. Zoomez pour voir plus de detail.`,(n=this._mapParent)==null||n.appendChild(this._banner))}_removeBanner(){this._banner&&(this._banner.remove(),this._banner=null)}render(){}},s(Bi,"DsfrDataMapLayer"),Bi),tt([P({type:String})],v.DsfrDataMapLayer.prototype,"source",2),tt([P({type:String})],v.DsfrDataMapLayer.prototype,"type",2),tt([P({type:String,attribute:"lat-field"})],v.DsfrDataMapLayer.prototype,"latField",2),tt([P({type:String,attribute:"lon-field"})],v.DsfrDataMapLayer.prototype,"lonField",2),tt([P({type:String,attribute:"geo-field"})],v.DsfrDataMapLayer.prototype,"geoField",2),tt([P({type:String,attribute:"popup-template"})],v.DsfrDataMapLayer.prototype,"popupTemplate",2),tt([P({type:String,attribute:"popup-fields"})],v.DsfrDataMapLayer.prototype,"popupFields",2),tt([P({type:String,attribute:"tooltip-field"})],v.DsfrDataMapLayer.prototype,"tooltipField",2),tt([P({type:String})],v.DsfrDataMapLayer.prototype,"color",2),tt([P({type:String,attribute:"color-field"})],v.DsfrDataMapLayer.prototype,"colorField",2),tt([P({type:String,attribute:"color-map"})],v.DsfrDataMapLayer.prototype,"colorMap",2),tt([P({type:String,attribute:"fill-field"})],v.DsfrDataMapLayer.prototype,"fillField",2),tt([P({type:Number,attribute:"fill-opacity"})],v.DsfrDataMapLayer.prototype,"fillOpacity",2),tt([P({type:String,attribute:"selected-palette"})],v.DsfrDataMapLayer.prototype,"selectedPalette",2),tt([P({type:Number})],v.DsfrDataMapLayer.prototype,"radius",2),tt([P({type:String,attribute:"radius-field"})],v.DsfrDataMapLayer.prototype,"radiusField",2),tt([P({type:String,attribute:"radius-unit"})],v.DsfrDataMapLayer.prototype,"radiusUnit",2),tt([P({type:Number,attribute:"radius-min"})],v.DsfrDataMapLayer.prototype,"radiusMin",2),tt([P({type:Number,attribute:"radius-max"})],v.DsfrDataMapLayer.prototype,"radiusMax",2),tt([P({type:Number,attribute:"heat-radius"})],v.DsfrDataMapLayer.prototype,"heatRadius",2),tt([P({type:Number,attribute:"heat-blur"})],v.DsfrDataMapLayer.prototype,"heatBlur",2),tt([P({type:String,attribute:"heat-field"})],v.DsfrDataMapLayer.prototype,"heatField",2),tt([P({type:Boolean})],v.DsfrDataMapLayer.prototype,"cluster",2),tt([P({type:Number,attribute:"cluster-radius"})],v.DsfrDataMapLayer.prototype,"clusterRadius",2),tt([P({type:Number,attribute:"min-zoom"})],v.DsfrDataMapLayer.prototype,"minZoom",2),tt([P({type:Number,attribute:"max-zoom"})],v.DsfrDataMapLayer.prototype,"maxZoom",2),tt([P({type:Boolean})],v.DsfrDataMapLayer.prototype,"bbox",2),tt([P({type:Number,attribute:"bbox-debounce"})],v.DsfrDataMapLayer.prototype,"bboxDebounce",2),tt([P({type:String,attribute:"bbox-field"})],v.DsfrDataMapLayer.prototype,"bboxField",2),tt([P({type:String,attribute:"time-field"})],v.DsfrDataMapLayer.prototype,"timeField",2),tt([P({type:String,attribute:"time-bucket"})],v.DsfrDataMapLayer.prototype,"timeBucket",2),tt([P({type:String,attribute:"time-mode"})],v.DsfrDataMapLayer.prototype,"timeMode",2),tt([P({type:Number,attribute:"max-items"})],v.DsfrDataMapLayer.prototype,"maxItems",2),tt([P({type:String})],v.DsfrDataMapLayer.prototype,"filter",2),v.DsfrDataMapLayer=tt([mt("dsfr-data-map-layer")],v.DsfrDataMapLayer);var Qd=Object.defineProperty,Xd=Object.getOwnPropertyDescriptor,xr=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Xd(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&Qd(e,i,o),o},"__decorateClass$a");v.DsfrDataMapPopup=(Ni=class extends ut{constructor(){super(...arguments),this.mode="popup",this.titleField="",this.width="350px",this.for="",this._panelEl=null,this._modalEl=null,this._templateEl=null,this._currentRecord=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._templateEl=this.querySelector("template"),this._injectStyles()}disconnectedCallback(){super.disconnectedCallback(),this._removePanel(),this._removeModal()}matchesLayer(e){return this.for?this.for===e:!0}showForRecord(e){this._currentRecord=e;const i=this._renderTemplate(e);switch(this.mode){case"popup":break;case"modal":this._showModal(i,e);break;case"panel-right":case"panel-left":this._showPanel(i,e);break}}getPopupHtml(e){return`<div class="dsfr-data-map__popup">${this._renderTemplate(e)}</div>`}hasTemplate(){return!!this._templateEl}close(){this._removePanel(),this._removeModal(),this._currentRecord=null}_renderTemplate(e){return this._templateEl?this._templateEl.innerHTML.replace(/\{\{([^}]+)\}\}/g,(n,o)=>{const a=W(e,o.trim());return a!==void 0?Gt(String(a)):""}):this._buildAutoTable(e)}_buildAutoTable(e){return`<table class="fr-table fr-table--sm">${Object.keys(e).filter(o=>!o.startsWith("geo")&&o!=="latitude"&&o!=="longitude"&&typeof e[o]!="object").map(o=>{const a=e[o],l=a!==void 0?Gt(String(a)):"";return`<tr><th>${Gt(o)}</th><td>${l}</td></tr>`}).join("")}</table>`}_showPanel(e,i){var f;const n=this.closest("dsfr-data-map");if(!n)return;const o=this.mode==="panel-left"?"left":"right",a=this.titleField?String(W(i,this.titleField)??""):"";this._panelEl||(this._panelEl=document.createElement("div"),this._panelEl.className=`dsfr-data-map-popup__panel dsfr-data-map-popup__panel--${o}`,this._panelEl.style.width=this.width,this._panelEl.setAttribute("role","complementary"),this._panelEl.setAttribute("aria-label","Details de l'element selectionne"),this._panelEl.setAttribute("aria-live","polite"),n.appendChild(this._panelEl),requestAnimationFrame(()=>{var _;(_=this._panelEl)==null||_.classList.add("dsfr-data-map-popup__panel--open")})),this._panelEl.innerHTML=`
      <div class="dsfr-data-map-popup__panel-header">
        ${a?`<h3 class="dsfr-data-map-popup__panel-title">${Gt(a)}</h3>`:""}
        <button class="dsfr-data-map-popup__panel-close fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
                aria-label="Fermer le panneau" title="Fermer">
          <span class="fr-icon-close-line" aria-hidden="true"></span>
        </button>
      </div>
      <div class="dsfr-data-map-popup__panel-body">${e}</div>
    `;const l=this._panelEl.querySelector(".dsfr-data-map-popup__panel-close");l==null||l.addEventListener("click",()=>this.close());const h=n;a&&((f=h.announceToScreenReader)==null||f.call(h,`Detail : ${a}`))}_removePanel(){this._panelEl&&(this._panelEl.classList.remove("dsfr-data-map-popup__panel--open"),setTimeout(()=>{var e;(e=this._panelEl)==null||e.remove(),this._panelEl=null},200))}_showModal(e,i){var f;this._removeModal();const n=this.titleField?String(W(i,this.titleField)??""):"Detail",o=`dsfr-map-modal-${Date.now()}`;this._modalEl=document.createElement("div"),this._modalEl.className="dsfr-data-map-popup__modal-overlay",this._modalEl.setAttribute("role","dialog"),this._modalEl.setAttribute("aria-modal","true"),this._modalEl.setAttribute("aria-label",n),this._modalEl.innerHTML=`
      <div class="dsfr-data-map-popup__modal" id="${o}">
        <div class="dsfr-data-map-popup__modal-header">
          <h3 class="dsfr-data-map-popup__modal-title">${Gt(n)}</h3>
          <button class="dsfr-data-map-popup__modal-close fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
                  aria-label="Fermer" title="Fermer">
            <span class="fr-icon-close-line" aria-hidden="true"></span>
          </button>
        </div>
        <div class="dsfr-data-map-popup__modal-body">${e}</div>
      </div>
    `,document.body.appendChild(this._modalEl);const a=this._modalEl.querySelector(".dsfr-data-map-popup__modal-close");setTimeout(()=>a==null?void 0:a.focus(),50),a==null||a.addEventListener("click",()=>this.close()),this._modalEl.addEventListener("click",_=>{_.target===this._modalEl&&this.close()});const l=s(_=>{_.key==="Escape"&&(this.close(),document.removeEventListener("keydown",l))},"escHandler");document.addEventListener("keydown",l);const h=this.closest("dsfr-data-map");(f=h==null?void 0:h.announceToScreenReader)==null||f.call(h,`Modale ouverte : ${n}`)}_removeModal(){this._modalEl&&(this._modalEl.remove(),this._modalEl=null)}_injectStyles(){if(document.querySelector("style[data-dsfr-map-popup]"))return;const e=document.createElement("style");e.setAttribute("data-dsfr-map-popup",""),e.textContent=`
      /* Panel */
      .dsfr-data-map-popup__panel {
        position: absolute;
        top: 0;
        bottom: 0;
        z-index: 1001;
        background: var(--background-default-grey, #fff);
        box-shadow: 0 0 12px rgba(0,0,0,0.15);
        overflow-y: auto;
        transition: transform 0.2s ease;
        display: flex;
        flex-direction: column;
      }
      .dsfr-data-map-popup__panel--right {
        right: 0;
        transform: translateX(100%);
      }
      .dsfr-data-map-popup__panel--left {
        left: 0;
        transform: translateX(-100%);
      }
      .dsfr-data-map-popup__panel--open {
        transform: translateX(0);
      }
      .dsfr-data-map-popup__panel-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--border-default-grey);
        min-height: 48px;
      }
      .dsfr-data-map-popup__panel-title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .dsfr-data-map-popup__panel-body {
        padding: 1rem;
        flex: 1;
        overflow-y: auto;
      }
      .dsfr-data-map-popup__panel-body table {
        margin: 0;
        font-size: 0.875rem;
      }
      .dsfr-data-map-popup__panel-body th {
        text-align: left;
        padding-right: 0.75rem;
        font-weight: 600;
        white-space: nowrap;
        vertical-align: top;
      }
      .dsfr-data-map-popup__panel-body td {
        word-break: break-word;
      }

      /* Modal overlay */
      .dsfr-data-map-popup__modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dsfr-data-map-popup__modal {
        background: var(--background-default-grey, #fff);
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        max-width: 640px;
        width: 90vw;
        max-height: 80vh;
        display: flex;
        flex-direction: column;
      }
      .dsfr-data-map-popup__modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--border-default-grey);
      }
      .dsfr-data-map-popup__modal-title {
        font-size: 1.125rem;
        font-weight: 700;
        margin: 0;
      }
      .dsfr-data-map-popup__modal-body {
        padding: 1.5rem;
        overflow-y: auto;
        flex: 1;
      }
      .dsfr-data-map-popup__modal-body table {
        margin: 0;
        font-size: 0.875rem;
      }
      .dsfr-data-map-popup__modal-body th {
        text-align: left;
        padding-right: 0.75rem;
        font-weight: 600;
        white-space: nowrap;
        vertical-align: top;
      }
    `,document.head.appendChild(e)}render(){}},s(Ni,"DsfrDataMapPopup"),Ni),xr([P({type:String})],v.DsfrDataMapPopup.prototype,"mode",2),xr([P({type:String,attribute:"title-field"})],v.DsfrDataMapPopup.prototype,"titleField",2),xr([P({type:String})],v.DsfrDataMapPopup.prototype,"width",2),xr([P({type:String,attribute:"for"})],v.DsfrDataMapPopup.prototype,"for",2),v.DsfrDataMapPopup=xr([mt("dsfr-data-map-popup")],v.DsfrDataMapPopup);var tf=Object.defineProperty,ef=Object.getOwnPropertyDescriptor,$e=s((c,e,i,n)=>{for(var o=n>1?void 0:n?ef(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&tf(e,i,o),o},"__decorateClass$9");const rf=[.5,1,2,4];v.DsfrDataMapTimeline=(Ui=class extends ut{constructor(){super(...arguments),this.for="",this.speed=1,this.interval=1e3,this.label="auto",this._playing=!1,this._currentIndex=0,this._steps=[],this._ready=!1,this._timer=null,this._prefersReducedMotion=!1,this._boundOnTimeReady=this._onTimeReady.bind(this)}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),It("dsfr-data-map-timeline",""),this._prefersReducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const e=this.closest("dsfr-data-map");e==null||e.addEventListener("dsfr-data-map-layer-time-ready",this._boundOnTimeReady),this._injectStyles()}disconnectedCallback(){super.disconnectedCallback(),this._stop();const e=this.closest("dsfr-data-map");e==null||e.removeEventListener("dsfr-data-map-layer-time-ready",this._boundOnTimeReady)}_onMapReady(){this._collectSteps()}_getTargetLayers(){const e=this.closest("dsfr-data-map");return e?this.for?this.for.split(",").map(n=>n.trim()).map(n=>e.querySelector(`#${n}`)).filter(n=>n!==null&&n.timeField!==""):Array.from(e.querySelectorAll("dsfr-data-map-layer[time-field]")):[]}_onTimeReady(e){e.stopPropagation(),this._collectSteps()}_collectSteps(){const e=this._getTargetLayers(),i=new Set;for(const n of e)for(const o of n.getTimeSteps())i.add(o);this._steps=[...i].sort(),this._steps.length>0&&!this._ready&&(this._ready=!0,this._seek(0))}_play(){if(this._playing||this._steps.length===0||this._prefersReducedMotion)return;this._currentIndex>=this._steps.length-1&&(this._currentIndex=0),this._playing=!0;const e=Math.max(50,this.interval/this.speed);this._timer=setInterval(()=>this._tick(),e)}_pause(){this._playing=!1,this._timer&&(clearInterval(this._timer),this._timer=null)}_stop(){this._pause(),this._steps.length>0&&this._seek(0)}_tick(){if(this._currentIndex>=this._steps.length-1){this._pause();return}this._seek(this._currentIndex+1)}_stepForward(){this._currentIndex<this._steps.length-1&&this._seek(this._currentIndex+1)}_stepBackward(){this._currentIndex>0&&this._seek(this._currentIndex-1)}_seek(e){this._currentIndex=Math.max(0,Math.min(e,this._steps.length-1));const i=this._getTargetLayers();for(const n of i){const o=n.getTimeSteps(),a=this._steps[this._currentIndex],l=o.indexOf(a);if(l>=0)n.setTimelineFrame(l);else if(n.timeMode==="cumulative"){let h=-1;for(let f=0;f<o.length;f++)o[f]<=a&&(h=f);h>=0&&n.setTimelineFrame(h)}}this.requestUpdate()}_onSliderInput(e){const i=Number(e.target.value);this._seek(i)}_onSpeedChange(e){const i=Number(e.target.value);this.speed=i,this._playing&&(this._pause(),this._play())}_togglePlay(){this._playing?this._pause():this._play()}_onKeydown(e){switch(e.key){case" ":e.preventDefault(),this._togglePlay();break;case"ArrowRight":e.preventDefault(),this._stepForward();break;case"ArrowLeft":e.preventDefault(),this._stepBackward();break;case"Home":e.preventDefault(),this._seek(0);break;case"End":e.preventDefault(),this._seek(this._steps.length-1);break}}_injectStyles(){if(document.querySelector("style[data-dsfr-data-map-timeline]"))return;const e=document.createElement("style");e.setAttribute("data-dsfr-data-map-timeline",""),e.textContent=`
      .dsfr-data-map-timeline {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1000;
        background: var(--background-default-grey, #fff);
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        padding: 0.5rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
        min-width: 300px;
        max-width: 90%;
      }
      .dsfr-data-map-timeline__label {
        font-size: 0.875rem;
        font-weight: 600;
        white-space: nowrap;
      }
      .dsfr-data-map-timeline__slider {
        width: 100%;
      }
      .dsfr-data-map-timeline__slider input[type="range"] {
        width: 100%;
        cursor: pointer;
      }
      .dsfr-data-map-timeline__controls {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }
      .dsfr-data-map-timeline__speed {
        width: auto;
        min-width: 4rem;
        padding: 0.25rem;
        font-size: 0.75rem;
        border: 1px solid var(--border-default-grey, #ddd);
        border-radius: 4px;
        background: var(--background-default-grey, #fff);
      }
      @media (prefers-reduced-motion: reduce) {
        .dsfr-data-map-timeline__play-btn[data-auto] {
          opacity: 0.5;
          cursor: not-allowed;
        }
      }
    `,document.head.appendChild(e)}render(){if(!this._ready||this._steps.length===0)return R;const e=this._steps[this._currentIndex]??"",i=this._steps.length;return M`
      <div
        class="dsfr-data-map-timeline"
        role="group"
        aria-label="Controles de la frise chronologique"
        @keydown=${this._onKeydown}
        tabindex="0"
      >
        <!-- Current time label (live region) -->
        <div class="dsfr-data-map-timeline__label" aria-live="polite" aria-atomic="true">
          ${e} (${this._currentIndex+1}/${i})
        </div>

        <!-- Slider -->
        <div class="dsfr-data-map-timeline__slider">
          <input
            type="range"
            min="0"
            max="${i-1}"
            .value="${String(this._currentIndex)}"
            @input=${this._onSliderInput}
            aria-label="Position dans la frise chronologique"
            aria-valuemin="0"
            aria-valuemax="${i-1}"
            aria-valuenow="${this._currentIndex}"
            aria-valuetext="${e}"
          />
        </div>

        <!-- Transport controls -->
        <div class="dsfr-data-map-timeline__controls">
          <button
            class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
            @click=${this._stepBackward}
            aria-label="Image precedente"
            ?disabled=${this._currentIndex===0}
          >
            <span class="fr-icon-arrow-left-s-line" aria-hidden="true"></span>
          </button>

          <button
            class="fr-btn fr-btn--sm dsfr-data-map-timeline__play-btn"
            data-auto
            @click=${this._togglePlay}
            aria-label="${this._playing?"Pause":"Lecture"}"
            ?disabled=${this._prefersReducedMotion}
          >
            <span
              class="${this._playing?"fr-icon-pause-circle-line":"fr-icon-play-circle-line"}"
              aria-hidden="true"
            ></span>
          </button>

          <button
            class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
            @click=${this._stop}
            aria-label="Arreter et revenir au debut"
          >
            <span class="fr-icon-stop-circle-line" aria-hidden="true"></span>
          </button>

          <button
            class="fr-btn fr-btn--sm fr-btn--tertiary-no-outline"
            @click=${this._stepForward}
            aria-label="Image suivante"
            ?disabled=${this._currentIndex>=i-1}
          >
            <span class="fr-icon-arrow-right-s-line" aria-hidden="true"></span>
          </button>

          <!-- Speed selector -->
          <select
            class="dsfr-data-map-timeline__speed"
            @change=${this._onSpeedChange}
            aria-label="Vitesse de lecture"
          >
            ${rf.map(n=>M` <option value="${n}" ?selected=${this.speed===n}>${n}x</option> `)}
          </select>
        </div>
      </div>
    `}},s(Ui,"DsfrDataMapTimeline"),Ui),$e([P({type:String})],v.DsfrDataMapTimeline.prototype,"for",2),$e([P({type:Number})],v.DsfrDataMapTimeline.prototype,"speed",2),$e([P({type:Number})],v.DsfrDataMapTimeline.prototype,"interval",2),$e([P({type:String})],v.DsfrDataMapTimeline.prototype,"label",2),$e([F()],v.DsfrDataMapTimeline.prototype,"_playing",2),$e([F()],v.DsfrDataMapTimeline.prototype,"_currentIndex",2),$e([F()],v.DsfrDataMapTimeline.prototype,"_steps",2),$e([F()],v.DsfrDataMapTimeline.prototype,"_ready",2),v.DsfrDataMapTimeline=$e([mt("dsfr-data-map-timeline")],v.DsfrDataMapTimeline);var nf=Object.defineProperty,sf=Object.getOwnPropertyDescriptor,_e=s((c,e,i,n)=>{for(var o=n>1?void 0:n?sf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&nf(e,i,o),o},"__decorateClass$8");let af=0;const ea=100;v.DsfrDataA11y=(Zi=class extends Ae(ut){constructor(){super(...arguments),this.source="",this.for="",this.table=!1,this.download=!1,this.filename="donnees.csv",this.description="",this.labelField="",this.valueField="",this.label="",this.noAutoAria=!1,this._previousForTarget=null,this._injectedSkipLink=null}createRenderRoot(){return this}get _showAll(){return!this.table&&!this.download&&!this.description}get _showTable(){return this.table||this._showAll}get _showDownload(){return this.download||this._showAll}get _showDescription(){return!!this.description}connectedCallback(){super.connectedCallback(),It("dsfr-data-a11y"),this._ensureId(),this._injectSkipLink(),this._applyAria()}disconnectedCallback(){super.disconnectedCallback(),this._removeSkipLink(),this._removeAria()}updated(e){super.updated(e),(e.has("for")||e.has("noAutoAria"))&&(this._removeSkipLink(),this._removeAria(),this._injectSkipLink(),this._applyAria())}_ensureId(){this.id||(this.id=`dsfr-data-a11y-${++af}`)}_injectSkipLink(){if(this.noAutoAria||!this.for)return;const e=document.getElementById(this.for);if(!e)return;const i=document.createElement("a");i.href=`#${this.id}-section`,i.className="dsfr-data-a11y__skiplink",i.textContent="Voir les donnees accessibles",i.setAttribute("data-dsfr-data-a11y-link",this.id),e.insertBefore(i,e.firstChild),this._injectedSkipLink=i}_removeSkipLink(){this._injectedSkipLink&&(this._injectedSkipLink.remove(),this._injectedSkipLink=null)}_applyAria(){if(this.noAutoAria||!this.for)return;const e=document.getElementById(this.for);if(!e)return;this._previousForTarget=e;const i=`${this.id}-desc`,n=e.getAttribute("aria-describedby")||"";if(!n.split(/\s+/).includes(i)){const o=n?`${n} ${i}`:i;e.setAttribute("aria-describedby",o)}this._showTable&&e.setAttribute("aria-details",`${this.id}-table`)}_removeAria(){if(!this._previousForTarget)return;const e=this._previousForTarget,i=`${this.id}-desc`,o=(e.getAttribute("aria-describedby")||"").split(/\s+/).filter(a=>a!==i);o.length>0?e.setAttribute("aria-describedby",o.join(" ")):e.removeAttribute("aria-describedby"),e.getAttribute("aria-details")===`${this.id}-table`&&e.removeAttribute("aria-details"),this._previousForTarget=null}_handleDownload(){const e=this._sourceData;if(!e||!Array.isArray(e)||e.length===0)return;const i=this._buildCsv(e);this._triggerDownload(i)}_buildCsv(e){const i=Object.keys(e[0]),n=i.join(";"),o=e.map(a=>i.map(l=>{const h=String(a[l]??"");return h.includes(";")||h.includes('"')?`"${h.replace(/"/g,'""')}"`:h}).join(";"));return[n,...o].join(`
`)}_triggerDownload(e){const i=new Blob([e],{type:"text/csv;charset=utf-8;"}),n=URL.createObjectURL(i),o=document.createElement("a");o.href=n,o.download=this.filename,o.click(),URL.revokeObjectURL(n)}_getColumns(e){if(this.labelField||this.valueField){const i=[];if(this.labelField&&i.push(this.labelField),this.valueField)for(const n of this.valueField.split(",").map(o=>o.trim()))n&&i.push(n);return i}return e.length===0?[]:Object.keys(e[0])}_getAutoDescription(e,i){var f;if(!e)return"Aucune donnee disponible.";const n=i.length,o=this.for?document.getElementById(this.for):null,h=[`${((f=o==null?void 0:o.tagName)==null?void 0:f.toLowerCase())==="dsfr-data-map"?"Donnees de la carte":"Donnees du graphique"} : ${n} lignes.`];return this.description&&h.push(this.description),this._showDownload&&h.push("Telechargement CSV disponible."),this._showTable&&h.push("Tableau de donnees disponible."),h.join(" ")}render(){const e=this._sourceData,i=Array.isArray(e)&&e.length>0,n=this.label||"Accessibilite : donnees et description",o=`${this.id}-desc`,a=`${this.id}-table`,l=i?e:[],h=i?this._getColumns(l):[],f=l.slice(0,ea),_=l.length>ea;return M`
      <section
        class="dsfr-data-a11y"
        id="${this.id}-section"
        role="complementary"
        aria-label="${n}"
      >
        <!-- Concise description for aria-describedby (sr-only) -->
        <p id="${o}" class="dsfr-data-a11y__sr-only">
          ${this._getAutoDescription(i,e)}
        </p>

        <details class="fr-accordion">
          <summary class="fr-accordion__btn">${n}</summary>
          <div class="fr-accordion__content">
            ${this._showDescription?M`
                  <div class="fr-mb-2w">
                    <p class="fr-text--sm">${this.description}</p>
                  </div>
                `:R}
            ${this._showTable&&i?M`
                  <div class="fr-table fr-mb-2w" id="${a}">
                    <table>
                      <caption class="dsfr-data-a11y__sr-only">
                        ${(()=>{var m;const g=this.for?document.getElementById(this.for):null;return((m=g==null?void 0:g.tagName)==null?void 0:m.toLowerCase())==="dsfr-data-map"?"Donnees de la carte":"Donnees du graphique"})()}
                      </caption>
                      <thead>
                        <tr>
                          ${h.map(g=>M`<th scope="col">${g}</th>`)}
                        </tr>
                      </thead>
                      <tbody>
                        ${f.map(g=>M`
                            <tr>
                              ${h.map(m=>M`<td>${g[m]??""}</td>`)}
                            </tr>
                          `)}
                      </tbody>
                    </table>
                    ${_?M`
                          <p class="fr-text--xs fr-mt-1w">
                            Affichage limite aux ${ea} premieres lignes.
                            ${this._showDownload?"Telechargez le CSV pour les donnees completes.":""}
                          </p>
                        `:R}
                  </div>
                `:R}
            ${this._showDownload?M`
                  <button
                    class="fr-btn fr-btn--secondary fr-btn--sm fr-btn--icon-left fr-icon-download-line"
                    @click="${this._handleDownload}"
                    ?disabled="${!i||this._sourceLoading}"
                    title="Telecharger les donnees (CSV)"
                  >
                    Telecharger en CSV
                  </button>
                `:R}
          </div>
        </details>
      </section>

      <style>
        .dsfr-data-a11y {
          margin-top: 0.5rem;
        }
        .dsfr-data-a11y__sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          margin: -1px;
          padding: 0;
          border: 0;
        }
        .dsfr-data-a11y__skiplink {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          margin: -1px;
          padding: 0;
          border: 0;
        }
        .dsfr-data-a11y__skiplink:focus {
          position: static;
          width: auto;
          height: auto;
          overflow: visible;
          clip: auto;
          white-space: normal;
          margin: 0;
          display: inline-block;
          padding: 0.25rem 0.75rem;
          background: var(--background-default-grey, #fff);
          color: var(--text-action-high-blue-france, #000091);
          text-decoration: underline;
          font-size: 0.875rem;
          z-index: 1;
        }
      </style>
    `}},s(Zi,"DsfrDataA11y"),Zi),_e([P({type:String})],v.DsfrDataA11y.prototype,"source",2),_e([P({type:String,attribute:"for"})],v.DsfrDataA11y.prototype,"for",2),_e([P({type:Boolean})],v.DsfrDataA11y.prototype,"table",2),_e([P({type:Boolean})],v.DsfrDataA11y.prototype,"download",2),_e([P({type:String})],v.DsfrDataA11y.prototype,"filename",2),_e([P({type:String})],v.DsfrDataA11y.prototype,"description",2),_e([P({type:String,attribute:"label-field"})],v.DsfrDataA11y.prototype,"labelField",2),_e([P({type:String,attribute:"value-field"})],v.DsfrDataA11y.prototype,"valueField",2),_e([P({type:String})],v.DsfrDataA11y.prototype,"label",2),_e([P({type:Boolean,attribute:"no-auto-aria"})],v.DsfrDataA11y.prototype,"noAutoAria",2),v.DsfrDataA11y=_e([mt("dsfr-data-a11y")],v.DsfrDataA11y);var of=Object.defineProperty,lf=Object.getOwnPropertyDescriptor,me=s((c,e,i,n)=>{for(var o=n>1?void 0:n?lf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&of(e,i,o),o},"__decorateClass$7");let ae=(Gi=class extends ut{constructor(){super(...arguments),this._open=!1,this._tab="login",this._error="",this._loading=!1,this._email="",this._password="",this._passwordConfirm="",this._displayName="",this._successMessage="",this._resetToken=""}createRenderRoot(){return this}open(e="login",i){this._tab=e,this._error="",this._successMessage="",this._email="",this._password="",this._passwordConfirm="",this._displayName="",this._resetToken=i||"",this._open=!0}close(){this._open=!1}async _handleSubmit(e){e.preventDefault(),this._error="",this._successMessage="",this._loading=!0;try{if(this._tab==="login"){const i=await ih({email:this._email,password:this._password});if(!i.success){this._error=i.error||"Identifiants incorrects";return}this.close(),window.location.reload()}else if(this._tab==="register"){if(!this._displayName.trim()){this._error="Le nom est requis";return}const i=await rh({email:this._email,password:this._password,displayName:this._displayName});if(!i.success){this._error=i.error||"Erreur lors de l'inscription";return}this.close(),window.location.reload()}else if(this._tab==="forgot"){const i=await sh(this._email);this._successMessage=i.message||"Si un compte existe, un email a ete envoye"}else if(this._tab==="reset"){if(this._password!==this._passwordConfirm){this._error="Les mots de passe ne correspondent pas";return}const i=await ah(this._resetToken,this._password);if(!i.success){this._error=i.error||"Erreur lors de la reinitialisation";return}this.close(),window.location.reload()}}finally{this._loading=!1}}_switchTab(e){this._tab=e,this._error="",this._successMessage=""}_renderTitle(){switch(this._tab){case"login":return"Connexion";case"register":return"Inscription";case"forgot":return"Mot de passe oublie";case"reset":return"Nouveau mot de passe"}}_renderSubmitLabel(){if(this._loading)return"Chargement...";switch(this._tab){case"login":return"Se connecter";case"register":return"S'inscrire";case"forgot":return"Envoyer le lien";case"reset":return"Reinitialiser"}}_renderForm(){if(this._tab==="forgot")return M`
        <div class="fr-input-group">
          <label class="fr-label" for="auth-email">Email</label>
          <input
            class="fr-input"
            type="email"
            id="auth-email"
            autocomplete="email"
            .value=${this._email}
            @input=${i=>{this._email=i.target.value}}
            required
          />
        </div>
      `;if(this._tab==="reset")return M`
        <div class="fr-input-group">
          <label class="fr-label" for="auth-password">Nouveau mot de passe</label>
          <input
            class="fr-input"
            type="password"
            id="auth-password"
            autocomplete="new-password"
            minlength="8"
            .value=${this._password}
            @input=${i=>{this._password=i.target.value}}
            required
          />
          <p class="fr-hint-text">8 caracteres minimum, 1 majuscule, 1 minuscule, 1 chiffre</p>
        </div>
        <div class="fr-input-group">
          <label class="fr-label" for="auth-password-confirm">Confirmer le mot de passe</label>
          <input
            class="fr-input"
            type="password"
            id="auth-password-confirm"
            autocomplete="new-password"
            minlength="8"
            .value=${this._passwordConfirm}
            @input=${i=>{this._passwordConfirm=i.target.value}}
            required
          />
        </div>
      `;const e=this._tab==="login";return M`
      ${e?R:M`
            <div class="fr-input-group">
              <label class="fr-label" for="auth-name">Nom d'affichage</label>
              <input
                class="fr-input"
                type="text"
                id="auth-name"
                .value=${this._displayName}
                @input=${i=>{this._displayName=i.target.value}}
                required
              />
            </div>
          `}

      <div class="fr-input-group">
        <label class="fr-label" for="auth-email">Email</label>
        <input
          class="fr-input"
          type="email"
          id="auth-email"
          autocomplete="email"
          .value=${this._email}
          @input=${i=>{this._email=i.target.value}}
          required
        />
      </div>

      <div class="fr-input-group">
        <label class="fr-label" for="auth-password">Mot de passe</label>
        <input
          class="fr-input"
          type="password"
          id="auth-password"
          autocomplete="${e?"current-password":"new-password"}"
          minlength="${e?6:8}"
          .value=${this._password}
          @input=${i=>{this._password=i.target.value}}
          required
        />
        ${e?R:M`<p class="fr-hint-text">
              8 caracteres minimum, 1 majuscule, 1 minuscule, 1 chiffre
            </p>`}
      </div>

      ${e?M`
            <p style="margin-top:0.5rem;margin-bottom:0">
              <a
                href="#"
                @click=${i=>{i.preventDefault(),this._switchTab("forgot")}}
                style="font-size:0.875rem"
                >Mot de passe oublie ?</a
              >
            </p>
          `:R}
    `}render(){if(!this._open)return R;const e=this._tab==="login"||this._tab==="register";return M`
      <dialog
        class="fr-modal fr-modal--opened"
        role="dialog"
        aria-labelledby="auth-modal-title"
        aria-modal="true"
        style="display:flex"
        @click=${i=>{i.target===i.currentTarget&&this.close()}}
      >
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button class="fr-btn--close fr-btn" title="Fermer" @click=${()=>this.close()}>
                    Fermer
                  </button>
                </div>
                <div class="fr-modal__content">
                  <h1 id="auth-modal-title" class="fr-modal__title">${this._renderTitle()}</h1>

                  ${e?M`
                        <!-- Tabs -->
                        <div class="fr-tabs" style="margin-bottom:1rem">
                          <ul class="fr-tabs__list" role="tablist">
                            <li role="presentation">
                              <button
                                class="fr-tabs__tab ${this._tab==="login"?"fr-tabs__tab--selected":""}"
                                role="tab"
                                aria-selected="${this._tab==="login"}"
                                @click=${()=>this._switchTab("login")}
                              >
                                Connexion
                              </button>
                            </li>
                            <li role="presentation">
                              <button
                                class="fr-tabs__tab ${this._tab==="register"?"fr-tabs__tab--selected":""}"
                                role="tab"
                                aria-selected="${this._tab==="register"}"
                                @click=${()=>this._switchTab("register")}
                              >
                                Inscription
                              </button>
                            </li>
                          </ul>
                        </div>
                      `:M`
                        <p style="margin-bottom:1rem">
                          <a
                            href="#"
                            @click=${i=>{i.preventDefault(),this._switchTab("login")}}
                            style="font-size:0.875rem"
                            >&larr; Retour a la connexion</a
                          >
                        </p>
                      `}
                  ${this._error?M`
                        <div
                          class="fr-alert fr-alert--error fr-alert--sm"
                          style="margin-bottom:1rem"
                        >
                          <p>${this._error}</p>
                        </div>
                      `:R}
                  ${this._successMessage?M`
                        <div
                          class="fr-alert fr-alert--success fr-alert--sm"
                          style="margin-bottom:1rem"
                        >
                          <p>${this._successMessage}</p>
                        </div>
                      `:R}

                  <form @submit=${this._handleSubmit}>
                    ${this._renderForm()}

                    <div class="fr-input-group" style="margin-top:1.5rem">
                      <button
                        class="fr-btn"
                        type="submit"
                        ?disabled=${this._loading}
                        style="width:100%"
                      >
                        ${this._renderSubmitLabel()}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    `}},s(Gi,"AuthModal"),Gi);me([F()],ae.prototype,"_open",2),me([F()],ae.prototype,"_tab",2),me([F()],ae.prototype,"_error",2),me([F()],ae.prototype,"_loading",2),me([F()],ae.prototype,"_email",2),me([F()],ae.prototype,"_password",2),me([F()],ae.prototype,"_passwordConfirm",2),me([F()],ae.prototype,"_displayName",2),me([F()],ae.prototype,"_successMessage",2),me([F()],ae.prototype,"_resetToken",2),ae=me([mt("auth-modal")],ae);var uf=Object.defineProperty,cf=Object.getOwnPropertyDescriptor,je=s((c,e,i,n)=>{for(var o=n>1?void 0:n?cf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&uf(e,i,o),o},"__decorateClass$6");let Oe=(ji=class extends ut{constructor(){super(...arguments),this._open=!1,this._error="",this._success=!1,this._loading=!1,this._currentPassword="",this._newPassword="",this._confirmPassword=""}createRenderRoot(){return this}open(){this._error="",this._success=!1,this._currentPassword="",this._newPassword="",this._confirmPassword="",this._open=!0}close(){this._open=!1}async _handleSubmit(e){e.preventDefault(),this._error="",this._success=!1,this._loading=!0;try{if(this._newPassword!==this._confirmPassword){this._error="Les nouveaux mots de passe ne correspondent pas";return}const i=await nh(this._currentPassword,this._newPassword);if(!i.success){this._error=i.error||"Erreur lors du changement de mot de passe";return}this._success=!0,this._currentPassword="",this._newPassword="",this._confirmPassword=""}finally{this._loading=!1}}render(){return this._open?M`
      <dialog
        class="fr-modal fr-modal--opened"
        role="dialog"
        aria-labelledby="pw-change-title"
        aria-modal="true"
        style="display:flex"
        @click=${e=>{e.target===e.currentTarget&&this.close()}}
      >
        <div class="fr-container fr-container--fluid fr-container-md">
          <div class="fr-grid-row fr-grid-row--center">
            <div class="fr-col-12 fr-col-md-6 fr-col-lg-4">
              <div class="fr-modal__body">
                <div class="fr-modal__header">
                  <button class="fr-btn--close fr-btn" title="Fermer" @click=${()=>this.close()}>
                    Fermer
                  </button>
                </div>
                <div class="fr-modal__content">
                  <h1 id="pw-change-title" class="fr-modal__title">Changer le mot de passe</h1>

                  ${this._error?M`
                        <div
                          class="fr-alert fr-alert--error fr-alert--sm"
                          style="margin-bottom:1rem"
                        >
                          <p>${this._error}</p>
                        </div>
                      `:R}
                  ${this._success?M`
                        <div
                          class="fr-alert fr-alert--success fr-alert--sm"
                          style="margin-bottom:1rem"
                        >
                          <p>Mot de passe modifie avec succes</p>
                        </div>
                      `:R}
                  ${this._success?M`
                        <div class="fr-input-group" style="margin-top:1rem">
                          <button
                            class="fr-btn fr-btn--secondary"
                            @click=${()=>this.close()}
                            style="width:100%"
                          >
                            Fermer
                          </button>
                        </div>
                      `:M`
                        <form @submit=${this._handleSubmit}>
                          <div class="fr-input-group">
                            <label class="fr-label" for="pw-current">Mot de passe actuel</label>
                            <input
                              class="fr-input"
                              type="password"
                              id="pw-current"
                              autocomplete="current-password"
                              .value=${this._currentPassword}
                              @input=${e=>{this._currentPassword=e.target.value}}
                              required
                            />
                          </div>

                          <div class="fr-input-group">
                            <label class="fr-label" for="pw-new">Nouveau mot de passe</label>
                            <input
                              class="fr-input"
                              type="password"
                              id="pw-new"
                              autocomplete="new-password"
                              minlength="8"
                              .value=${this._newPassword}
                              @input=${e=>{this._newPassword=e.target.value}}
                              required
                            />
                            <p class="fr-hint-text">
                              8 caracteres minimum, 1 majuscule, 1 minuscule, 1 chiffre
                            </p>
                          </div>

                          <div class="fr-input-group">
                            <label class="fr-label" for="pw-confirm"
                              >Confirmer le nouveau mot de passe</label
                            >
                            <input
                              class="fr-input"
                              type="password"
                              id="pw-confirm"
                              autocomplete="new-password"
                              minlength="8"
                              .value=${this._confirmPassword}
                              @input=${e=>{this._confirmPassword=e.target.value}}
                              required
                            />
                          </div>

                          <div class="fr-input-group" style="margin-top:1.5rem">
                            <button
                              class="fr-btn"
                              type="submit"
                              ?disabled=${this._loading}
                              style="width:100%"
                            >
                              ${this._loading?"Chargement...":"Changer le mot de passe"}
                            </button>
                          </div>
                        </form>
                      `}
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    `:R}},s(ji,"PasswordChangeModal"),ji);je([F()],Oe.prototype,"_open",2),je([F()],Oe.prototype,"_error",2),je([F()],Oe.prototype,"_success",2),je([F()],Oe.prototype,"_loading",2),je([F()],Oe.prototype,"_currentPassword",2),je([F()],Oe.prototype,"_newPassword",2),je([F()],Oe.prototype,"_confirmPassword",2),Oe=je([mt("password-change-modal")],Oe);var hf=Object.defineProperty,df=Object.getOwnPropertyDescriptor,Fe=s((c,e,i,n)=>{for(var o=n>1?void 0:n?df(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&hf(e,i,o),o},"__decorateClass$5");v.AppHeader=(qi=class extends ut{constructor(){super(...arguments),this.currentPage="",this.basePath="",this._favCount=0,this._user=null,this._dbMode=!1,this._syncStatus="idle",this._syncErrorCount=0,this._userMenuOpen=!1,this._outsideClickHandler=e=>{const i=this.querySelector(".app-header-user-menu");i&&!i.contains(e.target)&&(this._userMenuOpen=!1)}}createRenderRoot(){return this}get _base(){const e=this.basePath;return e?e.endsWith("/")?e:e+"/":""}connectedCallback(){super.connectedCallback();try{const e=JSON.parse(localStorage.getItem("dsfr-data-favorites")||"[]");this._favCount=Array.isArray(e)?e.length:0}catch{}if(!document.getElementById("app-header-active-style")){const e=document.createElement("style");e.id="app-header-active-style",e.textContent=`.fr-nav__link[aria-current="page"]{font-weight:700;border-bottom:2px solid var(--border-action-high-blue-france);color:var(--text-action-high-blue-france)}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.app-header-user-menu{position:relative}.app-header-user-menu__dropdown{display:none;position:absolute;right:0;top:100%;z-index:1000;min-width:240px;background:var(--background-default-grey);box-shadow:0 8px 16px rgba(0,0,0,.16);padding:0}.app-header-user-menu__dropdown[data-open]{display:block}.app-header-user-menu__info{padding:1rem 1.5rem;border-bottom:1px solid var(--border-default-grey)}.app-header-user-menu__info-name{font-weight:700;color:var(--text-title-grey);margin:0;font-size:.875rem}.app-header-user-menu__info-email{color:var(--text-mention-grey);margin:0;font-size:.75rem}.app-header-user-menu__list{list-style:none;padding:0;margin:0}.app-header-user-menu__list li{border-bottom:1px solid var(--border-default-grey)}.app-header-user-menu__list li:last-child{border-bottom:none}.app-header-user-menu__list button{display:flex;align-items:center;gap:.5rem;width:100%;padding:.75rem 1.5rem;border:none;background:none;cursor:pointer;font-size:.875rem;color:var(--text-action-high-blue-france);font-family:inherit}.app-header-user-menu__list button:hover{background:var(--background-alt-blue-france-hover)}.app-header-user-menu__list button::before{font-family:'remixicon';font-size:1rem}`,document.head.appendChild(e)}this._initAuth(),this._unsubSync=Yc((e,i)=>{this._syncStatus=e,this._syncErrorCount=i})}disconnectedCallback(){var e,i;super.disconnectedCallback(),(e=this._unsubAuth)==null||e.call(this),(i=this._unsubSync)==null||i.call(this),document.removeEventListener("click",this._outsideClickHandler)}async _initAuth(){try{const e=await th();if(this._dbMode=await zo(),this._user=e.user,this._unsubAuth=lh(i=>{this._user=i.user}),this._dbMode&&!this._user){const n=new URLSearchParams(window.location.search).get("reset-password");if(n){const o=new URL(window.location.href);o.searchParams.delete("reset-password"),window.history.replaceState({},"",o.toString()),await this.updateComplete;const a=this.querySelector("auth-modal");a==null||a.open("reset",n)}}}catch{}}_openAuthModal(){const e=this.querySelector("auth-modal");e==null||e.open("login")}_openPasswordChangeModal(){this._userMenuOpen=!1;const e=this.querySelector("password-change-modal");e==null||e.open()}async _handleLogout(){this._userMenuOpen=!1,await oh(),window.location.reload()}_toggleUserMenu(e){e.stopPropagation(),this._userMenuOpen=!this._userMenuOpen,this._userMenuOpen?requestAnimationFrame(()=>{document.addEventListener("click",this._outsideClickHandler)}):document.removeEventListener("click",this._outsideClickHandler)}_getNavItems(){return[{id:"accueil",label:"Accueil",href:"index.html"},{id:"sources",label:"Sources",href:"apps/sources/index.html"},{id:"builder-ia",label:"Assistant IA",href:"apps/builder-ia/index.html"},{id:"builder",label:"Créer graphique",href:"apps/builder/index.html"},{id:"builder-carto",label:"Créer carte",href:"apps/builder-carto/index.html"},{id:"playground",label:"Editeur HTML",href:"apps/playground/index.html"},{id:"pipeline-helper",label:"Flux de données",href:"apps/pipeline-helper/index.html"},{id:"dashboard",label:"Tableau de bord",href:"apps/dashboard/index.html"},{id:"monitoring",label:"Suivi",href:"apps/monitoring/index.html"},{id:"admin",label:"Admin",href:"apps/admin/index.html"}]}_renderSyncStatus(){return!this._dbMode||this._syncStatus==="idle"&&this._syncErrorCount===0?R:this._syncStatus==="syncing"?M`
        <li>
          <span
            class="fr-btn fr-btn--tertiary-no-outline"
            style="pointer-events:none;color:var(--text-mention-grey);"
            title="Synchronisation en cours..."
          >
            <i class="ri-refresh-line" style="animation:spin 1s linear infinite;"></i>
          </span>
        </li>
      `:this._syncStatus==="error"||this._syncErrorCount>0?M`
        <li>
          <span
            class="fr-btn fr-btn--tertiary-no-outline"
            style="pointer-events:none;color:var(--text-default-warning);"
            title="Erreurs de synchronisation (${this._syncErrorCount})"
          >
            <i class="ri-error-warning-line"></i>
          </span>
        </li>
      `:R}_renderAuthButton(){if(!this._dbMode)return R;if(this._user){const e=this._user.displayName||this._user.email;return M`
        <li class="app-header-user-menu">
          <button
            class="fr-btn fr-btn--tertiary-no-outline fr-icon-account-circle-line"
            aria-expanded="${this._userMenuOpen}"
            aria-haspopup="menu"
            @click=${this._toggleUserMenu}
          >
            Mon espace
          </button>
          <div class="app-header-user-menu__dropdown" ?data-open=${this._userMenuOpen}>
            <div class="app-header-user-menu__info">
              <p class="app-header-user-menu__info-name">${e}</p>
              ${this._user.displayName&&this._user.email?M`<p class="app-header-user-menu__info-email">${this._user.email}</p>`:R}
            </div>
            <ul class="app-header-user-menu__list" role="menu">
              <li role="menuitem">
                <button @click=${this._openPasswordChangeModal}>
                  <span class="fr-icon-lock-line" aria-hidden="true"></span>
                  Mot de passe
                </button>
              </li>
              <li role="menuitem">
                <button @click=${this._handleLogout}>
                  <span class="fr-icon-logout-box-r-line" aria-hidden="true"></span>
                  Se deconnecter
                </button>
              </li>
            </ul>
          </div>
        </li>
      `}return M`
      <li>
        <button
          class="fr-btn fr-btn--tertiary-no-outline fr-icon-account-circle-line"
          @click=${this._openAuthModal}
        >
          Connexion
        </button>
      </li>
    `}render(){const e=this._getNavItems();return M`
      <div class="fr-skiplinks">
        <nav class="fr-container" role="navigation" aria-label="Accès rapide">
          <ul class="fr-skiplinks__list">
            <li><a class="fr-link" href="#main-content">Contenu</a></li>
            <li><a class="fr-link" href="${this._base}specs/index.html">Specs</a></li>
          </ul>
        </nav>
      </div>
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <div class="fr-container">
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <div class="fr-header__logo">
                    <p class="fr-logo">République<br />Française</p>
                  </div>
                  <div class="fr-header__navbar">
                    <button
                      class="fr-btn--menu fr-btn"
                      data-fr-opened="false"
                      aria-controls="modal-menu"
                      aria-haspopup="menu"
                      id="button-menu"
                      title="Menu"
                    >
                      Menu
                    </button>
                  </div>
                </div>
                <div class="fr-header__service">
                  <a href="${this._base}index.html" title="Accueil - Charts builder">
                    <p class="fr-header__service-title">Charts builder</p>
                  </a>
                  <p
                    class="fr-header__service-tagline"
                    style="display:flex;align-items:center;gap:0.5rem;"
                  >
                    <span class="fr-badge fr-badge--sm fr-badge--warning fr-badge--no-icon"
                      >En developpement</span
                    >
                    Création de visualisations dynamiques conformes DSFR
                  </p>
                </div>
              </div>
              <div class="fr-header__tools">
                <div class="fr-header__tools-links">
                  <ul class="fr-btns-group">
                    <li>
                      <a
                        class="fr-btn fr-btn--tertiary-no-outline fr-icon-book-2-line"
                        href="${this._base}guide/guide.html"
                      >
                        Guide
                      </a>
                    </li>
                    <li>
                      <a
                        class="fr-btn fr-btn--tertiary-no-outline fr-icon-file-text-line"
                        href="${this._base}specs/index.html"
                      >
                        Specs
                      </a>
                    </li>
                    <li>
                      <a
                        class="fr-btn fr-btn--tertiary-no-outline fr-icon-star-fill"
                        href="${this._base}apps/favorites/index.html"
                      >
                        Favoris${this._favCount>0?M` <span class="fr-badge fr-badge--sm fr-badge--info"
                              >${this._favCount}</span
                            >`:R}
                      </a>
                    </li>
                    ${this._renderSyncStatus()} ${this._renderAuthButton()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="fr-header__menu fr-modal" id="modal-menu" aria-labelledby="button-menu">
          <div class="fr-container">
            <button class="fr-btn--close fr-btn" aria-controls="modal-menu" title="Fermer">
              Fermer
            </button>
            <div class="fr-header__menu-links"></div>
            <nav
              class="fr-nav"
              id="header-navigation"
              role="navigation"
              aria-label="Menu principal"
            >
              <ul class="fr-nav__list">
                ${e.map(i=>M`
                    <li class="fr-nav__item">
                      <a
                        class="fr-nav__link"
                        href="${this._base}${i.href}"
                        ${this.currentPage===i.id?M`aria-current="page"`:""}
                      >
                        ${i.label}
                      </a>
                    </li>
                  `)}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      ${this._dbMode?M`<auth-modal></auth-modal><password-change-modal></password-change-modal>`:R}
    `}},s(qi,"AppHeader"),qi),Fe([P({type:String,attribute:"current-page"})],v.AppHeader.prototype,"currentPage",2),Fe([P({type:String,attribute:"base-path"})],v.AppHeader.prototype,"basePath",2),Fe([F()],v.AppHeader.prototype,"_favCount",2),Fe([F()],v.AppHeader.prototype,"_user",2),Fe([F()],v.AppHeader.prototype,"_dbMode",2),Fe([F()],v.AppHeader.prototype,"_syncStatus",2),Fe([F()],v.AppHeader.prototype,"_syncErrorCount",2),Fe([F()],v.AppHeader.prototype,"_userMenuOpen",2),v.AppHeader=Fe([mt("app-header")],v.AppHeader);var ff=Object.defineProperty,pf=Object.getOwnPropertyDescriptor,Rl=s((c,e,i,n)=>{for(var o=n>1?void 0:n?pf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&ff(e,i,o),o},"__decorateClass$4");v.AppFooter=(Hi=class extends ut{constructor(){super(...arguments),this.basePath=""}get _base(){const e=this.basePath;return e?e.endsWith("/")?e:e+"/":""}createRenderRoot(){return this}render(){return M`
      <footer class="fr-footer" role="contentinfo" id="footer">
        <div class="fr-container">
          <div class="fr-footer__body">
            <div class="fr-footer__brand fr-enlarge-link">
              <a
                href="${this._base}index.html"
                title="Retour à l'accueil du site - République Française"
              >
                <p class="fr-logo">République<br />Française</p>
              </a>
            </div>
            <div class="fr-footer__content">
              <p class="fr-footer__content-desc">
                Charts builder est un projet open-source permettant de créer des visualisations de
                données conformes au Design System de l'État (DSFR).
              </p>
              <ul class="fr-footer__content-list">
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    target="_blank"
                    rel="noopener"
                    href="https://www.systeme-de-design.gouv.fr/"
                  >
                    systeme-de-design.gouv.fr
                  </a>
                </li>
                <li class="fr-footer__content-item">
                  <a
                    class="fr-footer__content-link"
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/bmatge/dsfr-data"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="fr-footer__bottom">
            <ul class="fr-footer__bottom-list">
              <li class="fr-footer__bottom-item">
                <a class="fr-footer__bottom-link" href="#">Accessibilité : non conforme</a>
              </li>
              <li class="fr-footer__bottom-item">
                <a class="fr-footer__bottom-link" href="#">Mentions légales</a>
              </li>
            </ul>
            <div class="fr-footer__bottom-copy">
              <p>
                Sauf mention explicite de propriété intellectuelle détenue par des tiers, les
                contenus de ce site sont proposés sous
                <a
                  href="https://github.com/etalab/licence-ouverte/blob/master/LO.md"
                  target="_blank"
                  rel="noopener"
                  >licence etalab-2.0</a
                >
              </p>
            </div>
          </div>
        </div>
      </footer>
    `}},s(Hi,"AppFooter"),Hi),Rl([P({type:String,attribute:"base-path"})],v.AppFooter.prototype,"basePath",2),v.AppFooter=Rl([mt("app-footer")],v.AppFooter);var _f=Object.defineProperty,mf=Object.getOwnPropertyDescriptor,Li=s((c,e,i,n)=>{for(var o=n>1?void 0:n?mf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&_f(e,i,o),o},"__decorateClass$3");v.AppLayoutBuilder=(Wi=class extends ut{constructor(){super(...arguments),this.leftRatio=40,this.minLeftWidth=280,this.minRightWidth=300,this._isResizing=!1,this._currentLeftRatio=40,this._leftContent=[],this._rightContent=[],this._contentMoved=!1,this._boundMouseMove=null,this._boundMouseUp=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._currentLeftRatio=this.leftRatio,this._setupResizer(),this._saveSlotContent()}_saveSlotContent(){this._leftContent=Array.from(this.querySelectorAll('[slot="left"]')),this._rightContent=Array.from(this.querySelectorAll('[slot="right"]'))}firstUpdated(){this._moveContent()}updated(){this._contentMoved||this._moveContent()}_moveContent(){const e=this.querySelector(".builder-layout-left"),i=this.querySelector(".builder-layout-right");e&&i&&(this._leftContent.forEach(n=>e.appendChild(n)),this._rightContent.forEach(n=>i.appendChild(n)),this._contentMoved=!0)}disconnectedCallback(){super.disconnectedCallback(),this._cleanupResizer()}_setupResizer(){this._boundMouseMove=this._handleMouseMove.bind(this),this._boundMouseUp=this._handleMouseUp.bind(this)}_cleanupResizer(){this._boundMouseMove&&document.removeEventListener("mousemove",this._boundMouseMove),this._boundMouseUp&&document.removeEventListener("mouseup",this._boundMouseUp)}_handleMouseDown(e){e.preventDefault(),this._isResizing=!0,document.body.style.cursor="col-resize",document.body.style.userSelect="none",this._boundMouseMove&&document.addEventListener("mousemove",this._boundMouseMove),this._boundMouseUp&&document.addEventListener("mouseup",this._boundMouseUp)}_handleMouseMove(e){if(!this._isResizing)return;const i=this.querySelector(".builder-layout-container");if(!i)return;const n=i.getBoundingClientRect(),o=n.width;let a=e.clientX-n.left;a=Math.max(this.minLeftWidth,Math.min(a,o-this.minRightWidth)),this._currentLeftRatio=a/o*100,this.requestUpdate()}_handleMouseUp(){this._isResizing&&(this._isResizing=!1,document.body.style.cursor="",document.body.style.userSelect="",this._boundMouseMove&&document.removeEventListener("mousemove",this._boundMouseMove),this._boundMouseUp&&document.removeEventListener("mouseup",this._boundMouseUp))}render(){return M`
      <div class="builder-layout-container">
        <aside class="builder-layout-left" style="flex: 0 0 ${this._currentLeftRatio}%">
          <!-- Contenu slot="left" sera déplacé ici -->
        </aside>

        <div
          class="builder-layout-resizer ${this._isResizing?"dragging":""}"
          @mousedown="${this._handleMouseDown}"
        ></div>

        <main class="builder-layout-right" id="main-content">
          <!-- Contenu slot="right" sera déplacé ici -->
        </main>
      </div>

      <style>
        app-layout-builder {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .builder-layout-container {
          display: flex;
          flex: 1;
          min-height: 0;
        }

        .builder-layout-left {
          overflow-y: auto;
          overflow-x: hidden;
          border-right: 1px solid var(--border-default-grey);
          background: var(--background-alt-grey);
          display: flex;
          flex-direction: column;
          min-width: 280px;
        }

        .builder-layout-resizer {
          width: 6px;
          background: var(--border-default-grey);
          cursor: col-resize;
          flex-shrink: 0;
          transition: background 0.15s;
        }

        .builder-layout-resizer:hover,
        .builder-layout-resizer.dragging {
          background: var(--border-action-high-blue-france);
        }

        .builder-layout-right {
          flex: 1;
          overflow: auto;
          background: var(--background-default-grey);
          display: flex;
          flex-direction: column;
        }

        /* Responsive: stack vertical on mobile */
        @media (max-width: 900px) {
          .builder-layout-container {
            flex-direction: column;
          }

          .builder-layout-left {
            width: 100% !important;
            max-height: 50vh;
            border-right: none;
            border-bottom: 1px solid var(--border-default-grey);
          }

          .builder-layout-resizer {
            display: none;
          }

          .builder-layout-right {
            height: 50vh;
          }
        }
      </style>
    `}},s(Wi,"AppLayoutBuilder"),Wi),Li([P({type:Number,attribute:"left-ratio"})],v.AppLayoutBuilder.prototype,"leftRatio",2),Li([P({type:Number,attribute:"min-left-width"})],v.AppLayoutBuilder.prototype,"minLeftWidth",2),Li([P({type:Number,attribute:"min-right-width"})],v.AppLayoutBuilder.prototype,"minRightWidth",2),Li([F()],v.AppLayoutBuilder.prototype,"_isResizing",2),Li([F()],v.AppLayoutBuilder.prototype,"_currentLeftRatio",2),v.AppLayoutBuilder=Li([mt("app-layout-builder")],v.AppLayoutBuilder);var gf=Object.defineProperty,vf=Object.getOwnPropertyDescriptor,Dr=s((c,e,i,n)=>{for(var o=n>1?void 0:n?vf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&gf(e,i,o),o},"__decorateClass$2");v.AppLayoutDemo=(Vi=class extends ut{constructor(){super(...arguments),this.title="",this.icon="",this.activePath="",this.basePath="",this._contentElements=[],this._contentMoved=!1}get _base(){const e=this.basePath;return e?e.endsWith("/")?e:e+"/":""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._contentElements=Array.from(this.querySelectorAll('[slot="content"]'))}firstUpdated(){this._moveContent()}updated(){this._contentMoved||this._moveContent()}_moveContent(){const e=this.querySelector(".demo-content-slot");e&&(this._contentElements.forEach(i=>e.appendChild(i)),this._contentMoved=!0)}_getMenuStructure(){return[{id:"overview",label:"Vue d'ensemble",href:"index.html"},{id:"apis",label:"API supportees",href:"#",children:[{id:"apis/opendatasoft",label:"OpenDataSoft",href:"apis/opendatasoft.html"},{id:"apis/tabular",label:"Tabular",href:"apis/tabular.html"},{id:"apis/grist",label:"Grist",href:"apis/grist.html"},{id:"apis/insee",label:"INSEE (Melodi)",href:"apis/insee.html"},{id:"apis/generic",label:"Generique (REST)",href:"apis/generic.html"}]},{id:"components",label:"Composants dsfr-data",href:"#",children:[{id:"components/dsfr-data-source",label:"dsfr-data-source",href:"components/dsfr-data-source.html"},{id:"components/dsfr-data-normalize",label:"dsfr-data-normalize",href:"components/dsfr-data-normalize.html"},{id:"components/dsfr-data-query",label:"dsfr-data-query",href:"components/dsfr-data-query.html"},{id:"components/dsfr-data-join",label:"dsfr-data-join",href:"components/dsfr-data-join.html"},{id:"components/dsfr-data-facets",label:"dsfr-data-facets",href:"components/dsfr-data-facets.html"},{id:"components/dsfr-data-search",label:"dsfr-data-search",href:"components/dsfr-data-search.html"},{id:"components/dsfr-data-kpi",label:"dsfr-data-kpi",href:"components/dsfr-data-kpi.html"},{id:"components/dsfr-data-list",label:"dsfr-data-list",href:"components/dsfr-data-list.html"},{id:"components/dsfr-data-display",label:"dsfr-data-display",href:"components/dsfr-data-display.html"},{id:"components/dsfr-data-podium",label:"dsfr-data-podium",href:"components/dsfr-data-podium.html"},{id:"components/dsfr-data-world-map",label:"dsfr-data-world-map",href:"components/dsfr-data-world-map.html"},{id:"components/dsfr-data-map",label:"dsfr-data-map",href:"components/dsfr-data-map.html"},{id:"components/dsfr-data-a11y",label:"dsfr-data-a11y",href:"components/dsfr-data-a11y.html"},{id:"components/dsfr-data-chart",label:"dsfr-data-chart",href:"components/dsfr-data-chart.html"}]},{id:"charts",label:"Composants dsfr-charts",href:"#",children:[{id:"charts/line-chart",label:"line-chart",href:"charts/line-chart.html"},{id:"charts/bar-chart",label:"bar-chart",href:"charts/bar-chart.html"},{id:"charts/pie-chart",label:"pie-chart",href:"charts/pie-chart.html"},{id:"charts/radar-chart",label:"radar-chart",href:"charts/radar-chart.html"},{id:"charts/gauge-chart",label:"gauge-chart",href:"charts/gauge-chart.html"},{id:"charts/map-chart",label:"map-chart",href:"charts/map-chart.html"},{id:"charts/scatter-chart",label:"scatter-chart",href:"charts/scatter-chart.html"}]}]}_isActive(e){return this.activePath===e}_isParentActive(e){return e.children?e.children.some(i=>this._isActive(i.id)):!1}_renderMenuItem(e){const i=this._isActive(e.id),n=this._isParentActive(e);if(e.children){const o=`fr-sidemenu-${e.id}`,a=n;return M`
        <li class="fr-sidemenu__item">
          <button
            class="fr-sidemenu__btn"
            aria-expanded="${a}"
            aria-controls="${o}"
          >
            ${e.label}
          </button>
          <div class="fr-collapse ${a?"fr-collapse--expanded":""}" id="${o}">
            <ul class="fr-sidemenu__list">
              ${e.children.map(l=>this._renderMenuItem(l))}
            </ul>
          </div>
        </li>
      `}else return M`
        <li class="fr-sidemenu__item ${i?"fr-sidemenu__item--active":""}">
          <a
            class="fr-sidemenu__link"
            href="${this._base}${e.href}"
            ${i?M`aria-current="page"`:""}
          >
            ${e.label}
          </a>
        </li>
      `}_renderBreadcrumb(){if(!this.activePath||this.activePath==="overview")return"";const e=this.activePath.split("/"),i=[{label:"Composants",href:`${this._base}index.html`}];if(e.length>1){const n=e[0]==="components"?"Composants dsfr-data":"Composants dsfr-charts";i.push({label:n,href:"#"})}return i.push({label:this.title,href:""}),M`
      <nav role="navigation" class="fr-breadcrumb" aria-label="vous êtes ici :">
        <button class="fr-breadcrumb__button" aria-expanded="false" aria-controls="breadcrumb">
          Voir le fil d'Ariane
        </button>
        <div class="fr-collapse" id="breadcrumb">
          <ol class="fr-breadcrumb__list">
            ${i.map((n,o)=>M`
                <li>
                  ${o===i.length-1?M`<a class="fr-breadcrumb__link" aria-current="page">${n.label}</a>`:M`<a class="fr-breadcrumb__link" href="${n.href}">${n.label}</a>`}
                </li>
              `)}
          </ol>
        </div>
      </nav>
    `}render(){const e=this._getMenuStructure();return M`
      <main class="fr-container fr-py-4w" id="main-content">
        <div class="demo-layout">
          <!-- Sidemenu -->
          <nav class="fr-sidemenu" role="navigation" aria-labelledby="fr-sidemenu-title">
            <div class="fr-sidemenu__inner">
              <button
                class="fr-sidemenu__btn"
                hidden
                aria-controls="fr-sidemenu-wrapper"
                aria-expanded="true"
              >
                Menu
              </button>
              <div class="fr-collapse" id="fr-sidemenu-wrapper">
                <div class="fr-sidemenu__title" id="fr-sidemenu-title">Composants</div>
                <ul class="fr-sidemenu__list">
                  ${e.map(i=>this._renderMenuItem(i))}
                </ul>
              </div>
            </div>
          </nav>

          <!-- Contenu principal -->
          <div class="demo-content">
            ${this._renderBreadcrumb()}
            ${this.title?M`
                  <h1>
                    ${this.icon?M`<span class="${this.icon} fr-mr-1w" aria-hidden="true"></span>`:""}
                    ${this.title}
                  </h1>
                `:""}

            <!-- Contenu slot="content" sera déplacé ici -->
            <div class="demo-content-slot"></div>
          </div>
        </div>
      </main>

      <style>
        .demo-layout {
          display: flex;
          gap: 2rem;
        }

        .fr-sidemenu {
          flex: 0 0 280px;
          position: sticky;
          top: 1rem;
          height: fit-content;
        }

        .demo-content {
          flex: 1;
          min-width: 0;
        }

        @media (max-width: 992px) {
          .demo-layout {
            flex-direction: column;
          }

          .fr-sidemenu {
            position: static;
            flex: none;
          }
        }

        /* Styles communs pour les sections de démo */
        .demo-section {
          background: var(--background-alt-grey);
          padding: 1.5rem;
          border-radius: 4px;
          margin: 1.5rem 0;
        }

        .code-block {
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 1rem;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.85rem;
          overflow-x: auto;
          white-space: pre-wrap;
        }

        .attr-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
        }

        .attr-table th,
        .attr-table td {
          padding: 0.75rem;
          text-align: left;
          border-bottom: 1px solid var(--border-default-grey);
        }

        .attr-table th {
          background: var(--background-alt-grey);
          font-weight: 600;
        }

        .attr-table code {
          background: var(--background-contrast-grey);
          padding: 0.125rem 0.375rem;
          border-radius: 2px;
          font-size: 0.85em;
        }
      </style>
    `}},s(Vi,"AppLayoutDemo"),Vi),Dr([P({type:String})],v.AppLayoutDemo.prototype,"title",2),Dr([P({type:String})],v.AppLayoutDemo.prototype,"icon",2),Dr([P({type:String,attribute:"active-path"})],v.AppLayoutDemo.prototype,"activePath",2),Dr([P({type:String,attribute:"base-path"})],v.AppLayoutDemo.prototype,"basePath",2),v.AppLayoutDemo=Dr([mt("app-layout-demo")],v.AppLayoutDemo);var yf=Object.defineProperty,bf=Object.getOwnPropertyDescriptor,Cn=s((c,e,i,n)=>{for(var o=n>1?void 0:n?bf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&yf(e,i,o),o},"__decorateClass$1");let Mr=(Ki=class extends ut{constructor(){super(...arguments),this.section="",this.activePath="",this.basePath=""}createRenderRoot(){return this}get _base(){const e=this.basePath;return e?e.endsWith("/")?e:e+"/":""}_getMenu(){var e;return((e=window.__APP_MENUS__)==null?void 0:e[this.section])??[]}_getActivePath(){if(this.activePath)return this.activePath;const i=window.location.pathname.split("/").pop()||"",n=window.location.hash,o=this._getMenu();for(const a of o)for(const l of a.items){const h=this._findMatchingItem(l,i,n);if(h)return h}return""}_findMatchingItem(e,i,n){const o=e.href;if(n&&o===i+n||o===i||n&&o===n)return e.id;if(e.children){for(const a of e.children){const l=this._findMatchingItem(a,i,n);if(l)return l}if(!n){const a=e.children.find(l=>{const[h]=(l.href||"").split("#");return h===i});if(a)return a.id}}return null}_isActive(e,i){return i===e}_isParentActive(e,i){return e.children?e.children.some(n=>this._isActive(n.id,i)||this._isParentActive(n,i)):!1}_renderItem(e,i){const n=this._isActive(e.id,i);if(e.children){const o=`fr-sidemenu-${e.id}`,a=this._isParentActive(e,i);return M`
        <li class="fr-sidemenu__item">
          <button
            class="fr-sidemenu__btn"
            aria-expanded="${a}"
            aria-controls="${o}"
          >
            ${e.label}
          </button>
          <div class="fr-collapse ${a?"fr-collapse--expanded":""}" id="${o}">
            <ul class="fr-sidemenu__list">
              ${e.children.map(l=>this._renderItem(l,i))}
            </ul>
          </div>
        </li>
      `}return M`
      <li class="fr-sidemenu__item ${n?"fr-sidemenu__item--active":""}">
        <a
          class="fr-sidemenu__link"
          href="${this._base}${e.href}"
          ${n?M`aria-current="true"`:R}
        >
          ${e.label}
        </a>
      </li>
    `}render(){const e=this._getMenu();if(!e.length)return R;const i=this._getActivePath();return M`
      <nav
        class="fr-sidemenu guide-sidemenu"
        role="navigation"
        aria-labelledby="app-sidemenu-title"
      >
        <div class="fr-sidemenu__inner">
          <button
            class="fr-sidemenu__btn"
            hidden
            aria-controls="app-sidemenu-wrapper"
            aria-expanded="true"
          >
            Menu
          </button>
          <div class="fr-collapse" id="app-sidemenu-wrapper">
            ${e.map((n,o)=>M`
                ${n.title?M`
                      <div
                        class="fr-sidemenu__title ${o>0?"fr-mt-1w":""}"
                        id="${o===0?"app-sidemenu-title":`app-sidemenu-title-${o}`}"
                      >
                        ${n.title}
                      </div>
                    `:R}
                <ul class="fr-sidemenu__list">
                  ${n.items.map(a=>this._renderItem(a,i))}
                </ul>
              `)}
          </div>
        </div>
      </nav>

      <style>
        .guide-sidemenu {
          flex: 0 0 280px;
          position: sticky;
          top: 1rem;
          height: fit-content;
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
        }
        @media (max-width: 992px) {
          .guide-sidemenu {
            position: static;
            flex: none;
            max-height: none;
          }
        }
        .fr-sidemenu__link[aria-current='true'] {
          font-weight: 700;
          color: var(--text-action-high-blue-france);
        }
      </style>
    `}},s(Ki,"AppSidemenu"),Ki);Cn([P({type:String})],Mr.prototype,"section",2),Cn([P({type:String,attribute:"active-path"})],Mr.prototype,"activePath",2),Cn([P({type:String,attribute:"base-path"})],Mr.prototype,"basePath",2),Mr=Cn([mt("app-sidemenu")],Mr);var wf=Object.defineProperty,Sf=Object.getOwnPropertyDescriptor,ni=s((c,e,i,n)=>{for(var o=n>1?void 0:n?Sf(e,i):e,a=c.length-1,l;a>=0;a--)(l=c[a])&&(o=(n?l(e,i,o):l(o))||o);return n&&o&&wf(e,i,o),o},"__decorateClass");let qe=(Ji=class extends ut{constructor(){super(...arguments),this.showDataTab=!1,this.showSaveButton=!1,this.showPlaygroundButton=!1,this.tabLabels="Aperçu,Code,Données",this.activeTab="preview",this._activeTab="preview",this._previewContent=[],this._codeContent=[],this._dataContent=[],this._contentMoved=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._activeTab=this.activeTab,this._saveSlotContent()}_saveSlotContent(){this._previewContent=Array.from(this.querySelectorAll('[slot="preview"]')),this._codeContent=Array.from(this.querySelectorAll('[slot="code"]')),this._dataContent=Array.from(this.querySelectorAll('[slot="data"]'))}firstUpdated(){this._moveContent()}updated(){this._contentMoved||this._moveContent()}_moveContent(){const e=this.querySelector("#tab-preview"),i=this.querySelector("#tab-code"),n=this.querySelector("#tab-data");e&&this._previewContent.forEach(o=>e.appendChild(o)),i&&this._codeContent.forEach(o=>i.appendChild(o)),n&&this._dataContent.forEach(o=>n.appendChild(o)),this._contentMoved=!0}setActiveTab(e){this._activeTab=e,this.requestUpdate()}getActiveTab(){return this._activeTab}_handleTabClick(e){this._activeTab=e,this.dispatchEvent(new CustomEvent("tab-change",{detail:{tab:e},bubbles:!0,composed:!0})),this.requestUpdate()}_getTabLabels(){return this.tabLabels.split(",").map(e=>e.trim())}_handleSaveClick(){this.dispatchEvent(new CustomEvent("save-favorite",{bubbles:!0,composed:!0}))}_handlePlaygroundClick(){this.dispatchEvent(new CustomEvent("open-playground",{bubbles:!0,composed:!0}))}render(){const e=this._getTabLabels(),[i,n,o]=e;return M`
      <div class="preview-panel">
        <!-- Onglets -->
        <div class="preview-panel-tabs">
          <button
            class="preview-panel-tab ${this._activeTab==="preview"?"active":""}"
            data-tab="preview"
            @click="${()=>this._handleTabClick("preview")}"
          >
            ${i||"Aperçu"}
          </button>
          <button
            class="preview-panel-tab ${this._activeTab==="code"?"active":""}"
            data-tab="code"
            @click="${()=>this._handleTabClick("code")}"
          >
            ${n||"Code"}
          </button>
          ${this.showDataTab?M`
                <button
                  class="preview-panel-tab ${this._activeTab==="data"?"active":""}"
                  data-tab="data"
                  @click="${()=>this._handleTabClick("data")}"
                >
                  ${o||"Données"}
                </button>
              `:R}
          ${this.showPlaygroundButton?M`
                <button
                  class="preview-panel-action-btn"
                  @click="${this._handlePlaygroundClick}"
                  title="Ouvrir dans le Playground"
                >
                  <i class="ri-play-circle-line" aria-hidden="true"></i>
                  <span>Playground</span>
                </button>
              `:R}
          ${this.showSaveButton?M`
                <button
                  class="preview-panel-action-btn preview-panel-save-btn"
                  @click="${this._handleSaveClick}"
                  title="Sauvegarder en favoris"
                >
                  <i class="ri-star-line" aria-hidden="true"></i>
                  <span>Favoris</span>
                </button>
              `:R}
        </div>

        <!-- Contenu des onglets -->
        <div class="preview-panel-content">
          <!-- Onglet Aperçu - contenu slot="preview" sera déplacé ici -->
          <div
            class="preview-panel-tab-content ${this._activeTab==="preview"?"active":""}"
            id="tab-preview"
          ></div>

          <!-- Onglet Code - contenu slot="code" sera déplacé ici -->
          <div
            class="preview-panel-tab-content ${this._activeTab==="code"?"active":""}"
            id="tab-code"
          ></div>

          <!-- Onglet Données - contenu slot="data" sera déplacé ici -->
          <div
            class="preview-panel-tab-content ${this._activeTab==="data"?"active":""}"
            id="tab-data"
          ></div>
        </div>
      </div>

      <style>
        app-preview-panel {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          background: var(--background-alt-grey);
        }

        .preview-panel {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
        }

        /* Onglets */
        .preview-panel-tabs {
          display: flex;
          background: var(--background-default-grey);
          border-bottom: 1px solid var(--border-default-grey);
          flex-shrink: 0;
        }

        .preview-panel-tab {
          padding: 0.75rem 1.5rem;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 0.85rem;
          border-bottom: 2px solid transparent;
          color: var(--text-mention-grey);
          transition:
            color 0.15s,
            border-color 0.15s;
        }

        .preview-panel-tab:hover {
          color: var(--text-action-high-blue-france);
        }

        .preview-panel-tab.active {
          color: var(--text-action-high-blue-france);
          border-bottom-color: var(--border-action-high-blue-france);
          font-weight: 600;
        }

        /* Boutons d'action (Playground, Favoris) */
        .preview-panel-action-btn {
          padding: 0.5rem 1rem;
          border: none;
          background: var(--background-action-low-blue-france);
          color: var(--text-action-high-blue-france);
          cursor: pointer;
          font-size: 0.8rem;
          border-radius: 4px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-right: 0.5rem;
          margin-top: 0.25rem;
          margin-bottom: 0.25rem;
          transition: background 0.15s;
        }

        .preview-panel-action-btn:first-of-type {
          margin-left: auto;
        }

        .preview-panel-action-btn:hover {
          background: var(--background-action-low-blue-france-hover);
        }

        .preview-panel-action-btn i {
          font-size: 1rem;
        }

        /* Contenu des onglets */
        .preview-panel-content {
          flex: 1;
          overflow: auto;
          display: flex;
          flex-direction: column;
          min-height: 0;
        }

        .preview-panel-tab-content {
          display: none;
          flex-direction: column;
          flex: 1;
          padding: 1.5rem;
          min-height: 0;
          overflow: auto;
        }

        .preview-panel-tab-content.active {
          display: flex;
        }

        /* Styles communs pour le contenu des slots */

        /* Preview content */
        .preview-panel-tab-content .preview-chart,
        .preview-panel-tab-content .chart-wrapper {
          position: relative;
          flex: 1;
          min-height: 300px;
          background: var(--background-default-grey);
          border-radius: 8px;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }

        .preview-panel-tab-content .preview-title,
        .preview-panel-tab-content h2:first-child {
          margin: 0 0 0.25rem;
          font-size: 1.25rem;
          color: var(--text-title-grey);
        }

        .preview-panel-tab-content .preview-subtitle,
        .preview-panel-tab-content .subtitle {
          margin: 0 0 1rem;
          font-size: 0.9rem;
          color: var(--text-mention-grey);
        }

        .preview-panel-tab-content .chart-container {
          position: relative;
          flex: 1;
          min-height: 300px;
        }

        .preview-panel-tab-content .empty-state {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-mention-grey);
          text-align: center;
          pointer-events: none;
        }

        .preview-panel-tab-content .empty-state i {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        /* Code output styles */
        .preview-panel-tab-content .code-output,
        .preview-panel-tab-content pre#generated-code,
        .preview-panel-tab-content pre#raw-data {
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 1rem;
          border-radius: 8px;
          font-family: 'Fira Code', 'Consolas', monospace;
          font-size: 0.8rem;
          white-space: pre-wrap;
          word-break: break-word;
          overflow: auto;
          flex: 1;
          margin: 0;
          min-height: 200px;
        }

        /* Copy button */
        .preview-panel-tab-content .copy-btn,
        .preview-panel-tab-content #copy-code-btn {
          align-self: flex-end;
          margin-bottom: 0.5rem;
        }

        /* Canvas and iframe in preview */
        .preview-panel-tab-content canvas {
          width: 100% !important;
          height: 100% !important;
        }

        .preview-panel-tab-content iframe {
          width: 100%;
          height: 100%;
          min-height: 400px;
          border: none;
          background: white;
          border-radius: 4px;
        }

        /* Data summary */
        .preview-panel-tab-content .data-summary {
          background: var(--background-default-grey);
          padding: 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .preview-panel-tab-content .data-summary h4 {
          margin: 0 0 0.5rem;
          font-size: 0.9rem;
        }

        .preview-panel-tab-content .field-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .preview-panel-tab-content .field-tag {
          padding: 0.25rem 0.5rem;
          background: var(--background-contrast-info);
          border-radius: 4px;
          font-size: 0.75rem;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .preview-panel-tab {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
          }

          .preview-panel-tab-content {
            padding: 1rem;
          }
        }
      </style>
    `}},s(Ji,"AppPreviewPanel"),Ji);ni([P({type:Boolean,attribute:"show-data-tab"})],qe.prototype,"showDataTab",2),ni([P({type:Boolean,attribute:"show-save-button"})],qe.prototype,"showSaveButton",2),ni([P({type:Boolean,attribute:"show-playground-button"})],qe.prototype,"showPlaygroundButton",2),ni([P({type:String,attribute:"tab-labels"})],qe.prototype,"tabLabels",2),ni([P({type:String,attribute:"active-tab"})],qe.prototype,"activeTab",2),ni([F()],qe.prototype,"_activeTab",2),qe=ni([mt("app-preview-panel")],qe);function Bl(c,e,i){return c.map(n=>({label:String(W(n,e)??"N/A"),value:Number(W(n,i))||0}))}s(Bl,"extractLabelValues");function Nl(c,e){if(e==="none")return c;const i=new Map;for(const o of c){const a=i.get(o.label)||[];a.push(o.value),i.set(o.label,a)}const n=[];for(const[o,a]of i)n.push({label:o,value:Pf(a,e)});return n}s(Nl,"aggregateByLabel");function Pf(c,e){switch(e){case"sum":return c.reduce((i,n)=>i+n,0);case"avg":return c.reduce((i,n)=>i+n,0)/c.length;case"count":return c.length;case"min":return Math.min(...c);case"max":return Math.max(...c);default:return c[0]||0}}s(Pf,"computeGroupValue");function Ul(c,e){return e==="none"?c:[...c].sort((i,n)=>e==="desc"?n.value-i.value:i.value-n.value)}s(Ul,"sortByValue");function Lf(c,e,i,n="none",o="none",a=0){if(!c||c.length===0)return{labels:[],values:[]};let l=Bl(c,e,i);return l=Nl(l,n),l=Ul(l,o),a>0&&(l=l.slice(0,a)),{labels:l.map(h=>h.label),values:l.map(h=>Math.round(h.value*100)/100)}}s(Lf,"processChartData");function Zl(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}s(Zl,"getDefaultExportFromCjs");var Ar={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var Cf=Ar.exports,Gl;function xf(){return Gl||(Gl=1,(function(c,e){(function(i,n){n(e)})(Cf,(function(i){var n="1.9.4";function o(t){var r,u,d,p;for(u=1,d=arguments.length;u<d;u++){p=arguments[u];for(r in p)t[r]=p[r]}return t}s(o,"extend");var a=Object.create||(function(){function t(){}return s(t,"F"),function(r){return t.prototype=r,new t}})();function l(t,r){var u=Array.prototype.slice;if(t.bind)return t.bind.apply(t,u.call(arguments,1));var d=u.call(arguments,2);return function(){return t.apply(r,d.length?d.concat(u.call(arguments)):arguments)}}s(l,"bind");var h=0;function f(t){return"_leaflet_id"in t||(t._leaflet_id=++h),t._leaflet_id}s(f,"stamp");function _(t,r,u){var d,p,y,C;return C=s(function(){d=!1,p&&(y.apply(u,p),p=!1)},"later"),y=s(function(){d?p=arguments:(t.apply(u,arguments),setTimeout(C,r),d=!0)},"wrapperFn"),y}s(_,"throttle");function g(t,r,u){var d=r[1],p=r[0],y=d-p;return t===d&&u?t:((t-p)%y+y)%y+p}s(g,"wrapNum");function m(){return!1}s(m,"falseFn");function w(t,r){if(r===!1)return t;var u=Math.pow(10,r===void 0?6:r);return Math.round(t*u)/u}s(w,"formatNum");function b(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}s(b,"trim");function S(t){return b(t).split(/\s+/)}s(S,"splitWords");function x(t,r){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?a(t.options):{});for(var u in r)t.options[u]=r[u];return t.options}s(x,"setOptions");function T(t,r,u){var d=[];for(var p in t)d.push(encodeURIComponent(u?p.toUpperCase():p)+"="+encodeURIComponent(t[p]));return(!r||r.indexOf("?")===-1?"?":"&")+d.join("&")}s(T,"getParamString");var E=/\{ *([\w_ -]+) *\}/g;function O(t,r){return t.replace(E,function(u,d){var p=r[d];if(p===void 0)throw new Error("No value provided for variable "+u);return typeof p=="function"&&(p=p(r)),p})}s(O,"template");var I=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function B(t,r){for(var u=0;u<t.length;u++)if(t[u]===r)return u;return-1}s(B,"indexOf");var G="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function V(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}s(V,"getPrefixed");var ht=0;function rt(t){var r=+new Date,u=Math.max(0,16-(r-ht));return ht=r+u,window.setTimeout(t,u)}s(rt,"timeoutDefer");var et=window.requestAnimationFrame||V("RequestAnimationFrame")||rt,pt=window.cancelAnimationFrame||V("CancelAnimationFrame")||V("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function N(t,r,u){if(u&&et===rt)t.call(r);else return et.call(window,l(t,r))}s(N,"requestAnimFrame");function _t(t){t&&pt.call(window,t)}s(_t,"cancelAnimFrame");var Pt={__proto__:null,extend:o,create:a,bind:l,get lastId(){return h},stamp:f,throttle:_,wrapNum:g,falseFn:m,formatNum:w,trim:b,splitWords:S,setOptions:x,getParamString:T,template:O,isArray:I,indexOf:B,emptyImageUrl:G,requestFn:et,cancelFn:pt,requestAnimFrame:N,cancelAnimFrame:_t};function X(){}s(X,"Class"),X.extend=function(t){var r=s(function(){x(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},"NewClass"),u=r.__super__=this.prototype,d=a(u);d.constructor=r,r.prototype=d;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(r[p]=this[p]);return t.statics&&o(r,t.statics),t.includes&&($(t.includes),o.apply(null,[d].concat(t.includes))),o(d,t),delete d.statics,delete d.includes,d.options&&(d.options=u.options?a(u.options):{},o(d.options,t.options)),d._initHooks=[],d.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var y=0,C=d._initHooks.length;y<C;y++)d._initHooks[y].call(this)}},r},X.include=function(t){var r=this.prototype.options;return o(this.prototype,t),t.options&&(this.prototype.options=r,this.mergeOptions(t.options)),this},X.mergeOptions=function(t){return o(this.prototype.options,t),this},X.addInitHook=function(t){var r=Array.prototype.slice.call(arguments,1),u=typeof t=="function"?t:function(){this[t].apply(this,r)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function $(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=I(t)?t:[t];for(var r=0;r<t.length;r++)t[r]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}s($,"checkDeprecatedMixinEvents");var q={on:s(function(t,r,u){if(typeof t=="object")for(var d in t)this._on(d,t[d],r);else{t=S(t);for(var p=0,y=t.length;p<y;p++)this._on(t[p],r,u)}return this},"on"),off:s(function(t,r,u){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var d in t)this._off(d,t[d],r);else{t=S(t);for(var p=arguments.length===1,y=0,C=t.length;y<C;y++)p?this._off(t[y]):this._off(t[y],r,u)}return this},"off"),_on:s(function(t,r,u,d){if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}if(this._listens(t,r,u)===!1){u===this&&(u=void 0);var p={fn:r,ctx:u};d&&(p.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(p)}},"_on"),_off:s(function(t,r,u){var d,p,y;if(this._events&&(d=this._events[t],!!d)){if(arguments.length===1){if(this._firingCount)for(p=0,y=d.length;p<y;p++)d[p].fn=m;delete this._events[t];return}if(typeof r!="function"){console.warn("wrong listener type: "+typeof r);return}var C=this._listens(t,r,u);if(C!==!1){var D=d[C];this._firingCount&&(D.fn=m,this._events[t]=d=d.slice()),d.splice(C,1)}}},"_off"),fire:s(function(t,r,u){if(!this.listens(t,u))return this;var d=o({},r,{type:t,target:this,sourceTarget:r&&r.sourceTarget||this});if(this._events){var p=this._events[t];if(p){this._firingCount=this._firingCount+1||1;for(var y=0,C=p.length;y<C;y++){var D=p[y],A=D.fn;D.once&&this.off(t,A,D.ctx),A.call(D.ctx||this,d)}this._firingCount--}}return u&&this._propagateEvent(d),this},"fire"),listens:s(function(t,r,u,d){typeof t!="string"&&console.warn('"string" type argument expected');var p=r;typeof r!="function"&&(d=!!r,p=void 0,u=void 0);var y=this._events&&this._events[t];if(y&&y.length&&this._listens(t,p,u)!==!1)return!0;if(d){for(var C in this._eventParents)if(this._eventParents[C].listens(t,r,u,d))return!0}return!1},"listens"),_listens:s(function(t,r,u){if(!this._events)return!1;var d=this._events[t]||[];if(!r)return!!d.length;u===this&&(u=void 0);for(var p=0,y=d.length;p<y;p++)if(d[p].fn===r&&d[p].ctx===u)return p;return!1},"_listens"),once:s(function(t,r,u){if(typeof t=="object")for(var d in t)this._on(d,t[d],r,!0);else{t=S(t);for(var p=0,y=t.length;p<y;p++)this._on(t[p],r,u,!0)}return this},"once"),addEventParent:s(function(t){return this._eventParents=this._eventParents||{},this._eventParents[f(t)]=t,this},"addEventParent"),removeEventParent:s(function(t){return this._eventParents&&delete this._eventParents[f(t)],this},"removeEventParent"),_propagateEvent:s(function(t){for(var r in this._eventParents)this._eventParents[r].fire(t.type,o({layer:t.target,propagatedFrom:t.target},t),!0)},"_propagateEvent")};q.addEventListener=q.on,q.removeEventListener=q.clearAllEventListeners=q.off,q.addOneTimeEventListener=q.once,q.fireEvent=q.fire,q.hasEventListeners=q.listens;var wt=X.extend(q);function U(t,r,u){this.x=u?Math.round(t):t,this.y=u?Math.round(r):r}s(U,"Point");var Nt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};U.prototype={clone:s(function(){return new U(this.x,this.y)},"clone"),add:s(function(t){return this.clone()._add(j(t))},"add"),_add:s(function(t){return this.x+=t.x,this.y+=t.y,this},"_add"),subtract:s(function(t){return this.clone()._subtract(j(t))},"subtract"),_subtract:s(function(t){return this.x-=t.x,this.y-=t.y,this},"_subtract"),divideBy:s(function(t){return this.clone()._divideBy(t)},"divideBy"),_divideBy:s(function(t){return this.x/=t,this.y/=t,this},"_divideBy"),multiplyBy:s(function(t){return this.clone()._multiplyBy(t)},"multiplyBy"),_multiplyBy:s(function(t){return this.x*=t,this.y*=t,this},"_multiplyBy"),scaleBy:s(function(t){return new U(this.x*t.x,this.y*t.y)},"scaleBy"),unscaleBy:s(function(t){return new U(this.x/t.x,this.y/t.y)},"unscaleBy"),round:s(function(){return this.clone()._round()},"round"),_round:s(function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},"_round"),floor:s(function(){return this.clone()._floor()},"floor"),_floor:s(function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},"_floor"),ceil:s(function(){return this.clone()._ceil()},"ceil"),_ceil:s(function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},"_ceil"),trunc:s(function(){return this.clone()._trunc()},"trunc"),_trunc:s(function(){return this.x=Nt(this.x),this.y=Nt(this.y),this},"_trunc"),distanceTo:s(function(t){t=j(t);var r=t.x-this.x,u=t.y-this.y;return Math.sqrt(r*r+u*u)},"distanceTo"),equals:s(function(t){return t=j(t),t.x===this.x&&t.y===this.y},"equals"),contains:s(function(t){return t=j(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},"contains"),toString:s(function(){return"Point("+w(this.x)+", "+w(this.y)+")"},"toString")};function j(t,r,u){return t instanceof U?t:I(t)?new U(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new U(t.x,t.y):new U(t,r,u)}s(j,"toPoint");function ot(t,r){if(t)for(var u=r?[t,r]:t,d=0,p=u.length;d<p;d++)this.extend(u[d])}s(ot,"Bounds"),ot.prototype={extend:s(function(t){var r,u;if(!t)return this;if(t instanceof U||typeof t[0]=="number"||"x"in t)r=u=j(t);else if(t=Ct(t),r=t.min,u=t.max,!r||!u)return this;return!this.min&&!this.max?(this.min=r.clone(),this.max=u.clone()):(this.min.x=Math.min(r.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(r.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},"extend"),getCenter:s(function(t){return j((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},"getCenter"),getBottomLeft:s(function(){return j(this.min.x,this.max.y)},"getBottomLeft"),getTopRight:s(function(){return j(this.max.x,this.min.y)},"getTopRight"),getTopLeft:s(function(){return this.min},"getTopLeft"),getBottomRight:s(function(){return this.max},"getBottomRight"),getSize:s(function(){return this.max.subtract(this.min)},"getSize"),contains:s(function(t){var r,u;return typeof t[0]=="number"||t instanceof U?t=j(t):t=Ct(t),t instanceof ot?(r=t.min,u=t.max):r=u=t,r.x>=this.min.x&&u.x<=this.max.x&&r.y>=this.min.y&&u.y<=this.max.y},"contains"),intersects:s(function(t){t=Ct(t);var r=this.min,u=this.max,d=t.min,p=t.max,y=p.x>=r.x&&d.x<=u.x,C=p.y>=r.y&&d.y<=u.y;return y&&C},"intersects"),overlaps:s(function(t){t=Ct(t);var r=this.min,u=this.max,d=t.min,p=t.max,y=p.x>r.x&&d.x<u.x,C=p.y>r.y&&d.y<u.y;return y&&C},"overlaps"),isValid:s(function(){return!!(this.min&&this.max)},"isValid"),pad:s(function(t){var r=this.min,u=this.max,d=Math.abs(r.x-u.x)*t,p=Math.abs(r.y-u.y)*t;return Ct(j(r.x-d,r.y-p),j(u.x+d,u.y+p))},"pad"),equals:s(function(t){return t?(t=Ct(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1},"equals")};function Ct(t,r){return!t||t instanceof ot?t:new ot(t,r)}s(Ct,"toBounds");function St(t,r){if(t)for(var u=r?[t,r]:t,d=0,p=u.length;d<p;d++)this.extend(u[d])}s(St,"LatLngBounds"),St.prototype={extend:s(function(t){var r=this._southWest,u=this._northEast,d,p;if(t instanceof it)d=t,p=t;else if(t instanceof St){if(d=t._southWest,p=t._northEast,!d||!p)return this}else return t?this.extend(nt(t)||vt(t)):this;return!r&&!u?(this._southWest=new it(d.lat,d.lng),this._northEast=new it(p.lat,p.lng)):(r.lat=Math.min(d.lat,r.lat),r.lng=Math.min(d.lng,r.lng),u.lat=Math.max(p.lat,u.lat),u.lng=Math.max(p.lng,u.lng)),this},"extend"),pad:s(function(t){var r=this._southWest,u=this._northEast,d=Math.abs(r.lat-u.lat)*t,p=Math.abs(r.lng-u.lng)*t;return new St(new it(r.lat-d,r.lng-p),new it(u.lat+d,u.lng+p))},"pad"),getCenter:s(function(){return new it((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},"getCenter"),getSouthWest:s(function(){return this._southWest},"getSouthWest"),getNorthEast:s(function(){return this._northEast},"getNorthEast"),getNorthWest:s(function(){return new it(this.getNorth(),this.getWest())},"getNorthWest"),getSouthEast:s(function(){return new it(this.getSouth(),this.getEast())},"getSouthEast"),getWest:s(function(){return this._southWest.lng},"getWest"),getSouth:s(function(){return this._southWest.lat},"getSouth"),getEast:s(function(){return this._northEast.lng},"getEast"),getNorth:s(function(){return this._northEast.lat},"getNorth"),contains:s(function(t){typeof t[0]=="number"||t instanceof it||"lat"in t?t=nt(t):t=vt(t);var r=this._southWest,u=this._northEast,d,p;return t instanceof St?(d=t.getSouthWest(),p=t.getNorthEast()):d=p=t,d.lat>=r.lat&&p.lat<=u.lat&&d.lng>=r.lng&&p.lng<=u.lng},"contains"),intersects:s(function(t){t=vt(t);var r=this._southWest,u=this._northEast,d=t.getSouthWest(),p=t.getNorthEast(),y=p.lat>=r.lat&&d.lat<=u.lat,C=p.lng>=r.lng&&d.lng<=u.lng;return y&&C},"intersects"),overlaps:s(function(t){t=vt(t);var r=this._southWest,u=this._northEast,d=t.getSouthWest(),p=t.getNorthEast(),y=p.lat>r.lat&&d.lat<u.lat,C=p.lng>r.lng&&d.lng<u.lng;return y&&C},"overlaps"),toBBoxString:s(function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},"toBBoxString"),equals:s(function(t,r){return t?(t=vt(t),this._southWest.equals(t.getSouthWest(),r)&&this._northEast.equals(t.getNorthEast(),r)):!1},"equals"),isValid:s(function(){return!!(this._southWest&&this._northEast)},"isValid")};function vt(t,r){return t instanceof St?t:new St(t,r)}s(vt,"toLatLngBounds");function it(t,r,u){if(isNaN(t)||isNaN(r))throw new Error("Invalid LatLng object: ("+t+", "+r+")");this.lat=+t,this.lng=+r,u!==void 0&&(this.alt=+u)}s(it,"LatLng"),it.prototype={equals:s(function(t,r){if(!t)return!1;t=nt(t);var u=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return u<=(r===void 0?1e-9:r)},"equals"),toString:s(function(t){return"LatLng("+w(this.lat,t)+", "+w(this.lng,t)+")"},"toString"),distanceTo:s(function(t){return He.distance(this,nt(t))},"distanceTo"),wrap:s(function(){return He.wrapLatLng(this)},"wrap"),toBounds:s(function(t){var r=180*t/40075017,u=r/Math.cos(Math.PI/180*this.lat);return vt([this.lat-r,this.lng-u],[this.lat+r,this.lng+u])},"toBounds"),clone:s(function(){return new it(this.lat,this.lng,this.alt)},"clone")};function nt(t,r,u){return t instanceof it?t:I(t)&&typeof t[0]!="object"?t.length===3?new it(t[0],t[1],t[2]):t.length===2?new it(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new it(t.lat,"lng"in t?t.lng:t.lon,t.alt):r===void 0?null:new it(t,r,u)}s(nt,"toLatLng");var ze={latLngToPoint:s(function(t,r){var u=this.projection.project(t),d=this.scale(r);return this.transformation._transform(u,d)},"latLngToPoint"),pointToLatLng:s(function(t,r){var u=this.scale(r),d=this.transformation.untransform(t,u);return this.projection.unproject(d)},"pointToLatLng"),project:s(function(t){return this.projection.project(t)},"project"),unproject:s(function(t){return this.projection.unproject(t)},"unproject"),scale:s(function(t){return 256*Math.pow(2,t)},"scale"),zoom:s(function(t){return Math.log(t/256)/Math.LN2},"zoom"),getProjectedBounds:s(function(t){if(this.infinite)return null;var r=this.projection.bounds,u=this.scale(t),d=this.transformation.transform(r.min,u),p=this.transformation.transform(r.max,u);return new ot(d,p)},"getProjectedBounds"),infinite:!1,wrapLatLng:s(function(t){var r=this.wrapLng?g(t.lng,this.wrapLng,!0):t.lng,u=this.wrapLat?g(t.lat,this.wrapLat,!0):t.lat,d=t.alt;return new it(u,r,d)},"wrapLatLng"),wrapLatLngBounds:s(function(t){var r=t.getCenter(),u=this.wrapLatLng(r),d=r.lat-u.lat,p=r.lng-u.lng;if(d===0&&p===0)return t;var y=t.getSouthWest(),C=t.getNorthEast(),D=new it(y.lat-d,y.lng-p),A=new it(C.lat-d,C.lng-p);return new St(D,A)},"wrapLatLngBounds")},He=o({},ze,{wrapLng:[-180,180],R:6371e3,distance:s(function(t,r){var u=Math.PI/180,d=t.lat*u,p=r.lat*u,y=Math.sin((r.lat-t.lat)*u/2),C=Math.sin((r.lng-t.lng)*u/2),D=y*y+Math.cos(d)*Math.cos(p)*C*C,A=2*Math.atan2(Math.sqrt(D),Math.sqrt(1-D));return this.R*A},"distance")}),Yl=6378137,va={R:Yl,MAX_LATITUDE:85.0511287798,project:s(function(t){var r=Math.PI/180,u=this.MAX_LATITUDE,d=Math.max(Math.min(u,t.lat),-u),p=Math.sin(d*r);return new U(this.R*t.lng*r,this.R*Math.log((1+p)/(1-p))/2)},"project"),unproject:s(function(t){var r=180/Math.PI;return new it((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*r,t.x*r/this.R)},"unproject"),bounds:(function(){var t=Yl*Math.PI;return new ot([-t,-t],[t,t])})()};function ya(t,r,u,d){if(I(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=r,this._c=u,this._d=d}s(ya,"Transformation"),ya.prototype={transform:s(function(t,r){return this._transform(t.clone(),r)},"transform"),_transform:s(function(t,r){return r=r||1,t.x=r*(this._a*t.x+this._b),t.y=r*(this._c*t.y+this._d),t},"_transform"),untransform:s(function(t,r){return r=r||1,new U((t.x/r-this._b)/this._a,(t.y/r-this._d)/this._c)},"untransform")};function Er(t,r,u,d){return new ya(t,r,u,d)}s(Er,"toTransformation");var ba=o({},He,{code:"EPSG:3857",projection:va,transformation:(function(){var t=.5/(Math.PI*va.R);return Er(t,.5,-t,.5)})()}),kf=o({},ba,{code:"EPSG:900913"});function Ql(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}s(Ql,"svgCreate");function Xl(t,r){var u="",d,p,y,C,D,A;for(d=0,y=t.length;d<y;d++){for(D=t[d],p=0,C=D.length;p<C;p++)A=D[p],u+=(p?"L":"M")+A.x+" "+A.y;u+=r?Z.svg?"z":"x":""}return u||"M0 0"}s(Xl,"pointsToPath");var wa=document.documentElement.style,Mn="ActiveXObject"in window,$f=Mn&&!document.addEventListener,tu="msLaunchUri"in navigator&&!("documentMode"in document),Sa=Pe("webkit"),eu=Pe("android"),iu=Pe("android 2")||Pe("android 3"),Of=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ff=eu&&Pe("Google")&&Of<537&&!("AudioNode"in window),Pa=!!window.opera,ru=!tu&&Pe("chrome"),nu=Pe("gecko")&&!Sa&&!Pa&&!Mn,zf=!ru&&Pe("safari"),su=Pe("phantom"),au="OTransition"in wa,If=navigator.platform.indexOf("Win")===0,ou=Mn&&"transition"in wa,La="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!iu,lu="MozPerspective"in wa,Rf=!window.L_DISABLE_3D&&(ou||La||lu)&&!au&&!su,kr=typeof orientation<"u"||Pe("mobile"),Bf=kr&&Sa,Nf=kr&&La,uu=!window.PointerEvent&&window.MSPointerEvent,cu=!!(window.PointerEvent||uu),hu="ontouchstart"in window||!!window.TouchEvent,Uf=!window.L_NO_TOUCH&&(hu||cu),Zf=kr&&Pa,Gf=kr&&nu,jf=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,qf=(function(){var t=!1;try{var r=Object.defineProperty({},"passive",{get:s(function(){t=!0},"get")});window.addEventListener("testPassiveEventSupport",m,r),window.removeEventListener("testPassiveEventSupport",m,r)}catch{}return t})(),Hf=(function(){return!!document.createElement("canvas").getContext})(),Ca=!!(document.createElementNS&&Ql("svg").createSVGRect),Wf=!!Ca&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),Vf=!Ca&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var r=t.firstChild;return r.style.behavior="url(#default#VML)",r&&typeof r.adj=="object"}catch{return!1}})(),Kf=navigator.platform.indexOf("Mac")===0,Jf=navigator.platform.indexOf("Linux")===0;function Pe(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}s(Pe,"userAgentContains");var Z={ie:Mn,ielt9:$f,edge:tu,webkit:Sa,android:eu,android23:iu,androidStock:Ff,opera:Pa,chrome:ru,gecko:nu,safari:zf,phantom:su,opera12:au,win:If,ie3d:ou,webkit3d:La,gecko3d:lu,any3d:Rf,mobile:kr,mobileWebkit:Bf,mobileWebkit3d:Nf,msPointer:uu,pointer:cu,touch:Uf,touchNative:hu,mobileOpera:Zf,mobileGecko:Gf,retina:jf,passiveEvents:qf,canvas:Hf,svg:Ca,vml:Vf,inlineSvg:Wf,mac:Kf,linux:Jf},du=Z.msPointer?"MSPointerDown":"pointerdown",fu=Z.msPointer?"MSPointerMove":"pointermove",pu=Z.msPointer?"MSPointerUp":"pointerup",_u=Z.msPointer?"MSPointerCancel":"pointercancel",xa={touchstart:du,touchmove:fu,touchend:pu,touchcancel:_u},mu={touchstart:ip,touchmove:An,touchend:An,touchcancel:An},Yi={},gu=!1;function Yf(t,r,u){return r==="touchstart"&&ep(),mu[r]?(u=mu[r].bind(this,u),t.addEventListener(xa[r],u,!1),u):(console.warn("wrong event specified:",r),m)}s(Yf,"addPointerListener");function Qf(t,r,u){if(!xa[r]){console.warn("wrong event specified:",r);return}t.removeEventListener(xa[r],u,!1)}s(Qf,"removePointerListener");function Xf(t){Yi[t.pointerId]=t}s(Xf,"_globalPointerDown");function tp(t){Yi[t.pointerId]&&(Yi[t.pointerId]=t)}s(tp,"_globalPointerMove");function vu(t){delete Yi[t.pointerId]}s(vu,"_globalPointerUp");function ep(){gu||(document.addEventListener(du,Xf,!0),document.addEventListener(fu,tp,!0),document.addEventListener(pu,vu,!0),document.addEventListener(_u,vu,!0),gu=!0)}s(ep,"_addPointerDocListener");function An(t,r){if(r.pointerType!==(r.MSPOINTER_TYPE_MOUSE||"mouse")){r.touches=[];for(var u in Yi)r.touches.push(Yi[u]);r.changedTouches=[r],t(r)}}s(An,"_handlePointer");function ip(t,r){r.MSPOINTER_TYPE_TOUCH&&r.pointerType===r.MSPOINTER_TYPE_TOUCH&&zt(r),An(t,r)}s(ip,"_onPointerStart");function rp(t){var r={},u,d;for(d in t)u=t[d],r[d]=u&&u.bind?u.bind(t):u;return t=r,r.type="dblclick",r.detail=2,r.isTrusted=!1,r._simulated=!0,r}s(rp,"makeDblclick");var np=200;function sp(t,r){t.addEventListener("dblclick",r);var u=0,d;function p(y){if(y.detail!==1){d=y.detail;return}if(!(y.pointerType==="mouse"||y.sourceCapabilities&&!y.sourceCapabilities.firesTouchEvents)){var C=Pu(y);if(!(C.some(function(A){return A instanceof HTMLLabelElement&&A.attributes.for})&&!C.some(function(A){return A instanceof HTMLInputElement||A instanceof HTMLSelectElement}))){var D=Date.now();D-u<=np?(d++,d===2&&r(rp(y))):d=1,u=D}}}return s(p,"simDblclick"),t.addEventListener("click",p),{dblclick:r,simDblclick:p}}s(sp,"addDoubleTapListener");function ap(t,r){t.removeEventListener("dblclick",r.dblclick),t.removeEventListener("click",r.simDblclick)}s(ap,"removeDoubleTapListener");var Da=kn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),$r=kn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),yu=$r==="webkitTransition"||$r==="OTransition"?$r+"End":"transitionend";function bu(t){return typeof t=="string"?document.getElementById(t):t}s(bu,"get");function Or(t,r){var u=t.style[r]||t.currentStyle&&t.currentStyle[r];if((!u||u==="auto")&&document.defaultView){var d=document.defaultView.getComputedStyle(t,null);u=d?d[r]:null}return u==="auto"?null:u}s(Or,"getStyle");function ct(t,r,u){var d=document.createElement(t);return d.className=r||"",u&&u.appendChild(d),d}s(ct,"create$1");function Lt(t){var r=t.parentNode;r&&r.removeChild(t)}s(Lt,"remove");function Tn(t){for(;t.firstChild;)t.removeChild(t.firstChild)}s(Tn,"empty");function Qi(t){var r=t.parentNode;r&&r.lastChild!==t&&r.appendChild(t)}s(Qi,"toFront");function Xi(t){var r=t.parentNode;r&&r.firstChild!==t&&r.insertBefore(t,r.firstChild)}s(Xi,"toBack");function Ma(t,r){if(t.classList!==void 0)return t.classList.contains(r);var u=En(t);return u.length>0&&new RegExp("(^|\\s)"+r+"(\\s|$)").test(u)}s(Ma,"hasClass");function J(t,r){if(t.classList!==void 0)for(var u=S(r),d=0,p=u.length;d<p;d++)t.classList.add(u[d]);else if(!Ma(t,r)){var y=En(t);Aa(t,(y?y+" ":"")+r)}}s(J,"addClass");function Mt(t,r){t.classList!==void 0?t.classList.remove(r):Aa(t,b((" "+En(t)+" ").replace(" "+r+" "," ")))}s(Mt,"removeClass");function Aa(t,r){t.className.baseVal===void 0?t.className=r:t.className.baseVal=r}s(Aa,"setClass");function En(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}s(En,"getClass");function oe(t,r){"opacity"in t.style?t.style.opacity=r:"filter"in t.style&&op(t,r)}s(oe,"setOpacity");function op(t,r){var u=!1,d="DXImageTransform.Microsoft.Alpha";try{u=t.filters.item(d)}catch{if(r===1)return}r=Math.round(r*100),u?(u.Enabled=r!==100,u.Opacity=r):t.style.filter+=" progid:"+d+"(opacity="+r+")"}s(op,"_setOpacityIE");function kn(t){for(var r=document.documentElement.style,u=0;u<t.length;u++)if(t[u]in r)return t[u];return!1}s(kn,"testProp");function si(t,r,u){var d=r||new U(0,0);t.style[Da]=(Z.ie3d?"translate("+d.x+"px,"+d.y+"px)":"translate3d("+d.x+"px,"+d.y+"px,0)")+(u?" scale("+u+")":"")}s(si,"setTransform");function At(t,r){t._leaflet_pos=r,Z.any3d?si(t,r):(t.style.left=r.x+"px",t.style.top=r.y+"px")}s(At,"setPosition");function ai(t){return t._leaflet_pos||new U(0,0)}s(ai,"getPosition");var Fr,zr,Ta;if("onselectstart"in document)Fr=s(function(){K(window,"selectstart",zt)},"disableTextSelection"),zr=s(function(){gt(window,"selectstart",zt)},"enableTextSelection");else{var Ir=kn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Fr=s(function(){if(Ir){var t=document.documentElement.style;Ta=t[Ir],t[Ir]="none"}},"disableTextSelection"),zr=s(function(){Ir&&(document.documentElement.style[Ir]=Ta,Ta=void 0)},"enableTextSelection")}function Ea(){K(window,"dragstart",zt)}s(Ea,"disableImageDrag");function ka(){gt(window,"dragstart",zt)}s(ka,"enableImageDrag");var $n,$a;function Oa(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(On(),$n=t,$a=t.style.outlineStyle,t.style.outlineStyle="none",K(window,"keydown",On))}s(Oa,"preventOutline");function On(){$n&&($n.style.outlineStyle=$a,$n=void 0,$a=void 0,gt(window,"keydown",On))}s(On,"restoreOutline");function wu(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}s(wu,"getSizedParentNode");function Fa(t){var r=t.getBoundingClientRect();return{x:r.width/t.offsetWidth||1,y:r.height/t.offsetHeight||1,boundingClientRect:r}}s(Fa,"getScale");var lp={__proto__:null,TRANSFORM:Da,TRANSITION:$r,TRANSITION_END:yu,get:bu,getStyle:Or,create:ct,remove:Lt,empty:Tn,toFront:Qi,toBack:Xi,hasClass:Ma,addClass:J,removeClass:Mt,setClass:Aa,getClass:En,setOpacity:oe,testProp:kn,setTransform:si,setPosition:At,getPosition:ai,get disableTextSelection(){return Fr},get enableTextSelection(){return zr},disableImageDrag:Ea,enableImageDrag:ka,preventOutline:Oa,restoreOutline:On,getSizedParentNode:wu,getScale:Fa};function K(t,r,u,d){if(r&&typeof r=="object")for(var p in r)Ia(t,p,r[p],u);else{r=S(r);for(var y=0,C=r.length;y<C;y++)Ia(t,r[y],u,d)}return this}s(K,"on");var Le="_leaflet_events";function gt(t,r,u,d){if(arguments.length===1)Su(t),delete t[Le];else if(r&&typeof r=="object")for(var p in r)Ra(t,p,r[p],u);else if(r=S(r),arguments.length===2)Su(t,function(D){return B(r,D)!==-1});else for(var y=0,C=r.length;y<C;y++)Ra(t,r[y],u,d);return this}s(gt,"off");function Su(t,r){for(var u in t[Le]){var d=u.split(/\d/)[0];(!r||r(d))&&Ra(t,d,null,null,u)}}s(Su,"batchRemove");var za={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ia(t,r,u,d){var p=r+f(u)+(d?"_"+f(d):"");if(t[Le]&&t[Le][p])return this;var y=s(function(D){return u.call(d||t,D||window.event)},"handler"),C=y;!Z.touchNative&&Z.pointer&&r.indexOf("touch")===0?y=Yf(t,r,y):Z.touch&&r==="dblclick"?y=sp(t,y):"addEventListener"in t?r==="touchstart"||r==="touchmove"||r==="wheel"||r==="mousewheel"?t.addEventListener(za[r]||r,y,Z.passiveEvents?{passive:!1}:!1):r==="mouseenter"||r==="mouseleave"?(y=s(function(D){D=D||window.event,Na(t,D)&&C(D)},"handler"),t.addEventListener(za[r],y,!1)):t.addEventListener(r,C,!1):t.attachEvent("on"+r,y),t[Le]=t[Le]||{},t[Le][p]=y}s(Ia,"addOne");function Ra(t,r,u,d,p){p=p||r+f(u)+(d?"_"+f(d):"");var y=t[Le]&&t[Le][p];if(!y)return this;!Z.touchNative&&Z.pointer&&r.indexOf("touch")===0?Qf(t,r,y):Z.touch&&r==="dblclick"?ap(t,y):"removeEventListener"in t?t.removeEventListener(za[r]||r,y,!1):t.detachEvent("on"+r,y),t[Le][p]=null}s(Ra,"removeOne");function oi(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}s(oi,"stopPropagation");function Ba(t){return Ia(t,"wheel",oi),this}s(Ba,"disableScrollPropagation");function Rr(t){return K(t,"mousedown touchstart dblclick contextmenu",oi),t._leaflet_disable_click=!0,this}s(Rr,"disableClickPropagation");function zt(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}s(zt,"preventDefault");function li(t){return zt(t),oi(t),this}s(li,"stop");function Pu(t){if(t.composedPath)return t.composedPath();for(var r=[],u=t.target;u;)r.push(u),u=u.parentNode;return r}s(Pu,"getPropagationPath");function Lu(t,r){if(!r)return new U(t.clientX,t.clientY);var u=Fa(r),d=u.boundingClientRect;return new U((t.clientX-d.left)/u.x-r.clientLeft,(t.clientY-d.top)/u.y-r.clientTop)}s(Lu,"getMousePosition");var up=Z.linux&&Z.chrome?window.devicePixelRatio:Z.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Cu(t){return Z.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/up:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}s(Cu,"getWheelDelta");function Na(t,r){var u=r.relatedTarget;if(!u)return!0;try{for(;u&&u!==t;)u=u.parentNode}catch{return!1}return u!==t}s(Na,"isExternalTarget");var cp={__proto__:null,on:K,off:gt,stopPropagation:oi,disableScrollPropagation:Ba,disableClickPropagation:Rr,preventDefault:zt,stop:li,getPropagationPath:Pu,getMousePosition:Lu,getWheelDelta:Cu,isExternalTarget:Na,addListener:K,removeListener:gt},xu=wt.extend({run:s(function(t,r,u,d){this.stop(),this._el=t,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(d||.5,.2),this._startPos=ai(t),this._offset=r.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},"run"),stop:s(function(){this._inProgress&&(this._step(!0),this._complete())},"stop"),_animate:s(function(){this._animId=N(this._animate,this),this._step()},"_animate"),_step:s(function(t){var r=+new Date-this._startTime,u=this._duration*1e3;r<u?this._runFrame(this._easeOut(r/u),t):(this._runFrame(1),this._complete())},"_step"),_runFrame:s(function(t,r){var u=this._startPos.add(this._offset.multiplyBy(t));r&&u._round(),At(this._el,u),this.fire("step")},"_runFrame"),_complete:s(function(){_t(this._animId),this._inProgress=!1,this.fire("end")},"_complete"),_easeOut:s(function(t){return 1-Math.pow(1-t,this._easeOutPower)},"_easeOut")}),st=wt.extend({options:{crs:ba,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:s(function(t,r){r=x(this,r),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),r.maxBounds&&this.setMaxBounds(r.maxBounds),r.zoom!==void 0&&(this._zoom=this._limitZoom(r.zoom)),r.center&&r.zoom!==void 0&&this.setView(nt(r.center),r.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=$r&&Z.any3d&&!Z.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),K(this._proxy,yu,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},"initialize"),setView:s(function(t,r,u){if(r=r===void 0?this._zoom:this._limitZoom(r),t=this._limitCenter(nt(t),r,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=o({animate:u.animate},u.zoom),u.pan=o({animate:u.animate,duration:u.duration},u.pan));var d=this._zoom!==r?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,r,u.zoom):this._tryAnimatedPan(t,u.pan);if(d)return clearTimeout(this._sizeTimer),this}return this._resetView(t,r,u.pan&&u.pan.noMoveStart),this},"setView"),setZoom:s(function(t,r){return this._loaded?this.setView(this.getCenter(),t,{zoom:r}):(this._zoom=t,this)},"setZoom"),zoomIn:s(function(t,r){return t=t||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,r)},"zoomIn"),zoomOut:s(function(t,r){return t=t||(Z.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,r)},"zoomOut"),setZoomAround:s(function(t,r,u){var d=this.getZoomScale(r),p=this.getSize().divideBy(2),y=t instanceof U?t:this.latLngToContainerPoint(t),C=y.subtract(p).multiplyBy(1-1/d),D=this.containerPointToLatLng(p.add(C));return this.setView(D,r,{zoom:u})},"setZoomAround"),_getBoundsCenterZoom:s(function(t,r){r=r||{},t=t.getBounds?t.getBounds():vt(t);var u=j(r.paddingTopLeft||r.padding||[0,0]),d=j(r.paddingBottomRight||r.padding||[0,0]),p=this.getBoundsZoom(t,!1,u.add(d));if(p=typeof r.maxZoom=="number"?Math.min(r.maxZoom,p):p,p===1/0)return{center:t.getCenter(),zoom:p};var y=d.subtract(u).divideBy(2),C=this.project(t.getSouthWest(),p),D=this.project(t.getNorthEast(),p),A=this.unproject(C.add(D).divideBy(2).add(y),p);return{center:A,zoom:p}},"_getBoundsCenterZoom"),fitBounds:s(function(t,r){if(t=vt(t),!t.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(t,r);return this.setView(u.center,u.zoom,r)},"fitBounds"),fitWorld:s(function(t){return this.fitBounds([[-90,-180],[90,180]],t)},"fitWorld"),panTo:s(function(t,r){return this.setView(t,this._zoom,{pan:r})},"panTo"),panBy:s(function(t,r){if(t=j(t).round(),r=r||{},!t.x&&!t.y)return this.fire("moveend");if(r.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new xu,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),r.noMoveStart||this.fire("movestart"),r.animate!==!1){J(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,u,r.duration||.25,r.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},"panBy"),flyTo:s(function(t,r,u){if(u=u||{},u.animate===!1||!Z.any3d)return this.setView(t,r,u);this._stop();var d=this.project(this.getCenter()),p=this.project(t),y=this.getSize(),C=this._zoom;t=nt(t),r=r===void 0?C:r;var D=Math.max(y.x,y.y),A=D*this.getZoomScale(C,r),k=p.distanceTo(d)||1,z=1.42,H=z*z;function Y(Tt){var Hn=Tt?-1:1,Qp=Tt?A:D,Xp=A*A-D*D+Hn*H*H*k*k,t_=2*Qp*H*k,Ya=Xp/t_,ac=Math.sqrt(Ya*Ya+1)-Ya,e_=ac<1e-9?-18:Math.log(ac);return e_}s(Y,"r");function Ut(Tt){return(Math.exp(Tt)-Math.exp(-Tt))/2}s(Ut,"sinh");function Ot(Tt){return(Math.exp(Tt)+Math.exp(-Tt))/2}s(Ot,"cosh");function ue(Tt){return Ut(Tt)/Ot(Tt)}s(ue,"tanh");var Ht=Y(0);function sr(Tt){return D*(Ot(Ht)/Ot(Ht+z*Tt))}s(sr,"w");function Vp(Tt){return D*(Ot(Ht)*ue(Ht+z*Tt)-Ut(Ht))/H}s(Vp,"u");function Kp(Tt){return 1-Math.pow(1-Tt,1.5)}s(Kp,"easeOut");var Jp=Date.now(),nc=(Y(1)-Ht)/z,Yp=u.duration?1e3*u.duration:1e3*nc*.8;function sc(){var Tt=(Date.now()-Jp)/Yp,Hn=Kp(Tt)*nc;Tt<=1?(this._flyToFrame=N(sc,this),this._move(this.unproject(d.add(p.subtract(d).multiplyBy(Vp(Hn)/k)),C),this.getScaleZoom(D/sr(Hn),C),{flyTo:!0})):this._move(t,r)._moveEnd(!0)}return s(sc,"frame"),this._moveStart(!0,u.noMoveStart),sc.call(this),this},"flyTo"),flyToBounds:s(function(t,r){var u=this._getBoundsCenterZoom(t,r);return this.flyTo(u.center,u.zoom,r)},"flyToBounds"),setMaxBounds:s(function(t){return t=vt(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},"setMaxBounds"),setMinZoom:s(function(t){var r=this.options.minZoom;return this.options.minZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},"setMinZoom"),setMaxZoom:s(function(t){var r=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&r!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},"setMaxZoom"),panInsideBounds:s(function(t,r){this._enforcingBounds=!0;var u=this.getCenter(),d=this._limitCenter(u,this._zoom,vt(t));return u.equals(d)||this.panTo(d,r),this._enforcingBounds=!1,this},"panInsideBounds"),panInside:s(function(t,r){r=r||{};var u=j(r.paddingTopLeft||r.padding||[0,0]),d=j(r.paddingBottomRight||r.padding||[0,0]),p=this.project(this.getCenter()),y=this.project(t),C=this.getPixelBounds(),D=Ct([C.min.add(u),C.max.subtract(d)]),A=D.getSize();if(!D.contains(y)){this._enforcingBounds=!0;var k=y.subtract(D.getCenter()),z=D.extend(y).getSize().subtract(A);p.x+=k.x<0?-z.x:z.x,p.y+=k.y<0?-z.y:z.y,this.panTo(this.unproject(p),r),this._enforcingBounds=!1}return this},"panInside"),invalidateSize:s(function(t){if(!this._loaded)return this;t=o({animate:!1,pan:!0},t===!0?{animate:!0}:t);var r=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),d=r.divideBy(2).round(),p=u.divideBy(2).round(),y=d.subtract(p);return!y.x&&!y.y?this:(t.animate&&t.pan?this.panBy(y):(t.pan&&this._rawPanBy(y),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:r,newSize:u}))},"invalidateSize"),stop:s(function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},"stop"),locate:s(function(t){if(t=this._locateOptions=o({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var r=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(r,u,t):navigator.geolocation.getCurrentPosition(r,u,t),this},"locate"),stopLocate:s(function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},"stopLocate"),_handleGeolocationError:s(function(t){if(this._container._leaflet_id){var r=t.code,u=t.message||(r===1?"permission denied":r===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:r,message:"Geolocation error: "+u+"."})}},"_handleGeolocationError"),_handleGeolocationResponse:s(function(t){if(this._container._leaflet_id){var r=t.coords.latitude,u=t.coords.longitude,d=new it(r,u),p=d.toBounds(t.coords.accuracy*2),y=this._locateOptions;if(y.setView){var C=this.getBoundsZoom(p);this.setView(d,y.maxZoom?Math.min(C,y.maxZoom):C)}var D={latlng:d,bounds:p,timestamp:t.timestamp};for(var A in t.coords)typeof t.coords[A]=="number"&&(D[A]=t.coords[A]);this.fire("locationfound",D)}},"_handleGeolocationResponse"),addHandler:s(function(t,r){if(!r)return this;var u=this[t]=new r(this);return this._handlers.push(u),this.options[t]&&u.enable(),this},"addHandler"),remove:s(function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Lt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(_t(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)Lt(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},"remove"),createPane:s(function(t,r){var u="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),d=ct("div",u,r||this._mapPane);return t&&(this._panes[t]=d),d},"createPane"),getCenter:s(function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},"getCenter"),getZoom:s(function(){return this._zoom},"getZoom"),getBounds:s(function(){var t=this.getPixelBounds(),r=this.unproject(t.getBottomLeft()),u=this.unproject(t.getTopRight());return new St(r,u)},"getBounds"),getMinZoom:s(function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},"getMinZoom"),getMaxZoom:s(function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},"getMaxZoom"),getBoundsZoom:s(function(t,r,u){t=vt(t),u=j(u||[0,0]);var d=this.getZoom()||0,p=this.getMinZoom(),y=this.getMaxZoom(),C=t.getNorthWest(),D=t.getSouthEast(),A=this.getSize().subtract(u),k=Ct(this.project(D,d),this.project(C,d)).getSize(),z=Z.any3d?this.options.zoomSnap:1,H=A.x/k.x,Y=A.y/k.y,Ut=r?Math.max(H,Y):Math.min(H,Y);return d=this.getScaleZoom(Ut,d),z&&(d=Math.round(d/(z/100))*(z/100),d=r?Math.ceil(d/z)*z:Math.floor(d/z)*z),Math.max(p,Math.min(y,d))},"getBoundsZoom"),getSize:s(function(){return(!this._size||this._sizeChanged)&&(this._size=new U(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},"getSize"),getPixelBounds:s(function(t,r){var u=this._getTopLeftPoint(t,r);return new ot(u,u.add(this.getSize()))},"getPixelBounds"),getPixelOrigin:s(function(){return this._checkIfLoaded(),this._pixelOrigin},"getPixelOrigin"),getPixelWorldBounds:s(function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},"getPixelWorldBounds"),getPane:s(function(t){return typeof t=="string"?this._panes[t]:t},"getPane"),getPanes:s(function(){return this._panes},"getPanes"),getContainer:s(function(){return this._container},"getContainer"),getZoomScale:s(function(t,r){var u=this.options.crs;return r=r===void 0?this._zoom:r,u.scale(t)/u.scale(r)},"getZoomScale"),getScaleZoom:s(function(t,r){var u=this.options.crs;r=r===void 0?this._zoom:r;var d=u.zoom(t*u.scale(r));return isNaN(d)?1/0:d},"getScaleZoom"),project:s(function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.latLngToPoint(nt(t),r)},"project"),unproject:s(function(t,r){return r=r===void 0?this._zoom:r,this.options.crs.pointToLatLng(j(t),r)},"unproject"),layerPointToLatLng:s(function(t){var r=j(t).add(this.getPixelOrigin());return this.unproject(r)},"layerPointToLatLng"),latLngToLayerPoint:s(function(t){var r=this.project(nt(t))._round();return r._subtract(this.getPixelOrigin())},"latLngToLayerPoint"),wrapLatLng:s(function(t){return this.options.crs.wrapLatLng(nt(t))},"wrapLatLng"),wrapLatLngBounds:s(function(t){return this.options.crs.wrapLatLngBounds(vt(t))},"wrapLatLngBounds"),distance:s(function(t,r){return this.options.crs.distance(nt(t),nt(r))},"distance"),containerPointToLayerPoint:s(function(t){return j(t).subtract(this._getMapPanePos())},"containerPointToLayerPoint"),layerPointToContainerPoint:s(function(t){return j(t).add(this._getMapPanePos())},"layerPointToContainerPoint"),containerPointToLatLng:s(function(t){var r=this.containerPointToLayerPoint(j(t));return this.layerPointToLatLng(r)},"containerPointToLatLng"),latLngToContainerPoint:s(function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(nt(t)))},"latLngToContainerPoint"),mouseEventToContainerPoint:s(function(t){return Lu(t,this._container)},"mouseEventToContainerPoint"),mouseEventToLayerPoint:s(function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},"mouseEventToLayerPoint"),mouseEventToLatLng:s(function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},"mouseEventToLatLng"),_initContainer:s(function(t){var r=this._container=bu(t);if(r){if(r._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");K(r,"scroll",this._onScroll,this),this._containerId=f(r)},"_initContainer"),_initLayout:s(function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Z.any3d,J(t,"leaflet-container"+(Z.touch?" leaflet-touch":"")+(Z.retina?" leaflet-retina":"")+(Z.ielt9?" leaflet-oldie":"")+(Z.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var r=Or(t,"position");r!=="absolute"&&r!=="relative"&&r!=="fixed"&&r!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},"_initLayout"),_initPanes:s(function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),At(this._mapPane,new U(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(J(t.markerPane,"leaflet-zoom-hide"),J(t.shadowPane,"leaflet-zoom-hide"))},"_initPanes"),_resetView:s(function(t,r,u){At(this._mapPane,new U(0,0));var d=!this._loaded;this._loaded=!0,r=this._limitZoom(r),this.fire("viewprereset");var p=this._zoom!==r;this._moveStart(p,u)._move(t,r)._moveEnd(p),this.fire("viewreset"),d&&this.fire("load")},"_resetView"),_moveStart:s(function(t,r){return t&&this.fire("zoomstart"),r||this.fire("movestart"),this},"_moveStart"),_move:s(function(t,r,u,d){r===void 0&&(r=this._zoom);var p=this._zoom!==r;return this._zoom=r,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),d?u&&u.pinch&&this.fire("zoom",u):((p||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},"_move"),_moveEnd:s(function(t){return t&&this.fire("zoomend"),this.fire("moveend")},"_moveEnd"),_stop:s(function(){return _t(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},"_stop"),_rawPanBy:s(function(t){At(this._mapPane,this._getMapPanePos().subtract(t))},"_rawPanBy"),_getZoomSpan:s(function(){return this.getMaxZoom()-this.getMinZoom()},"_getZoomSpan"),_panInsideMaxBounds:s(function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},"_panInsideMaxBounds"),_checkIfLoaded:s(function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},"_checkIfLoaded"),_initEvents:s(function(t){this._targets={},this._targets[f(this._container)]=this;var r=t?gt:K;r(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&r(window,"resize",this._onResize,this),Z.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},"_initEvents"),_onResize:s(function(){_t(this._resizeRequest),this._resizeRequest=N(function(){this.invalidateSize({debounceMoveend:!0})},this)},"_onResize"),_onScroll:s(function(){this._container.scrollTop=0,this._container.scrollLeft=0},"_onScroll"),_onMoveEnd:s(function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},"_onMoveEnd"),_findEventTargets:s(function(t,r){for(var u=[],d,p=r==="mouseout"||r==="mouseover",y=t.target||t.srcElement,C=!1;y;){if(d=this._targets[f(y)],d&&(r==="click"||r==="preclick")&&this._draggableMoved(d)){C=!0;break}if(d&&d.listens(r,!0)&&(p&&!Na(y,t)||(u.push(d),p))||y===this._container)break;y=y.parentNode}return!u.length&&!C&&!p&&this.listens(r,!0)&&(u=[this]),u},"_findEventTargets"),_isClickDisabled:s(function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},"_isClickDisabled"),_handleDOMEvent:s(function(t){var r=t.target||t.srcElement;if(!(!this._loaded||r._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(r))){var u=t.type;u==="mousedown"&&Oa(r),this._fireDOMEvent(t,u)}},"_handleDOMEvent"),_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:s(function(t,r,u){if(t.type==="click"){var d=o({},t);d.type="preclick",this._fireDOMEvent(d,d.type,u)}var p=this._findEventTargets(t,r);if(u){for(var y=[],C=0;C<u.length;C++)u[C].listens(r,!0)&&y.push(u[C]);p=y.concat(p)}if(p.length){r==="contextmenu"&&zt(t);var D=p[0],A={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var k=D.getLatLng&&(!D._radius||D._radius<=10);A.containerPoint=k?this.latLngToContainerPoint(D.getLatLng()):this.mouseEventToContainerPoint(t),A.layerPoint=this.containerPointToLayerPoint(A.containerPoint),A.latlng=k?D.getLatLng():this.layerPointToLatLng(A.layerPoint)}for(C=0;C<p.length;C++)if(p[C].fire(r,A,!0),A.originalEvent._stopped||p[C].options.bubblingMouseEvents===!1&&B(this._mouseEvents,r)!==-1)return}},"_fireDOMEvent"),_draggableMoved:s(function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},"_draggableMoved"),_clearHandlers:s(function(){for(var t=0,r=this._handlers.length;t<r;t++)this._handlers[t].disable()},"_clearHandlers"),whenReady:s(function(t,r){return this._loaded?t.call(r||this,{target:this}):this.on("load",t,r),this},"whenReady"),_getMapPanePos:s(function(){return ai(this._mapPane)||new U(0,0)},"_getMapPanePos"),_moved:s(function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},"_moved"),_getTopLeftPoint:s(function(t,r){var u=t&&r!==void 0?this._getNewPixelOrigin(t,r):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},"_getTopLeftPoint"),_getNewPixelOrigin:s(function(t,r){var u=this.getSize()._divideBy(2);return this.project(t,r)._subtract(u)._add(this._getMapPanePos())._round()},"_getNewPixelOrigin"),_latLngToNewLayerPoint:s(function(t,r,u){var d=this._getNewPixelOrigin(u,r);return this.project(t,r)._subtract(d)},"_latLngToNewLayerPoint"),_latLngBoundsToNewLayerBounds:s(function(t,r,u){var d=this._getNewPixelOrigin(u,r);return Ct([this.project(t.getSouthWest(),r)._subtract(d),this.project(t.getNorthWest(),r)._subtract(d),this.project(t.getSouthEast(),r)._subtract(d),this.project(t.getNorthEast(),r)._subtract(d)])},"_latLngBoundsToNewLayerBounds"),_getCenterLayerPoint:s(function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},"_getCenterLayerPoint"),_getCenterOffset:s(function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},"_getCenterOffset"),_limitCenter:s(function(t,r,u){if(!u)return t;var d=this.project(t,r),p=this.getSize().divideBy(2),y=new ot(d.subtract(p),d.add(p)),C=this._getBoundsOffset(y,u,r);return Math.abs(C.x)<=1&&Math.abs(C.y)<=1?t:this.unproject(d.add(C),r)},"_limitCenter"),_limitOffset:s(function(t,r){if(!r)return t;var u=this.getPixelBounds(),d=new ot(u.min.add(t),u.max.add(t));return t.add(this._getBoundsOffset(d,r))},"_limitOffset"),_getBoundsOffset:s(function(t,r,u){var d=Ct(this.project(r.getNorthEast(),u),this.project(r.getSouthWest(),u)),p=d.min.subtract(t.min),y=d.max.subtract(t.max),C=this._rebound(p.x,-y.x),D=this._rebound(p.y,-y.y);return new U(C,D)},"_getBoundsOffset"),_rebound:s(function(t,r){return t+r>0?Math.round(t-r)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(r))},"_rebound"),_limitZoom:s(function(t){var r=this.getMinZoom(),u=this.getMaxZoom(),d=Z.any3d?this.options.zoomSnap:1;return d&&(t=Math.round(t/d)*d),Math.max(r,Math.min(u,t))},"_limitZoom"),_onPanTransitionStep:s(function(){this.fire("move")},"_onPanTransitionStep"),_onPanTransitionEnd:s(function(){Mt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},"_onPanTransitionEnd"),_tryAnimatedPan:s(function(t,r){var u=this._getCenterOffset(t)._trunc();return(r&&r.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,r),!0)},"_tryAnimatedPan"),_createAnimProxy:s(function(){var t=this._proxy=ct("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(r){var u=Da,d=this._proxy.style[u];si(this._proxy,this.project(r.center,r.zoom),this.getZoomScale(r.zoom,1)),d===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},"_createAnimProxy"),_destroyAnimProxy:s(function(){Lt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},"_destroyAnimProxy"),_animMoveEnd:s(function(){var t=this.getCenter(),r=this.getZoom();si(this._proxy,this.project(t,r),this.getZoomScale(r,1))},"_animMoveEnd"),_catchTransitionEnd:s(function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},"_catchTransitionEnd"),_nothingToAnimate:s(function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},"_nothingToAnimate"),_tryAnimatedZoom:s(function(t,r,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(r-this._zoom)>this.options.zoomAnimationThreshold)return!1;var d=this.getZoomScale(r),p=this._getCenterOffset(t)._divideBy(1-1/d);return u.animate!==!0&&!this.getSize().contains(p)?!1:(N(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(t,r,!0)},this),!0)},"_tryAnimatedZoom"),_animateZoom:s(function(t,r,u,d){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=r,J(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:r,noUpdate:d}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},"_animateZoom"),_onZoomTransitionEnd:s(function(){this._animatingZoom&&(this._mapPane&&Mt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))},"_onZoomTransitionEnd")});function hp(t,r){return new st(t,r)}s(hp,"createMap");var ge=X.extend({options:{position:"topright"},initialize:s(function(t){x(this,t)},"initialize"),getPosition:s(function(){return this.options.position},"getPosition"),setPosition:s(function(t){var r=this._map;return r&&r.removeControl(this),this.options.position=t,r&&r.addControl(this),this},"setPosition"),getContainer:s(function(){return this._container},"getContainer"),addTo:s(function(t){this.remove(),this._map=t;var r=this._container=this.onAdd(t),u=this.getPosition(),d=t._controlCorners[u];return J(r,"leaflet-control"),u.indexOf("bottom")!==-1?d.insertBefore(r,d.firstChild):d.appendChild(r),this._map.on("unload",this.remove,this),this},"addTo"),remove:s(function(){return this._map?(Lt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},"remove"),_refocusOnMap:s(function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()},"_refocusOnMap")}),Br=s(function(t){return new ge(t)},"control");st.include({addControl:s(function(t){return t.addTo(this),this},"addControl"),removeControl:s(function(t){return t.remove(),this},"removeControl"),_initControlPos:s(function(){var t=this._controlCorners={},r="leaflet-",u=this._controlContainer=ct("div",r+"control-container",this._container);function d(p,y){var C=r+p+" "+r+y;t[p+y]=ct("div",C,u)}s(d,"createCorner"),d("top","left"),d("top","right"),d("bottom","left"),d("bottom","right")},"_initControlPos"),_clearControlPos:s(function(){for(var t in this._controlCorners)Lt(this._controlCorners[t]);Lt(this._controlContainer),delete this._controlCorners,delete this._controlContainer},"_clearControlPos")});var Du=ge.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:s(function(t,r,u,d){return u<d?-1:d<u?1:0},"sortFunction")},initialize:s(function(t,r,u){x(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var d in t)this._addLayer(t[d],d);for(d in r)this._addLayer(r[d],d,!0)},"initialize"),onAdd:s(function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.on("add remove",this._onLayerChange,this);return this._container},"onAdd"),addTo:s(function(t){return ge.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},"addTo"),onRemove:s(function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},"onRemove"),addBaseLayer:s(function(t,r){return this._addLayer(t,r),this._map?this._update():this},"addBaseLayer"),addOverlay:s(function(t,r){return this._addLayer(t,r,!0),this._map?this._update():this},"addOverlay"),removeLayer:s(function(t){t.off("add remove",this._onLayerChange,this);var r=this._getLayer(f(t));return r&&this._layers.splice(this._layers.indexOf(r),1),this._map?this._update():this},"removeLayer"),expand:s(function(){J(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(J(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):Mt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},"expand"),collapse:s(function(){return Mt(this._container,"leaflet-control-layers-expanded"),this},"collapse"),_initLayout:s(function(){var t="leaflet-control-layers",r=this._container=ct("div",t),u=this.options.collapsed;r.setAttribute("aria-haspopup",!0),Rr(r),Ba(r);var d=this._section=ct("section",t+"-list");u&&(this._map.on("click",this.collapse,this),K(r,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=ct("a",t+"-toggle",r);p.href="#",p.title="Layers",p.setAttribute("role","button"),K(p,{keydown:s(function(y){y.keyCode===13&&this._expandSafely()},"keydown"),click:s(function(y){zt(y),this._expandSafely()},"click")},this),u||this.expand(),this._baseLayersList=ct("div",t+"-base",d),this._separator=ct("div",t+"-separator",d),this._overlaysList=ct("div",t+"-overlays",d),r.appendChild(d)},"_initLayout"),_getLayer:s(function(t){for(var r=0;r<this._layers.length;r++)if(this._layers[r]&&f(this._layers[r].layer)===t)return this._layers[r]},"_getLayer"),_addLayer:s(function(t,r,u){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:r,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(d,p){return this.options.sortFunction(d.layer,p.layer,d.name,p.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},"_addLayer"),_update:s(function(){if(!this._container)return this;Tn(this._baseLayersList),Tn(this._overlaysList),this._layerControlInputs=[];var t,r,u,d,p=0;for(u=0;u<this._layers.length;u++)d=this._layers[u],this._addItem(d),r=r||d.overlay,t=t||!d.overlay,p+=d.overlay?0:1;return this.options.hideSingleBase&&(t=t&&p>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=r&&t?"":"none",this},"_update"),_onLayerChange:s(function(t){this._handlingClick||this._update();var r=this._getLayer(f(t.target)),u=r.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;u&&this._map.fire(u,r)},"_onLayerChange"),_createRadioElement:s(function(t,r){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(r?' checked="checked"':"")+"/>",d=document.createElement("div");return d.innerHTML=u,d.firstChild},"_createRadioElement"),_addItem:s(function(t){var r=document.createElement("label"),u=this._map.hasLayer(t.layer),d;t.overlay?(d=document.createElement("input"),d.type="checkbox",d.className="leaflet-control-layers-selector",d.defaultChecked=u):d=this._createRadioElement("leaflet-base-layers_"+f(this),u),this._layerControlInputs.push(d),d.layerId=f(t.layer),K(d,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+t.name;var y=document.createElement("span");r.appendChild(y),y.appendChild(d),y.appendChild(p);var C=t.overlay?this._overlaysList:this._baseLayersList;return C.appendChild(r),this._checkDisabledLayers(),r},"_addItem"),_onInputClick:s(function(){if(!this._preventClick){var t=this._layerControlInputs,r,u,d=[],p=[];this._handlingClick=!0;for(var y=t.length-1;y>=0;y--)r=t[y],u=this._getLayer(r.layerId).layer,r.checked?d.push(u):r.checked||p.push(u);for(y=0;y<p.length;y++)this._map.hasLayer(p[y])&&this._map.removeLayer(p[y]);for(y=0;y<d.length;y++)this._map.hasLayer(d[y])||this._map.addLayer(d[y]);this._handlingClick=!1,this._refocusOnMap()}},"_onInputClick"),_checkDisabledLayers:s(function(){for(var t=this._layerControlInputs,r,u,d=this._map.getZoom(),p=t.length-1;p>=0;p--)r=t[p],u=this._getLayer(r.layerId).layer,r.disabled=u.options.minZoom!==void 0&&d<u.options.minZoom||u.options.maxZoom!==void 0&&d>u.options.maxZoom},"_checkDisabledLayers"),_expandIfNotCollapsed:s(function(){return this._map&&!this.options.collapsed&&this.expand(),this},"_expandIfNotCollapsed"),_expandSafely:s(function(){var t=this._section;this._preventClick=!0,K(t,"click",zt),this.expand();var r=this;setTimeout(function(){gt(t,"click",zt),r._preventClick=!1})},"_expandSafely")}),dp=s(function(t,r,u){return new Du(t,r,u)},"layers"),Ua=ge.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:s(function(t){var r="leaflet-control-zoom",u=ct("div",r+" leaflet-bar"),d=this.options;return this._zoomInButton=this._createButton(d.zoomInText,d.zoomInTitle,r+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(d.zoomOutText,d.zoomOutTitle,r+"-out",u,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),u},"onAdd"),onRemove:s(function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},"onRemove"),disable:s(function(){return this._disabled=!0,this._updateDisabled(),this},"disable"),enable:s(function(){return this._disabled=!1,this._updateDisabled(),this},"enable"),_zoomIn:s(function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},"_zoomIn"),_zoomOut:s(function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},"_zoomOut"),_createButton:s(function(t,r,u,d,p){var y=ct("a",u,d);return y.innerHTML=t,y.href="#",y.title=r,y.setAttribute("role","button"),y.setAttribute("aria-label",r),Rr(y),K(y,"click",li),K(y,"click",p,this),K(y,"click",this._refocusOnMap,this),y},"_createButton"),_updateDisabled:s(function(){var t=this._map,r="leaflet-disabled";Mt(this._zoomInButton,r),Mt(this._zoomOutButton,r),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(J(this._zoomOutButton,r),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(J(this._zoomInButton,r),this._zoomInButton.setAttribute("aria-disabled","true"))},"_updateDisabled")});st.mergeOptions({zoomControl:!0}),st.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ua,this.addControl(this.zoomControl))});var fp=s(function(t){return new Ua(t)},"zoom"),Mu=ge.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:s(function(t){var r="leaflet-control-scale",u=ct("div",r),d=this.options;return this._addScales(d,r+"-line",u),t.on(d.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),u},"onAdd"),onRemove:s(function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},"onRemove"),_addScales:s(function(t,r,u){t.metric&&(this._mScale=ct("div",r,u)),t.imperial&&(this._iScale=ct("div",r,u))},"_addScales"),_update:s(function(){var t=this._map,r=t.getSize().y/2,u=t.distance(t.containerPointToLatLng([0,r]),t.containerPointToLatLng([this.options.maxWidth,r]));this._updateScales(u)},"_update"),_updateScales:s(function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},"_updateScales"),_updateMetric:s(function(t){var r=this._getRoundNum(t),u=r<1e3?r+" m":r/1e3+" km";this._updateScale(this._mScale,u,r/t)},"_updateMetric"),_updateImperial:s(function(t){var r=t*3.2808399,u,d,p;r>5280?(u=r/5280,d=this._getRoundNum(u),this._updateScale(this._iScale,d+" mi",d/u)):(p=this._getRoundNum(r),this._updateScale(this._iScale,p+" ft",p/r))},"_updateImperial"),_updateScale:s(function(t,r,u){t.style.width=Math.round(this.options.maxWidth*u)+"px",t.innerHTML=r},"_updateScale"),_getRoundNum:s(function(t){var r=Math.pow(10,(Math.floor(t)+"").length-1),u=t/r;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,r*u},"_getRoundNum")}),pp=s(function(t){return new Mu(t)},"scale"),_p='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Za=ge.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Z.inlineSvg?_p+" ":"")+"Leaflet</a>"},initialize:s(function(t){x(this,t),this._attributions={}},"initialize"),onAdd:s(function(t){t.attributionControl=this,this._container=ct("div","leaflet-control-attribution"),Rr(this._container);for(var r in t._layers)t._layers[r].getAttribution&&this.addAttribution(t._layers[r].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},"onAdd"),onRemove:s(function(t){t.off("layeradd",this._addAttribution,this)},"onRemove"),_addAttribution:s(function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},"_addAttribution"),setPrefix:s(function(t){return this.options.prefix=t,this._update(),this},"setPrefix"),addAttribution:s(function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},"addAttribution"),removeAttribution:s(function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},"removeAttribution"),_update:s(function(){if(this._map){var t=[];for(var r in this._attributions)this._attributions[r]&&t.push(r);var u=[];this.options.prefix&&u.push(this.options.prefix),t.length&&u.push(t.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}},"_update")});st.mergeOptions({attributionControl:!0}),st.addInitHook(function(){this.options.attributionControl&&new Za().addTo(this)});var mp=s(function(t){return new Za(t)},"attribution");ge.Layers=Du,ge.Zoom=Ua,ge.Scale=Mu,ge.Attribution=Za,Br.layers=dp,Br.zoom=fp,Br.scale=pp,Br.attribution=mp;var Ce=X.extend({initialize:s(function(t){this._map=t},"initialize"),enable:s(function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},"enable"),disable:s(function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},"disable"),enabled:s(function(){return!!this._enabled},"enabled")});Ce.addTo=function(t,r){return t.addHandler(r,this),this};var gp={Events:q},Au=Z.touch?"touchstart mousedown":"mousedown",We=wt.extend({options:{clickTolerance:3},initialize:s(function(t,r,u,d){x(this,d),this._element=t,this._dragStartTarget=r||t,this._preventOutline=u},"initialize"),enable:s(function(){this._enabled||(K(this._dragStartTarget,Au,this._onDown,this),this._enabled=!0)},"enable"),disable:s(function(){this._enabled&&(We._dragging===this&&this.finishDrag(!0),gt(this._dragStartTarget,Au,this._onDown,this),this._enabled=!1,this._moved=!1)},"disable"),_onDown:s(function(t){if(this._enabled&&(this._moved=!1,!Ma(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){We._dragging===this&&this.finishDrag();return}if(!(We._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(We._dragging=this,this._preventOutline&&Oa(this._element),Ea(),Fr(),!this._moving)){this.fire("down");var r=t.touches?t.touches[0]:t,u=wu(this._element);this._startPoint=new U(r.clientX,r.clientY),this._startPos=ai(this._element),this._parentScale=Fa(u);var d=t.type==="mousedown";K(document,d?"mousemove":"touchmove",this._onMove,this),K(document,d?"mouseup":"touchend touchcancel",this._onUp,this)}}},"_onDown"),_onMove:s(function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var r=t.touches&&t.touches.length===1?t.touches[0]:t,u=new U(r.clientX,r.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,zt(t),this._moved||(this.fire("dragstart"),this._moved=!0,J(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),J(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=t,this._updatePosition())}},"_onMove"),_updatePosition:s(function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),At(this._element,this._newPos),this.fire("drag",t)},"_updatePosition"),_onUp:s(function(){this._enabled&&this.finishDrag()},"_onUp"),finishDrag:s(function(t){Mt(document.body,"leaflet-dragging"),this._lastTarget&&(Mt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),gt(document,"mousemove touchmove",this._onMove,this),gt(document,"mouseup touchend touchcancel",this._onUp,this),ka(),zr();var r=this._moved&&this._moving;this._moving=!1,We._dragging=!1,r&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})},"finishDrag")});function Tu(t,r,u){var d,p=[1,4,2,8],y,C,D,A,k,z,H,Y;for(y=0,z=t.length;y<z;y++)t[y]._code=ui(t[y],r);for(D=0;D<4;D++){for(H=p[D],d=[],y=0,z=t.length,C=z-1;y<z;C=y++)A=t[y],k=t[C],A._code&H?k._code&H||(Y=Fn(k,A,H,r,u),Y._code=ui(Y,r),d.push(Y)):(k._code&H&&(Y=Fn(k,A,H,r,u),Y._code=ui(Y,r),d.push(Y)),d.push(A));t=d}return t}s(Tu,"clipPolygon");function Eu(t,r){var u,d,p,y,C,D,A,k,z;if(!t||t.length===0)throw new Error("latlngs not passed");le(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var H=nt([0,0]),Y=vt(t),Ut=Y.getNorthWest().distanceTo(Y.getSouthWest())*Y.getNorthEast().distanceTo(Y.getNorthWest());Ut<1700&&(H=Ga(t));var Ot=t.length,ue=[];for(u=0;u<Ot;u++){var Ht=nt(t[u]);ue.push(r.project(nt([Ht.lat-H.lat,Ht.lng-H.lng])))}for(D=A=k=0,u=0,d=Ot-1;u<Ot;d=u++)p=ue[u],y=ue[d],C=p.y*y.x-y.y*p.x,A+=(p.x+y.x)*C,k+=(p.y+y.y)*C,D+=C*3;D===0?z=ue[0]:z=[A/D,k/D];var sr=r.unproject(j(z));return nt([sr.lat+H.lat,sr.lng+H.lng])}s(Eu,"polygonCenter");function Ga(t){for(var r=0,u=0,d=0,p=0;p<t.length;p++){var y=nt(t[p]);r+=y.lat,u+=y.lng,d++}return nt([r/d,u/d])}s(Ga,"centroid");var vp={__proto__:null,clipPolygon:Tu,polygonCenter:Eu,centroid:Ga};function ku(t,r){if(!r||!t.length)return t.slice();var u=r*r;return t=wp(t,u),t=bp(t,u),t}s(ku,"simplify");function $u(t,r,u){return Math.sqrt(Nr(t,r,u,!0))}s($u,"pointToSegmentDistance");function yp(t,r,u){return Nr(t,r,u)}s(yp,"closestPointOnSegment");function bp(t,r){var u=t.length,d=typeof Uint8Array<"u"?Uint8Array:Array,p=new d(u);p[0]=p[u-1]=1,ja(t,p,r,0,u-1);var y,C=[];for(y=0;y<u;y++)p[y]&&C.push(t[y]);return C}s(bp,"_simplifyDP");function ja(t,r,u,d,p){var y=0,C,D,A;for(D=d+1;D<=p-1;D++)A=Nr(t[D],t[d],t[p],!0),A>y&&(C=D,y=A);y>u&&(r[C]=1,ja(t,r,u,d,C),ja(t,r,u,C,p))}s(ja,"_simplifyDPStep");function wp(t,r){for(var u=[t[0]],d=1,p=0,y=t.length;d<y;d++)Sp(t[d],t[p])>r&&(u.push(t[d]),p=d);return p<y-1&&u.push(t[y-1]),u}s(wp,"_reducePoints");var Ou;function Fu(t,r,u,d,p){var y=d?Ou:ui(t,u),C=ui(r,u),D,A,k;for(Ou=C;;){if(!(y|C))return[t,r];if(y&C)return!1;D=y||C,A=Fn(t,r,D,u,p),k=ui(A,u),D===y?(t=A,y=k):(r=A,C=k)}}s(Fu,"clipSegment");function Fn(t,r,u,d,p){var y=r.x-t.x,C=r.y-t.y,D=d.min,A=d.max,k,z;return u&8?(k=t.x+y*(A.y-t.y)/C,z=A.y):u&4?(k=t.x+y*(D.y-t.y)/C,z=D.y):u&2?(k=A.x,z=t.y+C*(A.x-t.x)/y):u&1&&(k=D.x,z=t.y+C*(D.x-t.x)/y),new U(k,z,p)}s(Fn,"_getEdgeIntersection");function ui(t,r){var u=0;return t.x<r.min.x?u|=1:t.x>r.max.x&&(u|=2),t.y<r.min.y?u|=4:t.y>r.max.y&&(u|=8),u}s(ui,"_getBitCode");function Sp(t,r){var u=r.x-t.x,d=r.y-t.y;return u*u+d*d}s(Sp,"_sqDist");function Nr(t,r,u,d){var p=r.x,y=r.y,C=u.x-p,D=u.y-y,A=C*C+D*D,k;return A>0&&(k=((t.x-p)*C+(t.y-y)*D)/A,k>1?(p=u.x,y=u.y):k>0&&(p+=C*k,y+=D*k)),C=t.x-p,D=t.y-y,d?C*C+D*D:new U(p,y)}s(Nr,"_sqClosestPointOnSegment");function le(t){return!I(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}s(le,"isFlat");function zu(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),le(t)}s(zu,"_flat");function Iu(t,r){var u,d,p,y,C,D,A,k;if(!t||t.length===0)throw new Error("latlngs not passed");le(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var z=nt([0,0]),H=vt(t),Y=H.getNorthWest().distanceTo(H.getSouthWest())*H.getNorthEast().distanceTo(H.getNorthWest());Y<1700&&(z=Ga(t));var Ut=t.length,Ot=[];for(u=0;u<Ut;u++){var ue=nt(t[u]);Ot.push(r.project(nt([ue.lat-z.lat,ue.lng-z.lng])))}for(u=0,d=0;u<Ut-1;u++)d+=Ot[u].distanceTo(Ot[u+1])/2;if(d===0)k=Ot[0];else for(u=0,y=0;u<Ut-1;u++)if(C=Ot[u],D=Ot[u+1],p=C.distanceTo(D),y+=p,y>d){A=(y-d)/p,k=[D.x-A*(D.x-C.x),D.y-A*(D.y-C.y)];break}var Ht=r.unproject(j(k));return nt([Ht.lat+z.lat,Ht.lng+z.lng])}s(Iu,"polylineCenter");var Pp={__proto__:null,simplify:ku,pointToSegmentDistance:$u,closestPointOnSegment:yp,clipSegment:Fu,_getEdgeIntersection:Fn,_getBitCode:ui,_sqClosestPointOnSegment:Nr,isFlat:le,_flat:zu,polylineCenter:Iu},qa={project:s(function(t){return new U(t.lng,t.lat)},"project"),unproject:s(function(t){return new it(t.y,t.x)},"unproject"),bounds:new ot([-180,-90],[180,90])},Ha={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ot([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:s(function(t){var r=Math.PI/180,u=this.R,d=t.lat*r,p=this.R_MINOR/u,y=Math.sqrt(1-p*p),C=y*Math.sin(d),D=Math.tan(Math.PI/4-d/2)/Math.pow((1-C)/(1+C),y/2);return d=-u*Math.log(Math.max(D,1e-10)),new U(t.lng*r*u,d)},"project"),unproject:s(function(t){for(var r=180/Math.PI,u=this.R,d=this.R_MINOR/u,p=Math.sqrt(1-d*d),y=Math.exp(-t.y/u),C=Math.PI/2-2*Math.atan(y),D=0,A=.1,k;D<15&&Math.abs(A)>1e-7;D++)k=p*Math.sin(C),k=Math.pow((1-k)/(1+k),p/2),A=Math.PI/2-2*Math.atan(y*k)-C,C+=A;return new it(C*r,t.x*r/u)},"unproject")},Lp={__proto__:null,LonLat:qa,Mercator:Ha,SphericalMercator:va},Cp=o({},He,{code:"EPSG:3395",projection:Ha,transformation:(function(){var t=.5/(Math.PI*Ha.R);return Er(t,.5,-t,.5)})()}),Ru=o({},He,{code:"EPSG:4326",projection:qa,transformation:Er(1/180,1,-1/180,.5)}),xp=o({},ze,{projection:qa,transformation:Er(1,0,-1,0),scale:s(function(t){return Math.pow(2,t)},"scale"),zoom:s(function(t){return Math.log(t)/Math.LN2},"zoom"),distance:s(function(t,r){var u=r.lng-t.lng,d=r.lat-t.lat;return Math.sqrt(u*u+d*d)},"distance"),infinite:!0});ze.Earth=He,ze.EPSG3395=Cp,ze.EPSG3857=ba,ze.EPSG900913=kf,ze.EPSG4326=Ru,ze.Simple=xp;var ve=wt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:s(function(t){return t.addLayer(this),this},"addTo"),remove:s(function(){return this.removeFrom(this._map||this._mapToAdd)},"remove"),removeFrom:s(function(t){return t&&t.removeLayer(this),this},"removeFrom"),getPane:s(function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},"getPane"),addInteractiveTarget:s(function(t){return this._map._targets[f(t)]=this,this},"addInteractiveTarget"),removeInteractiveTarget:s(function(t){return delete this._map._targets[f(t)],this},"removeInteractiveTarget"),getAttribution:s(function(){return this.options.attribution},"getAttribution"),_layerAdd:s(function(t){var r=t.target;if(r.hasLayer(this)){if(this._map=r,this._zoomAnimated=r._zoomAnimated,this.getEvents){var u=this.getEvents();r.on(u,this),this.once("remove",function(){r.off(u,this)},this)}this.onAdd(r),this.fire("add"),r.fire("layeradd",{layer:this})}},"_layerAdd")});st.include({addLayer:s(function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var r=f(t);return this._layers[r]?this:(this._layers[r]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},"addLayer"),removeLayer:s(function(t){var r=f(t);return this._layers[r]?(this._loaded&&t.onRemove(this),delete this._layers[r],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},"removeLayer"),hasLayer:s(function(t){return f(t)in this._layers},"hasLayer"),eachLayer:s(function(t,r){for(var u in this._layers)t.call(r,this._layers[u]);return this},"eachLayer"),_addLayers:s(function(t){t=t?I(t)?t:[t]:[];for(var r=0,u=t.length;r<u;r++)this.addLayer(t[r])},"_addLayers"),_addZoomLimit:s(function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[f(t)]=t,this._updateZoomLevels())},"_addZoomLimit"),_removeZoomLimit:s(function(t){var r=f(t);this._zoomBoundLayers[r]&&(delete this._zoomBoundLayers[r],this._updateZoomLevels())},"_removeZoomLimit"),_updateZoomLevels:s(function(){var t=1/0,r=-1/0,u=this._getZoomSpan();for(var d in this._zoomBoundLayers){var p=this._zoomBoundLayers[d].options;t=p.minZoom===void 0?t:Math.min(t,p.minZoom),r=p.maxZoom===void 0?r:Math.max(r,p.maxZoom)}this._layersMaxZoom=r===-1/0?void 0:r,this._layersMinZoom=t===1/0?void 0:t,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)},"_updateZoomLevels")});var tr=ve.extend({initialize:s(function(t,r){x(this,r),this._layers={};var u,d;if(t)for(u=0,d=t.length;u<d;u++)this.addLayer(t[u])},"initialize"),addLayer:s(function(t){var r=this.getLayerId(t);return this._layers[r]=t,this._map&&this._map.addLayer(t),this},"addLayer"),removeLayer:s(function(t){var r=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[r]&&this._map.removeLayer(this._layers[r]),delete this._layers[r],this},"removeLayer"),hasLayer:s(function(t){var r=typeof t=="number"?t:this.getLayerId(t);return r in this._layers},"hasLayer"),clearLayers:s(function(){return this.eachLayer(this.removeLayer,this)},"clearLayers"),invoke:s(function(t){var r=Array.prototype.slice.call(arguments,1),u,d;for(u in this._layers)d=this._layers[u],d[t]&&d[t].apply(d,r);return this},"invoke"),onAdd:s(function(t){this.eachLayer(t.addLayer,t)},"onAdd"),onRemove:s(function(t){this.eachLayer(t.removeLayer,t)},"onRemove"),eachLayer:s(function(t,r){for(var u in this._layers)t.call(r,this._layers[u]);return this},"eachLayer"),getLayer:s(function(t){return this._layers[t]},"getLayer"),getLayers:s(function(){var t=[];return this.eachLayer(t.push,t),t},"getLayers"),setZIndex:s(function(t){return this.invoke("setZIndex",t)},"setZIndex"),getLayerId:s(function(t){return f(t)},"getLayerId")}),Dp=s(function(t,r){return new tr(t,r)},"layerGroup"),Ie=tr.extend({addLayer:s(function(t){return this.hasLayer(t)?this:(t.addEventParent(this),tr.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},"addLayer"),removeLayer:s(function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),tr.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},"removeLayer"),setStyle:s(function(t){return this.invoke("setStyle",t)},"setStyle"),bringToFront:s(function(){return this.invoke("bringToFront")},"bringToFront"),bringToBack:s(function(){return this.invoke("bringToBack")},"bringToBack"),getBounds:s(function(){var t=new St;for(var r in this._layers){var u=this._layers[r];t.extend(u.getBounds?u.getBounds():u.getLatLng())}return t},"getBounds")}),Mp=s(function(t,r){return new Ie(t,r)},"featureGroup"),er=X.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:s(function(t){x(this,t)},"initialize"),createIcon:s(function(t){return this._createIcon("icon",t)},"createIcon"),createShadow:s(function(t){return this._createIcon("shadow",t)},"createShadow"),_createIcon:s(function(t,r){var u=this._getIconUrl(t);if(!u){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var d=this._createImg(u,r&&r.tagName==="IMG"?r:null);return this._setIconStyles(d,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(d.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),d},"_createIcon"),_setIconStyles:s(function(t,r){var u=this.options,d=u[r+"Size"];typeof d=="number"&&(d=[d,d]);var p=j(d),y=j(r==="shadow"&&u.shadowAnchor||u.iconAnchor||p&&p.divideBy(2,!0));t.className="leaflet-marker-"+r+" "+(u.className||""),y&&(t.style.marginLeft=-y.x+"px",t.style.marginTop=-y.y+"px"),p&&(t.style.width=p.x+"px",t.style.height=p.y+"px")},"_setIconStyles"),_createImg:s(function(t,r){return r=r||document.createElement("img"),r.src=t,r},"_createImg"),_getIconUrl:s(function(t){return Z.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]},"_getIconUrl")});function Ap(t){return new er(t)}s(Ap,"icon");var Ur=er.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:s(function(t){return typeof Ur.imagePath!="string"&&(Ur.imagePath=this._detectIconPath()),(this.options.imagePath||Ur.imagePath)+er.prototype._getIconUrl.call(this,t)},"_getIconUrl"),_stripUrl:s(function(t){var r=s(function(u,d,p){var y=d.exec(u);return y&&y[p]},"strip");return t=r(t,/^url\((['"])?(.+)\1\)$/,2),t&&r(t,/^(.*)marker-icon\.png$/,1)},"_stripUrl"),_detectIconPath:s(function(){var t=ct("div","leaflet-default-icon-path",document.body),r=Or(t,"background-image")||Or(t,"backgroundImage");if(document.body.removeChild(t),r=this._stripUrl(r),r)return r;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""},"_detectIconPath")}),Bu=Ce.extend({initialize:s(function(t){this._marker=t},"initialize"),addHooks:s(function(){var t=this._marker._icon;this._draggable||(this._draggable=new We(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),J(t,"leaflet-marker-draggable")},"addHooks"),removeHooks:s(function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Mt(this._marker._icon,"leaflet-marker-draggable")},"removeHooks"),moved:s(function(){return this._draggable&&this._draggable._moved},"moved"),_adjustPan:s(function(t){var r=this._marker,u=r._map,d=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,y=ai(r._icon),C=u.getPixelBounds(),D=u.getPixelOrigin(),A=Ct(C.min._subtract(D).add(p),C.max._subtract(D).subtract(p));if(!A.contains(y)){var k=j((Math.max(A.max.x,y.x)-A.max.x)/(C.max.x-A.max.x)-(Math.min(A.min.x,y.x)-A.min.x)/(C.min.x-A.min.x),(Math.max(A.max.y,y.y)-A.max.y)/(C.max.y-A.max.y)-(Math.min(A.min.y,y.y)-A.min.y)/(C.min.y-A.min.y)).multiplyBy(d);u.panBy(k,{animate:!1}),this._draggable._newPos._add(k),this._draggable._startPos._add(k),At(r._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=N(this._adjustPan.bind(this,t))}},"_adjustPan"),_onDragStart:s(function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},"_onDragStart"),_onPreDrag:s(function(t){this._marker.options.autoPan&&(_t(this._panRequest),this._panRequest=N(this._adjustPan.bind(this,t)))},"_onPreDrag"),_onDrag:s(function(t){var r=this._marker,u=r._shadow,d=ai(r._icon),p=r._map.layerPointToLatLng(d);u&&At(u,d),r._latlng=p,t.latlng=p,t.oldLatLng=this._oldLatLng,r.fire("move",t).fire("drag",t)},"_onDrag"),_onDragEnd:s(function(t){_t(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)},"_onDragEnd")}),zn=ve.extend({options:{icon:new Ur,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:s(function(t,r){x(this,r),this._latlng=nt(t)},"initialize"),onAdd:s(function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},"onAdd"),onRemove:s(function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},"onRemove"),getEvents:s(function(){return{zoom:this.update,viewreset:this.update}},"getEvents"),getLatLng:s(function(){return this._latlng},"getLatLng"),setLatLng:s(function(t){var r=this._latlng;return this._latlng=nt(t),this.update(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},"setLatLng"),setZIndexOffset:s(function(t){return this.options.zIndexOffset=t,this.update()},"setZIndexOffset"),getIcon:s(function(){return this.options.icon},"getIcon"),setIcon:s(function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},"setIcon"),getElement:s(function(){return this._icon},"getElement"),update:s(function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},"update"),_initIcon:s(function(){var t=this.options,r="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=t.icon.createIcon(this._icon),d=!1;u!==this._icon&&(this._icon&&this._removeIcon(),d=!0,t.title&&(u.title=t.title),u.tagName==="IMG"&&(u.alt=t.alt||"")),J(u,r),t.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&K(u,"focus",this._panOnFocus,this);var p=t.icon.createShadow(this._shadow),y=!1;p!==this._shadow&&(this._removeShadow(),y=!0),p&&(J(p,r),p.alt=""),this._shadow=p,t.opacity<1&&this._updateOpacity(),d&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&y&&this.getPane(t.shadowPane).appendChild(this._shadow)},"_initIcon"),_removeIcon:s(function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&gt(this._icon,"focus",this._panOnFocus,this),Lt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},"_removeIcon"),_removeShadow:s(function(){this._shadow&&Lt(this._shadow),this._shadow=null},"_removeShadow"),_setPos:s(function(t){this._icon&&At(this._icon,t),this._shadow&&At(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},"_setPos"),_updateZIndex:s(function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},"_updateZIndex"),_animateZoom:s(function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(r)},"_animateZoom"),_initInteraction:s(function(){if(this.options.interactive&&(J(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Bu)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Bu(this),t&&this.dragging.enable()}},"_initInteraction"),setOpacity:s(function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},"setOpacity"),_updateOpacity:s(function(){var t=this.options.opacity;this._icon&&oe(this._icon,t),this._shadow&&oe(this._shadow,t)},"_updateOpacity"),_bringToFront:s(function(){this._updateZIndex(this.options.riseOffset)},"_bringToFront"),_resetZIndex:s(function(){this._updateZIndex(0)},"_resetZIndex"),_panOnFocus:s(function(){var t=this._map;if(t){var r=this.options.icon.options,u=r.iconSize?j(r.iconSize):j(0,0),d=r.iconAnchor?j(r.iconAnchor):j(0,0);t.panInside(this._latlng,{paddingTopLeft:d,paddingBottomRight:u.subtract(d)})}},"_panOnFocus"),_getPopupAnchor:s(function(){return this.options.icon.options.popupAnchor},"_getPopupAnchor"),_getTooltipAnchor:s(function(){return this.options.icon.options.tooltipAnchor},"_getTooltipAnchor")});function Tp(t,r){return new zn(t,r)}s(Tp,"marker");var Ve=ve.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:s(function(t){this._renderer=t.getRenderer(this)},"beforeAdd"),onAdd:s(function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},"onAdd"),onRemove:s(function(){this._renderer._removePath(this)},"onRemove"),redraw:s(function(){return this._map&&this._renderer._updatePath(this),this},"redraw"),setStyle:s(function(t){return x(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},"setStyle"),bringToFront:s(function(){return this._renderer&&this._renderer._bringToFront(this),this},"bringToFront"),bringToBack:s(function(){return this._renderer&&this._renderer._bringToBack(this),this},"bringToBack"),getElement:s(function(){return this._path},"getElement"),_reset:s(function(){this._project(),this._update()},"_reset"),_clickTolerance:s(function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)},"_clickTolerance")}),In=Ve.extend({options:{fill:!0,radius:10},initialize:s(function(t,r){x(this,r),this._latlng=nt(t),this._radius=this.options.radius},"initialize"),setLatLng:s(function(t){var r=this._latlng;return this._latlng=nt(t),this.redraw(),this.fire("move",{oldLatLng:r,latlng:this._latlng})},"setLatLng"),getLatLng:s(function(){return this._latlng},"getLatLng"),setRadius:s(function(t){return this.options.radius=this._radius=t,this.redraw()},"setRadius"),getRadius:s(function(){return this._radius},"getRadius"),setStyle:s(function(t){var r=t&&t.radius||this._radius;return Ve.prototype.setStyle.call(this,t),this.setRadius(r),this},"setStyle"),_project:s(function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},"_project"),_updateBounds:s(function(){var t=this._radius,r=this._radiusY||t,u=this._clickTolerance(),d=[t+u,r+u];this._pxBounds=new ot(this._point.subtract(d),this._point.add(d))},"_updateBounds"),_update:s(function(){this._map&&this._updatePath()},"_update"),_updatePath:s(function(){this._renderer._updateCircle(this)},"_updatePath"),_empty:s(function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},"_empty"),_containsPoint:s(function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()},"_containsPoint")});function Ep(t,r){return new In(t,r)}s(Ep,"circleMarker");var Wa=In.extend({initialize:s(function(t,r,u){if(typeof r=="number"&&(r=o({},u,{radius:r})),x(this,r),this._latlng=nt(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},"initialize"),setRadius:s(function(t){return this._mRadius=t,this.redraw()},"setRadius"),getRadius:s(function(){return this._mRadius},"getRadius"),getBounds:s(function(){var t=[this._radius,this._radiusY||this._radius];return new St(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},"getBounds"),setStyle:Ve.prototype.setStyle,_project:s(function(){var t=this._latlng.lng,r=this._latlng.lat,u=this._map,d=u.options.crs;if(d.distance===He.distance){var p=Math.PI/180,y=this._mRadius/He.R/p,C=u.project([r+y,t]),D=u.project([r-y,t]),A=C.add(D).divideBy(2),k=u.unproject(A).lat,z=Math.acos((Math.cos(y*p)-Math.sin(r*p)*Math.sin(k*p))/(Math.cos(r*p)*Math.cos(k*p)))/p;(isNaN(z)||z===0)&&(z=y/Math.cos(Math.PI/180*r)),this._point=A.subtract(u.getPixelOrigin()),this._radius=isNaN(z)?0:A.x-u.project([k,t-z]).x,this._radiusY=A.y-C.y}else{var H=d.unproject(d.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(H).x}this._updateBounds()},"_project")});function kp(t,r,u){return new Wa(t,r,u)}s(kp,"circle");var Re=Ve.extend({options:{smoothFactor:1,noClip:!1},initialize:s(function(t,r){x(this,r),this._setLatLngs(t)},"initialize"),getLatLngs:s(function(){return this._latlngs},"getLatLngs"),setLatLngs:s(function(t){return this._setLatLngs(t),this.redraw()},"setLatLngs"),isEmpty:s(function(){return!this._latlngs.length},"isEmpty"),closestLayerPoint:s(function(t){for(var r=1/0,u=null,d=Nr,p,y,C=0,D=this._parts.length;C<D;C++)for(var A=this._parts[C],k=1,z=A.length;k<z;k++){p=A[k-1],y=A[k];var H=d(t,p,y,!0);H<r&&(r=H,u=d(t,p,y))}return u&&(u.distance=Math.sqrt(r)),u},"closestLayerPoint"),getCenter:s(function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Iu(this._defaultShape(),this._map.options.crs)},"getCenter"),getBounds:s(function(){return this._bounds},"getBounds"),addLatLng:s(function(t,r){return r=r||this._defaultShape(),t=nt(t),r.push(t),this._bounds.extend(t),this.redraw()},"addLatLng"),_setLatLngs:s(function(t){this._bounds=new St,this._latlngs=this._convertLatLngs(t)},"_setLatLngs"),_defaultShape:s(function(){return le(this._latlngs)?this._latlngs:this._latlngs[0]},"_defaultShape"),_convertLatLngs:s(function(t){for(var r=[],u=le(t),d=0,p=t.length;d<p;d++)u?(r[d]=nt(t[d]),this._bounds.extend(r[d])):r[d]=this._convertLatLngs(t[d]);return r},"_convertLatLngs"),_project:s(function(){var t=new ot;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},"_project"),_updateBounds:s(function(){var t=this._clickTolerance(),r=new U(t,t);this._rawPxBounds&&(this._pxBounds=new ot([this._rawPxBounds.min.subtract(r),this._rawPxBounds.max.add(r)]))},"_updateBounds"),_projectLatlngs:s(function(t,r,u){var d=t[0]instanceof it,p=t.length,y,C;if(d){for(C=[],y=0;y<p;y++)C[y]=this._map.latLngToLayerPoint(t[y]),u.extend(C[y]);r.push(C)}else for(y=0;y<p;y++)this._projectLatlngs(t[y],r,u)},"_projectLatlngs"),_clipPoints:s(function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var r=this._parts,u,d,p,y,C,D,A;for(u=0,p=0,y=this._rings.length;u<y;u++)for(A=this._rings[u],d=0,C=A.length;d<C-1;d++)D=Fu(A[d],A[d+1],t,d,!0),D&&(r[p]=r[p]||[],r[p].push(D[0]),(D[1]!==A[d+1]||d===C-2)&&(r[p].push(D[1]),p++))}},"_clipPoints"),_simplifyPoints:s(function(){for(var t=this._parts,r=this.options.smoothFactor,u=0,d=t.length;u<d;u++)t[u]=ku(t[u],r)},"_simplifyPoints"),_update:s(function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},"_update"),_updatePath:s(function(){this._renderer._updatePoly(this)},"_updatePath"),_containsPoint:s(function(t,r){var u,d,p,y,C,D,A=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(u=0,y=this._parts.length;u<y;u++)for(D=this._parts[u],d=0,C=D.length,p=C-1;d<C;p=d++)if(!(!r&&d===0)&&$u(t,D[p],D[d])<=A)return!0;return!1},"_containsPoint")});function $p(t,r){return new Re(t,r)}s($p,"polyline"),Re._flat=zu;var ir=Re.extend({options:{fill:!0},isEmpty:s(function(){return!this._latlngs.length||!this._latlngs[0].length},"isEmpty"),getCenter:s(function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Eu(this._defaultShape(),this._map.options.crs)},"getCenter"),_convertLatLngs:s(function(t){var r=Re.prototype._convertLatLngs.call(this,t),u=r.length;return u>=2&&r[0]instanceof it&&r[0].equals(r[u-1])&&r.pop(),r},"_convertLatLngs"),_setLatLngs:s(function(t){Re.prototype._setLatLngs.call(this,t),le(this._latlngs)&&(this._latlngs=[this._latlngs])},"_setLatLngs"),_defaultShape:s(function(){return le(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},"_defaultShape"),_clipPoints:s(function(){var t=this._renderer._bounds,r=this.options.weight,u=new U(r,r);if(t=new ot(t.min.subtract(u),t.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var d=0,p=this._rings.length,y;d<p;d++)y=Tu(this._rings[d],t,!0),y.length&&this._parts.push(y)}},"_clipPoints"),_updatePath:s(function(){this._renderer._updatePoly(this,!0)},"_updatePath"),_containsPoint:s(function(t){var r=!1,u,d,p,y,C,D,A,k;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(y=0,A=this._parts.length;y<A;y++)for(u=this._parts[y],C=0,k=u.length,D=k-1;C<k;D=C++)d=u[C],p=u[D],d.y>t.y!=p.y>t.y&&t.x<(p.x-d.x)*(t.y-d.y)/(p.y-d.y)+d.x&&(r=!r);return r||Re.prototype._containsPoint.call(this,t,!0)},"_containsPoint")});function Op(t,r){return new ir(t,r)}s(Op,"polygon");var Be=Ie.extend({initialize:s(function(t,r){x(this,r),this._layers={},t&&this.addData(t)},"initialize"),addData:s(function(t){var r=I(t)?t:t.features,u,d,p;if(r){for(u=0,d=r.length;u<d;u++)p=r[u],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var y=this.options;if(y.filter&&!y.filter(t))return this;var C=Rn(t,y);return C?(C.feature=Un(t),C.defaultOptions=C.options,this.resetStyle(C),y.onEachFeature&&y.onEachFeature(t,C),this.addLayer(C)):this},"addData"),resetStyle:s(function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=o({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},"resetStyle"),setStyle:s(function(t){return this.eachLayer(function(r){this._setLayerStyle(r,t)},this)},"setStyle"),_setLayerStyle:s(function(t,r){t.setStyle&&(typeof r=="function"&&(r=r(t.feature)),t.setStyle(r))},"_setLayerStyle")});function Rn(t,r){var u=t.type==="Feature"?t.geometry:t,d=u?u.coordinates:null,p=[],y=r&&r.pointToLayer,C=r&&r.coordsToLatLng||Va,D,A,k,z;if(!d&&!u)return null;switch(u.type){case"Point":return D=C(d),Nu(y,t,D,r);case"MultiPoint":for(k=0,z=d.length;k<z;k++)D=C(d[k]),p.push(Nu(y,t,D,r));return new Ie(p);case"LineString":case"MultiLineString":return A=Bn(d,u.type==="LineString"?0:1,C),new Re(A,r);case"Polygon":case"MultiPolygon":return A=Bn(d,u.type==="Polygon"?1:2,C),new ir(A,r);case"GeometryCollection":for(k=0,z=u.geometries.length;k<z;k++){var H=Rn({geometry:u.geometries[k],type:"Feature",properties:t.properties},r);H&&p.push(H)}return new Ie(p);case"FeatureCollection":for(k=0,z=u.features.length;k<z;k++){var Y=Rn(u.features[k],r);Y&&p.push(Y)}return new Ie(p);default:throw new Error("Invalid GeoJSON object.")}}s(Rn,"geometryToLayer");function Nu(t,r,u,d){return t?t(r,u):new zn(u,d&&d.markersInheritOptions&&d)}s(Nu,"_pointToLayer");function Va(t){return new it(t[1],t[0],t[2])}s(Va,"coordsToLatLng");function Bn(t,r,u){for(var d=[],p=0,y=t.length,C;p<y;p++)C=r?Bn(t[p],r-1,u):(u||Va)(t[p]),d.push(C);return d}s(Bn,"coordsToLatLngs");function Ka(t,r){return t=nt(t),t.alt!==void 0?[w(t.lng,r),w(t.lat,r),w(t.alt,r)]:[w(t.lng,r),w(t.lat,r)]}s(Ka,"latLngToCoords");function Nn(t,r,u,d){for(var p=[],y=0,C=t.length;y<C;y++)p.push(r?Nn(t[y],le(t[y])?0:r-1,u,d):Ka(t[y],d));return!r&&u&&p.length>0&&p.push(p[0].slice()),p}s(Nn,"latLngsToCoords");function rr(t,r){return t.feature?o({},t.feature,{geometry:r}):Un(r)}s(rr,"getFeature");function Un(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}s(Un,"asFeature");var Ja={toGeoJSON:s(function(t){return rr(this,{type:"Point",coordinates:Ka(this.getLatLng(),t)})},"toGeoJSON")};zn.include(Ja),Wa.include(Ja),In.include(Ja),Re.include({toGeoJSON:s(function(t){var r=!le(this._latlngs),u=Nn(this._latlngs,r?1:0,!1,t);return rr(this,{type:(r?"Multi":"")+"LineString",coordinates:u})},"toGeoJSON")}),ir.include({toGeoJSON:s(function(t){var r=!le(this._latlngs),u=r&&!le(this._latlngs[0]),d=Nn(this._latlngs,u?2:r?1:0,!0,t);return r||(d=[d]),rr(this,{type:(u?"Multi":"")+"Polygon",coordinates:d})},"toGeoJSON")}),tr.include({toMultiPoint:s(function(t){var r=[];return this.eachLayer(function(u){r.push(u.toGeoJSON(t).geometry.coordinates)}),rr(this,{type:"MultiPoint",coordinates:r})},"toMultiPoint"),toGeoJSON:s(function(t){var r=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(r==="MultiPoint")return this.toMultiPoint(t);var u=r==="GeometryCollection",d=[];return this.eachLayer(function(p){if(p.toGeoJSON){var y=p.toGeoJSON(t);if(u)d.push(y.geometry);else{var C=Un(y);C.type==="FeatureCollection"?d.push.apply(d,C.features):d.push(C)}}}),u?rr(this,{geometries:d,type:"GeometryCollection"}):{type:"FeatureCollection",features:d}},"toGeoJSON")});function Uu(t,r){return new Be(t,r)}s(Uu,"geoJSON");var Fp=Uu,Zn=ve.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:s(function(t,r,u){this._url=t,this._bounds=vt(r),x(this,u)},"initialize"),onAdd:s(function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(J(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},"onAdd"),onRemove:s(function(){Lt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},"onRemove"),setOpacity:s(function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},"setOpacity"),setStyle:s(function(t){return t.opacity&&this.setOpacity(t.opacity),this},"setStyle"),bringToFront:s(function(){return this._map&&Qi(this._image),this},"bringToFront"),bringToBack:s(function(){return this._map&&Xi(this._image),this},"bringToBack"),setUrl:s(function(t){return this._url=t,this._image&&(this._image.src=t),this},"setUrl"),setBounds:s(function(t){return this._bounds=vt(t),this._map&&this._reset(),this},"setBounds"),getEvents:s(function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},"getEvents"),setZIndex:s(function(t){return this.options.zIndex=t,this._updateZIndex(),this},"setZIndex"),getBounds:s(function(){return this._bounds},"getBounds"),getElement:s(function(){return this._image},"getElement"),_initImage:s(function(){var t=this._url.tagName==="IMG",r=this._image=t?this._url:ct("img");if(J(r,"leaflet-image-layer"),this._zoomAnimated&&J(r,"leaflet-zoom-animated"),this.options.className&&J(r,this.options.className),r.onselectstart=m,r.onmousemove=m,r.onload=l(this.fire,this,"load"),r.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(r.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=r.src;return}r.src=this._url,r.alt=this.options.alt},"_initImage"),_animateZoom:s(function(t){var r=this._map.getZoomScale(t.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;si(this._image,u,r)},"_animateZoom"),_reset:s(function(){var t=this._image,r=new ot(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=r.getSize();At(t,r.min),t.style.width=u.x+"px",t.style.height=u.y+"px"},"_reset"),_updateOpacity:s(function(){oe(this._image,this.options.opacity)},"_updateOpacity"),_updateZIndex:s(function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},"_updateZIndex"),_overlayOnError:s(function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},"_overlayOnError"),getCenter:s(function(){return this._bounds.getCenter()},"getCenter")}),zp=s(function(t,r,u){return new Zn(t,r,u)},"imageOverlay"),Zu=Zn.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:s(function(){var t=this._url.tagName==="VIDEO",r=this._image=t?this._url:ct("video");if(J(r,"leaflet-image-layer"),this._zoomAnimated&&J(r,"leaflet-zoom-animated"),this.options.className&&J(r,this.options.className),r.onselectstart=m,r.onmousemove=m,r.onloadeddata=l(this.fire,this,"load"),t){for(var u=r.getElementsByTagName("source"),d=[],p=0;p<u.length;p++)d.push(u[p].src);this._url=u.length>0?d:[r.src];return}I(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(r.style,"objectFit")&&(r.style.objectFit="fill"),r.autoplay=!!this.options.autoplay,r.loop=!!this.options.loop,r.muted=!!this.options.muted,r.playsInline=!!this.options.playsInline;for(var y=0;y<this._url.length;y++){var C=ct("source");C.src=this._url[y],r.appendChild(C)}},"_initImage")});function Ip(t,r,u){return new Zu(t,r,u)}s(Ip,"videoOverlay");var Gu=Zn.extend({_initImage:s(function(){var t=this._image=this._url;J(t,"leaflet-image-layer"),this._zoomAnimated&&J(t,"leaflet-zoom-animated"),this.options.className&&J(t,this.options.className),t.onselectstart=m,t.onmousemove=m},"_initImage")});function Rp(t,r,u){return new Gu(t,r,u)}s(Rp,"svgOverlay");var xe=ve.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:s(function(t,r){t&&(t instanceof it||I(t))?(this._latlng=nt(t),x(this,r)):(x(this,t),this._source=r),this.options.content&&(this._content=this.options.content)},"initialize"),openOn:s(function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},"openOn"),close:s(function(){return this._map&&this._map.removeLayer(this),this},"close"),toggle:s(function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},"toggle"),onAdd:s(function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&oe(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&oe(this._container,1),this.bringToFront(),this.options.interactive&&(J(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},"onAdd"),onRemove:s(function(t){t._fadeAnimated?(oe(this._container,0),this._removeTimeout=setTimeout(l(Lt,void 0,this._container),200)):Lt(this._container),this.options.interactive&&(Mt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},"onRemove"),getLatLng:s(function(){return this._latlng},"getLatLng"),setLatLng:s(function(t){return this._latlng=nt(t),this._map&&(this._updatePosition(),this._adjustPan()),this},"setLatLng"),getContent:s(function(){return this._content},"getContent"),setContent:s(function(t){return this._content=t,this.update(),this},"setContent"),getElement:s(function(){return this._container},"getElement"),update:s(function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},"update"),getEvents:s(function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},"getEvents"),isOpen:s(function(){return!!this._map&&this._map.hasLayer(this)},"isOpen"),bringToFront:s(function(){return this._map&&Qi(this._container),this},"bringToFront"),bringToBack:s(function(){return this._map&&Xi(this._container),this},"bringToBack"),_prepareOpen:s(function(t){var r=this._source;if(!r._map)return!1;if(r instanceof Ie){r=null;var u=this._source._layers;for(var d in u)if(u[d]._map){r=u[d];break}if(!r)return!1;this._source=r}if(!t)if(r.getCenter)t=r.getCenter();else if(r.getLatLng)t=r.getLatLng();else if(r.getBounds)t=r.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},"_prepareOpen"),_updateContent:s(function(){if(this._content){var t=this._contentNode,r=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof r=="string")t.innerHTML=r;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(r)}this.fire("contentupdate")}},"_updateContent"),_updatePosition:s(function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),r=j(this.options.offset),u=this._getAnchor();this._zoomAnimated?At(this._container,t.add(u)):r=r.add(t).add(u);var d=this._containerBottom=-r.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+r.x;this._container.style.bottom=d+"px",this._container.style.left=p+"px"}},"_updatePosition"),_getAnchor:s(function(){return[0,0]},"_getAnchor")});st.include({_initOverlay:s(function(t,r,u,d){var p=r;return p instanceof t||(p=new t(d).setContent(r)),u&&p.setLatLng(u),p},"_initOverlay")}),ve.include({_initOverlay:s(function(t,r,u,d){var p=u;return p instanceof t?(x(p,d),p._source=this):(p=r&&!d?r:new t(d,this),p.setContent(u)),p},"_initOverlay")});var Gn=xe.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:s(function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,xe.prototype.openOn.call(this,t)},"openOn"),onAdd:s(function(t){xe.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Ve||this._source.on("preclick",oi))},"onAdd"),onRemove:s(function(t){xe.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Ve||this._source.off("preclick",oi))},"onRemove"),getEvents:s(function(){var t=xe.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},"getEvents"),_initLayout:s(function(){var t="leaflet-popup",r=this._container=ct("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=ct("div",t+"-content-wrapper",r);if(this._contentNode=ct("div",t+"-content",u),Rr(r),Ba(this._contentNode),K(r,"contextmenu",oi),this._tipContainer=ct("div",t+"-tip-container",r),this._tip=ct("div",t+"-tip",this._tipContainer),this.options.closeButton){var d=this._closeButton=ct("a",t+"-close-button",r);d.setAttribute("role","button"),d.setAttribute("aria-label","Close popup"),d.href="#close",d.innerHTML='<span aria-hidden="true">&#215;</span>',K(d,"click",function(p){zt(p),this.close()},this)}},"_initLayout"),_updateLayout:s(function(){var t=this._contentNode,r=t.style;r.width="",r.whiteSpace="nowrap";var u=t.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),r.width=u+1+"px",r.whiteSpace="",r.height="";var d=t.offsetHeight,p=this.options.maxHeight,y="leaflet-popup-scrolled";p&&d>p?(r.height=p+"px",J(t,y)):Mt(t,y),this._containerWidth=this._container.offsetWidth},"_updateLayout"),_animateZoom:s(function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),u=this._getAnchor();At(this._container,r.add(u))},"_animateZoom"),_adjustPan:s(function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,r=parseInt(Or(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+r,d=this._containerWidth,p=new U(this._containerLeft,-u-this._containerBottom);p._add(ai(this._container));var y=t.layerPointToContainerPoint(p),C=j(this.options.autoPanPadding),D=j(this.options.autoPanPaddingTopLeft||C),A=j(this.options.autoPanPaddingBottomRight||C),k=t.getSize(),z=0,H=0;y.x+d+A.x>k.x&&(z=y.x+d-k.x+A.x),y.x-z-D.x<0&&(z=y.x-D.x),y.y+u+A.y>k.y&&(H=y.y+u-k.y+A.y),y.y-H-D.y<0&&(H=y.y-D.y),(z||H)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([z,H]))}},"_adjustPan"),_getAnchor:s(function(){return j(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])},"_getAnchor")}),Bp=s(function(t,r){return new Gn(t,r)},"popup");st.mergeOptions({closePopupOnClick:!0}),st.include({openPopup:s(function(t,r,u){return this._initOverlay(Gn,t,r,u).openOn(this),this},"openPopup"),closePopup:s(function(t){return t=arguments.length?t:this._popup,t&&t.close(),this},"closePopup")}),ve.include({bindPopup:s(function(t,r){return this._popup=this._initOverlay(Gn,this._popup,t,r),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},"bindPopup"),unbindPopup:s(function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},"unbindPopup"),openPopup:s(function(t){return this._popup&&(this instanceof Ie||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},"openPopup"),closePopup:s(function(){return this._popup&&this._popup.close(),this},"closePopup"),togglePopup:s(function(){return this._popup&&this._popup.toggle(this),this},"togglePopup"),isPopupOpen:s(function(){return this._popup?this._popup.isOpen():!1},"isPopupOpen"),setPopupContent:s(function(t){return this._popup&&this._popup.setContent(t),this},"setPopupContent"),getPopup:s(function(){return this._popup},"getPopup"),_openPopup:s(function(t){if(!(!this._popup||!this._map)){li(t);var r=t.layer||t.target;if(this._popup._source===r&&!(r instanceof Ve)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=r,this.openPopup(t.latlng)}},"_openPopup"),_movePopup:s(function(t){this._popup.setLatLng(t.latlng)},"_movePopup"),_onKeyPress:s(function(t){t.originalEvent.keyCode===13&&this._openPopup(t)},"_onKeyPress")});var jn=xe.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:s(function(t){xe.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},"onAdd"),onRemove:s(function(t){xe.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},"onRemove"),getEvents:s(function(){var t=xe.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},"getEvents"),_initLayout:s(function(){var t="leaflet-tooltip",r=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ct("div",r),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},"_initLayout"),_updateLayout:s(function(){},"_updateLayout"),_adjustPan:s(function(){},"_adjustPan"),_setPosition:s(function(t){var r,u,d=this._map,p=this._container,y=d.latLngToContainerPoint(d.getCenter()),C=d.layerPointToContainerPoint(t),D=this.options.direction,A=p.offsetWidth,k=p.offsetHeight,z=j(this.options.offset),H=this._getAnchor();D==="top"?(r=A/2,u=k):D==="bottom"?(r=A/2,u=0):D==="center"?(r=A/2,u=k/2):D==="right"?(r=0,u=k/2):D==="left"?(r=A,u=k/2):C.x<y.x?(D="right",r=0,u=k/2):(D="left",r=A+(z.x+H.x)*2,u=k/2),t=t.subtract(j(r,u,!0)).add(z).add(H),Mt(p,"leaflet-tooltip-right"),Mt(p,"leaflet-tooltip-left"),Mt(p,"leaflet-tooltip-top"),Mt(p,"leaflet-tooltip-bottom"),J(p,"leaflet-tooltip-"+D),At(p,t)},"_setPosition"),_updatePosition:s(function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},"_updatePosition"),setOpacity:s(function(t){this.options.opacity=t,this._container&&oe(this._container,t)},"setOpacity"),_animateZoom:s(function(t){var r=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(r)},"_animateZoom"),_getAnchor:s(function(){return j(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])},"_getAnchor")}),Np=s(function(t,r){return new jn(t,r)},"tooltip");st.include({openTooltip:s(function(t,r,u){return this._initOverlay(jn,t,r,u).openOn(this),this},"openTooltip"),closeTooltip:s(function(t){return t.close(),this},"closeTooltip")}),ve.include({bindTooltip:s(function(t,r){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(jn,this._tooltip,t,r),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},"bindTooltip"),unbindTooltip:s(function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},"unbindTooltip"),_initTooltipInteractions:s(function(t){if(!(!t&&this._tooltipHandlersAdded)){var r=t?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[r](u),this._tooltipHandlersAdded=!t}},"_initTooltipInteractions"),openTooltip:s(function(t){return this._tooltip&&(this instanceof Ie||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},"openTooltip"),closeTooltip:s(function(){if(this._tooltip)return this._tooltip.close()},"closeTooltip"),toggleTooltip:s(function(){return this._tooltip&&this._tooltip.toggle(this),this},"toggleTooltip"),isTooltipOpen:s(function(){return this._tooltip.isOpen()},"isTooltipOpen"),setTooltipContent:s(function(t){return this._tooltip&&this._tooltip.setContent(t),this},"setTooltipContent"),getTooltip:s(function(){return this._tooltip},"getTooltip"),_addFocusListeners:s(function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},"_addFocusListeners"),_addFocusListenersOnLayer:s(function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&(K(r,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),K(r,"blur",this.closeTooltip,this))},"_addFocusListenersOnLayer"),_setAriaDescribedByOnLayer:s(function(t){var r=typeof t.getElement=="function"&&t.getElement();r&&r.setAttribute("aria-describedby",this._tooltip._container.id)},"_setAriaDescribedByOnLayer"),_openTooltip:s(function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var r=this;this._map.once("moveend",function(){r._openOnceFlag=!1,r._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},"_openTooltip"),_moveTooltip:s(function(t){var r=t.latlng,u,d;this._tooltip.options.sticky&&t.originalEvent&&(u=this._map.mouseEventToContainerPoint(t.originalEvent),d=this._map.containerPointToLayerPoint(u),r=this._map.layerPointToLatLng(d)),this._tooltip.setLatLng(r)},"_moveTooltip")});var ju=er.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:s(function(t){var r=t&&t.tagName==="DIV"?t:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Tn(r),r.appendChild(u.html)):r.innerHTML=u.html!==!1?u.html:"",u.bgPos){var d=j(u.bgPos);r.style.backgroundPosition=-d.x+"px "+-d.y+"px"}return this._setIconStyles(r,"icon"),r},"createIcon"),createShadow:s(function(){return null},"createShadow")});function Up(t){return new ju(t)}s(Up,"divIcon"),er.Default=Ur;var Zr=ve.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Z.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:s(function(t){x(this,t)},"initialize"),onAdd:s(function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},"onAdd"),beforeAdd:s(function(t){t._addZoomLimit(this)},"beforeAdd"),onRemove:s(function(t){this._removeAllTiles(),Lt(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},"onRemove"),bringToFront:s(function(){return this._map&&(Qi(this._container),this._setAutoZIndex(Math.max)),this},"bringToFront"),bringToBack:s(function(){return this._map&&(Xi(this._container),this._setAutoZIndex(Math.min)),this},"bringToBack"),getContainer:s(function(){return this._container},"getContainer"),setOpacity:s(function(t){return this.options.opacity=t,this._updateOpacity(),this},"setOpacity"),setZIndex:s(function(t){return this.options.zIndex=t,this._updateZIndex(),this},"setZIndex"),isLoading:s(function(){return this._loading},"isLoading"),redraw:s(function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},"redraw"),getEvents:s(function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=_(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},"getEvents"),createTile:s(function(){return document.createElement("div")},"createTile"),getTileSize:s(function(){var t=this.options.tileSize;return t instanceof U?t:new U(t,t)},"getTileSize"),_updateZIndex:s(function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},"_updateZIndex"),_setAutoZIndex:s(function(t){for(var r=this.getPane().children,u=-t(-1/0,1/0),d=0,p=r.length,y;d<p;d++)y=r[d].style.zIndex,r[d]!==this._container&&y&&(u=t(u,+y));isFinite(u)&&(this.options.zIndex=u+t(-1,1),this._updateZIndex())},"_setAutoZIndex"),_updateOpacity:s(function(){if(this._map&&!Z.ielt9){oe(this._container,this.options.opacity);var t=+new Date,r=!1,u=!1;for(var d in this._tiles){var p=this._tiles[d];if(!(!p.current||!p.loaded)){var y=Math.min(1,(t-p.loaded)/200);oe(p.el,y),y<1?r=!0:(p.active?u=!0:this._onOpaqueTile(p),p.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),r&&(_t(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this))}},"_updateOpacity"),_onOpaqueTile:m,_initContainer:s(function(){this._container||(this._container=ct("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},"_initContainer"),_updateLevels:s(function(){var t=this._tileZoom,r=this.options.maxZoom;if(t!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===t?(this._levels[u].el.style.zIndex=r-Math.abs(t-u),this._onUpdateLevel(u)):(Lt(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var d=this._levels[t],p=this._map;return d||(d=this._levels[t]={},d.el=ct("div","leaflet-tile-container leaflet-zoom-animated",this._container),d.el.style.zIndex=r,d.origin=p.project(p.unproject(p.getPixelOrigin()),t).round(),d.zoom=t,this._setZoomTransform(d,p.getCenter(),p.getZoom()),m(d.el.offsetWidth),this._onCreateLevel(d)),this._level=d,d}},"_updateLevels"),_onUpdateLevel:m,_onRemoveLevel:m,_onCreateLevel:m,_pruneTiles:s(function(){if(this._map){var t,r,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)r=this._tiles[t],r.retain=r.current;for(t in this._tiles)if(r=this._tiles[t],r.current&&!r.active){var d=r.coords;this._retainParent(d.x,d.y,d.z,d.z-5)||this._retainChildren(d.x,d.y,d.z,d.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},"_pruneTiles"),_removeTilesAtZoom:s(function(t){for(var r in this._tiles)this._tiles[r].coords.z===t&&this._removeTile(r)},"_removeTilesAtZoom"),_removeAllTiles:s(function(){for(var t in this._tiles)this._removeTile(t)},"_removeAllTiles"),_invalidateAll:s(function(){for(var t in this._levels)Lt(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},"_invalidateAll"),_retainParent:s(function(t,r,u,d){var p=Math.floor(t/2),y=Math.floor(r/2),C=u-1,D=new U(+p,+y);D.z=+C;var A=this._tileCoordsToKey(D),k=this._tiles[A];return k&&k.active?(k.retain=!0,!0):(k&&k.loaded&&(k.retain=!0),C>d?this._retainParent(p,y,C,d):!1)},"_retainParent"),_retainChildren:s(function(t,r,u,d){for(var p=2*t;p<2*t+2;p++)for(var y=2*r;y<2*r+2;y++){var C=new U(p,y);C.z=u+1;var D=this._tileCoordsToKey(C),A=this._tiles[D];if(A&&A.active){A.retain=!0;continue}else A&&A.loaded&&(A.retain=!0);u+1<d&&this._retainChildren(p,y,u+1,d)}},"_retainChildren"),_resetView:s(function(t){var r=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),r,r)},"_resetView"),_animateZoom:s(function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},"_animateZoom"),_clampZoom:s(function(t){var r=this.options;return r.minNativeZoom!==void 0&&t<r.minNativeZoom?r.minNativeZoom:r.maxNativeZoom!==void 0&&r.maxNativeZoom<t?r.maxNativeZoom:t},"_clampZoom"),_setView:s(function(t,r,u,d){var p=Math.round(r);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var y=this.options.updateWhenZooming&&p!==this._tileZoom;(!d||y)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(t),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(t,r)},"_setView"),_setZoomTransforms:s(function(t,r){for(var u in this._levels)this._setZoomTransform(this._levels[u],t,r)},"_setZoomTransforms"),_setZoomTransform:s(function(t,r,u){var d=this._map.getZoomScale(u,t.zoom),p=t.origin.multiplyBy(d).subtract(this._map._getNewPixelOrigin(r,u)).round();Z.any3d?si(t.el,p,d):At(t.el,p)},"_setZoomTransform"),_resetGrid:s(function(){var t=this._map,r=t.options.crs,u=this._tileSize=this.getTileSize(),d=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=r.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,r.wrapLng[0]],d).x/u.x),Math.ceil(t.project([0,r.wrapLng[1]],d).x/u.y)],this._wrapY=r.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([r.wrapLat[0],0],d).y/u.x),Math.ceil(t.project([r.wrapLat[1],0],d).y/u.y)]},"_resetGrid"),_onMoveEnd:s(function(){!this._map||this._map._animatingZoom||this._update()},"_onMoveEnd"),_getTiledPixelBounds:s(function(t){var r=this._map,u=r._animatingZoom?Math.max(r._animateToZoom,r.getZoom()):r.getZoom(),d=r.getZoomScale(u,this._tileZoom),p=r.project(t,this._tileZoom).floor(),y=r.getSize().divideBy(d*2);return new ot(p.subtract(y),p.add(y))},"_getTiledPixelBounds"),_update:s(function(t){var r=this._map;if(r){var u=this._clampZoom(r.getZoom());if(t===void 0&&(t=r.getCenter()),this._tileZoom!==void 0){var d=this._getTiledPixelBounds(t),p=this._pxBoundsToTileRange(d),y=p.getCenter(),C=[],D=this.options.keepBuffer,A=new ot(p.getBottomLeft().subtract([D,-D]),p.getTopRight().add([D,-D]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var k in this._tiles){var z=this._tiles[k].coords;(z.z!==this._tileZoom||!A.contains(new U(z.x,z.y)))&&(this._tiles[k].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(t,u);return}for(var H=p.min.y;H<=p.max.y;H++)for(var Y=p.min.x;Y<=p.max.x;Y++){var Ut=new U(Y,H);if(Ut.z=this._tileZoom,!!this._isValidTile(Ut)){var Ot=this._tiles[this._tileCoordsToKey(Ut)];Ot?Ot.current=!0:C.push(Ut)}}if(C.sort(function(Ht,sr){return Ht.distanceTo(y)-sr.distanceTo(y)}),C.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var ue=document.createDocumentFragment();for(Y=0;Y<C.length;Y++)this._addTile(C[Y],ue);this._level.el.appendChild(ue)}}}},"_update"),_isValidTile:s(function(t){var r=this._map.options.crs;if(!r.infinite){var u=this._globalTileRange;if(!r.wrapLng&&(t.x<u.min.x||t.x>u.max.x)||!r.wrapLat&&(t.y<u.min.y||t.y>u.max.y))return!1}if(!this.options.bounds)return!0;var d=this._tileCoordsToBounds(t);return vt(this.options.bounds).overlaps(d)},"_isValidTile"),_keyToBounds:s(function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},"_keyToBounds"),_tileCoordsToNwSe:s(function(t){var r=this._map,u=this.getTileSize(),d=t.scaleBy(u),p=d.add(u),y=r.unproject(d,t.z),C=r.unproject(p,t.z);return[y,C]},"_tileCoordsToNwSe"),_tileCoordsToBounds:s(function(t){var r=this._tileCoordsToNwSe(t),u=new St(r[0],r[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},"_tileCoordsToBounds"),_tileCoordsToKey:s(function(t){return t.x+":"+t.y+":"+t.z},"_tileCoordsToKey"),_keyToTileCoords:s(function(t){var r=t.split(":"),u=new U(+r[0],+r[1]);return u.z=+r[2],u},"_keyToTileCoords"),_removeTile:s(function(t){var r=this._tiles[t];r&&(Lt(r.el),delete this._tiles[t],this.fire("tileunload",{tile:r.el,coords:this._keyToTileCoords(t)}))},"_removeTile"),_initTile:s(function(t){J(t,"leaflet-tile");var r=this.getTileSize();t.style.width=r.x+"px",t.style.height=r.y+"px",t.onselectstart=m,t.onmousemove=m,Z.ielt9&&this.options.opacity<1&&oe(t,this.options.opacity)},"_initTile"),_addTile:s(function(t,r){var u=this._getTilePos(t),d=this._tileCoordsToKey(t),p=this.createTile(this._wrapCoords(t),l(this._tileReady,this,t));this._initTile(p),this.createTile.length<2&&N(l(this._tileReady,this,t,null,p)),At(p,u),this._tiles[d]={el:p,coords:t,current:!0},r.appendChild(p),this.fire("tileloadstart",{tile:p,coords:t})},"_addTile"),_tileReady:s(function(t,r,u){r&&this.fire("tileerror",{error:r,tile:u,coords:t});var d=this._tileCoordsToKey(t);u=this._tiles[d],u&&(u.loaded=+new Date,this._map._fadeAnimated?(oe(u.el,0),_t(this._fadeFrame),this._fadeFrame=N(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),r||(J(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Z.ielt9||!this._map._fadeAnimated?N(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},"_tileReady"),_getTilePos:s(function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},"_getTilePos"),_wrapCoords:s(function(t){var r=new U(this._wrapX?g(t.x,this._wrapX):t.x,this._wrapY?g(t.y,this._wrapY):t.y);return r.z=t.z,r},"_wrapCoords"),_pxBoundsToTileRange:s(function(t){var r=this.getTileSize();return new ot(t.min.unscaleBy(r).floor(),t.max.unscaleBy(r).ceil().subtract([1,1]))},"_pxBoundsToTileRange"),_noTilesToLoad:s(function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0},"_noTilesToLoad")});function Zp(t){return new Zr(t)}s(Zp,"gridLayer");var nr=Zr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:s(function(t,r){this._url=t,r=x(this,r),r.detectRetina&&Z.retina&&r.maxZoom>0?(r.tileSize=Math.floor(r.tileSize/2),r.zoomReverse?(r.zoomOffset--,r.minZoom=Math.min(r.maxZoom,r.minZoom+1)):(r.zoomOffset++,r.maxZoom=Math.max(r.minZoom,r.maxZoom-1)),r.minZoom=Math.max(0,r.minZoom)):r.zoomReverse?r.minZoom=Math.min(r.maxZoom,r.minZoom):r.maxZoom=Math.max(r.minZoom,r.maxZoom),typeof r.subdomains=="string"&&(r.subdomains=r.subdomains.split("")),this.on("tileunload",this._onTileRemove)},"initialize"),setUrl:s(function(t,r){return this._url===t&&r===void 0&&(r=!0),this._url=t,r||this.redraw(),this},"setUrl"),createTile:s(function(t,r){var u=document.createElement("img");return K(u,"load",l(this._tileOnLoad,this,r,u)),K(u,"error",l(this._tileOnError,this,r,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(t),u},"createTile"),getTileUrl:s(function(t){var r={r:Z.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-t.y;this.options.tms&&(r.y=u),r["-y"]=u}return O(this._url,o(r,this.options))},"getTileUrl"),_tileOnLoad:s(function(t,r){Z.ielt9?setTimeout(l(t,this,null,r),0):t(null,r)},"_tileOnLoad"),_tileOnError:s(function(t,r,u){var d=this.options.errorTileUrl;d&&r.getAttribute("src")!==d&&(r.src=d),t(u,r)},"_tileOnError"),_onTileRemove:s(function(t){t.tile.onload=null},"_onTileRemove"),_getZoomForUrl:s(function(){var t=this._tileZoom,r=this.options.maxZoom,u=this.options.zoomReverse,d=this.options.zoomOffset;return u&&(t=r-t),t+d},"_getZoomForUrl"),_getSubdomain:s(function(t){var r=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[r]},"_getSubdomain"),_abortLoading:s(function(){var t,r;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(r=this._tiles[t].el,r.onload=m,r.onerror=m,!r.complete)){r.src=G;var u=this._tiles[t].coords;Lt(r),delete this._tiles[t],this.fire("tileabort",{tile:r,coords:u})}},"_abortLoading"),_removeTile:s(function(t){var r=this._tiles[t];if(r)return r.el.setAttribute("src",G),Zr.prototype._removeTile.call(this,t)},"_removeTile"),_tileReady:s(function(t,r,u){if(!(!this._map||u&&u.getAttribute("src")===G))return Zr.prototype._tileReady.call(this,t,r,u)},"_tileReady")});function qu(t,r){return new nr(t,r)}s(qu,"tileLayer");var Hu=nr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:s(function(t,r){this._url=t;var u=o({},this.defaultWmsParams);for(var d in r)d in this.options||(u[d]=r[d]);r=x(this,r);var p=r.detectRetina&&Z.retina?2:1,y=this.getTileSize();u.width=y.x*p,u.height=y.y*p,this.wmsParams=u},"initialize"),onAdd:s(function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var r=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[r]=this._crs.code,nr.prototype.onAdd.call(this,t)},"onAdd"),getTileUrl:s(function(t){var r=this._tileCoordsToNwSe(t),u=this._crs,d=Ct(u.project(r[0]),u.project(r[1])),p=d.min,y=d.max,C=(this._wmsVersion>=1.3&&this._crs===Ru?[p.y,p.x,y.y,y.x]:[p.x,p.y,y.x,y.y]).join(","),D=nr.prototype.getTileUrl.call(this,t);return D+T(this.wmsParams,D,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+C},"getTileUrl"),setParams:s(function(t,r){return o(this.wmsParams,t),r||this.redraw(),this},"setParams")});function Gp(t,r){return new Hu(t,r)}s(Gp,"tileLayerWMS"),nr.WMS=Hu,qu.wms=Gp;var Ne=ve.extend({options:{padding:.1},initialize:s(function(t){x(this,t),f(this),this._layers=this._layers||{}},"initialize"),onAdd:s(function(){this._container||(this._initContainer(),J(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},"onAdd"),onRemove:s(function(){this.off("update",this._updatePaths,this),this._destroyContainer()},"onRemove"),getEvents:s(function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},"getEvents"),_onAnimZoom:s(function(t){this._updateTransform(t.center,t.zoom)},"_onAnimZoom"),_onZoom:s(function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},"_onZoom"),_updateTransform:s(function(t,r){var u=this._map.getZoomScale(r,this._zoom),d=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,r),y=d.multiplyBy(-u).add(p).subtract(this._map._getNewPixelOrigin(t,r));Z.any3d?si(this._container,y,u):At(this._container,y)},"_updateTransform"),_reset:s(function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},"_reset"),_onZoomEnd:s(function(){for(var t in this._layers)this._layers[t]._project()},"_onZoomEnd"),_updatePaths:s(function(){for(var t in this._layers)this._layers[t]._update()},"_updatePaths"),_update:s(function(){var t=this.options.padding,r=this._map.getSize(),u=this._map.containerPointToLayerPoint(r.multiplyBy(-t)).round();this._bounds=new ot(u,u.add(r.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()},"_update")}),Wu=Ne.extend({options:{tolerance:0},getEvents:s(function(){var t=Ne.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},"getEvents"),_onViewPreReset:s(function(){this._postponeUpdatePaths=!0},"_onViewPreReset"),onAdd:s(function(){Ne.prototype.onAdd.call(this),this._draw()},"onAdd"),_initContainer:s(function(){var t=this._container=document.createElement("canvas");K(t,"mousemove",this._onMouseMove,this),K(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),K(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},"_initContainer"),_destroyContainer:s(function(){_t(this._redrawRequest),delete this._ctx,Lt(this._container),gt(this._container),delete this._container},"_destroyContainer"),_updatePaths:s(function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var r in this._layers)t=this._layers[r],t._update();this._redraw()}},"_updatePaths"),_update:s(function(){if(!(this._map._animatingZoom&&this._bounds)){Ne.prototype._update.call(this);var t=this._bounds,r=this._container,u=t.getSize(),d=Z.retina?2:1;At(r,t.min),r.width=d*u.x,r.height=d*u.y,r.style.width=u.x+"px",r.style.height=u.y+"px",Z.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},"_update"),_reset:s(function(){Ne.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},"_reset"),_initPath:s(function(t){this._updateDashArray(t),this._layers[f(t)]=t;var r=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=r),this._drawLast=r,this._drawFirst=this._drawFirst||this._drawLast},"_initPath"),_addPath:s(function(t){this._requestRedraw(t)},"_addPath"),_removePath:s(function(t){var r=t._order,u=r.next,d=r.prev;u?u.prev=d:this._drawLast=d,d?d.next=u:this._drawFirst=u,delete t._order,delete this._layers[f(t)],this._requestRedraw(t)},"_removePath"),_updatePath:s(function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},"_updatePath"),_updateStyle:s(function(t){this._updateDashArray(t),this._requestRedraw(t)},"_updateStyle"),_updateDashArray:s(function(t){if(typeof t.options.dashArray=="string"){var r=t.options.dashArray.split(/[, ]+/),u=[],d,p;for(p=0;p<r.length;p++){if(d=Number(r[p]),isNaN(d))return;u.push(d)}t.options._dashArray=u}else t.options._dashArray=t.options.dashArray},"_updateDashArray"),_requestRedraw:s(function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||N(this._redraw,this))},"_requestRedraw"),_extendRedrawBounds:s(function(t){if(t._pxBounds){var r=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ot,this._redrawBounds.extend(t._pxBounds.min.subtract([r,r])),this._redrawBounds.extend(t._pxBounds.max.add([r,r]))}},"_extendRedrawBounds"),_redraw:s(function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},"_redraw"),_clear:s(function(){var t=this._redrawBounds;if(t){var r=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,r.x,r.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},"_clear"),_draw:s(function(){var t,r=this._redrawBounds;if(this._ctx.save(),r){var u=r.getSize();this._ctx.beginPath(),this._ctx.rect(r.min.x,r.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var d=this._drawFirst;d;d=d.next)t=d.layer,(!r||t._pxBounds&&t._pxBounds.intersects(r))&&t._updatePath();this._drawing=!1,this._ctx.restore()},"_draw"),_updatePoly:s(function(t,r){if(this._drawing){var u,d,p,y,C=t._parts,D=C.length,A=this._ctx;if(D){for(A.beginPath(),u=0;u<D;u++){for(d=0,p=C[u].length;d<p;d++)y=C[u][d],A[d?"lineTo":"moveTo"](y.x,y.y);r&&A.closePath()}this._fillStroke(A,t)}}},"_updatePoly"),_updateCircle:s(function(t){if(!(!this._drawing||t._empty())){var r=t._point,u=this._ctx,d=Math.max(Math.round(t._radius),1),p=(Math.max(Math.round(t._radiusY),1)||d)/d;p!==1&&(u.save(),u.scale(1,p)),u.beginPath(),u.arc(r.x,r.y/p,d,0,Math.PI*2,!1),p!==1&&u.restore(),this._fillStroke(u,t)}},"_updateCircle"),_fillStroke:s(function(t,r){var u=r.options;u.fill&&(t.globalAlpha=u.fillOpacity,t.fillStyle=u.fillColor||u.color,t.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(t.setLineDash&&t.setLineDash(r.options&&r.options._dashArray||[]),t.globalAlpha=u.opacity,t.lineWidth=u.weight,t.strokeStyle=u.color,t.lineCap=u.lineCap,t.lineJoin=u.lineJoin,t.stroke())},"_fillStroke"),_onClick:s(function(t){for(var r=this._map.mouseEventToLayerPoint(t),u,d,p=this._drawFirst;p;p=p.next)u=p.layer,u.options.interactive&&u._containsPoint(r)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(u))&&(d=u);this._fireEvent(d?[d]:!1,t)},"_onClick"),_onMouseMove:s(function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var r=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,r)}},"_onMouseMove"),_handleMouseOut:s(function(t){var r=this._hoveredLayer;r&&(Mt(this._container,"leaflet-interactive"),this._fireEvent([r],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},"_handleMouseOut"),_handleMouseHover:s(function(t,r){if(!this._mouseHoverThrottled){for(var u,d,p=this._drawFirst;p;p=p.next)u=p.layer,u.options.interactive&&u._containsPoint(r)&&(d=u);d!==this._hoveredLayer&&(this._handleMouseOut(t),d&&(J(this._container,"leaflet-interactive"),this._fireEvent([d],t,"mouseover"),this._hoveredLayer=d)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},"_handleMouseHover"),_fireEvent:s(function(t,r,u){this._map._fireDOMEvent(r,u||r.type,t)},"_fireEvent"),_bringToFront:s(function(t){var r=t._order;if(r){var u=r.next,d=r.prev;if(u)u.prev=d;else return;d?d.next=u:u&&(this._drawFirst=u),r.prev=this._drawLast,this._drawLast.next=r,r.next=null,this._drawLast=r,this._requestRedraw(t)}},"_bringToFront"),_bringToBack:s(function(t){var r=t._order;if(r){var u=r.next,d=r.prev;if(d)d.next=u;else return;u?u.prev=d:d&&(this._drawLast=d),r.prev=null,r.next=this._drawFirst,this._drawFirst.prev=r,this._drawFirst=r,this._requestRedraw(t)}},"_bringToBack")});function Vu(t){return Z.canvas?new Wu(t):null}s(Vu,"canvas");var Gr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),jp={_initContainer:s(function(){this._container=ct("div","leaflet-vml-container")},"_initContainer"),_update:s(function(){this._map._animatingZoom||(Ne.prototype._update.call(this),this.fire("update"))},"_update"),_initPath:s(function(t){var r=t._container=Gr("shape");J(r,"leaflet-vml-shape "+(this.options.className||"")),r.coordsize="1 1",t._path=Gr("path"),r.appendChild(t._path),this._updateStyle(t),this._layers[f(t)]=t},"_initPath"),_addPath:s(function(t){var r=t._container;this._container.appendChild(r),t.options.interactive&&t.addInteractiveTarget(r)},"_addPath"),_removePath:s(function(t){var r=t._container;Lt(r),t.removeInteractiveTarget(r),delete this._layers[f(t)]},"_removePath"),_updateStyle:s(function(t){var r=t._stroke,u=t._fill,d=t.options,p=t._container;p.stroked=!!d.stroke,p.filled=!!d.fill,d.stroke?(r||(r=t._stroke=Gr("stroke")),p.appendChild(r),r.weight=d.weight+"px",r.color=d.color,r.opacity=d.opacity,d.dashArray?r.dashStyle=I(d.dashArray)?d.dashArray.join(" "):d.dashArray.replace(/( *, *)/g," "):r.dashStyle="",r.endcap=d.lineCap.replace("butt","flat"),r.joinstyle=d.lineJoin):r&&(p.removeChild(r),t._stroke=null),d.fill?(u||(u=t._fill=Gr("fill")),p.appendChild(u),u.color=d.fillColor||d.color,u.opacity=d.fillOpacity):u&&(p.removeChild(u),t._fill=null)},"_updateStyle"),_updateCircle:s(function(t){var r=t._point.round(),u=Math.round(t._radius),d=Math.round(t._radiusY||u);this._setPath(t,t._empty()?"M0 0":"AL "+r.x+","+r.y+" "+u+","+d+" 0,"+65535*360)},"_updateCircle"),_setPath:s(function(t,r){t._path.v=r},"_setPath"),_bringToFront:s(function(t){Qi(t._container)},"_bringToFront"),_bringToBack:s(function(t){Xi(t._container)},"_bringToBack")},qn=Z.vml?Gr:Ql,jr=Ne.extend({_initContainer:s(function(){this._container=qn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=qn("g"),this._container.appendChild(this._rootGroup)},"_initContainer"),_destroyContainer:s(function(){Lt(this._container),gt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},"_destroyContainer"),_update:s(function(){if(!(this._map._animatingZoom&&this._bounds)){Ne.prototype._update.call(this);var t=this._bounds,r=t.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(r))&&(this._svgSize=r,u.setAttribute("width",r.x),u.setAttribute("height",r.y)),At(u,t.min),u.setAttribute("viewBox",[t.min.x,t.min.y,r.x,r.y].join(" ")),this.fire("update")}},"_update"),_initPath:s(function(t){var r=t._path=qn("path");t.options.className&&J(r,t.options.className),t.options.interactive&&J(r,"leaflet-interactive"),this._updateStyle(t),this._layers[f(t)]=t},"_initPath"),_addPath:s(function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},"_addPath"),_removePath:s(function(t){Lt(t._path),t.removeInteractiveTarget(t._path),delete this._layers[f(t)]},"_removePath"),_updatePath:s(function(t){t._project(),t._update()},"_updatePath"),_updateStyle:s(function(t){var r=t._path,u=t.options;r&&(u.stroke?(r.setAttribute("stroke",u.color),r.setAttribute("stroke-opacity",u.opacity),r.setAttribute("stroke-width",u.weight),r.setAttribute("stroke-linecap",u.lineCap),r.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?r.setAttribute("stroke-dasharray",u.dashArray):r.removeAttribute("stroke-dasharray"),u.dashOffset?r.setAttribute("stroke-dashoffset",u.dashOffset):r.removeAttribute("stroke-dashoffset")):r.setAttribute("stroke","none"),u.fill?(r.setAttribute("fill",u.fillColor||u.color),r.setAttribute("fill-opacity",u.fillOpacity),r.setAttribute("fill-rule",u.fillRule||"evenodd")):r.setAttribute("fill","none"))},"_updateStyle"),_updatePoly:s(function(t,r){this._setPath(t,Xl(t._parts,r))},"_updatePoly"),_updateCircle:s(function(t){var r=t._point,u=Math.max(Math.round(t._radius),1),d=Math.max(Math.round(t._radiusY),1)||u,p="a"+u+","+d+" 0 1,0 ",y=t._empty()?"M0 0":"M"+(r.x-u)+","+r.y+p+u*2+",0 "+p+-u*2+",0 ";this._setPath(t,y)},"_updateCircle"),_setPath:s(function(t,r){t._path.setAttribute("d",r)},"_setPath"),_bringToFront:s(function(t){Qi(t._path)},"_bringToFront"),_bringToBack:s(function(t){Xi(t._path)},"_bringToBack")});Z.vml&&jr.include(jp);function Ku(t){return Z.svg||Z.vml?new jr(t):null}s(Ku,"svg"),st.include({getRenderer:s(function(t){var r=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return r||(r=this._renderer=this._createRenderer()),this.hasLayer(r)||this.addLayer(r),r},"getRenderer"),_getPaneRenderer:s(function(t){if(t==="overlayPane"||t===void 0)return!1;var r=this._paneRenderers[t];return r===void 0&&(r=this._createRenderer({pane:t}),this._paneRenderers[t]=r),r},"_getPaneRenderer"),_createRenderer:s(function(t){return this.options.preferCanvas&&Vu(t)||Ku(t)},"_createRenderer")});var Ju=ir.extend({initialize:s(function(t,r){ir.prototype.initialize.call(this,this._boundsToLatLngs(t),r)},"initialize"),setBounds:s(function(t){return this.setLatLngs(this._boundsToLatLngs(t))},"setBounds"),_boundsToLatLngs:s(function(t){return t=vt(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]},"_boundsToLatLngs")});function qp(t,r){return new Ju(t,r)}s(qp,"rectangle"),jr.create=qn,jr.pointsToPath=Xl,Be.geometryToLayer=Rn,Be.coordsToLatLng=Va,Be.coordsToLatLngs=Bn,Be.latLngToCoords=Ka,Be.latLngsToCoords=Nn,Be.getFeature=rr,Be.asFeature=Un,st.mergeOptions({boxZoom:!0});var Yu=Ce.extend({initialize:s(function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},"initialize"),addHooks:s(function(){K(this._container,"mousedown",this._onMouseDown,this)},"addHooks"),removeHooks:s(function(){gt(this._container,"mousedown",this._onMouseDown,this)},"removeHooks"),moved:s(function(){return this._moved},"moved"),_destroy:s(function(){Lt(this._pane),delete this._pane},"_destroy"),_resetState:s(function(){this._resetStateTimeout=0,this._moved=!1},"_resetState"),_clearDeferredResetState:s(function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},"_clearDeferredResetState"),_onMouseDown:s(function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Fr(),Ea(),this._startPoint=this._map.mouseEventToContainerPoint(t),K(document,{contextmenu:li,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},"_onMouseDown"),_onMouseMove:s(function(t){this._moved||(this._moved=!0,this._box=ct("div","leaflet-zoom-box",this._container),J(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var r=new ot(this._point,this._startPoint),u=r.getSize();At(this._box,r.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},"_onMouseMove"),_finish:s(function(){this._moved&&(Lt(this._box),Mt(this._container,"leaflet-crosshair")),zr(),ka(),gt(document,{contextmenu:li,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},"_finish"),_onMouseUp:s(function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var r=new St(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(r).fire("boxzoomend",{boxZoomBounds:r})}},"_onMouseUp"),_onKeyDown:s(function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())},"_onKeyDown")});st.addInitHook("addHandler","boxZoom",Yu),st.mergeOptions({doubleClickZoom:!0});var Qu=Ce.extend({addHooks:s(function(){this._map.on("dblclick",this._onDoubleClick,this)},"addHooks"),removeHooks:s(function(){this._map.off("dblclick",this._onDoubleClick,this)},"removeHooks"),_onDoubleClick:s(function(t){var r=this._map,u=r.getZoom(),d=r.options.zoomDelta,p=t.originalEvent.shiftKey?u-d:u+d;r.options.doubleClickZoom==="center"?r.setZoom(p):r.setZoomAround(t.containerPoint,p)},"_onDoubleClick")});st.addInitHook("addHandler","doubleClickZoom",Qu),st.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Xu=Ce.extend({addHooks:s(function(){if(!this._draggable){var t=this._map;this._draggable=new We(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}J(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},"addHooks"),removeHooks:s(function(){Mt(this._map._container,"leaflet-grab"),Mt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},"removeHooks"),moved:s(function(){return this._draggable&&this._draggable._moved},"moved"),moving:s(function(){return this._draggable&&this._draggable._moving},"moving"),_onDragStart:s(function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var r=vt(this._map.options.maxBounds);this._offsetLimit=Ct(this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},"_onDragStart"),_onDrag:s(function(t){if(this._map.options.inertia){var r=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(r),this._prunePositions(r)}this._map.fire("move",t).fire("drag",t)},"_onDrag"),_prunePositions:s(function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},"_prunePositions"),_onZoomEnd:s(function(){var t=this._map.getSize().divideBy(2),r=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=r.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},"_onZoomEnd"),_viscousLimit:s(function(t,r){return t-(t-r)*this._viscosity},"_viscousLimit"),_onPreDragLimit:s(function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),r=this._offsetLimit;t.x<r.min.x&&(t.x=this._viscousLimit(t.x,r.min.x)),t.y<r.min.y&&(t.y=this._viscousLimit(t.y,r.min.y)),t.x>r.max.x&&(t.x=this._viscousLimit(t.x,r.max.x)),t.y>r.max.y&&(t.y=this._viscousLimit(t.y,r.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},"_onPreDragLimit"),_onPreDragWrap:s(function(){var t=this._worldWidth,r=Math.round(t/2),u=this._initialWorldOffset,d=this._draggable._newPos.x,p=(d-r+u)%t+r-u,y=(d+r+u)%t-r-u,C=Math.abs(p+u)<Math.abs(y+u)?p:y;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=C},"_onPreDragWrap"),_onDragEnd:s(function(t){var r=this._map,u=r.options,d=!u.inertia||t.noInertia||this._times.length<2;if(r.fire("dragend",t),d)r.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),y=(this._lastTime-this._times[0])/1e3,C=u.easeLinearity,D=p.multiplyBy(C/y),A=D.distanceTo([0,0]),k=Math.min(u.inertiaMaxSpeed,A),z=D.multiplyBy(k/A),H=k/(u.inertiaDeceleration*C),Y=z.multiplyBy(-H/2).round();!Y.x&&!Y.y?r.fire("moveend"):(Y=r._limitOffset(Y,r.options.maxBounds),N(function(){r.panBy(Y,{duration:H,easeLinearity:C,noMoveStart:!0,animate:!0})}))}},"_onDragEnd")});st.addInitHook("addHandler","dragging",Xu),st.mergeOptions({keyboard:!0,keyboardPanDelta:80});var tc=Ce.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:s(function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},"initialize"),addHooks:s(function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),K(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},"addHooks"),removeHooks:s(function(){this._removeHooks(),gt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},"removeHooks"),_onMouseDown:s(function(){if(!this._focused){var t=document.body,r=document.documentElement,u=t.scrollTop||r.scrollTop,d=t.scrollLeft||r.scrollLeft;this._map._container.focus(),window.scrollTo(d,u)}},"_onMouseDown"),_onFocus:s(function(){this._focused=!0,this._map.fire("focus")},"_onFocus"),_onBlur:s(function(){this._focused=!1,this._map.fire("blur")},"_onBlur"),_setPanDelta:s(function(t){var r=this._panKeys={},u=this.keyCodes,d,p;for(d=0,p=u.left.length;d<p;d++)r[u.left[d]]=[-1*t,0];for(d=0,p=u.right.length;d<p;d++)r[u.right[d]]=[t,0];for(d=0,p=u.down.length;d<p;d++)r[u.down[d]]=[0,t];for(d=0,p=u.up.length;d<p;d++)r[u.up[d]]=[0,-1*t]},"_setPanDelta"),_setZoomDelta:s(function(t){var r=this._zoomKeys={},u=this.keyCodes,d,p;for(d=0,p=u.zoomIn.length;d<p;d++)r[u.zoomIn[d]]=t;for(d=0,p=u.zoomOut.length;d<p;d++)r[u.zoomOut[d]]=-t},"_setZoomDelta"),_addHooks:s(function(){K(document,"keydown",this._onKeyDown,this)},"_addHooks"),_removeHooks:s(function(){gt(document,"keydown",this._onKeyDown,this)},"_removeHooks"),_onKeyDown:s(function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var r=t.keyCode,u=this._map,d;if(r in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(d=this._panKeys[r],t.shiftKey&&(d=j(d).multiplyBy(3)),u.options.maxBounds&&(d=u._limitOffset(j(d),u.options.maxBounds)),u.options.worldCopyJump){var p=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(d)));u.panTo(p)}else u.panBy(d)}else if(r in this._zoomKeys)u.setZoom(u.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[r]);else if(r===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;li(t)}},"_onKeyDown")});st.addInitHook("addHandler","keyboard",tc),st.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var ec=Ce.extend({addHooks:s(function(){K(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},"addHooks"),removeHooks:s(function(){gt(this._map._container,"wheel",this._onWheelScroll,this)},"removeHooks"),_onWheelScroll:s(function(t){var r=Cu(t),u=this._map.options.wheelDebounceTime;this._delta+=r,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var d=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),d),li(t)},"_onWheelScroll"),_performZoom:s(function(){var t=this._map,r=t.getZoom(),u=this._map.options.zoomSnap||0;t._stop();var d=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(d))))/Math.LN2,y=u?Math.ceil(p/u)*u:p,C=t._limitZoom(r+(this._delta>0?y:-y))-r;this._delta=0,this._startTime=null,C&&(t.options.scrollWheelZoom==="center"?t.setZoom(r+C):t.setZoomAround(this._lastMousePos,r+C))},"_performZoom")});st.addInitHook("addHandler","scrollWheelZoom",ec);var Hp=600;st.mergeOptions({tapHold:Z.touchNative&&Z.safari&&Z.mobile,tapTolerance:15});var ic=Ce.extend({addHooks:s(function(){K(this._map._container,"touchstart",this._onDown,this)},"addHooks"),removeHooks:s(function(){gt(this._map._container,"touchstart",this._onDown,this)},"removeHooks"),_onDown:s(function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var r=t.touches[0];this._startPos=this._newPos=new U(r.clientX,r.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(K(document,"touchend",zt),K(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",r))},this),Hp),K(document,"touchend touchcancel contextmenu",this._cancel,this),K(document,"touchmove",this._onMove,this)}},"_onDown"),_cancelClickPrevent:s(function t(){gt(document,"touchend",zt),gt(document,"touchend touchcancel",t)},"cancelClickPrevent"),_cancel:s(function(){clearTimeout(this._holdTimeout),gt(document,"touchend touchcancel contextmenu",this._cancel,this),gt(document,"touchmove",this._onMove,this)},"_cancel"),_onMove:s(function(t){var r=t.touches[0];this._newPos=new U(r.clientX,r.clientY)},"_onMove"),_isTapValid:s(function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},"_isTapValid"),_simulateEvent:s(function(t,r){var u=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:r.screenX,screenY:r.screenY,clientX:r.clientX,clientY:r.clientY});u._simulated=!0,r.target.dispatchEvent(u)},"_simulateEvent")});st.addInitHook("addHandler","tapHold",ic),st.mergeOptions({touchZoom:Z.touch,bounceAtZoomLimits:!0});var rc=Ce.extend({addHooks:s(function(){J(this._map._container,"leaflet-touch-zoom"),K(this._map._container,"touchstart",this._onTouchStart,this)},"addHooks"),removeHooks:s(function(){Mt(this._map._container,"leaflet-touch-zoom"),gt(this._map._container,"touchstart",this._onTouchStart,this)},"removeHooks"),_onTouchStart:s(function(t){var r=this._map;if(!(!t.touches||t.touches.length!==2||r._animatingZoom||this._zooming)){var u=r.mouseEventToContainerPoint(t.touches[0]),d=r.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=r.getSize()._divideBy(2),this._startLatLng=r.containerPointToLatLng(this._centerPoint),r.options.touchZoom!=="center"&&(this._pinchStartLatLng=r.containerPointToLatLng(u.add(d)._divideBy(2))),this._startDist=u.distanceTo(d),this._startZoom=r.getZoom(),this._moved=!1,this._zooming=!0,r._stop(),K(document,"touchmove",this._onTouchMove,this),K(document,"touchend touchcancel",this._onTouchEnd,this),zt(t)}},"_onTouchStart"),_onTouchMove:s(function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var r=this._map,u=r.mouseEventToContainerPoint(t.touches[0]),d=r.mouseEventToContainerPoint(t.touches[1]),p=u.distanceTo(d)/this._startDist;if(this._zoom=r.getScaleZoom(p,this._startZoom),!r.options.bounceAtZoomLimits&&(this._zoom<r.getMinZoom()&&p<1||this._zoom>r.getMaxZoom()&&p>1)&&(this._zoom=r._limitZoom(this._zoom)),r.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var y=u._add(d)._divideBy(2)._subtract(this._centerPoint);if(p===1&&y.x===0&&y.y===0)return;this._center=r.unproject(r.project(this._pinchStartLatLng,this._zoom).subtract(y),this._zoom)}this._moved||(r._moveStart(!0,!1),this._moved=!0),_t(this._animRequest);var C=l(r._move,r,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=N(C,this,!0),zt(t)}},"_onTouchMove"),_onTouchEnd:s(function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,_t(this._animRequest),gt(document,"touchmove",this._onTouchMove,this),gt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))},"_onTouchEnd")});st.addInitHook("addHandler","touchZoom",rc),st.BoxZoom=Yu,st.DoubleClickZoom=Qu,st.Drag=Xu,st.Keyboard=tc,st.ScrollWheelZoom=ec,st.TapHold=ic,st.TouchZoom=rc,i.Bounds=ot,i.Browser=Z,i.CRS=ze,i.Canvas=Wu,i.Circle=Wa,i.CircleMarker=In,i.Class=X,i.Control=ge,i.DivIcon=ju,i.DivOverlay=xe,i.DomEvent=cp,i.DomUtil=lp,i.Draggable=We,i.Evented=wt,i.FeatureGroup=Ie,i.GeoJSON=Be,i.GridLayer=Zr,i.Handler=Ce,i.Icon=er,i.ImageOverlay=Zn,i.LatLng=it,i.LatLngBounds=St,i.Layer=ve,i.LayerGroup=tr,i.LineUtil=Pp,i.Map=st,i.Marker=zn,i.Mixin=gp,i.Path=Ve,i.Point=U,i.PolyUtil=vp,i.Polygon=ir,i.Polyline=Re,i.Popup=Gn,i.PosAnimation=xu,i.Projection=Lp,i.Rectangle=Ju,i.Renderer=Ne,i.SVG=jr,i.SVGOverlay=Gu,i.TileLayer=nr,i.Tooltip=jn,i.Transformation=ya,i.Util=Pt,i.VideoOverlay=Zu,i.bind=l,i.bounds=Ct,i.canvas=Vu,i.circle=kp,i.circleMarker=Ep,i.control=Br,i.divIcon=Up,i.extend=o,i.featureGroup=Mp,i.geoJSON=Uu,i.geoJson=Fp,i.gridLayer=Zp,i.icon=Ap,i.imageOverlay=zp,i.latLng=nt,i.latLngBounds=vt,i.layerGroup=Dp,i.map=hp,i.marker=Tp,i.point=j,i.polygon=Op,i.polyline=$p,i.popup=Bp,i.rectangle=qp,i.setOptions=x,i.stamp=f,i.svg=Ku,i.svgOverlay=Rp,i.tileLayer=qu,i.tooltip=Np,i.transformation=Er,i.version=n,i.videoOverlay=Ip;var Wp=window.L;i.noConflict=function(){return window.L=Wp,this},window.L=i}))})(Ar,Ar.exports)),Ar.exports}s(xf,"requireLeafletSrc");var jl=xf();const Df=Qa({__proto__:null,default:Zl(jl)},[jl]);(function(){function c(e){return this instanceof c?(this._canvas=e=typeof e=="string"?document.getElementById(e):e,this._ctx=e.getContext("2d"),this._width=e.width,this._height=e.height,this._max=1,void this.clear()):new c(e)}s(c,"t"),c.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:s(function(e,i){return this._data=e,this},"data"),max:s(function(e){return this._max=e,this},"max"),add:s(function(e){return this._data.push(e),this},"add"),clear:s(function(){return this._data=[],this},"clear"),radius:s(function(e,i){i=i||15;var n=this._circle=document.createElement("canvas"),o=n.getContext("2d"),a=this._r=e+i;return n.width=n.height=2*a,o.shadowOffsetX=o.shadowOffsetY=200,o.shadowBlur=i,o.shadowColor="black",o.beginPath(),o.arc(a-200,a-200,e,0,2*Math.PI,!0),o.closePath(),o.fill(),this},"radius"),gradient:s(function(e){var i=document.createElement("canvas"),n=i.getContext("2d"),o=n.createLinearGradient(0,0,0,256);i.width=1,i.height=256;for(var a in e)o.addColorStop(a,e[a]);return n.fillStyle=o,n.fillRect(0,0,1,256),this._grad=n.getImageData(0,0,1,256).data,this},"gradient"),draw:s(function(e){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var i=this._ctx;i.clearRect(0,0,this._width,this._height);for(var n,o=0,a=this._data.length;a>o;o++)n=this._data[o],i.globalAlpha=Math.max(n[2]/this._max,e||.05),i.drawImage(this._circle,n[0]-this._r,n[1]-this._r);var l=i.getImageData(0,0,this._width,this._height);return this._colorize(l.data,this._grad),i.putImageData(l,0,0),this},"draw"),_colorize:s(function(e,i){for(var n,o=3,a=e.length;a>o;o+=4)n=4*e[o],n&&(e[o-3]=i[n],e[o-2]=i[n+1],e[o-1]=i[n+2])},"_colorize")},window.simpleheat=c})(),L.HeatLayer=(L.Layer?L.Layer:L.Class).extend({initialize:s(function(c,e){this._latlngs=c,L.setOptions(this,e)},"initialize"),setLatLngs:s(function(c){return this._latlngs=c,this.redraw()},"setLatLngs"),addLatLng:s(function(c){return this._latlngs.push(c),this.redraw()},"addLatLng"),setOptions:s(function(c){return L.setOptions(this,c),this._heat&&this._updateOptions(),this.redraw()},"setOptions"),redraw:s(function(){return!this._heat||this._frame||this._map._animating||(this._frame=L.Util.requestAnimFrame(this._redraw,this)),this},"redraw"),onAdd:s(function(c){this._map=c,this._canvas||this._initCanvas(),c._panes.overlayPane.appendChild(this._canvas),c.on("moveend",this._reset,this),c.options.zoomAnimation&&L.Browser.any3d&&c.on("zoomanim",this._animateZoom,this),this._reset()},"onAdd"),onRemove:s(function(c){c.getPanes().overlayPane.removeChild(this._canvas),c.off("moveend",this._reset,this),c.options.zoomAnimation&&c.off("zoomanim",this._animateZoom,this)},"onRemove"),addTo:s(function(c){return c.addLayer(this),this},"addTo"),_initCanvas:s(function(){var c=this._canvas=L.DomUtil.create("canvas","leaflet-heatmap-layer leaflet-layer"),e=L.DomUtil.testProp(["transformOrigin","WebkitTransformOrigin","msTransformOrigin"]);c.style[e]="50% 50%";var i=this._map.getSize();c.width=i.x,c.height=i.y;var n=this._map.options.zoomAnimation&&L.Browser.any3d;L.DomUtil.addClass(c,"leaflet-zoom-"+(n?"animated":"hide")),this._heat=simpleheat(c),this._updateOptions()},"_initCanvas"),_updateOptions:s(function(){this._heat.radius(this.options.radius||this._heat.defaultRadius,this.options.blur),this.options.gradient&&this._heat.gradient(this.options.gradient),this.options.max&&this._heat.max(this.options.max)},"_updateOptions"),_reset:s(function(){var c=this._map.containerPointToLayerPoint([0,0]);L.DomUtil.setPosition(this._canvas,c);var e=this._map.getSize();this._heat._width!==e.x&&(this._canvas.width=this._heat._width=e.x),this._heat._height!==e.y&&(this._canvas.height=this._heat._height=e.y),this._redraw()},"_reset"),_redraw:s(function(){var c,e,i,n,o,a,l,h,f,_=[],g=this._heat._r,m=this._map.getSize(),w=new L.Bounds(L.point([-g,-g]),m.add([g,g])),b=this.options.max===void 0?1:this.options.max,S=this.options.maxZoom===void 0?this._map.getMaxZoom():this.options.maxZoom,x=1/Math.pow(2,Math.max(0,Math.min(S-this._map.getZoom(),12))),T=g/2,E=[],O=this._map._getMapPanePos(),I=O.x%T,B=O.y%T;for(c=0,e=this._latlngs.length;e>c;c++)if(i=this._map.latLngToContainerPoint(this._latlngs[c]),w.contains(i)){o=Math.floor((i.x-I)/T)+2,a=Math.floor((i.y-B)/T)+2;var G=this._latlngs[c].alt!==void 0?this._latlngs[c].alt:this._latlngs[c][2]!==void 0?+this._latlngs[c][2]:1;f=G*x,E[a]=E[a]||[],n=E[a][o],n?(n[0]=(n[0]*n[2]+i.x*f)/(n[2]+f),n[1]=(n[1]*n[2]+i.y*f)/(n[2]+f),n[2]+=f):E[a][o]=[i.x,i.y,f]}for(c=0,e=E.length;e>c;c++)if(E[c])for(l=0,h=E[c].length;h>l;l++)n=E[c][l],n&&_.push([Math.round(n[0]),Math.round(n[1]),Math.min(n[2],b)]);this._heat.data(_).draw(this.options.minOpacity),this._frame=null},"_redraw"),_animateZoom:s(function(c){var e=this._map.getZoomScale(c.zoom),i=this._map._getCenterOffset(c.center)._multiplyBy(-e).subtract(this._map._getMapPanePos());L.DomUtil.setTransform?L.DomUtil.setTransform(this._canvas,i,e):this._canvas.style[L.DomUtil.TRANSFORM]=L.DomUtil.getTranslateString(i)+" scale("+e+")"},"_animateZoom")}),L.heatLayer=function(c,e){return new L.HeatLayer(c,e)};const Mf=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var Tr={exports:{}},Af=Tr.exports,ql;function Tf(){return ql||(ql=1,(function(c,e){(function(i,n){n(e)})(Af,function(i){var n=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:s(function(a){L.Util.setOptions(this,a),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var l=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,l?this._withAnimation:this._noAnimation),this._markerCluster=l?L.MarkerCluster:L.MarkerClusterNonAnimated},"initialize"),addLayer:s(function(a){if(a instanceof L.LayerGroup)return this.addLayers([a]);if(!a.getLatLng)return this._nonPointGroup.addLayer(a),this.fire("layeradd",{layer:a}),this;if(!this._map)return this._needsClustering.push(a),this.fire("layeradd",{layer:a}),this;if(this.hasLayer(a))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(a,this._maxZoom),this.fire("layeradd",{layer:a}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var l=a,h=this._zoom;if(a.__parent)for(;l.__parent._zoom>=h;)l=l.__parent;return this._currentShownBounds.contains(l.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(a,l):this._animationAddLayerNonAnimated(a,l)),this},"addLayer"),removeLayer:s(function(a){return a instanceof L.LayerGroup?this.removeLayers([a]):a.getLatLng?this._map?a.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(a)),this._removeLayer(a,!0),this.fire("layerremove",{layer:a}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),a.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(a)&&(this._featureGroup.removeLayer(a),a.clusterShow&&a.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,a)&&this.hasLayer(a)&&this._needsRemoving.push({layer:a,latlng:a._latlng}),this.fire("layerremove",{layer:a}),this):(this._nonPointGroup.removeLayer(a),this.fire("layerremove",{layer:a}),this)},"removeLayer"),addLayers:s(function(a,l){if(!L.Util.isArray(a))return this.addLayer(a);var h=this._featureGroup,f=this._nonPointGroup,_=this.options.chunkedLoading,g=this.options.chunkInterval,m=this.options.chunkProgress,w=a.length,b=0,S=!0,x;if(this._map){var T=new Date().getTime(),E=L.bind(function(){var I=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();b<w;b++){if(_&&b%200===0){var B=new Date().getTime()-I;if(B>g)break}if(x=a[b],x instanceof L.LayerGroup){S&&(a=a.slice(),S=!1),this._extractNonGroupLayers(x,a),w=a.length;continue}if(!x.getLatLng){f.addLayer(x),l||this.fire("layeradd",{layer:x});continue}if(!this.hasLayer(x)&&(this._addLayer(x,this._maxZoom),l||this.fire("layeradd",{layer:x}),x.__parent&&x.__parent.getChildCount()===2)){var G=x.__parent.getAllChildMarkers(),V=G[0]===x?G[1]:G[0];h.removeLayer(V)}}m&&m(b,w,new Date().getTime()-T),b===w?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(E,this.options.chunkDelay)},this);E()}else for(var O=this._needsClustering;b<w;b++){if(x=a[b],x instanceof L.LayerGroup){S&&(a=a.slice(),S=!1),this._extractNonGroupLayers(x,a),w=a.length;continue}if(!x.getLatLng){f.addLayer(x);continue}this.hasLayer(x)||O.push(x)}return this},"addLayers"),removeLayers:s(function(a){var l,h,f=a.length,_=this._featureGroup,g=this._nonPointGroup,m=!0;if(!this._map){for(l=0;l<f;l++){if(h=a[l],h instanceof L.LayerGroup){m&&(a=a.slice(),m=!1),this._extractNonGroupLayers(h,a),f=a.length;continue}this._arraySplice(this._needsClustering,h),g.removeLayer(h),this.hasLayer(h)&&this._needsRemoving.push({layer:h,latlng:h._latlng}),this.fire("layerremove",{layer:h})}return this}if(this._unspiderfy){this._unspiderfy();var w=a.slice(),b=f;for(l=0;l<b;l++){if(h=w[l],h instanceof L.LayerGroup){this._extractNonGroupLayers(h,w),b=w.length;continue}this._unspiderfyLayer(h)}}for(l=0;l<f;l++){if(h=a[l],h instanceof L.LayerGroup){m&&(a=a.slice(),m=!1),this._extractNonGroupLayers(h,a),f=a.length;continue}if(!h.__parent){g.removeLayer(h),this.fire("layerremove",{layer:h});continue}this._removeLayer(h,!0,!0),this.fire("layerremove",{layer:h}),_.hasLayer(h)&&(_.removeLayer(h),h.clusterShow&&h.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},"removeLayers"),clearLayers:s(function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(a){a.off(this._childMarkerEventHandlers,this),delete a.__parent},this),this._map&&this._generateInitialClusters(),this},"clearLayers"),getBounds:s(function(){var a=new L.LatLngBounds;this._topClusterLevel&&a.extend(this._topClusterLevel._bounds);for(var l=this._needsClustering.length-1;l>=0;l--)a.extend(this._needsClustering[l].getLatLng());return a.extend(this._nonPointGroup.getBounds()),a},"getBounds"),eachLayer:s(function(a,l){var h=this._needsClustering.slice(),f=this._needsRemoving,_,g,m;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(h),g=h.length-1;g>=0;g--){for(_=!0,m=f.length-1;m>=0;m--)if(f[m].layer===h[g]){_=!1;break}_&&a.call(l,h[g])}this._nonPointGroup.eachLayer(a,l)},"eachLayer"),getLayers:s(function(){var a=[];return this.eachLayer(function(l){a.push(l)}),a},"getLayers"),getLayer:s(function(a){var l=null;return a=parseInt(a,10),this.eachLayer(function(h){L.stamp(h)===a&&(l=h)}),l},"getLayer"),hasLayer:s(function(a){if(!a)return!1;var l,h=this._needsClustering;for(l=h.length-1;l>=0;l--)if(h[l]===a)return!0;for(h=this._needsRemoving,l=h.length-1;l>=0;l--)if(h[l].layer===a)return!1;return!!(a.__parent&&a.__parent._group===this)||this._nonPointGroup.hasLayer(a)},"hasLayer"),zoomToShowLayer:s(function(a,l){var h=this._map;typeof l!="function"&&(l=s(function(){},"callback"));var f=s(function(){(h.hasLayer(a)||h.hasLayer(a.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",f,this),this.off("animationend",f,this),h.hasLayer(a)?l():a.__parent._icon&&(this.once("spiderfied",l,this),a.__parent.spiderfy()))},"showMarker");a._icon&&this._map.getBounds().contains(a.getLatLng())?l():a.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",f,this),this._map.panTo(a.getLatLng())):(this._map.on("moveend",f,this),this.on("animationend",f,this),a.__parent.zoomToBounds())},"zoomToShowLayer"),onAdd:s(function(a){this._map=a;var l,h,f;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(a),this._nonPointGroup.addTo(a),this._gridClusters||this._generateInitialClusters(),this._maxLat=a.options.crs.projection.MAX_LATITUDE,l=0,h=this._needsRemoving.length;l<h;l++)f=this._needsRemoving[l],f.newlatlng=f.layer._latlng,f.layer._latlng=f.latlng;for(l=0,h=this._needsRemoving.length;l<h;l++)f=this._needsRemoving[l],this._removeLayer(f.layer,!0),f.layer._latlng=f.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),h=this._needsClustering,this._needsClustering=[],this.addLayers(h,!0)},"onAdd"),onRemove:s(function(a){a.off("zoomend",this._zoomEnd,this),a.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},"onRemove"),getVisibleParent:s(function(a){for(var l=a;l&&!l._icon;)l=l.__parent;return l||null},"getVisibleParent"),_arraySplice:s(function(a,l){for(var h=a.length-1;h>=0;h--)if(a[h]===l)return a.splice(h,1),!0},"_arraySplice"),_removeFromGridUnclustered:s(function(a,l){for(var h=this._map,f=this._gridUnclustered,_=Math.floor(this._map.getMinZoom());l>=_&&f[l].removeObject(a,h.project(a.getLatLng(),l));l--);},"_removeFromGridUnclustered"),_childMarkerDragStart:s(function(a){a.target.__dragStart=a.target._latlng},"_childMarkerDragStart"),_childMarkerMoved:s(function(a){if(!this._ignoreMove&&!a.target.__dragStart){var l=a.target._popup&&a.target._popup.isOpen();this._moveChild(a.target,a.oldLatLng,a.latlng),l&&a.target.openPopup()}},"_childMarkerMoved"),_moveChild:s(function(a,l,h){a._latlng=l,this.removeLayer(a),a._latlng=h,this.addLayer(a)},"_moveChild"),_childMarkerDragEnd:s(function(a){var l=a.target.__dragStart;delete a.target.__dragStart,l&&this._moveChild(a.target,l,a.target._latlng)},"_childMarkerDragEnd"),_removeLayer:s(function(a,l,h){var f=this._gridClusters,_=this._gridUnclustered,g=this._featureGroup,m=this._map,w=Math.floor(this._map.getMinZoom());l&&this._removeFromGridUnclustered(a,this._maxZoom);var b=a.__parent,S=b._markers,x;for(this._arraySplice(S,a);b&&(b._childCount--,b._boundsNeedUpdate=!0,!(b._zoom<w));)l&&b._childCount<=1?(x=b._markers[0]===a?b._markers[1]:b._markers[0],f[b._zoom].removeObject(b,m.project(b._cLatLng,b._zoom)),_[b._zoom].addObject(x,m.project(x.getLatLng(),b._zoom)),this._arraySplice(b.__parent._childClusters,b),b.__parent._markers.push(x),x.__parent=b.__parent,b._icon&&(g.removeLayer(b),h||g.addLayer(x))):b._iconNeedsUpdate=!0,b=b.__parent;delete a.__parent},"_removeLayer"),_isOrIsParent:s(function(a,l){for(;l;){if(a===l)return!0;l=l.parentNode}return!1},"_isOrIsParent"),fire:s(function(a,l,h){if(l&&l.layer instanceof L.MarkerCluster){if(l.originalEvent&&this._isOrIsParent(l.layer._icon,l.originalEvent.relatedTarget))return;a="cluster"+a}L.FeatureGroup.prototype.fire.call(this,a,l,h)},"fire"),listens:s(function(a,l){return L.FeatureGroup.prototype.listens.call(this,a,l)||L.FeatureGroup.prototype.listens.call(this,"cluster"+a,l)},"listens"),_defaultIconCreateFunction:s(function(a){var l=a.getChildCount(),h=" marker-cluster-";return l<10?h+="small":l<100?h+="medium":h+="large",new L.DivIcon({html:"<div><span>"+l+"</span></div>",className:"marker-cluster"+h,iconSize:new L.Point(40,40)})},"_defaultIconCreateFunction"),_bindEvents:s(function(){var a=this._map,l=this.options.spiderfyOnMaxZoom,h=this.options.showCoverageOnHover,f=this.options.zoomToBoundsOnClick,_=this.options.spiderfyOnEveryZoom;(l||f||_)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),h&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),a.on("zoomend",this._hideCoverage,this))},"_bindEvents"),_zoomOrSpiderfy:s(function(a){var l=a.layer,h=l;if(!(a.type==="clusterkeypress"&&a.originalEvent&&a.originalEvent.keyCode!==13)){for(;h._childClusters.length===1;)h=h._childClusters[0];h._zoom===this._maxZoom&&h._childCount===l._childCount&&this.options.spiderfyOnMaxZoom?l.spiderfy():this.options.zoomToBoundsOnClick&&l.zoomToBounds(),this.options.spiderfyOnEveryZoom&&l.spiderfy(),a.originalEvent&&a.originalEvent.keyCode===13&&this._map._container.focus()}},"_zoomOrSpiderfy"),_showCoverage:s(function(a){var l=this._map;this._inZoomAnimation||(this._shownPolygon&&l.removeLayer(this._shownPolygon),a.layer.getChildCount()>2&&a.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(a.layer.getConvexHull(),this.options.polygonOptions),l.addLayer(this._shownPolygon)))},"_showCoverage"),_hideCoverage:s(function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},"_hideCoverage"),_unbindEvents:s(function(){var a=this.options.spiderfyOnMaxZoom,l=this.options.showCoverageOnHover,h=this.options.zoomToBoundsOnClick,f=this.options.spiderfyOnEveryZoom,_=this._map;(a||h||f)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),l&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),_.off("zoomend",this._hideCoverage,this))},"_unbindEvents"),_zoomEnd:s(function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},"_zoomEnd"),_moveEnd:s(function(){if(!this._inZoomAnimation){var a=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,a),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),a),this._currentShownBounds=a}},"_moveEnd"),_generateInitialClusters:s(function(){var a=Math.ceil(this._map.getMaxZoom()),l=Math.floor(this._map.getMinZoom()),h=this.options.maxClusterRadius,f=h;typeof h!="function"&&(f=s(function(){return h},"radiusFn")),this.options.disableClusteringAtZoom!==null&&(a=this.options.disableClusteringAtZoom-1),this._maxZoom=a,this._gridClusters={},this._gridUnclustered={};for(var _=a;_>=l;_--)this._gridClusters[_]=new L.DistanceGrid(f(_)),this._gridUnclustered[_]=new L.DistanceGrid(f(_));this._topClusterLevel=new this._markerCluster(this,l-1)},"_generateInitialClusters"),_addLayer:s(function(a,l){var h=this._gridClusters,f=this._gridUnclustered,_=Math.floor(this._map.getMinZoom()),g,m;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(a),a.on(this._childMarkerEventHandlers,this);l>=_;l--){g=this._map.project(a.getLatLng(),l);var w=h[l].getNearObject(g);if(w){w._addChild(a),a.__parent=w;return}if(w=f[l].getNearObject(g),w){var b=w.__parent;b&&this._removeLayer(w,!1);var S=new this._markerCluster(this,l,w,a);h[l].addObject(S,this._map.project(S._cLatLng,l)),w.__parent=S,a.__parent=S;var x=S;for(m=l-1;m>b._zoom;m--)x=new this._markerCluster(this,m,x),h[m].addObject(x,this._map.project(w.getLatLng(),m));b._addChild(x),this._removeFromGridUnclustered(w,l);return}f[l].addObject(a,g)}this._topClusterLevel._addChild(a),a.__parent=this._topClusterLevel},"_addLayer"),_refreshClustersIcons:s(function(){this._featureGroup.eachLayer(function(a){a instanceof L.MarkerCluster&&a._iconNeedsUpdate&&a._updateIcon()})},"_refreshClustersIcons"),_enqueue:s(function(a){this._queue.push(a),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},"_enqueue"),_processQueue:s(function(){for(var a=0;a<this._queue.length;a++)this._queue[a].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},"_processQueue"),_mergeSplitClusters:s(function(){var a=Math.round(this._map._zoom);this._processQueue(),this._zoom<a&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,a)):this._zoom>a?(this._animationStart(),this._animationZoomOut(this._zoom,a)):this._moveEnd()},"_mergeSplitClusters"),_getExpandedVisibleBounds:s(function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},"_getExpandedVisibleBounds"),_checkBoundsMaxLat:s(function(a){var l=this._maxLat;return l!==void 0&&(a.getNorth()>=l&&(a._northEast.lat=1/0),a.getSouth()<=-l&&(a._southWest.lat=-1/0)),a},"_checkBoundsMaxLat"),_animationAddLayerNonAnimated:s(function(a,l){if(l===a)this._featureGroup.addLayer(a);else if(l._childCount===2){l._addToMap();var h=l.getAllChildMarkers();this._featureGroup.removeLayer(h[0]),this._featureGroup.removeLayer(h[1])}else l._updateIcon()},"_animationAddLayerNonAnimated"),_extractNonGroupLayers:s(function(a,l){var h=a.getLayers(),f=0,_;for(l=l||[];f<h.length;f++){if(_=h[f],_ instanceof L.LayerGroup){this._extractNonGroupLayers(_,l);continue}l.push(_)}return l},"_extractNonGroupLayers"),_overrideMarkerIcon:s(function(a){var l=a.options.icon=this.options.iconCreateFunction({getChildCount:s(function(){return 1},"getChildCount"),getAllChildMarkers:s(function(){return[a]},"getAllChildMarkers")});return l},"_overrideMarkerIcon")});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:s(function(){},"_animationStart"),_animationZoomIn:s(function(a,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),a),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},"_animationZoomIn"),_animationZoomOut:s(function(a,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),a),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},"_animationZoomOut"),_animationAddLayer:s(function(a,l){this._animationAddLayerNonAnimated(a,l)},"_animationAddLayer")},_withAnimation:{_animationStart:s(function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},"_animationStart"),_animationZoomIn:s(function(a,l){var h=this._getExpandedVisibleBounds(),f=this._featureGroup,_=Math.floor(this._map.getMinZoom()),g;this._ignoreMove=!0,this._topClusterLevel._recursively(h,a,_,function(m){var w=m._latlng,b=m._markers,S;for(h.contains(w)||(w=null),m._isSingleParent()&&a+1===l?(f.removeLayer(m),m._recursivelyAddChildrenToMap(null,l,h)):(m.clusterHide(),m._recursivelyAddChildrenToMap(w,l,h)),g=b.length-1;g>=0;g--)S=b[g],h.contains(S._latlng)||f.removeLayer(S)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(h,l),f.eachLayer(function(m){!(m instanceof L.MarkerCluster)&&m._icon&&m.clusterShow()}),this._topClusterLevel._recursively(h,a,l,function(m){m._recursivelyRestoreChildPositions(l)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(h,a,_,function(m){f.removeLayer(m),m.clusterShow()}),this._animationEnd()})},"_animationZoomIn"),_animationZoomOut:s(function(a,l){this._animationZoomOutSingle(this._topClusterLevel,a-1,l),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),a,this._getExpandedVisibleBounds())},"_animationZoomOut"),_animationAddLayer:s(function(a,l){var h=this,f=this._featureGroup;f.addLayer(a),l!==a&&(l._childCount>2?(l._updateIcon(),this._forceLayout(),this._animationStart(),a._setPos(this._map.latLngToLayerPoint(l.getLatLng())),a.clusterHide(),this._enqueue(function(){f.removeLayer(a),a.clusterShow(),h._animationEnd()})):(this._forceLayout(),h._animationStart(),h._animationZoomOutSingle(l,this._map.getMaxZoom(),this._zoom)))},"_animationAddLayer")},_animationZoomOutSingle:s(function(a,l,h){var f=this._getExpandedVisibleBounds(),_=Math.floor(this._map.getMinZoom());a._recursivelyAnimateChildrenInAndAddSelfToMap(f,_,l+1,h);var g=this;this._forceLayout(),a._recursivelyBecomeVisible(f,h),this._enqueue(function(){if(a._childCount===1){var m=a._markers[0];this._ignoreMove=!0,m.setLatLng(m.getLatLng()),this._ignoreMove=!1,m.clusterShow&&m.clusterShow()}else a._recursively(f,h,_,function(w){w._recursivelyRemoveChildrenFromMap(f,_,l+1)});g._animationEnd()})},"_animationZoomOutSingle"),_animationEnd:s(function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},"_animationEnd"),_forceLayout:s(function(){L.Util.falseFn(document.body.offsetWidth)},"_forceLayout")}),L.markerClusterGroup=function(a){return new L.MarkerClusterGroup(a)};var o=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:s(function(a,l,h,f){L.Marker.prototype.initialize.call(this,h?h._cLatLng||h.getLatLng():new L.LatLng(0,0),{icon:this,pane:a.options.clusterPane}),this._group=a,this._zoom=l,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,h&&this._addChild(h),f&&this._addChild(f)},"initialize"),getAllChildMarkers:s(function(a,l){a=a||[];for(var h=this._childClusters.length-1;h>=0;h--)this._childClusters[h].getAllChildMarkers(a,l);for(var f=this._markers.length-1;f>=0;f--)l&&this._markers[f].__dragStart||a.push(this._markers[f]);return a},"getAllChildMarkers"),getChildCount:s(function(){return this._childCount},"getChildCount"),zoomToBounds:s(function(a){for(var l=this._childClusters.slice(),h=this._group._map,f=h.getBoundsZoom(this._bounds),_=this._zoom+1,g=h.getZoom(),m;l.length>0&&f>_;){_++;var w=[];for(m=0;m<l.length;m++)w=w.concat(l[m]._childClusters);l=w}f>_?this._group._map.setView(this._latlng,_):f<=g?this._group._map.setView(this._latlng,g+1):this._group._map.fitBounds(this._bounds,a)},"zoomToBounds"),getBounds:s(function(){var a=new L.LatLngBounds;return a.extend(this._bounds),a},"getBounds"),_updateIcon:s(function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},"_updateIcon"),createIcon:s(function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},"createIcon"),createShadow:s(function(){return this._iconObj.createShadow()},"createShadow"),_addChild:s(function(a,l){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(a),a instanceof L.MarkerCluster?(l||(this._childClusters.push(a),a.__parent=this),this._childCount+=a._childCount):(l||this._markers.push(a),this._childCount++),this.__parent&&this.__parent._addChild(a,!0)},"_addChild"),_setClusterCenter:s(function(a){this._cLatLng||(this._cLatLng=a._cLatLng||a._latlng)},"_setClusterCenter"),_resetBounds:s(function(){var a=this._bounds;a._southWest&&(a._southWest.lat=1/0,a._southWest.lng=1/0),a._northEast&&(a._northEast.lat=-1/0,a._northEast.lng=-1/0)},"_resetBounds"),_recalculateBounds:s(function(){var a=this._markers,l=this._childClusters,h=0,f=0,_=this._childCount,g,m,w,b;if(_!==0){for(this._resetBounds(),g=0;g<a.length;g++)w=a[g]._latlng,this._bounds.extend(w),h+=w.lat,f+=w.lng;for(g=0;g<l.length;g++)m=l[g],m._boundsNeedUpdate&&m._recalculateBounds(),this._bounds.extend(m._bounds),w=m._wLatLng,b=m._childCount,h+=w.lat*b,f+=w.lng*b;this._latlng=this._wLatLng=new L.LatLng(h/_,f/_),this._boundsNeedUpdate=!1}},"_recalculateBounds"),_addToMap:s(function(a){a&&(this._backupLatlng=this._latlng,this.setLatLng(a)),this._group._featureGroup.addLayer(this)},"_addToMap"),_recursivelyAnimateChildrenIn:s(function(a,l,h){this._recursively(a,this._group._map.getMinZoom(),h-1,function(f){var _=f._markers,g,m;for(g=_.length-1;g>=0;g--)m=_[g],m._icon&&(m._setPos(l),m.clusterHide())},function(f){var _=f._childClusters,g,m;for(g=_.length-1;g>=0;g--)m=_[g],m._icon&&(m._setPos(l),m.clusterHide())})},"_recursivelyAnimateChildrenIn"),_recursivelyAnimateChildrenInAndAddSelfToMap:s(function(a,l,h,f){this._recursively(a,f,l,function(_){_._recursivelyAnimateChildrenIn(a,_._group._map.latLngToLayerPoint(_.getLatLng()).round(),h),_._isSingleParent()&&h-1===f?(_.clusterShow(),_._recursivelyRemoveChildrenFromMap(a,l,h)):_.clusterHide(),_._addToMap()})},"_recursivelyAnimateChildrenInAndAddSelfToMap"),_recursivelyBecomeVisible:s(function(a,l){this._recursively(a,this._group._map.getMinZoom(),l,null,function(h){h.clusterShow()})},"_recursivelyBecomeVisible"),_recursivelyAddChildrenToMap:s(function(a,l,h){this._recursively(h,this._group._map.getMinZoom()-1,l,function(f){if(l!==f._zoom)for(var _=f._markers.length-1;_>=0;_--){var g=f._markers[_];h.contains(g._latlng)&&(a&&(g._backupLatlng=g.getLatLng(),g.setLatLng(a),g.clusterHide&&g.clusterHide()),f._group._featureGroup.addLayer(g))}},function(f){f._addToMap(a)})},"_recursivelyAddChildrenToMap"),_recursivelyRestoreChildPositions:s(function(a){for(var l=this._markers.length-1;l>=0;l--){var h=this._markers[l];h._backupLatlng&&(h.setLatLng(h._backupLatlng),delete h._backupLatlng)}if(a-1===this._zoom)for(var f=this._childClusters.length-1;f>=0;f--)this._childClusters[f]._restorePosition();else for(var _=this._childClusters.length-1;_>=0;_--)this._childClusters[_]._recursivelyRestoreChildPositions(a)},"_recursivelyRestoreChildPositions"),_restorePosition:s(function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},"_restorePosition"),_recursivelyRemoveChildrenFromMap:s(function(a,l,h,f){var _,g;this._recursively(a,l-1,h-1,function(m){for(g=m._markers.length-1;g>=0;g--)_=m._markers[g],(!f||!f.contains(_._latlng))&&(m._group._featureGroup.removeLayer(_),_.clusterShow&&_.clusterShow())},function(m){for(g=m._childClusters.length-1;g>=0;g--)_=m._childClusters[g],(!f||!f.contains(_._latlng))&&(m._group._featureGroup.removeLayer(_),_.clusterShow&&_.clusterShow())})},"_recursivelyRemoveChildrenFromMap"),_recursively:s(function(a,l,h,f,_){var g=this._childClusters,m=this._zoom,w,b;if(l<=m&&(f&&f(this),_&&m===h&&_(this)),m<l||m<h)for(w=g.length-1;w>=0;w--)b=g[w],b._boundsNeedUpdate&&b._recalculateBounds(),a.intersects(b._bounds)&&b._recursively(a,l,h,f,_)},"_recursively"),_isSingleParent:s(function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount},"_isSingleParent")});L.Marker.include({clusterHide:s(function(){var a=this.options.opacity;return this.setOpacity(0),this.options.opacity=a,this},"clusterHide"),clusterShow:s(function(){return this.setOpacity(this.options.opacity)},"clusterShow")}),L.DistanceGrid=function(a){this._cellSize=a,this._sqCellSize=a*a,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:s(function(a,l){var h=this._getCoord(l.x),f=this._getCoord(l.y),_=this._grid,g=_[f]=_[f]||{},m=g[h]=g[h]||[],w=L.Util.stamp(a);this._objectPoint[w]=l,m.push(a)},"addObject"),updateObject:s(function(a,l){this.removeObject(a),this.addObject(a,l)},"updateObject"),removeObject:s(function(a,l){var h=this._getCoord(l.x),f=this._getCoord(l.y),_=this._grid,g=_[f]=_[f]||{},m=g[h]=g[h]||[],w,b;for(delete this._objectPoint[L.Util.stamp(a)],w=0,b=m.length;w<b;w++)if(m[w]===a)return m.splice(w,1),b===1&&delete g[h],!0},"removeObject"),eachObject:s(function(a,l){var h,f,_,g,m,w,b,S=this._grid;for(h in S){m=S[h];for(f in m)for(w=m[f],_=0,g=w.length;_<g;_++)b=a.call(l,w[_]),b&&(_--,g--)}},"eachObject"),getNearObject:s(function(a){var l=this._getCoord(a.x),h=this._getCoord(a.y),f,_,g,m,w,b,S,x,T=this._objectPoint,E=this._sqCellSize,O=null;for(f=h-1;f<=h+1;f++)if(m=this._grid[f],m){for(_=l-1;_<=l+1;_++)if(w=m[_],w)for(g=0,b=w.length;g<b;g++)S=w[g],x=this._sqDist(T[L.Util.stamp(S)],a),(x<E||x<=E&&O===null)&&(E=x,O=S)}return O},"getNearObject"),_getCoord:s(function(a){var l=Math.floor(a/this._cellSize);return isFinite(l)?l:a},"_getCoord"),_sqDist:s(function(a,l){var h=l.x-a.x,f=l.y-a.y;return h*h+f*f},"_sqDist")},(function(){L.QuickHull={getDistant:s(function(a,l){var h=l[1].lat-l[0].lat,f=l[0].lng-l[1].lng;return f*(a.lat-l[0].lat)+h*(a.lng-l[0].lng)},"getDistant"),findMostDistantPointFromBaseLine:s(function(a,l){var h=0,f=null,_=[],g,m,w;for(g=l.length-1;g>=0;g--){if(m=l[g],w=this.getDistant(m,a),w>0)_.push(m);else continue;w>h&&(h=w,f=m)}return{maxPoint:f,newPoints:_}},"findMostDistantPointFromBaseLine"),buildConvexHull:s(function(a,l){var h=[],f=this.findMostDistantPointFromBaseLine(a,l);return f.maxPoint?(h=h.concat(this.buildConvexHull([a[0],f.maxPoint],f.newPoints)),h=h.concat(this.buildConvexHull([f.maxPoint,a[1]],f.newPoints)),h):[a[0]]},"buildConvexHull"),getConvexHull:s(function(a){var l=!1,h=!1,f=!1,_=!1,g=null,m=null,w=null,b=null,S=null,x=null,T;for(T=a.length-1;T>=0;T--){var E=a[T];(l===!1||E.lat>l)&&(g=E,l=E.lat),(h===!1||E.lat<h)&&(m=E,h=E.lat),(f===!1||E.lng>f)&&(w=E,f=E.lng),(_===!1||E.lng<_)&&(b=E,_=E.lng)}h!==l?(x=m,S=g):(x=b,S=w);var O=[].concat(this.buildConvexHull([x,S],a),this.buildConvexHull([S,x],a));return O},"getConvexHull")}})(),L.MarkerCluster.include({getConvexHull:s(function(){var a=this.getAllChildMarkers(),l=[],h,f;for(f=a.length-1;f>=0;f--)h=a[f].getLatLng(),l.push(h);return L.QuickHull.getConvexHull(l)},"getConvexHull")}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:s(function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var a=this.getAllChildMarkers(null,!0),l=this._group,h=l._map,f=h.latLngToLayerPoint(this._latlng),_;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?_=this._group.options.spiderfyShapePositions(a.length,f):a.length>=this._circleSpiralSwitchover?_=this._generatePointsSpiral(a.length,f):(f.y+=10,_=this._generatePointsCircle(a.length,f)),this._animationSpiderfy(a,_)}},"spiderfy"),unspiderfy:s(function(a){this._group._inZoomAnimation||(this._animationUnspiderfy(a),this._group._spiderfied=null)},"unspiderfy"),_generatePointsCircle:s(function(a,l){var h=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+a),f=h/this._2PI,_=this._2PI/a,g=[],m,w;for(f=Math.max(f,35),g.length=a,m=0;m<a;m++)w=this._circleStartAngle+m*_,g[m]=new L.Point(l.x+f*Math.cos(w),l.y+f*Math.sin(w))._round();return g},"_generatePointsCircle"),_generatePointsSpiral:s(function(a,l){var h=this._group.options.spiderfyDistanceMultiplier,f=h*this._spiralLengthStart,_=h*this._spiralFootSeparation,g=h*this._spiralLengthFactor*this._2PI,m=0,w=[],b;for(w.length=a,b=a;b>=0;b--)b<a&&(w[b]=new L.Point(l.x+f*Math.cos(m),l.y+f*Math.sin(m))._round()),m+=_/f+b*5e-4,f+=g/m;return w},"_generatePointsSpiral"),_noanimationUnspiderfy:s(function(){var a=this._group,l=a._map,h=a._featureGroup,f=this.getAllChildMarkers(null,!0),_,g;for(a._ignoreMove=!0,this.setOpacity(1),g=f.length-1;g>=0;g--)_=f[g],h.removeLayer(_),_._preSpiderfyLatlng&&(_.setLatLng(_._preSpiderfyLatlng),delete _._preSpiderfyLatlng),_.setZIndexOffset&&_.setZIndexOffset(0),_._spiderLeg&&(l.removeLayer(_._spiderLeg),delete _._spiderLeg);a.fire("unspiderfied",{cluster:this,markers:f}),a._ignoreMove=!1,a._spiderfied=null},"_noanimationUnspiderfy")}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:s(function(a,l){var h=this._group,f=h._map,_=h._featureGroup,g=this._group.options.spiderLegPolylineOptions,m,w,b,S;for(h._ignoreMove=!0,m=0;m<a.length;m++)S=f.layerPointToLatLng(l[m]),w=a[m],b=new L.Polyline([this._latlng,S],g),f.addLayer(b),w._spiderLeg=b,w._preSpiderfyLatlng=w._latlng,w.setLatLng(S),w.setZIndexOffset&&w.setZIndexOffset(1e6),_.addLayer(w);this.setOpacity(.3),h._ignoreMove=!1,h.fire("spiderfied",{cluster:this,markers:a})},"_animationSpiderfy"),_animationUnspiderfy:s(function(){this._noanimationUnspiderfy()},"_animationUnspiderfy")}),L.MarkerCluster.include({_animationSpiderfy:s(function(a,l){var h=this,f=this._group,_=f._map,g=f._featureGroup,m=this._latlng,w=_.latLngToLayerPoint(m),b=L.Path.SVG,S=L.extend({},this._group.options.spiderLegPolylineOptions),x=S.opacity,T,E,O,I,B,G;for(x===void 0&&(x=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),b?(S.opacity=0,S.className=(S.className||"")+" leaflet-cluster-spider-leg"):S.opacity=x,f._ignoreMove=!0,T=0;T<a.length;T++)E=a[T],G=_.layerPointToLatLng(l[T]),O=new L.Polyline([m,G],S),_.addLayer(O),E._spiderLeg=O,b&&(I=O._path,B=I.getTotalLength()+.1,I.style.strokeDasharray=B,I.style.strokeDashoffset=B),E.setZIndexOffset&&E.setZIndexOffset(1e6),E.clusterHide&&E.clusterHide(),g.addLayer(E),E._setPos&&E._setPos(w);for(f._forceLayout(),f._animationStart(),T=a.length-1;T>=0;T--)G=_.layerPointToLatLng(l[T]),E=a[T],E._preSpiderfyLatlng=E._latlng,E.setLatLng(G),E.clusterShow&&E.clusterShow(),b&&(O=E._spiderLeg,I=O._path,I.style.strokeDashoffset=0,O.setStyle({opacity:x}));this.setOpacity(.3),f._ignoreMove=!1,setTimeout(function(){f._animationEnd(),f.fire("spiderfied",{cluster:h,markers:a})},200)},"_animationSpiderfy"),_animationUnspiderfy:s(function(a){var l=this,h=this._group,f=h._map,_=h._featureGroup,g=a?f._latLngToNewLayerPoint(this._latlng,a.zoom,a.center):f.latLngToLayerPoint(this._latlng),m=this.getAllChildMarkers(null,!0),w=L.Path.SVG,b,S,x,T,E,O;for(h._ignoreMove=!0,h._animationStart(),this.setOpacity(1),S=m.length-1;S>=0;S--)b=m[S],b._preSpiderfyLatlng&&(b.closePopup(),b.setLatLng(b._preSpiderfyLatlng),delete b._preSpiderfyLatlng,O=!0,b._setPos&&(b._setPos(g),O=!1),b.clusterHide&&(b.clusterHide(),O=!1),O&&_.removeLayer(b),w&&(x=b._spiderLeg,T=x._path,E=T.getTotalLength()+.1,T.style.strokeDashoffset=E,x.setStyle({opacity:0})));h._ignoreMove=!1,setTimeout(function(){var I=0;for(S=m.length-1;S>=0;S--)b=m[S],b._spiderLeg&&I++;for(S=m.length-1;S>=0;S--)b=m[S],b._spiderLeg&&(b.clusterShow&&b.clusterShow(),b.setZIndexOffset&&b.setZIndexOffset(0),I>1&&_.removeLayer(b),f.removeLayer(b._spiderLeg),delete b._spiderLeg);h._animationEnd(),h.fire("unspiderfied",{cluster:l,markers:m})},200)},"_animationUnspiderfy")}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:s(function(){this._unspiderfy.apply(this,arguments)},"unspiderfy"),_spiderfierOnAdd:s(function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},"_spiderfierOnAdd"),_spiderfierOnRemove:s(function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},"_spiderfierOnRemove"),_unspiderfyZoomStart:s(function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},"_unspiderfyZoomStart"),_unspiderfyZoomAnim:s(function(a){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(a))},"_unspiderfyZoomAnim"),_unspiderfyWrapper:s(function(){this._unspiderfy()},"_unspiderfyWrapper"),_unspiderfy:s(function(a){this._spiderfied&&this._spiderfied.unspiderfy(a)},"_unspiderfy"),_noanimationUnspiderfy:s(function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},"_noanimationUnspiderfy"),_unspiderfyLayer:s(function(a){a._spiderLeg&&(this._featureGroup.removeLayer(a),a.clusterShow&&a.clusterShow(),a.setZIndexOffset&&a.setZIndexOffset(0),this._map.removeLayer(a._spiderLeg),delete a._spiderLeg)},"_unspiderfyLayer")}),L.MarkerClusterGroup.include({refreshClusters:s(function(a){return a?a instanceof L.MarkerClusterGroup?a=a._topClusterLevel.getAllChildMarkers():a instanceof L.LayerGroup?a=a._layers:a instanceof L.MarkerCluster?a=a.getAllChildMarkers():a instanceof L.Marker&&(a=[a]):a=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(a),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(a),this},"refreshClusters"),_flagParentsIconsNeedUpdate:s(function(a){var l,h;for(l in a)for(h=a[l].__parent;h;)h._iconNeedsUpdate=!0,h=h.__parent},"_flagParentsIconsNeedUpdate"),_refreshSingleMarkerModeMarkers:s(function(a){var l,h;for(l in a)h=a[l],this.hasLayer(h)&&h.setIcon(this._overrideMarkerIcon(h))},"_refreshSingleMarkerModeMarkers")}),L.Marker.include({refreshIconOptions:s(function(a,l){var h=this.options.icon;return L.setOptions(h,a),this.setIcon(h),l&&this.__parent&&this.__parent._group.refreshClusters(this),this},"refreshIconOptions")}),i.MarkerClusterGroup=n,i.MarkerCluster=o,Object.defineProperty(i,"__esModule",{value:!0})})})(Tr,Tr.exports)),Tr.exports}s(Tf,"requireLeaflet_markerclusterSrc");var Hl=Tf();const Ef=Qa({__proto__:null,default:Zl(Hl)},[Hl]);v.DATA_EVENTS=Wt,v.SourceSubscriberMixin=Ae,v.aggregateByLabel=Nl,v.computeAggregation=Ts,v.dispatchDataError=Qt,v.dispatchDataLoaded=qt,v.dispatchDataLoading=fe,v.extractLabelValues=Bl,v.formatCurrency=Wo,v.formatDate=Ch,v.formatNumber=on,v.formatPercentage=Ho,v.formatValue=As,v.getAdapter=qo,v.getByPath=W,v.getByPathOrDefault=Bc,v.getDataCache=Me,v.hasPath=Rc,v.parseExpression=Vo,v.processChartData=Lf,v.registerAdapter=ch,v.sortByValue=Ul,v.subscribeToSource=ei,Object.defineProperty(v,Symbol.toStringTag,{value:"Module"})}));
