var f=Object.defineProperty;var o=(e,t)=>f(e,"name",{value:t,configurable:!0});import{j as i}from"./jsx-runtime-BHIWlbBZ.js";import{c as h,r as x}from"./iframe-DyvIPkVZ.js";import{S as a}from"./SiteDetailsHeader-CgwctpS0.js";import{u as M}from"./useUiStore-bsatqH6C.js";import{b as g,a as H}from"./siteStoryHelpers-kMShK3-v.js";import"./preload-helper-Cc2_yIPf.js";import"./StatusIndicator-CzJtldnC.js";import"./storeErrorHandling-BURLOlzH.js";import"./react-CGdiL3be.js";import"./icons-DV64AXrl.js";import"./useTheme-DJ7epzI1.js";import"./EventsService-CzUXSiPB.js";import"./ThemedText-DrvOTmqm.js";import"./fallbacks-C9nVEKxx.js";import"./ScreenshotThumbnail-BRRzqM80.js";import"./index-B-xPFuZC.js";import"./index-A94RU7PH.js";import"./monitorHistoryTime-xAA6zLhv.js";import"./time-DsU7pIBZ.js";import"./GalaxyBackground-CSja6G5h.js";import"./Tooltip-BO0ObihS.js";import"./MonitoringStatusDisplay-DwCg1794.js";import"./ThemedBadge-JrYp9G2z.js";import"./ThemedBox-BKQMevqh.js";import"./types-B6zT3oaC.js";import"./monitorDisplayInfo-CinlOv80.js";import"./validation-CJJLDQTF.js";import"./stringSafety-3narqytt.js";import"./utfByteLength-Dk-7ijHQ.js";import"./useSitesStore-_T8EKnLS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,st={args:{onClose:y("close-site-details")},component:a,parameters:{controls:{exclude:["selectedMonitor","site"]},layout:"fullscreen"},tags:["autodocs"]},c=o(()=>{const e=g({id:"storybook-http",responseTime:180,status:"up",type:"http",url:"https://status.storybook.dev"}),t=g({id:"storybook-ping",monitoring:!1,status:"paused",type:"ping"}),r=H({identifier:"storybook-site-details-header",monitors:[e,t],name:"Storybook Observability"});return{httpMonitor:e,pingMonitor:t,site:r}},"createSiteScenario"),v=o(e=>{const t=h.c(5),{site:r}=e;let n,s;t[0]!==r.identifier?(n=o(function(){return M.getState().setSiteDetailsHeaderCollapsed(r.identifier,!0),o(function(){M.getState().setSiteDetailsHeaderCollapsed(r.identifier,!1)},"resetCollapsedHeaderState")},"syncCollapsedHeaderState"),s=[r.identifier],t[0]=r.identifier,t[1]=n,t[2]=s):(n=t[1],s=t[2]),x.useEffect(n,s);let p;return t[3]!==e?(p=i.jsx(a,{...e}),t[3]=e,t[4]=p):p=t[4],p},"CollapsedHeaderStory"),d={render:o(e=>{const{httpMonitor:t,site:r}=c();return i.jsx(a,{...e,selectedMonitor:t,site:r})},"render")},l={render:o(e=>{const{pingMonitor:t,site:r}=c();return i.jsx(a,{...e,selectedMonitor:t,site:r})},"render")},m={render:o(e=>{const{site:t}=c();return i.jsx(a,{...e,site:t})},"render")},u={render:o(e=>{const{httpMonitor:t,site:r}=c();return i.jsx(v,{...e,selectedMonitor:t,site:r})},"render")},S={render:o(e=>{const{httpMonitor:t,pingMonitor:r,site:n}=c(),s={...t,url:"not-a-valid-url"};return i.jsx(a,{...e,selectedMonitor:s,site:{...n,monitors:[s,r]}})},"render")};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};const nt=["Default","NonHttpMonitorSelected","NoMonitorSelected","Collapsed","InvalidMonitorUrl"];export{u as Collapsed,d as Default,S as InvalidMonitorUrl,m as NoMonitorSelected,l as NonHttpMonitorSelected,nt as __namedExportsOrder,st as default};
