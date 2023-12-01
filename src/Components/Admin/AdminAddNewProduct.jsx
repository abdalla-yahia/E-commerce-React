import * as Pic from '../../Assets';
import Multiselect from 'multiselect-react-dropdown';
import getAllSubCategory from '../../Redux/Actions/SubCategoryActions';
import getAllCategories from '../../Redux/Actions/CategoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TostifyLiprary, { notify } from '../Utility/TostifyLiprary';
import {createProduct} from '../../Redux/Actions/ProductsActions'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
function AdminAddNewProduct() {
    const [ID,setID] = useState('')
    const [subcategory,setSubCategor] = useState([])
    const [brand,setBrand] = useState('')
    const [img,setImage] = useState(Pic.avatar)
    const [path,setPath] = useState(null)
    const [name,setName] = useState('')
    const [description,setDesc] = useState('')
    const [totalPrice,setTotalPrice] = useState(0)
    const [netPrice,setNetPrice] = useState(0)
    const [colors,setColors] = useState([])

    const categories = useSelector(state=>state.categories.categories)
    const brands = useSelector(state=>state.brands.brands)
    const subCat = useSelector(state=>state.subCategories.subCategories)
    const state = {
        options: []
    };
    const dispatch = useDispatch();
    const UploadHandeller = (e)=>{
        if(e.target.files[0]){

            setImage(URL.createObjectURL(e.target.files[0]))
            setPath(e.target.files[0])
        }
    }

    const formdata = new FormData()
    formdata.append('image',path)
    formdata.append('name',name)
    formdata.append('category[in][]',ID)
    formdata.append('brand',brand)
    formdata.append('subCategory',subcategory)
    formdata.append('price[gte]',netPrice)
    formdata.append('discount',totalPrice)
    formdata.append('description',description)
    formdata.append('colors',colors)
    formdata.append('quantity',1)
    
    const sendDataHNDELLER=()=>{
        if(ID!== '' && img!== '' && path!== null){
            dispatch(createProduct(formdata))
            notify('success')
            setID('')
            setImage(Pic.avatar)
            setPath(null)
        }else{
            notify('warning')
        }
    }
    useEffect(()=>{
        dispatch(getAllSubCategory(ID))
        dispatch(getAllCategories())
        dispatch(getAllBrandsHook())
    },[ID,dispatch])
    if(subCat.data){
        state.options =subCat.data && subCat.data.map(e=>({name:e.name, id: e._id}))
    }
    const onSelect=(selectedList, selectedItem)=> {
    setSubCategor( [...subcategory,selectedItem ])
    }
    
    const onRemove=(selectedList, removedItem)=> {
        setSubCategor([...selectedList.filter(item=>item.id !== removedItem.id)])
    }

    return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form method='git' onSubmit={(e)=>e.preventDefault()} className='d-flex flex-column gap-2 w-100'>
            <div className='d-flex w-75 justify-content-between'>
            <span>صورة المنتج</span>
            {img!==Pic.avatar&&<span style={{cursor:'pointer'}} onClick={()=>setImage(Pic.avatar)}>
                <FontAwesomeIcon icon={faTrash}/>
            </span>}
            </div>
            <label htmlFor='upload' style={{cursor:'pointer'}}>
            <img src={img} alt="avatar" width={200} />
            </label>
            <input type="file" style={{opacity:'0'}} name="" id="upload" onChange={(e)=>UploadHandeller(e)}/>
            <input type="text" onChange={(e)=>setName(e.target.value)} id="" placeholder='اسم المنتج' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea onChange={(e)=>setDesc(e.target.value)} style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='وصف المنتج ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input onChange={(e)=>setTotalPrice(e.target.value)} type="text" name="" id="" placeholder='السعر قبل الخصم ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input onChange={(e)=>setNetPrice(e.target.value)} type="text" name="" id="" placeholder='سعر المنتج   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <select onChange={(e)=>setID(e.target.value)} name="" id=""  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled selected value={'اختر التصنيف ...'}>اختر التصنيف ...</option>
            {categories.data&& categories.data.map(e=><option value={e._id} > {e.name}</option>)}
            
        </select>
            <Multiselect
                options={state.options} 
                selectedValues={state.selectedValue} 
                onSelect={onSelect} 
                onRemove={onRemove} 
                displayValue="name" 
                className='w-75 rounded-3 border border-2  px-3 py-2'
                placeholder='اختر التصنيف الفرعي....'
                emptyRecordMsg='لا توجد تفريعات لهذا التصنيف'
                />
            <select name="" id="" onChange={(e)=>setBrand(e.target.value)}  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled selected value={'اختر الماركة ...'}>اختر الماركة ...</option>
            {brands.data && brands.data.map(e=><option value={e._id}> {e.name}</option>)}
            
        </select>
        <div className='d-flex flex-column m-3'>
        <span className='my-2'>الألوان المتاحة</span>
        <spn className='d-flex gap-3  align-items-center'>
            {colors.length && colors.map((e,i)=><p title='حذف' onClick={()=>setColors(colors.filter(el=>el !== e))} style={{cursor:'pointer',width:'30px',height:'30px',border:'2px solid',borderRadius:'50%',backgroundColor:e}}></p>)}
            <label style={{cursor:'pointer'}} htmlFor='color'>
            <FontAwesomeIcon icon={faPlus}/>
            </label>
            <input type="color" name="" id="color" value={null} style={{opacity:'0'}} onInput={(e)=>setColors([...colors,e.target.value])}/>
        </spn>
        </div>
        <div className='w-75 d-flex justify-content-end gap-3 align-items-end flex-column mb-5'>
        <button onClick={()=> sendDataHNDELLER()} className='btn btn-dark w-25' style={{float:'left'}} type='submit'>حفظ المنتج</button>
        </div>
        </form >
        <TostifyLiprary />
    </div>
  )
}

export default AdminAddNewProduct