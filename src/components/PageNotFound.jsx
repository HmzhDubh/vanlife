import { Link } from 'react-router-dom'
export default function PageNotFound(){

    return(
        <div className="flex flex-col gap-5 items-center pt-36 pb-44">

            <h1 className="text-8xl">404</h1>
            <h1 className="text-4xl">Page Not Found</h1>
            <Link className="text-center w-80 bg-black text-white p-2 rounded" to="/">Return To Home</Link>
        </div>
    )

}