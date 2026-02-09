var o=Object.defineProperty;var n=(t,i)=>o(t,"name",{value:i,configurable:!0});import{j as d}from"./jsx-runtime-BHIWlbBZ.js";import{B as c}from"./BaseFormField-DRB8JBta.js";import"./iframe-MD7yCyl4.js";import"./preload-helper-Cc2_yIPf.js";import"./ThemedText-CsWFmcMv.js";import"./icons-DJj_SB9p.js";const s=n(t=>d.jsx("input",{...t,className:"w-64 rounded-xs border border-slate-400 px-3 py-2",defaultValue:"",placeholder:"Enter a descriptive name",type:"text"}),"baseChildren"),f={args:{children:s,id:"site-name",label:"Site Name",required:!0},component:c,parameters:{docs:{description:{component:"BaseFormField wraps inputs with shared label/help/error affordances while emitting ARIA attributes for the trigger element."}},layout:"centered"},argTypes:{children:{control:!1}},tags:["autodocs"]},e={args:{children:s},parameters:{docs:{description:{story:"Demonstrates the default required presentation; the generated aria-label marks the field as mandatory without duplicating the visual asterisk."}}}},r={args:{children:s,helpText:"This name appears in dashboards and alerts."},parameters:{docs:{description:{story:"Shows the optional help hint bound through aria-describedby, ensuring screen readers announce usage guidance after the label."}}}},a={args:{children:s,error:"Provide a unique site name."},parameters:{docs:{description:{story:"Error messaging remains inside the labelled container and is connected to the input via aria-describedby for assistive feedback."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: baseChildren
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the default required presentation; the generated aria-label marks the field as mandatory without duplicating the visual asterisk."
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: baseChildren,
    helpText: "This name appears in dashboards and alerts."
  },
  parameters: {
    docs: {
      description: {
        story: "Shows the optional help hint bound through aria-describedby, ensuring screen readers announce usage guidance after the label."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: baseChildren,
    error: "Provide a unique site name."
  },
  parameters: {
    docs: {
      description: {
        story: "Error messaging remains inside the labelled container and is connected to the input via aria-describedby for assistive feedback."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const y=["Required","WithHelpText","WithError"];export{e as Required,a as WithError,r as WithHelpText,y as __namedExportsOrder,f as default};
