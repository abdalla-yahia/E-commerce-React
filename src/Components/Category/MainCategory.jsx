import { Col, Container, Row } from "react-bootstrap"
import ElementCategory from "./ElementCategory";
import Title from "../Utility/Title-more";
import Paginations from "../Utility/Pagination";
import GetAllCategoriesHooks from '../../Hook/Category/Get-All-Categories-Hools'
const Colors = ['#26a69a','#8d6e63','#e57373','#f48fb1','#81c784','#aed581','#7e57c2','#fff176','#7986cb']
function MainCategory({title,control}) {
const [pages,,getID,pg,,,categories] = GetAllCategoriesHooks()

  return (
    <>
    <Container >
      { title === undefined ?(<Title title={'التصنيفات'} status={true} more={'....المزيد'} path={'/allcategory'}/>)
      :null}
        <Row >
        <Col  lg='12'  style={{backgroundColor:'#fff'}} className='d-flex p-3 flex-wrap justify-content-between align-items-center'>
                {
                categories.data && categories.data.map((item,index)=>(
                    <ElementCategory getID={getID} control={control} id={item._id} key={index} img={item.image}  title={item.name} color={Colors[Math.floor(Math.random() * Colors.length)]}/>
                  ))
                }
            </Col>
            <Paginations pages={pages}  pg={pg}/>
        </Row>

    </Container>
                </>
  )
}

export default MainCategory