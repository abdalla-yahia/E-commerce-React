import React, { useEffect, useState } from 'react'
import { TostifyLiprary, notify } from '../../Components'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { userForgetPassword } from '../../Redux/Actions/UserActions'
import { useNavigate } from 'react-router-dom'

function ForgetPassword() {
    const [email,setEmail]= useState('')
    const [loading,setLoading]= useState(false)
    const dispatch = useDispatch()
    const navigator = useNavigate()
  const res = useSelector(state=>state.authusers.forgetPass)

    const LoginHandeller = async()=>{
      if(email !== ''){
        if(!window.navigator.onLine){
          notify('error','لا يوجد إتصال إنترنت' )
        }else{
          localStorage.setItem('email', email)
          await dispatch(userForgetPassword({
            email:email
          }))
          setLoading(true)
        }
      }else{
        notify('warning','من فضلك ادخل ايميلك')
      }
    }
    useEffect(()=>{
      if(res === 'Success'){
        notify('success','تم إرسال الكود بنجاح')
        setTimeout(()=>{

          navigator('/login/verifycode')
        },1000)
        setEmail('')
      }else if(res === 'fail'){
        notify('warning','هذا الايميل غير صحيح')
      }
    },[res])
    
  return (
    <Form onSubmit={(e)=>e.preventDefault()} style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
        <Form.Label className="fw-bold fs-5"> تسجيل الدخول</Form.Label>

        <Form.Control onChange={(e)=>setEmail(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="email" placeholder="ايميل المستخدم ..." />
        <Button className="w-25 mb-5" variant="dark" type="submit" onClick={()=>LoginHandeller()}>
        إرسال
      </Button>
      <TostifyLiprary />
    </Form>
  )
}

export default ForgetPassword