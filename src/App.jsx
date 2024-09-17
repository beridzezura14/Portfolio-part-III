import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Aboutme from "./components/aboutme/Aboutme"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from './components/contact/Contact'
import Footer from "./components/footer/Footer"


import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


function App() {

  useGSAP(() => {
    gsap.to(".main__content", {
      delay: 1.5,
      opacity: 1,
      duration: 1,
    })
    gsap.to(".loading", {
      delay: 1.5,
      duration: 1,
    })
  })


  return (
    <div className="main">
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
      <div className="main__content">
        <Header />
        <Hero />
        <Aboutme />
        <Portfolio />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
