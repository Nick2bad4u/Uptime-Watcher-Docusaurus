import{M as m}from"./MonitorSelector-C-4HTycO.js";import{b as s}from"./siteStoryHelpers-CD_Eu4XO.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-CreBuNPk.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedSelect-nxk03xHF.js";import"./useTheme-BeZpuX1q.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./EventsService-BjxJj59F.js";import"./useThemedControlStyles-uHO119ZE.js";import"./fallbacks-M3AOOrC-.js";import"./icons-D_Q_f2rV.js";import"./monitorTitleFormatters-DgEWnjDX.js";import"./validation-at8F_Jpu.js";import"./useSitesStore-iyNVQL90.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-BfFuR8Wt.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=[s({id:"monitor-http",responseTime:95,status:"up",type:"http",url:"https://status.example.com"}),s({id:"monitor-port",host:"api.example.com",monitoring:!0,port:8443,responseTime:130,status:"degraded",type:"port"}),s({id:"monitor-ping",monitoring:!1,responseTime:220,status:"paused",type:"ping"})],b={args:{monitors:a,onChange:i("select-monitor"),selectedMonitorId:a[0]?.id??""},component:m,parameters:{layout:"centered"},tags:["autodocs"]},o={},t={args:{className:"max-w-80"}},r={args:{selectedMonitorId:a[1]?.id??""}},e={args:{monitors:[],selectedMonitorId:""}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
