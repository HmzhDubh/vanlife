import { Link, useRouteError } from 'react-router-dom'
export default function Error(){
    const error = useRouteError()
    return(
        <div className="text-black flex flex-col font-bold gap-5 items-center pt-36 pb-44">

            <h1 className="text-8xl">{error.status}</h1>
            <h1 className="text-4xl">{error.statusText}</h1>
            <h1 className="text-4xl">{error.location}</h1>
            <h1 className="text-2xl">Error: {error.message}</h1>
            <Link className="text-center w-80 bg-black text-white p-2 rounded" to="/">Return To Home</Link>
        </div>
    )

}