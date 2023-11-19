import ReactImageGallery from 'react-image-gallery';
import * as Pic from '../../Assets'
import 'react-image-gallery/styles/css/image-gallery.css';
import { Col } from 'react-bootstrap';

function ProductsImgSlider() {
    const images = [
        {original:Pic.mobile,thumbnail:Pic.mobile},
        {original:Pic.mobile1,thumbnail:Pic.mobile1},
        {original:Pic.mobile2,thumbnail:Pic.mobile2},
        {original:Pic.mobile,thumbnail:Pic.mobile},
        {original:Pic.mobile1,thumbnail:Pic.mobile1},
        {original:Pic.mobile2,thumbnail:Pic.mobile2},
    ]
  return (
    <>
    <Col sm='4' lg="3" style={{minHeight:'500px',backgroundColor:'#fff',marginTop:'20px',borderRadius:'10px',padding:'10px'}}>
    <ReactImageGallery items={images} ResizeObserverSize={'500px'} autoPlay={true} defaulteImage={Pic.mobile1} showIndex={true} showNav={false} showFullscreenButton={false} showPlayButton={false}/>
    </Col>
    </>
  )
}

export default ProductsImgSlider