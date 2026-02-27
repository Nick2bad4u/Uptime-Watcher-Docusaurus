var D=Object.defineProperty;var u=(o,e)=>D(o,"name",{value:e,configurable:!0});import{j as l}from"./jsx-runtime-BHIWlbBZ.js";import{c as y,r as j}from"./iframe-DyvIPkVZ.js";import{T as S}from"./ThemedBox-BKQMevqh.js";import{T as C}from"./ThemedButton-DbGfPeS5.js";import{T as N}from"./ThemedText-DrvOTmqm.js";import{A as I}from"./icons-DV64AXrl.js";import"./preload-helper-Cc2_yIPf.js";import"./types-B6zT3oaC.js";const T=u(o=>{const e=y.c(14),{className:i,error:r,isDark:n,onClearError:c}=o,g=i===void 0?"":i,m=n===void 0?!1:n;if(!r)return null;const f=I.ui.close,t=`error-alert ${m?"dark":""} ${g}`;let s;e[0]!==t?(s=t.trim(),e[0]=t,e[1]=s):s=e[1];let a;e[2]!==r?(a=l.jsx(N,{size:"sm",variant:"error",children:r}),e[2]=r,e[3]=a):a=e[3];const _=`error-alert__close ${m?"dark":""}`;let h;e[4]===Symbol.for("react.memo_cache_sentinel")?(h=l.jsx(f,{size:14}),e[4]=h):h=e[4];let d;e[5]!==c||e[6]!==_?(d=l.jsx(C,{className:_,onClick:c,size:"xs",variant:"secondary",children:h}),e[5]=c,e[6]=_,e[7]=d):d=e[7];let p;e[8]!==a||e[9]!==d?(p=l.jsxs("div",{className:"error-alert__content",children:[a,d]}),e[8]=a,e[9]=d,e[10]=p):p=e[10];let x;return e[11]!==s||e[12]!==p?(x=l.jsx(S,{className:s,variant:"secondary",children:p}),e[11]=s,e[12]=p,e[13]=x):x=e[13],x},"FormErrorAlert");T.__docgenInfo={description:`Standardized error alert component with dismiss functionality

@example

\`\`\`tsx
<FormErrorAlert
    error={lastError}
    onClearError={clearError}
    isDark={isDarkTheme}
/>;
\`\`\`

@param props - FormErrorAlert props

@returns Themed error alert component`,methods:[],displayName:"FormErrorAlert",props:{error:{required:!0,tsType:{name:"union",raw:"null | string",elements:[{name:"null"},{name:"string"}]},description:"Error message to display"},isDark:{required:!1,tsType:{name:"boolean"},description:"Whether dark theme is active",defaultValue:{value:"false",computed:!1}},onClearError:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Handler to clear the error"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};const{action:q}=__STORYBOOK_MODULE_ACTIONS__,w={args:{error:"Failed to save changes. Please try again.",isDark:!1,onClearError:q("clear-error")},component:T,parameters:{layout:"centered"},tags:["autodocs"]},A=u(o=>{const e=y.c(13);let i,r,n;e[0]!==o?({error:i,onClearError:r,...n}=o,e[0]=o,e[1]=i,e[2]=r,e[3]=n):(i=e[1],r=e[2],n=e[3]);const[c,g]=j.useState(i??null);let m;e[4]!==r?(m=u(()=>{g(null),r?.()},"t0"),e[4]=r,e[5]=m):m=e[5];const f=m;let t;e[6]!==f||e[7]!==c||e[8]!==n?(t=l.jsx(T,{...n,error:c,onClearError:f}),e[6]=f,e[7]=c,e[8]=n,e[9]=t):t=e[9];let s;e[10]===Symbol.for("react.memo_cache_sentinel")?(s=l.jsx(C,{onClick:u(()=>g("Validation failed: URL is required."),"onClick"),size:"sm",variant:"secondary",children:"Trigger Error"}),e[10]=s):s=e[10];let a;return e[11]!==t?(a=l.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t,s]}),e[11]=t,e[12]=a):a=e[12],a},"InteractiveStory"),k={},E={args:{isDark:!0},parameters:{backgrounds:{default:"dark"}}},v={args:{error:"Validation failed: URL is required."},render:u(o=>l.jsx(A,{...o}),"render")};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:"{}",...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isDark: true
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...E.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    error: "Validation failed: URL is required."
  },
  render: args => <InteractiveStory {...args} />
}`,...v.parameters?.docs?.source}}};const B=["Default","DarkTheme","Interactive"];export{E as DarkTheme,k as Default,v as Interactive,B as __namedExportsOrder,w as default};
