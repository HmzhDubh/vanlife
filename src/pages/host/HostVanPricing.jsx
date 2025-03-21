import { Link, useOutletContext } from "react-router-dom"
export default function HostVanPricing() {
    const {van} = useOutletContext()
    return(
        <h1 className="pt-5 pb-5 text-2xl font-semibold">${van.price}<span className="text-lg font-normal">/day</span></h1>
    )
}