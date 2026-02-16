var I=Object.defineProperty;var g=($,y)=>I($,"name",{value:y,configurable:!0});import{j as k}from"./jsx-runtime-BHIWlbBZ.js";import{r as V,c as F}from"./iframe-DI6HKbXb.js";import{u as H}from"./useTheme-BebA_Oqh.js";const O=V.memo(g(function(y){const e=F.c(40),{children:u,className:C,icon:n,iconColor:R,size:T,variant:w}=y,j=C===void 0?"":C,t=T===void 0?"md":T,i=w===void 0?"primary":w,{currentTheme:o}=H(),N=o.borderRadius.full;let r;e[0]!==o.typography.fontFamily.sans?(r=o.typography.fontFamily.sans.join(", "),e[0]=o.typography.fontFamily.sans,e[1]=r):r=e[1];let l;e[2]!==o.borderRadius.full||e[3]!==o.spacing.xs||e[4]!==o.typography.fontWeight.medium||e[5]!==o.typography.lineHeight.tight||e[6]!==r?(l={alignItems:"center",border:"1px solid",borderRadius:N,cursor:"default",display:"inline-flex",fontFamily:r,fontWeight:o.typography.fontWeight.medium,gap:o.spacing.xs,justifyContent:"center",lineHeight:o.typography.lineHeight.tight,transition:"all 150ms ease-in-out",userSelect:"none",whiteSpace:"nowrap"},e[2]=o.borderRadius.full,e[3]=o.spacing.xs,e[4]=o.typography.fontWeight.medium,e[5]=o.typography.lineHeight.tight,e[6]=r,e[7]=l):l=e[7];const h=l,f=`${o.spacing.sm} ${o.spacing.lg}`;let c;if(e[8]!==h||e[9]!==o.colors.background.secondary||e[10]!==o.colors.border.secondary||e[11]!==o.colors.error||e[12]!==o.colors.primary[100]||e[13]!==o.colors.primary[200]||e[14]!==o.colors.primary[500]||e[15]!==o.colors.primary[600]||e[16]!==o.colors.primary[700]||e[17]!==o.colors.success||e[18]!==o.colors.text.secondary||e[19]!==o.colors.warning||e[20]!==o.spacing.md||e[21]!==o.spacing.sm||e[22]!==o.spacing.xs||e[23]!==o.typography.fontSize.base||e[24]!==o.typography.fontSize.sm||e[25]!==o.typography.fontSize.xs||e[26]!==t||e[27]!==f||e[28]!==i){const v={lg:{fontSize:o.typography.fontSize.base,padding:f},md:{fontSize:o.typography.fontSize.sm,padding:`${o.spacing.sm} ${o.spacing.md}`},sm:{fontSize:o.typography.fontSize.sm,padding:`${o.spacing.xs} ${o.spacing.sm}`},xs:{fontSize:o.typography.fontSize.xs,padding:`${o.spacing.xs} ${o.spacing.sm}`}},z={error:{backgroundColor:`${o.colors.error}20`,borderColor:`${o.colors.error}40`,color:o.colors.error},info:{backgroundColor:`${o.colors.primary[500]}20`,borderColor:`${o.colors.primary[500]}40`,color:o.colors.primary[600]},primary:{backgroundColor:o.colors.primary[100],borderColor:o.colors.primary[200],color:o.colors.primary[700]},secondary:{backgroundColor:o.colors.background.secondary,borderColor:o.colors.border.secondary,color:o.colors.text.secondary},success:{backgroundColor:`${o.colors.success}20`,borderColor:`${o.colors.success}40`,color:o.colors.success},warning:{backgroundColor:`${o.colors.warning}20`,borderColor:`${o.colors.warning}40`,color:o.colors.warning}},q=g(a=>a in v?v[a]:v.md,"getSizeStyle"),B=g(a=>a in z?z[a]:z.primary,"getVariantStyle");c={...h,...q(t),...B(i)},e[8]=h,e[9]=o.colors.background.secondary,e[10]=o.colors.border.secondary,e[11]=o.colors.error,e[12]=o.colors.primary[100],e[13]=o.colors.primary[200],e[14]=o.colors.primary[500],e[15]=o.colors.primary[600],e[16]=o.colors.primary[700],e[17]=o.colors.success,e[18]=o.colors.text.secondary,e[19]=o.colors.warning,e[20]=o.spacing.md,e[21]=o.spacing.sm,e[22]=o.spacing.xs,e[23]=o.typography.fontSize.base,e[24]=o.typography.fontSize.sm,e[25]=o.typography.fontSize.xs,e[26]=t,e[27]=f,e[28]=i,e[29]=c}else c=e[29];const p=c,b=R??p.color;let m;e[30]!==b?(m={color:b,fontSize:"inherit"},e[30]=b,e[31]=m):m=e[31];const S=m,x=`themed-badge themed-badge--${i} themed-badge--${t} ${j}`;let s;e[32]!==n||e[33]!==S?(s=n?k.jsx("span",{style:S,children:n}):null,e[32]=n,e[33]=S,e[34]=s):s=e[34];let d;return e[35]!==u||e[36]!==p||e[37]!==x||e[38]!==s?(d=k.jsxs("span",{className:x,style:p,children:[s,u]}),e[35]=u,e[36]=p,e[37]=x,e[38]=s,e[39]=d):d=e[39],d},"ThemedBadge2"));O.__docgenInfo={description:`Themed badge component for status indicators, labels, and informational
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

@public`,methods:[],displayName:"ThemedBadge",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon element to display alongside the badge content"},iconColor:{required:!1,tsType:{name:"string"},description:"Color theme for the icon (uses theme color names)"},size:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xs"'}]},description:"Size variant for the badge",defaultValue:{value:'"md"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "error"
| "info"
| "primary"
| "secondary"
| "success"
| "warning"`,elements:[{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'}]},description:`Visual variant for the badge styling (primary, success, warning, error,
etc.)`,defaultValue:{value:'"primary"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};export{O as T};
