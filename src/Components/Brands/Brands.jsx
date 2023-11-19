import React from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import * as Pic from '../../Assets'
import BrandCard from './BrandCard'
function Brands() {
  return (
    <>
        <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        <Row>
                <BrandCard img={Pic.brand1} />
                <BrandCard img={Pic.brand2} />
                <BrandCard img={Pic.brand3} />
                <BrandCard img={Pic.brand2} />
                <BrandCard img={Pic.brand1} />
                <BrandCard img={Pic.brand3} />
        
        </Row>
   
    </>
  )
}

export default Brands