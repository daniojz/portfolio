import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <header></header>
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/home' element={<Home />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </Router>
  )
}

export default App
