import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./BaseFormField-CuGN6tYx.js";var i,a,o,s,c,l,u;e((()=>{n(),i=t(),a=e=>(0,i.jsx)(`input`,{...e,className:`w-64 rounded-xs border border-slate-400 px-3 py-2`,defaultValue:``,placeholder:`Enter a descriptive name`,type:`text`}),o={args:{children:a,id:`site-name`,label:`Site Name`,required:!0},argTypes:{children:{control:!1}},component:r,parameters:{docs:{description:{component:`BaseFormField wraps inputs with shared label/help/error affordances while emitting ARIA attributes for the trigger element.`}},layout:`centered`},tags:[`autodocs`]},s={args:{children:a},parameters:{docs:{description:{story:`Demonstrates the default required presentation; the generated aria-label marks the field as mandatory without duplicating the visual asterisk.`}}}},c={args:{children:a,helpText:`This name appears in dashboards and alerts.`},parameters:{docs:{description:{story:`Shows the optional help hint bound through aria-describedby, ensuring screen readers announce usage guidance after the label.`}}}},l={args:{children:a,error:`Provide a unique site name.`},parameters:{docs:{description:{story:`Error messaging remains inside the labelled container and is connected to the input via aria-describedby for assistive feedback.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u=[`Required`,`WithHelpText`,`WithError`]}))();export{s as Required,l as WithError,c as WithHelpText,u as __namedExportsOrder,o as default};