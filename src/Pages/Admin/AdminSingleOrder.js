import { Col, Container, Row } from "react-bootstrap"
import { AdminSideBar, AdminTitle,AdminUserInfo,AdminSingleOrder as AdminsingleOrder, Title } from "../../Components"


function AdminSingleOrder() {
  return (
    <Container>
        <Row>
        <Col sm='4' lg='3' md='4' xs='4'>
    <AdminTitle title={'القائمة الرئيسية'}/>
    </Col>
    <Col sm='8' lg='9' md='8' xs='8'>

    <Title title={'تفاصيل الطلب رقم #323222'} />
    </Col>
        </Row>
    <Row >
        <Col sm='4' lg='3' md='4' xs='4'>
        <AdminSideBar />
        </Col>
        <Col sm='8' lg='9' md='8' xs='8'>
        <AdminsingleOrder />
        <AdminUserInfo/>
        </Col>
    </Row>
</Container>
  )
}

export default AdminSingleOrder