import{i as e}from"./preload-helper-CT_b8DTk.js";import{t,z as n}from"./distribution-BzBsdpyi.js";import{t as r}from"./jsx-runtime-DqZldVDK.js";import{n as i,t as a}from"./ThemedText-B9mi3w1x.js";var o,s,c=e((()=>{t(),i(),o=r(),s=({className:e=``,control:t,description:r,disabled:i=!1,icon:s,iconClassName:c,iconComponent:l,iconSize:u,title:d})=>{let f=typeof t==`function`?n(t)():t,p=l?(0,o.jsx)(l,{"aria-hidden":!0,className:c,size:u??16}):s;return(0,o.jsxs)(`div`,{className:`setting-item ${i?`disabled`:``} ${e}`.trim(),children:[(0,o.jsxs)(`div`,{className:`setting-info`,children:[(0,o.jsxs)(`div`,{className:`setting-title-row`,children:[p?(0,o.jsx)(`span`,{"aria-hidden":!0,className:`setting-item__icon`,children:p}):null,(0,o.jsx)(a,{className:`setting-title`,size:`sm`,weight:`medium`,children:d})]}),r?(0,o.jsx)(a,{className:`setting-description`,size:`xs`,variant:`tertiary`,children:r}):null]}),(0,o.jsx)(`div`,{className:`setting-control`,children:f})]})},s.__docgenInfo={description:`Standardized setting item layout with title, description, and control

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

@returns Setting item component with consistent layout`,methods:[],displayName:`SettingItem`,props:{control:{required:!0,tsType:{name:`union`,raw:`(() => ReactNode) | ReactNode`,elements:[{name:`unknown`},{name:`ReactNode`}]},description:`Control component (input, select, checkbox, etc.).

@remarks
A render callback is supported to avoid passing JSX as a prop in places
where strict performance lint rules are enabled.`},description:{required:!1,tsType:{name:`string`},description:`Description of the setting`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the setting is disabled`,defaultValue:{value:`false`,computed:!1}},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional leading icon for the setting title`},iconClassName:{required:!1,tsType:{name:`string`},description:`Optional className forwarded to the icon element (e.g., settings accent
colors).`},iconComponent:{required:!1,tsType:{name:`IconType`},description:`Preferred icon API: pass an IconType instead of JSX to avoid jsx-as-prop
perf lint issues.`},iconSize:{required:!1,tsType:{name:`number`},description:`Optional icon size (px). Defaults to 16.`},title:{required:!0,tsType:{name:`string`},description:`Title of the setting`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{c as n,s as t};