var q=Object.defineProperty;var B=(r,e)=>q(r,"name",{value:e,configurable:!0});import{j as I}from"./jsx-runtime-BHIWlbBZ.js";import{c as C}from"./iframe-DyvIPkVZ.js";import{T as D}from"./ThemedButton-DbGfPeS5.js";import{g as m,A as T}from"./icons-DV64AXrl.js";import"./preload-helper-Cc2_yIPf.js";import"./types-B6zT3oaC.js";const N=B(r=>{const e=C.c(24);let s,t,l,n,i,c,d;e[0]!==r?({"aria-label":l,className:n,disabled:i,isLoading:c,onClick:s,size:d,...t}=r,e[0]=r,e[1]=s,e[2]=t,e[3]=l,e[4]=n,e[5]=i,e[6]=c,e[7]=d):(s=e[1],t=e[2],l=e[3],n=e[4],i=e[5],c=e[6],d=e[7]);const _=l===void 0?"Save changes":l,h=n===void 0?"":n,k=i===void 0?!1:i,O=c===void 0?!1:c,u=d===void 0?"sm":d,V=T.actions.save;let o;e:switch(u){case"lg":{let a;e[8]===Symbol.for("react.memo_cache_sentinel")?(a=m("lg"),e[8]=a):a=e[8],o=a;break e}case"md":{let a;e[9]===Symbol.for("react.memo_cache_sentinel")?(a=m("md"),e[9]=a):a=e[9],o=a;break e}case"sm":{let a;e[10]===Symbol.for("react.memo_cache_sentinel")?(a=m("sm"),e[10]=a):a=e[10],o=a;break e}case"xs":{let a;e[11]===Symbol.for("react.memo_cache_sentinel")?(a=m("xs"),e[11]=a):a=e[11],o=a;break e}default:{let a;e[12]===Symbol.for("react.memo_cache_sentinel")?(a=m("sm"),e[12]=a):a=e[12],o=a}}const L=o;let p;e[13]!==L?(p=I.jsx(V,{"aria-hidden":!0,size:L}),e[13]=L,e[14]=p):p=e[14];const x=p,z=k?"secondary":"primary",y=k||O;let f;return e[15]!==_||e[16]!==z||e[17]!==h||e[18]!==s||e[19]!==t||e[20]!==x||e[21]!==u||e[22]!==y?(f=I.jsx(D,{...t,"aria-label":_,className:h,disabled:y,icon:x,onClick:s,size:u,variant:z,children:"Save"}),e[15]=_,e[16]=z,e[17]=h,e[18]=s,e[19]=t,e[20]=x,e[21]=u,e[22]=y,e[23]=f):f=e[23],f},"SaveButton");N.__docgenInfo={description:`Standardized save button with consistent styling and behavior

@example

\`\`\`tsx
<SaveButton disabled={!hasChanges} onClick={handleSave} size="sm" />;
\`\`\`

@param props - SaveButton props

@returns Themed save button component`,methods:[],displayName:"SaveButton",props:{"aria-label":{defaultValue:{value:'"Save changes"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"sm"',computed:!1},required:!1}}};const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Y={args:{"aria-label":"Save changes",className:"",disabled:!1,isLoading:!1,onClick:j("save-clicked"),size:"sm"},component:N,parameters:{layout:"centered"},tags:["autodocs"]},g={},b={args:{size:"lg"}},v={args:{disabled:!0}},S={args:{isLoading:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:"{}",...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true
  }
}`,...S.parameters?.docs?.source}}};const $=["Default","Large","Disabled","Loading"];export{g as Default,v as Disabled,b as Large,S as Loading,$ as __namedExportsOrder,Y as default};
