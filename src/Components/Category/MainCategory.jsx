import { Col, Container, Row } from "react-bootstrap"
import ElementCategory from "./ElementCategory";
import {prod1,Prod3,pic,mobile,clothe} from '../../Assets'
import Title from "../Utility/Title-more";

function MainCategory() {
  return (
    <Container >
        <Title title={'التصنيفات'} status={true} more={'....المزيد'} path={'/allcategory'}/>
        <Row >
        <Col  lg='12'  style={{backgroundColor:'#fff'}} className='d-flex p-3 flex-wrap justify-content-center align-items-center'>

                <ElementCategory title={'تخفيضات'} img={prod1} color={'#Fd4'}/>
            
                <ElementCategory title={'تخفيضات'} img={Prod3} color={'#2d4'}/>
            
                <ElementCategory title={'تخفيضات'} img={pic} color={'#Cd4'}/>
            
                <ElementCategory title={'تخفيضات'} img={mobile} color={'#A54'}/>
            
                <ElementCategory title={'تخفيضات'} img={clothe} color={'#3dc'}/>
            
                <ElementCategory title={'تخفيضات'} img={pic} color={'#Fd4'}/>
            </Col>
        </Row>

    </Container>
  )
}

export default MainCategory