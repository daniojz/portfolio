import NavMenu from './components/NavMenu/NavMenu'
import Home from './pages/home/Home'
import Footer from './components/Footer/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  return (
    <div className='App'>
      <NavMenu></NavMenu>
      <main>
        <ParallaxProvider>
          <Home></Home>
        </ParallaxProvider>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
