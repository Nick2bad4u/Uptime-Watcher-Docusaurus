import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n,Y as r,q as i}from"./iframe-DlbQ3f5p.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{i as o,r as s}from"./ThemedButton-CBFGIMeV.js";import{n as c,t as l}from"./ThemedText-BxRSVxuS.js";import{n as u,t as d}from"./ThemedBox-BN58XVWd.js";import{r as f,t as p}from"./useTheme-8nibNScb.js";function m({headerStyle:e,icon:t,iconColor:n,iconStyle:r,subtitle:i,title:a,titleContainerStyle:s}){return!a&&!i&&!t?null:(0,g.jsxs)(`div`,{className:`themed-card__header`,style:e,children:[t?(0,g.jsx)(`span`,{style:r,children:o(t,n??`primary`)}):null,(0,g.jsxs)(`div`,{style:s,children:[a?(0,g.jsx)(l,{size:`lg`,variant:`primary`,weight:`semibold`,children:a}):null,i?(0,g.jsx)(l,{size:`sm`,variant:`secondary`,children:i}):null]})]})}var h,g,_,v,y=e((()=>{h=t(n()),r(),p(),s(),u(),c(),g=a(),_=({children:e,className:t=``,clickable:n=!1,hoverable:r=!1,icon:a,iconColor:o,onClick:s,onMouseEnter:c,onMouseLeave:l,padding:u=`lg`,rounded:p=`lg`,shadow:_=`md`,subtitle:v,title:y,variant:b=`primary`})=>{let{currentTheme:x}=f(),S=(0,h.useMemo)(()=>({cursor:n?`pointer`:`default`,overflow:`hidden`,position:`relative`,transition:i}),[n]),C=(0,h.useCallback)(()=>{s&&s()},[s]),w=(0,h.useMemo)(()=>({alignItems:`center`,display:`flex`,gap:x.spacing.md,marginBottom:x.spacing.md}),[x.spacing.md]),T=(0,h.useMemo)(()=>({alignItems:`center`,display:`flex`,fontSize:`1.5em`,lineHeight:`1`}),[]),E=(0,h.useMemo)(()=>({flex:1}),[]);return(0,g.jsxs)(d,{className:`themed-card ${r?`themed-card--hoverable`:``} ${n?`themed-card--clickable`:``} ${t}`,padding:u,rounded:p,shadow:_,style:S,surface:`elevated`,variant:b,...n&&s&&{onClick:C},...c&&{onMouseEnter:c},...l&&{onMouseLeave:l},children:[m({headerStyle:w,icon:a,iconColor:o,iconStyle:T,subtitle:v,title:y,titleContainerStyle:E}),(0,g.jsx)(`div`,{className:`themed-card__content`,children:e})]})},v=(0,h.memo)(_),_.__docgenInfo={description:`Themed card component for content containers with optional headers, icons,
and interactive features.

@remarks
This component provides a styled container with configurable theming,
optional header section, and interactive features. The card integrates with
the theme system for consistent styling. When title or subtitle is provided,
renders a header section with optional icon.

@example Status card with interactive features:

\`\`\`tsx
<ThemedCard
    title="Monitor Status"
    icon={<StatusIcon />}
    clickable
    onClick={viewDetails}
>
    <StatusContent />
</ThemedCard>;
\`\`\`

@param props - The component properties

@returns The themed card JSX element

@public`,methods:[],displayName:`ThemedCardComponent`,props:{clickable:{required:!1,tsType:{name:`boolean`},description:`Whether the card should have clickable styling and cursor pointer`,defaultValue:{value:`false`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:`Whether the card should have hover effects`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`Icon element to display in the card header`},iconColor:{required:!1,tsType:{name:`string`},description:`Color theme for the icon (uses theme color names)`},onClick:{required:!1,tsType:{name:`ClickHandler`},description:`Click handler for the card`},onMouseEnter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Mouse enter handler for hover effects`},onMouseLeave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Mouse leave handler for hover effects`},padding:{required:!1,tsType:{name:`union`,raw:`| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Padding size for the card content`,defaultValue:{value:`"lg"`,computed:!1}},rounded:{required:!1,tsType:{name:`union`,raw:`| "full"
| "lg"
| "md"
| "none"
| "sm"
| "xl"`,elements:[{name:`literal`,value:`"full"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`}]},description:`Border radius size for the card`,defaultValue:{value:`"lg"`,computed:!1}},shadow:{required:!1,tsType:{name:`union`,raw:`| "inner"
| "lg"
| "md"
| "sm"
| "xl"`,elements:[{name:`literal`,value:`"inner"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`}]},description:`Shadow size for the card`,defaultValue:{value:`"md"`,computed:!1}},subtitle:{required:!1,tsType:{name:`string`},description:`Subtitle text displayed in the card header`},title:{required:!1,tsType:{name:`string`},description:`Title text displayed in the card header`},variant:{required:!1,tsType:{name:`union`,raw:`| "primary"
| "secondary"
| "tertiary"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"tertiary"`}]},description:`Visual variant for the card styling`,defaultValue:{value:`"primary"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{y as n,v as t};