function t(t,e,i,n){var o,s=arguments.length,r=s<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,i,r):o(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let s=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,f=globalThis,g=f.trustedTypes,_=g?g.emptyScript:"",m=f.reactiveElementPolyfillSupport,u=(t,e)=>t,y={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>!a(t,e),b={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:v};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const s=n?.call(this);o?.call(this,e),this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(u("elementProperties")))return;const t=p(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(u("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(u("properties"))){const t=this.properties,e=[...h(t),...d(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(i)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,n=i._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=i.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:y;this._$Em=n;const s=o.fromAttribute(e,t.type);this[n]=s??this._$Ej?.get(n)??s,this._$Em=null}}requestUpdate(t,e,i,n=!1,o){if(void 0!==t){const s=this.constructor;if(!1===n&&(o=this[t]),i??=s.getPropertyOptions(t),!((i.hasChanged??v)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:o},s){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),!0!==o||void 0!==s)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,i,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[u("elementProperties")]=new Map,$[u("finalized")]=new Map,m?.({ReactiveElement:$}),(f.reactiveElementVersions??=[]).push("2.1.2");const w=globalThis,x=t=>t,A=w.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+E,O=`<${C}>`,z=document,P=()=>z.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,T="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,V=z.createTreeWalker(z,129);function J(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,n=[];let o,s=2===e?"<svg>":3===e?"<math>":"",r=U;for(let e=0;e<i;e++){const i=t[e];let a,c,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,c=r.exec(i),null!==c);)h=r.lastIndex,r===U?"!--"===c[1]?r=R:void 0!==c[1]?r=H:void 0!==c[2]?(D.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=N):void 0!==c[3]&&(r=N):r===N?">"===c[0]?(r=o??U,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?N:'"'===c[3]?L:I):r===L||r===I?r=N:r===R||r===H?r=U:(r=N,o=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";s+=r===U?i+O:l>=0?(n.push(a),i.slice(0,l)+S+i.slice(l)+E+d):i+E+(-2===l?e:d)}return[J(t,s+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class K{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let o=0,s=0;const r=t.length-1,a=this.parts,[c,l]=G(t,e);if(this.el=K.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=V.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(S)){const e=l[s++],i=n.getAttribute(t).split(E),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?tt:"?"===r[1]?et:"@"===r[1]?it:X}),n.removeAttribute(t)}else t.startsWith(E)&&(a.push({type:6,index:o}),n.removeAttribute(t));if(D.test(n.tagName)){const t=n.textContent.split(E),e=t.length-1;if(e>0){n.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],P()),V.nextNode(),a.push({type:2,index:++o});n.append(t[e],P())}}}else if(8===n.nodeType)if(n.data===C)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(E,t+1));)a.push({type:7,index:o}),t+=E.length-1}o++}}static createElement(t,e){const i=z.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,n){if(e===B)return e;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const s=M(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),void 0===s?o=void 0:(o=new s(t),o._$AT(t,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,n)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=(t?.creationScope??z).importNode(e,!0);V.currentNode=n;let o=V.nextNode(),s=0,r=0,a=i[0];for(;void 0!==a;){if(s===a.index){let e;2===a.type?e=new Q(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new nt(o,this,t)),this._$AV.push(e),a=i[++r]}s!==a?.index&&(o=V.nextNode(),s++)}return V.currentNode=z,n}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),M(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(z.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=K.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Y(n,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new K(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const o of t)n===e.length?e.push(i=new Q(this.O(P()),this.O(P()),this,this.options)):i=e[n],i._$AI(o),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=x(t).nextSibling;x(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,n){const o=this.strings;let s=!1;if(void 0===o)t=Z(this,t,e,0),s=!M(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const n=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Z(this,n[i+r],e,r),a===B&&(a=this._$AH[r]),s||=!M(a)||a!==this._$AH[r],a===W?t=W:t!==W&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends X{constructor(t,e,i,n,o){super(t,e,i,n,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??W)===B)return;const i=this._$AH,n=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==W&&(i===W||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=w.litHtmlPolyfillSupport;ot?.(K,Q),(w.litHtmlVersions??=[]).push("3.3.2");const st=globalThis;class rt extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const n=i?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=i?.renderBefore??null;n._$litPart$=o=new Q(e.insertBefore(P(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}rt._$litElement$=!0,rt.finalized=!0,st.litElementHydrateSupport?.({LitElement:rt});const at=st.litElementPolyfillSupport;at?.({LitElement:rt}),(st.litElementVersions??=[]).push("4.2.2");const ct=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:v},ht=(t=lt,e,i)=>{const{kind:n,metadata:o}=i;let s=globalThis.litPropertyMetadata.get(o);if(void 0===s&&globalThis.litPropertyMetadata.set(o,s=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),s.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t,!0,i)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t,!0,i)}}throw Error("Unsupported decorator location: "+n)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function pt(t){return dt({...t,state:!0,attribute:!1})}const ft=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1],t[0]);return new s(i,t,n)})`
  ha-card {
    overflow: hidden;
  }
  .container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #1c1c1c;
    border-radius: 12px;
    overflow: hidden;
    user-select: none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  .bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, #2a2a2a 0%, #1c1c1c 70%);
    z-index: 0;
  }

  .appliance-img {
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translateY(-50%);
    height: 75%;
    max-width: 45%;
    object-fit: contain;
    z-index: 2;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
  }


  .mode-icon {
    position: absolute;
    top: 33%;
    left: 77%;
    width: 20%;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    transform: translate(-50%, -50%);
  }
  /* Right Panel — stacks timer + controls vertically */
  .right-panel {
    position: absolute;
    right: 5%;
    top: 0;
    bottom: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 2px;
    z-index: 5;
  }
  .timer-row {
    position: relative;
    white-space: nowrap;
  }
  .time-bg,
  .time-fg {
    font-family: 'segment7', monospace;
    font-size: clamp(40px, 8vw, 50px);
    white-space: nowrap;
  }
  .time-bg {
    color: var(--divider-color, #333);
  }
  .time-fg {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--accent-color, #ff9800);
  }

  /* Refrigerator Styles */
  .refrigerator .fridge-icon,
  .refrigerator .freezer-icon,
  .refrigerator .icemaker-icon {
    position: absolute;
    top: 33%;
    width: 20%;
    transform: translate(-50%, -50%);
    image-rendering: pixelated;
    z-index: 5;
  }
  .refrigerator .fridge-icon { left: 33%; }
  .refrigerator .freezer-icon { left: 51%; }
  .refrigerator .icemaker-icon { left: 69%; cursor: pointer; }

  .dishwasher .appliance-img,
  .refrigerator .appliance-img {
    left: 4%;
    height: 50%;
  }

  .refrigerator .appliance-img {
    height: 65%;
  }

  .refrigerator .fridge-value-bg,
  .refrigerator .fridge-value,
  .refrigerator .freezer-value-bg,
  .refrigerator .freezer-value {
    position: absolute;
    top: 74%;
    transform: translate(-100%, -50%);
    font-family: 'segment7', monospace;
    font-size: 50px;
    white-space: nowrap;
    z-index: 5;
  }
  .refrigerator .fridge-value-bg,
  .refrigerator .fridge-value { left: 40%; }
  .refrigerator .freezer-value-bg,
  .refrigerator .freezer-value { left: 57%; }

  .refrigerator .fridge-value-bg,
  .refrigerator .freezer-value-bg { color: var(--divider-color, #333); }
  .refrigerator .fridge-value,
  .refrigerator .freezer-value { color: var(--accent-color, #ff9800); }

  .filter-status {
    position: absolute;
    bottom: 8%;
    right: 2%;
    width: 35%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: var(--secondary-text-color, #888);
    z-index: 5;
  }
  .filter-label-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .filter-label {
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .filter-info-row {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 11px;
  }
  .progress-bar {
    flex-grow: 1;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  .filter-percentage {
    min-width: 25px;
    text-align: right;
  }
  .reset-btn-mini {
    background: transparent;
    border: none;
    color: #f44336;
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease, filter 0.2s ease;
  }
  .reset-btn-mini:hover {
    transform: scale(1.3);
    filter: brightness(1.3);
  }
  .reset-btn-mini ha-icon {
    --mdc-icon-size: 16px;
  }

  .door-overlay {
    position: absolute;
    left: 3%;
    width: 22%;
    border-radius: 4px;
    transition: all 0.4s ease;
    z-index: 4;
  }
  .door-overlay.closed {
    background: rgba(76, 175, 80, 0.15);
    border: 1px solid rgba(76, 175, 80, 0.4);
  }
  .door-overlay.open {
    background: rgba(255, 82, 82, 0.25);
    border: 1px solid rgba(255, 82, 82, 0.7);
    box-shadow: 0 0 8px rgba(255, 82, 82, 0.3);
  }
  /* Cooler door — top section */
  .door-overlay.door-top {
    top: 23%;
    height: 27%;
  }
  /* CoolSelect drawer — middle section */
  .door-overlay.door-middle {
    top: 51%;
    height: 12%;
  }
  /* Freezer drawer — bottom section */
  .door-overlay.door-bottom {
    top: 64%;
    height: 15%;
  }

  /* Ice Maker States */
  .refrigerator .icemaker-icon.on {
    filter: drop-shadow(0 0 6px rgba(76, 175, 80, 0.8)) drop-shadow(0 0 12px rgba(76, 175, 80, 0.4));
  }
  .refrigerator .icemaker-icon.off {
    animation: ice-pulse 2s ease-in-out infinite;
  }
  @keyframes ice-pulse {
    0%, 100% { filter: drop-shadow(0 0 0px transparent); opacity: 0.6; }
    50% { filter: drop-shadow(0 0 8px rgba(255, 82, 82, 0.7)); opacity: 1; }
  }
  .refrigerator .controls {
    display: none; /* Replaced by icons */
  }
  .control-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--ha-card-background, var(--card-background-color, rgba(0, 0, 0, 0.6)));
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.05);
  }
  .control-box.on {
    color: var(--accent-color, #ff9800);
    border-color: var(--accent-color, #ff9800);
    background: rgba(255, 152, 0, 0.1);
  }
  .control-box.off {
    color: var(--secondary-text-color, #666);
    background: var(--ha-card-background, var(--card-background-color, rgba(0, 0, 0, 0.3)));
  }
  .control-box .label {
    font-size: 9px;
    margin-top: 4px;
    font-weight: bold;
  }
  .control-box ha-icon {
    --mdc-icon-size: 28px;
  }
  .control-box.filter {
    cursor: default;
    min-width: 120px;
  }
  .filter-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .progress-bar {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    overflow: hidden;
  }
  .progress-fill {
    height: 100%;
    transition: width 0.5s ease, background-color 0.5s ease;
  }
  .reset-btn {
    margin-top: 8px;
    background: var(--accent-color, #ff9800);
    border: none;
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  .reset-btn:hover {
    filter: brightness(1.2);
  }
  .reset-btn:active {
    transform: scale(0.95);
  }

  /* Job States Styles */
  .job-states {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
   .job-icon-container {
    position: absolute;
    top: 25%;
    width: 18%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    pointer-events: auto;
    z-index: 5;
  }
  .job-icon {
    width: 100%;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
    filter: grayscale(1) opacity(0.3);
    transition: all 0.5s ease;
  }
  .job-label {
    margin-top: -12px;
    font-size: clamp(8px, 1.8vw, 10px);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: var(--secondary-text-color, #888);
    text-align: center;
    white-space: nowrap;
    opacity: 0.4;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }
  .washer .job-icon-container,
  .dryer .job-icon-container,
  .dishwasher .job-icon-container {
    top: 38%;
  }
  .job-icon-container.active::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(circle, rgba(255, 152, 0, 0.15) 0%, transparent 70%);
    transform: translate(-50%, -60%);
    z-index: -1;
    pointer-events: none;
    animation: glow-pulse 3s ease-in-out infinite;
  }
  @keyframes glow-pulse {
    0%, 100% { opacity: 0.8; transform: translate(-50%, -60%) scale(1); }
    50% { opacity: 1; transform: translate(-50%, -60%) scale(1.1); }
  }
  .job-icon-container.active .job-icon {
    filter: grayscale(0) opacity(1) drop-shadow(0 0 12px var(--accent-color, #ff9800));
    transform: scale(1.15);
  }
  .job-icon-container.active .job-label {
    opacity: 1;
    color: var(--accent-color, #ff9800);
    text-shadow: 0 0 10px var(--accent-color, #ff9800), 0 0 20px rgba(255, 152, 0, 0.3);
    transform: scale(1.05);
  }

  /* Secondary Icons (WiFi, Lock) */
  .secondary-icons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 5;
  }
  .secondary-icon {
    position: absolute;
    top: 73%;
    width: 10%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
  }
  .secondary-icon.active {
  }

  /* Microwave Controls */
  .microwave-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: auto;
    z-index: 5;
  }
  .control-group {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(0, 0, 0, 0.4);
    padding: 4px 10px;
    border-radius: 16px;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .light-control {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: var(--secondary-text-color, #888);
    transition: all 0.3s ease;
  }
  .light-control.on {
    color: var(--accent-color, #ff9800);
    filter: drop-shadow(0 0 5px var(--accent-color, #ff9800));
  }
  .fan-control {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--secondary-text-color, #888);
  }
  .fan-control.on {
    color: var(--accent-color, #ff9800);
  }
  .fan-slider {
    width: 80px;
    height: 4px;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    outline: none;
  }
  .fan-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    background: var(--accent-color, #ff9800);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .fan-control.on ha-icon {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;let gt=class extends rt{setConfig(t){this._config=t}_schema(){const t=this._config?.device_id,e=[{name:"wifi_entity",label:"WiFi Status Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["binary_sensor","switch"]}}},{name:"lock_entity",label:"Child Lock Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["binary_sensor","switch"]}}}],i=[{name:"fridge_temp_entity",label:"Fridge Temperature Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["sensor","number","select"]}}},{name:"freezer_temp_entity",label:"Freezer Temperature Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["sensor","number","select"]}}},{name:"door_entities",label:"Door Sensors (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:"binary_sensor",multiple:!0}}},{name:"ice_maker_entity",label:"Ice Maker Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["switch","input_boolean"]}}},{name:"filter_status_entity",label:"Water Filter Usage Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:"sensor"}}},{name:"filter_reset_entity",label:"Filter Reset Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["button","switch","input_button"]}}}],n=[{name:"mode_entity",label:"Mode Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings"}}},{name:"job_state_entity",label:"Job State Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings"}}},{name:"time_entity",label:"Time Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:"sensor"}}}],o=[{name:"fan_entity",label:"Fan Control Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:["fan","number","select"]}}},{name:"light_entity",label:"Light Control Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings",domain:"light"}}}];let s=[...[{name:"device_id",label:"SmartThings Device",selector:{device:{integration:"smartthings"}}},{name:"power_entity",label:"Power Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings"}}},{name:"machine_state_entity",label:"Machine State Entity (Optional)",selector:{entity:{device_id:t,integration:"smartthings"}}}]];return s="refrigerator"===this._config?.appliance_type?s.concat(i):"microwave"===this._config?.appliance_type?s.concat(n).concat(e).concat(o):s.concat(n).concat(e),s.concat([{name:"bg_image",label:"Background Image Path",selector:{text:{}}},{name:"default_image",label:"Default Icon Path",selector:{text:{}}}])}render(){return this.hass&&this._config?F`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${this._schema()}
        .computeLabel=${t=>t.label||t.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `:F``}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.detail.value;let i={...e};this._config.device_id!==e.device_id&&(i={type:e.type,device_id:e.device_id,appliance_type:this._config.appliance_type||e.appliance_type},i=this._autofillConfig(i)),this._config=i,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:this._config},bubbles:!0,composed:!0}))}_autofillConfig(t){if(!this.hass)return t;const e=t.device_id,i=Object.keys(this.hass.states);let n={...t};const o=e?i.filter(t=>this.hass.entities?.[t]?.device_id===e):i,s=o.length>0?o:i;if(e){const t=s.map(t=>t+" "+(this.hass.states[t].attributes.friendly_name||"")).join(" ").toLowerCase();t.includes("refrigerator")||t.includes("fridge")||t.includes("freezer")?n.appliance_type="refrigerator":t.includes("dishwasher")?n.appliance_type="dishwasher":t.includes("washer")?n.appliance_type="washer":t.includes("dryer")?n.appliance_type="dryer":t.includes("microwave")?n.appliance_type="microwave":t.includes("oven")&&(n.appliance_type="oven")}const r=n.appliance_type;if(!r)return n;const a=(t,e)=>s.find(i=>{const n=i.toLowerCase(),o=t.some(t=>n.includes(t)),s=!e||i.startsWith(e+".");return o&&s});if(n.power_entity=n.power_entity||a(["_switch","_power"],"switch")||a(["_power"],"binary_sensor"),n.machine_state_entity=n.machine_state_entity||a(["_machine_state","_state"]),n.job_state_entity=n.job_state_entity||a(["_job_state"]),n.time_entity=n.time_entity||a(["_time_remaining","_time_left"],"sensor"),n.wifi_entity=n.wifi_entity||a(["_wifi"],"binary_sensor"),n.lock_entity=n.lock_entity||a(["_lock","_child_lock"]),n.fan_entity=n.fan_entity||a(["_fan"],"fan")||a(["_fan_speed"],"number"),n.light_entity=n.light_entity||a(["_light"],"light"),"refrigerator"===r){n.fridge_temp_entity=n.fridge_temp_entity||a(["_fridge_temp","_refrigerator_temp"]),n.freezer_temp_entity=n.freezer_temp_entity||a(["_freezer_temp"]),n.ice_maker_entity=n.ice_maker_entity||a(["_ice_maker"]),n.filter_reset_entity=n.filter_reset_entity||a(["_filter_reset","_reset_water_filter","_water_filter_reset"],"button")||a(["_filter_reset","_reset_water_filter","_water_filter_reset"],"switch");const t=s.filter(t=>t.includes("_door")&&t.startsWith("binary_sensor."));t.length>0&&(!n.door_entities||0===n.door_entities.length)&&(n.door_entities=t)}return n}};t([dt({attribute:!1})],gt.prototype,"hass",void 0),t([pt()],gt.prototype,"_config",void 0),gt=t([ct("smartthings-card-editor")],gt);console.info("%c SMARTTHINGS-CARD %c v0.1.0 ","color: white; background: #008cc0; font-weight: 700;","color: #008cc0; background: white; font-weight: 700;");let _t=class extends rt{constructor(){super(...arguments),this._currentTime=(new Date).getTime()}static getConfigElement(){return document.createElement("smartthings-card-editor")}static getStubConfig(){return{appliance_type:"microwave"}}static get styles(){return ft}setConfig(t){if(!t)throw new Error("Invalid configuration");this.config={...t},this.config.appliance_type||(this.config.appliance_type="microwave")}connectedCallback(){super.connectedCallback(),this._timer=window.setInterval(()=>{this._currentTime=(new Date).getTime()},1e3)}disconnectedCallback(){super.disconnectedCallback(),this._timer&&clearInterval(this._timer)}shouldUpdate(t){if(t.has("config"))return!0;const e=t.get("hass");if(e){return[this.config.power_entity,this.config.mode_entity,this.config.job_state_entity,this.config.machine_state_entity,this.config.time_entity,this.config.fridge_temp_entity,this.config.freezer_temp_entity,this.config.ice_maker_entity,this.config.filter_status_entity,this.config.filter_reset_entity,this.config.wifi_entity,this.config.lock_entity,this.config.fan_entity,this.config.light_entity,...this.config.door_entities||[]].filter(Boolean).some(t=>e.states[t]!==this.hass.states[t])}return t.has("_currentTime"),!0}_formatCountdown(t){return function(t,e){if(!t||["unavailable","unknown"].includes(t.toLowerCase()))return"--:--:--";if(/^\d{1,2}:\d{2}(:\d{2})?$/.test(t))return t;const i=new Date(t).getTime();if(isNaN(i))return"--:--:--";const n=i-e;if(n<=0)return"00:00:00";const o=Math.floor(n/1e3),s=Math.floor(o/3600),r=Math.floor(o%3600/60),a=o%60;return`${s.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}:${a.toString().padStart(2,"0")}`}(t,this._currentTime)}render(){if(!this.config||!this.hass)return F``;const t=this.config.power_entity?this.hass.states[this.config.power_entity]:null;this.config.machine_state_entity&&this.hass.states[this.config.machine_state_entity];const e=this.config.mode_entity?this.hass.states[this.config.mode_entity]:null,i=this.config.job_state_entity?this.hass.states[this.config.job_state_entity]:null,n=this.config.time_entity?this.hass.states[this.config.time_entity]:null,o=i?.state?.toLowerCase()||"off",s=e?.state?.toLowerCase()||"off",r=!["none","others","off","unknown","unavailable","idle","running","cooking"].includes(o)||"microwave"!==this.config.appliance_type&&"oven"!==this.config.appliance_type?o:s,a=n&&!("off"===t?.state)?this._formatCountdown(n.state):"--:--:--",c=this._getAsset(this.config.appliance_type,"appliance.png");return"refrigerator"===this.config.appliance_type?this._renderRefrigerator():F`
      <ha-card>
        <div class="container ${this.config.appliance_type}">
          <div class="bg-layer"></div>
          <img class="appliance-img" src="${c}" 
            @error=${t=>t.target.style.display="none"} />

          ${this._renderJobStates(r)} ${this._renderSecondaryIcons()}

          <div class="right-panel">
            <div class="timer-row">
              <div class="time-bg">88:88:88</div>
              <div class="time-fg">${a}</div>
            </div>
            ${"microwave"===this.config.appliance_type?this._renderMicrowaveControls():""}
          </div>
        </div>
      </ha-card>
    `}_renderMicrowaveControls(){const t=this.config.fan_entity?this.hass.states[this.config.fan_entity]:null,e=this.config.light_entity?this.hass.states[this.config.light_entity]:null;if(t||e)return F`
      <div class="microwave-controls">
        <div class="control-group">
          ${e?F`
                <div class="light-control ${"on"===e.state?"on":""}" @click=${this._toggleLight}>
                  <ha-icon icon="${"on"===e.state?"mdi:lightbulb":"mdi:lightbulb-outline"}"></ha-icon>
                </div>
              `:""}
          ${t?F`
                <div class="fan-control ${"0"!==t.state&&"off"!==t.state?"on":""}">
                  <ha-icon icon="mdi:fan"></ha-icon>
                  <input
                    type="range"
                    class="fan-slider"
                    min="0"
                    max=${t.attributes.maximum??2}
                    step="1"
                    .value=${t.state}
                    @change=${this._handleFanSpeed}
                  />
                </div>
              `:""}
        </div>
      </div>
    `}_toggleLight(){if(!this.hass||!this.config.light_entity)return;const t=this.hass.states[this.config.light_entity].state;this.hass.callService("light","on"===t?"turn_off":"turn_on",{entity_id:this.config.light_entity})}_handleFanSpeed(t){const e=t.target.value;if(!this.hass||!this.config.fan_entity)return;const i=this.config.fan_entity.split(".")[0],n="number"===i?"set_value":"set_percentage",o={entity_id:this.config.fan_entity};"number"===i?o.value=e:o.percentage=parseInt(e,10),this.hass.callService(i,n,o)}_renderJobStates(t){const e=this.config.appliance_type,i={dishwasher:[{name:"prewash",left:"33%"},{name:"wash",left:"51%",icon:"wash-plate"},{name:"rinse",left:"69%",icon:"rinse-plate"},{name:"dry",left:"85%",icon:"dry-plate"}],washer:[{name:"sensing",left:"35%"},{name:"wash",left:"52%"},{name:"rinse",left:"69%"},{name:"spin",left:"86%"}],dryer:[{name:"dry",left:"45%"},{name:"cool",left:"75%"}],microwave:[{name:"microwave",left:"72%",icon:"microwave"},{name:"autocook",left:"72%",icon:"autocook"},{name:"conventional",left:"72%",icon:"conventional"},{name:"bake",left:"72%",icon:"bake"},{name:"bottom_heat",left:"72%",icon:"bake"},{name:"convection_bake",left:"72%",icon:"convection"},{name:"convection_roast",left:"72%",icon:"convection"},{name:"broil",left:"72%",icon:"grill"},{name:"convection_broil",left:"72%",icon:"grill"},{name:"steam_cook",left:"72%",icon:"steam"},{name:"steam_bake",left:"72%",icon:"steam"},{name:"steam_roast",left:"72%",icon:"steam"},{name:"microwave_plus_grill",left:"72%",icon:"grill"},{name:"microwave_plus_convection",left:"72%",icon:"convection"},{name:"microwave_plus_hot_blast",left:"72%",icon:"hot_blast"},{name:"microwave_plus_hot_blast_2",left:"72%",icon:"hot_blast"},{name:"slim_middle",left:"72%",icon:"convection"},{name:"slim_strong",left:"72%",icon:"convection"},{name:"slow_cook",left:"72%",icon:"bake"},{name:"proof",left:"72%",icon:"bake"},{name:"dehydrate",left:"72%",icon:"convection"},{name:"strong_steam",left:"72%",icon:"steam"},{name:"descale",left:"72%",icon:"rinse"},{name:"rinse",left:"72%",icon:"rinse"},{name:"heating",left:"72%",icon:"conventional"},{name:"grill",left:"72%",icon:"grill"},{name:"defrosting",left:"72%",icon:"microwave"},{name:"warming",left:"72%",icon:"bake"},{name:"others",left:"72%",icon:"cooking"}],oven:[{name:"conventional",left:"72%",icon:"conventional"},{name:"bake",left:"72%",icon:"bake"},{name:"bottom_heat",left:"72%",icon:"bake"},{name:"convection_bake",left:"72%",icon:"convection"},{name:"convection_roast",left:"72%",icon:"convection"},{name:"broil",left:"72%",icon:"grill"},{name:"convection_broil",left:"72%",icon:"grill"},{name:"steam_cook",left:"72%",icon:"steam"},{name:"steam_bake",left:"72%",icon:"steam"},{name:"steam_roast",left:"72%",icon:"steam"},{name:"microwave_plus_grill",left:"72%",icon:"grill"},{name:"microwave_plus_convection",left:"72%",icon:"convection"},{name:"microwave_plus_hot_blast",left:"72%",icon:"hot_blast"},{name:"microwave_plus_hot_blast_2",left:"72%",icon:"hot_blast"},{name:"slim_middle",left:"72%",icon:"convection"},{name:"slim_strong",left:"72%",icon:"convection"},{name:"slow_cook",left:"72%",icon:"bake"},{name:"proof",left:"72%",icon:"bake"},{name:"dehydrate",left:"72%",icon:"convection"},{name:"strong_steam",left:"72%",icon:"steam"},{name:"descale",left:"72%",icon:"rinse"},{name:"rinse",left:"72%",icon:"rinse"},{name:"heating",left:"72%",icon:"conventional"},{name:"grill",left:"72%",icon:"grill"},{name:"defrosting",left:"72%",icon:"bake"},{name:"warming",left:"72%",icon:"bake"},{name:"others",left:"72%",icon:"cooking"},{name:"cooking",left:"72%",icon:"conventional"}]};if(!i[e])return;const n=t.toLowerCase(),o=["none","off","unknown","unavailable","idle","standby"].includes(n),s="microwave"===e;return F`
      <div class="job-states">
        ${i[e].map(t=>{const r=!o&&(n===t.name||n===t.icon||n.startsWith(t.name)||t.icon&&n.startsWith(t.icon));if((s||"oven"===e)&&"72%"===t.left){const r=i[e].find(t=>!o&&(n.startsWith(t.name)||t.icon&&n.startsWith(t.icon)));if(r){if(t.name!==r.name)return""}else{const e=s?"microwave":"conventional";if(t.name!==e)return""}}const a=t.icon||t.name;let c=r?`${a}-on.png`:`${a}.png`;"microwave"===e&&"autocook"===a&&(c=r?"autocook.png":"autocook-off.png");let l=this._getAsset(e,c);return r&&!l&&(l=this._getAsset(e,`${a}.png`)),l?F`
            <div class="job-icon-container ${r?"active":""}" style="left: ${t.left}">
              <img class="job-icon" src="${l}" title="${t.name}" @error=${this._handleImageError} />
              ${s||"oven"===e?F`<div class="job-label">${this._getStageLabel(t.name)}</div>`:""}
            </div>
          `:""})}
      </div>
    `}_getStageLabel(t){const e={conventional:"Conventional",bake:"Bake",bottom_heat:"Bottom",convection_bake:"Convection",convection_roast:"Roast",broil:"Broil",convection_broil:"Broil",steam_cook:"Steam",steam_bake:"Steam",steam_roast:"Steam",microwave_plus_grill:"Grill",microwave_plus_convection:"Convection",microwave_plus_hot_blast:"HotBlast",microwave_plus_hot_blast_2:"HotBlast",slim_middle:"Slim",slim_strong:"Slim",slow_cook:"Slow",proof:"Proof",dehydrate:"Dehydrate",strong_steam:"Steam",descale:"Descale",rinse:"Rinse",heating:"Heating",defrosting:"Defrost",warming:"Warming",others:"Cooking",microwave:"Microwave",autocook:"Auto",sensing:"Sensing",wash:"Wash",spin:"Spin",dry:"Dry",cool:"Cool",convection:"Convection",grill:"Grill",steam:"Steam",hot_blast:"Hot Blast",cooking:"Cooking"};return e[t]?e[t]:t.split("_").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}_renderSecondaryIcons(){const t=this.config.wifi_entity?this.hass.states[this.config.wifi_entity]:null,e=this.config.lock_entity?this.hass.states[this.config.lock_entity]:null;if(!t&&!e)return;const i=this.config.appliance_type;return F`
      <div class="secondary-icons">
        ${t?F`
              <img
                class="secondary-icon wifi ${"on"===t.state?"active":""}"
                src="${this._getAsset(i,"on"===t.state?"wifi-on.png":"wifi.png")}"
                style="left: 32%"
              />
            `:""}
        ${e&&"microwave"!==i?F`
              <img
                class="secondary-icon lock ${"on"===e.state?"active":""}"
                src="${this._getAsset(i,"on"===e.state?"lock-on.png":"lock.png")}"
                style="left: 45%"
              />
            `:""}
      </div>
    `}_getAsset(t,e){return`/local/community/ha-smartthings-card/images/${t}/${e}`}_renderRefrigerator(){const t=this.config.fridge_temp_entity?this.hass.states[this.config.fridge_temp_entity]:null,e=this.config.freezer_temp_entity?this.hass.states[this.config.freezer_temp_entity]:null,i=this.config.ice_maker_entity?this.hass.states[this.config.ice_maker_entity]:null,n=this.config.filter_status_entity?this.hass.states[this.config.filter_status_entity]:null,o=(this.config.door_entities||[]).map(t=>{const e=this.hass.states[t],i=t.toLowerCase();let n="top";i.includes("coolselect")?n="middle":i.includes("freezer")?n="bottom":i.includes("cooler")&&(n="top");return{position:n,label:e?.attributes?.friendly_name||t,isOpen:"on"===e?.state}}),s=this._getAsset("refrigerator","appliance.png"),r=t?Math.round(parseFloat(t.state)).toString():"--",a=e?Math.round(parseFloat(e.state)).toString():"--";return F`
      <ha-card>
        <div class="container refrigerator">
          <div class="bg-layer"></div>
          <img class="appliance-img" src="${s}" 
            @error=${t=>t.target.style.display="none"} />

          <!-- Icons Layer -->
          <img class="fridge-icon" src="${this._getAsset("refrigerator","fridge-temp.png")}" />
          <div class="fridge-value-bg">88</div>
          <div class="fridge-value">${r}</div>
          
          <img class="freezer-icon" src="${this._getAsset("refrigerator","freezer-temp.png")}" />
          <div class="freezer-value-bg">88</div>
          <div class="freezer-value">${a}</div>
          
          <img class="icemaker-icon ${"on"===i?.state?"on":"off"}" 
            src="${this._getAsset("refrigerator","on"===i?.state?"icemaker_on.png":"icemaker_off.png")}"
            @click=${this._toggleIceMaker} />

          <!-- Extra Info -->
          ${n?F`
                <div class="filter-status">
                  <div class="filter-label-row">
                    <span class="filter-label" style="color: ${this._getFilterColor(n.state)}">Water Filter</span>
                    <button class="reset-btn-mini" @click=${this._resetFilter} title="Reset Filter">
                      <ha-icon icon="mdi:restart"></ha-icon>
                    </button>
                  </div>
                  <div class="filter-info-row">
                    <div class="progress-bar">
                      <div
                        class="progress-fill"
                        style="width: ${100-parseFloat(n.state)}%; background-color: ${this._getFilterColor(n.state)}"
                      ></div>
                    </div>
                    <span class="filter-percentage" style="color: ${this._getFilterColor(n.state)}">${n.state}%</span>
                  </div>
                </div>
              `:""}

          ${o.length>0?F`
                ${o.map(t=>F`
                    <div
                      class="door-overlay door-${t.position} ${t.isOpen?"open":"closed"}"
                      title="${t.label}: ${t.isOpen?"Open":"Closed"}"
                    ></div>
                  `)}
              `:""}
        </div>
      </ha-card>
    `}_getFilterColor(t){return function(t){const e=parseFloat(t);return isNaN(e)?"var(--disabled-text-color, #bdbdbd)":e<50?"var(--success-color, #4caf50)":e<80?"var(--warning-color, #ff9800)":"var(--error-color, #f44336)"}(t)}_resetFilter(){if(!this.hass||!this.config.filter_reset_entity)return;const t=this.config.filter_reset_entity.split(".")[0],e="button"===t?"press":"turn_on";this.hass.callService(t,e,{entity_id:this.config.filter_reset_entity})}_toggleIceMaker(){if(!this.hass||!this.config.ice_maker_entity)return;const t="on"===this.hass.states[this.config.ice_maker_entity].state?"turn_off":"turn_on",e=this.config.ice_maker_entity.split(".")[0];this.hass.callService(e,t,{entity_id:this.config.ice_maker_entity})}_handleImageError(t){t.target.style.display="none"}};t([dt({attribute:!1})],_t.prototype,"hass",void 0),t([pt()],_t.prototype,"config",void 0),t([pt()],_t.prototype,"_currentTime",void 0),_t=t([ct("smartthings-card")],_t),window.customCards=window.customCards||[],window.customCards.push({type:"smartthings-card",name:"Smartthings Card",description:"A custom card for Smartthings devices",preview:!0});export{_t as SmartthingsCard};
