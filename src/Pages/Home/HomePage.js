import { Container } from 'react-bootstrap'
import * as Comp from '../../Components'

function HomePage() {
  return (
    <>
    <Comp.Slider/>
    <Container>
    <Comp.Categories/>
    <Comp.MostSold/>
    <Comp.Discount/>
    <Comp.NewClothes/>
    <Comp.BrandsHome />

    </Container>
    </>
  )
}

export default HomePage