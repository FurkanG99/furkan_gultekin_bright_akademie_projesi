import React from 'react'
import css from '../Css/mainpage.css'
<<<<<<< Updated upstream
import { Button } from 'react-bootstrap'
=======
import {Button} from 'react-bootstrap'
>>>>>>> Stashed changes
function MainPage() {
  return (
    <div className='container-lg text-center text-white main-page-div'>
        <h1>Geleceğin Teknolojilerini <br /> BAU ile Kodla</h1>
        <p className='fs-2'>Üniversite onaylı sertifikanı al, lider <br /> bilişimci ol.</p>
        <p className='fs-3'>Detaylı bilgi için <a href='#' className='text-white fs-3'>0212 381 50 00</a></p>
<<<<<<< Updated upstream
    <div className='d-flex w-100 justify-content-evenly mt-5'>
      <Button variant="outline-light" size='lg'>Başvuru Yap</Button>
      <Button variant="outline-light" size='lg'> İletişim</Button>
    </div>
=======
        <div className='d-flex jutify-content-center w-100 align-item-center'>
        <Button  variant="outline-light" size='lg' className='me-5'>Başvuru Yap</Button>
        <Button variant="outline-light" size='lg' className='ms-5'>İletişim</Button>
        </div>
>>>>>>> Stashed changes
    </div>
    
  )
}

export default MainPage