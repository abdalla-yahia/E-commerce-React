import React, { useState } from 'react'
import { TostifyLiprary } from '../../Components'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { userForgetPassword } from '../../Redux/Actions/UserActions'

function ForgetPassword() {
    const [email,setEmail]= useState('')
    const dispatch = useDispatch()

    const LoginHandeller = async()=>{
        console.log(email)
       await dispatch(userForgetPassword({
            email:email
        }))
    }
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