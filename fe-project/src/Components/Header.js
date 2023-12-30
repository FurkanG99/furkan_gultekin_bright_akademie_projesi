import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <>
    <div class="bg"></div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
    
     <Navbar expand="lg" className="bg-dark p-3" fixed='top'>
      <Container>
<<<<<<< Updated upstream
        <Navbar.Brand href="/" className='text-info fs-4 '>BAU-<span className='text-warning fs-4'>Bright</span></Navbar.Brand>
=======
        <Navbar.Brand href="/Pages/MainPage" className='text-info fs-4 nav-link nav-item'>BAU-<span className='text-warning fs-4 '>Bright</span></Navbar.Brand>
>>>>>>> Stashed changes
        <Navbar.Toggle aria-controls="navbarScroll" className='text-white'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Pages/InfoPage"className='text-white m-2 nav-item fs-5'>BAU Bright Nedir</Nav.Link>
            <Nav.Link href="/Pages/WhyPage"className='text-white m-2 nav-item fs-5'>Neden Katılmalıyım</Nav.Link>
            <Nav.Link href="#action2"className='text-white m-2 nav-item fs-5'>Yöntem</Nav.Link>
            <Nav.Link href="#action2"className='text-white m-2 nav-item fs-5'>İletişim</Nav.Link>
            <Nav.Link href="#action2"className='text-white m-2 nav-item fs-5'>Kadro</Nav.Link>
            <NavDropdown title={<span className="text-white fs-5">Eğitimler</span>} id="navbarScrollingDropdown" className='mt-2 me-5' style={{ minWidth: '150px' }} >
              <NavDropdown.Item href="#fullstack-programlama-egitimi">FullStack Programlama Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="#network-sistem-ve-siber-guvenlik-uzmanlık-egitimi">
              Network, Sistem ve <br></br> Siber Güvenlik Uzmanlık Eğitimi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#bulut-bilisim-uzmanlık-egitimi">
              Bulut Bilişim Uzmanlık Eğitimi
              </NavDropdown.Item> 
              <NavDropdown.Item href="#full-data-uzmanlık-egitimi">
              Full Data Uzmanlık Eğitimi
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header