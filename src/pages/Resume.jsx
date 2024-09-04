import React, { useState } from 'react';
import { useUser } from '../contexts/userContexts';
import { Navbar } from '../Components/Navbar';
// import axios from '';
import axios_instance from '../utils/axios'; 

export const Resume = () => {
  const { student } = useUser();
  const currentStudent = student;
  const resume = student.resume;

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [formData, setFormData] = useState({});

  const handleOpenPopup = (section) => {
    setActiveSection(section);
    setFormData({});
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSaveData = async (newData) => {
    console.log(newData)
    let endpoint;
    let postData = newData;

    switch (activeSection) {
        case 'education':
            endpoint = '/resume/add-edu';
            break;
        // Add other cases for different sections
        case 'skills':
            endpoint = '/resume/add-skill';
            break;  
        case 'responsibility':
            endpoint = '/resume/add-responsibility';
            break;
        // Add other cases for different sections
        default:
            console.error('Unknown section');
            return;
    }

    try {
      const response = await axios_instance.post(endpoint, postData, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
      });
      console.log('Resume updated:', response.data);
      alert('Resume updated successfully!');
      setIsPopupOpen(false);
  } catch (error) {
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Error Response Data:', error.response.data);
          console.error('Error Response Status:', error.response.status);
          console.error('Error Response Headers:', error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          console.error('Error Request:', error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error Message:', error.message);
      }
      alert('Failed to update resume');
  }
  
};


  const handleSubmit = (e) => {
    e.preventDefault();
    handleSaveData(formData);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 pt-0 mt-0">
        <div className="flex justify-center">
          <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2">
                {currentStudent.firstname} {currentStudent.lastname}
              </h1>
              <p className="text-gray-600">{currentStudent.email}</p>
              <p className="text-gray-600">{currentStudent.contact}</p>
              <p className="text-gray-600">{currentStudent.city}</p>
              <p className="text-gray-600">{currentStudent.gender}</p>
            </div>

            {/* Education Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                Education
                <button onClick={() => handleOpenPopup('education')} className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                  +
                </button>
              </h2>
              <ul className="list-disc list-inside">
                {resume.education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.degree}</strong> from {edu.institution} , {edu.year}
                  </li>
                ))}
              </ul>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
                Skills
                <button onClick={() => handleOpenPopup('skills')} className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                  +
                </button>
              </h2>
              <ul className="list-disc list-inside flex flex-wrap gap-2">
                {resume.skills.map((skill, index) => (
                  <li key={index} className="bg-gray-200 rounded p-2 m-1">
                    {skill.skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Jobs Section */}
            {/* <section className="mb-6">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
              Jobs
                <button onClick={() => handleOpenPopup('job')} className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                  +
                </button>
              </h2>
              <ul className="list-disc list-inside">
                {resume.jobs.map((job, index) => (
                  <li key={index}>
                    <strong>{job.title}</strong> at {job.company} ({job.startDate} - {job.endDate})
                  </li>
                ))}
              </ul>
            </section> */}
             {/* responsibility Section */}
             <section className="mb-6">
              <h2 className="text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">
              Responsibilities
                <button onClick={() => handleOpenPopup('responsibility')} className="ml-4 bg-green-500 text-white px-2 py-1 rounded">
                  +
                </button>
              </h2>
              <ul className="list-disc list-inside">
                {resume.responsibilities.map((res, index) => (
                  <li key={index}>
                    {res.responsibility}
                  </li>
                ))}
              </ul>
            </section>





            {/* Repeat similar structure for Internships, Responsibilities, Courses, Accomplishments */}
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">Add {activeSection}</h2>
            <form onSubmit={handleSubmit}>
              {activeSection === 'education' && (
                <>
                  <div className="mb-2">
                    <label>Degree</label>
                    <input type="text" name="degree" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Degree" required />
                  </div>
                  <div className="mb-2">
                    <label>Institution</label>
                    <input type="text" name="institution" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Institution" required />
                  </div>
                  <div className="mb-2">
                    <label>Year</label>
                    <input type="text" name="year" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Year" required />
                  </div>
                </>
              )}
              {activeSection === 'skills' && (
                <div className="mb-2">
                  <label>Skill</label>
                  <input type="text" name="skill" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Skill" required />
                </div>
              )}
              {activeSection === 'responsibility' && (
                <div className="mb-2">
                  <label>responsibility</label>
                  <input type="text" name="responsibility" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="responsibility" required />
                </div>
              )}
              {activeSection === 'jobs' && (
                <>
                  <div className="mb-2">
                    <label>Job Title</label>
                    <input type="text" name="title" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Job Title" required />
                  </div>
                  <div className="mb-2">
                    <label>Company</label>
                    <input type="text" name="company" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" placeholder="Company" required />
                  </div>
                  <div className="mb-2">
                    <label>Start Date</label>
                    <input type="date" name="startDate" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" required />
                  </div>
                  <div className="mb-2">
                    <label>End Date</label>
                    <input type="date" name="endDate" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded mb-2" required />
                  </div>
                </>
              )}
              {/* Add other sections like internships, responsibilities, courses, accomplishments */}
              <div className="flex justify-end">
                <button type="button" className="mr-2 p-2 bg-red-500 text-white rounded" onClick={handleClosePopup}>
                  Cancel
                </button>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
