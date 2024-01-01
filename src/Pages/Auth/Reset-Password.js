import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { TostifyLiprary, notify } from '../../Components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userResetPassword } from '../../Redux/Actions/UserActions'

function ResetPassword() {
    const res = useSelector(state=>state.authusers.resetPassword)
    const [password,setPassword]= useState('')
    const [confirmPassword,setConfirmPassword]= useState('')
    const [email,setEmail]= useState('')
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const LoginHandeller = async()=>{
        if(password === confirmPassword){
            await dispatch(userResetPassword({
                email,
                newPassword: password,
            }))
            console.log(email)
        }else{
            notify('warning','كلمة السر غير متطابقة')
            setConfirmPassword('')
        }
    }
    useEffect(()=>{
        setEmail(localStorage.getItem('email'))
      if(res.status === 200){
        notify('success','تم تغيير كلمة السر بنجاح')
        localStorage.setItem('token', res.data.token)
        setTimeout(()=>{
          navigator('/login')
        },1000)
        setPassword('')
      }else if(res === 'fail'){
        notify('warning','من فضلك أطلب كود جديد')
      }
    },[res])
  return (
    <Form onSubmit={(e)=>e.preventDefault()} style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
    <Form.Label className="fw-bold fs-5"> تجديد كلمة السر </Form.Label>

    <Form.Control onChange={(e)=>setPassword(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder=" كلمة السر ..." />
    <Form.Control onChange={(e)=>setConfirmPassword(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder="  تأكيد كلمة السر ..." />
    <Button className="w-25 mb-5" variant="dark" type="submit" onClick={()=>LoginHandeller()}>
    إرسال
  </Button>
  <TostifyLiprary />
</Form>
  )
}

export default ResetPassword