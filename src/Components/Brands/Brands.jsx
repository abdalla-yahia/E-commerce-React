import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import BrandCard from './BrandCard'
import getAllBrandsHook, {  GetBrandByPAge } from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';
import Paginations from '../Utility/Pagination';

function Brands({title,control}) {
  const brands = useSelector(state => state.brands.brands)
  const dispatch = useDispatch()

  let pages = 0 

  useEffect(()=> {
    dispatch(getAllBrandsHook())
  }, [dispatch,pages])


const pg =(e)=>{
  dispatch(GetBrandByPAge(e,10))
}
if(brands.paginationResult){
pages = brands.paginationResult.numberOfPages
}
  return (
    <>
       {title === undefined? <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        :null
       }
       <Row>
        {brands.data && brands.data.map((brand, index) => (
          
            <BrandCard title={brand.name} key={index} img={brand.image} control={control} id={brand._id}/>
          
            ))}
            <Paginations pages={pages} pg={pg}/>
        </Row>
        
   
    </>
  )
}

export default Brands