import { useState, useEffect } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api.js'

export function loader() {
    return getVans()
}

export default function Vans(){


    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get('type')
    const vans = useLoaderData()

    const vansElements = vans?.filter( van => (
        typeFilter ?
        van.type === typeFilter :
        van

        ) ).map( (van) => {

        return(
            <Link key={van.id} className="w-48" to={van.id} state={{filterParams: `?${searchParams.toString()}`, type: typeFilter}}>
            <div className="flex flex-col">
                <img className="w-full h-full rounded " src={van.imageUrl} alt={van.id}></img>
                <div className="flex justify-between mt-3 mb-3 text-xl font-semibold">
                    <h1 className="">{van.name}</h1>
                    <h1 className="flex flex-col">
                        ${van.price}
                        <span className="font-medium text-sm">/day</span>
                    </h1>
                </div>
                <div>
                    <span
                        style={
                            van.type === 'simple' ?
                                {backgroundColor: "#E17654", color:'#FFEAD0'} :
                            van.type === 'rugged' ?
                                {backgroundColor: "#115E59", color:'#FFEAD0'} :
                                {backgroundColor: "#161616", color:'#FFEAD0'}
                            }

                        className={"p-2 ps-5 pe-5 rounded capitalize"}
                    >
                    {van.type}
                    </span>
                </div>
            </div>
            </Link>
        )
    } )

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
          if (value === null) {
            prevParams.delete(key)
          } else {
            prevParams.set(key, value)
          }
          return prevParams
        })
      }

    return(
        <div>

            <div className="p-6">
                <h1 className="text-3xl font-bold">Explore our vans options</h1>
                <div className="flex justify-center gap-5 items-center mt-5">
                    <div className="flex gap-5">
                        <button
                            onClick={() => handleFilterChange("type", "simple") }
                            style={typeFilter==='simple' ?
                                {backgroundColor: "#E17654", color:'#FFEAD0'} :
                                {backgroundColor: "#FFEAD0", color:'#4D4D4D'}}
                            className="hover:font-bold p-2 ps-5 pe-5 rounded"
                            >Simple
                        </button>

                        <button
                            onClick={() => handleFilterChange("type", "rugged") }
                            style={typeFilter==='rugged' ?
                                {backgroundColor: "#115E59", color:'#FFEAD0'} :
                                {backgroundColor: "#FFEAD0", color:'#4D4D4D'}}
                            className="hover:font-bold p-2 ps-5 pe-5 rounded "
                            >Rugged
                        </button>
                        <button
                            onClick={() => handleFilterChange("type", "luxury") }
                            style={typeFilter==='luxury' ?
                                {backgroundColor: "#161616", color:'#FFEAD0'} :
                                {backgroundColor: "#FFEAD0", color:'#4D4D4D'}}
                            className="hover:font-bold p-2 ps-5 pe-5 rounded"
                            >Luxury
                        </button>
                    </div>
                    {typeFilter ?
                    <div className="text-end">
                        <button
                            onClick={() => handleFilterChange("type", null) }
                            className="hover:font-bold hover:underline">Clear filters
                        </button>
                    </div>
                    : null}
                </div>
                <div className="flex gap-10 flex-wrap justify-center mt-10">
                    {vansElements}
                </div>
            </div>

        </div>
    )

}