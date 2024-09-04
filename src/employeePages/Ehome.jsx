import React from 'react'

export const Ehome = () => {
  return (
    <>
       <div className="w-full h-full  flex flex-col overflow-auto">
      {/* Main Content */}
      <main className="flex-grow p-4">
        {/* Greeting Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 mb-4 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-2 text-blue-600">Good Morning, Employee!</h2>
          <p className="text-gray-700 text-center text-base max-w-md">Here's a quick overview of your recent activities and key metrics.</p>
        </section>

       

      </main>

    </div>
    </>
  
    
  )
}
