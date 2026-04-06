import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";var i,a,o,s,c=t((()=>{i=e(n()),a=r(),o={},s=(0,i.memo)(function({align:e=`left`,as:t=`span`,children:n,className:r=``,size:i=`base`,style:s=o,variant:c=`primary`,weight:l=`normal`,...u}){let d=[`themed-text`,`themed-text--${c}`,`themed-text--size-${i}`,`themed-text--weight-${l}`,`themed-text--align-${e}`,r].filter(Boolean).join(` `),{"aria-describedby":f,"aria-label":p,"aria-labelledby":m,"aria-level":h,role:g,tabIndex:_}=u;return(0,a.jsx)(t,{"aria-describedby":f,"aria-label":p,"aria-labelledby":m,"aria-level":h,className:d,role:g,style:s,tabIndex:_,children:n})}),s.__docgenInfo={description:`Themed text component with comprehensive typography styling options.

@remarks
This component provides a flexible text element with CSS class-based styling
that integrates with the theme system. It automatically generates appropriate
class names based on the provided variant, size, weight, and alignment
options.

@example Status text with dynamic variant:

\`\`\`tsx
<ThemedText variant={isOnline ? "success" : "error"} weight="medium">
    {isOnline ? "Online" : "Offline"}
</ThemedText>;
\`\`\`

@param props - The component properties

@returns The themed text JSX element

@public`,methods:[],displayName:`ThemedText`,props:{align:{required:!1,tsType:{name:`union`,raw:`"center" | "justify" | "left" | "right"`,elements:[{name:`literal`,value:`"center"`},{name:`literal`,value:`"justify"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:`Text alignment within the container`,defaultValue:{value:`"left"`,computed:!1}},as:{required:!1,tsType:{name:`JSX.IntrinsicElements`},description:"Semantic HTML element to render (defaults to `<span>`).",defaultValue:{value:`"span"`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`| "2xl"
| "3xl"
| "4xl"
| "base"
| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"base"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Font size variant for the text`,defaultValue:{value:`"base"`,computed:!1}},style:{required:!1,tsType:{name:`CSSProperties`},description:`Inline styles to apply to the text element`,defaultValue:{value:`{}`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`| "danger"
| "error"
| "info"
| "inverse"
| "primary"
| "secondary"
| "success"
| "tertiary"
| "warning"`,elements:[{name:`literal`,value:`"danger"`},{name:`literal`,value:`"error"`},{name:`literal`,value:`"info"`},{name:`literal`,value:`"inverse"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"tertiary"`},{name:`literal`,value:`"warning"`}]},description:`Color and semantic variant for the text`,defaultValue:{value:`"primary"`,computed:!1}},weight:{required:!1,tsType:{name:`union`,raw:`"bold" | "medium" | "normal" | "semibold"`,elements:[{name:`literal`,value:`"bold"`},{name:`literal`,value:`"medium"`},{name:`literal`,value:`"normal"`},{name:`literal`,value:`"semibold"`}]},description:`Font weight for the text`,defaultValue:{value:`"normal"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`AccessibilityProperties`,`CoreComponentProperties`]}}));export{c as n,s as t};