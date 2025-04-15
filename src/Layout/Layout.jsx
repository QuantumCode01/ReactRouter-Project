import Navbarnew from "../components/Navbarnew"
import { Outlet } from "react-router-dom"

const Layout=()=>{
    return(
      <>
      <Navbarnew/>
      <div className="content-container">
      <Outlet></Outlet>
      </div>
      
      
      </>
    )
}
export default Layout