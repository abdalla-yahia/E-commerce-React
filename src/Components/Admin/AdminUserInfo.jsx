import React from 'react'

function AdminUserInfo() {
  return (
    <div className='bg-light d-flex flex-column rounded-2 p-3 mb-3 justify-content-start'>
        <h4>تفاصيل العميل</h4>
        <div className='d-flex flex-wrap gap-2 p-2'>
            <h5>الاسم :</h5>
            <spn>أحمد عبدالله محمود</spn>
        </div>
        <div className='d-flex gap-2 p-2'>
            <h5>رقم الهاتف :</h5>
            <spn>01202564558</spn>
        </div>
        <div className='d-flex flex-wrap gap-2 p-2'>
            <h5>العنوان :</h5>
            <spn>  القاهرة-مصر الجديدة -المنيل</spn>
        </div>
        <div className='d-flex flex-wrap gap-2 p-2'>
            <h5>الإيميل :</h5>
            <spn> Userinfo@yahoo.com</spn>
        </div>
        <div className='d-flex gap-2 p-2 w-100 justify-content-center border-top border-2'>
            <h4> المجموع 4500 جنية</h4>
            </div>
            
        <div className='d-flex gap-2 p-2 w-100 justify-content-center border-top border-2'>
            <select className='btn border outline w-75  text-center' style={{backgroundColor:'#eee'}}>
                <option disabled>تحت التنفيذ....</option>
                <option>قيد الإنتهاء </option>
                <option>تم الإنتهاء </option>
                <option> الغاء</option>
            </select>
            <button className='btn btn-dark'>حفظ</button>
        </div>
    </div>
  )
}

export default AdminUserInfo