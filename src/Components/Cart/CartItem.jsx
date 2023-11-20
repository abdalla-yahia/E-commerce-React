
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Pic from '../../Assets'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
function CartItem({title,rate,cat,edit,count,orderNum,dell}) {
  return (
  
  <div className='d-flex mb-3 justify-content-between flex-wrap bg-light p-3 rounded-2'>
    <img src={Pic.mobile} alt="mobile"  width={150}/>
    <div className='d-flex flex-column gap-2'>
      {orderNum?<h4>طلب رقم : #32323</h4>:null}
      <h5>الالكترونيات</h5>
      <h6>ايفون XR بذاكرة سعة 128 جيجا ويدعم تقنية الجي الخامس
        <span>4.5</span>
      </h6>
      <p>الماركة : <span className='fw-bolder'>أبل</span></p>
      <label style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'red'}}></label>
      <div>
        <span>الكمية :</span>
        {count ?(<input className='text-center' type="number" name="" id="" max={50} min={1} />)
        :(<span className='p-3 m-3'>2</span>)

  }
      </div>
    </div>
    <div className='d-flex flex-column justify-content-between'>
      {dell &&<div className='d-flex justify-content-between'>
      <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer'}} onClick={()=>console.log('first')}/>
      <span>إزالة</span>
      </div>}
      {edit && <div className='d-flex justify-content-between'>
      <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer'}} onClick={()=>console.log('first')}/>
      <span>تعديل</span>
      </div> }
      <h4>3400 جنية</h4>
    </div>
  </div>
  )
}

export default CartItem