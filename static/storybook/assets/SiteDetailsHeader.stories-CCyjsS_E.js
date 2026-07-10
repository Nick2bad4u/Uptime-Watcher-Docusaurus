import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Hn as n}from"./iframe-DgKT2GkH.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./useUiStore-BtHrRLPI.js";import{i as o,n as s,t as c}from"./siteStoryHelpers-BdVnplmi.js";import{n as l,t as u}from"./SiteDetailsHeader-C1JyIelC.js";var d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{l(),a(),d=t(n()),o(),f=r(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={args:{onClose:p(`close-site-details`)},component:u,parameters:{controls:{exclude:[`selectedMonitor`,`site`]},layout:`fullscreen`},tags:[`autodocs`]},h=()=>{let e=c({id:`storybook-http`,responseTime:180,status:`up`,type:`http`,url:`https://status.storybook.dev`}),t=c({id:`storybook-ping`,monitoring:!1,status:`paused`,type:`ping`});return{httpMonitor:e,pingMonitor:t,site:s({identifier:`storybook-site-details-header`,monitors:[e,t],name:`Storybook Observability`})}},g=e=>{let{site:t}=e;return(0,d.useEffect)(function(){return i.getState().setSiteDetailsHeaderCollapsed(t.identifier,!0),function(){i.getState().setSiteDetailsHeaderCollapsed(t.identifier,!1)}},[t.identifier]),(0,f.jsx)(u,{...e})},_={render:e=>{let{httpMonitor:t,site:n}=h();return(0,f.jsx)(u,{...e,selectedMonitor:t,site:n})}},v={render:e=>{let{pingMonitor:t,site:n}=h();return(0,f.jsx)(u,{...e,selectedMonitor:t,site:n})}},y={render:e=>{let{site:t}=h();return(0,f.jsx)(u,{...e,site:t})}},b={render:e=>{let{httpMonitor:t,site:n}=h();return(0,f.jsx)(g,{...e,selectedMonitor:t,site:n})}},x={render:e=>{let{httpMonitor:t,pingMonitor:n,site:r}=h(),i={...t,url:`not-a-valid-url`};return(0,f.jsx)(u,{...e,selectedMonitor:i,site:{...r,monitors:[i,n]}})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      httpMonitor,
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} selectedMonitor={httpMonitor} site={site} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      pingMonitor,
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} selectedMonitor={pingMonitor} site={site} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} site={site} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      httpMonitor,
      site
    } = createSiteScenario();
    return <CollapsedHeaderStory {...args} selectedMonitor={httpMonitor} site={site} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      httpMonitor,
      pingMonitor,
      site
    } = createSiteScenario();
    const invalidMonitor = {
      ...httpMonitor,
      url: "not-a-valid-url"
    } satisfies Monitor;
    return <SiteDetailsHeader {...args} selectedMonitor={invalidMonitor} site={{
      ...site,
      monitors: [invalidMonitor, pingMonitor]
    }} />;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`NonHttpMonitorSelected`,`NoMonitorSelected`,`Collapsed`,`InvalidMonitorUrl`]}))();export{b as Collapsed,_ as Default,x as InvalidMonitorUrl,y as NoMonitorSelected,v as NonHttpMonitorSelected,S as __namedExportsOrder,m as default};