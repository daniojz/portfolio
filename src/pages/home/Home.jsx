import Intro from './views/Intro'

const Home = () => {
  return (
    <div id='home'>
      <header>
        <Intro></Intro>
      </header>
      <main id='main'>
        <div style={{ width: '100%', height: '4000px' }}></div>
      </main>
    </div>
  )
}

export default Home
