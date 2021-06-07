import React from 'react'
import Router from './router'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Projects from './components/projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  )
}

export default App
