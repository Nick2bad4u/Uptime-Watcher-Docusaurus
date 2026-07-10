import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{M as n,t as r}from"./distribution-ruwBHiZP.js";import{Rn as i}from"./iframe-CfLRHmV-.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{r as o,t as s}from"./useTheme-D3xES0c9.js";var c,l,u,d=e((()=>{c=t(i()),r(),s(),l=a(),u=(0,c.memo)(function({children:e,className:t=``,icon:r,iconColor:i,size:a=`md`,variant:s=`primary`}){let{currentTheme:u}=o(),d=(0,c.useMemo)(()=>{let e={alignItems:`center`,border:`1px solid`,borderRadius:u.borderRadius.full,cursor:`default`,display:`inline-flex`,fontFamily:n(u.typography.fontFamily.sans,`, `),fontWeight:u.typography.fontWeight.medium,gap:u.spacing.xs,justifyContent:`center`,lineHeight:u.typography.lineHeight.tight,transition:`all 150ms ease-in-out`,userSelect:`none`,whiteSpace:`nowrap`},t={lg:{fontSize:u.typography.fontSize.base,padding:`${u.spacing.sm} ${u.spacing.lg}`},md:{fontSize:u.typography.fontSize.sm,padding:`${u.spacing.sm} ${u.spacing.md}`},sm:{fontSize:u.typography.fontSize.sm,padding:`${u.spacing.xs} ${u.spacing.sm}`},xs:{fontSize:u.typography.fontSize.xs,padding:`${u.spacing.xs} ${u.spacing.sm}`}},r={error:{backgroundColor:`${u.colors.error}20`,borderColor:`${u.colors.error}40`,color:u.colors.error},info:{backgroundColor:`${u.colors.primary[500]}20`,borderColor:`${u.colors.primary[500]}40`,color:u.colors.primary[600]},primary:{backgroundColor:u.colors.primary[100],borderColor:u.colors.primary[200],color:u.colors.primary[700]},secondary:{backgroundColor:u.colors.background.secondary,borderColor:u.colors.border.secondary,color:u.colors.text.secondary},success:{backgroundColor:`${u.colors.success}20`,borderColor:`${u.colors.success}40`,color:u.colors.success},warning:{backgroundColor:`${u.colors.warning}20`,borderColor:`${u.colors.warning}40`,color:u.colors.warning}};return{...e,...t[a],...r[s]}},[u.borderRadius.full,u.colors.background.secondary,u.colors.border.secondary,u.colors.error,u.colors.primary,u.colors.success,u.colors.text.secondary,u.colors.warning,u.spacing.lg,u.spacing.md,u.spacing.sm,u.spacing.xs,u.typography.fontFamily.sans,u.typography.fontSize.base,u.typography.fontSize.sm,u.typography.fontSize.xs,u.typography.fontWeight.medium,u.typography.lineHeight.tight,a,s]),f=(0,c.useMemo)(()=>({color:i??d.color,fontSize:`inherit`}),[d.color,i]);return(0,l.jsxs)(`span`,{className:`themed-badge themed-badge--${s} themed-badge--${a} ${t}`,style:d,children:[r?(0,l.jsx)(`span`,{style:f,children:r}):null,e]})}),u.__docgenInfo={description:`Themed badge component for status indicators, labels, and informational
elements.

@remarks
This component provides a compact way to display status information with
consistent theming. The badge automatically calculates appropriate colors,
spacing, and typography based on the selected variant and size. Icons are
automatically colored to match the theme.

@example Monitor status badge:

\`\`\`tsx
<ThemedBadge
    variant={site.isOnline ? "success" : "error"}
    icon={<StatusIcon />}
>
    {site.isOnline ? "Online" : "Offline"}
</ThemedBadge>;
\`\`\`

@param props - The component properties

@returns The themed badge JSX element

@public`,methods:[],displayName:`ThemedBadge`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element to display alongside the badge content`},iconColor:{required:!1,tsType:{name:`string`},description:`Color theme for the icon (uses theme color names)`},size:{required:!1,tsType:{name:`union`,raw:`| "lg"
| "md"
| "sm"
| "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xs"`}]},description:`Size variant for the badge`,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "error"
| "info"
| "primary"
| "secondary"
| "success"
| "warning"`,elements:[{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`}]},description:`Visual variant for the badge styling (primary, success, warning, error,
etc.)`,defaultValue:{value:`"primary"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{d as n,u as t};