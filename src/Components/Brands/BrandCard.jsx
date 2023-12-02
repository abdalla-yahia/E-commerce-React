import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {TostifyLiprary} from '../.'
import DeleteEditBrandsHooks from '../../Hook/Brands/Delete&EditBrands-Hooks'
import { useEffect } from 'react';

function BrandCard({img,title,control,id,getId}) {

  const [ID,setID, GetBrandHandeller, DeleteHandeller] = DeleteEditBrandsHooks(id,getId)
 
  useEffect(()=>{
    getId(ID)
  },[ID])

  return (
    <>
    <Col xm='12' sm='6' md='4' lg='2' className='mb-3 d-flex justify-content-center' >
            <Card  style={{ width: '8rem',height:'180px' }}>
                <Card.Img src={img} style={{minHeight:'125px'}}/>
                <Card.Footer className='text-center'>
            {control ?<div className='d-flex justify-content-between px-2'>
              <span onClick={()=>{DeleteHandeller(id);setID(id)}}>
              <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer'}}/>
              </span>
              <span onClick={()=>{GetBrandHandeller(id)}}>
              <Link  to={`/adminhomepage/brands/:${id}`} >
              <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer'}}/>
              </Link>
              </span>
              </div>:<Card.Title>{title}</Card.Title>}
                </Card.Footer>
            </Card>
        <TostifyLiprary />
        </Col>
    </>
  )
}

export default BrandCard