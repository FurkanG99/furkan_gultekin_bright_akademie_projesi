import React from 'react'
import css from '../Css/mainpage.css'
import { Button, Col, Container, Row } from 'react-bootstrap'
function MainPage() {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col md="8" lg="12" sm="12">
        <div className='container-fluid text-center text-white main-page-div'>
          <h1>Geleceğin <span className="d-block w-100 text-center">Teknolojilerini</span> BAU ile Kodla</h1>
          <p className='fs-2'>Üniversite onaylı sertifikanı al, lider <br /> bilişimci ol.</p>
          <p className='fs-3'>Detaylı bilgi için <a href='#' className='text-white fs-3'>0212 381 50 00</a></p>
        </div>
      </Col>
    </Row>

    <Row className="justify-content-center mt-3">
      <Col md="8" lg="12" sm="12">
        <div className='d-flex justify-content-between mt-3'>
          <Button variant="outline-light" size='lg' href='/Pages/ContactPage'>Başvuru Yap</Button>
          <Button variant="outline-light" size='lg' href='/Pages/ContactPage'>İletişim</Button>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default MainPage