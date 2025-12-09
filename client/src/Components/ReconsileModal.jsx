import { Search, X } from "lucide-react";

function ReconcileModal({reconcile, setReconcile}){
    return(
        <div className="fixed inset-0 z-20 flex justify-center items-center backdrop-blur-sm">
            
            <div className="w-[90%] max-w-200 p-6 bg-[#FFFFA3] rounded-2xl shadow-xl relative">
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl outfit" style={{ '--fw': '600' }}>
                        Reconcile Payment
                    </h3>
                    <X color="#00cf0e" className="cursor-pointer" onClick={() => setReconcile(!reconcile)} />
                </div>

                <p className="text-lg mt-4">
                    Select a fee payment and match to the respective learner, then select what the see was paid for.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 bg-white p-3 rounded-2xl my-6">
                    <div className="">
                        <div className="border-2 rounded-full p-1 border-[#00CF0E] flex flex-row items-center overflow-hidden
">
                            <input
                                type="search"
                                name="search"
                                id=""
                                className="focus:outline-0 text-lg p-2 flex-1 flex-grow min-w-0"
                                placeholder="Search for unreconciled fee"
                            />
                            <button
                                type="button"
                                className="bg-[#00CF0E] p-2 w-20 rounded-full"
                            >
                                <Search className="mx-auto" color="white" />
                            </button>
                        </div>
                        <div className="my-5">
                            <table className="w-full">
                                <thead className="w-full">
                                    <tr className="bg-[#00cf0e]">
                                        <th className="p-2 outfit text-lg text-white rounded-tl-2xl" style={{'--fw':'600'}}>Contact</th>
                                        <th className="p-2 outfit text-lg text-white" style={{'--fw':'600'}}>Code</th>
                                        <th className="p-2 outfit text-lg text-white" style={{'--fw':'600'}}>Date</th>
                                        <th className="p-2 outfit text-lg text-white rounded-tr-2xl" style={{'--fw':'600'}}>Time</th>
                                    </tr>
                                </thead>
                                <tbody className=""></tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="border-2 rounded-full p-1 border-[#00CF0E] flex flex-row items-center overflow-hidden
">
                            <input
                                type="search"
                                name="search"
                                id="search"
                                className="focus:outline-0 text-lg p-2 flex-1 flex-grow min-w-0"
                                placeholder="Search for learner"
                            />
                            <button
                                type="button"
                                className="bg-[#00CF0E] p-2 w-20 rounded-full"
                            >
                                <Search className="mx-auto" color="white" />
                            </button>
                        </div>
                        <div className="my-5">
                            <table className="w-full">
                                <thead className="w-full">
                                    <tr className="bg-[#00cf0e]">
                                        <th className="p-2 outfit text-lg text-white rounded-tl-2xl" style={{'--fw':'600'}}>Name</th>
                                        <th className="p-2 outfit text-lg text-white" style={{'--fw':'600'}}>Class</th>
                                        <th className="p-2 outfit text-lg text-white rounded-tr-2xl" style={{'--fw':'600'}}>Gender</th>
                                    </tr>
                                </thead>
                                <tbody className=""></tbody>
                            </table>
                        </div>
                    </div>
                    <div className="flex p-2 items-center justify-between w-65">
                        <p className="text-lg">
                            Paid For:
                        </p>
                        <select name="" id="" className="text-lg text-[#00cf0e] border-1 p-2 border-[#00cf0e] rounded-full">
                            <option value="" >Select Option</option>
                            <option value="">Fee</option>
                            <option value="">PTA</option>
                            <option value="">Graduation</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between items-center my-5"
                >
                    <p className="montserrat text-lg ">
                        The fee <span className="font-bold">Amount </span>
                        is to be paid to account <span className="font-bold">learner </span>
                        for <span className="font-bold">School</span>
                    </p>
                    <button type="button"
                    className="p-2 px-5 rounded-full text-lg text-white outfit bg-[#00cf0e]"
                    style={{'--fw':'600'}}>Reconcile</button>
                </div>
            </div>
        </div>
    )
}

export default ReconcileModal