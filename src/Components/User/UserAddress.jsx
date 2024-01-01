import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function UserAddress({edit,adressName,description,phone}) {
  return (
    <div className='d-flex p-3 flex-column rounded-2 p-3 gap-3 mb-3' style={{backgroundColor:'#fff'}}>
        <div className='d-flex justify-content-between'>
        <h3>{adressName}</h3>
        {edit&&<div className='d-flex gap-3'>
            <span>حذف

        <FontAwesomeIcon icon={faTrash}/>
            </span>
            <span>تعديل

        <FontAwesomeIcon icon={faEdit}/>
            </span>
        </div>}
        </div>
        <h5>{description}</h5>
        <h5>رقم الهاتف : {phone}</h5>
    </div>
  )
}

export default UserAddress