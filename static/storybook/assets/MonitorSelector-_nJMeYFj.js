var F=Object.defineProperty;var l=(t,r)=>F(t,"name",{value:r,configurable:!0});import{j as c}from"./jsx-runtime-BHIWlbBZ.js";import{r as R,c as V}from"./iframe-DyvIPkVZ.js";import{T as W}from"./ThemedSelect-BcPOVSaP.js";import{A as $}from"./icons-DV64AXrl.js";import{b as G}from"./monitorDisplayInfo-CinlOv80.js";const J=new Set([80,443]),X="Select a monitor",Y="No monitors available",K=l((t,r,e)=>{if(!r)return e;if(typeof t.url=="string"&&r===t.url&&typeof t.port=="number"&&t.port>0&&!J.has(t.port)&&t.host)try{const a=new URL(t.url);if(a.hostname===t.host&&a.port==="")return`${t.host}:${t.port}`}catch{return`${t.host}:${t.port}`}return r},"preferHostPortIdentifier"),Q=R.memo(l(function(r){const e=V.c(38),{className:a,disabled:b,monitors:n,onChange:S,selectedMonitorId:s}=r,C=a===void 0?"min-w-20":a,k=R.useRef(null),T=R.useId();let _;e[0]!==T?(_=T.replaceAll(":",""),e[0]=T,e[1]=_):_=e[1];const x=`monitor-selector-${_}`,d=(b??!1)||n.length===0;let g;if(e[2]!==n||e[3]!==s){let o;e[5]!==s?(o=l(i=>i.id===s,"t42"),e[5]=s,e[6]=o):o=e[6],g=n.some(o),e[2]=n,e[3]=s,e[4]=g}else g=e[4];const h=g,I=h?s:"",m=n.length===0?Y:X,O=Z,q=ee,H=te;let M;e[7]!==C?(M=["monitor-selector",C].filter(Boolean),e[7]=C,e[8]=M):M=e[8];const L=M.join(" "),j=d?"monitor-selector__wrapper--disabled":void 0;let v;e[9]!==L||e[10]!==j?(v=["monitor-selector__wrapper",L,j].filter(Boolean),e[9]=L,e[10]=j,e[11]=v):v=e[11];const A=v.join(" ");let N;e:{if(!h){N=m;break e}let o;if(e[12]!==n||e[13]!==m||e[14]!==s){let i;e[16]!==s?(i=l(z=>z.id===s,"t92"),e[16]=s,e[17]=i):i=e[17];const P=n.find(i);o=P?H(P):m,e[12]=n,e[13]=m,e[14]=s,e[15]=o}else o=e[15];N=o}const D=N,U=$.metrics.monitor,B=$.ui.expand;let w;e[18]===Symbol.for("react.memo_cache_sentinel")?(w=c.jsx("span",{"aria-hidden":"true",className:"monitor-selector__icon monitor-selector__icon--leading",children:c.jsx(U,{size:16})}),e[18]=w):w=e[18];let p;e[19]!==h||e[20]!==m?(p=h?null:c.jsx("option",{disabled:!0,value:"",children:m}),e[19]=h,e[20]=m,e[21]=p):p=e[21];let f;if(e[22]!==n){let o;e[24]===Symbol.for("react.memo_cache_sentinel")?(o=l(i=>c.jsx("option",{value:i.id,children:H(i)},i.id),"t112"),e[24]=o):o=e[24],f=n.map(o),e[22]=n,e[23]=f}else f=e[23];let u;e[25]!==x||e[26]!==d||e[27]!==S||e[28]!==I||e[29]!==f||e[30]!==p?(u=c.jsxs(W,{"aria-label":"Select monitor",className:"monitor-selector__input",disabled:d,fluid:!1,id:x,onChange:S,onClick:O,onMouseDown:q,ref:k,tone:"transparent",value:I,children:[p,f]}),e[25]=x,e[26]=d,e[27]=S,e[28]=I,e[29]=f,e[30]=p,e[31]=u):u=e[31];let y;e[32]===Symbol.for("react.memo_cache_sentinel")?(y=c.jsx("span",{"aria-hidden":"true",className:"monitor-selector__icon monitor-selector__icon--trailing",children:c.jsx(B,{size:14})}),e[32]=y):y=e[32];let E;return e[33]!==d||e[34]!==D||e[35]!==u||e[36]!==A?(E=c.jsxs("div",{className:A,"data-disabled":d,"data-prevent-row-activation":"true",title:D,children:[w,u,y]}),e[33]=d,e[34]=D,e[35]=u,e[36]=A,e[37]=E):E=e[37],E},"MonitorSelectorComponent"));Q.__docgenInfo={description:`Monitor selection dropdown component for switching between site monitors.

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
disabled when no monitors are available.`},monitors:{required:!0,tsType:{name:"Array",elements:[{name:"Monitor"}],raw:"Monitor[]"},description:"Array of available monitors to choose from"},onChange:{required:!0,tsType:{name:"EventHandlers.ChangeWithEvent",elements:[{name:"HTMLSelectElement"}],raw:"EventHandlers.ChangeWithEvent<HTMLSelectElement>"},description:"Callback function for selection change events"},selectedMonitorId:{required:!0,tsType:{name:"string"},description:"ID of the currently selected monitor"}}};function Z(t){t.stopPropagation()}l(Z,"_temp");function ee(t){t.stopPropagation()}l(ee,"_temp2");function te(t){const{connectionInfo:r,connectionInfoSource:e,monitorTypeLabel:a}=G({fallbackIdentifier:"",monitor:t}),b=e==="identifier"?K(t,r,""):r;return b?`${a}: ${b}`:a}l(te,"_temp3");export{Q as M};
