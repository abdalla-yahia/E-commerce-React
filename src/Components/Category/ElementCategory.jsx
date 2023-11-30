import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {DeleteCategory} from '../../Redux/Actions/CategoryActions'
import { useEffect,useState } from 'react'

function ElementCategory({img,color,title,control,id,getID}) {
const dispatch = useDispatch()
const [ID,setID] = useState('')

useEffect(()=>{
getID(ID)
},[ID])

const DeleteHandeller =()=>{
  dispatch(DeleteCategory(id))
  
}
  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <Card style={{margin:'10px', width: '150px',height:'150px',borderRadius:'50%',backgroundColor:color }} className='d-flex justify-content-evenly align-items-center '>
    <Card.Img src={img} style={{maxWidth:'100px'}} />
    </Card>
      <Card.Footer className='w-50 '>
      {control &&<div className='d-flex justify-content-between px-2'>
              <span style={{cursor:'pointer'}} onClick={()=>{DeleteHandeller();setID(id)}}>
              <FontAwesomeIcon icon={faTrash}/>
              </span>
              <span style={{cursor:'pointer'}}>
              <FontAwesomeIcon icon={faEdit}/>
              </span>
              </div>}
      </Card.Footer>
      <Card.Title >{title}</Card.Title>
    </div>
    
    </>
  )
}

export default ElementCategory