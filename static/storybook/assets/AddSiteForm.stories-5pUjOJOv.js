var E=Object.defineProperty;var e=(r,d)=>E(r,"name",{value:d,configurable:!0});import{j as S}from"./jsx-runtime-BHIWlbBZ.js";import{u as x,c as g,r as A}from"./iframe-MD7yCyl4.js";import{A as f,u as F}from"./AddSiteForm-jvzxCoL6.js";import{c as M,a as u}from"./siteStoryHelpers-BpZ9QbWa.js";import{p as _,S as O}from"./monitorTypeMocks-C6ur54MQ.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling--gr6WIbO.js";import"./react-CwtULKRV.js";import"./useDelayedButtonLoading-BexVQiJZ.js";import"./monitorUiHelpers-DiCQuATr.js";import"./validation-_iszY_Po.js";import"./useMonitorTypes-DgUL8KMz.js";import"./selectors-C0X4eAib.js";import"./useSitesStore-BsQr7GrP.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./EventsService-B1aW6uuF.js";import"./ThemedButton-CoiXBUze.js";import"./types-B6zT3oaC.js";import"./ThemedText-CsWFmcMv.js";import"./icons-DJj_SB9p.js";import"./ErrorAlert-5XlolQHO.js";import"./SurfaceContainer-Pn6_9Thf.js";import"./ThemedBox-jwFwTgbC.js";import"./DynamicMonitorFields-BNBZ1kEQ.js";import"./ThemedSelect-CgCRzrnR.js";import"./useTheme-CN3hwuLU.js";import"./useThemedControlStyles-CwFLUvzQ.js";import"./BaseFormField-DRB8JBta.js";import"./ThemedInput-BmYqPmeH.js";import"./fallbacks-Dhta-zUw.js";import"./monitorValidation-D8kp3sap.js";import"./useUiStore-Bva96oaZ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,l=[u({identifier:"form-alpha",name:"Alpha Gateway"}),u({identifier:"form-beta",name:"Beta API"})],y=e(r=>(x(()=>{_(O)}),S.jsx(r,{})),"withMonitorTypes"),at={args:{onSuccess:T("add-site-form/success")},component:f,decorators:[y,M(()=>l)],parameters:{layout:"fullscreen",docs:{description:{component:"Storybook metadata for the {@link AddSiteForm} component stories."}}},tags:["autodocs"]},c={},p={render:e(r=>{const d=e(()=>{const t=g.c(6),{resetForm:o,setAddMode:i,setSelectedExistingSite:s}=F();let n,m;t[0]!==o||t[1]!==i||t[2]!==s?(n=e(function(){return i("existing"),s(l[0]?.identifier??""),e(function(){o()},"cleanupExistingSiteFormEffect")},"initializeExistingSiteFormEffect"),m=[o,i,s],t[0]=o,t[1]=i,t[2]=s,t[3]=n,t[4]=m):(n=t[3],m=t[4]),A.useEffect(n,m);let a;return t[5]===Symbol.for("react.memo_cache_sentinel")?(a=S.jsx(f,{...r}),t[5]=a):a=t[5],a},"ExistingSiteForm");return S.jsx(d,{})},"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: AddSiteFormProperties): JSX.Element => {
    const ExistingSiteForm = (): JSX.Element => {
      const {
        resetForm,
        setAddMode,
        setSelectedExistingSite
      } = useAddSiteForm();
      useEffect(function initializeExistingSiteFormEffect(): () => void {
        setAddMode("existing");
        setSelectedExistingSite(sampleSites[0]?.identifier ?? "");
        return function cleanupExistingSiteFormEffect(): void {
          resetForm();
        };
      }, [resetForm, setAddMode, setSelectedExistingSite]);
      return <AddSiteForm {...args} />;
    };
    return <ExistingSiteForm />;
  }
}`,...p.parameters?.docs?.source}}};const ct=["CreateNewSite","AddMonitorToExistingSite"];export{p as AddMonitorToExistingSite,c as CreateNewSite,ct as __namedExportsOrder,at as default};
