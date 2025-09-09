import Navbar from "./components/Hero/HeroNav/Navbar";
import Footer from "./components/Hero/Footer";
import Hero from "./components/Hero/Hero";
import WhyChooseUs from "./components/Hero/WhyChooseUs";
import Gallery from "./components/Hero/Gallery";
import Pricing from "./components/Hero/Pricing";
import Testominal from "./components/Hero/Testimonial"
export default function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <Gallery/>
    <WhyChooseUs/>
    <Pricing/>
    <Testominal/>
    <Footer/>
    </>
  )
}