import { useState } from "react"

export default function MultiAccordianBox({question,answer}){
    const [flag,setFlag]=useState(false)
    function handleclick(){
       setFlag(!flag);
    }
    return (
        <button onClick={handleclick}>
        <div className="bg-amber-700 min-h-5 w-130 h-auto text-white p-4">
           
            <div className="  flex justify-between items-center ">
                <span className="font-medium">{question}</span>
                 <img src="plus.svg" alt="image" width="25px" height="25px" className="invert" />
            </div>
            <div className="text-center">
               {flag?answer:""}
            </div>
        </div>
        </button>
    )
}