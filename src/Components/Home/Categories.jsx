import { Col, Container, Row } from "react-bootstrap"
import {ElementCategory} from "../.";
import Title from "../Utility/Title-more";
import getAllCategories from "../../Redux/Actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Colors = ['#26a69a','#8d6e63','#e57373','#f48fb1','#81c784','#aed581','#7e57c2','#fff176','#7986cb']
function Categories({title}) {
  
  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories.categories)
  

useEffect(()=>{
dispatch(getAllCategories())
},[dispatch])
  


  return (
    <>
    <Container >
      { title === undefined ?(<Title title={'التصنيفات'} status={true} more={'....المزيد'} path={'/allcategory'}/>)
      :null}
        <Row >
        <Col  lg='12'  style={{backgroundColor:'#fff'}} className='d-flex p-3 flex-wrap justify-content-between align-items-center'>
                {
                categories.data && categories.data.slice(0,6).map((item,index)=>(
                    <ElementCategory key={index} img={item.image}  title={item.name} color={Colors[Math.floor(Math.random() * Colors.length)]}/>
                  ))
                }
            </Col>
        </Row>

    </Container>
            
                </>
  )
}

export default Categories