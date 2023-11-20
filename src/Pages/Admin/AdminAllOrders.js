import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'


function AdminAllOrders() {
  return (
    <Container>
        <Comp.AdminTitle title={'القائمة الرئيسية'}/>
        <Row className='flex-nowrap'>
            <Col sm='3' lg='3' md='4' xs='4'>
            <Comp.AdminSideBar />
            </Col>
            <Col sm='9' lg='9' md='8' xs='8'>
            <Comp.AdminAllOrders />
            </Col>
        </Row>
    </Container>
  )
}

export default AdminAllOrders