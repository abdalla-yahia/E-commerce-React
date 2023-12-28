
import GetAllCategoriesHooks from '../../Hook/Category/Get-All-Categories-Hools'
import FilterProducts from '../../Hook/Products/Filter-Products-Hook'

function AsideFilter() {
  const [,AllCheckedCategoryHandeller,cat,,,,isShecked,brand,AllCheckedBrandsHandeller,isSheckedBrand,getStartPrice,getEndPrice,startPrice,endPrice] = FilterProducts()
  const [,,,,,,categories] =GetAllCategoriesHooks()

  return (
    <div className='d-flex flex-column p-4' style={{maxWidth:'fit-content',backgroundColor:'#fff'}}>
        <div className='d-flex flex-column'>

        <h4>الفئة</h4>
        <span>
         {categories.data&& 
            <input className='ms-2' type='checkbox' checked={isShecked} value='الكل' id='total' onClick={(e)=>AllCheckedCategoryHandeller(e)}/>
          }
        <label htmlFor="total">الكل</label>
        </span>
        {cat}
        <h4>الماركة</h4>
        <span>
        <input className='ms-2' type='checkbox' checked={isSheckedBrand} value='الكل' id='total' onClick={(e)=>AllCheckedBrandsHandeller(e)}/>
        <label htmlFor="total">الكل</label>
        </span>
        {brand}
       
        </div>
        <div className='d-flex flex-column'>

        <h4>السعر</h4>
        <span>
        <label htmlFor="totalStart">من</label>
        <input className='me-2 mb-2' value={startPrice} onChange={(e)=>getStartPrice(e)} type='number' min={0} max={10000}/>
        </span>

        <span>
        <label htmlFor="totalEnd"> إلى</label>
        <input className='me-2 mb-2' value={endPrice} onChange={(e)=>getEndPrice(e)} type='number' min={0} max={10000}/>
        </span>
        </div>
    </div>
  )
}

export default AsideFilter