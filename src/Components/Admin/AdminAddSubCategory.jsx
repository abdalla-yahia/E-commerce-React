import { Col, Row } from 'react-bootstrap'
import getAllCategories from '../../Redux/Actions/CategoryActions';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSubCategory } from '../../Redux/Actions/SubCategoryActions';

function AdminAddSubCategory() {
  const [name, setName] = useState('')
  const [id, setID] = useState('')
  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories.categories.data)
 

  useEffect(()=>{
    dispatch(getAllCategories())
  },[dispatch])
  
  const SaveSubCategoryHandeller =()=>{
    
    if(name!== '' && id!== ''){
      dispatch(createSubCategory(id,name))
      setName('')
      setID('')
    }
  
  }
  return (
    <Row>
        
    <Col>
    <div className='d-flex flex-column justify-content-center align-items-center gap-3 w-100' style={{minHeight:'670px'}}>
    <input value={name} onChange={(e)=>setName(e.target.value)}  className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px',width:'100%'}} type="text" name="" id="" placeholder='اسم التصنيف الفرعي....'/>
    <div className='w-100 d-flex justify-content-end gap-3 align-items-end flex-column w-100'>
        <select value={id} onChange={(e)=>setID(e.target.value)}  placeholder='اختر التصنيف ....' name="" id=""  className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px',width:'100%'}} >
            <option selected disabled value={''}>اختر التصنيف الرئيسي ....</option>
            {categories&& categories.map((e)=>
            <option value={e._id}>{e.name}</option>
            )}
            
        </select>
        <button onClick={()=> SaveSubCategoryHandeller()} className='btn btn-dark w-25'>حفظ التعديلات</button>
    </div>
    </div>
    </Col>
</Row>
  )
}

export default AdminAddSubCategory