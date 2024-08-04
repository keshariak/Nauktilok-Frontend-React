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


    <div id="navbar" className='w-full h-[10vh]   items-center justify-center  flex'> 
    <div id="left" className='w-[25%] h-full l p-2'>
        <div className='w-[100%] h-[100%]  rounded-xl flex justify-between '>
        <h6 className='text-lg font-bold font-mono'>INTERNSHALA</h6>
        <div className='w-1/2 h-full  flex justify-end items-center  pr-4'>

        <h2 className='text-sm font-bold font-mono'>hi,{employee.firstname}</h2>


        </div>
       
        </div>
   

</div>
<div id="right" className='w-[75%] h-full  border-b-2 border-blue-600'>

</div>
       
    </div>

    
    <div id="main" className='w-full h-[90vh] flex'>
        <div id="left" className='w-[25%] h-full  p-3 flex  justify-between flex-col'>
            <div id="up" className=''>
            <Link to={"employee/base"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'>Home </div> </Link>
            <Link to={"employee/jobs"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'> Jobs </div></Link>
            <Link to={"employee/internships"}><div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'>  Internships</div></Link>
            <div className='w-[90%] h-11 hover:bg-stone-200 hover:scale-[1.03] transform transition duration-300 ease-in-out m-auto rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700'> Applications </div>

            </div>
            <div id="down " className='w-full  flex  justify-start'>
                <button onClick={logoutHandler}>
                <div className='w-[50%] h-11 bg-red-300 hover:scale-[1.03] transform transition duration-300 ease-in-out rounded-lg mb-2 flex items-center px-4 font-bold text-gray-700 justify-center'> LogOut </div>

                     </button>

            </div>
            

        </div>
        <div id="right" className='w-[75%] h-full bg-slate-200'>
            <Outlet></Outlet>

        </div>
    </div>

    </div>
  )
}
