var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-CcGiwtDk.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-BpZ9QbWa.js";import"./iframe-MD7yCyl4.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-zRCHPTgN.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling--gr6WIbO.js";import"./react-CwtULKRV.js";import"./useTheme-CN3hwuLU.js";import"./EventsService-B1aW6uuF.js";import"./useSitesStore-BsQr7GrP.js";import"./validation-_iszY_Po.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-Bva96oaZ.js";import"./monitorUiHelpers-DiCQuATr.js";import"./ThemedText-CsWFmcMv.js";import"./useDashboardSiteSummaryMeta-Drv4tafj.js";import"./MarqueeText-DnG0BT6g.js";import"./StatusBadge-CNGSgl8q.js";import"./StatusIndicator-BdZ_diI4.js";import"./icons-DJj_SB9p.js";import"./ActionButtonGroup-Djx12v-j.js";import"./ThemedButton-CoiXBUze.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-BWVyn42d.js";import"./Tooltip-DlOlua-k.js";import"./index-BqMnEmxt.js";import"./index-CbJ8WGqw.js";import"./MonitorSelector-DiUtJNk7.js";import"./ThemedSelect-CgCRzrnR.js";import"./useThemedControlStyles-CwFLUvzQ.js";import"./fallbacks-Dhta-zUw.js";import"./monitorTitleFormatters-ChWSZax7.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
