import React from 'react'
import { useUser } from '../contexts/userContexts'
import { useInternship } from '../contexts/internshipContext'
import axios_instance from '../utils/axios'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
  const navigate =useNavigate()
  const {student} = useUser()
  const [internship, setinternship] = useInternship()

  const logoutHandler=async(e)=>{
    try {
      const response = await axios_instance.get("user/student/signout")
      console.log(response)

       if(response.data){
        navigate("/auth/login")

       }
        
      } catch (error) {
      console.log(error)
      
    }

  }

  


  

  return (
    <div className='w-full h-[10vh] border-b-2 flex items-center justify-center '>
      <div id="left" className=' w-1/2 h-full flex items-center font-bold pl-9'>
      <a href="/home">INTERNSHALA</a></div>

      <div id="right" className='w-1/2  h-full flex items-center gap-9 justify-end pr-12'>
        <a href="">Internship</a>
        <a className='' href="">Jobs</a>
       <div className='relative w-fit px-5 h-full  flex items-center bg-blue-400'>
       <div className=" h-[25px] w-[25px] p-3  rounded-full border border-gray-700 flex items-center font-bold justify-center mr-1 ">
          {student.firstname[0]}
         
          
          </div> 
          <span className=''>
            <h1 className='w-1 text-xs'>▼</h1>
          </span>
          <div className='h-[40vh] w-[15vw] bg-green-500 absolute right-0 top-[10vh]'></div>
       </div>
        <button onClick={logoutHandler} >Logout</button>
        

      </div>

    </div>
  )
}
