import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-DrR-jiVn.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedButton-gV_FtP33.js";import{r as o,t as s}from"./icons-w8U4JDNt.js";import{n as c,t as l}from"./Tooltip-CrNCD4Ll.js";import{n as u,t as d}from"./SiteMonitoringButton-XgwKOlE6.js";var f,p,m,h=e((()=>{f=t(n()),i(),o(),u(),c(),p=r(),m=(0,f.memo)(function({allMonitorsRunning:e,buttonSize:t=`sm`,disabled:n,isLoading:r,isMonitoring:i,onCheckNow:o,onStartMonitoring:c,onStartSiteMonitoring:u,onStopMonitoring:m,onStopSiteMonitoring:h}){let g=(0,f.useCallback)(e=>{e?.stopPropagation(),o()},[o]),_=(0,f.useCallback)(e=>{e?.stopPropagation(),c()},[c]),v=(0,f.useCallback)(e=>{e?.stopPropagation(),m()},[m]),y=t===`xs`?`gap-1.5`:`gap-2`,b=t===`xs`?14:16,x=s.actions.refresh,S=s.actions.pause,C=s.actions.play,w=null;n?w=`unconfigured`:r&&(w=`loading`);let T=(0,f.useCallback)(e=>w===`unconfigured`?`${e} • Select a monitor to enable this action.`:w===`loading`?`${e} • Finishing the previous request.`:e,[w]);return(0,p.jsxs)(`div`,{className:`flex flex-wrap items-center ${y}`,children:[(0,p.jsx)(l,{content:T(`Trigger an immediate availability check`),position:`top`,children:e=>(0,p.jsx)(a,{...e,"aria-label":`Check Now`,className:`min-w-8`,disabled:r||n,onClick:g,size:t,variant:`ghost`,children:(0,p.jsx)(x,{size:b})})}),(0,p.jsx)(d,{allMonitorsRunning:e,className:`min-w-8`,compact:!0,isLoading:r||n,onStartSiteMonitoring:u,onStopSiteMonitoring:h,size:t,...w?{disabledReason:w}:{}}),i?(0,p.jsx)(l,{content:T(`Pause monitoring for this monitor`),position:`top`,children:e=>(0,p.jsx)(a,{...e,"aria-label":`Stop Monitoring`,className:`min-w-8`,disabled:r||n,onClick:v,size:t,variant:`error`,children:(0,p.jsx)(S,{size:b})})}):(0,p.jsx)(l,{content:T(`Resume monitoring for this monitor`),position:`top`,children:e=>(0,p.jsx)(a,{...e,"aria-label":`Start Monitoring`,className:`min-w-8`,disabled:r||n,onClick:_,size:t,variant:`success`,children:(0,p.jsx)(C,{size:b})})})]})}),m.__docgenInfo={description:`Reusable action button group component for site monitoring operations.

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

@returns JSX element containing action buttons`,methods:[],displayName:`ActionButtonGroup`,props:{allMonitorsRunning:{required:!0,tsType:{name:`boolean`},description:`Whether all monitors are currently running`},buttonSize:{required:!1,tsType:{name:`union`,raw:`| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:"Size variant for rendered buttons (defaults to `sm`).",defaultValue:{value:`"sm"`,computed:!1}},disabled:{required:!0,tsType:{name:`boolean`},description:`Whether all buttons should be disabled`},isLoading:{required:!0,tsType:{name:`boolean`},description:`Whether any operation is currently loading`},isMonitoring:{required:!0,tsType:{name:`boolean`},description:`Whether monitoring is currently active`},onCheckNow:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function to trigger immediate site check`},onStartMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function to start monitoring`},onStartSiteMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function to start site-wide monitoring`},onStopMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function to stop monitoring`},onStopSiteMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function to stop site-wide monitoring`}}}}));export{h as n,m as t};