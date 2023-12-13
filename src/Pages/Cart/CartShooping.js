import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title,CartItem } from '../../Components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  getAllProductsinCart } from '../../Redux/Actions/ProductsActions'
function CartShooping() {


  const cartP = useSelector(state=>state.products.cartProducts)

  const dispatch = useDispatch()
let token = localStorage.getItem('token');

  useEffect(()=>{

    dispatch(getAllProductsinCart(token))

  },[dispatch])

console.log(cartP && cartP.data)


  return (
    <Container>
      <Title  title={'عربة التسوق'}/>
      <Row >
        <Col lg={9} sm={12} md='8'>
            <CartItem dell={true} count={true}/>
            <CartItem dell={true} count={true}/>
            <CartItem dell={true} count={true}/>
        </Col>
        <Col lg={3} sm={12} md='4' >
          <div className='d-flex bg-light px-2 py-3 rounded-4 flex-column w-100 text-center'>
          <span className='d-flex mb-3 flex-wrap'>
            <input  className='px-2 border w-75' type='text' placeholder='كود الخصم'/>
            <button  className='p-2 text-center border-radius-none bg-dark text-light border outline'>تطبيق</button>
          </span>

            <div  className='p-2 mb-3 w-100 border text-center'>3400 جنية </div>
            <Link to={'./countinuSel'}>
            <button className='p-2 text-center border-radius-none bg-dark text-light border outline'>إتمام عملية الشراء</button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CartShooping