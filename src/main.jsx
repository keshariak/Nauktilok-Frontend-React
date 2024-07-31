import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContextsProvider from './contexts/userContexts.jsx'
import IntershipContextsProvider from './contexts/internshipContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <UserContextsProvider>
    <IntershipContextsProvider>
    <App/>

    </IntershipContextsProvider>
  
   </UserContextsProvider>
  </BrowserRouter>
 
)
