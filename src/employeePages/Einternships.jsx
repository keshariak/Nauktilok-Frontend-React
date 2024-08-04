import React, { useEffect, useState } from 'react'
import { useInternship } from '../contexts/internshipContext'
import { useEmployee } from '../contexts/employeeContexts'
import { Link } from 'react-router-dom'


const Einternships = () => {

  const [allInternship, setallInternship] = useInternship()
  const {employee} = useEmployee()

  const [filteredInternships, setFilteredInternships] = useState([]); // Store filtered InternshipssetFilteredInternships
    useEffect(() => {
        // filteredInternships based on the condition
        const FilteredInternshipsByEmployee = () => {
          const filtered = allInternship.filter((internship) => internship.employee === employee._id);
          setFilteredInternships(filtered);
        };   
       FilteredInternshipsByEmployee();
      }, [allInternship, employee]); 
    console.log("setFilteredInternships",setFilteredInternships)


  return (
    
    <div>
    <div id="top" className='w-full h-[10vh] '>
        <div className='w-full h-full flex items-center justify-center'>
        <button className='p-2 rounded bg-blue-300 hover:bg-blue-500 transition-all' >
                <Link to={"/create/internship"}>+ Create New internship</Link>
              </button>
              </div>
        <div className='w-full h-1/2'>

      

        </div>
    </div>

    <div  className='pt-4'>
  
    {filteredInternships.length > 0 ? (
          <>
            <div
              id="JobCard"
              className="w-[95%] h-9 flex mx-auto text-slate-500 font-bold"
            >
              <div className="div w-[10%] h-full flex items-center pl-4">
                ID
              </div>
              <div className="div w-[30%] h-full flex items-center pl-4">
                Job Title
              </div>
              <div className="div w-[15%] h-full flex items-center pl-4">
                Job Type
              </div>
              <div className="div w-[15%] h-full flex items-center pl-4">
                Applications
              </div>
              <div className="div w-[15%] h-full flex items-center pl-4">
                Openings
              </div>
              <div className="div w-[10%] h-full flex items-center pl-4"></div>
            </div>
            {filteredInternships.map((elem, index) => (
              <div
                key={elem.id} // Ensure each element has a unique key
                id="JobCard"
                className="bg-white rounded-xl w-[95%] mb-3 h-14 flex mx-auto hover:scale-[1.01] transform transition duration-300 ease-in-out"
              >
                <div className="div w-[10%] h-full flex items-center pl-4">
                  #{index + 1}
                </div>
                <div className="div w-[30%] h-full font-semibold flex items-center pl-4">
                  {elem.profile}
                </div>
                <div className="div w-[15%] h-full flex items-center pl-4">
                  {elem.internshiptype}
                </div>
                <div className="div w-[15%] h-full flex items-center pl-4">
                  {elem.students.length}
                </div>
                <div className="div w-[15%] h-full flex items-center pl-4">
                  {elem.openings}
                </div>
                <div className="div w-[10%] h-full flex items-center pl-4">
                  delete
                </div>
              </div>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-700 py-4 text-2xl font-bold">
            There are no internships available.
          </p>
        )}


      
    </div>
</div>
  )
}

export default Einternships