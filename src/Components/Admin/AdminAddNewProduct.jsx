import * as Pic from '../../Assets';
import Multiselect from 'multiselect-react-dropdown';
import getAllSubCategory from '../../Redux/Actions/SubCategoryActions';
import getAllCategories from '../../Redux/Actions/CategoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import TostifyLiprary, { notify } from '../Utility/TostifyLiprary';
import {createProduct, getAllProducts} from '../../Redux/Actions/ProductsActions'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';

function AdminAddNewProduct() {
    const products = useSelector(state=>state.products.products)
    const [ID,setID] = useState('')
    const [subcategory,setSubCategor] = useState([])
    const [brand,setBrand] = useState('')
    const [images, setImages] = useState([])
    const [path,setPath] = useState([])
    const [name,setName] = useState('')
    const [description,setDesc] = useState('')
    const [totalPrice,setTotalPrice] = useState(0)
    const [netPrice,setNetPrice] = useState(0)
    const [quantity,setQuantaty] = useState(0)
    const [colors,setColors] = useState([])
    const [showColors,setShowColors] = useState(false)

    const categories = useSelector(state=>state.categories.categories)
    const brands = useSelector(state=>state.brands.brands)
    const subCat = useSelector(state=>state.subCategories.subCategories)
    const state = {
        options: []
    };
    const dispatch = useDispatch();

    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }
    
    const onSelect=(selectedList, selectedItem)=> {
        setSubCategor( [...subcategory,selectedItem.id ])
        }
        
        const onRemove=(selectedList, removedItem)=> {
            setSubCategor([...subcategory.filter(item=>item !== removedItem.id)])
        }
    const sendDataHNDELLER= async()=>{
       
        // if(subcategory.length!== 0 && name!== '' && brand!== '' && description!== '' && totalPrice!== 0 && netPrice!== 0 && quantity!== 0 && images.length!== 0 && colors.length!== 0 && path.length!== 0){

  const  newImg =images.length && await  dataURLtoFile(images[0],Math.random()+'.png')
  console.log(newImg)
  const formdata = new FormData()
  formdata.append('images',newImg)
  formdata.append('imageCover',newImg[0])
  formdata.append('title',name)
  formdata.append('category',ID)
  formdata.append('brand',brand)
  formdata.append('subcategory',subcategory)
  formdata.append('price',netPrice)
  formdata.append('discount',totalPrice)
  formdata.append('description',description)
  formdata.append('availableColors',colors)
  formdata.append('quantity',quantity)
  
  if(ID!== '' && images!== '' && path!== null){
      dispatch(createProduct(formdata))
      notify('success')
      setID('')
      // setImages(Pic.avatar)
      setPath(null)
    }else{
        notify('warning')
    }
        // }
    dispatch(getAllProducts())
}
    useEffect(()=>{
        dispatch(getAllSubCategory(ID))
        dispatch(getAllCategories())
        dispatch(getAllBrandsHook())
    },[ID,dispatch])
    if(subCat.data){
        state.options =subCat.data && subCat.data.map(e=>({name:e.name, id: e._id}))
    }

console.log(products)
    return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form method='git' onSubmit={(e)=>e.preventDefault()} className='d-flex flex-column gap-2 w-100'>
            <span>صور المنتج</span>
            <div className=' w-75'>
        
            <MultiImageInput
            images={images}
            setImages={setImages}
            allowCrop={false}
            max={5}
            theme={{
                background: '#ffffff',
                outlineColor: '#ddd',
                textColor: 'rgba(255,255,255,0.9)',
                buttonColor: '#ff0e1f',
                modalColor: '#ffffff',
            }}
            />
            </div>
            
            <input type="text" onChange={(e)=>setName(e.target.value)} id="" placeholder='اسم المنتج' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea onChange={(e)=>setDesc(e.target.value)} style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='وصف المنتج ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input onChange={(e)=>setTotalPrice(e.target.value)} type="text" name="" id="" placeholder='السعر قبل الخصم ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input onChange={(e)=>setNetPrice(e.target.value)} type="text" name="" id="" placeholder='سعر المنتج   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input onChange={(e)=>setQuantaty(e.target.value)} type="text" name="" id="" placeholder='الكمية المتاحة   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
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
                className='w-75 rounded-3 border border-2  px-3 py-2 bg-light'
                placeholder='اختر التصنيف الفرعي....'
                emptyRecordMsg='لا توجد تفريعات لهذا التصنيف'
                />
            <select name="" id="" onChange={(e)=>setBrand(e.target.value)}  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled selected value={'اختر الماركة ...'}>اختر الماركة ...</option>
            {brands.data && brands.data.map(e=><option value={e._id}> {e.name}</option>)}
            
        </select>
        <div className='d-flex flex-column m-3'>
        <span className='my-2'>الألوان المتاحة</span>
        <div style={{minHeight:'100px'}} className='d-flex gap-3 mt-2  align-items-center'>

            {colors && colors.map((e,i)=><div title='حذف' onClick={()=>setColors(colors.filter(el=>el !== e))} style={{cursor:'pointer',width:'30px',height:'30px',border:'1px solid',borderRadius:'50%',backgroundColor:e}}></div>)}

            <div style={{cursor:'pointer',width:'30px',height:'30px',border:'1px solid',borderRadius:'50%'}} className='d-flex justify-content-center align-items-center' onClick={()=>setShowColors(!showColors)}>

            <FontAwesomeIcon icon={faPlus}/>

            </div>
           {showColors && <CompactPicker onChange={(e)=>{setColors([...colors,e.hex]);setShowColors(!showColors)}} />}
        </div>
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