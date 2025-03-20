import { Link } from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
export default function About(){

    return(

        <section className="about-hero">
            <img src="https://github.com/scrimba/learn-react-router-6/blob/main/01%20-%20Introduction%20to%20React%20Router/10%20-%20Initial%20Deploy%20to%20Netlify/assets/images/about-hero.png?raw=true" alt="about image"></img>
            <div className="p-10">
                <h1 className="text-2xl font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    <br></br>(Hitch costs extra 😉)
                    <br></br>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
            </div>
            <div>
            <div style={{backgroundColor: "#FFCC8D"}} className="ms-10 me-10 mb-10 p-10 rounded">
                <h2 className="font-bold text-2xl mb-10">Your destination is waiting.
                    <br></br>Your van is ready.</h2>
                <Link className="bg-black text-white p-4 rounded-xl font-bold" to="/vans">Explore Our Vans</Link>
            </div>
            </div>
        </section>
    )

}