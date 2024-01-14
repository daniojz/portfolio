import Education from './views/Education'
import Experience from './views/Experience'
import Intro from './views/Intro'
import Skills from './views/Skills'
import Proyects from './views/Projects'

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
        </div>
      </div>
    </div>
  )
}

export default Home
