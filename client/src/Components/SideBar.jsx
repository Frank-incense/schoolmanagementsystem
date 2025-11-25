// correct this sidebar to take into 
import {Menu, X} from "lucide-react"
import { Link } from "react-router"

function Sidebar({choice, isSelected, isOpen, setOpen}){

    return(
        <div className="shadow-md h-fit lg:h-[98vh] ">
            <div className="w-[90%] py-5 mx-auto">
                <div className="flex w-full justify-between">
                    <h2 className="text-3xl outfit" style={{'--fw':'600'}}>Fields Of Life Education Centre</h2>
                    {
                        isOpen
                        ?<X className="md:hidden" size={32} onClick={()=>setOpen(!isOpen)}/>
                        :<Menu className="md:hidden" size={32} onClick={()=>setOpen(!isOpen)}/>
                    }
                </div>
                <div className="md:hidden transition-all duration-500 ease-in-out"
                style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    }}>
                    {
                        isOpen && choice.map((c,i)=>{
                            
                            return (
                                <Link to={`/${c.route}`}>
                                    <div 
                                    key={i}
                                    className={
                                        c.selected
                                        ?"p-3 pl-10 rounded-2xl relative bg-[#FFFFA3]"
                                        :"p-3 pl-10 rounded-2xl relative hover:bg-[#FFFFA3]"
                                    }
                                    onClick={()=>isSelected(choice.map((ch)=>{
                                        if (ch.value === c.value){
                                            ch.selected = true
                                        }
                                        else{
                                            ch.selected = false
                                        }
                                        return ch
                                    }))}>
                                        
                                        <div className={
                                            c.selected
                                            ?"h-7 w-1 z-1 rounded-xl absolute top-3.25 -left-0.25 bg-[#00CF0E]"
                                            :null}>
                                            </div>
                                        <p className="text-xl">{c.value}</p>
                                    
                                    </div>
                                </Link>
                            )
                        })                        
                    }    
                </div>
            </div>
            <div className="w-[90%] mx-auto hidden md:block">
                {
                    choice.map((c,i)=>{
                        return (
                            <Link to={`/${c.route}`}>
                                <div 
                                key={i}
                                className={
                                    c.selected
                                    ?"p-3 pl-10 rounded-2xl relative bg-[#FFFFA3]"
                                    :"p-3 pl-10 rounded-2xl relative hover:bg-[#FFFFA3]"
                                }
                                onClick={()=>isSelected(choice.map((ch)=>{
                                    if (ch.value === c.value){
                                        ch.selected = true
                                    }
                                    else{
                                        ch.selected = false
                                    }
                                    return ch
                                }))}>
                                    
                                    <div className={
                                        c.selected
                                        ?"h-7 w-1 z-1 rounded-xl absolute top-3.25 -left-0.25 bg-[#00CF0E]"
                                        :null}>
                                        </div>
                                    <p className="text-xl">{c.value}</p>
                                    
                                </div>
                            </Link>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Sidebar