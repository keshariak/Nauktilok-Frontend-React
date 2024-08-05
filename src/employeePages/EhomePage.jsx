import React from 'react'
import { useEmployee } from '../contexts/employeeContexts'
import { Enavbar } from '../EmplyeeComponents/Enavbar'
import { Link, Outlet } from 'react-router-dom'
import axios_instance from '../utils/axios'




export const EhomePage = () => {
    const {employee} = useEmployee()
    console.log(employee)



    
    const logoutHandler=async(e)=>{
        try {
          const response = await axios_instance.get("employee/signout")
          console.log(response)
    
           if(response.data){
            // navigate("/employee/signin")
            window.location.href="/employee/login"
    
           }
            
          } catch (error) {
          console.log(error)
          
        }
    
      }
  return (
    <div className='w-full h-screen bg-[#F8F8F8]'>


   
    <Enavbar></Enavbar>

    
    <div id="main" className='w-full h-[90vh] flex'>
        <div id="left" className='w-[25%] h-full p-3 flex  justify-between flex-col md:block  hidden'>
            <div id="up" className=''>
            <Link to={"employee/base"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'>Home </div> </Link>
            <Link to={"employee/jobs"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'> Jobs </div></Link>
            <Link to={"employee/internships"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'>  Internships</div></Link>
            <div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'> Applications </div>

            </div>
            <div id="down " className='w-full  flex mt-20  justify-start'>
                <button onClick={logoutHandler}>
                <div className='w-[100%] text-white h-11 bg-red-400 hover:scale-[1.03] transform transition duration-300 ease-in-out rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700 justify-center'> LogOut </div>

                     </button>

            </div>
            

        </div>
        <div id="right" className='md:w-[75%] w-full h-full bg-slate-200'>
            <Outlet></Outlet>

        </div>
    </div>

    </div>
  )
}
