import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,n,r,t as i}from"./siteStoryHelpers-BbixrtxQ.js";import{n as a,t as o}from"./SiteCard-DyBn64PM.js";var s,c,l,u,d,f,p;e((()=>{a(),t(),s=n({identifier:`storybook-site-card`,monitors:[i({id:`storybook-http`,responseTime:215,status:`up`,type:`http`,url:`https://status.storybook.dev`}),i({id:`storybook-heartbeat`,responseTime:640,status:`degraded`,type:`server-heartbeat`}),i({id:`storybook-port`,monitoring:!1,responseTime:0,status:`paused`,type:`port`})],name:`Storyboard Primary`}),c=n({identifier:`storybook-site-card-down`,monitoring:!1,monitors:[i({id:`down-http`,responseTime:0,status:`down`,type:`http`}),i({id:`down-ping`,responseTime:0,status:`down`,type:`ping`})],name:`Critical Outage`}),l={args:{presentation:`grid`,site:s},component:o,decorators:[r(e=>[e.args?.site??s])],parameters:{layout:`padded`},tags:[`autodocs`]},u={},d={args:{presentation:`stacked`}},f={args:{site:c}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    presentation: "stacked"
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    site: stressedSite
  }
}`,...f.parameters?.docs?.source}}},p=[`Grid`,`Stacked`,`Downtime`]}))();export{f as Downtime,u as Grid,d as Stacked,p as __namedExportsOrder,l as default};