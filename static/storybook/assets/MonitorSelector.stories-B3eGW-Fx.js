import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,t as n}from"./siteStoryHelpers-BbixrtxQ.js";import{n as r,t as i}from"./MonitorSelector-pZvannBU.js";var a,o,s,c,l,u,d,f;e((()=>{r(),t(),{action:a}=__STORYBOOK_MODULE_ACTIONS__,o=[n({id:`monitor-http`,responseTime:95,status:`up`,type:`http`,url:`https://status.example.com`}),n({host:`api.example.com`,id:`monitor-port`,monitoring:!0,port:8443,responseTime:130,status:`degraded`,type:`port`}),n({id:`monitor-ping`,monitoring:!1,responseTime:220,status:`paused`,type:`ping`})],s={args:{monitors:o,onChange:a(`select-monitor`),selectedMonitorId:o[0]?.id??``},component:i,parameters:{layout:`centered`},tags:[`autodocs`]},c={},l={args:{className:`max-w-80`}},u={args:{selectedMonitorId:o[1]?.id??``}},d={args:{monitors:[],selectedMonitorId:``}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    className: "max-w-80"
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    selectedMonitorId: baseMonitors[1]?.id ?? ""
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    monitors: [],
    selectedMonitorId: ""
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`,`WithCustomClass`,`PortMonitorSelected`,`EmptyState`]}))();export{c as Default,d as EmptyState,u as PortMonitorSelected,l as WithCustomClass,f as __namedExportsOrder,s as default};