
import { Link, useLoaderData } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getHostVans } from '../../api.js'
export function loader(){

    return getHostVans()

}
export default function HostVans() {

    const hostVans = useLoaderData()

    const hostVansElems = hostVans?.map( van => {

            return(
                <Link key={van.id} to={`/host/vans/${van.id}`}>
                <div className="p-5 mb-5 me-5 bg-white rounded">
                    <div className="flex">
                        <img className="w-20 h-20 rounded" src={van.imageUrl}></img>
                        <div className="flex flex-col ms-10 justify-center ">
                            <h1 className="text-xl font-bold">{van.name}</h1>
                            <h1 className="">${van.price}/day</h1>
                        </div>
                    </div>
                </div>
                </Link>
            )
        } )

    return (
        <div className="ps-10 mb-20">
            <h1 className="text-4xl font-bold mt-5">Your Listed Vans</h1>
            <div className="mt-10">
                {hostVansElems}
            </div>

        </div>
    )
}