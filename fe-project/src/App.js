import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import css from './Css/style.css';
import InfoPage from './Pages/InfoPage'
import MainPage from './Pages/MainPage';
import WhyPage from './Pages/WhyPage';
import TeacherPage from './Pages/TeacherPage';
import ContactPage from './Pages/ContactPage';
import FsCodePage from './Pages/FsCodePage';
import NetworkPage from './Pages/NetworkPage';
import CloudPage from './Pages/CloudPage';
import FulldataPage from './Pages/FulldataPage';

function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path='/Pages/TeacherPage' element= {<TeacherPage />} />
        <Route path ='/' element ={<MainPage />} />
        <Route path ='/Pages/InfoPage' element={<InfoPage />} />
        <Route path='/Pages/WhyPage' element ={<WhyPage />} />
        <Route path='/Pages/ContactPage' element = {<ContactPage />} />
        <Route path='/Pages/FsCodePage' element = {<FsCodePage />} />
        <Route path='/Pages/NetworkPage' element = {<NetworkPage />} />
        <Route path='/Pages/CloudPage' element = {<CloudPage />} />
       <Route path='/Pages/FulldataPage' element = {<FulldataPage />} />
      </Routes>    

    </BrowserRouter>      
   
  );
}

export default App;
