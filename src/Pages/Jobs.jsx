import { Link, useLoaderData } from "react-router-dom"

const Jobs=()=>{
    let jobsData=useLoaderData();
    return(
        <div className="jobs-container">
        {jobsData.jobs.map((job) => (
                <Link to={job.id.toString()} key={job.id}>
                    <h5>{job.title}</h5>
                    <p>{job.location}</p>
                </Link>
                ))
        }
        </div>
    )
}
export default Jobs


export const JobsLoader = async () => {
    const data = await fetch("assets/data.json"); // Adjust URL for production
    const result = await data.json();
    return result;
  };