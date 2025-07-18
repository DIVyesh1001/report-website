import './App.css'
import CarouselSection from './components/CarouselSection/CarouselSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CarouselSection/>
      <Footer/>
    </div>
  )
}

export default App
