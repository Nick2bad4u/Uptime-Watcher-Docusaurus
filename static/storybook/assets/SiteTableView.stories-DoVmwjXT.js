import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,n,r,t as i}from"./siteStoryHelpers-C5Bh0rSN.js";import{n as a,t as o}from"./SiteTableView-DiPDOZQn.js";var s,c,l,u,d,f,p,m;e((()=>{a(),t(),s=n({identifier:`uptime-watcher`,name:`Uptime Watcher`}),c=n({identifier:`api-gateway`,monitors:[i({id:`api-http`,responseTime:280,status:`degraded`,type:`http`,url:`https://api.example.com/health`}),i({id:`api-ping`,responseTime:180,status:`up`,type:`ping`})],name:`API Gateway`}),l=n({identifier:`worker-cluster`,monitoring:!1,monitors:[i({id:`worker-http`,monitoring:!1,responseTime:0,status:`down`,type:`http`}),i({id:`worker-port`,monitoring:!1,responseTime:0,status:`paused`,type:`port`})],name:`Worker Cluster`}),u={args:{sites:[s,c,l]},component:o,decorators:[r(e=>e.args.sites??[])],parameters:{layout:`fullscreen`},tags:[`autodocs`]},d={},f={args:{sites:[s,c]}},p={args:{sites:[l]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    sites: [siteA, siteB]
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sites: [siteC]
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`MixedStatuses`,`AllPaused`]}))();export{p as AllPaused,d as Default,f as MixedStatuses,m as __namedExportsOrder,u as default};