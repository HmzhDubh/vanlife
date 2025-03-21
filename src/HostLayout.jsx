import React from "react"
import Header from './Header'
import Footer from './Footer'
import { NavLink, Outlet } from "react-router-dom"
export default function HostLayout() {
    return (
        <>
            <div className="mt-10">
                {/* Navbar */}
                <div className="flex gap-5 ps-10 mb-10">
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } end to=".">Dashboard</NavLink>
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="income">Income</NavLink>
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="vans">Vans</NavLink>
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="reviews">Reviews</NavLink>

                </div>
            </div>
            <Outlet />

        </>
    )
}