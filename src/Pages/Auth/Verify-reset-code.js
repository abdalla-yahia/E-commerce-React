import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { TostifyLiprary, notify } from '../../Components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userVerifyCode } from '../../Redux/Actions/UserActions'

function Verifyresetcode() {
    const res = useSelector(state=>state.authusers.virifycode)
    const [code,setCode]= useState([])
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const LoginHandeller = async()=>{
        console.log(code)
       await dispatch(userVerifyCode({
        resetCode:code,
       }))
    }
    useEffect(()=>{
      if(res === 'Success'){
        notify('success','تم تأكيد الكود بنجاح')
        setTimeout(()=>{
          navigator('/login/resetpassword')
        },1000)
        setCode('')
      }else if(res === 'fail'){
        notify('warning',' هذا الكود غير صحيح أو أنتهت صلاحيته')
      }
      console.log(res)
    },[res])
  return (
    <Form onSubmit={(e)=>e.preventDefault()} style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
    <Form.Label className="fw-bold fs-5"> كود المصادقة</Form.Label>

    <Form.Control onChange={(e)=>setCode(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="text" placeholder=" كود المصادقة ..." />
    <Button className="w-25 mb-5" variant="dark" type="submit" onClick={()=>LoginHandeller()}>
    إرسال
  </Button>
  <TostifyLiprary />
</Form>
  )
}

export default Verifyresetcode