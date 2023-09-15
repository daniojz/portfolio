import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './pages/home/Home'

function App() {
  return (
    <ParallaxProvider>
      <div className='App'>
        <Home></Home>
        <footer></footer>
      </div>
    </ParallaxProvider>
  )
}

export default App
