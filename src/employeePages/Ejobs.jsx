import React, { useEffect, useState } from 'react'
import { useJob } from '../contexts/jobContext'
import axios_instance from '../utils/axios';
import { useEmployee } from '../contexts/employeeContexts';
import { Link } from 'react-router-dom';




export const Ejobs = () => {
    const [alljob, setalljob] = useJob();
    const {employee} = useEmployee()
    const [filteredJobs, setFilteredJobs] = useState([]); // Store filtered jobs
    useEffect(() => {
        // Filter jobs based on the condition
        const filterJobsByEmployee = () => {
          const filtered = alljob.filter((job) => job.employee === employee._id);
          setFilteredJobs(filtered);
        };   
        filterJobsByEmployee();
      }, [alljob, employee]); 
    // console.log("filteredJobs filteredJobs filteredJobs",filteredJobs)
  return (
    <div className=''>
        <div id="top" className='w-full h-[10vh]  '>
            <div className='w-full h-full flex justify-center items-center '>
              <button className='p-2 rounded bg-blue-300 hover:bg-blue-500 transition-all' >
                <Link to={"/create/job"}>+ Create NewJob</Link>
              </button>
            </div>
        </div>




        {filteredJobs.length > 0 ? (
            
       <>
        
       <div className='w-full h-1/2 '>
      
       <div id='JobCard' className=' w-[95%] h-9 flex mx-auto text-slate-500 font-bold'>
    <div className='div w-[10%] h-full  flex items-center pl-4'> ID</div>
    <div className='div w-[30%] h-full  flex items-center pl-4'> Job Title</div>
    <div className='div w-[15%] h-full  flex items-center pl-4'> Job Type</div>
    <div className='div w-[15%] h-full  flex items-center pl-4'>applications</div>
    <div className='div w-[15%] h-full  flex items-center pl-4'>Openings</div>
    <div className='div w-[10%] h-full  flex items-center pl-4'></div>
</div>



</div>


<div id="down" className='pt-4'>
{filteredJobs.map((elem,index)=>(
    

      <Link to={`/job/response/${elem._id}`}>
      <div id='JobCard' className='bg-white rounded-xl w-[95%] mb-3 h-14 flex mx-auto hover:scale-[1.01] transform transition duration-300 ease-in-out'>
      <div className='div w-[10%] h-full  flex items-center pl-4'> #{index+1}</div>
      <div className='div w-[30%] h-full font-semibold flex items-center pl-4'> {elem.title}</div>
      <div className='div w-[15%] h-full  flex items-center pl-4'> {elem.jobtype}</div>
      <div className='div w-[15%] h-full  flex items-center pl-4'>{elem.students.length}</div>
      <div className='div w-[15%] h-full  flex items-center pl-4'>{elem.openings}</div>
      <div className='div w-[10%] h-full  flex items-center pl-4'>delete</div>
     
  </div>
  </Link>



))}



</div>
</>
          
        ) : (
          <p className="text-center text-gray-700 py-4 text-2xl font-bold">
            There are no Jobs available.
          </p>
        )}
       
        


        







        
    </div>
  )
}
