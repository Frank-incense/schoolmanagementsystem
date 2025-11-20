// correct this sidebar to take into 
import {Menu, X} from "lucide-react"

function Sidebar({choice, isSelected, isOpen, setOpen}){

    return(
        <div className="shadow-md h-fit lg:h-[98vh] ">
            <div className="w-[90%] py-5 mx-auto">
                <div className="flex w-full justify-between">
                    <h2 className="text-3xl outfit" style={{'--fw':'600'}}>Fields Of Life Education Centre</h2>
                    {
                        isOpen
                        ?<X size={32} onClick={()=>setOpen(!isOpen)}/>
                        :<Menu size={32} onClick={()=>setOpen(!isOpen)}/>
                    }
                </div>
                <div className="transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    }}>
                    {
                        isOpen && choice.map((c,i)=>{
                            return (
                                <div 
                                key={i}
                                className={
                                    c.selected
                                    ?"p-3 pl-10 rounded-2xl relative bg-[#FFFFA3]"
                                    :"p-3 pl-10 rounded-2xl relative hover:bg-[#FFFFA3]"
                                }>
                                    <div className={
                                        c.selected
                                        ?"h-7 w-1 z-1 rounded-xl absolute top-3.25 -left-0.25 bg-[#00CF0E]"
                                        :null}>
                                        </div>
                                    <p className="text-xl">{c.value}</p>
                                </div>
                            )
                        })                        
                    }    
                </div>
            </div>
            <div className="w-[90%] mx-auto md:hidden">
                {
                    choice.map((c,i)=>{
                        return (
                            <div 
                            key={i}
                            className={
                                c.selected
                                ?"p-3 pl-10 rounded-2xl relative bg-[#FFFFA3]"
                                :"p-3 pl-10 rounded-2xl relative hover:bg-[#FFFFA3]"
                            }>
                                <div className={
                                    c.selected
                                    ?"h-7 w-1 z-1 rounded-xl absolute top-3.25 -left-0.25 bg-[#00CF0E]"
                                    :null}>
                                    </div>
                                <p className="text-xl">{c.value}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Sidebar