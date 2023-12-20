import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductsSerchResult } from '../../Components'
import { getProductsOfCategory } from '../../Redux/Actions/ProductsActions'

function FilterProducts({id}) {
    const dispatch =useDispatch()
    const [prod]= ProductsSerchResult()
    const products = useSelector(state=>state.products.productsCategory)
    
    useEffect(()=>{
        dispatch(getProductsOfCategory(id))
    },[id])
  return (
    <div>Filter-Products</div>
  )
}

export default FilterProducts