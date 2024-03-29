import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './Context/ContextProvider'
// import App from './App'
import './index.css'
import router from './path'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
     <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)
