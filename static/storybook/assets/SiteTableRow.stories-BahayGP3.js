var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-4KbSn1te.js";import{c as l,a as g,b as p}from"./siteStoryHelpers-D5Ki0Nbt.js";import"./iframe-DI6HKbXb.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-KgHObIJT.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-C-cvM8DB.js";import"./react-DWXc_mr8.js";import"./useTheme-BebA_Oqh.js";import"./EventsService-q8R--PJ4.js";import"./useSitesStore-DxIYcGlE.js";import"./validation-nXBduy_X.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-C4DENxRZ.js";import"./monitorUiHelpers-CDMJBW6-.js";import"./ThemedText-BYkJ0-Ir.js";import"./useDashboardSiteSummaryMeta-DAKl8DB8.js";import"./MarqueeText-BPsQKcYZ.js";import"./StatusBadge-DXi1E3D0.js";import"./StatusIndicator-C1q_oHMh.js";import"./icons-DU1jpZJN.js";import"./ActionButtonGroup-DOrVGrxN.js";import"./ThemedButton-BzvHMed-.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-C5WIcZ2x.js";import"./Tooltip-C2c0aTcG.js";import"./index-BHT1KwO5.js";import"./index-B5TPHR3E.js";import"./MonitorSelector-Ctx18E_t.js";import"./ThemedSelect-BP8dwt2l.js";import"./useThemedControlStyles-CBrepB0J.js";import"./monitorDisplayInfo-CSEyRPmO.js";import"./fallbacks-BEvrPo40.js";const e=g({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[l(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
