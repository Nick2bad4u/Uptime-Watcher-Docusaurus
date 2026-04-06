import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n,T as r,p as i}from"./iframe-CAh388JZ.js";import{t as a}from"./jsx-runtime-Bn1Ys6_W.js";import{i as o,r as s,t as c}from"./useTheme-CnVQVT2j.js";import{n as l,t as u}from"./useThemedControlStyles-BVvrI0kn.js";var d,f,p,m,h=t((()=>{d=e(n()),r(),c(),u(),f=a(),p=({"aria-describedby":e,[i]:t,className:n=``,disabled:r=!1,id:a,max:c,min:u,onChange:p,placeholder:m,required:h=!1,step:g,type:_=`text`,value:v})=>{let{currentTheme:y}=s(),{getBackgroundClass:b,getBorderClass:x,getTextClass:S}=o(),C=v??``,w=l((0,d.useMemo)(()=>({currentTheme:y,disabled:r,fluid:!0,getBackgroundClass:b,getBorderClass:x,getTextClass:S,tone:`default`}),[y,r,b,x,S]));return(0,f.jsx)(`input`,{"aria-describedby":e,"aria-label":t,className:`themed-input ${n}`,"data-testid":a?`input-${a}`:void 0,disabled:r,id:a,max:c,min:u,onChange:p,placeholder:m,required:h,step:g,style:w,type:_,...v===void 0?{}:{value:C}})},m=(0,d.memo)(p),p.__docgenInfo={description:`Themed input component with consistent styling and accessibility support.

@remarks
This component provides a styled input field with automatic theme
integration, focus states, and accessibility features. The input supports
various types and automatically applies appropriate styling based on the
current theme and state.

@example URL input with validation:

\`\`\`tsx
<ThemedInput
    type="url"
    placeholder="https://example.com"
    value={websiteUrl}
    onChange={handleUrlChange}
    required
/>;
\`\`\`

@param props - The component properties

@returns The themed input JSX element

@public`,methods:[],displayName:`ThemedInputComponent`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier for the input element`},max:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum value (for number inputs) or maximum length (for text inputs)`},min:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Minimum value (for number inputs) or minimum length (for text inputs)`},onChange:{required:!1,tsType:{name:`EventHandlers.ChangeWithEvent`},description:`Change handler for input value updates`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text displayed when input is empty`},required:{required:!1,tsType:{name:`boolean`},description:`Whether the input is required for form validation`,defaultValue:{value:`false`,computed:!1}},step:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Step value for number inputs (incremental value)`},type:{required:!1,tsType:{name:`union`,raw:`"email" | "number" | "password" | "text" | "url"`,elements:[{name:`literal`,value:`"email"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"text"`},{name:`literal`,value:`"url"`}]},description:`HTML input type attribute`,defaultValue:{value:`"text"`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Current value of the input`},className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`AccessibilityProperties`,`CoreComponentProperties`]}}));export{h as n,m as t};