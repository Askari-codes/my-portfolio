import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/MainHeader/SideBar/SideBar';
import Home from './Components/Pages/Home';
import AboutMe from './Components/Pages/AboutMe';
import WhatIDo from './Components/Pages/WhatIDo';
import Resume from './Components/Pages/Resume';
import Testimonial from './Components/Pages/Testimonial';
import Contact from './Components/Pages/Contact';
import TopHeader from './Components/MainHeader/TopHeader/TopHeader';
import useMediaQuery from './hooks/useMediaQuery';
import { useEffect } from 'react';
import BackgroundAnimation from './Assets/animations/BackgroundAnimation'
import VideoBackground from './Components/VideoBackground';
import AppProvider from './Components/context/AppProvider';

function App() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <AppProvider>
      <Router>
      <div className={`relative bg-black h-screen  grid ${isDesktop ? 'grid-cols-[250px_1fr]' : 'grid-cols-1 grid-rows-[auto_1fr]'}`}>
        {/* <BackgroundAnimation/> */}
        <VideoBackground/>
        
        {isDesktop? <Sidebar />:<TopHeader/>}
        <div className="p-4 overflow-hidden  ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/what-i-do" element={<WhatIDo />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
    </AppProvider>
  );
}

export default App;
