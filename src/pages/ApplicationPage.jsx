import React from 'react'
import { Navbar } from '../Components/Navbar'
import { useUser } from '../contexts/userContexts'
import { useInternship } from '../contexts/internshipContext'
import { useJob } from '../contexts/jobContext'



export const ApplicationPage = () => {


    const {student}= useUser()
    const [internship, setinternship] = useInternship()
    const [job, setjob] = useJob()

    const appliedJobs = job.filter((job) => {
        return student.jobs.includes(job._id);
    });
    console.log(appliedJobs)
    const appliedInternships = internship.filter((internship) => {
        return student.internships.includes(internship._id);
    });
    console.log(appliedInternships)
  return (
    <div>
        <Navbar></Navbar>
        <main className=' h-fit mx-auto '>
        <div className="md:w-[80%] w-full mx-auto mt-8 mb-10">
      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">My applications</h2>
      {
            appliedInternships.length>0 && appliedJobs.length>0 ?
        (
            <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left font-medium text-gray-600">COMPANY</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">PROFILE</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600"> WORK TYPE</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">NUMBER OF APPLICANTS</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">APPLICATION STATUS</th>
                  <th className="px-4 py-2 text-left font-medium text-gray-600">REVIEW APPLICATION</th>
                </tr>
              </thead>
              <tbody>
                {
                    appliedInternships.map((internship)=>(
                        <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-800">#{internship.stipend.status                        }</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold flex items-center">
                          {internship.profile}
                          <Link to={`/student/internship/${internship._id}`} className="ml-2 text-blue-600" aria-label="Open link">
                            <svg
                              className="w-5 h-5 transform rotate-45"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-gray-800">{internship.internshiptype}</td>
                        <td className="px-4 py-3 text-gray-800">{internship.students.length}</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-6 py-1 bg-green-100 text-green-600 rounded-full">Applied</span>
                        </td>
                        <td className="px-4 py-3 flex items-center text-blue-600">
                          Missing skill
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                    ))
                    
                }
                 {
                    appliedJobs.map((job)=>(
                        <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-3 text-gray-800">#{job.from}</td>
                        <td className="px-4 py-3 text-gray-800 font-semibold flex items-center">
                          {job.title}
                          <Link to={`/student/job/${job._id}`} className="ml-2 text-blue-600" aria-label="Open link">
                            <svg
                              className="w-5 h-5 transform rotate-45"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l5-5m0 0l5 5m-5-5v12" />
                            </svg>
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-gray-800">{job.jobtype}</td>
                        <td className="px-4 py-3 text-gray-800">{job.students.length}</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-6 py-1 bg-green-100 text-green-600 rounded-full">Applied</span>
                        </td>
                        <td className="px-4 py-3 flex items-center text-blue-600">
                          Missing skill
                          <svg
                            className="w-4 h-4 ml-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </td>
                      </tr>

                    ))
                    
                }
               













                {/* <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">Tech Corp</td>
                  <td className="px-4 py-3 text-gray-800 flex items-center">
                    Backend Developer
                    <Link to="#" className="ml-2 text-blue-600" aria-label="Open link">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-800">5 Aug' 24</td>
                  <td className="px-4 py-3 text-gray-800">5123</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full">In Progress</span>
                  </td>
                  <td className="px-4 py-3 flex items-center text-blue-600">
                    No issues
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">InnoTech</td>
                  <td className="px-4 py-3 text-gray-800 flex items-center">
                    Data Analyst
                    <Link to="#" className="ml-2 text-blue-600" aria-label="Open link">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-800">4 Aug' 24</td>
                  <td className="px-4 py-3 text-gray-800">2345</td>
                  <td className="px-4 py-3">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full">Rejected</span>
                  </td>
                  <td className="px-4 py-3 flex items-center text-blue-600">
                    Skills mismatch
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        ):(
            <div className='w-1/2  mt-10 mx-auto grid '>
            <h1 className='text-xl mx-auto font-semibold text-gray-800'>{student.firstname} , You don't have any applications yet.</h1>
            <p className='text-sm mx-auto text-gray-500'>Start applying to boost your career with top hiring companies on Naukrilok</p>
            <div className="flex justify-center space-x-4 mt-10 w-full">
            <Link to="/student/alljobs" className="bg-cyan-800 text-white  md:px-6 py-2 px-4 text-sm rounded-md hover:bg-cyan-700 transition duration-300 ease-in-out">Browse Jobs</Link>
            <Link to="/student/allinternships" className="bg-emerald-700 text-white text-sm  md:px-6 py-2 px-4 rounded-md hover:bg-emerald-600 transition duration-300 ease-in-out">Explore Internships</Link>
          </div>
            </div>
        )
    }
       



    
    </div>

        </main>
    </div>
  )
}
