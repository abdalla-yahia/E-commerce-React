import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { CreateBrand } from '../../Redux/Actions/BrandsActions'
import { notify } from '../../Components'
import * as Pic from '../../Assets'

function CreateAnewBrand() {

const [img, setImage]=useState(Pic.avatar)
const [name,setName]=useState('')
const [path,setPath]=useState('')
const [loading,setLoading]=useState(true)


const dispatch = useDispatch()

const UploadFileHandeller =(e)=>{
  if(e.target.files[0]){
    const img = URL.createObjectURL(e.target.files[0])
    setImage(img)
    setPath(e.target.files[0])
  }
  
}
const formData = new FormData()
formData.append("name",name)
formData.append("image",path)

const UploadDataHandeller = async ()=>{
  if(name!== '' && (img!== undefined || img!== Pic.avatar)){
    setLoading(false)
    await dispatch(CreateBrand(formData))
    setLoading(true)
    setName('')
    setImage(Pic.avatar)
    notify('success')
 
}else 
notify('warning')
}
  return (
    [img,setImage,name,setName,UploadDataHandeller,UploadFileHandeller,loading]
  )
}

export default CreateAnewBrand