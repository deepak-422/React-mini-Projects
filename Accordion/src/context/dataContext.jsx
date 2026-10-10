import { createContext } from "react";

const DataContext=createContext();

export function DataProvider({children}){

    const data=[
    {
        id:'1',
        question:"What are accordion components?",
        answer:"Accordion components are user interface elements used for organising and presenting content in collapsible manner.They typically consist of a header, content and an expand/collapse action."
    },
    {
        id:'2',
        question:"What are they used for?",
        answer:"They are commonly employed in various contexts, including  FAQs, products, navigations menus, settings panels and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options"
    },
    {
        id:'3',
        question:"Accordion as a musical instrument",
        answer:"The accrodion is a musical instrument with a keyboard and bellows.It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
    },
    {
        id:'4',
        question:"Can i create an accordion components with different framewrok",
        answer:"yes of course,i it is very possible to create an accordion accrodion is a musical instrument with a keyboard and bellows.It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres."
    }
    

]
    return (
        <DataContext.Provider value={data}>
             {children}
        </DataContext.Provider>
    )

}
export default DataContext;