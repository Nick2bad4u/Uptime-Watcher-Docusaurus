import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{xn as n}from"./iframe-lSASCLST.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedButton-CVs_rSPq.js";var o,s,c,l,u=e((()=>{o=t(n()),s=r(),c=({children:e,className:t=``,content:n})=>(0,s.jsx)(`div`,{className:`themed-tooltip ${t}`,title:n,children:e}),l=(0,o.memo)(c),c.__docgenInfo={description:`A themed tooltip component for displaying hover information

@param props - The tooltip properties

@returns The themed tooltip JSX element

@public`,methods:[],displayName:`ThemedTooltipComponent`,props:{content:{required:!0,tsType:{name:`string`},description:`Text content to display in the tooltip`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}})),d,f,p,m,h;e((()=>{i(),u(),d=r(),f={args:{content:`Opens the monitor configuration dialog`},component:l,parameters:{layout:`centered`},tags:[`autodocs`]},p={render:e=>(0,d.jsx)(l,{...e,children:(0,d.jsx)(a,{variant:`secondary`,children:`Hover me`})})},m={args:{content:`Refresh site status`},render:e=>(0,d.jsx)(l,{...e,children:(0,d.jsx)(a,{variant:`ghost`,children:`⟳`})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ThemedTooltip {...args}>
            <ThemedButton variant="secondary">Hover me</ThemedButton>
        </ThemedTooltip>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Refresh site status"
  },
  render: args => <ThemedTooltip {...args}>
            <ThemedButton variant="ghost">⟳</ThemedButton>
        </ThemedTooltip>
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithIconButton`]}))();export{p as Default,m as WithIconButton,h as __namedExportsOrder,f as default};