import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/AboutMe";
import WhatIDo from "./Components/Pages/WhatIDo";
import Resume from "./Components/Pages/Resume";
import Testimonial from "./Components/Pages/Testimonial";
import Contact from "./Components/Pages/Contact";
import VideoBackground from "./Components/VideoBackground";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";

function App() {
  return (
    <Router>
      <div className="relative bg-black h-screen  grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[250px_1fr]">
        <VideoBackground />
        <NavigationWrapper />
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
  );
}

export default App;
