import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{D as n,M as r,t as i}from"./distribution-ruwBHiZP.js";import{Rn as a}from"./iframe-Be0Mue0n.js";import{t as o}from"./jsx-runtime-DqZldVDK.js";import{n as s,t as c}from"./types---wUWNDL.js";function l(e){if(e)switch(e){case`danger`:case`error`:return`themed-icon--error`;case`info`:return`themed-icon--info`;case`primary`:return`themed-icon--primary`;case`secondary`:return`themed-icon--secondary`;case`success`:return`themed-icon--success`;case`warning`:return`themed-icon--warning`;default:return}}function u(e,t){if(!e)return e;let n=l(t);return n?(0,f.jsx)(`span`,{className:n,children:e}):t?(0,f.jsx)(`span`,{style:d(t),children:e}):e}function d(e){let t=p.get(e);return t||(t={color:e},p.set(e,t)),t}var f,p,m=e((()=>{f=o(),p=new Map,u.__docgenInfo={description:`Wraps icon in a span with color class or inline style.

@param icon - React icon element
@param color - Color name or custom color value

@returns Colored icon wrapped in span

@internal`,methods:[],displayName:`renderColoredIcon`}})),h,g,_,v,y,b=e((()=>{h=t(a()),i(),m(),s(),g=o(),_={},v=({"aria-disabled":e,"aria-label":t,children:i,className:a=``,"data-testid":o,disabled:s=!1,form:l,fullWidth:d=!1,icon:f,iconColor:p,iconPosition:m=`left`,loading:v=!1,onClick:y,size:b=`md`,style:x=_,title:S,type:C,value:w,variant:T=`primary`,...E})=>{let D=C&&C!==`button`?{type:C}:void 0,O=r([c.THEMED_BUTTON,`themed-button--${T}`,`themed-button--size-${b}`,d&&`themed-button--full-width`,(s?!0:v)&&`themed-button--loading`,a].filter(Boolean),` `),k=(0,h.useCallback)(e=>{y?.(e)},[y]),A=()=>{if(v)return(0,g.jsxs)(`div`,{className:`themed-button__loading`,children:[(0,g.jsx)(`div`,{className:`themed-button__spinner`}),(0,g.jsx)(`span`,{children:i})]});if(f){let e=p?u(f,p):f;return i?m===`left`?(0,g.jsxs)(g.Fragment,{children:[e,(0,g.jsx)(`span`,{children:i})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`span`,{children:i}),e]}):(0,h.isValidElement)(e)?e:(0,g.jsx)(`span`,{children:e})}return!n(i)||i===!1?null:(0,h.isValidElement)(i)?i:(0,g.jsx)(`span`,{children:i})};return(0,g.jsx)(`button`,{"aria-disabled":e,"aria-label":t,className:O,"data-testid":o??(t?`button-${t.toLowerCase().replaceAll(/\s+/gu,`-`)}`:void 0),disabled:s?!0:v,form:l,onClick:k,style:x,title:S,type:`button`,value:w,...E,...D,children:A()})},y=(0,h.memo)(v),v.__docgenInfo={description:`Themed button component with comprehensive styling and state management.

@remarks
This component provides a full-featured button implementation with theming
support, loading states, disabled states, icon positioning, and various
visual variants. The button automatically handles accessibility features and
prevents clicks when disabled or loading.

@example Action button with loading state:

\`\`\`tsx
<ThemedButton
    variant="primary"
    loading={isProcessing}
    onClick={handleAction}
    disabled={!canSubmit}
>
    Process Data
</ThemedButton>;
\`\`\`

@param props - The component properties

@returns The themed button JSX element

@public`,methods:[],displayName:`ThemedButtonComponent`,props:{className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},fullWidth:{defaultValue:{value:`false`,computed:!1},required:!1},iconPosition:{defaultValue:{value:`"left"`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`"md"`,computed:!1},required:!1},style:{defaultValue:{value:`{}`,computed:!1},required:!1},variant:{defaultValue:{value:`"primary"`,computed:!1},required:!1}}}}));export{u as i,b as n,m as r,y as t};