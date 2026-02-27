var u=Object.defineProperty;var m=(t,a)=>u(t,"name",{value:a,configurable:!0});import{j as r}from"./jsx-runtime-BHIWlbBZ.js";import{S as n}from"./SiteTableRow-p5tICbt9.js";import{a as l,b as p,c as g}from"./siteStoryHelpers-kMShK3-v.js";import"./iframe-DyvIPkVZ.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorRuntime-C0KRJZUc.js";import"./selectors-C0X4eAib.js";import"./storeErrorHandling-BURLOlzH.js";import"./react-CGdiL3be.js";import"./useTheme-DJ7epzI1.js";import"./EventsService-CzUXSiPB.js";import"./useSitesStore-_T8EKnLS.js";import"./validation-CJJLDQTF.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./useUiStore-bsatqH6C.js";import"./monitorUiHelpers-CzPr8sA5.js";import"./ThemedText-DrvOTmqm.js";import"./useDashboardSiteSummaryMeta-BdNDszSx.js";import"./MarqueeText-DOLoaKO0.js";import"./StatusBadge-Iqu2J7Mx.js";import"./StatusIndicator-CzJtldnC.js";import"./icons-DV64AXrl.js";import"./ActionButtonGroup-Bm39flD2.js";import"./ThemedButton-DbGfPeS5.js";import"./types-B6zT3oaC.js";import"./SiteMonitoringButton-CR_Xfps8.js";import"./Tooltip-BO0ObihS.js";import"./index-B-xPFuZC.js";import"./index-A94RU7PH.js";import"./MonitorSelector-_nJMeYFj.js";import"./ThemedSelect-BcPOVSaP.js";import"./useThemedControlStyles-mPfLD04Y.js";import"./monitorDisplayInfo-CinlOv80.js";import"./fallbacks-C9nVEKxx.js";const e=l({identifier:"site-uptime",monitors:[p({id:"monitor-http",responseTime:110,status:"up",url:"https://status.example.com"}),p({id:"monitor-ping",monitoring:!0,responseTime:210,status:"up",type:"ping"})],name:"Status Service"}),c={...e,monitors:e.monitors.map((t,a)=>a===0?{...t,responseTime:680,status:"down"}:t)},d={...e,monitoring:!1,monitors:e.monitors.map(t=>({...t,monitoring:!1,status:"paused"}))},Y={args:{site:e},component:n,decorators:[g(()=>[e,c,d])],parameters:{layout:"padded"},render:m(t=>r.jsx("div",{className:"max-w-4xl overflow-x-auto",children:r.jsx("table",{className:"site-table w-full border-collapse",children:r.jsx("tbody",{children:r.jsx(n,{...t})})})}),"render"),tags:["autodocs"]},o={},s={args:{site:c}},i={args:{site:d},parameters:{docs:{description:{story:"Highlights the styling used when an entire site is paused for maintenance across all monitors."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
