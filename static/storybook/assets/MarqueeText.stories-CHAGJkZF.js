import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./MarqueeText-IJXUX5nI.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={args:{duration:`14s`,gap:`1.5rem`,text:`Uptime Watcher • Command center for resilient sites • Hover to pause the marquee`,textSize:`lg`,textWeight:`semibold`},argTypes:{activeClassName:{control:!1},className:{control:!1},cloneClassName:{control:!1},dependencies:{control:!1},duration:{control:`text`,description:"Duration for a full marquee cycle (e.g. `14s`)."},gap:{control:`text`,description:"Spacing between repeated segments (e.g. `1.5rem`)."},segmentClassName:{control:!1},style:{control:!1},text:{control:`text`,description:`Content rendered inside the marquee track.`},textSize:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`,`3xl`,`4xl`,`base`]},textWeight:{control:`inline-radio`,options:[`normal`,`medium`,`semibold`,`bold`]},trackClassName:{control:!1}},component:r,decorators:[e=>(0,i.jsx)(`div`,{className:`flex w-full max-w-96 items-center justify-center rounded-2xl border border-slate-400/35 bg-slate-900/90 p-5`,children:(0,i.jsx)(e,{})})],parameters:{docs:{description:{component:"`MarqueeText` detects horizontal overflow and animates repeated segments. Hover or focus the marquee to pause the animation for readability."}},layout:`centered`},tags:[`autodocs`]},o=({textSize:e,textWeight:t,...n})=>(0,i.jsx)(r,{...n,textProps:{size:e,weight:t}}),s={render:o},c={args:{duration:`22s`},render:o},l={args:{text:`Short label fits without marquee`},render:o},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: renderMarquee
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    duration: "22s"
  },
  render: renderMarquee
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: "Short label fits without marquee"
  },
  render: renderMarquee
}`,...l.parameters?.docs?.source}}},u=[`Overflowing`,`SlowScroll`,`ShortLabel`]}))();export{s as Overflowing,l as ShortLabel,c as SlowScroll,u as __namedExportsOrder,a as default};