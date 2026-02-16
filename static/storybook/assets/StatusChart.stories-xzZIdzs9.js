var i=Object.defineProperty;var n=(r,s)=>i(r,"name",{value:s,configurable:!0});import{S as c}from"./StatusChart-PZJrQXTB.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-DI6HKbXb.js";import"./preload-helper-Cc2_yIPf.js";import"./index-BLY3iDtK.js";const p={maintainAspectRatio:!1,plugins:{legend:{display:!1}},responsive:!0,scales:{x:{grid:{display:!1}},y:{beginAtZero:!0,grid:{color:"rgba(148, 163, 184, 0.25)"}}}},o=n((r,s,d)=>({datasets:[{backgroundColor:["#10B981","#F59E0B","#EF4444"],borderColor:["#059669","#D97706","#DC2626"],borderWidth:1,data:[r,s,d],label:"Status Count"}],labels:["Up","Degraded","Down"]}),"createStatusData"),m=o(22,1,1),u=o(9,6,9),l=o(0,3,0),b={args:{data:m,options:p},component:c,parameters:{layout:"centered"},tags:["autodocs"]},a={},e={args:{data:u}},t={args:{data:l},parameters:{docs:{description:{story:"Simulates a maintenance window with monitors paused or in degraded warm-up while systems restart."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    data: incidentData
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const f=["PredominantlyHealthy","ActiveOutage","MaintenanceWindow"];export{e as ActiveOutage,t as MaintenanceWindow,a as PredominantlyHealthy,f as __namedExportsOrder,b as default};
