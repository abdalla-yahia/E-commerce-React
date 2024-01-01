import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddNewAddress, updateASpecificUser } from '../../Redux/Actions/UserActions'

function UserAddNewAddress() {

  const dispatch = useDispatch()

  const [adressName,setAdreesName]=useState('')
  const [description,setDiscription]=useState('')
  const [phone,setPhone]=useState('')
  const [city,setCity]=useState('')
  const [postalCode,setPosteCode]=useState('')
  const [data,setData]=useState('')
  const userLogin =  JSON.parse(localStorage.getItem('user'))
  const token =  JSON.parse(localStorage.getItem('token'))
  useEffect(()=>{
    if(data !==''){
      // console.log(userLogin._id)
      console.log(userLogin)
      dispatch(AddNewAddress(data,token))
    }
  },[userLogin,token,data,dispatch])
const changeAdreesName = (e)=>{
  setAdreesName(e.target.value)
}
const changeDescriptionAdrees = (e)=>{
  setDiscription(e.target.value)
}
const changePhone = (e)=>{
  setPhone(e.target.value)
}
const changeCity = (e)=>{
  setCity(e.target.value)
}
const changePosteCode = (e)=>{
  setPosteCode(e.target.value)
}
const onSubmit = (e)=>{
  setData({

    alias: adressName,
    details:description,
    phone,
    city,
    postalCode  
  })
      
}
// console.log(data)
  return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form onSubmit={(e)=>e.preventDefault()}  className='d-flex flex-column gap-2 w-100'>

            <input onChange={(e)=>changeAdreesName(e)} type="text" name="" id="" placeholder='تسمية العنوان مثلاً (المنزل -العمل )' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea onChange={(e)=>changeDescriptionAdrees(e)} style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='العنوان بالتفصيل  ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input onChange={(e)=>changePhone(e)} type="text" name="" id="" placeholder='  رقم الهاتف ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input onChange={(e)=>changeCity(e)} type="text" name="" id="" placeholder='اسم المدينة ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input onChange={(e)=>changePosteCode(e)} type="text" name="" id="" placeholder='  الرقم البريدي ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>

        <div className='w-75 d-flex justify-content-end gap-3 align-items-end flex-column mb-5'>
        <button onClick={()=>onSubmit()} className='btn btn-dark w-25' style={{float:'left'}} type='submit'> إضافة عنوان</button>
        </div>
        </form >
    </div>
  )
}

export default UserAddNewAddress