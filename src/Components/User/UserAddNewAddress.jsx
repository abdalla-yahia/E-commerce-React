import React from 'react'

function UserAddNewAddress() {
  return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form method='git'  className='d-flex flex-column gap-2 w-100'>

            <input type="text" name="" id="" placeholder='تسمية العنوان مثلاً (المنزل -العمل )' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='العنوان بالتفصيل  ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input type="text" name="" id="" placeholder='  رقم الهاتف ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>

        <div className='w-75 d-flex justify-content-end gap-3 align-items-end flex-column mb-5'>
        <button className='btn btn-dark w-25' style={{float:'left'}} type='submit'> إضافة عنوان</button>
        </div>
        </form >
    </div>
  )
}

export default UserAddNewAddress