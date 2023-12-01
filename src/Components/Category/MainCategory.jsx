import { Col, Container, Row } from "react-bootstrap"
import ElementCategory from "./ElementCategory";
import Title from "../Utility/Title-more";
import getAllCategories,{getCategoriesByPg} from "../../Redux/Actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Paginations from "../Utility/Pagination";

const Colors = ['#26a69a','#8d6e63','#e57373','#f48fb1','#81c784','#aed581','#7e57c2','#fff176','#7986cb']
function MainCategory({title,control}) {
  const [ID,setID] = useState('')
  const categories = useSelector(state=>state.categories.categories)
  const dispatch = useDispatch()


  const getID =(id)=>{
    setID(id)
  }
  let pages = 0
  
  useEffect(()=>{
    dispatch(getAllCategories(5))
  },[dispatch,pages,ID])
  
  const pg =(e)=>{
    dispatch(getCategoriesByPg(e,5))
  }
  if(categories.paginationResult){
    pages = categories.paginationResult.numberOfPages
  }

  return (
    <>
    <Container >
      { title === undefined ?(<Title title={'التصنيفات'} status={true} more={'....المزيد'} path={'/allcategory'}/>)
      :null}
        <Row >
        <Col  lg='12'  style={{backgroundColor:'#fff'}} className='d-flex p-3 flex-wrap justify-content-between align-items-center'>
                {
                categories.data && categories.data.map((item,index)=>(
                    <ElementCategory getID={getID} control={control} id={item._id} key={index} img={item.image}  title={item.name} color={Colors[Math.floor(Math.random() * Colors.length)]}/>
                  ))
                }
            </Col>
            <Paginations pages={pages}  pg={pg}/>
        </Row>

    </Container>
                </>
  )
}

export default MainCategory