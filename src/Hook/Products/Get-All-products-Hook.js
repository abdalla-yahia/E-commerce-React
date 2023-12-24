import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../../Redux/Actions/ProductsActions';

function GetAllproductsHook() {
  const [sort,setSort] = useState('')
    const products = useSelector(state=>state.products.products)
    const productsInSearch = useSelector(state=>state.products.productsInSearch)
    // const productsInFilter = useSelector(state=>state.products.productsCategory)
    const dispatch= useDispatch()
useEffect(()=>{
  setTimeout(()=>{
    setSort(productsInSearch)
  },50)
},[productsInSearch,dispatch])

    useEffect(()=>{
      if(sort !== ''){
        console.log(sort)
        if(sort==='السعر من الأقل إلى الأعلى'){
          dispatch(getAllProducts(`sort=+price`))
        } else if(sort==='السعر من الأعلى إلى الأقل'){
          dispatch(getAllProducts(`sort=-price`))
        }
      }else {
          // console.log(sort)
          dispatch(getAllProducts('sort='))
        }
      },[sort])
//  console.log(sort)
  return (
    [products]
  )
}

export default GetAllproductsHook