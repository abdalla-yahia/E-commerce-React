
import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Loading, Title, TostifyLiprary,notify } from '../../Components'
import {UpdateBrand, getOneBrand} from '../../Redux/Actions/BrandsActions'
import { useSelector,useDispatch } from 'react-redux';
import * as Pic from '../../Assets';
import { Link, useParams } from 'react-router-dom';

function AdminEditBrand() {
  const {ID} = useParams()
  const oneBrand = useSelector(state=> state.brands.onebrand.data)
    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    // const [URL,setURL] = useState('')
    const [path,setPath] = useState('')
    const [id,setID] = useState('')
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getOneBrand(ID))
    },[ID])

    useEffect(()=>{
      if(!oneBrand){
        setImage(Pic.avatar)
        setName('ماركة')
      }else {
        setImage(oneBrand.image)
        setName(oneBrand.name)
        
      }
      // console.log(image)
    },[oneBrand,ID])
    useEffect(()=>{
      let run =async ()=>{
        await getBase64Image(image).then(res=>setPath(res))
      }
      run()
    },[image])

    // When Change Image
    const uploadFileHandeller =(e)=>{
      if(e.target.files[0]){
        setImage(URL.createObjectURL(e.target.files[0]))
        setPath(e.target.files[0])
        setID(oneBrand._id)
      }
    }
console.log(path)
    //Functions to Convert Url to base 64
    
    const getBase64Image = async (url) => {
      
      const response = await fetch(url,{mode:'cors'});
      const blob = await response.blob();
      const ext = url.split('.').pop();
      const filename = url.split('/').pop();
      const metadata = {type: `image/${ext}`}
      // Create a File object from the Blob
      return await new File([blob], Math.random(), metadata);
    };


    const saveHandeller =async ()=>{
        console.log('Tow',path)
      const formData = new FormData()
     await formData.append('name',name)
     await formData.append('image',path)

      let data = formData
  
  notify('success')
      setLoading(false)
        dispatch(UpdateBrand(id,data))
        setLoading(true)
        setName('')
        setPath('')
        setImage(Pic.avatar)
    }
const chngeHandeller =(e)=>{
  e.persist()
  setName(e.target.value)
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
        <input value={name} type='text' onChange={(e)=> chngeHandeller(e)}/>
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