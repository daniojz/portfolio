import NavMenu from './components/NavMenu/NavMenu'
import Home from './pages/home/Home'

function App() {
  return (
    <div className='App'>
      <header>
        <NavMenu></NavMenu>
      </header>
      <main>
        <div className='parallaxWrapper'>
          <Home></Home>
        </div>
      </main>
    </div>
  )
}

export default App
