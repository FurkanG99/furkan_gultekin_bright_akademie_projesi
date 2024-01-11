import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import Css from '../Css/network.css'
const NetworkPage = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'  }}>
    <Row className='justify-content-center'>
        <Col lg='12'>
            <div className='container main-div'>
                <div className='container-header text-center d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='me-5 w-100 container-header-text'>Network, Sistem ve Siber Güvenlik Uzmanlık Eğitimi</h1>
              </Col>
              <Col lg='8'>
                <br />
                <p className='main-div-text p-2'>Günümüzün en ilgi çekici ve teknolojik olarak en çok konuşulan konuların bütününü oluşturan network, sistem ve siber güvenlik kavramını, çalışma alanlarını tanıtmayı, bu alanda çalışmak isteyen kişilere yönelik geniş bir bilgi yelpazesi sunmayı ve uygulamalı eğitim modeli ile uzmanlık kazandırmayı hedeflemektedir.Katılımcılar, mevcut güvenlik tehditlerini anlamayı, önleyici önlemler almayı, saldırıları tespit etmeyi ve müdahale etmeyi ögreneceklerdir. Ayrıca, ağ ve sistem altyapılarını korumak için gerekli olan güvenlik politikalarını oluşturma ve uygulama becerileri kazanacaklardır. Bu eğitim, katılımcıları sektördeki rekabetçi ortamda öne çıkmalarını sağlamak için gereken bilgi ve yetenekleri sağlayacaktır. <hr  style={{ border: '3px solid white', borderRadius : '3px'}} className='text-white mt-5'/></p> 
              </Col>
            </div>
            </div>
            <Row className='text-center'>
            <Col lg='6'>
            <Button variant="outline-success" size='lg' href='/Pages/ContactPage'>Başvuru Yap</Button>
            </Col>
            <Col lg='6'>
            <Button variant="outline-success" size='lg' >PDF Dosyasını indir</Button>
            </Col>
            </Row>
        </Col>
    </Row>
</Container>
  )
}

export default NetworkPage
