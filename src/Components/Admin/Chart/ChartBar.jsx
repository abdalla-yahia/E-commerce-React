
import {Bar, BarChart, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
import Title from '../../Utility/Title-more';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
{name: 'Page B', uv: 1500, pv: 2500, amt: 2400},
{name: 'Page C', uv: 2600, pv: 3400, amt: 2400},
{name: 'Page D', uv: 700, pv: 4400, amt: 2400},
{name: 'Page E', uv: 3800, pv: 5400, amt: 2400},
{name: 'Page F', uv: 7900, pv: 6400, amt: 2400},
{name: 'Page G', uv: 1000, pv:7400, amt: 2400},
];

const renderLineChart = (
  <BarChart width={700} height={400} data={data}>
    <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
    <Tooltip />
    <Bar type="monotone" dataKey="pv"  fill='#198754' />
    <Bar type="monotone" dataKey="uv"  fill='#82ca9d' />
    <XAxis dataKey="name" />
    <YAxis  />
  </BarChart>
);

function ChartBar() {
  return (
    <>
    <Title title={'عمليات البيع'}/>
      {renderLineChart}
  
    </>
  )
}

export default ChartBar