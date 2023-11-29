import { Col, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
import {useDispatch } from 'react-redux'
import {CreateCategory} from '../../Redux/Actions/CategoryActions';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Loading,TostifyLiprary,notify} from '../.';

function AdminAddCategory() {
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
    <Row>
        
    <Col>
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex justify-content-between w-75'>
    <span>صورة التصنيف</span>
    <span onClick={()=>setImage(Pic.avatar)} style={{cursor:'pointer'}}>
    {img !==Pic.avatar &&  <FontAwesomeIcon icon={faTrash}/> }
    </span>
      </div>
    <label htmlFor="UploadImg" style={{cursor:'pointer'}}>
    <img src={img} alt="add product img" width={300}/>
    </label>
    <input onChange={(e)=>UploadFileHandeller(e)} type="file" name="" id="UploadImg" style={{opacity:'0'}}/>
    <input value={name} onChange={(e)=> setName(e.target.value)} className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px'}} type="text" name="" id="" placeholder='اسم التصنيف'/>
    <div  className='w-100 d-flex justify-content-end'>
        <button onClick={()=>sendDataHandeller()} className='btn btn-dark'>حفظ التعديلات</button>
    </div>
    </div>
    {loading === false && <Loading />}
    <TostifyLiprary />
    </Col>
</Row>
  )
}

export default AdminAddCategory