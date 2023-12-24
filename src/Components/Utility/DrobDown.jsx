import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { getAllProductsInSearch } from '../../Redux/Actions/ProductsActions';
import { useDispatch } from 'react-redux';

function DrobDown({Sort}) {
  const dispatch =useDispatch()
  const clickMe = (e)=>{
    localStorage.setItem('filter',e.target.innerText)
    dispatch(getAllProductsInSearch(e.target.innerText))
  }

  return (
    <Dropdown onClick={(e)=>e.preventDefault()}>
    <Dropdown.Toggle className='m-3' variant="dark" id="dropdown-basic" flip='bool'>
      <FontAwesomeIcon icon={faListCheck} className='ms-3'/>
      ترتيب حسب
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <Dropdown.Item href="#/action-3" onClick={(e)=>clickMe(e)} >المضاف حديثاً</Dropdown.Item>
      <Dropdown.Item href="#/action-1" onClick={(e)=>clickMe(e)}> السعر من الأقل إلى الأعلى</Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={(e)=>clickMe(e)}>السعر من  الأعلى إلى الأقل</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={(e)=>clickMe(e)}>الأكثر مبيعاً </Dropdown.Item>
      <Dropdown.Item href="#/action-3" onClick={(e)=>clickMe(e)}> الأعلى تقييماً</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}
 
export default DrobDown