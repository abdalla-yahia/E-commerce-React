
import * as Comp from '../../Components'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook'
import { useState } from 'react'

function SearchProductsPage() {
 
    // const [prod]= Comp.ProductsSerchResult()
    const [sort,setSort]= useState('')
    const [products] = GetAllproductsHook(sort)
  let count = products&& products.length
  let title = count <=0 ?'لا يوجد منتجات متاحة' :count === 1 || count >=11?'منتج متاح' :'منتجات متاحة'
  var getSort = (e)=>{
    console.log('sort')
  }
  return (
    <>
    <Container>
    <Row>
    <Comp.SubNav />
    <div className='d-flex justify-content-between'>
      <Comp.SubTitleProducts  title={title} count={count}/>
      <Comp.DrobDown Sort={getSort}/>
    </div>
      <Col lg='2' sm={2}>
    <Comp.AsideFilter />
      </Col>
    <Col lg='10' sm='10'>
      <Container sm={10} className='d-flex flex-lg-wrap'>
        <Row>
          
        {
            products.length>=1 ? products.map(e=>
            
                <Comp.ProductCart img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.rating} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
                )
                :<h1> لا يوجد منتجات فى نتيجة البحث...😞</h1>
          }
        </Row>
      </Container>
    </Col>
    <Pagination/>
    </Row>
    </Container>
    </>
  )
}

export default SearchProductsPage