import * as Comp from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'
import FilterProducts from '../../Hook/Products/Filter-Products-Hook'

function ShopingProductsPage() {
  const [,,,products,,,,,,,,,,,setPage] = FilterProducts()

let pg=(e)=>{
setPage(e)
}
  let count = products.data&&products.data.length
  let title = count <=0 ?'لا يوجد منتجات متاحة' :count === 1 || count >=11?'منتج متاح' :'منتجات متاحة'
  let pages=0;
  if(products.paginationResult){
    pages=products.paginationResult.numberOfPages
  }
  return (
    <div style={{minHeight:'776px'}}>
    <Container >
    <Row>
    <Comp.SubNav />
    <div className='d-flex justify-content-between'>
      <Comp.SubTitleProducts title={title} count={count}/>
      <Comp.DrobDown/>
    </div>
      <Col lg='2' sm={2}>
    <Comp.AsideFilter />
      </Col>
    <Col lg='10' sm='10'>
      <Container sm={10} className='d-flex flex-lg-wrap'>
        <Row >
          
        {
            products.data ? products.data.map((e,i)=>
              
                <Comp.ProductCart key={i} img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.rating} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
              
            ):
            <h1>لا يوجد منتجات متاحة 🙂</h1>
          }
        </Row>
      </Container>
    </Col>
    <Comp.Pagination pages={pages} pg={pg}/>
    </Row>
    </Container>
    </div>
  )
}

export default ShopingProductsPage