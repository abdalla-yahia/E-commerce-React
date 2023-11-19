import { Card, CardFooter, Col } from "react-bootstrap"
import { rate,favOff,favOn,cart } from "../../Assets"
import { Link } from "react-router-dom"

function ProductCart({img,title,Description,price,rating}) {
  const favHandeller =(e)=>{
    e.target.src === favOff ? e.target.src=favOn : e.target.src = favOff
  }
  const CartHandeller = (e)=>{

  }
  return (
    <>
    <Col className="d-flex justify-content-evenly align-items-evenly mb-3 " sm='12' lg='3' xlg='2' md='6'>
    <Card  className="box-shadow text-center d-flex justify-content-center flex-column align-items-center "style={{minWidth:'200px',minHeight:'450px',padding:'10px'}} >
    <Link to={'/allproducts/:id'}>
      <Card.Img  src={img}  style={{maxWidth:'150px'}}/>
    </Link>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="d-flex flex-column justify-content-evenly align-items-end">
        {Description}
        </Card.Text>
      </Card.Body>
        <div className="d-flex justify-content-between align-items-end w-100 " >
          <img style={{cursor:'pointer'}} onClick={(e)=>favHandeller(e)} src={favOff} alt="vav" width={30} />
          <img style={{cursor:'pointer',filter:'invert(2)'}} onClick={(e)=>CartHandeller(e)} src={cart} alt="vav" width={30} />
        </div>
      <CardFooter className="w-100">
      <div className="d-flex justify-content-between w-100" >
            <div className="rating" style={{color:'gold',fontSize:'20px',fontWeight:'bolder'}}>{rating}
            <img src={rate} alt="rate" width={20} />
            </div>
            <div className="price">{price}</div>
        </div>
      </CardFooter>
    </Card>
    </Col>
    </>
  )
}

export default ProductCart