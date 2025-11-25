import { useState } from "react"
import Sidebar from "./SideBar"
import { Outlet } from "react-router"

function Layout(){
    const [isOpen, setOpen] = useState(false)
    const [choices, isSelected] = useState([
        {
            value: 'Dashboard',
            selected: false,
            route: 'dashboard'
        },
        {
            value: 'Student Information',
            selected: false,
            route: 'student-info'
        },
        {
            value: 'Classes',
            selected: false,
            route: 'classes'
        },
        {
            value: 'Finances',
            selected: false,
            route: 'finances'
        },
    ])
    return(
        <main className="grid grid-cols-1  lg:grid-cols-4 relative bg-[#FFFFA3]">
            <div className="bg-white">
                <Sidebar choice={choices} isSelected={isSelected} isOpen={isOpen} setOpen={setOpen}/>
            </div>
            <div 
            className=" lg:col-span-3 bg-[#FFFFA3] w-full transition-all duration-500 ease-in-out"
            >
                <div className="p-5 shadow-md bg-white">
                    <h3 className="text-2xl pl-15 outfit" style={{'--fw':'600'}}>
                        Welcome Teacher Nancy
                    </h3>
                </div>
                <div className="">
                    <Outlet/>
                </div>
            </div>
        </main>
    )
}
export default Layout