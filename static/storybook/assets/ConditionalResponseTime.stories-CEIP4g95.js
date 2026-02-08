var c=Object.defineProperty;var n=(r,p)=>c(r,"name",{value:p,configurable:!0});import{j as e}from"./jsx-runtime-BHIWlbBZ.js";import{C as i}from"./MonitorUiComponents-DKmpCqqk.js";import{T as a}from"./ThemedText-BJI_SxX2.js";import{r as d}from"./iframe-CreBuNPk.js";import{p as m}from"./monitorTypeMocks-LCaz0qqw.js";import"./monitorUiHelpers-AknUfLO9.js";import"./validation-at8F_Jpu.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./preload-helper-Cc2_yIPf.js";m();const l=n(r=>(m(),e.jsx(r,{})),"reapplyMonitorMocks"),S={args:{fallback:e.jsx(a,{size:"sm",variant:"secondary",children:"Response time not available for this monitor type."}),monitorType:"http"},component:i,decorators:[l],parameters:{layout:"centered"},render:n(r=>e.jsx(i,{...r,children:e.jsx(a,{size:"sm",variant:"primary",children:"Response time analytics are available."})}),"render"),tags:["autodocs"]},o={},t={args:{monitorType:"ping"}},s={args:{fallback:e.jsxs(d.Fragment,{children:[e.jsx(a,{size:"sm",variant:"secondary",children:"Lightweight checks do not track response time."}),e.jsx(a,{size:"xs",variant:"secondary",children:"Consider switching to the HTTP monitor to see latency data."})]}),monitorType:"ping"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    monitorType: "ping"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const z=["SupportsResponseTime","WithoutSupport","CustomFallback"];export{s as CustomFallback,o as SupportsResponseTime,t as WithoutSupport,z as __namedExportsOrder,S as default};
