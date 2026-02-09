import{j as s}from"./jsx-runtime-BHIWlbBZ.js";import{S as c}from"./SurfaceContainer-Pn6_9Thf.js";import{T as t}from"./ThemedText-CsWFmcMv.js";import"./iframe-MD7yCyl4.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedBox-jwFwTgbC.js";import"./types-B6zT3oaC.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,f={args:{children:s.jsxs("div",{className:"space-y-2",children:[s.jsx(t,{size:"md",weight:"semibold",children:"Surface Container"}),s.jsx(t,{size:"sm",variant:"secondary",children:"Shared wrapper for base surfaces with consistent padding, rounding, and palette variants."})]})},component:c,parameters:{layout:"padded"},tags:["autodocs"]},e={},a={args:{surface:"elevated",variant:"secondary"}},r={args:{as:"button",onClick:n("surface-container/click"),role:"button",shadow:"md",surface:"overlay",variant:"secondary",children:s.jsx(t,{size:"sm",weight:"medium",children:"Clickable surface"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    surface: "elevated",
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    as: "button",
    onClick: action("surface-container/click"),
    role: "button",
    shadow: "md",
    surface: "overlay",
    variant: "secondary",
    children: <ThemedText size="sm" weight="medium">
                Clickable surface
            </ThemedText>
  }
}`,...r.parameters?.docs?.source}}};const h=["BaseSurface","ElevatedSurface","InteractiveSurface"];export{e as BaseSurface,a as ElevatedSurface,r as InteractiveSurface,h as __namedExportsOrder,f as default};
