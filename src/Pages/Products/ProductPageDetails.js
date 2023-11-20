import React from 'react'
import * as Comp from '../../Components'
import { Container, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
function ProductPageDetails() {
  return (
    <div style={{minHeight:'670px'}}>
    <Comp.SubNav />
    <Container>
      <Row>
    <Comp.ProductsImgSlider />
      <Comp.ProductDitails/>
      </Row>
      <Row>
        <Comp.ProductComments />
      </Row>
      <Row>
        <Comp.Title title={'منتجات قد تعجبك'}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod3} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.prod1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod4} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile2} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod3} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.prod1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
      </Row>
    </Container>
    </div>
  )
}

export default ProductPageDetails