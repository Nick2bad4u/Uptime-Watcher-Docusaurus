var d=Object.defineProperty;var n=(t,e)=>d(t,"name",{value:e,configurable:!0});import{H as u}from"./HistoryChart-BY_V4xH3.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-CreBuNPk.js";import"./preload-helper-Cc2_yIPf.js";import"./MiniChartBar-mbvQaGRA.js";import"./time-De8y--jI.js";import"./fallbacks-M3AOOrC-.js";import"./useTheme-BeZpuX1q.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./EventsService-BjxJj59F.js";import"./ThemedText-BJI_SxX2.js";const m=["up","up","degraded","up","down"],i=n(t=>{const e=Date.now();return Array.from({length:t},(y,a)=>{const p=m[a%m.length]??"up";return{responseTime:80+a%5*25,status:p,timestamp:e-a*6e4}})},"createHistory"),c=i(24),L={args:{history:c,maxItems:24,title:"Past 24 Checks"},component:u,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={},s={args:{history:c,maxItems:10,title:"Last 10 Checks"}},o={args:{history:i(12).map((t,e)=>e<4?{...t,responseTime:350+e*15,status:e===2?"degraded":"down"}:t),title:"Incident Recovery"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    history: baseHistory,
    maxItems: 10,
    title: "Last 10 Checks"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    history: createHistory(12).map((entry, index) => index < 4 ? {
      ...entry,
      responseTime: 350 + index * 15,
      status: index === 2 ? "degraded" : "down"
    } : entry),
    title: "Incident Recovery"
  }
}`,...o.parameters?.docs?.source}}};const R=["Default","LimitedToTen","RecentDowntime"];export{r as Default,s as LimitedToTen,o as RecentDowntime,R as __namedExportsOrder,L as default};
