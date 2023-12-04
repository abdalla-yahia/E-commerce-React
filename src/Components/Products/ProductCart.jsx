import { Card, CardFooter, Col } from "react-bootstrap"
import { rate,favOff,favOn,cart } from "../../Assets"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { getProduct } from "../../Redux/Actions/ProductsActions"
function ProductCart({img,title,Description,price,rating,fav,car,contr,id,cat,brand}) {
  const dispatch = useDispatch()

  const favHandeller =(e)=>{
    e.target.src === favOff ? e.target.src=favOn : e.target.src = favOff
  }
  const CartHandeller = (e)=>{

  }
  return (
    <>
    <Col className="d-flex justify-content-evenly align-items-evenly mb-3 " sm='12' lg='3' xlg='2' md='6'>
    <Card  className="box-shadow text-center d-flex justify-content-center flex-column align-items-center "style={{minWidth:'200px',minHeight:'450px',padding:'10px'}} >
    
    <Link to={`/allproducts/:${id}`} onClick={()=>{dispatch(getProduct(id));window.localStorage.setItem('ID',id);window.localStorage.setItem('cat',cat);window.localStorage.setItem('brand',brand)}}>
      <Card.Img  src={img}  style={{maxWidth:'150px'}}/>
    </Link>
      <Card.Body>
        <Card.Title className="fw-bold">{title}</Card.Title>
        <Card.Text className="d-flex flex-column justify-content-evenly align-items-end">
        {Description}
        </Card.Text>
      </Card.Body>
        <div className="d-flex justify-content-between align-items-end w-100 " >
         { fav && <img style={{cursor:'pointer'}} onClick={(e)=>favHandeller(e)} src={favOff} alt="vav" width={30} /> }
         { car && <img style={{cursor:'pointer',filter:'invert(2)'}} onClick={(e)=>CartHandeller(e)} src={cart} alt="vav" width={30} />}
        </div>
      <CardFooter className="w-100">
      <div className="d-flex justify-content-between w-100" >
            <div className="rating" style={{color:'gold',fontSize:'20px',fontWeight:'bolder'}}>{rating}
            <img src={rate} alt="rate" width={20} />
            </div>
            <div className="price">{price}</div>
        </div>
      </CardFooter>
     {contr&& <Card.Footer className="w-100">
      <div className="d-flex w-100 justify-content-between">
      <span style={{cursor:'pointer'}}>إزالة
        <FontAwesomeIcon icon={faTrash}/>
      </span>
      <span style={{cursor:'pointer'}}>
        تعديل
    <FontAwesomeIcon icon={faEdit} />
      </span>
    </div>
      </Card.Footer>}
    </Card>
    </Col>
    </>
  )
}

export default ProductCart