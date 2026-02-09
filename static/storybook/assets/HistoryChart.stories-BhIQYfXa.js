var d=Object.defineProperty;var n=(t,e)=>d(t,"name",{value:e,configurable:!0});import{H as u}from"./HistoryChart-jKZv2Ief.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-DuEuG6JD.js";import"./preload-helper-Cc2_yIPf.js";import"./MiniChartBar-Bo0C39cr.js";import"./time-zhZsORpj.js";import"./fallbacks-DxKiKyJp.js";import"./useTheme-BPQlNHcU.js";import"./storeErrorHandling-DNI8Znf5.js";import"./react-BTwblIux.js";import"./EventsService-CHHrEves.js";import"./ThemedText-Cm3TRmYk.js";const m=["up","up","degraded","up","down"],i=n(t=>{const e=Date.now();return Array.from({length:t},(y,a)=>{const p=m[a%m.length]??"up";return{responseTime:80+a%5*25,status:p,timestamp:e-a*6e4}})},"createHistory"),c=i(24),L={args:{history:c,maxItems:24,title:"Past 24 Checks"},component:u,parameters:{layout:"fullscreen"},tags:["autodocs"]},r={},s={args:{history:c,maxItems:10,title:"Last 10 Checks"}},o={args:{history:i(12).map((t,e)=>e<4?{...t,responseTime:350+e*15,status:e===2?"degraded":"down"}:t),title:"Incident Recovery"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
