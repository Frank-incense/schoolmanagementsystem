import { Search } from "lucide-react"
import { useState } from "react"
import ReconcileModal from "./ReconsileModal"
import TermModal from "./TermModal"

function Finance(){
    const [reconcile ,setReconcile] = useState(false)
    const [term, setTerm] = useState(false)

    return(
        <div className="w-full p-10">
            <div className="">
                <h2 className="text-4xl montserrat" style={{'--fw':'600'}}>Finances</h2>
            </div>
            <div className="w-full mt-5 bg-white p-4 rounded-2xl shadow-sm">
                <form className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 items-center">

                    <div className="border-2 rounded-full p-1 border-[#00CF0E] flex flex-row items-center overflow-hidden
">
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="focus:outline-0 text-lg p-2 flex-1 flex-grow min-w-0"
                            placeholder="Search..."
                        />
                        <button
                            type="button"
                            className="bg-[#00CF0E] p-2 w-20 rounded-full"
                        >
                            <Search className="mx-auto" color="white" />
                        </button>
                    </div>

                    
                    <select
                        name="class"
                        id="class"
                        className="border-2 rounded-full px-3 py-2 border-[#00CF0E] focus:outline-0"
                    >
                        <option value="">Select a Class</option>
                        <option value="Playgroup">Playgroup</option>
                        <option value="PP1">PP1</option>
                        <option value="PP2">PP2</option>
                    </select>

                    <select
                        name="gender"
                        id="gender"
                        className="border-2 rounded-full px-3 py-2 border-[#00CF0E] focus:outline-0"
                    >
                        <option value="">Select a Gender</option>
                        <option value="M">M</option>
                        <option value="F">F</option>
                    </select>
                </form>
            </div>
            { reconcile && <ReconcileModal reconcile={reconcile} setReconcile={setReconcile}/>}
            { term && <TermModal term={term} setTerm={setTerm}/>}
            <div className=" flex space-x-5 my-5">
                <button 
                type="button" 
                className="text-lg p-2 px-3 text-white bg-[#00cf0e] outfit rounded-xl my-5"
                onClick={()=>setReconcile(!reconcile)}>
                    Reconcile Payments
                </button>
                <button 
                type="button" 
                className="text-lg p-2 px-3 text-white bg-[#00cf0e] outfit rounded-xl my-5"
                onClick={()=>setTerm(!term)}>
                    Term Fees
                </button>
            </div>

            <div className="w-full ">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-250">
                        <thead className="p-3 text-lg montserrat text-white bg-[#00cf0e]">
                            <tr className="">
                                <th className="rounded-tl-2xl">Name</th>
                                <th className="">Balance</th>
                                <th className="">Amount</th>
                                <th className="">Phone Number</th>
                                <th className="">Class</th>
                                <th className="rounded-tr-2xl">Mpesa Code</th>
                            </tr>
                                
                        </thead>
                        <tbody className="text-center mt-2 text-lg montserrat">
                            <tr className="bg-white ">
                                <td className="rounded-bl-2xl">Name</td>
                                <td className="">Balance</td>
                                <td className="">Amount</td>
                                <td className="">Phone Number</td>
                                <td className="">
                                    Class
                                </td>
                                <th className="rounded-br-2xl">
                                    Mpesa Code
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className=" flex items-center space-x-2 mx-auto w-fit my-5">
                    <button type="button" className="w-30 rounded-2xl p-1 bg-[#00cf0e] text-white text-lg outfit" style={{'--fw':'600'}}>
                        Previous
                    </button>
                    <p className="text-lg outfit" style={{'--fw':'500'}}>
                        Page <span className="">1</span> of <span className="">1</span>
                    </p>
                    <button type="button" className="w-30 rounded-2xl p-1 bg-[#00cf0e] text-white text-lg outfit" style={{'--fw':'600'}}>
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Finance
