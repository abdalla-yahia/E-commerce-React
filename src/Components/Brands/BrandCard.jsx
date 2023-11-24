import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, Col } from 'react-bootstrap';
import {DeleteBrand} from '../../Redux/Actions/BrandsActions';
import { useDispatch } from 'react-redux';

function BrandCard({img,title,control,id}) {
const dispatch = useDispatch()

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
              <span>
              <FontAwesomeIcon icon={faEdit} style={{cursor:'pointer'}}/>
              </span>
              </div>:<Card.Title>{title}</Card.Title>}
                </Card.Footer>
            </Card>
        </Col>
    </>
  )
}

export default BrandCard