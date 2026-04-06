import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedText-CjgKw-SZ.js";import{n as o,t as s}from"./ThemedCheckbox-B4btp7ny.js";var c,l,u,d,f,p,m;t((()=>{o(),i(),c=e(n()),l=r(),u={component:s,args:{checked:!1,"aria-label":`Enable alerts`},argTypes:{onChange:{action:`change`}},parameters:{layout:`centered`},tags:[`autodocs`]},d=e=>{let{checked:t=!1,onChange:n,...r}=e,[i,o]=(0,c.useState)(t);return(0,l.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...r,checked:i,onChange:e=>{o(e.currentTarget.checked),n?.(e)}}),(0,l.jsx)(a,{children:`Enable downtime alerts`})]})},f={render:e=>(0,l.jsx)(d,{...e})},p={args:{checked:!0,disabled:!0,"aria-label":`Subscription locked`},render:e=>(0,l.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`0.5rem`},children:[(0,l.jsx)(s,{...e}),(0,l.jsx)(a,{variant:`secondary`,children:`Requires Pro plan`})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    "aria-label": "Subscription locked"
  },
  render: args => <label style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }}>
            <ThemedCheckbox {...args} />
            <ThemedText variant="secondary">Requires Pro plan</ThemedText>
        </label>
}`,...p.parameters?.docs?.source}}},m=[`Basic`,`Disabled`]}))();export{f as Basic,p as Disabled,m as __namedExportsOrder,u as default};