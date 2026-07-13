import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./StatusBadge-DO7jS6Cd.js";var r,i,a,o,s,c;e((()=>{t(),r={args:{label:`Service`,showIcon:!0,size:`sm`,status:`up`},argTypes:{formatter:{control:!1},status:{control:`inline-radio`,options:[`up`,`pending`,`degraded`,`paused`,`down`]}},component:n,parameters:{layout:`centered`},tags:[`autodocs`]},i={args:{status:`up`}},a={args:{status:`pending`}},o={args:{status:`down`}},s={args:{showIcon:!1,status:`degraded`},parameters:{backgrounds:{default:`dark`}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "up"
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "pending"
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "down"
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    showIcon: false,
    status: "degraded"
  },
  parameters: {
    backgrounds: {
      default: "dark"
    }
  }
}`,...s.parameters?.docs?.source}}},c=[`Up`,`Pending`,`Down`,`WithoutIcon`]}))();export{o as Down,a as Pending,i as Up,s as WithoutIcon,c as __namedExportsOrder,r as default};