import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import AdminChart from './AdminChart'

function AdminHomePage() {
  return (
    <Container>
  <Row>
<Col sm='4' lg='3' md='4' xs='4'>
<Comp.AdminTitle title={'القائمة الرئيسية'}/>
</Col>
<Col sm='8' lg='9' md='8' xs='8'>
<Comp.Title title={' التقرير البياني '}/>
</Col>
</Row>
        <Row className='flex-nowrap'>
            <Col sm='3' lg='2' md='3' xs='3'>
            <Comp.AdminSideBar />
            </Col>
            <Col sm='9' lg='10' md='9' xs='9'>
            <AdminChart />
            </Col>
        </Row>
    </Container>
  )
}

export default AdminHomePage