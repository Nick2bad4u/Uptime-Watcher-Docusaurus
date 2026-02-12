var B=Object.defineProperty;var a=(t,r)=>B(t,"name",{value:r,configurable:!0});import{j as c}from"./jsx-runtime-BHIWlbBZ.js";import{r as R,c as F}from"./iframe-BJrhacjf.js";import{T as V}from"./ThemedSelect-CvBWTT7P.js";import{g as G,a as J}from"./fallbacks-uIeB4S0k.js";import{A as $}from"./icons-C3P3CjT3.js";import{f as X}from"./monitorTitleFormatters-ClNNZuM8.js";const Y=new Set([80,443]),K="Select a monitor",Q="No monitors available",Z=a((t,r,e)=>{if(!r)return e;if(typeof t.url=="string"&&r===t.url&&typeof t.port=="number"&&t.port>0&&!Y.has(t.port)&&t.host)try{const i=new URL(t.url);if(i.hostname===t.host&&i.port==="")return`${t.host}:${t.port}`}catch{return`${t.host}:${t.port}`}return r},"preferHostPortIdentifier"),ee=R.memo(a(function(r){const e=F.c(38),{className:i,disabled:b,monitors:o,onChange:E,selectedMonitorId:s}=r,x=i===void 0?"min-w-20":i,k=R.useRef(null),T=R.useId();let g;e[0]!==T?(g=T.replaceAll(":",""),e[0]=T,e[1]=g):g=e[1];const C=`monitor-selector-${g}`,d=(b??!1)||o.length===0;let _;if(e[2]!==o||e[3]!==s){let n;e[5]!==s?(n=a(l=>l.id===s,"t42"),e[5]=s,e[6]=n):n=e[6],_=o.some(n),e[2]=o,e[3]=s,e[4]=_}else _=e[4];const h=_,L=h?s:"",p=o.length===0?Q:K,O=te,q=oe,H=ne;let y;e[7]!==x?(y=["monitor-selector",x].filter(Boolean),e[7]=x,e[8]=y):y=e[8];const I=y.join(" "),j=d?"monitor-selector__wrapper--disabled":void 0;let M;e[9]!==I||e[10]!==j?(M=["monitor-selector__wrapper",I,j].filter(Boolean),e[9]=I,e[10]=j,e[11]=M):M=e[11];const A=M.join(" ");let D;e:{if(!h){D=p;break e}let n;if(e[12]!==o||e[13]!==p||e[14]!==s){let l;e[16]!==s?(l=a(z=>z.id===s,"t92"),e[16]=s,e[17]=l):l=e[17];const P=o.find(l);n=P?H(P):p,e[12]=o,e[13]=p,e[14]=s,e[15]=n}else n=e[15];D=n}const N=D,U=$.metrics.monitor,W=$.ui.expand;let w;e[18]===Symbol.for("react.memo_cache_sentinel")?(w=c.jsx("span",{"aria-hidden":"true",className:"monitor-selector__icon monitor-selector__icon--leading",children:c.jsx(U,{size:16})}),e[18]=w):w=e[18];let m;e[19]!==h||e[20]!==p?(m=h?null:c.jsx("option",{disabled:!0,value:"",children:p}),e[19]=h,e[20]=p,e[21]=m):m=e[21];let f;if(e[22]!==o){let n;e[24]===Symbol.for("react.memo_cache_sentinel")?(n=a(l=>c.jsx("option",{value:l.id,children:H(l)},l.id),"t112"),e[24]=n):n=e[24],f=o.map(n),e[22]=o,e[23]=f}else f=e[23];let u;e[25]!==C||e[26]!==d||e[27]!==E||e[28]!==L||e[29]!==f||e[30]!==m?(u=c.jsxs(V,{"aria-label":"Select monitor",className:"monitor-selector__input",disabled:d,fluid:!1,id:C,onChange:E,onClick:O,onMouseDown:q,ref:k,tone:"transparent",value:L,children:[m,f]}),e[25]=C,e[26]=d,e[27]=E,e[28]=L,e[29]=f,e[30]=m,e[31]=u):u=e[31];let S;e[32]===Symbol.for("react.memo_cache_sentinel")?(S=c.jsx("span",{"aria-hidden":"true",className:"monitor-selector__icon monitor-selector__icon--trailing",children:c.jsx(W,{size:14})}),e[32]=S):S=e[32];let v;return e[33]!==d||e[34]!==N||e[35]!==u||e[36]!==A?(v=c.jsxs("div",{className:A,"data-disabled":d,"data-prevent-row-activation":"true",title:N,children:[w,u,S]}),e[33]=d,e[34]=N,e[35]=u,e[36]=A,e[37]=v):v=e[37],v},"MonitorSelector2"));ee.__docgenInfo={description:`Monitor selection dropdown component for switching between site monitors.

Features:

- Dynamic option formatting based on monitor type and configuration
- Event propagation control to prevent card click conflicts
- Optimized with React.memo and useCallback for performance
- Themed select component integration
- Supports HTTP and port monitor types with descriptive labels

@example

\`\`\`tsx
<MonitorSelector
    monitors={site.monitors}
    selectedMonitorId="monitor-1"
    onChange={handleMonitorChange}
    className="w-32"
/>;
\`\`\`

@param props - Component props

@returns JSX.Element containing the monitor selector dropdown`,methods:[],displayName:"MonitorSelector",props:{className:{required:!1,tsType:{name:"string"},description:"Optional CSS classes for custom styling",defaultValue:{value:'"min-w-20"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the selector should be rendered in a disabled state. Defaults to
disabled when no monitors are available.`},monitors:{required:!0,tsType:{name:"Array",elements:[{name:"Monitor"}],raw:"Monitor[]"},description:"Array of available monitors to choose from"},onChange:{required:!0,tsType:{name:"EventHandlers.ChangeWithEvent",elements:[{name:"HTMLSelectElement"}],raw:"EventHandlers.ChangeWithEvent<HTMLSelectElement>"},description:"Callback function for selection change events"},selectedMonitorId:{required:!0,tsType:{name:"string"},description:"ID of the currently selected monitor"}}};function te(t){t.stopPropagation()}a(te,"_temp");function oe(t){t.stopPropagation()}a(oe,"_temp2");function ne(t){const r=G(t.type),e=t.id,i=X(t).trim(),b=i.startsWith("(")&&i.endsWith(")")?i.slice(1,-1):i,o=b.length>0?b:Z(t,J(t,e),e);return o?`${r}: ${o}`:r}a(ne,"_temp3");export{ee as M};
