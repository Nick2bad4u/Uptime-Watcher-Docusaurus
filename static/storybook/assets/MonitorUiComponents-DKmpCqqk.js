var k=Object.defineProperty;var c=(f,t)=>k(f,"name",{value:t,configurable:!0});import{j as x}from"./jsx-runtime-BHIWlbBZ.js";import{c as b,r as u,l as g}from"./iframe-CreBuNPk.js";import{s as L,f as R}from"./monitorUiHelpers-AknUfLO9.js";function F(f){const t=b.c(3),{children:o,fallback:m,monitorType:e}=f,[r,p]=u.useState(!1),[d,n]=u.useState(!0);let s,a;return t[0]!==e?(s=c(function(){let i=!1;return c(async()=>{try{const l=await L(e);i||(p(l),n(!1))}catch(l){const y=l;g.warn("Failed to check response time support",y),i||(p(!1),n(!1))}},"checkSupport")(),()=>{i=!0}},"checkResponseTimeSupport"),a=[e],t[0]=e,t[1]=s,t[2]=a):(s=t[1],a=t[2]),u.useEffect(s,a),d?m:r?o:m}c(F,"ConditionalResponseTime");const S=c(f=>{const t=b.c(7),{details:o,fallback:m,monitorType:e}=f,r=m===void 0?o:m,[p,d]=u.useState(r);let n,s;t[0]!==o||t[1]!==r||t[2]!==e?(n=c(function(){let i=!1;return c(async()=>{try{const l=await R(e,o);i||d(l)}catch(l){const y=l;g.warn("Failed to format detail label",y),i||d(r)}},"formatLabel")(),()=>{i=!0}},"formatDetailLabel"),s=[o,r,e],t[0]=o,t[1]=r,t[2]=e,t[3]=n,t[4]=s):(n=t[3],s=t[4]),u.useEffect(n,s);let a;return t[5]!==p?(a=x.jsx("span",{children:p}),t[5]=p,t[6]=a):a=t[6],a},"DetailLabel");S.__docgenInfo={description:`Dynamically formats and displays monitor detail labels.

@remarks
Asynchronously formats detail strings using monitor type-specific formatting
rules. Gracefully degrades to fallback text if formatting fails.

@param props - Component properties

@returns JSX element containing the formatted label

@public`,methods:[],displayName:"DetailLabel",props:{details:{required:!0,tsType:{name:"string"},description:"Raw details string to format"},fallback:{required:!1,tsType:{name:"string"},description:"Fallback text to display if formatting fails",defaultValue:{value:"details",computed:!1}},monitorType:{required:!0,tsType:{name:"MonitorType"},description:"Type of monitor for context-specific formatting"}}};export{F as C,S as D};
