var L=Object.defineProperty;var i=(w,x)=>L(w,"name",{value:x,configurable:!0});import{j as e}from"./jsx-runtime-BHIWlbBZ.js";import{r as $,c as E}from"./iframe-DuEuG6JD.js";import{T as q}from"./ThemedButton-C7y6TK_x.js";import{A}from"./icons-FyP_sYx9.js";import{T as N}from"./Tooltip-NV6V3Wpj.js";const P=$.memo(i(function(x){const t=E.c(30),{allMonitorsRunning:z,className:j,compact:C,disabledReason:u,isLoading:a,onStartSiteMonitoring:y,onStopSiteMonitoring:b,size:R}=x,r=j===void 0?"":j,s=C===void 0?!1:C,o=R===void 0?"sm":R;let g;t[0]!==b?(g=i(n=>{n?.stopPropagation(),b()},"t4"),t[0]=b,t[1]=g):g=t[1];const M=g;let f;t[2]!==y?(f=i(n=>{n?.stopPropagation(),y()},"t5"),t[2]=y,t[3]=f):f=t[3];const T=f,l=o==="xs"?14:16,B=A.actions.pauseFilled,k=A.actions.playAll;let h;t[4]!==u?(h=i(n=>u==="unconfigured"?`${n} • Configure a monitor to enable this control.`:u==="loading"?`${n} • Finishing the previous request.`:n,"t6"),t[4]=u,t[5]=h):h=t[5];const c=h;if(z){let n;t[6]!==c?(n=c("Stop monitoring all monitors for this site"),t[6]=c,t[7]=n):n=t[7];let p;t[8]!==r||t[9]!==s||t[10]!==M||t[11]!==l||t[12]!==a||t[13]!==o?(p=i(I=>e.jsxs(q,{...I,"aria-label":"Stop All Monitoring",className:`flex items-center gap-1 ${r}`,disabled:a,onClick:M,size:o,variant:"error",children:[e.jsx(B,{size:l}),!s&&e.jsx("span",{className:"hidden text-xs sm:inline",children:"Stop All"})]}),"t82"),t[8]=r,t[9]=s,t[10]=M,t[11]=l,t[12]=a,t[13]=o,t[14]=p):p=t[14];let v;return t[15]!==n||t[16]!==p?(v=e.jsx(N,{content:n,position:"top",children:p}),t[15]=n,t[16]=p,t[17]=v):v=t[17],v}let d;t[18]!==c?(d=c("Start monitoring all monitors for this site"),t[18]=c,t[19]=d):d=t[19];let m;t[20]!==r||t[21]!==s||t[22]!==T||t[23]!==l||t[24]!==a||t[25]!==o?(m=i(n=>e.jsxs(q,{...n,"aria-label":"Start All Monitoring",className:`flex items-center gap-1 ${r}`,disabled:a,onClick:T,size:o,variant:"success",children:[e.jsx(k,{size:l}),!s&&e.jsx("span",{className:"hidden text-xs sm:inline",children:"Start All"})]}),"t8"),t[20]=r,t[21]=s,t[22]=T,t[23]=l,t[24]=a,t[25]=o,t[26]=m):m=t[26];let S;return t[27]!==d||t[28]!==m?(S=e.jsx(N,{content:d,position:"top",children:m}),t[27]=d,t[28]=m,t[29]=S):S=t[29],S},"SiteMonitoringButton2"));P.__docgenInfo={description:`Reusable site monitoring button that handles start/stop all monitoring.

@remarks
This component provides a consistent interface for site-wide monitoring
controls across different parts of the application. It automatically switches
between start and stop states based on whether all monitors are currently
running.

Key features:

- Automatic state switching based on monitor status
- Event propagation prevention to avoid parent element interactions
- Loading state handling with button disabling
- Compact mode for space-constrained layouts
- Consistent styling with theme integration

The component uses the appropriate variant (success for start, error for
stop) and includes intuitive emoji icons for visual clarity.

@example

\`\`\`tsx
// Standard usage
<SiteMonitoringButton
  allMonitorsRunning={site.monitors.every(m => m.monitoring)}
  isLoading={false}
  onStartSiteMonitoring={handleStart}
  onStopSiteMonitoring={handleStop}
/>

// Compact mode for site cards
<SiteMonitoringButton
  allMonitorsRunning={allRunning}
  compact
  isLoading={loading}
  onStartSiteMonitoring={handleStart}
  onStopSiteMonitoring={handleStop}
/>
\`\`\`

@param props - Component configuration and event handlers

@returns JSX element containing the themed monitoring button`,methods:[],displayName:"SiteMonitoringButton",props:{allMonitorsRunning:{required:!0,tsType:{name:"boolean"},description:"Whether all monitors are currently running - determines button state"},compact:{required:!1,tsType:{name:"boolean"},description:"Whether to show compact text (for smaller spaces)",defaultValue:{value:"false",computed:!1}},disabledReason:{required:!1,tsType:{name:"union",raw:'"loading" | "unconfigured"',elements:[{name:"literal",value:'"loading"'},{name:"literal",value:'"unconfigured"'}]},description:"Optional reason describing why the control is disabled."},isLoading:{required:!0,tsType:{name:"boolean"},description:"Whether any operation is currently loading - disables button"},onStartSiteMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for starting site-level monitoring"},onStopSiteMonitoring:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler for stopping site-level monitoring"},size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm" | "xl" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},description:"Size variant for the underlying themed buttons.",defaultValue:{value:'"sm"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};export{P as S};
