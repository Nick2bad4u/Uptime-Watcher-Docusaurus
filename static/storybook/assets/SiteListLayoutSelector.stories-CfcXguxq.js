import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{xn as n}from"./iframe-cfEUpOl1.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./SiteListLayoutSelector-DbbBrTsr.js";var o,s,c,l,u,d,f,p;e((()=>{i(),o=t(n()),s=r(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={args:{cardPresentation:`grid`,layout:`card-large`,listDensity:`comfortable`,onLayoutChange:c(`site-list/layout-change`),onListDensityChange:c(`site-list/density-change`),onPresentationChange:c(`site-list/presentation-change`)},component:a,parameters:{layout:`centered`},render:function(e){let[t,n]=(0,o.useState)(e.layout),[r,i]=(0,o.useState)(e.cardPresentation),[c,l]=(0,o.useState)(e.listDensity??`comfortable`);return(0,s.jsx)(a,{cardPresentation:r,layout:t,listDensity:c,onLayoutChange:t=>{n(t),e.onLayoutChange?.(t),t!==`card-large`&&i(`grid`)},onListDensityChange:t=>{l(t),e.onListDensityChange?.(t)},onPresentationChange:t=>{i(t),e.onPresentationChange?.(t)}})},tags:[`autodocs`]},u={},d={args:{layout:`card-compact`}},f={args:{layout:`list`,listDensity:`cozy`}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "card-compact"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "list",
    listDensity: "cozy"
  }
}`,...f.parameters?.docs?.source}}},p=[`LargeCards`,`CompactCards`,`ListView`]}))();export{d as CompactCards,u as LargeCards,f as ListView,p as __namedExportsOrder,l as default};