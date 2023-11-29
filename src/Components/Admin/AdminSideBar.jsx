import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBrain, faCartShopping, faCopyright, faCrutch, faDiagramSuccessor, faFilterCircleDollar, faSquarePlus } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { faProductHunt } from "@fortawesome/free-brands-svg-icons"

function AdminSideBar() {
  return (
        <>
        <div style={{backgroundColor:'#fff'}} className=' rounded-2 d-flex  flex-column justify-content-center pt-3 pb-5 align-items-center'>
                
                <Link to='/adminhomepage/adminallorders' className="text-decoration-none text-dark w-100 d-flex ">
            <div title='كل الطلبات' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon  className="admin-dash-icon " icon={faCartShopping}/>
                <p className="admin-dash-title ">كل الطلبات</p>
            </div>
                </Link>
                <Link to='/adminhomepage/adminproductsedit' className="text-decoration-none text-dark w-100">
            <div title='إدارة المنتجات ' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faProductHunt}/>
                <p className="admin-dash-title "> إدارة المنتجات</p>
            </div>
                </Link>
                <Link to='/adminhomepage/adminallbrands' className="text-decoration-none text-dark w-100">
            <div title='إدارة الماركات' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faBrain}/>
                <p className="admin-dash-title "> إدارة الماركات</p>
            </div>
                </Link>
                <Link to='/adminhomepage/adminallcategories' className="text-decoration-none text-dark w-100">
            <div title='إدارة التصنيفات' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCrutch}/>
                <p className="admin-dash-title "> إدارة التصنيفات</p>
            </div>
                </Link>
                <Link to='/adminhomepage/adminbrandsedit' className="text-decoration-none text-dark w-100">
            <div title='إضافة ماركة' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faCopyright}/>
                <p className="admin-dash-title "> إضافة ماركة</p>
            </div>
                </Link>
                <Link to='/adminhomepage/admineditcategory' className="text-decoration-none text-dark w-100">
            <div title='إضافة تصنيف' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faFilterCircleDollar}/>
                <p className="admin-dash-title ">إضافة تصنيف </p>
            </div>
                </Link>
                <Link to='/adminhomepage/adminesubcategory' className="text-decoration-none text-dark w-100">
            <div title='إضافة تصنيف فرعي' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faDiagramSuccessor}/>
                <p className="admin-dash-title "> إضافة تصنيف فرعي</p>
            </div>
                </Link>
                <Link to='/adminhomepage/admineaddproducts' className="text-decoration-none text-dark w-100">
            <div title='إضافة منتج' className=" admin-dash pt-3 d-flex flex-column  justify-content-center  align-items-center w-100">
                <FontAwesomeIcon className="admin-dash-icon " icon={faSquarePlus}/>
                <p className="admin-dash-title "> إضافة منتج </p>
            </div>
                </Link>
            




        </div>
        </>
  )
}

export default AdminSideBar