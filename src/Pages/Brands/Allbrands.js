import getAllBrandsHook, { GetBrandByPAge } from '../../Redux/Actions/BrandsActions';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Pagination, Title,BrandCard, SubNav,Loading } from '../../Components'
import { Container, Row } from 'react-bootstrap'

function Allbrands() {

  const [ID, setId] = useState('')
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.brands.brands.data)
  const loading = useSelector((state) => state.brands.loading)
  const countOfpages = useSelector((state) => state.brands.brands)
  
  let pages =0
  useEffect(() => {
    dispatch(getAllBrandsHook(10))
  }, [pages,dispatch,ID])

  const getId =(id)=>{
    setId(id)
  }
  let pg = (e)=>{
  dispatch(GetBrandByPAge(e,10))
  }
  if(countOfpages.paginationResult){
    pages = countOfpages.paginationResult.numberOfPages
  }
  return (
    <>
    <Container>
    <SubNav/>
    <Title status={false} title={'كل الماركات'} />
    <Row> 

      {loading === false ?
      (brands ? brands.map((e,i) =>

            <BrandCard getId={getId} img={e.image} title={e.name} id={e._id}/>
           
            ):<h1>لا يوجد ماركات</h1>) :
            <Loading />
          }
    
    </Row>
    <Pagination pages={pages} pg={pg}/>
    </Container>
</>
  )
}

export default Allbrands