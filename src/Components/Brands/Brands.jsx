import React,{useEffect} from 'react'
import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import BrandCard from './BrandCard'
import getAllBrandsHook from '../../Redux/Actions/BrandsActions';
import { useSelector,useDispatch } from 'react-redux';

function Brands({title,control}) {
  const brands = useSelector(state => state.brands.brands)
  const dispatch = useDispatch()
const page =0
  useEffect(() => {
    dispatch(getAllBrandsHook(page ,10))
  }, [dispatch,brands.data])

  return (
    <>
       {title === undefined? <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        :null
       }
       <Row>
        {brands.data && brands.data.slice(0,6).map((brand, index) => (
          
            <BrandCard title={brand.name} key={index} img={brand.image} control={control} id={brand._id}/>
          
        ))}
        
        
        </Row>
   
    </>
  )
}

export default Brands