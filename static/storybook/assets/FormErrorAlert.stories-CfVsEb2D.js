import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./ThemedButton-D1o_Roas.js";import{r as o,t as s}from"./icons-B14S2C6F.js";import{n as c,t as l}from"./ThemedText-CjgKw-SZ.js";import{n as u,t as d}from"./ThemedBox-o-s003xY.js";var f,p,m=t((()=>{u(),i(),c(),o(),f=r(),p=({className:e=``,error:t,isDark:n=!1,onClearError:r})=>{if(!t)return null;let i=s.ui.close;return(0,f.jsx)(d,{className:`error-alert ${n?`dark`:``} ${e}`.trim(),variant:`secondary`,children:(0,f.jsxs)(`div`,{className:`error-alert__content`,children:[(0,f.jsx)(l,{size:`sm`,variant:`error`,children:t}),(0,f.jsx)(a,{className:`error-alert__close ${n?`dark`:``}`,onClick:r,size:`xs`,variant:`secondary`,children:(0,f.jsx)(i,{size:14})})]})})},p.__docgenInfo={description:`Standardized error alert component with dismiss functionality

@example

\`\`\`tsx
<FormErrorAlert
    error={lastError}
    onClearError={clearError}
    isDark={isDarkTheme}
/>;
\`\`\`

@param props - FormErrorAlert props

@returns Themed error alert component`,methods:[],displayName:`FormErrorAlert`,props:{error:{required:!0,tsType:{name:`union`,raw:`null | string`,elements:[{name:`null`},{name:`string`}]},description:`Error message to display`},isDark:{required:!1,tsType:{name:`boolean`},description:`Whether dark theme is active`,defaultValue:{value:`false`,computed:!1}},onClearError:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Handler to clear the error`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}})),h,g,_,v,y,b,x,S,C;t((()=>{m(),i(),h=e(n()),g=r(),{action:_}=__STORYBOOK_MODULE_ACTIONS__,v={args:{error:`Failed to save changes. Please try again.`,isDark:!1,onClearError:_(`clear-error`)},component:p,parameters:{layout:`centered`},tags:[`autodocs`]},y=e=>{let{error:t,onClearError:n,...r}=e,[i,o]=(0,h.useState)(t??null),s=()=>{o(null),n?.()};return(0,g.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,g.jsx)(p,{...r,error:i,onClearError:s}),(0,g.jsx)(a,{onClick:()=>o(`Validation failed: URL is required.`),size:`sm`,variant:`secondary`,children:`Trigger Error`})]})},b={},x={args:{isDark:!0},parameters:{backgrounds:{default:`dark`}}},S={args:{error:`Validation failed: URL is required.`},render:e=>(0,g.jsx)(y,{...e})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isDark: true
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Validation failed: URL is required."
  },
  render: args => <InteractiveStory {...args} />
}`,...S.parameters?.docs?.source}}},C=[`Default`,`DarkTheme`,`Interactive`]}))();export{x as DarkTheme,b as Default,S as Interactive,C as __namedExportsOrder,v as default};