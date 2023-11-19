import React from 'react'
import { Card, Col } from 'react-bootstrap'

function BrandCard({img}) {
  return (
    <>
    <Col xm='12' sm='6' md='4' lg='2' className='mb-3 d-flex justify-content-center' >
            <Card style={{ width: '8rem' }}>
                <Card.Img src={img} />
            </Card>
        </Col>
    </>
  )
}

export default BrandCard