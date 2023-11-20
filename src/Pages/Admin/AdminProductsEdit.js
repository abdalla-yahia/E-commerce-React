import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'

function AdminProductsEdit() {
  return (
    <Container>
        <Comp.AdminTitle title={'القائمة الرئيسية'}/>
        <Row className='flex-nowrap'>
            <Col sm='4' lg='3' md='4' xs='4'>
            <Comp.AdminSideBar />
            </Col>
            <Col sm='8' lg='9' md='8' xs='8'>
            <Comp.AdminProducts />
            <Comp.Pagination />
            </Col>
        </Row>
    </Container>
  )
}

export default AdminProductsEdit