import React from 'react'
import { Container ,Row , Col, Button } from 'react-bootstrap'
import Css from '../Css/cloud.css'
const FulldataPage = () => {


  return (
 
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'  }}>
    <Row className='justify-content-center'>
        <Col lg='12'>
            <div className='container main-div'>
                <div className='container-header text-center d-flex flex-column align-items-center w-100'>
              <Col lg='9'>
                <h1 className='me-5 w-75 container-header-text'>Full Data Uzmanlık Eğitimi</h1>
              </Col>
              <Col lg='8'>
                <br />
                <p className='main-div-text p-2'>Modern zamanın petrolü olarak kabul edilen verinin yakalanması, güvenli olarak saklanması, depolanması, yönetilmesi, programlanması, analiz edilmesi ve raporlanması tüm işletmeler için çok önemli hale gelmiştir. Verinin artan hacmi, türü ve oluşma hızı nedeniyle geleneksel yöntemlere ek olarak yeni nesil veri tabanları ve bulut teknolojiler gibi farklı mecralarda çalışma ihtiyaçları doğmuştur. Bu bağlamda piyasada veri mühendisi, veri bilimcisi, veri analisti, raporlama uzmanı ve veri tabanı yöneticisi gibi roller her zamankinden daha fazla talep edilir olmuştur. Bu eğitimle veriyle ilgili tüm parçalara derinlemesine girilip hem geleneksel veri tabanlarına hem büyük veri sistemlerine hem de bulut tabanlı veri tabanlarına hakim olunması sağlanacak ve katılımcılara veri ile ilgili bütünsel bir uzmanlık kazandırılacaktır. <hr  style={{ border: '3px solid white', borderRadius : '3px'}} className='text-white mt-5'/></p> 
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

export default FulldataPage
