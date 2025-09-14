import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Avantage from './pages/Avantage'
import Services from './pages/Services'
import Statics from './pages/Statics'

const App = () => {
  return (
    <>
       <Navbar />
       <Home />
       <Avantage />
       <Services />
       <Statics />
    </>
  )
}

export default App