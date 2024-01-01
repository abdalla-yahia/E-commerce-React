import { Col, Container, Row } from 'react-bootstrap'
import * as Comp from '../../Components'
import { useEffect, useState } from 'react'


function UserProfile() {
  const [name,setName]=useState('')
  const data = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
  setName(data.name)
  },[])
  return (
    <Container>
    <Row>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserTitle title={'القائمة الرئيسية'}/>
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
  <Comp.Title title={`مرحباً :${name} `}/>
  </Col>
  </Row>
  <Row className='flex-nowrap'>
  <Col sm='4' lg='3' md='4' xs='4'>
  <Comp.UserSidebar />
  </Col>
  <Col sm='8' lg='9' md='8' xs='8'>
      <Comp.UserEditProfile />
  </Col>
  </Row>
  </Container>
  )
}

export default UserProfile