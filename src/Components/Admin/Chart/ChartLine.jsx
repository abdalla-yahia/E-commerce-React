import {CartesianGrid, XAxis, YAxis,Tooltip, LineChart, Line } from 'recharts';
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
  <LineChart width={400} height={300} data={data}>
    <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
    <Tooltip />
    <Line type="monotone" dataKey="pv"  fill='#fce4ec' />
    <Line type="monotone" dataKey="uv"  fill='#00acc1' />
    <XAxis dataKey="name" />
    <YAxis  />
  </LineChart>
);

function ChartLine() {
  return (
    <>
    <Title title={'عدد الزائرين'} />
      {renderLineChart}
    </>
  )
}

export default ChartLine