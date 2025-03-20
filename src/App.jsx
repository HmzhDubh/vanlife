import { useState } from 'react'
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../components/Home"

import '../App.css'

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
