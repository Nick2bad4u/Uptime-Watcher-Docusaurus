import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./icons-B14S2C6F.js";import{n as o,t as s}from"./ThemedSelect-D5OQyPig.js";import{n as c,t as l}from"./monitorDisplayInfo-D5UoqyDb.js";var u,d,f,p,m,h,g,_=t((()=>{u=e(n()),o(),i(),c(),d=r(),f=new Set([80,443]),p=`Select a monitor`,m=`No monitors available`,h=(e,t,n)=>{if(!t)return n;if(typeof e.url==`string`&&t===e.url&&typeof e.port==`number`&&e.port>0&&!f.has(e.port)&&e.host)try{let t=new URL(e.url);if(t.hostname===e.host&&t.port===``)return`${e.host}:${e.port}`}catch{return`${e.host}:${e.port}`}return t},g=(0,u.memo)(function({className:e=`min-w-20`,disabled:t,monitors:n,onChange:r,selectedMonitorId:i}){let o=(0,u.useRef)(null),c=(0,u.useId)(),f=(0,u.useMemo)(()=>`monitor-selector-${c.replaceAll(`:`,``)}`,[c]),g=(t??!1)||n.length===0,_=(0,u.useMemo)(()=>n.some(e=>e.id===i),[n,i]),v=_?i:``,y=n.length===0?m:p,b=(0,u.useCallback)(e=>{e.stopPropagation()},[]),x=(0,u.useCallback)(e=>{e.stopPropagation()},[]),S=(0,u.useCallback)(e=>{let{connectionInfo:t,connectionInfoSource:n,monitorTypeLabel:r}=l({fallbackIdentifier:``,monitor:e}),i=n===`identifier`?h(e,t,``):t;return i?`${r}: ${i}`:r},[]),C=[`monitor-selector__wrapper`,[`monitor-selector`,e].filter(Boolean).join(` `),g?`monitor-selector__wrapper--disabled`:void 0].filter(Boolean).join(` `),w=(0,u.useMemo)(()=>{if(!_)return y;let e=n.find(e=>e.id===i);return e?S(e):y},[S,_,n,y,i]),T=a.metrics.monitor,E=a.ui.expand;return(0,d.jsxs)(`div`,{className:C,"data-disabled":g,"data-prevent-row-activation":`true`,title:w,children:[(0,d.jsx)(`span`,{"aria-hidden":`true`,className:`monitor-selector__icon monitor-selector__icon--leading`,children:(0,d.jsx)(T,{size:16})}),(0,d.jsxs)(s,{"aria-label":`Select monitor`,className:`monitor-selector__input`,disabled:g,fluid:!1,id:f,onChange:r,onClick:b,onMouseDown:x,ref:o,tone:`transparent`,value:v,children:[_?null:(0,d.jsx)(`option`,{disabled:!0,value:``,children:y}),n.map(e=>(0,d.jsx)(`option`,{value:e.id,children:S(e)},e.id))]}),(0,d.jsx)(`span`,{"aria-hidden":`true`,className:`monitor-selector__icon monitor-selector__icon--trailing`,children:(0,d.jsx)(E,{size:14})})]})}),g.__docgenInfo={description:`Monitor selection dropdown component for switching between site monitors.

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
disabled when no monitors are available.`},monitors:{required:!0,tsType:{name:`Array`,elements:[{name:`Monitor`}],raw:`Monitor[]`},description:`Array of available monitors to choose from`},onChange:{required:!0,tsType:{name:`EventHandlers.ChangeWithEvent`,elements:[{name:`HTMLSelectElement`}],raw:`EventHandlers.ChangeWithEvent<HTMLSelectElement>`},description:`Callback function for selection change events`},selectedMonitorId:{required:!0,tsType:{name:`string`},description:`ID of the currently selected monitor`}}}}));export{_ as n,g as t};