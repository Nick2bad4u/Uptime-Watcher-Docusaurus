var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-J_ouB3-3.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-CR2_4PBu.js";import"./iframe-DuEuG6JD.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-_MNLPbKL.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-DNI8Znf5.js";import"./react-BTwblIux.js";import"./useTheme-BPQlNHcU.js";import"./EventsService-CHHrEves.js";import"./useSitesStore-C7lWqy2N.js";import"./validation-cKCHs09w.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-C8vvcNtZ.js";import"./monitorUiHelpers-DvbyT2c9.js";import"./ThemedText-Cm3TRmYk.js";import"./useDashboardSiteSummaryMeta-JSxMeNfm.js";import"./MarqueeText-CyeKSatq.js";import"./StatusBadge-JPFn41mb.js";import"./StatusIndicator-CaIVu4Ot.js";import"./icons-FyP_sYx9.js";import"./ActionButtonGroup-CMWBjW1F.js";import"./ThemedButton-C7y6TK_x.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-CyRrk5JX.js";import"./Tooltip-NV6V3Wpj.js";import"./index-_h7A_G_Q.js";import"./index-DHSNG1qa.js";import"./MonitorSelector-CR8ezfwd.js";import"./ThemedSelect-C3ZACITF.js";import"./useThemedControlStyles-6ewJ2LJA.js";import"./fallbacks-DxKiKyJp.js";import"./monitorTitleFormatters-GJkVmGkA.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
