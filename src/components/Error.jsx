import {useNavigate, useRouteError } from "react-router-dom"
const Error=()=>{
    const error=useRouteError();
    const navigate=useNavigate();
    return(
        <>
         <h2>An error occurred</h2>
         <p>{error.message}</p>
         <button onClick={()=>navigate('/')} >Home Page</button>
        </>
       
    )
}
export  default Error