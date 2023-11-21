import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function UserTitle({title,more,status,path}) {
  return (
    <>
    <Link to={'/userhomepage'} className='text-decoration-none text-dark'>
    <div className="d-flex mt-5 justify-content-between">
      
    <div className="d-flex gap-2  justify-content-between">
      <h4>{title}</h4>
      <FontAwesomeIcon icon={faHome}/>
      </div>
    {
      status ?
      <Link to={path}>
    <button  className="btn-more">{more}</button>
    </Link>:
    <button style={{visibility:'hidden'}} className="btn-more"></button>}
    </div>
    </Link>
    </> 
     )
}

export default UserTitle