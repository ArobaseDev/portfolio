import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home.tsx'

import Skills from './pages/Skill.tsx'
import Contact from './pages/Contacts.tsx'
import "animate.css"
import './styles.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/skills',
    element: <Skills />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,



  
)
