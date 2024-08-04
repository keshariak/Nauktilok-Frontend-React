import React from 'react'
import { Link } from 'react-router-dom'

export const SliceCard = ({data , name, salary, url}) => {
//   console.log("Carddddd",props)
  
  // console.log(props.data._id)
  const clickHandler=(e)=>{
    
    console.log(e)
  }
  return (
    <Link to={`/student/${url}/${data._id}`}  onClick={clickHandler} className=''>

   
    <div className='md:w-[95%] w-[90%] h-[9rem] rounded-xl m-4 pt-2 bg-white p-5 shadow-md hover:scale-[1.03] transform transition duration-300 ease-in-out'>
        <h1 className='font-bold '>{name}</h1>
        <div className='flex gap-2'>
            <p>{data.from}</p>
            <div className='border border-blue-600 w-fit text-xs rounded-full px-3 flex justify-center items-center text-blue-700'> <p>Actively hiring</p></div>

        </div>
       
        <div className='flex items-center mt-2' >
        <h5  className='text-gray-700 text-sm w-1/2'>{data.duration}</h5>
        {/* <h5 className='text-gray-700 text-sm w-1/2'>{data.openings} openings only</h5> */}
        </div>


        <div>
        <h5 className='text-gray-700 text-sm mt-2' >{data.jobtype}</h5>

        
        <h5 className='text-gray-700 text-sm mt-2 '>
        {salary > 0 ? `₹ ${salary} / month` : "Unpaid"}
        </h5>

        </div>
        
        

        

    </div>
    </Link> 
  )
}


 