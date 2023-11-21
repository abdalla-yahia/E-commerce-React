import { useEffect,useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { useSelector,useDispatch } from 'react-redux'
import getAllCategories from '../../Redux/Actions/CategoryActions'

function AllCategory() {
  const data = useSelector(state=>state.categories.categories.data)
  const loading =useSelector(state=>state.categories.loading)
  const countOfpages = useSelector(state=>state.categories.categories)
  const dispatch = useDispatch()
  const [page,setPage]=useState(0)
 
  useEffect(()=>{
    dispatch(getAllCategories(page,2))
  },[page,dispatch])
  
  let pg = (e)=>{
    setPage(e)
  }

  let pages =1
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
        (data? data.map(e=>
        <Comp.ElementCategory img={e.image} title={e.name} color={'#eed1ff'}/>)
      :<h1>لا يوجد تصنيفات</h1>)
      :<Comp.Loading />} 

        </Col>
        <Comp.Pagination pages={pages} pg={pg}/>
        </Row>
        
    </Container>
    </>
  )
}

export default AllCategory