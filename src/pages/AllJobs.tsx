import React from 'react'
import { Navbar } from '../Components/Navbar'
import { useUser } from '../contexts/userContexts'
import {JobCard} from '../Components/JobCard'

import { useJob } from '../contexts/jobContext'

import { SliceCard } from '../Components/SliceCard'
import { Link } from 'react-router-dom'


export const AllJobs = () => {

    const{student} = useUser()
//   console.log("data of student", student)

  const [job, setjob] = useJob()
//   console.log("jobs aagyi in jobpage", job)
const url ="job"
  return (
    <div >
        <Navbar></Navbar>
        <div className='w-full h-24 bg-violet-200 flex justify-center'>
            <div className='md:w-1/2 w-full h-full '>
            <div className="left p-3">
                <h1 className=' font-extrabold md:text-2xl text-md'>Ab naukree ki tension ko bolo bye!</h1>
                <p className=' md:text-base text-xs'>Find jobs with salaries up to ₹30 LPA</p>
            </div>
            

            </div>
        </div>

        <div id="main" className=' md:w-2/3 w-full min-h-screen mx-auto flex mt-6 '>
           <div id="left" className=' w-1/3 h-screen md:block hidden'>


              <div id="details" className=' m-auto mt-10 w-[90%] h-[86%] border rounded-lg shadow-md pt-4'>
              <div className=" p-6 rounded-lg  max-w-xl mx-auto">

      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Why Choose Internshala?
      </h2>
      <p className="text-md text-gray-700 text-center mb-4">
        Discover top internships that provide practical experience and career growth opportunities.
      </p>
      <div className="flex flex-col space-y-4 mt-10 gap-8 pl-5">
        <div className="flex items-start space-x-3">
          {/* <img src="https://img.icons8.com/color/48/000000/code.png" alt="Hands-on Experience" className="h-10 w-10" /> */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Hands-on Experience</h3>
            <p className="text-sm text-gray-700">
              Work on projects that develop real-world skills.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          {/* <img src="https://img.icons8.com/color/48/000000/remote-work.png" alt="Flexible Options" className="h-10 w-10" /> */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Flexible Options</h3>
            <p className="text-sm text-gray-700">
              Choose remote or in-office internships to fit your lifestyle.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          {/* <img src="https://img.icons8.com/color/48/000000/leadership.png" alt="Connect with Leaders" className="h-10 w-10" /> */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Connect with Leaders</h3>
            <p className="text-sm text-gray-700">
              Collaborate with industry experts and expand your network.
            </p>
          </div>
        </div>
      </div>
    </div>

              </div>

           </div>
           <div id="right" className=' md:w-2/3 w-full h-screen  flex items-center flex-col'>
          
           <h1 className=' font-bold md:p-2 md:text-base text-sm p-4 text-lg '>{job.length} jobs and internships matching your preferences</h1>
           
           <div id="internships" className='w-full h-full overflow-scroll  custom-scrollbar'>  

           {
            job.reverse().map((element) => (
            <SliceCard key={element._id} data={element} name={element.title} salary={element.salary} url={url} />
          ))
          }


           </div>

           </div>
        </div>
        



       




    </div>
  )
}
