import {createBrowserRouter} from 'react-router'
import App from './App'
import Login from './Components/Login'
import Layout from './Components/Layout'

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
                        element:<></>
                    },
                    {
                        path: '/student-info',
                        element:<></>
                    },
                    {
                        path: '/classes',
                        element: <></>
                    },
                    {
                        path: '/finances',
                        element: <></>
                    }
                ]
            }
        ]
    }
])