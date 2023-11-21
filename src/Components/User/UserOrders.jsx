import {CartItem} from '..'

function UserOrders() {
  return (
    <>
    <div className='d-flex flex-column mb-3 p-3' style={{backgroundColor:'#fff'}}>
      <h4>طلب رقم #323232</h4>
    <CartItem />
    <CartItem />
    <CartItem />
    <div className='d-flex justify-content-between w-100'>
      <p>الحالة : 
        <span className='text-secondary'>قيد التنفيذ</span>
      </p>
      <h4 className='btn btn-dark'>الغاء الطلب</h4>
      <h4>الإجمالي 4500 جنية</h4>
    </div>
    </div>
    </>
  )
}

export default UserOrders