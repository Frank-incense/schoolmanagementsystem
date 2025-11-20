import { useState } from "react"
import Sidebar from "./SideBar"
import { Outlet } from "react-router"

function Layout(){
    const [isOpen, setOpen] = useState(false)
    const [choices, isSelected] = useState([
        {
            value: 'Dashboard',
            selected: false
        },
        {
            value: 'Student Information',
            selected: false
        },
        {
            value: 'Classes',
            selected: false
        },
        {
            value: 'Finances',
            selected: false
        },
    ])
    return(
        <main className="grid lg:grid-cols-5 grid-cols-1 relative bg-[#FFFFA3]">
            <div className="bg-white">
                <Sidebar choice={choices} isSelected={isSelected} isOpen={isOpen} setOpen={setOpen}/>
            </div>
            <div 
            className="col-span-4 bg-[#FFFFA3] w-full transition-all duration-500 ease-in-out"
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