import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{_ as n,k as r,t as i}from"./distribution-ruwBHiZP.js";import{Hn as a,at as o,it as s,ot as c,rt as l}from"./iframe-DgKT2GkH.js";import{t as u}from"./jsx-runtime-DqZldVDK.js";import{i as d,r as f}from"./storeErrorHandling-D4lDGiq1.js";import{c as p,s as m}from"./monitorTypeHelper-5bed3Tgw.js";import{n as h,t as g}from"./ThemedText-B6JdLS_k.js";import{n as _,t as v}from"./ErrorAlert-BMKMYZ0-.js";import{n as ee,t as y}from"./ThemedSelect-CiOYuj9N.js";import{n as b,t as x}from"./BaseFormField-B3d_BeUr.js";import{n as S,t as C}from"./ThemedInput-DpQjumI_.js";function w(e){let t=(0,O.memo)(t=>{let{error:n,helpText:r,id:i,label:a,required:o=!1}=t;return D(E({error:n,helpText:r,id:i,label:a,required:o}),n=>e.renderControl({ariaProps:n,props:t}))});return t.displayName=e.displayName,t}function T(e){let t=(0,O.memo)(t=>{let{error:n,helpText:r,id:i,label:a,onChange:o,required:s=!1}=t,c=(0,O.useCallback)(e=>{o(e.target.value)},[o]);return D(E({error:n,helpText:r,id:i,label:a,required:s}),n=>e.renderControl({ariaProps:n,handleChange:c,props:t}))});return t.displayName=e.displayName,t}function E(e){return{...r(e.error)&&{error:e.error},...r(e.helpText)&&{helpText:e.helpText},id:e.id,label:e.label,required:e.required}}function D(e,t){let{error:n,helpText:i,id:a,label:o,required:s}=e;return(0,k.jsx)(x,{...r(n)&&{error:n},...r(i)&&{helpText:i},id:a,label:o,required:s,children:t})}var O,k,A=e((()=>{O=t(a()),i(),b(),k=u()}));function j(e){let t=new Set,n=[];for(let r of e)t.has(r.value)||(t.add(r.value),n.push(r));return n}var M,N,P,F=e((()=>{ee(),A(),M=u(),N=T({displayName:`SelectField`,renderControl:({ariaProps:e,handleChange:t,props:n})=>{let{disabled:r=!1,id:i,options:a,placeholder:o,required:s=!1,value:c}=n,l=j(a);return(0,M.jsxs)(y,{...e,disabled:r,id:i,onChange:t,required:s,title:e[`aria-label`],value:c,children:[o?(0,M.jsx)(`option`,{value:``,children:o}):null,l.map(e=>(0,M.jsx)(`option`,{value:e.value,children:e.label},e.value))]})}}),P=N})),I,L,R,z=e((()=>{i(),S(),A(),I=u(),L=T({displayName:`TextField`,renderControl:({ariaProps:e,handleChange:t,props:n})=>{let{disabled:i=!1,id:a,max:o,min:s,placeholder:c,required:l=!1,type:u=`text`,value:d}=n;return(0,I.jsx)(C,{...e,disabled:i,id:a,...r(o)&&{max:o},...r(s)&&{min:s},onChange:t,...r(c)&&{placeholder:c},required:l,type:u,value:d})}}),R=L}));function B(e){let t=H(e);if(t.length===0||!/^\d+$/u.test(t))return;let r=Number.parseInt(t,10);return n(r)?r:void 0}function V(e){let t=H(e);if(t.length===0||!W.test(t))return;let n=Number(t);return Number.isFinite(n)?n:void 0}function H(e){return typeof e==`string`?e.trim():``}function U(e){let t=H(e);return t.length>0?t:void 0}var W,G=e((()=>{i(),W=/^[+-]?(?:\d+|\d+\.\d*|\.\d+)$/u})),K,q,J,Y=e((()=>{K=t(a()),i(),o(),h(),F(),z(),G(),q=u(),J=(0,K.memo)(function({disabled:e=!1,field:t,onChange:n,value:i}){let a=(0,K.useCallback)(e=>{n(e)},[n]),o=(0,K.useCallback)(e=>{let n=e.trim();if(n.length===0){a(``);return}let r=V(n);if(r===void 0){c.error(`Invalid numeric input`,{fieldName:t.name,value:e});return}a(r)},[t.name,a]),s=(0,K.useCallback)(e=>{a(e)},[a]),l=(0,K.useMemo)(()=>t.options??[],[t.options]);switch(t.type){case`number`:return(0,q.jsx)(R,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,...r(t.max)&&{max:t.max},...r(t.min)&&{min:t.min},onChange:o,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:`number`,value:String(i)});case`select`:return(0,q.jsx)(P,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:s,options:l,...t.placeholder&&{placeholder:t.placeholder},required:t.required,value:String(i)});case`text`:case`url`:return(0,q.jsx)(R,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:s,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:t.type,value:String(i)});default:return(0,q.jsxs)(g,{variant:`error`,children:[`Unsupported field type: `,t.type]})}}),J.__docgenInfo={description:`Renders a single form field based on its definition.

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

@public`,methods:[],displayName:`DynamicField`,props:{disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the field is disabled.`,defaultValue:{value:`false`,computed:!1}},field:{required:!0,tsType:{name:`MonitorFieldDefinition`},description:`Field definition describing the field's properties.`},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: number | string) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},name:`value`}],return:{name:`void`}}},description:`Change handler for the field value.

@param value - The new value for the field.`},value:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Current value of the field.`}}}})),X,Z,Q,$,te=e((()=>{o(),X=t(a()),f(),m(),h(),s(),_(),Y(),Z=u(),Q=e=>e.getStoreError(`monitor-types`),$=(0,X.memo)(function({isLoading:e=!1,monitorType:t,onChange:n,values:r}){let i=d(Q),a=(0,X.useCallback)(e=>e.isLoaded,[]),o=(0,X.useCallback)(e=>e.loadMonitorTypes,[]),s=(0,X.useCallback)(e=>e.monitorTypes,[]),u=p(a),f=p(o),m=p(s).find(e=>e.type===t);(0,X.useEffect)(function(){!u&&!i&&l(f,{onError:e=>{c.error(`Failed to load monitor types for dynamic fields`,e)}})},[u,f,i]);let h=(0,X.useCallback)(e=>()=>{c.warn(`No onChange handler provided for field: ${e}`)},[]);return u?i?(0,Z.jsx)(v,{message:`Error loading monitor fields: ${i}`,variant:`error`}):m?(0,Z.jsx)(`div`,{className:`flex flex-col gap-2`,children:m.fields.map(i=>{let a=n[i.name];a||c.error(`Missing onChange handler for field: ${i.name}`);let o=r[i.name],s=i.type===`number`?0:``,l=t===`dns`&&i.name===`expectedValue`&&String(r.recordType)===`ANY`;return(0,Z.jsx)(J,{disabled:e||l,field:i,onChange:a??h(i.name),value:o??s},i.name)})}):(0,Z.jsx)(v,{message:`Unknown monitor type: ${t}`,variant:`error`}):(0,Z.jsx)(g,{variant:`secondary`,children:`Loading monitor fields...`})}),$.__docgenInfo={description:`Renders form fields dynamically based on monitor type configuration loaded
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
  message.`,methods:[],displayName:`DynamicMonitorFields`,props:{isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the form is in a loading state.`,defaultValue:{value:`false`,computed:!1}},monitorType:{required:!0,tsType:{name:`string`},description:`The selected monitor type for which to render fields.`},onChange:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Record`,elements:[{name:`string`},{name:`signature`,type:`function`,raw:`(value: number | string) => void`,signature:{arguments:[{type:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},name:`value`}],return:{name:`void`}}}],raw:`Record<string, (value: number | string) => void>`}],raw:`Readonly<
    Record<string, (value: number | string) => void>
>`},description:`Change handlers for each field, keyed by field name.`},values:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]}],raw:`Record<string, number | string>`}],raw:`Readonly<Record<string, number | string>>`},description:`Current values for each field, keyed by field name.`}}}}));export{H as a,z as c,w as d,A as f,B as i,P as l,te as n,U as o,G as r,R as s,$ as t,F as u};