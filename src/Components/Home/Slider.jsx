import {Carousel} from 'react-bootstrap'
import {Slider1,Slider4,Prod3,Prod4} from '../../Assets'

export default function Slider() {
  return (
    <Carousel className='bg-primary'>
      <Carousel.Item >
        <div text="First slide" />
        <img src={Slider1} alt="" height={400}/>
        <Carousel.Caption>
          <h3>تخفيضات هائلة تصل 50%</h3>
          <p>مستني اية ما تضيعش الفرصة </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="Second slide" />
        <img src={Slider4} alt="" height={400} />
        <Carousel.Caption>
          <h3>كل ماهو جديد</h3>
          <p>أحدث الموديلات وأقوى العروض</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="Third slide" />
        <img src={Prod3} alt="" height={400}/>
        <Carousel.Caption>
          <h3>الجمعة البيضاء</h3>
          <p>
            عندنا الجمعة البيضاء طول السنة مش مرة واحدة بس فى السنة
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div text="Third slide" />
        <img src={Prod4} alt="" height={400}/>
        <Carousel.Caption>
          <h3>سرعة التوصيل لحد باب البيت</h3>
          <p>
            خدمة التوصيل عندنا أسرع من أي حد تاني 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
