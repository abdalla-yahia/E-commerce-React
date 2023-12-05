import { Container, Row } from "react-bootstrap"
import ProductCart from "../Products/ProductCart"
import { useDispatch,useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getAllProducts } from "../../Redux/Actions/ProductsActions"
function AdminProducts() {
  const [length,setLength] = useState(0)
  const products = useSelector((state) => state.products.products)
  const dispatch = useDispatch()

useEffect(()=>{
  setLength(products.data && products.data.length)
dispatch(getAllProducts())
},[dispatch,length])


  return (
    <Container>
        <Row>
            {products.data&& products.data.map(e=><ProductCart brand={e.brand} cat={e.category} id={e._id} contr={true} img={e.imageCover} title={e.title}Description={e.description}price={`${e.price} جنية`} rating={4.5}/>)}
        </Row>
    </Container>
  )
}

export default AdminProducts