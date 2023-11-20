import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping, faCopyright, faDiagramSuccessor, faFilterCircleDollar, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faProductHunt } from "@fortawesome/free-brands-svg-icons"

function AdminSideBar() {
  return (
        <>
        <div style={{backgroundColor:'#fff'}} className='py-3 rounded-2 d-flex gap-3 flex-column justify-content-start align-items-center'>
                
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminallorders' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCartShopping}/>
                <h4 className="admin-dash-title ">كل الطلبات</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminproductsedit' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faProductHunt}/>
                <h4 className="admin-dash-title "> إدارة المنتجات</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminbrandsedit' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCopyright}/>
                <h4 className="admin-dash-title "> إدارة الماركات</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/admineditcategory' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faFilterCircleDollar}/>
                <h4 className="admin-dash-title ">إدارة التصنيفات </h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminesubcategory' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faDiagramSuccessor}/>
                <h4 className="admin-dash-title "> إضافة تصنيف فرعي</h4>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/admineaddproducts' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faSquarePlus}/>
                <h4 className="admin-dash-title "> إضافة منتج </h4>
                </Link>
            </div>
            




        </div>
        </>
  )
}

export default AdminSideBar