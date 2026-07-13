import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./HistoryChart-B9BiM-sq.js";var r,i,a,o,s,c,l,u;e((()=>{t(),r=[`up`,`up`,`degraded`,`up`,`down`],i=e=>{let t=Date.now();return Array.from({length:e},(e,n)=>{let i=r[n%r.length]??`up`;return{responseTime:80+n%5*25,status:i,timestamp:t-n*6e4}})},a=i(24),o={args:{history:a,maxItems:24,title:`Past 24 Checks`},component:n,parameters:{layout:`fullscreen`},tags:[`autodocs`]},s={},c={args:{history:a,maxItems:10,title:`Last 10 Checks`}},l={args:{history:i(12).map((e,t)=>t<4?{...e,responseTime:350+t*15,status:t===2?`degraded`:`down`}:e),title:`Incident Recovery`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    history: baseHistory,
    maxItems: 10,
    title: "Last 10 Checks"
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    history: createHistory(12).map((entry, index) => index < 4 ? {
      ...entry,
      responseTime: 350 + index * 15,
      status: index === 2 ? "degraded" : "down"
    } : entry),
    title: "Incident Recovery"
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`LimitedToTen`,`RecentDowntime`]}))();export{s as Default,c as LimitedToTen,l as RecentDowntime,u as __namedExportsOrder,o as default};