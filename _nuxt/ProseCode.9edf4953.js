import{r as _,ak as z,al as D,am as F,M as b,I,a7 as G,aj as X,o as H,d as T,x as J,b as h,c as k,e as M,g as $,w as K,X as P,T as Q,n as O,a6 as U,p as Y,i as Z,k as L,t as ee,f as te,a5 as ne}from"./entry.823949de.js";function W(e){return D()?(F(e),!0):!1}function C(e){return typeof e=="function"?e():b(e)}const S=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const oe=Object.prototype.toString,ae=e=>oe.call(e)==="[object Object]",x=()=>{},se=ie();function ie(){var e,t;return S&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function re(e){let t;function a(){return t||(t=e()),t}return a.reset=async()=>{const n=t;t=void 0,n&&await n},a}function ce(e,t,a={}){const{immediate:n=!0}=a,i=_(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function c(){i.value=!1,l()}function d(...p){l(),i.value=!0,o=setTimeout(()=>{i.value=!1,o=null,e(...p)},C(t))}return n&&(i.value=!0,S&&d()),W(c),{isPending:z(i),start:d,stop:c}}function g(e){var t;const a=C(e);return(t=a==null?void 0:a.$el)!=null?t:a}const j=S?window:void 0,N=S?window.navigator:void 0;function w(...e){let t,a,n,i;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,n,i]=e,t=j):[t,a,n,i]=e,!t)return x;Array.isArray(a)||(a=[a]),Array.isArray(n)||(n=[n]);const o=[],l=()=>{o.forEach(u=>u()),o.length=0},c=(u,f,s,r)=>(u.addEventListener(f,s,r),()=>u.removeEventListener(f,s,r)),d=G(()=>[g(t),C(i)],([u,f])=>{if(l(),!u)return;const s=ae(f)?{...f}:f;o.push(...a.flatMap(r=>n.map(m=>c(u,r,m,s))))},{immediate:!0,flush:"post"}),p=()=>{d(),l()};return W(p),p}let E=!1;function ue(e,t,a={}){const{window:n=j,ignore:i=[],capture:o=!0,detectIframe:l=!1}=a;if(!n)return;se&&!E&&(E=!0,Array.from(n.document.body.children).forEach(s=>s.addEventListener("click",x)),n.document.documentElement.addEventListener("click",x));let c=!0;const d=s=>i.some(r=>{if(typeof r=="string")return Array.from(n.document.querySelectorAll(r)).some(m=>m===s.target||s.composedPath().includes(m));{const m=g(r);return m&&(s.target===m||s.composedPath().includes(m))}}),u=[w(n,"click",s=>{const r=g(e);if(!(!r||r===s.target||s.composedPath().includes(r))){if(s.detail===0&&(c=!d(s)),!c){c=!0;return}t(s)}},{passive:!0,capture:o}),w(n,"pointerdown",s=>{const r=g(e);c=!d(s)&&!!(r&&!s.composedPath().includes(r))},{passive:!0}),l&&w(n,"blur",s=>{setTimeout(()=>{var r;const m=g(e);((r=n.document.activeElement)==null?void 0:r.tagName)==="IFRAME"&&!(m!=null&&m.contains(n.document.activeElement))&&t(s)},0)})].filter(Boolean);return()=>u.forEach(s=>s())}function le(){const e=_(!1);return X()&&H(()=>{e.value=!0}),e}function R(e){const t=le();return I(()=>(t.value,!!e()))}function B(e,t={}){const{controls:a=!1,navigator:n=N}=t,i=R(()=>n&&"permissions"in n);let o;const l=typeof e=="string"?{name:e}:e,c=_(),d=()=>{o&&(c.value=o.state)},p=re(async()=>{if(i.value){if(!o)try{o=await n.permissions.query(l),w(o,"change",d),d()}catch{c.value="prompt"}return o}});return p(),a?{state:c,isSupported:i,query:p}:c}function de(e={}){const{navigator:t=N,read:a=!1,source:n,copiedDuring:i=1500,legacy:o=!1}=e,l=R(()=>t&&"clipboard"in t),c=B("clipboard-read"),d=B("clipboard-write"),p=I(()=>l.value||o),u=_(""),f=_(!1),s=ce(()=>f.value=!1,i);function r(){l.value&&c.value!=="denied"?t.clipboard.readText().then(v=>{u.value=v}):u.value=q()}p.value&&a&&w(["copy","cut"],r);async function m(v=C(n)){p.value&&v!=null&&(l.value&&d.value!=="denied"?await t.clipboard.writeText(v):V(v),u.value=v,f.value=!0,s.start())}function V(v){const y=document.createElement("textarea");y.value=v??"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function q(){var v,y,A;return(A=(y=(v=document==null?void 0:document.getSelection)==null?void 0:v.call(document))==null?void 0:y.toString())!=null?A:""}return{isSupported:p,text:u,copied:f,copy:m}}const pe=e=>(Y("data-v-aad953d6"),e=e(),Z(),e),fe=pe(()=>M("span",{class:"sr-only"},"Copy to clipboard",-1)),me={class:"icon-wrapper"},ve=T({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,a=_(),{copy:n}=de();ue(a,()=>{o.value==="copied"&&(o.value="init")});const{prose:i}=J(),o=_("init"),l=c=>{n(t.content).then(()=>{o.value="copied"}).catch(d=>{console.warn("Couldn't copy to clipboard!",d)})};return(c,d)=>{const p=U;return h(),k("button",{ref_key:"copyButtonRef",ref:a,class:O([(e.show||o.value==="copied")&&"show"]),onClick:l},[fe,M("span",me,[$(Q,{name:"fade"},{default:K(()=>{var u,f;return[o.value==="copied"?(h(),P(p,{key:0,name:(u=b(i).copyButton)==null?void 0:u.iconCopied,size:"18",class:"copied"},null,8,["name"])):(h(),P(p,{key:1,name:(f=b(i).copyButton)==null?void 0:f.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}});const ye=L(ve,[["__scopeId","data-v-aad953d6"]]),_e={key:0,class:"filename"},ge=T({__name:"ProseCode",props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]}},setup(e){const t=_(!1);return(a,n)=>{const i=ye;return h(),k("div",{class:O([[`highlight-${e.language}`],"prose-code"]),onMouseenter:n[0]||(n[0]=o=>t.value=!0),onMouseleave:n[1]||(n[1]=o=>t.value=!1)},[e.filename?(h(),k("span",_e,ee(e.filename),1)):te("",!0),ne(a.$slots,"default",{},void 0,!0),$(i,{show:t.value,content:e.code,class:"copy-button"},null,8,["show","content"])],34)}}});const we=L(ge,[["__scopeId","data-v-d693162a"]]);export{we as default};
