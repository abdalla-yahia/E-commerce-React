import * as Comp from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'

function AdminAllBrands() {
  return (
    <Container>
    <Row>
<Col sm='4' lg='3' md='4' xs='4'>

<Comp.AdminTitle title={'القائمة الرئيسية'}/>
</Col>
<Col sm='8' lg='9' md='8' xs='8'>
<Comp.Title title={' كل الماركات  '}/>
</Col>
</Row>
<Row className='flex-nowrap'>
    <Col sm='3' lg='3' md='4' xs='4'>
    <Comp.AdminSideBar />
    </Col>
    <Col sm='9' lg='9' md='8' xs='8'>
    <Comp.Brands title={false} control={true}/>
    </Col>
</Row>
</Container>
  )
}

export default AdminAllBrands