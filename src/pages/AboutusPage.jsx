import React from 'react'
import { Navbar } from '../Components/Navbar'

export const AboutusPage = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen bg-stone-100">
      <header className=" text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-stone-700">Welcome to NaukriLok</h1>
        </div>
      </header>

     

      <main className="container mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p className="mb-6">
          Welcome to Naukrilok, your one-stop platform for finding the perfect job or internship. We are dedicated to connecting job seekers and students with top companies looking for talent. Our mission is to streamline the job search process and provide valuable opportunities for growth and development.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-6">
          Our mission is to bridge the gap between job seekers and employers by providing a user-friendly platform where companies can post job and internship opportunities, and users can easily apply with their customized resumes.
        </p>
        
        <h3 className="text-xl font-semibold mb-2">Features of Our Website</h3>
        <ul className="list-disc list-inside mb-6">
          <li className="mb-2"><strong>Job Listings:</strong> Browse through a wide range of job listings from various industries and find the perfect match for your skills and interests.</li>
          <li className="mb-2"><strong>Internship Opportunities:</strong> Discover internships that offer valuable experience and learning opportunities for students and fresh graduates.</li>
          <li className="mb-2"><strong>Resume Builder:</strong> Create a professional resume using our built-in resume builder to increase your chances of getting hired.</li>
          <li className="mb-2"><strong>Easy Application Process:</strong> Apply for jobs and internships with just a few clicks, and your resume will automatically be sent to the employer.</li>
          <li className="mb-2"><strong>Company Profiles:</strong> Explore detailed profiles of companies to learn more about their culture, values, and job offerings.</li>
          <li><strong>Secure and Private:</strong> Your data is safe with us. We prioritize user privacy and ensure that your information is protected.</li>
        </ul>
        
        <h3 className="text-xl font-semibold mb-2">Join Us Today!</h3>
        <p>
          Whether you're a job seeker, student, or employer, Naukrilok is here to help you achieve your goals. Join our community today and start exploring exciting opportunities.
        </p>
      </main>
    </div>
    </div>
  )
}
