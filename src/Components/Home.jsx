import React from 'react'
import { Card } from './Card'
import {JobCard} from './JobCard'
import { useUser } from '../contexts/userContexts'
import { useInternship } from '../contexts/internshipContext'
import { useJob } from '../contexts/jobContext'



import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../utils/style.css'

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom'



export const Home = () => {
  

  const{student} = useUser()
  // console.log("data from USER api", student)

  const [internship, setinternship] = useInternship()
  const [job, setjob] = useJob()
  // console.log("jobs aagyi", job)
  return (
    <>

    {/* Here data of jobs and internships */}
    { student ? 
    <div className='w-full min-h-[10vh] 0 bg-stone-200'>
    
    <div id="uername" className='w-full h-36  md:p-12 pt-8 md:pl-20 pl-10'>
        <h1 className='md:text-4xl text-3xl md:font-bold font-semibold text-gray-800 font-mono'>Hi, {student.firstname}!</h1>
        <h2 className='pt-2 md:text-xl text-lg  text-gray-700'>Let’s help you land your dream career</h2>
    </div>
     {/* Main Content */}
     <main className="container mx-auto md:p-8 p-3">
        {/* Hero Section */}
        <section className="bg-stone-100 shadow-md rounded-lg md:p-8 p-2  mb-12 text-center">
          <h2 className="md:text-4xl text-lg  font-semibold mb-4">Find Your Dream Job or Internship</h2>
          <p className="text-gray-700 mb-6">
            Explore thousands of opportunities and take the next step in your career.
          </p>
          <div className="flex justify-center space-x-4  w-full">
            <Link to="/student/alljobs" className="bg-cyan-800 text-white  md:px-6 py-2 px-4 text-sm rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out">Browse Jobs</Link>
            <Link to="/student/allinternships" className="bg-emerald-700 text-white text-sm  md:px-6 py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">Explore Internships</Link>
          </div>
        </section>

       

        {/* Testimonial Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-stone-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-4">
                "Thanks to Naukrilok, I found my dream job within weeks!"
              </p>
              <h4 className="font-bold">Vidit Parasar</h4>
            </div>
            <div className="bg-stone-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-4">
                "The internship I secured through this site kick-started my career."
              </p>
              <h4 className="font-bold">Shashin Kesharwani</h4>
            </div>
            <div className="bg-stone-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-4">
                "I found my dream company TCS , Thanks Naukrilok!"
              </p>
              <h4 className="font-bold">Gourav Sandhliya</h4>
            </div>
          </div>
        </section>
      </main>



    <div id="internships" className='bg-[#F0FBFF] md:pl-16 pt-6 mt-8 w-full md:h-fit pb-10 '>
        <h1 className='md:text-xl text-md font-bold p-3'>Recommended Internship for you</h1>

        {/* <div className='w-full h-fit flex  overflow-auto'>
        {internship.reverse().map((element) => (
        <Card key={element._id} data={element} />
      ))
      }
        </div> */}

<Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      > 
        <div id='resume' className='w-full h-fit flex bg-purple-500 overflow-auto'>   
        {internship.reverse().map((element) => (
          <SwiperSlide> <Card key={element._id} data={element} /></SwiperSlide>     
      ))
      }
        </div> 
      </Swiper>
    </div>



    <div id="jobs" className='bg-[#F0FBFF] md:pl-16 pt-6 mt-8 w-full md:h-fit pb-10'>
        <h1 className='md:text-xl text-md font-bold p-3'>Recommended Jobs for you</h1>
        <div className='w-full h-fit flex flex-wrap '>

        {/* {
        job.reverse().map((element) => (
        <JobCard key={element._id} data={element} />
      ))
      } */}
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        
        
        <div className='w-full h-fit flex bg-purple-500 overflow-auto'>
          
        {job.reverse().map((element) => (
          <SwiperSlide>  <JobCard key={element._id} data={element} /></SwiperSlide>
        
      ))
      }
        </div> 


      </Swiper>
            
            
        </div>

    </div>



</div>

    : <h1>Loading...</h1>
    
  
  }
    </>
  )
}
