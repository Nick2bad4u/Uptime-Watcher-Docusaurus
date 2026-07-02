import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./StatusIndicator-Drrdfxh7.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a={args:{showText:!1,size:`md`,status:`up`},component:r,parameters:{layout:`centered`},tags:[`autodocs`]},o={},s={args:{showText:!0,status:`pending`}},c={render:e=>(0,i.jsxs)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`1.5rem`},children:[(0,i.jsx)(r,{...e,size:`sm`,status:`up`}),(0,i.jsx)(r,{...e,size:`md`,status:`degraded`}),(0,i.jsx)(r,{...e,showText:!0,size:`lg`,status:`down`})]})},l={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[`degraded`,`down`,`mixed`,`paused`,`pending`,`unknown`,`up`].map(e=>(0,i.jsxs)(`div`,{style:{alignItems:`center`,display:`flex`,gap:`0.75rem`},children:[(0,i.jsx)(r,{status:e}),(0,i.jsx)(r,{showText:!0,status:e})]},e))})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showText: true,
    status: "pending"
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    alignItems: "center",
    display: "flex",
    gap: "1.5rem"
  }}>
            <StatusIndicator {...args} size="sm" status="up" />
            <StatusIndicator {...args} size="md" status="degraded" />
            <StatusIndicator {...args} showText size="lg" status="down" />
        </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statuses = ["degraded", "down", "mixed", "paused", "pending", "unknown", "up"] as const;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem"
    }}>
                {statuses.map(status => <div key={status} style={{
        alignItems: "center",
        display: "flex",
        gap: "0.75rem"
      }}>
                        <StatusIndicator status={status} />
                        <StatusIndicator showText status={status} />
                    </div>)}
            </div>;
  }
}`,...l.parameters?.docs?.source}}},u=[`DotIndicator`,`WithText`,`Sizes`,`AllStatuses`]}))();export{l as AllStatuses,o as DotIndicator,c as Sizes,s as WithText,u as __namedExportsOrder,a as default};