import React from 'react'
import * as Comp from '../../Components'
import { Container, Row } from 'react-bootstrap'
import * as Pic from '../../Assets'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProduct } from '../../Redux/Actions/ProductsActions'
import { getOneCategory } from '../../Redux/Actions/CategoryActions'
import { getOneBrand } from '../../Redux/Actions/BrandsActions'
function ProductPageDetails() {

  const id = window.localStorage.getItem('ID')
  const cat = window.localStorage.getItem('cat')
  const brand = window.localStorage.getItem('brand')

  const products = useSelector(state=>state.products.oneProduct)
  const oneCategory  = useSelector(state=>state.categories.oneCategory)
  const oneBrand  = useSelector(state=>state.brands.onebrand)

  const dispatch = useDispatch()
  

    useEffect(()=>{
      setTimeout(()=>{
        dispatch(getProduct(id))
        dispatch(getOneCategory(cat))
        dispatch(getOneBrand(brand))
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
      />
      </Row>
      <Row>
        <Comp.ProductComments />
      </Row>
      <Row>
        <Comp.Title title={'منتجات قد تعجبك'}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod3} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.prod1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod4} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile2} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.mobile1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.Prod3} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
        <Comp.ProductCart fav={true} car={true} img={Pic.prod1} title={'أدوات مطبخ'} Description={'أي كلام مش مهم خالص'} price={'3200 جنية'} rating={4.5}/>
      </Row>
    </Container>
    </div>
  )
}

export default ProductPageDetails

//بلوزة حريمي بجودة عالية فى التفصيل وخامة عالية فى التصنيع واريحية كبيرة فى الحركة لما تحتوية من اجود انواع الخيوط العالمية 