import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router"

function Protected(){
    const {isAuth,} = useContext(AuthContext)
    
    if (!isAuth) return <Navigate to={'/login'}/>
}

export default Protected