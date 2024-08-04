import React, { useState } from 'react';

export const Resume = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    address: '',
    summary: '',
    experiences: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddExperience = () => {
    // Add logic to handle adding experience
  };

  const handleAddEducation = () => {
    // Add logic to handle adding education
  };

  const handleAddSkill = () => {
    // Add logic to handle adding skill
  };

  const handleAddCertification = () => {
    // Add logic to handle adding certification
  };

  const handleAddProject = () => {
    // Add logic to handle adding project
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Resume Builder</h1>
      </header>

      <div className="flex">
        {/* Edit Section */}
        <div className="w-1/2 pr-4">
          <h2 className="text-xl font-semibold mb-4">Edit Resume</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your email address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">LinkedIn Profile:</label>
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your LinkedIn profile URL"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your address"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Professional Summary:</label>
            <textarea
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              placeholder="Enter your professional summary"
            ></textarea>
          </div>

          {/* Add sections for Experience, Education, Skills, Certifications, Projects */}
          {/* Implement similar logic to handle additions */}

          <div className="mb-4">
            <button
              onClick={handleAddExperience}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add Job Experience
            </button>
            <button
              onClick={handleAddEducation}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add Education
            </button>
            <button
              onClick={handleAddSkill}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add Skill
            </button>
            <button
              onClick={handleAddCertification}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Add Certification
            </button>
            <button
              onClick={handleAddProject}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Project
            </button>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="w-1/2 pl-4 border-l border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Resume Preview</h2>
          <div className="p-4 border border-gray-300 rounded">
            <h3 className="text-xl font-bold">{formData.name}</h3>
            <p>{formData.email}</p>
            <p>{formData.phone}</p>
            <p>{formData.linkedin}</p>
            <p>{formData.address}</p>
            <h4 className="font-semibold mt-4">Professional Summary</h4>
            <p>{formData.summary}</p>
            {/* Add other sections similarly */}
          </div>
        </div>
      </div>
    </div>
  );
};


