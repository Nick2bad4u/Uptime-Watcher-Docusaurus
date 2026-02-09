var V=Object.defineProperty;var o=(t,a)=>V(t,"name",{value:a,configurable:!0});import{j as e}from"./jsx-runtime-BHIWlbBZ.js";import{c as M,r as $}from"./iframe-MD7yCyl4.js";import{c as J,u as O}from"./useTheme-CN3hwuLU.js";import{u as X}from"./useSitesStore-BsQr7GrP.js";import{u as f}from"./useUiStore-Bva96oaZ.js";import{T as N}from"./ThemedText-CsWFmcMv.js";import{A as R}from"./icons-DJj_SB9p.js";import{S as H}from"./SiteCard-eFlKZroL.js";import{S as U}from"./SiteCompactCard-C6d09x7L.js";import{S as q}from"./SurfaceContainer-Pn6_9Thf.js";import{S as F}from"./SiteListLayoutSelector-B3VNGSPM.js";import{S as K}from"./SiteTableView-CJc3_4Gd.js";import{c as Q,a as I,b}from"./siteStoryHelpers-BpZ9QbWa.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling--gr6WIbO.js";import"./react-CwtULKRV.js";import"./EventsService-B1aW6uuF.js";import"./validation-_iszY_Po.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./monitorRuntime-zRCHPTgN.js";import"./selectors-C0X4eAib.js";import"./monitorUiHelpers-DiCQuATr.js";import"./ThemedBox-jwFwTgbC.js";import"./types-B6zT3oaC.js";import"./time-BmTRnnWK.js";import"./fallbacks-Dhta-zUw.js";import"./ActionButtonGroup-Djx12v-j.js";import"./ThemedButton-CoiXBUze.js";import"./SiteMonitoringButton-BWVyn42d.js";import"./Tooltip-DlOlua-k.js";import"./index-BqMnEmxt.js";import"./index-CbJ8WGqw.js";import"./MonitorSelector-DiUtJNk7.js";import"./ThemedSelect-CgCRzrnR.js";import"./useThemedControlStyles-CwFLUvzQ.js";import"./monitorTitleFormatters-ChWSZax7.js";import"./useMonitorTypes-DgUL8KMz.js";import"./HistoryChart-DdvNCUTO.js";import"./MiniChartBar-D9DyBiIN.js";import"./StatusBadge-CNGSgl8q.js";import"./StatusIndicator-BdZ_diI4.js";import"./useDashboardSiteSummaryMeta-Drv4tafj.js";import"./MarqueeText-DnG0BT6g.js";import"./SiteTableRow-CcGiwtDk.js";const G=o(()=>{const t=M.c(2),a=R.metrics.monitor;let i;t[0]===Symbol.for("react.memo_cache_sentinel")?(i=e.jsx("div",{className:"flex items-center justify-center",children:e.jsx(a,{"aria-hidden":"true",className:"size-14 opacity-70","data-testid":"empty-state-monitor-icon"})}),t[0]=i):i=t[0];let s;return t[1]===Symbol.for("react.memo_cache_sentinel")?(s=e.jsx(q,{className:"w-full",padding:"xl",children:e.jsxs("div",{className:"flex min-h-56 flex-col items-center justify-center","data-testid":"empty-state",children:[i,e.jsxs("div",{className:"mt-5 space-y-2 text-center",children:[e.jsx(N,{align:"center",as:"h3",size:"lg",variant:"primary",weight:"semibold",children:"No sites are being monitored"}),e.jsx(N,{align:"center",as:"p",size:"base",variant:"secondary",children:"Add your first website to start monitoring its uptime."})]})]})}),t[1]=s):s=t[1],s},"EmptyState$1");G.__docgenInfo={description:`Empty state component for displaying when no sites are configured.

@remarks
Renders a user-friendly empty state with visual indicators and messaging to
guide users when no sites are available for monitoring.

@returns JSX element containing the empty state interface

@public`,methods:[],displayName:"EmptyState"};const W=R.metrics.monitor,Y=o(t=>t.sites,"selectSites"),B=o(()=>{const t=M.c(34),a=X(Y),{cardPresentation:i,layout:s,setCardPresentation:l,setLayout:g,setSurfaceDensity:c,surfaceDensity:d}=f(J(Z)),{isDark:k}=O();let h;t[0]!==g?(h=o(r=>{g(r)},"t0"),t[0]=g,t[1]=h):h=t[1];const P=h;let S;t[2]!==l?(S=o(r=>{l(r)},"t1"),t[2]=l,t[3]=S):S=t[3];const E=S;let x;t[4]!==c?(x=o(r=>{c(r)},"t2"),t[4]=c,t[5]=x):x=t[5];const z=x;let n;t[6]!==i||t[7]!==k||t[8]!==s?(n=["site-grid"],s==="card-compact"&&n.push("site-grid--compact"),s==="card-large"&&i==="stacked"&&n.push("site-grid--stacked"),s==="card-large"&&i==="grid"&&n.push("site-grid--balanced"),k&&n.push("site-grid--dark"),t[6]=i,t[7]=k,t[8]=s,t[9]=n):n=t[9];const T=n.join(" ");if(a.length===0){let r;return t[10]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsx(G,{}),t[10]=r):r=t[10],r}let C;t[11]===Symbol.for("react.memo_cache_sentinel")?(C=e.jsx(N,{size:"lg",weight:"semibold",children:e.jsxs("span",{className:"site-list__toolbar-heading",children:[e.jsx(W,{"aria-hidden":"true",className:"site-list__toolbar-icon",size:18}),"Sites"]})}),t[11]=C):C=t[11];const A=a.length===1?"":"s";let m;t[12]!==a.length||t[13]!==A?(m=e.jsxs("div",{className:"site-list__toolbar-title",children:[C,e.jsx(N,{size:"xs",variant:"tertiary",children:e.jsxs("span",{"data-testid":"site-count-label",children:["Tracking ",a.length," site",A]})})]}),t[12]=a.length,t[13]=A,t[14]=m):m=t[14];let p;t[15]!==i||t[16]!==P||t[17]!==z||t[18]!==E||t[19]!==s||t[20]!==d?(p=e.jsx(F,{cardPresentation:i,layout:s,listDensity:d,onLayoutChange:P,onListDensityChange:z,onPresentationChange:E}),t[15]=i,t[16]=P,t[17]=z,t[18]=E,t[19]=s,t[20]=d,t[21]=p):p=t[21];let u;t[22]!==m||t[23]!==p?(u=e.jsxs("div",{className:"site-list__toolbar",children:[m,p]}),t[22]=m,t[23]=p,t[24]=u):u=t[24];let y;t[25]!==i||t[26]!==T||t[27]!==s||t[28]!==a||t[29]!==d?(y=s==="list"?e.jsx(K,{density:d,sites:a}):e.jsx("div",{className:T,children:a.map(r=>s==="card-compact"?e.jsx(U,{site:r},r.identifier):e.jsx(H,{presentation:i,site:r},r.identifier))}),t[25]=i,t[26]=T,t[27]=s,t[28]=a,t[29]=d,t[30]=y):y=t[30];let L;return t[31]!==u||t[32]!==y?(L=e.jsxs("div",{className:"site-list","data-testid":"site-list",children:[u,y]}),t[31]=u,t[32]=y,t[33]=L):L=t[33],L},"SiteList");B.__docgenInfo={description:`Main site list component that displays all monitored sites.

Renders either a list of SiteCard components (one per site) with dividers, or
an EmptyState component when no sites are configured. Automatically applies
theme-appropriate styling.

@example

\`\`\`tsx
function Dashboard() {
    return (
        <div>
            <Header />
            <SiteList />
        </div>
    );
}
\`\`\`

@returns JSX.Element containing the site list or empty state`,methods:[],displayName:"SiteList"};function Z(t){return{cardPresentation:t.siteCardPresentation,layout:t.siteListLayout,setCardPresentation:t.setSiteCardPresentation,setLayout:t.setSiteListLayout,setSurfaceDensity:t.setSurfaceDensity,surfaceDensity:t.surfaceDensity}}o(Z,"_temp");const tt=[I({identifier:"site-aurora",name:"Aurora CDN"}),I({identifier:"site-orion",monitors:[b({id:"orion-http",responseTime:320,status:"degraded",type:"http",url:"https://api.orion.example"}),b({id:"orion-dns",status:"up",type:"dns"})],name:"Orion API Cluster"}),I({identifier:"site-atlas",monitors:[b({id:"atlas-port",monitoring:!1,status:"paused",type:"port"}),b({id:"atlas-ping",responseTime:180,status:"up",type:"ping"})],name:"Atlas Edge Gateway"})],et=o((t,a)=>{const{density:i,layout:s,presentation:l}=a.args;return $.useEffect(o(function(){const c={siteCardPresentation:f.getState().siteCardPresentation,siteListLayout:f.getState().siteListLayout,surfaceDensity:f.getState().surfaceDensity};return f.setState({siteCardPresentation:l,siteListLayout:s,surfaceDensity:i}),o(function(){f.setState({siteCardPresentation:c.siteCardPresentation,siteListLayout:c.siteListLayout,surfaceDensity:c.surfaceDensity})},"restoreSiteListLayout")},"syncSiteListLayout"),[i,s,l]),e.jsx(t,{})},"withLayoutState"),Ft={args:{density:"comfortable",layout:"card-large",presentation:"stacked",sites:tt},argTypes:{layout:{control:{labels:{"card-compact":"Compact Cards","card-large":"Large Cards",list:"Table"},type:"radio"},description:"Site list layout mode",options:["card-large","card-compact","list"]},density:{control:{labels:{comfortable:"Comfortable",cozy:"Cozy",compact:"Compact"},type:"radio"},description:"Row density used when layout is set to list (table)",options:["comfortable","cozy","compact"]},presentation:{control:{labels:{grid:"Balanced Grid",stacked:"Stacked"},type:"radio"},description:"Card presentation used when the layout is set to large cards.",options:["stacked","grid"]},sites:{control:!1,description:"Site data rendered within the list"}},component:B,decorators:[Q(t=>t.args?.sites??[]),et],parameters:{layout:"fullscreen"},tags:["autodocs"]},j={},_={args:{presentation:"grid"}},w={args:{layout:"card-compact",presentation:"grid"}},D={args:{density:"cozy",layout:"list"}},v={args:{sites:[]}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:"{}",...j.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    presentation: "grid"
  }
}`,..._.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "card-compact",
    presentation: "grid"
  }
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    density: "cozy",
    layout: "list"
  }
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    sites: []
  }
}`,...v.parameters?.docs?.source}}};const Kt=["StackedCards","BalancedGrid","CompactCards","ListView","EmptyState"];export{_ as BalancedGrid,w as CompactCards,v as EmptyState,D as ListView,j as StackedCards,Kt as __namedExportsOrder,Ft as default};
