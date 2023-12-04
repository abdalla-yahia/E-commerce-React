import { Card, CardFooter, Col } from "react-bootstrap"
import { rate,favOff,favOn,cart } from "../../Assets"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus,faCartShopping, faEdit, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { getProduct } from "../../Redux/Actions/ProductsActions"
import { faHeart as faHeart2 } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
function ProductCart({img,title,Description,price,rating,fav,car,contr,id,cat,brand}) {
  const [isadd, setIsAdd] = useState(false)
  const [isfav, setIsFav] = useState(false)
  const dispatch = useDispatch()

  const favHandeller =(e)=>{
    setIsFav(!isfav)
  }
  const CartHandeller = (e)=>{
    setIsAdd(!isadd)
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
         { fav && (isfav === true?<FontAwesomeIcon style={{cursor:'pointer',fontSize:'30px',color:'#44b64a'}} onClick={(e)=>favHandeller(e)} icon={faHeart}  />:
         <FontAwesomeIcon style={{cursor:'pointer',fontSize:'28px',color:'#37474F'}} onClick={(e)=>favHandeller(e)} icon={faHeart2}  />) }
         { car && (isadd === true?<FontAwesomeIcon style={{cursor:'pointer',color:'#44b64a',fontSize:'30px'}} onClick={(e)=>CartHandeller(e)} icon={faCartShopping} />:
         
         <FontAwesomeIcon style={{cursor:'pointer',fontSize:'28px',color:'#37474F'}} onClick={(e)=>CartHandeller(e)} icon={faCartPlus}  />)}
        </div>
      <CardFooter className="w-100">
      <div className="d-flex justify-content-between w-100" >
            <div className="rating" style={{color:'gold',fontSize:'20px',fontWeight:'bolder'}}>{rating}
            <img src={rate} alt="rate" width={20} />
            </div>
            <div className="price">{price} جنية</div>
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