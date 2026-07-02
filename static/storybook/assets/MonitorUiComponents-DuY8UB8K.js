import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{nt as n,rt as r,yn as i}from"./iframe-CpaI1qLl.js";import{t as a}from"./jsx-runtime-CaZkqeYb.js";import{a as o,n as s,o as c}from"./monitorUiHelpers-CHakuzHz.js";function l({children:e,fallback:t,monitorType:n}){let[i,a]=(0,u.useState)(!1),[o,s]=(0,u.useState)(!0);return(0,u.useEffect)(function(){let e=!1;return(async()=>{try{let t=await c(n);e||(a(t),s(!1))}catch(t){r.warn(`Failed to check response time support`,t),e||(a(!1),s(!1))}})(),()=>{e=!0}},[n]),o?t:i?e:t}var u,d,f,p=e((()=>{u=t(i()),n(),o(),d=a(),f=({details:e,fallback:t=e,monitorType:n})=>{let[i,a]=(0,u.useState)(t);return(0,u.useEffect)(function(){let i=!1;return(async()=>{try{let t=await s(n,e);i||a(t)}catch(e){r.warn(`Failed to format detail label`,e),i||a(t)}})(),()=>{i=!0}},[e,t,n]),(0,d.jsx)(`span`,{children:i})},f.__docgenInfo={description:`Dynamically formats and displays monitor detail labels.

@remarks
Asynchronously formats detail strings using monitor type-specific formatting
rules. Gracefully degrades to fallback text if formatting fails.

@param props - Component properties

@returns JSX element containing the formatted label

@public`,methods:[],displayName:`DetailLabel`,props:{details:{required:!0,tsType:{name:`string`},description:`Raw details string to format`},fallback:{required:!1,tsType:{name:`string`},description:`Fallback text to display if formatting fails`,defaultValue:{value:`details`,computed:!1}},monitorType:{required:!0,tsType:{name:`MonitorType`},description:`Type of monitor for context-specific formatting`}}}}));export{f as n,p as r,l as t};