
import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Loading, Title, TostifyLiprary,notify } from '../../Components'
import {UpdateBrand} from '../../Redux/Actions/BrandsActions'
import { useSelector,useDispatch } from 'react-redux';
import * as Pic from '../../Assets';
import { Link } from 'react-router-dom';

function AdminEditBrand() {
  const oneBrand = useSelector(state=> state.brands.onebrand.data)
    
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [path,setPath] = useState('')
    const [id,setID] = useState('')
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch();
console.log(oneBrand)

useEffect(()=>{

 if(!oneBrand){
  setImage(Pic.avatar)
  setName('ماركة')
}else {
  setImage(oneBrand.image)
  setName(oneBrand.name)
  setID(oneBrand.id)
}
},[dispatch,oneBrand,])

const uploadFileHandeller =(e)=>{
  setImage(URL.createObjectURL(e.target.files[0]))
  setPath(e.target.files[0])
  setID(oneBrand._id)
}

const saveHandeller = ()=>{
const formData = new FormData()
formData.append('name',name)
formData.append('image',path)

let data = path ? formData :{'image':image,'name':name}

      notify('success')
      setLoading(false)
        dispatch(UpdateBrand(id,data))
        setLoading(true)
        setName('')
        setPath('')
        setImage(Pic.avatar)
    }

  return (
    <>
    <Container>
        <Row>
        <Title title={'تعديل الماركة'}/>
        <Col className='d-flex gap-4 flex-column justify-content-center align-items-center'>
        <label htmlFor='uploadInp' style={{cursor:'pointer'}}>
        <img src={image} onLoadStart={(e)=>setPath(e.target.files[0])} alt='Edit' width={400}/>
        </label>
        <input type='file' multiple accept='image/*,video/*' id='uploadInp' onChange={(e)=>uploadFileHandeller(e)} style={{opacity:'0'}}/>
        <input value={name} type='text' onChange={(e)=>setName(e.target.value)}/>
        <Link className='btn btn-dark mb-5' to='/adminhomepage/adminallbrands' onClick={()=>saveHandeller()}>
         حفظ التعديلات
        </Link>
        </Col>
        {loading === false && <Loading />}
        </Row>
    </Container>
    <TostifyLiprary />
    </>
  )
}

export default AdminEditBrand