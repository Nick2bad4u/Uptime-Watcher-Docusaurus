import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedButton-D1o_Roas.js";import{n as o,r as s,t as c}from"./icons-B14S2C6F.js";var l,u,d,f=t((()=>{l=e(n()),i(),s(),u=r(),d=({"aria-label":e=`Save changes`,className:t=``,disabled:n=!1,isLoading:r=!1,onClick:i,size:s=`sm`,...d})=>{let f=c.actions.save,p=(0,l.useMemo)(()=>{switch(s){case`lg`:return o(`lg`);case`md`:return o(`md`);case`sm`:return o(`sm`);case`xs`:return o(`xs`);default:return o(`sm`)}},[s]),m=(0,l.useMemo)(()=>(0,u.jsx)(f,{"aria-hidden":!0,size:p}),[p,f]),h=(0,l.useMemo)(()=>n?`secondary`:`primary`,[n]);return(0,u.jsx)(a,{...d,"aria-label":e,className:t,disabled:n||r,icon:m,onClick:i,size:s,variant:h,children:`Save`})},d.__docgenInfo={description:`Standardized save button with consistent styling and behavior

@example

\`\`\`tsx
<SaveButton disabled={!hasChanges} onClick={handleSave} size="sm" />;
\`\`\`

@param props - SaveButton props

@returns Themed save button component`,methods:[],displayName:`SaveButton`,props:{"aria-label":{defaultValue:{value:`"Save changes"`,computed:!1},required:!1},className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},isLoading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`"sm"`,computed:!1},required:!1}}}})),p,m,h,g,_,v,y;t((()=>{f(),{action:p}=__STORYBOOK_MODULE_ACTIONS__,m={args:{"aria-label":`Save changes`,className:``,disabled:!1,isLoading:!1,onClick:p(`save-clicked`),size:`sm`},component:d,parameters:{layout:`centered`},tags:[`autodocs`]},h={},g={args:{size:`lg`}},_={args:{disabled:!0}},v={args:{isLoading:!0}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Large`,`Disabled`,`Loading`]}))();export{h as Default,_ as Disabled,g as Large,v as Loading,y as __namedExportsOrder,m as default};