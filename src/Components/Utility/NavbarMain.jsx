import {Container,Nav,Navbar} from 'react-bootstrap';
import * as Pic from '../../Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { Outlet,Link,useNavigate } from 'react-router-dom';
import FilterProducts from '../../Hook/Products/Filter-Products-Hook';

export default function NavbarMain() {
  const [,,,,,onchangeSearch] =FilterProducts()
const navigate = useNavigate()

const searchHandeller = (e)=>{
  localStorage.setItem('search', e.target.value);
  onchangeSearch(e.target.value)
  if((e.target.value).trim().length >= 3)
    navigate('/allproducts')
}

  return (
    <>
    
    <Navbar  className="bg-dark" style={{position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    zIndex: 999}}>
    <Container >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" w-100 d-flex justify-content-center align-items-center ">
          <Link to="/cartShoping" className='text-light text-center text-decoration-none mx-3'>العربة
          <FontAwesomeIcon icon={faCartShopping} beat fontSize={20} />
          </Link>
          <Link to="/login" className='text-light text-center text-decoration-none  mx-3'>دخول
          <FontAwesomeIcon  icon={faCircleUser} fontSize={22}/>
          </Link>

          {/* <Link  className='w-100'> */}
          <input onChange={(e)=>searchHandeller(e)} type='text' placeholder='بحث ....' className='text-center w-100 nav-input-serch'/>
          {/* </Link> */}

          <Link to="/" ><img src={Pic.logo} alt='logo' className='logo mx-3'/></Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Outlet />
    </>
    
    )
    
  }
  