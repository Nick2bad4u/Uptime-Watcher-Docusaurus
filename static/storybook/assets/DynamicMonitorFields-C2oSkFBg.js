import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{k as n,t as r,z as i}from"./distribution-BhVWToMA.js";import{nt as a,rt as o,yn as s}from"./iframe-CpaI1qLl.js";import{t as c}from"./jsx-runtime-CaZkqeYb.js";import{i as l,r as u}from"./storeErrorHandling-DAeooiTY.js";import{d,f}from"./monitorUiHelpers-CHakuzHz.js";import{n as p,t as m}from"./ThemedText-C4sXAWMu.js";import{n as h,t as g}from"./ErrorAlert-Cqjtt_Bh.js";import{n as _,t as v}from"./ThemedSelect-B1V6XCZN.js";import{n as y,t as b}from"./BaseFormField-CUsuf27I.js";import{n as x,t as S}from"./ThemedInput-DXN80XEz.js";function C(e){let t=(0,D.memo)(t=>{let{error:n,helpText:r,id:i,label:a,required:o=!1}=t;return E(T({error:n,helpText:r,id:i,label:a,required:o}),n=>e.renderControl({ariaProps:n,props:t}))});return t.displayName=e.displayName,t}function w(e){let t=(0,D.memo)(t=>{let{error:n,helpText:r,id:i,label:a,onChange:o,required:s=!1}=t,c=(0,D.useCallback)(e=>{o(e.target.value)},[o]);return E(T({error:n,helpText:r,id:i,label:a,required:s}),n=>e.renderControl({ariaProps:n,handleChange:c,props:t}))});return t.displayName=e.displayName,t}function T(e){return{...n(e.error)&&{error:e.error},...n(e.helpText)&&{helpText:e.helpText},id:e.id,label:e.label,required:e.required}}function E(e,t){let{error:r,helpText:i,id:a,label:o,required:s}=e;return(0,O.jsx)(b,{...n(r)&&{error:r},...n(i)&&{helpText:i},id:a,label:o,required:s,children:t})}var D,O,k=e((()=>{D=t(s()),r(),y(),O=c()})),A,j,M,N=e((()=>{_(),k(),A=c(),j=w({displayName:`SelectField`,renderControl:({ariaProps:e,handleChange:t,props:n})=>{let{disabled:r=!1,id:i,options:a,placeholder:o,required:s=!1,value:c}=n;return(0,A.jsxs)(v,{...e,disabled:r,id:i,onChange:t,required:s,title:e[`aria-label`],value:c,children:[o?(0,A.jsx)(`option`,{value:``,children:o}):null,a.map(e=>(0,A.jsx)(`option`,{value:e.value,children:e.label},e.value))]})}}),M=j})),P,F,I,L=e((()=>{r(),x(),k(),P=c(),F=w({displayName:`TextField`,renderControl:({ariaProps:e,handleChange:t,props:r})=>{let{disabled:i=!1,id:a,max:o,min:s,placeholder:c,required:l=!1,type:u=`text`,value:d}=r;return(0,P.jsx)(S,{...e,disabled:i,id:a,...n(o)&&{max:o},...n(s)&&{min:s},onChange:t,...n(c)&&{placeholder:c},required:l,type:u,value:d})}}),I=F})),R,z,B,V=e((()=>{R=t(s()),r(),a(),p(),N(),L(),z=c(),B=(0,R.memo)(function({disabled:e=!1,field:t,onChange:r,value:a}){let s=(0,R.useCallback)(e=>{r(e)},[r]),c=(0,R.useCallback)(e=>{let t=Number(e);e===``||!Number.isNaN(t)?s(e===``?0:t):o.error(`Invalid numeric input: ${e}`)},[s]),l=(0,R.useCallback)(e=>{s(e)},[s]),u=(0,R.useMemo)(()=>i(t.options??[]),[t.options]);switch(t.type){case`number`:return(0,z.jsx)(I,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,...n(t.max)&&{max:t.max},...n(t.min)&&{min:t.min},onChange:c,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:`number`,value:String(a)});case`select`:return(0,z.jsx)(M,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:l,options:u,...t.placeholder&&{placeholder:t.placeholder},required:t.required,value:String(a)});case`text`:case`url`:return(0,z.jsx)(I,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:l,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:t.type,value:String(a)});default:return(0,z.jsxs)(m,{variant:`error`,children:[`Unsupported field type: `,t.type]})}}),B.__docgenInfo={description:`Renders a single form field based on its definition.

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

@param value - The new value for the field.`},value:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Current value of the field.`}}}})),H,U,W,G,K=e((()=>{a(),H=t(s()),u(),d(),p(),h(),V(),U=c(),W=e=>e.getStoreError(`monitor-types`),G=(0,H.memo)(function({isLoading:e=!1,monitorType:t,onChange:n,values:r}){let i=l(W),a=(0,H.useCallback)(e=>e.isLoaded,[]),s=(0,H.useCallback)(e=>e.loadMonitorTypes,[]),c=(0,H.useCallback)(e=>e.monitorTypes,[]),u=f(a),d=f(s),p=f(c).find(e=>e.type===t);(0,H.useEffect)(function(){!u&&!i&&d()},[u,d,i]);let h=(0,H.useCallback)(e=>()=>{o.warn(`No onChange handler provided for field: ${e}`)},[]);return u?i?(0,U.jsx)(g,{message:`Error loading monitor fields: ${i}`,variant:`error`}):p?(0,U.jsx)(`div`,{className:`flex flex-col gap-2`,children:p.fields.map(i=>{let a=n[i.name];a||o.error(`Missing onChange handler for field: ${i.name}`);let s=r[i.name],c=i.type===`number`?0:``,l=t===`dns`&&i.name===`expectedValue`&&String(r.recordType)===`ANY`;return(0,U.jsx)(B,{disabled:e||l,field:i,onChange:a??h(i.name),value:s??c},i.name)})}):(0,U.jsx)(g,{message:`Unknown monitor type: ${t}`,variant:`error`}):(0,U.jsx)(m,{variant:`secondary`,children:`Loading monitor fields...`})}),G.__docgenInfo={description:`Renders form fields dynamically based on monitor type configuration loaded
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
>`},description:`Change handlers for each field, keyed by field name.`},values:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]}],raw:`Record<string, number | string>`}],raw:`Readonly<Record<string, number | string>>`},description:`Current values for each field, keyed by field name.`}}}}));export{M as a,k as c,L as i,K as n,N as o,I as r,C as s,G as t};