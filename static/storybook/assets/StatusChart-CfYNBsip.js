var p=Object.defineProperty;var r=(e,a)=>p(e,"name",{value:a,configurable:!0});import{j as m}from"./jsx-runtime-BHIWlbBZ.js";import{r as u,c}from"./iframe-K4-Qd2g0.js";import{B as d,C as l,f as h,h as g,l as f,j as C,a as x,p as b}from"./index-B7VklT5B.js";l.register(h,g,f,C,x,b);const i=u.memo(r(function(a){const t=c.c(3),{data:o,options:s}=a;let n;return t[0]!==o||t[1]!==s?(n=m.jsx(d,{data:o,options:s}),t[0]=o,t[1]=s,t[2]=n):n=t[2],n},"StatusChartComponent"));i.displayName="StatusChart";i.__docgenInfo={description:`Memoized status distribution bar chart component for monitoring status
visualization.

@remarks
Displays status distribution (up/down/pending) using a bar chart
visualization with Chart.js. The component is memoized to prevent unnecessary
re-renders when parent component updates, providing optimal performance for
frequent status updates in monitoring contexts.

@example

\`\`\`tsx
<StatusChart data={statusDistributionData} options={barChartOptions} />;
\`\`\`

@param props - The component properties containing data and options for the
  chart.

@returns Memoized bar chart component.

@public`,methods:[],displayName:"StatusChart"};export{i as S};
