import React from 'react'
import {Container } from 'react-bootstrap'
import {laptops} from '../../Assets'
function Discount() {
  return (
    <Container className='p-5 mb-5 mt-5 d-flex justify-content-between bg-dark-50 align-items-center' style={{height:'150px',color:'white'}}>
        <h3 className='text-dark-50'>خصم يصل إلى 30% </h3>
        <img src={laptops} alt="laptops" width={300} fluid/>
        
    </Container>
  )
}

export default Discount