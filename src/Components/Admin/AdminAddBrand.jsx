import { Col, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Loading, TostifyLiprary} from '../../Components';
import CreateAnewBrand from '../../Hook/Brands/CreateAnewBrand'

function AdminAddBrand() {
const [img,setImage,name,setName,UploadDataHandeller,UploadFileHandeller,loading] = CreateAnewBrand()

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