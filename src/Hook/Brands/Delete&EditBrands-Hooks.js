import {DeleteBrand,GetBrand} from '../../Redux/Actions/BrandsActions';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { notify } from '../../Components';


function DeleteEditBrandsHooks() {
    
  const [ID,setID] = useState('')
  const dispatch = useDispatch()




const GetBrandHandeller = async(id)=>{ 
  await dispatch(GetBrand(id))
}

const DeleteHandeller = (id)=>{
  dispatch(DeleteBrand(id))
  notify('success')
}
  return (
    [ID,setID, GetBrandHandeller, DeleteHandeller]
  )
}

export default DeleteEditBrandsHooks