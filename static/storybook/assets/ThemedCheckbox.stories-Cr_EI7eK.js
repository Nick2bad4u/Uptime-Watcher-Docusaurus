import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{xn as n}from"./iframe-CuB8g8Z1.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-B9mi3w1x.js";import{n as o,t as s}from"./ThemedCheckbox-CWJLxYPe.js";var c,l,u,d,f,p,m;e((()=>{o(),i(),c=t(n()),l=r(),u={args:{"aria-label":`Enable alerts`,checked:!1},argTypes:{onChange:{action:`change`}},component:s,parameters:{layout:`centered`},tags:[`autodocs`]},d=e=>{let{checked:t=!1,onChange:n,...r}=e,[i,o]=(0,c.useState)(t);return(0,l.jsxs)(`label`,{style:{alignItems:`center`,display:`flex`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...r,checked:i,onChange:e=>{o(e.currentTarget.checked),n?.(e)}}),(0,l.jsx)(a,{children:`Enable downtime alerts`})]})},f={render:e=>(0,l.jsx)(d,{...e})},p={args:{"aria-label":`Subscription locked`,checked:!0,disabled:!0},render:e=>(0,l.jsxs)(`label`,{style:{alignItems:`center`,display:`flex`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...e}),(0,l.jsx)(a,{variant:`secondary`,children:`Requires Pro plan`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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