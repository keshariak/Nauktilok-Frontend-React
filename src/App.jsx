import { useState } from 'react'



import { redirect, Route, Routes,Navigate, Link } from "react-router-dom";
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';


import { Register } from './pages/Register';
import { InternshipPage } from './pages/InternshipPage';
import { JobPage } from './pages/JobPage';
import ProtectedRoute from './Components/ProtectedRoute';
import { AllJobs } from './pages/AllJobs';
import { AllInternships } from './pages/AllInternships';
import { Resume } from './pages/Resume';
import { EhomePage } from './employeePages/EhomePage';
import EloginPage from './employeePages/EloginPage';
import { Ehome } from './employeePages/Ehome';
import { Ejobs } from './employeePages/Ejobs';
import Einternships from './employeePages/Einternships';
import ProtectedRouteEmployee from './EmplyeeComponents/ProtectedRouteEmployee';
import { CreateJob } from './employeePages/CreateJob';
import { CreateInternship } from './employeePages/CreateInternship';
import { Responses } from './employeePages/Responses';
import { ResponsedStudentDetail } from './employeePages/ResponsedStudentDetail';
import { EregisterPage } from './employeePages/EregisterPage';
import { AboutusPage } from './pages/AboutusPage';
import { ContactusPage } from './pages/ContactusPage';
import { ApplicationPage } from './pages/ApplicationPage';
import { ResponsesInternship } from './employeePages/ResponseInternship';
import { EaboutusPage } from './employeePages/EaboutusPage';
import { EcontactusPage } from './employeePages/EcontactusPage';






function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className=''>
    <Routes>
     
      <Route path="/auth/login" element={<LoginPage></LoginPage>}/>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      {/* <Route path="/home" element={<HomePage></HomePage>}/>  */}
      <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
      <Route path="/student/applications" element={<ProtectedRoute element={ApplicationPage} />} />
      <Route path="/aboutus" element={<ProtectedRoute element={AboutusPage} />} />
      <Route path="/contactus" element={<ProtectedRoute element={ContactusPage} />} />
      
      <Route path="/student/internship/:id" element={<ProtectedRoute element={InternshipPage} />}/>
      <Route path="/student/job/:id" element={<ProtectedRoute element={JobPage} />}/> 
      <Route path="/student/alljobs" element={<ProtectedRoute element={AllJobs} />} />
      <Route path="/student/allinternships" element={<ProtectedRoute element={AllInternships} />} />
      <Route path="/student/resume" element={<ProtectedRoute element={Resume} />} />
      <Route path="/auth/register" element={<Register></Register>}/>
      {/* employee Routes */}
  
      <Route  />

      <Route path="/employee/home" element={<ProtectedRouteEmployee element={<EhomePage></EhomePage>} />} >
         <Route path="employee/base" element={<Ehome></Ehome>}/>
         <Route path="employee/jobs" element={<Ejobs></Ejobs>}/>
         <Route path="employee/internships" element={<Einternships></Einternships>}/>
      </Route>

      <Route path="/employee/login" element={<EloginPage></EloginPage>}/>
      <Route path="/employee/signup" element={<EregisterPage></EregisterPage>}/>
      
      <Route path="/create/job" element={<ProtectedRouteEmployee element={<CreateJob></CreateJob>} />}/>
      <Route path="/create/internship" element={<ProtectedRouteEmployee element={<CreateInternship></CreateInternship>} />}/>
      <Route path="/job/response/:id" element={<ProtectedRouteEmployee element={<Responses></Responses>} />}/>
      <Route path="/internship/response/:id" element={<ProtectedRouteEmployee element={<ResponsesInternship></ResponsesInternship>} />}/>
      <Route path="/response/studentdetails/:id" element={<ProtectedRouteEmployee element={<ResponsedStudentDetail></ResponsedStudentDetail>} />}/>
      <Route path="/employee/aboutus" element={<EaboutusPage></EaboutusPage>}/>
      <Route path="/employee/contactus" element={<EcontactusPage></EcontactusPage>}/>
 

    </Routes>

    <footer className="bg-gray-800 text-gray-300 py-10 m-0  ">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* Logo and About Section */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h2 className="text-xl font-bold text-white mb-3">NaukriLok</h2>
            <p className="text-sm">
            Naukrilok connects students with top internships to gain valuable real-world experience and career growth.
            </p>
          </div>

          {/* Quick Links Section
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <Link to="#home" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#internships" className="hover:text-white transition">
                  Internships
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#jobs" className="hover:text-white transition">
                  Jobs
                </Link>
              </li>
              <li className="mb-2">
                <Link to="#contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Information Section */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2">
                <span className="block">Email: </span>
                <Link to="mailto:info@internshala.com" className="hover:text-white transition">
                naukrilok@gmail.com
                </Link>
                
              </li>
              <li className="mb-2">
                <span className="block">Phone: </span>
                <Link to="tel:+123456789" className="hover:text-white transition">
                  
                  Baat krke kya krega?
                </Link>
              </li>
              <li>
                <span className="block">Address: </span>
                Funding dega kya?
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt="Facebook"
              className="hover:opacity-75 transition"
            />
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              alt="Twitter"
              className="hover:opacity-75 transition"
            />
          </Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/30/000000/linkedin.png"
              alt="LinkedIn"
              className="hover:opacity-75 transition"
            />
          </Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt="Instagram"
              className="hover:opacity-75 transition"
            />
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Naukrilok. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
    </div>
  )
}

export default App
