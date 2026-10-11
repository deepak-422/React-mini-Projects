import { useState } from "react";
import { useEffect } from "react";

export default function useCurrencyinfo(cur,cur2){
    const [m,setm]=useState(null);
    const [err,seterr]=useState(null);
    
    useEffect(()=>{
        async function fetchCur(){
            try{
                const res=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${cur}.json`);
                if(!res.ok){
                    throw new Error("something went wrong");
                }
                const data=await res.json();
                setm(data[cur][cur2]);
            }
            catch(err){
                seterr(err.message);
            }
        }
        fetchCur();

    },[cur,cur2]);

    return {m,err};
}