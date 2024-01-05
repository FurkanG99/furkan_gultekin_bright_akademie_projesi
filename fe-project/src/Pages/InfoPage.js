import React from 'react'
import { Link } from 'react-router-dom'

const InfoPage = () => {
  return (
    
    <div className='container'>
          <div class="bg"> </div>
    <div class="bg bg2"></div>
    <div class="bg bg3"></div>
      <h1 className='text-white text-center'>
        BAU BRİGHT NEDİR ?
      </h1>
      <p className='fs-4 col-12 text-center mt-5 text-white'>
      Bahçeşehir Üniversitesi tarafından yürütülen ve proje deneyimi yüksek eğitici kadrosu ile fark yaratacak yazılım - sistem uzmanları yetiştiren bir kariyer programıdır. Sektör ihtiyaçları göz önünde bulundurularak hazırlanmış güncel ve son teknoloji eğitim içerikleriyle BAU Bright eğitimleri devam ediyor! Eğitimini tamamlayan adaylar bilişim sektöründe işe yerleştirilmektedir.
      </p>
      <div className=' column-gap-5 justify-content-center d-flex card-div'>
      <div class="card">
      <h2 className='card-title mt-3'>Proje</h2>
    <div class="circle ms-1 fs-4 text-white text-center"><Link to="/Pages/MainPage" className='text-decoration-none text-white'> Güncel teknoloji ile portfolionu güçlendir</Link></div>
    <div class="circle"></div>
    <div class="card-inner"></div>
  </div>
  <div class="card">
      <h2 className='card-title fs-2 mt-3'>İş Hayatı</h2>
    <div class="circle ms-1 fs-4 text-white text-center"><Link to="/Pages/MainPage" className='text-decoration-none text-white text-center fs-4'>Deneyimli İK eşliğinde iş hayatına katıl</Link></div>
    <div class="circle"></div>
    <div class="card-inner"></div>
  </div>
  <div class="card">
      <h2 className='card-title mt-3'>Eğitim</h2>
    <div class="circle ms-1 fs-4 text-white text-center "><Link to="/Pages/MainPage" className='text-decoration-none text-white'>  Full-stack developer olma yolu bizden geçer</Link></div>
    <div class="circle"></div>
    <div class="card-inner"></div>
  </div>

      </div>
  
    </div>
    
  )
}

export default InfoPage
