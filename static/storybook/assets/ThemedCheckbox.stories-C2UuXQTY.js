var y=Object.defineProperty;var o=(r,e)=>y(r,"name",{value:e,configurable:!0});import{j as a}from"./jsx-runtime-BHIWlbBZ.js";import{c as T,r as j}from"./iframe-BJrhacjf.js";import{T as u}from"./ThemedCheckbox-Dcr6tGvs.js";import{T as g}from"./ThemedText-RH-jlxwJ.js";import"./preload-helper-Cc2_yIPf.js";const v={component:u,args:{checked:!1,"aria-label":"Enable alerts"},argTypes:{onChange:{action:"change"}},parameters:{layout:"centered"},tags:["autodocs"]},C=o(r=>{const e=T.c(14);let s,t,l;e[0]!==r?({checked:l,onChange:s,...t}=r,e[0]=r,e[1]=s,e[2]=t,e[3]=l):(s=e[1],t=e[2],l=e[3]);const f=l===void 0?!1:l,[x,k]=j.useState(f);let i;e[4]===Symbol.for("react.memo_cache_sentinel")?(i={display:"flex",alignItems:"center",gap:"0.5rem"},e[4]=i):i=e[4];let c;e[5]!==s?(c=o(b=>{k(b.currentTarget.checked),s?.(b)},"t2"),e[5]=s,e[6]=c):c=e[6];let n;e[7]!==x||e[8]!==t||e[9]!==c?(n=a.jsx(u,{...t,checked:x,onChange:c}),e[7]=x,e[8]=t,e[9]=c,e[10]=n):n=e[10];let d;e[11]===Symbol.for("react.memo_cache_sentinel")?(d=a.jsx(g,{children:"Enable downtime alerts"}),e[11]=d):d=e[11];let m;return e[12]!==n?(m=a.jsxs("label",{style:i,children:[n,d]}),e[12]=n,e[13]=m):m=e[13],m},"CheckboxWithState"),p={render:o(r=>a.jsx(C,{...r}),"render")},h={args:{checked:!0,disabled:!0,"aria-label":"Subscription locked"},render:o(r=>a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[a.jsx(u,{...r}),a.jsx(g,{variant:"secondary",children:"Requires Pro plan"})]}),"render")};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <CheckboxWithState {...args} />
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    "aria-label": "Subscription locked"
  },
  render: args => <label style={{
    display: "flex",
    alignItems: "center",
    gap: "0.5rem"
  }}>
            <ThemedCheckbox {...args} />
            <ThemedText variant="secondary">Requires Pro plan</ThemedText>
        </label>
}`,...h.parameters?.docs?.source}}};const B=["Basic","Disabled"];export{p as Basic,h as Disabled,B as __namedExportsOrder,v as default};
