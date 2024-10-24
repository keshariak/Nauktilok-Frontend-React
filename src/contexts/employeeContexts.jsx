import { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const EmployeeContext = createContext(null);

const EmployeeProvider = ({ children }) => {
  const [employee, setemployee] = useState(null); // Start as null to represent unauthenticated
  const [loading, setLoading] = useState(true);

  console.log("Employee in Context APi:::",employee)

  const getCurrentemployee = async () => {
    try {
      const response = await axios_instance.post("employee/employee-homepage");
      setemployee(response.data.employee);
    } catch (error) {
      console.error('Error fetching employee data:', error);
      setemployee(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Retrieve token from local storage and include in request
    const token = localStorage.getItem('token');
    console.log("Token in employee context :===>",token)
    console.log("Useffect Chal gaya in context api :::")
    if (token) {
      console.log("Token hai in context API::", token)
      axios_instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      console.log(token)
      getCurrentemployee();
    } else {
      console.log("Token nahi haii in context APi")
      setLoading(false);
    }
  }, []);

  return (
    <EmployeeContext.Provider value={{ employee, setemployee, loading }}>
      {children}
    </EmployeeContext.Provider>
  );
};

const useEmployee = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployee must be used within a UserProvider');
  }
  return context;
};

export default EmployeeProvider;
export { useEmployee };
