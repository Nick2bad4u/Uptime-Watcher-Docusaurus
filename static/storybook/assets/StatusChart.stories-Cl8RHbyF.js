import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./StatusChart-BlrmxR4m.js";var r,i,a,o,s,c,l,u,d,f;e((()=>{t(),r={maintainAspectRatio:!1,plugins:{legend:{display:!1}},responsive:!0,scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{color:`rgba(148, 163, 184, 0.25)`}}}},i=(e,t,n)=>({datasets:[{backgroundColor:[`#10B981`,`#F59E0B`,`#EF4444`],borderColor:[`#059669`,`#D97706`,`#DC2626`],borderWidth:1,data:[e,t,n],label:`Status Count`}],labels:[`Up`,`Degraded`,`Down`]}),a=i(22,1,1),o=i(9,6,9),s=i(0,3,0),c={args:{data:a,options:r},component:n,parameters:{layout:`centered`},tags:[`autodocs`]},l={},u={args:{data:o}},d={args:{data:s},parameters:{docs:{description:{story:`Simulates a maintenance window with monitors paused or in degraded warm-up while systems restart.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: incidentData
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: pausedData
  },
  parameters: {
    docs: {
      description: {
        story: "Simulates a maintenance window with monitors paused or in degraded warm-up while systems restart."
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f=[`PredominantlyHealthy`,`ActiveOutage`,`MaintenanceWindow`]}))();export{u as ActiveOutage,d as MaintenanceWindow,l as PredominantlyHealthy,f as __namedExportsOrder,c as default};