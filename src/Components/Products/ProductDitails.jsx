import { Col, Container,Button } from 'react-bootstrap'
import {Link } from 'react-router-dom'

function ProductDitails({cat,title,describtion,price,colors,brand,quantity}) {

  return (
    <Col sm='8' lg="8">
        <Container>
    <div className='d-flex mt-3 flex-column justify-content-start' style={{minHeight:'670px'}}>
            
    <div>
        <h4>التصنيف :<span className='text-danger fw-bold'> {cat}</span></h4>
        <h4>الاسم : <span className='text-success fw-bold'>{title}</span></h4>
    </div>
    <div className='my-3'>
        <h4 className='my-3'>الماركة :<span className='text-danger fw-bold'> {brand}</span></h4>
        <h4 className='my-3'>الكمية المتاحة :<span className='text-primary fw-bold '> {quantity}</span></h4>
        <h4 className='my-3'>الألوان المتاحة : </h4>
        <div className='d-flex gap-3'>
            {
                colors && colors.map(e=>
                    <label style={{width:'20px',height:'20px',borderRadius:'50%',backgroundColor:e}}></label>
                    
                )
            }

        </div>
    </div>
    <div className='mb-5'>
        <h4>المواصفات:</h4>
        <span> {describtion}</span>
    </div>
    <div className='d-flex gap-3'>
        <Button variant='light'>{price} جنية</Button>
        <Link to='/cartShoping/'><Button variant='dark'>أضف للعربة</Button></Link>
    </div>
    </div>
        </Container>
        </Col>
  )
}

export default ProductDitails