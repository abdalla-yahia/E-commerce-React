import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, RadarChart,Legend, Radar } from 'recharts'
import Title from '../../Utility/Title-more'

function ChartRadar() {
    const data = [
        {
          "subject": "Math",
          "A": 120,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "Chinese",
          "A": 98,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "English",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "Geography",
          "A": 99,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "Physics",
          "A": 85,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "History",
          "A": 65,
          "B": 85,
          "fullMark": 150
        }
      ]
  const radar=(  
  <RadarChart outerRadius={190} width={930} height={450} data={data}>
  <PolarGrid />
  <PolarAngleAxis dataKey="subject" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="green" fillOpacity={.5} />
  <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="orange" fillOpacity={.5} />
  <Legend />
</RadarChart>)
  return (
    <>
    <Title title={'طلبات تحت التنفيذ'} />
    {radar}
    </>
  )
}

export default ChartRadar