import { createContext, useContext, useEffect, useState } from "react";
import axios_instance from "../utils/axios";

export const jobContext = createContext(null);

const JobContextsProvider = (props) => {
    const [job, setjob] = useState([]);
    const getjob= async ()=>{
       
       const response= await axios_instance.post("/user/student/job/read")
    //    console.log( "Job data fetched!!!!")
        setjob(response.data.jobs);
    }
    useEffect(()=>{
        getjob()

    },[])



    return (
        <jobContext.Provider value={[job, setjob]}>
            {props.children}
        </jobContext.Provider>
    );
};
const useJob = () => {
  const context = useContext(jobContext);
  if (!context) {
    throw new Error("usejob must be used within a JobContextsProvider");
  }
  return context;
};

export default JobContextsProvider;
export{useJob}
