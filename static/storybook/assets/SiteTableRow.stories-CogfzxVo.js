var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-Bq1Yrb2l.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-CD_Eu4XO.js";import"./iframe-CreBuNPk.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-BI0D_omG.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./useTheme-BeZpuX1q.js";import"./EventsService-BjxJj59F.js";import"./useSitesStore-iyNVQL90.js";import"./validation-at8F_Jpu.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-BfFuR8Wt.js";import"./monitorUiHelpers-AknUfLO9.js";import"./ThemedText-BJI_SxX2.js";import"./useDashboardSiteSummaryMeta-DuK5M1I-.js";import"./MarqueeText-BKJj2s03.js";import"./StatusBadge-BAn-BP5z.js";import"./StatusIndicator-Dalt1106.js";import"./icons-D_Q_f2rV.js";import"./ActionButtonGroup-DrlnSk3P.js";import"./ThemedButton-CW7lHQyb.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-CHJpR3ew.js";import"./Tooltip-BjwgyU4i.js";import"./index-DvAcgsfT.js";import"./index-Q98EW2dQ.js";import"./MonitorSelector-C-4HTycO.js";import"./ThemedSelect-nxk03xHF.js";import"./useThemedControlStyles-uHO119ZE.js";import"./fallbacks-M3AOOrC-.js";import"./monitorTitleFormatters-DgEWnjDX.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
