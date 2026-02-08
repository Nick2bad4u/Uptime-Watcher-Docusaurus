var d=Object.defineProperty;var l=(e,s)=>d(e,"name",{value:s,configurable:!0});import{j as a}from"./jsx-runtime-BHIWlbBZ.js";import{M as c}from"./MarqueeText-BKJj2s03.js";import"./iframe-CreBuNPk.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedText-BJI_SxX2.js";const m=["xs","sm","md","lg","xl","2xl","3xl","4xl","base"],p=["normal","medium","semibold","bold"],b={args:{duration:"14s",gap:"1.5rem",text:"Uptime Watcher • Command center for resilient sites • Hover to pause the marquee",textSize:"lg",textWeight:"semibold"},argTypes:{activeClassName:{control:!1},className:{control:!1},cloneClassName:{control:!1},dependencies:{control:!1},duration:{control:"text",description:"Duration for a full marquee cycle (e.g. `14s`)."},gap:{control:"text",description:"Spacing between repeated segments (e.g. `1.5rem`)."},segmentClassName:{control:!1},style:{control:!1},text:{control:"text",description:"Content rendered inside the marquee track."},textSize:{control:"select",options:m},textWeight:{control:"inline-radio",options:p},trackClassName:{control:!1}},component:c,decorators:[e=>a.jsx("div",{className:"flex w-full max-w-96 items-center justify-center rounded-2xl border border-slate-400/35 bg-slate-900/90 p-5",children:a.jsx(e,{})})],parameters:{docs:{description:{component:"`MarqueeText` detects horizontal overflow and animates repeated segments. Hover or focus the marquee to pause the animation for readability."}},layout:"centered"},tags:["autodocs"]},n=l(({textSize:e,textWeight:s,...i})=>a.jsx(c,{...i,textProps:{size:e,weight:s}}),"renderMarquee"),r={render:n},t={args:{duration:"22s"},render:n},o={args:{text:"Short label fits without marquee"},render:n};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: renderMarquee
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    duration: "22s"
  },
  render: renderMarquee
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Short label fits without marquee"
  },
  render: renderMarquee
}`,...o.parameters?.docs?.source}}};const q=["Overflowing","SlowScroll","ShortLabel"];export{r as Overflowing,o as ShortLabel,t as SlowScroll,q as __namedExportsOrder,b as default};
