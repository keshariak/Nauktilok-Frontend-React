import React from 'react'
import { Navbar } from '../Components/Navbar'
import { Home } from '../Components/Home'
import { useUser } from '../contexts/userContexts'

export const HomePage = () => {
  const {student} =useUser()
//   console.log("first", student)
  return (
    <div>
        <Navbar></Navbar>
        <Home></Home>

        
        {/* {student._id} */}
    </div>
  )
}
