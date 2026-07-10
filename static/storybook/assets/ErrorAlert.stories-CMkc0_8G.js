import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-Be0Mue0n.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-TwaO5Cdr.js";import{n as o,t as s}from"./ErrorAlert-BXAUDLhb.js";var c,l,u,d,f,p,m,h,g,_;e((()=>{o(),i(),c=t(n()),l=r(),{action:u}=__STORYBOOK_MODULE_ACTIONS__,d={args:{message:`Failed to load monitor data.`,variant:`error`},argTypes:{variant:{control:`radio`,options:[`error`,`warning`,`info`]}},component:s,parameters:{layout:`centered`},tags:[`autodocs`]},f=e=>{let{onDismiss:t,...n}=e,[r,i]=(0,c.useState)(!0);return r?(0,l.jsx)(s,{...n,onDismiss:()=>{i(!1),t?.()}}):(0,l.jsx)(a,{size:`sm`,variant:`secondary`,children:`Alert dismissed`})},p={},m={args:{message:`Latency is increasing beyond the warning threshold.`,variant:`warning`}},h={args:{message:`All systems operational. Next check scheduled soon.`,variant:`info`}},g={args:{message:`SSL certificate expires in 7 days.`,onDismiss:u(`dismiss`),variant:`warning`},render:e=>(0,l.jsx)(f,{...e})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: "Latency is increasing beyond the warning threshold.",
    variant: "warning"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    message: "All systems operational. Next check scheduled soon.",
    variant: "info"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    message: "SSL certificate expires in 7 days.",
    onDismiss: action("dismiss"),
    variant: "warning"
  },
  render: args => <DismissibleStory {...args} />
}`,...g.parameters?.docs?.source}}},_=[`ErrorVariant`,`Warning`,`Informational`,`Dismissible`]}))();export{g as Dismissible,p as ErrorVariant,h as Informational,m as Warning,_ as __namedExportsOrder,d as default};