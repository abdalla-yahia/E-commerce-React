import { Container, Row } from "react-bootstrap"
import ProductCart from "../Products/ProductCart"
import * as Pic from '../../Assets'
function AdminProducts() {
  return (
    <Container>
        <Row>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
            <ProductCart contr={true} img={Pic.prod1} title={'لابتوب'}Description={'أي كلام مش مهم '}price={'4500 جنية'} rating={4.5}/>
        </Row>
    </Container>
  )
}

export default AdminProducts