import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextsProvider from './contexts/userContexts.jsx'
import IntershipContextsProvider from './contexts/internshipContext.jsx'

import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <UserContextsProvider>
    <IntershipContextsProvider>

    <GoogleOAuthProvider clientId="663387009997-tue25k56murs6624io9jc3d3oel0g9di.apps.googleusercontent.com">
    <App/>
      </GoogleOAuthProvider>;
    

    </IntershipContextsProvider>
  
   </UserContextsProvider>
  </BrowserRouter>
 
)
