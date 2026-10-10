
import MultiAccordianBox from "./multiAccorBox"
export default function MultiAccordion({data}){
    return (
        <div className=" flex flex-col gap-3">
            {data.map((value)=>{
                return <MultiAccordianBox key ={value.id}   question={value.question} answer={value.answer} />
            })}
        </div>
    )
}