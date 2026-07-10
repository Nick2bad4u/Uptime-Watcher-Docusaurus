import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{C as n,M as r,t as i}from"./distribution-ruwBHiZP.js";import{Lt as a,Rn as o,Rt as s,Wt as c}from"./iframe-Bj9A_9iV.js";import{t as l}from"./jsx-runtime-DqZldVDK.js";import{r as u,t as d}from"./icons-xXE8AL6_.js";import{c as f,n as ee,s as p,t as te}from"./useSitesStore-CFMCTTFl.js";import{n as m,t as h}from"./ThemedText-D28zYcdT.js";import{n as g,t as _}from"./SurfaceContainer-DLQg9szM.js";import{h as v,m as ne,r as re,t as ie}from"./useTheme-MR6qDlIt.js";import{n as y,t as b}from"./useUiStore-F3jN5afq.js";import{i as ae,n as x,r as oe,t as S}from"./siteStoryHelpers-BEuiL9KO.js";import{n as C,t as w}from"./SiteCard-CclVGemr.js";import{n as T,t as E}from"./SiteCompactCard-edGbGlkr.js";import{n as D,t as O}from"./SiteListLayoutSelector-CGOakv3u.js";import{n as k,t as A}from"./SiteTableView-B8baxuUR.js";var j,M,N=e((()=>{m(),u(),g(),j=l(),M=()=>{let e=d.metrics.monitor;return(0,j.jsx)(_,{className:`w-full`,padding:`xl`,children:(0,j.jsxs)(`div`,{className:`flex min-h-56 flex-col items-center justify-center`,"data-testid":`empty-state`,children:[(0,j.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,j.jsx)(e,{"aria-hidden":`true`,className:`size-14 opacity-70`,"data-testid":`empty-state-monitor-icon`})}),(0,j.jsxs)(`div`,{className:`mt-5 space-y-2 text-center`,children:[(0,j.jsx)(h,{align:`center`,as:`h3`,size:`lg`,variant:`primary`,weight:`semibold`,children:`No sites are being monitored`}),(0,j.jsx)(h,{align:`center`,as:`p`,size:`base`,variant:`secondary`,children:`Add your first website to start monitoring its uptime.`})]})]})})},M.__docgenInfo={description:`Empty state component for displaying when no sites are configured.

@remarks
Renders a user-friendly empty state with visual indicators and messaging to
guide users when no sites are available for monitoring.

@returns JSX element containing the empty state interface

@public`,methods:[],displayName:`EmptyState`}})),P=e((()=>{})),F,I,L,R,z,se=e((()=>{F=t(o()),i(),ne(),te(),b(),m(),ie(),u(),C(),T(),N(),D(),k(),P(),I=l(),L=d.metrics.monitor,R=e=>e.sites,z=()=>{let e=ee(R),{cardPresentation:t,layout:i,setCardPresentation:a,setLayout:o,setSurfaceDensity:s,surfaceDensity:c}=y(v((0,F.useCallback)(e=>({cardPresentation:e.siteCardPresentation,layout:e.siteListLayout,setCardPresentation:e.setSiteCardPresentation,setLayout:e.setSiteListLayout,setSurfaceDensity:e.setSurfaceDensity,surfaceDensity:e.surfaceDensity}),[]))),{isDark:l}=re(),u=(0,F.useCallback)(e=>{o(e)},[o]),d=(0,F.useCallback)(e=>{a(e)},[a]),f=(0,F.useCallback)(e=>{s(e)},[s]),p=(0,F.useMemo)(()=>{let e=[`site-grid`];return i===`card-compact`&&e.push(`site-grid--compact`),i===`card-large`&&t===`stacked`&&e.push(`site-grid--stacked`),i===`card-large`&&t===`grid`&&e.push(`site-grid--balanced`),l&&e.push(`site-grid--dark`),r(e,` `)},[t,l,i]);return n(e)?(0,I.jsx)(M,{}):(0,I.jsxs)(`div`,{className:`site-list`,"data-testid":`site-list`,children:[(0,I.jsxs)(`div`,{className:`site-list__toolbar`,children:[(0,I.jsxs)(`div`,{className:`site-list__toolbar-title`,children:[(0,I.jsx)(h,{size:`lg`,weight:`semibold`,children:(0,I.jsxs)(`span`,{className:`site-list__toolbar-heading`,children:[(0,I.jsx)(L,{"aria-hidden":`true`,className:`site-list__toolbar-icon`,size:18}),`Sites`]})}),(0,I.jsx)(h,{size:`xs`,variant:`tertiary`,children:(0,I.jsxs)(`span`,{"data-testid":`site-count-label`,children:[`Tracking `,e.length,` site`,e.length===1?``:`s`]})})]}),(0,I.jsx)(O,{cardPresentation:t,layout:i,listDensity:c,onLayoutChange:u,onListDensityChange:f,onPresentationChange:d})]}),i===`list`?(0,I.jsx)(A,{density:c,sites:e}):(0,I.jsx)(`div`,{className:p,children:e.map(e=>i===`card-compact`?(0,I.jsx)(E,{site:e},e.identifier):(0,I.jsx)(w,{presentation:t,site:e},e.identifier))})]})},z.__docgenInfo={description:`Main site list component that displays all monitored sites.

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

@returns JSX.Element containing the site list or empty state`,methods:[],displayName:`SiteList`}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{se(),b(),s(),p(),B=t(o()),ae(),V=l(),H=[x({identifier:`site-atlas`,monitors:[S({id:`atlas-port`,monitoring:!1,status:`paused`,type:`port`}),S({id:`atlas-ping`,responseTime:180,status:`up`,type:`ping`})],name:`Atlas Edge Gateway`}),x({identifier:`site-aurora`,name:`Aurora CDN`}),x({identifier:`site-orion`,monitors:[S({id:`orion-http`,responseTime:320,status:`degraded`,type:`http`,url:`https://api.orion.example`}),S({id:`orion-dns`,status:`up`,type:`dns`})],name:`Orion API Cluster`})],U=()=>({density:`comfortable`,layout:`card-large`,presentation:`stacked`,sites:H}),W=e=>{if(!Array.isArray(e))return U().sites;let t=[];for(let n of e){let e=f(n);if(!e.success)return U().sites;t.push(e.data)}return t},G=e=>{let t=U();return c(e)?{density:a(e,`density`)&&(e.density===`comfortable`||e.density===`cozy`||e.density===`compact`)?e.density:t.density,layout:a(e,`layout`)&&(e.layout===`card-large`||e.layout===`card-compact`||e.layout===`list`)?e.layout:t.layout,presentation:a(e,`presentation`)&&(e.presentation===`stacked`||e.presentation===`grid`)?e.presentation:t.presentation,sites:a(e,`sites`)?W(e.sites):t.sites}:t},K=(e,t)=>{let{density:n,layout:r,presentation:i}=G(t.args);return(0,B.useEffect)(function(){let e={siteCardPresentation:y.getState().siteCardPresentation,siteListLayout:y.getState().siteListLayout,surfaceDensity:y.getState().surfaceDensity};return y.setState({siteCardPresentation:i,siteListLayout:r,surfaceDensity:n}),function(){y.setState({siteCardPresentation:e.siteCardPresentation,siteListLayout:e.siteListLayout,surfaceDensity:e.surfaceDensity})}},[n,r,i]),(0,V.jsx)(e,{})},q={args:{density:`comfortable`,layout:`card-large`,presentation:`stacked`,sites:H},argTypes:{density:{control:{labels:{comfortable:`Comfortable`,compact:`Compact`,cozy:`Cozy`},type:`radio`},description:`Row density used when layout is set to list (table)`,options:[`comfortable`,`cozy`,`compact`]},layout:{control:{labels:{"card-compact":`Compact Cards`,"card-large":`Large Cards`,list:`Table`},type:`radio`},description:`Site list layout mode`,options:[`card-large`,`card-compact`,`list`]},presentation:{control:{labels:{grid:`Balanced Grid`,stacked:`Stacked`},type:`radio`},description:`Card presentation used when the layout is set to large cards.`,options:[`stacked`,`grid`]},sites:{control:!1,description:`Site data rendered within the list`}},component:z,decorators:[oe(e=>G(e.args).sites),K],parameters:{layout:`fullscreen`},tags:[`autodocs`]},J={},Y={args:{presentation:`grid`}},X={args:{layout:`card-compact`,presentation:`grid`}},Z={args:{density:`cozy`,layout:`list`}},Q={args:{sites:[]}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    presentation: "grid"
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "card-compact",
    presentation: "grid"
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    density: "cozy",
    layout: "list"
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    sites: []
  }
}`,...Q.parameters?.docs?.source}}},$=[`StackedCards`,`BalancedGrid`,`CompactCards`,`ListView`,`EmptyState`]}))();export{Y as BalancedGrid,X as CompactCards,Q as EmptyState,Z as ListView,J as StackedCards,$ as __namedExportsOrder,q as default};