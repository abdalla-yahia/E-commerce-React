import React, { useEffect, useMemo, useRef, useState } from 'react'
import GetAllCategoriesHooks from '../../Hook/Category/Get-All-Categories-Hools'
import GetAllBrandsHooks from '../../Hook/Brands/Get-all-brands-hook'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsOfCategory } from '../../Redux/Actions/ProductsActions'

function AsideFilter() {
  const products = useSelector(state=>state.products.productsCategory)
  const [,,,,,,categories] =GetAllCategoriesHooks()
  const [brands,,,] = GetAllBrandsHooks()
  const [cat,setCat] =useState([])
  const [ischecked,setIschecked] =useState(false)
  const [result,setresult] =useState([])

  const dispatch =useDispatch()
  const inputCategory = useRef()
  useEffect(()=>{
    if(cat.length){
    cat.map(e=>dispatch(getProductsOfCategory(e)))
    }
  },[cat,ischecked])

//   useEffect(()=>{
//   if(products.data){
//     setresult([...result,...products.data])
//   }
// },[dispatch,ischecked])

// result.length&&console.log(result)
const clickedHandeller =async (e) =>{
  if(e.target.checked){
    await setCat([...cat,e.target.value])
    
  }else{
    await cat.length&& setCat(cat.filter(el=>el!==e.target.value))
  }
}
const chickedHandeller = (e) =>{
  if(e.target.checked){
    setCat([...cat,e])
  }else{
    cat.length&& setCat(cat.filter(el=>el!==e))
  }
  return (!e.target.checked)
  // setIschecked(!ischecked)
// console.log(ischecked)
}

const AllCheckedCategoryHandeller =(el) => {
  if(el.target.checked ){
    console.log(inputCategory)
    setIschecked(true)
  }else{
    inputCategory.current.checked = false

    setIschecked(false)
  }
  }
console.log(cat)
  return (
    <div className='d-flex flex-column p-4' style={{maxWidth:'fit-content',backgroundColor:'#fff'}}>
        <div className='d-flex flex-column'>

        <h4>الفئة</h4>
        <span>
        <input className='ms-2' type='checkbox' value='الكل' id='total' onClick={(e)=>AllCheckedCategoryHandeller(e)}/>
        <label htmlFor="total">الكل</label>
        </span>
        {
          categories.data && categories.data.map(e=>
            <span>
          <input className='ms-2' type='checkbox' ref={inputCategory} value={e._id} id={e._id} onClick={(e)=>clickedHandeller(e)}/>
          
            <label htmlFor={e._id}>{e.name}</label>
            </span>
          )
        }
        

        <h4>الماركة</h4>
        <span>
        <input className='ms-2' type='checkbox' value='الكل' id='total'/>
        <label htmlFor="total">الكل</label>
        </span>
        {
          brands.data && brands.data.map(e=>
            
        <span>
        <input className='ms-2' type='checkbox' value={e.name} id='total'/>
        <label htmlFor="total">{e.name}</label>
        </span>
            )
        }
       
        </div>
        <div className='d-flex flex-column'>

        <h4>السعر</h4>
        <span>
        <label htmlFor="total">من</label>
        <input className='me-2 mb-2' type='number' min={0} max={10000}/>
        </span>
        <span>
        <label htmlFor="total"> إلى</label>
        <input className='me-2 mb-2' type='number' min={0} max={10000}/>
        </span>
        </div>
    </div>
  )
}

export default AsideFilter