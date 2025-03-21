import { Link, NavLink } from "react-router-dom"
import logo from "/logoMain.svg"
export default function Header(){

    return(
     <header style={{backgroundColor: "#FFF7ED"}} className="flex items-center p-10 justify-between">
         <Link className="font-black text-3xl" to="/">#VANLIFE</Link>
         <div className="flex gap-10 font-semibold text-gray-600">
             <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="host">Host</NavLink>
             <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="about">About</NavLink>
             <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="vans">Vans</NavLink>
         </div>
     </header>

    )
}