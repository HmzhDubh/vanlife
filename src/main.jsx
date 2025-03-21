import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App.jsx'
import About from './About.jsx'

import Layout from './components/Layout.jsx'
import HostLayout from './components/HostLayout.jsx'

import Vans from './pages/vans/Vans.jsx'
import VanDetails from './pages/vans/VanDetails.jsx'

import HostDashboard from './pages/host/HostDashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetails from './pages/host/HostVanDetails.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'

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
