import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{M as n,p as r,t as i,z as a}from"./distribution-BzBsdpyi.js";import{xn as o}from"./iframe-cfEUpOl1.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{r as c,t as l}from"./useTheme-5EFMRfhk.js";var u,d,f,p=e((()=>{u=t(o()),i(),l(),d=s(),f=(0,u.memo)(function({children:e,className:t=``,icon:i,iconColor:o,size:s=`md`,variant:l=`primary`}){let{currentTheme:f}=c(),p=(0,u.useMemo)(()=>{let e={alignItems:`center`,border:`1px solid`,borderRadius:f.borderRadius.full,cursor:`default`,display:`inline-flex`,fontFamily:n(f.typography.fontFamily.sans,`, `),fontWeight:f.typography.fontWeight.medium,gap:f.spacing.xs,justifyContent:`center`,lineHeight:f.typography.lineHeight.tight,transition:`all 150ms ease-in-out`,userSelect:`none`,whiteSpace:`nowrap`},t={lg:{fontSize:f.typography.fontSize.base,padding:`${f.spacing.sm} ${f.spacing.lg}`},md:{fontSize:f.typography.fontSize.sm,padding:`${f.spacing.sm} ${f.spacing.md}`},sm:{fontSize:f.typography.fontSize.sm,padding:`${f.spacing.xs} ${f.spacing.sm}`},xs:{fontSize:f.typography.fontSize.xs,padding:`${f.spacing.xs} ${f.spacing.sm}`}},i={error:{backgroundColor:`${f.colors.error}20`,borderColor:`${f.colors.error}40`,color:f.colors.error},info:{backgroundColor:`${f.colors.primary[500]}20`,borderColor:`${f.colors.primary[500]}40`,color:f.colors.primary[600]},primary:{backgroundColor:f.colors.primary[100],borderColor:f.colors.primary[200],color:f.colors.primary[700]},secondary:{backgroundColor:f.colors.background.secondary,borderColor:f.colors.border.secondary,color:f.colors.text.secondary},success:{backgroundColor:`${f.colors.success}20`,borderColor:`${f.colors.success}40`,color:f.colors.success},warning:{backgroundColor:`${f.colors.warning}20`,borderColor:`${f.colors.warning}40`,color:f.colors.warning}},o=e=>r(t,e)?t[a(e)]:t.md,c=e=>r(i,e)?i[a(e)]:i.primary;return{...e,...o(s),...c(l)}},[f.borderRadius.full,f.colors.background.secondary,f.colors.border.secondary,f.colors.error,f.colors.primary,f.colors.success,f.colors.text.secondary,f.colors.warning,f.spacing.lg,f.spacing.md,f.spacing.sm,f.spacing.xs,f.typography.fontFamily.sans,f.typography.fontSize.base,f.typography.fontSize.sm,f.typography.fontSize.xs,f.typography.fontWeight.medium,f.typography.lineHeight.tight,s,l]),m=(0,u.useMemo)(()=>({color:o??p.color,fontSize:`inherit`}),[p.color,o]);return(0,d.jsxs)(`span`,{className:`themed-badge themed-badge--${l} themed-badge--${s} ${t}`,style:p,children:[i?(0,d.jsx)(`span`,{style:m,children:i}):null,e]})}),f.__docgenInfo={description:`Themed badge component for status indicators, labels, and informational
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

@public`,methods:[],displayName:`ThemedBadge`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element to display alongside the badge content`},iconColor:{required:!1,tsType:{name:`string`},description:`Color theme for the icon (uses theme color names)`},size:{required:!1,tsType:{name:`union`,raw:`"lg" | "md" | "sm" | "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xs"`}]},description:`Size variant for the badge`,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`"error" | "info" | "primary" | "secondary" | "success" | "warning"`,elements:[{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`}]},description:`Visual variant for the badge styling (primary, success, warning, error,
etc.)`,defaultValue:{value:`"primary"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{p as n,f as t};