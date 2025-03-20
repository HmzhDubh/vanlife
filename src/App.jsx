import { useState } from 'react'
import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Home from "./Home.jsx"

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
