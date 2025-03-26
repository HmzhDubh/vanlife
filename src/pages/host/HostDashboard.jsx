import { Link, useLoaderData } from 'react-router-dom'

import HostVans from './HostVans.jsx'
import { requireAuth } from '../../utils.js'

import { getHostVans } from '../../api.js'
export function loader(){

    return getHostVans()

}
export default function HostDashboard(){
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
    return(
        <div className="mt-10">

            {/* Income section */}
            <div style={{backgroundColor: "#FFEAD0"}} className="p-6">
                <h1 className="text-4xl font-bold mb-5">Welcome!</h1>
                <div className="flex justify-between mb-5">
                    <p>Income last <span className="underline">30 days</span></p>
                    <Link className="hover:underline hover:text-gray-900" to="income">Details</Link>
                </div>
                <h1 className="text-5xl font-bold">$2,245</h1>
            </div>
            {/* Review section */}
            <div style={{backgroundColor: "#FFDDB2"}} className="review-score flex justify-between p-6 pt-9 pb-9">
                <div className="flex text-xl font-bold gap-3">
                    <h4 className="">Review Score</h4>
                    <h4 className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF8C38" className="size-6">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        5.0/5
                    </h4>
                </div>
                <Link className="hover:underline hover:text-gray-900" to="reviews">Details</Link>
            </div>

            {/* Listed Vans */}
                <div className='flex justify-end'>

                    <Link className="mt-10 me-6 hover:underline hover:text-gray-900" to="vans">View All</Link>
                </div>
                <div className="ps-10 mb-20">
                            <h1 className="text-4xl font-bold mt-5">Your Listed Vans</h1>
                <div className="mt-10">

                </div>
                    {hostVansElems}
                </div>

        </div>
    )

}