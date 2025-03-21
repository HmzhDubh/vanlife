import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from "../../components/Header.jsx"
import Footer from "../../components/Footer.jsx"
export default function VanDetails(){

    const params = useParams()

    const [van, setVan] = useState(null)


    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
            .then( res => res.json() )
            .then( data => setVan(data.vans) )
    }, [params.id] )
    return(

        <div className="mb-10">

            {van ?
                <div className="p-6 flex flex-col center" key={van.id}>

                <Link className="underline text-lg flex mb-10" to="/vans">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>
                    Back to Vans
                </Link>

                <img className="rounded-lg mb-10" src={van.imageUrl} alt={van.id}></img>

                <div>
                    <span className="bg-yellow-100 p-1 ps-5 pe-5 rounded capitalize">{van.type}</span>
               </div>

                <div className="mt-5 mb-5 font-semibold">
                    <h1 className="text-4xl mb-5">{van.name}</h1>
                    <h1 className="text-3xl mb-5">${van.price}<span className="font-medium text-lg">/day</span></h1>
                    <p>{van.description}</p>
                </div>
                <button className="bg-yellow-700 p-2 rounded font-bold text-white">Rent this van</button>
            </div> :
            <h1 className="text-6xl text-center mt-20">Loading....</h1>}

        </div>



)
}