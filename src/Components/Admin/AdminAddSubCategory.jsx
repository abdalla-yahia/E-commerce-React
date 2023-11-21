import { Col, Row } from 'react-bootstrap'

function AdminAddSubCategory() {
  return (
    <Row>
        
    <Col>
    <div className='d-flex flex-column justify-content-center align-items-center gap-3 w-100' style={{minHeight:'670px'}}>
    <input className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px',width:'100%'}} type="text" name="" id="" placeholder='اسم التصنيف الفرعي'/>
    <div className='w-100 d-flex justify-content-end gap-3 align-items-end flex-column w-100'>
        <select name="" id=""  className='btn text-center' style={{background:'#fff',border:'3px solid black',borderRadius:'20px',width:'100%'}} >
            <option disabled>اختر التصنيف ...</option>
            <option value={'التصنيف الأول'}>التصنيف الأول</option>
            <option value={'التصنيف الثاني'}>التصنيف الثاني</option>
            <option value={'التصنيف الثالث'}>التصنيف الأثالث</option>
            <option value={'التصنيف الرابع'}>التصنيف الرابع</option>
        </select>
        <button className='btn btn-dark w-25'>حفظ التعديلات</button>
    </div>
    </div>
    </Col>
</Row>
  )
}

export default AdminAddSubCategory