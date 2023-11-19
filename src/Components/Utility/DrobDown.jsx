import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons';

function DrobDown() {
  return (
    <Dropdown>
    <Dropdown.Toggle className='m-3' variant="dark" id="dropdown-basic" flip='bool'>
      <FontAwesomeIcon icon={faList} className='ms-3'/>
      ترتيب حسب
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item href="#/action-1">الأقل سعراً</Dropdown.Item>
      <Dropdown.Item href="#/action-2">ًالأكثر مبيعا</Dropdown.Item>
      <Dropdown.Item href="#/action-3">المضاف حديثاً</Dropdown.Item>
      <Dropdown.Item href="#/action-3">المضاف حديثاً</Dropdown.Item>
      <Dropdown.Item href="#/action-3">المضاف حديثاً</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  )
}

export default DrobDown