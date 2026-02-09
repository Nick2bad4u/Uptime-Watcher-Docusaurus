var E=Object.defineProperty;var e=(r,d)=>E(r,"name",{value:d,configurable:!0});import{j as S}from"./jsx-runtime-BHIWlbBZ.js";import{u as x,c as g,r as A}from"./iframe-DuEuG6JD.js";import{A as f,u as F}from"./AddSiteForm-UrBwf6G9.js";import{c as M,a as u}from"./siteStoryHelpers-CR2_4PBu.js";import{p as _,S as O}from"./monitorTypeMocks-COmqPyKT.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling-DNI8Znf5.js";import"./react-BTwblIux.js";import"./useDelayedButtonLoading-DClD4TTa.js";import"./monitorUiHelpers-DvbyT2c9.js";import"./validation-cKCHs09w.js";import"./useMonitorTypes-BQnSY3eg.js";import"./selectors-C0X4eAib.js";import"./useSitesStore-C7lWqy2N.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./EventsService-CHHrEves.js";import"./ThemedButton-C7y6TK_x.js";import"./types-B6zT3oaC.js";import"./ThemedText-Cm3TRmYk.js";import"./icons-FyP_sYx9.js";import"./ErrorAlert-BinPLnBc.js";import"./SurfaceContainer-CnZ4ptKU.js";import"./ThemedBox-CxAQesT2.js";import"./DynamicMonitorFields-BOwnAPwm.js";import"./ThemedSelect-C3ZACITF.js";import"./useTheme-BPQlNHcU.js";import"./useThemedControlStyles-6ewJ2LJA.js";import"./BaseFormField-CBNpmbSX.js";import"./ThemedInput-Cim9vnZC.js";import"./fallbacks-DxKiKyJp.js";import"./monitorValidation-BnWJWZ_p.js";import"./useUiStore-C8vvcNtZ.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,l=[u({identifier:"form-alpha",name:"Alpha Gateway"}),u({identifier:"form-beta",name:"Beta API"})],y=e(r=>(x(()=>{_(O)}),S.jsx(r,{})),"withMonitorTypes"),at={args:{onSuccess:T("add-site-form/success")},component:f,decorators:[y,M(()=>l)],parameters:{layout:"fullscreen",docs:{description:{component:"Storybook metadata for the {@link AddSiteForm} component stories."}}},tags:["autodocs"]},c={},p={render:e(r=>{const d=e(()=>{const t=g.c(6),{resetForm:o,setAddMode:i,setSelectedExistingSite:s}=F();let n,m;t[0]!==o||t[1]!==i||t[2]!==s?(n=e(function(){return i("existing"),s(l[0]?.identifier??""),e(function(){o()},"cleanupExistingSiteFormEffect")},"initializeExistingSiteFormEffect"),m=[o,i,s],t[0]=o,t[1]=i,t[2]=s,t[3]=n,t[4]=m):(n=t[3],m=t[4]),A.useEffect(n,m);let a;return t[5]===Symbol.for("react.memo_cache_sentinel")?(a=S.jsx(f,{...r}),t[5]=a):a=t[5],a},"ExistingSiteForm");return S.jsx(d,{})},"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
