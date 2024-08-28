import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AboutMe from "./Components/Pages/AboutMe";
import WhatIDo from "./Components/Pages/WhatIDo";
import Resume from "./Components/Pages/Resume";
import Testimonial from "./Components/Pages/Testimonial";
import Contact from "./Components/Pages/Contact";
import VideoBackground from "./Components/VideoBackground";
import NavigationWrapper from "./Components/Navigation/NavigationWrapper";
import useAppContext from "./hooks/useAppContext";

function App() {
  const { isOpen, closeMenu } = useAppContext();
  const handleClick = () => {
    if (isOpen) {
      closeMenu();
    }
  };

  return (
    <Router>
      <div
        className={`relative  h-screen ${
          isOpen ? "flex flex-col" : "grid"
        }  grid-cols-1 grid-rows-[auto_1fr] lg:grid-cols-[250px_1fr] `}
        onClick={handleClick}
      >
        <VideoBackground />
        <NavigationWrapper />
        <div className="p-4 overflow-hidden h-screen w-full  ">
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
