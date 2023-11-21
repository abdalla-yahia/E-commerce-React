import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { Link } from 'react-router-dom'

function UserEditeAddress() {
  return (
    <Container>
    <Row>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserTitle title={'القائمة الرئيسية'}/>
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
  <Comp.Title title={'  إضافة عنوان جديد  '}/>
  </Col>
  </Row>
  <Row className='flex-nowrap'>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserSidebar />
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
    <Comp.UserAddNewAddress />
    <div className='w-100 d-flex justify-content-center align-items-center mb-5'>
    <Link to={'/userhomepage/userAdresses'}>
    <button className='btn btn-dark'>حفظ التعديلات  </button>
    </Link>
    </div>
  </Col>
  </Row>
  </Container>
  )
}

export default UserEditeAddress