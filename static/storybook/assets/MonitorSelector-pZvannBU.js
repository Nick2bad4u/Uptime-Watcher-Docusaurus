import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{C as n,M as r,a as i,t as a}from"./distribution-ruwBHiZP.js";import{Rn as o}from"./iframe-DrR-jiVn.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{r as c,t as l}from"./icons-w8U4JDNt.js";import{n as u,t as d}from"./ThemedSelect-BzFuas01.js";import{n as f,t as p}from"./monitorDisplayInfo-CRgJu5nj.js";var m,h,g,_,v,y,b,x=e((()=>{m=t(o()),a(),u(),c(),f(),h=s(),g=new Set([80,443]),_=`Select a monitor`,v=`No monitors available`,y=(e,t,n)=>{if(!t)return n;if(typeof e.url==`string`&&t===e.url&&typeof e.port==`number`&&e.port>0&&!i(g,e.port)&&e.host)try{let t=new URL(e.url);if(t.hostname===e.host&&t.port===``)return`${e.host}:${String(e.port)}`}catch{return`${e.host}:${String(e.port)}`}return t},b=(0,m.memo)(function({className:e=`min-w-20`,disabled:t,monitors:i,onChange:a,selectedMonitorId:o}){let s=(0,m.useRef)(null),c=(0,m.useId)(),u=(0,m.useMemo)(()=>`monitor-selector-${c.replaceAll(`:`,``)}`,[c]),f=(t??!1)||n(i),g=(0,m.useMemo)(()=>i.some(e=>e.id===o),[i,o]),b=g?o:``,x=n(i)?v:_,S=(0,m.useCallback)(e=>{e.stopPropagation()},[]),C=(0,m.useCallback)(e=>{e.stopPropagation()},[]),w=(0,m.useCallback)(e=>{let{connectionInfo:t,connectionInfoSource:n,monitorTypeLabel:r}=p({fallbackIdentifier:``,monitor:e}),i=n===`identifier`?y(e,t,``):t;return i?`${r}: ${i}`:r},[]),T=r([`monitor-selector__wrapper`,r([`monitor-selector`,e].filter(Boolean),` `),f?`monitor-selector__wrapper--disabled`:void 0].filter(Boolean),` `),E=(0,m.useMemo)(()=>{if(!g)return x;let e=i.find(e=>e.id===o);return e?w(e):x},[w,g,i,x,o]),D=l.metrics.monitor,O=l.ui.expand;return(0,h.jsxs)(`div`,{className:T,"data-disabled":f,"data-prevent-row-activation":`true`,title:E,children:[(0,h.jsx)(`span`,{"aria-hidden":`true`,className:`monitor-selector__icon monitor-selector__icon--leading`,children:(0,h.jsx)(D,{size:16})}),(0,h.jsxs)(d,{"aria-label":`Select monitor`,className:`monitor-selector__input`,disabled:f,fluid:!1,id:u,onChange:a,onClick:S,onMouseDown:C,ref:s,tone:`transparent`,value:b,children:[g?null:(0,h.jsx)(`option`,{disabled:!0,value:``,children:x}),i.map(e=>(0,h.jsx)(`option`,{value:e.id,children:w(e)},e.id))]}),(0,h.jsx)(`span`,{"aria-hidden":`true`,className:`monitor-selector__icon monitor-selector__icon--trailing`,children:(0,h.jsx)(O,{size:14})})]})}),b.__docgenInfo={description:`Monitor selection dropdown component for switching between site monitors.

Features:

- Dynamic option formatting based on monitor type and configuration
- Event propagation control to prevent card click conflicts
- Optimized with React.memo and useCallback for performance
- Themed select component integration
- Supports HTTP and port monitor types with descriptive labels

@example

\`\`\`tsx
<MonitorSelector
    monitors={site.monitors}
    selectedMonitorId="monitor-1"
    onChange={handleMonitorChange}
    className="w-32"
/>;
\`\`\`

@param props - Component props

@returns JSX.Element containing the monitor selector dropdown`,methods:[],displayName:`MonitorSelector`,props:{className:{required:!1,tsType:{name:`string`},description:`Optional CSS classes for custom styling`,defaultValue:{value:`"min-w-20"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the selector should be rendered in a disabled state. Defaults to
disabled when no monitors are available.`},monitors:{required:!0,tsType:{name:`Array`,elements:[{name:`Monitor`}],raw:`Monitor[]`},description:`Array of available monitors to choose from`},onChange:{required:!0,tsType:{name:`EventHandlers.ChangeWithEvent`,elements:[{name:`HTMLSelectElement`}],raw:`EventHandlers.ChangeWithEvent<HTMLSelectElement>`},description:`Callback function for selection change events`},selectedMonitorId:{required:!0,tsType:{name:`string`},description:`ID of the currently selected monitor`}}}}));export{x as n,b as t};