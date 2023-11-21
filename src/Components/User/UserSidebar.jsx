import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook, faCartShopping, faPerson } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faProductHunt } from "@fortawesome/free-brands-svg-icons"

function UserSidebar() {
  return (
        <>
        <div style={{backgroundColor:'#fff',margin:' 0 0 20px 0'}} className='py-3 rounded-2 d-flex gap-3 flex-column justify-content-start align-items-center'>
                
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage/allorders' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCartShopping}/>
                <h4 className="admin-dash-title ">كل الطلبات</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage/favproducts' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faProductHunt}/>
                <h4 className="admin-dash-title ">  قائمة المفضلة</h4>
                </Link>
            </div>
             <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage/userAdresses' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faAddressBook}/>
                <h4 className="admin-dash-title "> العناوين </h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage/profile/:id' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faPerson}/>
                <h4 className="admin-dash-title ">  الملف الشخصي</h4>
                </Link>
            </div>
           {/* <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faDiagramSuccessor}/>
                <h4 className="admin-dash-title "> إضافة تصنيف فرعي</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/userhomepage' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faSquarePlus}/>
                <h4 className="admin-dash-title "> إضافة منتج </h4>
                </Link>
            </div> */}
            




        </div>
        </>
  )
}

export default UserSidebar