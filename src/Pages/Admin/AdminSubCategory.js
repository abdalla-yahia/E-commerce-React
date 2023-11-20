import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar, AdminTitle } from '../../Components'

function AdminSubCategory() {
  return (
    <Container>
        <AdminTitle title={'القائمة الرئيسية'}/>
        <Row className='flex-nowrap'>
            <Col sm='4' lg='3' md='4' xs='4'>
            <AdminSideBar />
            </Col>
            <Col sm='8' lg='9' md='8' xs='8'>
            
            </Col>
        </Row>
    </Container>
  )
}


export default AdminSubCategory