import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./ThemedText-BxRSVxuS.js";var i,a,o=e((()=>{n(),i=t(),a=({className:e=``,control:t,description:n,disabled:a=!1,icon:o,iconClassName:s,iconComponent:c,iconSize:l,title:u})=>{let d=typeof t==`function`?t():t,f=c?(0,i.jsx)(c,{"aria-hidden":!0,className:s,size:l??16}):o;return(0,i.jsxs)(`div`,{className:`setting-item ${a?`disabled`:``} ${e}`.trim(),children:[(0,i.jsxs)(`div`,{className:`setting-info`,children:[(0,i.jsxs)(`div`,{className:`setting-title-row`,children:[f?(0,i.jsx)(`span`,{"aria-hidden":!0,className:`setting-item__icon`,children:f}):null,(0,i.jsx)(r,{className:`setting-title`,size:`sm`,weight:`medium`,children:u})]}),n?(0,i.jsx)(r,{className:`setting-description`,size:`xs`,variant:`tertiary`,children:n}):null]}),(0,i.jsx)(`div`,{className:`setting-control`,children:d})]})},a.__docgenInfo={description:`Standardized setting item layout with title, description, and control

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
perf lint issues.`},iconSize:{required:!1,tsType:{name:`number`},description:`Optional icon size (px). Defaults to 16.`},title:{required:!0,tsType:{name:`string`},description:`Title of the setting`},className:{defaultValue:{value:`""`,computed:!1},required:!1}},composes:[`CoreComponentProperties`]}}));export{o as n,a as t};