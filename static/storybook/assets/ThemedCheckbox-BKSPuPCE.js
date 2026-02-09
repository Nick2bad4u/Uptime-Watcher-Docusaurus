var i=Object.defineProperty;var s=(o,e)=>i(o,"name",{value:e,configurable:!0});import{j as l}from"./jsx-runtime-BHIWlbBZ.js";import{r as p,A as d}from"./iframe-DuEuG6JD.js";const a=s(({[d]:o,checked:e,className:t="",disabled:r=!1,onChange:c,required:n=!1})=>l.jsx("input",{type:"checkbox",...e===void 0?{}:{checked:e},"aria-label":o,className:`themed-checkbox ${t}`,disabled:r,onChange:c,required:n}),"ThemedCheckboxComponent"),f=p.memo(a);a.__docgenInfo={description:`A themed checkbox input component

@param props - The checkbox properties

@returns The themed checkbox JSX element

@public`,methods:[],displayName:"ThemedCheckboxComponent",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked"},onChange:{required:!1,tsType:{name:"EventHandlers.ChangeWithEvent"},description:"Callback fired when checkbox state changes"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is required for form submission",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["AccessibilityProperties","CoreComponentProperties"]};export{f as T};
