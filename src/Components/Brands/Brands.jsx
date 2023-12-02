import { Row } from 'react-bootstrap'
import Title from '../Utility/Title-more'
import BrandCard from './BrandCard'
import Paginations from '../Utility/Pagination';
import GetAllBrandsHooks from '../../Hook/Brands/Get-all-brands-hook'

function Brands({title,control}) {
  
const [brands,pg,getId,pages] = GetAllBrandsHooks()
  return (
    <>
       {title === undefined? <Title status={true} title={'البراندات'} more={'المزيد....'} path={'/allbrands'}/>
        :null
       }
       <Row>
        {brands.data && brands.data.map((brand, index) => (
          
            <BrandCard getId={getId} title={brand.name} key={index} img={brand.image} control={control} id={brand._id}/>
          
            ))}
        </Row>
            <Paginations pages={pages} pg={pg}/>
        
   
    </>
  )
}

export default Brands