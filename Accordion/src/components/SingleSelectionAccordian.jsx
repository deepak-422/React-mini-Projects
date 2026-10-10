import { useState } from "react"
import AccordianBox from "./accordianbox"
export default function SingleAccordion({data}){
     const [openID,setopenID]=useState(0);
    return (
        <div className=" flex flex-col gap-3">
            {data.map((value)=>{
                return <AccordianBox key ={value.id}   question={value.question} answer={value.answer} ID={value.id} openID={openID} setopenID={setopenID}/>
            })}
        </div>
    )
}