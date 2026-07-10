import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{i as n,n as r,r as i,t as a}from"./siteStoryHelpers-DaNrZD16.js";import{n as o,t as s}from"./SiteTableRow-CjdhBTRE.js";var c,l,u,d,f,p,m,h,g;e((()=>{o(),n(),c=t(),l=r({identifier:`site-uptime`,monitors:[a({id:`monitor-http`,responseTime:110,status:`up`,url:`https://status.example.com`}),a({id:`monitor-ping`,monitoring:!0,responseTime:210,status:`up`,type:`ping`})],name:`Status Service`}),u={...l,monitors:l.monitors.map((e,t)=>t===0?{...e,responseTime:680,status:`down`}:e)},d={...l,monitoring:!1,monitors:l.monitors.map(e=>({...e,monitoring:!1,status:`paused`}))},f={args:{site:l},component:s,decorators:[i(()=>[l,u,d])],parameters:{layout:`padded`},render:e=>(0,c.jsx)(`div`,{className:`max-w-4xl overflow-x-auto`,children:(0,c.jsx)(`table`,{className:`site-table w-full border-collapse`,children:(0,c.jsx)(`tbody`,{children:(0,c.jsx)(s,{...e})})})}),tags:[`autodocs`]},p={},m={args:{site:u}},h={args:{site:d},parameters:{docs:{description:{story:`Highlights the styling used when an entire site is paused for maintenance across all monitors.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    site: incidentSite
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`DefaultRow`,`IncidentRow`,`PausedRow`]}))();export{p as DefaultRow,m as IncidentRow,h as PausedRow,g as __namedExportsOrder,f as default};