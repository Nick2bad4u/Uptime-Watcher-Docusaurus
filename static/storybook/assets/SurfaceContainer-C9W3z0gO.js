import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{yn as n}from"./iframe-CpaI1qLl.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ThemedBox-BnH7FICr.js";var o,s,c,l=e((()=>{o=t(n()),i(),s=r(),c=(0,o.memo)(function({className:e,padding:t=`lg`,rounded:n=`lg`,surface:r=`base`,variant:i=`primary`,...o}){return(0,s.jsx)(a,{...e?{...o,className:e}:o,padding:t,rounded:n,surface:r,variant:i})}),c.__docgenInfo={description:`Lightweight wrapper around {@link ThemedBox} that applies consistent surface
styling defaults for neutral containers.

@param props - Component props configuring the rendered surface container.

@returns JSX element providing a themed surface container.`,methods:[],displayName:`SurfaceContainer`,props:{as:{required:!1,tsType:{name:`union`,raw:`| "article"
| "aside"
| "button"
| "dialog"
| "div"
| "footer"
| "header"
| "nav"
| "section"`,elements:[{name:`literal`,value:`"article"`},{name:`literal`,value:`"aside"`},{name:`literal`,value:`"button"`},{name:`literal`,value:`"dialog"`},{name:`literal`,value:`"div"`},{name:`literal`,value:`"footer"`},{name:`literal`,value:`"header"`},{name:`literal`,value:`"nav"`},{name:`literal`,value:`"section"`}]},description:'Element type to render (for example `div`, `button`, `section`).\n\n@defaultValue "div"'},border:{required:!1,tsType:{name:`boolean`},description:`Render a visible border when true.

@defaultValue false`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test identifier for automated testing (data-testid attribute).`},onClick:{required:!1,tsType:{name:`ClickHandler`},description:`Click handler for interactive usage.

@remarks
When provided the component will add keyboard handling and ARIA
attributes for accessibility if the rendered element is a \`div\`.`},onMouseEnter:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Mouse enter callback.`},onMouseLeave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Mouse leave callback.`},open:{required:!1,tsType:{name:`boolean`},description:`Whether the dialog is open (for dialog elements only).

@remarks
This prop is only relevant when \`as="dialog"\` and controls the dialog's
visibility using the native HTML dialog \`open\` attribute.`},padding:{required:!1,tsType:{name:`union`,raw:`"lg" | "md" | "sm" | "xl" | "xs"`,elements:[{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"xs"`}]},description:`Padding size variant.

@defaultValue "md"`,defaultValue:{value:`"lg"`,computed:!1}},role:{required:!1,tsType:{name:`string`},description:`Explicit ARIA role to apply when the component becomes interactive.`},rounded:{required:!1,tsType:{name:`union`,raw:`"full" | "lg" | "md" | "none" | "sm" | "xl"`,elements:[{name:`literal`,value:`"full"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"none"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`}]},description:`Border radius variant.

@defaultValue "md"`,defaultValue:{value:`"lg"`,computed:!1}},shadow:{required:!1,tsType:{name:`union`,raw:`"inner" | "lg" | "md" | "sm" | "xl"`,elements:[{name:`literal`,value:`"inner"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"xl"`}]},description:`Shadow depth variant. When omitted, no shadow class is added.`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Inline style object forwarded to the element.

@defaultValue \\{ \\} (internal singleton)`},surface:{required:!1,tsType:{name:`union`,raw:`"base" | "elevated" | "overlay"`,elements:[{name:`literal`,value:`"base"`},{name:`literal`,value:`"elevated"`},{name:`literal`,value:`"overlay"`}]},description:`Surface variant used to select contextual surface styles.

@defaultValue "base"`,defaultValue:{value:`"base"`,computed:!1}},tabIndex:{required:!1,tsType:{name:`number`},description:`Explicit tabIndex for interactive elements. When omitted and the
component is interactive, a sensible default is applied.`},variant:{required:!1,tsType:{name:`union`,raw:`"primary" | "secondary" | "tertiary"`,elements:[{name:`literal`,value:`"primary"`},{name:`literal`,value:`"secondary"`},{name:`literal`,value:`"tertiary"`}]},description:`Visual variant used to choose background styling.

@defaultValue "primary"`,defaultValue:{value:`"primary"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional class name applied to the underlying element.`}},composes:[`AccessibilityProperties`,`CoreComponentProperties`,`DataAttributeProperties`,`DomIdentityProperties`]}}));export{l as n,c as t};