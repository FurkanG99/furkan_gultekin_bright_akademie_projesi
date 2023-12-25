import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import css from './Css/style.css';
import InfoPage from './Pages/InfoPage'
import MainPage from './Pages/MainPage';
import WhyPage from './Pages/WhyPage';


function App() {
  return (
    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path ='/Pages/MainPage' element ={<MainPage />} />
        <Route path ='/Pages/InfoPage' element={<InfoPage />} />
        <Route path='/Pages/WhyPage' element ={<WhyPage />} />
      </Routes>    

    </BrowserRouter>      
   
  );
}

export default App;
