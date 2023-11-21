import { Col, Container, Row } from 'react-bootstrap'
import { AdminAddSubCategory, AdminSideBar, AdminTitle, Title } from '../../Components'

function AdminSubCategory() {
  return (
    <Container>
      <Row>
      <Col sm='4' lg='3' md='4' xs='4'>

        <AdminTitle title={'القائمة الرئيسية'}/>
      </Col>
      <Col sm='8' lg='9' md='8' xs='8'>

        <Title title={'اضافة تصنيف فرعي'}/>
      </Col>
      </Row>


        <Row className='flex-nowrap'>
            <Col sm='4' lg='3' md='4' xs='4'>
            <AdminSideBar />
            </Col>
            <Col sm='8' lg='9' md='8' xs='8'>
            <AdminAddSubCategory />
            </Col>
        </Row>
    </Container>
  )
}


export default AdminSubCategory