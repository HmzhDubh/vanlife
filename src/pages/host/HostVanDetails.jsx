import { useState, useEffect } from 'react'
import { Link, useParams, NavLink, Outlet, useLoaderData} from "react-router-dom"
import HostVanInfo from './HostVanInfo'
import { getHostVans } from '../../api.js'
export function loader({params}){

    return getHostVans(params.id)
}

export default function HostVanDetails() {

    const params = useParams()

    var van = useLoaderData()

    return (
        <div className="m-5">
            <Link className="flex gap-1" to='..' relative="path">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                </svg>

                Back To All Vans</Link>
            <div className="bg-white p-5 mt-6 rounded">
                <div className="flex gap-5">
                    <img className="w-40 rounded" src={van.imageUrl}></img>
                    <div className="flex flex-col gap-2 mt-10 items-start">
                        <span
                            style={
                                van.type === 'simple' ?
                                    {backgroundColor: "#E17654", color:'#FFEAD0'} :
                                van.type === 'rugged' ?
                                    {backgroundColor: "#115E59", color:'#FFEAD0'} :
                                    {backgroundColor: "#161616", color:'#FFEAD0'}
                            }
                            className="bg-yellow-600 items-center justify-center text-center p-1 ps-4 pe-4 rounded text-white capitalize"
                            >
                            {van.type}
                        </span>
                        <h1 className="text-2xl font-bold">{van.name}</h1>
                        <h1 className="text-lg">${van.price}/Day</h1>
                    </div>
                </div>

                {/* nav links */}
                <div className="flex gap-4 mt-6">
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-800" : "hover:underline hover:text-gray-800" } end to=".">Details</NavLink>
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-800" : "hover:underline hover:text-gray-800" } to={`pricing`}>Pricing</NavLink>
                    <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-800" : "hover:underline hover:text-gray-800" } to={`photos`}>Photos</NavLink>
                </div>
                <Outlet context={{van}} />
            </div>
        </div>
    )
}