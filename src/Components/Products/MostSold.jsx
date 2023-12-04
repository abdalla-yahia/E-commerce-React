import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import ProductCart from './ProductCart';
import GetAllproductsHook from '../../Hook/Products/Get-All-products-Hook';


function MostSold() {
const [products] = GetAllproductsHook()

  return (
    <>
        <Title title={'الأكثر مبيعاً'} more ={'....المزيد'} status={true} path={'/allproducts'}/>
        <Row>
          {
            products.data && products.data.map(e=>
              
                <ProductCart img={e.imageCover} title={e.title} Description={e.description} price={e.price} rating={e.rating} fav={true} car={true} id={e._id} cat={e.category} brand={e.brand}/>
              
            )
          }
       
       </Row>
    </>
  )
}

export default MostSold



