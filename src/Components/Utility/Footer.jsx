import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='bg-dark w-100 footer'>
        <Container>
        <Row>
            <Col>
            <h1>Footer</h1>

            </Col>
        </Row>
        </Container>
        Footer</div>
    <Outlet />
    </>
  )
}

export default Footer