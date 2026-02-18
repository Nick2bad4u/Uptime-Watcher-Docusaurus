var f=Object.defineProperty;var t=(e,r)=>f(e,"name",{value:r,configurable:!0});import{j as o}from"./jsx-runtime-BHIWlbBZ.js";import{c as h,r as y,u as T}from"./iframe-K4-Qd2g0.js";import{D as u}from"./MonitorUiComponents-BxR9OJw0.js";import{p as g}from"./monitorTypeMocks-ll2FXI9c.js";import"./preload-helper-Cc2_yIPf.js";import"./monitorUiHelpers-CFM20vmb.js";import"./validation-BoCLx0Lu.js";import"./storeErrorHandling-CxXe-kGL.js";import"./react-7wigyp5a.js";g();const v={args:{details:"200",monitorType:"http"},component:u,decorators:[e=>(g(),o.jsx(e,{}))],parameters:{layout:"centered"},tags:["autodocs"]},c={},m={args:{details:"192.168.0.10",monitorType:"ping"}},b=t(e=>{const r=h.c(4),{children:l}=e,d=y.useRef(null);let a,s;r[0]===Symbol.for("react.memo_cache_sentinel")?(a=t(()=>{const i=window.electronAPI.monitorTypes;d.current=i.formatMonitorDetail,i.formatMonitorDetail=x},"t1"),s=t(()=>{if(d.current){const i=window.electronAPI.monitorTypes;i.formatMonitorDetail=d.current}},"t2"),r[0]=a,r[1]=s):(a=r[0],s=r[1]),T(a,s);let n;return r[2]!==l?(n=o.jsx(o.Fragment,{children:l}),r[2]=l,r[3]=n):n=r[3],n},"WithFormatFailure"),p={args:{details:"dashboard service",fallback:"dashboard service",monitorType:"http"},render:t(e=>o.jsx(b,{children:o.jsx(u,{...e})}),"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    details: "192.168.0.10",
    monitorType: "ping"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    details: "dashboard service",
    fallback: "dashboard service",
    monitorType: "http"
  },
  render: (args): JSX.Element => <WithFormatFailure>
            <DetailLabel {...args} />
        </WithFormatFailure>
}`,...p.parameters?.docs?.source}}};async function x(){throw new Error("Simulated formatting failure")}t(x,"_temp");const P=["HttpStatus","PingTarget","WithFallback"];export{c as HttpStatus,m as PingTarget,p as WithFallback,P as __namedExportsOrder,v as default};
