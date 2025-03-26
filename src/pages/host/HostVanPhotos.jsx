import { Link, useOutletContext } from "react-router-dom"
export default function HostVanPhotos() {
    const {van} = useOutletContext()
    return(
        <div>
            <img className="w-24 pt-5 rounded" src={van.imageUrl}></img>
        </div>
    )
}