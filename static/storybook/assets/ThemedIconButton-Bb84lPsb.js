import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{xn as n}from"./iframe-cfEUpOl1.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedButton-C9f4fAO2.js";var o,s,c,l,u=e((()=>{o=t(n()),i(),s=r(),c=({className:e=``,disabled:t=!1,icon:n,iconColor:r,loading:i=!1,onClick:c,size:l=`md`,tooltip:u,variant:d=`ghost`,...f})=>{let p=(()=>{switch(l){case`lg`:return`48px`;case`md`:return`40px`;case`sm`:return`32px`;case`xl`:return`56px`;case`xs`:return`24px`;default:return`40px`}})(),m=(0,o.useMemo)(()=>({height:p,minWidth:`unset`,padding:`0`,width:p}),[p]);return(0,s.jsx)(a,{className:`themed-icon-button ${e}`,disabled:t,loading:i,size:l,variant:d,...c&&{onClick:c},icon:n,...r&&{iconColor:r},style:m,...u&&{title:u},...f})},l=(0,o.memo)(c),c.__docgenInfo={description:`A themed icon button component optimized for displaying only icons

@param props - The icon button properties

@returns The themed icon button JSX element

@public`,methods:[],displayName:`ThemedIconButtonComponent`,props:{icon:{required:!0,tsType:{name:`ReactNode`},description:`Icon element to display in the button`},iconColor:{required:!1,tsType:{name:`string`},description:`Custom color for the icon`},loading:{required:!1,tsType:{name:`boolean`},description:`Whether the button is in a loading state`,defaultValue:{value:`false`,computed:!1}},onClick:{required:!1,tsType:{name:`ClickHandler`},description:`Callback fired when button is clicked`},size:{required:!1,tsType:{name:`union`,raw:`"lg" | "md" | "sm" | "xl" | "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Size variant for the button`,defaultValue:{value:`"md"`,computed:!1}},tooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display on hover`},variant:{required:!1,tsType:{name:`union`,raw:`| "error"
| "ghost"
| "outline"
| "primary"
| "secondary"
| "success"
| "tertiary"
| "warning"`,elements:[{name:`literal`,value:`"error"`},{name:`literal`,value:`"ghost"`},{name:`literal`,value:`"outline"`},{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"success"`},{name:`literal`,value:`"tertiary"`},{name:`literal`,value:`"warning"`}]},description:`Visual variant for the button`,defaultValue:{value:`"ghost"`,computed:!1}},className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{u as n,l as t};