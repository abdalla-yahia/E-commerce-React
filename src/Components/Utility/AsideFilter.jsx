import React from 'react'

function AsideFilter() {
  return (
    <div className='d-flex flex-column p-4' style={{maxWidth:'fit-content',backgroundColor:'#fff'}}>
        <div className='d-flex flex-column'>

        <h4>الفئة</h4>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">الكل</label>
        </span>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">أجهزة كهربائية</label>
        </span>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">منزلية</label>
        </span>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">مطبخ</label>
        </span>
        </div>
        <div className='d-flex flex-column my-3'>

        <h4>الماركة</h4>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">الكل</label>
        </span>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total"> أبل</label>
        </span>
        <span>
        <input className='ms-2' type='checkbox' value='' id='total'/>
        <label htmlFor="total">سامسونج</label>
        </span>
        </div>
        <div className='d-flex flex-column'>

        <h4>السعر</h4>
        <span>
        <label htmlFor="total">من</label>
        <input className='me-2 mb-2' type='number' min={0} max={10000}/>
        </span>
        <span>
        <label htmlFor="total"> إلى</label>
        <input className='me-2 mb-2' type='number' min={0} max={10000}/>
        </span>
        </div>
    </div>
  )
}

export default AsideFilter