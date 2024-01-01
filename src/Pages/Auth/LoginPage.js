import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import {LogUser} from '../../Redux/Actions/UserActions'
import { useState,useEffect } from "react"
import { TostifyLiprary, notify } from "../../Components"

function LoginPage() {
  const res = useSelector(state=>state.authusers.LoginUser)
  // const loading = useSelector(state=>state.authusers.loading)
  const dispatch = useDispatch()
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [login, setLogin]=useState(false)
  
  const LoginHandeller = async()=>{
    if(email !== '' && password !== ''){

      setLogin(true)
      dispatch(LogUser({
        email,
        password,
      }))
      setLogin(false)
      localStorage.removeItem('token')
    } else {
      notify('warning','حدثت مشكلة فى الدخول')
      localStorage.removeItem('token')
    }
  }
  
  
  useEffect(()=>{
    let logFunction = async()=>{
     await notify('success','تم تسجيل الدخول بنجاح')
      res.data&& localStorage.setItem('token', JSON.stringify(res.token))
      res.data&& localStorage.setItem('user', JSON.stringify(res.data))
      setTimeout(()=>{
        
       window.location.pathname = '/'
      },100) 
    }
    if(res.token){
      logFunction()
  }else{
    notify('warning',res)
    localStorage.removeItem('token')
  }
 },[login,res])
  
  return (
    
    <Form onSubmit={(e)=>e.preventDefault()} style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
        <Form.Label className="fw-bold fs-5"> تسجيل الدخول</Form.Label>

        <Form.Control onChange={(e)=>setEmail(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="email" placeholder="ايميل المستخدم ..." />

        <Form.Control onChange={(e)=>setPassword(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder="كلمة السر ..." />
      
      <Button className="w-25 mb-5" variant="dark" type="submit" onClick={()=>LoginHandeller()}>
        دخول
      </Button>
      <Form.Label className="mb-3">
        ليس لديك حساب؟
        <Link className="text-danger text-decoration-none" to={'/login/regester'}>أضغط هنا</Link>
      </Form.Label>
      <Form.Label className="mb-3">
          هل نسيت كلمة السر؟
        <Link className="text-danger text-decoration-none" to={'/login/forgetpassword'}>أضغط هنا</Link>
      </Form.Label>
      {/* <Form.Label className="mb-3">
        <Link className="text-danger text-decoration-none" to={'/adminhomepage'}> الدخول بحساب الأدمن</Link>
      </Form.Label>
      <Form.Label className="mb-3">
        <Link className="text-danger text-decoration-none" to={'/userhomepage'}> الدخول بحساب المستخدم</Link>
      </Form.Label> */}
      <TostifyLiprary />
    </Form>
  )
}

export default LoginPage