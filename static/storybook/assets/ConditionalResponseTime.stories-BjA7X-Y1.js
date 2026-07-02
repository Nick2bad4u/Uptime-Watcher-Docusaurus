import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{xn as n}from"./iframe-lSASCLST.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-rJ5CgpxA.js";import{n as o,r as s}from"./monitorTypeMocks-CaUbl2LP.js";import{r as c,t as l}from"./MonitorUiComponents-etsFQUfX.js";var u,d,f,p,m,h,g,_;e((()=>{c(),i(),u=t(n()),o(),d=r(),s(),f=e=>(s(),(0,d.jsx)(e,{})),p={args:{fallback:(0,d.jsx)(a,{size:`sm`,variant:`secondary`,children:`Response time not available for this monitor type.`}),monitorType:`http`},component:l,decorators:[f],parameters:{layout:`centered`},render:e=>(0,d.jsx)(l,{...e,children:(0,d.jsx)(a,{size:`sm`,variant:`primary`,children:`Response time analytics are available.`})}),tags:[`autodocs`]},m={},h={args:{monitorType:`ping`}},g={args:{fallback:(0,d.jsxs)(u.Fragment,{children:[(0,d.jsx)(a,{size:`sm`,variant:`secondary`,children:`Lightweight checks do not track response time.`}),(0,d.jsx)(a,{size:`xs`,variant:`secondary`,children:`Consider switching to the HTTP monitor to see latency data.`})]}),monitorType:`ping`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    monitorType: "ping"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fallback: <Fragment>
                <ThemedText size="sm" variant="secondary">
                    Lightweight checks do not track response time.
                </ThemedText>
                <ThemedText size="xs" variant="secondary">
                    Consider switching to the HTTP monitor to see latency data.
                </ThemedText>
            </Fragment>,
    monitorType: "ping"
  }
}`,...g.parameters?.docs?.source}}},_=[`SupportsResponseTime`,`WithoutSupport`,`CustomFallback`]}))();export{g as CustomFallback,m as SupportsResponseTime,h as WithoutSupport,_ as __namedExportsOrder,p as default};