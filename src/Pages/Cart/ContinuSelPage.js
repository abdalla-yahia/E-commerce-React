import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../Components'
import { Link } from 'react-router-dom'

function ContinuSelPage() {
  return (
    <Container style={{minHeight:'670px'}}>
        <Title title={"اختر طريقة الدفع"}/>
        <Row>
            <Col lg={12}>
            <div className='d-flex flex-column gap-2 flex-start bg-light mt-5 p-5' >
                <div className='d-flex gap-2'>
            <input type='radio' id='payevisa' name='payemethod'/>
            <label htmlFor='payevisa'> <span style={{fontSize:'30px',fontWeight:'bolde',marginRight:'15px',marginTop:'35px'}}> إتمام الدفع عن طريق الفيزا</span></label>
                </div>
                <div>
            <input type='radio' id='payecash' name='payemethod'/>
            <label htmlFor='payecash'> <span style={{fontSize:'30px',fontWeight:'bolde',marginRight:'15px',marginTop:'35px'}} >الدفع عند الإستلام</span>  </label>
                </div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col lg='12'>
                <div className='d-flex mt-3 justify-content-end w-100'>
                <span className='btn border border-1 bg-light p-3'>3400 جنية</span>
                <Link to='/'>
                <button className='btn btn-dark mx-3 text-light p-3'>إتمام الشراء</button>
                </Link>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ContinuSelPage