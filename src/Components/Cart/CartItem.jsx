
import * as Pic from '../../Assets'
function CartItem({title,rate,cat}) {
  return (
  
  <div className='d-flex mb-3 justify-content-between flex-wrap bg-light p-3 rounded-2'>
    <img src={Pic.mobile} alt="mobile"  width={150}/>
    <div className='d-flex flex-column gap-2'>
      <h5>الالكترونيات</h5>
      <h6>ايفون XR بذاكرة سعة 128 جيجا ويدعم تقنية الجي الخامس
        <span>4.5</span>
      </h6>
      <p>الماركة : <span className='fw-bolder'>أبل</span></p>
      <label style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'red'}}></label>
      <div>
        <span>الكمية :</span>
        <input className='text-center' type="number" name="" id="" max={50} min={1} />
      </div>
    </div>
    <div className='d-flex flex-column justify-content-between'>
      <div className='d-flex justify-content-between'>
      <img style={{cursor:'pointer'}} src={Pic.delete} alt="delete" srcset="" width={25}/>
      <span>إزالة</span>
      </div>
      <h4>3400 جنية</h4>
    </div>
  </div>
  )
}

export default CartItem