import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-DlbQ3f5p.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-BxRSVxuS.js";import{n as o,t as s}from"./StatusIndicator-CnqLwW4v.js";var c,l,u,d=e((()=>{c=t(n()),o(),i(),l=r(),u=(0,c.memo)(function({className:e=``,formatter:t,label:n,showIcon:r=!0,size:i=`sm`,status:o}){let c=e=>{switch(e){case`2xl`:case`3xl`:case`4xl`:case`xl`:return`lg`;case`base`:case`lg`:return`md`;case`sm`:case`xs`:return`sm`;default:return`sm`}},u=t?t(n,o):`${n}: ${o}`;return(0,l.jsxs)(`div`,{className:`flex items-center gap-3 ${e}`,children:[r?(0,l.jsx)(s,{size:c(i),status:o}):null,(0,l.jsx)(a,{size:i,variant:`secondary`,children:u})]})}),u.__docgenInfo={description:`Reusable status badge component that combines status indicator with text. Can
be used throughout the app for consistent status display.

This component is memoized to prevent unnecessary re-renders when parent
components update. The memoization is beneficial because status badges are
often rendered in lists and don't change frequently. Consumers should ensure
that props are stable (especially formatter function) to maximize memoization
benefits.

@param props - StatusBadge component props

@returns JSX element containing status indicator and text`,methods:[],displayName:`StatusBadge`,props:{formatter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(label: string, status: MonitorStatus) => string`,signature:{arguments:[{type:{name:`string`},name:`label`},{type:{name:`MonitorStatus`},name:`status`}],return:{name:`string`}}},description:`Optional custom formatter for label and status display`},label:{required:!0,tsType:{name:`string`},description:`Label text to display (expected to be localized by caller)

@example Status , "Current State", "Monitor Status"`},showIcon:{required:!1,tsType:{name:`boolean`},description:`Whether to show the status icon`,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "2xl"
| "3xl"
| "4xl"
| "base"
| "lg"
| "sm"
| "xl"
| "xs"`,elements:[{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"base"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Text size (affects both text and icon sizing)`,defaultValue:{value:`"sm"`,computed:!1}},status:{required:!0,tsType:{name:`MonitorStatus`},description:`Current status to display`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{d as n,u as t};