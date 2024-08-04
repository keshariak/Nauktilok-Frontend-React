import React, { useState } from 'react';
import axios_instance from '../utils/axios';  
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { Link } from 'react-router-dom';


export const EloginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
  
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Perform login logic here
    console.log('Logging in with:', email, password);
    try {
      const response = await axios_instance.post("employee/signin", {
        email,password
      })
      console.log(response)

       if(response.data){
        
        window.location.href ="/employee/home"

       }
        
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setError(error.response.data.message);
        } else {
          setError('An unexpected error occurred. Please try again.');
        }
       
      console.log(error.response.data.message)
      setError(error.response.data.message);
    }

    // Reset error state
    
  };



  const handleGoogleLogin = async (email) => {
    try {
      const response = await axios_instance.post("user/student/google/signin", {
        email,  // Send the email to the backend
        // name,   // You can send other user info if needed
      });

      console.log('Google Login Response:', response);

      // Check if login was successful and redirect if needed
      if (response.data) {
        // Store authentication tokens if necessary
        // localStorage.setItem("token", response.data.token);

        // Redirect to the home page
        window.location.href = "/home";
      }
    } catch (error) {
      console.error('Error logging in with Google:', error);
      setError('Google login failed. Please try again.');
    }
  }

  return (
    <>

    
    <div className='w-full h-[10vh] flex items-center border-b-2 bg-gray-100 justify-start  '>
      <div id="left" className='  flex items-center  font-bold pl-9'>INTERNSHALA</div>
 </div>


 <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-100">
  <h1></h1>


      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
        <h2 className="text-3xl font-bold pb-4"> <Link to={"/auth/login"} className='text-gray-300'> Student / </Link>   Employee    </h2>
        <div id="line" className='w-full h-[1px] bg-slate-400'></div>
          <h2 className="text-2xl font-bold pt-3">Login to Your Account</h2>
         
          <p className="text-gray-500">Access your account to explore opportunities</p>
        </div>

        <button className="flex items-center justify-center w-full p-2 mb-4 text-white">
        <GoogleLogin 
  onSuccess={credentialResponse => {
   
    // console.log('Full Credential Response:', credentialResponse.credential);
    const decoded = jwtDecode(JSON.stringify(credentialResponse?.credential))

    const userEmail = decoded?.email

    handleGoogleLogin(userEmail)

    console.log(decoded)
    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
        </button>

        <div className="flex items-center justify-center mb-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-3 text-gray-500">OR</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your password"
              required
            />
          </div>

       
         
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-500">
          New to the site? <a href="/auth/register" className="text-blue-600 hover:underline">Register here</a>
        </p>
      </div>
    </div>
 </>
    
  );
};

export default EloginPage;
