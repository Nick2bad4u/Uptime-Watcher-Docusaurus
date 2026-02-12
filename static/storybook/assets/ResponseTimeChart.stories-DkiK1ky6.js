var c=Object.defineProperty;var o=(e,r)=>c(e,"name",{value:r,configurable:!0});import{R as i}from"./ResponseTimeChart-BCzP24ck.js";import"./jsx-runtime-BHIWlbBZ.js";import"./iframe-BJrhacjf.js";import"./preload-helper-Cc2_yIPf.js";import"./index-IXQh-QpH.js";const l={maintainAspectRatio:!1,plugins:{legend:{display:!0,position:"top"}},responsive:!0,scales:{x:{grid:{display:!1},ticks:{maxRotation:0}},y:{beginAtZero:!0,ticks:{callback:o(e=>`${e} ms`,"callback")}}}},p=Array.from({length:12},(e,r)=>`${r+1}h`),n=o(e=>({datasets:[{backgroundColor:"rgba(59, 130, 246, 0.2)",borderColor:"#3B82F6",data:e,fill:!0,label:"Response Time",tension:.35}],labels:p}),"createDataset"),m=n([120,135,142,138,126,132,140,128,130,124,121,118]),d=n([120,128,135,900,780,480,210,180,150,138,128,120]),u=n(Array.from({length:12},()=>95)),R={args:{data:m,options:l},component:i,parameters:{layout:"centered"},tags:["autodocs"]},a={},s={args:{data:d}},t={args:{data:u},parameters:{docs:{description:{story:"Demonstrates a consistently fast API where response times hug a low threshold across all intervals."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: outageSpikeData
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: flatlineData
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates a consistently fast API where response times hug a low threshold across all intervals."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const S=["NormalOperation","IncidentRecovery","StableLowLatency"];export{s as IncidentRecovery,a as NormalOperation,t as StableLowLatency,S as __namedExportsOrder,R as default};
