import { Button, Col, Container, Row } from "react-bootstrap"
import * as Comp from "../."
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ProductComments() {
   
    
  return (
    <Container>
        <Row>
            <Col sm='12'>
            <div className="d-flex my-5  flex-column justify-content-start">
               
               <div className="d-flex gap-3">
                <h4>التقييمات :</h4>
                <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
               <span>4.3</span>
               <span>(160 تقييم)</span>
               </div>
                <div className="d-flex flex-column gap-3">
                <div>
                <h4>على محمد</h4>
                <span>
                   <Comp.RateProducts />
                </span>
                </div>
                <textarea placeholder="أكتب تعليقك ....." name="" id="" cols="30" rows="3" style={{resize:'none',borderRadius:'10px',padding:'10px',backgroundColor:'#fff'}} ></textarea>
                <div className="d-flex justify-content-end">
                <Button variant="dark" >أضف تعليق</Button>
                </div>
                <hr/>
                <div className="users-comments">
                    <div className="d-flex gap-2">
                        <h4>أحمد محمود</h4>
                        <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
                        <span>4.3</span>
                    </div>
                    <p>منتج جميل ليس به ايى عيوب وسرعة فى الشحن </p>
                        <hr />
                </div>
                <div className="users-comments">
                    <div className="d-flex gap-2">
                        <h4>أحمد محمود</h4>
                        <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
                        <span>4.3</span>
                    </div>
                    <p>منتج جميل ليس به ايى عيوب وسرعة فى الشحن </p>
                        <hr />
                </div>
                <div className="users-comments">
                    <div className="d-flex gap-2">
                        <h4>أحمد محمود</h4>
                        <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
                        <span>4.3</span>
                    </div>
                    <p>منتج جميل ليس به ايى عيوب وسرعة فى الشحن </p>
                        <hr />
                </div>
                <div className="users-comments">
                    <div className="d-flex gap-2">
                        <h4>أحمد محمود</h4>
                        <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
                        <span>4.3</span>
                    </div>
                    <p>منتج جميل ليس به ايى عيوب وسرعة فى الشحن </p>
                        <hr />
                </div>
                <div className="users-comments">
                    <div className="d-flex gap-2">
                        <h4>أحمد محمود</h4>
                        <FontAwesomeIcon icon={faStar} beat color="gold" size="lg"/>
                        <span>4.3</span>
                    </div>
                    <p>منتج جميل ليس به ايى عيوب وسرعة فى الشحن </p>
                        <hr />
                </div>
                </div>
            </div>
            </Col>
            <Comp.Pagination/>
        </Row>
    </Container>
  )
}

export default ProductComments