import React from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import {ProductCart} from '../.'
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook'

function NewClothes() {
  const [products] = GetAllproductsHook()

  return (
    <>
            <Title status={true} more={'المزيد ....'} title={'أحدث الأزياء'} path={'/allproducts'}/>
        
            <Row>
            {
            products.data && products.data.slice(0,5).map((e,i)=>
              
                <ProductCart key={i} img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.rating} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
              
            )
          }
            </Row>
    </>
  )
}

export default NewClothes