var z=Object.defineProperty;var j=(g,e)=>z(g,"name",{value:e,configurable:!0});import{j as t}from"./jsx-runtime-BHIWlbBZ.js";import{c as k}from"./iframe-DyvIPkVZ.js";import{T as I}from"./ThemedText-DrvOTmqm.js";const R=j(g=>{const e=k.c(27),{className:C,control:c,description:d,disabled:b,icon:x,iconClassName:N,iconComponent:p,iconSize:y,title:T}=g,q=C===void 0?"":C,w=b===void 0?!1:b;let m;e[0]!==c?(m=typeof c=="function"?c():c,e[0]=c,e[1]=m):m=e[1];const v=m;let u;e[2]!==p||e[3]!==x||e[4]!==N||e[5]!==y?(u=p?t.jsx(p,{"aria-hidden":!0,className:N,size:y??16}):x,e[2]=p,e[3]=x,e[4]=N,e[5]=y,e[6]=u):u=e[6];const f=u,S=`setting-item ${w?"disabled":""} ${q}`;let n;e[7]!==S?(n=S.trim(),e[7]=S,e[8]=n):n=e[8];let s;e[9]!==f?(s=f?t.jsx("span",{"aria-hidden":!0,className:"setting-item__icon",children:f}):null,e[9]=f,e[10]=s):s=e[10];let i;e[11]!==T?(i=t.jsx(I,{className:"setting-title",size:"sm",weight:"medium",children:T}),e[11]=T,e[12]=i):i=e[12];let o;e[13]!==s||e[14]!==i?(o=t.jsxs("div",{className:"setting-title-row",children:[s,i]}),e[13]=s,e[14]=i,e[15]=o):o=e[15];let a;e[16]!==d?(a=d?t.jsx(I,{className:"setting-description",size:"xs",variant:"tertiary",children:d}):null,e[16]=d,e[17]=a):a=e[17];let r;e[18]!==a||e[19]!==o?(r=t.jsxs("div",{className:"setting-info",children:[o,a]}),e[18]=a,e[19]=o,e[20]=r):r=e[20];let l;e[21]!==v?(l=t.jsx("div",{className:"setting-control",children:v}),e[21]=v,e[22]=l):l=e[22];let h;return e[23]!==r||e[24]!==l||e[25]!==n?(h=t.jsxs("div",{className:n,children:[r,l]}),e[23]=r,e[24]=l,e[25]=n,e[26]=h):h=e[26],h},"SettingItem");R.__docgenInfo={description:`Standardized setting item layout with title, description, and control

@example

\`\`\`tsx
<SettingItem
    title="Auto Start"
    description="Launch the application on system startup"
    control={
        <ThemedCheckbox
            checked={settings.autoStart}
            onChange={handleChange}
        />
    }
/>;
\`\`\`

@param props - SettingItem props

@returns Setting item component with consistent layout`,methods:[],displayName:"SettingItem",props:{control:{required:!0,tsType:{name:"union",raw:"(() => ReactNode) | ReactNode",elements:[{name:"unknown"},{name:"ReactNode"}]},description:`Control component (input, select, checkbox, etc.).

@remarks
A render callback is supported to avoid passing JSX as a prop in places
where strict performance lint rules are enabled.`},description:{required:!1,tsType:{name:"string"},description:"Description of the setting"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the setting is disabled",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional leading icon for the setting title"},iconClassName:{required:!1,tsType:{name:"string"},description:`Optional className forwarded to the icon element (e.g., settings accent
colors).`},iconComponent:{required:!1,tsType:{name:"IconType"},description:`Preferred icon API: pass an IconType instead of JSX to avoid jsx-as-prop
perf lint issues.`},iconSize:{required:!1,tsType:{name:"number"},description:"Optional icon size (px). Defaults to 16."},title:{required:!0,tsType:{name:"string"},description:"Title of the setting"},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["CoreComponentProperties"]};export{R as S};
