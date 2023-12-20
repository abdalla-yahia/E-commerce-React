
import React,{useEffect, useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Loading, Title, TostifyLiprary,notify } from '../../Components'
import { useSelector,useDispatch } from 'react-redux';
import * as Pic from '../../Assets';
import { Link, useParams } from 'react-router-dom';
import { updateCategory,getOneCategory } from '../../Redux/Actions/CategoryActions';

function AdminEditCategory() {
  const {ID} = useParams()
  const category = useSelector(state=>state.categories.oneCategory.data)

    const [name,setName] = useState('')
    const [image,setImage] = useState('')
    const [path,setPath] = useState('')
    const [id,setID] = useState('')
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch();
    
    useEffect(()=>{
      dispatch(getOneCategory(ID))
    },[ID])

    useEffect(()=>{
        const run = async () =>{

            if(!category){
                setImage(Pic.avatar)
                setName('تصنيف')
            }else {
              await  setImage(category.image)
               await setName(category.name)
               await setID(ID)
            }
        }
        run()
    },[category,ID])

    // When Change Image
    const uploadFileHandeller =(e)=>{
      if(e.target.files[0]){
        setImage(URL.createObjectURL(e.target.files[0]))
        setPath(e.target.files[0])
      }
    }
  

    const saveHandeller =async ()=>{
        console.log('Tow',path)
        let data;
        const formData = new FormData()
        await formData.append('name',name)
        if(path !== ''){
       await formData.append('image',path)
      data = formData
    }else{
      data = {name:name}
      data = formData
    }
  
  notify('success')
      setLoading(false)
        dispatch(updateCategory(id,data))
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
        <Title title={'تعديل التصنيف'}/>
        <Col className='d-flex gap-4 flex-column justify-content-center align-items-center'>
        <label htmlFor='uploadInp' style={{cursor:'pointer'}}>
        <img src={image} onLoadStart={(e)=>setPath(e.target.files[0])} alt='Edit' width={400}/>
        </label>
        <input type='file' multiple accept='image/*,video/*' id='uploadInp' onChange={(e)=>uploadFileHandeller(e)} style={{opacity:'0'}}/>
        <input value={name} type='text' onChange={(e)=> chngeHandeller(e)}/>
        <Link className='btn btn-dark mb-5' to='/adminhomepage/adminallcategories' onClick={()=>saveHandeller()}>
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


export default AdminEditCategory