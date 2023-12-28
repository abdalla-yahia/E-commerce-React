import { Button, Container, Nav, Navbar } from "react-bootstrap";
import GetAllCategoriesHooks from "../../Hook/Category/Get-All-Categories-Hools";
import { useState } from "react";
import FilterProducts from "../../Hook/Products/Filter-Products-Hook";

export default function SubNav() {
  const [,,,,,,categories] =GetAllCategoriesHooks()
  const [isShecked,setIsShecked] = useState(false)
  const [clickedHandeller,AllCheckedCategoryHandeller,cat,products,onchangeFilter,onchangeSearch,,brand,AllCheckedBrandsHandeller,isSheckedBrand,getStartPrice,getEndPrice,startPrice,endPrice,setPage,clickedHandeller2] =  FilterProducts()
  const clickHandeller = ()=>{
    setIsShecked(!isShecked)
  }
  return (
    <Navbar data-bs-theme="primary" style={{backgroundColor:'#fff'}}>
        <Container>
        <Nav  className="ms-auto">
            <Button variant="dark" onClick={(e)=>AllCheckedCategoryHandeller(e)}>الكل</Button>
            {
              categories.data && categories.data.slice(0,isShecked?categories.data.length:4).map(category =>
              <Button  variant={'light'} onClick={(e)=>clickedHandeller2(e)} value={category._id}>{category.name}</Button>
              )
            }
            <Button  onClick={()=>clickHandeller()}>{isShecked?'أقل':'المزيد'}...</Button>
          </Nav>
        </Container>
      </Navbar>
  )
}
