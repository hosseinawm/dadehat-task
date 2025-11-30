import { useEffect } from "react";
import CarouselSection from "./components/sections/CarouselSection";
import Hero from "./components/sections/Hero";
import JobSection from "./components/sections/JobSection";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <JobSection />
      <CarouselSection />
      <Footer />
    </>
  );
}

export default App;
