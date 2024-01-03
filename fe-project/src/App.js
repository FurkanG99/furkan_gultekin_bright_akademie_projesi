import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import css from './Css/style.css';
import InfoPage from './Pages/InfoPage'
import MainPage from './Pages/MainPage';
import WhyPage from './Pages/WhyPage';
import TeacherPage from './Pages/TeacherPage';
import ContactPage from './Pages/ContactPage';


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
      </Routes>    

    </BrowserRouter>      
   
  );
}

export default App;
