import{i as e,s as t}from"./preload-helper-CT_b8DTk.js";import{Rn as n,nt as r,tt as i}from"./iframe-Bj9A_9iV.js";import{t as a}from"./jsx-runtime-DqZldVDK.js";import{i as o,n as s,r as c,t as l}from"./AddSiteForm-lQahNODB.js";import{i as u,n as d,r as f}from"./siteStoryHelpers-BEuiL9KO.js";import{n as p,r as m,t as h}from"./monitorTypeMocks-4lwyFuTd.js";var g,_,v,y,b,x,S,C,w;e((()=>{s(),c(),i(),g=t(n()),u(),p(),_=a(),{action:v}=__STORYBOOK_MODULE_ACTIONS__,y=[d({identifier:`form-alpha`,name:`Alpha Gateway`}),d({identifier:`form-beta`,name:`Beta API`})],b=e=>(r(()=>{m(h)}),(0,_.jsx)(e,{})),x={args:{onSuccess:v(`add-site-form/success`)},component:l,decorators:[b,f(()=>y)],parameters:{layout:`fullscreen`,docs:{description:{component:`Storybook metadata for the {@link AddSiteForm} component stories.`}}},tags:[`autodocs`]},S={},C={render:e=>(0,_.jsx)(()=>{let{resetForm:t,setAddMode:n,setSelectedExistingSite:r}=o();return(0,g.useEffect)(function(){return n(`existing`),r(y[0]?.identifier??``),function(){t()}},[t,n,r]),(0,_.jsx)(l,{...e})},{})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`CreateNewSite`,`AddMonitorToExistingSite`]}))();export{C as AddMonitorToExistingSite,S as CreateNewSite,w as __namedExportsOrder,x as default};