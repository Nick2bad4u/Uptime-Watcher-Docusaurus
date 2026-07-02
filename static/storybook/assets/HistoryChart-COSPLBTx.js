import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{C as n,t as r}from"./distribution-BzBsdpyi.js";import{xn as i}from"./iframe-lSASCLST.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{n as o,t as s}from"./ThemedText-rJ5CgpxA.js";import{n as c,t as l}from"./MiniChartBar-BQ1D6FkZ.js";var u,d,f,p=e((()=>{u=t(i()),r(),c(),o(),d=a(),f=(0,u.memo)(function({className:e=``,history:t,maxItems:r=120,title:i}){if(n(t))return null;let a=t.slice(0,r).toReversed();return(0,d.jsxs)(`section`,{"aria-label":`${i} history chart`,className:`mb-3 w-full ${e}`,children:[(0,d.jsx)(`div`,{className:`mb-2 flex items-center justify-end`,children:(0,d.jsx)(s,{size:`xs`,variant:`secondary`,children:i})}),(0,d.jsx)(`div`,{className:`flex min-w-0 shrink items-center justify-end gap-1 overflow-hidden`,children:a.map(e=>(0,d.jsx)(l,{responseTime:e.responseTime,status:e.status,timestamp:e.timestamp},`${e.timestamp}-${e.status}-${e.responseTime}`))})]})}),f.__docgenInfo={description:`Reusable history chart component for visualizing status history. Can be used
anywhere we need to show historical data.

Features:

- Responsive layout using CSS
- Memoized to prevent unnecessary re-renders
- Configurable item limit
- Graceful handling of empty data

@param props - HistoryChart component props

@returns JSX element containing the history chart, or null if no data
  (following React conventions for conditional rendering)`,methods:[],displayName:`HistoryChart`,props:{history:{required:!0,tsType:{name:`Array`,elements:[{name:`StatusHistory`}],raw:`StatusHistory[]`},description:`Array of historical status records to display`},maxItems:{required:!1,tsType:{name:`number`},description:`Maximum number of items to display (default: 120)`,defaultValue:{value:`120`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:`Title to display above the chart`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{p as n,f as t};