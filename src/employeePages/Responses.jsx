import React, { useEffect, useState } from 'react'
import { useJob } from '../contexts/jobContext'
import { Link, useAsyncError, useParams } from 'react-router-dom';
import axios_instance from '../utils/axios';
import { Enavbar } from '../EmplyeeComponents/Enavbar';

export const Responses = () => {


    const [alljob, setAlljob] = useJob();
    const [filteredJob, setFilteredJob] = useState([]);
    const [appliedStudents , setappliedStudents] =useState([])
    const { id } = useParams();

    const [allStudents, setAllStudents] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
  
    const getAllStudents = async () => {
      try {
        const response = await axios_instance.get("/employee/allstudents");
        
        if (response.data && Array.isArray(response.data.students)) {
          setAllStudents(response.data.students);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Failed to load student data.");
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError("Failed to load student data.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getAllStudents();
    }, []);
  
    // console.log("allStudents", allStudents);
  
    useEffect(() => {
      if (alljob.length > 0) {
        const openJob = alljob.find((job) => job._id === id);
        setFilteredJob(openJob);
      }
    }, [alljob, id]); // Depend on both alljob and id
  
    useEffect(() => {
      setappliedStudents(filteredJob.students)
    }, [filteredJob]);


      // Find students who have applied for the job in allStudents
  const appliedStudentDetails = allStudents.filter(student =>
    // console.log(student._id)
    appliedStudents.includes(student._id)
  );
//   console.log("Applied Student Details:", appliedStudentDetails);
  appliedStudentDetails.forEach((elem)=>{
    console.log("SHOW DATA" ,elem.firstname, elem._id)
})
 console.log( 'appliedStudentDetails', appliedStudentDetails)

    
  
  
    // Display loading state or message if filteredJob is empty and data is still loading
    if (filteredJob.length === 0 && alljob.length === 0) {
      return <p>Loading jobs...</p>;
    }
    console.log( 'appliedStudents', filteredJob)
   

  return (
    <>
    {
      allStudents? 
      <div className=''>
        
      
      {/* <div className='w-full h-[10vh] bg-stone-300 '></div> */}
      <Enavbar></Enavbar>

      <div className='flex md:flex-row flex-col'>
          <div id="left" className='md:w-[50%] w-full h-fit' >
              <div className='w-full h-[12%] pt-2  flex items-center justify-center shadow-lg  '>
              <h1 className="text-3xl font-bold mb-4 p-auto">Job Details</h1>

              </div>
         
          <div className="w-full  p-6 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-4">{filteredJob.title}</h1>
      <div className="mb-4 flex items-center gap-1">
        <h2 className="md:text-lg text-sm font-semibold">Skills:</h2>
        <p className='text-sm md:text-base'>{filteredJob.skill}</p>
      </div>
      <div className="mb-4 flex  justify-between md:justify-normal md:gap-[30%] ">
        <div className=' flex items-center gap-1'><h2 className="md:text-lg text-sm font-semibold">Job Type: </h2> <p className='text-sm md:text-base'>{filteredJob.jobtype}</p></div>
        <div className=' flex items-center gap-1'><h2 className="md:text-lg text-sm font-semibold">Salary: </h2> <p className='text-sm md:text-base'> ${filteredJob.salary}</p></div>
      </div>
      
      <div className="mb-4 ">
        <h2 className="md:text-lg text-sm font-semibold">Description:</h2>
        
        <p className='truncate text-sm md:text-base' >{filteredJob.description}</p>
      </div>
      <div className="mb-4 flex items-center justify-between md:justify-normal  md:gap-[30%]">
          <div className=' flex items-center gap-1'>
          <h2 className="md:text-lg text-sm font-semibold gap-1">Company:</h2>
          <p className='text-sm md:text-base'>{filteredJob.from}</p>

          </div>
          <div className=' flex items-center gap-1'>   <h2 className="md:text-lg text-sm font-semibold">Openings:</h2>
          <p className='text-sm md:text-base'>{filteredJob.openings}</p></div>
        
      </div>
      <div className="mb-4">
        <h2 className="mdtext-lg text-sm font-semibold">Preferences:</h2>
        <p className='text-sm md:text-base'>{filteredJob.preferences}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="md:text-lg text-sm font-semibold">Perks:</h2>
        <p className='text-sm md:text-base'>{filteredJob.perks}</p>
      </div>
      {/* {filteredJob.assessments? 
       <div className="mb-4">
       <h2 className="md:text-lg text-sm font-semibold">Assessments:</h2>
       <p className='truncate' > {filteredJob.assessments}</p>
     
     </div>
      :( <h1></h1>)} */}
      <div className="mb-4">
       <h2 className="md:text-lg text-sm font-semibold">Assessments:</h2>
       <p className='' > {filteredJob.assesments}</p>
     
     </div>
     

    </div>
          </div>
          <div id="righ" className='md:w-[50%] w-full h-fit bg-stone-300 ' >
          <div className='w-full h-[12%] pt-2  flex items-center justify-center shadow-lg  '>

              
              {appliedStudentDetails.length > 0 ? (
                   <h1 className="md:text-3xl font-bold mb-4 p-auto">Only {filteredJob.students.length} Students are Applied</h1>
              ):(
                  <h1 className="md:text-3xl font-bold mb-4 p-auto">NoOne Applied</h1>
                  
              )}
             

              </div>
              <div className='  w-full max-h-[85%] p-2 flex flex-wrap overflow-scroll custom-scrollbar'>
              {
                  appliedStudentDetails.map((elem) => (

                    <Link to={`/response/studentdetails/${elem._id}`}>
                       {/* <Link to={"/response/studentdetails/:elem._id"}></Link> */}
                    <div>
                      <div key={elem._id} className="bg-white p-4 w-fit h-fit rounded-md flex gap-2 m-2">
                    <h2 className="font-bold">{elem.firstname} {elem.lastname}</h2>
                    <h2>📃</h2>
                    </div>
                    </div>
                  
                    </Link>


                    
                  ))
               }

              </div>
         

          </div>

      </div>

  </div>
      : <h1>Loadinggg</h1>


    }</>
   
  )
}
