import { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const AllStudentsContexts = createContext(null);

const AllStudentsProvider = ({ children }) => {
  const [allStudents, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const getAllStudents = async () => {
      try {
        const response = await axios_instance.get("/employee/allstudents");
        
        if (response.data && Array.isArray(response.data.students)) {
          setAllStudents(response.data.students);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Failed to load student data.");
        }
      } catch (error) {
        console.error('Error fetching student data:', error);
        setError("Failed to load student data.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      getAllStudents();
    }, []);

//   useEffect(() => {
//     // Retrieve token from local storage and include in request
//     const token = localStorage.getItem('token');
//     if (token) {
//       axios_instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       getCurrentStudent();
//     } else {
//       setLoading(false);
//     }
//   }, []);

  return (
    <LinkllStudentsContexts.Provider value={{ allStudents, setAllStudents, loading }}>
      {children}
    </AllStudentsContexts.Provider>
  );
};

const useAllStudent = () => {
  const context = useContext(AllStudentsContexts);
  if (!context) {
    throw new Error('useUser must be used within a AllStudentsProvider');
  }
  return context;
};

export default AllStudentsProvider;
export { useAllStudent };
