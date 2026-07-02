import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{yn as n}from"./iframe-CpaI1qLl.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{i,t as a}from"./siteStoryHelpers-DVKqRgS_.js";import{i as o,o as s,r as c,s as l}from"./timeoutUtils-DZPvKyzJ.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),c(),u=t(n()),i(),d=r(),{action:f}=__STORYBOOK_MODULE_ACTIONS__,p=e=>`${e} ms`,m=a({checkInterval:5e3,history:Array.from({length:20},(e,t)=>({responseTime:110+t*5,status:t%7==0?`degraded`:`up`,timestamp:Date.now()-t*6e4})),id:`monitor-http`,responseTime:140,status:`up`,timeout:1e4,url:`https://status.example.com/health`}),h=({handleIntervalChange:e,handleTimeoutChange:t,intervalChanged:n,localCheckIntervalMs:r,localTimeoutSeconds:i,timeoutChanged:a,...o})=>{let[c,l]=(0,u.useState)(r),[p,m]=(0,u.useState)(i),[h,g]=(0,u.useState)(n),[_,v]=(0,u.useState)(a),y=(0,u.useCallback)(t=>{l(Number(t.target.value)),g(!0),f(`overview/changeInterval`)(t.target.value),e?.(t)},[e]),b=(0,u.useCallback)(e=>{m(Number(e.target.value)),v(!0),f(`overview/changeTimeout`)(e.target.value),t?.(e)},[t]),x=(0,u.useMemo)(()=>({intervalChanged:h,localCheckIntervalMs:c,localTimeoutSeconds:p,timeoutChanged:_}),[c,h,_,p]);return(0,d.jsx)(s,{...o,handleIntervalChange:y,handleTimeoutChange:b,...x})},g={args:{avgResponseTime:180,fastestResponse:95,formatResponseTime:p,handleIntervalChange:()=>{},handleRemoveMonitor:async()=>{f(`overview/removeMonitor`)()},handleSaveInterval:async()=>{f(`overview/saveInterval`)()},handleSaveTimeout:async()=>{f(`overview/saveTimeout`)()},handleTimeoutChange:()=>{},intervalChanged:!1,isLoading:!1,localCheckIntervalMs:m.checkInterval,localTimeoutSeconds:o(m.timeout),onCheckNow:()=>{f(`overview/checkNow`)()},selectedMonitor:m,slowestResponse:450,timeoutChanged:!1,totalChecks:m.history.length,uptime:`99.1`},component:s,render:e=>(0,d.jsx)(h,{...e}),tags:[`autodocs`]},_={},v={args:{intervalChanged:!0,localCheckIntervalMs:1e4,localTimeoutSeconds:20,timeoutChanged:!0}},y={args:{isLoading:!1,selectedMonitor:{...m,monitoring:!1,status:`paused`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    intervalChanged: true,
    localCheckIntervalMs: 10_000,
    localTimeoutSeconds: 20,
    timeoutChanged: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: false,
    selectedMonitor: {
      ...baseMonitor,
      monitoring: false,
      status: "paused"
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`DefaultOverview`,`PendingChanges`,`PausedMonitor`]}))();export{_ as DefaultOverview,y as PausedMonitor,v as PendingChanges,b as __namedExportsOrder,g as default};