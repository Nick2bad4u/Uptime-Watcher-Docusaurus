var _=Object.defineProperty;var s=(L,y)=>_(L,"name",{value:y,configurable:!0});import{j as a}from"./jsx-runtime-BHIWlbBZ.js";import{r as J,c as O}from"./iframe-CreBuNPk.js";import{T as P}from"./ThemedButton-CW7lHQyb.js";import{A as G}from"./icons-D_Q_f2rV.js";import{S as U}from"./SiteMonitoringButton-CHJpR3ew.js";import{T as I}from"./Tooltip-BjwgyU4i.js";const X=J.memo(s(function(y){const t=O.c(45),{allMonitorsRunning:k,buttonSize:W,disabled:o,isLoading:r,isMonitoring:w,onCheckNow:C,onStartMonitoring:M,onStartSiteMonitoring:T,onStopMonitoring:j,onStopSiteMonitoring:z}=y,i=W===void 0?"sm":W;let h;t[0]!==C?(h=s(n=>{n?.stopPropagation(),C()},"t2"),t[0]=C,t[1]=h):h=t[1];const A=h;let b;t[2]!==M?(b=s(n=>{n?.stopPropagation(),M()},"t3"),t[2]=M,t[3]=b):b=t[3];const N=b;let v;t[4]!==j?(v=s(n=>{n?.stopPropagation(),j()},"t4"),t[4]=j,t[5]=v):v=t[5];const q=v,$=i==="xs"?"gap-1.5":"gap-2",l=i==="xs"?14:16,E=G.actions.refresh,F=G.actions.pause,V=G.actions.play;let e;t[6]!==o||t[7]!==r?(e=null,o?e="unconfigured":r&&(e="loading"),t[6]=o,t[7]=r,t[8]=e):e=t[8];let S;t[9]!==e?(S=s(n=>e==="unconfigured"?`${n} • Select a monitor to enable this action.`:e==="loading"?`${n} • Finishing the previous request.`:n,"t5"),t[9]=e,t[10]=S):S=t[10];const c=S,R=`flex flex-wrap items-center ${$}`;let u;t[11]!==c?(u=c("Trigger an immediate availability check"),t[11]=c,t[12]=u):u=t[12];let p;t[13]!==i||t[14]!==o||t[15]!==A||t[16]!==l||t[17]!==r?(p=s(n=>a.jsx(P,{...n,"aria-label":"Check Now",className:"min-w-8",disabled:r||o,onClick:A,size:i,variant:"ghost",children:a.jsx(E,{size:l})}),"t8"),t[13]=i,t[14]=o,t[15]=A,t[16]=l,t[17]=r,t[18]=p):p=t[18];let d;t[19]!==u||t[20]!==p?(d=a.jsx(I,{content:u,position:"top",children:p}),t[19]=u,t[20]=p,t[21]=d):d=t[21];const B=r||o;let m;t[22]!==e?(m=e?{disabledReason:e}:{},t[22]=e,t[23]=m):m=t[23];let g;t[24]!==k||t[25]!==i||t[26]!==T||t[27]!==z||t[28]!==B||t[29]!==m?(g=a.jsx(U,{allMonitorsRunning:k,className:"min-w-8",compact:!0,isLoading:B,onStartSiteMonitoring:T,onStopSiteMonitoring:z,size:i,...m}),t[24]=k,t[25]=i,t[26]=T,t[27]=z,t[28]=B,t[29]=m,t[30]=g):g=t[30];let f;t[31]!==c||t[32]!==i||t[33]!==o||t[34]!==N||t[35]!==q||t[36]!==l||t[37]!==r||t[38]!==w?(f=w?a.jsx(I,{content:c("Pause monitoring for this monitor"),position:"top",children:s(n=>a.jsx(P,{...n,"aria-label":"Stop Monitoring",className:"min-w-8",disabled:r||o,onClick:q,size:i,variant:"error",children:a.jsx(F,{size:l})}),"children")}):a.jsx(I,{content:c("Resume monitoring for this monitor"),position:"top",children:s(n=>a.jsx(P,{...n,"aria-label":"Start Monitoring",className:"min-w-8",disabled:r||o,onClick:N,size:i,variant:"success",children:a.jsx(V,{size:l})}),"children")}),t[31]=c,t[32]=i,t[33]=o,t[34]=N,t[35]=q,t[36]=l,t[37]=r,t[38]=w,t[39]=f):f=t[39];let x;return t[40]!==g||t[41]!==f||t[42]!==R||t[43]!==d?(x=a.jsxs("div",{className:R,children:[d,g,f]}),t[40]=g,t[41]=f,t[42]=R,t[43]=d,t[44]=x):x=t[44],x},"ActionButtonGroup2"));X.__docgenInfo={description:`Reusable action button group component for site monitoring operations.

Features:

- Unified interface for check now, start/stop monitoring actions
- Proper event handling with stopPropagation on individual buttons to prevent
  card click conflicts - Optimized with React.memo and useCallback to prevent
  unnecessary re-renders - Accessibility support with proper ARIA labels and
  native button elements
- Visual feedback for loading and disabled states

@example

\`\`\`tsx
import { ActionButtonGroup } from "./components/ActionButtonGroup";

<ActionButtonGroup
    onCheckNow={handleCheckNow}
    onStartMonitoring={handleStart}
    onStopMonitoring={handleStop}
    isLoading={false}
    isMonitoring={true}
    disabled={false}
/>;
\`\`\`

@param props - Component props

@returns JSX element containing action buttons`,methods:[],displayName:"ActionButtonGroup",props:{allMonitorsRunning:{required:!0,tsType:{name:"boolean"},description:"Whether all monitors are currently running"},buttonSize:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm" | "xl" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},description:"Size variant for rendered buttons (defaults to `sm`).",defaultValue:{value:'"sm"',computed:!1}},disabled:{required:!0,tsType:{name:"boolean"},description:"Whether all buttons should be disabled"},isLoading:{required:!0,tsType:{name:"boolean"},description:"Whether any operation is currently loading"},isMonitoring:{required:!0,tsType:{name:"boolean"},description:"Whether monitoring is currently active"},onCheckNow:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to trigger immediate site check"},onStartMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to start monitoring"},onStartSiteMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to start site-wide monitoring"},onStopMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to stop monitoring"},onStopSiteMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function to stop site-wide monitoring"}}};export{X as A};
