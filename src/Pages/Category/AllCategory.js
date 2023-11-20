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

        <Col sm='3' lg='2' md='4'>
        <Comp.AsideFilter />
        </Col>

        <Col sm='9' lg='10' md='8' style={{backgroundColor:'#fff'}} className='d-flex flex-wrap justify-content-center align-items-center'>
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
        </Col>
        <Comp.Pagination/>
        </Row>
        
    </Container>
    </>
  )
}

export default AllCategory