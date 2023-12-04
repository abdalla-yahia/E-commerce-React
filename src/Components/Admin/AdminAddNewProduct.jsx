import Multiselect from 'multiselect-react-dropdown';
import TostifyLiprary from '../Utility/TostifyLiprary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faPlus } from '@fortawesome/free-solid-svg-icons';
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color';
import CreateAnewProductHook from '../../Hook/Products/Create-Anew-Product-Hook';

function AdminAddNewProduct() {
const  [setID,setBrand,images, setImages,name,setName,
    description,setDesc,totalPrice,setTotalPrice,netPrice,setNetPrice,quantity,setQuantaty,colors,setColors
    ,showColors,setShowColors,
    categories,brands,state,onSelect,onRemove,sendDataHNDELLER
] = CreateAnewProductHook()
  


    return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form method='git' onSubmit={(e)=>e.preventDefault()} className='d-flex flex-column gap-2 w-100'>
            <span>صور المنتج</span>
            <div className=' w-75'>
        
            <MultiImageInput
            images={images}
            setImages={setImages}
            
            allowCrop={false}
            max={7}
            theme={{
                background: '#ffffff',
                outlineColor: '#ddd',
                textColor: 'rgba(255,255,255,0.9)',
                buttonColor: '#ff0e1f',
                modalColor: '#ffffff',
            }}
            />
            </div>
            
            <input value={name} type="text" onChange={(e)=>setName(e.target.value)} id="" placeholder='اسم المنتج' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea value={description} onChange={(e)=>setDesc(e.target.value)} style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='وصف المنتج ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input value={totalPrice} onChange={(e)=>setTotalPrice(e.target.value)} type="text" name="" id="" placeholder='السعر قبل الخصم ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input value={netPrice} onChange={(e)=>setNetPrice(e.target.value)} type="text" name="" id="" placeholder='سعر المنتج   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input value={quantity} onChange={(e)=>setQuantaty(e.target.value)} type="text" name="" id="" placeholder='الكمية المتاحة   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <select  onChange={(e)=>setID(e.target.value)}  id=""  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled selected value={'اختر التصنيف ...'}>اختر التصنيف ...</option>
            {categories.data&& categories.data.map(e=><option value={e._id}  > {e.name}</option>)}
            
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
            <select  name="" id="" onChange={(e)=>setBrand(e.target.value)}  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
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