import {  useContext, useState } from "react"
import SingleAccordion from "./components/SingleSelectionAccordian"
import MultiAccordion from "./components/multiAccordion"
import DataContext from "./context/dataContext";

export default function App(){
    const [multiSelectFlag,setFlag]=useState(false);
    const data=useContext(DataContext);
    
   function handleClick(){
    setFlag(!multiSelectFlag);
   }
    return (
         <div className="flex justify-center  flex-col items-center m-20">
           <button  className="bg-amber-800 text-white font-semibold rounded-md p-3 m-4" onClick={handleClick}>{multiSelectFlag?"Enable Single Selection":"Enable Multi Selection"}</button>
           {multiSelectFlag?<MultiAccordion data={data}/> : <SingleAccordion data={data}/>}
         </div>
    )
}