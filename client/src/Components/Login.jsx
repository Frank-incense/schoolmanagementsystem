import { useContext, useState } from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"
function Login(){
    const {isAuth, setAuth} = useContext(AuthContext)
    const [userDetails, setDetails] = useState({
        username: "",
        password: ""
    })

    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault()
        fetch('/api/login',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(userDetails)
            }
        )
        .then(r=>r.json())
        .then((data)=>{
            console.log(data)
            setDetails({
                username: "",
                password: ""
            })
            setAuth(!isAuth)
            navigate("/dashboard")
        })

    }

    function handleChange(e){
       console.log(e.target.name)
       setDetails({
        ...userDetails,
        [e.target.name]: e.target.value
       })
    }
    console.log(isAuth)
    if (isAuth){
        navigate("/dashboard")
    }

    return(
        <main>
            <div className="w-100 mx-auto relative top-50 rounded-xl pt-5 bg-[#FFFFA3] ">
                <div className="w-[90%] mx-auto">
                    <h2 className="text-3xl outfit" style={{'--fw':'600'}}>
                        School Management System
                    </h2>

                    <div className="h-1 rounded-2xl bg-[#00CF0E] my-2"></div>

                    <p className="montserrat leading-none mt-7 " style={{'--fw': '200'}}>Track and manage your learner fees and learner grades.</p>
                </div>

                <div className="w-[90%] mx-auto">
                    <h3 className="text-lg outfit mt-7" style={{'--fw': '600'}}>Login</h3>
                    <div className="w-full mt-3">
                        <form onSubmit={handleLogin} className="">
                            <div className="w-full">
                                <label htmlFor="email" className="text-sm montserrat" style={{'--fw':'500'}}>Username:</label>
                                <input 
                                type="text" 
                                name="username" 
                                id="email"
                                onChange={handleChange}
                                value={userDetails.username} 
                                className="w-full text-lg p-1 rounded-lg my-1 focus:outline-0 bg-white" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="password" className="text-sm montserrat" style={{'--fw':'500'}}>Password:</label>
                                <input 
                                type="password" 
                                name="password" 
                                id="password"
                                onChange={handleChange}
                                value={userDetails.password} 
                                className="w-full text-lg p-1 rounded-lg my-1 focus:outline-0 bg-white" />
                            </div>

                            <div className="w-full">
                                <button type="submit" className="w-full bg-[#00CF0E] p-1 my-2 mb-4 rounded-lg text-white font-bold text-lg">Login</button>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="w-[90%] mx-auto pb-5">
                    <p className="text-sm w-fit outfit hover:text-[#00CF0E]">Forgot password?</p>
                </div>
            </div>
        </main>
    )
}
export default Login