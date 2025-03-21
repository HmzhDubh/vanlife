import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer.jsx"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function Vans(){

    const [vans, setVans] = useState([])
    useEffect( () => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))

    }, [] )

    const vansElements = vans.map( (van) => {
        return(
            <Link to={`/vans/${van.id}`}>
            <div className="flex flex-col" key={van.id}>
                <img className="w-64 h-64 rounded " src={van.imageUrl} alt={van.id}></img>
                <div className="flex justify-between mt-3 mb-3 text-xl font-semibold">
                    <h1 className="">{van.name}</h1>
                    <h1 className="flex flex-col">
                        ${van.price}
                        <span className="font-medium text-sm">/day</span>
                    </h1>
                </div>
                <span className="bg-yellow-100 p-2 ps-5 pe-5 rounded capitalize">{van.type}</span>
            </div>
            </Link>
        )
    } )
    return(
        <div>

            <div className="p-6">
                <h1 className="text-3xl">Explore our vans options</h1>
                <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-5">
                        <span style={{backgroundColor: "#FFEAD0"}} className="p-2 ps-5 pe-5 rounded">Simple</span>
                        <span style={{backgroundColor: "#FFEAD0"}} className="bg-yellow-100 p-2 ps-5 pe-5 rounded">Luxury</span>
                        <span style={{backgroundColor: "#FFEAD0"}} className="bg-yellow-100 p-2 ps-5 pe-5 rounded">Rugged</span>
                    </div>
                    <div className="text-end">
                        <span className="underline">Clear filters</span>
                    </div>
                </div>
                <div className="flex gap-10 flex-wrap justify-center mt-10">
                    {vansElements}
                </div>
            </div>

        </div>
    )

}