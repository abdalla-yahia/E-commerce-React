import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import * as Pic from '../../Assets';
import ProductCart from './ProductCart';
function MostSold() {
  return (
    <>
        <Title title={'الأكثر مبيعاً'} more ={'....المزيد'} status={true} path={'/allproducts'}/>
        <Row>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        <ProductCart img={Pic.mobile} price={'5500 جنيه'} title={' موبايل أي فون'} Description={'موبايل أي فون الفئة الحديثة موديل 2024'} rating={'4.3'}/>
        </Row>
    </>
  )
}

export default MostSold