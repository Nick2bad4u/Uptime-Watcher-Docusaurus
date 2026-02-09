var j=Object.defineProperty;var x=(m,c)=>j(m,"name",{value:c,configurable:!0});import{j as p}from"./jsx-runtime-BHIWlbBZ.js";import{r as g,c as w}from"./iframe-MD7yCyl4.js";import{T as v}from"./ThemedText-CsWFmcMv.js";import{A as I}from"./icons-DJj_SB9p.js";const N=" (required)",B=x((m,c)=>`${m}${c?N:""}`,"createAriaLabel"),P=x((m,c,e)=>{if(c)return`${m}-error`;if(e)return`${m}-help`},"getAriaDescribedBy"),$=I.ui.info,T=g.memo(x(function(c){const e=w.c(18),{children:f,error:r,helpText:a,id:s,label:u,required:F}=c,d=(F===void 0?!1:F)?"*":null;let i;e[0]!==u||e[1]!==d?(i=p.jsxs(v,{size:"sm",variant:"secondary",weight:"medium",children:[u," ",d]}),e[0]=u,e[1]=d,e[2]=i):i=e[2];let t;e[3]!==s||e[4]!==i?(t=p.jsx("label",{className:"mb-1 block",htmlFor:s,children:i}),e[3]=s,e[4]=i,e[5]=t):t=e[5];let n;e[6]!==r||e[7]!==s?(n=r?p.jsx("div",{id:`${s}-error`,children:p.jsx(v,{className:"mt-1",size:"xs",variant:"error",children:r})}):null,e[6]=r,e[7]=s,e[8]=n):n=e[8];let o;e[9]!==r||e[10]!==a||e[11]!==s?(o=a&&!r?p.jsxs("div",{className:"mt-1 flex items-start gap-2",id:`${s}-help`,children:[p.jsx($,{"aria-hidden":"true",className:"mt-0.5 size-4 shrink-0 opacity-70"}),p.jsx(v,{className:"leading-snug",size:"xs",variant:"tertiary",children:a})]}):null,e[9]=r,e[10]=a,e[11]=s,e[12]=o):o=e[12];let l;return e[13]!==f||e[14]!==t||e[15]!==n||e[16]!==o?(l=p.jsxs("div",{children:[t,f,n,o]}),e[13]=f,e[14]=t,e[15]=n,e[16]=o,e[17]=l):l=e[17],l},"FormField2"));T.__docgenInfo={description:`Reusable form field wrapper component with label, error handling, and
accessibility features.

@remarks
This component provides consistent styling and accessibility for all form
fields. It displays a label with optional required indicator, error/help
text, and wraps the input element. The component uses proper ARIA attributes
for accessibility and is memoized for performance.

@example

\`\`\`tsx
<FormField
    id="password"
    label="Password"
    required={true}
    error={validationError}
>
    <input type="password" id="password" />
</FormField>;
\`\`\`

@param props - The component properties

@returns JSX element containing labeled form field with error/help text

@public`,methods:[],displayName:"FormField",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Form input element(s) to wrap"},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["FormFieldBaseProperties"]};const E=g.memo(x(function(c){const e=w.c(25),{children:f,error:r,helpText:a,id:s,label:u,required:F}=c,b=F===void 0?!1:F;let d,i,t,n,o,l,h;if(e[0]!==f||e[1]!==r||e[2]!==a||e[3]!==s||e[4]!==u||e[5]!==b){const A=B(u,b),q=P(s,r,a),R={"aria-label":A,...q&&{"aria-describedby":q}};d=T,e[13]!==r?(i=r!==void 0&&{error:r},e[13]=r,e[14]=i):i=e[14],e[15]!==a?(t=a!==void 0&&{helpText:a},e[15]=a,e[16]=t):t=e[16],n=s,o=u,l=b,h=f(R),e[0]=f,e[1]=r,e[2]=a,e[3]=s,e[4]=u,e[5]=b,e[6]=d,e[7]=i,e[8]=t,e[9]=n,e[10]=o,e[11]=l,e[12]=h}else d=e[6],i=e[7],t=e[8],n=e[9],o=e[10],l=e[11],h=e[12];let y;return e[17]!==d||e[18]!==i||e[19]!==t||e[20]!==n||e[21]!==o||e[22]!==l||e[23]!==h?(y=p.jsx(d,{...i,...t,id:n,label:o,required:l,children:h}),e[17]=d,e[18]=i,e[19]=t,e[20]=n,e[21]=o,e[22]=l,e[23]=h,e[24]=y):y=e[24],y},"BaseFormField2"));E.__docgenInfo={description:`Base form field component with common FormField wrapper and ARIA logic.

@param properties - The component properties

@returns The rendered form field component

@public`,methods:[],displayName:"BaseFormField",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:"(ariaProps: AriaProperties) => ReactNode",signature:{arguments:[{type:{name:"AriaProperties"},name:"ariaProps"}],return:{name:"ReactNode"}}},description:"Render function that receives ARIA properties"},required:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["FormFieldBaseProperties"]};export{E as B};
