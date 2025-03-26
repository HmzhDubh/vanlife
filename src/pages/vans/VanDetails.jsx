import { useParams, Link, useLocation, useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getVans } from '../../api.js'

export function loader({ params }){

    return getVans(params.id)

}

export default function VanDetails(){

    const location = useLocation()
    const van = useLoaderData()

    const filterParams = location.state?.filterParams || ""
    const type = location.state?.type || "all"
    return(

        <div className="mb-10">


            <div className="p-6 flex flex-col center" key={van.id}>

            <Link
                className="underline text-lg flex mb-10"
                to={`..${location.state.filterParams}`}
                relative="path"
                >

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                Back to {type} Vans
            </Link>

            <img className="rounded-lg mb-10" src={van.imageUrl} alt={van.id}></img>

            <div>
                <span
                    style={
                        van.type === 'simple' ?
                            {backgroundColor: "#E17654", color:'#FFEAD0'} :
                        van.type === 'rugged' ?
                            {backgroundColor: "#115E59", color:'#FFEAD0'} :
                            {backgroundColor: "#161616", color:'#FFEAD0'}
                    }
                    className="p-2 ps-5 pe-5 rounded capitalize">{van.type}</span>
           </div>

            <div className="mt-5 mb-5 font-semibold">
                <h1 className="text-4xl mb-5">{van.name}</h1>
                <h1 className="text-3xl mb-5">${van.price}<span className="font-medium text-lg">/day</span></h1>
                <p>{van.description}</p>
            </div>
            <button
                style={{
                    backgroundColor:'#FF8C38'
                }}
                className="p-2 rounded font-bold text-white">Rent this van</button>
            </div>
        </div>
    )
}