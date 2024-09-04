import React from 'react'
import { Enavbar } from '../EmplyeeComponents/Enavbar'

export const EcontactusPage = () => {
  return (
    <div>
        <Enavbar></Enavbar>
        <div className="min-h-screen bg-stone-200">
    
     

      <main className="container mx-auto p-8  md:w-1/2 w-full">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or want to provide feedback, feel free to reach out to us.
        </p>

        <div className=" p-6 rounded shadow-md">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium  text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-100 focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-100 focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" id="subject" name="subject" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-100 focus:ring-blue-500 focus:border-blue-500" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none bg-gray-100 focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>

            <div>
              <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </main>

      
    </div>
    </div>
  )
}
