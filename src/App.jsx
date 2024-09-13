import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Aboutme from "./components/aboutme/Aboutme"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from './components/contact/Contact'
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Aboutme />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
