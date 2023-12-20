import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook'

function ProductsSerchResult() {
    const [products] = GetAllproductsHook()
    const productsResults = useSelector(state=>state.products.productsInSearch)
    const [prod,setProd]= useState([])

//Get all products in the search results using the specified words
    useEffect(()=>{
        if(products.data && productsResults !==''){
           let res=  products.data.map(e=>e.title.includes(productsResults) ?e:'')
           setProd(res.filter(e=>e!==''))
        }else{
            setProd([])
        }
    },[productsResults])


  return (
    [prod]
  )
}

export default ProductsSerchResult