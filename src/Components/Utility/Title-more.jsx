import { Link } from "react-router-dom"


function Title({title,more,status,path}) {
  return (
    <>
    <div className="d-flex mt-5 mb-5 justify-content-between">
    <div ><h4>{title}</h4></div>
    {
    status ?
    <Link to={path}>
    <button  className="btn-more">{more}</button>
    </Link>:
    <button style={{visibility:'hidden'}} className="btn-more"></button>}
    </div>
    </>
  )
}

export default Title