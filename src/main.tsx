import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App.tsx'

import './styles.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/skills',
    element: <App />,
  },
  {
    path: '/contact',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,



  
)
