import { useState } from 'react'

import { redirect, Route, Routes,Navigate } from "react-router-dom";
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { Register } from './pages/Register';
import { InternshipPage } from './pages/InternshipPage';
import ProtectedRoute from './Components/ProtectedRoute';



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className=''>
    <Routes>
     
      <Route path="/auth/login" element={<LoginPage></LoginPage>}/>
      <Route path="/" element={<Navigate to="/auth/login" />} />
      {/* <Route path="/home" element={<HomePage></HomePage>}/>  */}
      <Route path="/home" element={<ProtectedRoute element={HomePage} />} />
      <Route path="/student/internship/:id" element={<ProtectedRoute element={InternshipPage} />}/> 


      <Route path="/auth/register" element={<Register></Register>}/>

    </Routes>
  
   
  
    </div>
  )
}

export default App
