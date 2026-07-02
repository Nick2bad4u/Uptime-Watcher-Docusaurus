import{i as e}from"./preload-helper-CT_b8DTk.js";import{n as t,t as n}from"./ResponseTimeChart-BiUGPjUu.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{t(),r={maintainAspectRatio:!1,plugins:{legend:{display:!0,position:`top`}},responsive:!0,scales:{x:{grid:{display:!1},ticks:{maxRotation:0}},y:{beginAtZero:!0,ticks:{callback:e=>`${e} ms`}}}},i=Array.from({length:12},(e,t)=>`${t+1}h`),a=e=>({datasets:[{backgroundColor:`rgba(59, 130, 246, 0.2)`,borderColor:`#3B82F6`,data:e,fill:!0,label:`Response Time`,tension:.35}],labels:i}),o=a([120,135,142,138,126,132,140,128,130,124,121,118]),s=a([120,128,135,900,780,480,210,180,150,138,128,120]),c=a(Array.from({length:12},()=>95)),l={args:{data:o,options:r},component:n,parameters:{layout:`centered`},tags:[`autodocs`]},u={},d={args:{data:s}},f={args:{data:c},parameters:{docs:{description:{story:`Demonstrates a consistently fast API where response times hug a low threshold across all intervals.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: outageSpikeData
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p=[`NormalOperation`,`IncidentRecovery`,`StableLowLatency`]}))();export{d as IncidentRecovery,u as NormalOperation,f as StableLowLatency,p as __namedExportsOrder,l as default};