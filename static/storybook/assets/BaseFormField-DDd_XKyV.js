import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{r as i,t as a}from"./icons-B14S2C6F.js";import{n as o,t as s}from"./ThemedText-CjgKw-SZ.js";var c,l,u,d=t((()=>{c=` (required)`,l=(e,t)=>`${e}${t?c:``}`,u=(e,t,n)=>{if(t)return`${e}-error`;if(n)return`${e}-help`}})),f,p,m,h,g=t((()=>{f=e(n()),o(),i(),p=r(),m=a.ui.info,h=(0,f.memo)(function({children:e,error:t,helpText:n,id:r,label:i,required:a=!1}){return(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`label`,{className:`mb-1 block`,htmlFor:r,children:(0,p.jsxs)(s,{size:`sm`,variant:`secondary`,weight:`medium`,children:[i,` `,a?`*`:null]})}),e,t?(0,p.jsx)(`div`,{id:`${r}-error`,children:(0,p.jsx)(s,{className:`mt-1`,size:`xs`,variant:`error`,children:t})}):null,n&&!t?(0,p.jsxs)(`div`,{className:`mt-1 flex items-start gap-2`,id:`${r}-help`,children:[(0,p.jsx)(m,{"aria-hidden":`true`,className:`mt-0.5 size-4 shrink-0 opacity-70`}),(0,p.jsx)(s,{className:`leading-snug`,size:`xs`,variant:`tertiary`,children:n})]}):null]})}),h.__docgenInfo={description:`Reusable form field wrapper component with label, error handling, and
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

@public`,methods:[],displayName:`FormField`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`Form input element(s) to wrap`},required:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`FormFieldBaseProperties`]}})),_,v,y,b=t((()=>{_=e(n()),d(),g(),v=r(),y=(0,_.memo)(function({children:e,error:t,helpText:n,id:r,label:i,required:a=!1}){let o=l(i,a),s=u(r,t,n),c={"aria-label":o,...s&&{"aria-describedby":s}};return(0,v.jsx)(h,{...t!==void 0&&{error:t},...n!==void 0&&{helpText:n},id:r,label:i,required:a,children:e(c)})}),y.__docgenInfo={description:`Base form field component with common FormField wrapper and ARIA logic.

@param properties - The component properties

@returns The rendered form field component

@public`,methods:[],displayName:`BaseFormField`,props:{children:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(ariaProps: AriaProperties) => ReactNode`,signature:{arguments:[{type:{name:`AriaProperties`},name:`ariaProps`}],return:{name:`ReactNode`}}},description:`Render function that receives ARIA properties`},required:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`FormFieldBaseProperties`]}}));export{b as n,y as t};