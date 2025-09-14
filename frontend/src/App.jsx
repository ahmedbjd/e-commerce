import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Avantage from './pages/Avantage'
import Services from './pages/Services'

const App = () => {
  return (
    <div>
       <Navbar />
       <Home />
       <Avantage />
       <Services />
    </div>
  )
}

export default App