import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { routes } from './routes.jsx'
import AuthContextProvider from './Components/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContextProvider>
          <RouterProvider router={routes}/>
      </AuthContextProvider>
      
  </StrictMode>,
)
