import React from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { useUser } from '../contexts/userContexts'
import { useInternship } from '../contexts/internshipContext'
import { Navbar } from '../Components/Navbar'
import axios_instance from '../utils/axios'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const InternshipPage = (props) => {
  const navigate=useNavigate()

  const {id} =useParams()

  const {user} = useUser()
  const [internship] = useInternship()

  // Find the internship with the matching ID
  const internshipDetail = internship.find((data)=> data._id === id);
  // console.log(internshipDetail)

  if (!internshipDetail) {
    return <div>Loading...</div>; 
  }
  const skillArray = internshipDetail.skill.split(", ");
  // console.log(skillArray)

  //apply internship 


  const applyHandler=async (e)=>{
    e.preventDefault()
    // console.log(e)
    try {
      const response = await axios_instance.post(
        `user/student/apply/internship/${internshipDetail._id}`,
        {
          user,
        }
      );
      console.log(response);
  
      if (response.data) {
        // Show success toast
        toast.success("Successfully applied for the internship!");
  
        // Redirect to the home page after a short delay
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      }
    } catch (error) {
      // Show error toast
      toast.error("You are already applied in this internship.");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <>
    <Navbar></Navbar>

<div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      {/* Header Section */}
     

      {/* Main Internship Card */}
      <div className="border border-gray-200 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            Actively hiring
          </span>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {internshipDetail.profile}
        </h2>
        <p className="text-lg text-gray-700 mb-2">organizationname 
          {/* <span className="text-green-600 text-xs font-semibold">NGO</span> */}
          </p>
        <p className="text-gray-600 mb-4">Deatils</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">🏠</span>
            <p className="text-gray-700">{internshipDetail.internshiptype}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">📅</span>
            <p className="text-gray-700">Start Date: {internshipDetail.from}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">🕒</span>
            <p className="text-gray-700">Duration: {internshipDetail.duration}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">💰</span>
            <p className="text-gray-700">Stipend: ₹{internshipDetail.stipend.amount}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">📆</span>
            <p className="text-gray-700">Apply By: {internshipDetail.to}</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">👥</span>
            <p className="text-gray-700">{internshipDetail.students.length} applicants</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          About the job/internship
        </h3>
        <p className="text-gray-700 mb-4">
          Are you passionate about mental health and helping others in need? Join our team at Vandrevala Foundation as a 'Mental Health Helpline Counselors Intern'! As a counselor intern, you will have the opportunity to make a real difference in the lives of those struggling with mental health issues.
        </p>

        <hr className="my-4" />

        {/* Skills Required */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Skill(s) required</h3>
        <div className="flex flex-wrap gap-2 mb-6">

          {
            skillArray.map((skill,index)=>(
              <span key={index } className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
              {skill}
              </span>
    

            ))
          }
         



          {/* <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            English Proficiency (Written)
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            Psychology
          </span> */}
        </div>

        {/* Who Can Apply */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Who can apply</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>are available for the work from home job/internship</li>
          <li>can start the work from home job/internship between 17th Jul'24 and 21st Aug'24</li>
          <li>are available for duration of 2 months</li>
          <li>have relevant skills and interests</li>
          <li>* Women wanting to start/restart their career can also apply.</li>
        </ul>

        {/* Other Requirements */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Other requirements</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Have a computer and are tech-savvy.</li>
          <li>Know a regional language.</li>
          <li>Ready to learn newer techniques.</li>
          <li>Interest in group therapy.</li>
          <li>Willing to put in a minimum of 1-2 hours a day.</li>
        </ul>

        {/* Perks */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Perks</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            Certificate
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            Letter of recommendation
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            Flexible work hours
          </span>
          <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2.5 py-0.5 rounded">
            5 days a week
          </span>
        </div>

        {/* Number of Openings */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Number of openings</h3>
        <p className="text-gray-700 mb-6">{internshipDetail.openings}</p>

        {/* About Company */}
        {/* <h3 className="text-xl font-semibold text-gray-800 mb-2">About Vandrevala Foundation</h3>
        <p className="text-blue-600 underline mb-2">LinkedIn page</p>
        <p className="text-gray-700 mb-6">
          Vandrevala Foundation has been working in the field of mental health in India since 2009, having established the first 24×7 crisis intervention counseling mental health helpline that was manned by psychologists and had a data capture and retrieval system. We now help people through calls, chats, Whatsapp chats, and email - soon through video counseling. Answering more than 20 thousand communications per month - we have huge clinical data, archived data, and a knowledge base on the futuristic platform for interns and freshers to learn and practice hands-on. All this is free of any obvious or hidden costs, with a full training program, and guidance into different aspects of counseling. The certificate has a performance indices page as required by foreign universities.
        </p> */}

        {/* Activity on Internshala */}
        <div className="flex items-center justify-between border-t pt-4 mt-4">
          <p className="text-gray-500">Activity on Internshala</p>
          <div className="flex space-x-4">
           
            <p className="text-gray-500">{internshipDetail.students.length}  candidates applied</p>
          </div>
        </div>
      </div>

      {/* Apply Now Button */}
      <button onClick={applyHandler} className="bg-blue-600 text-white py-2 px-4 pl-auto pr-auto rounded-lg shadow hover:bg-blue-700 transition duration-300">
        Apply now
      </button>
       {/* ToastContainer to display toasts */}
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
    </>
   
  )
}
