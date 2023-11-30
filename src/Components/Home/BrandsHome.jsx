import React,{useEffect, useState} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import {BrandCard} from '../.'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';

function BrandsHome({title}) {
  const [ID,setID]= useState('')
  const brands = useSelector(state => state.brands.brands)
  const dispatch = useDispatch()

  const getID = (id) => {
    setID(id)
  }
  
  useEffect(()=> {
    dispatch(getAllBrandsHook(10))
    
  }, [dispatch,ID])



  return (
    <>
       {title === undefined? <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        :null
       }
       <Row>
        {brands.data && brands.data.slice(0,6).map((brand, index) => (
          
            <BrandCard getId={getID} title={brand.name} key={index} img={brand.image} id={brand._id}/>
          
            ))}
        </Row>
        
   
    </>
  )
}

export default BrandsHome