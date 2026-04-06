import{a as e,n as t}from"./chunk-BneVvdWh.js";import{Qt as n}from"./iframe-CAh388JZ.js";import{t as r}from"./jsx-runtime-Bn1Ys6_W.js";import{n as i,t as a}from"./types-CelLKK7B.js";function o(e){let t=u.get(e);return t||(t={color:e},u.set(e,t)),t}function s(e){if(e)switch(e){case`danger`:case`error`:return`themed-icon--error`;case`info`:return`themed-icon--info`;case`primary`:return`themed-icon--primary`;case`secondary`:return`themed-icon--secondary`;case`success`:return`themed-icon--success`;case`warning`:return`themed-icon--warning`;default:return}}function c(e,t){if(!e)return e;let n=s(t);return n?(0,l.jsx)(`span`,{className:n,children:e}):t?(0,l.jsx)(`span`,{style:o(t),children:e}):e}var l,u,d=t((()=>{l=r(),u=new Map,c.__docgenInfo={description:`Wraps icon in a span with color class or inline style.

@param icon - React icon element
@param color - Color name or custom color value

@returns Colored icon wrapped in span

@internal`,methods:[],displayName:`renderColoredIcon`}})),f,p,m,h,g,_=t((()=>{f=e(n()),d(),i(),p=r(),m={},h=({"aria-disabled":e,"aria-label":t,children:n,className:r=``,"data-testid":i,disabled:o=!1,form:s,fullWidth:l=!1,icon:u,iconColor:d,iconPosition:h=`left`,loading:g=!1,onClick:_,size:v=`md`,style:y=m,title:b,type:x,value:S,variant:C=`primary`,...w})=>{let T=x&&x!==`button`?{type:x}:void 0,E=[a.THEMED_BUTTON,`themed-button--${C}`,`themed-button--size-${v}`,l&&`themed-button--full-width`,(o?!0:g)&&`themed-button--loading`,r].filter(Boolean).join(` `),D=(0,f.useCallback)(e=>{_?.(e)},[_]),O=()=>{if(g)return(0,p.jsxs)(`div`,{className:`themed-button__loading`,children:[(0,p.jsx)(`div`,{className:`themed-button__spinner`}),(0,p.jsx)(`span`,{children:n})]});if(u){let e=d?c(u,d):u;return n?h===`left`?(0,p.jsxs)(p.Fragment,{children:[e,(0,p.jsx)(`span`,{children:n})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{children:n}),e]}):(0,f.isValidElement)(e)?e:(0,p.jsx)(`span`,{children:e})}return n==null||n===!1?null:(0,f.isValidElement)(n)?n:(0,p.jsx)(`span`,{children:n})};return(0,p.jsx)(`button`,{"aria-disabled":e,"aria-label":t,className:E,"data-testid":i??(t?`button-${t.toLowerCase().replaceAll(/\s+/gu,`-`)}`:void 0),disabled:o?!0:g,form:s,onClick:D,style:y,title:b,type:`button`,value:S,...w,...T,children:O()})},g=(0,f.memo)(h),h.__docgenInfo={description:`Themed button component with comprehensive styling and state management.

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

@public`,methods:[],displayName:`ThemedButtonComponent`,props:{className:{defaultValue:{value:`""`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},fullWidth:{defaultValue:{value:`false`,computed:!1},required:!1},iconPosition:{defaultValue:{value:`"left"`,computed:!1},required:!1},loading:{defaultValue:{value:`false`,computed:!1},required:!1},size:{defaultValue:{value:`"md"`,computed:!1},required:!1},style:{defaultValue:{value:`{}`,computed:!1},required:!1},variant:{defaultValue:{value:`"primary"`,computed:!1},required:!1}}}}));export{c as i,_ as n,d as r,g as t};