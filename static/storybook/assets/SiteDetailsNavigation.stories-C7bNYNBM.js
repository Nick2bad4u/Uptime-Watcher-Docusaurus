import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,n,t as r}from"./siteStoryHelpers-BTWRKT3O.js";import{n as i,t as a}from"./SiteDetailsNavigation-Dy821-RY.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),t(),{action:o}=__STORYBOOK_MODULE_ACTIONS__,s=()=>{let e=r({id:`storybook-nav-http`,monitoring:!0,responseTime:150,status:`up`,type:`http`,url:`https://status.storybook.dev`}),t=r({host:`db.storybook.dev`,id:`storybook-nav-port`,monitoring:!0,port:5432,status:`degraded`,type:`port`}),i=r({id:`storybook-nav-heartbeat`,monitoring:!1,status:`paused`,type:`server-heartbeat`,url:`https://status.storybook.dev/heartbeat`}),a=n({identifier:`storybook-site-navigation`,monitoring:!0,monitors:[e,t,i],name:`Navigation Coverage Site`});return{heartbeatMonitor:i,portMonitor:t,primaryMonitorId:e.id,site:a}},c=()=>{let e=s(),t=e.site.monitors.map(e=>({...e,monitoring:!1,status:`paused`})),n={...e.site,monitoring:!1,monitors:t};return{primaryMonitorId:t[0]?.id??``,site:n}},l=e=>async()=>{o(e)()},u=s(),d={args:{activeSiteDetailsTab:`site-overview`,currentSite:u.site,handleMonitorIdChange:e=>o(`monitor-id-change`)(e.target.value),handleStartMonitoring:l(`start-monitoring`),handleStartSiteMonitoring:l(`start-site-monitoring`),handleStopMonitoring:l(`stop-monitoring`),handleStopSiteMonitoring:l(`stop-site-monitoring`),isLoading:!1,isMonitoring:!0,selectedMonitorId:u.primaryMonitorId,setActiveSiteDetailsTab:e=>o(`set-active-site-details-tab`)(e)},component:a,parameters:{controls:{exclude:[`currentSite`,`handleMonitorIdChange`,`handleStartMonitoring`,`handleStartSiteMonitoring`,`handleStopMonitoring`,`handleStopSiteMonitoring`,`selectedMonitorId`,`setActiveSiteDetailsTab`]},layout:`fullscreen`},tags:[`autodocs`]},f={},p=c(),m={args:{currentSite:p.site,isMonitoring:!1,selectedMonitorId:p.primaryMonitorId}},h=s(),g={args:{currentSite:h.site,selectedMonitorId:h.portMonitor.id}},_={args:{isLoading:!0}},v={primaryMonitorId:``,site:n({identifier:`storybook-site-navigation-empty`,monitoring:!1,monitors:[],name:`Navigation No Monitors`})},y={args:{currentSite:v.site,isMonitoring:!1,selectedMonitorId:v.primaryMonitorId}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    currentSite: pausedScenario.site,
    isMonitoring: false,
    selectedMonitorId: pausedScenario.primaryMonitorId
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    currentSite: alternateScenario.site,
    selectedMonitorId: alternateScenario.portMonitor.id
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    currentSite: noMonitorScenario.site,
    isMonitoring: false,
    selectedMonitorId: noMonitorScenario.primaryMonitorId
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`MonitoringPaused`,`PortMonitorSelected`,`LoadingState`,`NoMonitorsConfigured`]}))();export{f as Default,_ as LoadingState,m as MonitoringPaused,y as NoMonitorsConfigured,g as PortMonitorSelected,b as __namedExportsOrder,d as default};