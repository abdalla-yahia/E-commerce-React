import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminTitle,AdminSideBar } from '../../Components'
import AdminChart from './AdminChart'

function AdminHomePage() {
  return (
    <Container>
        <AdminTitle title={'القائمة الرئيسية'}/>
        <Row className='flex-nowrap'>
            <Col sm='4' lg='3' md='4' xs='4'>
            <AdminSideBar />
            </Col>
            <Col sm='8' lg='9' md='8' xs='8'>
            <AdminChart />
            </Col>
        </Row>
    </Container>
  )
}

export default AdminHomePage