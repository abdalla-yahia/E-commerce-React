import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

function DrobDown() {
  return (
    <Dropdown>
    <Dropdown.Toggle className='m-3' variant="dark" id="dropdown-basic" flip='bool'>
      <FontAwesomeIcon icon={faListCheck} className='ms-3'/>
      ترتيب حسب
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <Dropdown.Item href="#/action-3" >المضاف حديثاً</Dropdown.Item>
      <Dropdown.Item href="#/action-1"> السعر من الأقل إلى الأعلى</Dropdown.Item>
      <Dropdown.Item href="#/action-3">السعر من  الأعلى إلى الأقل</Dropdown.Item>
      <Dropdown.Item href="#/action-2">الأكثر مبيعاً </Dropdown.Item>
      <Dropdown.Item href="#/action-3"> الأعلى تقييماً</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default DrobDown