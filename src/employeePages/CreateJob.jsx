import React, { useState } from 'react';
import axios from 'axios';
import axios_instance from '../utils/axios';


export  const CreateJob = () => {
  // Define state for each form field
  const [formData, setFormData] = useState({
    title: '',
    skill: '',
    jobtype: 'In office', // Default value
    openings: '',
    description: '',
    from: '',
    preferences: '',
    salary: '',
    perks: '',
    assessments: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative salary
    if (name === 'salary' && value < 0) {
      return; // Do nothing if the salary is negative
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    
    try {
      // Validate salary
      if (formData.salary < 0) {
        alert('Salary cannot be negative!');
        return;
      }

      // Send a POST request to your server endpoint
      const response = await axios_instance.post('employee/job/create', formData);
      
      console.log('Job Created:', response.data);
      alert('Job created successfully!');
      
      // Reset form after successful submission
      setFormData({
        title: '',
        skill: '',
        jobtype: 'In office',
        openings: '',
        description: '',
        from: '',
        preferences: '',
        salary: '',
        perks: '',
        assessments: '',
      });
    } catch (error) {
      console.error('There was an error creating the job!', error);
      alert('Failed to create the job. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Create a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Title</label>
            <input
            
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Skills</label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Use , to seperate skill"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Job Type</label>
            <select
              name="jobtype"
              value={formData.jobtype}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="In office">In office</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Openings</label>
            <input
              type="number"
              name="openings"
              value={formData.openings}
              required
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of openings"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Job description"
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Company Name</label>
            <input
              type="text"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Company or person name"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Preferences</label>
            <input
              type="text"
              name="preferences"
              value={formData.preferences}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job preferences"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Salary</label>
            <input
              type="text"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              min="0"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Salary offered"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Perks</label>
            <input
              type="text"
              name="perks"
              value={formData.perks}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Job perks"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Assessments</label>
          <input
            type="text"
            name="assessments"
            value={formData.assessments}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Assessments required"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Create Job
        </button>
      </form>
    </div>
  );
};

