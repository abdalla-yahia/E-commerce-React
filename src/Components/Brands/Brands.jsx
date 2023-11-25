import React,{useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import BrandCard from './BrandCard'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';
import Paginations from '../Utility/Pagination';

function Brands({title,control}) {
  const brands = useSelector(state => state.brands.brands)
  const dispatch = useDispatch()

  const [bagNum,setbagNum] = useState(0)
  
  const page = bagNum
  useEffect(()=> {
    dispatch(getAllBrandsHook(page ,10))
    
  }, [dispatch,bagNum])


const pg =(e)=>{
  setbagNum(e)
}
let pages = 0 
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