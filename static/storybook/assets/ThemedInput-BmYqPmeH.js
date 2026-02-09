var C=Object.defineProperty;var m=(e,t)=>C(e,"name",{value:t,configurable:!0});import{j as w}from"./jsx-runtime-BHIWlbBZ.js";import{r as o,A}from"./iframe-MD7yCyl4.js";import{u as I,e as E}from"./useTheme-CN3hwuLU.js";import{u as V}from"./useThemedControlStyles-CwFLUvzQ.js";const p=m(({"aria-describedby":e,[A]:t,className:d="",disabled:n=!1,id:a,max:c,min:f,onChange:h,placeholder:y,required:g=!1,step:b,type:v="text",value:r})=>{const{currentTheme:s}=I(),{getBackgroundClass:i,getBorderClass:u,getTextClass:l}=E(),T=r??"",x=o.useMemo(()=>({currentTheme:s,disabled:n,fluid:!0,getBackgroundClass:i,getBorderClass:u,getTextClass:l,tone:"default"}),[s,n,i,u,l]),q=V(x);return w.jsx("input",{"aria-describedby":e,"aria-label":t,className:`themed-input ${d}`,"data-testid":a?`input-${a}`:void 0,disabled:n,id:a,max:c,min:f,onChange:h,placeholder:y,required:g,step:b,style:q,type:v,...r===void 0?{}:{value:T}})},"ThemedInputComponent"),B=o.memo(p);p.__docgenInfo={description:`Themed input component with consistent styling and accessibility support.

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

@public`,methods:[],displayName:"ThemedInputComponent",props:{id:{required:!1,tsType:{name:"string"},description:"Unique identifier for the input element"},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum value (for number inputs) or maximum length (for text inputs)"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Minimum value (for number inputs) or minimum length (for text inputs)"},onChange:{required:!1,tsType:{name:"EventHandlers.ChangeWithEvent"},description:"Change handler for input value updates"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text displayed when input is empty"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the input is required for form validation",defaultValue:{value:"false",computed:!1}},step:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Step value for number inputs (incremental value)"},type:{required:!1,tsType:{name:"union",raw:'"email" | "number" | "password" | "text" | "url"',elements:[{name:"literal",value:'"email"'},{name:"literal",value:'"number"'},{name:"literal",value:'"password"'},{name:"literal",value:'"text"'},{name:"literal",value:'"url"'}]},description:"HTML input type attribute",defaultValue:{value:'"text"',computed:!1}},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Current value of the input"},className:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["AccessibilityProperties","CoreComponentProperties"]};export{B as T};
