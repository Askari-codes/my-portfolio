import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { menuItemsData } from './Data/Data';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/AboutMe';
import WhatIDo from './Components/Pages/WhatIDo';
import Resume from './Components/Pages/Resume';
import Testimonial from './Components/Pages/Testimonial';
import Contact from './Components/Pages/Contact';
import TopHeader from './Components/MainHeader/TopHeader/TopHeader';
// import Home from './Components/MainHeader/MainHeader';
function App() {
  return (
    <Router>
      <div className=" h-screen bg-portfolio-cloud bg-cover lg:bg-portfolio-cloud bg-cover ">
        <TopHeader/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about-me' element={<AboutMe/>}/>
      <Route path='/what-i-do' element={<WhatIDo/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/testimonial' element={<Testimonial/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
