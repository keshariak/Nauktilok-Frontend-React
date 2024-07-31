import { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [student, setStudent] = useState(null); // Start as null to represent unauthenticated
  const [loading, setLoading] = useState(true);

  const getCurrentStudent = async () => {
    try {
      const response = await axios_instance.post("/user/student");
      setStudent(response.data.student);
    } catch (error) {
      console.error('Error fetching student data:', error);
      setStudent(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Retrieve token from local storage and include in request
    const token = localStorage.getItem('token');
    if (token) {
      axios_instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getCurrentStudent();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ student, setStudent, loading }}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserProvider;
export { useUser };
