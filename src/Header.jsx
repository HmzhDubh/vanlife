import { Link } from "react-router-dom"
import logo from "/logoMain.svg"
export default function Header(){

    return(
     <header style={{backgroundColor: "#FFF7ED"}} className="flex items-center p-10 justify-between">
         <Link className="font-black text-3xl" to="/">#VANLIFE</Link>
         <div className="flex gap-10 font-semibold text-gray-600">
             <Link className="" to="/about">About</Link>
             <Link to="/vans">Vans</Link>
         </div>
     </header>

    )
}