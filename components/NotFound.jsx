import { useRouteError } from "react-router-dom"

export default function NotFound(){
    const errror = useRouteError() 
    return(
        <>
            <h1>page not found {errror.status}</h1>
        </>
    )
}