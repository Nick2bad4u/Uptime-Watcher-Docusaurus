var g=Object.defineProperty;var h=(t,c)=>g(t,"name",{value:c,configurable:!0});import{j as m}from"./jsx-runtime-BHIWlbBZ.js";import{r as C,c as T}from"./iframe-K4-Qd2g0.js";import{M as b}from"./MiniChartBar-CfVMnEXs.js";import{T as j}from"./ThemedText-BuKI3xEx.js";const w=C.memo(h(function(c){const e=T.c(19),{className:y,history:p,maxItems:x,title:i}=c,d=y===void 0?"":y,f=x===void 0?120:x;if(p.length===0)return null;let a,n,r,o,s;if(e[0]!==d||e[1]!==p||e[2]!==f||e[3]!==i){const v=p.slice(0,f).toReversed();r=`${i} history chart`,o=`mb-3 w-full ${d}`,e[9]!==i?(s=m.jsx("div",{className:"mb-2 flex items-center justify-end",children:m.jsx(j,{size:"xs",variant:"secondary",children:i})}),e[9]=i,e[10]=s):s=e[10],a="flex min-w-0 shrink items-center justify-end gap-1 overflow-hidden",n=v.map(H),e[0]=d,e[1]=p,e[2]=f,e[3]=i,e[4]=a,e[5]=n,e[6]=r,e[7]=o,e[8]=s}else a=e[4],n=e[5],r=e[6],o=e[7],s=e[8];let l;e[11]!==a||e[12]!==n?(l=m.jsx("div",{className:a,children:n}),e[11]=a,e[12]=n,e[13]=l):l=e[13];let u;return e[14]!==r||e[15]!==o||e[16]!==s||e[17]!==l?(u=m.jsxs("section",{"aria-label":r,className:o,children:[s,l]}),e[14]=r,e[15]=o,e[16]=s,e[17]=l,e[18]=u):u=e[18],u},"HistoryChartComponent"));w.__docgenInfo={description:`Reusable history chart component for visualizing status history. Can be used
anywhere we need to show historical data.

Features:

- Responsive layout using CSS
- Memoized to prevent unnecessary re-renders
- Configurable item limit
- Graceful handling of empty data

@param props - HistoryChart component props

@returns JSX element containing the history chart, or null if no data
  (following React conventions for conditional rendering)`,methods:[],displayName:"HistoryChart",props:{history:{required:!0,tsType:{name:"Array",elements:[{name:"StatusHistory"}],raw:"StatusHistory[]"},description:"Array of historical status records to display"},maxItems:{required:!1,tsType:{name:"number"},description:"Maximum number of items to display (default: 120)",defaultValue:{value:"120",computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Title to display above the chart"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};function H(t){return m.jsx(b,{responseTime:t.responseTime,status:t.status,timestamp:t.timestamp},`${t.timestamp}-${t.status}-${t.responseTime}`)}h(H,"_temp");export{w as H};
