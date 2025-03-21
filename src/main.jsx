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
import Layout from './Layout.jsx'
import HostDashboard from './HostDashboard.jsx'
import Income from './Income.jsx'
import Reviews from './Reviews.jsx'
import HostVans from './HostVans.jsx'
import HostLayout from './HostLayout.jsx'
import HostVanDetails from './HostVanDetails.jsx'
import HostVanInfo from './HostVanInfo.jsx'
import HostVanPricing from './HostVanPricing.jsx'
import HostVanPhotos from './HostVanPhotos.jsx'
import "./server"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<App />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetails />} />

                    <Route path="host/" element={<HostLayout />}>

                        <Route index element={<HostDashboard />} />

                        <Route path="income" element={<Income />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="reviews" element={<Reviews />} />

                        <Route path="vans/:id" element={<HostVanDetails />} >
                            <Route index element={<HostVanInfo />} />
                            <Route path="pricing" element={<HostVanPricing />} />
                            <Route path="photos" element={<HostVanPhotos />} />
                        </Route>
                    </Route>

                </Route>

            </Routes>

        </BrowserRouter>
    </StrictMode>,
)
