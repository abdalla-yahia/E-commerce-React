import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap';
import {DeleteBrand,GetBrand} from '../../Redux/Actions/BrandsActions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function BrandCard({img,title,control,id}) {
const dispatch = useDispatch()


const GetBrandHandeller = async()=>{
 await dispatch(GetBrand(id))
}

  const DeleteHandeller = ()=>{
    dispatch(DeleteBrand(id))
  }
  return (
    <>
    <Col xm='12' sm='6' md='4' lg='2' className='mb-3 d-flex justify-content-center' >
            <Card  style={{ width: '8rem',height:'180px' }}>
                <Card.Img src={img} style={{minHeight:'125px'}}/>
                <Card.Footer className='text-center'>
            {control ?<div className='d-flex justify-content-between px-2'>
              <span onClick={()=>DeleteHandeller()}>
              <FontAwesomeIcon icon={faTrash} style={{cursor:'pointer'}}/>
              </span>
              
              <Link  to={`/adminhomepage/brands/:${id}`} onClick={()=>GetBrandHandeller()}>
              <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer'}}/>
              </Link>
              </div>:<Card.Title>{title}</Card.Title>}
                </Card.Footer>
            </Card>
        </Col>
    </>
  )
}

export default BrandCard