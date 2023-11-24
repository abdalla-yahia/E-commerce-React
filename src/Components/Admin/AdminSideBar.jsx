import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faCartShopping, faCopyright, faCrutch, faDiagramSuccessor, faFilterCircleDollar, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faProductHunt } from "@fortawesome/free-brands-svg-icons"

function AdminSideBar() {
  return (
        <>
        <div style={{backgroundColor:'#fff'}} className='py-3 rounded-2 d-flex gap-3 flex-column justify-content-start align-items-center'>
                
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminallorders' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCartShopping}/>
                <p className="admin-dash-title ">كل الطلبات</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminproductsedit' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faProductHunt}/>
                <p className="admin-dash-title "> إدارة المنتجات</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminallbrands' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faBrain}/>
                <p className="admin-dash-title "> إدارة الماركات</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminallcategories' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCrutch}/>
                <p className="admin-dash-title "> إدارة التصنيفات</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminbrandsedit' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCopyright}/>
                <p className="admin-dash-title "> إضافة ماركة</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/admineditcategory' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faFilterCircleDollar}/>
                <p className="admin-dash-title ">إضافة تصنيف </p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/adminesubcategory' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faDiagramSuccessor}/>
                <p className="admin-dash-title "> إضافة تصنيف فرعي</p>
                </Link>
            </div>
            <div className="pt-3 admin-dash d-flex flex-wrap text-center justify-content-evenly align-items-center w-100">
                <Link to='/adminhomepage/admineaddproducts' className="text-decoration-none text-dark w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faSquarePlus}/>
                <p className="admin-dash-title "> إضافة منتج </p>
                </Link>
            </div>
            




        </div>
        </>
  )
}

export default AdminSideBar