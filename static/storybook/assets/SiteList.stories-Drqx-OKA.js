import{a as e,n as t}from"./chunk-BneVvdWh.js";import{J as n,Qt as r,et as i,q as a}from"./iframe-CAh388JZ.js";import{t as o}from"./jsx-runtime-Bn1Ys6_W.js";import{r as s,t as c}from"./icons-B14S2C6F.js";import{a as l,n as ee,o as u,t as d}from"./useSitesStore-DbLYLu3e.js";import{n as f,t as p}from"./ThemedText-CjgKw-SZ.js";import{n as m,t as h}from"./SurfaceContainer-DtjoKhkr.js";import{d as g,r as _,t as te,u as ne}from"./useTheme-CnVQVT2j.js";import{n as v,t as y}from"./useUiStore-D8DklwVz.js";import{i as re,n as b,r as ie,t as x}from"./siteStoryHelpers-iAn6BQcA.js";import{n as S,t as C}from"./SiteCard-DBnbw6x5.js";import{n as w,t as T}from"./SiteCompactCard-Dut7KYhA.js";import{n as E,t as D}from"./SiteListLayoutSelector-4HCtElLQ.js";import{n as O,t as k}from"./SiteTableView-CyXJRadE.js";var A,j,M=t((()=>{f(),s(),m(),A=o(),j=()=>{let e=c.metrics.monitor;return(0,A.jsx)(h,{className:`w-full`,padding:`xl`,children:(0,A.jsxs)(`div`,{className:`flex min-h-56 flex-col items-center justify-center`,"data-testid":`empty-state`,children:[(0,A.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,A.jsx)(e,{"aria-hidden":`true`,className:`size-14 opacity-70`,"data-testid":`empty-state-monitor-icon`})}),(0,A.jsxs)(`div`,{className:`mt-5 space-y-2 text-center`,children:[(0,A.jsx)(p,{align:`center`,as:`h3`,size:`lg`,variant:`primary`,weight:`semibold`,children:`No sites are being monitored`}),(0,A.jsx)(p,{align:`center`,as:`p`,size:`base`,variant:`secondary`,children:`Add your first website to start monitoring its uptime.`})]})]})})},j.__docgenInfo={description:`Empty state component for displaying when no sites are configured.

@remarks
Renders a user-friendly empty state with visual indicators and messaging to
guide users when no sites are available for monitoring.

@returns JSX element containing the empty state interface

@public`,methods:[],displayName:`EmptyState`}})),N=t((()=>{})),P,F,I,L,R,z=t((()=>{P=e(r()),ne(),d(),y(),f(),te(),s(),S(),w(),M(),E(),O(),N(),F=o(),I=c.metrics.monitor,L=e=>e.sites,R=()=>{let e=ee(L),{cardPresentation:t,layout:n,setCardPresentation:r,setLayout:i,setSurfaceDensity:a,surfaceDensity:o}=v(g((0,P.useCallback)(e=>({cardPresentation:e.siteCardPresentation,layout:e.siteListLayout,setCardPresentation:e.setSiteCardPresentation,setLayout:e.setSiteListLayout,setSurfaceDensity:e.setSurfaceDensity,surfaceDensity:e.surfaceDensity}),[]))),{isDark:s}=_(),c=(0,P.useCallback)(e=>{i(e)},[i]),l=(0,P.useCallback)(e=>{r(e)},[r]),u=(0,P.useCallback)(e=>{a(e)},[a]),d=(0,P.useMemo)(()=>{let e=[`site-grid`];return n===`card-compact`&&e.push(`site-grid--compact`),n===`card-large`&&t===`stacked`&&e.push(`site-grid--stacked`),n===`card-large`&&t===`grid`&&e.push(`site-grid--balanced`),s&&e.push(`site-grid--dark`),e.join(` `)},[t,s,n]);return e.length===0?(0,F.jsx)(j,{}):(0,F.jsxs)(`div`,{className:`site-list`,"data-testid":`site-list`,children:[(0,F.jsxs)(`div`,{className:`site-list__toolbar`,children:[(0,F.jsxs)(`div`,{className:`site-list__toolbar-title`,children:[(0,F.jsx)(p,{size:`lg`,weight:`semibold`,children:(0,F.jsxs)(`span`,{className:`site-list__toolbar-heading`,children:[(0,F.jsx)(I,{"aria-hidden":`true`,className:`site-list__toolbar-icon`,size:18}),`Sites`]})}),(0,F.jsx)(p,{size:`xs`,variant:`tertiary`,children:(0,F.jsxs)(`span`,{"data-testid":`site-count-label`,children:[`Tracking `,e.length,` site`,e.length===1?``:`s`]})})]}),(0,F.jsx)(D,{cardPresentation:t,layout:n,listDensity:o,onLayoutChange:c,onListDensityChange:u,onPresentationChange:l})]}),n===`list`?(0,F.jsx)(k,{density:o,sites:e}):(0,F.jsx)(`div`,{className:d,children:e.map(e=>n===`card-compact`?(0,F.jsx)(T,{site:e},e.identifier):(0,F.jsx)(C,{presentation:t,site:e},e.identifier))})]})},R.__docgenInfo={description:`Main site list component that displays all monitored sites.

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

@returns JSX.Element containing the site list or empty state`,methods:[],displayName:`SiteList`}})),B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{z(),y(),n(),l(),B=e(r()),re(),V=o(),H=[b({identifier:`site-aurora`,name:`Aurora CDN`}),b({identifier:`site-orion`,monitors:[x({id:`orion-http`,responseTime:320,status:`degraded`,type:`http`,url:`https://api.orion.example`}),x({id:`orion-dns`,status:`up`,type:`dns`})],name:`Orion API Cluster`}),b({identifier:`site-atlas`,monitors:[x({id:`atlas-port`,monitoring:!1,status:`paused`,type:`port`}),x({id:`atlas-ping`,responseTime:180,status:`up`,type:`ping`})],name:`Atlas Edge Gateway`})],U=()=>({density:`comfortable`,layout:`card-large`,presentation:`stacked`,sites:H}),W=e=>{if(!Array.isArray(e))return U().sites;let t=[];for(let n of e){let e=u(n);if(!e.success)return U().sites;t.push(e.data)}return t},G=e=>{let t=U();return i(e)?{density:a(e,`density`)&&(e.density===`comfortable`||e.density===`cozy`||e.density===`compact`)?e.density:t.density,layout:a(e,`layout`)&&(e.layout===`card-large`||e.layout===`card-compact`||e.layout===`list`)?e.layout:t.layout,presentation:a(e,`presentation`)&&(e.presentation===`stacked`||e.presentation===`grid`)?e.presentation:t.presentation,sites:a(e,`sites`)?W(e.sites):t.sites}:t},K=(e,t)=>{let{density:n,layout:r,presentation:i}=G(t.args);return(0,B.useEffect)(function(){let e={siteCardPresentation:v.getState().siteCardPresentation,siteListLayout:v.getState().siteListLayout,surfaceDensity:v.getState().surfaceDensity};return v.setState({siteCardPresentation:i,siteListLayout:r,surfaceDensity:n}),function(){v.setState({siteCardPresentation:e.siteCardPresentation,siteListLayout:e.siteListLayout,surfaceDensity:e.surfaceDensity})}},[n,r,i]),(0,V.jsx)(e,{})},q={args:{density:`comfortable`,layout:`card-large`,presentation:`stacked`,sites:H},argTypes:{layout:{control:{labels:{"card-compact":`Compact Cards`,"card-large":`Large Cards`,list:`Table`},type:`radio`},description:`Site list layout mode`,options:[`card-large`,`card-compact`,`list`]},density:{control:{labels:{comfortable:`Comfortable`,cozy:`Cozy`,compact:`Compact`},type:`radio`},description:`Row density used when layout is set to list (table)`,options:[`comfortable`,`cozy`,`compact`]},presentation:{control:{labels:{grid:`Balanced Grid`,stacked:`Stacked`},type:`radio`},description:`Card presentation used when the layout is set to large cards.`,options:[`stacked`,`grid`]},sites:{control:!1,description:`Site data rendered within the list`}},component:R,decorators:[ie(e=>G(e.args).sites),K],parameters:{layout:`fullscreen`},tags:[`autodocs`]},J={},Y={args:{presentation:`grid`}},X={args:{layout:`card-compact`,presentation:`grid`}},Z={args:{density:`cozy`,layout:`list`}},Q={args:{sites:[]}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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