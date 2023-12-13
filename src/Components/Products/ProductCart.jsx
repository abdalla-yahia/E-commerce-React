import { Card, CardFooter, Col } from "react-bootstrap"
import { rate } from "../../Assets"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartPlus,faCartShopping, faEdit, faHeart, faTrash } from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { getProduct,deleteProduct, getAllProducts, setProductinCart, deleteProductfromCart } from "../../Redux/Actions/ProductsActions"
import { faHeart as faHeart2 } from "@fortawesome/free-regular-svg-icons"
import { useState,useEffect } from "react"
import Swal from 'sweetalert2'

function ProductCart({img,title,Description,price,rating,fav,car,contr,id,cat,brand,subcategory}) {

  
  const [isadd, setIsAdd] = useState(false)
  const [isfav, setIsFav] = useState(false)
  const [ID, setID] = useState('')
  
  const dispatch = useDispatch()
  let  token = localStorage.getItem('token')

  useEffect(()=>{
    dispatch(getAllProducts())
  },[ID])
  const favHandeller =(e)=>{
    setIsFav(!isfav)
  }
  // User is allowed to Add Or Remove Products from Cart
  const CartHandeller = async (e)=>{
    setIsAdd(!isadd)
    // if( isadd === false){

    dispatch(setProductinCart(token,{productId:id}))
     console.log(token)
    // }else{

    //  await dispatch(deleteProductfromCart(id,token))
    // }
    
    
  }
  //Admin Delete Product from Database
  const DeleteHandeller =() =>{
    Swal.fire({
      title: "هل أنت متأكد ؟",
      text: `!ستقوم بحذف  المنتج " ${title} " نهائياً من قائمة المنتجات`,
      icon: "warning",
      showCancelButton: true,
      cancelButtonText:'إلغاء',
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم, قم بالحذف"
    }).then((result) => {
      if (result.isConfirmed) {
      dispatch(deleteProduct(id,token));
      console.log('product deleted successfully')
        setID(id)
        Swal.fire({
          title: "!تم الحذف",
          text: `تم حذف المنتج ${title} بنجاح`,
          icon: "success",
          timer:1500
        });
      }
    })
    
    }
  return (
    <>
    <Col className="d-flex justify-content-evenly align-items-evenly mb-3 " sm='12' lg='3' xlg='2' md='6'>
    <Card  className="box-shadow text-center d-flex justify-content-center flex-column align-items-center "style={{overflow:'hidden',minWidth:'200px',minHeight:'350px',padding:'10px'}} >
    
    <Link to={`/allproducts/${id}`} onClick={()=>{dispatch(getProduct(id));window.localStorage.setItem('cat',cat);window.localStorage.setItem('brand',brand);window.localStorage.setItem('sub',subcategory);window.scrollTo({top:0,left:0,behavior:'smooth'})}}>
      <Card.Img  src={img}  style={{maxWidth:'150px'}}/>
    </Link>
      <Card.Body>
        <Card.Title className="fw-bold text-danger">{title}</Card.Title>
        <Card.Text className="text-center" style={{maxHeight:'110px',overflow:'hidden',wordWrap:'break-word',textOverflow:'ellipsis'}}>
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
      <span style={{cursor:'pointer'}} onClick={()=>DeleteHandeller()}>إزالة
        <FontAwesomeIcon icon={faTrash} style={{color:'indianred',fontSize:'22px'}}/>
      </span>
      <Link to={`/adminhomepage/admineeditproduct/${id}`} onClick={()=>{localStorage.setItem('prodId',id)}}>
      <span style={{cursor:'pointer'}}>
        تعديل
    <FontAwesomeIcon icon={faEdit} style={{color:'green', fontSize:'22px'}}/>
      </span>
      </Link>
    </div>
      </Card.Footer>}
    </Card>
    </Col>
    </>
  )
}

export default ProductCart