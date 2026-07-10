import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n,nt as r,tt as i}from"./iframe-DrR-jiVn.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{i as o,r as s}from"./storeErrorHandling-BMMg-RKa.js";import{i as c,n as l,r as u,t as d}from"./siteStoryHelpers-BbixrtxQ.js";import{n as f,t as p}from"./SiteCompactCard-Dx7kGRbt.js";var m,h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{f(),i(),s(),m=t(n()),c(),h=a(),g=l(),_=l({monitoring:!1,monitors:[d({id:`paused-http`,monitoring:!1,responseTime:180,status:`paused`,type:`http`,url:`https://maintenance.example.com`}),d({id:`paused-ping`,monitoring:!1,responseTime:0,status:`down`,type:`ping`})],name:`Paused Maintenance Window`}),v=l({monitors:[d({id:`degraded-http`,responseTime:340,status:`degraded`,type:`http`,url:`https://api.example.com`}),d({id:`degraded-port`,monitoring:!0,responseTime:410,status:`down`,type:`port`})],name:`API Cluster`}),y=()=>{let e=o.getState();return{...e,operationLoading:{...e.operationLoading},storeErrors:{...e.storeErrors}}},b=e=>{let t=(0,m.useRef)(y());return r(()=>{o.setState({...t.current,isLoading:!0})},()=>{o.setState(()=>t.current,!0)}),(0,h.jsx)(e,{})},x={args:{site:g},component:p,decorators:[u(e=>{let t=e.args.site;return t?[t]:[]})],parameters:{layout:`fullscreen`},tags:[`autodocs`]},S={},C={args:{site:_}},w={args:{site:v}},T={args:{site:g},decorators:[b]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    site: pausedSite
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    site: degradedSite
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    site: baseSite
  },
  decorators: [withLoadingState]
}`,...T.parameters?.docs?.source}}},E=[`Default`,`MonitoringPaused`,`DegradedStatus`,`Loading`]}))();export{S as Default,w as DegradedStatus,T as Loading,C as MonitoringPaused,E as __namedExportsOrder,x as default};