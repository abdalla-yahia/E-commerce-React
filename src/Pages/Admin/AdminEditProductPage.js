import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../Redux/Actions/ProductsActions'


function AdminEditProductPage() {
  const {id} = useParams();
  const product = useSelector(state=>state.products.oneProduct)
  const dispatch =useDispatch();

  useEffect(()=>{
    dispatch(getProduct(id))

  },[id,dispatch])
    return (
        <Container>
             <Row>
          <Col sm='4' lg='3' md='4' xs='4'>
    
            <Comp.AdminTitle title={'القائمة الرئيسية'}/>
          </Col>
          <Col sm='8' lg='9' md='8' xs='8'>
            <Comp.Title title={`تعديل المنتج " ${product.data && product.data.title} "`}/>
          </Col>
          </Row>
            <Row className='flex-nowrap'>
                <Col sm='4' lg='3' md='4' xs='4'>
                <Comp.AdminSideBar />
                </Col>
                <Col sm='8' lg='9' md='8' xs='8'>
                <Comp.AdminEditProduct />
                </Col>
            </Row>
        </Container>
      )
}

export default AdminEditProductPage