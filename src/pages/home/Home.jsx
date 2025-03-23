import Education from './sections/Education'
import Experience from './sections/Experience'
import Intro from './sections/Intro'
import Skills from './sections/Skills'
import Proyects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from '../../components/Footer/footer'

const Home = () => {
  return (
    <div id='home'>
      <header>
        <Intro></Intro>
      </header>
      <div className='main'>
        <div className='content'>
          <Experience></Experience>
          <Skills></Skills>
          <Education></Education>
          <Proyects></Proyects>
          <Contact></Contact>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default Home
