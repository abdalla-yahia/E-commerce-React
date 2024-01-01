import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getASpecificUser } from '../../Redux/Actions/UserActions'

function UserAddresses() {

  const user = useSelector(state=>state.authusers.user)
  const data = JSON.parse(localStorage.getItem('user'))
  const token = JSON.parse(localStorage.getItem('token'))

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getASpecificUser(data._id,token))
  },[data,dispatch,token])
  // console.log(user)
  return (
    <Container>
    <Row>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserTitle title={'القائمة الرئيسية'}/>
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
  <Comp.Title title={' دفتر العناوين  '}/>
  </Col>
  </Row>
  <Row className='flex-nowrap'>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserSidebar />
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
    {user.data &&
      user.data.addresses.map(e=><Comp.UserAddress edit={true} adressName={'العنوان'}/>)
    }
    {/* <Comp.UserAddress edit={true} />
    <Comp.UserAddress edit={true} /> */}
    <div className='w-100 d-flex justify-content-center align-items-center mb-5'>
    <Link to={'/userhomepage/userAdresses/addnewadreess'}>
    <button className='btn btn-dark'>أضف عنوان </button>
    </Link>
    </div>
  </Col>
  </Row>
  </Container>
  )
}

export default UserAddresses