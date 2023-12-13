import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { authNewUser } from '../../Redux/Actions/UserActions'
import { TostifyLiprary, notify } from '../../Components'

function RegesterPage() {
  const user = useSelector(state=> state.authusers.authusers)

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  const [RePassword,setRePassword]=useState('')
  const [done,setDone]=useState(false)
  const dispatch = useDispatch()
const data = {
  name:name,
  email:email,
  password:password,
  passwordConfirm:RePassword,
  phone:phone,
}
  const sendDataSubmit = async()=>{
    if(name !=='' && email !=='' && phone !=='' && password !== '' && RePassword !== ''){
      if(password === RePassword){
      await dispatch(authNewUser(data))
        notify('success','تم إنشاء حساب بنجاح')
        console.log(user)
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setRePassword('')
        setDone(true)
      }else{
        notify('error',"توجد مشكلة فى عملية انشاء الحساب")
      }
    }else
    {
      notify('warning')

    }
  }
  return (
    <Form onSubmit={(e)=>e.preventDefault()} style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
        <Form.Label className="fw-bold fs-5"> تسجيل مستخدم جديد</Form.Label>

        <Form.Control value={name} onChange={(e)=>setName(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="text" placeholder="اسم المستخدم ..." />
        <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="email" placeholder="الإيميل..." />
        <Form.Control value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="phone" placeholder="رقم الهاتف" />
        <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder="كلمة السر ..." />
        <Form.Control value={RePassword} onChange={(e)=>setRePassword(e.target.value)} className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder="  إعادة كلمة السر ...." />
      
      <Button onClick={()=>sendDataSubmit()} className="w-25 mb-5" variant="dark" type="submit">
      <Link to={'/login'} className='w-100 text-decoration-none'> دخول</Link>
      </Button>
      <Form.Label className="mb-3">
         لديك حساب بالفعل؟
        <Link  className="text-danger text-decoration-none" to={'/login'}>أضغط هنا</Link>
      </Form.Label>
      <TostifyLiprary />
    </Form>
  )
}

export default RegesterPage