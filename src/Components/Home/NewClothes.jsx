import React from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import { prod1 } from '../../Assets'
import {ProductCart} from '../.'

function NewClothes() {
  return (
    <>
            <Title status={true} more={'المزيد ....'} title={'أحدث الأزياء'} path={'/allproducts'}/>
        
            <Row>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            <ProductCart img={prod1} price={'15000 جنية'} rating={4.7} title={'لاب توب ماك '} Description={'أحدث لاب توب والأقوي والاسرع' }/>
            </Row>
    </>
  )
}

export default NewClothes