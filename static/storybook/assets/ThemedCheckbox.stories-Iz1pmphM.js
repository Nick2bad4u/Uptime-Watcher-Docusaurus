import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-DvlgmmzG.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ThemedText-BVqF-Hbo.js";import{n as o,t as s}from"./ThemedCheckbox-B5Oqds_N.js";var c,l,u,d,f,p,m;t((()=>{o(),i(),c=e(n()),l=r(),u={args:{"aria-label":`Enable alerts`,checked:!1},argTypes:{onChange:{action:`change`}},component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d=e=>{let{checked:t=!1,onChange:n,...r}=e,[i,o]=(0,c.useState)(t);return(0,l.jsxs)(`label`,{style:{alignItems:`center`,display:`flex`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...r,checked:i,onChange:e=>{o(e.currentTarget.checked),n?.(e)}}),(0,l.jsx)(a,{children:`Enable downtime alerts`})]})},f={render:e=>(0,l.jsx)(d,{...e})},p={args:{"aria-label":`Subscription locked`,checked:!0,disabled:!0},render:e=>(0,l.jsxs)(`label`,{style:{alignItems:`center`,display:`flex`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...e}),(0,l.jsx)(a,{variant:`secondary`,children:`Requires Pro plan`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Subscription locked",
    checked: true,
    disabled: true
  },
  render: args => <label style={{
    alignItems: "center",
    display: "flex",
    gap: "0.5rem"
  }}>
            <ThemedCheckbox {...args} />
            <ThemedText variant="secondary">Requires Pro plan</ThemedText>
        </label>
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Disabled`]}))();export{f as Basic,p as Disabled,m as __namedExportsOrder,u as default};