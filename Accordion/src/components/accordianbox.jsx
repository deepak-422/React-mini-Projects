import { useState } from "react"

export default function AccordianBox({question,answer,openID,setopenID,ID}){
    const [flag,setFlag]=useState(false)
    function handleclick(){
       if(openID==ID){
         setopenID(0);
       }
       else setopenID(ID);
    }
    
    
    return (
        <button onClick={handleclick}>
        <div className="bg-amber-700 min-h-5 w-130 h-auto text-white p-4">
           
            <div className="  flex justify-between items-center ">
                <span className="font-medium">{question}</span>
                 <img src="plus.svg" alt="image" width="25px" height="25px" className="invert" />
            </div>
            <div className="text-center">
               {openID==ID?answer:""}
            </div>
        </div>
        </button>
    )
}