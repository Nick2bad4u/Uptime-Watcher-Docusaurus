var p=Object.defineProperty;var s=(n,l)=>p(n,"name",{value:l,configurable:!0});import{j as e}from"./jsx-runtime-BHIWlbBZ.js";import{T as i}from"./ThemedButton-eWYltqoY.js";import{T as c}from"./ThemedCard-D3cS6pZ-.js";import{T as m}from"./ThemedText-RH-jlxwJ.js";import{A as a}from"./icons-C3P3CjT3.js";import"./iframe-BJrhacjf.js";import"./preload-helper-Cc2_yIPf.js";import"./types-B6zT3oaC.js";import"./useTheme-r2seLT70.js";import"./storeErrorHandling-BKgO_9cm.js";import"./react-Bfr6JYwz.js";import"./EventsService-B6jZiVgw.js";import"./ThemedBox-DEIWzBpG.js";const d=a.metrics.uptime,u=a.ui.site,h=a.ui.analytics,B={component:c,args:{title:"Site Availability",subtitle:"Last 24 hours",icon:e.jsx(d,{}),children:e.jsx(m,{children:"Monitor uptime, response time, and incidents for every site in your workspace."})},argTypes:{onClick:{action:"clicked"},onMouseEnter:{action:"hover"},onMouseLeave:{action:"leave"}},parameters:{layout:"padded"},tags:["autodocs"]},r={},t={args:{clickable:!0,hoverable:!0}},o={render:s(n=>e.jsxs(c,{...n,children:[e.jsx(m,{children:"Quickly add new monitors with sensible defaults and templates for common protocols."}),e.jsxs("div",{style:{marginTop:"1rem",display:"flex",gap:"0.75rem"},children:[e.jsx(i,{icon:e.jsx(u,{}),variant:"primary",children:"New Site"}),e.jsx(i,{icon:e.jsx(h,{}),variant:"outline",children:"View Analytics"})]})]}),"render"),args:{icon:e.jsx(d,{}),hoverable:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    clickable: true,
    hoverable: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ThemedCard {...args}>
            <ThemedText>
                Quickly add new monitors with sensible defaults and templates
                for common protocols.
            </ThemedText>
            <div style={{
      marginTop: "1rem",
      display: "flex",
      gap: "0.75rem"
    }}>
                <ThemedButton icon={<NewSiteIcon />} variant="primary">
                    New Site
                </ThemedButton>
                <ThemedButton icon={<AnalyticsIcon />} variant="outline">
                    View Analytics
                </ThemedButton>
            </div>
        </ThemedCard>,
  args: {
    icon: <CardIcon />,
    hoverable: true
  }
}`,...o.parameters?.docs?.source}}};const N=["Default","Clickable","WithAction"];export{t as Clickable,r as Default,o as WithAction,N as __namedExportsOrder,B as default};
