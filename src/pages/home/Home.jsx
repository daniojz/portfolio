import Education from './views/Education'
import Experience from './views/Experience'
import Intro from './views/Intro'
import Skills from './views/Skills'

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
          <section style={{ width: '100%', height: '4000px' }}></section>
        </div>
      </div>
    </div>
  )
}

export default Home
