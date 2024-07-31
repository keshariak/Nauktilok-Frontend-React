import { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const internshipContext = createContext(null);

const IntershipContextsProvider = (props) => {
    const [internship, setinternship] = useState([]);
    const getinternship= async ()=>{
       
       const response= await axios_instance.post("/user/student/internship/read")
    //    console.log( "Intership data fetched!!!!")
        setinternship(response.data.internships);
    }
    useEffect(()=>{
        getinternship()

    },[])



    return (
        <internshipContext.Provider value={[internship, setinternship]}>
            {props.children}
        </internshipContext.Provider>
    );
};
const useInternship = () => {
  const context = useContext(internshipContext);
  if (!context) {
    throw new Error("useInternship must be used within a IntershipContextsProvider");
  }
  return context;
};

export default IntershipContextsProvider;
export{useInternship}
