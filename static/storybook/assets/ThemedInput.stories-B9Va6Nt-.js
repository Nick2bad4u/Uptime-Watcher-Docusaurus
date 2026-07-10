import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-Bj9A_9iV.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-D28zYcdT.js";import{n as o,t as s}from"./ThemedInput-BgJyZ8a2.js";var c,l,u,d,f,p,m;e((()=>{o(),i(),c=t(n()),l=r(),u={args:{"aria-label":`Site URL`,placeholder:`https://status.example.com`,type:`text`},argTypes:{onChange:{action:`change`}},component:s,parameters:{layout:`padded`},tags:[`autodocs`]},d=e=>{let{containerWidth:t,label:n,labelId:r,onChange:i,value:o=``,...u}=e,[d,f]=(0,c.useState)(o);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:t},children:[(0,l.jsx)(`label`,{htmlFor:r,children:(0,l.jsx)(a,{variant:`secondary`,children:n})}),(0,l.jsx)(s,{...u,id:r,onChange:e=>{f(e.currentTarget.value),i?.(e)},value:d})]})},f={render:e=>(0,l.jsx)(d,{...e,containerWidth:`320px`,label:`Monitor URL`,labelId:`url-input`})},p={args:{"aria-label":`Interval`,max:60,min:1,placeholder:`15`,step:1,type:`number`},render:e=>(0,l.jsx)(d,{...e,containerWidth:`200px`,label:`Check interval (minutes)`,labelId:`interval-input`})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledInputStory {...args} containerWidth="320px" label="Monitor URL" labelId="url-input" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Interval",
    max: 60,
    min: 1,
    placeholder: "15",
    step: 1,
    type: "number"
  },
  render: args => <ControlledInputStory {...args} containerWidth="200px" label="Check interval (minutes)" labelId="interval-input" />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NumberInput`]}))();export{f as Default,p as NumberInput,m as __namedExportsOrder,u as default};