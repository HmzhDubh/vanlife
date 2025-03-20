import { useState } from 'react'
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Home from "./Home"

import './App.css'

function App() {

  return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
  )
}

export default App
