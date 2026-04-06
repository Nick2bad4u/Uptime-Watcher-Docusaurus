import{a as e,n as t}from"./chunk-BneVvdWh.js";import{N as n,P as r,Qt as i}from"./iframe-CAh388JZ.js";import{t as a}from"./jsx-runtime-Bn1Ys6_W.js";import{i as o,r as s}from"./storeErrorHandling-JST2V3PI.js";import{d as c,f as l}from"./monitorUiHelpers-kyaSGluj.js";import{n as u,t as d}from"./ThemedText-CjgKw-SZ.js";import{n as f,t as p}from"./ErrorAlert-DDt2-C4E.js";import{n as m,t as h}from"./ThemedSelect-D5OQyPig.js";import{n as g,t as _}from"./BaseFormField-DDd_XKyV.js";import{n as v,t as y}from"./ThemedInput-DFRDP9kM.js";function b(e){return{...e.error!==void 0&&{error:e.error},...e.helpText!==void 0&&{helpText:e.helpText},id:e.id,label:e.label,required:e.required}}function x(e,t){let{error:n,helpText:r,id:i,label:a,required:o}=e;return(0,T.jsx)(_,{...n!==void 0&&{error:n},...r!==void 0&&{helpText:r},id:i,label:a,required:o,children:t})}function S(e){let t=(0,w.memo)(t=>{let{error:n,helpText:r,id:i,label:a,onChange:o,required:s=!1}=t,c=(0,w.useCallback)(e=>{o(e.target.value)},[o]);return x(b({error:n,helpText:r,id:i,label:a,required:s}),n=>e.renderControl({ariaProps:n,handleChange:c,props:t}))});return t.displayName=e.displayName,t}function C(e){let t=(0,w.memo)(t=>{let{error:n,helpText:r,id:i,label:a,required:o=!1}=t;return x(b({error:n,helpText:r,id:i,label:a,required:o}),n=>e.renderControl({ariaProps:n,props:t}))});return t.displayName=e.displayName,t}var w,T,E=t((()=>{w=e(i()),g(),T=a()})),D,O,k,A=t((()=>{m(),E(),D=a(),O=S({displayName:`SelectField`,renderControl:({ariaProps:e,handleChange:t,props:n})=>{let{disabled:r=!1,id:i,options:a,placeholder:o,required:s=!1,value:c}=n;return(0,D.jsxs)(h,{...e,disabled:r,id:i,onChange:t,required:s,title:e[`aria-label`],value:c,children:[o?(0,D.jsx)(`option`,{value:``,children:o}):null,a.map(e=>(0,D.jsx)(`option`,{value:e.value,children:e.label},e.value))]})}}),k=O})),j,M,N,P=t((()=>{v(),E(),j=a(),M=S({displayName:`TextField`,renderControl:({ariaProps:e,handleChange:t,props:n})=>{let{disabled:r=!1,id:i,max:a,min:o,placeholder:s,required:c=!1,type:l=`text`,value:u}=n;return(0,j.jsx)(y,{...e,disabled:r,id:i,...a!==void 0&&{max:a},...o!==void 0&&{min:o},onChange:t,...s!==void 0&&{placeholder:s},required:c,type:l,value:u})}}),N=M})),F,I,L,R=t((()=>{F=e(i()),n(),u(),A(),P(),I=a(),L=(0,F.memo)(function({disabled:e=!1,field:t,onChange:n,value:i}){let a=(0,F.useCallback)(e=>{n(e)},[n]),o=(0,F.useCallback)(e=>{let t=Number(e);e===``||!Number.isNaN(t)?a(e===``?0:t):r.error(`Invalid numeric input: ${e}`)},[a]),s=(0,F.useCallback)(e=>{a(e)},[a]),c=(0,F.useMemo)(()=>t.options??[],[t.options]);switch(t.type){case`number`:return(0,I.jsx)(N,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,...t.max!==void 0&&{max:t.max},...t.min!==void 0&&{min:t.min},onChange:o,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:`number`,value:String(i)});case`select`:return(0,I.jsx)(k,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:s,options:c,...t.placeholder&&{placeholder:t.placeholder},required:t.required,value:String(i)});case`text`:case`url`:return(0,I.jsx)(N,{disabled:e,...t.helpText&&{helpText:t.helpText},id:t.name,label:t.label,onChange:s,...t.placeholder&&{placeholder:t.placeholder},required:t.required,type:t.type,value:String(i)});default:return(0,I.jsxs)(d,{variant:`error`,children:[`Unsupported field type: `,t.type]})}}),L.__docgenInfo={description:`Renders a single form field based on its definition.

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

@param value - The new value for the field.`},value:{required:!0,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Current value of the field.`}}}})),z,B,V,H,U=t((()=>{n(),z=e(i()),s(),c(),u(),f(),R(),B=a(),V=e=>e.getStoreError(`monitor-types`),H=(0,z.memo)(function({isLoading:e=!1,monitorType:t,onChange:n,values:i}){let a=o(V),s=(0,z.useCallback)(e=>e.isLoaded,[]),c=(0,z.useCallback)(e=>e.loadMonitorTypes,[]),u=(0,z.useCallback)(e=>e.monitorTypes,[]),f=l(s),m=l(c),h=l(u).find(e=>e.type===t);(0,z.useEffect)(function(){!f&&!a&&m()},[f,m,a]);let g=(0,z.useCallback)(e=>()=>{r.warn(`No onChange handler provided for field: ${e}`)},[]);return f?a?(0,B.jsx)(p,{message:`Error loading monitor fields: ${a}`,variant:`error`}):h?(0,B.jsx)(`div`,{className:`flex flex-col gap-2`,children:h.fields.map(a=>{let o=n[a.name];o||r.error(`Missing onChange handler for field: ${a.name}`);let s=i[a.name],c=a.type===`number`?0:``,l=t===`dns`&&a.name===`expectedValue`&&String(i.recordType)===`ANY`;return(0,B.jsx)(L,{disabled:e||l,field:a,onChange:o??g(a.name),value:s??c},a.name)})}):(0,B.jsx)(p,{message:`Unknown monitor type: ${t}`,variant:`error`}):(0,B.jsx)(d,{variant:`secondary`,children:`Loading monitor fields...`})}),H.__docgenInfo={description:`Renders form fields dynamically based on monitor type configuration loaded
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
>`},description:`Change handlers for each field, keyed by field name.`},values:{required:!0,tsType:{name:`Readonly`,elements:[{name:`Record`,elements:[{name:`string`},{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]}],raw:`Record<string, number | string>`}],raw:`Readonly<Record<string, number | string>>`},description:`Current values for each field, keyed by field name.`}}}}));export{k as a,E as c,P as i,U as n,A as o,N as r,C as s,H as t};