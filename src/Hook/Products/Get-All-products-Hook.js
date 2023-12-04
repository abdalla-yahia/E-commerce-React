import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllProducts } from '../../Redux/Actions/ProductsActions';

function GetAllproductsHook() {
    const products = useSelector(state=>state.products.products)
    const dispatch= useDispatch()
  
    useEffect(()=>{
      dispatch(getAllProducts())
    },[dispatch])
  
  return (
    [products]
  )
}

export default GetAllproductsHook