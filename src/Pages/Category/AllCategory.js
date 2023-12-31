import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { useSelector,useDispatch } from 'react-redux'
import getAllCategories,{getCategoriesByPg} from '../../Redux/Actions/CategoryActions'

const Colors = ['#26a69a','#8d6e63','#e57373','#f48fb1','#81c784','#aed581','#7e57c2','#fff176','#7986cb']
function AllCategory() {
  const [ID,setID]=useState('')
  const categories = useSelector(state=>state.categories.categories)
  const loading =useSelector(state=>state.categories.loading)
  const countOfpages =useSelector(state=>state.categories.categories)
  
  const dispatch = useDispatch()
  
  const getId = (id)=>{
    setID(id)
  }
  
  let pages=0

  useEffect(()=>{
    dispatch(getAllCategories(5))
  },[pages,dispatch,ID])
  
  let pg = (el)=>{
    dispatch(getCategoriesByPg(el,5))
  }

   if(countOfpages.paginationResult){
  pages = countOfpages.paginationResult.numberOfPages
  }
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
        
        {loading === false?
        
        (categories.data? categories.data.map((e,i)=>
        <Comp.ElementCategory getID={getId} key={i} id={e._id} img={e.image} title={e.name} color={Colors[Math.floor(Math.random() * Colors.length)]}/>
        )
        :<h1>لا يوجد تصنيفات</h1>)
        :<Comp.Loading />
        } 

        </Col>
    <Comp.Pagination pages={pages} pg={pg}/>
        </Row>
        
    </Container>
    </>
  )
}

export default AllCategory