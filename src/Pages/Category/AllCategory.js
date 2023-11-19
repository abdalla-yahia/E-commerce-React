import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import {prod1,Prod3,pic,mobile,clothe} from '../../Assets'

function AllCategory() {
  return (
    <>
    <Container >
        <Row>
      <Comp.SubNav/>
        <Comp.Title title={'كل التصنيفات'} status={false}/>
        <Col sm='3' lg='3'>
        <Comp.AsideFilter />
        </Col>
        <Col sm='9' lg='9'>
        <Container>
          <Row>
            <Comp.ElementCategory img={Prod3} title={'تخفيض'} color={'#111'}/>
            <Comp.ElementCategory img={pic} title={'تخفيض'} color={'#222'}/>
            <Comp.ElementCategory img={prod1} title={'تخفيض'} color={'#333'}/>
            <Comp.ElementCategory img={Prod3} title={'تخفيض'} color={'#444'}/>
            <Comp.ElementCategory img={mobile} title={'تخفيض'} color={'#555'}/>
            <Comp.ElementCategory img={clothe} title={'تخفيض'} color={'#666'}/>
            <Comp.ElementCategory img={clothe} title={'تخفيض'} color={'#777'}/>
            <Comp.ElementCategory img={mobile} title={'تخفيض'} color={'#888'}/>
            <Comp.ElementCategory img={pic} title={'تخفيض'} color={'#999'}/>
            <Comp.ElementCategory img={prod1} title={'تخفيض'} color={'#002'}/>
            <Comp.ElementCategory img={mobile} title={'تخفيض'} color={'#013'}/>
            <Comp.ElementCategory img={Prod3} title={'تخفيض'} color={'#022'}/>
          </Row>
        </Container>
        </Col>
        </Row>
        <Comp.Pagination/>
    </Container>
    </>
  )
}

export default AllCategory