var S=Object.defineProperty;var a=(c,e)=>S(c,"name",{value:e,configurable:!0});import{j as D}from"./jsx-runtime-BHIWlbBZ.js";import{S as m}from"./SiteListLayoutSelector-Q5_iwV3g.js";import{r as n}from"./iframe-DyvIPkVZ.js";import"./icons-DV64AXrl.js";import"./Tooltip-BO0ObihS.js";import"./index-B-xPFuZC.js";import"./index-A94RU7PH.js";import"./preload-helper-Cc2_yIPf.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,z={args:{cardPresentation:"grid",listDensity:"comfortable",layout:"card-large",onLayoutChange:i("site-list/layout-change"),onListDensityChange:i("site-list/density-change"),onPresentationChange:i("site-list/presentation-change")},component:m,parameters:{layout:"centered"},render:a(function(e){const[p,l]=n.useState(e.layout),[u,d]=n.useState(e.cardPresentation),[y,g]=n.useState(e.listDensity??"comfortable"),C=a(t=>{l(t),e.onLayoutChange?.(t),t!=="card-large"&&d("grid")},"handleLayoutChange"),h=a(t=>{d(t),e.onPresentationChange?.(t)},"handlePresentationChange"),L=a(t=>{g(t),e.onListDensityChange?.(t)},"handleDensityChange");return D.jsx(m,{cardPresentation:u,layout:p,listDensity:y,onLayoutChange:C,onListDensityChange:L,onPresentationChange:h})},"render"),tags:["autodocs"]},s={},o={args:{layout:"card-compact"}},r={args:{layout:"list",listDensity:"cozy"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "card-compact"
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "list",
    listDensity: "cozy"
  }
}`,...r.parameters?.docs?.source}}};const R=["LargeCards","CompactCards","ListView"];export{o as CompactCards,s as LargeCards,r as ListView,R as __namedExportsOrder,z as default};
