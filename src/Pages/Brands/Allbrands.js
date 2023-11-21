import getAllBrandsReducer from '../../Redux/Actions/BrandsActions';
import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Pagination, Title,BrandCard, SubNav,Loading } from '../../Components'
import { Container, Row } from 'react-bootstrap'

function Allbrands() {
  const [page, setPage] = useState(0)
  const dispatch = useDispatch()
  const brands = useSelector((state) => state.brands.brands.data)
  const loading = useSelector((state) => state.brands.loading)
  const countOfpages = useSelector((state) => state.brands.brands)
  
  useEffect(() => {
    dispatch(getAllBrandsReducer(page,1))
  }, [page,dispatch])
  
  let pg = (e)=>{
    setPage(e)
  }
  let pages =1
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
      (brands ? brands.slice(0,6).map((e,i) =>
            <BrandCard img={e.image} title={e.name}/>
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