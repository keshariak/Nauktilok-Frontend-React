import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../contexts/userContexts'
import { useAllStudent } from '../contexts/AllStudentsContexts'
import axios_instance from '../utils/axios'
import { Enavbar } from '../EmplyeeComponents/Enavbar'


export const ResponsedStudentDetail = () => {
    const {id}=useParams()
    console.log(id)
    const {allStudents} = useAllStudent();

    const currentStudent= allStudents.find(student=> student._id == id)
    console.log("currentStudent", currentStudent)
 
  return (
    <div> 
        <Enavbar></Enavbar>
        
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{currentStudent.firstname} {currentStudent.lastname}</h1>
        <p className="text-gray-600">{currentStudent.email}</p>
      </div>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          Education
        </h2>
        <ul className="list-disc list-inside">
          {/* <li>
            <strong>B.Tech in Computer Science</strong> - XYZ University (2024)
          </li> */}
          {currentStudent.resume.education.map((element, index) => (
          
            
            <li key={index} >
            <strong>{element.degree} in {element.major}</strong> - {element.institution} ({element.year})
          </li>
          
        ))}
       
        </ul>
      </section>

      
      

      {/* <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          Responsibilities 
        </h2>
        <ul className="list-disc list-inside">
        {currentStudent.resume.responsibilities.map((element, index) => (
          <p key={index} className="text-gray-800">
            
            <li>{element}</li>
          </p>
        ))}
        </ul>
      </section> */}

  

      <section className="mb-6 f-full ">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside flex flex-wrap gap-2">
        {currentStudent.resume.skills.map((element, index) => (
          <p key={index} className="text-gray-800 bg-gray-200 rounded p-2 m-1">
            {element.skill}
          </p>
        ))}
        </ul>

      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
          Responsibilities  
        </h2>
        <ul className="list-disc list-inside">
        {currentStudent.resume.responsibilities.map((element, index) => (
          <p key={index} className="text-gray-800">
            
            {element.responsibility}
          </p>
        ))}
        </ul>
      </section>
    </div>
    </div>
  )
}
