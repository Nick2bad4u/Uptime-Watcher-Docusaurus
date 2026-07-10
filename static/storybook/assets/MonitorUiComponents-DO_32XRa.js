import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n,at as r,it as i,ot as a,rt as o}from"./iframe-EIlRbGuq.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{a as c,i as l,t as u}from"./monitorUiHelpers-r9aS1Bab.js";function d({children:e,fallback:t,monitorType:n}){let[r,i]=(0,f.useState)(!1),[s,l]=(0,f.useState)(!0);return(0,f.useEffect)(function(){let e=!1;return o(async()=>{try{let t=await c(n);e||(i(t),l(!1))}catch(t){a.warn(`Failed to check response time support`,t),e||(i(!1),l(!1))}},{onError:e=>{a.warn(`Failed to check response time support`,e)}}),()=>{e=!0}},[n]),s?t:r?e:t}var f,p,m,h=e((()=>{f=t(n()),r(),i(),l(),p=s(),m=({details:e,fallback:t=e,monitorType:n})=>{let[r,i]=(0,f.useState)(t);return(0,f.useEffect)(function(){let r=!1;return o(async()=>{try{let t=await u(n,e);r||i(t)}catch(e){a.warn(`Failed to format detail label`,e),r||i(t)}},{onError:e=>{a.warn(`Failed to format detail label`,e)}}),()=>{r=!0}},[e,t,n]),(0,p.jsx)(`span`,{children:r})},m.__docgenInfo={description:`Dynamically formats and displays monitor detail labels.

@remarks
Asynchronously formats detail strings using monitor type-specific formatting
rules. Gracefully degrades to fallback text if formatting fails.

@param props - Component properties

@returns JSX element containing the formatted label

@public`,methods:[],displayName:`DetailLabel`,props:{details:{required:!0,tsType:{name:`string`},description:`Raw details string to format`},fallback:{required:!1,tsType:{name:`string`},description:`Fallback text to display if formatting fails`,defaultValue:{value:`details`,computed:!1}},monitorType:{required:!0,tsType:{name:`MonitorType`},description:`Type of monitor for context-specific formatting`}}}}));export{m as n,h as r,d as t};