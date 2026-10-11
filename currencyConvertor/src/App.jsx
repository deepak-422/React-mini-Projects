import CurrencyBox from "./components/currencybox";
import {  useState } from "react";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

export default function App() {
   const [opt1,setopt1]=useState("usd");
    const [opt2,setopt2]=useState("inr");
    const [amt,setamt]=useState(0);
    const [res,setres]=useState(0);
    const {m,err}=useCurrencyinfo(opt1,opt2);
    function handleclick(){
        if(err){
          setres(err);
          return;
        }
        setres(m*amt);
    }
    function handleswap(){
       let temp=opt1;
       setopt1(opt2);
       setopt2(temp);
    }
    
   
  document.body.style.backgroundImage = "url(./backgroundcurrency.jpg)";
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className=" h-100 w-140 backdrop-blur-2xl  flex flex-col justify-center items-center rounded-md gap-4">
          <CurrencyBox  variable="FROM" amt={amt} opt={opt1} setopt={setopt1} setamt={setamt}/>
          <button className="bg-blue-600 text-white text-sm font-normal rounded text-center p-2 absolute top-[149px] left-[260px] hover:bg-blue-500" onClick={handleswap}>SWAP</button>
          <CurrencyBox variable="To" amt={res} opt={opt2} setopt={setopt2} setamt={setres}/>
          <button className="bg-blue-600 text-white text-xl font-normal rounded-md w-120 h-12 text-center hover:bg-blue-500" onClick={handleclick}>Convert {opt1.toUpperCase()} TO {opt2.toUpperCase()} </button>
        </div>
      </div>
    </>
  );
}
