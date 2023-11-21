import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function UserEditProfile() {
  return (
    <>
    <div>
        <div className='d-flex p-3 flex-column rounded-2 p-3 gap-3 mb-3' style={{backgroundColor:'#fff'}}>
        <div className='d-flex justify-content-between flex-column p-3' >
        <div className='d-flex justify-content-end gap-3 w-100'>
        <span>تعديل </span>
        <FontAwesomeIcon icon={faEdit}/>
        </div>
        <div className='d-flex  flex-column justify-content-between gap-3 '>

        <h5>الاسم : 
            <span>على محمد على</span>
        </h5>
        <h5>
        العنوان :
        <span>القاهرة شارع النصر التسعين عمارة 14</span>
        </h5>
        <h5>
            رقم الهاتف : 
        <span> 012546556851</span>
        </h5>
        </div>
    </div>
    </div>
        </div>

    <form className='d-flex p-3 flex-column rounded-2 p-3 gap-3 mb-3' >
    <input type="text" name="" id=""  placeholder="أدخل كلمةالمرور القديمة" className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
    <input type="text" name="" id=""  placeholder="أدخل كلمةالمرور الجديدة" className='w-75 rounded-3 border border-2 outline px-3 py-2'/>

        <div className='w-75 d-flex justify-content-end gap-3 align-items-end flex-column mb-5'>
        <button className='btn btn-dark w-25' style={{float:'left'}} type='submit'>حفظ التعديلات</button>
        </div>
    </form>
    </>
  )
}

export default UserEditProfile