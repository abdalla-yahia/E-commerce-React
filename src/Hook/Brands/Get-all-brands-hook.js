import{useEffect, useState} from 'react'
import getAllBrandsHook, {  GetBrandByPAge } from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';

function GetAllBrandsHooks() {
    
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

    [brands,pg,getId,pages]
    
  )
}

export default GetAllBrandsHooks
