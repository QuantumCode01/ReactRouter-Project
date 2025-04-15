import {  useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate=useNavigate();
    return (
    <div>
      <h1>Contact Me</h1>
      <br></br>
      <div className="contact-sub-pages">
      <button onClick={()=>navigate('info',{replace:true})}>Info</button>
      <button onClick={()=>navigate('form')}>Form</button>
      </div>
      
    </div>
   )
  }
  
  export default Contact;