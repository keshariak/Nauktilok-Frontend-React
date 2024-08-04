import React, { useState } from 'react';
import axios from 'axios';
import axios_instance from '../utils/axios';


export const CreateInternship = () => {
  // Define state for each form field
  const [formData, setFormData] = useState({
    profile: '',
    skill: '',
    internshiptype: 'In office', // Default value
    openings: '',
    from: '',
    to: '',
    duration: '',
    responsibility: '',
    stipendStatus: 'Fixed', // Default value
    stipendAmount: '',
    perks: '',
    assessment: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent negative stipend amount
    if (name === 'stipendAmount' && value < 0) {
      return; // Do nothing if the stipend amount is negative
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate stipend amount
      if (formData.stipendAmount < 0) {
        alert('Stipend amount cannot be negative!');
        return;
      }

      // Send a POST request to your server endpoint
      const response = await axios_instance.post('employee/internship/create', formData);

      console.log('Internship Created:', response.data);
      alert('Internship created successfully!');

      // Reset form after successful submission
      setFormData({
        profile: '',
        skill: '',
        internshiptype: 'In office',
        openings: '',
        from: '',
        to: '',
        duration: '',
        responsibility: '',
        stipendStatus: 'Fixed',
        stipendAmount: '',
        perks: '',
        assessment: '',
      });


      window.location.href= "/employee/home"
    } catch (error) {
      console.error('There was an error creating the internship!', error);
      alert('Failed to create the internship. Please try again.');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Create an Internship</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Profile</label>
            <input
              type="text"
              name="profile"
              value={formData.profile}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Internship profile"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Skill</label>
            <input
              type="text"
              name="skill"
              value={formData.skill}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Required skill"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Internship Type</label>
            <select
              name="internshiptype"
              value={formData.internshiptype}
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
              onChange={handleChange}
              min="1"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Number of openings"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">From</label>
            <input
              type="date"
              name="from"
              value={formData.from}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">To</label>
            <input
              type="date"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Duration of the internship"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Responsibility</label>
          <textarea
            name="responsibility"
            value={formData.responsibility}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Internship responsibilities"
            rows="4"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Stipend Status</label>
            <select
              name="stipendStatus"
              value={formData.stipendStatus}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Fixed">Fixed</option>
              <option value="Negotiable">Negotiable</option>
              <option value="Performance Based">Performance Based</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
          {formData.stipendStatus !== 'Unpaid' && (
            <div>
              <label className="block mb-2 text-gray-700 font-medium">Stipend Amount</label>
              <input
                type="number"
                name="stipendAmount"
                value={formData.stipendAmount}
                onChange={handleChange}
                min="0"
                required={formData.stipendStatus !== 'Unpaid'}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Stipend amount"
              />
            </div>
          )}
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Perks</label>
          <textarea
            name="perks"
            value={formData.perks}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Internship perks"
            rows="3"
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-700 font-medium">Assessment</label>
          <textarea
            name="assessment"
            value={formData.assessment}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Assessment criteria"
            rows="3"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Create Internship
        </button>
      </form>
    </div>
  );
};


