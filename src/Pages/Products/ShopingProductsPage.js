import React from 'react'
import { SubNav,DrobDown,SubTitleProducts, AsideFilter, Pagination, ProductCart } from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook'

function ShopingProductsPage() {
  const [products] = GetAllproductsHook()
  let count = products.data&&products.data.length
  let title = count <=0 ?'لا يوجد منتجات متاحة' :count === 1 || count >=11?'منتج متاح' :'منتجات متاحة'
  return (
    <>
    <Container>
    <Row>
    <SubNav />
    <div className='d-flex justify-content-between'>
      <SubTitleProducts title={title} count={count}/>
      <DrobDown/>
    </div>
      <Col lg='2' sm={2}>
    <AsideFilter />
      </Col>
    <Col lg='10' sm='10'>
      <Container sm={10} className='d-flex flex-lg-wrap'>
        <Row >
          
        {
            products.data && products.data.map(e=>
              
                <ProductCart img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.rating} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
              
            )
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

export default ShopingProductsPage