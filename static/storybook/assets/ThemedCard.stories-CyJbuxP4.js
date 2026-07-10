import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./ThemedButton-lmat0dMI.js";import{r as i,t as a}from"./icons-BThRD7n3.js";import{n as o,t as s}from"./ThemedText-kzC1PB_s.js";import{n as c,t as l}from"./ThemedCard-KrY_QxQf.js";var u,d,f,p,m,h,g,_,v;e((()=>{n(),c(),o(),i(),u=t(),d=a.metrics.uptime,f=a.ui.site,p=a.ui.analytics,m={args:{children:(0,u.jsx)(s,{children:`Monitor uptime, response time, and incidents for every site in your workspace.`}),icon:(0,u.jsx)(d,{}),subtitle:`Last 24 hours`,title:`Site Availability`},argTypes:{onClick:{action:`clicked`},onMouseEnter:{action:`hover`},onMouseLeave:{action:`leave`}},component:l,parameters:{layout:`padded`},tags:[`autodocs`]},h={},g={args:{clickable:!0,hoverable:!0}},_={args:{hoverable:!0,icon:(0,u.jsx)(d,{})},render:e=>(0,u.jsxs)(l,{...e,children:[(0,u.jsx)(s,{children:`Quickly add new monitors with sensible defaults and templates for common protocols.`}),(0,u.jsxs)(`div`,{style:{display:`flex`,gap:`0.75rem`,marginTop:`1rem`},children:[(0,u.jsx)(r,{icon:(0,u.jsx)(f,{}),variant:`primary`,children:`New Site`}),(0,u.jsx)(r,{icon:(0,u.jsx)(p,{}),variant:`outline`,children:`View Analytics`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: true,
    hoverable: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    hoverable: true,
    icon: <CardIcon />
  },
  render: args => <ThemedCard {...args}>
            <ThemedText>
                Quickly add new monitors with sensible defaults and templates
                for common protocols.
            </ThemedText>
            <div style={{
      display: "flex",
      gap: "0.75rem",
      marginTop: "1rem"
    }}>
                <ThemedButton icon={<NewSiteIcon />} variant="primary">
                    New Site
                </ThemedButton>
                <ThemedButton icon={<AnalyticsIcon />} variant="outline">
                    View Analytics
                </ThemedButton>
            </div>
        </ThemedCard>
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Clickable`,`WithAction`]}))();export{g as Clickable,h as Default,_ as WithAction,v as __namedExportsOrder,m as default};