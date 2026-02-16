var Z=Object.defineProperty;var c=(t,e)=>Z(t,"name",{value:e,configurable:!0});import{j as s}from"./jsx-runtime-BHIWlbBZ.js";import{r as O,c as ee}from"./iframe-DI6HKbXb.js";import{C as te}from"./types-B6zT3oaC.js";const X=new Map;function ne(t){let e=X.get(t);return e||(e={color:t},X.set(t,e)),e}c(ne,"getColorStyle");function se(t){if(t)switch(t){case"danger":case"error":return"themed-icon--error";case"info":return"themed-icon--info";case"primary":return"themed-icon--primary";case"secondary":return"themed-icon--secondary";case"success":return"themed-icon--success";case"warning":return"themed-icon--warning";default:return}}c(se,"getIconColorClass");function J(t,e){if(!t)return t;const l=se(e);if(l)return s.jsx("span",{className:l,children:t});if(e){const a=ne(e);return s.jsx("span",{style:a,children:t})}return t}c(J,"renderColoredIcon");J.__docgenInfo={description:`Wraps icon in a span with color class or inline style.

@param icon - React icon element
@param color - Color name or custom color value

@returns Colored icon wrapped in span

@internal`,methods:[],displayName:"renderColoredIcon"};const ae={},Y=c(t=>{const e=ee.c(56);let l,a,n,u,m,f,o,r,p,i,g,C,T,x,j,E,_,w,h,v;e[0]!==t?({"aria-disabled":l,"aria-label":a,children:n,className:g,"data-testid":u,disabled:C,form:f,fullWidth:T,icon:o,iconColor:r,iconPosition:x,loading:j,onClick:p,size:E,style:_,title:h,type:i,value:v,variant:w,...m}=t,e[0]=t,e[1]=l,e[2]=a,e[3]=n,e[4]=u,e[5]=m,e[6]=f,e[7]=o,e[8]=r,e[9]=p,e[10]=i,e[11]=g,e[12]=C,e[13]=T,e[14]=x,e[15]=j,e[16]=E,e[17]=_,e[18]=w,e[19]=h,e[20]=v):(l=e[1],a=e[2],n=e[3],u=e[4],m=e[5],f=e[6],o=e[7],r=e[8],p=e[9],i=e[10],g=e[11],C=e[12],T=e[13],x=e[14],j=e[15],E=e[16],_=e[17],w=e[18],h=e[19],v=e[20]);const k=g===void 0?"":g,U=C===void 0?!1:C,G=T===void 0?!1:T,I=x===void 0?"left":x,N=j===void 0?!1:j,K=E===void 0?"md":E,A=_===void 0?ae:_,Q=w===void 0?"primary":w;let S;e[21]!==i?(S=i&&i!=="button"?{type:i}:void 0,e[21]=i,e[22]=S):S=e[22];const D=S,L=`themed-button--${Q}`,z=`themed-button--size-${K}`,W=G&&"themed-button--full-width",$=(U||N)&&"themed-button--loading";let V;e[23]!==k||e[24]!==L||e[25]!==z||e[26]!==W||e[27]!==$?(V=[te.THEMED_BUTTON,L,z,W,$,k].filter(Boolean),e[23]=k,e[24]=L,e[25]=z,e[26]=W,e[27]=$,e[28]=V):V=e[28];const F=V.join(" ");let q;e[29]!==p?(q=c(d=>{p?.(d)},"t15"),e[29]=p,e[30]=q):q=e[30];const M=q;let B;e[31]!==n||e[32]!==o||e[33]!==r||e[34]!==I||e[35]!==N?(B=c(()=>{if(N)return s.jsxs("div",{className:"themed-button__loading",children:[s.jsx("div",{className:"themed-button__spinner"}),s.jsx("span",{children:n})]});if(o){const d=r?J(o,r):o;return n?I==="left"?s.jsxs(s.Fragment,{children:[d,s.jsx("span",{children:n})]}):s.jsxs(s.Fragment,{children:[s.jsx("span",{children:n}),d]}):O.isValidElement(d)?d:s.jsx("span",{children:d})}return n==null||n===!1?null:O.isValidElement(n)?n:s.jsx("span",{children:n})},"t16"),e[31]=n,e[32]=o,e[33]=r,e[34]=I,e[35]=N,e[36]=B):B=e[36];const R=B;let b;e[37]!==a||e[38]!==u?(b=u??(a?`button-${a.toLowerCase().replaceAll(/\s+/gu,"-")}`:void 0),e[37]=a,e[38]=u,e[39]=b):b=e[39];const H=U||N;let y;e[40]!==R?(y=R(),e[40]=R,e[41]=y):y=e[41];let P;return e[42]!==l||e[43]!==a||e[44]!==F||e[45]!==m||e[46]!==f||e[47]!==M||e[48]!==D||e[49]!==A||e[50]!==b||e[51]!==H||e[52]!==y||e[53]!==h||e[54]!==v?(P=s.jsx("button",{"aria-disabled":l,"aria-label":a,className:F,"data-testid":b,disabled:H,form:f,onClick:M,style:A,title:h,type:"button",value:v,...m,...D,children:y}),e[42]=l,e[43]=a,e[44]=F,e[45]=m,e[46]=f,e[47]=M,e[48]=D,e[49]=A,e[50]=b,e[51]=H,e[52]=y,e[53]=h,e[54]=v,e[55]=P):P=e[55],P},"ThemedButtonComponent"),de=O.memo(Y);Y.__docgenInfo={description:`Themed button component with comprehensive styling and state management.

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

@public`,methods:[],displayName:"ThemedButtonComponent",props:{className:{defaultValue:{value:'""',computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},fullWidth:{defaultValue:{value:"false",computed:!1},required:!1},iconPosition:{defaultValue:{value:'"left"',computed:!1},required:!1},loading:{defaultValue:{value:"false",computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1},variant:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};export{de as T,J as r};
