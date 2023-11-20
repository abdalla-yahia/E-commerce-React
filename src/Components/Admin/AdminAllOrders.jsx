import React from 'react'
import {CartItem} from '../.'
import { Link } from 'react-router-dom'

function AdminAllOrders() {
  return (
    <>
    <Link to={'/adminhomepage/adminallorders/order/32'} className='text-decoration-none text-dark'>
    <CartItem  orderNum={true}/>
    </Link>
    <Link to={'/adminhomepage/adminallorders/order/32'} className='text-decoration-none text-dark'>
    <CartItem  orderNum={true}/>
    </Link>
    <Link to={'/adminhomepage/adminallorders/order/32'} className='text-decoration-none text-dark'>
    <CartItem  orderNum={true}/>
    </Link>
    <Link to={'/adminhomepage/adminallorders/order/32'} className='text-decoration-none text-dark'>
    <CartItem  orderNum={true}/>
    </Link>

  
    </>
  )
}

export default AdminAllOrders