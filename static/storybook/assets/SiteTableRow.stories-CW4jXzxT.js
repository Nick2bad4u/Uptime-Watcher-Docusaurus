var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-DrEaOmeF.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-DU-k_-w7.js";import"./iframe-K4-Qd2g0.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-B8gNmgI3.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-CxXe-kGL.js";import"./react-7wigyp5a.js";import"./useTheme-wgAn8pNf.js";import"./EventsService-BeKrLUQ9.js";import"./useSitesStore-BpUm7ssH.js";import"./validation-BoCLx0Lu.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-CGZ9e-nd.js";import"./monitorUiHelpers-CFM20vmb.js";import"./ThemedText-BuKI3xEx.js";import"./useDashboardSiteSummaryMeta-vVjBKfow.js";import"./MarqueeText-C-dNES61.js";import"./StatusBadge-DVb0uVaj.js";import"./StatusIndicator-CHuVRXb-.js";import"./icons-fxyVgwDQ.js";import"./ActionButtonGroup-D3OtyOFP.js";import"./ThemedButton-DdZY-bFv.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-NXYFwZAd.js";import"./Tooltip-Cd2TaiwR.js";import"./index-DGHPf0hS.js";import"./index-BPOBReEt.js";import"./MonitorSelector-BtYEIS7S.js";import"./ThemedSelect-byApgPdg.js";import"./useThemedControlStyles-BSXjOSYS.js";import"./monitorDisplayInfo-CPJb25wT.js";import"./fallbacks-DKLmo1O9.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    site: incidentSite
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    site: pausedSite
  },
  parameters: {
    docs: {
      description: {
        story: "Highlights the styling used when an entire site is paused for maintenance across all monitors."
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const Z=["DefaultRow","IncidentRow","PausedRow"];export{o as DefaultRow,s as IncidentRow,i as PausedRow,Z as __namedExportsOrder,Y as default};
