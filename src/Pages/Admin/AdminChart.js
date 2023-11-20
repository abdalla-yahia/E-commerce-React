import { Row } from 'react-bootstrap'
import * as Chart from '../../Components'

function AdminChart() {
  return (
    <>
    <Row className='d-flex justify-content-center' style={{background:'#fff'}}>
    <Chart.ChartBar />
    <Chart.ChartLine/>
    <Chart.ChartPie/>
    <Chart.ChartRadar/>
    <Chart.ChartRadiaBar/>
    <Chart.ChartBar />
            
        </Row>
    </>
  )
}

export default AdminChart