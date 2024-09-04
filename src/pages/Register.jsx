import React, { useState } from 'react';
import axios_instance from '../utils/axios';
import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin
import {jwtDecode} from "jwt-decode"; // Import jwtDecode
import { Link } from 'react-router-dom';
import logo from "../assets/image.png";

export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [showPasswordSetup, setShowPasswordSetup] = useState(false); // New state for password setup
  const [newPassword, setNewPassword] = useState(''); // New password state
  const [confirmPassword, setConfirmPassword] = useState(''); // Confirm password state

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !firstname || !lastname || !city || !contact) {
      setError('Please fill out all fields.');
      return;
    }

    // Implement registration logic here
    console.log('Registering with:', email, password, firstname, lastname);

    try {
      const response = await axios_instance.post("user/student/signup", {
        email,
        password,
        firstname,
        lastname,
        city,
        contact
      });

      // Redirect to the home page after successful registration
      window.location.href = "/home";

      console.log(response);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.log(error);
    }

    // Reset error state
    setError('');
  };

  const handleGoogleSignUp = async (userData) => {
    setEmail(userData.email)
    console.log(email)
    try {
      // Send the user data to the backend for registration
      const response = await axios_instance.post("user/student/google/signup", userData);

      console.log('Google Sign-Up Response:', response);

      // Check if registration was successful and redirect to set password page if needed
      if (response.data) {
        // Prompt the user to set a password
        setShowPasswordSetup(true);

        // Optionally, store user ID or token if needed for setting password
        // localStorage.setItem("userId", response.data.userId);
      }
    } catch (error) {
      console.error('Error signing up with Google:', error);
      setError('Google sign-up failed. Please try again.');
    }
  };

  const handleSetPassword = async () => {
    // Basic validation for password setup
    console.log(newPassword, setConfirmPassword)
    console.log("emailidididi" ,email, newPassword)
    
    if (!newPassword || !confirmPassword) {
      setError('Please enter and confirm your password.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match. Please try again.');
      return;
    }

    try {
      // Assuming you have an endpoint to set/update password for the user
      const response = await axios_instance.post("user/student/set-password", {
      email: email, // Use email to identify the user
        password: newPassword
      });

      // Redirect to the home page after setting the password
      window.location.to = "/home";

      console.log('Password Set Response:', response);
    } catch (error) {
      console.error('Error setting password:', error);
      setError('Failed to set password. Please try again.');
    }
  };

  return (
    <>
      <div className='w-full h-[10vh] flex items-center bg-gray-100 border-b-2 justify-start'>
        <div id="left" className='flex items-center font-bold pl-9'>
        <div className='bg-slate-200 md:w-[7.4rem] md:h-10 w-[6rem] h-8 '> 
      <img className='w-full h-full object-cover' src={logo} alt="NAUKRILOK" />

      </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-100">
        <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
          <div className="text-center mb-6">

          <h2 className="text-3xl font-bold pb-4">  Student / <Link to={"/employee/signup"} className='text-gray-300'>Employee</Link>   </h2>
          <div id="line" className='w-full h-[1px] bg-slate-400'></div>



            <h2 className="text-3xl font-bold pt-3">Sign-up and apply for free</h2>
            <p className="text-gray-500">1,50,000+ companies hiring on Internshala</p>
          </div>
          <div className="flex items-center justify-center w-full mb-4 text-white">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                try {
                  // Decode the JWT
                  const decoded = jwtDecode(credentialResponse?.credential);
                  console.log('Decoded JWT:', decoded);

                  // Extract user information from the decoded JWT
                  const userData = {
                    email: decoded.email,
                    firstname: decoded.given_name,
                    lastname: decoded.family_name,
                    // You may include other fields like city and contact if available in the decoded JWT
                  };

                  // Handle user sign-up
                  handleGoogleSignUp(userData);
                } catch (error) {
                  console.error('Failed to decode JWT:', error);
                  setError('Google sign-up failed. Please try again.');
                }
              }}
              onError={() => {
                console.log('Login Failed');
                setError('Google sign-up failed. Please try again.');
              }}
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-3 text-gray-500">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          {!showPasswordSetup ? (
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
                  placeholder="Must be at least 6 characters"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className='flex space-x-4'>
                <div className="w-1/2">
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
                  <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="New York"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact:</label>
                  <input
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="1234567890"
                    required
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500">
                By signing up, you agree to our <Link to="#" className="text-blue-600 hover:underline">Terms and Conditions</Link>.
              </p>
              <button
                type="submit"
                className="w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign up
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password:</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <button
                type="button"
                onClick={handleSetPassword}
                className="w-full py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Set Password
              </button>
            </div>
          )}

          <p className="mt-6 text-sm text-center text-gray-500">
            Already registered? 
            {/* <Link to="/auth/login" className="text-blue-600 hover:underline">Login</Link> */}
            <Link  className="text-blue-600 hover:underline" to={"/auth/login"}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
