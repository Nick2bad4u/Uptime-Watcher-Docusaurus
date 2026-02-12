var U=Object.defineProperty;var d=(i,u)=>U(i,"name",{value:u,configurable:!0});import{j as b}from"./jsx-runtime-BHIWlbBZ.js";import{r as M,c as S,l as D}from"./iframe-BJrhacjf.js";import{u as W}from"./storeErrorHandling-BKgO_9cm.js";import{u as R}from"./monitorUiHelpers-BlwVa7S5.js";import{T as L}from"./ThemedText-RH-jlxwJ.js";import{E}from"./ErrorAlert-DAnVUMpH.js";import{T as A}from"./ThemedSelect-CvBWTT7P.js";import{B as H}from"./BaseFormField-ynkCV_Lp.js";import{T as Y}from"./ThemedInput-L6RAWQQK.js";function k(i){return{...i.error!==void 0&&{error:i.error},...i.helpText!==void 0&&{helpText:i.helpText},id:i.id,label:i.label,required:i.required}}d(k,"buildBaseFormFieldProps");function $(i,u){const{error:e,helpText:t,id:n,label:c,required:a}=i;return b.jsx(H,{...e!==void 0&&{error:e},...t!==void 0&&{helpText:t},id:n,label:c,required:a,children:u})}d($,"renderBaseFormField");function I(i){const u=M.memo(e=>{const t=S.c(13),{error:n,helpText:c,id:a,label:l,onChange:m,required:p}=e,C=p===void 0?!1:p;let w;t[0]!==m?(w=d(x=>{m(x.target.value)},"t1"),t[0]=m,t[1]=w):w=t[1];const h=w;let y;if(t[2]!==n||t[3]!==h||t[4]!==c||t[5]!==a||t[6]!==l||t[7]!==e||t[8]!==C){let x;t[10]!==h||t[11]!==e?(x=d(N=>i.renderControl({ariaProps:N,handleChange:h,props:e}),"t3"),t[10]=h,t[11]=e,t[12]=x):x=t[12],y=$(k({error:n,helpText:c,id:a,label:l,required:C}),x),t[2]=n,t[3]=h,t[4]=c,t[5]=a,t[6]=l,t[7]=e,t[8]=C,t[9]=y}else y=t[9];return y});return u.displayName=i.displayName,u}d(I,"createStringField");function ue(i){const u=M.memo(e=>{const{error:t,helpText:n,id:c,label:a,required:l=!1}=e;return $(k({error:t,helpText:n,id:c,label:a,required:l}),m=>i.renderControl({ariaProps:m,props:e}))});return u.displayName=i.displayName,u}d(ue,"createFieldWrapper");const z=I({displayName:"SelectField",renderControl:d(({ariaProps:i,handleChange:u,props:e})=>{const{disabled:t=!1,id:n,options:c,placeholder:a,required:l=!1,value:m}=e;return b.jsxs(A,{...i,disabled:t,id:n,onChange:u,required:l,title:i["aria-label"],value:m,children:[a?b.jsx("option",{value:"",children:a}):null,c.map(p=>b.jsx("option",{value:p.value,children:p.label},p.value))]})},"renderControl")}),G=z,J=I({displayName:"TextField",renderControl:d(({ariaProps:i,handleChange:u,props:e})=>{const{disabled:t=!1,id:n,max:c,min:a,placeholder:l,required:m=!1,type:p="text",value:C}=e;return b.jsx(Y,{...i,disabled:t,id:n,...c!==void 0&&{max:c},...a!==void 0&&{min:a},onChange:u,...l!==void 0&&{placeholder:l},required:m,type:p,value:C})},"renderControl")}),_=J,V=M.memo(d(function(u){const e=S.c(57),{disabled:t,field:n,onChange:c,value:a}=u,l=t===void 0?!1:t;let m;e[0]!==c?(m=d(r=>{c(r)},"t2"),e[0]=c,e[1]=m):m=e[1];const p=m;let C;e[2]!==p?(C=d(r=>{const T=Number(r);r===""||!Number.isNaN(T)?p(r===""?0:T):D.error(`Invalid numeric input: ${r}`)},"t3"),e[2]=p,e[3]=C):C=e[3];const w=C;let h;e[4]!==p?(h=d(r=>{p(r)},"t4"),e[4]=p,e[5]=h):h=e[5];const y=h;let x;e[6]!==n.options?(x=n.options??[],e[6]=n.options,e[7]=x):x=e[7];const N=x;switch(n.type){case"number":{let r;e[8]!==n.helpText?(r=n.helpText&&{helpText:n.helpText},e[8]=n.helpText,e[9]=r):r=e[9];const T=n.name,j=n.label;let s;e[10]!==n.max?(s=n.max!==void 0&&{max:n.max},e[10]=n.max,e[11]=s):s=e[11];let F;e[12]!==n.min?(F=n.min!==void 0&&{min:n.min},e[12]=n.min,e[13]=F):F=e[13];let f;e[14]!==n.placeholder?(f=n.placeholder&&{placeholder:n.placeholder},e[14]=n.placeholder,e[15]=f):f=e[15];const g=n.required,v=String(a);let o;return e[16]!==l||e[17]!==n.label||e[18]!==n.name||e[19]!==n.required||e[20]!==w||e[21]!==F||e[22]!==f||e[23]!==v||e[24]!==r||e[25]!==s?(o=b.jsx(_,{disabled:l,...r,id:T,label:j,...s,...F,onChange:w,...f,required:g,type:"number",value:v}),e[16]=l,e[17]=n.label,e[18]=n.name,e[19]=n.required,e[20]=w,e[21]=F,e[22]=f,e[23]=v,e[24]=r,e[25]=s,e[26]=o):o=e[26],o}case"select":{let r;e[27]!==n.helpText?(r=n.helpText&&{helpText:n.helpText},e[27]=n.helpText,e[28]=r):r=e[28];const T=n.name,j=n.label;let s;e[29]!==n.placeholder?(s=n.placeholder&&{placeholder:n.placeholder},e[29]=n.placeholder,e[30]=s):s=e[30];const F=n.required,f=String(a);let g;return e[31]!==l||e[32]!==n.label||e[33]!==n.name||e[34]!==n.required||e[35]!==y||e[36]!==N||e[37]!==f||e[38]!==r||e[39]!==s?(g=b.jsx(G,{disabled:l,...r,id:T,label:j,onChange:y,options:N,...s,required:F,value:f}),e[31]=l,e[32]=n.label,e[33]=n.name,e[34]=n.required,e[35]=y,e[36]=N,e[37]=f,e[38]=r,e[39]=s,e[40]=g):g=e[40],g}case"text":case"url":{let r;e[41]!==n.helpText?(r=n.helpText&&{helpText:n.helpText},e[41]=n.helpText,e[42]=r):r=e[42];const T=n.name,j=n.label;let s;e[43]!==n.placeholder?(s=n.placeholder&&{placeholder:n.placeholder},e[43]=n.placeholder,e[44]=s):s=e[44];const F=n.required,f=n.type,g=String(a);let v;return e[45]!==l||e[46]!==n.label||e[47]!==n.name||e[48]!==n.required||e[49]!==n.type||e[50]!==y||e[51]!==g||e[52]!==r||e[53]!==s?(v=b.jsx(_,{disabled:l,...r,id:T,label:j,onChange:y,...s,required:F,type:f,value:g}),e[45]=l,e[46]=n.label,e[47]=n.name,e[48]=n.required,e[49]=n.type,e[50]=y,e[51]=g,e[52]=r,e[53]=s,e[54]=v):v=e[54],v}default:{let r;return e[55]!==n.type?(r=b.jsxs(L,{variant:"error",children:["Unsupported field type: ",n.type]}),e[55]=n.type,e[56]=r):r=e[56],r}}},"DynamicField2"));V.__docgenInfo={description:`Renders a single form field based on its definition.

@remarks
This component renders appropriate form fields based on the field type
definition. Supports "number", "text", and "url" field types with proper
validation. For unsupported field types, displays an error message. Numeric
fields handle automatic conversion and validation of input values.

@example Number field with validation:

\`\`\`tsx
<DynamicField
    disabled={false}
    field={{
        name: "port",
        label: "Port",
        type: "number",
        required: true,
        min: 1,
        max: 65535,
    }}
    onChange={setPort}
    value={8080}
/>;
\`\`\`

@param props - The component properties

@returns The rendered field as a React element

@public`,methods:[],displayName:"DynamicField",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field is disabled.",defaultValue:{value:"false",computed:!1}},field:{required:!0,tsType:{name:"MonitorFieldDefinition"},description:"Field definition describing the field's properties."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number | string) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}},description:`Change handler for the field value.

@param value - The new value for the field.`},value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Current value of the field."}}};const K=d(i=>i.getStoreError("monitor-types"),"selectMonitorTypesError"),Q=M.memo(d(function(u){const e=S.c(19),{isLoading:t,monitorType:n,onChange:c,values:a}=u,l=t===void 0?!1:t,m=W(K),p=X,C=Z,w=ee,h=R(p),y=R(C),x=R(w);let N;e[0]!==n?(N=d(o=>o.type===n,"t2"),e[0]=n,e[1]=N):N=e[1];const r=x.find(N);let T,j;e[2]!==h||e[3]!==y||e[4]!==m?(T=d(function(){!h&&!m&&y()},"loadMonitorTypesOnMount"),j=[h,y,m],e[2]=h,e[3]=y,e[4]=m,e[5]=T,e[6]=j):(T=e[5],j=e[6]),M.useEffect(T,j);const s=ne;if(!h){let o;return e[7]===Symbol.for("react.memo_cache_sentinel")?(o=b.jsx(L,{variant:"secondary",children:"Loading monitor fields..."}),e[7]=o):o=e[7],o}if(m){const o=`Error loading monitor fields: ${m}`;let q;return e[8]!==o?(q=b.jsx(E,{message:o,variant:"error"}),e[8]=o,e[9]=q):q=e[9],q}if(!r){const o=`Unknown monitor type: ${n}`;let q;return e[10]!==o?(q=b.jsx(E,{message:o,variant:"error"}),e[10]=o,e[11]=q):q=e[11],q}const F="flex flex-col gap-2";let f;e[12]!==l||e[13]!==n||e[14]!==c||e[15]!==a?(f=d(o=>{const q=c[o.name];q||D.error(`Missing onChange handler for field: ${o.name}`);const B=a[o.name],O=o.type==="number"?0:"",P=n==="dns"&&o.name==="expectedValue"&&String(a.recordType)==="ANY";return b.jsx(V,{disabled:l||P,field:o,onChange:q??s(o.name),value:B??O},o.name)},"t6"),e[12]=l,e[13]=n,e[14]=c,e[15]=a,e[16]=f):f=e[16];const g=r.fields.map(f);let v;return e[17]!==g?(v=b.jsx("div",{className:F,children:g}),e[17]=g,e[18]=v):v=e[18],v},"DynamicMonitorFields2"));Q.__docgenInfo={description:`Renders form fields dynamically based on monitor type configuration loaded
from backend.

@remarks
-

Fetches monitor type configuration using \`getMonitorTypeConfig\` from
\`monitorTypeHelper\`.

- Displays loading and error states as appropriate.
- For each field in the configuration, renders a {@link DynamicField}.
- If a field's onChange handler is missing, logs an error.

@example

\`\`\`tsx
<DynamicMonitorFields
    isLoading={false}
    monitorType="http"
    onChange={{ url: setUrl }}
    values={{ url: "https://example.com" }}
/>;
\`\`\`

@param props - {@link DynamicMonitorFieldsProperties}

@returns The rendered dynamic monitor fields as a React element.

@throws If monitor type configuration fails to load, displays an error
  message.`,methods:[],displayName:"DynamicMonitorFields",props:{isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the form is in a loading state.",defaultValue:{value:"false",computed:!1}},monitorType:{required:!0,tsType:{name:"string"},description:"The selected monitor type for which to render fields."},onChange:{required:!0,tsType:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"signature",type:"function",raw:"(value: number | string) => void",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"void"}}}],raw:"Record<string, (value: number | string) => void>"}],raw:`Readonly<
    Record<string, (value: number | string) => void>
>`},description:"Change handlers for each field, keyed by field name."},values:{required:!0,tsType:{name:"Readonly",elements:[{name:"Record",elements:[{name:"string"},{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]}],raw:"Record<string, number | string>"}],raw:"Readonly<Record<string, number | string>>"},description:"Current values for each field, keyed by field name."}}};function X(i){return i.isLoaded}d(X,"_temp");function Z(i){return i.loadMonitorTypes}d(Z,"_temp2");function ee(i){return i.monitorTypes}d(ee,"_temp3");function ne(i){return()=>{D.warn(`No onChange handler provided for field: ${i}`)}}d(ne,"_temp4");export{Q as D,G as S,_ as T,ue as c};
