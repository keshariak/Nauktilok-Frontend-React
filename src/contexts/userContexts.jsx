import React, { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const UserContext = createContext(null);

const UserContextsProvider = ({ children }) => {
  const [student, setStudent] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(true);

  const getCurrentStudent = async () => {
    try {
      const response = await axios_instance.post("/user/student");
      setStudent(response.data.student);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setStudent(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    getCurrentStudent();
    // console.log("first")
  },[])
 

  useEffect(() => {
    // Retrieve token from local storage and include it in the request
    const token = localStorage.getItem("token");
    if (token) {
      axios_instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      getCurrentStudent();
    } else {
      setLoading(false); // No token means no authenticated student
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
    throw new Error("useUser must be used within a UserContextsProvider");
  }
  return context;
};

export default UserContextsProvider;
export { useUser };
