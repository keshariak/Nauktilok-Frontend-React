import React, { useState } from 'react';
import axios_instance from '../utils/axios';
// import { useNavigate } from 'react-router-dom';

export const Register = () => {
  // const navigate =useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [city, setcity] = useState('');
  const [contact, setcontact] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async(e) => {
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
        email,password, firstname, lastname,city,contact
      })
      
        window.location.href ="/home"

      console.log(response)
    } catch (error) {
      console.log(error)
      
    }

    // Reset error state
    setError('');
  };

  return (
    <>
    <div className='w-full h-[10vh] flex items-center bg-gray-100 border-b-2 justify-start  '>
      <div id="left" className='  flex items-center  font-bold pl-9'>INTERNSHALA</div>
 </div>
    <div className="flex flex-col justify-center items-center min-h-[90vh] bg-gray-100">
      <div className="max-w-lg w-full p-8 bg-white rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Sign-up and apply for free</h2>
          <p className="text-gray-500">1,50,000+ companies hiring on Internshala</p>
        </div>
        <button className="flex items-center justify-center w-full p-2 mb-4 text-white  bg-green-500 rounded hover:bg-green-600">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 48 48" fill="none">
            <path d="M23.99 12.01c3.36 0 6.37 1.38 8.55 3.63l6.33-6.33C34.31 5.14 29.45 3 23.99 3 14.3 3 6.31 8.98 3.68 17.44h7.76C13.27 12.68 18.18 9 23.99 9v3.01z" fill="#EA4335"/>
            <path d="M46.5 24.48c0-1.5-.13-2.96-.38-4.38H23.99v8.27h12.67c-.88 3.79-3.26 6.87-6.67 8.64v7.16h10.76c6.33-5.85 9.75-14.48 9.75-24.69z" fill="#4285F4"/>
            <path d="M4.56 14.79C3.73 17.07 3.27 19.51 3.27 22s.46 4.93 1.29 7.21l7.76-6.07C10.12 21.68 9.63 21 9.63 20h7.76v7.76c-2.47-3.07-6.06-5-10.02-5V14.79z" fill="#FBBC05"/>
            <path d="M23.99 44.73c5.46 0 10.26-1.79 13.69-4.86l-7.42-6.12c-1.71 1.15-3.85 1.83-6.27 1.83-4.67 0-8.62-3.11-10.04-7.37H3.68c2.62 8.46 10.61 14.44 20.31 14.44z" fill="#34A853"/>
          </svg>
          Sign up with Google
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
          {/* make by me */}
          <div className='flex space-x-4'>

          
          <div className="w-1/2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City:</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setcity(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Doe"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact:</label>
              <input
                type="text"
                id="contact"
                value={contact}
                onChange={(e) => setcontact(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Doe"
                required
              />
            </div>
            </div>





          <p className="text-xs text-gray-500">
            By signing up, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>.
          </p>
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </form>







        <p className="mt-6 text-sm text-center text-gray-500">
          Already registered? <a href="/auth/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
    </>
  );
};

export default Register;