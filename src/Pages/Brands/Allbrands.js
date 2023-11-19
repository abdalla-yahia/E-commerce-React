
import {Pagination, Title,BrandCard, SubNav } from '../../Components'
import * as Pic from '../../Assets'
import { Container, Row } from 'react-bootstrap'
function Allbrands() {
  return (
    <>
    <Container>
    <SubNav/>
    <Title status={false} title={'كل الماركات'} />
    <Row>
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand3} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand3} />
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand3} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand3} />
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand3} />
            <BrandCard img={Pic.brand2} />
            <BrandCard img={Pic.brand1} />
            <BrandCard img={Pic.brand3} />
    
    </Row>
    <Pagination />
    </Container>
</>
  )
}

export default Allbrands