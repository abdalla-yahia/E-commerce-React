import { Col, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'

function AdminAddCategory() {
  return (
    <Row>
        
    <Col>
    <div className='d-flex flex-column gap-3'>
    <span>صورة التصنيف</span>
    <img src={Pic.avatar} alt="add product img" width={300}/>
    <input className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px'}} type="text" name="" id="" placeholder='اسم التصنيف'/>
    <div className='w-100 d-flex justify-content-end'>
        <button className='btn btn-dark'>حفظ التعديلات</button>
    </div>
    </div>
    </Col>
</Row>
  )
}

export default AdminAddCategory