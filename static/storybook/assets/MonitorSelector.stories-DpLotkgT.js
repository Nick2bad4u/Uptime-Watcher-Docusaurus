import{M as m}from"./MonitorSelector-BtYEIS7S.js";import{b as s}from"./siteStoryHelpers-DU-k_-w7.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-K4-Qd2g0.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedSelect-byApgPdg.js";import"./useTheme-wgAn8pNf.js";import"./storeErrorHandling-CxXe-kGL.js";import"./react-7wigyp5a.js";import"./EventsService-BeKrLUQ9.js";import"./useThemedControlStyles-BSXjOSYS.js";import"./icons-fxyVgwDQ.js";import"./monitorDisplayInfo-CPJb25wT.js";import"./fallbacks-DKLmo1O9.js";import"./validation-BoCLx0Lu.js";import"./useSitesStore-BpUm7ssH.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-CGZ9e-nd.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=[s({id:"monitor-http",responseTime:95,status:"up",type:"http",url:"https://status.example.com"}),s({id:"monitor-port",host:"api.example.com",monitoring:!0,port:8443,responseTime:130,status:"degraded",type:"port"}),s({id:"monitor-ping",monitoring:!1,responseTime:220,status:"paused",type:"ping"})],b={args:{monitors:a,onChange:i("select-monitor"),selectedMonitorId:a[0]?.id??""},component:m,parameters:{layout:"centered"},tags:["autodocs"]},o={},t={args:{className:"max-w-80"}},r={args:{selectedMonitorId:a[1]?.id??""}},e={args:{monitors:[],selectedMonitorId:""}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
