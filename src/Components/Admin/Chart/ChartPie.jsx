import {Cell, Label, LabelList, Pie,PieChart , Tooltip } from 'recharts';
import Title from '../../Utility/Title-more';

const colors = ['#25c1a3','#98a1d3','#9f0fff','#ca9ad3','#00f9ff','#98a1d3','transparent']
const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group G",
      "value":2
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    },
   
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];
      
  

const renderLineChart = (
  <PieChart width={450} height={450} >
    <Label value="Pages of my website" offset={0} position="insideBottom" />

    <LabelList data={data01} dataKey="name" position="center" />
    <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={110} fill="#0d6efd" >
    {
      data01.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
        ))
      }
    </Pie>
      <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={100} outerRadius={150} fill="#35c1d3" label />
      <Tooltip />
  </PieChart>
);

function ChartPie() {
  return (
    <>
    <Title title={'الارباح الشهرية'} />
      {renderLineChart}
    </>
  )
}

export default ChartPie