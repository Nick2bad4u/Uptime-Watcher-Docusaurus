import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{k as n,t as r}from"./distribution-ruwBHiZP.js";import{L as i,Rn as a,Y as o}from"./iframe-Be0Mue0n.js";import{t as s}from"./jsx-runtime-DqZldVDK.js";import{i as c,r as l,t as u}from"./useTheme-BYXC3ohr.js";import{n as d,t as f}from"./useThemedControlStyles-CqzOHz0E.js";var p,m,h,g,_=e((()=>{p=t(a()),r(),o(),u(),f(),m=s(),h=({"aria-describedby":e,[i]:t,className:r=``,disabled:a=!1,id:o,max:s,min:u,onChange:f,placeholder:h,required:g=!1,step:_,type:v=`text`,value:y})=>{let{currentTheme:b}=l(),{getBackgroundClass:x,getBorderClass:S,getTextClass:C}=c(),w=y??``,T=d((0,p.useMemo)(()=>({currentTheme:b,disabled:a,fluid:!0,getBackgroundClass:x,getBorderClass:S,getTextClass:C,tone:`default`}),[b,a,x,S,C]));return(0,m.jsx)(`input`,{"aria-describedby":e,"aria-label":t,className:`themed-input ${r}`,"data-testid":o?`input-${o}`:void 0,disabled:a,id:o,max:s,min:u,onChange:f,placeholder:h,required:g,step:_,style:T,type:v,...n(y)?{value:w}:{}})},g=(0,p.memo)(h),h.__docgenInfo={description:`Themed input component with consistent styling and accessibility support.

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

@public`,methods:[],displayName:`ThemedInputComponent`,props:{id:{required:!1,tsType:{name:`string`},description:`Unique identifier for the input element`},max:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum value (for number inputs) or maximum length (for text inputs)`},min:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Minimum value (for number inputs) or minimum length (for text inputs)`},onChange:{required:!1,tsType:{name:`EventHandlers.ChangeWithEvent`},description:`Change handler for input value updates`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text displayed when input is empty`},required:{required:!1,tsType:{name:`boolean`},description:`Whether the input is required for form validation`,defaultValue:{value:`false`,computed:!1}},step:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Step value for number inputs (incremental value)`},type:{required:!1,tsType:{name:`union`,raw:`| "email"
| "number"
| "password"
| "text"
| "url"`,elements:[{name:`literal`,value:`"email"`},{name:`literal`,value:`"number"`},{name:`literal`,value:`"password"`},{name:`literal`,value:`"text"`},{name:`literal`,value:`"url"`}]},description:`HTML input type attribute`,defaultValue:{value:`"text"`,computed:!1}},value:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Current value of the input`},className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`AccessibilityProperties`,`CoreComponentProperties`]}}));export{_ as n,g as t};