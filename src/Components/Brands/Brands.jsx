import React,{useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import BrandCard from './BrandCard'
import getAllBrandsHook, {  GetBrandByPAge } from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';
import Paginations from '../Utility/Pagination';

function Brands({title,control}) {
  const [ID,setID]=useState('')
  const brands = useSelector(state => state.brands.brands)
  
  const dispatch = useDispatch()
  let pages = 0 

  const getId = (id) => {
    setID(id)
  }

  useEffect(()=> {
    dispatch(getAllBrandsHook(6))
  }, [dispatch,pages,ID])
  
  const pg =(e)=>{
    dispatch(GetBrandByPAge(e,6))
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
          
            <BrandCard getId={getId} title={brand.name} key={index} img={brand.image} control={control} id={brand._id}/>
          
            ))}
        </Row>
            <Paginations pages={pages} pg={pg}/>
        
   
    </>
  )
}

export default Brands