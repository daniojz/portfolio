import Experience from './views/Experience'
import Intro from './views/Intro'

const Home = () => {
  return (
    <div id='home'>
      <header>
        <Intro></Intro>
      </header>
      <div className='main'>
        <Experience></Experience>
        <section style={{ width: '100%', height: '4000px' }}></section>
      </div>
    </div>
  )
}

export default Home
