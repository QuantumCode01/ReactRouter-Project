import { useLoaderData  } from "react-router-dom"

import { useNavigate } from "react-router-dom";
const Jobdetails=()=>{
    const jobdetails=useLoaderData();
    const navigate=useNavigate();
    return(
      <div className="mt-5 job-details-container">
        <p className="fs-6"><b>Title:</b>{jobdetails.title}</p>
        
        <p className="fs-6"><b>Salary:</b>{jobdetails.salary}</p>
     
        <p className="fs-6"><b>Location:</b>{jobdetails.location}</p>
        <p className="fs-6"><b>Description:</b>{jobdetails.description}</p>
       
        <button className="bg-dark text-white py-1 px-3">Apply Now</button> &nbsp;
        <button onClick={()=>navigate('/jobs')}className="bg-dark text-white py-1 px-3">Back To Jobs</button>
      </div>
    )
}
export default Jobdetails


export const JobdetailLoader=async({params})=>{
    const {id}=params;
   const res= await fetch("assets/data.json");
   if(!res.ok){
    throw Error("Could not found job details")
 }
 const data=await res.json();
 const job=data.jobs.find((j)=>j.id===parseInt(id))
 if(!job){
  throw Error("Job not found")
 }
 return job;

}
