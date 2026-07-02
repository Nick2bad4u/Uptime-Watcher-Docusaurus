import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./ThemedText-BXKc0W0U.js";import{n as i,t as a}from"./StatusIndicator-Drrdfxh7.js";var o,s,c=e((()=>{i(),n(),o=t(),s=({className:e=``,count:t,label:n,status:i})=>(0,o.jsxs)(`div`,{className:`group flex items-center space-x-2 rounded-md px-2 py-1 transition-all duration-200 ${e}`,children:[(0,o.jsx)(a,{size:`sm`,status:i}),(0,o.jsxs)(`div`,{className:`flex flex-col`,children:[(0,o.jsx)(r,{size:`sm`,variant:`primary`,weight:`semibold`,children:t}),(0,o.jsx)(r,{className:`leading-none`,size:`xs`,variant:`secondary`,weight:`medium`,children:n})]})]}),s.__docgenInfo={description:`StatusCounter component for displaying status counts with indicators.

@param props - The component properties

@returns JSX element representing the status counter`,methods:[],displayName:`StatusCounter`,props:{className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`,defaultValue:{value:`""`,computed:!1}},count:{required:!0,tsType:{name:`number`},description:`The count to display`},label:{required:!0,tsType:{name:`string`},description:`The label text to display`},status:{required:!0,tsType:{name:`union`,raw:`"degraded" | "down" | "up"`,elements:[{name:`literal`,value:`"degraded"`},{name:`literal`,value:`"down"`},{name:`literal`,value:`"up"`}]},description:`The status type for the indicator`}}}})),l,u,d,f,p,m;e((()=>{c(),n(),l=t(),u={args:{count:18,label:`Up`,status:`up`},component:s,parameters:{layout:`centered`},render:e=>(0,l.jsxs)(`div`,{className:`flex items-center space-x-4 bg-slate-900/40 p-8 text-slate-200`,children:[(0,l.jsx)(r,{size:`sm`,weight:`medium`,children:`Status`}),(0,l.jsx)(s,{...e})]}),tags:[`autodocs`]},d={},f={args:{count:4,label:`Degraded`,status:`degraded`}},p={args:{count:2,label:`Down`,status:`down`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4,
    label: "Degraded",
    status: "degraded"
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2,
    label: "Down",
    status: "down"
  }
}`,...p.parameters?.docs?.source}}},m=[`UpMonitors`,`DegradedMonitors`,`DownMonitors`]}))();export{f as DegradedMonitors,p as DownMonitors,d as UpMonitors,m as __namedExportsOrder,u as default};