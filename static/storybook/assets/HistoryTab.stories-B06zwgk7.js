import{i as e}from"./preload-helper-CT_b8DTk.js";import{i as t,t as n}from"./siteStoryHelpers-C5Bh0rSN.js";import{n as r,t as i}from"./HistoryTab-BPcTp8La.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{r(),t(),{expect:a,userEvent:o,within:s}=__STORYBOOK_MODULE_TEST__,c=e=>new Intl.DateTimeFormat(`en-US`,{day:`2-digit`,hour:`2-digit`,minute:`2-digit`,month:`short`}).format(new Date(e)),l=e=>`${e} ms`,u=n({history:Array.from({length:24},(e,t)=>({responseTime:120+t%5*30,status:t%6==0?`degraded`:`up`,timestamp:Date.now()-t*6e4})),id:`monitor-http`,responseTime:132,status:`up`}),d={...u,history:u.history.map((e,t)=>t<6?{...e,responseTime:500+t*40,status:t<3?`down`:`degraded`}:e),status:`down`},f={...u,history:[]},p={args:{formatFullTimestamp:c,formatResponseTime:l,selectedMonitor:u},component:i,parameters:{layout:`fullscreen`},tags:[`autodocs`]},m={play:async({canvasElement:e,step:t})=>{let n=s(e);await t(`Verify initial history summary`,async()=>{let e=await n.findByText(/24 of 24 records/i);a(e).not.toHaveTextContent(/\(down filter\)/iv)}),await t(`Filter to down records`,async()=>{let e=await n.findByRole(`button`,{name:/down/iv});await o.click(e);let t=await n.findByText(/0 of 24 records/i);a(t).toHaveTextContent(/\(down filter\)/iv)}),await t(`Adjust visible history count`,async()=>{let e=n.getByRole(`combobox`);await o.selectOptions(e,`10`),a(e).toHaveValue(`10`);let t=await n.findByText(/0 of 24 records/i);a(t).toHaveTextContent(/\(down filter\)/iv)})}},h={args:{selectedMonitor:d}},g={args:{selectedMonitor:f},parameters:{docs:{description:{story:`Illustrates a brand new monitor where checks have not yet produced any history records.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step("Verify initial history summary", async () => {
      const summary = await canvas.findByText(/24 of 24 records/i);
      void expect(summary).not.toHaveTextContent(/\\(down filter\\)/iv);
    });
    await step("Filter to down records", async () => {
      const downFilterButton = await canvas.findByRole("button", {
        name: /down/iv
      });
      await userEvent.click(downFilterButton);
      const summary = await canvas.findByText(/0 of 24 records/i);
      void expect(summary).toHaveTextContent(/\\(down filter\\)/iv);
    });
    await step("Adjust visible history count", async () => {
      const showSelect = canvas.getByRole("combobox");
      await userEvent.selectOptions(showSelect, "10");
      void expect(showSelect).toHaveValue("10");
      const summary = await canvas.findByText(/0 of 24 records/i);
      void expect(summary).toHaveTextContent(/\\(down filter\\)/iv);
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selectedMonitor: outageMonitor
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    selectedMonitor: emptyHistoryMonitor
  },
  parameters: {
    docs: {
      description: {
        story: "Illustrates a brand new monitor where checks have not yet produced any history records."
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`DefaultHistory`,`RecentOutage`,`EmptyHistory`]}))();export{m as DefaultHistory,g as EmptyHistory,h as RecentOutage,_ as __namedExportsOrder,p as default};