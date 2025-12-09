import { X } from "lucide-react"

function StudentModal({ open, setOpen, action }) {
    if (!open) return null
    console.log(action)
    return (
        <div className="fixed inset-0 z-20 flex justify-center items-center backdrop-blur-sm">
            
            <div className="w-[90%] max-w-lg p-6 bg-[#FFFFA3] rounded-xl shadow-xl relative">
                <div className="flex justify-between items-center">
                    <h3 className="text-xl outfit" style={{ '--fw': '600' }}>
                        New learner
                    </h3>
                    <X color="#00cf0e" className="cursor-pointer" onClick={() => setOpen(false)} />
                </div>

                <form className="my-4">
                    
                    <div>
                        <label htmlFor="name" className="montserrat">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="px-2 py-1 focus:outline-0 w-full text-lg rounded-lg bg-white"
                        />
                    </div>

                    
                    <div className="mt-5">
                        <label htmlFor="contact" className="montserrat">Contact</label>
                        <input
                            type="tel"
                            name="contact"
                            id="contact"
                            className="px-2 py-1 focus:outline-0 w-full text-lg rounded-lg bg-white"
                        />
                    </div>

                
                    <div className="mt-5">
                        <label htmlFor="parent" className="montserrat">Parent Name</label>
                        <input
                            type="text"
                            name="parent"
                            id="parent"
                            className="px-2 py-1 focus:outline-0 w-full text-lg rounded-lg bg-white"
                        />
                    </div>

                    
                    <div className="relative w-full border p-5 mt-5 rounded-xl border-[#00cf0e]">
                        <p className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-2 bg-[#FFFFA3]">
                            Select Option
                        </p>

                        <div className="grid grid-cols-2 gap-5">
                            <select className="bg-white p-2 rounded-full focus:outline-[#00cf0e]">
                                <option value="">Select a Class</option>
                            </select>


                            <div>
                                <p className="">Gender</p>
                                <div className="flex space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" id="male" />
                                        <span>Male</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <input type="radio" name="gender" id="female" />
                                        <span>Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <button
                        type="submit"
                        className="w-full p-2 text-lg text-white bg-[#00cf0e] mt-5 rounded-xl outfit"
                        style={{ '--fw': '600' }}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default StudentModal
