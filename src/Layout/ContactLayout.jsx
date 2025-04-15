import Contact from '../Pages/Contact';
import { Outlet } from 'react-router-dom';
const ContactLayout=()=>{
    return(
        <>
        <div className='outer-container'>
           <Contact></Contact>
           <Outlet></Outlet>
        </div>
       
    
        </>
    )
}
export default ContactLayout