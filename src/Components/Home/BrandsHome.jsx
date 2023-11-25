import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import {BrandCard} from '../.'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';

function BrandsHome({title}) {
  const brands = useSelector(state => state.brands.brands)
  const dispatch = useDispatch()

  
  useEffect(()=> {
    dispatch(getAllBrandsHook())
    
  }, [dispatch])



  return (
    <>
       {title === undefined? <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        :null
       }
       <Row>
        {brands.data && brands.data.slice(0,6).map((brand, index) => (
          
            <BrandCard title={brand.name} key={index} img={brand.image} />
          
            ))}
        </Row>
        
   
    </>
  )
}

export default BrandsHome