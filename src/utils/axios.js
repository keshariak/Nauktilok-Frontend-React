import axios from "axios"; 

const axios_instance = axios.create({
  baseURL : import.meta.env.BACKEND_URL,
  withCredentials:true,
 
  // .. other options
});

export default axios_instance;