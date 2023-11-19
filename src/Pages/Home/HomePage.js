import { Container } from 'react-bootstrap'
import * as Comp from '../../Components'

function HomePage() {
  return (
    <>
    <Comp.Slider/>
    <Container>
    <Comp.MainCategory/>
    <Comp.MostSold/>
    <Comp.Discount/>
    <Comp.NewClothes/>
    <Comp.Brands/>

    </Container>
    </>
  )
}

export default HomePage