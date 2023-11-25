import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components/'

function AdminAllCategory() {
  return (
    <Container>
    <Row>
<Col sm='4' lg='3' md='4' xs='4'>

<Comp.AdminTitle title={'القائمة الرئيسية'}/>
</Col>
<Col sm='8' lg='9' md='8' xs='8'>
<Comp.Title title={' كل التصنيفات  '}/>
</Col>
</Row>
<Row className='flex-nowrap'>
    <Col sm='3' lg='3' md='4' xs='4'>
    <Comp.AdminSideBar />
    </Col>
    <Col sm='9' lg='9' md='8' xs='8'>
    <Comp.MainCategory control={true} title={true}/>
    </Col>
</Row>
</Container>

    
  )
}

export default AdminAllCategory