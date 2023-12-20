import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import DeleteEditecategory from '../../Hook/Category/Delete-Edite-category'
import {TostifyLiprary} from '../../Components';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getOneCategory } from '../../Redux/Actions/CategoryActions'
import { getProductsOfCategory } from '../../Redux/Actions/ProductsActions'

function ElementCategory({img,color,title,control,id,getID}) {
  const navigate = useNavigate()
  const [ID,setID,DeleteHandeller] = DeleteEditecategory()
  const dispatch = useDispatch()
  useEffect(()=>{
    getID(ID)
    },[ID])
    const productsClickHandeller =()=>{
      navigate(`/category/${id}/products`)
    }

  return (
    <>
    <div  className='d-flex flex-column justify-content-center align-items-center' onClick={()=>productsClickHandeller(id)}>
    <Card style={{cursor:'pointer',margin:'10px', width: '150px',height:'150px',borderRadius:'50%',backgroundColor:color }} className='d-flex justify-content-evenly align-items-center '>
    <Card.Img src={img} style={{maxWidth:'100px'}} />
    </Card>
      <Card.Footer className='w-50 '>
      {control &&<div className='d-flex justify-content-between px-2'>
              <span style={{cursor:'pointer'}} onClick={()=>{DeleteHandeller(id);setID(id)}}>
              <FontAwesomeIcon icon={faTrash}/>
              </span>
              <Link to={`/adminhomepage/category/${id}`} style={{cursor:'pointer'}}>
              <FontAwesomeIcon icon={faEdit}/>
              </Link>
              </div>}
      </Card.Footer>
      <Card.Title >{title}</Card.Title>
    </div>
    <TostifyLiprary />
    </>
  )
}

export default ElementCategory