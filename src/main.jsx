import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"

import App from './App.jsx'
import About from './About.jsx'

import Layout from './components/Layout.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import HostLayout from './components/HostLayout.jsx'
import Error from './components/Error.jsx'
import AuthError from './components/AuthError.jsx'
import Login, { action as signinAction} from './components/Login.jsx'


import Vans, { loader as vansLoader } from './pages/vans/Vans.jsx'
import VanDetails, { loader as vanLoader } from './pages/vans/VanDetails.jsx'

import HostVans, { loader as hostVansLoader } from './pages/host/HostVans.jsx'
import HostVanDetails, { loader as hostVanDetailsLoader } from './pages/host/HostVanDetails.jsx'

import HostDashboard, {loader as hostDashboard} from './pages/host/HostDashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'
import { requireAuth } from "./utils"
import "./server"
localStorage.removeItem("loggedin")
const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
          <Route path="vans/:id" element={<VanDetails />} loader={vanLoader}  />
          <Route path="login" element={<Login />} action={signinAction}/>

          <Route path="host/" element={<HostLayout />}>

              <Route
                index
                element={<HostDashboard />}
                loader={hostDashboard}
                errorElement={<AuthError />}
              />

              <Route
                path="vans"
                element={<HostVans />}
                loader={hostVansLoader}
                errorElement={<Error />}
                />
              <Route
                path="income"
                element={<Income />}
                loader={requireAuth}
                errorElement={<Error />}
                />
              <Route
                path="reviews"
                element={<Reviews />}
                loader={requireAuth}
                errorElement={<Error />}
                />

              <Route path="vans/:id" element={<HostVanDetails />} loader={hostVanDetailsLoader} >
                  <Route
                    index
                    element={<HostVanInfo />}
                    loader={requireAuth}
                    errorElement={<Error />}
                    />
                  <Route
                    path="pricing"
                    element={<HostVanPricing />}
                    loader={requireAuth}
                    errorElement={<Error />}
                    />
                  <Route
                  path="photos"
                  element={<HostVanPhotos />}
                  loader={requireAuth}
                  errorElement={<Error />}
                  />
              </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
      </Route>

))
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
