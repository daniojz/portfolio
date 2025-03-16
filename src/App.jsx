import { useEffect, useRef, useState } from 'react'
import NavMenu from './components/NavMenu/NavMenu'
import Home from './pages/home/Home'
import { ParallaxProvider } from 'react-scroll-parallax'

function App() {
  const [scrollEl, setScrollElement] = useState(null)
  const appContainerRef = useRef()
  useEffect(() => {
    setScrollElement(appContainerRef.current)
  })

  return (
    <div id='AppContainer' className='App' ref={appContainerRef}>
      <NavMenu></NavMenu>
      <main>
        <ParallaxProvider scrollContainer={scrollEl}>
          <Home></Home>
        </ParallaxProvider>
      </main>
    </div>
  )
}

export default App
