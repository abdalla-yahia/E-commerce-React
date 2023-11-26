import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap';
import getAllBrandsHook, {DeleteBrand,GetBrand} from '../../Redux/Actions/BrandsActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { notify } from '../Utility/TostifyLiprary';
import {TostifyLiprary} from '../.'

function BrandCard({img,title,control,id}) {
  const [ID,setID] = useState('')
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllBrandsHook())
},[dispatch,ID])

const GetBrandHandeller = async()=>{
  await dispatch(GetBrand(id))
}

const DeleteHandeller = ()=>{
  dispatch(DeleteBrand(id))
  notify('success')
}
  return (
    <>
    <Col xm='12' sm='6' md='4' lg='2' className='mb-3 d-flex justify-content-center' >
            <Card  style={{ width: '8rem',height:'180px' }}>
                <Card.Img src={img} style={{minHeight:'125px'}}/>
                <Card.Footer className='text-center'>
            {control ?<div className='d-flex justify-content-between px-2'>
              <span onClick={()=>{DeleteHandeller();setID(id)}}>
              <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer'}}/>
              </span>
              
              <Link  to={`/adminhomepage/brands/:${id}`} onClick={()=>{GetBrandHandeller()}}>
              <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer'}}/>
              </Link>
              </div>:<Card.Title>{title}</Card.Title>}
                </Card.Footer>
            </Card>
        <TostifyLiprary />
        </Col>
    </>
  )
}

export default BrandCard