import UserAddAddress from './UserAddress'
import * as Pic from '../../Assets'
function UserHome() {
  return (
    <div className='d-flex mb-5 gap-4 justify-content-center flex-column align-items-center'>
        <h4> المعلومات الشخصية  </h4>
        <img src={Pic.avatar} alt='profile-pic'/>
        <div>
        <h5>العنوان الرئيسي</h5>
        <UserAddAddress />
        </div>
        <div>عدد الطلبات حالياً :
            <span className='text-secondary'>لايوجد</span>
        </div>
        <div>حالة الطلبات  :
            <span className='text-secondary'>لايوجد</span>
        </div>
    </div>
  )
}

export default UserHome