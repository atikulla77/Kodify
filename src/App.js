import { useState } from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Testimonial from "./Components/Testimonial";
import Lodding from "./Components/Lodding";
import Projects from "./Components/Projects";
import About from "./Components/About";

function App() {
  const [showLodding, setshowLodding] = useState(true);

  setTimeout(() => {
    setshowLodding(false);
  }, 2500);

  return (
    <div className="bg-[#0a012a]">
      {showLodding ? (
        <Lodding />
      ) : (
        <div className="w-full h-full">
          <Home />
          <About />
          <Skill />
          <Projects />
          <Contact />
          <Testimonial />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
