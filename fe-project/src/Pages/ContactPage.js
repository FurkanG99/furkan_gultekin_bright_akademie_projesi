import React from 'react'
import CSS from '../Css/contact.css'
import { Container, Row , Col } from 'react-bootstrap'
import { contactConfig } from '../Components/Contact'
import {Button } from 'react-bootstrap'
const ContactPage = () => {
  return (
    
    <Container className='contact-container'>
        <Row className='mb-5'>
            <Col lg="8">
                <h1 className='display-4 mb-4'>İletişim</h1>
            </Col>
        </Row>

        <Row className='content-section'>
            <Col lg="5" className='mb-5'>
                <h3 className='color-sec py-4'>Bize Ulaş</h3>
                <address>
                    <strong>Email: Baubright@hotmail.com</strong>
                    <br />
                    <br />
                    <p>
                        <strong>Phone: 0212 381 50 00</strong>
                    </p>
                </address>
                <p>{contactConfig.descripton}</p>
            </Col>
            <Col lg="7" className='d-flex align-items-center'>
                <form className='contact-form w-100'>
                    <Row>
                        <Col lg="6" className='form-group mb-3'>
                            <input 
                            className='form-control'
                            id='name'
                            name='name'
                            placeholder='name'
                            type='text'
                            />
                        </Col>
                        <Col lg="6" className='form-group'>
                            <input 
                            className='form-control rounded-2'
                            id='email'
                            name='email'
                            placeholder='email'
                            type='email'
                            />
                        </Col>
                    </Row>
                    <textarea className='form-control rounded-2' id='message'
                        name='message'
                        placeholder='Message'
                        rows='5'
                    ></textarea>
                    <br />
                    <Row>
                        <Col lg='12' className='form-group'>
                        <Button variant="outline-success" size='lg'>Gönder</Button>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.138484388916!2d29.004241475860354!3d41.04410057134546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a24975fe5d%3A0xa05d7aa13cfcaf89!2sBah%C3%A7e%C5%9Fehir%20%C3%9Cniversitesi%20Wissen%20Akademie!5e0!3m2!1str!2str!4v1704312337116!5m2!1str!2str" width="1300" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Container>
    
  )
}

export default ContactPage