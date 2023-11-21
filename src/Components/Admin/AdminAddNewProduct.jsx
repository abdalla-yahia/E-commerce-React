import * as Pic from '../../Assets';
import Multiselect from 'multiselect-react-dropdown';

function AdminAddNewProduct() {
    const state = {
        options: [{name:'لابتوب', id: 1}
        ,{name: 'موبايلات', id: 3},
        {name: 'شواحن', id: 4},
        {name: 'هاند فري', id: 5},
    ]
    };
   const onSelect=(selectedList, selectedItem)=> {
    
    }
    
    const onRemove=(selectedList, removedItem)=> {
    }
    
  return (
    <div className='d-flex flex-column justify-content-start align-items-start gap-3'>
        <form method='git'  className='d-flex flex-column gap-2 w-100'>
            <span>صورة المنتج</span>
            <img src={Pic.avatar} alt="avatar" width={200} />
            <input type="text" name="" id="" placeholder='اسم المنتج' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <textarea style={{resize:'none'}} name="" id="" cols="30" rows="4" placeholder='وصف المنتج ...' className='w-75 rounded-3 border border-2 outline px-3 py-2'></textarea>
            <input type="text" name="" id="" placeholder='السعر قبل الخصم ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <input type="text" name="" id="" placeholder='سعر المنتج   ' className='w-75 rounded-3 border border-2 outline px-3 py-2'/>
            <select name="" id=""  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled value={'اختر التصنيف ...'}>اختر التصنيف ...</option>
            <option value={'التصنيف الأول'}>التصنيف الأول</option>
            <option value={'التصنيف الثاني'}>التصنيف الثاني</option>
            <option value={'التصنيف الثالث'}>التصنيف الأثالث</option>
            <option value={'التصنيف الرابع'}>التصنيف الرابع</option>
        </select>
            <Multiselect
                options={state.options} 
                selectedValues={state.selectedValue} 
                onSelect={onSelect} 
                onRemove={onRemove} 
                displayValue="name" 
                className='w-75 rounded-3 border border-2  px-3 py-2'
                />
            <select name="" id=""  className='w-75 rounded-3 border border-2 outline px-3 py-2' >
            <option disabled value={'اختر الماركة ...'}>اختر الماركة ...</option>
            <option value={'الماركة الأول'}>الماركة الأول</option>
            <option value={'الماركة الثاني'}>الماركة الثاني</option>
            <option value={'الماركة الثالث'}>الماركة الأثالث</option>
            <option value={'الماركة الرابع'}>الماركة الرابع</option>
        </select>
        <div className='d-flex flex-column m-3'>
        <span className='my-2'>الألوان المتاحة</span>
        <spn className='d-flex gap-3  align-items-center'>
            <p style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'red'}}></p>
            <p style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'green'}}></p>
            <p style={{width:'30px',height:'30px',borderRadius:'50%',backgroundColor:'black'}}></p>
            <img src={Pic.add} alt="add"  width={35}/>
        </spn>
        </div>
        <div className='w-75 d-flex justify-content-end gap-3 align-items-end flex-column mb-5'>
        <button className='btn btn-dark w-25' style={{float:'left'}} type='submit'>حفظ التعديلات</button>
        </div>
        </form >
    </div>
  )
}

export default AdminAddNewProduct