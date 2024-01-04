import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Css from '../Css/fscode.css'
const FsCodePage = () => {
  return (
    
    <Container>
        <Row >
            <Col lg='12'>
                <div className='container'>
                    <h1>FullStack Programlama Eğitimi</h1>
                    <p>Full stack developer olarak çalışan uzmanlar, yazılımların back-end (arka katman) ve front-end(ön katman) olarak nitelendirilen bölümlerinde rol almaktadırlar. Aynı zamanda veritabanı programlama alanlarında yetkinlikleri olup, geliştirilmekte olan projenin yazılımla ilgili bütün aşamalarında görev almaktadırlar. Full Stack Development, HTML, CSS, JavaScript, ReactJS, Node.JS gibi birçok dil barındırmaktadır. Doğası gereği geniş ilgi alanına sahip bir disiplindir. Back-End’den Front-End’e ve veritabanlarına kadar uzanan bu yetkinlik Türkiye’de en çok aranan yazılım programlama dallarından biridir.</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default FsCodePage