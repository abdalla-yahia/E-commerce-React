import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'


function UserAllOrders() {
  return (
    <Container>
            <Row>
      <Col sm='4' lg='3' md='4' xs='4'>
        <Comp.UserTitle title={'القائمة الرئيسية'}/>
      </Col>
      <Col sm='8' lg='9' md='8' xs='8'>
        <Comp.Title title={' مرحباً : محمد على   '}/>
      </Col>
      </Row>
        <Row className='flex-nowrap'>
            <Col sm='3' lg='3' md='4' xs='4'>
            <Comp.UserSidebar />
            </Col>
            <Col sm='9' lg='9' md='8' xs='8'>
            <Comp.UserOrders />
            <Comp.UserOrders />
            <Comp.UserOrders />
            </Col>
        </Row>
    </Container>
  )
}

export default UserAllOrders