import React from 'react'
import { SubNav,DrobDown,SubTitleProducts, AsideFilter, Pagination, ProductCart } from '../../Components'
import { Col, Container, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'

function ShopingProductsPage() {
  return (
    <>
    <Container>
    <Row>
    <SubNav />
    <div className='d-flex justify-content-between'>
      <SubTitleProducts/>
      <DrobDown/>
    </div>
      <Col lg='2' sm={2}>
    <AsideFilter />
      </Col>
    <Col lg='10' sm='10'>
      <Container sm={10} className='d-flex flex-lg-wrap'>
        <Row >
          
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>
    <ProductCart img={Pic.Prod3}  Description={'أفخم طقم لست العرايس خامة مستوردة'} price={'4250جنيه '} rating={4.3}/>

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