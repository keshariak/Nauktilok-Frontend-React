import React from 'react'
import { Link } from 'react-router-dom'

export const EsliceCard = ({}) => {
  return (
    <>
    <Link to={"/responses"}>
     <div id='JobCard' className='bg-white rounded-xl w-[95%] h-14 flex mx-auto hover:scale-[1.01] transform transition duration-300 ease-in-out'>
                <div className='div w-[10%] h-full  flex items-center pl-4'> #1028</div>
                <div className='div w-[30%] h-full  flex items-center pl-4'> Web Developmemt</div>
                <div className='div w-[15%] h-full  flex items-center pl-4'> Remote</div>
                <div className='div w-[15%] h-full  flex items-center pl-4'>45</div>
                <div className='div w-[15%] h-full  flex items-center pl-4'>03</div>
                <div className='div w-[10%] h-full  flex items-center pl-4'>delete</div>
                
            </div>
            </Link>
    </>

    
   
  )
}
