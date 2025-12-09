import {createBrowserRouter} from 'react-router'
import App from './App'
import Login from './Components/Login'
import Layout from './Components/Layout'
import Dashboard from './Components/Dashboard'
import Student from './Components/Student'
import Classes from './Components/Classes'
import Finance from './Components/Finances'
import Protected from './Components/Protected'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/',
                element:<Layout/>,
                children: [
                    {
                        path: '/dashboard',
                        element: <Dashboard/>
                    },
                    {
                        path: '/learner-info',
                        element:<Student/>
                    },
                    {
                        path: '/classes',
                        element: <Classes/>
                    },
                    {
                        path: '/finances',
                        element: <Finance/>
                    }
                ]
            }
        ]
    }
])