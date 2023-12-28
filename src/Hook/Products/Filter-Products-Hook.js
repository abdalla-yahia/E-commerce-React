import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getAllProductsInSearch } from '../../Redux/Actions/ProductsActions'
import GetAllCategoriesHooks from '../Category/Get-All-Categories-Hools';
import GetAllBrandsHooks from '../Brands/Get-all-brands-hook';

function FilterProducts() {


    const dispatch =useDispatch()
    const products = useSelector(state=>state.products.productsInSearch)
    const [,,,,,,categories] =GetAllCategoriesHooks()
    const [brands,,,] = GetAllBrandsHooks()

    const [page,setPage] = useState('')
    const [sort,setSort] = useState('')
    const [sortKind,setSortKind] = useState('')
    const [search,setSearch] = useState('')
    const [categoryID,setCategoryID] = useState([])
    const [cat,setCat] =useState([])
    const [brandID,setBrandID] = useState([])
    const [brand,setBrand] =useState([])
    const [startPrice,setStartPrice] = useState(0)
    const [endPrice,setEndPrice] = useState(100000)
    const [isShecked,setIsShecked] = useState(false)
    const [isSheckedBrand,setIsSheckedBrand] = useState(false)

    // Function to filter on Dropdown Component
    const onchangeFilter =()=>{
      setSort(localStorage.getItem('sort'))
    }
    // Function to Get Word Search in Navbar Component
    const onchangeSearch = (e)=>{
      setSearch(localStorage.getItem('search'))
    }
    //Function to Get Category Id To Filter Search Of Category
    const  clickedHandeller =(e)=>{
      if(e.target.checked){
        setCategoryID(res=>{return [...res,(e.target.value)]})
        categories.data.length === categoryID.length && setIsShecked(true)
        }else{
        setCategoryID(categoryID.filter(ele=>ele !== e.target.value))
        categories.data.length !== categoryID.length && setIsShecked(false)
        }
      }
    const  clickedHandeller2 =(e)=>{
      if(e.target.className.includes('btn-light')){
        e.target.classList.remove('btn-light') 
         e.target.classList.add('btn-dark')
      }else{
        e.target.classList.remove('btn-dark')
         e.target.classList.add('btn-light')
      }

      if(e.target.className.includes('btn-light')){
        setCategoryID(res=>{return [...res,(e.target.value)]})
      }else{
        setCategoryID(categoryID.filter(ele=>ele !== e.target.value))
      }
      
      }
      // Function to Get Brands Id To Filter Search Of Brand
    const  clickedHandellerBrands =(e)=>{
      if(e.target.checked){
        setBrandID(res=>{return [...res,(e.target.value)]})
        brands.data.length === brandID.length && setIsSheckedBrand(true)
        }else{
        setBrandID(brandID.filter(ele=>ele !== e.target.value))
        categories.data.length !== brandID.length && setIsSheckedBrand(false)
        }
      }

      //Function to Get Start Price Search
      const getStartPrice = (e)=>{
        setStartPrice(e.target.value)
      }
      //Function to Get End Price Search
      const getEndPrice = (e)=>{
        (e.target.value == 0 || e.target.value === '') ? setEndPrice(1000000):
        setEndPrice(e.target.value)
      }
useEffect(()=>{
  //Set the category 
  categories.data &&
    setCat(categories.data.map((e,i)=>
<span key={i}>
  <input className='ms-2' type='checkbox' checked={categoryID.includes(e._id)}  value={e._id} id={e._id} onClick={(e)=>{clickedHandeller(e)}}/>
  <label htmlFor={e._id}>{e.name}</label>
  </span> 
  ))
  categories.data&& categories.data.length === categoryID.length ? setIsShecked(true):setIsShecked(false)
  //Set the Brands
  brands.data &&
    setBrand(brands.data.map((e,i)=>
<span key={i}>
  <input className='ms-2' type='checkbox' checked={brandID.includes(e._id)}  value={e._id} id={e._id} onClick={(e)=>{clickedHandellerBrands(e)}}/>
  <label htmlFor={e._id}>{e.name}</label>
  </span> 
  ))
  brands.data&& brands.data.length === brandID.length ? setIsSheckedBrand(true):setIsSheckedBrand(false)

},[categories,brands,brandID,categoryID,dispatch])

useEffect(()=>{
        setTimeout(()=>{
          localStorage.setItem('category',JSON.stringify(categoryID))
          localStorage.setItem('brands',JSON.stringify(brandID))
          localStorage.setItem('startPrice',startPrice)
          localStorage.setItem('endPrice',endPrice)
        },100)
},[categoryID,brandID,startPrice,endPrice])

let cats = JSON.parse(localStorage.getItem('category'));
let Brans = JSON.parse(localStorage.getItem('brands'));

useEffect(()=>{
      setStartPrice(localStorage.getItem('startPrice'))
      setEndPrice(localStorage.getItem('endPrice'))
      setSort(localStorage.getItem('sort'))
      setSearch(localStorage.getItem('search'))
      setTimeout(()=>{
        setCategoryID(cats)
        setBrandID(Brans)
      },100)

          if(sort !== ''){
            if(sort==='الكل'){
              localStorage.setItem('search','')
              localStorage.setItem('sort','')
              setSortKind('')
              setSearch('')
            }else if(sort==='السعر من الأقل إلى الأعلى'){
              setSortKind('+price')
            } else if(sort==='السعر من الأعلى إلى الأقل'){
              setSortKind('-price')
            }
             else if(sort==='الأكثر مبيعاً'){
              setSortKind('-quantity')
            }
          }
},[sort,search])

let Brands =brandID.length >=1 ? brandID.map(e=>`brand=${e}`):[]
let Categories =categoryID.length >=1 ? categoryID.map(e=>`category=${e}`):[]
let query = `sort=${sortKind}&limit=5&page=${page}&keyword=${search}&${Categories.join('&')}&${Brands.join('&')}&price[gte]=${startPrice}&price[lte]=${endPrice}`
useEffect(()=>{
  setTimeout(()=>{
    if(categoryID.length){
      dispatch(getAllProductsInSearch(query))
    }
  },100)
},[sortKind,search,categoryID,brandID,startPrice,endPrice,page])
//  [sortKind,search,categoryID,brandID,startPrice,endPrice,page]
    
    //Function To get All Categories in the AsideFilter Component
    const AllCheckedCategoryHandeller =(el) => {
     setIsShecked( !isShecked)
      if(el.target.checked ){
        setCategoryID([])
        categories.data && setCategoryID(categories.data.map((e)=>e._id))
      }else {
        categories.data && setCategoryID([])
      }
    }
    
    //Function To get All Brands in the AsideFilter Component
    const AllCheckedBrandsHandeller =(el) => {
     setIsSheckedBrand( !isSheckedBrand)
      if(el.target.checked ){
        setBrandID([])
        brands.data && setBrandID(brands.data.map((e)=>e._id))
      }else {
        brands.data && setBrandID([])
      }
    }

  return (
    [clickedHandeller,AllCheckedCategoryHandeller,cat,products,onchangeFilter,onchangeSearch,isShecked,brand,AllCheckedBrandsHandeller,isSheckedBrand,getStartPrice,getEndPrice,startPrice,endPrice,setPage,clickedHandeller2]
  )
}

export default FilterProducts