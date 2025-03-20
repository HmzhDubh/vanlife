import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Vans from './Vans.jsx'
import VanDetails from './VanDetails.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import "./server"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetails />} />

            </Routes>
            <Footer />

        </BrowserRouter>
    </StrictMode>,
)
