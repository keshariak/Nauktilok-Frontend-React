import React, { useEffect, useRef, useState } from 'react'

// import { useInternship } from '../contexts/internshipContext'
import axios_instance from '../utils/axios'
import { Link, useNavigate } from 'react-router-dom'
import { useEmployee } from '../contexts/employeeContexts'



export const Enavbar = async() => {
  const navigate =useNavigate()
    const {employee}= useEmployee()
   console.log("hey",employee)
  // const [internship, setinternship] = useInternship()
  const [dropdownopen, setdropdownopen] = useState(false)
  const [sidbarOpen, setsidbarOpen] = useState(false)
  const sidebarref = useRef(null)

  const toggleSidebar=()=>{
    setsidbarOpen(!sidbarOpen)
  }

 useEffect(()=>{
  const HandelClickOutside=(e)=>{
    if(sidebarref.current && !sidebarref.current.contains(e.target)){
      setsidbarOpen(false)
    }
  }
  document.addEventListener("mousedown", HandelClickOutside)
  return ()=>{
    document.removeEventListener("mousedown", HandelClickOutside)
  }
  


 },{sidebarref})


  const logoutHandler=async(e)=>{
    try {
      const response = await axios_instance.get("employee/signout")
      console.log(response)

       if(response.data){
        navigate("/employee/login")

       }
        
      } catch (error) {
      console.log(error)
      
    }

  }

  return (
    <div className='w-full h-[10vh] border-b-2 flex items-center justify-center '>



      {/* sidebar code here */}
      <div id="left" className=' w-1/2 h-full flex items-center font-bold pl-7'>

      <div onClick={toggleSidebar } className='text-3xl pr-3 md:hidden '> = </div>

      <div ref={sidebarref} className={`md:hidden z-99999 block fixed w-[80%] transition-all duration-500  h-[100vh] top-0  bg-white ${sidbarOpen ? "left-0" : "left-[-100%]"}`}> 


        <div  onClick={toggleSidebar} className='absolute right-0 p-2 text-lg text-slate-700'>x</div>


<div className='w-full h-[12%] p-3 mt-5 pl-4 border-b-2 border-gray-300 flex items-center gap-1 text-slate-800'>

<div className=" h-[43px] w-[43px] p-3 text-3xl rounded-full border border-gray-700 flex items-center font-normal justify-center mr-1 ">
          A
         
          
          </div> 

  <div>
  <h1 className='font-bold text-lg '>Full Name</h1>
  <h5  className='font-medium text-sm'>employee@gmail.com</h5>

  </div>
</div>

<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>home</h1></div>
<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>home</h1></div>
<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>home</h1></div>


<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>My Apllications</h1></div>
<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>home</h1></div>
<div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>Home</h1></div>
<div className='w-full h-12  flex items-center pl-3'>
   <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>  <button onClick={logoutHandler} >LogOut</button></h1>
   </div> </div>





     
      <Link to={"/employee/home"}>INTERNSHALA</Link>
      </div>

      <div id="right" className='w-1/2  h-full flex items-center gap-9 justify-end pr-12'>
      <Link to={""}  className='ml-3 md:block hidden hover:scale-[1.03] transform transition duration-300 ease-in-out'>Internships</Link>
      <Link to={""}  className='ml-3 md:block hidden hover:scale-[1.03] transform transition duration-300 ease-in-out'>Jobs</Link>




      {/* profile dropdown */}

      <div  className='md:block hidden '>
      <div onMouseLeave={()=> setdropdownopen(false)} onMouseEnter={()=> setdropdownopen(true)} 
      className='relative w-fit px-5 h-[72px]  flex items-center '>
       <div className=" h-[25px] w-[25px] p-3  rounded-full border border-gray-700 flex items-center font-bold justify-center mr-1 hover:scale-[1.2] transform transition duration-300 ease-in-out ">
          E
         
          
          </div> 
          <span className=''>
            <h1 className='w-1 text-xs'>▼</h1>
          </span>

          {dropdownopen && (
            
          <div className='h-[45vh] md:w-[17vw] w-[70vw] bg-white shadow-2xl absolute right-0 top-[10vh]'>

          <div className='w-full h-[25%] p-3 pl-4 border-b-2 border-gray-300 text-gray-700'>
            <h1 className='font-bold'>Full Name</h1>
            <h5>employee@gmail.com</h5>
          </div>
          <div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'><Link to={"/employee/home"}>Home</Link></h1></div>
          <div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>My Apllications</h1></div>
          <div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>home</h1></div>
          <div className='w-full h-12  flex items-center pl-3'> <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>Home</h1></div>
          <div className='w-full h-12  flex items-center pl-3'>
             <h1 className='font-semibold text-gray-700 hover:text-[#008BDC]'>  <button onClick={logoutHandler} >LogOut</button></h1>
             </div>
          </div>

          )

          }
       </div>

      </div>
      </div>

    </div>
  )
}
