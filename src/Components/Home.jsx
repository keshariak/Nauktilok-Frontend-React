import React from 'react'
import { Card } from './Card'
import {JobCard} from './JobCard'
import { useUser } from '../contexts/userContexts'
import { useInternship } from '../contexts/internshipContext'
import { useJob } from '../contexts/jobContext'



export const Home = () => {
  

  const{student} = useUser()
  // console.log("data from USER api", student)

  const [internship, setinternship] = useInternship()
  const [job, setjob] = useJob()
  // console.log("jobs aagyi", job)
  return (
    <>
    { student ? 
    <div className='w-full min-h-[10vh] 0'>
    
    <div id="uername" className='w-full h-36  md:p-12 pt-8 md:pl-20 pl-10'>
        <h1 className='md:text-4xl text-3xl md:font-bold font-semibold text-gray-700 font-mono'>Hi, {student.firstname}!</h1>
        <h2 className='pt-2 md:text-xl text-lg  text-gray-700'>Let’s help you land your dream career</h2>
    </div>


    <div id="internships" className='bg-[#F0FBFF] md:pl-16 pt-6 mt-8 w-full min-h-[30vh]'>
        <h1 className='md:text-xl text-md font-bold p-3'>Recommended Internship for you</h1>
        <div className='w-full min-h-screen flex flex-wrap '>

        {
        internship.reverse().map((element) => (
        <Card key={element._id} data={element} />
      ))
      }
            
            
        </div>

    </div>


    <div id="jobs" className='bg-[#F0FBFF] md:pl-16 pt-6 mt-8 w-full min-h-[30vh]'>
        <h1 className='md:text-xl text-md font-bold p-3'>Recommended Jobs for you</h1>
        <div className='w-full min-h-screen flex flex-wrap '>

        {
        job.reverse().map((element) => (
        <JobCard key={element._id} data={element} />
      ))
      }
            
            
        </div>

    </div>



</div>

    : <h1>Loading...</h1>
    
  
  }
    </>
  )
}
