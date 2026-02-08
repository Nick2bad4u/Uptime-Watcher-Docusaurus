var _=Object.defineProperty;var z=(j,t)=>_(j,"name",{value:t,configurable:!0});import{j as $}from"./jsx-runtime-BHIWlbBZ.js";import{r as B,c as P}from"./iframe-CreBuNPk.js";const D={},F=B.memo(z(function(t){const e=P.c(27);let d,a,l,n,i,r,s,m,o;e[0]!==t?({align:l,as:n,children:a,className:i,size:r,style:s,variant:m,weight:o,...d}=t,e[0]=t,e[1]=d,e[2]=a,e[3]=l,e[4]=n,e[5]=i,e[6]=r,e[7]=s,e[8]=m,e[9]=o):(d=e[1],a=e[2],l=e[3],n=e[4],i=e[5],r=e[6],s=e[7],m=e[8],o=e[9]);const L=l===void 0?"left":l,N=n===void 0?"span":n,p=i===void 0?"":i,C=r===void 0?"base":r,v=s===void 0?D:s,I=m===void 0?"primary":m,O=o===void 0?"normal":o,f=`themed-text--${I}`,h=`themed-text--size-${C}`,x=`themed-text--weight-${O}`,y=`themed-text--align-${L}`;let u;e[10]!==p||e[11]!==x||e[12]!==y||e[13]!==f||e[14]!==h?(u=["themed-text",f,h,x,y,p].filter(Boolean),e[10]=p,e[11]=x,e[12]=y,e[13]=f,e[14]=h,e[15]=u):u=e[15];const b=u.join(" "),{"aria-describedby":g,"aria-label":T,"aria-labelledby":w,"aria-level":E,role:S,tabIndex:q}=d,V=N;let c;return e[16]!==V||e[17]!==g||e[18]!==T||e[19]!==w||e[20]!==E||e[21]!==a||e[22]!==b||e[23]!==S||e[24]!==v||e[25]!==q?(c=$.jsx(V,{"aria-describedby":g,"aria-label":T,"aria-labelledby":w,"aria-level":E,className:b,role:S,style:v,tabIndex:q,children:a}),e[16]=V,e[17]=g,e[18]=T,e[19]=w,e[20]=E,e[21]=a,e[22]=b,e[23]=S,e[24]=v,e[25]=q,e[26]=c):c=e[26],c},"ThemedText2"));F.__docgenInfo={description:`Themed text component with comprehensive typography styling options.

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

@public`,methods:[],displayName:"ThemedText",props:{align:{required:!1,tsType:{name:"union",raw:'"center" | "justify" | "left" | "right"',elements:[{name:"literal",value:'"center"'},{name:"literal",value:'"justify"'},{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"Text alignment within the container",defaultValue:{value:'"left"',computed:!1}},as:{required:!1,tsType:{name:"JSX.IntrinsicElements"},description:"Semantic HTML element to render (defaults to `<span>`).",defaultValue:{value:'"span"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:`| "2xl"
| "3xl"
| "4xl"
| "base"
| "lg"
| "md"
| "sm"
| "xl"
| "xs"`,elements:[{name:"literal",value:'"2xl"'},{name:"literal",value:'"3xl"'},{name:"literal",value:'"4xl"'},{name:"literal",value:'"base"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},description:"Font size variant for the text",defaultValue:{value:'"base"',computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles to apply to the text element",defaultValue:{value:"{}",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "danger"
| "error"
| "info"
| "inverse"
| "primary"
| "secondary"
| "success"
| "tertiary"
| "warning"`,elements:[{name:"literal",value:'"danger"'},{name:"literal",value:'"error"'},{name:"literal",value:'"info"'},{name:"literal",value:'"inverse"'},{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"warning"'}]},description:"Color and semantic variant for the text",defaultValue:{value:'"primary"',computed:!1}},weight:{required:!1,tsType:{name:"union",raw:'"bold" | "medium" | "normal" | "semibold"',elements:[{name:"literal",value:'"bold"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"normal"'},{name:"literal",value:'"semibold"'}]},description:"Font weight for the text",defaultValue:{value:'"normal"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["AccessibilityProperties","CoreComponentProperties"]};export{F as T};
