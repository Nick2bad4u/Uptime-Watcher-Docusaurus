var y=Object.defineProperty;var x=(n,e)=>y(n,"name",{value:e,configurable:!0});import{j as t}from"./jsx-runtime-BHIWlbBZ.js";import{c as S}from"./iframe-CreBuNPk.js";import{S as b}from"./StatusIndicator-Dalt1106.js";import{T as f}from"./ThemedText-BJI_SxX2.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./icons-D_Q_f2rV.js";import"./useTheme-BeZpuX1q.js";import"./EventsService-BjxJj59F.js";const h=x(n=>{const e=S.c(13),{className:w,count:m,label:u,status:p}=n,g=`group flex items-center space-x-2 rounded-md px-2 py-1 transition-all duration-200 ${w===void 0?"":w}`;let s;e[0]!==p?(s=t.jsx(b,{size:"sm",status:p}),e[0]=p,e[1]=s):s=e[1];let r;e[2]!==m?(r=t.jsx(f,{size:"sm",variant:"primary",weight:"semibold",children:m}),e[2]=m,e[3]=r):r=e[3];let a;e[4]!==u?(a=t.jsx(f,{className:"leading-none",size:"xs",variant:"secondary",weight:"medium",children:u}),e[4]=u,e[5]=a):a=e[5];let o;e[6]!==r||e[7]!==a?(o=t.jsxs("div",{className:"flex flex-col",children:[r,a]}),e[6]=r,e[7]=a,e[8]=o):o=e[8];let i;return e[9]!==g||e[10]!==s||e[11]!==o?(i=t.jsxs("div",{className:g,children:[s,o]}),e[9]=g,e[10]=s,e[11]=o,e[12]=i):i=e[12],i},"StatusCounter");h.__docgenInfo={description:`StatusCounter component for displaying status counts with indicators.

@param props - The component properties

@returns JSX element representing the status counter`,methods:[],displayName:"StatusCounter",props:{className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}},count:{required:!0,tsType:{name:"number"},description:"The count to display"},label:{required:!0,tsType:{name:"string"},description:"The label text to display"},status:{required:!0,tsType:{name:"union",raw:'"degraded" | "down" | "up"',elements:[{name:"literal",value:'"degraded"'},{name:"literal",value:'"down"'},{name:"literal",value:'"up"'}]},description:"The status type for the indicator"}}};const I={args:{count:18,label:"Up",status:"up"},component:h,parameters:{layout:"centered"},render:x(n=>t.jsxs("div",{className:"flex items-center space-x-4 bg-slate-900/40 p-8 text-slate-200",children:[t.jsx(f,{size:"sm",weight:"medium",children:"Status"}),t.jsx(h,{...n})]}),"render"),tags:["autodocs"]},d={},l={args:{count:4,label:"Degraded",status:"degraded"}},c={args:{count:2,label:"Down",status:"down"}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:"{}",...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    count: 4,
    label: "Degraded",
    status: "degraded"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    count: 2,
    label: "Down",
    status: "down"
  }
}`,...c.parameters?.docs?.source}}};const R=["UpMonitors","DegradedMonitors","DownMonitors"];export{l as DegradedMonitors,c as DownMonitors,d as UpMonitors,R as __namedExportsOrder,I as default};
