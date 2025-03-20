import { Link } from "react-router-dom"
export default function Footer(){

    return(
        <footer style={{backgroundColor: '#252525'}} className="bg-gray-700 text-center p-5">
            <h1 className="text-gray-400">
                Ⓒ 2025 <Link to="/">#VANLIFE</Link>
            </h1>

        </footer>

    )
}