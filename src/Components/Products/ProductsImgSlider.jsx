import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { Col } from 'react-bootstrap';
import { useState } from 'react';

function ProductsImgSlider({imgs}) {
    const [ispress,setIspress] = useState(false)
    let images =[]
    if(imgs){
      images = imgs.map(e=>{return {original:e,thumbnail:e}})
    }
    let bg= ispress === false ? '#fff' : 'transparent'
    let width = ispress === false ?'100%':'0%'
  return (
    <>
    <Col sm='4' lg="4" className='d-flex justify-content-center align-items-center' style={{Height:'300px',backgroundColor:bg ,marginTop:'20px',borderRadius:'10px',padding:'0px',position:'relative'}}>
    <img src={imgs&&imgs[0]} alt='cover' width={width}  style={{cursor:'pointer',objectFit:'cover',}} onClick={(e)=>setIspress(!ispress)}/>
    {ispress === true ?(
      <div   style={{ boxShadow:'5px 3px 10px rgba(0,0,0,.5)',borderRadius:'20px',position:'relative',maxWidth:'400px',minHeight:'100%',bottom:'0px',background:'#fff'}}>
    <ReactImageGallery  items={images} ResizeObserverSize={'300px'} autoPlay={true}  showIndex={false} showNav={false} showFullscreenButton={false} showPlayButton={false}/>
      <div onClick={(e)=>setIspress(!ispress)} style={{cursor:'pointer',opacity:'0',position:'absolute',bottom:'25%',background:'black',width:'100%', height:'75%',zIndex:'1',borderRadius:'20px'}}></div>
      </div>
    )
    :null}
    </Col>
    </>
  )
}

export default ProductsImgSlider