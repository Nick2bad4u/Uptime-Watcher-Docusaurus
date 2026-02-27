var h=Object.defineProperty;var n=(t,e)=>h(t,"name",{value:e,configurable:!0});import{j as o}from"./jsx-runtime-BHIWlbBZ.js";import{T as l}from"./ThemedButton-DbGfPeS5.js";import{r as T,c as g}from"./iframe-DyvIPkVZ.js";import"./types-B6zT3oaC.js";import"./preload-helper-Cc2_yIPf.js";const u=n(t=>{const e=g.c(4),{children:i,className:d,content:m}=t,c=`themed-tooltip ${d===void 0?"":d}`;let r;return e[0]!==i||e[1]!==m||e[2]!==c?(r=o.jsx("div",{className:c,title:m,children:i}),e[0]=i,e[1]=m,e[2]=c,e[3]=r):r=e[3],r},"ThemedTooltipComponent"),p=T.memo(u);u.__docgenInfo={description:`A themed tooltip component for displaying hover information

@param props - The tooltip properties

@returns The themed tooltip JSX element

@public`,methods:[],displayName:"ThemedTooltipComponent",props:{content:{required:!0,tsType:{name:"string"},description:"Text content to display in the tooltip"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};const C={component:p,args:{content:"Opens the monitor configuration dialog"},parameters:{layout:"centered"},tags:["autodocs"]},s={render:n(t=>o.jsx(p,{...t,children:o.jsx(l,{variant:"secondary",children:"Hover me"})}),"render")},a={args:{content:"Refresh site status"},render:n(t=>o.jsx(p,{...t,children:o.jsx(l,{variant:"ghost",children:"⟳"})}),"render")};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ThemedTooltip {...args}>
            <ThemedButton variant="secondary">Hover me</ThemedButton>
        </ThemedTooltip>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    content: "Refresh site status"
  },
  render: args => <ThemedTooltip {...args}>
            <ThemedButton variant="ghost">⟳</ThemedButton>
        </ThemedTooltip>
}`,...a.parameters?.docs?.source}}};const E=["Default","WithIconButton"];export{s as Default,a as WithIconButton,E as __namedExportsOrder,C as default};
