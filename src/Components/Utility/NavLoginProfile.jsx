import { NavDropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { LogoutUser } from '../../Redux/Actions/UserActions';
import TostifyLiprary, { notify } from './TostifyLiprary';
import { useState } from 'react';

function NavLoginProfile({name,id}) {
  const [test,setTest]= useState('')
  const navigate = useNavigate()
  const dispatch =  useDispatch();

  const LogOutHandeller = ()=>{
    dispatch(LogoutUser())
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setTest(id)
    setTimeout(()=>{
      notify('success','تم تسجيل الخروج بنجاح')
    },1500)
    window.location.pathname = '/';
  }
  return (
    <NavDropdown title={name}>
            <Link to={`/userhomepage/profile/${id}`}>
              <NavDropdown.Item  href="#action/3.1">الصفحة الشخصية</NavDropdown.Item>
            </Link>
              <NavDropdown.Item href="#action/3.2">
                المفضلة
              </NavDropdown.Item>
              <NavDropdown.Item onClick={()=>LogOutHandeller()} >تسجيل الخروج</NavDropdown.Item>
              <NavDropdown.Divider />
              <TostifyLiprary />
            </NavDropdown>
  )
}

export default NavLoginProfile