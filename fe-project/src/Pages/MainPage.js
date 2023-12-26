import React from 'react'
import css from '../Css/mainpage.css'
import { Button } from 'react-bootstrap'
function MainPage() {
  return (
    <div className='container-lg text-center text-white main-page-div'>
        <h1>Geleceğin Teknolojilerini <br /> BAU ile Kodla</h1>
        <p className='fs-2'>Üniversite onaylı sertifikanı al, lider <br /> bilişimci ol.</p>
        <p className='fs-3'>Detaylı bilgi için <a href='#' className='text-white fs-3'>0212 381 50 00</a></p>
    <div className='d-flex w-100 justify-content-evenly mt-5'>
      <Button variant="outline-light" size='lg'>Başvuru Yap</Button>
      <Button variant="outline-light" size='lg'> İletişim</Button>
    </div>
    </div>
  )
}

export default MainPage