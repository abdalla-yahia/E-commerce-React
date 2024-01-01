import { Button, Container, Nav, Navbar } from "react-bootstrap";
import GetAllCategoriesHooks from "../../Hook/Category/Get-All-Categories-Hools";
import { useState } from "react";
import FilterProducts from "../../Hook/Products/Filter-Products-Hook";

export default function SubNav() {
  const [,,,,,,categories] =GetAllCategoriesHooks()
  const [isShecked2,setIsShecked] = useState(false)
  const [,,,,,,isShecked,,,,,,,,,clickedHandeller2,AllCheckedCategoryHandeller2,categoryID] =  FilterProducts()
  const clickHandeller = ()=>{
    setIsShecked(!isShecked2)
  }

  return (
    <Navbar data-bs-theme="primary" style={{backgroundColor:'#fff'}}>
        <Container>
        <Nav  className="ms-auto">
            <Button variant={isShecked?'dark':'light'} onClick={(e)=>AllCheckedCategoryHandeller2(e)}>الكل</Button>
            {
              categories.data && categories.data.slice(0,isShecked2?categories.data.length:4).map(category =>
              <Button key={category._id} variant={categoryID.includes(category._id)?'dark':'light'} onClick={(e)=>clickedHandeller2(e)} value={category._id}>{category.name}</Button>
              )
            }
            <Button variant="secondary"  onClick={()=>clickHandeller()}>{isShecked2?'أقل':'المزيد'}...</Button>
          </Nav>
        </Container>
      </Navbar>
  )
}
