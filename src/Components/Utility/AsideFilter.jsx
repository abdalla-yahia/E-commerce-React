import React, { useEffect, useState } from 'react'
import GetAllCategoriesHooks from '../../Hook/Category/Get-All-Categories-Hools'
import GetAllBrandsHooks from '../../Hook/Brands/Get-all-brands-hook'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsOfCategory } from '../../Redux/Actions/ProductsActions'
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook'

function AsideFilter() {
  // const [,clickedHandeller,AllCheckedCategoryHandeller,cat] = GetAllproductsHook()
  const products = useSelector(state=>state.products.productsCategory)
  const [,,,,,,categories] =GetAllCategoriesHooks()
  const [brands,,,] = GetAllBrandsHooks()
  const [cat,setCat] =useState([])
  const [result,setresult] =useState([])
  const [isCheked,setIsCheked] =useState(false)

  const dispatch =useDispatch()

let clickedHandeller =async (e,el) =>{
  if(el.target.checked){
    if(!cat.includes(e)){
      setCat(rea=>[...cat,e])
    }
    dispatch(getProductsOfCategory(e))
  }else{
      if(cat.includes(e)){
        setCat(cat.filter(c=>c!==e))
      }
      setresult(result.filter(ele=>ele.category!==e))
    }
    
}
useEffect(()=>{
      setTimeout(()=>{
        products.data&& setresult(res=>[res,products.data])
      },100)
      
    },[dispatch,products.data])
console.log(result)


const AllCheckedCategoryHandeller =(el) => {
  if(el.target.checked ){
    setIsCheked(true)
    setCat(categories.data.map((e,i)=>e._id))
    setresult([])
  }else{
    setIsCheked(false)
    setCat([])
  }
}
  useEffect(()=>{
    if(cat.length){
    cat.map(e=> dispatch(getProductsOfCategory(e)))
    setresult([result,products.data])
  }else{
    setresult(dispatch(getAllProducts('sort=')))
    }
  },[cat])

  // categories.data&& console.log(categories.data.length,cat.length)
  return (
    <div className='d-flex flex-column p-4' style={{maxWidth:'fit-content',backgroundColor:'#fff'}}>
        <div className='d-flex flex-column'>

        <h4>الفئة</h4>
        <span>
         {categories.data&& 
            cat.length === categories.data.length ?
            <input className='ms-2' type='checkbox' checked value='الكل' id='total' onClick={(e)=>AllCheckedCategoryHandeller(e)}/>
            :
            <input className='ms-2' type='checkbox' value='الكل' id='total' onClick={(e)=>AllCheckedCategoryHandeller(e)}/>
          }
        <label htmlFor="total">الكل</label>
        </span>
        {
          categories.data && categories.data.map((e,i)=>
        <span key={i}>
          {cat.includes(e._id)?<input className='ms-2' type='checkbox' checked value={e._id} id={e._id} onClick={(el)=>clickedHandeller(e._id,el)}/>
            :
            <input className='ms-2' type='checkbox'  value={e._id} id={e._id} onClick={(el)=>clickedHandeller(e._id,el)}/>
        }
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