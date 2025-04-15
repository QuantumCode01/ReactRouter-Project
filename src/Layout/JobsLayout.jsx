import { Outlet } from "react-router-dom"
const JobsLayout=()=>{
    return(
        <>
           <div className="outer-container">
                <h2>Current Openings</h2>
                <p>List Of Current Jobs Opening in our Company</p>
                <Outlet></Outlet>
            </div>
        </>
       
    )
}
export default JobsLayout