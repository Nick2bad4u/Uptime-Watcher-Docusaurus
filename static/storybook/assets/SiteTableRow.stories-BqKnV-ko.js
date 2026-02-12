var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-zGxt2MnV.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-iJArNBUO.js";import"./iframe-BJrhacjf.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-botIMyXH.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-BKgO_9cm.js";import"./react-Bfr6JYwz.js";import"./useTheme-r2seLT70.js";import"./EventsService-B6jZiVgw.js";import"./useSitesStore-BMImm_yp.js";import"./validation-BwNuLHpk.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-CifEhYcY.js";import"./monitorUiHelpers-BlwVa7S5.js";import"./ThemedText-RH-jlxwJ.js";import"./useDashboardSiteSummaryMeta-f2mK9KIN.js";import"./MarqueeText-CA8TQTB4.js";import"./StatusBadge-5oiYb8nL.js";import"./StatusIndicator-Dh66rd33.js";import"./icons-C3P3CjT3.js";import"./ActionButtonGroup-DS3xJ8eq.js";import"./ThemedButton-eWYltqoY.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-KhLYUFcX.js";import"./Tooltip-CaWx3DdW.js";import"./index-DZPnkn5w.js";import"./index-BSKFoHOM.js";import"./MonitorSelector-D4rCxL5s.js";import"./ThemedSelect-CvBWTT7P.js";import"./useThemedControlStyles-MrSK25GK.js";import"./fallbacks-uIeB4S0k.js";import"./monitorTitleFormatters-ClNNZuM8.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
