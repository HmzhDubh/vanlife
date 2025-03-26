import { Link } from "react-router-dom"

import "./App.css"
export default function Home(){

    return(
        <main className="home ">
            <div className="mt-32 text-center flex flex-col gap-5 items-center justify-center">
                <h1 className="text-3xl font-bold pt-4">You got the travel plans, we got the travel vans.</h1>
                <h1 className="text-md font-medium ">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h1>
                <div>
                    <Link
                     style={{
                         backgroundColor:'#FF8C38'
                     }}
                     to="/vans" className="bg-yellow-700 rounded p-2 text-center font-bold">Find Your Van</Link>
                </div>
            </div>
        </main>

    )
}