
import { useOutletContext } from "react-router-dom"
export default function HostVanInfo(){
    const {van} = useOutletContext()

    return(

        <div className="flex flex-col gap-3 mt-6">
            <h1><span className="font-bold">Name: </span>{van.name}</h1>
            <h1><span className="font-bold">Category: </span>{van.type}</h1>
            <h1><span className="font-bold">Description: </span>{van.description}</h1>
            <h1><span className="font-bold">Visibility: </span>{van.visibility}</h1>

        </div>

    )

}