import { Legend, RadialBar, RadialBarChart, Tooltip } from "recharts"
import Title from "../../Utility/Title-more"

function ChartRadiaBar() {
    const data = [
        {
          "name": "18-24",
          "uv": 31.47,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        {
          "name": "50+",
          "uv": -2.63,
          "pv": 4800,
          "fill": "#d0ed57"
        },
        {
          "name": "unknow",
          "uv": 6.67,
          "pv": 4800,
          "fill": "#ffc658"
        }
      ]
      
    const radiabar = (
        <RadialBarChart 
  width={730} 
  height={450} 
  innerRadius="20%" 
  outerRadius="80%" 
  data={data} 
  startAngle={0} 
  endAngle={180}
  barSize={20}
>
  <RadialBar minAngle={15} label={{ fill: 'black', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
    )
  return (
    <>
    <Title title={'المنتجات المتاحة'}/>
    {radiabar}
    </>
  )
}

export default ChartRadiaBar