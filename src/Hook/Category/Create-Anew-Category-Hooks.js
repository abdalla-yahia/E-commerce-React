import {useDispatch } from 'react-redux'
import {CreateCategory} from '../../Redux/Actions/CategoryActions';
import { useState } from 'react';
import * as Pic from '../../Assets'
import { notify } from '../../Components';

function CreateAnewCategoryHooks() {
    const dispatch = useDispatch();

const [name,setName] = useState('');
const [img,setImage] = useState(Pic.avatar)
const [path, setPath] = useState('')
const [loading,setLoading]=useState(true)

const UploadFileHandeller = (e)=>{
  if(e.target.files[0]){
    const img = URL.createObjectURL(e.target.files[0])
    setImage(img)
    setPath(e.target.files[0])
  }
}
const formDAta = new FormData()
formDAta.append("name",name)
formDAta.append("image",path)

const sendDataHandeller = async ()=>{
  if(name !== '' && (img !== undefined || img !== Pic.avatar)){
    setLoading(false)
  await dispatch(CreateCategory(formDAta))
  setLoading(true)
  notify('success')
  setName('')
  setImage(Pic.avatar)
}else notify('warning')
}
  return (
   [name,img,loading,setName,setImage,sendDataHandeller,UploadFileHandeller]
  )
}
export default CreateAnewCategoryHooks