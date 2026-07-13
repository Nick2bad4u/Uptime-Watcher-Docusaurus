import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{i as r,n as i,r as a,t as o}from"./fireAndForget-DIaBjOHO.js";import{t as s}from"./jsx-runtime-cM__dR4X.js";import{a as c,i as l,t as u}from"./monitorUiHelpers-j8lm-DT9.js";function d({children:e,fallback:t,monitorType:n}){let[i,a]=(0,f.useState)(!1),[s,l]=(0,f.useState)(!0);return(0,f.useEffect)(function(){let e=!1;return o(async()=>{try{let t=await c(n);e||(a(t),l(!1))}catch(t){r.warn(`Failed to check response time support`,t),e||(a(!1),l(!1))}},{onError:e=>{r.warn(`Failed to check response time support`,e)}}),()=>{e=!0}},[n]),s?t:i?e:t}var f,p,m,h=t((()=>{f=e(n()),a(),i(),l(),p=s(),m=({details:e,fallback:t=e,monitorType:n})=>{let[i,a]=(0,f.useState)(t);return(0,f.useEffect)(function(){let i=!1;return o(async()=>{try{let t=await u(n,e);i||a(t)}catch(e){r.warn(`Failed to format detail label`,e),i||a(t)}},{onError:e=>{r.warn(`Failed to format detail label`,e)}}),()=>{i=!0}},[e,t,n]),(0,p.jsx)(`span`,{children:i})},m.__docgenInfo={description:`Dynamically formats and displays monitor detail labels.

@remarks
Asynchronously formats detail strings using monitor type-specific formatting
rules. Gracefully degrades to fallback text if formatting fails.

@param props - Component properties

@returns JSX element containing the formatted label

@public`,methods:[],displayName:`DetailLabel`,props:{details:{required:!0,tsType:{name:`string`},description:`Raw details string to format`},fallback:{required:!1,tsType:{name:`string`},description:`Fallback text to display if formatting fails`,defaultValue:{value:`details`,computed:!1}},monitorType:{required:!0,tsType:{name:`MonitorType`},description:`Type of monitor for context-specific formatting`}}}}));export{m as n,h as r,d as t};