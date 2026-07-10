import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Hn as n,Y as r,z as i}from"./iframe-DgKT2GkH.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{n as o,t as s}from"./AnalyticsTab-GrFYhq0r.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{o(),r(),c=t(n()),l=a(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d=`http`,f={maintainAspectRatio:!1,plugins:{legend:{display:!1}},responsive:!0},p={maintainAspectRatio:!1,plugins:{legend:{display:!1}},responsive:!0},m={maintainAspectRatio:!1,plugins:{legend:{align:`center`,position:`right`}},responsive:!0},h={datasets:[{backgroundColor:[`#10B981`,`#F59E0B`,`#EF4444`],borderColor:[`#059669`,`#D97706`,`#DC2626`],borderWidth:1,data:[420,36,12],label:`Status Counts`}],labels:[`Up`,`Degraded`,`Down`]},g={datasets:[{backgroundColor:`rgba(59, 130, 246, 0.15)`,borderColor:`#3B82F6`,data:[210,240,215,198,260,230,220],fill:!0,label:`Response Time`,tension:.35}],labels:[`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`,`Sun`]},_={datasets:[{backgroundColor:[`#22C55E`,`#F97316`,`#EF4444`],borderColor:[`#16A34A`,`#EA580C`,`#DC2626`],borderWidth:1,data:[94,4,2]}],labels:[`Up`,`Degraded`,`Down`]},v=[{duration:12*6e4,end:Date.now()-18e5,start:Date.now()-192e4},{duration:8*6e4,end:Date.now()-36e5,start:Date.now()-368e4}],y=e=>{let t=Math.round(e/6e4);return t<60?`${t} min`:`${Math.floor(t/60)} h ${t%60} min`},b=e=>`${e} ms`,x=e=>e>=99.9?`Exceptional`:e>=99?`Excellent`:e>=97?`Good`:e>=95?`Fair`:`Needs attention`,S=e=>({backgroundColor:e.map(()=>`#2563eb`),borderColor:e.map(()=>`#1d4ed8`),borderWidth:1,data:e,label:h.datasets.at(0)?.label??`Status Counts`}),C=e=>({backgroundColor:e.map(()=>`#22c55e`),borderColor:e.map(()=>`#15803d`),borderWidth:1,data:e}),w=({setShowAdvancedMetrics:e,setSiteDetailsChartTimeRange:t,showAdvancedMetrics:n,siteDetailsChartTimeRange:r,...i})=>{let[a,o]=(0,c.useState)(r),[u,d]=(0,c.useState)(n),f=(0,c.useCallback)(t=>{d(t),e?.(t)},[e]),p=(0,c.useCallback)(e=>{o(e),t?.(e)},[t]);return(0,l.jsx)(s,{...i,setShowAdvancedMetrics:f,setSiteDetailsChartTimeRange:p,showAdvancedMetrics:u,siteDetailsChartTimeRange:a})},T={args:{avgResponseTime:225,barChartData:h,barChartOptions:f,doughnutOptions:m,downCount:12,downtimePeriods:v,formatDuration:y,formatResponseTime:b,getAvailabilityDescription:x,lineChartData:g,lineChartOptions:p,monitorType:d,mttr:6*6e4,p50:185,p95:420,p99:680,setShowAdvancedMetrics:u(`analytics/setShowAdvanced`),setSiteDetailsChartTimeRange:u(`analytics/setRange`),showAdvancedMetrics:!1,siteDetailsChartTimeRange:i[1]??`7d`,totalChecks:468,totalDowntime:22*6e4,upCount:444,uptime:`98.4`,uptimeChartData:_},component:s,parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook metadata for the {@link AnalyticsTab} component stories.`}}},render:e=>(0,l.jsx)(w,{...e}),tags:[`autodocs`]},E={},D={args:{showAdvancedMetrics:!0}},O={args:{barChartData:{datasets:[S([280,60,128])],labels:h.labels},downCount:128,downtimePeriods:v.map(e=>({...e,duration:e.duration*2})),totalDowntime:86*6e4,uptime:`93.2`,uptimeChartData:{datasets:[C([70,12,18])],labels:_.labels}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    showAdvancedMetrics: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    barChartData: {
      datasets: [createBarDatasetOverride([280, 60, 128])],
      labels: barChartData.labels
    },
    downCount: 128,
    downtimePeriods: downtimePeriods.map(period => ({
      ...period,
      duration: period.duration * 2
    })),
    totalDowntime: 86 * 60_000,
    uptime: "93.2",
    uptimeChartData: {
      datasets: [createUptimeDatasetOverride([70, 12, 18])],
      labels: uptimeChartData.labels
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`DefaultView`,`AdvancedMetricsVisible`,`HighIncidentVolume`]}))();export{D as AdvancedMetricsVisible,E as DefaultView,O as HighIncidentVolume,k as __namedExportsOrder,T as default};