var E=Object.defineProperty;var e=(r,d)=>E(r,"name",{value:d,configurable:!0});import{j as S}from"./jsx-runtime-BHIWlbBZ.js";import{u as x,c as g,r as A}from"./iframe-DI6HKbXb.js";import{A as f,u as F}from"./AddSiteForm-BBirIE8W.js";import{c as M,a as u}from"./siteStoryHelpers-D5Ki0Nbt.js";import{p as _,S as O}from"./monitorTypeMocks-BY2T0HNB.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling-C-cvM8DB.js";import"./react-DWXc_mr8.js";import"./useDelayedButtonLoading-DimUzk4O.js";import"./monitorUiHelpers-CDMJBW6-.js";import"./validation-nXBduy_X.js";import"./useMonitorTypes-z68K-4Rc.js";import"./selectors-C0X4eAib.js";import"./useSitesStore-DxIYcGlE.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./EventsService-q8R--PJ4.js";import"./ThemedButton-BzvHMed-.js";import"./types-B6zT3oaC.js";import"./ThemedText-BYkJ0-Ir.js";import"./icons-DU1jpZJN.js";import"./ErrorAlert-C7oUtXOd.js";import"./SurfaceContainer-DmxiQ5Be.js";import"./ThemedBox-ChIwzOhP.js";import"./DynamicMonitorFields-BNEv758l.js";import"./ThemedSelect-BP8dwt2l.js";import"./useTheme-BebA_Oqh.js";import"./useThemedControlStyles-CBrepB0J.js";import"./BaseFormField-Bds_E0EH.js";import"./ThemedInput-C9pYOoYp.js";import"./fallbacks-BEvrPo40.js";import"./monitorValidation-BuRdVhxO.js";import"./useUiStore-C4DENxRZ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,l=[u({identifier:"form-alpha",name:"Alpha Gateway"}),u({identifier:"form-beta",name:"Beta API"})],y=e(r=>(x(()=>{_(O)}),S.jsx(r,{})),"withMonitorTypes"),at={args:{onSuccess:T("add-site-form/success")},component:f,decorators:[y,M(()=>l)],parameters:{layout:"fullscreen",docs:{description:{component:"Storybook metadata for the {@link AddSiteForm} component stories."}}},tags:["autodocs"]},c={},p={render:e(r=>{const d=e(()=>{const t=g.c(6),{resetForm:o,setAddMode:i,setSelectedExistingSite:s}=F();let n,m;t[0]!==o||t[1]!==i||t[2]!==s?(n=e(function(){return i("existing"),s(l[0]?.identifier??""),e(function(){o()},"cleanupExistingSiteFormEffect")},"initializeExistingSiteFormEffect"),m=[o,i,s],t[0]=o,t[1]=i,t[2]=s,t[3]=n,t[4]=m):(n=t[3],m=t[4]),A.useEffect(n,m);let a;return t[5]===Symbol.for("react.memo_cache_sentinel")?(a=S.jsx(f,{...r}),t[5]=a):a=t[5],a},"ExistingSiteForm");return S.jsx(d,{})},"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
