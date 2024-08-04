import React, { useEffect, useState } from 'react'
import { useJob } from '../contexts/jobContext'
import { Link, useParams } from 'react-router-dom';

export const Responses = () => {
    const [alljob, setAlljob] = useJob();
    const [filteredJob, setFilteredJob] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      if (alljob.length > 0) {
        const openJob = alljob.find((job) => job._id === id);
        setFilteredJob(openJob);
      }
    }, [alljob, id]); // Depend on both alljob and id
  
    useEffect(() => {
      // Optional: Log filteredJob to observe changes
      console.log("filteredJob", filteredJob);
    }, [filteredJob]);
  
    // Display loading state or message if filteredJob is empty and data is still loading
    if (filteredJob.length === 0 && alljob.length === 0) {
      return <p>Loading jobs...</p>;
    }
   
  return (
    <div className=''>
      
        <div className='w-full h-[10vh] bg-stone-300 '></div>

        <div className='flex'>
            <div id="left" className='w-[50%] h-[90vh]' >
                <div className='w-full h-[12%] pt-2  flex items-center justify-center shadow-lg  '>
                <h1 className="text-3xl font-bold mb-4 p-auto">Job Details</h1>

                </div>
           
            <div className="w-full  p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">{filteredJob.title}</h1>
        <div className="mb-4 flex items-center gap-1">
          <h2 className="text-lg font-semibold">Skills:</h2>
          <p>{filteredJob.skill}</p>
        </div>
        <div className="mb-4 flex gap-[30%]">
          <div className=' flex items-center gap-1'><h2 className="text-lg font-semibold">Job Type: </h2> <p>{filteredJob.jobtype}</p></div>
          <div className=' flex items-center gap-1'><h2 className="text-lg font-semibold">Salary: </h2> <p> ${filteredJob.salary}</p></div>
        </div>
        
        <div className="mb-4 ">
          <h2 className="text-lg font-semibold">Description:</h2>
          
          <p className='truncate' >{filteredJob.description}</p>
        </div>
        <div className="mb-4 flex items-center  gap-[30%]">
            <div className=' flex items-center gap-1'>
            <h2 className="text-lg font-semibold">Company:</h2>
            <p>{filteredJob.from}</p>

            </div>
            <div className=' flex items-center gap-1'>   <h2 className="text-lg font-semibold">Openings:</h2>
            <p>{filteredJob.openings}</p></div>
          
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Preferences:</h2>
          <p>{filteredJob.preferences}</p>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Perks:</h2>
          <p>{filteredJob.perks}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Assessments:</h2>
          <p className='truncate' > {filteredJob.assessments}</p>
        
        </div>
      </div>
            </div>
            <div id="righ" className='w-[50%] h-[90vh] bg-stone-300 ' >
            <div className='w-full h-[12%] pt-2  flex items-center justify-center shadow-lg  '>
                {filteredJob && filteredJob.students > 0 ? (
                     <h1 className="text-3xl font-bold mb-4 p-auto">Only {filteredJob.students.length} Students are Applied</h1>
                ):(
                    <h1 className="text-3xl font-bold mb-4 p-auto">NoOne Applied</h1>
                    
                )}
               

                </div>
                <div className='  w-full h-[85%] p-2 flex flex-wrap overflow-scroll custom-scrollbar'>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >available Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Kesharwani</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >bulkl</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit  h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Vidit</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Goaura</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >available Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Kesharwani</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >bulkl</h2>
                        <h2>📃</h2>
                    </div>
                    
                    <div className=' bg-white p-4 w-fit  h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Vidit</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Goaura</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >available Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Kesharwani</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >lol</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit  h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Vidit</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Goaura</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >available Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Kesharwani</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >bulkl</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit  h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Vidit</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Goaura</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >available Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Kesharwani</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >bulkl</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit  h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Vidit</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Goaura</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>
                    <div className=' bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2'>
                        <h2 className='font-bold' >Aryan Gupta</h2>
                        <h2>📃</h2>
                    </div>

                </div>
           

            </div>

        </div>

    </div>
  )
}
