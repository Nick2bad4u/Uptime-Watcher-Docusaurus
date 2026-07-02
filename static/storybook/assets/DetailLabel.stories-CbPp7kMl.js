import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{nt as n,tt as r,xn as i}from"./iframe-CuB8g8Z1.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{n as o,r as s}from"./monitorTypeMocks-RnfYrx7S.js";import{n as c,r as l}from"./MonitorUiComponents-Dd4zWbId.js";var u,d,f,p,m,h,g,_;e((()=>{l(),r(),u=t(i()),o(),d=a(),s(),f={args:{details:`200`,monitorType:`http`},component:c,decorators:[e=>(s(),(0,d.jsx)(e,{}))],parameters:{layout:`centered`},tags:[`autodocs`]},p={},m={args:{details:`192.168.0.10`,monitorType:`ping`}},h=({children:e})=>{let t=(0,u.useRef)(null);return n(()=>{let e=globalThis.electronAPI.monitorTypes;t.current=e.formatMonitorDetail,e.formatMonitorDetail=async()=>{throw Error(`Simulated formatting failure`)}},()=>{if(!t.current)return;let e=globalThis.electronAPI.monitorTypes;e.formatMonitorDetail=t.current}),(0,d.jsx)(d.Fragment,{children:e})},g={args:{details:`dashboard service`,fallback:`dashboard service`,monitorType:`http`},render:e=>(0,d.jsx)(h,{children:(0,d.jsx)(c,{...e})})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    details: "192.168.0.10",
    monitorType: "ping"
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    details: "dashboard service",
    fallback: "dashboard service",
    monitorType: "http"
  },
  render: (args): JSX.Element => <WithFormatFailure>
            <DetailLabel {...args} />
        </WithFormatFailure>
}`,...g.parameters?.docs?.source}}},_=[`HttpStatus`,`PingTarget`,`WithFallback`]}))();export{p as HttpStatus,m as PingTarget,g as WithFallback,_ as __namedExportsOrder,f as default};