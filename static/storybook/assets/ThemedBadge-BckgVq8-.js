import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./useTheme-CnVQVT2j.js";var o,s,c,l=t((()=>{o=e(n()),a(),s=r(),c=(0,o.memo)(function({children:e,className:t=``,icon:n,iconColor:r,size:a=`md`,variant:c=`primary`}){let{currentTheme:l}=i(),u=(0,o.useMemo)(()=>{let e={alignItems:`center`,border:`1px solid`,borderRadius:l.borderRadius.full,cursor:`default`,display:`inline-flex`,fontFamily:l.typography.fontFamily.sans.join(`, `),fontWeight:l.typography.fontWeight.medium,gap:l.spacing.xs,justifyContent:`center`,lineHeight:l.typography.lineHeight.tight,transition:`all 150ms ease-in-out`,userSelect:`none`,whiteSpace:`nowrap`},t={lg:{fontSize:l.typography.fontSize.base,padding:`${l.spacing.sm} ${l.spacing.lg}`},md:{fontSize:l.typography.fontSize.sm,padding:`${l.spacing.sm} ${l.spacing.md}`},sm:{fontSize:l.typography.fontSize.sm,padding:`${l.spacing.xs} ${l.spacing.sm}`},xs:{fontSize:l.typography.fontSize.xs,padding:`${l.spacing.xs} ${l.spacing.sm}`}},n={error:{backgroundColor:`${l.colors.error}20`,borderColor:`${l.colors.error}40`,color:l.colors.error},info:{backgroundColor:`${l.colors.primary[500]}20`,borderColor:`${l.colors.primary[500]}40`,color:l.colors.primary[600]},primary:{backgroundColor:l.colors.primary[100],borderColor:l.colors.primary[200],color:l.colors.primary[700]},secondary:{backgroundColor:l.colors.background.secondary,borderColor:l.colors.border.secondary,color:l.colors.text.secondary},success:{backgroundColor:`${l.colors.success}20`,borderColor:`${l.colors.success}40`,color:l.colors.success},warning:{backgroundColor:`${l.colors.warning}20`,borderColor:`${l.colors.warning}40`,color:l.colors.warning}},r=e=>e in t?t[e]:t.md,i=e=>e in n?n[e]:n.primary;return{...e,...r(a),...i(c)}},[l.borderRadius.full,l.colors.background.secondary,l.colors.border.secondary,l.colors.error,l.colors.primary,l.colors.success,l.colors.text.secondary,l.colors.warning,l.spacing.lg,l.spacing.md,l.spacing.sm,l.spacing.xs,l.typography.fontFamily.sans,l.typography.fontSize.base,l.typography.fontSize.sm,l.typography.fontSize.xs,l.typography.fontWeight.medium,l.typography.lineHeight.tight,a,c]),d=(0,o.useMemo)(()=>({color:r??u.color,fontSize:`inherit`}),[u.color,r]);return(0,s.jsxs)(`span`,{className:`themed-badge themed-badge--${c} themed-badge--${a} ${t}`,style:u,children:[n?(0,s.jsx)(`span`,{style:d,children:n}):null,e]})}),c.__docgenInfo={description:`Themed badge component for status indicators, labels, and informational
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

@public`,methods:[],displayName:`ThemedBadge`,props:{icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element to display alongside the badge content`},iconColor:{required:!1,tsType:{name:`string`},description:`Color theme for the icon (uses theme color names)`},size:{required:!1,tsType:{name:`union`,raw:`"lg" | "md" | "sm" | "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xs"`}]},description:`Size variant for the badge`,defaultValue:{value:`"md"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "error"
| "info"
| "primary"
| "secondary"
| "success"
| "warning"`,elements:[{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"warning"`}]},description:`Visual variant for the badge styling (primary, success, warning, error,
etc.)`,defaultValue:{value:`"primary"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{l as n,c as t};