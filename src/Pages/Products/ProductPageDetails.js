import * as Comp from '../../Components'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  getProduct,getProductsOfCategory,getProductsOfBrand } from '../../Redux/Actions/ProductsActions'
import { getOneCategory } from '../../Redux/Actions/CategoryActions'
import { getOneBrand } from '../../Redux/Actions/BrandsActions'
import { useParams } from 'react-router-dom'
function ProductPageDetails() {
const {id}= useParams()
  const cat = window.localStorage.getItem('cat')
  const brand = window.localStorage.getItem('brand')

  // const Allproducts = useSelector(state=>state.products.products)
  const products = useSelector(state=>state.products.oneProduct)
  const oneCategory  = useSelector(state=>state.categories.oneCategory)
  const oneBrand  = useSelector(state=>state.brands.onebrand)
  const productsOfCat = useSelector(state=>state.products.productsCategory)
  const productsOfBrand = useSelector(state=>state.products.productsBrands)
  // const productsOfSubCat = useSelector(state=>state.products.productsSubCategory)

  const dispatch = useDispatch()
  

    useEffect(()=>{
      setTimeout(()=>{
        dispatch(getProduct(id))
        dispatch(getOneCategory(cat))
        dispatch(getOneBrand(brand))
        dispatch(getProductsOfCategory(cat))
        dispatch(getProductsOfBrand(brand))
      },100) 
      
    },[id,dispatch,cat,brand])




  return (
    <div style={{minHeight:'670px'}}>
    <Comp.SubNav />
    <Container>
      <Row>
    <Comp.ProductsImgSlider imgs={products.data && products.data.images}/>
      <Comp.ProductDitails 
      cat={oneCategory.data&& oneCategory.data.name}
      title={products.data && products.data.title} 
      describtion={products.data && products.data.description}
      price={products.data && products.data.price}
      colors={products.data && products.data.availableColors}
      brand={oneBrand.data && oneBrand.data.name}
      quantity={products.data && products.data.quantity}
      />
      </Row>
      <Row>
        <Comp.ProductComments />
      </Row>
      <Row>
        <Comp.Title title={'منتجات قد تعجبك'}/>
        {
          productsOfCat.data && productsOfCat.data.slice(0,4).map(e=>
            <Comp.ProductCart cat={e.category} brand={e.brand} fav={true} car={true} img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={4.5} id={e._id}/>
          )
        }
        
        
      </Row>
    </Container>
    </div>
  )
}

export default ProductPageDetails
