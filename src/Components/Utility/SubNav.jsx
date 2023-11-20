import { Container, Nav, Navbar } from "react-bootstrap";

export default function SubNav() {
  return (
    <Navbar data-bs-theme="primary" style={{backgroundColor:'#fff'}}>
        <Container>
        <Nav  className="ms-auto">
            <Nav.Link href="#home">الكل</Nav.Link>
            <Nav.Link href="#features">اجهزة كهربائية</Nav.Link>
            <Nav.Link href="#pricing">ادوات منزلية</Nav.Link>
            <Nav.Link href="#home">الكترونيات</Nav.Link>
            <Nav.Link href="#features">لابتوبات</Nav.Link>
            <Nav.Link href="#pricing">ملابس</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">أغذية</Nav.Link>
            <Nav.Link href="#pricing">المزيد...</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}
