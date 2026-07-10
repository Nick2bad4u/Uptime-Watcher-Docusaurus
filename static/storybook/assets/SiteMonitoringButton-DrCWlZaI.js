import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-CfLRHmV-.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedButton-DNWxSGLl.js";import{r as o,t as s}from"./icons-DT4sRLN6.js";import{n as c,t as l}from"./Tooltip-qzSAQLkt.js";var u,d,f,p=e((()=>{u=t(n()),i(),o(),c(),d=r(),f=(0,u.memo)(function({allMonitorsRunning:e,className:t=``,compact:n=!1,disabledReason:r,isLoading:i,onStartSiteMonitoring:o,onStopSiteMonitoring:c,size:f=`sm`}){let p=(0,u.useCallback)(e=>{e?.stopPropagation(),c()},[c]),m=(0,u.useCallback)(e=>{e?.stopPropagation(),o()},[o]),h=f===`xs`?14:16,g=s.actions.pauseFilled,_=s.actions.playAll,v=n?``:`min-w-24 justify-center`,y=(0,u.useCallback)(e=>r===`unconfigured`?`${e} • Configure a monitor to enable this control.`:r===`loading`?`${e} • Finishing the previous request.`:e,[r]);return e?(0,d.jsx)(l,{content:y(`Stop monitoring all monitors for this site`),position:`top`,children:e=>(0,d.jsxs)(a,{...e,"aria-label":`Stop All Monitoring`,className:`flex items-center gap-1 ${v} ${t}`,disabled:i,onClick:p,size:f,variant:`error`,children:[(0,d.jsx)(g,{size:h}),!n&&(0,d.jsx)(`span`,{className:`hidden text-xs sm:inline`,children:`Stop All`})]})}):(0,d.jsx)(l,{content:y(`Start monitoring all monitors for this site`),position:`top`,children:e=>(0,d.jsxs)(a,{...e,"aria-label":`Start All Monitoring`,className:`flex items-center gap-1 ${v} ${t}`,disabled:i,onClick:m,size:f,variant:`success`,children:[(0,d.jsx)(_,{size:h}),!n&&(0,d.jsx)(`span`,{className:`hidden text-xs sm:inline`,children:`Start All`})]})})}),f.displayName=`SiteMonitoringButton`,f.__docgenInfo={description:`Reusable site monitoring button that handles start/stop all monitoring.

@remarks
This component provides a consistent interface for site-wide monitoring
controls across different parts of the app. It automatically switches between
start and stop states based on whether all monitors are currently running.

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

@returns JSX element containing the themed monitoring button`,methods:[],displayName:`SiteMonitoringButton`,props:{allMonitorsRunning:{required:!0,tsType:{name:`boolean`},description:`Whether all monitors are currently running - determines button state`},compact:{required:!1,tsType:{name:`boolean`},description:`Whether to show compact text (for smaller spaces)`,defaultValue:{value:`false`,computed:!1}},disabledReason:{required:!1,tsType:{name:`union`,raw:`"loading" | "unconfigured"`,elements:[{name:`literal`,value:`"loading"`},{name:`literal`,value:`"unconfigured"`}]},description:`Optional reason describing why the control is disabled.`},isLoading:{required:!0,tsType:{name:`boolean`},description:`Whether any operation is currently loading - disables button`},onStartSiteMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Handler for starting site-level monitoring`},onStopSiteMonitoring:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Handler for stopping site-level monitoring`},size:{required:!1,tsType:{name:`union`,raw:`| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Size variant for the underlying themed buttons.`,defaultValue:{value:`"sm"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{p as n,f as t};