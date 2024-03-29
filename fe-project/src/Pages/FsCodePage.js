import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Css from '../Css/fscode.css'

const FsCodePage = () => {
  return (
    
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'  }}>
    <Row className='justify-content-center'>
        <Col lg='12'>
            <div className='container main-div'>
                <div className='container-header text-center d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='me-5 w-75 container-header-text'>Full Stack Programlama Egitimi</h1>
              </Col>
              <Col lg='8'>
                <br />
                <p className='main-div-text p-2'>Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir. <hr  style={{ border: '3px solid white', borderRadius : '3px'}} className='text-white mt-5'/></p> 
              </Col>
            </div>
            </div>
            <Row className='text-center'>
            <Col lg='6'>
            <Button variant="outline-success" size='lg' href='/Pages/ContactPage'>Başvuru Yap</Button>
            </Col>
            <Col lg='6'>
            <Button variant="outline-success" size='lg'>PDF Dosyasını indir</Button>
            </Col>
            </Row>
        </Col>
    </Row>
</Container>
  )
}

export default FsCodePage