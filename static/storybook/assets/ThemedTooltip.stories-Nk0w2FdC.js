import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedButton-D1o_Roas.js";var o,s,c,l,u=t((()=>{o=e(n()),s=r(),c=({children:e,className:t=``,content:n})=>(0,s.jsx)(`div`,{className:`themed-tooltip ${t}`,title:n,children:e}),l=(0,o.memo)(c),c.__docgenInfo={description:`A themed tooltip component for displaying hover information

@param props - The tooltip properties

@returns The themed tooltip JSX element

@public`,methods:[],displayName:`ThemedTooltipComponent`,props:{content:{required:!0,tsType:{name:`string`},description:`Text content to display in the tooltip`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}})),d,f,p,m,h;t((()=>{i(),u(),d=r(),f={component:l,args:{content:`Opens the monitor configuration dialog`},parameters:{layout:`centered`},tags:[`autodocs`]},p={render:e=>(0,d.jsx)(l,{...e,children:(0,d.jsx)(a,{variant:`secondary`,children:`Hover me`})})},m={args:{content:`Refresh site status`},render:e=>(0,d.jsx)(l,{...e,children:(0,d.jsx)(a,{variant:`ghost`,children:`⟳`})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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