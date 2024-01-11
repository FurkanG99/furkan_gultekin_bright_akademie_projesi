import React from 'react'
import { Container ,Row , Col, Button } from 'react-bootstrap'
import Css from '../Css/cloud.css'
const CloudPage = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '78vh'  }}>
    <Row className='justify-content-center'>
        <Col lg='12'>
            <div className='container main-div'>
                <div className='container-header d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='w-75 container-header-text'>Bulut Bilişim Uzmanlık Eğitimi</h1>
              </Col>
              <Col lg='8'>
                <br />
                <p className='main-div-text p-2'>Bulut bilişim, bilgi işlem hizmetlerinin (sunucu, depolama, veri tabanı, ağ, yazılım, analiz ve makine zekası dahil) internet -bulut- üzerinden sağlanarak daha hızlı inovasyon, esnek kaynaklar ve ekonomik ölçeklendirme sunulması anlamına gelir. Normalde yalnızca kullandığınız bulut hizmetleri için ödeme yaptığınızdan işletim maliyetlerinizi düşürebilir, altyapınızı daha verimli bir şekilde çalıştırabilir ve değişen iş gereksinimlerinize uygun şekilde ölçeklendirme yapabilirsiniz.
                <br />
                <br />
                Günümüzde birçok kurum bulut teknolojisini kullanır ve birçok uzman bu devrim niteliğindeki bilgi işlem eğiliminin konsepti ile ilgili geliştirmeler yapar. Bulut bilgi işlem, işletmelerin BT kaynaklarına bakış açısını önemli ölçüde değiştirdi. Kurumlar, maliyet, küresel ölçeklendirme, performans, hız ve verimlilik gibi avantajları nedeniyle bulut bilişim hizmetlerine oldukça ilgi duymaktadırlar. <hr  style={{ border: '3px solid white', borderRadius : '3px'}} className='text-white mt-5'/></p> 
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

export default CloudPage
