import{M as m}from"./MonitorSelector-_nJMeYFj.js";import{b as s}from"./siteStoryHelpers-kMShK3-v.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-DyvIPkVZ.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedSelect-BcPOVSaP.js";import"./useTheme-DJ7epzI1.js";import"./storeErrorHandling-BURLOlzH.js";import"./react-CGdiL3be.js";import"./EventsService-CzUXSiPB.js";import"./useThemedControlStyles-mPfLD04Y.js";import"./icons-DV64AXrl.js";import"./monitorDisplayInfo-CinlOv80.js";import"./fallbacks-C9nVEKxx.js";import"./validation-CJJLDQTF.js";import"./useSitesStore-_T8EKnLS.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-bsatqH6C.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,a=[s({id:"monitor-http",responseTime:95,status:"up",type:"http",url:"https://status.example.com"}),s({id:"monitor-port",host:"api.example.com",monitoring:!0,port:8443,responseTime:130,status:"degraded",type:"port"}),s({id:"monitor-ping",monitoring:!1,responseTime:220,status:"paused",type:"ping"})],b={args:{monitors:a,onChange:i("select-monitor"),selectedMonitorId:a[0]?.id??""},component:m,parameters:{layout:"centered"},tags:["autodocs"]},o={},t={args:{className:"max-w-80"}},r={args:{selectedMonitorId:a[1]?.id??""}},e={args:{monitors:[],selectedMonitorId:""}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
