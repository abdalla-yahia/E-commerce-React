
import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '../../Components'
import {UpdateBrand} from '../../Redux/Actions/BrandsActions'
import { useSelector,useDispatch } from 'react-redux';
import * as Pic from '../../Assets';
import { Link } from 'react-router-dom';

function AdminEditBrand() {
    
    const [name,setName] = useState('')
    const [path,setPath] = useState('')
    const [image,setImage] = useState('')
    const [id,setID] = useState('')

    const dispatch = useDispatch();
    
const oneBrand = useSelector(state=> state.brands.onebrand.data)
useEffect(()=>{

 if(!oneBrand){
  setImage(Pic.avatar)
  setName('ماركة')
}else {
  setImage(oneBrand.image)
  setName(oneBrand.name)
  setID(oneBrand.id)
}
},[dispatch,oneBrand])

const uploadFileHandeller =(e)=>{
  setImage(URL.createObjectURL(e.target.files[0]))
  setPath(e.target.files[0])
  setID(oneBrand._id)
}


const formData = new FormData()
formData.append('name',name)
formData.append('image',path)

    const saveHandeller = ()=>{
        dispatch(UpdateBrand(id,formData))
        setName('')
        setPath('')
        setImage(Pic.avatar)
    }

  return (
    <Container>
        <Row>
        <Title title={'تعديل الماركة'}/>
        <Col className='d-flex gap-4 flex-column justify-content-center align-items-center'>
        <label htmlFor='uploadInp' style={{cursor:'pointer'}}>

        <img src={image} alt='Edit' width={400}/>
        </label>
        <input type='file' id='uploadInp' onChange={(e)=>uploadFileHandeller(e)} style={{opacity:'0'}}/>
        <input value={name} type='text' onChange={(e)=>setName(e.target.value)}/>
        <Link to='/adminhomepage/adminallbrands'> <button className='btn btn-dark mb-5' type='submit' onClick={()=>saveHandeller()}>حفظ التعديلات</button></Link>
        </Col>
        </Row>
    </Container>
  )
}

export default AdminEditBrand