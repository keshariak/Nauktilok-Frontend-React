import axios from "axios"; 

const axios_instance = axios.create({
  baseURL : 'http://localhost:8080',
  withCredentials:true,
 
  // .. other options
});

export default axios_instance;