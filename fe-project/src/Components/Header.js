import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Css from '../Css/style.css'
import { Link } from 'react-router-dom';


function Header() {
  return (
    <>
    <div className="bg"></div>
    <div className="bg bg2"></div>
  <div className="bg bg3"></div>


     <Navbar expand="lg" className="bg-dark mainn-headerr">
      <Container>
        <Navbar.Brand href="/" className='text-info fs-4 '>BAU-<span className='text-warning fs-4'>Bright</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='text-white'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Pages/InfoPage"className='text-white m-2 nav-item fs-5'>BAU Bright Nedir</Nav.Link>
            <Nav.Link href="/Pages/WhyPage"className='text-white m-2 nav-item fs-5'>Neden Katılmalıyım</Nav.Link>
            <Nav.Link href="/Pages/TeacherPage"className='text-white m-2 nav-item fs-5'>Kadro</Nav.Link>
            <Nav.Link href="/Pages/ContactPage"className='text-white m-2 nav-item fs-5'>İletişim</Nav.Link>
            <NavDropdown title={<span className="text-white fs-5">Eğitimler</span>} id="navbarScrollingDropdown" className='mt-2 me-5' style={{ minWidth: '150px' }} >
              <NavDropdown.Item href="/Pages/FsCodePage">FullStack Programlama Eğitimi</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/NetworkPage">
              Network, Sistem ve <br></br> Siber Güvenlik Uzmanlık Eğitimi
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pages/CloudPage">
              Bulut Bilişim Uzmanlık Eğitimi
              </NavDropdown.Item> 
              <NavDropdown.Item href="/Pages/FulldataPage">
              Full Data Uzmanlık Eğitimi
              </NavDropdown.Item>
            </NavDropdown>
            <button type="button" className="gradient_anim_btn"><Link to={'./Pages/ContactPage'} style={{ textDecoration :'none', color:'white' }}>Başvuru Yap</Link></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
    </>
  )
}

export default Header