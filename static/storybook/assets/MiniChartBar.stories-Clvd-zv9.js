import{i as e}from"./preload-helper-CT_b8DTk.js";import{t}from"./jsx-runtime-DqZldVDK.js";import{n,t as r}from"./MiniChartBar-D_rZhQj4.js";var i,a,o,s,c;e((()=>{n(),i=t(),a={args:{responseTime:120,status:`up`,timestamp:new Date().toISOString()},component:r,parameters:{layout:`centered`},tags:[`autodocs`]},o={},s={render:()=>{let e=Date.now();return(0,i.jsx)(`div`,{style:{alignItems:`flex-end`,display:`flex`,gap:`0.5rem`},children:[{responseTime:95,status:`up`},{responseTime:110,status:`up`},{responseTime:220,status:`degraded`},{status:`down`},{status:`pending`},{responseTime:105,status:`up`},{responseTime:92,status:`up`},{responseTime:88,status:`up`},{responseTime:215,status:`degraded`},{responseTime:100,status:`up`}].map((t,n)=>{let a=new Date(e-n*6e4).toISOString();return t.responseTime===void 0?(0,i.jsx)(r,{status:t.status,timestamp:a},`${a}-${t.status}`):(0,i.jsx)(r,{responseTime:t.responseTime,status:t.status,timestamp:a},`${a}-${t.status}`)})})}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const baseTimestamp = Date.now();
    const timeline: readonly {
      readonly responseTime?: number;
      readonly status: MiniChartBarProperties["status"];
    }[] = [{
      responseTime: 95,
      status: "up"
    }, {
      responseTime: 110,
      status: "up"
    }, {
      responseTime: 220,
      status: "degraded"
    }, {
      status: "down"
    }, {
      status: "pending"
    }, {
      responseTime: 105,
      status: "up"
    }, {
      responseTime: 92,
      status: "up"
    }, {
      responseTime: 88,
      status: "up"
    }, {
      responseTime: 215,
      status: "degraded"
    }, {
      responseTime: 100,
      status: "up"
    }];
    return <div style={{
      alignItems: "flex-end",
      display: "flex",
      gap: "0.5rem"
    }}>
                {timeline.map((entry, index) => {
        const timestamp = new Date(baseTimestamp - index * 60_000).toISOString();
        if (entry.responseTime === undefined) {
          return <MiniChartBar key={\`\${timestamp}-\${entry.status}\`} status={entry.status} timestamp={timestamp} />;
        }
        return <MiniChartBar key={\`\${timestamp}-\${entry.status}\`} responseTime={entry.responseTime} status={entry.status} timestamp={timestamp} />;
      })}
            </div>;
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Timeline`]}))();export{o as Default,s as Timeline,c as __namedExportsOrder,a as default};