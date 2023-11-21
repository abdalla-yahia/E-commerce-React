import { Col, Container, Row } from "react-bootstrap"
import ElementCategory from "./ElementCategory";
import Title from "../Utility/Title-more";
import getAllCategories from "../../Redux/Actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function MainCategory() {
  const data = useSelector(state=>state.categories.categories.data)
  const dispatch = useDispatch()
  
  useEffect(()=>{
      dispatch(getAllCategories())
  },[])
  return (
    <Container >
        <Title title={'التصنيفات'} status={true} more={'....المزيد'} path={'/allcategory'}/>
        <Row >
        <Col  lg='12'  style={{backgroundColor:'#fff'}} className='d-flex p-3 flex-wrap justify-content-center align-items-center'>
                {
                data && data.map((item,index)=>(
                    <ElementCategory key={index} img={item.image} color={item.color} title={item.name}/>
                  ))
                }
            </Col>
        </Row>

    </Container>
  )
}

export default MainCategory