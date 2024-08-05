import React from 'react'
import { Link } from 'react-router-dom'

export const JobCard = (props) => {
  // console.log("Carddddd",props)
  // console.log(props.data._id)
  const clickHandler=(e)=>{
    
    console.log(e)
  }
  return (

   
    <div className='md:w-[27rem] w-[90%] h-[18rem] rounded-xl m-4 pt-7 bg-white p-5 hover:scale-[1.03] transform transition duration-300 ease-in-out'>
        <h1 className='font-bold'>{props.data.title}</h1>
        <h4>Employee/Company Name</h4>
        <div id="line" className='w-full h-[1px] mt-5 mb-3 bg-gray-600'></div>
        <div className='flex items-center mt-6' >
        <h5  className='text-gray-700 text-sm w-1/2'>{props.data.duration}</h5>
        {/* <h5 className='text-gray-700 text-sm w-1/2'>{props.data.openings} openings only</h5> */}
        </div>
        
        <h5 className='text-gray-700 text-sm mt-2' >{props.data.jobtype}</h5>
        <h5 className='text-gray-700 text-sm mt-2 '>₹ {props.data.salary} / months</h5>

        <div id="bottom" className='flex justify-between items-center  mt-10'>
            <div className=''>
                <p className='bg-gray-200 p-1 font-bold text-gray-800 px-2 rounded-md'>Job</p>
            </div>

            <div className=''>
              <Link to={`/student/job/${props.data._id}`}  onClick={clickHandler} className='text-blue-900 font-bold hover:underline'>Explore more </Link>
            </div>
        </div>

    </div>
  )
}