import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"


function LoginPage() {
  return (
  
      <Form style={{minHeight:'670px'}} className="d-flex flex-column justify-content-center align-items-center ">
        <Form.Label className="fw-bold fs-5"> تسجيل الدخول</Form.Label>

        <Form.Control className="w-25 bg-light text-center mb-3 p-2 border-2" type="text" placeholder="اسم المستخدم ..." />

        <Form.Control className="w-25 bg-light text-center mb-3 p-2 border-2" type="password" placeholder="كلمة السر ..." />
      
      <Button className="w-25 mb-5" variant="dark" type="submit">
        دخول
      </Button>
      <Form.Label className="mb-3">
        ليس لديك حساب؟
        <Link className="text-danger text-decoration-none" to={'/login/regester'}>أضغط هنا</Link>
      </Form.Label>
    </Form>
  )
}

export default LoginPage