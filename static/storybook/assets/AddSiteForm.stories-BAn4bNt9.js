var E=Object.defineProperty;var e=(r,d)=>E(r,"name",{value:d,configurable:!0});import{j as S}from"./jsx-runtime-BHIWlbBZ.js";import{u as x,c as g,r as A}from"./iframe-CreBuNPk.js";import{A as f,u as F}from"./AddSiteForm-fv4-S-xQ.js";import{c as M,a as u}from"./siteStoryHelpers-CD_Eu4XO.js";import{p as _,S as O}from"./monitorTypeMocks-LCaz0qqw.js";import"./preload-helper-Cc2_yIPf.js";import"./storeErrorHandling-D4oToydn.js";import"./react-DiIGpqgH.js";import"./useDelayedButtonLoading-CmsKJqlh.js";import"./monitorUiHelpers-AknUfLO9.js";import"./validation-at8F_Jpu.js";import"./useMonitorTypes-BorZ2eFc.js";import"./selectors-C0X4eAib.js";import"./useSitesStore-iyNVQL90.js";import"./utfByteLength-Dk-7ijHQ.js";import"./stringSafety-3narqytt.js";import"./EventsService-BjxJj59F.js";import"./ThemedButton-CW7lHQyb.js";import"./types-B6zT3oaC.js";import"./ThemedText-BJI_SxX2.js";import"./icons-D_Q_f2rV.js";import"./ErrorAlert-CeE42XOJ.js";import"./SurfaceContainer-DDhaXz2v.js";import"./ThemedBox-Cg_UbnDy.js";import"./DynamicMonitorFields-DiglYRCB.js";import"./ThemedSelect-nxk03xHF.js";import"./useTheme-BeZpuX1q.js";import"./useThemedControlStyles-uHO119ZE.js";import"./BaseFormField-BmGParyG.js";import"./ThemedInput-PtfD1ZlT.js";import"./fallbacks-M3AOOrC-.js";import"./monitorValidation-e-6ggJbQ.js";import"./useUiStore-BfFuR8Wt.js";const{action:T}=__STORYBOOK_MODULE_ACTIONS__,l=[u({identifier:"form-alpha",name:"Alpha Gateway"}),u({identifier:"form-beta",name:"Beta API"})],y=e(r=>(x(()=>{_(O)}),S.jsx(r,{})),"withMonitorTypes"),at={args:{onSuccess:T("add-site-form/success")},component:f,decorators:[y,M(()=>l)],parameters:{layout:"fullscreen",docs:{description:{component:"Storybook metadata for the {@link AddSiteForm} component stories."}}},tags:["autodocs"]},c={},p={render:e(r=>{const d=e(()=>{const t=g.c(6),{resetForm:o,setAddMode:i,setSelectedExistingSite:s}=F();let n,m;t[0]!==o||t[1]!==i||t[2]!==s?(n=e(function(){return i("existing"),s(l[0]?.identifier??""),e(function(){o()},"cleanupExistingSiteFormEffect")},"initializeExistingSiteFormEffect"),m=[o,i,s],t[0]=o,t[1]=i,t[2]=s,t[3]=n,t[4]=m):(n=t[3],m=t[4]),A.useEffect(n,m);let a;return t[5]===Symbol.for("react.memo_cache_sentinel")?(a=S.jsx(f,{...r}),t[5]=a):a=t[5],a},"ExistingSiteForm");return S.jsx(d,{})},"render")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
