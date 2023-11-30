import { Col, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { CreateBrand } from '../../Redux/Actions/BrandsActions'
import {Loading, TostifyLiprary,notify} from '../../Components';

function AdminAddBrand() {
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

    <Row>
        <Col>
        <div className='d-flex flex-column gap-3'>
        <div className='d-flex justify-content-between w-75'>
    <span>صورة الماركة</span>
    <span onClick={()=>setImage(Pic.avatar)} style={{cursor:'pointer'}}>
     {img !==Pic.avatar &&  <FontAwesomeIcon icon={faTrash}/> }
    </span>
      </div>
    <label htmlFor="UploadImg" style={{cursor:'pointer'}}>
    <img src={img} alt="add product img" width={300}/>
    </label>
    <input onChange={(e)=>UploadFileHandeller(e)} type="file" name="" id="UploadImg" style={{opacity:'0'}}/>
        
        <input value={name} onChange={(e)=>setName(e.target.value)} className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px'}} type="text" name="" id="" placeholder='اسم الماركة'/>
        <div className='w-100 d-flex justify-content-end'>
            <button onClick={()=>UploadDataHandeller()} className='btn btn-dark'>حفظ التعديلات</button>
        </div>
        </div>
        </Col>
        {loading === false && <Loading />}
        <TostifyLiprary/>
        
    </Row>

  )
}

export default AdminAddBrand