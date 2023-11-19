import { Card, Col } from 'react-bootstrap'

function ElementCategory({img,color,title}) {
  return (
    <>
    <Col sm='6' lg='2' md='4' xs='12'>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <Card style={{margin:'10px', width: '150px',height:'150px',borderRadius:'50%',backgroundColor:color }} className='d-flex justify-content-evenly align-items-center text-center '>
    <Card.Img src={img} style={{maxWidth:'100px'}} />
    </Card>
      <Card.Title >{title}</Card.Title>
    </div>
    </Col>
    </>
  )
}

export default ElementCategory