var x=Object.defineProperty;var i=(e,s)=>x(e,"name",{value:s,configurable:!0});import{j as p}from"./jsx-runtime-BHIWlbBZ.js";import{c as y,r as S}from"./iframe-DI6HKbXb.js";import{E as g}from"./ErrorAlert-C7oUtXOd.js";import{T as h}from"./ThemedText-BYkJ0-Ir.js";import"./preload-helper-Cc2_yIPf.js";import"./icons-DU1jpZJN.js";const{action:v}=__STORYBOOK_MODULE_ACTIONS__,A={args:{message:"Failed to load monitor data.",variant:"error"},argTypes:{variant:{control:"radio",options:["error","warning","info"]}},component:g,parameters:{layout:"centered"},tags:["autodocs"]},_=i(e=>{const s=y.c(9);let r,a;s[0]!==e?({onDismiss:r,...a}=e,s[0]=e,s[1]=r,s[2]=a):(r=s[1],a=s[2]);const[u,f]=S.useState(!0);if(!u){let o;return s[3]===Symbol.for("react.memo_cache_sentinel")?(o=p.jsx(h,{size:"sm",variant:"secondary",children:"Alert dismissed"}),s[3]=o):o=s[3],o}let t;s[4]!==r?(t=i(()=>{f(!1),r?.()},"t0"),s[4]=r,s[5]=t):t=s[5];let n;return s[6]!==a||s[7]!==t?(n=p.jsx(g,{...a,onDismiss:t}),s[6]=a,s[7]=t,s[8]=n):n=s[8],n},"DismissibleStory"),c={},m={args:{message:"Latency is increasing beyond the warning threshold.",variant:"warning"}},l={args:{message:"All systems operational. Next check scheduled soon.",variant:"info"}},d={args:{message:"SSL certificate expires in 7 days.",onDismiss:v("dismiss"),variant:"warning"},render:i(e=>p.jsx(_,{...e}),"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Latency is increasing beyond the warning threshold.",
    variant: "warning"
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    message: "All systems operational. Next check scheduled soon.",
    variant: "info"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    message: "SSL certificate expires in 7 days.",
    onDismiss: action("dismiss"),
    variant: "warning"
  },
  render: args => <DismissibleStory {...args} />
}`,...d.parameters?.docs?.source}}};const L=["ErrorVariant","Warning","Informational","Dismissible"];export{d as Dismissible,c as ErrorVariant,l as Informational,m as Warning,L as __namedExportsOrder,A as default};
