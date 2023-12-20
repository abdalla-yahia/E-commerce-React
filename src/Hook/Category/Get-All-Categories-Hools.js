import getAllCategories,{getCategoriesByPg} from "../../Redux/Actions/CategoryActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function GetAllCategoriesHooks() {

    const [ID,setID] = useState('')
    const categories = useSelector(state=>state.categories.categories)
    const dispatch = useDispatch()
  
  
    const getID =(id)=>{
      setID(id)
    }
    let pages = 0
    
    useEffect(()=>{
      dispatch(getAllCategories())
    },[dispatch,pages,ID])
    
    const pg =(e)=>{
      dispatch(getCategoriesByPg(e,5))
    }
    if(categories.paginationResult){
      pages = categories.paginationResult.numberOfPages
    }
  return (
    [pages,ID,getID,pg,getAllCategories,getCategoriesByPg,categories]
  )
}

export default GetAllCategoriesHooks