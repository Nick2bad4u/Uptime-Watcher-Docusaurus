var C=Object.defineProperty;var l=(a,e)=>C(a,"name",{value:e,configurable:!0});import{r as o}from"./iframe-BJrhacjf.js";import{C as D}from"./types-B6zT3oaC.js";const I={},s=l(({"aria-label":a,as:e="div",border:d=!1,children:u,className:m="","data-testid":c,onClick:n,onMouseEnter:p,onMouseLeave:v,open:r,padding:f="md",role:h,rounded:b="md",shadow:i,style:y=I,surface:g="base",tabIndex:x,variant:T="primary",...w})=>{const k=[D.THEMED_BOX,`themed-box--background-${T}`,`themed-box--surface-${g}`,`themed-box--padding-${f}`,`themed-box--rounded-${b}`,i&&`themed-box--shadow-${i}`,d&&"themed-box--border",m].filter(Boolean).join(" "),E=!!n,S=l(t=>{(t.key==="Enter"||t.key===" ")&&n&&(t.preventDefault(),n())},"handleKeyDown"),V={...w,className:k,"data-testid":c,onMouseEnter:p,onMouseLeave:v,style:y,...r!==void 0&&{open:r}},q=E?{onClick:n,...e==="div"&&{"aria-label":a,onKeyDown:S,role:h??"button",tabIndex:x??0},...e==="button"&&{"aria-label":a,type:"button"}}:{},A={...V,...q};return o.createElement(e,A,u)},"ThemedBoxComponent"),_=o.memo(s);s.__docgenInfo={description:`Themed box component for container layout and visual consistency.

@remarks
This component composes utility CSS classes (from {@link CSS_CLASSES} and
local \`themed-box--*\` classes) to provide consistent padding, rounding,
shadows, and surface/variant backgrounds. When an \`onClick\` handler is
provided the component augments the rendered element with keyboard handling
and ARIA attributes to behave like a button when the element is a \`div\`.

@example

\`\`\`tsx
<ThemedBox padding="lg" rounded="xl" variant="secondary">
    <p>Content</p>
</ThemedBox>;
\`\`\`

@param aria-label - Accessible label forwarded to the underlying element
  (maps to HTML \`aria-label\`).
@param as - Element tag or component to render. Default: \`div\`.
@param border - Whether to render a border. Default: \`false\`.
@param children - Child nodes to render inside the box.
@param className - Additional class names to append.
@param onClick - Click handler which enables interactive behavior.
@param onMouseEnter - Mouse enter callback.
@param onMouseLeave - Mouse leave callback.
@param padding - Padding size variant. Default: \`md\`.
@param role - Explicit ARIA role when interactive.
@param rounded - Border radius variant. Default: \`md\`.
@param shadow - Shadow depth variant.
@param style - Inline style object forwarded to the element.
@param surface - Surface variant for contextual surface styling. Default:
  \`base\`.
@param tabIndex - Explicit tabIndex when interactive.
@param variant - Visual variant that controls background. Default: \`primary\`.

@returns A React element representing the themed box.

@public`,methods:[],displayName:"ThemedBoxComponent",props:{as:{required:!1,tsType:{name:"union",raw:`| "article"
| "aside"
| "button"
| "dialog"
| "div"
| "footer"
| "header"
| "nav"
| "section"`,elements:[{name:"literal",value:'"article"'},{name:"literal",value:'"aside"'},{name:"literal",value:'"button"'},{name:"literal",value:'"dialog"'},{name:"literal",value:'"div"'},{name:"literal",value:'"footer"'},{name:"literal",value:'"header"'},{name:"literal",value:'"nav"'},{name:"literal",value:'"section"'}]},description:'Element type to render (for example `div`, `button`, `section`).\n\n@defaultValue "div"',defaultValue:{value:'"div"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:`Render a visible border when true.

@defaultValue false`,defaultValue:{value:"false",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test identifier for automated testing (data-testid attribute)."},onClick:{required:!1,tsType:{name:"ClickHandler"},description:`Click handler for interactive usage.

@remarks
When provided the component will add keyboard handling and ARIA
attributes for accessibility if the rendered element is a \`div\`.`},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse enter callback."},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Mouse leave callback."},open:{required:!1,tsType:{name:"boolean"},description:`Whether the dialog is open (for dialog elements only).

@remarks
This prop is only relevant when \`as="dialog"\` and controls the dialog's
visibility using the native HTML dialog \`open\` attribute.`},padding:{required:!1,tsType:{name:"union",raw:'"lg" | "md" | "sm" | "xl" | "xs"',elements:[{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xs"'}]},description:`Padding size variant.

@defaultValue "md"`,defaultValue:{value:'"md"',computed:!1}},role:{required:!1,tsType:{name:"string"},description:"Explicit ARIA role to apply when the component becomes interactive."},rounded:{required:!1,tsType:{name:"union",raw:'"full" | "lg" | "md" | "none" | "sm" | "xl"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'}]},description:`Border radius variant.

@defaultValue "md"`,defaultValue:{value:'"md"',computed:!1}},shadow:{required:!1,tsType:{name:"union",raw:'"inner" | "lg" | "md" | "sm" | "xl"',elements:[{name:"literal",value:'"inner"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"xl"'}]},description:"Shadow depth variant. When omitted, no shadow class is added."},style:{required:!1,tsType:{name:"CSSProperties"},description:`Inline style object forwarded to the element.

@defaultValue \\{ \\} (internal singleton)`,defaultValue:{value:"{}",computed:!1}},surface:{required:!1,tsType:{name:"union",raw:'"base" | "elevated" | "overlay"',elements:[{name:"literal",value:'"base"'},{name:"literal",value:'"elevated"'},{name:"literal",value:'"overlay"'}]},description:`Surface variant used to select contextual surface styles.

@defaultValue "base"`,defaultValue:{value:'"base"',computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:`Explicit tabIndex for interactive elements. When omitted and the
component is interactive, a sensible default is applied.`},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:`Visual variant used to choose background styling.

@defaultValue "primary"`,defaultValue:{value:'"primary"',computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}},composes:["AccessibilityProperties","CoreComponentProperties","DataAttributeProperties","DomIdentityProperties"]};export{_ as T};
