import Hero from './component/Hero'
import About from './component/About'
import Navbar from './component/Navbar'
import Event from './component/Event'
// import Gallery from './component/Gallary'
import Contact from './component/Contact'
import Footer from './component/Footer'
import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Event />
      {/* <Gallery /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
