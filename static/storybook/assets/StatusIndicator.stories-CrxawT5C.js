var u=Object.defineProperty;var i=(e,r)=>u(e,"name",{value:r,configurable:!0});import{j as s}from"./jsx-runtime-BHIWlbBZ.js";import{S as t}from"./StatusIndicator-Dalt1106.js";import"./iframe-CreBuNPk.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./icons-D_Q_f2rV.js";import"./useTheme-BeZpuX1q.js";import"./EventsService-BjxJj59F.js";const h={component:t,args:{status:"up",size:"md",showText:!1},parameters:{layout:"centered"},tags:["autodocs"]},a={},n={args:{showText:!0,status:"pending"}},o={render:i(e=>s.jsxs("div",{style:{display:"flex",gap:"1.5rem",alignItems:"center"},children:[s.jsx(t,{...e,size:"sm",status:"up"}),s.jsx(t,{...e,size:"md",status:"degraded"}),s.jsx(t,{...e,showText:!0,size:"lg",status:"down"})]}),"render")},d={render:i(()=>{const e=["up","degraded","pending","paused","down","unknown","mixed"];return s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:e.map(r=>s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[s.jsx(t,{status:r}),s.jsx(t,{showText:!0,status:r})]},r))})},"render")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showText: true,
    status: "pending"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    gap: "1.5rem",
    alignItems: "center"
  }}>
            <StatusIndicator {...args} size="sm" status="up" />
            <StatusIndicator {...args} size="md" status="degraded" />
            <StatusIndicator {...args} showText size="lg" status="down" />
        </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statuses = ["up", "degraded", "pending", "paused", "down", "unknown", "mixed"] as const;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    }}>
                {statuses.map(status => <div key={status} style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem"
      }}>
                        <StatusIndicator status={status} />
                        <StatusIndicator showText status={status} />
                    </div>)}
            </div>;
  }
}`,...d.parameters?.docs?.source}}};const I=["DotIndicator","WithText","Sizes","AllStatuses"];export{d as AllStatuses,a as DotIndicator,o as Sizes,n as WithText,I as __namedExportsOrder,h as default};
