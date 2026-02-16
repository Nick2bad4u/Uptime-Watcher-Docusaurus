import{M as m}from"./MonitorSelector-Ctx18E_t.js";import{b as s}from"./siteStoryHelpers-D5Ki0Nbt.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-DI6HKbXb.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedSelect-BP8dwt2l.js";import"./useTheme-BebA_Oqh.js";import"./storeErrorHandling-C-cvM8DB.js";import"./react-DWXc_mr8.js";import"./EventsService-q8R--PJ4.js";import"./useThemedControlStyles-CBrepB0J.js";import"./icons-DU1jpZJN.js";import"./monitorDisplayInfo-CSEyRPmO.js";import"./fallbacks-BEvrPo40.js";import"./validation-nXBduy_X.js";import"./useSitesStore-DxIYcGlE.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-C4DENxRZ.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=[s({id:"monitor-http",responseTime:95,status:"up",type:"http",url:"https://status.example.com"}),s({id:"monitor-port",host:"api.example.com",monitoring:!0,port:8443,responseTime:130,status:"degraded",type:"port"}),s({id:"monitor-ping",monitoring:!1,responseTime:220,status:"paused",type:"ping"})],b={args:{monitors:a,onChange:i("select-monitor"),selectedMonitorId:a[0]?.id??""},component:m,parameters:{layout:"centered"},tags:["autodocs"]},o={},t={args:{className:"max-w-80"}},r={args:{selectedMonitorId:a[1]?.id??""}},e={args:{monitors:[],selectedMonitorId:""}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    className: "max-w-80"
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selectedMonitorId: baseMonitors[1]?.id ?? ""
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    monitors: [],
    selectedMonitorId: ""
  }
}`,...e.parameters?.docs?.source}}};const D=["Default","WithCustomClass","PortMonitorSelected","EmptyState"];export{o as Default,e as EmptyState,r as PortMonitorSelected,t as WithCustomClass,D as __namedExportsOrder,b as default};
