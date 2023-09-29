import NavMenu from './components/NavMenu/NavMenu'
import Home from './pages/home/Home'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <div className='App'>
      <header>
        <NavMenu></NavMenu>
      </header>
      <main>
        <ParallaxProvider>
          <Home></Home>
        </ParallaxProvider>
      </main>
    </div>
  )
}

export default App
