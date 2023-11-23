import { Col, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
import {useDispatch } from 'react-redux'
import {CreateCategory} from '../../Redux/Actions/CategoryActions';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function AdminAddCategory() {
const dispatch = useDispatch();

const [name,setName] = useState('');
const [img,setImage] = useState(Pic.avatar)
const [path, setPath] = useState('')

const UploadFileHandeller = (e)=>{
  setImage(URL.createObjectURL(e.target.files[0]));
  setPath(e.target.files[0]);
}
const formDAta = new FormData()
formDAta.append("name",name)
formDAta.append("image",path)

const sendDataHandeller =()=>{
  if(name !== '' && (img !== undefined || img !== Pic.avatar)){
  dispatch(CreateCategory(formDAta))
  setName('')
  setImage(Pic.avatar)
}
}
  return (
    <Row>
        
    <Col>
    <div className='d-flex flex-column gap-3'>
      <div className='d-flex justify-content-between w-75'>
    <span>صورة التصنيف</span>
    <span onClick={()=>setImage(Pic.avatar)} style={{cursor:'pointer'}}>
      <FontAwesomeIcon icon={faTrash}/>
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
    </Col>
</Row>
  )
}

export default AdminAddCategory