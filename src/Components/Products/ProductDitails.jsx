import { Col, Container,Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'

function ProductDitails({cat,details,describtion,price,color}) {
  return (
    <Col sm='8' lg="9">
        <Container>
    <div className='d-flex mt-3 flex-column justify-content-start' style={{minHeight:'670px'}}>
            
    <div>
        <h5>الكترونيات:</h5>
        <span>جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة</span>
    </div>
    <div className='my-5'>
        <h4>الماركة : سامسونج</h4>
        <div className='d-flex gap-3'>
            <label style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'red'}}></label>
            <label style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'gray'}}></label>
            <label style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:'black'}}></label>
        </div>
    </div>
    <div className='mb-5'>
        <h5>المواصفات:</h5>
        <span> ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
        جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة,
        جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة,
        جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة,
        ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
        ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
        ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
        ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
        ,جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة
            جهاز سامسونج نوع يعمل بافضل أداء مع شاشة سريعة الاتجابة</span>
    </div>
    <div className='d-flex gap-3'>
        <Button variant='light'>3400 جنية</Button>
        <Link to='/cartShoping'><Button variant='dark'>أضف للعربة</Button></Link>
    </div>
    </div>
        </Container>
        </Col>
  )
}

export default ProductDitails