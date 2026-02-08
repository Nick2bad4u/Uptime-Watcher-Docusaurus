var f=Object.defineProperty;var o=(e,t)=>f(e,"name",{value:t,configurable:!0});import{j as i}from"./jsx-runtime-BHIWlbBZ.js";import{c as h,r as x}from"./iframe-CreBuNPk.js";import{S as a}from"./SiteDetailsHeader-GBZOTRi7.js";import{u as M}from"./useUiStore-BfFuR8Wt.js";import{b as g,a as H}from"./siteStoryHelpers-CD_Eu4XO.js";import"./preload-helper-Cc2_yIPf.js";import"./StatusIndicator-Dalt1106.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./icons-D_Q_f2rV.js";import"./useTheme-BeZpuX1q.js";import"./EventsService-BjxJj59F.js";import"./ThemedText-BJI_SxX2.js";import"./fallbacks-M3AOOrC-.js";import"./time-De8y--jI.js";import"./GalaxyBackground-U69z549e.js";import"./Tooltip-BjwgyU4i.js";import"./index-DvAcgsfT.js";import"./index-Q98EW2dQ.js";import"./MonitoringStatusDisplay-DkO99iXa.js";import"./ThemedBadge-1B4SPyIp.js";import"./ThemedBox-Cg_UbnDy.js";import"./types-B6zT3oaC.js";import"./monitorTitleFormatters-DgEWnjDX.js";import"./validation-at8F_Jpu.js";import"./ScreenshotThumbnail-0ei9r902.js";import"./stringSafety-3narqytt.js";import"./utfByteLength-Dk-7ijHQ.js";import"./useSitesStore-iyNVQL90.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,ot={args:{onClose:y("close-site-details")},component:a,parameters:{controls:{exclude:["selectedMonitor","site"]},layout:"fullscreen"},tags:["autodocs"]},c=o(()=>{const e=g({id:"storybook-http",responseTime:180,status:"up",type:"http",url:"https://status.storybook.dev"}),t=g({id:"storybook-ping",monitoring:!1,status:"paused",type:"ping"}),r=H({identifier:"storybook-site-details-header",monitors:[e,t],name:"Storybook Observability"});return{httpMonitor:e,pingMonitor:t,site:r}},"createSiteScenario"),v=o(e=>{const t=h.c(5),{site:r}=e;let n,s;t[0]!==r.identifier?(n=o(function(){return M.getState().setSiteDetailsHeaderCollapsed(r.identifier,!0),o(function(){M.getState().setSiteDetailsHeaderCollapsed(r.identifier,!1)},"resetCollapsedHeaderState")},"syncCollapsedHeaderState"),s=[r.identifier],t[0]=r.identifier,t[1]=n,t[2]=s):(n=t[1],s=t[2]),x.useEffect(n,s);let p;return t[3]!==e?(p=i.jsx(a,{...e}),t[3]=e,t[4]=p):p=t[4],p},"CollapsedHeaderStory"),d={render:o(e=>{const{httpMonitor:t,site:r}=c();return i.jsx(a,{...e,selectedMonitor:t,site:r})},"render")},l={render:o(e=>{const{pingMonitor:t,site:r}=c();return i.jsx(a,{...e,selectedMonitor:t,site:r})},"render")},m={render:o(e=>{const{site:t}=c();return i.jsx(a,{...e,site:t})},"render")},u={render:o(e=>{const{httpMonitor:t,site:r}=c();return i.jsx(v,{...e,selectedMonitor:t,site:r})},"render")},S={render:o(e=>{const{httpMonitor:t,pingMonitor:r,site:n}=c(),s={...t,url:"not-a-valid-url"};return i.jsx(a,{...e,selectedMonitor:s,site:{...n,monitors:[s,r]}})},"render")};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      httpMonitor,
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} selectedMonitor={httpMonitor} site={site} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      pingMonitor,
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} selectedMonitor={pingMonitor} site={site} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      site
    } = createSiteScenario();
    return <SiteDetailsHeader {...args} site={site} />;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      httpMonitor,
      site
    } = createSiteScenario();
    return <CollapsedHeaderStory {...args} selectedMonitor={httpMonitor} site={site} />;
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const st=["Default","NonHttpMonitorSelected","NoMonitorSelected","Collapsed","InvalidMonitorUrl"];export{u as Collapsed,d as Default,S as InvalidMonitorUrl,m as NoMonitorSelected,l as NonHttpMonitorSelected,st as __namedExportsOrder,ot as default};
