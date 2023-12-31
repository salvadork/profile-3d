import {Route, BrowserRouter as Router, Routes} from 'react-router-dom' 
import Home from './components/Home'
import About from './components/About'

function App() {


  return (
    <main className='bg-slate-300/20'>
      <Router>
        Navbar
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </main>

  )
}

export default App
