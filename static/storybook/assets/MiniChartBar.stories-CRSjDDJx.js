var u=Object.defineProperty;var p=(r,a)=>u(r,"name",{value:a,configurable:!0});import{j as i}from"./jsx-runtime-BHIWlbBZ.js";import{M as m}from"./MiniChartBar-CfVMnEXs.js";import"./iframe-K4-Qd2g0.js";import"./preload-helper-Cc2_yIPf.js";import"./time-Bhs5MBei.js";import"./fallbacks-DKLmo1O9.js";import"./useTheme-wgAn8pNf.js";import"./storeErrorHandling-CxXe-kGL.js";import"./react-7wigyp5a.js";import"./EventsService-BeKrLUQ9.js";const D={component:m,args:{status:"up",timestamp:new Date().toISOString(),responseTime:120},parameters:{layout:"centered"},tags:["autodocs"]},t={},n={render:p(()=>{const r=Date.now(),a=[{status:"up",responseTime:95},{status:"up",responseTime:110},{status:"degraded",responseTime:220},{status:"down"},{status:"pending"},{status:"up",responseTime:105},{status:"up",responseTime:92},{status:"up",responseTime:88},{status:"degraded",responseTime:215},{status:"up",responseTime:100}];return i.jsx("div",{style:{display:"flex",gap:"0.5rem",alignItems:"flex-end"},children:a.map((e,o)=>{const s=new Date(r-o*6e4).toISOString();return e.responseTime===void 0?i.jsx(m,{status:e.status,timestamp:s},`${s}-${e.status}`):i.jsx(m,{responseTime:e.responseTime,status:e.status,timestamp:s},`${s}-${e.status}`)})})},"render")};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: (): JSX.Element => {
    const baseTimestamp = Date.now();
    const timeline: ReadonlyArray<{
      readonly responseTime?: number;
      readonly status: MiniChartBarProperties["status"];
    }> = [{
      status: "up",
      responseTime: 95
    }, {
      status: "up",
      responseTime: 110
    }, {
      status: "degraded",
      responseTime: 220
    }, {
      status: "down"
    }, {
      status: "pending"
    }, {
      status: "up",
      responseTime: 105
    }, {
      status: "up",
      responseTime: 92
    }, {
      status: "up",
      responseTime: 88
    }, {
      status: "degraded",
      responseTime: 215
    }, {
      status: "up",
      responseTime: 100
    }];
    return <div style={{
      display: "flex",
      gap: "0.5rem",
      alignItems: "flex-end"
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
}`,...n.parameters?.docs?.source}}};const h=["Default","Timeline"];export{t as Default,n as Timeline,h as __namedExportsOrder,D as default};
