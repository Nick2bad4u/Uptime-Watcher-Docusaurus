import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n,t as r}from"./distribution-ruwBHiZP.js";import{Rn as i}from"./iframe-EIlRbGuq.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{r as o,t as s}from"./icons-BThRD7n3.js";import{n as c,t as l}from"./ThemedText-kzC1PB_s.js";var u,d,f,p=e((()=>{u=` (required)`,d=(e,t)=>`${e}${t?u:``}`,f=(e,t,n)=>{if(t)return`${e}-error`;if(n)return`${e}-help`}})),m,h,g,_,v=e((()=>{m=t(i()),c(),o(),h=a(),g=s.ui.info,_=(0,m.memo)(function({children:e,error:t,helpText:n,id:r,label:i,required:a=!1}){return(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`label`,{className:`mb-1 block`,htmlFor:r,children:(0,h.jsxs)(l,{size:`sm`,variant:`secondary`,weight:`medium`,children:[i,` `,a?`*`:null]})}),e,t?(0,h.jsx)(`div`,{id:`${r}-error`,children:(0,h.jsx)(l,{className:`mt-1`,size:`xs`,variant:`error`,children:t})}):null,n&&!t?(0,h.jsxs)(`div`,{className:`mt-1 flex items-start gap-2`,id:`${r}-help`,children:[(0,h.jsx)(g,{"aria-hidden":`true`,className:`mt-0.5 size-4 shrink-0 opacity-70`}),(0,h.jsx)(l,{className:`leading-snug`,size:`xs`,variant:`tertiary`,children:n})]}):null]})}),_.__docgenInfo={description:`Reusable form field wrapper component with label, error handling, and
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

@public`,methods:[],displayName:`FormField`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Form input element(s) to wrap`},required:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`FormFieldBaseProperties`]}})),y,b,x,S=e((()=>{y=t(i()),r(),p(),v(),b=a(),x=(0,y.memo)(function({children:e,error:t,helpText:r,id:i,label:a,required:o=!1}){let s=d(a,o),c=f(i,t,r),l={"aria-label":s,...c&&{"aria-describedby":c}};return(0,b.jsx)(_,{...n(t)&&{error:t},...n(r)&&{helpText:r},id:i,label:a,required:o,children:e(l)})}),x.__docgenInfo={description:`Base form field component with common FormField wrapper and ARIA logic.

@param properties - The component properties

@returns The rendered form field component

@public`,methods:[],displayName:`BaseFormField`,props:{children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(ariaProps: AriaProperties) => ReactNode`,signature:{arguments:[{type:{name:`AriaProperties`},name:`ariaProps`}],return:{name:`ReactNode`}}},description:`Render function that receives ARIA properties`},required:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`FormFieldBaseProperties`]}}));export{S as n,x as t};