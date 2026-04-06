import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedText-CjgKw-SZ.js";import{n as o,t as s}from"./ThemedInput-DFRDP9kM.js";var c,l,u,d,f,p,m;t((()=>{o(),i(),c=e(n()),l=r(),u={component:s,args:{type:`text`,placeholder:`https://status.example.com`,"aria-label":`Site URL`},argTypes:{onChange:{action:`change`}},parameters:{layout:`padded`},tags:[`autodocs`]},d=e=>{let{containerWidth:t,label:n,labelId:r,onChange:i,value:o=``,...u}=e,[d,f]=(0,c.useState)(o);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:t},children:[(0,l.jsx)(`label`,{htmlFor:r,children:(0,l.jsx)(a,{variant:`secondary`,children:n})}),(0,l.jsx)(s,{...u,id:r,onChange:e=>{f(e.currentTarget.value),i?.(e)},value:d})]})},f={render:e=>(0,l.jsx)(d,{...e,containerWidth:`320px`,label:`Monitor URL`,labelId:`url-input`})},p={args:{type:`number`,min:1,max:60,step:1,placeholder:`15`,"aria-label":`Interval`},render:e=>(0,l.jsx)(d,{...e,containerWidth:`200px`,label:`Check interval (minutes)`,labelId:`interval-input`})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledInputStory {...args} containerWidth="320px" label="Monitor URL" labelId="url-input" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    min: 1,
    max: 60,
    step: 1,
    placeholder: "15",
    "aria-label": "Interval"
  },
  render: args => <ControlledInputStory {...args} containerWidth="200px" label="Check interval (minutes)" labelId="interval-input" />
}`,...p.parameters?.docs?.source}}},m=[`Default`,`NumberInput`]}))();export{f as Default,p as NumberInput,m as __namedExportsOrder,u as default};