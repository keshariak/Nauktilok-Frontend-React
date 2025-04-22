import axios from "axios"; 

const axios_instance = axios.create({
  baseURL : 'https://naukarilok-api.onrender.com/',
  withCredentials:true,
 
  // .. other options
});

export default axios_instance;