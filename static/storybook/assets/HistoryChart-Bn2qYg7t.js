import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedText-CjgKw-SZ.js";import{n as o,t as s}from"./MiniChartBar-DMvHbhlV.js";var c,l,u,d=t((()=>{c=e(n()),o(),i(),l=r(),u=(0,c.memo)(function({className:e=``,history:t,maxItems:n=120,title:r}){if(t.length===0)return null;let i=t.slice(0,n).toReversed();return(0,l.jsxs)(`section`,{"aria-label":`${r} history chart`,className:`mb-3 w-full ${e}`,children:[(0,l.jsx)(`div`,{className:`mb-2 flex items-center justify-end`,children:(0,l.jsx)(a,{size:`xs`,variant:`secondary`,children:r})}),(0,l.jsx)(`div`,{className:`flex min-w-0 shrink items-center justify-end gap-1 overflow-hidden`,children:i.map(e=>(0,l.jsx)(s,{responseTime:e.responseTime,status:e.status,timestamp:e.timestamp},`${e.timestamp}-${e.status}-${e.responseTime}`))})]})}),u.__docgenInfo={description:`Reusable history chart component for visualizing status history. Can be used
anywhere we need to show historical data.

Features:

- Responsive layout using CSS
- Memoized to prevent unnecessary re-renders
- Configurable item limit
- Graceful handling of empty data

@param props - HistoryChart component props

@returns JSX element containing the history chart, or null if no data
  (following React conventions for conditional rendering)`,methods:[],displayName:`HistoryChart`,props:{history:{required:!0,tsType:{name:`Array`,elements:[{name:`StatusHistory`}],raw:`StatusHistory[]`},description:`Array of historical status records to display`},maxItems:{required:!1,tsType:{name:`number`},description:`Maximum number of items to display (default: 120)`,defaultValue:{value:`120`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:`Title to display above the chart`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{d as n,u as t};