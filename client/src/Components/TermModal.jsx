import { X } from "lucide-react"

function TermModal({term, setTerm}){
    return(
        <div className="fixed inset-0 z-20 flex justify-center items-center backdrop-blur-sm">
            
            <div className="w-[90%] max-w-130 p-6 bg rounded-2xl shadow-xl relative">
                <div className="flex justify-between items-center">
                    <h3 className="text-2xl outfit" style={{ '--fw': '600' }}>
                        Term Fees
                    </h3>
                    <X color="#00cf0e" className="cursor-pointer" onClick={() => setTerm(!term)} />
                </div>
                
                <div className="">
                    
                </div>
            </div>
        
        </div>
    )
}

export default TermModal