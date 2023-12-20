import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsOfBrand } from '../../Redux/Actions/ProductsActions'
import { ProductCart } from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'

function ProductsOfBrand() {
    const {id} = useParams()
    const products = useSelector(state=>state.products.productsBrands)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProductsOfBrand(id))
    },[id])
  return (
    <>
    <Container>
        <Row>
        <Col style={{minHeight:'667px'}} className='d-flex gap-3 py-3 text-center justify-content-center align-items-center'>

            
    {
        products.results > 0 ? products.data.map((e,i)=>
<ProductCart key={i} img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.ratingsQuantity} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
        ):<h1>لا يوجد منتجات على هذه الماركة🙃</h1>
    }
    </Col>
</Row>
</Container>
    </>
  )
}

export default ProductsOfBrand