import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'


function App() {

  return (
    <>
    <div className={styles.App}>
    <Navbar />
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Footer />
    </div>
      

    </>
  )
}

export default App
