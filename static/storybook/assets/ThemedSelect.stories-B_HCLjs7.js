import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n}from"./iframe-CfLRHmV-.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-CQlCNAUr.js";import{n as o,t as s}from"./ThemedSelect-CRmmecOs.js";var c,l,u,d,f,p,m;e((()=>{o(),i(),c=t(n()),l=r(),u={args:{"aria-label":`Select monitor type`},argTypes:{onChange:{action:`change`}},component:s,parameters:{layout:`padded`},tags:[`autodocs`]},d=e=>{let{id:t=`monitor-type`,key:n,onChange:r,value:i=`http`,...o}=e,[u,d]=(0,c.useState)(i);return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:`260px`},children:[(0,l.jsx)(`label`,{htmlFor:t,children:(0,l.jsx)(a,{variant:`secondary`,children:`Monitor type`})}),(0,l.jsxs)(s,{...o,id:t,onChange:e=>{d(e.currentTarget.value),r?.(e)},value:u,children:[(0,l.jsx)(`option`,{value:`http`,children:`HTTP`}),(0,l.jsx)(`option`,{value:`ping`,children:`Ping`}),(0,l.jsx)(`option`,{value:`tcp`,children:`TCP Port`}),(0,l.jsx)(`option`,{value:`dns`,children:`DNS`})]})]})},f={render:e=>{let{key:t,...n}=e;return(0,l.jsx)(d,{...n})}},p={args:{"aria-label":`Environment`,disabled:!0},render:e=>{let{key:t,...n}=e;return(0,l.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.5rem`,width:`260px`},children:[(0,l.jsx)(`label`,{htmlFor:`disabled-select`,children:(0,l.jsx)(a,{variant:`secondary`,children:`Environment`})}),(0,l.jsxs)(s,{...n,disabled:!0,id:`disabled-select`,value:`production`,children:[(0,l.jsx)(`option`,{value:`development`,children:`Development`}),(0,l.jsx)(`option`,{value:`staging`,children:`Staging`}),(0,l.jsx)(`option`,{value:`production`,children:`Production`})]})]})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      key: ignoredKey,
      ...safeArgs
    } = args as StoryArgsWithKey<ThemedSelectProps>;
    void ignoredKey;
    return <MonitorTypeSelectStory {...safeArgs} />;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Environment",
    disabled: true
  },
  render: args => {
    const {
      key: ignoredKey,
      ...safeArgs
    } = args as StoryArgsWithKey<ThemedSelectProps>;
    void ignoredKey;
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      width: "260px"
    }}>
                <label htmlFor="disabled-select">
                    <ThemedText variant="secondary">Environment</ThemedText>
                </label>
                <ThemedSelect {...safeArgs} disabled id="disabled-select" value="production">
                    <option value="development">Development</option>
                    <option value="staging">Staging</option>
                    <option value="production">Production</option>
                </ThemedSelect>
            </div>;
  }
}`,...p.parameters?.docs?.source}}},m=[`MonitorTypes`,`Disabled`]}))();export{p as Disabled,f as MonitorTypes,m as __namedExportsOrder,u as default};