
import * as Comp from '../../Components'
import { Col, Container, Pagination, Row } from 'react-bootstrap'

function SearchProductsPage() {
 
    const [prod]= Comp.ProductsSerchResult()
    
  let count = prod&& prod.length
  let title = count <=0 ?'لا يوجد منتجات متاحة' :count === 1 || count >=11?'منتج متاح' :'منتجات متاحة'
  return (
    <>
    <Container>
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
        <Row>
          
        {
            prod.length>=1 ? prod.map(e=>
            
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