import Intro from './views/Intro'

const Home = () => {
  return (
    <div id='home'>
      <Intro></Intro>
      <main id='main'>
        <div style={{ width: '100%', height: '4000px' }}></div>
      </main>
    </div>
  )
}

export default Home
